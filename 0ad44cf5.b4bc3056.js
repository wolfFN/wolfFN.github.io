(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{210:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return N}));var a=n(0),l=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=l.a.createContext({}),p=function(e){var t=l.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=p(e.components);return l.a.createElement(o.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},j=l.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,b=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),m=p(n),j=a,N=m["".concat(b,".").concat(j)]||m[j]||O[j]||i;return n?l.a.createElement(N,r(r({ref:t},o),{},{components:n})):l.a.createElement(N,r({ref:t},o))}));function N(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,b=new Array(i);b[0]=j;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:a,b[1]=r;for(var o=2;o<i;o++)b[o]=n[o];return l.a.createElement.apply(null,b)}return l.a.createElement.apply(null,n)}j.displayName="MDXCreateElement"},79:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return r})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),l=n(7),i=(n(0),n(210)),b={title:"Chrome Dev Tools---[\u57fa\u7840\u7bc7]",tags:["chrome","tools"]},r={permalink:"/blog/2017/11/15/Chrome-Dev-Tools-\u57fa\u7840\u7bc7",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/blog/blog/2017-11-15-Chrome-Dev-Tools-\u57fa\u7840\u7bc7.md",source:"@site/blog/2017-11-15-Chrome-Dev-Tools-\u57fa\u7840\u7bc7.md",description:"Chrome Dev Tools \u662f\u6bcf\u4e00\u4f4d\u524d\u7aef\u5de5\u7a0b\u5e08\u5f00\u53d1\u8c03\u8bd5\u7684\u5fc5\u5907\u5229\u5668\uff0c\u79f0\u4e4b\u4e3aFE\u7684\u745e\u58eb\u519b\u5200\u4e5f\u6beb\u4e0d\u4e3a\u8fc7\u3002\u7136\u800c\uff0c\u6bcf\u6bcf\u5f53\u53d1\u73b0\u4e00\u4e9b\u81ea\u5df1\u4e0d\u77e5\u9053\u7684\u7528\u6cd5\u65f6\uff0c\u6211\u4eec\u7ecf\u5e38\u4f1a\u89c9\u5f97\uff0c\u81ea\u5df1\u53ea\u662f\u638c\u63e1\u4e86\u5176\u5f3a\u5927\u529f\u80fd\u7684\u4e5d\u725b\u4e00\u6bdb\u3002\u4e3a\u4e86\u80fd\u591f\u8ba9\u5979\u53d1\u6325\u51fa\u6700\u5927\u529f\u6548\uff0c\u9996\u5148\uff0c\u6211\u4eec\u5e94\u5f53\u4e86\u89e3\u5979\u66f4\u591a\u7684\u4f7f\u7528\u65b9\u6cd5\uff1b\u7136\u540e\uff0c\u5728\u5f00\u53d1\u4e2d\u5408\u9002\u7684\u573a\u666f\u4e0b\uff0c\u523b\u610f\u7ec3\u4e60\u4f7f\u7528\uff1b\u6700\u540e\uff0c\u719f\u7ec3\u638c\u63e1\u90a3\u4e9b\u4e4b\u524d\u4e0d\u4e86\u89e3\u7684\u529f\u80fd\uff0c\u5e76\u4e3a\u6211\u6240\u4e3a\u7528\uff0c\u6700\u5927\u63d0\u5347\u6548\u7387\u3002",date:"2017-11-15T00:00:00.000Z",tags:[{label:"chrome",permalink:"/blog/tags/chrome"},{label:"tools",permalink:"/blog/tags/tools"}],title:"Chrome Dev Tools---[\u57fa\u7840\u7bc7]",readingTime:2.735,truncated:!0,prevItem:{title:"CSS\u5c45\u4e2d\u7684\u5404\u79cd\u5b9e\u73b0\u65b9\u5f0f",permalink:"/blog/2017/11/15/CSS\u5c45\u4e2d\u7684\u5404\u79cd\u5b9e\u73b0\u65b9\u5f0f"},nextItem:{title:"Linux-Mac-Shell\u5e38\u7528\u547d\u4ee4",permalink:"/blog/2016/08/26/Linux-Mac-Shell\u5e38\u7528\u547d\u4ee4"}},c=[{value:"Elements",id:"elements",children:[]},{value:"Console",id:"console",children:[]},{value:"Sources",id:"sources",children:[]},{value:"Network",id:"network",children:[]}],o={toc:c};function p(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Chrome Dev Tools \u662f\u6bcf\u4e00\u4f4d\u524d\u7aef\u5de5\u7a0b\u5e08\u5f00\u53d1\u8c03\u8bd5\u7684\u5fc5\u5907\u5229\u5668\uff0c\u79f0\u4e4b\u4e3aFE\u7684\u745e\u58eb\u519b\u5200\u4e5f\u6beb\u4e0d\u4e3a\u8fc7\u3002\u7136\u800c\uff0c\u6bcf\u6bcf\u5f53\u53d1\u73b0\u4e00\u4e9b\u81ea\u5df1\u4e0d\u77e5\u9053\u7684\u7528\u6cd5\u65f6\uff0c\u6211\u4eec\u7ecf\u5e38\u4f1a\u89c9\u5f97\uff0c\u81ea\u5df1\u53ea\u662f\u638c\u63e1\u4e86\u5176\u5f3a\u5927\u529f\u80fd\u7684\u4e5d\u725b\u4e00\u6bdb\u3002\u4e3a\u4e86\u80fd\u591f\u8ba9\u5979\u53d1\u6325\u51fa\u6700\u5927\u529f\u6548\uff0c\u9996\u5148\uff0c\u6211\u4eec\u5e94\u5f53\u4e86\u89e3\u5979\u66f4\u591a\u7684\u4f7f\u7528\u65b9\u6cd5\uff1b\u7136\u540e\uff0c\u5728\u5f00\u53d1\u4e2d\u5408\u9002\u7684\u573a\u666f\u4e0b\uff0c\u523b\u610f\u7ec3\u4e60\u4f7f\u7528\uff1b\u6700\u540e\uff0c\u719f\u7ec3\u638c\u63e1\u90a3\u4e9b\u4e4b\u524d\u4e0d\u4e86\u89e3\u7684\u529f\u80fd\uff0c\u5e76\u4e3a\u6211\u6240\u4e3a\u7528\uff0c\u6700\u5927\u63d0\u5347\u6548\u7387\u3002"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u672c\u6587\u7ffb\u8bd1\u81ea",Object(i.b)("a",{parentName:"p",href:"https://developers.google.com/web/tools/chrome-devtools"},"\u8c37\u6b4c\u5b98\u65b9\u6587\u6863"),"\uff0c\u4e3b\u8981\u4ecb\u7ecd\u4e86Elements, Console, Sources, Network\u56db\u4e2aTab\u9875\u9762\u4e0b\u7684\u529f\u80fd\u3002\u656c\u8bf7\u671f\u5f85",Object(i.b)("inlineCode",{parentName:"p"},"Chrome Dev Tools \u6027\u80fd\u7bc7"))),Object(i.b)("h2",{id:"elements"},"Elements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u8fdb\u5165\uff1a"),Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"Cmd + Alt + c")," inspect\uff0c\u70b9\u51fb\u60f3\u89c2\u5bdf\u7684\u8282\u70b9"),Object(i.b)("li",{parentName:"ol"},"console\u4e2d",Object(i.b)("inlineCode",{parentName:"li"},"inspect(DOM)"),"\uff0c",Object(i.b)("inlineCode",{parentName:"li"},"DOM"),"\u4e3a\u60f3\u89c2\u5bdf\u7684\u8282\u70b9\u3002"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u904d\u5386\u8282\u70b9\uff1a"),Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"\u9f20\u6807\u70b9\u51fb"),Object(i.b)("li",{parentName:"ol"},"\u5728DOM\u8282\u70b9\u4e2d\uff0c\u4e0a\u4e0b\u7bad\u5934\u8df3\u8f6c\uff0c\u5411\u53f3\u7bad\u5934\uff0c\u5c55\u5f00\u6298\u53e0\u7684\u8282\u70b9\u3002\u5411\u5de6\u7bad\u5934\uff0c\u6298\u53e0\u6253\u5f00\u7684\u8282\u70b9\u3002"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u7f16\u8f91\u8282\u70b9\n",Object(i.b)("inlineCode",{parentName:"p"},"F2")," -> Edit as HTML. ",Object(i.b)("inlineCode",{parentName:"p"},"ctrl+enter"),"\u4fdd\u5b58\u66f4\u6539\uff0c",Object(i.b)("inlineCode",{parentName:"p"},"Esc"),"\u9000\u51fa\u66f4\u6539\uff0c\u4e0d\u4fdd\u5b58.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u7f16\u8f91 DOM \u8282\u70b9\u540d\u79f0\u6216\u5c5e\u6027"),Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"\u76f4\u63a5\u5728\u8282\u70b9\u540d\u6216\u5c5e\u6027\u4e0a\u53cc\u51fb"),Object(i.b)("li",{parentName:"ol"},"\u9009\u4e2d\u7a81\u51fa\u8282\u70b9\uff0c",Object(i.b)("inlineCode",{parentName:"li"},"Enter"),",\u7136\u540e",Object(i.b)("inlineCode",{parentName:"li"},"Tab"),"\u9009\u62e9."),Object(i.b)("li",{parentName:"ol"},"\u53f3\u952e,",Object(i.b)("inlineCode",{parentName:"li"},"Edit/Add Attribute"),"."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u70b9\u51fb\u5e76\u62d6\u52a8,\u53ef\u4ee5\u79fb\u52a8DOM\u8282\u70b9.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u53f3\u952e->",Object(i.b)("inlineCode",{parentName:"p"},"Scroll into view"),",\u6eda\u52a8\u9875\u9762\u4f7f\u8282\u70b9\u5728\u89c6\u53e3\u4e2d\u663e\u793a.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u65ad\u70b9\u8c03\u8bd5"),Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"\u53f3\u952e\u8282\u70b9->",Object(i.b)("inlineCode",{parentName:"li"},"break on"),"\uff0c\u53ef\u4ee5\u5bf9\u8be5\u8282\u70b9\u7684\u5b50\u6811\u4fee\u6539\u3001\u5c5e\u6027\u4fee\u6539\u3001\u8282\u70b9\u79fb\u9664\u4e09\u79cd\u4e8b\u4ef6\u6dfb\u52a0\u65ad\u70b9"),Object(i.b)("li",{parentName:"ol"},"\u53f3\u4fa7",Object(i.b)("inlineCode",{parentName:"li"},"DOM Breakpoints"),",\u7ba1\u7406",Object(i.b)("strong",{parentName:"li"},"DOM\u65ad\u70b9"),"."),Object(i.b)("li",{parentName:"ol"},"Event Listener",Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"Ancestors \u663e\u793a\u7956\u5148\u8282\u70b9\u7684\u4e8b\u4ef6\u4fa6\u542c\u5668\u3002"),Object(i.b)("li",{parentName:"ol"},"\u6bcf\u4e2aEvent Listener\u5305\u542b\u4e24\u4e2a\u5c5e\u6027",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"handler, ",Object(i.b)("inlineCode",{parentName:"li"},"\u53f3\u952e")," -> ",Object(i.b)("inlineCode",{parentName:"li"},"Show Function Definition")),Object(i.b)("li",{parentName:"ul"},"useCapture, addEventListener\u51fd\u6570\u4e2d",Object(i.b)("inlineCode",{parentName:"li"},"useCapture"),"\u7684\u503c(bool)."),Object(i.b)("li",{parentName:"ul"},"Framework listeners, \u6846\u67b6\u4e8b\u4ef6\u76d1\u542c\u5668. "))))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Styles"),"\uff0c\u4f4d\u4e8e\u9762\u677f\u5de6\u4fa7\uff0c\u4e3b\u8981\u662f\u6837\u5f0f\u76f8\u5173\u5185\u5bb9"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u9875\u9762\u5e95\u7aef\u7684Computed \u53ef\u4ee5\u7f16\u8f91\uff0c\u4fee\u6539\u3002"),Object(i.b)("li",{parentName:"ul"},"\u70b9\u51fb",Object(i.b)("inlineCode",{parentName:"li"},"Styles"),"\u4e2d\u7684\u6587\u4ef6\u540d->\u8df3\u8f6c\u5230Source->\u53f3\u952e\uff0cLocal Modifications."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Inherited from <NODE>"),",\u70b9\u51fb",Object(i.b)("inlineCode",{parentName:"li"},"<NODE>"),"\u53ef\u4ee5\u8df3\u8f6c\u5230\u8be5DOM\u8282\u70b9\u3002"),Object(i.b)("li",{parentName:"ul"},"\u7070\u8272\u6761\u76ee\u4e0d\u662f\u5df2\u5b9a\u4e49\u89c4\u5219\uff0c\u800c\u662f\u5728\u8fd0\u884c\u65f6\u8ba1\u7b97\u7684\u89c4\u5219\u3002"),Object(i.b)("li",{parentName:"ul"},"\u9f20\u6807\u60ac\u505c\u5728 CSS \u9009\u62e9\u5668\u4e0a\u53ef\u4ee5\u67e5\u770b\u53d7\u8be5\u9009\u62e9\u5668\u5f71\u54cd\u7684\u6240\u6709\u5143\u7d20\u3002"),Object(i.b)("li",{parentName:"ul"},"\u70b9\u51fb\u53f3\u4e0a\u89d2",Object(i.b)("inlineCode",{parentName:"li"},".cls"),",\u53ef\u4ee5\u67e5\u770b\u3001\u589e\u52a0\u3001\u5220\u9664class\u3002"),Object(i.b)("li",{parentName:"ul"},"\u70b9\u51fb(\u5e76\u957f\u6309)\u53f3\u4e0a\u89d2",Object(i.b)("inlineCode",{parentName:"li"},"+"),"\u6309\u94ae\uff0c(\u9009\u62e9\u8981\u5411\u54ea\u4e00\u4e2a\u6837\u5f0f\u8868)\u6dfb\u52a0\u4e00\u4e2a\u65b0\u7684 CSS \u89c4\u5219\u3002"),Object(i.b)("li",{parentName:"ul"},"\u70b9\u51fb\u53f3\u4e0a\u89d2",Object(i.b)("inlineCode",{parentName:"li"},":hov"),"\uff0c\u6216\u5728\u5143\u7d20\u4e0a\u70b9\u51fb\u53f3\u952e\uff0c\u542f\u7528/\u5220\u9664\u4f2a\u7c7b\u3002"),Object(i.b)("li",{parentName:"ul"},"\u70b9\u51fbcss\u5c5e\u6027\u8fdb\u884c\u4fee\u6539\uff0ctab\u8df3\u8f6c\uff1bAlt/ /Shift/Shift+Fn + \u4e0a/\u4e0b\uff0c\u589e\u51cf0.1,1,10,100\u3002"),Object(i.b)("li",{parentName:"ul"},"\u9f20\u6807\u60ac\u505c\u5230\u6837\u5f0f\u8868\u4e0a\u9762\uff0c\u6b64\u65f6\u53f3\u4e0b\u89d2\u51fa\u73b0\u4e09\u4e2a\u70b9\uff0c\u79fb\u52a8\u8fc7\u53bb\uff0c\u6b64\u65f6\u6709",Object(i.b)("inlineCode",{parentName:"li"},"color"),",",Object(i.b)("inlineCode",{parentName:"li"},"background-color"),"\u7b49\u5feb\u6377\u65b9\u5f0f\u3002"),Object(i.b)("li",{parentName:"ul"},"\u70b9\u51fb",Object(i.b)("inlineCode",{parentName:"li"},"color"),"\u58f0\u660e\u5de6\u4fa7\u5e26\u989c\u8272\u7684\u5c0f\u6b63\u65b9\u5f62\uff0c\u6253\u5f00",Object(i.b)("inlineCode",{parentName:"li"},"color-picker"),"\u3002")))),Object(i.b)("h2",{id:"console"},"Console"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u8fdb\u5165: ",Object(i.b)("inlineCode",{parentName:"li"},"Cmd + Alt + J")),Object(i.b)("li",{parentName:"ul"},"\u7f16\u8f91\u65f6\uff0c\u8f93\u5165",Object(i.b)("inlineCode",{parentName:"li"},"Shift + Enter"),"\u5b9e\u73b0\u6362\u884c\uff0c\u800c\u4e0d\u4f1a\u76f4\u63a5\u8fd0\u884c\u3002"),Object(i.b)("li",{parentName:"ul"},"Settings -> General -> Console -> ",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Hide network messages/ Log XMLHttpRequests/ Preserve log / Enable custom formatters"),Object(i.b)("li",{parentName:"ul"},"Show timestamps \u5c55\u5f00\u6d88\u606f\u5806\u53e0.")))),Object(i.b)("h4",{id:"console-api"},"Console API"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Ctrl + L/ ",Object(i.b)("inlineCode",{parentName:"p"},"clear()")," /",Object(i.b)("inlineCode",{parentName:"p"},"console.clear()")," \u6e05\u7a7aconsole.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u53f3\u952e -> Save As \u4fdd\u5b58console\u8f93\u51fa.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u65e5\u5fd7\u7ec4\u6309\u7ec4\u8f93\u51fa,\u53ef\u5d4c\u5957:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-javascript"},'console.group("Group Name")\nconsole.groupCollapsed("Group Name")//\u9ed8\u8ba4\u6298\u53e0\nconsole.groupEnd()\n'))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u8ba1\u65f6\u5668,\u65f6\u95f4\u6233,",Object(i.b)("em",{parentName:"p"},"\u5728Timeline\u4e0a\u6709\u6807\u6ce8")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-javascript"},'console.time("name");\nconsole.timeEnd("name");\n// \u5411Timeline\u6dfb\u52a0\u4e00\u4e2a\u6807\u8bb0\nconsole.timeStamp("Adding result");\n'))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u65ad\u8a00,\u5728console\u4e2d\u53ef\u8df3\u8f6c\u5230\u4ee3\u7801\u5bf9\u5e94\u4f4d\u7f6e."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-javascript"},'console.assert(a < 500, "a > 500!");\n'))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u5806\u6808\u8ffd\u8e2a&&\u9519\u8bef\u5904\u7406"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-javascript"},'// \u8ffd\u8e2a\u5806\u6808\ntry {\n    // some code here\n} cache(e) {\n    console.log(e.stack);\n}\n// \u6253\u5370\u8ddf\u8e2a\u8c03\u7528\u6808\nconsole.trace();\n// \u5904\u7406\u8fd0\u884c\u65f6\u5f02\u5e38\nwindow.onerror = function(message, url, line){\n    console.log("window.onerror was invoked with message = " + message + ", url = " + url + ", line = " + line);\n}\n'))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u5b57\u7b26\u4e32\u66ff\u6362 ",Object(i.b)("inlineCode",{parentName:"p"},"%s %d %f %o(DOM\u8282\u70b9) %O(js\u5bf9\u8c61) %c \u6837\u5f0f"),"\u3002\u4e0d\u8fc7\u6709\u4e86ES6\u4ee5\u540e\uff0c\u63a8\u8350\u4f7f\u7528\u66f4\u52a0\u65b9\u4fbf\u3001\u7075\u6d3b\u7684\u6a21\u677f\u5b57\u7b26\u4e32")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u6dfb\u52a0cpu\u914d\u7f6e\u6587\u4ef6.\u5c06\u4f1a\u6dfb\u52a0\u5230",Object(i.b)("inlineCode",{parentName:"p"},"Profiles"),"\u9762\u677f\u4e2d"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-javascript"},'console.profile("label");\nconsole.profileEnd();\n'))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u5176\u4ed6\u7279\u6b8a\u7528\u6cd5"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-javascript"},'// DOM\u5143\u7d20\u683c\u5f0f\u5316\u4e3aJS\u5bf9\u8c61\nconsole.dir(document.body);\n// \u8f93\u51faobject\u5b50\u7ea7\u5143\u7d20xml\nconsole.dirxml(object);\n\n// \u5c06Object,Array\u8f93\u51fa\nconsole.table([{a:1, b:2, c:3}, {a:"foo", b:false, c:undefined}]);\nconsole.table([[1,2,3], [2,3,4]]);\nconsole.table(family, ["firstName", "lastName", "age"]);\n\n// \u8bb0\u5f55\u76f8\u540c\u5b57\u7b26\u4e32\u4f20\u5165\u7684\u6b21\u6570(\u591a\u7528\u4e8e\u7edf\u8ba1\u51fd\u6570\u8c03\u7528\u6b21\u6570)\nconsole.count("Login called for user " + user);\n')))),Object(i.b)("h4",{id:"command-line-api"},"Command Line API"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u2191 / \u2193\u5207\u6362\u67e5\u770b\u8868\u8fbe\u5f0f ")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u9009\u62e9\u5143\u7d20"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"$('code') // document.querySelector()\n$$('figure') // document.querySelectorAll()\n$x('html/body/p') // \u8fd4\u56de\u4e0e\u6307\u5b9axpath\u5339\u914d\u7684\u6570\u7ec4\u5143\u7d20\n$0 - 4 // \u8fd4\u56de\u6700\u8fd1\u8bbf\u95ee\u8fc7\u76845\u4e2a\u5143\u7d20,$0\u4e3a\u6700\u65b0\u7684\u4e00\u4e2a\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u76d1\u542c\u4e8b\u4ef6, \u67e5\u770b\u65f6\u95f4\u76d1\u542c\u5668(",Object(i.b)("inlineCode",{parentName:"p"},"Elements"),"->",Object(i.b)("inlineCode",{parentName:"p"},"Event Listener"),"\u4e2d\u4e5f\u53ef\u4ee5\u67e5\u770b)"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-javascript"},'monitorEvents(document.body, "click"); // \u76d1\u542c\u4e8b\u4ef6\nunmonitorEvents(document.body); // \u53d6\u6d88\u76d1\u542c\ngetEventListeners(document); // \u8fd4\u56de\u5728\u6307\u5b9a\u5bf9\u8c61\u4e0a\u6ce8\u518c\u7684\u4e8b\u4ef6\u4fa6\u542c\u5668\n'))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u590d\u5236:\u5c06\u6307\u5b9a\u5bf9\u8c61\u7684\u5b57\u7b26\u4e32\u8868\u793a\u5f62\u5f0f\u590d\u5236\u5230\u526a\u8d34\u677f."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"copy(object);\ncopy($0);\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u8c03\u8bd5\u51fd\u6570"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"debug(fn); // \u8c03\u7528fn\u65f6\u5f00\u59cb\u8c03\u8bd5\nundebug(fn); // \u505c\u6b62\u8c03\u8bd5\n\nmonitor(function); // console\u4e2d\u5c06\u8f93\u51fa\u51fd\u6570\u8c03\u7528,\u4ee5\u53ca\u4f20\u5165\u7684\u53c2\u6570\nunmonitor(function); // \u505c\u6b62\u76d1\u63a7\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u5728",Object(i.b)("inlineCode",{parentName:"p"},"Elements"),"\u4e2d\u6253\u5f00\u6307\u5b9a\u5143\u7d20/\u5bf9\u8c61/\u51fd\u6570."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"inspect(DOM);\ninspect(object/function);\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u67e5\u770b\u5bf9\u8c61"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"keys(object);\nvalues(object);\n")))),Object(i.b)("h2",{id:"sources"},"Sources"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u6dfb\u52a0\u65ad\u70b9",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u6dfb\u52a0",Object(i.b)("inlineCode",{parentName:"li"},"Event"),"\u65ad\u70b9:\n",Object(i.b)("inlineCode",{parentName:"li"},"Source\u6807\u7b7e"),"->\u53f3\u4fa7",Object(i.b)("inlineCode",{parentName:"li"},"Event Listener Breakpoints "),"->",Object(i.b)("inlineCode",{parentName:"li"},"Mouse"),"->",Object(i.b)("inlineCode",{parentName:"li"},"click")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"DOM"),"\u65ad\u70b9.Elements \u9762\u677f\u4e2d\uff0c\u5bf9DOM\u8282\u70b9\u53f3\u952e\uff0cBreak On..."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"XHR"),"\u65ad\u70b9"),Object(i.b)("li",{parentName:"ul"},"\u5f02\u5e38\u65ad\u70b9:\u53f3\u4e0a\u89d2",Object(i.b)("inlineCode",{parentName:"li"},"Pause on exceptions")),Object(i.b)("li",{parentName:"ul"},"\u6761\u4ef6\u65ad\u70b9")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"//  \u5f53DOM\u5143\u7d20\u6ee1\u8db3\u67d0\u4e2a\u6761\u4ef6\u8fdb\u884c\u65ad\u70b9\uff0c\u540c\u65f6\u67e5\u770b\u8fd9\u4e2a\u5143\u7d20\nelem.hasAttribute('class') && inspect(elem);\n"))),Object(i.b)("li",{parentName:"ul"},"\u5728\u7f16\u8f91\u5668\u4e2d\u884c\u9996\u53f3\u952e,",Object(i.b)("inlineCode",{parentName:"li"},"continue to here")),Object(i.b)("li",{parentName:"ul"},"\u68c0\u6d4b\u53d8\u91cf\u503c",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Watch"),"->",Object(i.b)("inlineCode",{parentName:"li"},"+"),",\u6dfb\u52a0\u5e0c\u671b\u68c0\u6d4b\u7684\u8868\u8fbe\u5f0f,\u6bd4\u5982,a,typeof a"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Scope"),"\u7a97\u683c,\u5728\u811a\u672c\u6682\u505c\u65f6,\u4f1a\u663e\u793a\u5f53\u524d\u53d8\u91cf"))),Object(i.b)("li",{parentName:"ul"},"log\u53d8\u91cf\u503c",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\b\u53f3\u952e -> ",Object(i.b)("inlineCode",{parentName:"li"},"Add logpoint")))),Object(i.b)("li",{parentName:"ul"},"\u53f3\u4e0a\u89d2",Object(i.b)("inlineCode",{parentName:"li"},"Deactivate breakpoints"),",\u542f\u52a8/\u5ffd\u7565\u5168\u90e8\u65ad\u70b9"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Call Stack"),"\u8c03\u7528\u5806\u6808",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5728",Object(i.b)("inlineCode",{parentName:"li"},"Call Stack"),"\u4e2d\u53f3\u952e,",Object(i.b)("inlineCode",{parentName:"li"},"Restart Frame")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Async"),",\u63d0\u9ad8\u5b8c\u6574\u7684\u5f02\u6b65\u51fd\u6570\u8c03\u7528\u5806\u6808\u7684\u53ef\u89c6\u6027"),Object(i.b)("li",{parentName:"ul"},"\u4f7f\u7528\u975e\u533f\u540d\u51fd\u6570,\u63d0\u9ad8\u5806\u6808\u53ef\u8bfb\u6027"))),Object(i.b)("li",{parentName:"ul"},"\u5c06\u7b2c\u4e09\u65b9\u811a\u672c\u6dfb\u52a0\u5165\u9ed1\u7bb1:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5728\u5df2\u6253\u5f00\u7684\u6587\u4ef6\u4e2d,\u53f3\u952e->",Object(i.b)("inlineCode",{parentName:"li"},"Blackbox Script")),Object(i.b)("li",{parentName:"ul"},"\u5728",Object(i.b)("inlineCode",{parentName:"li"},"Call Stack"),"\u4e2d,\u53f3\u952e->",Object(i.b)("inlineCode",{parentName:"li"},"Blackbox Script")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Settings"),"->",Object(i.b)("inlineCode",{parentName:"li"},"Blockboxing"),"->",Object(i.b)("inlineCode",{parentName:"li"},"add pattern"),",\u4e0b\u62c9\u83dc\u5355\u4e2d,",Object(i.b)("inlineCode",{parentName:"li"},"Blackbox"),"\u9ed1\u7bb1,",Object(i.b)("inlineCode",{parentName:"li"},"Disabled"),"\u963b\u6b62\u6267\u884c"))),Object(i.b)("li",{parentName:"ul"},"\u5b9e\u65f6\u7f16\u8f91:\u7f16\u8f91\u5668\u4e2d\u4fee\u6539\u4ee3\u7801->",Object(i.b)("inlineCode",{parentName:"li"},"Cmd + s"),"\uff0c\u7ee7\u7eed\u8fd0\u884c\u4ee3\u7801"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Threads"),",\u5207\u6362\u7ebf\u7a0b"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Source Map"),", ",Object(i.b)("inlineCode",{parentName:"li"},"Settings"),"\u4e2d\u5f00\u542f"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Snippets")," \u7f16\u5199\u4ee3\u7801\uff0c\u8fd0\u884c\u7ed3\u679c\u8f93\u51fa\u5230",Object(i.b)("inlineCode",{parentName:"li"},"console"))),Object(i.b)("h2",{id:"network"},"Network"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u9762\u677f\u4e2d\uff0c\u84dd\u7ebf\u6807\u5fd7",Object(i.b)("inlineCode",{parentName:"li"},"DOMContentLoaded"),"\u4e8b\u4ef6\uff0c\u7ea2\u7ebf\u6807\u5fd7",Object(i.b)("inlineCode",{parentName:"li"},"load"),"\u4e8b\u4ef6\u3002"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Http1.0/1.1"),"\u4e0b,",Object(i.b)("inlineCode",{parentName:"li"},"chrome"),"\u6700\u591a\u652f\u6301\u5bf9\u540c\u4e00\u4e2a",Object(i.b)("inlineCode",{parentName:"li"},"domain"),"6\u4e2a",Object(i.b)("inlineCode",{parentName:"li"},"TCP"),"\u8bf7\u6c42"),Object(i.b)("li",{parentName:"ul"},"Shift + \u5149\u6807\u79fb\u52a8\u5230request\u4e0a\u9762\uff0c\u6b64\u65f6\u7eff\u8272\u6807\u5fd7\u8be5\u8bf7\u6c42\u7684\u53d1\u8d77\u8005\uff0c\u7ea2\u8272\u6807\u5fd7\u8be5\u8bf7\u6c42\u7684\u4f9d\u8d56\u9879\u3002"),Object(i.b)("li",{parentName:"ul"},"\u6444\u50cf\u673a\u6309\u94ae\uff0c",Object(i.b)("inlineCode",{parentName:"li"},"Capture Screenshots"),"\uff0c\u518d\u6b21\u5237\u65b0\u9875\u9762\u65f6\uff0c\u53ef\u4ee5\u5728\u65f6\u95f4\u8f74\u4e0a\u65b9\u770b\u5230\u5bf9\u5e94\u5c4f\u5e55\u72b6\u6001\u3002"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"disable cache"),",",Object(i.b)("inlineCode",{parentName:"li"},"throttle"),",",Object(i.b)("inlineCode",{parentName:"li"},"Offline"),",",Object(i.b)("inlineCode",{parentName:"li"},"hide data urls")),Object(i.b)("li",{parentName:"ul"},"\u53f3\u952e->",Object(i.b)("inlineCode",{parentName:"li"},"clear browser cache")),Object(i.b)("li",{parentName:"ul"},"\u53f3\u952e\u8868\u683cheader -> \u6dfb\u52a0/\u79fb\u9664\u663e\u793a\u5217"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"header"),":",Object(i.b)("inlineCode",{parentName:"li"},"Use large request rows"),",",Object(i.b)("inlineCode",{parentName:"li"},"Show overview")),Object(i.b)("li",{parentName:"ul"},"\u53f3\u952erequest->",Object(i.b)("inlineCode",{parentName:"li"},"copy response"),"->console\u4e2d",Object(i.b)("inlineCode",{parentName:"li"},"copy({})"),"->\u5f97\u5230\u683c\u5f0f\u5316\u7684JSON"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u53f3\u952erequest->",Object(i.b)("inlineCode",{parentName:"li"},"block request")," \u5728drawer\u4e2d,\u67e5\u770b\u88abblock\u7684request"))),Object(i.b)("li",{parentName:"ul"},"\u53f3\u952e",Object(i.b)("inlineCode",{parentName:"li"},"XHR request")," -> ",Object(i.b)("inlineCode",{parentName:"li"},"reply XHR")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Summary"),": request\u6570\u91cf,\u5927\u5c0f,\u65f6\u95f4"),Object(i.b)("li",{parentName:"ul"},"Filter",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u7a7a\u683c\u9694\u5f00:\u5e76"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"domain"),",",Object(i.b)("inlineCode",{parentName:"li"},"has-response-header"),",",Object(i.b)("inlineCode",{parentName:"li"},"is"),"(is:running),",Object(i.b)("inlineCode",{parentName:"li"},"larger-than"),",",Object(i.b)("inlineCode",{parentName:"li"},"method"),",",Object(i.b)("inlineCode",{parentName:"li"},"mime-type"),",",Object(i.b)("inlineCode",{parentName:"li"},"mixed-content"),",",Object(i.b)("inlineCode",{parentName:"li"},"scheme"),",",Object(i.b)("inlineCode",{parentName:"li"},"set-cookie-domain"),",",Object(i.b)("inlineCode",{parentName:"li"},"set-cookie-name"),",",Object(i.b)("inlineCode",{parentName:"li"},"set-cookie-value"),",",Object(i.b)("inlineCode",{parentName:"li"},"status-code")))),Object(i.b)("li",{parentName:"ul"},"Timing\u542b\u4e49:\nQueuing: \u6392\u961f\u65f6\u95f4.\nStalled: http\u8bf7\u6c42\u5efa\u7acb\u5230\u53d1\u51fa\u53bb.\nProxy Negotiation\u3001DNS Lookup\nInitial Connection/Connecting: \u5efa\u7acb\u94fe\u63a5\u82b1\u8d39\u65f6\u95f4\u3002TCP\u63e1\u624b\u79fb\u673a\u91cd\u8bd5.\nSSL: \u5efa\u7acbSSL\u94fe\u63a5\u82b1\u8d39\u65f6\u95f4.\nRequest sent: \u53d1\u8d77\u8bf7\u6c42\u7684\u65f6\u95f4.\nWaiting (Time to first byte (TTFB)): \u53d1\u8d77\u8bf7\u6c42\u5230\u63a5\u53d7\u7b2c\u4e00\u4e2a\u5b57\u8282\u6570\u636e.\nContent Download: \u83b7\u53d6\u54cd\u5e94\u6570\u636e\u7684\u65f6\u95f4.")))}p.isMDXComponent=!0}}]);