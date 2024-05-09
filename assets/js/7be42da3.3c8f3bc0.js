"use strict";(self.webpackChunkorange_ang=self.webpackChunkorange_ang||[]).push([[7269],{4662:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var o=t(4848),r=t(8453);const s={title:"\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b",hide_title:!1,hide_table_of_contents:!1,slug:"oop"},i=void 0,c={id:"\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b/index",title:"\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b",description:"\u5728\u8ba1\u7b97\u673a\u7f16\u7a0b\u4e2d\uff0c\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b\u662f\u4e00\u79cd\u8f6f\u4ef6\u8bbe\u8ba1\u98ce\u683c\uff0c\u901a\u8fc7\u5c06\u7a0b\u5e8f\u4e2d\u7684\u5b9e\u4f53\u548c\u73b0\u5b9e\u4e16\u754c\u4e2d\u7684\u5bf9\u8c61\u5173\u8054\u8d77\u6765\uff0c\u4ece\u800c\u63d0\u9ad8\u7a0b\u5e8f\u7684\u53ef\u8bfb\u6027\u548c\u53ef\u7406\u89e3\u6027\u3002\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b\u7684\u4e3b\u8981\u4f18\u70b9\u4e4b\u4e00\u662f\u5b83\u53ef\u4ee5\u5e2e\u52a9\u89e3\u8026\u6a21\u5757\u5bf9\u8c61\uff0c\u5e76\u63d0\u5347\u4ee3\u7801\u7684\u53ef\u590d\u7528\u6027\u3002",source:"@site/docs/golang/60.\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b/index.mdx",sourceDirName:"60.\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b",slug:"/\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b/oop",permalink:"/orange-ang/docs/golang/\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b/oop",draft:!1,unlisted:!1,editUrl:"https://github.com/czasg/orange-ang/edit/main/docs/golang/60.\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b/index.mdx",tags:[],version:"current",frontMatter:{title:"\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b",hide_title:!1,hide_table_of_contents:!1,slug:"oop"},sidebar:"tutorialSidebar",previous:{title:"\u51fd\u6570",permalink:"/orange-ang/docs/golang/\u51fd\u6570/function"},next:{title:"interface",permalink:"/orange-ang/docs/golang/basics/interface"}},a={},l=[{value:"\u7ed3\u6784\u4f53",id:"\u7ed3\u6784\u4f53",level:2}];function d(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"\u5728\u8ba1\u7b97\u673a\u7f16\u7a0b\u4e2d\uff0c\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b\u662f\u4e00\u79cd\u8f6f\u4ef6\u8bbe\u8ba1\u98ce\u683c\uff0c\u901a\u8fc7\u5c06\u7a0b\u5e8f\u4e2d\u7684\u5b9e\u4f53\u548c\u73b0\u5b9e\u4e16\u754c\u4e2d\u7684\u5bf9\u8c61\u5173\u8054\u8d77\u6765\uff0c\u4ece\u800c\u63d0\u9ad8\u7a0b\u5e8f\u7684\u53ef\u8bfb\u6027\u548c\u53ef\u7406\u89e3\u6027\u3002\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b\u7684\u4e3b\u8981\u4f18\u70b9\u4e4b\u4e00\u662f\u5b83\u53ef\u4ee5\u5e2e\u52a9\u89e3\u8026\u6a21\u5757\u5bf9\u8c61\uff0c\u5e76\u63d0\u5347\u4ee3\u7801\u7684\u53ef\u590d\u7528\u6027\u3002"}),"\n",(0,o.jsx)(n.p,{children:"\u4f46\u53ef\u60dc\u7684\u662f\uff0c\u5728 Go \u8bed\u8a00\u4e2d\uff0c\u5e76\u6ca1\u6709\u4e25\u683c\u610f\u4e49\u4e0a\u7684\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b\u3002\u76f8\u53cd\uff0cGo \u91c7\u7528\u4e86\u7ed3\u6784\u4f53\u548c\u9762\u5411\u63a5\u53e3\u7684\u7f16\u7a0b\u98ce\u683c\u3002"}),"\n",(0,o.jsx)(n.p,{children:"\u901a\u8fc7\u7ed3\u6784\u4f53\uff0c\u53ef\u4ee5\u5b9a\u4e49\u5177\u6709\u5b57\u6bb5\u548c\u65b9\u6cd5\u7684\u81ea\u5b9a\u4e49\u7c7b\u578b\uff0c\u4ece\u800c\u6a21\u62df\u9762\u5411\u5bf9\u8c61\u7684\u6570\u636e\u7ed3\u6784\u3002"}),"\n",(0,o.jsx)(n.p,{children:"\u800c\u901a\u8fc7\u63a5\u53e3\uff0c\u53ef\u4ee5\u5b9a\u4e49\u4e00\u7ec4\u65b9\u6cd5\u96c6\u5408\uff0c\u4f7f\u5f97\u4e0d\u540c\u7c7b\u578b\u7684\u5bf9\u8c61\u53ef\u4ee5\u5171\u4eab\u76f8\u540c\u7684\u884c\u4e3a\u3002"}),"\n",(0,o.jsx)(n.p,{children:"\u5c3d\u7ba1 Go \u8bed\u8a00\u6ca1\u6709\u4f20\u7edf\u610f\u4e49\u4e0a\u7684\u7c7b\u548c\u7ee7\u627f\u7684\u6982\u5ff5\uff0c\u4f46\u5b83\u4ecd\u7136\u53ef\u4ee5\u901a\u8fc7\u7ed3\u6784\u4f53\u548c\u63a5\u53e3\u6765\u5b9e\u73b0\u9762\u5411\u5bf9\u8c61\u7684\u8bbe\u8ba1\u601d\u60f3\u3002\u901a\u8fc7\u5408\u7406\u5730\u4f7f\u7528\u7ed3\u6784\u4f53\u548c\u63a5\u53e3\uff0c\u53ef\u4ee5\u5728 Go \u4e2d\u5b9e\u73b0\u9ad8\u6548\u3001\u7075\u6d3b\u4e14\u6613\u4e8e\u7ef4\u62a4\u7684\u4ee3\u7801\u3002"}),"\n",(0,o.jsx)(n.h2,{id:"\u7ed3\u6784\u4f53",children:"\u7ed3\u6784\u4f53"}),"\n",(0,o.jsxs)(n.p,{children:["\u5728 Go \u4e2d\uff0c\u53ef\u4ee5\u901a\u8fc7",(0,o.jsx)(n.code,{children:"type struct"}),"\u5b9a\u4e49\u7ed3\u6784\u4f53\uff0c\u6bcf\u4e00\u4e2a\u7ed3\u6784\u4f53\u90fd\u53ef\u4ee5\u62e5\u6709\u81ea\u5df1\u7684\u5c5e\u6027\u548c\u65b9\u6cd5\u3002\u4ece\u800c\u5b9e\u73b0\u7c7b\u4f3c\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b\u7684\u98ce\u683c\u3002"]}),"\n",(0,o.jsx)(n.p,{children:"\u6211\u4eec\u5148\u6765\u770b\u4e00\u4e2a\u5b8c\u6574\u7684\u793a\u4f8b\u3002"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:"type Human struct {\n    Name string\n    Age  string\n}\n\nfunc(h *Human)\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var o=t(6540);const r={},s=o.createContext(r);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);