webpackJsonp([10],{295:function(e,t,a){var s=a(211)(a(345),a(367),null,null,null);e.exports=s.exports},345:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(47);a.n(s);t.default={mounted:function(){this.$bindAsArray("categories",this.$database.ref("categories")),this.$store.state.user&&this.$store.state.user.data&&"Admin"!==this.$store.state.user.data.type&&this.$router.push("/login")},data:function(){return{search:"",categories:[]}},computed:{$user:function(){return this.$store.state.user}},methods:{deleteCategory:function(e){var t=this;s.Dialog.create({title:"Warning",message:"Are you sure you want to delete "+e.code+" | "+e.name+"?",buttons:["No",{label:"Yes",handler:function(a,s){t.$firebaseRefs.categories.child(e[".key"]).remove()}}]})},showCategory:function(e){var t=this;s.Dialog.create({title:"Edit Category",form:{code:{type:"textbox",label:"Code",model:e.code},name:{type:"textbox",label:"Name",model:e.name}},buttons:["Cancel",{label:"Save",preventClose:!0,handler:function(a,o){console.log(a),""===a.code&&""===a.name?s.Toast.create.negative({html:"All fields are required"}):(s.Loading.show(),t.$firebaseRefs.categories.child(e[".key"]).set(a).then(function(){s.Loading.hide(),o(),s.Toast.create.positive({html:a.code+" | "+a.name+" updated"})}).catch(function(e){s.Loading.hide(),s.Toast.create.negative({html:e.code+": "+e.message})}))}}]})},showAddForm:function(){var e=this;s.Dialog.create({title:"Create Category",form:{code:{type:"textbox",label:"Code",model:""},name:{type:"textbox",label:"Name",model:""}},buttons:["Cancel",{label:"Save",preventClose:!0,handler:function(t,a){console.log(t),""===t.code&&""===t.name?s.Toast.create.negative({html:"All fields are required"}):(s.Loading.show(),e.$firebaseRefs.categories.push(t).then(function(){s.Loading.hide(),s.Toast.create.positive({html:t.code+" | "+t.name+" created"}),a()}).catch(function(e){s.Loading.hide(),s.Toast.create.negative({html:e.code+": "+e.message})}))}}]})}}}},367:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"toolbar primary",slot:"header"},[a("q-toolbar-title",{staticClass:"row full-width flex",attrs:{padding:0}},[a("div",{staticClass:"row full-width flex"},[a("span",{staticClass:"auto",staticStyle:{padding:"8px 16px 0px 0px"}},[e._v("Category Management")]),e._v(" "),a("q-search",{staticClass:"primary float-right",staticStyle:{"max-width":"320px"},attrs:{model:e.search},on:{"update:model":function(t){e.search=t}},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)])],1),e._v(" "),a("div",{staticClass:"layout-padding"},[a("table",{staticClass:"q-table bordered highlight striped-odd loose full-width responsive"},[e._m(0),e._v(" "),a("tbody",e._l(e.categories,function(t){return a("tr",{key:t[".key"]},[a("td",{staticClass:"text-left",on:{click:function(a){e.showCategory(t)}}},[e._v(e._s(t.code))]),e._v(" "),a("td",{staticClass:"text-left",on:{click:function(a){e.showCategory(t)}}},[e._v(e._s(t.name))]),e._v(" "),a("td",{staticClass:"text-right"},[a("button",{staticClass:"circular small text-negative",on:{click:function(a){e.deleteCategory(t)}}},[a("i",[e._v("delete")])])])])}))])]),e._v(" "),a("button",{staticClass:"primary circular absolute-bottom-right raised",staticStyle:{bottom:"2em",right:"2em"},on:{click:e.showAddForm}},[a("i",[e._v("add")])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("thead",[a("tr",[a("th",{staticClass:"text-left"},[e._v("Code")]),e._v(" "),a("th",{staticClass:"text-left"},[e._v("Name")]),e._v(" "),a("th",{staticClass:"text-center"})])])}]}}});