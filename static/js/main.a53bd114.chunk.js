(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),l=a.n(o),i=(a(16),a(2)),c=a(3),s=a(6),u=a(4),m=a(1),p=a(5),d=(a(8),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.feature,t="container-fluid header-height content__shadow "+e.bgColor,a=e.name;return r.a.createElement("div",{className:t},r.a.createElement("div",{className:"row h-100"},r.a.createElement("div",{className:"col-12 d-flex justify-content-center align-items-center"},r.a.createElement("h2",{className:"m-0 font-weight-bold"},a))))}}]),t}(n.Component)),h=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).YearFrRef=r.a.createRef(),a.YearToRef=r.a.createRef(),a.MonthFrRef=r.a.createRef(),a.MonthToRef=r.a.createRef(),a.DayFrRef=r.a.createRef(),a.DayToRef=r.a.createRef(),a.qtyRef=r.a.createRef(),a.onRandomYmd=a.onRandomYmd.bind(Object(m.a)(a)),a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"onRandomYmd",value:function(){var e=this.props,t=e.onRandom,a=e.onChangeHeader,n=e.header,r=Number(this.YearFrRef.current.value),o=Number(this.YearToRef.current.value),l=Number(this.MonthFrRef.current.value),i=Number(this.MonthToRef.current.value),c=Number(this.DayFrRef.current.value),s=Number(this.DayToRef.current.value),u=Number(this.qtyRef.current.value),m="";if(this.chkValidateInput("Year",r,o))if(this.chkValidateInput("Month",l,i))if(this.chkValidateInput("Day",c,s))for(var p=0;p<u;p++){var d=Math.floor(Math.random()*(o+1-r)+r),h=Math.floor(Math.random()*(i+1-l)+l);if(2===h){var f=Math.floor(Math.random()*(s+1-c)+c);f>28&&(f-=3)}else f=Math.floor(Math.random()*(s+1-c)+c);h<10&&(h="0"+h),f<10&&(f="0"+f),m+=d.toString()+h.toString()+f.toString()+"\r"}else alert("Please check Day value.");else alert("Please check Month value.");else alert("Please check Year value.");t(m),a(n[2])}},{key:"chkValidateInput",value:function(e,t,a){if("Year"===e){if(t>a)return!1}else if("Month"===e){if(t>a||t>12||a>12)return!1}else if(t>a||t>31||a>31)return!1;return!0}},{key:"render",value:function(){return r.a.createElement("div",{className:"col-3 text-right content__shadow bg-white py-4 rounded"},r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text lable__input-width"},"Year")),r.a.createElement("input",{type:"text",className:"form-control input__border-radius",defaultValue:"2019",ref:this.YearFrRef}),r.a.createElement("span",null,"\xa0\xa0~\xa0\xa0"),r.a.createElement("input",{type:"text",className:"form-control input__border-radius",defaultValue:"2019",ref:this.YearToRef})),r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text lable__input-width"},"Month")),r.a.createElement("input",{type:"text",className:"form-control input__border-radius",defaultValue:"1",ref:this.MonthFrRef}),r.a.createElement("span",null,"\xa0\xa0~\xa0\xa0"),r.a.createElement("input",{type:"text",className:"form-control input__border-radius",defaultValue:"12",ref:this.MonthToRef})),r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text lable__input-width"},"Day")),r.a.createElement("input",{type:"text",className:"form-control input__border-radius",defaultValue:"1",ref:this.DayFrRef}),r.a.createElement("span",null,"\xa0\xa0~\xa0\xa0"),r.a.createElement("input",{type:"text",className:"form-control input__border-radius",defaultValue:"30",ref:this.DayToRef})),r.a.createElement("div",{className:"input-group mb-5"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text lable__input-width"},"Quantity")),r.a.createElement("input",{type:"text",className:"form-control",defaultValue:"10",ref:this.qtyRef})),r.a.createElement("div",{className:"input-group d-flex justify-content-center"},r.a.createElement("button",{type:"button",className:"btn btn-success btn__RandomYmd-margin",onClick:this.onRandomYmd},"Random")))}}]),t}(n.Component),f=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={length:3},a.prefixRef=r.a.createRef(),a.fromRef=r.a.createRef(),a.toRef=r.a.createRef(),a.typeRef=r.a.createRef(),a.qtyRef=r.a.createRef(),a.onRandomString=a.onRandomString.bind(Object(m.a)(a)),a.onChangeLen=a.onChangeLen.bind(Object(m.a)(a)),a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"onRandomString",value:function(){var e=this.props,t=e.onRandom,a=e.onChangeHeader,n=e.header,r=this.prefixRef.current.value,o=Number(this.fromRef.current.value),l=Number(this.toRef.current.value),i=this.typeRef.current.value,c=Number(this.qtyRef.current.value),s="";if(""===o||""===l)alert("Please enter From-To.");else if(isNaN(o)||isNaN(l))alert("From - To must number.");else if(o>l)alert("From is bigger than To. Please re-enter correctly.");else if("random"===i)for(var u=0;u<c;u++){var m=Math.floor(Math.random()*(l+1-o)+o),p=m.toString().length,d=l.toString().length;if(p<d)for(var h=p;h<d;h++)m="0"+m;s+=r+m+"\r"}else for(var f=1;f<c;f++)s+=r+f+"\r";t(s),a(n[1])}},{key:"onChangeLen",value:function(){var e=this.prefixRef.current.value.length,t=this.toRef.current.value.length,a=this.qtyRef.current.value.length,n=0;n="random"===this.typeRef.current.value?e+t:e+a,this.setState({length:n})}},{key:"render",value:function(){return r.a.createElement("div",{className:"col-3 text-right content__shadow bg-white py-4 rounded"},r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text lable__input-width"},"Prefix")),r.a.createElement("input",{type:"text",className:"form-control",ref:this.prefixRef,onChange:this.onChangeLen}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("span",{className:"input-group-text"},this.state.length))),r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text lable__input-width"},"From")),r.a.createElement("input",{type:"text",className:"form-control",defaultValue:"000",ref:this.fromRef})),r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text lable__input-width"},"To")),r.a.createElement("input",{type:"text",className:"form-control",defaultValue:"100",ref:this.toRef,onChange:this.onChangeLen})),r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("label",{className:"input-group-text lable__input-width"},"Type")),r.a.createElement("select",{className:"form-control",ref:this.typeRef},r.a.createElement("option",{value:"random"},"Random"),r.a.createElement("option",{value:"order_list"},"Order List"))),r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text lable__input-width"},"Quantity")),r.a.createElement("input",{type:"text",className:"form-control",defaultValue:"10",ref:this.qtyRef,onChange:this.onChangeLen})),r.a.createElement("div",{className:"input-group d-flex justify-content-center"},r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:this.onRandomString},"Random")))}}]),t}(n.Component),g=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).handleChange=e.handleChange.bind(Object(m.a)(e)),e}return Object(p.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){return this.props.onRandom(e.target.value)}},{key:"render",value:function(){var e=this.props.result;return r.a.createElement("div",{className:"col-3 text-right content__shadow bg-white py-4 mx-3 rounded"},r.a.createElement("div",{className:"input-form"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text w-100 d-flex justify-content-center"},"Result"))),r.a.createElement("div",{className:"input-group"},r.a.createElement("textarea",{className:"form-control",rows:"11",value:e,onChange:this.handleChange})))}}]),t}(n.Component),b=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={feature:[{name:"Tool Random",isActive:!0,bgColor:"bg-danger"},{name:"Random String",isActive:!1,bgColor:"bg-primary"},{name:"Random Year-Month-Day",isActive:!1,bgColor:"bg-success"}],result:""},e.onChangeHeader=e.onChangeHeader.bind(Object(m.a)(e)),e.onRandom=e.onRandom.bind(Object(m.a)(e)),e}return Object(p.a)(t,e),Object(c.a)(t,[{key:"onChangeHeader",value:function(e){var t=this.state.feature,a=t.indexOf(e),n=t;n.map(function(e){return e.isActive=!1}),n[a].isActive=!0,this.setState({feature:t})}},{key:"onRandom",value:function(e){this.setState({result:e})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},this.state.feature.filter(function(e){return!0===e.isActive}).map(function(e,t){return r.a.createElement(d,{feature:e,key:t})}),r.a.createElement("div",{className:"container-fluid mt-4 content__height"},r.a.createElement("div",{className:"row d-flex justify-content-center h-100"},r.a.createElement(f,{onRandom:this.onRandom,onChangeHeader:this.onChangeHeader,header:this.state.feature}),r.a.createElement(g,{result:this.state.result,onRandom:this.onRandom}),r.a.createElement(h,{onRandom:this.onRandom,onChangeHeader:this.onChangeHeader,header:this.state.feature}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){}},[[10,1,2]]]);
//# sourceMappingURL=main.a53bd114.chunk.js.map