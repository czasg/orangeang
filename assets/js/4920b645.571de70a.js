"use strict";(self.webpackChunkorange_ang=self.webpackChunkorange_ang||[]).push([[2541],{7162:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>s,contentTitle:()=>r,default:()=>g,frontMatter:()=>t,metadata:()=>a,toc:()=>c});var l=o(4848),i=o(8453);const t={title:"\u5feb\u901f\u5f00\u59cb",hide_title:!1,hide_table_of_contents:!1,slug:"/golang/quick-start"},r=void 0,a={id:"\u5feb\u901f\u5f00\u59cb/index",title:"\u5feb\u901f\u5f00\u59cb",description:"Go \u7a0b\u5e8f\u53ef\u4ee5\u901a\u8fc7 go run \u547d\u4ee4\u76f4\u63a5\u8fd0\u884c\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7 go build \u547d\u4ee4\u7f16\u8bd1\u6210\u53ef\u6267\u884c\u6587\u4ef6\u540e\u518d\u8fd0\u884c\u3002",source:"@site/docs/golang/30.\u5feb\u901f\u5f00\u59cb/index.mdx",sourceDirName:"30.\u5feb\u901f\u5f00\u59cb",slug:"/golang/quick-start",permalink:"/orange-ang/docs/golang/golang/quick-start",draft:!1,unlisted:!1,editUrl:"https://github.com/czasg/orange-ang/edit/main/docs/golang/30.\u5feb\u901f\u5f00\u59cb/index.mdx",tags:[],version:"current",frontMatter:{title:"\u5feb\u901f\u5f00\u59cb",hide_title:!1,hide_table_of_contents:!1,slug:"/golang/quick-start"},sidebar:"tutorialSidebar",previous:{title:"\u524d\u8a00",permalink:"/orange-ang/docs/golang/"},next:{title:"Go\u57fa\u7840",permalink:"/orange-ang/docs/golang/go\u57fa\u7840/basics"}},s={},c=[{value:"\u7b2c\u4e00\u4e2aGo\u7a0b\u5e8f",id:"\u7b2c\u4e00\u4e2ago\u7a0b\u5e8f",level:2},{value:"\u521d\u59cb\u5316\u76ee\u5f55",id:"\u521d\u59cb\u5316\u76ee\u5f55",level:3},{value:"\u6e90\u4ee3\u7801",id:"\u6e90\u4ee3\u7801",level:3},{value:"\u8fd0\u884c\u7a0b\u5e8f",id:"\u8fd0\u884c\u7a0b\u5e8f",level:3}];function d(n){const e={admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.R)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(e.p,{children:["Go \u7a0b\u5e8f\u53ef\u4ee5\u901a\u8fc7 ",(0,l.jsx)(e.code,{children:"go run"})," \u547d\u4ee4\u76f4\u63a5\u8fd0\u884c\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,l.jsx)(e.code,{children:"go build"})," \u547d\u4ee4\u7f16\u8bd1\u6210\u53ef\u6267\u884c\u6587\u4ef6\u540e\u518d\u8fd0\u884c\u3002"]}),"\n",(0,l.jsxs)(e.p,{children:["\u5728\u4e00\u822c\u7684\u5f00\u53d1\u73af\u5883\u4e2d\uff0c\u6211\u4eec\u901a\u5e38\u4f7f\u7528 ",(0,l.jsx)(e.code,{children:"go run"})," \u5feb\u901f\u542f\u52a8\u670d\u52a1\uff0c\u8fd9\u6837\u53ef\u4ee5\u76f4\u63a5\u5728\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u8fdb\u884c\u8c03\u8bd5\u548c\u6d4b\u8bd5\u3002"]}),"\n",(0,l.jsx)(e.p,{children:"\u800c\u5728\u751f\u4ea7\u73af\u5883\u4e2d\uff0c\u6211\u4eec\u5219\u901a\u8fc7\u5c06\u6e90\u7801\u7f16\u8bd1\u6210\u53ef\u6267\u884c\u6587\u4ef6\uff0c\u5e76\u5c06\u53ef\u6267\u884c\u6587\u4ef6\u90e8\u7f72\u5230\u751f\u4ea7\u73af\u5883\u4e2d\u8fd0\u884c\uff0c\u8fd9\u6837\u53ef\u4ee5\u63d0\u9ad8\u7a0b\u5e8f\u7684\u6267\u884c\u6548\u7387\u548c\u5b89\u5168\u6027\u3002"}),"\n",(0,l.jsx)(e.h2,{id:"\u7b2c\u4e00\u4e2ago\u7a0b\u5e8f",children:"\u7b2c\u4e00\u4e2aGo\u7a0b\u5e8f"}),"\n",(0,l.jsx)(e.p,{children:"\u7b2c\u4e00\u4e2aGo\u7a0b\u5e8f\uff0c\u90a3\u80af\u5b9a\u8981\u7ed9\u5230\u6211\u4eec\u7684 Hello, World!~"}),"\n",(0,l.jsx)(e.admonition,{title:"\u524d\u63d0\u51c6\u5907",type:"note",children:(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsx)(e.li,{children:"linux\u73af\u5883"}),"\n",(0,l.jsx)(e.li,{children:"go1.20.0+"}),"\n"]})}),"\n",(0,l.jsx)(e.h3,{id:"\u521d\u59cb\u5316\u76ee\u5f55",children:"\u521d\u59cb\u5316\u76ee\u5f55"}),"\n",(0,l.jsx)(e.p,{children:"\u9996\u5148\uff0c\u6211\u4eec\u5148\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a go-learn \u7684\u76ee\u5f55\u3002\u5728\u8be5\u76ee\u5f55\u4e0b\uff0c\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a hello \u7684\u5b50\u76ee\u5f55\u3002\u8fdb\u5165 hello \u76ee\u5f55\u3002"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:">>> mkdir -p /go-learn/hello\n\n>>> cd /go-learn/hello\n"})}),"\n",(0,l.jsx)(e.h3,{id:"\u6e90\u4ee3\u7801",children:"\u6e90\u4ee3\u7801"}),"\n",(0,l.jsx)(e.p,{children:"\u5728 hello \u76ee\u5f55\u4e0b\u521b\u5efa\u4e00\u4e2a main.go \u6587\u4ef6\uff0c\u5e76\u6253\u5f00\u7f16\u8f91\u5668\uff0c\u5199\u5165\u4ee5\u4e0b\u6e90\u7801\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:">>> vim main.go\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-go",metastring:'title="/go-learn/hello/main.go" showLineNumbers',children:'package main\n\nimport "fmt"\n\nfunc main() {\n\tfmt.Println("Hello, Golang")\n}\n'})}),"\n",(0,l.jsxs)(e.p,{children:["\u5728 Go \u4e2d\uff0c",(0,l.jsx)(e.code,{children:"package main"})," \u8868\u793a\u8fd9\u4e2a\u6587\u4ef6\u5c5e\u4e8e main \u5305\uff0c\u800c ",(0,l.jsx)(e.code,{children:"func main()"})," \u662f\u7a0b\u5e8f\u7684\u5165\u53e3\u51fd\u6570\u3002\u5f53\u7a0b\u5e8f\u542f\u52a8\u65f6\uff0c\u4f1a\u81ea\u52a8\u6267\u884c main() \u51fd\u6570\u4e2d\u7684\u4ee3\u7801\u3002"]}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"fmt"})," \u662f Go \u6807\u51c6\u5e93\u4e2d\u7684\u4e00\u4e2a\u5305\uff0c\u63d0\u4f9b\u4e86\u683c\u5f0f\u5316 I/O \u548c\u5b57\u7b26\u4e32\u5904\u7406\u7684\u529f\u80fd\u3002"]}),"\n",(0,l.jsx)(e.p,{children:'\u5728\u8fd9\u91cc\uff0c\u6211\u4eec\u4f7f\u7528\u5b83\u6765\u8f93\u51fa "Hello, Golang" \u5230\u63a7\u5236\u53f0\u3002'}),"\n",(0,l.jsx)(e.h3,{id:"\u8fd0\u884c\u7a0b\u5e8f",children:"\u8fd0\u884c\u7a0b\u5e8f"}),"\n",(0,l.jsxs)(e.p,{children:["\u6267\u884c ",(0,l.jsx)(e.code,{children:"go run main.go"})," \u547d\u4ee4\u6267\u884c\u7a0b\u5e8f\u3002\u81f3\u6b64\uff0c\u6211\u4eec\u7684\u7b2c\u4e00\u4e2a Hello Go \u7a0b\u5e8f\u5c31\u5b8c\u6210\u4e86\u3002"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:">>> pwd\n/go-learn/hello\n\n>>> ls\nmain.go\n\n>>> go run main.go\nHello, Golang\n"})})]})}function g(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(d,{...n})}):d(n)}},8453:(n,e,o)=>{o.d(e,{R:()=>r,x:()=>a});var l=o(6540);const i={},t=l.createContext(i);function r(n){const e=l.useContext(t);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),l.createElement(t.Provider,{value:e},n.children)}}}]);