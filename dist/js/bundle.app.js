!function(e){function t(t){for(var r,a,c=t[0],i=t[1],l=t[2],p=0,d=[];p<c.length;p++)a=c[p],o[a]&&d.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(f&&f(t);d.length;)d.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,c=1;c<n.length;c++){var i=n[c];0!==o[i]&&(r=!1)}r&&(u.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={1:0},u=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=o[e]=[t,r]});t.push(n[2]=r);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,a.nc&&c.setAttribute("nonce",a.nc),c.src=function(e){return a.p+"js/bundle."+({}[e]||e)+".js"}(e);var i=new Error;u=function(t){c.onerror=c.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+r+": "+u+")",i.name="ChunkLoadError",i.type=r,i.request=u,n[1](i)}o[e]=void 0}};var l=setTimeout(function(){u({type:"timeout",target:c})},12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(t)},a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a.oe=function(e){throw console.error(e),e};var c=window.webpackJsonp=window.webpackJsonp||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var f=i;u.push([39,0,3]),n()}({16:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"a",function(){return o}),n.d(t,"c",function(){return u}),n.d(t,"e",function(){return a}),n.d(t,"d",function(){return c}),n.d(t,"f",function(){return i});var r="counter/INCREMENT",o="counter/DECREMENT",u="counter/RESET";function a(){return{type:r}}function c(){return{type:o}}function i(){return{type:u}}},24:function(e,t,n){"use strict";n.d(t,"a",function(){return u}),n.d(t,"b",function(){return a});var r=n(37),o=n.n(r),u="userInfo/GET_USER_INFO";function a(){return function(e){o.a.post("/api/user").then(function(t){var n=JSON.parse(t.request.responseText);e({type:u,payload:n})})}}},39:function(e,t,n){e.exports=n(67)},67:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),u=n(13),a=n.n(u),c=n(8),i=n(11),l=n(12),f=n.n(l),p=function(){return o.a.createElement("div",null,"Loading...")},d=f()({loader:function(){return n.e(6).then(n.bind(null,81))},loading:p,timeout:1e4}),s=f()({loader:function(){return n.e(4).then(n.bind(null,82))},loading:p,timeout:1e4}),m=f()({loader:function(){return n.e(5).then(n.bind(null,83))},loading:p,timeout:1e4}),b=f()({loader:function(){return n.e(8).then(n.bind(null,84))},loading:p,timeout:1e4}),v=f()({loader:function(){return n.e(7).then(n.bind(null,85))},loading:p,timeout:1e4}),h=function(){return o.a.createElement(i.g,null,o.a.createElement(i.d,{exact:!0,path:"/",component:d}),o.a.createElement(i.d,{path:"/page",component:s}),o.a.createElement(i.d,{path:"/counter",component:m}),o.a.createElement(i.d,{path:"/userinfo",component:v}),o.a.createElement(i.d,{component:b}))},y=n(17),g=n(10),E=n(35),O=n(16),j={count:0};var w=n(36),P=n.n(w),S=n(24);function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var T={userInfo:{}};var x=Object(g.createStore)(Object(g.combineReducers)({counter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j;switch((arguments.length>1?arguments[1]:void 0).type){case O.b:return{count:e.count+1};case O.a:return{count:e.count-1};case O.c:return{count:0};default:return e}},userInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S.a:return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(n,!0).forEach(function(t){P()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},e,{userInfo:t.payload});default:return e}}}),Object(g.applyMiddleware)(E.a)),I=n(38);n.n(I).a.mock("/api/user",{name:"@cname",intro:"@word(20)"}),a.a.render(o.a.createElement(y.Provider,{store:x},o.a.createElement(c.BrowserRouter,null,o.a.createElement(function(){return o.a.createElement("div",null,o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(c.Link,{to:"/"},"首页")),o.a.createElement("li",null,o.a.createElement(c.Link,{to:"/page"},"Page")),o.a.createElement("li",null,o.a.createElement(c.Link,{to:"/counter"},"Counter")),o.a.createElement("li",null,o.a.createElement(c.Link,{to:"/userinfo"},"UserInfo"))))},null),h())),document.getElementById("app"))}});