(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[4],{103:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return o}));var n=a(18),s=a(0),l=a(6),c=a(7),r=a(1),i={form:{width:320},label:{display:"flex",flexDirection:"column",marginBottom:15}};function o(){var e=Object(l.b)(),t=Object(s.useState)(""),a=Object(n.a)(t,2),o=a[0],u=a[1],b=Object(s.useState)(""),j=Object(n.a)(b,2),p=j[0],m=j[1],h=Object(s.useState)(""),d=Object(n.a)(h,2),O=d[0],f=d[1],x=function(e){var t=e.target,a=t.name,n=t.value;switch(a){case"name":return u(n);case"email":return m(n);case"password":return f(n);default:return}};return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Sing up"}),Object(r.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(c.a.register({name:o,email:p,password:O})),u(""),m(""),f("")},style:i.form,autoComplete:"off",children:[Object(r.jsxs)("label",{style:i.label,children:["Name",Object(r.jsx)("input",{type:"text",name:"name",value:o,onChange:x})]}),Object(r.jsxs)("label",{style:i.label,children:["Email",Object(r.jsx)("input",{type:"email",name:"email",value:p,onChange:x})]}),Object(r.jsxs)("label",{style:i.label,children:["Password",Object(r.jsx)("input",{type:"password",name:"password",value:O,onChange:x})]}),Object(r.jsx)("button",{type:"submit",children:"Sing up"})]})]})}}}]);
//# sourceMappingURL=register-page.44cf6a33.chunk.js.map