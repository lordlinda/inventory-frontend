(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{135:function(e,t,c){},137:function(e,t,c){},163:function(e,t,c){"use strict";c.r(t);var n=c(2),r=c(0),a=c(46),s=c.n(a),i=(c(135),c(85)),d=c(14),j=c.n(d),u=c(26),o=c(20),l=(c(137),c(45)),b=c(61),O=c(176),h=c(27),p=c.n(h);var v=function(e){var t=Object(r.useState)(""),c=Object(o.a)(t,2),a=c[0],s=c[1],i=Object(r.useState)(""),d=Object(o.a)(i,2),l=d[0],b=d[1],O=function(){var t=Object(u.a)(j.a.mark((function t(c){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c.preventDefault(),!a){t.next=6;break}return n={name:a,description:l},console.log(n),t.next=6,p.a.post("https://strapi-inventory.herokuapp.com/drugs",n).then((function(t){e.addProduct(t.data)}));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"Add Product"}),Object(n.jsxs)("form",{className:"ui form",onSubmit:O,children:[Object(n.jsx)("div",{className:"equal width fields",children:Object(n.jsxs)("div",{className:"field",children:[Object(n.jsx)("label",{children:"Name"}),Object(n.jsx)("div",{className:"ui fluid input",children:Object(n.jsx)("input",{type:"text",value:a,onChange:function(e){return s(e.target.value)}})})]})}),Object(n.jsxs)("div",{className:"field",children:[Object(n.jsx)("label",{children:"Description"}),Object(n.jsx)("textarea",{value:l,onChange:function(e){return b(e.target.value)},placeholder:"Tell us more about the drug...",rows:"3"})]}),Object(n.jsx)("div",{className:"field",children:Object(n.jsx)("button",{className:"ui primary button",children:"Submit"})})]})]})};var x=function(e){var t=Object(r.useState)([]),c=Object(o.a)(t,2),a=c[0],s=c[1],i=function(){var e=Object(u.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://strapi-inventory.herokuapp.com/stockevents");case 2:t=e.sent,s(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=e.products,h=Object(r.useState)(!1),x=Object(o.a)(h,2),f=x[0],m=x[1];return Object(r.useEffect)((function(){i()}),[]),Object(n.jsx)("div",{className:"StockEventTable",children:Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{children:"Musawo's Drugstore Inventory"}),Object(n.jsxs)("a",{onClick:function(){return m(!f)},href:"#",children:[Object(n.jsx)(b.a,{name:"plus"}),"Add New Product"]}),Object(n.jsx)(O.a,{size:"tiny",open:f,onClose:function(){return m(!1)},children:Object(n.jsx)(O.a.Content,{children:Object(n.jsx)(v,{addProduct:function(t){e.addProduct(t),m(!1)}})})}),Object(n.jsx)("div",{className:"ui cards",children:d.map((function(e){return Object(n.jsx)("div",{className:"ui card",children:Object(n.jsxs)("div",{className:"content",children:[Object(n.jsx)(l.b,{to:"/product/".concat(e.name),children:Object(n.jsx)("div",{className:"header",children:e.name})}),Object(n.jsxs)("div",{className:"meta",children:[a.filter((function(t){var c;return(null===(c=t.drug)||void 0===c?void 0:c._id)===e._id})).reduce((function(e,t){return e+t.qty}),0)," ","stock left"]}),Object(n.jsx)("div",{className:"description",children:e.description})]})},e._id)}))})]})})},f=c(10),m=(c(162),c(174));var y=function(e){var t=e.stockEvents;return Object(n.jsx)("div",{className:"ui card",children:t.map((function(e){return Object(n.jsxs)("div",{className:"content",children:[Object(n.jsxs)("div",{className:"meta",children:["QTY: ",e.qty]}),Object(n.jsx)("div",{className:"description",children:"add"===e.type?"added stock":"removed stock"})]},e._id)}))})},k=c(177),N=c(83),g=c(102);var w=function(e){var t=e.product,c=e.addStockEvent,a=e.closeModal,s=Object(r.useState)({qty:"",type:""}),i=Object(o.a)(s,2),d=i[0],l=i[1],b=d.qty,O=d.type,h=function(e){l(Object(g.a)(Object(g.a)({},d),{},Object(N.a)({},e.target.name,e.target.value)))},v=function(){var e=Object(u.a)(j.a.mark((function e(n){var r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),!t||!O){e.next=6;break}return r={qty:"add"===O?+b:-b,type:O,drug:t[0]._id},e.next=5,p.a.post("https://strapi-inventory.herokuapp.com/stockevents",r).then((function(e){c(e.data)}));case 5:a();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:"New Stock Event"}),Object(n.jsxs)("form",{className:"ui form",onSubmit:v,children:[Object(n.jsxs)("div",{className:"equal width fields",children:[Object(n.jsxs)("div",{className:"field",children:[Object(n.jsx)("label",{children:"qty"}),Object(n.jsx)("input",{type:"number",value:b,name:"qty",onChange:h})]}),Object(n.jsxs)("div",{className:"field",children:[Object(n.jsx)("label",{}),Object(n.jsxs)("select",{name:"type",onChange:h,value:O,children:[Object(n.jsx)("option",{value:"",children:"select type"}),Object(n.jsx)("option",{value:"add",children:"add"}),Object(n.jsx)("option",{value:"remove",children:"remove"})]})]})]}),Object(n.jsx)("button",{className:"ui primary button",children:"Create"})]})]})};var S=function(e){var t=e.products,c=Object(f.f)().name,a=Object(r.useState)([]),s=Object(o.a)(a,2),d=s[0],l=s[1],b=Object(r.useState)(!1),h=Object(o.a)(b,2),v=h[0],x=h[1],m=function(){var e=Object(u.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://strapi-inventory.herokuapp.com/stockevents");case 2:t=e.sent,l(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){m()}),[]),Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{children:c}),Object(n.jsx)("br",{}),Object(n.jsx)(k.a,{onClick:function(){return x(!v)},children:"Add new Event"}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)(O.a,{size:"tiny",open:v,onClose:function(){return x(!1)},children:Object(n.jsx)(O.a.Content,{children:Object(n.jsx)(w,{product:t.filter((function(e){return e.name===c})),addStockEvent:function(e){l([e].concat(Object(i.a)(d)))},closeModal:function(){x(!1)}})})}),Object(n.jsxs)("div",{className:"ui cards",children:[Object(n.jsx)("h4",{children:"Stock Details"}),Object(n.jsx)(y,{stockEvents:d.filter((function(e){var t;return(null===(t=e.drug)||void 0===t?void 0:t.name)===c}))})]})]})},C=c(175);var E=function(){return Object(n.jsx)("div",{style:{marginTop:"-20px"},children:Object(n.jsx)(C.a,{children:Object(n.jsx)(C.a.Item,{name:"Home",children:Object(n.jsx)(l.b,{to:"/",children:"Home"})})})})};var q=function(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),c=t[0],a=t[1],s=function(){var e=Object(u.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://strapi-inventory.herokuapp.com/drugs");case 2:t=e.sent,a(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){s()}),[]),Object(n.jsx)("div",{children:Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)(l.a,{children:[Object(n.jsx)(E,{}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)(m.a,{children:Object(n.jsxs)(f.c,{children:[Object(n.jsx)(f.a,{path:"/product/:name",children:Object(n.jsx)(S,{products:c})}),Object(n.jsx)(f.a,{path:"/",children:Object(n.jsx)(x,{products:c,addProduct:function(e){a([e].concat(Object(i.a)(c)))}})})]})})]})})})},P=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,180)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),a(e),s(e)}))};s.a.render(Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(q,{})}),document.getElementById("root")),P()}},[[163,1,2]]]);
//# sourceMappingURL=main.fc89b221.chunk.js.map