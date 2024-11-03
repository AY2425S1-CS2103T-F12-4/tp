
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"sticky":""}},[_c('navbar',{attrs:{"type":"dark"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/tp/index.html","title":"Home"}},[_v("VBook")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('form',{staticClass:"navbar-form"},[_c('searchbar',{attrs:{"data":searchData,"placeholder":"Search","on-hit":searchCallback,"menu-align-right":""}})],1)])]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/tp/index.html"}},[_v("Home")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/tp/UserGuide.html"}},[_v("User Guide")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/tp/DeveloperGuide.html"}},[_v("Developer Guide")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/tp/AboutUs.html"}},[_v("About Us")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/AY2425S1-CS2103T-F12-4/tp/","target":"_blank"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])])],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_c('div',{attrs:{"id":"content-wrapper"}},[_m(0),_v(" "),_m(1),_v(" "),_c('div',{pre:true,attrs:{"class":"page-nav-print d-none d-print-block"}}),_v(" "),_c('hr'),_v(" "),_m(2),_v(" "),_m(3),_v(" "),_m(4),_v(" "),_m(5),_m(6),_v(" "),_c('hr'),_v(" "),_m(7),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('p',[_c('strong',[_v("Notes about the command format:")]),_c('br')]),_v(" "),_c('ul',[_c('li',[_c('p',[_v("Words in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UPPER_CASE")]),_v(" are the parameters to be supplied by the user."),_c('br'),_v("\ne.g. in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":add -n NAME")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("NAME")]),_v(" is a parameter which can be used as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":add -n John Doe")]),_v(".")])]),_v(" "),_c('li',[_c('p',[_v("Items in square brackets are optional."),_c('br'),_v("\ne.g. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("-n NAME [-t TAG]")]),_v(" can be used as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("-n John Doe -t friend")]),_v(" or as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("-n John Doe")]),_v(".")])]),_v(" "),_c('li',[_c('p',[_v("Items with "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("…")]),_v("​ after them can be used multiple times including zero times."),_c('br'),_v("\ne.g. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("[-t TAG]…​")]),_v(" can be used as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}}),_v(" (i.e. 0 times), "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("-t friend")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("-t friend -t family")]),_v(" etc.")])]),_v(" "),_c('li',[_c('p',[_v("Parameters can be in any order."),_c('br'),_v("\ne.g. if the command specifies "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("-n NAME -p PHONE_NUMBER")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("-p PHONE_NUMBER -n NAME")]),_v(" is also acceptable.")])]),_v(" "),_c('li',[_c('p',[_v("Extraneous parameters for commands that do not take in parameters (such as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":help")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":list")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":exit")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":clear")]),_v(")\nwill\nbe ignored."),_c('br'),_v("\ne.g. if the command specifies "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":help 123")]),_v(", it will be interpreted as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":help")]),_v(".")])]),_v(" "),_c('li',[_c('p',[_v("If you are using a PDF version of this document, be careful when copying and pasting commands that span multiple lines\nas space characters surrounding line-breaks may be omitted when copied over to the application.")])])])]),_v(" "),_m(8),_v(" "),_m(9),_v(" "),_m(10),_v(" "),_m(11),_v(" "),_m(12),_v(" "),_m(13),_v(" "),_c('box',{attrs:{"type":"tip","seamless":""}},[_c('p',[_c('strong',[_v("Tip:")]),_v(" A person can have any number of tags (including 0)")])]),_v(" "),_m(14),_v(" "),_m(15),_v(" "),_m(16),_v(" "),_m(17),_v(" "),_m(18),_v(" "),_m(19),_v(" "),_m(20),_v(" "),_m(21),_v(" "),_m(22),_v(" "),_m(23),_v(" "),_m(24),_v(" "),_m(25),_v(" "),_m(26),_v(" "),_m(27),_v(" "),_m(28),_v(" "),_m(29),_v(" "),_m(30),_v(" "),_m(31),_v(" "),_m(32),_v(" "),_m(33),_v(" "),_m(34),_v(" "),_m(35),_v(" "),_m(36),_v(" "),_m(37),_v(" "),_m(38),_v(" "),_m(39),_v(" "),_m(40),_v(" "),_m(41),_v(" "),_m(42),_v(" "),_m(43),_v(" "),_m(44),_v(" "),_m(45),_v(" "),_m(46),_v(" "),_m(47),_v(" "),_m(48),_v(" "),_m(49),_v(" "),_m(50),_v(" "),_m(51),_v(" "),_m(52),_v(" "),_m(53),_v(" "),_m(54),_v(" "),_m(55),_v(" "),_m(56),_v(" "),_m(57),_v(" "),_m(58),_v(" "),_m(59),_v(" "),_c('box',{attrs:{"type":"warning","seamless":""}},[_c('p',[_c('strong',[_v("Caution:")]),_v("\nIf your changes to the data file makes its format invalid, VBook will discard all data and start with an empty\ndata file at the next run. Hence, it is recommended to take a backup of the file before editing it."),_c('br'),_v("\nFurthermore, certain edits can cause the AddressBook to behave in unexpected ways (e.g., if a value entered is outside\nthe acceptable range). Therefore, edit the data file only if you are confident that you can update it correctly.")])]),_v(" "),_c('hr'),_v(" "),_m(60),_v(" "),_m(61),_v(" "),_c('hr'),_v(" "),_m(62),_v(" "),_m(63),_v(" "),_c('hr')],1),_v(" "),_c('overlay-source',{attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"},[_c('overlay-source',{staticClass:"nav nav-pills flex-column my-0 small no-flex-wrap",attrs:{"id":"mb-page-nav","tag-name":"nav","to":"mb-page-nav"}},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#vbook-user-guide"}},[_v("VBook User Guide‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#quick-start"}},[_v("Quick start‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#command-summary"}},[_v("Command Summary‎")])]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#features"}},[_v("Features‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#view-help"}},[_v("View Help‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#add-person"}},[_v("Add Person‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#list-all"}},[_v("List All‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#edit-person"}},[_v("Edit Person‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#find-person"}},[_v("Find Person‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#delete-person"}},[_v("Delete Person‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#undo"}},[_v("Undo‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#redo"}},[_v("Redo‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#export-data"}},[_v("Export Data‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#clear-data"}},[_v("Clear Data‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#exit-program"}},[_v("Exit Program‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#save-data"}},[_v("Save Data‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#edit-data-file"}},[_v("Edit Data File‎")])]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#faq"}},[_v("FAQ‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#known-issues"}},[_v("Known issues‎")])])])],1)]),_v(" "),_c('scroll-top-button')],1),_v(" "),_m(64)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('h1',{attrs:{"id":"vbook-user-guide"}},[_v("VBook User Guide"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#vbook-user-guide","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("VBook is a "),_c('strong',[_v("desktop app for freelance software developers to manage contacts, optimized for use via a Command Line\nInterface")]),_v(" (CLI) while still\nhaving the benefits of a Graphical User Interface (GUI). If you can type fast, VBook can get your contact management\ntasks done faster than traditional GUI apps.")])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"quick-start"}},[_v("Quick start"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#quick-start","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("Ensure you have Java "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("17")]),_v(" or above installed in your Computer.")])]),_v(" "),_c('li',[_c('p',[_v("Download the latest "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(".jar")]),_v(" file from "),_c('a',{attrs:{"href":"https://github.com/AY2425S1-CS2103T-F12-4/tp/releases/tag/v1.4"}},[_v("here")]),_v(".")])]),_v(" "),_c('li',[_c('p',[_v("Copy the file to the folder you want to use as the "),_c('em',[_v("home folder")]),_v(" for your AddressBook.")])]),_v(" "),_c('li',[_c('p',[_v("Open a command terminal, "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("cd")]),_v(" into the folder you put the jar file in, and use the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("java -jar  VBook-release-1.4.jar ")]),_v(" command\nto run the application."),_c('br'),_v("\nA GUI similar to the below should appear in a few seconds. Note how the app contains some sample data."),_c('br'),_v(" "),_c('a',{attrs:{"href":"/tp/images/Ui.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/Ui.png","alt":"Ui"}})])])]),_v(" "),_c('li',[_c('p',[_v("Type the command in the command box and press Enter to execute it. e.g. typing "),_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":help")])]),_v(" and pressing Enter will\nopen the help window."),_c('br')])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"command-summary"}},[_v("Command Summary"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#command-summary","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"table-responsive"},[_c('table',{staticClass:"markbind-table table table-bordered table-striped"},[_c('thead',[_c('tr',[_c('th',[_v("Action")]),_v(" "),_c('th',[_v("Format")]),_v(" "),_c('th',[_v("Examples")])])]),_v(" "),_c('tbody',[_c('tr',[_c('td',[_c('strong',[_v("Add")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":add -n NAME -p PHONE_NUMBER -e EMAIL -l LOCATION -t TAG -r REMARK…​")]),_v(" "),_c('br'),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":a -n NAME ...")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":add -n James Ho -p 22224444 -e jamesho@example.com -l 123, Clementi Rd, 1234665 -t friend -r My favourite colleague")]),_v(" "),_c('br'),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":a -n James Ho...")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Clear")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":clear")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":clear")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Delete")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":remove -i INDEX")]),_c('br'),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":rm -i INDEX1, INDEX2, ...")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":remove -i 3,4,5")]),_c('br'),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":rm -i 3,4,5")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Edit")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":edit INDEX [-n NAME] [-p PHONE] [-e EMAIL] [-a ADDRESS] [-t TAG]…​")]),_c('br'),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":ed INDEX -n NAME...")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":edit 2 -n James Lee -e jameslee@example.com")]),_c('br'),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":ed 2 -n Joshua...")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Exit")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":exit")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":exit")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Export")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":export")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":export")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Find")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":find [-n NAME] [-p PHONE] [-e EMAIL] [-a ADDRESS] [-t TAG]…​")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":find -n david -l serangoon")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Help")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":help")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":help")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("List")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":list")]),_c('br'),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":ls")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":list")]),_c('br'),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":ls")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Redo")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":redo")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":redo")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Undo")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":undo")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":undo")])])])])])])}
},function anonymous(
) {
with(this){return _c('p',[_v("Refer to the "),_c('a',{attrs:{"href":"#features"}},[_v("Features")]),_v(" below for details of each command.")])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"features"}},[_v("Features"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#features","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"view-help"}},[_v("View Help"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#view-help","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('blockquote',[_c('p',[_v("Shows a command cheatsheet, as well as a link to access the user guide.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Command:")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":help")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"add-person"}},[_v("Add Person"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#add-person","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('blockquote',[_c('p',[_v("Adds a person to the address book.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Short command:")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":a -n NAME -p PHONE_NUMBER -e EMAIL -l ADDRESS [-t TAG]…​")]),_c('br'),_v(" "),_c('strong',[_v("Long command:")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":add -n NAME -p PHONE_NUMBER -e EMAIL -l ADDRESS [-t TAG]…​")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Examples:")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":add -n John Doe -p 98765432 -e johnd@example.com -l John street, block 123, #01-01")])]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":a -n Betsy Crowe -t friend -e betsycrowe@example.com -l Newgate Prison -p 1234567 -t criminal")])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"list-all"}},[_v("List All"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#list-all","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('blockquote',[_c('p',[_v("Shows a list of all persons in the address book.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Short command:")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":ls")]),_c('br'),_v(" "),_c('strong',[_v("Long command:")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":list")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"edit-person"}},[_v("Edit Person"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#edit-person","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('blockquote',[_c('p',[_v("Edits an existing person in the address book.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Short command:")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":ed INDEX [-n NAME] [-p PHONE] [-e EMAIL] [-a ADDRESS] [-t TAG]…​")]),_c('br'),_v(" "),_c('strong',[_v("Long command:")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":edit INDEX [-n NAME] [-p PHONE] [-e EMAIL] [-a ADDRESS] [-t TAG]…​")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Edits the person at the specified "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("INDEX")]),_v(". The index refers to the index number shown in the displayed person list.\nThe index "),_c('strong',[_v("must be a positive integer")]),_v(" 1, 2, 3, …​")]),_v(" "),_c('li',[_v("At least one of the optional fields must be provided.")]),_v(" "),_c('li',[_v("Existing values will be updated to the input values.")]),_v(" "),_c('li',[_v("When editing tags, the existing tags of the person will be removed i.e. adding of tags is not cumulative.")]),_v(" "),_c('li',[_v("You can remove all the person’s tags by typing "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("-t ")]),_v(" without\nspecifying any tags after it.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Examples:")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":edit 1 -p 91234567 -e johndoe@example.com")]),_v(" Edits the phone number and email address of the 1st person to be\n"),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("91234567")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("johndoe@example.com")]),_v(" respectively.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":edit 2 -n Betsy Crower -t ")]),_v(" Edits the name of the 2nd person to be "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Betsy Crower")]),_v(" and clears all existing tags.")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"find-person"}},[_v("Find Person"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#find-person","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('blockquote',[_c('p',[_v("Finds persons whose names contain any of the given keywords.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Command:")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":find [-n NAME] [-p PHONE] [-e EMAIL] [-a ADDRESS] [-t TAG]…​")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("The search is case-insensitive. "),_c('br'),_v("\ne.g. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("hans")]),_v(" will match "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Hans")])]),_v(" "),_c('li',[_v("Persons with a certain name, phone number, email, address and remark can be searched through flags."),_c('br'),_v("\ne.g. to find a person with the name "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("david")]),_v(" and remark "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("busy")]),_v(", the arguments would be "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("-n david -r busy")])]),_v(" "),_c('li',[_v("Each flag is optional, but there must be at least one flag in a query.")]),_v(" "),_c('li',[_v("As long as the contact contains the query, it is considered a match, e.g. searching"),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Han")]),_v(" will bring up "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Hans")])]),_v(" "),_c('li',[_v("Only persons matching all keywords will be returned (i.e. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AND")]),_v(" search)."),_c('br'),_v("\ne.g. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("-n Hans -p 98765432")]),_v(" will not return "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Hans")]),_v(" if his phone number is not "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("98765432")]),_v(".")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Examples:")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":find -l Serangoon")]),_v(" returns "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Bernice Yu")]),_v(" with location "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Serangoon Gardens")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("David Li")]),_v(" with\nlocation "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Serangoon Gardens")])]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":find -n david -l serangoon")]),_v(" returns "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("David Li")]),_v(" with location "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Serangoon Gardens")]),_v(" "),_c('a',{attrs:{"href":"/tp/images/findDavidSerangoonResult.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/findDavidSerangoonResult.png","alt":"result for ':find -n david -l serangoon'"}})])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"delete-person"}},[_v("Delete Person"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#delete-person","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('blockquote',[_c('p',[_v("Deletes the specified person from the address book.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Short command:")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":rm -i INDEX1, INDEX2, ...")]),_c('br'),_v(" "),_c('strong',[_v("Long command:")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":remove -i INDEX1, INDEX2, ...")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Deletes the person at the specified "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("INDEX")]),_v(".")]),_v(" "),_c('li',[_v("The index refers to the index number shown in the displayed person list.")]),_v(" "),_c('li',[_v("The index "),_c('strong',[_v("must be a positive integer")]),_v(" 1, 2, 3, ...")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Examples:")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":list")]),_v(" followed by "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":rm -i 2, 3")]),_v(" deletes the 2nd and 3rd person in the address book.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":find Betsy")]),_v(" followed by "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":rm -i 1")]),_v(" deletes the 1st person in the results of the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":find")]),_v(" command.")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"undo"}},[_v("Undo"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#undo","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('blockquote',[_c('p',[_v("Reverts the address book to the state before the last change."),_c('br'),_v("\nUser can undo up to "),_c('strong',[_v("10 changes")]),_v("."),_c('br'),_v("\nCan undo commands that change the address book data, such as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":add")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":remove")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":edit")]),_v(".")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Command:")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":undo")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Examples:")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("If we add a new contact with "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":add -n John Doe -p 98765432 -e johnd@example.com -l John street, block 123, #01-01")]),_v(",\nusing "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":undo")]),_v(" will remove John Doe from the address book.")]),_v(" "),_c('li',[_v("If we delete a contact with "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":rm -i 3")]),_v(", using "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":undo")]),_v(" will restore the deleted contact.")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"redo"}},[_v("Redo"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#redo","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('blockquote',[_c('p',[_v("Reapplies the last undone change to the address book."),_c('br'),_v("\nUser can redo up to 10 undo changes.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Command:")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":redo")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Examples:")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("After using "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":undo")]),_v(" to revert the addition of John Doe, using "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":redo")]),_v(" will add John Doe back to the address book.")]),_v(" "),_c('li',[_v("After using "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":undo")]),_v(" to revert the deletion of a contact, using "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":redo")]),_v(" will delete the contact again.")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"export-data"}},[_v("Export Data"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#export-data","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('blockquote',[_c('p',[_v("Exports the address book data to a specified file in JSON format. Upon command, user will be prompted to\nselect a directory to save the file.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Command:")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":export")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"clear-data"}},[_v("Clear Data"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#clear-data","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('blockquote',[_c('p',[_v("Clears all entries from the address book.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Command:")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":clear")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"exit-program"}},[_v("Exit Program"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#exit-program","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('blockquote',[_c('p',[_v("Exits the program.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Command:")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":exit")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"save-data"}},[_v("Save Data"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#save-data","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('blockquote',[_c('p',[_v("AddressBook data are saved in the hard disk automatically after any command that changes the data. There is no need to\nsave manually.")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"edit-data-file"}},[_v("Edit Data File"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#edit-data-file","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('blockquote',[_c('p',[_v("AddressBook data are saved automatically as a JSON file "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("[JAR file location]/data/addressbook.json")]),_v(". Advanced users\nare\nwelcome to update data directly by editing that data file.")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"faq"}},[_v("FAQ"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#faq","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Q")]),_v(": How do I transfer my data to another Computer?"),_c('br'),_v(" "),_c('strong',[_v("A")]),_v(": Install the app in the other computer and overwrite the empty data file it creates with the file that contains\nthe data of your previous AddressBook home folder.")])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"known-issues"}},[_v("Known issues"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#known-issues","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('strong',[_v("When using multiple screens")]),_v(", if you move the application to a secondary screen, and later switch to using only\nthe primary screen, the GUI will open off-screen. The remedy is to delete the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("preferences.json")]),_v(" file created by the\napplication before running the application again.")]),_v(" "),_c('li',[_c('strong',[_v("If you minimize the Help Window")]),_v(" and then run the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":help")]),_v(" command (or use the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Help")]),_v(" menu, or the keyboard\nshortcut "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("F1")]),_v(") again, the original Help Window will remain minimized, and no new Help Window will appear. The remedy\nis to manually restore the minimized Help Window.")])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('small',[_v("["),_c('span',[_c('strong',[_v("Powered by")])]),_v(" "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"30"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.5.3")]),_v(", generated on Sun, 3 Nov 2024, 23:47:16 GMT+8]")])])])}
}];
  