(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{100:function(t,e,n){t.exports={text:"ContactForm_text__3j3GS",input:"ContactForm_input__2OdoI",button:"ContactForm_button__1OkaT"}},101:function(t,e,n){t.exports={filter:"Filter_filter__2Nf4O",text:"Filter_text__2xlOo",input:"Filter_input__38GCR"}},102:function(t,e,n){t.exports={list:"ContactList_list__16D9a",item:"ContactList_item__2VKAr",name:"ContactList_name__3nluz",button:"ContactList_button__1Js53"}},105:function(t,e,n){"use strict";n.r(e);var c={};n.r(c),n.d(c,"getLoading",(function(){return d})),n.d(c,"getContacts",(function(){return m})),n.d(c,"getFilter",(function(){return f})),n.d(c,"getVisibleContacts",(function(){return O}));var a=n(0),r=n(99),s=n.n(r),i=n(1);var o=function(t){var e=t.title,n=t.children;return Object(i.jsxs)("section",{className:s.a.section,children:[e&&Object(i.jsx)("h2",{className:s.a.title,children:e}),n]})},u=n(18),l=n(13),b=n(30),j=n(9),d=function(t){return t.contacts.loading},m=function(t){return t.contacts.items},f=function(t){return t.contacts.filter},O=function(t){var e=m(t),n=f(t).toLowerCase().trim();return e.filter((function(t){return t.name.toLowerCase().includes(n)}))},p=n(29),x=n(100),h=n.n(x);var _=function(){var t=Object(a.useState)(""),e=Object(u.a)(t,2),n=e[0],r=e[1],s=Object(a.useState)(""),o=Object(u.a)(s,2),d=o[0],m=o[1],f=Object(l.c)(c.getContacts),O=Object(l.b)(),p=function(t){var e=t.currentTarget,n=e.name,c=e.value;switch(n){case"name":r(c);break;case"number":m(c);break;default:return}},x=function(){r(""),m("")};return Object(i.jsxs)("form",{onSubmit:function(t){t.preventDefault(),f.map((function(t){return t.name})).includes(n)?b.b.error("".concat(n," is already in contacts.")):(O(j.addContact({name:n,number:d})),b.b.success("Add contact")),x()},children:[Object(i.jsxs)("label",{children:[Object(i.jsx)("p",{className:h.a.text,children:"Name"}),Object(i.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,className:h.a.input,value:n,onChange:p})]}),Object(i.jsxs)("label",{children:[Object(i.jsx)("p",{className:h.a.text,children:"Number"}),Object(i.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,className:h.a.input,value:d,onChange:p})]}),Object(i.jsx)("button",{type:"submit",disabled:!n,className:h.a.button,children:"Add contact"})]})},C=n(101),g=n.n(C);var v=function(){var t=Object(l.c)(c.getFilter),e=Object(l.b)();return Object(i.jsxs)("label",{children:[Object(i.jsx)("p",{className:g.a.text,children:"Find contacts by name"}),Object(i.jsx)("input",{type:"text",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,className:g.a.input,value:t,onChange:function(t){return e(p.changeFilter(t.currentTarget.value))}})]})},N=n(102),A=n.n(N);var F=function(){var t=Object(l.c)(c.getVisibleContacts),e=Object(l.b)();return Object(a.useEffect)((function(){e(j.fetchContacts())}),[e]),Object(i.jsx)("ul",{className:A.a.list,children:t.map((function(t){var n=t.id,c=t.name,a=t.number;return Object(i.jsxs)("li",{className:A.a.item,children:[Object(i.jsxs)("p",{className:A.a.name,children:[c,":"]}),Object(i.jsx)("p",{className:A.a.phone,children:a}),Object(i.jsx)("button",{type:"button",className:A.a.button,onClick:function(){return function(t){return e(j.deleteContact(t),b.b.success("Delete contact"))}(n)},children:"Delete"})]},n)}))})};e.default=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(o,{title:"Phonebook",children:Object(i.jsx)(_,{})}),Object(i.jsxs)(o,{title:"Contacts",children:[Object(i.jsx)(v,{}),Object(i.jsx)(F,{})]})]})}},99:function(t,e,n){t.exports={section:"Section_section__1wVP4",title:"Section_title__2ln0v"}}}]);
//# sourceMappingURL=contacts-page.577c0b45.chunk.js.map