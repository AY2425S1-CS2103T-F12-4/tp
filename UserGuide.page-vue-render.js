
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"sticky":""}},[_c('navbar',{attrs:{"type":"dark"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/tp/index.html","title":"Home"}},[_v("VBook")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('form',{staticClass:"navbar-form"},[_c('searchbar',{attrs:{"data":searchData,"placeholder":"Search","on-hit":searchCallback,"menu-align-right":""}})],1)])]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/tp/index.html"}},[_v("Home")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/tp/UserGuide.html"}},[_v("User Guide")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/tp/DeveloperGuide.html"}},[_v("Developer Guide")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/tp/AboutUs.html"}},[_v("About Us")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/AY2425S1-CS2103T-F12-4/tp/","target":"_blank"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])])],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_c('div',{attrs:{"id":"content-wrapper"}},[_m(0),_v(" "),_m(1),_v(" "),_c('p',[_v("Software developers who type fast can get their contact management tasks done at lightning speed with VBook's keyboard-only navigation feature. With advanced privacy features like password protection and encryption, VBook ensures that software developers’ client details remain secure and confidential at all times.")]),_v(" "),_c('div',{pre:true,attrs:{"class":"page-nav-print d-none d-print-block"}}),_v(" "),_c('hr'),_v(" "),_m(2),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('p',[_c('strong',[_v("Note:")]),_v(" This document assumes familiarity with the command line, though it is not required.")])]),_v(" "),_m(3),_v(" "),_m(4),_m(5),_v(" "),_m(6),_v(" "),_m(7),_v(" "),_m(8),_v(" "),_m(9),_v(" "),_m(10),_v(" "),_m(11),_v(" "),_m(12),_v(" "),_c('p',[_v("For a summary of all our commands, refer to this table below:")]),_v(" "),_m(13),_v(" "),_m(14),_c('box',{attrs:{"type":"info","seamless":""}},[_c('p',[_c('strong',[_v("Notes about the command format:")]),_c('br')]),_v(" "),_c('ul',[_c('li',[_c('p',[_v("Words in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UPPERCASE")]),_v(" are the parameters to be supplied by the user."),_c('br'),_v("\ne.g. in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":add -n NAME")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("NAME")]),_v(" is a parameter which can be used as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":add -n John Doe")]),_v(".")])]),_v(" "),_c('li',[_c('p',[_v("Items in square brackets are optional."),_c('br'),_v("\ne.g. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("-n NAME [-t TAG]")]),_v(" can be used as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("-n John Doe -t friend")]),_v(" or as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("-n John Doe")]),_v(".")])]),_v(" "),_c('li',[_c('p',[_v("Items with "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("…")]),_v("​ after them can be used any number of times."),_c('br'),_v("\ne.g. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("[-t TAG]…​")]),_v(" can be used as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}}),_v(" (i.e. 0 times), "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("-t friend")]),_v(" (i.e. 1 time), "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("-t friend -t family")]),_v(" (i.e. 2 times) etc.")])]),_v(" "),_c('li',[_c('p',[_v("Parameters can be in any order."),_c('br'),_v("\ne.g. if the command specifies "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("-n NAME -p PHONE_NUMBER")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("-p PHONE_NUMBER -n NAME")]),_v(" is also acceptable.")])]),_v(" "),_c('li',[_c('p',[_v("Extraneous parameters for commands that do not take in parameters (such as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":help")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":list")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":quit")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":clear")]),_v(") will be ignored."),_c('br'),_v("\ne.g. if the command specifies "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":help 123")]),_v(", it will be interpreted as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":help")]),_v(".")])]),_v(" "),_c('li',[_c('p',[_v("If you are using a PDF version of this document, be careful when copying and pasting commands that span multiple lines\nas space characters surrounding line-breaks may be omitted when copied over to the application.")])])])]),_v(" "),_m(15),_v(" "),_c('hr'),_v(" "),_m(16),_v(" "),_m(17),_v(" "),_m(18),_v(" "),_m(19),_v(" "),_m(20),_v(" "),_m(21),_v(" "),_m(22),_v(" "),_m(23),_v(" "),_c('box',{attrs:{"type":"tip","seamless":""}},[_c('p',[_c('strong',[_v("Tip:")]),_v(" A person can have any number of tags (including 0).")])]),_v(" "),_m(24),_v(" "),_m(25),_v(" "),_c('p',[_v("From an initial state of the address book as shown above, typing in the commands below will result in an output as shown below.")]),_v(" "),_m(26),_v(" "),_m(27),_v(" "),_m(28),_v(" "),_m(29),_v(" "),_m(30),_v(" "),_m(31),_v(" "),_m(32),_v(" "),_m(33),_v(" "),_m(34),_v(" "),_m(35),_v(" "),_m(36),_v(" "),_m(37),_v(" "),_m(38),_v(" "),_c('p',[_v("From an initial state of the address book as shown above, typing in the commands below will result in an output as shown below.")]),_v(" "),_m(39),_v(" "),_m(40),_v(" "),_m(41),_v(" "),_m(42),_v(" "),_m(43),_v(" "),_m(44),_v(" "),_m(45),_v(" "),_m(46),_v(" "),_m(47),_v(" "),_m(48),_v(" "),_c('p',[_v("From an initial state of the address book as shown above, typing in the commands below will result in an output as shown below.")]),_v(" "),_m(49),_v(" "),_m(50),_v(" "),_m(51),_v(" "),_m(52),_v(" "),_m(53),_v(" "),_m(54),_v(" "),_m(55),_v(" "),_m(56),_v(" "),_c('p',[_v("From an initial state of the address book as shown above, typing in the commands below will result in an output as shown below.")]),_v(" "),_m(57),_v(" "),_m(58),_v(" "),_m(59),_v(" "),_m(60),_v(" "),_m(61),_v(" "),_m(62),_v(" "),_m(63),_v(" "),_m(64),_v(" "),_c('box',{attrs:{"type":"tip","seamless":""}},[_c('p',[_c('strong',[_v("Tip:")]),_v(" "),_c('kbd',[_v("Ctrl-Z")]),_v(" can also be used to undo the last change outside the command box.")])]),_v(" "),_m(65),_v(" "),_m(66),_v(" "),_m(67),_v(" "),_m(68),_v(" "),_c('box',{attrs:{"type":"tip","seamless":""}},[_c('p',[_c('strong',[_v("Tip:")]),_v(" "),_c('kbd',[_v("Ctrl-Shift-Z")]),_v(" can also be used to redo the last change outside the command box.")])]),_v(" "),_m(69),_v(" "),_m(70),_v(" "),_m(71),_v(" "),_c('box',{attrs:{"type":"important","seamless":""}},[_c('p',[_c('strong',[_v("Important:")]),_v(" If you want to transfer your data to a VBook application in another computer, use "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":export")]),_v(" instead of directly copying the data file over. Refer to the "),_c('a',{attrs:{"href":"#FAQ"}},[_v("FAQ")]),_v(" for a detailed guide on this.")])]),_v(" "),_m(72),_v(" "),_m(73),_v(" "),_m(74),_v(" "),_m(75),_v(" "),_m(76),_v(" "),_m(77),_v(" "),_c('hr'),_v(" "),_m(78),_v(" "),_m(79),_m(80),_v(" "),_c('p',[_v("There are two modes in VBook: Command Box and UI Navigation. The following keyboard shortcuts are available in each mode.")]),_v(" "),_m(81),_v(" "),_m(82),_v(" "),_m(83),_v(" "),_m(84),_v(" "),_c('hr'),_v(" "),_m(85),_v(" "),_m(86),_v(" "),_m(87),_v(" "),_c('box',{attrs:{"type":"info"}},[_c('p',[_c('strong',[_v("Info:")]),_v("\nThe password will be hashed with a salt and saved into a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("password.txt")]),_v(" file stored in the same directory as VBook-release-1.5.jar.")])]),_v(" "),_m(88),_v(" "),_c('box',{attrs:{"type":"warning"}},[_c('p',[_c('strong',[_v("Caution:")]),_v("\nIf you forget your password, there is no way to retrieve your data. To re-enter the application, you can delete the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("password.txt")]),_v(" file located in the same directory as VBook.jar.\nHowever, deleting this file will also permanently erase all your address book data. This safeguard is designed to prevent unauthorized users from bypassing the password prompt.")])]),_v(" "),_c('box',{attrs:{"type":"tip","seamless":""}},[_c('p',[_c('strong',[_v("Tip:")]),_v(" Store your password in a secure place to avoid losing access to your data.")])]),_v(" "),_m(89),_v(" "),_m(90),_v(" "),_m(91),_v(" "),_c('box',{attrs:{"type":"info","seamleass":""}},[_c('p',[_c('strong',[_v("Info:")]),_v("\nEncryption only happens the first time you make changes to the address book from the VBook GUI. Loading a JSON file to your directory will not automatically encrypt the file.")])]),_v(" "),_c('hr'),_v(" "),_m(92),_v(" "),_m(93),_v(" "),_m(94),_v(" "),_m(95),_v(" "),_m(96),_v(" "),_c('box',{attrs:{"type":"warning"}},[_c('p',[_c('strong',[_v("Caution:")]),_v("\nDo not make changes to the encrypted JSON file, as it can corrupt the data and make it unreadable. If you want to manually edit the data file, follow these instructions:")]),_v(" "),_c('ol',[_c('li',[_v("Export your data by running "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":export")]),_v(".")]),_v(" "),_c('li',[_v("Overwrite the empty data file in the new computer's "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("data/addressbook.json")]),_v(" with the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addressbook.json")]),_v(" file from your export in Step 1.")]),_v(" "),_c('li',[_v("Run VBook and your modified data should appear.")])])]),_v(" "),_c('box',{attrs:{"type":"tip","seamless":""}},[_c('p',[_c('strong',[_v("Note:")]),_v("\nIf your changes to the data file makes its format invalid, VBook will discard all data and start with an empty data file at the next run. Hence, it is recommended to take a backup of the file before editing it."),_c('br'),_v("\nFurthermore, certain edits can cause the VBook to behave in unexpected ways (e.g. if a value entered is outside the acceptable range). Therefore, edit the data file only if you are confident that you can update it correctly.")])]),_v(" "),_c('hr'),_v(" "),_m(97),_v(" "),_m(98),_v(" "),_m(99),_v(" "),_c('box',{attrs:{"type":"tip","seamless":""}},[_c('p',[_c('strong',[_v("Note:")]),_v(" Your data in your new VBook application will only be encrypted when you make a change to it in the application, through commands (i.e. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":add")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":edit")]),_v(").")])]),_v(" "),_c('hr'),_v(" "),_m(100),_v(" "),_m(101),_v(" "),_c('hr')],1),_v(" "),_c('overlay-source',{attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"},[_c('overlay-source',{staticClass:"nav nav-pills flex-column my-0 small no-flex-wrap",attrs:{"id":"mb-page-nav","tag-name":"nav","to":"mb-page-nav"}},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#vbook-user-guide"}},[_v("VBook User Guide‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#quick-start"}},[_v("Quick Start‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#command-summary"}},[_v("Command Summary‎")])]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#features"}},[_v("Features‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#commands"}},[_v("Commands‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#view-help"}},[_v("View Help‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#add-person"}},[_v("Add Person‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#list-all"}},[_v("List All‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#edit-person"}},[_v("Edit Person‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#find-person"}},[_v("Find Person‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#remove-person"}},[_v("Remove Person‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#undo"}},[_v("Undo‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#redo"}},[_v("Redo‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#export-data"}},[_v("Export Data‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#clear-data"}},[_v("Clear Data‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#quit-program"}},[_v("Quit Program‎")])]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#command-shortcuts"}},[_v("Command Shortcuts‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#keyboard-shortcuts"}},[_v("Keyboard Shortcuts‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#command-box"}},[_v("Command Box‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#ui-navigation"}},[_v("UI Navigation‎")])]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#privacy-and-security"}},[_v("Privacy and Security‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#password-prompt"}},[_v("Password Prompt‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#encryption"}},[_v("Encryption‎")])])]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#file-management"}},[_v("File Management‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#save-data"}},[_v("Save Data‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#edit-data-file"}},[_v("Edit Data File‎")])]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#faq"}},[_v("FAQ‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#known-issues"}},[_v("Known issues‎")])])])],1)]),_v(" "),_c('scroll-top-button')],1),_v(" "),_m(102)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('h1',{attrs:{"id":"vbook-user-guide"}},[_v("VBook User Guide"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#vbook-user-guide","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("VBook is a "),_c('strong',[_v("desktop application for freelance software developers to store and organise client contact details and log client preferences.")]),_v(" VBook is optimized for use via a Command Line Interface (CLI) while still having the benefits of a Graphical User Interface (GUI).")])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"quick-start"}},[_v("Quick Start"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#quick-start","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("Ensure you have Java "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("17")]),_v(" or above installed in your computer. For Mac users, you should use the specific "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Azul JDK 17")]),_v(" distribution following this "),_c('a',{attrs:{"href":"https://se-education.org/guides/tutorials/javaInstallationMac.html"}},[_v("guide")]),_v(".")])]),_v(" "),_c('li',[_c('p',[_v("Download the latest "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("VBook-release-1.5.jar")]),_v(" file from "),_c('a',{attrs:{"href":"https://github.com/AY2425S1-CS2103T-F12-4/tp/releases/tag/v1.5"}},[_v("here")]),_v(".")])]),_v(" "),_c('li',[_c('p',[_v("Copy the file to the folder you want to use as the "),_c('em',[_v("home folder")]),_v(" for VBook.")])]),_v(" "),_c('li',[_c('p',[_v("Open a command terminal, change directory ("),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("cd")]),_v(") into the folder you put the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("VBook-release-1.5.jar")]),_v(" file in, and use the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("java -jar VBook-release-1.5.jar")]),_v(" command to run the application."),_c('br')])])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs shell"}},[_c('span',[_v("cd path/to/vbook\n")]),_c('span',[_v("java -jar VBook-release-1.5.jar\n")])])])}
},function anonymous(
) {
with(this){return _c('ol',{attrs:{"start":"5"}},[_c('li',[_v("An initial dialog will appear to prompt you to set a new password.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/images/setPasswordDialog.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/setPasswordDialog.png","alt":"setPasswordDialog","width":"60%"}})])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("On subsequent logins, the password dialog will prompt you to enter the password that you set.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/images/enterPasswordDialog.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/enterPasswordDialog.png","alt":"enterPasswordDialog","width":"60%"}})])])}
},function anonymous(
) {
with(this){return _c('ol',{attrs:{"start":"6"}},[_c('li',[_v("A GUI similar to the screenshot below should appear upon successful login. The application contains some sample data for you to get familiar with the application."),_c('br')])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/images/VBook_annotated.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/VBook_annotated.png","alt":"VBook_annotated.png"}})])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("Contacts are shown in the Display List.")]),_v(" "),_c('li',[_v("Commands are typed in the Command Box.")]),_v(" "),_c('li',[_v("Results will be displayed in the Result Display.")])])}
},function anonymous(
) {
with(this){return _c('ol',{attrs:{"start":"7"}},[_c('li',[_v("Type any command in the Command Box and press "),_c('kbd',[_v("ENTER")]),_v(" to execute it. For example, typing "),_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":help")])]),_v(" and pressing "),_c('kbd',[_v("ENTER")]),_v(" will open the help window.")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"command-summary"}},[_v("Command Summary"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#command-summary","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"table-responsive"},[_c('table',{staticClass:"markbind-table table table-bordered table-striped"},[_c('thead',[_c('tr',[_c('th',[_v("Action")]),_v(" "),_c('th',[_v("Format")]),_v(" "),_c('th',[_v("Examples")])])]),_v(" "),_c('tbody',[_c('tr',[_c('td',[_c('strong',[_v("Add"),_c('br')])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":add -n NAME [-p PHONE_NUMBER] [-e EMAIL] [-l LOCATION] [-t TAG]… [-r REMARK]")]),_c('br'),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":a -n NAME [-p PHONE_NUMBER] [-e EMAIL] [-l LOCATION] [-t TAG]… -[r REMARK]")]),_c('br')]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":add -n James Ho -p 98765432 -e jamesho@example.com -l 123, Clementi Rd, 1234665 -t friend -r My favourite colleague")]),_c('br'),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":a -n James Ho -p 98765432 -e jamesho@example.com -l 123, Clementi Rd, 1234665 -t friend -r My favourite colleague")]),_c('br')])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Clear"),_c('br')])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":clear")]),_c('br'),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":cl")]),_c('br')]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":clear")]),_c('br'),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":cl")]),_c('br')])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Delete"),_c('br')])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":remove -i INDEX")]),_c('br'),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":rm -i INDEX")]),_c('br')]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":remove -i 3")]),_c('br'),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":rm -i 3")]),_c('br')])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Edit"),_c('br')])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":edit INDEX [-n NAME] [-p PHONE] [-e EMAIL] [-a ADDRESS] [-t TAG]…")]),_c('br'),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":ed INDEX [-n NAME] [-p PHONE] [-e EMAIL] [-a ADDRESS] [-t TAG]…")]),_c('br')]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":edit 2 -n James Lee -e jameslee@example.com")]),_c('br'),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":ed 2 -n James Lee -e jameslee@example.com")]),_c('br')])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Quit"),_c('br')])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":quit")]),_c('br'),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":q")]),_c('br')]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":quit")]),_c('br'),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":q")]),_c('br')])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Export"),_c('br')])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":export")]),_c('br'),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":exp")]),_c('br')]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":export")]),_c('br'),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":exp")]),_c('br')])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Find"),_c('br')])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":find [-n NAME] [-p PHONE] [-e EMAIL] [-a ADDRESS] [-t TAG]…")]),_c('br'),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":f [-n NAME] [-p PHONE] [-e EMAIL] [-a ADDRESS] [-t TAG]…")]),_c('br')]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":find -n david -l serangoon")]),_c('br'),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":f -n david -l serangoon")]),_c('br')])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Help"),_c('br')])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":help")]),_c('br'),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":h")]),_c('br')]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":help")]),_c('br'),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":h")]),_c('br')])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("List"),_c('br')])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":list")]),_c('br'),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":ls")]),_c('br')]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":list")]),_c('br'),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":ls")]),_c('br')])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Redo"),_c('br')])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":redo")]),_c('br'),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":r")]),_c('br')]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":redo")]),_c('br'),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":r")]),_c('br')])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Undo"),_c('br')])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":undo")]),_c('br'),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":u")]),_c('br')]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":undo")]),_c('br'),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":u")]),_c('br')])])])])])}
},function anonymous(
) {
with(this){return _c('p',[_v("Refer to the "),_c('a',{attrs:{"href":"#features"}},[_v("Features")]),_v(" below for details of each command.")])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"features"}},[_v("Features"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#features","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"commands"}},[_v("Commands"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#commands","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"view-help"}},[_v("View Help"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#view-help","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('blockquote',[_c('p',[_v("Shows a command cheatsheet, as well as a link to access this user guide.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Format")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":help")]),_c('br'),_v(" "),_c('strong',[_v("Shortcut:")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":h")])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"add-person"}},[_v("Add Person"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#add-person","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('blockquote',[_c('p',[_v("Adds a person to the address book.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Format:")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":add -n NAME [-p PHONE_NUMBER] [-e EMAIL] [-l LOCATION] [-t TAG]… [-r REMARK]")]),_c('br'),_v(" "),_c('strong',[_v("Shortcut:")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":a")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Examples:")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/images/addPersonInitalState.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/addPersonInitalState.png","alt":"addPersonInitalState.png","width":"60%"}})])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("To add a client you met at a wedding named \"Jack Lee\", key in\n"),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":add -n Jack Lee")]),_v(".")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/images/addJackLee.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/addJackLee.png","alt":"addJackLee.png","width":"60%"}})])])}
},function anonymous(
) {
with(this){return _c('ol',{attrs:{"start":"2"}},[_c('li',[_v("To add a friend and client you met at a conference named \"Ivy King\", with a phone number of \"87654320\", an email of \""),_c('a',{attrs:{"href":"mailto:ivyk@example.com"}},[_v("ivyk@example.com")]),_v("\", with location of \"808 Palm St\", key in\n"),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":a -n Ivy King -p 87654320 -e ivyk@example.com -l 808 Palm St -t friend -t client -r Met at a conference")]),_v(".")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/images/addIvyKing.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/addIvyKing.png","alt":"addIvyKing.png","width":"60%"}})])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"list-all"}},[_v("List All"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#list-all","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('blockquote',[_c('p',[_v("Shows a list of all persons in the address book.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Format:")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":list")]),_c('br'),_v(" "),_c('strong',[_v("Shortcut:")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":ls")])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"edit-person"}},[_v("Edit Person"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#edit-person","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('blockquote',[_c('p',[_v("Edits an existing person in the address book.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Format:")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":edit INDEX [-n NAME] [-p PHONE] [-e EMAIL] [-l LOCATION] [-t TAG]…​")]),_c('br'),_v(" "),_c('strong',[_v("Shortcut:")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":ed​")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Edits the person at the specified index. The index refers to the index number shown in the displayed person list.\nThe index "),_c('strong',[_v("must be a positive integer")]),_v(" 1, 2, 3, …​")]),_v(" "),_c('li',[_v("At least one of the optional fields must be provided.")]),_v(" "),_c('li',[_v("Existing values will be updated to the input values.")]),_v(" "),_c('li',[_v("When editing tags, the existing tags of the person will be removed i.e. adding of tags is not cumulative.")]),_v(" "),_c('li',[_v("You can remove all the person’s tags by typing "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("-t ")]),_v(" without\nspecifying any tags after it.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Examples:")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/images/addPersonInitalState.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/addPersonInitalState.png","alt":"addPersonInitalState.png","width":"60%"}})])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("To edit the first person's phone number and email address to be \"91234567\" and \""),_c('a',{attrs:{"href":"mailto:johndoe@example.com"}},[_v("johndoe@example.com")]),_v("\" respectively, key in: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":edit 1 -p 91234567 -e johndoe@example.com")]),_v(".")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/images/editJohnDoe.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/editJohnDoe.png","alt":"editJohnDoe.png","width":"60%"}})])])}
},function anonymous(
) {
with(this){return _c('ol',{attrs:{"start":"2"}},[_c('li',[_v("To edit the second person's name to \"Betsy Crower\" and clear all existing tags, key in: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":edit 2 -n Betsy Crower -t ")]),_v(".")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/images%2FeditBetsyCrower.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images%2FeditBetsyCrower.png","alt":"editBetsyCrower.png","width":"60%"}})])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"find-person"}},[_v("Find Person"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#find-person","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('blockquote',[_c('p',[_v("Finds persons whose names contain any of the given keywords.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Format:")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":find [-n NAME] [-p PHONE] [-e EMAIL] [-a ADDRESS] [-t TAG]…​")]),_c('br'),_v(" "),_c('strong',[_v("Shortcut:")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":f")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("The search is case-insensitive. "),_c('br'),_v("\nE.g. \"hans\" will match \"Hans\".")]),_v(" "),_c('li',[_v("Persons with a certain name, phone number, email, address and remark can be searched through flags."),_c('br'),_v("\nE.g. to find a person with the name \"david\" and remark \"busy\", the arguments would be "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("-n david -r busy")]),_v(".")]),_v(" "),_c('li',[_v("Each flag is optional, but there must be at least one flag in a query.")]),_v(" "),_c('li',[_v("As long as the contact contains the query, it is considered a match, e.g. searching \"Han\" will bring up \"Hans\".")]),_v(" "),_c('li',[_v("Only persons matching all keywords will be returned."),_c('br'),_v("\nE.g. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":find -n Hans -p 98765432")]),_v(" will not return \"Hans\" if his phone number is not \"98765432\".")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Examples:")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/images/addPersonInitalState.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/addPersonInitalState.png","alt":"addPersonInitalState.png","width":"60%"}})])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("To find a person named \"Alice\" with location \"789 Oak St\", key in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":find -n alice -l oak")]),_v(".")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/images/findAlice.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/findAlice.png","alt":"findAlice.png","width":"60%"}})])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"remove-person"}},[_v("Remove Person"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#remove-person","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('blockquote',[_c('p',[_v("Removes the specified person(s) from the address book.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Format:")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":remove -i INDEX1, INDEX2, ...")]),_c('br'),_v(" "),_c('strong',[_v("Shortcut:")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":rm")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Removes the person at the specified index.")]),_v(" "),_c('li',[_v("The index refers to the index number shown in the displayed list.")]),_v(" "),_c('li',[_v("Multiple persons can be deleted by listing their indexes, separated by commas.")]),_v(" "),_c('li',[_v("The index "),_c('strong',[_v("must be a positive integer")]),_v(" 1, 2, 3, ...")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Examples:")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/images/removePersonInitialState.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/removePersonInitialState.png","alt":"removePersonInitialState.png","width":"60%"}})])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("To remove the 1st and 3rd person in your address book, key in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":list")]),_v(" to list all your contacts, followed by "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":remove -i 1, 3")]),_v(".")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/images/remove1st3rdPerson.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/remove1st3rdPerson.png","alt":"remove1st3rdPerson.png","width":"60%"}})])])}
},function anonymous(
) {
with(this){return _c('ol',{attrs:{"start":"2"}},[_c('li',[_v("To remove a person named \"Betsy Crower\", key in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":find -n Betsy")]),_v(" followed by "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":remove -i 1")]),_v(" to delete the 1st person named \"Betsy\" in the result of the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":find")]),_v(" command. If you have multiple people named \"Betsy\", you can delete them using their specified index as well.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/images/removeBetsy.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/removeBetsy.png","alt":"removeBetsy.png","width":"60%"}})])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"undo"}},[_v("Undo"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#undo","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('blockquote',[_c('p',[_v("Reverts the address book to the state before the last change."),_c('br'),_v("\nUser can undo up to "),_c('strong',[_v("10 changes")]),_v("."),_c('br'),_v("\nCan undo commands that change the address book data, such as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":add")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":remove")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":edit")]),_v(".")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Format:")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":undo")]),_c('br'),_v(" "),_c('strong',[_v("Shortcut:")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":u")]),_c('br'),_v(" "),_c('strong',[_v("Examples:")])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("If you accidentally added a person named \"John Doe\" to the address book (through an "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":add")]),_v(" command), to undo the command and remove \"John Doe\", key in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":undo")]),_v(".")]),_v(" "),_c('li',[_v("If you accidentally deleted an important contact named \"Betsy\" (through a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":remove")]),_v(" command), to undo the command and restore the contact, key in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":undo")]),_v(".")])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"redo"}},[_v("Redo"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#redo","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('blockquote',[_c('p',[_v("Reapplies the last change to the address book that was undone with the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":undo")]),_v(" command."),_c('br'),_v("\nUser can redo up to "),_c('strong',[_v("10 changes")]),_v(" that were undone with the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":undo")]),_v(" command.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Format:")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":redo")]),_c('br'),_v(" "),_c('strong',[_v("Shortcut:")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":r")]),_c('br'),_v(" "),_c('strong',[_v("Examples:")])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("Given that "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":undo")]),_v(" was used to revert the addition of \"John Doe\", to add \"John Doe\" back to the address book, key in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":redo")]),_v(".")]),_v(" "),_c('li',[_v("Given that "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":undo")]),_v(" was used to revert the deletion of \"Betsy\", to delete \"Betsy\" again, key in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":redo")]),_v(".")])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"export-data"}},[_v("Export Data"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#export-data","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('blockquote',[_c('p',[_v("Exports the address book data to a specified file in JSON format. Upon command, user will be prompted to\nselect a directory to save the file.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Format:")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":export")]),_c('br'),_v(" "),_c('strong',[_v("Shortcut")]),_v(": "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":exp")])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"clear-data"}},[_v("Clear Data"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#clear-data","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('blockquote',[_c('p',[_v("Clears all entries from the address book's data.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Format:")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":clear")]),_c('br'),_v(" "),_c('strong',[_v("Shortcut:")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":cl")])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"quit-program"}},[_v("Quit Program"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#quit-program","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('blockquote',[_c('p',[_v("Quits the program.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Format:")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":quit")]),_c('br'),_v(" "),_c('strong',[_v("Shortcut:")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":q")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"command-shortcuts"}},[_v("Command Shortcuts"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#command-shortcuts","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"table-responsive"},[_c('table',{staticClass:"markbind-table table table-bordered table-striped"},[_c('thead',[_c('tr',[_c('th',[_v("Command")]),_v(" "),_c('th',[_v("Shortcut")])])]),_v(" "),_c('tbody',[_c('tr',[_c('td',[_v("View Help")]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":h")])])]),_v(" "),_c('tr',[_c('td',[_v("Add Person")]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":a")])])]),_v(" "),_c('tr',[_c('td',[_v("List All")]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":ls")])])]),_v(" "),_c('tr',[_c('td',[_v("Edit Person")]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":ed ")])])]),_v(" "),_c('tr',[_c('td',[_v("Find Person")]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":f")])])]),_v(" "),_c('tr',[_c('td',[_v("Remove Person")]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":rm ")])])]),_v(" "),_c('tr',[_c('td',[_v("Undo")]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":u")])])]),_v(" "),_c('tr',[_c('td',[_v("Redo")]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":r")])])]),_v(" "),_c('tr',[_c('td',[_v("Export Data")]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":exp")])])]),_v(" "),_c('tr',[_c('td',[_v("Clear Data")]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":cl")])])]),_v(" "),_c('tr',[_c('td',[_v("Quit")]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":q")])])])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"keyboard-shortcuts"}},[_v("Keyboard Shortcuts"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#keyboard-shortcuts","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"command-box"}},[_v("Command Box"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#command-box","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('kbd',[_v("Ctrl + Z")]),_v(" - Undo the last change in the command box.")]),_v(" "),_c('li',[_c('kbd',[_v("F1")]),_v(" - Open the Help Window.")]),_v(" "),_c('li',[_c('kbd',[_v("ESC")]),_v(" - Go back to UI Navigation Mode.")])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"ui-navigation"}},[_v("UI Navigation"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#ui-navigation","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('kbd',[_v("Ctrl + Z")]),_v(" - Undo the last change made to the address book.")]),_v(" "),_c('li',[_c('kbd',[_v("Ctrl + Shift + Z")]),_v(" - Redo the last undone change made to the address book.")]),_v(" "),_c('li',[_c('kbd',[_v("F1")]),_v(" - Open the Help Window.")]),_v(" "),_c('li',[_c('kbd',[_v("Up-arrow")]),_v(" - Highlight the previous contact in the list.")]),_v(" "),_c('li',[_c('kbd',[_v("Down-arrow")]),_v(" - Highlight the next contact in the list.")]),_v(" "),_c('li',[_c('kbd',[_v(":")]),_v(" - Focus on the Command Box.")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"privacy-and-security"}},[_v("Privacy and Security"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#privacy-and-security","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"password-prompt"}},[_v("Password Prompt"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#password-prompt","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Initial Setup:")]),_v("\nWhen you launch VBook for the first time, you’ll be prompted to create a new password. This password will be used to control access to your address book.")])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Subsequent Logins:")]),_v("\nEach time you open VBook, you’ll be prompted to enter your password. This ensures that your data remains secure and accessible only to authorized users.")])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"encryption"}},[_v("Encryption"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#encryption","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("How it Works:")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("When you enter your password during the initial setup, it generates an encryption key saved as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("vbook.jks")]),_v(" stored in the same directory as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("VBook-release-1.5.jar")]),_v(".")]),_v(" "),_c('li',[_v("All your address book data is encrypted using this key and saved securely on your device.")]),_v(" "),_c('li',[_v("Each time you open the app, the password is used to decrypt the data for access.")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"file-management"}},[_v("File Management"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#file-management","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"save-data"}},[_v("Save Data"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#save-data","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('blockquote',[_c('p',[_v("VBook data are saved in the hard disk automatically after any command that changes the data. There is no need to\nsave manually.")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"edit-data-file"}},[_v("Edit Data File"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#edit-data-file","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('blockquote',[_c('p',[_v("The encrypted VBook data are saved automatically as a JSON file "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("[JAR file location]/data/addressbook.json")]),_v(".")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"faq"}},[_v("FAQ"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#faq","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Q")]),_v(": How do I transfer my data to another computer?"),_c('br'),_v(" "),_c('strong',[_v("A")]),_v(": To transfer your data over, follow these steps:")])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("Export your data from your current computer by running "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":export")]),_v(".")]),_v(" "),_c('li',[_v("Install VBook in the other computer (refer to "),_c('a',{attrs:{"href":"#Quick-start"}},[_v("Quick Start")]),_v(" for more information).")]),_v(" "),_c('li',[_v("Overwrite the empty data file in the new computer's "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("data/addressbook.json")]),_v(" with the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addressbook.json")]),_v(" file from your export in Step 1.")]),_v(" "),_c('li',[_v("Run VBook and your data should appear in your new computer.")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"known-issues"}},[_v("Known issues"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#known-issues","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('strong',[_v("When using multiple screens")]),_v(", if you move the application to a secondary screen, and later switch to using only\nthe primary screen, the GUI will open off-screen. The remedy is to delete the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("preferences.json")]),_v(" file created by the\napplication before running the application again.")]),_v(" "),_c('li',[_c('strong',[_v("If you minimize the Help Window")]),_v(" and then run the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":help")]),_v(" command (or use the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Help")]),_v(" menu, or the keyboard shortcut "),_c('kbd',[_v("F1")]),_v(") again, the original Help Window will remain minimized, and no new Help Window will appear. The remedy is to manually restore the minimized Help Window.")])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('small',[_v("["),_c('span',[_c('strong',[_v("Powered by")])]),_v(" "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"30"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.5.3")]),_v(", generated on Thu, 7 Nov 2024, 22:46:06 GMT+8]")])])])}
}];
  