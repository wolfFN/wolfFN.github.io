(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{105:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(2),o=r(6),a=(r(0),r(197)),c={title:"\u8bb0\u4e00\u6b21\u5bf9Koa.js middleware\u7684\u6e90\u7801\u8d21\u732e",tags:["javascript","node","koa"]},i={permalink:"/blog/2018/07/06/\u8bb0\u4e00\u6b21\u5bf9Koa.js\u4e2d\u95f4\u4ef6\u7684\u6e90\u7801\u8d21\u732e",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/blog/blog/2018-07-06-\u8bb0\u4e00\u6b21\u5bf9Koa.js\u4e2d\u95f4\u4ef6\u7684\u6e90\u7801\u8d21\u732e.md",source:"@site/blog/2018-07-06-\u8bb0\u4e00\u6b21\u5bf9Koa.js\u4e2d\u95f4\u4ef6\u7684\u6e90\u7801\u8d21\u732e.md",description:"\u672c\u6587\u4e3b\u8981\u8bb0\u5f55\u7b14\u8005\u5728\u4f7f\u7528\u5f00\u6e90Node.js web\u6846\u67b6Koa.js\u8fc7\u7a0b\u4e2d\u9047\u5230\u7684\u4e00\u4e2a\u5c0fbug\uff0c\u4e3a\u4fee\u590d\u6b64Bug\u67e5\u627eKoa\u53ca\u5176middleware\u6e90\u7801\u7684\u8fc7\u7a0b\uff0c\u4ee5\u53ca\u6700\u7ec8\u53d1\u8d77Pull Request\u5e76\u88ab\u91c7\u7eb3\u7684\u8fc7\u7a0b\u3002",date:"2018-07-06T00:00:00.000Z",tags:[{label:"javascript",permalink:"/blog/tags/javascript"},{label:"node",permalink:"/blog/tags/node"},{label:"koa",permalink:"/blog/tags/koa"}],title:"\u8bb0\u4e00\u6b21\u5bf9Koa.js middleware\u7684\u6e90\u7801\u8d21\u732e",readingTime:1.445,truncated:!0,prevItem:{title:"\u300a\u5b50\u5f39\u7b14\u8bb0\u300b\u884c\u52a8\u6307\u5357",permalink:"/blog/2019/05/20/\u300a\u5b50\u5f39\u7b14\u8bb0\u300b\u884c\u52a8\u6307\u5357"},nextItem:{title:"\u5199\u7ed9Javascript\u7a0b\u5e8f\u5458\u7684Jupyter Notebook\u4f7f\u7528\u6307\u5317",permalink:"/blog/2018/06/14/\u5199\u7ed9Javascript\u7a0b\u5e8f\u5458\u7684Jupyter-Notebook\u4f7f\u7528\u6307\u5317"}},l=[],u={rightToc:l};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\u672c\u6587\u4e3b\u8981\u8bb0\u5f55\u7b14\u8005\u5728\u4f7f\u7528\u5f00\u6e90Node.js web\u6846\u67b6Koa.js\u8fc7\u7a0b\u4e2d\u9047\u5230\u7684\u4e00\u4e2a\u5c0fbug\uff0c\u4e3a\u4fee\u590d\u6b64Bug\u67e5\u627eKoa\u53ca\u5176middleware\u6e90\u7801\u7684\u8fc7\u7a0b\uff0c\u4ee5\u53ca\u6700\u7ec8\u53d1\u8d77Pull Request\u5e76\u88ab\u91c7\u7eb3\u7684\u8fc7\u7a0b\u3002")))}p.isMDXComponent=!0},197:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(r),f=n,m=s["".concat(c,".").concat(f)]||s[f]||b[f]||a;return r?o.a.createElement(m,i(i({ref:t},u),{},{components:r})):o.a.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var u=2;u<a;u++)c[u]=r[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);