webpackJsonp([3],{292:function(t,e,a){function s(t){a(347)}var i=a(210)(a(337),a(357),s,null,null);t.exports=i.exports},337:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(47);a.n(s);e.default={methods:{logout:function(){return this.$auth.signOut()},showChangePassword:function(){var t=this;s.Loading.show(),this.$auth.sendPasswordResetEmail(this.$user.email).then(function(){s.Dialog.create({title:"Password Reset",message:"We sent your password reset link to your email: "+t.$user.email}),s.Loading.hide()}).catch(function(t){s.Loading.hide(),s.Toast.create.negative({html:t.code+": "+t.message})})}}}},344:function(t,e,a){e=t.exports=a(289)(void 0),e.push([t.i,".layout-header{z-index:5}button{z-index:100}",""])},347:function(t,e,a){var s=a(344);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a(290)("6adeb246",s,!0)},357:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",[a("div",{staticClass:"toolbar",staticStyle:{position:"relative","z-index":"5"},slot:"header"},[a("button",{staticClass:"hide-on-drawer-visible",on:{click:function(e){t.$refs.leftDrawer.open()}}},[a("i",[t._v("menu")])]),t._v(" "),a("q-toolbar-title",{attrs:{padding:0}},[t._v("\n      Property Inventory v"+t._s(t.$q.version)+"\n    ")]),t._v(" "),a("button",{staticClass:"circular small raised"},[a("i",[t._v("person")]),t._v(" "),a("q-popover",{ref:"popover"},[a("div",{staticClass:"list item-delimiter highlight",staticStyle:{width:"250px"}},[t.$user&&t.$user.data?a("div",{staticClass:"list-label"},[t._v(t._s(t.$user.data.displayName)+" ("+t._s(t.$user.data.type)+")")]):t._e(),t._v(" "),t.$user&&t.$user.data?a("div",{staticClass:"item item-link",on:{click:t.showChangePassword}},[a("div",{staticClass:"item-content"},[t._v("\n              Change Password\n            ")])]):t._e(),t._v(" "),t.$user?a("div",{staticClass:"item item-link",on:{click:t.logout}},[a("div",{staticClass:"item-content"},[t._v("\n              Logout\n            ")])]):t._e(),t._v(" "),a("router-link",{attrs:{to:"/login"}},[t.$user?t._e():a("div",{staticClass:"item item-link",on:{click:t.logout}},[a("div",{staticClass:"item-content"},[t._v("\n                Login\n              ")])])])],1)])],1)],1),t._v(" "),a("q-drawer",{ref:"leftDrawer"},[a("div",{staticClass:"toolbar light"},[a("q-toolbar-title",{attrs:{padding:1}},[t._v("\n          Drawer\n      ")])],1),t._v(" "),a("div",{staticClass:"list no-border platform-delimiter"},[a("q-drawer-link",{attrs:{icon:"group",to:"/admin",exact:""}},[t._v("\n        Users\n      ")]),t._v(" "),a("q-drawer-link",{attrs:{icon:"group_work",to:"/category",exact:""}},[t._v("\n        Category\n      ")]),t._v(" "),a("q-drawer-link",{attrs:{icon:"branding_watermark",to:"companyBrands",exact:""}},[t._v("\n        Comapny & Brands\n      ")]),t._v(" "),a("q-drawer-link",{attrs:{icon:"shopping_basket",to:"/item",exact:""}},[t._v("\n        Item / Product\n      ")]),t._v(" "),a("q-drawer-link",{attrs:{icon:"store",to:"/store",exact:""}},[t._v("\n        Store\n      ")]),t._v(" "),a("div",{staticClass:"list-label"},[t._v("Layout Components")]),t._v(" "),a("q-drawer-link",{attrs:{icon:"build",to:"/showcase/layout/toolbar"}},[t._v("\n        Toolbar\n      ")]),t._v(" "),a("q-drawer-link",{attrs:{icon:"tab",to:"/showcase/layout/tabs"}},[t._v("\n        Tabs\n      ")]),t._v(" "),a("q-drawer-link",{attrs:{icon:"compare_arrows",to:"/showcase/layout/drawer"}},[t._v("\n        Layout Drawer\n      ")])],1)]),t._v(" "),a("router-view",{staticClass:"layout-view"})],1)},staticRenderFns:[]}}});