"use strict";(self.webpackChunkorange_ang=self.webpackChunkorange_ang||[]).push([[2541],{7162:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>h});var t=r(4848),a=r(8453),l=(r(3498),r(4444)),o=r(1470),s=r(9365);const i={title:"\u5feb\u901f\u5f00\u59cb",hide_title:!1,hide_table_of_contents:!1,slug:"/quick-start"},c=void 0,u={id:"\u5feb\u901f\u5f00\u59cb/index",title:"\u5feb\u901f\u5f00\u59cb",description:"Go \u7a0b\u5e8f\u53ef\u4ee5\u901a\u8fc7 go run \u547d\u4ee4\u76f4\u63a5\u8fd0\u884c\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7 go build \u547d\u4ee4\u7f16\u8bd1\u6210\u53ef\u6267\u884c\u6587\u4ef6\u540e\u518d\u8fd0\u884c\u3002",source:"@site/docs/golang/30.\u5feb\u901f\u5f00\u59cb/index.mdx",sourceDirName:"30.\u5feb\u901f\u5f00\u59cb",slug:"/quick-start",permalink:"/orange-ang/docs/golang/quick-start",draft:!1,unlisted:!1,editUrl:"https://github.com/czasg/orange-ang/edit/main/docs/golang/30.\u5feb\u901f\u5f00\u59cb/index.mdx",tags:[],version:"current",frontMatter:{title:"\u5feb\u901f\u5f00\u59cb",hide_title:!1,hide_table_of_contents:!1,slug:"/quick-start"},sidebar:"tutorialSidebar",previous:{title:"\u524d\u8a00",permalink:"/orange-ang/docs/golang/"},next:{title:"Go\u57fa\u7840",permalink:"/orange-ang/docs/golang/go\u57fa\u7840/basics"}},d={},h=[{value:"1.\u7b2c\u4e00\u4e2aGo\u7a0b\u5e8f",id:"1\u7b2c\u4e00\u4e2ago\u7a0b\u5e8f",level:2},{value:"1.1.\u521d\u59cb\u5316\u76ee\u5f55",id:"11\u521d\u59cb\u5316\u76ee\u5f55",level:3},{value:"1.2.\u6e90\u4ee3\u7801",id:"12\u6e90\u4ee3\u7801",level:3},{value:"1.3.\u8fd0\u884c\u7a0b\u5e8f",id:"13\u8fd0\u884c\u7a0b\u5e8f",level:3}];function g(e){const n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Go \u7a0b\u5e8f\u53ef\u4ee5\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"go run"})," \u547d\u4ee4\u76f4\u63a5\u8fd0\u884c\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"go build"})," \u547d\u4ee4\u7f16\u8bd1\u6210\u53ef\u6267\u884c\u6587\u4ef6\u540e\u518d\u8fd0\u884c\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u5728\u4e00\u822c\u7684\u5f00\u53d1\u73af\u5883\u4e2d\uff0c\u6211\u4eec\u901a\u5e38\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"go run"})," \u5feb\u901f\u542f\u52a8\u670d\u52a1\uff0c\u8fd9\u6837\u53ef\u4ee5\u76f4\u63a5\u5728\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u8fdb\u884c\u8c03\u8bd5\u548c\u6d4b\u8bd5\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u800c\u5728\u751f\u4ea7\u73af\u5883\u4e2d\uff0c\u6211\u4eec\u5219\u901a\u8fc7\u5c06\u6e90\u7801\u7f16\u8bd1\u6210\u53ef\u6267\u884c\u6587\u4ef6\uff0c\u5e76\u5c06\u53ef\u6267\u884c\u6587\u4ef6\u90e8\u7f72\u5230\u751f\u4ea7\u73af\u5883\u4e2d\u8fd0\u884c\uff0c\u8fd9\u6837\u53ef\u4ee5\u63d0\u9ad8\u7a0b\u5e8f\u7684\u6267\u884c\u6548\u7387\u548c\u5b89\u5168\u6027\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"1\u7b2c\u4e00\u4e2ago\u7a0b\u5e8f",children:"1.\u7b2c\u4e00\u4e2aGo\u7a0b\u5e8f"}),"\n",(0,t.jsx)(n.p,{children:"\u7b2c\u4e00\u4e2aGo\u7a0b\u5e8f\uff0c\u90a3\u80af\u5b9a\u8981\u7ed9\u5230\u6211\u4eec\u7684 Hello, World!~"}),"\n",(0,t.jsx)(n.admonition,{title:"\u524d\u63d0\u51c6\u5907",type:"note",children:(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"linux\u73af\u5883"}),"\n",(0,t.jsx)(n.li,{children:"go1.20.0+"}),"\n"]})}),"\n",(0,t.jsx)(n.h3,{id:"11\u521d\u59cb\u5316\u76ee\u5f55",children:"1.1.\u521d\u59cb\u5316\u76ee\u5f55"}),"\n",(0,t.jsx)(n.p,{children:"\u9996\u5148\uff0c\u6211\u4eec\u5148\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a go-learn \u7684\u76ee\u5f55\u3002\u5728\u8be5\u76ee\u5f55\u4e0b\uff0c\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a hello \u7684\u5b50\u76ee\u5f55\u3002\u8fdb\u5165 hello \u76ee\u5f55\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:">>> mkdir -p /go-learn/hello\n\n>>> cd /go-learn/hello\n"})}),"\n",(0,t.jsx)(n.h3,{id:"12\u6e90\u4ee3\u7801",children:"1.2.\u6e90\u4ee3\u7801"}),"\n",(0,t.jsx)(n.p,{children:"\u5728 hello \u76ee\u5f55\u4e0b\u521b\u5efa\u4e00\u4e2a main.go \u6587\u4ef6\uff0c\u5e76\u6253\u5f00\u7f16\u8f91\u5668\uff0c\u5199\u5165\u4ee5\u4e0b\u6e90\u7801\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:">>> vim main.go\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",metastring:'title="/go-learn/hello/main.go" showLineNumbers',children:'package main\n\nimport "fmt"\n\nfunc main() {\n    fmt.Println("Hello, Golang")\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u4e0a\u8ff0\u6e90\u7801\u4e2d\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"package main"})," \u8868\u793a\u8fd9\u4e2a\u6587\u4ef6\u5c5e\u4e8e main \u5305\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"func main()"})," \u662f\u7a0b\u5e8f\u7684\u5165\u53e3\u51fd\u6570\u3002\u5f53\u7a0b\u5e8f\u542f\u52a8\u65f6\uff0c\u4f1a\u81ea\u52a8\u6267\u884c",(0,t.jsx)(n.code,{children:"package main"}),"\u4e0b\u7684",(0,t.jsx)(n.code,{children:"main()"}),"\u51fd\u6570\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"fmt"}),' \u662f Go \u6807\u51c6\u5e93\u4e2d\u7684\u4e00\u4e2a\u5305\uff0c\u63d0\u4f9b\u4e86\u683c\u5f0f\u5316 I/O \u548c\u5b57\u7b26\u4e32\u5904\u7406\u7684\u529f\u80fd\u3002\u5728\u8fd9\u91cc\uff0c\u6211\u4eec\u4f7f\u7528\u5b83\u6765\u8f93\u51fa "Hello, Golang" \u5230\u63a7\u5236\u53f0\u3002']}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"13\u8fd0\u884c\u7a0b\u5e8f",children:"1.3.\u8fd0\u884c\u7a0b\u5e8f"}),"\n",(0,t.jsx)(n.p,{children:"\u5f53\u5728 Go \u8bed\u8a00\u4e2d\u8fd0\u884c\u7a0b\u5e8f\u65f6\uff0c\u6709\u4e24\u79cd\u4e3b\u8981\u7684\u65b9\u5f0f\u53ef\u4f9b\u9009\u62e9\u3002"}),"\n",(0,t.jsx)(l.A,{children:(0,t.jsxs)(o.A,{children:[(0,t.jsx)(s.A,{value:"apple",label:"\u76f4\u63a5\u8fd0\u884c",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",metastring:'title="go run"',children:">>> pwd\n/go-learn/hello\n\n>>> ls\nmain.go\n\n>>> go run main.go\nHello, Golang\n"})})}),(0,t.jsx)(s.A,{value:"orange",label:"\u7f16\u8bd1\u540e\u8fd0\u884c",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",metastring:'title="go build"',children:">>> pwd\n/go-learn/hello\n\n>>> ls\nmain.go\n\n>>> go build -o hello main.go\n>>> ./hello\nHello, Golang\n"})})})]})}),"\n",(0,t.jsx)(n.p,{children:"\u81f3\u6b64\uff0c\u6211\u4eec\u7684\u7b2c\u4e00\u4e2a Hello Go \u7a0b\u5e8f\u5c31\u5b8c\u6210\u4e86\u3002"})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(g,{...e})}):g(e)}},9365:(e,n,r)=>{r.d(n,{A:()=>o});r(6540);var t=r(4164);const a={tabItem:"tabItem_Ymn6"};var l=r(4848);function o(e){let{children:n,hidden:r,className:o}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,o),hidden:r,children:n})}},1470:(e,n,r)=>{r.d(n,{A:()=>y});var t=r(6540),a=r(4164),l=r(3104),o=r(6347),s=r(205),i=r(7485),c=r(1682),u=r(9466);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:a}}=e;return{value:n,label:r,attributes:t,default:a}}))}(r);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function g(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:r}=e;const a=(0,o.W6)(),l=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,i.aZ)(l),(0,t.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(a.location.search);n.set(l,e),a.replace({...a.location,search:n.toString()})}),[l,a])]}function b(e){const{defaultValue:n,queryString:r=!1,groupId:a}=e,l=h(e),[o,i]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!g({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:l}))),[c,d]=m({queryString:r,groupId:a}),[b,p]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,l]=(0,u.Dv)(r);return[a,(0,t.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:a}),f=(()=>{const e=c??b;return g({value:e,tabValues:l})?e:null})();(0,s.A)((()=>{f&&i(f)}),[f]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!g({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),p(e)}),[d,p,l]),tabValues:l}}var p=r(2303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=r(4848);function j(e){let{className:n,block:r,selectedValue:t,selectValue:o,tabValues:s}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),u=e=>{const n=e.currentTarget,r=i.indexOf(n),a=s[r].value;a!==t&&(c(n),o(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;n=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;n=i[r]??i[i.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},n),children:s.map((e=>{let{value:n,label:r,attributes:l}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>i.push(e),onKeyDown:d,onClick:u,...l,className:(0,a.A)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function v(e){let{lazy:n,children:r,selectedValue:a}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function w(e){const n=b(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",f.tabList),children:[(0,x.jsx)(j,{...e,...n}),(0,x.jsx)(v,{...e,...n})]})}function y(e){const n=(0,p.A)();return(0,x.jsx)(w,{...e,children:d(e.children)},String(n))}},4444:(e,n,r)=>{r.d(n,{A:()=>o});r(6540);var t=r(4164);const a={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",buttons:"buttons_uHc7",right:"right_oyze",browserWindowAddressBar:"browserWindowAddressBar_Pd8y",dot:"dot_giz1",browserWindowMenuIcon:"browserWindowMenuIcon_Vhuh",bar:"bar_rrRL",browserWindowBody:"browserWindowBody_Idgs"};var l=r(4848);function o(e){let{children:n,minHeight:r,url:o="http://localhost:3000",style:s,bodyStyle:i}=e;return(0,l.jsxs)("div",{className:a.browserWindow,style:{...s,minHeight:r},children:[(0,l.jsxs)("div",{className:a.browserWindowHeader,children:[(0,l.jsxs)("div",{className:a.buttons,children:[(0,l.jsx)("span",{className:a.dot,style:{background:"#f25f58"}}),(0,l.jsx)("span",{className:a.dot,style:{background:"#fbbe3c"}}),(0,l.jsx)("span",{className:a.dot,style:{background:"#58cb42"}})]}),(0,l.jsx)("div",{className:(0,t.A)(a.browserWindowAddressBar,"text--truncate"),children:o}),(0,l.jsx)("div",{className:a.browserWindowMenuIcon,children:(0,l.jsxs)("div",{children:[(0,l.jsx)("span",{className:a.bar}),(0,l.jsx)("span",{className:a.bar}),(0,l.jsx)("span",{className:a.bar})]})})]}),(0,l.jsx)("div",{className:a.browserWindowBody,style:i,children:n})]})}},3498:(e,n,r)=>{r.d(n,{A:()=>o});var t=r(6540);const a={"image-bg":"image-bg_e0Zz",image:"image_FkF6",fullscreen:"fullscreen_Hs_n"};var l=r(4848);const o=e=>{let{src:n}=e;const r=(0,t.useRef)(null),[o,s]=(0,t.useState)(!1),i=()=>s(!o);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:o?`${a.imageBg} ${a.fullscreen}`:`${a.imageBg}`,onWheel:e=>{o&&i()},onClick:i}),(0,l.jsx)("img",{src:n,className:a.image,style:o?{transform:(()=>{if(r.current&&o){const e=r.current.getBoundingClientRect(),n=window.innerWidth/2-(e.left+e.right)/2,t=window.innerHeight/2-(e.top+e.bottom)/2,a=window.innerWidth/e.width,l=window.innerHeight/e.height;return`translate(${n}px, ${t}px) scale(${Math.min(a,l)-.1})`}return"none"})(),cursor:"zoom-out",zIndex:"9999"}:{},onClick:i,ref:r,alt:"Image"})]})}},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>s});var t=r(6540);const a={},l=t.createContext(a);function o(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);