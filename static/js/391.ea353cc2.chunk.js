"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[391],{7391:function(e,t,n){n.r(t),n.d(t,{default:function(){return H}});var a=n(2791),s=n(9439),c="PhonebookForm_form__0btgv",r="PhonebookForm_label__a86iP",o="PhonebookForm_input__oekwR",i="PhonebookForm_button__ftF0u",u=n(8174),l=n(9434),m=n(3634),d=n(3433),f=n(6916),_=function(e){return e.contacts.items},h=function(e){return e.contacts.isLoading},b=function(e){return e.contacts.error},p=function(e){return e.filters.filter},x=(0,f.P1)([_],(function(e){return(0,d.Z)(e).sort((function(e,t){return e.name.localeCompare(t.name)}))})),v=n(184);function j(){var e=(0,l.I0)(),t=(0,a.useState)(""),n=(0,s.Z)(t,2),d=n[0],f=n[1],h=(0,a.useState)(""),b=(0,s.Z)(h,2),p=b[0],x=b[1],j=(0,l.v9)(_),C=function(e){var t=e.currentTarget,n=t.name,a=t.value;switch(n){case"name":f(a);break;case"number":x(a);break;default:return}};return(0,v.jsxs)("form",{className:c,onSubmit:function(t){t.preventDefault(),j.some((function(e){return e.name.toLowerCase().trim()===d.toLowerCase().trim()}))?u.Am.error("".concat(d," is already in the contacts.")):(u.Am.success("".concat(d," was added to the contacts successfully.")),e((0,m.uK)({name:d,number:p})),f(""),x(""))},children:[(0,v.jsx)("label",{className:r,children:"Name"}),(0,v.jsx)("input",{type:"text",name:"name",className:o,required:!0,value:d,onChange:C}),(0,v.jsx)("label",{className:r,children:"Number"}),(0,v.jsx)("input",{type:"tel",name:"number",className:o,pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:p,onChange:C}),(0,v.jsx)("button",{type:"submit",className:i,children:"Add contact"})]})}var C={contactsItem:"ContactsItem_contactsItem__5zmD4",span:"ContactsItem_span__lUpoW",contactsBtn:"ContactsItem_contactsBtn__y8kGL"},N=n(2007),g=n.n(N),y=n(828),k=n(4164),w="Modal_overlay__r63M6",I="Modal_modal__DJDMv",F="Modal_label__A0H75",M="Modal_input__1Ivcu",P="Modal_button__PTCbC",L="Modal_buttonWrapper__A8QeU",q=n(6355),A=document.querySelector("#modal-root");function E(e){var t=e.contact,n=e.toggleModal,c=(0,l.I0)(),r=(0,a.useState)(t.name),o=(0,s.Z)(r,2),i=o[0],d=o[1],f=(0,a.useState)(t.number),_=(0,s.Z)(f,2),h=_[0],b=_[1];(0,a.useEffect)((function(){var e=function(e){"Escape"===e.code&&n()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[n]);return(0,k.createPortal)((0,v.jsx)("div",{className:w,onClick:function(e){e.currentTarget===e.target&&n()},children:(0,v.jsxs)("div",{className:I,children:[(0,v.jsxs)("label",{className:F,children:["Name",(0,v.jsx)("input",{type:"text",name:"name",className:M,value:i,onChange:function(e){return d(e.target.value)}})]}),(0,v.jsxs)("label",{className:F,children:["Email",(0,v.jsx)("input",{type:"email",name:"email",className:M,value:h,onChange:function(e){return b(e.target.value)}})]}),(0,v.jsx)("div",{className:L,children:(0,v.jsx)("button",{type:"button",className:P,onClick:function(){c((0,m.mP)({name:i,number:h,id:t.id})),u.Am.success("Contact ".concat(i," was updated successfully.")),n()},children:(0,v.jsx)(q.TvB,{size:25})})})]})}),A)}var S=function(e){var t=e.contact,n=(0,l.I0)(),c=(0,a.useState)(!1),r=(0,s.Z)(c,2),o=r[0],i=r[1],d=function(){i(!o)};return(0,v.jsxs)("li",{className:C.contactsItem,children:[(0,v.jsx)("span",{className:C.span,children:t.name}),(0,v.jsx)("span",{className:C.span,children:t.number}),(0,v.jsx)("button",{type:"button",className:C.contactsBtn,onClick:d,children:(0,v.jsx)(y.Wx6,{size:20})}),(0,v.jsx)("button",{type:"button",className:C.contactsBtn,onClick:function(){return n((0,m.GK)(t.id))&&u.Am.success("Contact ".concat(t.name," was deleted successfully."))},children:(0,v.jsx)(y._51,{size:20})}),o&&(0,v.jsx)(E,{toggleModal:d,contact:t})]})};S.protoTypes={contact:g().objectOf(g().shape({name:g().string.isRequired,number:g().number.isRequired}).isRequired).isRequired,id:g().string.isRequired};var z=S,B=function(){var e=(0,l.v9)(p),t=(0,l.v9)(x).filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase().trim())}));return(0,v.jsx)("ul",{className:C.contactsList,children:t.map((function(e){return(0,v.jsx)(z,{contact:e},e.id)}))})},R="Filter_label__vEd1E",T="Filter_input__N7T3z",Z=n(4808),D=function(){var e=(0,l.I0)(),t=(0,l.v9)(p);return(0,v.jsxs)("label",{className:R,children:["Find contacts by name",(0,v.jsx)("input",{type:"text",value:t,name:"filter",onChange:function(t){e((0,Z.x)(t.target.value))},className:T})]})},W=(n(5462),n(5343)),G={container:{minHeight:"calc(100vh - 50px)",backgroundColor:"rgba(156, 214, 240, 1)",opacity:.6,padding:20},title:{fontSize:20,marginBottom:15}};function H(){var e=(0,l.I0)(),t=(0,l.v9)(h),n=(0,l.v9)(b);return(0,a.useEffect)((function(){e((0,m.yF)())}),[e]),(0,v.jsxs)("div",{style:G.container,children:[(0,v.jsx)("h2",{style:G.title,children:"Add new contact"}),(0,v.jsx)(j,{}),(0,v.jsx)("h2",{style:G.title,children:"Contacts"}),(0,v.jsx)(D,{}),t&&(0,v.jsx)(W.Fe,{color:"blue"}),n&&(0,v.jsx)("b",{children:n}),(0,v.jsx)(B,{}),(0,v.jsx)(u.Ix,{autoClose:2e3,position:"top-center",theme:"dark"})]})}}}]);
//# sourceMappingURL=391.ea353cc2.chunk.js.map