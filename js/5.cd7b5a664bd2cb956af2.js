webpackJsonp([5],{297:function(e,t,a){var s=a(210)(a(342),a(359),null,null,null);e.exports=s.exports},342:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(47),n=(a.n(s),a(86)),i=a.n(n);t.default={mounted:function(){this.$bindAsArray("users",this.$database.ref("users")),this.$bindAsArray("companies",this.$database.ref("companies")),this.$bindAsArray("stores",this.$database.ref("stores")),this.$user?this.$user&&"Admin"!==this.$user.data.type&&this.$router.push("/login"):this.$router.push("/login")},computed:{filteredUsers:function(){var e=this;return 0!==this.users.length?this.users.filter(function(t){return!!t.displayName&&(-1!==t.displayName.toLowerCase().indexOf(e.search.toLowerCase())||-1!==t.email.toLowerCase().indexOf(e.search.toLowerCase())||-1!==t.type.toLowerCase().indexOf(e.search.toLowerCase()))}):this.users},storeOptions:function(){return i.a.map(this.stores).map(function(e){return{label:e.name,value:e.name}})},companyOptions:function(){return i.a.map(this.companies).map(function(e){var t=i.a.map(e.brands).map(function(e){return{label:e,value:e}});return i.a.assign(e,{label:e.name,value:{name:e.name,brands:t}})})},companyCheck:function(){return this.company}},data:function(){return{search:"",users:[],companies:[],company:"",store:""}},methods:{activate:function(e,t){this.$auth.usersRef.child(t+"/activated").set(!e)},showBrand:function(e){var t=this;if(e.company){var a=e.company.brands||[];s.Dialog.create({title:e.email,form:{brand:{type:"radio",model:e.brand,items:a}},buttons:["cancel",{label:"Save",handler:function(a){console.log(a.brand),t.$auth.usersRef.child(e[".key"]+"/brand").set(a.brand)}}]})}else s.Toast.create.negative({html:"Add a company first"})},showUser:function(e){var t=this;s.Dialog.create({title:e.email,form:{displayName:{type:"textbox",label:"Display Name",model:e.displayName},header1:{type:"heading",label:"Type"},type:{type:"radio",model:e.type,items:[{label:"Company manager",value:"Company manager"},{label:"Brand manager",value:"Brand manager"},{label:"Store owner",value:"Store owner"},{label:"Admin",value:"Admin"}]},header2:{type:"heading",label:"Company"},company:{type:"radio",model:e.company,items:this.companyOptions},header3:{type:"heading",label:"Store"},store:{type:"radio",model:this.store,items:this.storeOptions}},buttons:["Cancel",{label:"Save",preventClose:!0,handler:function(a,n){a.company=a.company||"",0===a.displayName.length?s.Toast.create.negative({html:"Invalid name"}):0===a.type.length?s.Toast.create.negative({html:"Invalid type"}):(s.Loading.show(),t.$auth.usersRef.child(e[".key"]).update(a).then(function(e){n(),s.Loading.hide()}).catch(function(e){s.Toast.create.negative({html:e.code+": "+e.message})}))}}]})},showAddForm:function(){var e=this,t=s.Dialog.create({title:"Create User",form:{displayName:{type:"textbox",label:"Display Name",model:""},email:{type:"textbox",label:"Email",model:""},password:{type:"password",label:"Password",model:""},passwordConfirm:{type:"password",label:"Password",model:""},header:{type:"heading",label:"Type"},type:{type:"radio",model:"",items:[{label:"Company manager",value:"Company manager"},{label:"Brand manager",value:"Brand manager"},{label:"Store owner",value:"Store owner"},{label:"Admin",value:"Admin"}]},header2:{type:"heading",label:"Company"},company:{type:"radio",model:this.company,items:this.companyOptions},header3:{type:"heading",label:"Store"},store:{type:"radio",model:this.store,items:this.storeOptions}},buttons:["Cancel",{label:"Save",preventClose:!0,handler:function(a,n){console.log(t);var i=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;0===a.displayName.length?s.Toast.create.negative({html:"Invalid name"}):i.test(a.email)?a.password.length<6||a.password!==a.passwordConfirm?s.Toast.create.negative({html:"Invalid password"}):0===a.type.length?s.Toast.create.negative({html:"Invalid type"}):(s.Loading.show(),e.$auth2.createUserWithEmailAndPassword(a.email,a.password).then(function(t){delete a.passwordConfirm,delete a.password,a.activated=!1,e.$auth.usersRef.child(t.uid).set(a).then(function(e){n(),s.Loading.hide()}).catch(function(e){s.Toast.create.negative({html:e.code+": "+e.message})})}).catch(function(e){s.Toast.create.negative({html:e.code+": "+e.message})})):s.Toast.create.negative({html:"Invalid email"})}}]})}}}},359:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"toolbar primary",slot:"header"},[a("q-toolbar-title",{staticClass:"row full-width flex",attrs:{padding:0}},[a("div",{staticClass:"row full-width flex"},[a("span",{staticClass:"auto",staticStyle:{padding:"8px 16px 0px 0px"}},[e._v("User Management "+e._s(e.companyCheck))]),e._v(" "),a("q-search",{staticClass:"primary float-right",staticStyle:{"max-width":"320px"},attrs:{model:e.search},on:{"update:model":function(t){e.search=t}},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)])],1),e._v(" "),a("div",{staticClass:"layout-padding"},[a("table",{staticClass:"q-table bordered highlight striped-odd loose full-width responsive"},[e._m(0),e._v(" "),a("tbody",e._l(e.filteredUsers,function(t){return a("tr",{key:t._id},[a("td",{staticClass:"text-left",on:{click:function(a){e.showUser(t)}}},[e._v(e._s(t.displayName))]),e._v(" "),a("td",{staticClass:"text-right",on:{click:function(a){e.showUser(t)}}},[e._v(e._s(t.email))]),e._v(" "),a("td",{staticClass:"text-right",on:{click:function(a){e.showUser(t)}}},[e._v(e._s(t.type))]),e._v(" "),a("td",{staticClass:"text-right",on:{click:function(a){e.showUser(t)}}},[t.company?a("span",[e._v(e._s(t.company.name))]):e._e()]),e._v(" "),a("td",{staticClass:"text-right",on:{click:function(a){e.showBrand(t)}}},[t.brand?a("span",[e._v(e._s(t.brand))]):e._e()]),e._v(" "),a("td",{staticClass:"text-right",on:{click:function(a){e.showUser(t)}}},[t.store?a("span",[e._v(e._s(t.store))]):e._e()]),e._v(" "),a("td",{staticClass:"text-right"},[a("q-toggle",{attrs:{value:t.activated},on:{input:function(a){e.activate(t.activated,t[".key"])}}})],1)])}))])]),e._v(" "),a("button",{staticClass:"primary circular absolute-bottom-right raised",staticStyle:{bottom:"2em",right:"2em"},on:{click:e.showAddForm}},[a("i",[e._v("add")])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("thead",[a("tr",[a("th",{staticClass:"text-left"},[e._v("Name")]),e._v(" "),a("th",{staticClass:"text-right"},[e._v("Email")]),e._v(" "),a("th",{staticClass:"text-right"},[e._v("Type")]),e._v(" "),a("th",{staticClass:"text-right"},[e._v("Company")]),e._v(" "),a("th",{staticClass:"text-right"},[e._v("Brand")]),e._v(" "),a("th",{staticClass:"text-right"},[e._v("Store")]),e._v(" "),a("th",{staticClass:"text-right"},[e._v("Activated")])])])}]}}});