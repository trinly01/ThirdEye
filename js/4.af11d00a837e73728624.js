webpackJsonp([4],{291:function(t,e,r){function o(t){r(349)}var i=r(210)(r(336),r(360),o,null,null);t.exports=i.exports},336:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{canGoBack:window.history.length>1}},methods:{goBack:function(){window.history.go(-1)}}}},346:function(t,e,r){e=t.exports=r(289)(void 0),e.push([t.i,".error-page .error-code{height:50vh;width:100%;padding-top:15vh;font-size:30vmax;color:hsla(0,0%,100%,.2);overflow:hidden}.error-page .error-card{margin-top:-25px;width:90vw;max-width:600px;padding:50px}.error-page .error-card i{font-size:5rem}",""])},349:function(t,e,r){var o=r(346);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);r(290)("74b0371c",o,!0)},360:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"error-page window-height window-width bg-light column items-center"},[r("div",{staticClass:"error-code bg-primary flex items-center justify-center"},[t._v("\n    404\n  ")]),t._v(" "),r("div",[r("div",{staticClass:"error-card card bg-white column items-center justify-center"},[r("i",{staticClass:"text-grey-5"},[t._v("error_outline")]),t._v(" "),r("p",{staticClass:"caption text-center"},[t._v("Oops. Nothing here...")]),t._v(" "),r("p",{staticClass:"text-center group"},[t.canGoBack?r("button",{staticClass:"grey push small",on:{click:t.goBack}},[r("i",{staticClass:"on-left"},[t._v("keyboard_arrow_left")]),t._v("\n          Go back\n        ")]):t._e(),t._v(" "),r("router-link",{attrs:{to:"/"}},[r("button",{staticClass:"grey push small"},[t._v("\n            Go home\n            "),r("i",{staticClass:"on-right"},[t._v("home")])])])],1)])])])},staticRenderFns:[]}}});