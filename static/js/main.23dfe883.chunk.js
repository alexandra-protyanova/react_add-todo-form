(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(7),i=a.n(n),s=a(6),c=a(8),r=a(2),o=a(1),l=(a(13),a(0)),d=function(e){var t=e.todo;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("p",{"data-cy":"title",children:"Task: ".concat(t.title)}),Object(l.jsx)("p",{"data-cy":"status",children:"Status: ".concat(!0===t.completed?"Completed":"Not Completed")})]})},u=function(e){var t=e.user;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h2",{className:"name","data-cy":"username",children:t.name}),Object(l.jsx)("p",{"data-cy":"email",children:"Email: ".concat(t.email)})]})},m=(a(15),function(e){var t=e.fulltodos;return Object(l.jsx)("ul",{className:"Todolist",children:t.map((function(e){return Object(l.jsxs)("li",{className:"card",children:[e.user&&Object(l.jsx)(u,{user:e.user}),Object(l.jsx)(d,{todo:e})]},e.id)}))})}),b=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}],h=[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1}],p=function(){var e=Object(o.useState)(""),t=Object(r.a)(e,2),a=t[0],n=t[1],i=Object(o.useState)("0"),d=Object(r.a)(i,2),u=d[0],p=d[1],j=Object(o.useState)(!1),g=Object(r.a)(j,2),y=g[0],O=g[1],f=Object(o.useState)(!1),x=Object(r.a)(f,2),v=x[0],S=x[1],k=Object(o.useState)(!1),w=Object(r.a)(k,2),C=w[0],z=w[1],N=Object(o.useState)(h),P=Object(r.a)(N,2),L=P[0],D=P[1],A=L.map((function(e){return Object(s.a)(Object(s.a)({},e),{},{user:(t=e.userId,b.find((function(e){return e.id===t}))||null)});var t}));return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{className:"title",children:"Not static list of todos"}),Object(l.jsxs)("form",{className:"box",onSubmit:function(e){e.preventDefault(),function(){var e=b.find((function(e){return e.name===u})),t=a.replace(/[^A-Za-z0-9\u0410-\u042f\u0430-\u044f ]/gi,"");if(a.length||S(!0),"0"===u&&z(!0),a.length&&1!==u.length){var i={id:L[L.length-1].id+1,title:t,userId:e?e.id:0,completed:y};D((function(e){return[].concat(Object(c.a)(e),[i])})),n(""),p("0"),O(!1)}}()},children:[Object(l.jsx)("label",{children:Object(l.jsx)("input",{className:"input",type:"text",value:a,placeholder:"Insert the title",onChange:function(e){n(e.target.value),S(!1)}})}),v&&Object(l.jsx)("p",{className:"error",children:"Please enter the title"}),Object(l.jsx)("br",{}),Object(l.jsxs)("label",{className:"container",children:[Object(l.jsxs)("select",{className:"select",value:u,onChange:function(e){p(e.target.value),z(!1)},children:[Object(l.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),b.map((function(e){return Object(l.jsx)("option",{value:e.name,children:e.name},e.id)}))]}),C&&Object(l.jsx)("p",{className:"error",children:"Please choose a user"})]}),Object(l.jsx)("br",{}),Object(l.jsxs)("label",{children:[Object(l.jsx)("input",{className:"checkbox",type:"checkbox",checked:y,onChange:function(e){O(e.target.checked)}}),"Completed"]}),Object(l.jsx)("br",{}),Object(l.jsx)("button",{className:"button is-info",type:"submit",children:"Add"})]}),Object(l.jsx)(m,{fulltodos:A})]})};i.a.render(Object(l.jsx)(p,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.23dfe883.chunk.js.map