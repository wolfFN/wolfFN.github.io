(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{112:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),l=(n(0),n(210)),c={title:"\u6280\u5de7\uff0c\u5feb\u6377\u952e"},i={unversionedId:"tools/mac/skills",id:"tools/mac/skills",isDocsHomePage:!1,title:"\u6280\u5de7\uff0c\u5feb\u6377\u952e",description:"\u5feb\u6377\u952e",source:"@site/docs/tools/mac/skills.md",slug:"/tools/mac/skills",permalink:"/docs/tools/mac/skills",version:"current",sidebar:"tools",previous:{title:"\u5e94\u7528\u8f6f\u4ef6",permalink:"/docs/tools/mac/software"},next:{title:"Alfred",permalink:"/docs/tools/mac/alfred"}},o=[{value:"\u5feb\u6377\u952e",id:"\u5feb\u6377\u952e",children:[]},{value:"\u952e\u76d8\u3001\u89e6\u6478\u677f\u5931\u7075",id:"\u952e\u76d8\u3001\u89e6\u6478\u677f\u5931\u7075",children:[]},{value:"CheckSum",id:"checksum",children:[]},{value:"killall Dock",id:"killall-dock",children:[]},{value:"Iterm",id:"iterm",children:[]},{value:"Paste \u4f7f\u7528\u6280\u5de7",id:"paste-\u4f7f\u7528\u6280\u5de7",children:[]}],b={toc:o};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h3",{id:"\u5feb\u6377\u952e"},"\u5feb\u6377\u952e"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Control + F2")," \u9009\u62e9\u5de6\u4e0a\u89d2\u83dc\u5355\u680f",Object(l.b)("br",{parentName:"p"}),"\n",Object(l.b)("inlineCode",{parentName:"p"},"Control + F3")," \u9009\u62e9 dock \u680f",Object(l.b)("br",{parentName:"p"}),"\n",Object(l.b)("inlineCode",{parentName:"p"},"Cmd + Shift + G")," \xa0 \u524d\u5f80\u8def\u5f84",Object(l.b)("br",{parentName:"p"}),"\n",Object(l.b)("inlineCode",{parentName:"p"},"Cmd + del")," \xa0 \xa0 \u5220\u9664\u6587\u4ef6",Object(l.b)("br",{parentName:"p"}),"\n",Object(l.b)("inlineCode",{parentName:"p"},"Cmd + alt + Esc")," \xa0 \u4efb\u52a1\u7ba1\u7406\u5668",Object(l.b)("br",{parentName:"p"}),"\n",Object(l.b)("inlineCode",{parentName:"p"},"Cmd + alt + V")," \xa0 \xa0 \u526a\u5207\u540e\u7c98\u8d34\uff08notes \u4e2d\u683c\u5f0f\u7c98\u8d34\uff0c\u9700\u914d\u5408 ",Object(l.b)("inlineCode",{parentName:"p"},"Cmd + alt + c"),"\uff09",Object(l.b)("br",{parentName:"p"}),"\n",Object(l.b)("inlineCode",{parentName:"p"},"Cmd + alt + D")," \xa0 \xa0 \u9690\u85cf/\u663e\u793a Docker",Object(l.b)("br",{parentName:"p"}),"\n",Object(l.b)("inlineCode",{parentName:"p"},"Cmd + alt + shift + 4")," \xa0 \xa0 \u622a\u5c4f  "),Object(l.b)("h3",{id:"\u952e\u76d8\u3001\u89e6\u6478\u677f\u5931\u7075"},"\u952e\u76d8\u3001\u89e6\u6478\u677f\u5931\u7075"),Object(l.b)("p",null,"\u91cd\u542f\u540e\u6309 Cmd + R\n\u7136\u540e\u4f7f\u7528\u5185\u7f6e\u952e\u76d8\uff0c\u89e6\u6478\u677f\u3002\u5982\u679c\u6b64\u65f6\u8fd8\u65e0\u6548\uff0c\u90a3\u4e48\u786c\u4ef6\u95ee\u9898\u3002"),Object(l.b)("h3",{id:"checksum"},"CheckSum"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"// \u5173\u95ed\ndefaults write com.apple.frameworks.diskimages skip-verify -bool YES\n// \u5f00\u542f\ndefaults write com.apple.frameworks.diskimages skip-verify -bool NO\n")),Object(l.b)("h3",{id:"killall-dock"},"killall Dock"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"sudo lsof -n -P | grep LISTEN/8080\nps aux\n")),Object(l.b)("h3",{id:"iterm"},"Iterm"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u2318 + \u6570\u5b57: \u5207\u6362\u6807\u7b7e\u9875\uff0c\u2318 + \u65b9\u5411\u952e \u6309\u65b9\u5411\u5207\u6362\u6807\u7b7e\u9875"),Object(l.b)("li",{parentName:"ul"},"\u2318 + enter: \u5207\u6362\u5168\u5c4f"),Object(l.b)("li",{parentName:"ul"},"\u2318 + d: \u5782\u76f4\u5206\u5c4f"),Object(l.b)("li",{parentName:"ul"},"\u2318 + shift + d: \u6c34\u5e73\u5206\u5c4f\u3002"),Object(l.b)("li",{parentName:"ul"},"\u2318 + ] \u548c \u2318 + [ \u5728\u6700\u8fd1\u4f7f\u7528\u7684\u5206\u5c4f\u76f4\u63a5\u5207\u6362\u3002"),Object(l.b)("li",{parentName:"ul"},"\u2318 + opt + \u65b9\u5411\u952e \xa0 \u5207\u6362\u5230\u6307\u5b9a\u4f4d\u7f6e\u7684\u5206\u5c4f\u3002"),Object(l.b)("li",{parentName:"ul"},"\u2318 + t :\u65b0\u7684\u6807\u7b7e\u9875"),Object(l.b)("li",{parentName:"ul"},"\u2318 + r:\u6e05\u5c4f")),Object(l.b)("h3",{id:"paste-\u4f7f\u7528\u6280\u5de7"},"Paste \u4f7f\u7528\u6280\u5de7"),Object(l.b)("h5",{id:"\u641c\u7d22"},"\u641c\u7d22"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Cmd + f"),"\xa0\xa0 \u6216\u8005\u76f4\u63a5\u8f93\u5165\n\u8f93\u5165 application name\uff0ccontent type\uff0c\u6216\u7ed3\u5408\u4e8c\u8005"),Object(l.b)("h5",{id:"paste-as-plain-text"},'"Paste as Plain Text"'),Object(l.b)("p",null,"\u9009\u4e2d\u5f85\u7c98\u8d34\u9879\u76ee\u540e\uff0cShift + Enter"),Object(l.b)("h5",{id:"\u6c38\u4e45\u5b58\u653e"},"\u6c38\u4e45\u5b58\u653e"),Object(l.b)("p",null,"\u62d6\u52a8\u81f3\u7279\u5b9a Pinboard\n",Object(l.b)("inlineCode",{parentName:"p"},"Cmd + [,]"),"\xa0 Pinboard \u4e4b\u95f4\u79fb\u52a8"),Object(l.b)("h5",{id:"direct-paste"},"Direct Paste"),Object(l.b)("p",null,"\u8bbe\u7f6e\u4e2d\u5f00\u542f\n\u53cc\u51fb\nCmd + 1-9"))}p.isMDXComponent=!0},210:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),s=p(n),m=r,d=s["".concat(c,".").concat(m)]||s[m]||u[m]||l;return n?a.a.createElement(d,i(i({ref:t},b),{},{components:n})):a.a.createElement(d,i({ref:t},b))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,c=new Array(l);c[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var b=2;b<l;b++)c[b]=n[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);