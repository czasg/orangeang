"use strict";(self.webpackChunkorange_ang=self.webpackChunkorange_ang||[]).push([[6949],{9478:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>i,metadata:()=>u,toc:()=>h});var a=r(4848),l=r(8453),t=(r(3498),r(4444)),s=r(1470),o=r(9365);const i={title:"\u6d41\u7a0b\u63a7\u5236",slug:"/basics/control-flow"},c=void 0,u={id:"go\u57fa\u7840/\u63a7\u5236\u6d41\u7a0b",title:"\u6d41\u7a0b\u63a7\u5236",description:"\u80cc\u666f",source:"@site/docs/golang/40.go\u57fa\u7840/30.\u63a7\u5236\u6d41\u7a0b.mdx",sourceDirName:"40.go\u57fa\u7840",slug:"/basics/control-flow",permalink:"/orange-ang/docs/golang/basics/control-flow",draft:!1,unlisted:!1,editUrl:"https://github.com/czasg/orange-ang/edit/main/docs/golang/40.go\u57fa\u7840/30.\u63a7\u5236\u6d41\u7a0b.mdx",tags:[],version:"current",sidebarPosition:30,frontMatter:{title:"\u6d41\u7a0b\u63a7\u5236",slug:"/basics/control-flow"},sidebar:"tutorialSidebar",previous:{title:"chan",permalink:"/orange-ang/docs/golang/go\u57fa\u7840/chan"},next:{title:"\u7279\u6b8a\u6570\u636e\u7ed3\u6784",permalink:"/orange-ang/docs/golang/\u7279\u6b8a\u6570\u636e\u7ed3\u6784/special-data-structure"}},d={},h=[{value:"\u80cc\u666f",id:"\u80cc\u666f",level:2},{value:"\u76ee\u7684",id:"\u76ee\u7684",level:2},{value:"\u6761\u4ef6\u8bed\u53e5\uff08if\uff09",id:"\u6761\u4ef6\u8bed\u53e5if",level:2},{value:"\u5faa\u73af\u8bed\u53e5\uff08for\uff09",id:"\u5faa\u73af\u8bed\u53e5for",level:2},{value:"\u9009\u62e9\u8bed\u53e5\uff08switch\uff09",id:"\u9009\u62e9\u8bed\u53e5switch",level:2},{value:"\u8df3\u8f6c\u8bed\u53e5\uff08break\u3001continue\u3001goto\uff09",id:"\u8df3\u8f6c\u8bed\u53e5breakcontinuegoto",level:2},{value:"\u5ef6\u8fdf\u8bed\u53e5\uff08defer\uff09",id:"\u5ef6\u8fdf\u8bed\u53e5defer",level:2}];function f(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"\u80cc\u666f",children:"\u80cc\u666f"}),"\n",(0,a.jsx)(n.p,{children:"\u4e0d\u540c\u7684\u7f16\u7a0b\u8bed\u8a00\u901a\u5e38\u90fd\u5177\u6709\u7c7b\u4f3c\u7684\u6d41\u7a0b\u63a7\u5236\u7ed3\u6784\uff0c\u4f46\u5728Go\u8bed\u8a00\u4e2d\uff0c\u6709\u4e00\u4e9b\u72ec\u7279\u4e4b\u5904\u3002"}),"\n",(0,a.jsxs)(n.p,{children:["\u6bd4\u5982\uff0cGo\u8bed\u8a00\u6ca1\u6709\u50cf\u5176\u4ed6\u8bed\u8a00\u4e2d\u7684 ",(0,a.jsx)(n.code,{children:"try ... catch ..."})," \u5f02\u5e38\u5904\u7406\u673a\u5236\uff0c\u800c\u662f\u91c7\u7528\u72ec\u6709\u7684\u9519\u8bef\u94fe\u673a\u5236... ",(0,a.jsx)("br",{}),"\n\u518d\u6bd4\u5982\uff0cGo\u8bed\u8a00\u6ca1\u6709",(0,a.jsx)(n.code,{children:"with lock.lock()"}),"\u4e0a\u4e0b\u6587\u7ba1\u7406\u673a\u5236\uff0c\u800c\u662f\u91c7\u7528",(0,a.jsx)(n.code,{children:"defer"}),"\u5ef6\u8fdf\u51fd\u6570\u673a\u5236... ",(0,a.jsx)("br",{}),"\n..."]}),"\n",(0,a.jsx)(n.p,{children:"\u672c\u8282\u6559\u7a0b\u4e3b\u8981\u4ecb\u7ecdGo\u4e2d\u5e38\u7528\u7684\u6d41\u7a0b\u63a7\u5236\u673a\u5236\u3002"}),"\n",(0,a.jsx)(n.h2,{id:"\u76ee\u7684",children:"\u76ee\u7684"}),"\n",(0,a.jsx)(n.p,{children:"\u5b66\u4e60\u5e76\u4e86\u89e3Go\u4e2d\u5e38\u7528\u7684\u6d41\u7a0b\u63a7\u5236\u673a\u5236\u3002"}),"\n",(0,a.jsx)(n.h2,{id:"\u6761\u4ef6\u8bed\u53e5if",children:"\u6761\u4ef6\u8bed\u53e5\uff08if\uff09"}),"\n",(0,a.jsxs)(n.p,{children:["\u5728 Go \u4e2d\uff0c",(0,a.jsx)(n.code,{children:"if-else"}),"\u662f\u5e38\u7528\u7684\u6761\u4ef6\u5224\u65ad\u8bed\u53e5\uff0c\u5176\u57fa\u672c\u7ed3\u6784\u5982\u4e0b\uff1a"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:"if bool\u6761\u4ef6 {\n  // code\n} else if bool\u6761\u4ef6 {\n  // code\n} else {\n  // code\n}\n"})}),"\n",(0,a.jsx)(t.A,{children:(0,a.jsxs)(s.A,{children:[(0,a.jsx)(o.A,{value:"apple",label:"\u9519\u8bef\u503c\u5224\u65ad",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:'caller := func() error {\n  return nil\n}\nerr := caller()\nif err != nil {\n  fmt.Printf("error occur\uff1a%v", err)\n}\n'})})}),(0,a.jsx)(o.A,{value:"orange",label:"\u5b57\u7b26\u4e32\u5305\u542b\u5173\u7cfb\u5224\u65ad",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:'if strings.Contains("orange-ang", "cool") {\n  fmt.Println("yes~")\n} else if strings.Contains("orange-ang", "crazy") {\n  fmt.Println("yes~")\n} else {\n  fmt.Println("no!")\n}\n'})})})]})}),"\n",(0,a.jsx)(n.h2,{id:"\u5faa\u73af\u8bed\u53e5for",children:"\u5faa\u73af\u8bed\u53e5\uff08for\uff09"}),"\n",(0,a.jsxs)(n.p,{children:["\u5728 Go \u4e2d\uff0c",(0,a.jsx)(n.code,{children:"for"}),"\u662f\u5e38\u7528\u7684\u5faa\u73af\u8bed\u53e5\uff0c\u5176\u57fa\u672c\u7ed3\u6784\u5982\u4e0b\uff1a"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:"for \u521d\u59cb\u503c; \u6761\u4ef6\u5224\u65ad; \u5faa\u73af\u5904\u7406 {\n  // code\n}\n"})}),"\n",(0,a.jsx)(t.A,{children:(0,a.jsxs)(s.A,{children:[(0,a.jsx)(o.A,{value:"1",label:"\u666e\u901a\u5faa\u73af",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:"for i := 0; i < 10; i++ {\n  fmt.Println(i)\n}\n"})})}),(0,a.jsx)(o.A,{value:"2",label:"\u65e0\u9650\u5faa\u73af",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:"count := 0\nfor {\n  fmt.Println(count++)\n}\n"})})}),(0,a.jsx)(o.A,{value:"3",label:"while\u7b49\u4ef7\u5faa\u73af",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:"count := 0\nfor count < 100 {\n  fmt.Println(count++)\n}\n"})})}),(0,a.jsx)(o.A,{value:"4",label:"\u5faa\u73af\u5207\u7247",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:"arr := []int{10, 20, 30}\nfor index, value := range arr {\n  fmt.Println(index, value)\n}\n"})})})]})}),"\n",(0,a.jsx)(n.h2,{id:"\u9009\u62e9\u8bed\u53e5switch",children:"\u9009\u62e9\u8bed\u53e5\uff08switch\uff09"}),"\n",(0,a.jsxs)(n.p,{children:["\u5728 Go \u4e2d\uff0c",(0,a.jsx)(n.code,{children:"switch"}),"\u548c",(0,a.jsx)(n.code,{children:"select"}),"\u662f\u5e38\u7528\u7684\u9009\u62e9\u8bed\u53e5\uff0c\u7528\u4e8e\u6839\u636e\u6761\u4ef6\u6267\u884c\u4e0d\u540c\u7684\u4ee3\u7801\u5757\u3002\u8003\u8651\u672c\u6559\u7a0b\u4e4b\u524d\u6ca1\u6709\u4ecb\u7ecd\u901a\u9053",(0,a.jsx)(n.code,{children:"chan"}),"\uff0c\u56e0\u6b64\u6682\u65f6\u4e0d\u4f1a\u4ecb\u7ecd",(0,a.jsx)(n.code,{children:"select"}),"\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:"// switch \u8bed\u53e5\u7528\u4e8e\u6839\u636e\u4e0d\u540c\u7684\u6761\u4ef6\u6267\u884c\u4e0d\u540c\u7684\u4ee3\u7801\u5757\u3002\nswitch value {\ncase value1:\n    // \u6267\u884c\u4e0e value \u7b49\u4e8e value1 \u65f6\u5bf9\u5e94\u7684\u4ee3\u7801\u5757\ncase value2:\n    // \u6267\u884c\u4e0e value \u7b49\u4e8e value2 \u65f6\u5bf9\u5e94\u7684\u4ee3\u7801\u5757\ndefault:\n    // \u5982\u679c\u4ee5\u4e0a case \u90fd\u4e0d\u6ee1\u8db3\uff0c\u5219\u6267\u884c default \u4ee3\u7801\u5757\uff08\u53ef\u9009\uff09\n}\n"})}),"\n",(0,a.jsx)(t.A,{children:(0,a.jsxs)(s.A,{children:[(0,a.jsx)(o.A,{value:"2",label:"\u5e38\u89c4\u4f7f\u7528",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n)\n\nfunc main() {\n    value := "value"\n    switch value {\n    case "value":\n        fmt.Println("value")\n    case "value1", "value2":\n        fmt.Println("value1/value2")\n    default:\n        fmt.Println("default")\n    }\n}\n'})})}),(0,a.jsx)(o.A,{value:"3",label:"fallthrough",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n)\n\nfunc main() {\n    value := "value"\n    switch value {\n    case "value":\n        fmt.Println("value")\n        fallthrough // \u6267\u884c\u4e0b\u4e00\u4e2a case \u5206\u652f\n    case "value1", "value2":\n        fmt.Println("value1/value2")\n    default:\n        fmt.Println("default")\n    }\n}\n'})})})]})}),"\n",(0,a.jsx)(n.h2,{id:"\u8df3\u8f6c\u8bed\u53e5breakcontinuegoto",children:"\u8df3\u8f6c\u8bed\u53e5\uff08break\u3001continue\u3001goto\uff09"}),"\n",(0,a.jsx)(n.h2,{id:"\u5ef6\u8fdf\u8bed\u53e5defer",children:"\u5ef6\u8fdf\u8bed\u53e5\uff08defer\uff09"})]})}function g(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(f,{...e})}):f(e)}},9365:(e,n,r)=>{r.d(n,{A:()=>s});r(6540);var a=r(4164);const l={tabItem:"tabItem_Ymn6"};var t=r(4848);function s(e){let{children:n,hidden:r,className:s}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,a.A)(l.tabItem,s),hidden:r,children:n})}},1470:(e,n,r)=>{r.d(n,{A:()=>y});var a=r(6540),l=r(4164),t=r(3104),s=r(6347),o=r(205),i=r(7485),c=r(1682),u=r(9466);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:a,default:l}}=e;return{value:n,label:r,attributes:a,default:l}}))}(r);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function f(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:r}=e;const l=(0,s.W6)(),t=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,i.aZ)(t),(0,a.useCallback)((e=>{if(!t)return;const n=new URLSearchParams(l.location.search);n.set(t,e),l.replace({...l.location,search:n.toString()})}),[t,l])]}function m(e){const{defaultValue:n,queryString:r=!1,groupId:l}=e,t=h(e),[s,i]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:t}))),[c,d]=g({queryString:r,groupId:l}),[m,b]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[l,t]=(0,u.Dv)(r);return[l,(0,a.useCallback)((e=>{r&&t.set(e)}),[r,t])]}({groupId:l}),v=(()=>{const e=c??m;return f({value:e,tabValues:t})?e:null})();(0,o.A)((()=>{v&&i(v)}),[v]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!f({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,t]),tabValues:t}}var b=r(2303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=r(4848);function p(e){let{className:n,block:r,selectedValue:a,selectValue:s,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,t.a_)(),u=e=>{const n=e.currentTarget,r=i.indexOf(n),l=o[r].value;l!==a&&(c(n),s(l))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;n=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;n=i[r]??i[i.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":r},n),children:o.map((e=>{let{value:n,label:r,attributes:t}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>i.push(e),onKeyDown:d,onClick:u,...t,className:(0,l.A)("tabs__item",v.tabItem,t?.className,{"tabs__item--active":a===n}),children:r??n},n)}))})}function j(e){let{lazy:n,children:r,selectedValue:l}=e;const t=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=t.find((e=>e.props.value===l));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:t.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function w(e){const n=m(e);return(0,x.jsxs)("div",{className:(0,l.A)("tabs-container",v.tabList),children:[(0,x.jsx)(p,{...e,...n}),(0,x.jsx)(j,{...e,...n})]})}function y(e){const n=(0,b.A)();return(0,x.jsx)(w,{...e,children:d(e.children)},String(n))}},4444:(e,n,r)=>{r.d(n,{A:()=>s});r(6540);var a=r(4164);const l={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",buttons:"buttons_uHc7",right:"right_oyze",browserWindowAddressBar:"browserWindowAddressBar_Pd8y",dot:"dot_giz1",browserWindowMenuIcon:"browserWindowMenuIcon_Vhuh",bar:"bar_rrRL",browserWindowBody:"browserWindowBody_Idgs"};var t=r(4848);function s(e){let{children:n,minHeight:r,url:s="http://localhost:3000",style:o,bodyStyle:i}=e;return(0,t.jsxs)("div",{className:l.browserWindow,style:{...o,minHeight:r},children:[(0,t.jsxs)("div",{className:l.browserWindowHeader,children:[(0,t.jsxs)("div",{className:l.buttons,children:[(0,t.jsx)("span",{className:l.dot,style:{background:"#f25f58"}}),(0,t.jsx)("span",{className:l.dot,style:{background:"#fbbe3c"}}),(0,t.jsx)("span",{className:l.dot,style:{background:"#58cb42"}})]}),(0,t.jsx)("div",{className:(0,a.A)(l.browserWindowAddressBar,"text--truncate"),children:s}),(0,t.jsx)("div",{className:l.browserWindowMenuIcon,children:(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{className:l.bar}),(0,t.jsx)("span",{className:l.bar}),(0,t.jsx)("span",{className:l.bar})]})})]}),(0,t.jsx)("div",{className:l.browserWindowBody,style:i,children:n})]})}},3498:(e,n,r)=>{r.d(n,{A:()=>s});var a=r(6540);const l={"image-bg":"image-bg_e0Zz",image:"image_FkF6",fullscreen:"fullscreen_Hs_n"};var t=r(4848);const s=e=>{let{src:n}=e;const r=(0,a.useRef)(null),[s,o]=(0,a.useState)(!1),i=()=>o(!s);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:s?`${l.imageBg} ${l.fullscreen}`:`${l.imageBg}`,onWheel:e=>{s&&i()},onClick:i}),(0,t.jsx)("img",{src:n,className:l.image,style:s?{transform:(()=>{if(r.current&&s){const e=r.current.getBoundingClientRect(),n=window.innerWidth/2-(e.left+e.right)/2,a=window.innerHeight/2-(e.top+e.bottom)/2,l=window.innerWidth/e.width,t=window.innerHeight/e.height;return`translate(${n}px, ${a}px) scale(${Math.min(l,t)-.1})`}return"none"})(),cursor:"zoom-out",zIndex:"9999"}:{},onClick:i,ref:r,alt:"Image"})]})}},8453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>o});var a=r(6540);const l={},t=a.createContext(l);function s(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);