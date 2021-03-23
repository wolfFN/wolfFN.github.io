(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{156:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return b})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return u}));var a=t(2),r=t(6),l=(t(0),t(197)),s={title:"Ubuntu"},b={unversionedId:"tools/ubuntu/ubuntu",id:"tools/ubuntu/ubuntu",isDocsHomePage:!1,title:"Ubuntu",description:"\u8ffd\u968f\u5927\u5bb6\u7684\u811a\u6b65\u64b8\u4e86\u817e\u4e91\u8baf\u7684\u7f8a\u6bdb\uff0c\u51c6\u5907\u5728\u4e0a\u9762\u81ea\u5df1\u5f00\u53d1\u70b9\u670d\u52a1\u73a9\u73a9\u3002\u672c\u6587\u4e3b\u8981\u8bb0\u5f55\u6298\u817e\u914d\u7f6e\u73af\u5883\u7684\u8fc7\u7a0b\u3002\u7559\u4f5c\u65e5\u540e\u67e5\u770b\u3002",source:"@site/docs/tools/ubuntu/ubuntu.md",slug:"/tools/ubuntu/ubuntu",permalink:"/docs/tools/ubuntu/ubuntu",version:"current",sidebar:"tools",previous:{title:"PostgreSQL",permalink:"/docs/tools/mac/postgreSQL"},next:{title:"VS Code",permalink:"/docs/tools/tools/vscode"}},c=[{value:"\u7cfb\u7edf\u9009\u62e9",id:"\u7cfb\u7edf\u9009\u62e9",children:[]},{value:"\u65b0\u5efa\u8d26\u6237",id:"\u65b0\u5efa\u8d26\u6237",children:[]},{value:"zsh",id:"zsh",children:[]},{value:"nvm",id:"nvm",children:[]},{value:"Nginx",id:"nginx",children:[]},{value:"MySQL",id:"mysql",children:[]}],o={rightToc:c};function u(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},o,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u8ffd\u968f\u5927\u5bb6\u7684\u811a\u6b65\u64b8\u4e86\u817e\u4e91\u8baf\u7684\u7f8a\u6bdb\uff0c\u51c6\u5907\u5728\u4e0a\u9762\u81ea\u5df1\u5f00\u53d1\u70b9\u670d\u52a1\u73a9\u73a9\u3002\u672c\u6587\u4e3b\u8981\u8bb0\u5f55\u6298\u817e\u914d\u7f6e\u73af\u5883\u7684\u8fc7\u7a0b\u3002\u7559\u4f5c\u65e5\u540e\u67e5\u770b\u3002")),Object(l.b)("h2",{id:"\u7cfb\u7edf\u9009\u62e9"},"\u7cfb\u7edf\u9009\u62e9"),Object(l.b)("p",null,"\u5bf9\u4e8e\u8fd9\u53f0\u4e91\u4e3b\u673a\uff0c\u6211\u7684\u5b9a\u4f4d\u662f",Object(l.b)("strong",{parentName:"p"},"\u6298\u817e"),"\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u81ea\u5df1\u4e1a\u4f59\u65f6\u95f4\u5728\u4e0a\u9762\u5f00\u53d1\u4e00\u4e9b\u73a9\u5177\u6027\u8d28\u7684\u4e1c\u897f\uff0c\u5982\u679c\u505a\u5f97\u597d\uff0c\u4f5c\u4e3a\u4e00\u4e2a",Object(l.b)("inlineCode",{parentName:"p"},"side project"),"\u3002\u65e2\u7136\u4e0d\u662f\u4e13\u4e1a\u7684\u670d\u52a1\uff0c\u6240\u4ee5\u4e0d\u60f3\u5728\u73af\u5883\u914d\u7f6e\u4e0a\u9762\u6d6a\u8d39\u592a\u591a\u65f6\u95f4\u3002",Object(l.b)("inlineCode",{parentName:"p"},"ubuntu"),"\u7684\u4f18\u70b9\u5728\u4e8e\uff1a"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"\u6559\u7a0b\u6bd4\u8f83\u591a"),Object(l.b)("li",{parentName:"ol"},"\u6211\u4e2a\u4eba\u6bd4\u8f83\u719f\u6089\u3002")),Object(l.b)("p",null,"\u6240\u4ee5\u4e3b\u673a\u4e00\u5230\u624b\uff0c\u6211\u5c31\u5c06",Object(l.b)("inlineCode",{parentName:"p"},"centOS"),"\u91cd\u88c5\u4e3a",Object(l.b)("inlineCode",{parentName:"p"},"ubuntu"),"\u3002"),Object(l.b)("h2",{id:"\u65b0\u5efa\u8d26\u6237"},"\u65b0\u5efa\u8d26\u6237"),Object(l.b)("p",null,"\u7b2c\u4e00\u6b65\u662f\u5efa\u7acb\u4e00\u4e2a\u975e root \u7528\u6237\uff0c\u7528\u4ee5\u65e5\u5e38\u64cd\u4f5c\u3002"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# \u521b\u5efa\u7528\u6237\nsudo useradd [user-name]\n\n# \u4fee\u6539\u5bc6\u7801\nsudo passwd [user-name]\n\n# \u521b\u5efa\u7528\u6237\u6587\u4ef6\u5939\nsudo mkdir /home/[user-name]\n\n# \u4fee\u6539\u7528\u6237\u6587\u4ef6\u5939\u6240\u6709\u8005\nsudo chown [user-name] /home/[user-name]\n\n# \u5c06\u65b0\u521b\u5efa\u7684\u7528\u6237\u6dfb\u52a0\u5230sudo\u7ec4\u3002\u5176\u4e2d: a\u8868\u793a\u6dfb\u52a0\uff0cG\u6307\u5b9a\u7ec4\u540d\nsudo usermod -aG sudo [user-name]\n\n# \u67e5\u770b\u9ed8\u8ba4shell\nls -l /bin/sh\n\n# \u5728\u5f39\u51fa\u7684\u8e22\u5b9e\u51b5\u9009\u5426\uff0c\u5e72\u6389dash(\u5728\u914d\u7f6e\u65b0shell\u4e4b\u540e\uff0c\u53ef\u9009)\nsudo dpkg-reconfigure dash\n")),Object(l.b)("h2",{id:"zsh"},"zsh"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# \u67e5\u770b\u662f\u5426\u6709zsh\ncat /etc/shells\n\n# \u5b89\u88c5zsh\nsudo apt-get install zsh\n\n# \u4fee\u6539\u9ed8\u8ba4shell\u4e3azsh\nchsh -s /bin/zsh\n\n# \u5b89\u88c5git\nsudo apt-get install git\n\n# \u5b89\u88c5oh-my-zsh\nsudo wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | sh\n")),Object(l.b)("h2",{id:"nvm"},"nvm"),Object(l.b)("p",null,"\u6211\u4e3b\u8981\u60f3\u6298\u817e nodejs\u3001graphQL \u76f8\u5173\u5185\u5bb9\uff0c\u6240\u4ee5\u6700\u91cd\u8981\u7684\u73af\u5883\u5c31\u662f nodejs\u3002\u8fd9\u91cc\u901a\u8fc7 nvm \u7684\u65b9\u5f0f\u8fdb\u884c\u5b89\u88c5\u3002"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"sudo wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.31.4/install.sh | bash\nnvm install 10\n")),Object(l.b)("h2",{id:"nginx"},"Nginx"),Object(l.b)("p",null,"\u5982\u679c\u8bbf\u95ee github \u901f\u5ea6\u6162\uff0c\u53ef\u4ee5\u53bb",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"http://tengine.taobao.org/download_cn.html"}),"\u5b98\u7f51"),"\u4e0b\u8f7d"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# \u4e0b\u8f7d Tengine\uff1a\ngit clone https://github.com/alibaba/tengine.git\n\n# \u4f9d\u8d56\napt-get install libpcre3 libpcre3-dev\napt-get install zlib1g-dev\napt-get install openssl libssl-dev\n\n# \u7f16\u8bd1\u5b89\u88c5\uff0c\u8fdb\u5165\u4ee3\u7801\u76ee\u5f55\n./configure --with-http_v2_module\nmake\nsudo make install\n\n# \u8fd0\u884c\uff1a\n# Tengine \u914d\u7f6e\u4e0e nginx \u57fa\u672c\u4e00\u81f4\uff0c\u53ef\u6267\u884c\u7a0b\u5e8f\u4f4d\u4e8e /usr/local/nginx/sbin \u76ee\u5f55\u4e0b\u3002\n/usr/local/nginx/sbin/nginx -s start\n/usr/local/nginx/sbin/nginx -s reload\n/usr/local/nginx/sbin/nginx -s stop\n")),Object(l.b)("h2",{id:"mysql"},"MySQL"),Object(l.b)("p",null,"\u771f\u6b63\u8ba9\u6211\u628a\u8fc7\u7a0b\u8bb0\u5f55\u4e0b\u6765\u7684\u539f\u56e0\uff0c\u5c31\u662f\u56e0\u4e3a MySQL\u3002\u56e0\u4e3a\u5e73\u65f6\u6570\u636e\u5e93\u7528\u5f97\u5c11\uff0c\u6240\u4ee5\u4e0d\u719f\u6089\uff0c\u5b89\u88c5\u3001\u914d\u7f6e\u4e5f\u786e\u5b9e\u6bd4\u5176\u4ed6\u9ebb\u70e6\u4e00\u4e9b\u3002\u81f3\u4e8e\u4e3a\u4ec0\u4e48\u9009\u62e9 MySQL\uff0c\u53ef\u4ee5\u53c2\u89c1\u6211 Mac \u73af\u5883\u4e0b\u914d\u7f6e MySQL \u7684\u90a3\u7bc7 blog\u3002"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u5b89\u88c5\uff1a")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# \u53ef\u9009\u7248\u672c: mysql-server-5.7\nsudo apt-get install mysql-server\n\n# \u5b89\u88c5\u8fc7\u7a0b\u4f1a\u63d0\u793a\u8f93\u5165root\u7528\u6237\u7684\u5bc6\u7801\n# \u670d\u52a1\u542f\u52a8\u540e\u7aef\u53e3\u67e5\u8be2\nnetstat -anp | grep mysql\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u670d\u52a1\u7ba1\u7406")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# \u670d\u52a1\u72b6\u6001\nsudo service mysql status\n\n# \u542f\u52a8\nservice mysql start\n\n# \u505c\u6b62\nservice mysql stop\n\n# \u91cd\u542f\nservice mysql restart\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u51e0\u4e2a\u91cd\u8981\u76ee\u5f55\uff1a",Object(l.b)("ol",{parentName:"li"},Object(l.b)("li",{parentName:"ol"},"\u6570\u636e\u5e93\u76ee\u5f55\uff1a/var/lib/mysql/"),Object(l.b)("li",{parentName:"ol"},"\u914d\u7f6e\u6587\u4ef6\uff1a",Object(l.b)("ol",{parentName:"li"},Object(l.b)("li",{parentName:"ol"},"/usr/share/mysql\uff08\u547d\u4ee4\u53ca\u914d\u7f6e\u6587\u4ef6\uff09"),Object(l.b)("li",{parentName:"ol"},"/etc/mysql\uff08\u5982\uff1amy.cnf\uff09"))),Object(l.b)("li",{parentName:"ol"},"\u76f8\u5173\u547d\u4ee4\uff1a/usr/bin(mysqladmin mysqldump \u7b49\u547d\u4ee4) \u548c/usr/sbin"),Object(l.b)("li",{parentName:"ol"},"\u542f\u52a8\u811a\u672c\uff1a/etc/rc.d/init.d/\uff08\u542f\u52a8\u811a\u672c\u6587\u4ef6 mysql \u7684"))),Object(l.b)("li",{parentName:"ul"},"\u4fee\u6539\u9ed8\u8ba4\u7f16\u7801\u4e3a utf-8")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"})," # sql\u73af\u5883\u4e0b\uff0c\u67e5\u770b\u7f16\u7801\nshow variables like 'character%';\n\n# \u7f16\u8f91\u914d\u7f6e\u6587\u4ef6\nvi /etc/mysql/cdonf.d/mysql.cnf\n")),Object(l.b)("p",null,"\u7136\u540e\u8f93\u5165\u4ee5\u4e0b\u5185\u5bb9\uff0c\u4fdd\u5b58\uff0c\u91cd\u542f\u670d\u52a1\u5373\u53ef\u3002"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"[mysql]\ndefault-character-set=utf8\n[mysqld]\ncharacter-set-server=utf8\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u5378\u8f7d")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# \u9996\u5148\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5220\u9664MySQL\u670d\u52a1\u5668\uff1a\nsudo apt-get remove mysql-server\n\n# \u7136\u540e\uff0c\u5220\u9664\u968fMySQL\u670d\u52a1\u5668\u81ea\u52a8\u5b89\u88c5\u7684\u4efb\u4f55\u5176\u4ed6\u8f6f\u4ef6\uff1a\nsudo apt-get autoremove\n\n# \u5378\u8f7d\u5176\u4ed6\u7ec4\u4ef6\uff1a\nsudo apt-get remove <<package-name>>\n\n# \u67e5\u770b\u4eceMySQL APT\u5b58\u50a8\u5e93\u5b89\u88c5\u7684\u8f6f\u4ef6\u5305\u5217\u8868\uff1a\ndpkg -l | grep mysql | grep ii\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u5141\u8bb8\u8fdc\u7a0b\u8bbf\u95ee",Object(l.b)("br",null),"\u5373\u4f7f\u53ea\u662f\u81ea\u5df1\u6298\u817e\u73a9\u7684\u670d\u52a1\u5668\uff0c\u4e5f\u4e0d\u8be5\u5141\u8bb8`root`\u7528\u6237\u8fdc\u7a0b\u8bbf\u95ee\u6570\u636e\u5e93\u3002\u6240\u4ee5\u6b64\u5904\u6211\u4eec\u5148\u5efa\u7acb\u7528\u6237\uff0c\u7136\u540e\u6388\u4e88\u7ed9\u7528\u6237\u4e00\u4e2a database \u7684\u6743\u9650\uff0c\u7136\u540e\u518d\u5f00\u653e\u8fdc\u7a0b\u8bbf\u95ee\u3002")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# \u7ed9localhost\u521b\u5efa\u7528\u6237nodejs\uff0c\u5e76\u5c06\u5bc6\u7801\u8bbe\u7f6e\u4e3anodejs\u3002\n# \u6b64\u5904 % \u4ee3\u8868\u4efb\u610fIP\u5730\u5740\u3002\u5982\u679c\u60f3\u9650\u5236\uff0c\u5219\u53ef\u8f93\u5165\u4efb\u610fip\u6216\u8005localhost\nCREATE USER 'nodejs'@'%' identified by 'nodejs';\n\n# \u521b\u5efa\u65b0\u7684\u6570\u636e\u5e93\uff0c\u5e76\u5c06\u6743\u9650\u5168\u90e8\u8d4b\u4e88nodejs\u7528\u6237\nCREATE DATABASE nodejs;\nGRANT ALL PRIVILEGES ON nodejs.* TO 'nodejs'@'%' IDENTIFIED BY 'nodejs';\n\n# \u6700\u540e\u5c06\u7528\u6237\u6743\u9650\u4fe1\u606f\u4ece\u6570\u636e\u8868\u540c\u6b65\u5230\u5185\u5b58\uff08\u6b64\u547d\u4ee4\u53ef\u4ee5\u907f\u514d\u91cd\u542fmysql\u670d\u52a1\uff09\nFLUSH PRIVILEGES;\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u63a5\u4e0b\u6765\u9700\u8981\u4fee\u6539\u4e91\u4e3b\u673a\u4e0a\u7684 mysql \u914d\u7f6e\uff0c\u5141\u8bb8\u8fdc\u7a0b\u8bbf\u95ee")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"vi /etc/mysql/mysql.conf.d/mysqld.cnf\n\n# \u6ce8\u91ca\u6389\u8be5\u884c\uff1a\nbind-address = 127.0.0.1\n\n# \u91cd\u542f\u670d\u52a1\nservice mysql restart\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u6700\u540e\u4e00\u6b65\u662f\u4fee\u6539\u817e\u4e91\u8baf\u63a7\u5236\u53f0\u7684\u6743\u9650",Object(l.b)("br",{parentName:"li"}),"\u63a7\u5236\u53f0 -> \u5b89\u5168\u7ec4 -> \u9009\u62e9\u5e0c\u671b\u4fee\u6539\u7684\u5b89\u5168\u7ec4\u6700\u540e\u7684\u201c\u64cd\u4f5c -> \u4fee\u6539\u89c4\u5219\u201d -> \u6dfb\u52a0\u89c4\u5219 ->",Object(l.b)("br",{parentName:"li"}),"\u7c7b\u578b\uff1a\u81ea\u5b9a\u4e49\uff1b\u6765\u6e90\uff1a0.0.0.0/0\uff1b\u534f\u8bae\u7aef\u53e3\uff1aTCP:3306\uff1b\u7b56\u7565\uff1a\u5141\u8bb8\uff1b\u5907\u6ce8\uff1amysql\u3002",Object(l.b)("br",{parentName:"li"}),"\u4fdd\u5b58\u5373\u53ef\u3002\u6b64\u65f6\u4fbf\u53ef\u4ee5\u4f7f\u7528\u56fe\u5f62\u5316\u5de5\u5177\u8fdc\u7a0b\u8fde\u63a5\u6570\u636e\u5e93\u3002")))}u.isMDXComponent=!0},197:function(e,n,t){"use strict";t.d(n,"a",(function(){return i})),t.d(n,"b",(function(){return d}));var a=t(0),r=t.n(a);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=r.a.createContext({}),u=function(e){var n=r.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):b(b({},n),e)),t},i=function(e){var n=u(e.components);return r.a.createElement(o.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),i=u(t),m=a,d=i["".concat(s,".").concat(m)]||i[m]||p[m]||l;return t?r.a.createElement(d,b(b({ref:n},o),{},{components:t})):r.a.createElement(d,b({ref:n},o))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,s=new Array(l);s[0]=m;var b={};for(var c in n)hasOwnProperty.call(n,c)&&(b[c]=n[c]);b.originalType=e,b.mdxType="string"==typeof e?e:a,s[1]=b;for(var o=2;o<l;o++)s[o]=t[o];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);