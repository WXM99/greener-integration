(function(e){function a(a){for(var t,r,o=a[0],u=a[1],s=a[2],d=0,p=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&p.push(i[r][0]),i[r]=0;for(t in u)Object.prototype.hasOwnProperty.call(u,t)&&(e[t]=u[t]);c&&c(a);while(p.length)p.shift()();return v.push.apply(v,s||[]),n()}function n(){for(var e,a=0;a<v.length;a++){for(var n=v[a],t=!0,r=1;r<n.length;r++){var o=n[r];0!==i[o]&&(t=!1)}t&&(v.splice(a--,1),e=u(u.s=n[0]))}return e}var t={},r={app:0},i={app:0},v=[];function o(e){return u.p+"js/"+({"view-HelloWorld-vue":"view-HelloWorld-vue","view-TabbarFrame-vue":"view-TabbarFrame-vue","view-account-index-vue":"view-account-index-vue","view-dashboard-answer_paper-vue":"view-dashboard-answer_paper-vue","view-dashboard-index-vue":"view-dashboard-index-vue","view-dashboard-papers-vue":"view-dashboard-papers-vue","view-dashboard-review_paper-vue":"view-dashboard-review_paper-vue","view-events-events_details-vue":"view-events-events_details-vue","view-events-events_list-vue":"view-events-events_list-vue","view-events-index-vue":"view-events-index-vue","view-matching-index-vue":"view-matching-index-vue"}[e]||e)+"."+{"view-HelloWorld-vue":"891e0899","view-TabbarFrame-vue":"6ab567b2","view-account-index-vue":"c6eeb90a","view-dashboard-answer_paper-vue":"f4b7dead","view-dashboard-index-vue":"db37a1d1","view-dashboard-papers-vue":"477e7223","view-dashboard-review_paper-vue":"0b3ee538","view-events-events_details-vue":"034bbb88","view-events-events_list-vue":"5c5a8a6b","view-events-index-vue":"d26b1bdb","view-matching-index-vue":"a58b8c1f"}[e]+".js"}function u(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var a=[],n={"view-HelloWorld-vue":1,"view-TabbarFrame-vue":1,"view-account-index-vue":1,"view-dashboard-answer_paper-vue":1,"view-dashboard-index-vue":1,"view-dashboard-papers-vue":1,"view-dashboard-review_paper-vue":1,"view-events-events_details-vue":1,"view-events-events_list-vue":1,"view-events-index-vue":1,"view-matching-index-vue":1};r[e]?a.push(r[e]):0!==r[e]&&n[e]&&a.push(r[e]=new Promise((function(a,n){for(var t="css/"+({"view-HelloWorld-vue":"view-HelloWorld-vue","view-TabbarFrame-vue":"view-TabbarFrame-vue","view-account-index-vue":"view-account-index-vue","view-dashboard-answer_paper-vue":"view-dashboard-answer_paper-vue","view-dashboard-index-vue":"view-dashboard-index-vue","view-dashboard-papers-vue":"view-dashboard-papers-vue","view-dashboard-review_paper-vue":"view-dashboard-review_paper-vue","view-events-events_details-vue":"view-events-events_details-vue","view-events-events_list-vue":"view-events-events_list-vue","view-events-index-vue":"view-events-index-vue","view-matching-index-vue":"view-matching-index-vue"}[e]||e)+"."+{"view-HelloWorld-vue":"3fe51d8b","view-TabbarFrame-vue":"f42b8172","view-account-index-vue":"66fa7de9","view-dashboard-answer_paper-vue":"5af43943","view-dashboard-index-vue":"2c5f745c","view-dashboard-papers-vue":"835a93d4","view-dashboard-review_paper-vue":"1b85c66c","view-events-events_details-vue":"1e152ec1","view-events-events_list-vue":"34ce4445","view-events-index-vue":"fe5d28ff","view-matching-index-vue":"0c7ce95c"}[e]+".css",i=u.p+t,v=document.getElementsByTagName("link"),o=0;o<v.length;o++){var s=v[o],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===t||d===i))return a()}var p=document.getElementsByTagName("style");for(o=0;o<p.length;o++){s=p[o],d=s.getAttribute("data-href");if(d===t||d===i)return a()}var c=document.createElement("link");c.rel="stylesheet",c.type="text/css",c.onload=a,c.onerror=function(a){var t=a&&a.target&&a.target.src||i,v=new Error("Loading CSS chunk "+e+" failed.\n("+t+")");v.code="CSS_CHUNK_LOAD_FAILED",v.request=t,delete r[e],c.parentNode.removeChild(c),n(v)},c.href=i;var l=document.getElementsByTagName("head")[0];l.appendChild(c)})).then((function(){r[e]=0})));var t=i[e];if(0!==t)if(t)a.push(t[2]);else{var v=new Promise((function(a,n){t=i[e]=[a,n]}));a.push(t[2]=v);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,u.nc&&d.setAttribute("nonce",u.nc),d.src=o(e);var p=new Error;s=function(a){d.onerror=d.onload=null,clearTimeout(c);var n=i[e];if(0!==n){if(n){var t=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src;p.message="Loading chunk "+e+" failed.\n("+t+": "+r+")",p.name="ChunkLoadError",p.type=t,p.request=r,n[1](p)}i[e]=void 0}};var c=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(a)},u.m=e,u.c=t,u.d=function(e,a,n){u.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,a){if(1&a&&(e=u(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var t in e)u.d(n,t,function(a){return e[a]}.bind(null,t));return n},u.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(a,"a",a),a},u.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},u.p="",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=a,s=s.slice();for(var p=0;p<s.length;p++)a(s[p]);var c=d;v.push([0,"chunk-vendors"]),n()})({0:function(e,a,n){e.exports=n("56d7")},"034f":function(e,a,n){"use strict";var t=n("85ec"),r=n.n(t);r.a},"0f13":function(e,a,n){var t={"./HelloWorld.vue":["fdab","view-HelloWorld-vue"],"./TabbarFrame.vue":["6524","view-TabbarFrame-vue"],"./account/index.vue":["e422","view-account-index-vue"],"./dashboard/answer_paper.vue":["3cb1","view-dashboard-answer_paper-vue"],"./dashboard/index.vue":["0a93","view-dashboard-index-vue"],"./dashboard/papers.vue":["b2ea","view-dashboard-papers-vue"],"./dashboard/review_paper.vue":["265f","view-dashboard-review_paper-vue"],"./events/events_details.vue":["775d","view-events-events_details-vue"],"./events/events_list.vue":["68b8","view-events-events_list-vue"],"./events/index.vue":["f19f","view-events-index-vue"],"./matching/index.vue":["cda7","view-matching-index-vue"]};function r(e){if(!n.o(t,e))return Promise.resolve().then((function(){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}));var a=t[e],r=a[0];return n.e(a[1]).then((function(){return n(r)}))}r.keys=function(){return Object.keys(t)},r.id="0f13",e.exports=r},"56d7":function(e,a,n){"use strict";n.r(a);n("e260"),n("e6cf"),n("cca6"),n("a79d");var t=n("2b0e"),r=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],v={name:"App"},o=v,u=(n("034f"),n("2877")),s=Object(u["a"])(o,r,i,!1,null,null,null),d=s.exports,p=n("a18c"),c=n("2f62"),l=n("bc3a"),w=n.n(l),f=(n("157a"),n("b970")),b=n("343b"),h=n("d399"),m=n("5f5b");n("2dd8"),n("f9e3");t["default"].use(f["a"]),t["default"].use(b["a"]),t["default"].use(h["a"]),t["default"].use(m["a"]),w.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",w.a.defaults.withCredentials=!0,t["default"].prototype.$axios=w.a,t["default"].prototype.$ajax=w.a,w.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",w.a.defaults.withCredentials=!1,w.a.defaults.baseURL="https://us-south.functions.appdomain.cloud/api/v1/web/6715ac50-fa50-4b71-bde4-975607b56165/",t["default"].config.productionTip=!1,t["default"].use(c["a"]);var _={login:!1,username:""};a["default"]=_;new t["default"]({render:function(e){return e(d)},router:p["a"],axios:w.a,store:_,components:{App:d}}).$mount("#app")},"85ec":function(e,a,n){},a18c:function(e,a,n){"use strict";n("d3b7");var t=n("2b0e"),r=n("8c4f");function i(e){return function(){return n("0f13")("./".concat(e,".vue"))}}t["default"].use(r["a"]),t["default"].use(r["a"]);var v=new r["a"]({routes:[{path:"/",component:i("TabbarFrame"),children:[{path:"events",name:"events",component:i("events/index")},{path:"positions",name:"positions",component:i("HelloWorld")},{path:"",name:"dashboard",component:i("dashboard/index")},{path:"matching",name:"matching",component:i("matching/index")},{path:"paper_list/:type",name:"paper_list",component:i("dashboard/papers")},{path:"ans_paper/:id",name:"ans_paper",component:i("dashboard/answer_paper")},{path:"view_paper/:id",name:"view_paper",component:i("dashboard/review_paper")},{path:"events/list",name:"events_list",component:i("events/events_list")},{path:"events/view/:id",name:"events_details",component:i("events/events_details")}]},{path:"/login",name:"login",component:i("account/index")},{path:"register"}]});a["a"]=v}});
//# sourceMappingURL=app.39698fdc.js.map