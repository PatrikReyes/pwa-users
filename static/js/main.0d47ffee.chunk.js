(this["webpackJsonppwa-app"]=this["webpackJsonppwa-app"]||[]).push([[0],{40:function(e,t,n){},41:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var c=n(3),r=n(0),s=n(17),j=n.n(s),a=(n(40),n.p,n(41),n(20)),i=n(5),o=n(55),b=n(54);function h(){return Object(c.jsx)("div",{children:"Home Comoponent"})}function d(){return Object(c.jsx)("div",{children:"About Comoponent"})}var l=n(29),O=n(56),u=n(53);function x(){var e=Object(r.useState)([]),t=Object(l.a)(e,2),n=t[0],s=t[1],j=Object(r.useState)(!0),a=Object(l.a)(j,2),i=a[0],o=a[1];return Object(r.useEffect)((function(){fetch("http://jsonplaceholder.typicode.com/users").then((function(e){e.json().then((function(e){s(e),localStorage.setItem("users",JSON.stringify(e))})),o(!0)})).catch((function(e){var t=localStorage.getItem("users");s(JSON.parse(t)),o(!1)}))}),[]),Object(c.jsxs)(c.Fragment,{children:[i?null:Object(c.jsx)(O.a,{variant:"warning",children:"Estas en modo offline"}),Object(c.jsxs)(u.a,{striped:!0,bordered:!0,hover:!0,children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"#"}),Object(c.jsx)("th",{children:"Name"}),Object(c.jsx)("th",{children:"User Name"}),Object(c.jsx)("th",{children:"Email"})]})}),Object(c.jsx)("tbody",{children:n.map((function(e,t){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:e.id}),Object(c.jsx)("td",{children:e.name}),Object(c.jsx)("td",{children:e.username}),Object(c.jsx)("td",{children:e.email})]},t)}))})]})]})}var p=function(){return Object(c.jsxs)(a.a,{children:[Object(c.jsxs)(o.a,{bg:"primary",variant:"dark",children:[Object(c.jsx)(o.a.Brand,{href:"#home",children:"Navbar"}),Object(c.jsxs)(b.a,{className:"mr-auto",children:[Object(c.jsx)(b.a.Link,{children:Object(c.jsx)(a.b,{to:"/",children:"Home"})}),Object(c.jsx)(b.a.Link,{children:Object(c.jsx)(a.b,{to:"/users",children:"Users"})}),Object(c.jsx)(b.a.Link,{children:Object(c.jsx)(a.b,{to:"/about",children:"About"})})]})]}),Object(c.jsxs)(i.c,{children:[Object(c.jsx)(i.a,{path:"/about",component:d}),Object(c.jsx)(i.a,{path:"/users",component:x}),Object(c.jsx)(i.a,{path:"/",component:h})]})]})};n(50);j.a.render(Object(c.jsx)(p,{}),document.getElementById("root")),function(){var e="".concat("/pwa-users","/sw.js");navigator.serviceWorker.register(e).then((function(e){console.warn({response:e})}))}()}},[[51,1,2]]]);
//# sourceMappingURL=main.0d47ffee.chunk.js.map