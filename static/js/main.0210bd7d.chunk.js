(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={example:"Filter_example__2ZinJ","input-layout":"Filter_input-layout__3pNug",title:"Filter_title__2Iwvr",input:"Filter_input__3ULeV",btn:"Filter_btn__M1deG"}},17:function(t,e,n){},2:function(t,e,n){t.exports={form:"ContactForm_form__1_N34","input-layout":"ContactForm_input-layout__3EswU",title:"ContactForm_title__EJkzh",input:"ContactForm_input__3W5jb",btn:"ContactForm_btn__3Ujiv"}},31:function(t,e,n){"use strict";n.r(e);n(16),n(17);var a=n(1),c=n(12),i=n.n(c),r=n(15),s=n(3),o=n(4),l=n(6),u=n(5),b=n(13),m=n.n(b),j=n(9),d=n.n(j),h=n(0),p=function(t){var e=t.title,n=t.children,a=t.main;return Object(h.jsxs)("section",{className:d.a.section,children:[a?Object(h.jsx)("h1",{className:d.a["main-title"],children:e}):Object(h.jsx)("h2",{className:d.a.title,children:e}),n]})};p.defaultProps={title:"",main:!1};var _=p,f=n(14),O=n(2),v=n.n(O),x=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(f.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.submitHandler(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(o.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(h.jsxs)("form",{className:v.a.form,onSubmit:this.handleSubmit,children:[Object(h.jsx)("div",{className:v.a["input-layout"],children:Object(h.jsxs)("label",{className:v.a.title,children:["Name",Object(h.jsx)("input",{className:v.a.input,onChange:this.handleChange,type:"text",name:"name",value:e,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]})}),Object(h.jsx)("div",{className:v.a["input-layout"],children:Object(h.jsxs)("label",{className:v.a.title,children:["Number",Object(h.jsx)("input",{className:v.a.input,onChange:this.handleChange,type:"tel",name:"number",value:n,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]})}),Object(h.jsx)("button",{className:v.a.btn,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),C=n(10),y=n.n(C),N=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var t=this.props,e=t.value,n=t.onFilter;return Object(h.jsx)("div",{className:y.a["input-layout"],children:Object(h.jsxs)("label",{className:y.a.title,children:["Find contacts by name",Object(h.jsx)("input",{className:y.a.input,type:"text",value:e,onChange:n})]})})}}]),n}(a.Component),g=n(7),F=n.n(g),k=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var t=this.props,e=t.contacts,n=t.delContact;return 0!==e.length&&Object(h.jsx)("ul",{className:F.a["contacts-list"],children:e.map((function(t){var e=t.name,a=t.number,c=t.id;return Object(h.jsx)("li",{className:F.a["contacts-list-item"],children:Object(h.jsxs)("div",{className:F.a["contact-container"],children:[Object(h.jsxs)("span",{className:F.a.contact,children:[e,":"]}),Object(h.jsx)("span",{className:F.a.contact,children:a}),Object(h.jsx)("button",{className:F.a.btn,type:"button",onClick:function(){return n(c)},children:"Delete"})]})},c)}))})}}]),n}(a.Component),S=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.idGen=function(){return m.a.generate()},t.submitHandler=function(e){var n={name:e.name,number:e.number,id:t.idGen()};t.setState((function(t){if(!t.contacts.find((function(t){return t.name===n.name})))return{contacts:[].concat(Object(r.a)(t.contacts),[n])};alert("".concat(n.name," is already in contacts"))}))},t.handleFilter=function(e){return t.setState({filter:e.target.value})},t.handleDelContact=function(e){return t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(o.a)(n,[{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,a=n.toLowerCase(),c=e.filter((function(t){return t.name.toLowerCase().includes(a)}));return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(_,{title:"Phonebook",main:!0,children:Object(h.jsx)(x,{submitHandler:this.submitHandler})}),Object(h.jsxs)(_,{title:"Contacts",children:[Object(h.jsx)(N,{value:n,onFilter:this.handleFilter}),Object(h.jsx)(k,{contacts:c,delContact:this.handleDelContact})]})]})}}]),n}(a.Component);i.a.render(Object(h.jsx)(S,{}),document.getElementById("root"))},7:function(t,e,n){t.exports={"contacts-list":"ContactList_contacts-list__1O-oS","contacts-list-item":"ContactList_contacts-list-item__3sA1H","contact-container":"ContactList_contact-container__1Ncfi",btn:"ContactList_btn__2kADi"}},9:function(t,e,n){t.exports={section:"Section_section__32nqL","main-title":"Section_main-title__1rKoF",title:"Section_title__buj3I"}}},[[31,1,2]]]);
//# sourceMappingURL=main.0210bd7d.chunk.js.map