(this.webpackJsonpdemo=this.webpackJsonpdemo||[]).push([[0],{26:function(e,t,n){e.exports=n(50)},31:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(12),l=n.n(c),o=(n(31),n(10)),i=n(1),u=n(3),s=n(8),m=n.n(s),d=n(14),f=n(7),v=n(15),E=n(24),h=n(9),b=function(e){return e?Object.entries(e).reduce((function(e,t,n){var a=Object(h.a)(t,2),r=a[0],c=a[1],l=0===e.length?"?":"&";return e+="string"===typeof c?"".concat(l).concat(r,"=").concat(c):""}),""):""},p=function(e){return Object.entries(e).reduce((function(e,t){var n=Object(h.a)(t,2),a=n[0],r=n[1];return Object(E.a)({},e,Object(v.a)({},a,String(r)))}),{})},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(!e.length)return e;var t=e.toLowerCase(),n=t.slice(0,1);return t.replace(n,n.toUpperCase())},j=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"en-GB",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=new Date(e);return new Intl.DateTimeFormat(t,n).format(a)},O=Object(f.b)({name:"contact-table",initialState:[],reducers:{getContacts:function(e,t){return t.payload}}}),N=O.actions.getContacts,k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(){var t=Object(d.a)(m.a.mark((function t(n){var a,r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=b(p(e)),t.next=3,fetch("/v1/contacts/"+a).then((function(e){return e.json()}));case 3:r=t.sent,n(N(r));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},w=function(e){return e.contacts},y=O.reducer,D=(n(37),function(e){var t=e.title,n=void 0===t?"Loading":t;return r.a.createElement("div",{className:"loading-indicator"},n)}),C=(n(38),function(e){var t,n=e.titles,a=void 0===n?[]:n,c=e.data,l=void 0===c?[]:c;return r.a.createElement("table",{className:"grid-table"},r.a.createElement("thead",null,r.a.createElement("tr",null,a.map((function(e,t){return r.a.createElement("th",{key:t},e)})))),r.a.createElement("tbody",null,(t=l).length?t.map((function(e){var t,n,a=e.Title,c=e.Name,l=e.BirthDate,i=e.IsFavorite,u=e.UserID;return r.a.createElement("tr",{key:u},r.a.createElement("td",null,r.a.createElement(o.b,{to:"/details/".concat(u)},g(null!==a&&void 0!==a?a:"")," ",c)),r.a.createElement("td",null,j(l)),r.a.createElement("td",null,(t="\u2714",n="",Boolean(Number(i))?t:n)))})):r.a.createElement("tr",null,r.a.createElement("td",{colSpan:a.length},r.a.createElement(D,null)))))}),B=(n(40),function(e){var t=e.children;return r.a.createElement("div",{className:"filters"},t)}),x=n(52),I=(n(41),function(e){var t=e.label,n=Object(a.useState)((function(){return Object(x.a)()})),c=Object(h.a)(n,1)[0],l=Object(u.b)();return r.a.createElement("div",{className:"checkbox"},r.a.createElement("input",{type:"checkbox",id:c,onChange:function(e){var t=e.target.checked;l(k(t?{IsFavorite:"1"}:{}))}}),r.a.createElement("label",{htmlFor:c},t))}),F=n(25),S=(n(44),function(e){var t=e.placeholder,n=Object(u.b)();return r.a.createElement("div",{className:"search"},r.a.createElement("label",{className:"name-search-label",htmlFor:"name-search"},"Search for"),r.a.createElement(F.DebounceInput,{id:"name-search",className:"field",placeholder:null!==t&&void 0!==t?t:"Name",type:"search",debounceTimeout:300,onChange:function(e){var t=e.target.value;n(k(t.length?{Name:t}:{}))}}))}),T=(n(45),function(){var e=Object(u.b)(),t=Object(u.c)(w);return Object(a.useEffect)((function(){e(k())}),[e]),r.a.createElement("div",{className:"container"},r.a.createElement(B,null,r.a.createElement(I,{label:"Favorite Only"}),r.a.createElement(S,null)),r.a.createElement(C,{titles:["Name","Birth Date","Favorite"],data:t}))}),U=Object(f.b)({name:"detail",initialState:{},reducers:{getDetail:function(e,t){return t.payload}}}),L=U.actions.getDetail,J=function(e){return e.detail},W=U.reducer,G=(n(46),function(e){var t=e.render;return r.a.createElement("div",{className:"description-list"},t())}),M=(n(47),function(e){var t=e.render;return r.a.createElement("div",{className:"nav"},t())}),$=(n(48),function(){var e=Object(u.b)(),t=Object(u.c)(J),n=t.Title,c=t.Name,l=t.BirthDate,o=t.ContactDetail,s=Object(i.g)().UserID,f=Object(i.f)(),v=function(){f.goBack()};return Object(a.useEffect)((function(){var t;e((t=s,function(){var e=Object(d.a)(m.a.mark((function e(n){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/v1/contacts/"+t).then((function(e){return e.json()}));case 2:a=e.sent,n(L(a));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}),[s,e]),r.a.createElement("div",{className:"container"},r.a.createElement(M,{render:function(){return r.a.createElement("div",{className:"go-back",onClick:v},"Back")}}),r.a.createElement("h1",null,g(n)," ",c),r.a.createElement("dl",null,r.a.createElement(G,{render:function(){return l?r.a.createElement("div",{className:"dl-group"},r.a.createElement("dt",null,"Birthday"),r.a.createElement("dd",null,j(l))):null}}),r.a.createElement(G,{render:function(){return function(e){if(!e)return null;var t=e.ContactDetailType,n=e.ContactDetailContent;return t?r.a.createElement("div",{className:"dl-group"},r.a.createElement("dt",null,t),r.a.createElement("dd",null,n)):null}(o)}})))}),q=(n(49),function(){return r.a.createElement("div",{className:"full-screen"},"404 Dinosaur Lost")}),z=function(){return r.a.createElement(o.a,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/"},r.a.createElement(T,null)),r.a.createElement(i.a,{path:"/details/:UserID"},r.a.createElement($,null)),r.a.createElement(i.a,{path:"*"},r.a.createElement(q,null))))},A=Object(f.a)({reducer:{contacts:y,detail:W}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u.a,{store:A},r.a.createElement(z,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.d07c89b9.chunk.js.map