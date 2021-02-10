(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{142:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),o=(r(0),r(210)),c={title:"react-router"},i={unversionedId:"web/react/react-router",id:"web/react/react-router",isDocsHomePage:!1,title:"react-router",description:"Declarative Composabilty \u58f0\u660e\u5f0f\u53ef\u7ec4\u5408\u578b",source:"@site/docs/web/react/react-router.md",slug:"/web/react/react-router",permalink:"/docs/web/react/react-router",version:"current",sidebar:"web",previous:{title:"Patterns",permalink:"/docs/web/react/patterns"},next:{title:"Redux-Observable",permalink:"/docs/web/react/redux-observable"}},p=[],u={toc:p};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Declarative Composabilty \u58f0\u660e\u5f0f\u53ef\u7ec4\u5408\u578b",Object(o.b)("br",{parentName:"p"}),"\n","Router -> \u5bb9\u5668\uff0c\u4fdd\u6301 location \u540c\u6b65",Object(o.b)("br",{parentName:"p"}),"\n","\u53bb\u6389\u751f\u547d\u5468\u671f",Object(o.b)("br",{parentName:"p"}),"\n","Router -> componentWillMount\uff0c\u6ce8\u518c\u76d1\u542c url\uff0c\u56de\u8c03\u4e2d setState"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-html"},"<link /> -> <a></a>\n")),Object(o.b)("p",null,"\u62e6\u622a\u9ed8\u8ba4\u884c\u4e3a\uff0c\u6267\u884c\uff1a",Object(o.b)("inlineCode",{parentName:"p"},"history.pushState()"),Object(o.b)("br",{parentName:"p"}),"\n","history/createBrowserHistory\uff0cupdateLocation",Object(o.b)("br",{parentName:"p"}),"\n","\u524d\u8fdb\u3001\u540e\u9000\uff1a\u76d1\u542c popState",Object(o.b)("br",{parentName:"p"}),"\n","\u5f00\u53d1\u65f6\uff0cServer \u6bb5\u8def\u7531\u90fd\u9700\u8981\u6620\u5c04\u5230\u5165\u53e3\uff0c\u4ee5\u907f\u514d\u5237\u65b0\u95ee\u9898\u3002"))}l.isMDXComponent=!0},210:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},b=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),b=l(r),f=n,m=b["".concat(c,".").concat(f)]||b[f]||s[f]||o;return r?a.a.createElement(m,i(i({ref:t},u),{},{components:r})):a.a.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var u=2;u<o;u++)c[u]=r[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);