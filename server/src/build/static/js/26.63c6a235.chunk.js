/*! For license information please see 26.63c6a235.chunk.js.LICENSE.txt */
(this.webpackJsonprocket=this.webpackJsonprocket||[]).push([[26,28],{131:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r(8);function o(){o=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},a=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(I){u=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var o=e&&e.prototype instanceof m?e:m,c=Object.create(o.prototype),a=new L(n||[]);return i(c,"_invoke",{value:O(t,r,a)}),c}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(I){return{type:"throw",arg:I}}}t.wrap=h;var f={};function m(){}function j(){}function x(){}var b={};u(b,a,(function(){return this}));var v=Object.getPrototypeOf,p=v&&v(v(A([])));p&&p!==e&&r.call(p,a)&&(b=p);var g=x.prototype=m.prototype=Object.create(b);function y(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){function o(i,c,a,s){var l=d(t[i],t,c);if("throw"!==l.type){var u=l.arg,h=u.value;return h&&"object"==Object(n.a)(h)&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){o("next",t,a,s)}),(function(t){o("throw",t,a,s)})):e.resolve(h).then((function(t){u.value=t,a(u)}),(function(t){return o("throw",t,a,s)}))}s(l.arg)}var c;i(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return c=c?c.then(n,n):n()}})}function O(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return P()}for(r.method=o,r.arg=i;;){var c=r.delegate;if(c){var a=N(c,r);if(a){if(a===f)continue;return a}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=d(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===f)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}function N(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,N(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=d(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function A(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:P}}function P(){return{value:void 0,done:!0}}return j.prototype=x,i(g,"constructor",{value:x,configurable:!0}),i(x,"constructor",{value:j,configurable:!0}),j.displayName=u(x,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===j||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,u(t,l,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},y(w.prototype),u(w.prototype,s,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var c=new w(h(e,r,n,o),i);return t.isGeneratorFunction(r)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},y(g),u(g,l,"Generator"),u(g,a,(function(){return this})),u(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=A,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return c.type="throw",c.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var a=r.call(i,"catchLoc"),s=r.call(i,"finallyLoc");if(a&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=t,c.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:A(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}},132:function(t,e,r){"use strict";function n(t,e,r,n,o,i,c){try{var a=t[i](c),s=a.value}catch(l){return void r(l)}a.done?e(s):Promise.resolve(s).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var c=t.apply(e,r);function a(t){n(c,o,i,a,s,"next",t)}function s(t){n(c,o,i,a,s,"throw",t)}a(void 0)}))}}r.d(e,"a",(function(){return o}))},136:function(t,e,r){"use strict";r.d(e,"a",(function(){return j}));var n=r(0),o=r.n(n),i=r(22),c=function(){return c=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},c.apply(this,arguments)};var a="",s=null,l=null,u=null;function h(){a="",null!==s&&s.disconnect(),null!==l&&(window.clearTimeout(l),l=null)}function d(t){return["BUTTON","INPUT","SELECT","TEXTAREA"].includes(t.tagName)&&!t.hasAttribute("disabled")||["A","AREA"].includes(t.tagName)&&t.hasAttribute("href")}function f(){var t=null;if("#"===a)t=document.body;else{var e=a.replace("#","");null===(t=document.getElementById(e))&&"#top"===a&&(t=document.body)}if(null!==t){u(t);var r=t.getAttribute("tabindex");return null!==r||d(t)||t.setAttribute("tabindex",-1),t.focus({preventScroll:!0}),null!==r||d(t)||(t.blur(),t.removeAttribute("tabindex")),h(),!0}return!1}function m(t){return o.a.forwardRef((function(e,r){var n="";"string"===typeof e.to&&e.to.includes("#")?n="#"+e.to.split("#").slice(1).join("#"):"object"===typeof e.to&&"string"===typeof e.to.hash&&(n=e.to.hash);var d={};t===i.c&&(d.isActive=function(t,e){return t&&t.isExact&&e.hash===n});var m=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]])}return r}(e,["scroll","smooth","timeout","elementId"]);return o.a.createElement(t,c({},d,m,{onClick:function(t){var r;h(),a=e.elementId?"#"+e.elementId:n,e.onClick&&e.onClick(t),""===a||t.defaultPrevented||0!==t.button||e.target&&"_self"!==e.target||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(u=e.scroll||function(t){return e.smooth?t.scrollIntoView({behavior:"smooth"}):t.scrollIntoView()},r=e.timeout,window.setTimeout((function(){!1===f()&&(null===s&&(s=new MutationObserver(f)),s.observe(document,{attributes:!0,childList:!0,subtree:!0}),l=window.setTimeout((function(){h()}),r||1e4))}),0))},ref:r}),e.children)}))}var j=m(i.b);m(i.c)},139:function(t,e,r){"use strict";r.d(e,"a",(function(){return m})),r.d(e,"b",(function(){return j}));var n=r(4),o=r(0),i=r.n(o),c=r(143),a=r(22),s=r(136),l=r(130),u=r(18),h=r(34),d=r(1);function f(){var t=Object(o.useContext)(u.a).user;return Object(d.jsxs)("div",{className:"flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4",children:[Object(d.jsxs)("div",{className:"flex items-center gap-8 grid grid-cols-1 lg:grid-cols-auto lg:grid-rows-1 lg:grid-flow-col gap-6 text-sm font-bold text-gray-800 md:mr-4 mr-0",children:[Object(d.jsx)(s.a,{className:"hover:text-gray-600",smooth:!0,to:"/landing/#Ablauf",children:"Ablauf"}),Object(d.jsx)(s.a,{className:"hover:text-gray-600",smooth:!0,to:"/landing/#Rezensionen",children:"Rezensionen"}),Object(d.jsx)(s.a,{className:"hover:text-gray-600",smooth:!0,to:"/landing/#Preise",children:"Preise"}),Object(d.jsx)(s.a,{className:"hover:text-gray-600",smooth:!0,to:"/landing/#FAQ",children:"FAQ"})]}),!t&&Object(d.jsx)(a.b,{to:"/auth/login",children:Object(d.jsx)(h.Button,{layout:"outline",className:"outline",children:"Login"})}),!t&&Object(d.jsx)(a.b,{to:"/auth/create-account",children:Object(d.jsx)(h.Button,{children:"Registrieren"})}),t&&Object(d.jsx)(a.b,{to:"/app",children:Object(d.jsx)(h.Button,{children:"Dashboard"})})]})}function m(){return Object(d.jsx)("aside",{className:"hidden w-full lg:block",children:Object(d.jsx)("div",{className:"flex justify-center",children:Object(d.jsx)("div",{className:"w-3/4",children:Object(d.jsx)("div",{className:"py-4 text-gray-500",children:Object(d.jsxs)("div",{className:"flex-1 flex items-center justify-between",children:[Object(d.jsx)(a.b,{to:"/",className:"text-xl font-bold text-gray-800",children:Object(d.jsx)("img",{src:c.a,className:"w-30 h-14",alt:"My logo"})}),Object(d.jsx)(f,{})]})})})})})}function j(){var t=i.a.useState(!1),e=Object(n.a)(t,2),r=e[0],o=e[1];return Object(d.jsx)("aside",{className:"flex justify-center",children:Object(d.jsx)("div",{className:"w-full md:w-11/12 lg:hidden",children:Object(d.jsx)("div",{className:"px-4 py-4 text-gray-500",children:Object(d.jsxs)("div",{className:"flex flex-col space-y-4",children:[Object(d.jsxs)("div",{className:"flex justify-between",children:[Object(d.jsx)(a.b,{to:"/",className:"text-xl font-bold text-gray-800",children:Object(d.jsx)("img",{src:c.a,className:"w-30 h-14",alt:"My logo"})}),Object(d.jsx)("button",{className:"p-1 rounded-md focus:outline-none focus:shadow-outline-purple",onClick:function(){o(!r)},"aria-label":"Menu",children:Object(d.jsx)(l.MenuIcon,{className:"w-6 h-6","aria-hidden":"true"})})]}),r&&Object(d.jsx)(f,{})]})})})})}},147:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));r(0);var n=r(136),o=r.p+"static/media/paymentmethods.d0e07aa6.svg",i=r(1);function c(t){var e=t.children;return Object(i.jsx)("section",{className:"flex justify-center py-8 md:py-12",children:Object(i.jsx)("div",{className:"w-full md:w-11/12 lg:w-3/4",children:Object(i.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-12",children:e})})})}function a(){return Object(i.jsxs)("footer",{children:[Object(i.jsxs)(c,{children:[Object(i.jsx)("div",{className:"flex flex-row px-4 w-2/3 justify-between",children:Object(i.jsxs)("div",{children:[Object(i.jsx)("p",{className:"text-lg mb-4 font-semibold text-gray-700",children:"Keine Infos und Aktionen verpassen:"}),Object(i.jsxs)("div",{className:"flex",children:[Object(i.jsx)("a",{target:"_blank",href:"https://www.facebook.com/123provisionsfrei",children:Object(i.jsxs)("svg",{role:"img",className:"mr-3 w-6 h-6",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[Object(i.jsx)("title",{children:"Facebook"}),Object(i.jsx)("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})]})}),Object(i.jsx)("a",{target:"_blank",href:"https://www.youtube.com/channel/UC1Ow7tliboxaB7oWsedDkkg",children:Object(i.jsxs)("svg",{role:"img",className:"mr-3 w-6 h-6",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[Object(i.jsx)("title",{children:"YouTube"}),Object(i.jsx)("path",{d:"M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"})]})}),Object(i.jsx)("a",{target:"_blank",href:"https://www.instagram.com/123provisionsfrei/",children:Object(i.jsxs)("svg",{role:"img",className:"mr-3 w-6 h-6",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[Object(i.jsx)("title",{children:"Instagram"}),Object(i.jsx)("path",{d:"M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"})]})})]})]})}),Object(i.jsxs)("div",{className:"grid grid-cols-2 w-full gap-12 md:gap-40 px-4",children:[Object(i.jsxs)("div",{className:"grid grid-cols-1 text-left text-sm text-gray-600 content-start",children:[Object(i.jsx)("p",{className:"mb-2 font-semibold text-gray-700",children:"Wichtige Links"}),Object(i.jsx)(n.a,{className:"hover:text-gray-800",smooth:!0,to:"/landing/#Ablauf",children:"Ablauf"}),Object(i.jsx)(n.a,{className:"hover:text-gray-800",smooth:!0,to:"/landing/#Rezensionen",children:"Rezensionen"}),Object(i.jsx)(n.a,{className:"hover:text-gray-800",smooth:!0,to:"/landing/#Funktionen",children:"Funktionen"}),Object(i.jsx)(n.a,{className:"hover:text-gray-800",smooth:!0,to:"/landing/#Preise",children:"Preise"}),Object(i.jsx)(n.a,{className:"hover:text-gray-800",smooth:!0,to:"/landing/#FAQ",children:"FAQ"}),Object(i.jsx)(n.a,{className:"hover:text-gray-800",to:"/immobilien/1",children:"Immobilien"})]}),Object(i.jsxs)("div",{className:"grid grid-cols-1 text-left text-sm text-gray-600 content-start",children:[Object(i.jsx)("p",{className:"mb-2 font-semibold text-gray-700",children:"Rechtliches"}),Object(i.jsx)(n.a,{smooth:!0,to:"/impressum/#top",children:"Impressum"}),Object(i.jsx)(n.a,{to:"/datenschutz/#top",children:"Datenschutz"}),Object(i.jsx)(n.a,{to:"/agb/#top",children:"AGB"}),Object(i.jsx)("div",{className:"hidden md:block",children:Object(i.jsx)("img",{xmlns:"http://www.w3.org/2000/svg",src:o,className:"w-2/3 h-18 md:w-10/12 md:mt-2 mt-0"})})]})]}),Object(i.jsx)("div",{className:"block md:hidden",children:Object(i.jsx)("img",{xmlns:"http://www.w3.org/2000/svg",src:o,className:"w-2/3 h-24 md:w-2/3 -my-4"})})]}),Object(i.jsxs)("div",{className:"flex",children:[Object(i.jsx)("div",{className:"flex w-2/12"}),Object(i.jsxs)("div",{className:"md:flex block items-end justify-center gap-20 py-8",children:[Object(i.jsxs)("div",{className:"flex text-xs text-gray-700",children:["Wir geh\xf6ren nicht zu ImmoScout24, Immowelt oder Ebay Kleinanzeigen. Wir ver\xf6ffentlichen die Immobilienanzeigen lediglich auf diesen Plattformen."," "]}),Object(i.jsx)("div",{className:"flex-none text-xs md:pt-0 pt-4",children:Object(i.jsx)("a",{href:"https://automationforever.com/",children:"Entwickelt von Mustapha"})})]}),Object(i.jsx)("div",{className:"flex w-2/12"})]})]})}},306:function(t,e,r){"use strict";r.r(e);var n=r(131),o=r(132),i=r(0),c=r(139),a=r(147),s=r(146),l=r(1),u=r(5);function h(t){t.children;return Object(i.useEffect)((function(){function t(){return(t=Object(o.a)(Object(n.a)().mark((function t(e){return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.post("/aws/unsubscribe"+window.location.search);case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(e){t.apply(this,arguments)}()}),[]),Object(l.jsxs)("section",{className:"flex justify-center py-8 md:py-16 bg-gray-50",children:[Object(l.jsx)(s.a,{children:Object(l.jsx)("title",{children:"123provisionsfrei | Abmelden"})}),Object(l.jsxs)("div",{className:"text-left w-11/12 lg:w-3/4",children:[Object(l.jsx)("h1",{className:"text-2xl md:text-4xl font-bold text-gray-700",children:"Du hast dich erfolgreich abgemeldet."}),Object(l.jsx)("p",{className:"my-4 text-md text-gray-600",children:"Du wirst ab sofort keine weiteren E-Mails mehr von uns erhalten."})]})]})}e.default=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(c.a,{}),Object(l.jsx)(c.b,{}),Object(l.jsx)(h,{}),Object(l.jsx)(a.a,{})]})}}}]);
//# sourceMappingURL=26.63c6a235.chunk.js.map