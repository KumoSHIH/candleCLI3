(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2267faac"],{"0a23":function(t,a,s){},"216c":function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("ul",{staticClass:"nav row justify-content-between align-items-center py-2 pr-0 bg-main  no-gutters"},[e("li",{staticClass:"col col-md-5 logo d-flex justify-content-center align-items-center mt-2 mt-md-0 ml-md-2"},[e("router-link",{attrs:{to:"/home"}},[e("img",{attrs:{src:s("fe58"),height:"30"}})])],1),e("div",{staticClass:"col-12 col-md-5 col-lg-4 d-flex justify-content-center align-items-center mt-2 mt-md-0 "},[e("li",{staticClass:"nav-item"},[e("router-link",{attrs:{to:"/controller"}},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[e("i",{staticClass:"fas fa-cog navIcon"})])])],1),e("li",{staticClass:"nav-item "},[e("a",{staticClass:"nav-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.openModal(a)}}},[e("i",{staticClass:"far fa-comment navIcon"})])]),e("li",{staticClass:"nav-item"},[e("router-link",{attrs:{to:"/bulletin"}},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[e("i",{staticClass:"fas fa-bullhorn navIcon"})])])],1),e("li",{staticClass:"nav-item"},[e("router-link",{attrs:{to:"/login"}},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[e("i",{staticClass:"far fa-user navIcon"})])])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/cart"}},[e("i",{staticClass:"fas fa-shopping-cart navIcon"}),e("span",{staticClass:"badge badge-pill badge-danger"},[t._v(t._s(t.cartLength))])])],1)])]),e("div",{staticClass:"modal fade ",attrs:{id:"modalQA",tabindex:"-1",role:"dialog"}},[e("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[t._m(0),e("div",{staticClass:"modal-body"},[e("div",{staticClass:"row d-flex justify-content-center"},[e("div",{staticClass:"col-md-10"},[e("div",{staticClass:"form-group"},[t._m(1),e("input",{directives:[{name:"model",rawName:"v-model",value:t.message.name,expression:"message.name"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("name")},attrs:{type:"text",name:"name",id:"name",placeholder:"王小美"},domProps:{value:t.message.name},on:{input:function(a){a.target.composing||t.$set(t.message,"name",a.target.value)}}}),t.errors.has("name")?e("span",{staticClass:"text-danger"},[t._v("請輸入姓名或暱稱")]):t._e()]),e("div",{staticClass:"form-group"},[t._m(2),e("input",{directives:[{name:"model",rawName:"v-model",value:t.message.email,expression:"message.email"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("email")},attrs:{type:"text",id:"email",name:"email",placeholder:"abc@email.com"},domProps:{value:t.message.email},on:{input:function(a){a.target.composing||t.$set(t.message,"email",a.target.value)}}}),t.errors.has("email")?e("span",{staticClass:"text-danger"},[t._v("請輸入email")]):t._e()]),e("div",{staticClass:"form-group"},[t._m(3),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message.message,expression:"message.message"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("comments")},attrs:{cols:"20",rows:"5",name:"comments",id:"comments",placeholder:"歡迎給予我們意見，小幫手將會盡快回覆您！"},domProps:{value:t.message.message},on:{input:function(a){a.target.composing||t.$set(t.message,"message",a.target.value)}}}),t.errors.has("comments")?e("span",{staticClass:"text-danger"},[t._v("請輸入訊息")]):t._e()])])])]),e("div",{staticClass:"d-flex justify-content-center"},[e("button",{staticClass:"btn btn-main btnModal w-100",attrs:{type:"button"},on:{click:t.sendMessage}},[e("i",{staticClass:"fas fa-paper-plane fa-2x"})])])])])])])},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title"},[t._v("留言給我們")]),s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("label",{staticClass:"d-flex align-items-center mb-1",attrs:{for:"name"}},[s("i",{staticClass:"fas fa-user-circle fa-2x mr-2"}),s("span",[t._v("姓名")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("label",{staticClass:"d-flex align-items-center mb-1",attrs:{for:"email"}},[s("i",{staticClass:"far fa-envelope fa-2x mr-2"}),s("span",[t._v("Email")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("label",{staticClass:"d-flex align-items-center mb-1",attrs:{for:"comments"}},[s("i",{staticClass:"far fa-comment-dots fa-2x mr-2"}),s("span",[t._v("留言")])])}],r=(s("8e6e"),s("ac6a"),s("456d"),s("bd86")),n=s("1157"),l=s.n(n),o=s("2f62");function c(t,a){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);a&&(e=e.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),s.push.apply(s,e)}return s}function m(t){for(var a=1;a<arguments.length;a++){var s=null!=arguments[a]?arguments[a]:{};a%2?c(s,!0).forEach(function(a){Object(r["a"])(t,a,s[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):c(s).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(s,a))})}return t}var d={data:function(){return{message:{}}},methods:m({},Object(o["b"])("cartModules",["getCart"]),{openModal:function(){l()("#modalQA").modal("show")},sendMessage:function(){var t=this;t.message={name:"",email:"",message:""},t.$validator.validate().then(function(a){a?(l()("#modalQA").modal("hide"),t.message={}):alert("欄位不完整")})}}),computed:m({},Object(o["c"])(["isLoading"]),{},Object(o["c"])("cartModules",["cart","cartLength"])),created:function(){this.$store.dispatch("cartModules/getCart")}},u=d,f=(s("72af"),s("2877")),v=Object(f["a"])(u,e,i,!1,null,"b7c0ed14",null);a["a"]=v.exports},4178:function(t,a,s){},"72af":function(t,a,s){"use strict";var e=s("0a23"),i=s.n(e);i.a},ac5b:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("Nav"),s("div",{staticClass:"loginImg"}),t._m(0)],1)},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container"},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-10 col-md-5",staticStyle:{"margin-top":"250px"}},[s("div",{staticClass:"shadow"},[s("ul",{staticClass:"nav nav-tabs",attrs:{id:"myTab",role:"tablist"}},[s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link active",attrs:{id:"home-tab","data-toggle":"tab",href:"#signIn",role:"tab"}},[s("i",{staticClass:"fas fa-sign-in-alt mr-1"}),t._v("會員登入")])]),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{id:"profile-tab","data-toggle":"tab",href:"#register",role:"tab"}},[s("i",{staticClass:"fas fa-user-plus mr-1"}),t._v("註冊會員")])])]),s("div",{staticClass:"tab-content bg-white pt-3",attrs:{id:"myTabContent"}},[s("div",{staticClass:"tab-pane fade show active",attrs:{id:"signIn",role:"tabpanel"}},[s("div",{staticClass:"form-group px-4"},[s("label",{attrs:{for:"user"}},[t._v("帳號")]),s("input",{staticClass:"form-control",attrs:{type:"text",id:"user",placeholder:"abc@email.com"}})]),s("div",{staticClass:"form-group px-4"},[s("label",{attrs:{for:"password"}},[t._v("密碼")]),s("input",{staticClass:"form-control",attrs:{type:"password",id:"password"}})]),s("input",{staticClass:"btn btn-outline-main col-3 ml-4 mb-4",attrs:{type:"button",value:"登入"}})]),s("div",{staticClass:"tab-pane fade ",attrs:{id:"register",role:"tabpanel"}},[s("div",{staticClass:"form-group px-4"},[s("label",{attrs:{for:"setUser"}},[t._v("帳號")]),s("input",{staticClass:"form-control",attrs:{type:"text",id:"setUser",placeholder:"abc@email.com"}})]),s("div",{staticClass:"form-group px-4"},[s("label",{attrs:{for:"setPassword"}},[t._v("密碼")]),s("input",{staticClass:"form-control",attrs:{type:"password",id:"setPassword",placeholder:"8~12位元英文+數字"}})]),s("div",{staticClass:"form-group px-4"},[s("label",{attrs:{for:"recheck"}},[t._v("再次確認密碼")]),s("input",{staticClass:"form-control",attrs:{type:"password",id:"recheck",placeholder:"8~12位元英文+數字"}})]),s("input",{staticClass:"btn btn-outline-main col-3 ml-4 mb-4 ",attrs:{type:"button",value:"註冊"}})])])])])])])}],r=s("216c"),n={components:{Nav:r["a"]}},l=n,o=(s("bf76"),s("2877")),c=Object(o["a"])(l,e,i,!1,null,"0eaa3e40",null);a["default"]=c.exports},bf76:function(t,a,s){"use strict";var e=s("4178"),i=s.n(e);i.a},fe58:function(t,a,s){t.exports=s.p+"img/title02.81d29dc0.png"}}]);
//# sourceMappingURL=chunk-2267faac.d06deb70.js.map