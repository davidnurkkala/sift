"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[556],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>s});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=i.createContext({}),p=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return i.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(n),s=a,k=c["".concat(d,".").concat(s)]||c[s]||u[s]||r;return n?i.createElement(k,l(l({ref:t},m),{},{components:n})):i.createElement(k,l({ref:t},m))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},26437:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=n(87462),a=(n(67294),n(3905));const r={},l="Changelog",o={type:"mdx",permalink:"/sift/CHANGELOG",source:"@site/pages/CHANGELOG.md",title:"Changelog",description:"[0.0.5]",frontMatter:{}},d=[{value:"0.0.5",id:"005",level:2},{value:"Added",id:"added",level:3},{value:"Fixed",id:"fixed",level:3},{value:"0.0.4",id:"004",level:2},{value:"0.0.3",id:"003",level:2},{value:"Changed",id:"changed",level:3},{value:"0.0.2",id:"002",level:2},{value:"Changed",id:"changed-1",level:3},{value:"0.0.1",id:"001",level:2},{value:"Added",id:"added-1",level:3},{value:"Changed",id:"changed-2",level:3},{value:"0.0.0",id:"000",level:2}],p={toc:d};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"changelog"},"Changelog"),(0,a.kt)("h2",{id:"005"},"[0.0.5]"),(0,a.kt)("h3",{id:"added"},"Added"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Array.difference")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"Array.differenceSymmetric")," to find the difference between two or more arrays."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Set.difference")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"Set.differenceSymmetric")," to find the difference between two or more sets.")),(0,a.kt)("h3",{id:"fixed"},"Fixed"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Typings for ",(0,a.kt)("inlineCode",{parentName:"li"},"Array.concat"),", which previously returned ",(0,a.kt)("inlineCode",{parentName:"li"},"T[][]")," instead of ",(0,a.kt)("inlineCode",{parentName:"li"},"T[]"),".")),(0,a.kt)("h2",{id:"004"},"[0.0.4]"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Implemented ",(0,a.kt)("inlineCode",{parentName:"li"},"Array.is: (value: any) -> boolean")," to check if a given value is an array.")),(0,a.kt)("h2",{id:"003"},"[0.0.3]"),(0,a.kt)("h3",{id:"changed"},"Changed"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If ",(0,a.kt)("inlineCode",{parentName:"li"},"update")," is called with a key that doesn't exist in the specified dictionary, the key's value is ",(0,a.kt)("strong",{parentName:"li"},"set to the key itself"),". Fix by ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/Reselim"},"@reselim")," in ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/csqrl/sift/pull/7"},"PR #7"),"."),(0,a.kt)("li",{parentName:"ul"},"Added ",(0,a.kt)("inlineCode",{parentName:"li"},"aftman.toml")," and switched GitHub workflows over to use aftman.")),(0,a.kt)("h2",{id:"002"},"[0.0.2]"),(0,a.kt)("h3",{id:"changed-1"},"Changed"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fixed a bug where ",(0,a.kt)("inlineCode",{parentName:"li"},"Array.concat(Deep)"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Dictionary.merge(Deep)")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"Set.merge")," would not accept holes (",(0,a.kt)("inlineCode",{parentName:"li"},"nil")," values) in their arguments. This would cause the function to stop processing further arguments once it found a ",(0,a.kt)("inlineCode",{parentName:"li"},"nil")," value."),(0,a.kt)("li",{parentName:"ul"},"Fixed a bug where ",(0,a.kt)("inlineCode",{parentName:"li"},"Array.insert")," would not insert the element at the correct index. An index of ",(0,a.kt)("inlineCode",{parentName:"li"},"0")," will now insert the element at the end of the array. ",(0,a.kt)("inlineCode",{parentName:"li"},"length+1")," will also insert the element at the end of the array. ",(0,a.kt)("inlineCode",{parentName:"li"},"length+2")," (or greater) will be ignored, and the original array will be returned."),(0,a.kt)("li",{parentName:"ul"},"Bumped tooling versions:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"rojo to v7.1.1"),(0,a.kt)("li",{parentName:"ul"},"stylua to v0.13.1"),(0,a.kt)("li",{parentName:"ul"},"selene to v0.17.0")))),(0,a.kt)("h2",{id:"001"},"[0.0.1]"),(0,a.kt)("h3",{id:"added-1"},"Added"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Basic ",(0,a.kt)("strong",{parentName:"li"},"TypeScript (roblox-ts) support")," (no tsdoc yet)! \ud83c\udf89"),(0,a.kt)("li",{parentName:"ul"},"Implemented ",(0,a.kt)("inlineCode",{parentName:"li"},"isEmpty")),(0,a.kt)("li",{parentName:"ul"},"Added typings to ",(0,a.kt)("inlineCode",{parentName:"li"},"equalObjects")),(0,a.kt)("li",{parentName:"ul"},"Added aliases for ",(0,a.kt)("inlineCode",{parentName:"li"},"Array.concat"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Array.concatDeep"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Array.push"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Array.unshift"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Array.find"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Array.includes"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Dictionary.join"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Dictionary.joinDeep"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Set.fromArray"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Set.merge"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Set.delete")),(0,a.kt)("li",{parentName:"ul"},"Added doc pages for installation and usage samples")),(0,a.kt)("h3",{id:"changed-2"},"Changed"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Exposed ",(0,a.kt)("inlineCode",{parentName:"li"},"isEmpty")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"equalObjects")," from the root module"),(0,a.kt)("li",{parentName:"ul"},"Improved typings for methods accepting predictes"),(0,a.kt)("li",{parentName:"ul"},"Updated documentation for some methods"),(0,a.kt)("li",{parentName:"ul"},"Fixed ",(0,a.kt)("inlineCode",{parentName:"li"},"Dictionary.flatten")," being shown in the ",(0,a.kt)("inlineCode",{parentName:"li"},"Array")," docs (wrong ",(0,a.kt)("inlineCode",{parentName:"li"},"@within")," tag)")),(0,a.kt)("h2",{id:"000"},"[0.0.0]"),(0,a.kt)("p",null,"Initial development version."))}m.isMDXComponent=!0}}]);