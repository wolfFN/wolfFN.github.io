(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{176:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(6),o=(r(0),r(196)),c={title:"Node"},i={unversionedId:"web/library/node",id:"web/library/node",isDocsHomePage:!1,title:"Node",description:"TODO",source:"@site/docs/web/library/node.md",slug:"/web/library/node",permalink:"/docs/web/library/node",version:"current",sidebar:"web",previous:{title:"Deep Selector",permalink:"/docs/web/vue/deep-selector"},next:{title:"Hapi",permalink:"/docs/web/library/hapi"}},s=[{value:"TODO",id:"todo",children:[]}],l={rightToc:s};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"todo"},"TODO"),Object(o.b)("p",null,"log\u6a21\u5757\uff1a",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.npmjs.com/package/winston"}),"https://www.npmjs.com/package/winston")),Object(o.b)("h4",{id:"\u591a\u7ebf\u7a0b"},"\u591a\u7ebf\u7a0b"),Object(o.b)("p",null,"v10.5.0 \u5f15\u5165\u591a\u7ebf\u7a0b\u652f\u6301\u3002",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://segmentfault.com/a/1190000018660861"}),"https://segmentfault.com/a/1190000018660861")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const worker = require('worker_threads');\n")),Object(o.b)("p",null,"People may argue that modules like cluster or child_process enabled the use of threads a long time ago. Well, yes and no.",Object(o.b)("br",{parentName:"p"}),"\n","The cluster module can create multiple node instances with one master process routing incoming requests between them. Clustering an application allows us to effectively multiply the server\u2019s throughput; however, we can\u2019t spawn a separate thread with the cluster module.",Object(o.b)("br",{parentName:"p"}),"\n","People tend to use tools like PM2 to cluster their applications as opposed to doing it manually inside their own code, but if you\u2019re interested, you can read my post on how to use the cluster module.The child_process module can spawn any executable regardless of whether it\u2019s JavaScript. It is pretty similar, but it lacks several important features that worker_threads has.",Object(o.b)("br",{parentName:"p"}),"\n","Specifically, thread workers are more lightweight and share the same process ID as their parent threads. They can also share memory with their parent threads, which allows them to avoid serializing big payloads of data and, as a result, send the data back and forth much more efficiently."),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://medium.freecodecamp.org/how-to-add-socket-io-to-multi-threaded-node-js-df404b424276"}),"https://medium.freecodecamp.org/how-to-add-socket-io-to-multi-threaded-node-js-df404b424276")),Object(o.b)("h4",{id:"basic"},"Basic"),Object(o.b)("p",null,"\u5e95\u5c42libuv\uff0c\u591a\u7ebf\u7a0b  "),Object(o.b)("p",null,"stub Unit Test"),Object(o.b)("h4",{id:"\u5168\u5c40\u9519\u8bef\u5904\u7406\uff1a"},"\u5168\u5c40\u9519\u8bef\u5904\u7406\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"process.on('unhandledRejection', handler);\nprocess.on('uncaughtException', handler);\n")))}p.isMDXComponent=!0},196:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,m=u["".concat(c,".").concat(d)]||u[d]||b[d]||o;return r?a.a.createElement(m,i(i({ref:t},l),{},{components:r})):a.a.createElement(m,i({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);