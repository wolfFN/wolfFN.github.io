(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{133:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return l}));var n=r(3),o=r(7),a=(r(0),r(210)),c={title:"\u5199\u7ed9Javascript\u7a0b\u5e8f\u5458\u7684Jupyter Notebook\u4f7f\u7528\u6307\u5317",Tags:["jupyter-notebook","javascript"]},p={permalink:"/blog/2018/06/14/\u5199\u7ed9Javascript\u7a0b\u5e8f\u5458\u7684Jupyter-Notebook\u4f7f\u7528\u6307\u5317",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/blog/blog/2018-06-14-\u5199\u7ed9Javascript\u7a0b\u5e8f\u5458\u7684Jupyter-Notebook\u4f7f\u7528\u6307\u5317.md",source:"@site/blog/2018-06-14-\u5199\u7ed9Javascript\u7a0b\u5e8f\u5458\u7684Jupyter-Notebook\u4f7f\u7528\u6307\u5317.md",description:"Jupyter Notebook\u662f\u4e00\u5757\u6240\u89c1\u5373\u6240\u5f97\u7684\u753b\u5e03\uff0c\u901a\u8fc7\u5728\u6d4f\u89c8\u5668\u4e0a\u7f16\u8f91\u4ee3\u7801\uff0c\u8ba9\u5f00\u53d1\u4eba\u5458\u5b9e\u73b0\u5c55\u793a\u4e0e\u5feb\u901f\u8fed\u4ee3\u7684\u5229\u5668\u3002\u9879\u76ee\u6700\u521d\u7ed9\u4e88python\uff0c\u901a\u8fc7\u5b89\u88c5\u63d2\u4ef6\uff0c\u5bf9Javascript\u4e5f\u6709\u826f\u597d\u7684\u652f\u6301\u3002",date:"2018-06-14T00:00:00.000Z",tags:[],title:"\u5199\u7ed9Javascript\u7a0b\u5e8f\u5458\u7684Jupyter Notebook\u4f7f\u7528\u6307\u5317",readingTime:.635,truncated:!0,prevItem:{title:"\u8bb0\u4e00\u6b21\u5bf9Koa.js middleware\u7684\u6e90\u7801\u8d21\u732e",permalink:"/blog/2018/07/06/\u8bb0\u4e00\u6b21\u5bf9Koa.js\u4e2d\u95f4\u4ef6\u7684\u6e90\u7801\u8d21\u732e"},nextItem:{title:"Chrome Dev Tools---[\u6027\u80fd\u7bc7]",permalink:"/blog/2018/04/01/Chrome-Dev-Tools-\u6027\u80fd\u7bc7"}},i=[],u={toc:i};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"}," ",Object(a.b)("a",{parentName:"p",href:"http://jupyter.org/"},"Jupyter Notebook"),"\u662f\u4e00\u5757\u6240\u89c1\u5373\u6240\u5f97\u7684\u753b\u5e03\uff0c\u901a\u8fc7\u5728\u6d4f\u89c8\u5668\u4e0a\u7f16\u8f91\u4ee3\u7801\uff0c\u8ba9\u5f00\u53d1\u4eba\u5458\u5b9e\u73b0\u5c55\u793a\u4e0e\u5feb\u901f\u8fed\u4ee3\u7684\u5229\u5668\u3002\u9879\u76ee\u6700\u521d\u7ed9\u4e88python\uff0c\u901a\u8fc7\u5b89\u88c5\u63d2\u4ef6\uff0c\u5bf9Javascript\u4e5f\u6709\u826f\u597d\u7684\u652f\u6301\u3002")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"}," \u672c\u6587\u4e3b\u8981\u9488\u5bf9\u524d\u7aef/Javascript\u5de5\u7a0b\u5e08\u5728\u5b89\u88c5\u3001\u914d\u7f6e\u7684\u8fc7\u7a0b\u8fdb\u884c\u8bb0\u5f55\u3002\u5e0c\u671bnotebook\u80fd\u7ed9\u6211\u4eec\u7684\u5f00\u53d1\u3001\u7814\u7a76\u5de5\u4f5c\u5e26\u6765\u4fbf\u5229\u3002")))}l.isMDXComponent=!0},210:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},b=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),b=l(r),f=n,m=b["".concat(c,".").concat(f)]||b[f]||s[f]||a;return r?o.a.createElement(m,p(p({ref:t},u),{},{components:r})):o.a.createElement(m,p({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=f;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,c[1]=p;for(var u=2;u<a;u++)c[u]=r[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);