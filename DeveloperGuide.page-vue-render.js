
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"sticky":""}},[_c('navbar',{attrs:{"type":"dark"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/tp/index.html","title":"Home"}},[_v("VBook")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('form',{staticClass:"navbar-form"},[_c('searchbar',{attrs:{"data":searchData,"placeholder":"Search","on-hit":searchCallback,"menu-align-right":""}})],1)])]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/tp/index.html"}},[_v("Home")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/tp/UserGuide.html"}},[_v("User Guide")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/tp/DeveloperGuide.html"}},[_v("Developer Guide")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/tp/AboutUs.html"}},[_v("About Us")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/AY2425S1-CS2103T-F12-4/tp/","target":"_blank"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])])],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_c('div',{attrs:{"id":"content-wrapper"}},[_m(0),_v(" "),_c('div',{pre:true,attrs:{"class":"page-nav-print d-none d-print-block"}}),_v(" "),_c('hr'),_v(" "),_m(1),_v(" "),_m(2),_v(" "),_c('hr'),_v(" "),_m(3),_v(" "),_m(4),_v(" "),_c('hr'),_v(" "),_m(5),_v(" "),_m(6),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/ArchitectureDiagram.png","width":"280"}}),_v(" "),_m(7),_v(" "),_c('p',[_v("Given below is a quick overview of main components and how they interact with each other.")]),_v(" "),_m(8),_v(" "),_m(9),_v(" "),_m(10),_v(" "),_c('p',[_v("The bulk of the app's work is done by the following four components:")]),_v(" "),_m(11),_v(" "),_m(12),_v(" "),_m(13),_v(" "),_m(14),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/ArchitectureSequenceDiagram.png","width":"574"}}),_v(" "),_c('p',[_v("Each of the four main components (also shown in the diagram above),")]),_v(" "),_m(15),_v(" "),_m(16),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/ComponentManagers.png","width":"300"}}),_v(" "),_c('p',[_v("The sections below give more details of each component.")]),_v(" "),_m(17),_v(" "),_m(18),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/UiClassDiagram.png","alt":"Structure of the UI Component"}}),_v(" "),_m(19),_v(" "),_m(20),_v(" "),_m(21),_v(" "),_m(22),_v(" "),_m(23),_v(" "),_m(24),_v(" "),_m(25),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/LogicClassDiagram.png","width":"550"}}),_v(" "),_m(26),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/DeleteSequenceDiagram-Logic.png","alt":"Interactions Inside the Logic Component for the `:remove 1` Command"}}),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('p',[_c('strong',[_v("Note:")]),_v(" The lifeline for "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("DeleteCommandParser")]),_v(" should end at the destroy marker (X) but due to a limitation of PlantUML, the lifeline continues till the end of diagram.")])]),_v(" "),_m(27),_v(" "),_m(28),_v(" "),_m(29),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/ParserClasses.png","width":"600"}}),_v(" "),_c('p',[_v("How the parsing works:")]),_v(" "),_m(30),_v(" "),_m(31),_v(" "),_m(32),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/ModelClassDiagram.png","width":"450"}}),_v(" "),_m(33),_v(" "),_m(34),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('p',[_c('strong',[_v("Note:")]),_v(" An alternative (arguably, a more OOP) model is given below. It has a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Tag")]),_v(" list in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddressBook")]),_v(", which "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Person")]),_v(" references. This allows "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddressBook")]),_v(" to only require one "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Tag")]),_v(" object per unique tag, instead of each "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Person")]),_v(" needing their own "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Tag")]),_v(" objects."),_c('br')]),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/BetterModelClassDiagram.png","width":"450"}})],1),_v(" "),_m(35),_v(" "),_m(36),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/StorageClassDiagram.png","width":"550"}}),_v(" "),_m(37),_v(" "),_m(38),_v(" "),_m(39),_v(" "),_m(40),_v(" "),_c('hr'),_v(" "),_m(41),_v(" "),_c('p',[_v("This section describes some noteworthy details on how certain features are implemented.")]),_v(" "),_m(42),_v(" "),_m(43),_v(" "),_m(44),_v(" "),_m(45),_v(" "),_m(46),_v(" "),_c('p',[_v("Given below is an example usage scenario and how the undo/redo mechanism behaves at each step.")]),_v(" "),_m(47),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/UndoRedoState0.png","alt":"UndoRedoState0"}}),_v(" "),_m(48),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/UndoRedoState1.png","alt":"UndoRedoState1"}}),_v(" "),_m(49),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/UndoRedoState2.png","alt":"UndoRedoState2"}}),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('p',[_c('strong',[_v("Note:")]),_v(" If a command fails its execution, it will not call "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model#commitAddressBook()")]),_v(", so the address book state will not be saved into the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addressBookStateList")]),_v(".")])]),_v(" "),_m(50),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/UndoRedoState3.png","alt":"UndoRedoState3"}}),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('p',[_c('strong',[_v("Note:")]),_v(" If the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("currentStatePointer")]),_v(" is at index 0, pointing to the initial AddressBook state, then there are no previous AddressBook states to restore. The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":undo")]),_v(" command uses "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model#canUndoAddressBook()")]),_v(" to check if this is the case. If so, it will return an error to the user rather\nthan attempting to perform the undo.")])]),_v(" "),_m(51),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/UndoSequenceDiagram-Logic.png","alt":"UndoSequenceDiagram-Logic"}}),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('p',[_c('strong',[_v("Note:")]),_v(" The lifeline for "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UndoCommand")]),_v(" should end at the destroy marker (X) but due to a limitation of PlantUML, the lifeline reaches the end of diagram.")])]),_v(" "),_m(52),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/UndoSequenceDiagram-Model.png","alt":"UndoSequenceDiagram-Model"}}),_v(" "),_m(53),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('p',[_c('strong',[_v("Note:")]),_v(" If the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("currentStatePointer")]),_v(" is at index "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addressBookStateList.size() - 1")]),_v(", pointing to the latest address book state, then there are no undone AddressBook states to restore. The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("redo")]),_v(" command uses "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model#canRedoAddressBook()")]),_v(" to check if this is the case. If so, it will return an error to the user rather than attempting to perform the redo.")])]),_v(" "),_m(54),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/UndoRedoState4.png","alt":"UndoRedoState4"}}),_v(" "),_m(55),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/UndoRedoState5.png","alt":"UndoRedoState5"}}),_v(" "),_c('p',[_v("The following activity diagram summarizes what happens when a user executes a new command:")]),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/CommitActivityDiagram.png","width":"250"}}),_v(" "),_m(56),_v(" "),_m(57),_v(" "),_m(58),_v(" "),_m(59),_v(" "),_m(60),_v(" "),_c('p',[_v("The Delete feature allows deletion of a person from the address book. The user can delete a person by specifying the index of the person to delete. The user can also delete multiple persons by specifying multiple indexes of the persons to delete.")]),_v(" "),_m(61),_v(" "),_m(62),_v(" "),_c('p',[_v("The following class diagram shows the relationships between the classes involved in the delete feature:")]),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/DeleteClassDiagram.png"}}),_v(" "),_m(63),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/DeleteMultipleSequenceDiagram-Logic.png","alt":"Interactions Inside the Logic Component for the `:remove 1, 2, 3` Command"}}),_v(" "),_m(64),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/DeleteSequenceDiagram-Model.png","alt":"DeleteSequenceDiagram-Model"}}),_v(" "),_c('p',[_v("The following activity diagram summarizes what happens when a user executes a new command:")]),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/DeleteActivityDiagram.png"}}),_v(" "),_m(65),_v(" "),_m(66),_v(" "),_m(67),_v(" "),_m(68),_v(" "),_m(69),_v(" "),_c('p',[_v("The add feature allows a person to be added to the address book. It accepts parameters name, phone, address, email,\nremark and tag. The name parameter is compulsory, while the rest are optional. Multiple tags are accepted for one\nperson.")]),_v(" "),_m(70),_v(" "),_m(71),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/AddSequenceDiagram-Logic.png","alt":"Interactions Inside the Logic Component for the `TODO` Command"}}),_v(" "),_c('p',[_v("The parsing process is described in detail in this sequence diagram:")]),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/AddSequenceDiagram-Tokenise.png","alt":"Interactions Inside the Logic Component for the `:remove 1, 2, 3` Command"}}),_v(" "),_c('p',[_v("The following sequence diagrams give examples of how a compulsory parameter, an optional parameter and a parameter that\naccepts multiple values at once is parsed.")]),_v(" "),_m(72),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/AddSequenceDiagram-ParseName.png","alt":"Interactions Inside the Logic Component when parsing a name string"}}),_v(" "),_m(73),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/AddSequenceDiagram-ParsePhone.png","alt":"Interactions Inside the Logic Component when parsing a phone string"}}),_v(" "),_m(74),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/AddSequenceDiagram-ParseTags.png","alt":"Interactions Inside the Logic Component when parsing a collection of tags"}}),_v(" "),_m(75),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/AddSequenceDiagram-Model.png","alt":"AddSequenceDiagram-Model"}}),_v(" "),_m(76),_v(" "),_m(77),_v(" "),_m(78),_v(" "),_m(79),_v(" "),_c('p',[_v("Constructor Variants:")]),_v(" "),_m(80),_v(" "),_c('p',[_v("Attributes:")]),_v(" "),_m(81),_v(" "),_c('p',[_v("Given below is an example usage scenario and how the export process behaves at each step.")]),_v(" "),_m(82),_v(" "),_m(83),_v(" "),_m(84),_v(" "),_m(85),_v(" "),_m(86),_v(" "),_c('p',[_v("The following sequence diagram explains how the export operation works:")]),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/ExportSequenceDiagram.png","alt":"ExportSequenceDiagram"}}),_v(" "),_m(87),_v(" "),_m(88),_v(" "),_m(89),_v(" "),_m(90),_v(" "),_m(91),_v(" "),_m(92),_v(" "),_m(93),_v(" "),_m(94),_v(" "),_m(95),_v(" "),_m(96),_v(" "),_m(97),_v(" "),_m(98),_v(" "),_m(99),_v(" "),_m(100),_v(" "),_m(101),_m(102),_v(" "),_m(103),_v(" "),_c('p',[_v("Step 2. The encrypted data is stored securely. When needed, the user can request to decrypt the information.")]),_v(" "),_m(104),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('p',[_c('strong',[_v("Note:")]),_v(" If an error occurs during encryption or decryption (e.g., if the secret key is invalid or corrupted), the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("EncryptionManager")]),_v(" will handle the error gracefully and return an appropriate error message.")])]),_v(" "),_c('p',[_v("The following sequence diagram shows how the encryption process works:")]),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/EncryptionSequenceDiagram.png","alt":"EncryptionSequenceDiagram"}}),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('p',[_c('strong',[_v("Note:")]),_v(" The sequence diagram simplifies the encryption and decryption processes to focus on the main interactions between components.")])]),_v(" "),_m(105),_v(" "),_m(106),_v(" "),_m(107),_v(" "),_m(108),_v(" "),_m(109),_v(" "),_m(110),_v(" "),_m(111),_v(" "),_m(112),_v(" "),_m(113),_v(" "),_m(114),_v(" "),_m(115),_v(" "),_m(116),_v(" "),_m(117),_v(" "),_m(118),_m(119),_v(" "),_m(120),_v(" "),_c('p',[_v("Step 2. The entered password is hashed and saved securely, along with a generated salt.")]),_v(" "),_m(121),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('p',[_c('strong',[_v("Note:")]),_v(" If an error occurs during password hashing or verification (e.g., if the stored format is incorrect), the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("PasswordManager")]),_v(" will handle the error gracefully and provide an appropriate error message.")])]),_v(" "),_c('p',[_v("The following sequence diagram illustrates how the password management process operates:")]),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/PasswordManagementActivityDiagram.png","alt":"PasswordManagementActivityDiagram"}}),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('p',[_c('strong',[_v("Note:")]),_v(" The activity diagram simplifies the password management processes to highlight the flow for user authentication.")])]),_v(" "),_m(122),_v(" "),_m(123),_v(" "),_m(124),_v(" "),_m(125),_v(" "),_m(126),_v(" "),_c('hr'),_v(" "),_m(127),_v(" "),_m(128),_v(" "),_m(129),_v(" "),_m(130),_v(" "),_m(131),_v(" "),_m(132),_v(" "),_m(133),_m(134),_v(" "),_m(135),_v(" "),_m(136),_v(" "),_m(137),_v(" "),_m(138),_v(" "),_m(139),_v(" "),_m(140),_v(" "),_m(141),_v(" "),_m(142),_v(" "),_m(143),_v(" "),_m(144),_v(" "),_m(145),_v(" "),_m(146),_v(" "),_c('hr'),_v(" "),_m(147),_v(" "),_c('p',[_v("Given below are instructions to test the app manually.")]),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('p',[_c('strong',[_v("Note:")]),_v(" These instructions only provide a starting point for testers to work on;\ntesters are expected to do more "),_c('em',[_v("exploratory")]),_v(" testing.")])]),_v(" "),_m(148),_v(" "),_m(149),_v(" "),_m(150),_v(" "),_m(151),_v(" "),_m(152),_v(" "),_m(153)],1),_v(" "),_c('overlay-source',{attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"},[_c('overlay-source',{staticClass:"nav nav-pills flex-column my-0 small no-flex-wrap",attrs:{"id":"mb-page-nav","tag-name":"nav","to":"mb-page-nav"}},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#vbook-developer-guide"}},[_v("VBook Developer Guide‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#acknowledgements"}},[_v("Acknowledgements‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#setting-up-getting-started"}},[_v("Setting up, getting started‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#design"}},[_v("Design‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#architecture"}},[_v("Architecture‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#ui-component"}},[_v("UI component‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#logic-component"}},[_v("Logic component‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#model-component"}},[_v("Model component‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#storage-component"}},[_v("Storage component‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#common-classes"}},[_v("Common classes‎")])]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#implementation"}},[_v("Implementation‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#undo-redo-feature"}},[_v("Undo/redo feature‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#delete-feature"}},[_v("Delete Feature‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#add-feature"}},[_v("Add Feature‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#export-feature"}},[_v("Export Feature‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#encryption-feature"}},[_v("Encryption Feature‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#password-management-feature"}},[_v("Password Management Feature‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#design-considerations-for-password-management-feature"}},[_v("Design Considerations for Password Management Feature‎")])]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#documentation-logging-testing-configuration-dev-ops"}},[_v("Documentation, logging, testing, configuration, dev-ops‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#appendix-requirements"}},[_v("Appendix: Requirements‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#product-scope"}},[_v("Product scope‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#user-stories"}},[_v("User stories‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#use-cases"}},[_v("Use cases‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#non-functional-requirements"}},[_v("Non-Functional Requirements‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#glossary"}},[_v("Glossary‎")])]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#appendix-instructions-for-manual-testing"}},[_v("Appendix: Instructions for manual testing‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#launch-and-shutdown"}},[_v("Launch and shutdown‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#deleting-a-person"}},[_v("Deleting a person‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#saving-data"}},[_v("Saving data‎")])])])])],1)]),_v(" "),_c('scroll-top-button')],1),_v(" "),_m(154)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('h1',{attrs:{"id":"vbook-developer-guide"}},[_v("VBook Developer Guide"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#vbook-developer-guide","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"acknowledgements"}},[_c('strong',[_v("Acknowledgements")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#acknowledgements","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('em',[_v("{ list here sources of all reused/adapted ideas, code, documentation, and third-party libraries -- include links to the original source as well }")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"setting-up-getting-started"}},[_c('strong',[_v("Setting up, getting started")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#setting-up-getting-started","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Refer to the guide "),_c('a',{attrs:{"href":"/tp/SettingUp.html"}},[_c('em',[_v("Setting up and getting started")])]),_v(".")])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"design"}},[_c('strong',[_v("Design")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#design","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"architecture"}},[_v("Architecture"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#architecture","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('em',[_c('strong',[_v("Architecture Diagram")])]),_v(" given above explains the high-level design of the App.")])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Main components of the architecture")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Main")])]),_v(" (consisting of classes "),_c('a',{attrs:{"href":"https://github.com/se-edu/addressbook-level3/tree/master/src/main/java/seedu/address/Main.java"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Main")])]),_v(" and "),_c('a',{attrs:{"href":"https://github.com/se-edu/addressbook-level3/tree/master/src/main/java/seedu/address/MainApp.java"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("MainApp")])]),_v(") is in charge of the app launch and shut down.")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("At app launch, it initializes the other components in the correct sequence, and connects them up with each other.")]),_v(" "),_c('li',[_v("At shut down, it shuts down the other components and invokes cleanup methods where necessary.")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('a',{attrs:{"href":"#ui-component"}},[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UI")])])]),_v(": The UI of the App.")]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#logic-component"}},[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")])])]),_v(": The command executor.")]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#model-component"}},[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")])])]),_v(": Holds the data of the App in memory.")]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#storage-component"}},[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Storage")])])]),_v(": Reads data from, and writes data to, the hard disk.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"#common-classes"}},[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Commons")])])]),_v(" represents a collection of classes used by multiple other components.")])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("How the architecture components interact with each other")])])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('em',[_v("Sequence Diagram")]),_v(" below shows how the components interact with each other for the scenario where the user issues the command "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":remove 1")]),_v(".")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("defines its "),_c('em',[_v("API")]),_v(" in an "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("interface")]),_v(" with the same name as the Component.")]),_v(" "),_c('li',[_v("implements its functionality using a concrete "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("{Component Name}Manager")]),_v(" class (which follows the corresponding API "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("interface")]),_v(" mentioned in the previous point.")])])}
},function anonymous(
) {
with(this){return _c('p',[_v("For example, the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" component defines its API in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic.java")]),_v(" interface and implements its functionality using the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("LogicManager.java")]),_v(" class which follows the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" interface. Other components interact with a given component through its interface rather than the concrete class (reason: to prevent outside component's being coupled to the implementation of a component), as illustrated in the (partial) class diagram below.")])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"ui-component"}},[_v("UI component"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#ui-component","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('strong',[_v("API")]),_v(" of this component is specified in "),_c('a',{attrs:{"href":"https://github.com/se-edu/addressbook-level3/tree/master/src/main/java/seedu/address/ui/Ui.java"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Ui.java")])])])}
},function anonymous(
) {
with(this){return _c('p',[_v("The UI consists of a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("MainWindow")]),_v(" that is made up of parts e.g."),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("CommandBox")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ResultDisplay")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("PersonListPanel")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("StatusBarFooter")]),_v(" etc. All these, including the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("MainWindow")]),_v(", inherit from the abstract "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UiPart")]),_v(" class which captures the commonalities between classes that represent parts of the visible GUI.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UI")]),_v(" component uses the JavaFx UI framework. The layout of these UI parts are defined in matching "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(".fxml")]),_v(" files that are in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("src/main/resources/view")]),_v(" folder. For example, the layout of the "),_c('a',{attrs:{"href":"https://github.com/se-edu/addressbook-level3/tree/master/src/main/java/seedu/address/ui/MainWindow.java"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("MainWindow")])]),_v(" is specified in "),_c('a',{attrs:{"href":"https://github.com/se-edu/addressbook-level3/tree/master/src/main/resources/view/MainWindow.fxml"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("MainWindow.fxml")])])])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UI")]),_v(" component,")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("executes user commands using the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" component.")]),_v(" "),_c('li',[_v("listens for changes to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(" data so that the UI can be updated with the modified data.")]),_v(" "),_c('li',[_v("keeps a reference to the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" component, because the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UI")]),_v(" relies on the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" to execute commands.")]),_v(" "),_c('li',[_v("depends on some classes in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(" component, as it displays "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Person")]),_v(" object residing in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(".")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"logic-component"}},[_v("Logic component"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#logic-component","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("API")]),_v(" : "),_c('a',{attrs:{"href":"https://github.com/se-edu/addressbook-level3/tree/master/src/main/java/seedu/address/logic/Logic.java"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic.java")])])])}
},function anonymous(
) {
with(this){return _c('p',[_v("Here's a (partial) class diagram of the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" component:")])}
},function anonymous(
) {
with(this){return _c('p',[_v("The sequence diagram below illustrates the interactions within the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" component, taking "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("execute(\":remove 1\")")]),_v(" API call as an example.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("How the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" component works:")])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("When "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" is called upon to execute a command, it is passed to an "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddressBookParser")]),_v(" object which in turn creates a parser that matches the command (e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("DeleteCommandParser")]),_v(") and uses it to parse the command.")]),_v(" "),_c('li',[_v("This results in a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Command")]),_v(" object (more precisely, an object of one of its subclasses e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("DeleteCommand")]),_v(") which is executed by the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("LogicManager")]),_v(".")]),_v(" "),_c('li',[_v("The command can communicate with the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(" when it is executed (e.g. to delete a person)."),_c('br'),_v("\nNote that although this is shown as a single step in the diagram above (for simplicity), in the code it can take several interactions (between the command object and the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(") to achieve.")]),_v(" "),_c('li',[_v("The result of the command execution is encapsulated as a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("CommandResult")]),_v(" object which is returned back from "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(".")])])}
},function anonymous(
) {
with(this){return _c('p',[_v("Here are the other classes in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" (omitted from the class diagram above) that are used for parsing a user command:")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("When called upon to parse a user command, the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddressBookParser")]),_v(" class creates an "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("XYZCommandParser")]),_v(" ("),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("XYZ")]),_v(" is a placeholder for the specific command name e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddCommandParser")]),_v(") which uses the other classes shown above to parse the user command and create a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("XYZCommand")]),_v(" object (e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddCommand")]),_v(") which the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddressBookParser")]),_v(" returns back as a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Command")]),_v(" object.")]),_v(" "),_c('li',[_v("All "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("XYZCommandParser")]),_v(" classes (e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddCommandParser")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("DeleteCommandParser")]),_v(", ...) inherit from the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Parser")]),_v(" interface so that they can be treated similarly where possible e.g, during testing.")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"model-component"}},[_v("Model component"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#model-component","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("API")]),_v(" : "),_c('a',{attrs:{"href":"https://github.com/se-edu/addressbook-level3/tree/master/src/main/java/seedu/address/model/Model.java"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model.java")])])])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(" component,")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("stores the address book data i.e., all "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Person")]),_v(" objects (which are contained in a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UniquePersonList")]),_v(" object).")]),_v(" "),_c('li',[_v("stores the currently 'selected' "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Person")]),_v(" objects (e.g., results of a search query) as a separate "),_c('em',[_v("filtered")]),_v(" list which is exposed to outsiders as an unmodifiable "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ObservableList<Person>")]),_v(" that can be 'observed' e.g. the UI can be bound to this list so that the UI automatically updates when the data in the list change.")]),_v(" "),_c('li',[_v("stores a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UserPref")]),_v(" object that represents the user’s preferences. This is exposed to the outside as a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ReadOnlyUserPref")]),_v(" objects.")]),_v(" "),_c('li',[_v("does not depend on any of the other three components (as the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(" represents data entities of the domain, they should make sense on their own without depending on other components)")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"storage-component"}},[_v("Storage component"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#storage-component","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("API")]),_v(" : "),_c('a',{attrs:{"href":"https://github.com/se-edu/addressbook-level3/tree/master/src/main/java/seedu/address/storage/Storage.java"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Storage.java")])])])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Storage")]),_v(" component,")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("can save both address book data and user preference data in JSON format, and read them back into corresponding objects.")]),_v(" "),_c('li',[_v("inherits from both "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddressBookStorage")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UserPrefStorage")]),_v(", which means it can be treated as either one (if only the functionality of only one is needed).")]),_v(" "),_c('li',[_v("depends on some classes in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(" component (because the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Storage")]),_v(" component's job is to save/retrieve objects that belong to the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(")")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"common-classes"}},[_v("Common classes"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#common-classes","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Classes used by multiple components are in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("seedu.address.commons")]),_v(" package.")])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"implementation"}},[_c('strong',[_v("Implementation")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#implementation","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"undo-redo-feature"}},[_v("Undo/redo feature"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#undo-redo-feature","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"implementation-2"}},[_v("Implementation"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#implementation-2","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("The undo/redo mechanism is facilitated by "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("VersionedAddressBook")]),_v(". It extends "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddressBook")]),_v(" with an undo/redo history, stored internally as an "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addressBookStateList")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("currentStatePointer")]),_v(". Additionally, it implements the following operations:")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("VersionedAddressBook#commit()")]),_v(" — Saves the current address book state in its history.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("VersionedAddressBook#undo()")]),_v(" — Restores the previous address book state from its history.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("VersionedAddressBook#redo()")]),_v(" — Restores a previously undone address book state from its history.")])])}
},function anonymous(
) {
with(this){return _c('p',[_v("These operations are exposed in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(" interface as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model#commitAddressBook()")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model#undoAddressBook()")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model#redoAddressBook()")]),_v(" respectively.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 1. The user launches the application for the first time. The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("VersionedAddressBook")]),_v(" will be initialized with the initial address book state, and the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("currentStatePointer")]),_v(" pointing to that single address book state.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 2. The user executes "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":remove 5")]),_v(" command to add the 5th person in the address book. The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":remove")]),_v(" command calls "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model#commitAddressBook()")]),_v(", causing the modified state of the address book after the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":remove 5")]),_v(" command executes to be saved in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addressBookStateList")]),_v(", and the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("currentStatePointer")]),_v(" is shifted to the newly inserted address book state.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 3. The user executes "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add -n David …​")]),_v(" to add a new person. The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":add")]),_v(" command also calls "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model#commitAddressBook()")]),_v(", causing another modified address book state to be saved into the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addressBookStateList")]),_v(".")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 4. The user now decides that adding the person was a mistake, and decides to undo that action by executing the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":undo")]),_v(" command. The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":undo")]),_v(" command will call "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model#undoAddressBook()")]),_v(", which will shift the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("currentStatePointer")]),_v(" once to the left, pointing it to the previous address book state, and restores the address book to that state.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("The following sequence diagram shows how an undo operation goes through the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" component:")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Similarly, how an undo operation goes through the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(" component is shown below:")])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("redo")]),_v(" command does the opposite — it calls "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model#redoAddressBook()")]),_v(", which shifts the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("currentStatePointer")]),_v(" once to the right, pointing to the previously undone state, and restores the address book to that state.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 5. The user then decides to execute the command "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":list")]),_v(". Commands that do not modify the address book, such as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":list")]),_v(", will usually not call "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model#commitAddressBook()")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model#undoAddressBook()")]),_v(" or "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model#redoAddressBook()")]),_v(". Thus, the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addressBookStateList")]),_v(" remains unchanged.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 6. The user executes "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("clear")]),_v(", which calls "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model#commitAddressBook()")]),_v(". Since the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("currentStatePointer")]),_v(" is not pointing at the end of the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addressBookStateList")]),_v(", all address book states after the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("currentStatePointer")]),_v(" will be purged. Reason: It no longer makes sense to redo the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":add -n David …​")]),_v(" command. This is the behavior that most modern desktop applications follow.")])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"design-considerations"}},[_v("Design considerations:"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#design-considerations","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Aspect: How undo & redo executes:")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('p',[_c('strong',[_v("Alternative 1 (current choice):")]),_v(" Saves the entire address book.")]),_v(" "),_c('ul',[_c('li',[_v("Pros: Easy to implement.")]),_v(" "),_c('li',[_v("Cons: May have performance issues in terms of memory usage.")])])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Alternative 2:")]),_v(" Individual command knows how to undo/redo by\nitself.")]),_v(" "),_c('ul',[_c('li',[_v("Pros: Will use less memory (e.g. for "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":remove")]),_v(", just save the person being deleted).")]),_v(" "),_c('li',[_v("Cons: We must ensure that the implementation of each individual command are correct.")])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"delete-feature"}},[_v("Delete Feature"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#delete-feature","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"implementation-3"}},[_v("Implementation"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#implementation-3","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("How the Delete Feature "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":remove -i INDEX1, INDEX2...")]),_v(" works:")])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("DeleteCommand")]),_v(" class has a method "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("DeleteCommand#execute(Model model)")]),_v(" that calls the ModelManager."),_c('br'),_v("\nThe "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ModelManager")]),_v(" class has a method "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ModelManager#deletePerson(Person target)")]),_v(" that calls the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddressBook")]),_v(" class."),_c('br'),_v("\nThe "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddressBook")]),_v(" class has a method "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddressBook#removePerson(Person key)")]),_v(" that removes a person from the UniquePersonList field "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("persons")]),_v(" in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddressBook")]),_v(" class.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("The following sequence diagram shows how a delete operation goes through the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" component:")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Similarly, how a delete operation goes through the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(" component is shown below:")])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Design considerations:")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Aspect: How delete executes:")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('p',[_c('strong',[_v("Alternative 1 (current choice):")]),_v(" Deletes the person by index.")]),_v(" "),_c('ul',[_c('li',[_v("Pros: Easy to implement.")]),_v(" "),_c('li',[_v("Cons: Requires the user to know the index of the person to delete.")])])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Alternative 2:")]),_v(" Deletes the person by name.")]),_v(" "),_c('ul',[_c('li',[_v("Pros: More user-friendly as the user can specify the name.")]),_v(" "),_c('li',[_v("Cons: Requires additional logic to handle duplicate names.")])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"add-feature"}},[_v("Add Feature"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#add-feature","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"implementation-4"}},[_v("Implementation"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#implementation-4","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("The add feature follows the delete feature in that "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddCommand")]),_v(" calls "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ModelManager")]),_v(", which calls the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddressBook")]),_v("\nclass, which adds a person to the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UniquePersonList")]),_v(" class. Therefore, the class and activity diagram will be omitted\nfor conciseness.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("The following sequence diagram shows how an add operation goes through the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" component:")])}
},function anonymous(
) {
with(this){return _c('p',[_v("A compulsory parameter like "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Name")]),_v(" is parsed as follows.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("An optional parameter like "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Phone")]),_v(" is parsed as follows. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Email")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Address")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Remark")]),_v(" are also parsed similarly.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Finally, a parameter that accepts multiple values at once like "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Tag")]),_v(" is parsed as follows.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Similar to the delete feature, how an add operation goes through the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(" component is shown below:")])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"export-feature"}},[_v("Export Feature"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#export-feature","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"implementation-5"}},[_v("Implementation"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#implementation-5","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ExportCommand")]),_v(" class is responsible for exporting address book data to a user-specified location in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("JSON")]),_v(" format. It provides flexibility in its usage by allowing a destination to be selected via a file chooser or by setting a predetermined destination file, which is particularly useful for testing purposes. The data to be exported is encrypted, and the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ExportCommand")]),_v(" handles decryption, export location selection, and file I/O operations. The following outlines its components and workflow.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ExportCommand")]),_v(" class facilitates this export functionality and manages file I/O operations in a structured, asynchronous workflow.")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ExportCommand()")]),_v(": The default constructor for regular use, opening a file chooser dialog to select the export destination.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ExportCommand(File destinationFile, File sourceFile, String keyPath)")]),_v(": An overloaded constructor that allows specifying a destination file and encryption key path directly, which is particularly useful for testing.")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("destinationFile")]),_v(": The file chosen or set as the target for the export.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("sourceFile")]),_v(": A temporary file that holds the JSON data to be exported.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("keyPath")]),_v(": The path to the decryption key required for decrypting the address book data.")])])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 1. The user initiates an export by executing "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":export")]),_v(". The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ExportCommand")]),_v(" will attempt to decrypt the data\nbefore exporting it.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 2. The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("execute(Model model)")]),_v(" method reads encrypted data from the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("sourceFile")]),_v(", decrypting it with\n"),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("EncryptionManager.decrypt()")]),_v(" using the provided "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("keyPath")]),_v(". The decrypted data is written to a temporary file "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addressbook.json")]),_v(".")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 3. If "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("destinationFile")]),_v(" is not set, "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ExportCommand")]),_v(" invokes "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("chooseExportLocation(Stage stage)")]),_v(", which displays\na file chooser dialog for the user to select an export location. If the user cancels this dialog, the export process\nis aborted with an error message.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 4. The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("performExport(File sourceFile, File destinationFile)")]),_v(" method copies the decrypted data to the specified "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("destinationFile")]),_v(", using "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Files.copy()")]),_v(" with "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("StandardCopyOption.REPLACE_EXISTING")]),_v(" to overwrite any existing file. The temporary file is then deleted.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Note: The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("performExport")]),_v(" method is asynchronous, leveraging "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("CompletableFuture")]),_v(" to manage successful completion or error handling, ensuring smooth performance without blocking the main application thread.")])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Design Considerations:")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Aspect: Export Execution and Destination Selection")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Alternative 1 (current choice)")]),_v(": Use a file chooser dialog to allow the user to select the export location.")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Pros: User-friendly, provides flexibility in specifying the export location.")]),_v(" "),_c('li',[_v("Cons: Requires user interaction, which may be cumbersome for repeated exports.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Alternative 2")]),_v(": Set a default export location without user input.")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Pros: Streamlined and faster for frequent exports.")]),_v(" "),_c('li',[_v("Cons: Less flexible, as it may overwrite existing files without warning.")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"encryption-feature"}},[_v("Encryption Feature"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#encryption-feature","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"implementation-6"}},[_v("Implementation"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#implementation-6","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("The encryption mechanism is managed by the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("EncryptionManager")]),_v(" class. This component is responsible for securely encrypting and decrypting sensitive data using the AES (Advanced Encryption Standard) algorithm. The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("EncryptionManager")]),_v(" performs encryption and decryption with a secret key, which is securely loaded and stored using Java's Key Store API. The implementation details are as follows:")])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"methods-overview"}},[_v("Methods Overview"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#methods-overview","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("encrypt(String data, String keyPath)")])]),_v(":")]),_v(" "),_c('ul',[_c('li',[_v("Encrypts plain text data using the AES algorithm.")]),_v(" "),_c('li',[_v("Takes the path to the key store as an argument (defaulting to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("vbook.jks")]),_v(" if not provided).")]),_v(" "),_c('li',[_v("Returns a byte array containing the encrypted data.")])])]),_v(" "),_c('li',[_c('p',[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("decrypt(byte[] data, String keyPath)")])]),_v(":")]),_v(" "),_c('ul',[_c('li',[_v("Decrypts the given encrypted byte array back into plain text.")]),_v(" "),_c('li',[_v("Also takes the path to the key store as an argument (defaulting to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("vbook.jks")]),_v(" if not provided).")]),_v(" "),_c('li',[_v("Returns the decrypted string.")])])]),_v(" "),_c('li',[_c('p',[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("generateKey(String keyPath)")])]),_v(":")]),_v(" "),_c('ul',[_c('li',[_v("Generates a new AES secret key and stores it in a local key store file.")]),_v(" "),_c('li',[_v("If the key store already exists, it does not overwrite it but notifies that the alias already exists.")]),_v(" "),_c('li',[_v("Saves the generated key under the alias "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("vbook-encryption")]),_v(".")])])]),_v(" "),_c('li',[_c('p',[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("getKey(String keyPath)")])]),_v(":")]),_v(" "),_c('ul',[_c('li',[_v("Retrieves the AES secret key from the specified key store.")]),_v(" "),_c('li',[_v("If the key store does not exist, it calls "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("generateKey()")]),_v(" to create one.")]),_v(" "),_c('li',[_v("Returns the retrieved secret key.")])])])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"usage-in-application"}},[_v("Usage in Application"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#usage-in-application","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("EncryptionManager")]),_v(" is used in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ExportCommand")]),_v(" to decrypt data before exporting it and in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("JsonAddressBookStorage")]),_v(" to encrypt data before writing it to a file.")])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"usage"}},[_v("Usage"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#usage","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs java"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// Encryption")]),_v("\n")]),_c('span',[_v("String jsonData = JsonUtil.toJsonString("),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("new")]),_v(" JsonSerializableAddressBook(addressBook));\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("byte")]),_v("[] encryptedData = EncryptionManager.encrypt(jsonData, "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("this")]),_v(".keyPath);\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// Decryption")]),_v("\n")]),_c('span',[_v("jsonData = EncryptionManager.decrypt(encryptedData, "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("this")]),_v(".keyPath);\n")])])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"example-usage-scenario"}},[_v("Example Usage Scenario"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#example-usage-scenario","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 1. The user initially adds a new contact in the address book. The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("EncryptionManager")]),_v(" uses the AES algorithm and the secret key to encrypt the information before saving it.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 3. The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("EncryptionManager")]),_v(" decrypts the data using the same AES algorithm and the secret key, ensuring that the information is securely handled at all times.")])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"design-considerations-for-encryption-feature"}},[_v("Design Considerations for Encryption Feature"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#design-considerations-for-encryption-feature","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h5',{attrs:{"id":"core-limitation"}},[_v("Core Limitation"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#core-limitation","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_c('strong',[_v("Risk of Local KeyStore Exposure")]),_v(":")]),_v(" "),_c('ul',[_c('li',[_v("If a hacker gains access to the JKS file containing the encryption keys, they could decrypt sensitive data. This represents a fundamental limitation of local storage, as the security of the keys relies on the local file system's security.")])])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Alternative Storage Locations")]),_v(":")]),_v(" "),_c('ul',[_c('li',[_v("Storing the JKS file in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("JAVA_HOME/lib/security/cacerts")]),_v(" directory is an option, but this depends on the user’s configuration and permissions. Users might not have their "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("JAVA_HOME")]),_v(" path set correctly, which can lead to access issues.")])])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Security Through Obscurity")]),_v(":")]),_v(" "),_c('ul',[_c('li',[_v("While relying on obscurity—such as using less common paths for the JKS file—can add a layer of security, it should not be the sole defense mechanism. Obscurity alone does not adequately protect against determined attacks.")])])])])}
},function anonymous(
) {
with(this){return _c('h5',{attrs:{"id":"compromise-between-security-and-user-experience"}},[_v("Compromise Between Security and User Experience"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#compromise-between-security-and-user-experience","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('strong',[_v("User Experience Considerations")]),_v(":\n"),_c('ul',[_c('li',[_v("As a local application, VBook prioritizes convenience, which may lead users to prefer simpler access to their data over maximum security. Finding a balance between security and usability is crucial.")]),_v(" "),_c('li',[_v("Given that VBook handles contact data, adequate security measures must be in place while ensuring users are not overwhelmed by complex key management.")])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"password-management-feature"}},[_v("Password Management Feature"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#password-management-feature","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"implementation-7"}},[_v("Implementation"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#implementation-7","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("The password management mechanism is handled by the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("PasswordManager")]),_v(" class. This component is responsible for securely hashing and verifying user passwords using the "),_c('strong',[_v("PBKDF2")]),_v(" (Password-Based Key Derivation Function 2) algorithm with "),_c('strong',[_v("HMAC-SHA1")]),_v(". The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("PasswordManager")]),_v(" ensures that passwords are safely stored in a local text file, employing a salting strategy to enhance security. The implementation details are as follows:")])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"methods-overview-2"}},[_v("Methods Overview"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#methods-overview-2","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("readPassword(String path)")])]),_v(":")]),_v(" "),_c('ul',[_c('li',[_v("Reads the stored hashed password from the specified file (defaulting to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("password.txt")]),_v(").")]),_v(" "),_c('li',[_v("Returns the hashed password as a string or "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("null")]),_v(" if the file does not exist.")])])]),_v(" "),_c('li',[_c('p',[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("savePassword(String password, String path)")])]),_v(":")]),_v(" "),_c('ul',[_c('li',[_v("Accepts a plaintext password, generates a salt, hashes the password using "),_c('strong',[_v("PBKDF2")]),_v(", and saves the resulting hash and salt to the specified file (default: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("password.txt")]),_v(").")]),_v(" "),_c('li',[_v("Creates the file if it does not already exist.")])])]),_v(" "),_c('li',[_c('p',[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("isPasswordCorrect(String inputPassword, String path)")])]),_v(":")]),_v(" "),_c('ul',[_c('li',[_v("Compares the input plaintext password against the stored hashed password.")]),_v(" "),_c('li',[_v("Reads the stored hash and salt, hashes the input password, and returns "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("true")]),_v(" if they match or "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("false")]),_v(" otherwise.")])])]),_v(" "),_c('li',[_c('p',[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("hashPassword(String password, byte[] salt)")])]),_v(":")]),_v(" "),_c('ul',[_c('li',[_v("Hashes the provided password using the specified salt with "),_c('strong',[_v("PBKDF2")]),_v(" and returns a string containing both the salt and hash encoded in Base64.")])])]),_v(" "),_c('li',[_c('p',[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("generateSalt()")])]),_v(":")]),_v(" "),_c('ul',[_c('li',[_v("Generates a secure random salt using "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("SecureRandom")]),_v(" for use in password hashing.")])])])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"usage-in-application-2"}},[_v("Usage in Application"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#usage-in-application-2","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("PasswordManager")]),_v(" is invoked during application startup to check for an existing password file.\n"),_c('ul',[_c('li',[_v("If the file is absent, the user is prompted to create a new password.")]),_v(" "),_c('li',[_v("On subsequent starts, the user must input their original password for verification before proceeding.")])])])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"usage-2"}},[_v("Usage"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#usage-2","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs java"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// Saving a new password on initial startup")]),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("if")]),_v(" (PasswordManager.readPassword("),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("null")]),_v(") == "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("null")]),_v(") {\n")]),_c('span',[_v("    String newPassword = scanner.nextLine();\n")]),_c('span',[_v("    PasswordManager.savePassword(newPassword, "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("null")]),_v(");\n")]),_c('span',[_v("}\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// Verifying the password on subsequent starts")]),_v("\n")]),_c('span',[_v("String inputPassword = scanner.nextLine();\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("if")]),_v(" (PasswordManager.isPasswordCorrect(inputPassword, "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("null")]),_v(")) {\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// Handle correct password")]),_v("\n")]),_c('span',[_v("} "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("else")]),_v(" {\n")]),_c('span',[_v("   "),_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// Handle wrong password")]),_v("\n")]),_c('span',[_v("}\n")])])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"example-usage-scenario-2"}},[_v("Example Usage Scenario"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#example-usage-scenario-2","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 1. On the initial startup of the application, the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("PasswordManager")]),_v(" checks for the existence of the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("password.txt")]),_v(" file. If the file is not found, the user is prompted to enter a new password.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 3. On subsequent startups, the user is prompted to input their original password. The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("PasswordManager")]),_v(" verifies the input against the stored hash and salt, granting access if the password matches.")])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"design-considerations-for-password-management-feature"}},[_v("Design Considerations for Password Management Feature"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#design-considerations-for-password-management-feature","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"core-limitations"}},[_v("Core Limitations"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#core-limitations","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('strong',[_v("Risk of Local File Exposure")]),_v(":\n"),_c('ul',[_c('li',[_v("If an attacker gains access to the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("password.txt")]),_v(" file, they could potentially compromise user accounts. This poses a fundamental risk of local file storage, as the security of the password relies on the protection of the local file system.")]),_v(" "),_c('li',[_v("For future implementation, we may consider setting a retry limit.")])])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"documentation-logging-testing-configuration-dev-ops"}},[_c('strong',[_v("Documentation, logging, testing, configuration, dev-ops")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#documentation-logging-testing-configuration-dev-ops","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('a',{attrs:{"href":"/tp/Documentation.html"}},[_v("Documentation guide")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"/tp/Testing.html"}},[_v("Testing guide")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"/tp/Logging.html"}},[_v("Logging guide")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"/tp/Configuration.html"}},[_v("Configuration guide")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"/tp/DevOps.html"}},[_v("DevOps guide")])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"appendix-requirements"}},[_c('strong',[_v("Appendix: Requirements")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#appendix-requirements","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"product-scope"}},[_v("Product scope"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#product-scope","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Target user profile")]),_v(":")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("has a need to manage a significant number of contacts")]),_v(" "),_c('li',[_v("prefer desktop apps over other types")]),_v(" "),_c('li',[_v("can type fast")]),_v(" "),_c('li',[_v("value privacy and self-hosting")]),_v(" "),_c('li',[_v("prefers typing to mouse interactions")]),_v(" "),_c('li',[_v("is reasonably comfortable using CLI apps")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Value proposition")]),_v(": manage contacts faster than a typical mouse/GUI driven app")])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"user-stories"}},[_v("User stories"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#user-stories","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"table-responsive"},[_c('table',{staticClass:"markbind-table table table-bordered table-striped"},[_c('thead',[_c('tr',[_c('th',[_v("Priority")]),_v(" "),_c('th',[_v("As a …​")]),_v(" "),_c('th',[_v("I want to …​")]),_v(" "),_c('th',[_v("So that I can…​")])])]),_v(" "),_c('tbody',[_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* * *")])]),_v(" "),_c('td',[_v("first-time user")]),_v(" "),_c('td',[_v("add contacts to my contact book")]),_v(" "),_c('td',[_v("store my contacts")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* * *")])]),_v(" "),_c('td',[_v("user")]),_v(" "),_c('td',[_v("add contacts to my contact book using only partial details")]),_v(" "),_c('td',[_v("store contacts that I may not have full information about")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* * *")])]),_v(" "),_c('td',[_v("user")]),_v(" "),_c('td',[_v("see all my contacts")]),_v(" "),_c('td',[_v("see and manage my contacts")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* * *")])]),_v(" "),_c('td',[_v("user")]),_v(" "),_c('td',[_v("delete contacts")]),_v(" "),_c('td',[_v("remove contacts I do not need anymore")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* *")])]),_v(" "),_c('td',[_v("first-time user")]),_v(" "),_c('td',[_v("see sample contacts")]),_v(" "),_c('td',[_v("explore the app's features without adding real data")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* *")])]),_v(" "),_c('td',[_v("first-time user")]),_v(" "),_c('td',[_v("clear sample data and start fresh")]),_v(" "),_c('td',[_v("input my real contacts securely")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* *")])]),_v(" "),_c('td',[_v("first-time user")]),_v(" "),_c('td',[_v("view a tutorial on the app")]),_v(" "),_c('td',[_v("learn how to use the app quickly")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* *")])]),_v(" "),_c('td',[_v("first-time user")]),_v(" "),_c('td',[_v("quickly access a CLI command cheat sheet")]),_v(" "),_c('td',[_v("learn essential commands without slowing down")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* *")])]),_v(" "),_c('td',[_v("new user")]),_v(" "),_c('td',[_v("secure my contact data with a password")]),_v(" "),_c('td',[_v("feel confident that my client information is protected")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* *")])]),_v(" "),_c('td',[_v("new user")]),_v(" "),_c('td',[_v("choose to encrypt the contact data that is stored")]),_v(" "),_c('td',[_v("ensure my client information cannot be accessed from the storage location")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* *")])]),_v(" "),_c('td',[_v("new and inexperienced user")]),_v(" "),_c('td',[_v("undo actions like deletions (CTRL+Z)")]),_v(" "),_c('td',[_v("recover data quickly if I make a mistake")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* *")])]),_v(" "),_c('td',[_v("new and inexperienced user")]),_v(" "),_c('td',[_v("be prompted with why an invalid command is invalid")]),_v(" "),_c('td',[_v("receive immediate and specific feedback if I type an invalid command")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* *")])]),_v(" "),_c('td',[_v("new user")]),_v(" "),_c('td',[_v("open up a settings menu")]),_v(" "),_c('td',[_v("configure keyboard shortcuts")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* *")])]),_v(" "),_c('td',[_v("returning user")]),_v(" "),_c('td',[_v("search contacts using partial details (name, email)")]),_v(" "),_c('td',[_v("find relevant contacts faster")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* *")])]),_v(" "),_c('td',[_v("user")]),_v(" "),_c('td',[_v("edit contact details")]),_v(" "),_c('td',[_v("avoid errors when updating information")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* *")])]),_v(" "),_c('td',[_v("user whose contacts span multiple projects")]),_v(" "),_c('td',[_v("tag contacts with a project or organisation name")]),_v(" "),_c('td',[_v("organise my contacts better")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* *")])]),_v(" "),_c('td',[_v("user")]),_v(" "),_c('td',[_v("filter contacts by project or organisation")]),_v(" "),_c('td',[_v("quickly locate clients related to specific tasks")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* *")])]),_v(" "),_c('td',[_v("experienced user")]),_v(" "),_c('td',[_v("use keyboard shortcuts to bring up the CLI")]),_v(" "),_c('td',[_v("execute commands faster")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* *")])]),_v(" "),_c('td',[_v("experienced user")]),_v(" "),_c('td',[_v("use keyboard shortcuts to manage contacts")]),_v(" "),_c('td',[_v("manage my contacts faster")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* *")])]),_v(" "),_c('td',[_v("new user")]),_v(" "),_c('td',[_v("import contacts from a CSV or another format (e.g. Apple's .vcf)")]),_v(" "),_c('td',[_v("quickly populate my contact book without manual entry")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("*")])]),_v(" "),_c('td',[_v("returning user")]),_v(" "),_c('td',[_v("customise the app's theme")]),_v(" "),_c('td',[_v("make my user experience more personalised as I use the app more")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("*")])]),_v(" "),_c('td',[_v("user")]),_v(" "),_c('td',[_v("multi-select contacts for deletion")]),_v(" "),_c('td',[_v("manage my list more efficiently")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("*")])]),_v(" "),_c('td',[_v("frequent user")]),_v(" "),_c('td',[_v("navigate command history with arrow keys")]),_v(" "),_c('td',[_v("quickly fill the search field and modify and execute previous commands")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("*")])]),_v(" "),_c('td',[_v("power user")]),_v(" "),_c('td',[_v("export my contact list to CSV or JSON format")]),_v(" "),_c('td',[_v("use it in other tools or projects")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("*")])]),_v(" "),_c('td',[_v("programmer")]),_v(" "),_c('td',[_v("configure my shortcuts to be similar to my IDE shortcuts")]),_v(" "),_c('td',[_v("switch between my IDE and CipherContacts more effectively")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("*")])]),_v(" "),_c('td',[_v("frequent user")]),_v(" "),_c('td',[_v("pin important contacts")]),_v(" "),_c('td',[_v("have them appear at the top of my list for easy access")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("*")])]),_v(" "),_c('td',[_v("long time user")]),_v(" "),_c('td',[_v("archive old contacts")]),_v(" "),_c('td',[_v("clean up my contact book without having to delete contacts")])])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"use-cases"}},[_v("Use cases"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#use-cases","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("(For all use cases below, the "),_c('strong',[_v("System")]),_v(" is the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddressBook")]),_v(" and the "),_c('strong',[_v("Actor")]),_v(" is the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("user")]),_v(", unless specified otherwise)")])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Use case: Delete a person")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("MSS")])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("User requests to list persons")])]),_v(" "),_c('li',[_c('p',[_v("AddressBook shows a list of persons")])]),_v(" "),_c('li',[_c('p',[_v("User requests to delete a specific person in the list")])]),_v(" "),_c('li',[_c('p',[_v("AddressBook deletes the person")]),_v(" "),_c('p',[_v("Use case ends.")])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Extensions")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('p',[_v("2a. The list is empty.")]),_v(" "),_c('p',[_v("Use case ends.")])]),_v(" "),_c('li',[_c('p',[_v("3a. The given index is invalid.")]),_v(" "),_c('ul',[_c('li',[_c('p',[_v("3a1. AddressBook shows an error message.")]),_v(" "),_c('p',[_v("Use case resumes at step 2.")])])])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('em',[_v("{More to be added}")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"non-functional-requirements"}},[_v("Non-Functional Requirements"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#non-functional-requirements","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("Should work on any "),_c('em',[_v("mainstream OS")]),_v(" as long as it has Java "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("17")]),_v(" or above installed.")]),_v(" "),_c('li',[_v("Should be able to hold up to 1000 persons without a noticeable sluggishness in performance for typical usage.")]),_v(" "),_c('li',[_v("A user with above average typing speed for regular English text (i.e. not code, not system admin commands) should be able to accomplish most of the tasks faster using commands than using the mouse.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('em',[_v("{More to be added}")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"glossary"}},[_v("Glossary"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#glossary","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('strong',[_v("Mainstream OS")]),_v(": Windows, Linux, Unix, MacOS")]),_v(" "),_c('li',[_c('strong',[_v("Private contact detail")]),_v(": A contact detail that is not meant to be shared with others")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"appendix-instructions-for-manual-testing"}},[_c('strong',[_v("Appendix: Instructions for manual testing")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#appendix-instructions-for-manual-testing","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"launch-and-shutdown"}},[_v("Launch and shutdown"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#launch-and-shutdown","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("Initial launch")]),_v(" "),_c('ol',[_c('li',[_c('p',[_v("Download the jar file and copy into an empty folder")])]),_v(" "),_c('li',[_c('p',[_v("Double-click the jar file Expected: Shows the GUI with a set of sample contacts. The window size may not be optimum.")])])])]),_v(" "),_c('li',[_c('p',[_v("Saving window preferences")]),_v(" "),_c('ol',[_c('li',[_c('p',[_v("Resize the window to an optimum size. Move the window to a different location. Close the window.")])]),_v(" "),_c('li',[_c('p',[_v("Re-launch the app by double-clicking the jar file."),_c('br'),_v("\nExpected: The most recent window size and location is retained.")])])])]),_v(" "),_c('li',[_c('p',[_c('em',[_v("{ more test cases …​ }")])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"deleting-a-person"}},[_v("Deleting a person"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#deleting-a-person","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("Deleting a person while all persons are being shown")]),_v(" "),_c('ol',[_c('li',[_c('p',[_v("Prerequisites: List all persons using the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":list")]),_v(" command. Multiple persons in the list.")])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":remove 1")]),_c('br'),_v("\nExpected: First contact is deleted from the list. Details of the deleted contact shown in the status message. Timestamp in the status bar is updated.")])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":remove 0")]),_c('br'),_v("\nExpected: No person is deleted. Error details shown in the status message. Status bar remains the same.")])]),_v(" "),_c('li',[_c('p',[_v("Other incorrect delete commands to try: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":remove")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":remove x")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("...")]),_v(" (where x is larger than the list size)"),_c('br'),_v("\nExpected: Similar to previous.")])])])]),_v(" "),_c('li',[_c('p',[_c('em',[_v("{ more test cases …​ }")])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"saving-data"}},[_v("Saving data"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#saving-data","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("Dealing with missing/corrupted data files")]),_v(" "),_c('ol',[_c('li',[_c('em',[_v("{explain how to simulate a missing/corrupted file, and the expected behavior}")])])])]),_v(" "),_c('li',[_c('p',[_c('em',[_v("{ more test cases …​ }")])])])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('small',[_v("["),_c('span',[_c('strong',[_v("Powered by")])]),_v(" "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"30"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.5.3")]),_v(", generated on Thu, 7 Nov 2024, 14:17:46 GMT+8]")])])])}
}];
  