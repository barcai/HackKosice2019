(function(t){function e(e){for(var r,n,o=e[0],l=e[1],c=e[2],u=0,v=[];u<o.length;u++)n=o[u],s[n]&&v.push(s[n][0]),s[n]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);f&&f(e);while(v.length)v.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,n=1;n<a.length;n++){var o=a[n];0!==s[o]&&(r=!1)}r&&(i.splice(e--,1),t=l(l.s=a[0]))}return t}var r={},n={app:0},s={app:0},i=[];function o(t){return l.p+"js/"+({analysis:"analysis",history:"history",team:"team"}[t]||t)+"."+{analysis:"44498e43",history:"2251c872",team:"216c74ba"}[t]+".js"}function l(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(t){var e=[],a={history:1,team:1};n[t]?e.push(n[t]):0!==n[t]&&a[t]&&e.push(n[t]=new Promise(function(e,a){for(var r="css/"+({analysis:"analysis",history:"history",team:"team"}[t]||t)+"."+{analysis:"31d6cfe0",history:"b69081e5",team:"b800cc3d"}[t]+".css",s=l.p+r,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var c=i[o],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===r||u===s))return e()}var v=document.getElementsByTagName("style");for(o=0;o<v.length;o++){c=v[o],u=c.getAttribute("data-href");if(u===r||u===s)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||s,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.request=r,delete n[t],f.parentNode.removeChild(f),a(i)},f.href=s;var p=document.getElementsByTagName("head")[0];p.appendChild(f)}).then(function(){n[t]=0}));var r=s[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise(function(e,a){r=s[t]=[e,a]});e.push(r[2]=i);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=o(t),c=function(e){u.onerror=u.onload=null,clearTimeout(v);var a=s[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+r+": "+n+")");i.type=r,i.request=n,a[1](i)}s[t]=void 0}};var v=setTimeout(function(){c({type:"timeout",target:u})},12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=r,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)l.d(a,r,function(e){return t[e]}.bind(null,r));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/HackKosice2019/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var v=0;v<c.length;v++)e(c[v]);var f=u;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var r=a("2b0e"),n=a("bb71");a("da64");r["a"].use(n["a"],{iconfont:"md",theme:{primary:"#4b0082"}});var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",["/login"!=t.$route.path?a("NavigationDrawer"):t._e(),a("v-content",{staticClass:"mx-4 mb-4 mt-4"},[a("router-view")],1)],1)},i=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-navigation-drawer",{attrs:{clipped:t.$vuetify.breakpoint.lgAndUp,fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-layout",{attrs:{column:"","align-center":""}},[a("v-flex",{staticClass:"mt-5"},[a("v-avatar",{attrs:{size:"100"}},[a("img",{staticClass:"text-lg-center",attrs:{src:"/example-avatar.png"}})])],1),a("v-flex",{staticClass:"mt-5"},[a("p",{staticClass:"headline text-capitalize"},[t._v(t._s(t.userName))])]),a("v-flex",{staticClass:"mt-3"},[a("v-progress-circular",{attrs:{value:20,color:"indigo darken-2"}})],1),a("v-flex",{staticClass:"mt-3 mb-0"},[a("p",{staticClass:"subheading text-capitalize gray--text darken-2"},[t._v("Level "+t._s(t.level))])]),a("v-flex",{staticClass:"mt-0 mb-3"},[a("p",{staticClass:"subheading text-uppercase"},[t._v(t._s(t.levelName))])])],1),a("v-list",t._l(t.items,function(e){return a("v-list-tile",{key:e.text,attrs:{router:"",to:e.path}},[a("v-list-tile-action",[a("v-icon",[t._v(t._s(e.icon))])],1),a("v-list-tile-content",[a("v-list-tile-title",[t._v("\n              "+t._s(e.text)+"\n            ")])],1)],1)}),1)],1),a("v-toolbar",{attrs:{app:"",fixed:"","clipped-left":t.$vuetify.breakpoint.lgAndUp}},[a("v-toolbar-title",{staticClass:"headline text-uppercase ml-0 pl-3"},[a("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),a("span",{staticClass:"hidden-sm-and-down"},[t._v("Banky stuff")])],1),a("v-spacer"),a("v-btn",{attrs:{flat:"",href:"https://github.com/vuetifyjs/vuetify/releases/latest",target:"_blank"}},[a("span",{staticClass:"mr-2"},[t._v("Log out")])])],1)],1)},l=[],c={data:function(){return{drawer:null,items:[{icon:"account_circle",text:"Profile",path:"/profile"},{icon:"show_chart",text:"Analysis",path:"/analysis"},{icon:"history",text:"History",path:"/history"},{icon:"person",text:"Team",path:"/team"}],valueDeterminate:50}},computed:{level:function(){return this.$store.getters.userLevel},levelName:function(){return this.$store.getters.userLevelName},userName:function(){return this.$store.getters.userName}}},u=c,v=a("2877"),f=a("6544"),p=a.n(f),d=a("8212"),m=a("8336"),h=a("0e8f"),g=a("132d"),b=a("a722"),y=a("8860"),x=a("ba95"),_=a("40fe"),w=a("5d23"),C=a("f774"),k=a("490a"),V=a("9910"),T=a("71d9"),L=a("706c"),N=a("2a7f"),A=Object(v["a"])(u,o,l,!1,null,null,null),j=A.exports;p()(A,{VAvatar:d["a"],VBtn:m["a"],VFlex:h["a"],VIcon:g["a"],VLayout:b["a"],VList:y["a"],VListTile:x["a"],VListTileAction:_["a"],VListTileContent:w["a"],VListTileTitle:w["b"],VNavigationDrawer:C["a"],VProgressCircular:k["a"],VSpacer:V["a"],VToolbar:T["a"],VToolbarSideIcon:L["a"],VToolbarTitle:N["a"]});var O={name:"App",components:{NavigationDrawer:j},data:function(){return{}}},P=O,S=a("7496"),$=a("549c"),E=Object(v["a"])(P,s,i,!1,null,null,null),B=E.exports;p()(E,{VApp:S["a"],VContent:$["a"]});var F=a("8c4f"),z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard"},[a("h1",{staticClass:"headline text-uppercase darkgrey--text"},[t._v("Profile")]),a("v-container",{attrs:{"fill-height":"",fluid:"","grid-list-xl":""}},[a("v-layout",{attrs:{"justify-center":"",wrap:""}},[a("v-flex",{attrs:{xs12:"",md6:""}},[a("v-card",{staticClass:"v-card-profile"},[a("v-card-title",[a("v-layout",{attrs:{column:"","align-center":"","justify-center":"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-avatar",{attrs:{size:"100"}},[a("img",{staticClass:"text-lg-center",attrs:{src:"https://api.adorable.io/avatars/285/abott@adorable.png"}})])],1)],1)],1),a("v-card-text",{staticClass:"text-xs-center"},[a("h1",{staticClass:"card-title font-weight-light mb-2"},[t._v(t._s(t.userName)+"'s wife")]),a("h6",{staticClass:"category text-gray font-weight-thin"},[t._v("Level 5")]),a("h2",{staticClass:"subheading text-capitalize mb-3"},[t._v("Financial GURU")]),a("v-list",t._l(t.banks2,function(e){return a("v-list-tile",{key:e.title,attrs:{avatar:""}},[a("v-list-tile-avatar",[a("v-avatar",[a("img",{attrs:{src:e.icon}})])],1),a("v-list-tile-content",[a("v-list-tile-title",[t._v(t._s(e.name))])],1),a("v-list-tile-action",[a("v-btn",{attrs:{icon:"",ripple:""}},[a("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("info")])],1)],1)],1)}),1),a("v-btn",{staticClass:"font-weight-light",attrs:{color:"success",round:""}},[t._v("Add New Account")])],1)],1)],1),a("v-flex",{attrs:{xs12:"",md6:""}},[a("v-card",{staticClass:"v-card-profile"},[a("v-card-title",[a("v-layout",{attrs:{column:"","align-center":"","justify-center":"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-avatar",{attrs:{size:"100"}},[a("img",{staticClass:"text-lg-center",attrs:{src:"/example-avatar.png"}})])],1)],1)],1),a("v-card-text",{staticClass:"text-xs-center"},[a("h1",{staticClass:"card-title font-weight-light mb-2"},[t._v(t._s(t.userName))]),a("h6",{staticClass:"category text-gray font-weight-thin"},[t._v("Level "+t._s(t.level))]),a("h2",{staticClass:"subheading text-capitalize mb-3"},[t._v(t._s(t.levelName))]),a("v-list",t._l(t.banks1,function(e){return a("v-list-tile",{key:e.title,attrs:{avatar:""}},[a("v-list-tile-avatar",[a("v-avatar",[a("img",{attrs:{src:e.icon}})])],1),a("v-list-tile-content",[a("v-list-tile-title",[t._v(t._s(e.name))])],1),a("v-list-tile-action",[a("v-btn",{attrs:{icon:"",ripple:""}},[a("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("info")])],1)],1)],1)}),1),a("v-btn",{staticClass:"font-weight-light",attrs:{color:"success",round:""}},[t._v("Add New Account")])],1)],1)],1)],1)],1)],1)},U=[],D={data:function(){return{banks2:[{icon:"https://lh3.googleusercontent.com/c_ZuGu8-lSYgnH7JaddLLAOIl-4wOPoF8XXsTr29hvZ8FUo-4Oo_jJD9ayc03KA4aw",name:"Tatra Banka"},{icon:"https://cdn6.aptoide.com/imgs/4/8/3/483fa096e40efb1cc7dcaedd747cb8ec_icon.png?w=256",name:"Raiffeisen Bank"}],banks1:[{icon:"https://lh3.googleusercontent.com/c_ZuGu8-lSYgnH7JaddLLAOIl-4wOPoF8XXsTr29hvZ8FUo-4Oo_jJD9ayc03KA4aw",name:"Tatra Banka"}]}},computed:{level:function(){return this.$store.getters.userLevel},levelName:function(){return this.$store.getters.userLevelName},userName:function(){return this.$store.getters.userName}}},J=D,H=a("b0af"),I=a("99d9"),K=a("12b2"),M=a("a523"),X=a("c954"),Z=Object(v["a"])(J,z,U,!1,null,null,null),q=Z.exports;p()(Z,{VAvatar:d["a"],VBtn:m["a"],VCard:H["a"],VCardText:I["b"],VCardTitle:K["a"],VContainer:M["a"],VFlex:h["a"],VIcon:g["a"],VLayout:b["a"],VList:y["a"],VListTile:x["a"],VListTileAction:_["a"],VListTileAvatar:X["a"],VListTileContent:w["a"],VListTileTitle:w["b"]}),r["a"].use(F["a"]);var G=function(){return a.e("analysis").then(a.bind(null,"9aef"))},R=function(){return a.e("history").then(a.bind(null,"e4bb"))},Y=function(){return a.e("team").then(a.bind(null,"0767"))},Q=new F["a"]({routes:[{path:"/",redirect:"/profile"},{path:"/profile",name:"profile",component:q},{path:"/analysis",name:"analysis",component:G},{path:"/history",name:"history",component:R},{path:"/team",name:"team",component:Y},{path:"*",redirect:"/profile"}]}),W=(a("7f7f"),a("2f62"));r["a"].use(W["a"]);var tt=new W["a"].Store({state:{user:{level:3,levelName:"Finance manager",name:"Example User"}},mutations:{},actions:{},getters:{userLevel:function(t){return t.user.level},userLevelName:function(t){return t.user.levelName},userName:function(t){return t.user.name}}}),et=a("9483");Object(et["a"])("".concat("/HackKosice2019/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var at=a("cb43");r["a"].config.productionTip=!1,r["a"].use(at["default"]),new r["a"]({router:Q,store:tt,render:function(t){return t(B)}}).$mount("#app")}});
//# sourceMappingURL=app.98bac009.js.map