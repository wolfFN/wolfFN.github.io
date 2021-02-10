(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{144:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(7),a=(n(0),n(210)),c={title:"Patterns"},p={unversionedId:"web/react/patterns",id:"web/react/patterns",isDocsHomePage:!1,title:"Patterns",description:"\u4e00\u4e9b Best Practice.",source:"@site/docs/web/react/patterns.md",slug:"/web/react/patterns",permalink:"/docs/web/react/patterns",version:"current",sidebar:"web",previous:{title:"life-circle",permalink:"/docs/web/react/life-circle"},next:{title:"react-router",permalink:"/docs/web/react/react-router"}},i=[{value:"Render Props Pattern",id:"render-props-pattern",children:[]}],u={toc:i};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u4e00\u4e9b Best Practice.\n",Object(a.b)("a",{parentName:"p",href:"https://reactpatterns.com/"},"React Patterns")),Object(a.b)("h2",{id:"render-props-pattern"},"Render Props Pattern"),Object(a.b)("p",null,"Also called\xa0 ",Object(a.b)("strong",{parentName:"p"},"children as a function"),"\xa0or ",Object(a.b)("strong",{parentName:"p"},"child as a function.")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"It is used to expose internal data from within a render prop component for making it accessible to other components within the render prop component's composition.",Object(a.b)("br",null))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"import React, { Component } from 'react';\n\nconst App = () => (\n    <Amount>\n        {amount => (\n            <div>\n                <Pound amount={amount} />\n                <Euro amount={amount} />\n            </div>\n        )}\n    </Amount>\n);\n\nclass Amount extends Component {\n    constructor(props) {\n        super(props);\n\n        this.state = {\n            amount: 0,\n        };\n    }\n\n    onIncrement = () => {\n        this.setState(state => ({ amount: state.amount + 1 }));\n    };\n\n    onDecrement = () => {\n        this.setState(state => ({ amount: state.amount - 1 }));\n    };\n\n    render() {\n        return (\n            <div>\n                <span>US Dollar: {this.state.amount} </span>\n\n                <button type='button' onClick={this.onIncrement}>\n                    +\n                </button>\n                <button type='button' onClick={this.onDecrement}>\n                    -\n                </button>\n\n                {this.props.children(this.state.amount)}\n            </div>\n        );\n    }\n}\n\nconst Euro = ({ amount }) => <p>Euro: {amount * 0.86}</p>;\n\nconst Pound = ({ amount }) => <p>Pound: {amount * 0.76}</p>;\n\nexport default App;\n")))}s.isMDXComponent=!0},210:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=s(n),b=r,d=l["".concat(c,".").concat(b)]||l[b]||m[b]||a;return n?o.a.createElement(d,p(p({ref:t},u),{},{components:n})):o.a.createElement(d,p({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=b;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,c[1]=p;for(var u=2;u<a;u++)c[u]=n[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);