webpackJsonp([5],{293:function(e,t,a){var s=a(208)(a(322),a(335),null,null,null);e.exports=s.exports},322:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(47);a.n(s);t.default={mounted:function(){this.$bindAsArray("companies",this.$database.ref("companies")),this.$user&&"Admin"===!this.$user.data.type&&this.$router.push("/login")},data:function(){return{search:"",companies:[]}},methods:{showCompany:function(e){var t=this;s.Dialog.create({title:"Create Company",form:{code:{type:"textbox",label:"Code",model:e.code},name:{type:"textbox",label:"Name",model:e.name},brands:{type:"chips",label:"Brands",model:e.brands}},buttons:["Cancel",{label:"Save",preventClose:!0,handler:function(a,o){console.log(a),""===a.code&&""===a.name&&a.brands.length<1?s.Toast.create.negative({html:"All fields are required"}):(s.Loading.show(),t.$firebaseRefs.companies.child(e[".key"]).set(a).then(function(){s.Loading.hide(),o(),s.Toast.create.positive({html:a.code+" | "+a.name+" updated"})}).catch(function(e){s.Loading.hide(),s.Toast.create.negative({html:e.code+": "+e.message})}))}}]})},showAddForm:function(){var e=this;s.Dialog.create({title:"Create Company",form:{code:{type:"textbox",label:"Code",model:""},name:{type:"textbox",label:"Name",model:""},brands:{type:"chips",label:"Brands",model:[]}},buttons:["Cancel",{label:"Save",preventClose:!0,handler:function(t,a){console.log(t),""===t.code&&""===t.name&&t.brands.length<1?s.Toast.create.negative({html:"All fields are required"}):(console.log(e.$firebaseRefs),s.Loading.show(),e.$firebaseRefs.companies.push(t).then(function(){s.Loading.hide(),s.Toast.create.positive({html:t.code+" | "+t.name+" created"}),a()}).catch(function(e){s.Loading.hide(),s.Toast.create.negative({html:e.code+": "+e.message})}))}}]})}}}},335:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"toolbar primary",slot:"header"},[a("q-toolbar-title",{staticClass:"row full-width flex",attrs:{padding:0}},[a("div",{staticClass:"row full-width flex"},[a("span",{staticClass:"auto",staticStyle:{padding:"8px 16px 0px 0px"}},[e._v("Category Management")]),e._v(" "),a("q-search",{staticClass:"primary float-right",staticStyle:{"max-width":"320px"},attrs:{model:e.search},on:{"update:model":function(t){e.search=t}},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)])],1),e._v(" "),a("div",{staticClass:"layout-padding"},[a("table",{staticClass:"q-table bordered highlight striped-odd loose full-width responsive"},[e._m(0),e._v(" "),a("tbody",e._l(e.companies,function(t){return a("tr",{key:t[".key"]},[a("td",{staticClass:"text-left",on:{click:function(a){e.showCompany(t)}}},[e._v(e._s(t.code))]),e._v(" "),a("td",{staticClass:"text-left",on:{click:function(a){e.showCompany(t)}}},[e._v(e._s(t.name))]),e._v(" "),a("td",{staticClass:"text-left",on:{click:function(a){e.showCompany(t)}}},[a("q-chips",{attrs:{readonly:""},model:{value:t.brands,callback:function(e){t.brands=e},expression:"c.brands"}})],1),e._v(" "),a("td",{staticClass:"text-right"},[a("button",{staticClass:"circular small text-negative",on:{click:function(a){e.deleteCompany(t)}}},[a("i",[e._v("delete")])])])])}))])]),e._v(" "),a("button",{staticClass:"primary circular absolute-bottom-right raised",staticStyle:{bottom:"2em",right:"2em"},on:{click:e.showAddForm}},[a("i",[e._v("add")])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("thead",[a("tr",[a("th",{staticClass:"text-left"},[e._v("Code")]),e._v(" "),a("th",{staticClass:"text-left"},[e._v("Name")]),e._v(" "),a("th",{staticClass:"text-left"},[e._v("Brands")]),e._v(" "),a("th",{staticClass:"text-center"})])])}]}}});