(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){},24:function(e,t,a){e.exports=a(38)},29:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),l=a.n(c),i=(a(29),a(5)),o=a(6),s=a(8),m=a(7),u=a(12),p=a(9),d=(a(19),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.feature,t="container-fluid header-height content__shadow "+e.bgColor,a=e.name;return r.a.createElement("div",{className:t},r.a.createElement("div",{className:"row w-100 h-100 mx-0"},r.a.createElement("div",{className:"col-2 text-center d-flex align-items-center"},r.a.createElement("h4",null,"Tool Random")),r.a.createElement("div",{className:"col-10 d-flex justify-content-center align-items-center"},r.a.createElement("h4",null,a))))}}]),t}(n.Component)),h=a(13),b=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.feature,a=e.index,n=e.onClickFeature,c="nav-link text-muted text-center font-weight-bold",l="nav-item ",i=t.name.replace(" ","");return t.isActive&&(c=c.replace("text-muted","text-light"),l+=t.bgColor),r.a.createElement("li",{className:l},r.a.createElement(h.b,{className:c,to:i,key:a,onClick:n},t.name))}}]),t}(n.Component),f=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("p",null,"a")}}]),t}(n.Component),E=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-5 text-right content__shadow bg-white py-4 ml-3 rounded"},r.a.createElement("div",{className:"input-group mb-3 input__width"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"},"Prefix")),r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Username","aria-label":"Username"}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("span",{className:"input-group-text"},"0"))),r.a.createElement("div",{className:"input-group mb-3 input__width"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"},"From")),r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Username","aria-label":"Username"})),r.a.createElement("div",{className:"input-group mb-3 input__width"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"},"\xa0\xa0To\xa0\xa0")),r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Username","aria-label":"Username"})),r.a.createElement("div",{className:"form-group d-flex input__width"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("label",{className:"input-group-text"},"Type")),r.a.createElement("select",{className:"form-control"},r.a.createElement("option",null,"Random"),r.a.createElement("option",null,"Order List"))),r.a.createElement("div",{className:"input-group mb-3 input__width"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"},"Quantity")),r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Username","aria-label":"Username"})),r.a.createElement("div",{className:"pr-5"},r.a.createElement("button",{type:"button",className:"btn btn-primary"},"Random"))))}}]),t}(n.Component),v=a(10),N=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).state={feature:[{name:"Random String",isActive:!0,bgColor:"bg-primary",textColor:"text-primary"},{name:"Random Ymd",isActive:!1,bgColor:"bg-success",textColor:"text-success"}]},e.onClickFeature=e.onClickFeature.bind(Object(u.a)(e)),e}return Object(p.a)(t,e),Object(o.a)(t,[{key:"onClickFeature",value:function(e){var t=this;return function(){var a=t.state.feature,n=a.indexOf(e),r=a;r.map(function(e){return e.isActive=!1}),r[n].isActive=!0,t.setState({feature:a})}}},{key:"render",value:function(){var e=this;return r.a.createElement(h.a,null,r.a.createElement("div",{className:"App"},this.state.feature.filter(function(e){return!0===e.isActive}).map(function(e,t){return r.a.createElement(d,{feature:e,key:t})}),r.a.createElement("div",{className:"container-fluid mt-5"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-2 sidebar__height px-0 content__shadow rounded"},r.a.createElement("ul",{className:"nav flex-column"},this.state.feature.map(function(t,a){return r.a.createElement(b,{feature:t,key:a,onClickFeature:e.onClickFeature(t)})}))),r.a.createElement("div",{className:"col-10"},r.a.createElement(v.a,{exact:!0,path:"/RandomYmd",component:f}),r.a.createElement(v.a,{exact:!0,path:"/",component:E}),r.a.createElement(v.a,{exact:!0,path:"/RandomString",component:E}))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,1,2]]]);
//# sourceMappingURL=main.2ae293ba.chunk.js.map