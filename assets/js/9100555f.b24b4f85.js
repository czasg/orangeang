"use strict";(self.webpackChunkorange_ang=self.webpackChunkorange_ang||[]).push([[7842],{1146:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var t=r(4848),s=r(8453);r(3498),r(4444),r(1470),r(9365);const a={title:"\u51fd\u6570\u57fa\u7840",slug:"/basics/func"},l=void 0,o={id:"go\u57fa\u7840/\u51fd\u6570\u57fa\u7840",title:"\u51fd\u6570\u57fa\u7840",description:"\u5728\u8ba1\u7b97\u673a\u7f16\u7a0b\u4e2d\uff0c\u51fd\u6570\u662f\u4ee3\u7801\u903b\u8f91\u5757\u7684\u5c01\u88c5\uff0c\u5b83\u5728\u4e00\u5b9a\u7a0b\u5ea6\u4e0a\u5b9e\u73b0\u4e86\u4ee3\u7801\u903b\u8f91\u7684\u590d\u7528\u4e0e\u89e3\u8026\u3002",source:"@site/docs/golang/40.go\u57fa\u7840/5.\u51fd\u6570\u57fa\u7840.mdx",sourceDirName:"40.go\u57fa\u7840",slug:"/basics/func",permalink:"/orange-ang/docs/golang/basics/func",draft:!1,unlisted:!1,editUrl:"https://github.com/czasg/orange-ang/edit/main/docs/golang/40.go\u57fa\u7840/5.\u51fd\u6570\u57fa\u7840.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"\u51fd\u6570\u57fa\u7840",slug:"/basics/func"},sidebar:"tutorialSidebar",previous:{title:"\u53d8\u91cf\u4e0e\u57fa\u7840\u7c7b\u578b",permalink:"/orange-ang/docs/golang/basics/variable-and-data-type"},next:{title:"\u5207\u7247",permalink:"/orange-ang/docs/golang/basics/slice"}},i={},c=[{value:"\u51fd\u6570\u53c2\u6570",id:"\u51fd\u6570\u53c2\u6570",level:2},{value:"main\u51fd\u6570",id:"main\u51fd\u6570",level:2},{value:"init\u51fd\u6570",id:"init\u51fd\u6570",level:2}];function u(e){const n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["\u5728\u8ba1\u7b97\u673a\u7f16\u7a0b\u4e2d\uff0c\u51fd\u6570\u662f",(0,t.jsx)(n.strong,{children:"\u4ee3\u7801\u903b\u8f91\u5757\u7684\u5c01\u88c5"}),"\uff0c\u5b83\u5728\u4e00\u5b9a\u7a0b\u5ea6\u4e0a\u5b9e\u73b0\u4e86\u4ee3\u7801\u903b\u8f91\u7684\u590d\u7528\u4e0e\u89e3\u8026\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u5728 Go \u4e2d\uff0c\u53ef\u4ee5\u4f7f\u7528\u5173\u952e\u5b57",(0,t.jsx)(n.code,{children:"func"}),"\u58f0\u660e\u4e00\u4e2a\u51fd\u6570\uff0c\u5176\u8bed\u6cd5\u7ed3\u6784\u4e3a\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"func \u51fd\u6570\u540d(\u53c2\u6570 \u53c2\u6570\u7c7b\u578b ...) \u8fd4\u56de\u503c ... {\n    \u51fd\u6570\u4f53\n    ...\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u6211\u4eec\u53ef\u4ee5\u770b\u5230\uff0c\u4e00\u4e2a\u51fd\u6570\u7531\u4ee5\u4e0b\u56db\u4e2a\u90e8\u5206\u7ec4\u6210\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u51fd\u6570\u540d"}),"\uff1a\u51fd\u6570\u547d\u540d\u4ec5\u652f\u6301",(0,t.jsx)(n.strong,{children:"\u5b57\u6bcd\u3001\u6570\u5b57\u3001\u4e0b\u5212\u7ebf"}),"\uff0c\u4e14\u4e0d\u80fd\u4ee5\u6570\u5b57\u5f00\u5934\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u53c2\u6570"}),"\uff1a\u51fd\u6570\u53ef\u4ee5\u6709\u96f6\u4e2a\u6216\u591a\u4e2a\u53c2\u6570\uff0c\u6bcf\u4e2a\u53c2\u6570\u90fd\u9700\u8981\u6307\u5b9a\u6570\u636e\u7c7b\u578b\uff0c\u591a\u4e2a\u53c2\u6570\u4e4b\u95f4\u9017\u53f7\u5206\u5272\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u8fd4\u56de\u503c"}),"\uff1a\u51fd\u6570\u53ef\u4ee5\u6709\u96f6\u4e2a\u6216\u591a\u4e2a\u8fd4\u56de\u503c\uff0c\u6bcf\u4e2a\u8fd4\u56de\u503c\u90fd\u9700\u8981\u6307\u5b9a\u6570\u636e\u7c7b\u578b\uff0c\u591a\u4e2a\u8fd4\u56de\u503c\u4e4b\u95f4\u9017\u53f7\u5206\u5272\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u51fd\u6570\u4f53"}),"\uff1a\u5177\u4f53\u7684\u4ee3\u7801\u903b\u8f91\u5757\uff0c\u7531\u82b1\u62ec\u53f7",(0,t.jsx)(n.code,{children:"{}"}),"\u5305\u56f4\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u58f0\u660e\u51fd\u6570\u65f6\u9700\u8981\u6ce8\u610f\u4ee5\u4e0b\u51e0\u70b9\uff1a"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"\u51fd\u6570\u53ef\u89c1\u6027\uff1a\u51fd\u6570\u7684\u53ef\u89c1\u6027\u7531\u5176\u9996\u5b57\u6bcd\u7684\u5927\u5c0f\u5199\u51b3\u5b9a\u3002\u5982\u679c\u51fd\u6570\u540d\u4ee5\u5927\u5199\u5b57\u6bcd\u5f00\u5934\uff0c\u5219\u8be5\u51fd\u6570\u53ef\u4ee5\u88ab\u5176\u4ed6\u5305\u8bbf\u95ee\u3002\u5982\u679c\u51fd\u6570\u540d\u4ee5\u5c0f\u5199\u5b57\u6bcd\u5f00\u5934\uff0c\u5219\u8be5\u51fd\u6570\u53ea\u80fd\u5728\u540c\u4e00\u5305\u5185\u90e8\u8bbf\u95ee\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'func helloGolang() {\n    fmt.Println("hello, golang")\n}\n\nfunc HelloGolang() {\n    fmt.Println("hello, golang")\n}\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"\u547d\u540d\u89c4\u8303\uff1a"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u51fd\u6570\u53c2\u6570",children:"\u51fd\u6570\u53c2\u6570"}),"\n",(0,t.jsx)(n.h2,{id:"main\u51fd\u6570",children:"main\u51fd\u6570"}),"\n",(0,t.jsx)(n.h2,{id:"init\u51fd\u6570",children:"init\u51fd\u6570"})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},9365:(e,n,r)=>{r.d(n,{A:()=>l});r(6540);var t=r(4164);const s={tabItem:"tabItem_Ymn6"};var a=r(4848);function l(e){let{children:n,hidden:r,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.A)(s.tabItem,l),hidden:r,children:n})}},1470:(e,n,r)=>{r.d(n,{A:()=>y});var t=r(6540),s=r(4164),a=r(3104),l=r(6347),o=r(205),i=r(7485),c=r(1682),u=r(9466);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:s}}=e;return{value:n,label:r,attributes:t,default:s}}))}(r);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function g(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:r}=e;const s=(0,l.W6)(),a=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,i.aZ)(a),(0,t.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(s.location.search);n.set(a,e),s.replace({...s.location,search:n.toString()})}),[a,s])]}function m(e){const{defaultValue:n,queryString:r=!1,groupId:s}=e,a=h(e),[l,i]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!g({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:a}))),[c,d]=b({queryString:r,groupId:s}),[m,f]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,a]=(0,u.Dv)(r);return[s,(0,t.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:s}),p=(()=>{const e=c??m;return g({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{p&&i(p)}),[p]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!g({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),f(e)}),[d,f,a]),tabValues:a}}var f=r(2303);const p={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=r(4848);function v(e){let{className:n,block:r,selectedValue:t,selectValue:l,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const n=e.currentTarget,r=i.indexOf(n),s=o[r].value;s!==t&&(c(n),l(s))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;n=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;n=i[r]??i[i.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},n),children:o.map((e=>{let{value:n,label:r,attributes:a}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>i.push(e),onKeyDown:d,onClick:u,...a,className:(0,s.A)("tabs__item",p.tabItem,a?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function w(e){let{lazy:n,children:r,selectedValue:s}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function j(e){const n=m(e);return(0,x.jsxs)("div",{className:(0,s.A)("tabs-container",p.tabList),children:[(0,x.jsx)(v,{...e,...n}),(0,x.jsx)(w,{...e,...n})]})}function y(e){const n=(0,f.A)();return(0,x.jsx)(j,{...e,children:d(e.children)},String(n))}},4444:(e,n,r)=>{r.d(n,{A:()=>l});r(6540);var t=r(4164);const s={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",buttons:"buttons_uHc7",right:"right_oyze",browserWindowAddressBar:"browserWindowAddressBar_Pd8y",dot:"dot_giz1",browserWindowMenuIcon:"browserWindowMenuIcon_Vhuh",bar:"bar_rrRL",browserWindowBody:"browserWindowBody_Idgs"};var a=r(4848);function l(e){let{children:n,minHeight:r,url:l="http://localhost:3000",style:o,bodyStyle:i}=e;return(0,a.jsxs)("div",{className:s.browserWindow,style:{...o,minHeight:r},children:[(0,a.jsxs)("div",{className:s.browserWindowHeader,children:[(0,a.jsxs)("div",{className:s.buttons,children:[(0,a.jsx)("span",{className:s.dot,style:{background:"#f25f58"}}),(0,a.jsx)("span",{className:s.dot,style:{background:"#fbbe3c"}}),(0,a.jsx)("span",{className:s.dot,style:{background:"#58cb42"}})]}),(0,a.jsx)("div",{className:(0,t.A)(s.browserWindowAddressBar,"text--truncate"),children:l}),(0,a.jsx)("div",{className:s.browserWindowMenuIcon,children:(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{className:s.bar}),(0,a.jsx)("span",{className:s.bar}),(0,a.jsx)("span",{className:s.bar})]})})]}),(0,a.jsx)("div",{className:s.browserWindowBody,style:i,children:n})]})}},3498:(e,n,r)=>{r.d(n,{A:()=>l});var t=r(6540);const s={"image-bg":"image-bg_e0Zz",image:"image_FkF6",fullscreen:"fullscreen_Hs_n"};var a=r(4848);const l=e=>{let{src:n}=e;const r=(0,t.useRef)(null),[l,o]=(0,t.useState)(!1),i=()=>o(!l);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:l?`${s.imageBg} ${s.fullscreen}`:`${s.imageBg}`,onWheel:e=>{l&&i()},onClick:i}),(0,a.jsx)("img",{src:n,className:s.image,style:l?{transform:(()=>{if(r.current&&l){const e=r.current.getBoundingClientRect(),n=window.innerWidth/2-(e.left+e.right)/2,t=window.innerHeight/2-(e.top+e.bottom)/2,s=window.innerWidth/e.width,a=window.innerHeight/e.height;return`translate(${n}px, ${t}px) scale(${Math.min(s,a)-.1})`}return"none"})(),cursor:"zoom-out",zIndex:"9999"}:{},onClick:i,ref:r,alt:"Image"})]})}},8453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>o});var t=r(6540);const s={},a=t.createContext(s);function l(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);