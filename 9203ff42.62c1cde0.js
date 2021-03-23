(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{136:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(2),o=n(6),c=(n(0),n(197)),a={title:"\u89e3\u6784\u8d4b\u503c"},i={unversionedId:"web/js/destruct",id:"web/js/destruct",isDocsHomePage:!1,title:"\u89e3\u6784\u8d4b\u503c",description:"\u89e3\u6784\u8d4b\u503c(destructuring assignment)\u5e38\u88ab\u51fd\u6570\u7528\u6765\u89e3\u6790\u4f20\u5165\u7684\u53c2\u6570\uff0cReact \u4e2d\u7ecf\u5e38\u5e94\u7528\u3002",source:"@site/docs/web/js/destruct.md",slug:"/web/js/destruct",permalink:"/docs/web/js/destruct",version:"current",sidebar:"web",previous:{title:"Object",permalink:"/docs/web/js/object"},next:{title:"event-loop",permalink:"/docs/web/js/event-loop"}},u=[],s={rightToc:u};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u89e3\u6784\u8d4b\u503c(destructuring assignment)\u5e38\u88ab\u51fd\u6570\u7528\u6765\u89e3\u6790\u4f20\u5165\u7684\u53c2\u6570\uff0cReact \u4e2d\u7ecf\u5e38\u5e94\u7528\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"const person = {\n    name: 'Theo',\n    age: 24,\n};\nfunction introduce({ name, age }) {\n    console.log(`I'm ${name}, and I'm ${age} years old!`);\n}\nintroduce(person);\n// I'm Theo, and I'm 24 years old!\n")))}p.isMDXComponent=!0},197:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),l=p(n),d=r,b=l["".concat(a,".").concat(d)]||l[d]||f[d]||c;return n?o.a.createElement(b,i(i({ref:t},s),{},{components:n})):o.a.createElement(b,i({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var s=2;s<c;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);