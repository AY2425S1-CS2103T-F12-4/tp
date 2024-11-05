---
layout: default.md
title: "Developer Guide"
pageNav: 3
---

# VBook Developer Guide

<!-- * Table of Contents -->
<page-nav-print />

--------------------------------------------------------------------------------------------------------------------

## **Acknowledgements**

_{ list here sources of all reused/adapted ideas, code, documentation, and third-party libraries -- include links to the original source as well }_

--------------------------------------------------------------------------------------------------------------------

## **Setting up, getting started**

Refer to the guide [_Setting up and getting started_](SettingUp.md).

--------------------------------------------------------------------------------------------------------------------

## **Design**

### Architecture

<puml src="diagrams/ArchitectureDiagram.puml" width="280"></puml>

The ***Architecture Diagram*** given above explains the high-level design of the App.

Given below is a quick overview of main components and how they interact with each other.

**Main components of the architecture**

**`Main`** (consisting of classes [`Main`](https://github.com/se-edu/addressbook-level3/tree/master/src/main/java/seedu/address/Main.java) and [`MainApp`](https://github.com/se-edu/addressbook-level3/tree/master/src/main/java/seedu/address/MainApp.java)) is in charge of the app launch and shut down.
* At app launch, it initializes the other components in the correct sequence, and connects them up with each other.
* At shut down, it shuts down the other components and invokes cleanup methods where necessary.

The bulk of the app's work is done by the following four components:

* [**`UI`**](#ui-component): The UI of the App.
* [**`Logic`**](#logic-component): The command executor.
* [**`Model`**](#model-component): Holds the data of the App in memory.
* [**`Storage`**](#storage-component): Reads data from, and writes data to, the hard disk.

[**`Commons`**](#common-classes) represents a collection of classes used by multiple other components.

**How the architecture components interact with each other**

The *Sequence Diagram* below shows how the components interact with each other for the scenario where the user issues the command `:remove 1`.

<puml src="diagrams/ArchitectureSequenceDiagram.puml" width="574" />

Each of the four main components (also shown in the diagram above),

* defines its *API* in an `interface` with the same name as the Component.
* implements its functionality using a concrete `{Component Name}Manager` class (which follows the corresponding API `interface` mentioned in the previous point.

For example, the `Logic` component defines its API in the `Logic.java` interface and implements its functionality using the `LogicManager.java` class which follows the `Logic` interface. Other components interact with a given component through its interface rather than the concrete class (reason: to prevent outside component's being coupled to the implementation of a component), as illustrated in the (partial) class diagram below.

<puml src="diagrams/ComponentManagers.puml" width="300" />

The sections below give more details of each component.

### UI component

The **API** of this component is specified in [`Ui.java`](https://github.com/se-edu/addressbook-level3/tree/master/src/main/java/seedu/address/ui/Ui.java)

<puml src="diagrams/UiClassDiagram.puml" alt="Structure of the UI Component"/>

The UI consists of a `MainWindow` that is made up of parts e.g.`CommandBox`, `ResultDisplay`, `PersonListPanel`, `StatusBarFooter` etc. All these, including the `MainWindow`, inherit from the abstract `UiPart` class which captures the commonalities between classes that represent parts of the visible GUI.

The `UI` component uses the JavaFx UI framework. The layout of these UI parts are defined in matching `.fxml` files that are in the `src/main/resources/view` folder. For example, the layout of the [`MainWindow`](https://github.com/se-edu/addressbook-level3/tree/master/src/main/java/seedu/address/ui/MainWindow.java) is specified in [`MainWindow.fxml`](https://github.com/se-edu/addressbook-level3/tree/master/src/main/resources/view/MainWindow.fxml)

The `UI` component,

* executes user commands using the `Logic` component.
* listens for changes to `Model` data so that the UI can be updated with the modified data.
* keeps a reference to the `Logic` component, because the `UI` relies on the `Logic` to execute commands.
* depends on some classes in the `Model` component, as it displays `Person` object residing in the `Model`.

### Logic component

**API** : [`Logic.java`](https://github.com/se-edu/addressbook-level3/tree/master/src/main/java/seedu/address/logic/Logic.java)

Here's a (partial) class diagram of the `Logic` component:

<puml src="diagrams/LogicClassDiagram.puml" width="550"/>

The sequence diagram below illustrates the interactions within the `Logic` component, taking `execute(":remove 1")` API call as an example.

<puml src="diagrams/DeleteSequenceDiagram-Logic.puml" alt="Interactions Inside the Logic Component for the `:remove 1` Command" />

<box type="info" seamless>

**Note:** The lifeline for `DeleteCommandParser` should end at the destroy marker (X) but due to a limitation of PlantUML, the lifeline continues till the end of diagram.
</box>

How the `Logic` component works:

1. When `Logic` is called upon to execute a command, it is passed to an `AddressBookParser` object which in turn creates a parser that matches the command (e.g., `DeleteCommandParser`) and uses it to parse the command.
1. This results in a `Command` object (more precisely, an object of one of its subclasses e.g., `DeleteCommand`) which is executed by the `LogicManager`.
1. The command can communicate with the `Model` when it is executed (e.g. to delete a person).<br>
   Note that although this is shown as a single step in the diagram above (for simplicity), in the code it can take several interactions (between the command object and the `Model`) to achieve.
1. The result of the command execution is encapsulated as a `CommandResult` object which is returned back from `Logic`.

Here are the other classes in `Logic` (omitted from the class diagram above) that are used for parsing a user command:

<puml src="diagrams/ParserClasses.puml" width="600"/>

How the parsing works:
* When called upon to parse a user command, the `AddressBookParser` class creates an `XYZCommandParser` (`XYZ` is a placeholder for the specific command name e.g., `AddCommandParser`) which uses the other classes shown above to parse the user command and create a `XYZCommand` object (e.g., `AddCommand`) which the `AddressBookParser` returns back as a `Command` object.
* All `XYZCommandParser` classes (e.g., `AddCommandParser`, `DeleteCommandParser`, ...) inherit from the `Parser` interface so that they can be treated similarly where possible e.g, during testing.

### Model component
**API** : [`Model.java`](https://github.com/se-edu/addressbook-level3/tree/master/src/main/java/seedu/address/model/Model.java)

<puml src="diagrams/ModelClassDiagram.puml" width="450" />


The `Model` component,

* stores the address book data i.e., all `Person` objects (which are contained in a `UniquePersonList` object).
* stores the currently 'selected' `Person` objects (e.g., results of a search query) as a separate _filtered_ list which is exposed to outsiders as an unmodifiable `ObservableList<Person>` that can be 'observed' e.g. the UI can be bound to this list so that the UI automatically updates when the data in the list change.
* stores a `UserPref` object that represents the user’s preferences. This is exposed to the outside as a `ReadOnlyUserPref` objects.
* does not depend on any of the other three components (as the `Model` represents data entities of the domain, they should make sense on their own without depending on other components)

<box type="info" seamless>

**Note:** An alternative (arguably, a more OOP) model is given below. It has a `Tag` list in the `AddressBook`, which `Person` references. This allows `AddressBook` to only require one `Tag` object per unique tag, instead of each `Person` needing their own `Tag` objects.<br>

<puml src="diagrams/BetterModelClassDiagram.puml" width="450" />

</box>


### Storage component

**API** : [`Storage.java`](https://github.com/se-edu/addressbook-level3/tree/master/src/main/java/seedu/address/storage/Storage.java)

<puml src="diagrams/StorageClassDiagram.puml" width="550" />

The `Storage` component,
* can save both address book data and user preference data in JSON format, and read them back into corresponding objects.
* inherits from both `AddressBookStorage` and `UserPrefStorage`, which means it can be treated as either one (if only the functionality of only one is needed).
* depends on some classes in the `Model` component (because the `Storage` component's job is to save/retrieve objects that belong to the `Model`)

### Common classes

Classes used by multiple components are in the `seedu.address.commons` package.

--------------------------------------------------------------------------------------------------------------------

## **Implementation**

This section describes some noteworthy details on how certain features are implemented.

### Undo/redo feature

#### Implementation

The undo/redo mechanism is facilitated by `VersionedAddressBook`. It extends `AddressBook` with an undo/redo history, stored internally as an `addressBookStateList` and `currentStatePointer`. Additionally, it implements the following operations:

* `VersionedAddressBook#commit()` — Saves the current address book state in its history.
* `VersionedAddressBook#undo()` — Restores the previous address book state from its history.
* `VersionedAddressBook#redo()` — Restores a previously undone address book state from its history.

These operations are exposed in the `Model` interface as `Model#commitAddressBook()`, `Model#undoAddressBook()` and `Model#redoAddressBook()` respectively.

Given below is an example usage scenario and how the undo/redo mechanism behaves at each step.

Step 1. The user launches the application for the first time. The `VersionedAddressBook` will be initialized with the initial address book state, and the `currentStatePointer` pointing to that single address book state.

<puml src="diagrams/UndoRedoState0.puml" alt="UndoRedoState0" />

Step 2. The user executes `:remove 5` command to add the 5th person in the address book. The `:remove` command calls `Model#commitAddressBook()`, causing the modified state of the address book after the `:remove 5` command executes to be saved in the `addressBookStateList`, and the `currentStatePointer` is shifted to the newly inserted address book state.

<puml src="diagrams/UndoRedoState1.puml" alt="UndoRedoState1" />

Step 3. The user executes `add -n David …​` to add a new person. The `:add` command also calls `Model#commitAddressBook()`, causing another modified address book state to be saved into the `addressBookStateList`.

<puml src="diagrams/UndoRedoState2.puml" alt="UndoRedoState2" />

<box type="info" seamless>

**Note:** If a command fails its execution, it will not call `Model#commitAddressBook()`, so the address book state will not be saved into the `addressBookStateList`.

</box>

Step 4. The user now decides that adding the person was a mistake, and decides to undo that action by executing the `:undo` command. The `:undo` command will call `Model#undoAddressBook()`, which will shift the `currentStatePointer` once to the left, pointing it to the previous address book state, and restores the address book to that state.

<puml src="diagrams/UndoRedoState3.puml" alt="UndoRedoState3" />


<box type="info" seamless>

**Note:** If the `currentStatePointer` is at index 0, pointing to the initial AddressBook state, then there are no previous AddressBook states to restore. The `:undo` command uses `Model#canUndoAddressBook()` to check if this is the case. If so, it will return an error to the user rather
than attempting to perform the undo.

</box>

The following sequence diagram shows how an undo operation goes through the `Logic` component:

<puml src="diagrams/UndoSequenceDiagram-Logic.puml" alt="UndoSequenceDiagram-Logic"></puml>

<box type="info" seamless>

**Note:** The lifeline for `UndoCommand` should end at the destroy marker (X) but due to a limitation of PlantUML, the lifeline reaches the end of diagram.

</box>

Similarly, how an undo operation goes through the `Model` component is shown below:

<puml src="diagrams/UndoSequenceDiagram-Model.puml" alt="UndoSequenceDiagram-Model" />

The `redo` command does the opposite — it calls `Model#redoAddressBook()`, which shifts the `currentStatePointer` once to the right, pointing to the previously undone state, and restores the address book to that state.

<box type="info" seamless>

**Note:** If the `currentStatePointer` is at index `addressBookStateList.size() - 1`, pointing to the latest address book state, then there are no undone AddressBook states to restore. The `redo` command uses `Model#canRedoAddressBook()` to check if this is the case. If so, it will return an error to the user rather than attempting to perform the redo.

</box>

Step 5. The user then decides to execute the command `:list`. Commands that do not modify the address book, such as `:list`, will usually not call `Model#commitAddressBook()`, `Model#undoAddressBook()` or `Model#redoAddressBook()`. Thus, the `addressBookStateList` remains unchanged.

<puml src="diagrams/UndoRedoState4.puml" alt="UndoRedoState4" />

Step 6. The user executes `clear`, which calls `Model#commitAddressBook()`. Since the `currentStatePointer` is not pointing at the end of the `addressBookStateList`, all address book states after the `currentStatePointer` will be purged. Reason: It no longer makes sense to redo the `:add -n David …​` command. This is the behavior that most modern desktop applications follow.

<puml src="diagrams/UndoRedoState5.puml" alt="UndoRedoState5" />

The following activity diagram summarizes what happens when a user executes a new command:

<puml src="diagrams/CommitActivityDiagram.puml" width="250" />

#### Design considerations:

**Aspect: How undo & redo executes:**

* **Alternative 1 (current choice):** Saves the entire address book.
    * Pros: Easy to implement.
    * Cons: May have performance issues in terms of memory usage.

* **Alternative 2:** Individual command knows how to undo/redo by
  itself.
    * Pros: Will use less memory (e.g. for `:remove`, just save the person being deleted).
    * Cons: We must ensure that the implementation of each individual command are correct.

### Delete Feature

#### Implementation
The Delete feature allows deletion of a person from the address book. The user can delete a person by specifying the index of the person to delete. The user can also delete multiple persons by specifying multiple indexes of the persons to delete.

How the Delete Feature `:remove -i INDEX1, INDEX2...` works:

The `DeleteCommand` class has a method `DeleteCommand#execute(Model model)` that calls the ModelManager.\
The `ModelManager` class has a method `ModelManager#deletePerson(Person target)` that calls the `AddressBook` class.\
The `AddressBook` class has a method `AddressBook#removePerson(Person key)` that removes a person from the UniquePersonList field `persons` in the `AddressBook` class.


The following class diagram shows the relationships between the classes involved in the delete feature:
<puml src="diagrams/DeleteClassDiagram.puml" />

The following sequence diagram shows how a delete operation goes through the `Logic` component:

<puml src="diagrams/DeleteMultipleSequenceDiagram-Logic.puml" alt="Interactions Inside the Logic Component for the `:remove 1, 2, 3` Command" />

Similarly, how a delete operation goes through the `Model` component is shown below:

<puml src="diagrams/DeleteSequenceDiagram-Model.puml" alt="DeleteSequenceDiagram-Model" />

The following activity diagram summarizes what happens when a user executes a new command:
<puml src="diagrams/DeleteActivityDiagram.puml" />

**Design considerations:**

**Aspect: How delete executes:**

* **Alternative 1 (current choice):** Deletes the person by index.
    * Pros: Easy to implement.
    * Cons: Requires the user to know the index of the person to delete.

* **Alternative 2:** Deletes the person by name.
    * Pros: More user-friendly as the user can specify the name.
    * Cons: Requires additional logic to handle duplicate names.

### Export Feature
#### Implementation

The `ExportCommand` class is responsible for exporting address book data to a user-specified location in `JSON` format. It provides flexibility in its usage by allowing a destination to be selected via a file chooser or by setting a predetermined destination file, which is particularly useful for testing purposes. The data to be exported is encrypted, and the `ExportCommand` handles decryption, export location selection, and file I/O operations. The following outlines its components and workflow.


The `ExportCommand` class facilitates this export functionality and manages file I/O operations in a structured, asynchronous workflow.

Constructor Variants:

- `ExportCommand()`: The default constructor for regular use, opening a file chooser dialog to select the export destination.
- `ExportCommand(File destinationFile, File sourceFile, String keyPath)`: An overloaded constructor that allows specifying a destination file and encryption key path directly, which is particularly useful for testing.

Attributes:

- `destinationFile`: The file chosen or set as the target for the export.
- `sourceFile`: A temporary file that holds the JSON data to be exported.
- `keyPath`: The path to the decryption key required for decrypting the address book data.

Given below is an example usage scenario and how the export process behaves at each step.

Step 1. The user initiates an export by executing `:export`. The `ExportCommand` will attempt to decrypt the data 
before exporting it.

Step 2. The `execute(Model model)` method reads encrypted data from the `sourceFile`, decrypting it with
`EncryptionManager.decrypt()` using the provided `keyPath`. The decrypted data is written to a temporary file `addressbook.json`.

Step 3. If `destinationFile` is not set, `ExportCommand` invokes `chooseExportLocation(Stage stage)`, which displays
a file chooser dialog for the user to select an export location. If the user cancels this dialog, the export process
is aborted with an error message.

Step 4. The `performExport(File sourceFile, File destinationFile)` method copies the decrypted data to the specified `destinationFile`, using `Files.copy()` with `StandardCopyOption.REPLACE_EXISTING` to overwrite any existing file. The temporary file is then deleted.

Note: The `performExport` method is asynchronous, leveraging `CompletableFuture` to manage successful completion or error handling, ensuring smooth performance without blocking the main application thread.

The following sequence diagram explains how the export operation works:

<puml src="diagrams/ExportSequenceDiagram.puml" alt="ExportSequenceDiagram"/>

**Design Considerations:**

**Aspect: Export Execution and Destination Selection**

**Alternative 1 (current choice)**: Use a file chooser dialog to allow the user to select the export location.

- Pros: User-friendly, provides flexibility in specifying the export location.
- Cons: Requires user interaction, which may be cumbersome for repeated exports.


**Alternative 2**: Set a default export location without user input.

- Pros: Streamlined and faster for frequent exports.
- Cons: Less flexible, as it may overwrite existing files without warning.

### Encryption Feature

#### Implementation

The encryption mechanism is managed by the `EncryptionManager` class. This component is responsible for securely encrypting and decrypting sensitive data using the AES (Advanced Encryption Standard) algorithm. The `EncryptionManager` performs encryption and decryption with a secret key, which is securely loaded and stored using Java's Key Store API. The implementation details are as follows:

#### Methods Overview

1. **`encrypt(String data, String keyPath)`**:
    - Encrypts plain text data using the AES algorithm.
    - Takes the path to the key store as an argument (defaulting to `vbook.jks` if not provided).
    - Returns a byte array containing the encrypted data.

2. **`decrypt(byte[] data, String keyPath)`**:
    - Decrypts the given encrypted byte array back into plain text.
    - Also takes the path to the key store as an argument (defaulting to `vbook.jks` if not provided).
    - Returns the decrypted string.

3. **`generateKey(String keyPath)`**:
    - Generates a new AES secret key and stores it in a local key store file.
    - If the key store already exists, it does not overwrite it but notifies that the alias already exists.
    - Saves the generated key under the alias `vbook-encryption`.

4. **`getKey(String keyPath)`**:
    - Retrieves the AES secret key from the specified key store.
    - If the key store does not exist, it calls `generateKey()` to create one.
    - Returns the retrieved secret key.

#### Usage in Application

- The `EncryptionManager` is used in the `ExportCommand` to decrypt data before exporting it and in `JsonAddressBookStorage` to encrypt data before writing it to a file.

#### Usage

```java
// Encryption
String jsonData = JsonUtil.toJsonString(new JsonSerializableAddressBook(addressBook));
byte[] encryptedData = EncryptionManager.encrypt(jsonData, this.keyPath);

// Decryption
jsonData = EncryptionManager.decrypt(encryptedData, this.keyPath);
```
#### Example Usage Scenario

Step 1. The user initially adds a new contact in the address book. The `EncryptionManager` uses the AES algorithm and the secret key to encrypt the information before saving it.

Step 2. The encrypted data is stored securely. When needed, the user can request to decrypt the information.

Step 3. The `EncryptionManager` decrypts the data using the same AES algorithm and the secret key, ensuring that the information is securely handled at all times.

<box type="info" seamless>

**Note:** If an error occurs during encryption or decryption (e.g., if the secret key is invalid or corrupted), the `EncryptionManager` will handle the error gracefully and return an appropriate error message.

</box>

The following sequence diagram shows how the encryption process works:

<puml src="diagrams/EncryptionSequenceDiagram.puml" alt="EncryptionSequenceDiagram" />

<box type="info" seamless>

**Note:** The sequence diagram simplifies the encryption and decryption processes to focus on the main interactions between components.

</box>

#### Design Considerations for Encryption Feature

##### Core Limitation

1. **Risk of Local KeyStore Exposure**:
    - If a hacker gains access to the JKS file containing the encryption keys, they could decrypt sensitive data. This represents a fundamental limitation of local storage, as the security of the keys relies on the local file system's security.

2. **Alternative Storage Locations**:
    - Storing the JKS file in the `JAVA_HOME/lib/security/cacerts` directory is an option, but this depends on the user’s configuration and permissions. Users might not have their `JAVA_HOME` path set correctly, which can lead to access issues.

3. **Security Through Obscurity**:
    - While relying on obscurity—such as using less common paths for the JKS file—can add a layer of security, it should not be the sole defense mechanism. Obscurity alone does not adequately protect against determined attacks.

##### Compromise Between Security and User Experience
- **User Experience Considerations**:
    - As a local application, vBook prioritizes convenience, which may lead users to prefer simpler access to their data over maximum security. Finding a balance between security and usability is crucial.
    - Given that vBook handles contact data, adequate security measures must be in place while ensuring users are not overwhelmed by complex key management.

### Password Management Feature

#### Implementation

The password management mechanism is handled by the `PasswordManager` class. This component is responsible for securely hashing and verifying user passwords using the PBKDF2 (Password-Based Key Derivation Function 2) algorithm with HMAC-SHA1. The `PasswordManager` ensures that passwords are safely stored in a local text file, employing a salting strategy to enhance security. The implementation details are as follows:

#### Methods Overview

1. **`readPassword(String path)`**:
    - Reads the stored hashed password from the specified file (defaulting to `password.txt`).
    - Returns the hashed password as a string or `null` if the file does not exist.

2. **`savePassword(String password, String path)`**:
    - Accepts a plaintext password, generates a salt, hashes the password using PBKDF2, and saves the resulting hash and salt to the specified file (default: `password.txt`).
    - Creates the file if it does not already exist.

3. **`isPasswordCorrect(String inputPassword, String path)`**:
    - Compares the input plaintext password against the stored hashed password.
    - Reads the stored hash and salt, hashes the input password, and returns `true` if they match or `false` otherwise.

4. **`hashPassword(String password, byte[] salt)`**:
    - Hashes the provided password using the specified salt with PBKDF2 and returns a string containing both the salt and hash encoded in Base64.

5. **`generateSalt()`**:
    - Generates a secure random salt using `SecureRandom` for use in password hashing.

#### Usage in Application

- The `PasswordManager` is invoked during application startup to check for an existing password file.
    - If the file is absent, the user is prompted to create a new password.
    - On subsequent starts, the user must input their original password for verification before proceeding.

#### Usage

```java
// Saving a new password on initial startup
if (PasswordManager.readPassword(null) == null) {
    String newPassword = scanner.nextLine();
    PasswordManager.savePassword(newPassword, null);
}

// Verifying the password on subsequent starts
String inputPassword = scanner.nextLine();
if (PasswordManager.isPasswordCorrect(inputPassword, null)) {
    // Handle correct password
} else {
   // Handle wrong password
}
```

#### Example Usage Scenario

Step 1. On the initial startup of the application, the `PasswordManager` checks for the existence of the `password.txt` file. If the file is not found, the user is prompted to enter a new password.

Step 2. The entered password is hashed and saved securely, along with a generated salt.

Step 3. On subsequent startups, the user is prompted to input their original password. The `PasswordManager` verifies the input against the stored hash and salt, granting access if the password matches.

<box type="info" seamless>

**Note:** If an error occurs during password hashing or verification (e.g., if the stored format is incorrect), the `PasswordManager` will handle the error gracefully and provide an appropriate error message.

</box>

The following sequence diagram illustrates how the password management process operates:

<puml src="diagrams/PasswordManagementActivityDiagram.puml" alt="PasswordManagementActivityDiagram" />

<box type="info" seamless>

**Note:** The activity diagram simplifies the password management processes to highlight the flow for user authentication.

</box>

### Design Considerations for Password Management Feature

#### Core Limitations

- **Risk of Local File Exposure**:
    - If an attacker gains access to the `password.txt` file, they could potentially compromise user accounts. This poses a fundamental risk of local file storage, as the security of the password relies on the protection of the local file system.
    - May consider setting a retry limit.

## **Documentation, logging, testing, configuration, dev-ops**

* [Documentation guide](Documentation.md)
* [Testing guide](Testing.md)
* [Logging guide](Logging.md)
* [Configuration guide](Configuration.md)
* [DevOps guide](DevOps.md)

--------------------------------------------------------------------------------------------------------------------

## **Appendix: Requirements**

### Product scope

**Target user profile**:

* has a need to manage a significant number of contacts
* prefer desktop apps over other types
* can type fast
* value privacy and self-hosting
* prefers typing to mouse interactions
* is reasonably comfortable using CLI apps

**Value proposition**: manage contacts faster than a typical mouse/GUI driven app


### User stories

| Priority | As a …​                                    | I want to …​                                                     | So that I can…​                                                           |
|----------|--------------------------------------------|------------------------------------------------------------------|---------------------------------------------------------------------------|
| `* * *`  | first-time user                            | add contacts to my contact book                                  | store my contacts                                                         |
| `* * *`  | user                                       | add contacts to my contact book using only partial details       | store contacts that I may not have full information about                 |
| `* * *`  | user                                       | see all my contacts                                              | see and manage my contacts                                                |
| `* * *`  | user                                       | delete contacts                                                  | remove contacts I do not need anymore                                     |
| `* *`    | first-time user                            | see sample contacts                                              | explore the app's features without adding real data                       |
| `* *`    | first-time user                            | clear sample data and start fresh                                | input my real contacts securely                                           |
| `* *`    | first-time user                            | view a tutorial on the app                                       | learn how to use the app quickly                                          |
| `* *`    | first-time user                            | quickly access a CLI command cheat sheet                         | learn essential commands without slowing down                             |
| `* *`    | new user                                   | secure my contact data with a password                           | feel confident that my client information is protected                    |
| `* *`    | new user                                   | choose to encrypt the contact data that is stored                | ensure my client information cannot be accessed from the storage location |
| `* *`    | new and inexperienced user                 | undo actions like deletions (CTRL+Z)                             | recover data quickly if I make a mistake                                  |
| `* *`    | new and inexperienced user                 | be prompted with why an invalid command is invalid               | receive immediate and specific feedback if I type an invalid command      |
| `* *`    | new user                                   | open up a settings menu                                          | configure keyboard shortcuts                                              |
| `* *`    | returning user                             | search contacts using partial details (name, email)              | find relevant contacts faster                                             |
| `* *`    | user                                       | edit contact details                                             | avoid errors when updating information                                    |
| `* *`    | user whose contacts span multiple projects | tag contacts with a project or organisation name                 | organise my contacts better                                               |
| `* *`    | user                                       | filter contacts by project or organisation                       | quickly locate clients related to specific tasks                          |
| `* *`    | experienced user                           | use keyboard shortcuts to bring up the CLI                       | execute commands faster                                                   |
| `* *`    | experienced user                           | use keyboard shortcuts to manage contacts                        | manage my contacts faster                                                 |
| `* *`    | new user                                   | import contacts from a CSV or another format (e.g. Apple's .vcf) | quickly populate my contact book without manual entry                     |
| `*`      | returning user                             | customise the app's theme                                        | make my user experience more personalised as I use the app more           |
| `*`      | user                                       | multi-select contacts for deletion                               | manage my list more efficiently                                           |
| `*`      | frequent user                              | navigate command history with arrow keys                         | quickly fill the search field and modify and execute previous commands    |
| `*`      | power user                                 | export my contact list to CSV or JSON format                     | use it in other tools or projects                                         |
| `*`      | programmer                                 | configure my shortcuts to be similar to my IDE shortcuts         | switch between my IDE and CipherContacts more effectively                 |
| `*`      | frequent user                              | pin important contacts                                           | have them appear at the top of my list for easy access                    |
| `*`      | long time user                             | archive old contacts                                             | clean up my contact book without having to delete contacts                |                                          |

### Use cases

(For all use cases below, the **System** is the `AddressBook` and the **Actor** is the `user`, unless specified otherwise)

**Use case: Delete a person**

**MSS**

1.  User requests to list persons
2.  AddressBook shows a list of persons
3.  User requests to delete a specific person in the list
4.  AddressBook deletes the person

    Use case ends.

**Extensions**

* 2a. The list is empty.

  Use case ends.

* 3a. The given index is invalid.

    * 3a1. AddressBook shows an error message.

      Use case resumes at step 2.

*{More to be added}*

### Non-Functional Requirements

1.  Should work on any _mainstream OS_ as long as it has Java `17` or above installed.
2.  Should be able to hold up to 1000 persons without a noticeable sluggishness in performance for typical usage.
3.  A user with above average typing speed for regular English text (i.e. not code, not system admin commands) should be able to accomplish most of the tasks faster using commands than using the mouse.

*{More to be added}*

### Glossary

* **Mainstream OS**: Windows, Linux, Unix, MacOS
* **Private contact detail**: A contact detail that is not meant to be shared with others

--------------------------------------------------------------------------------------------------------------------

## **Appendix: Instructions for manual testing**

Given below are instructions to test the app manually.

<box type="info" seamless>

**Note:** These instructions only provide a starting point for testers to work on;
testers are expected to do more *exploratory* testing.

</box>

### Launch and shutdown

1. Initial launch

    1. Download the jar file and copy into an empty folder

    1. Double-click the jar file Expected: Shows the GUI with a set of sample contacts. The window size may not be optimum.

1. Saving window preferences

    1. Resize the window to an optimum size. Move the window to a different location. Close the window.

    1. Re-launch the app by double-clicking the jar file.<br>
       Expected: The most recent window size and location is retained.

1. _{ more test cases …​ }_

### Deleting a person

1. Deleting a person while all persons are being shown

    1. Prerequisites: List all persons using the `:list` command. Multiple persons in the list.

    1. Test case: `:remove 1`<br>
       Expected: First contact is deleted from the list. Details of the deleted contact shown in the status message. Timestamp in the status bar is updated.

    1. Test case: `:remove 0`<br>
       Expected: No person is deleted. Error details shown in the status message. Status bar remains the same.

    1. Other incorrect delete commands to try: `:remove`, `:remove x`, `...` (where x is larger than the list size)<br>
       Expected: Similar to previous.

1. _{ more test cases …​ }_

### Saving data

1. Dealing with missing/corrupted data files

    1. _{explain how to simulate a missing/corrupted file, and the expected behavior}_

1. _{ more test cases …​ }_
