(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{126:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return b})),r.d(t,"toc",(function(){return o})),r.d(t,"default",(function(){return u}));var n=r(3),c=r(7),l=(r(0),r(210)),a={title:"HTTPS"},b={unversionedId:"web/general/https",id:"web/general/https",isDocsHomePage:!1,title:"HTTPS",description:"\u95ee\u9898",source:"@site/docs/web/general/https.md",slug:"/web/general/https",permalink:"/docs/web/general/https",version:"current",sidebar:"web",previous:{title:"\u7f51\u7edc",permalink:"/docs/web/general/network"},next:{title:"Cache",permalink:"/docs/web/general/cache"}},o=[{value:"\u95ee\u9898",id:"\u95ee\u9898",children:[{value:"\u89e3\u51b3\u529e\u6cd5",id:"\u89e3\u51b3\u529e\u6cd5",children:[]}]},{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49",children:[]},{value:"\u5bc6\u94a5",id:"\u5bc6\u94a5",children:[]},{value:"\u8bc1\u4e66",id:"\u8bc1\u4e66",children:[{value:"\u8fdb\u9636\u8bc1\u4e66",id:"\u8fdb\u9636\u8bc1\u4e66",children:[]}]},{value:"Performance",id:"performance",children:[]}],i={toc:o};function u(e){var t=e.components,r=Object(c.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"\u95ee\u9898"},"\u95ee\u9898"),Object(l.b)("p",null,"http \u534f\u8bae\u5b58\u5728\u4e00\u4e9b\u5b89\u5168\u6027\u95ee\u9898"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u901a\u4fe1\u4f7f\u7528\u660e\u6587(\u4e0d\u52a0\u5bc6) ,\u5185\u5bb9\u53ef\u80fd\u4f1a\u88ab\u7a83\u542c"),Object(l.b)("li",{parentName:"ul"},"\u4e0d\u9a8c\u8bc1\u901a\u4fe1\u65b9\u7684\u8eab\u4efd,\u56e0\u6b64\u6709\u53ef\u80fd\u906d\u9047\u4f2a\u88c5"),Object(l.b)("li",{parentName:"ul"},"\u65e0\u6cd5\u8bc1\u660e\u62a5\u6587\u7684\u5b8c\u6574\u6027,\u6240\u4ee5\u6709\u53ef\u80fd\u5df2\u906d\u7be1\u6539")),Object(l.b)("h3",{id:"\u89e3\u51b3\u529e\u6cd5"},"\u89e3\u51b3\u529e\u6cd5"),Object(l.b)("h4",{id:"\u5185\u5bb9\u7684\u52a0\u5bc6"},"\u5185\u5bb9\u7684\u52a0\u5bc6"),Object(l.b)("p",null,"\u5c06\u901a\u4fe1\u7684\u5185\u5bb9\u672c\u8eab\u8fdb\u884c\u52a0\u5bc6\u3002\u7531\u4e8e HTTP \u534f\u8bae\u4e2d\u6ca1\u6709\u52a0\u5bc6\u673a\u5236\uff0c\u90a3\u4e48\u5c31\u5bf9 HTTP \u534f\u8bae\u4f20\u8f93\u7684\u5185\u5bb9\u672c\u8eab\u52a0\u5bc6\u3002\u5373\u628a HTTP \u62a5\u6587\u91cc\u6240\u542b\u7684\u5185\u5bb9\u8fdb\u884c\u52a0\u5bc6\u5904\u7406\u3002 \u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u5ba2\u6237\u7aef\u9700\u8981\u5bf9 HTTP \u62a5\u6587\u8fdb\u884c\u52a0\u5bc6\u5904\u7406\u540e\u518d\u53d1\u9001\u8bf7\u6c42\u3002",Object(l.b)("br",{parentName:"p"}),"\n","HTTP \u534f\u8bae\u7684\u5b9e\u73b0\u672c\u8eab\u975e\u5e38\u7b80\u5355,\u4e0d\u8bba\u662f\u8c01\u53d1\u9001\u8fc7\u6765\u7684\u8bf7\u6c42\u90fd\u4f1a\u8fd4\u56de\u54cd\u5e94\uff0c\u56e0\u6b64\u4f1a\u5b58\u5728\u4ee5\u4e0b\u5404\u79cd\u9690\u60a3\u3002"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u65e0\u6cd5\u786e\u5b9a\u901a\u4fe1\u65b9\uff0c\u670d\u52a1\u5668\u3001\u5ba2\u6237\u7aef\u90fd\u6709\u53ef\u80fd\u7531\u4e2d\u95f4\u4eba\u5192\u5145\uff0c\u4e5f\u65e0\u6cd5\u786e\u8ba4\u901a\u4fe1\u5bf9\u65b9\u7684\u8bbf\u95ee\u6743\u9650\u3002"),Object(l.b)("li",{parentName:"ul"},"\u65e0\u6cd5\u786e\u8ba4\u62a5\u6587\u5b8c\u6574\u6027\uff0c\u901a\u5e38\u4f7f\u7528 MD5 / SHA-1 \u7b49\u6563\u5217\u503c\u6821\u9a8c\u7684\u65b9\u6cd5\uff0c\u4ee5\u53ca\u7528\u6765\u786e\u8ba4\u6587\u4ef6\u7684\u6570\u5b57\u7b7e\u540d\u65b9\u6cd5\u6765\u8fdb\u884c\u5b8c\u6574\u6027\u6821\u9a8c\u3002\u4f46\u5982\u679c PGP \u548c MD5 \u672c\u8eab\u88ab\u6539\u5199\uff0c\u7528\u6237\u662f\u6ca1\u6709\u529e\u6cd5\u610f\u8bc6\u5230\u7684\uff0c\u6545\u4fdd\u8bc1\u786e\u8ba4\u7ed3\u679c\u6b63\u786e\u3002")),Object(l.b)("h4",{id:"\u901a\u4fe1\u7684\u52a0\u5bc6"},"\u901a\u4fe1\u7684\u52a0\u5bc6"),Object(l.b)("p",null,"HTTP \u534f\u8bae\u4e2d\u6ca1\u6709\u52a0\u5bc6\u673a\u5236\uff0c\u4f46\u53ef\u4ee5\u901a\u8fc7\u548c\u4ee5\u4e0b\u4e24\u79cd\u534f\u8bae\u7684\u7ec4\u5408\u4f7f\u7528\uff0c\u52a0\u5bc6 HTTP \u7684\u901a\u4fe1\u5185\u5bb9\u3002 \u7528 SSL \u5efa\u7acb\u5b89\u5168\u901a\u4fe1\u7ebf\u8def\u4e4b\u540e\uff0c\u5c31\u53ef\u4ee5\u5728\u8fd9\u6761\u7ebf\u8def\u4e0a\u8fdb\u884c HTTP \u901a\u4fe1\u4e86\u3002\u4e0e SSL \u7ec4\u5408\u4f7f\u7528\u7684 HTTP \u88ab\u79f0\u4e3a HTTPS(HTTP Secure,\u8d85\u6587\u672c\u4f20\u8f93\u5b89\u5168\u534f\u8bae)\u6216 HTTP over SSL\u3002"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"SSL\uff1aSecure Socket Layer\uff0c\u5b89\u5168\u5957\u63a5\u5c42",Object(l.b)("br",{parentName:"p"}),"\n","TLS\uff1aTransport Layer Security\uff0c\u5b89\u5168\u4f20\u8f93\u5c42\u534f\u8bae")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u4f7f\u7528 SSL \u5219\u53ef\u4ee5\u786e\u5b9a\u901a\u4fe1\u65b9\u3002SSL \u4e0d\u4ec5\u63d0\u4f9b\u52a0\u5bc6\u5904\u7406,\u800c\u4e14\u8fd8\u4f7f\u7528\u4e86\u4e00\u79cd\u88ab\u79f0\u4e3a\u8bc1\u4e66\u7684\u624b\u6bb5,\u53ef\u7528\u4e8e\u786e\u5b9a\u65b9\u3002  "),Object(l.b)("li",{parentName:"ul"},"SSL \u63d0\u4f9b\u8ba4\u8bc1\u548c\u52a0\u5bc6\u5904\u7406\u53ca\u6458\u8981\u529f\u80fd\uff0c\u7528\u4ee5\u786e\u4fdd\u5185\u5bb9\u5b8c\u6574\u6027\u3002")),Object(l.b)("h2",{id:"\u5b9a\u4e49"},"\u5b9a\u4e49"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"HTTPS = HTTP+ \u52a0\u5bc6 + \u8ba4\u8bc1 + \u5b8c\u6574\u6027\u4fdd\u62a4")),Object(l.b)("p",null,"\u7528 SSL \u5efa\u7acb\u5b89\u5168\u901a\u4fe1\u7ebf\u8def\u4e4b\u540e,\u5c31\u53ef\u4ee5\u5728\u8fd9\u6761\u7ebf\u8def\u4e0a\u8fdb\u884c HTTP \u901a\u4fe1\u4e86\u3002\u4e0e SSL \u7ec4\u5408\u4f7f\u7528\u7684 HTTP \u88ab\u79f0\u4e3a HTTPS(HTTP Secure,\u8d85\u6587\u672c\u4f20\u8f93\u5b89\u5168\u534f\u8bae)\u6216 HTTP over SSL\u3002  "),Object(l.b)("p",null,"HTTPS \u4f7f \u7528 SSL(Secure Socket Layer) \u548c TLS(Transport Layer Security)\u8fd9\u4e24\u4e2a\u534f\u8bae\u3002TSL \u662f\u4ee5 SSL \u4e3a\u539f\u578b\u5f00\u53d1\u7684\u534f\u8bae,\u6709\u65f6\u4f1a\u7edf\u4e00\u79f0\u8be5\u534f\u8bae\u4e3a SSL\u3002\u5f53\u524d\u4e3b\u6d41\u7684\u7248\u672c\u662f SSL3.0 \u548c TLS1.0\u3002 "),Object(l.b)("h2",{id:"\u5bc6\u94a5"},"\u5bc6\u94a5"),Object(l.b)("p",null,"\u8fd1\u4ee3\u7684\u52a0\u5bc6\u65b9\u6cd5\u4e2d\uff0c\u52a0\u5bc6\u7b97\u6cd5\u662f\u516c\u5f00\u7684\uff0c\u5bc6\u94a5\u662f\u4fdd\u5bc6\u7684\u3002\u5982\u679c\u5bc6\u94a5\u88ab\u653b\u51fb\u8005\u83b7\u5f97\uff0c\u90a3\u52a0\u5bc6\u4e5f\u5c31\u5931\u53bb\u4e86\u610f\u4e49\u3002  "),Object(l.b)("p",null,"SSL \u91c7\u7528\u4e00\u79cd\u53eb\u505a\u516c\u5f00\u5bc6\u94a5\u52a0\u5bc6(Public-key cryptography)\u7684\u52a0\u5bc6\u5904\u7406\u65b9\u5f0f\uff1a\u53d1\u9001\u5bc6\u6587\u7684\u4e00\u65b9\u4f7f\u7528\u5bf9\u65b9\u7684\u516c\u5f00\u5bc6\u94a5\u8fdb\u884c\u52a0\u5bc6\u5904\u7406\uff0c\u5bf9\u65b9\u6536\u5230\u88ab\u52a0\u5bc6\u7684\u4fe1\u606f\u540e\uff0c\u518d\u4f7f\u7528\u81ea\u5df1\u7684\u79c1\u6709\u5bc6\u94a5\u8fdb\u884c\u89e3\u5bc6\u3002"),Object(l.b)("p",null,"\u516c\u5f00\u5bc6\u94a5\u52a0\u5bc6\u4e0e\u5171\u4eab\u5bc6\u94a5\u52a0\u5bc6\u76f8\u6bd4,\u5176\u5904\u7406\u901f\u5ea6\u8981\u6162\u3002\u6240\u4ee5 HTTPS \u91c7\u7528\u5171\u4eab\u4e8c\u8005\u5e76\u7528\u7684\u6df7\u5408\u52a0\u5bc6\u673a\u5236\u3002\u4f7f\u7528\u516c\u5f00\u5bc6\u94a5\u52a0\u5bc6\u65b9\u5f0f\u4ea4\u6362\u5bc6\u94a5\uff0c\u4f7f\u7528\u5171\u4eab\u5bc6\u94a5\u52a0\u5bc6\u65b9\u5f0f\uff0c\u5efa\u7acb\u901a\u4fe1\uff0c\u4ea4\u6362\u62a5\u6587\u3002"),Object(l.b)("h2",{id:"\u8bc1\u4e66"},"\u8bc1\u4e66"),Object(l.b)("p",null,"\u516c\u5f00\u5bc6\u94a5\u52a0\u5bc6\u7684\u95ee\u9898\uff0c\u662f\u65e0\u6cd5\u8bc1\u660e\u516c\u5f00\u5bc6\u94a5\u672c\u8eab\u5c31\u662f\u8d27\u771f\u4ef7\u5b9e\u7684\u516c\u5f00\u5bc6\u94a5\u3002\u89e3\u51b3\u65b9\u6848\u662f\u4f7f\u7528\u7531\u6570\u5b57\u8bc1\u4e66\u8ba4\u8bc1\u673a\u6784(CA,Certificate Authority)\u548c\u5176\u76f8\u5173\u673a\u5173\u9881\u53d1\u7684\u516c\u5f00\u5bc6\u94a5\u8bc1\u4e66\u3002  "),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Server \u5411 CA \u63d0\u51fa\u516c\u5f00\u5bc6\u94a5\u7684\u7533\u8bf7\u3002CA \u8ba4\u8bc1\u540e\uff0c\u4f1a\u5bf9\u5df2\u7533\u8bf7\u7684\u516c\u5f00\u5bc6\u94a5\u505a\u6570\u5b57\u7b7e\u540d\uff0c\u7136\u540e\u5206\u914d\u8fd9\u4e2a\u5df2\u7b7e\u540d\u7684\u516c\u5f00\u5bc6\u94a5\uff0c\u5e76\u5c06\u8be5\u516c\u5f00\u5bc6\u94a5\u653e\u5165\u516c\u94a5\u8bc1\u4e66\uff08\u6570\u5b57\u8bc1\u4e66/\u8bc1\u4e66\uff09\u540e\u7ed1\u5b9a\u5728\u4e00\u8d77\u3002  "),Object(l.b)("li",{parentName:"ol"},"Server \u5c06\u7531 CA \u9881\u53d1\u7684\u8bc1\u4e66\u53d1\u9001\u7ed9 Client\uff0c\u4ee5\u8fdb\u884c\u516c\u5f00\u5bc6\u94a5\u52a0\u5bc6\u65b9\u5f0f\u901a\u4fe1\u3002  "),Object(l.b)("li",{parentName:"ol"},"Client \u4f7f\u7528 CA \u7684\u516c\u5f00\u5bc6\u94a5\uff0c\u5bf9\u8bc1\u4e66\u4e0a\u7684\u6570\u5b57\u7b7e\u540d\u8fdb\u884c\u9a8c\u8bc1\uff0c\u7531\u6b64\u786e\u8ba4Server \u7684\u516c\u5f00\u5bc6\u94a5\u662f\u5426\u503c\u5f97\u4fe1\u8d56\u3002"),Object(l.b)("li",{parentName:"ol"},"\u6b64\u5904\u8ba4\u8bc1\u673a\u5173\u7684\u516c\u5f00\u5bc6\u94a5\u5fc5\u987b\u5b89\u5168\u5730\u8f6c\u4ea4\u7ed9\u5ba2\u6237\u7aef\u3002\u591a\u6570\u6d4f\u89c8\u5668\u53d1\u5e03\u7248\u672c\u65f6\uff0c\u4f1a\u4e8b\u5148\u5728\u5185\u90e8\u690d\u5165\u5e38\u7528 CA \u7684\u516c\u5f00\u5bc6\u94a5\u3002")),Object(l.b)("h3",{id:"\u8fdb\u9636\u8bc1\u4e66"},"\u8fdb\u9636\u8bc1\u4e66"),Object(l.b)("p",null,"\u6709\u51e0\u79cd\u7279\u6b8a\u7528\u9014\u7684\u8bc1\u4e66\uff1a"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u5176\u4e2d\u4e00\u79cd\uff0c\u53ef\u786e\u8ba4\u5bf9\u65b9\u670d\u52a1\u5668\u80cc\u540e\u8fd0\u8425\u7684\u4f01\u4e1a\u662f\u5426\u771f\u5b9e\u5b58\u5728\u3002\u62e5\u6709\u8be5\u7279\u6027\u7684\u8bc1\u4e66\u5c31\u662f EV SSL \u8bc1\u4e66(Extended Validation SSL Certificate) \u3002 "),Object(l.b)("li",{parentName:"ul"},"\u5b89\u5168\u6027\u6781\u9ad8\u7684\u8ba4\u8bc1\u673a\u6784\u53ef\u9881\u53d1\u5ba2\u6237\u7aef\u8bc1\u4e66\u4f46\uff0c\u4ec5\u7528\u4e8e\u7279\u6b8a\u7528\u9014\u7684\u4e1a\u52a1\uff0c\u6bd4\u5982\u90a3\u4e9b\u53ef\u652f\u6491\u5ba2\u6237\u7aef\u8bc1\u4e66\u652f\u51fa\u8d39\u7528\u7684\u4e1a\u52a1\u3002\u4f8b\u5982\uff0c\u94f6\u884c\u7684\u7f51\u4e0a\u94f6\u884c\u5c31\u91c7\u7528\u4e86\u5ba2\u6237\u7aef\u8bc1\u4e66\u3002"),Object(l.b)("li",{parentName:"ul"},"\u72ec\u7acb\u6784\u5efa\u7684\u8ba4\u8bc1\u673a\u6784\u53eb\u505a\u81ea\u8ba4\u8bc1\u673a\u6784\uff0c\u7531\u81ea\u8ba4\u8bc1\u673a\u6784\u9881\u53d1\u7684\u201c\u65e0\u7528\u201d\u8bc1\u4e66\u4e5f\u88ab\u620f\u79f0\u4e3a\u81ea\u7b7e\u540d\u8bc1\u4e66\u3002")),Object(l.b)("h2",{id:"performance"},"Performance"),Object(l.b)("p",null,"SSL \u7684\u6162\u5206\u4e24\u79cd\u3002"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u4e00\u79cd\u662f\u6307\u901a\u4fe1\u6162\u3002"),Object(l.b)("li",{parentName:"ul"},"\u53e6\u4e00\u79cd\u662f\u6307\u7531\u4e8e\u5927\u91cf\u6d88\u8017 CPU \u53ca\u5185\u5b58\u7b49\u8d44\u6e90,\u5bfc\u81f4\u5904\u7406\u901f\u5ea6\u53d8\u6162\u3002")),Object(l.b)("p",null,"\u6211\u4eec\u4f1a\u4f7f\u7528SSL \u52a0\u901f\u5668\u8fd9\u79cd(\u4e13\u7528\u670d\u52a1\u5668)\u786c\u4ef6\u6765\u6539\u5584\u8be5\u95ee\u9898\u3002\u8be5\u786c\u4ef6\u4e3a SSL \u901a\u4fe1\u4e13\u7528\u786c\u4ef6\uff0c\u76f8\u5bf9\u8f6f\u4ef6\u6765\u8bb2\uff0c\u80fd\u591f\u63d0\u9ad8\u6570\u500d SSL \u7684\u8ba1\u7b97\u901f\u5ea6\u3002"))}u.isMDXComponent=!0},210:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return j}));var n=r(0),c=r.n(n);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var i=c.a.createContext({}),u=function(e){var t=c.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):b(b({},t),e)),r},p=function(e){var t=u(e.components);return c.a.createElement(i.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},S=c.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,a=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),p=u(r),S=n,j=p["".concat(a,".").concat(S)]||p[S]||O[S]||l;return r?c.a.createElement(j,b(b({ref:t},i),{},{components:r})):c.a.createElement(j,b({ref:t},i))}));function j(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,a=new Array(l);a[0]=S;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:n,a[1]=b;for(var i=2;i<l;i++)a[i]=r[i];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,r)}S.displayName="MDXCreateElement"}}]);