import{a as E,v as T,w as A,f as c,i,a7 as B,N as I,al as M,cP as P,n as o,cB as k,av as C,aE as L,ax as S,o as j,j as q,z as _,m as g,t as W,B as V}from"./index.065dfc24.js";import{D as z}from"./index.427a8794.js";import{P as U}from"./index.3693d59d.js";import"./index.5b8b03d6.js";import"./index.eee6f788.js";import"./useSize.a2c16550.js";import"./eagerComputed.0f895987.js";import"./useWindowSizeFn.b1b92eb5.js";import"./useContentViewHeight.1c3d485e.js";import"./ArrowLeftOutlined.ca5e5c0f.js";import"./index.6fa4bb48.js";import"./transButton.92e9c4c6.js";const G={height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String],bench:{type:[Number,String],default:0},itemHeight:{type:[Number,String],required:!0},items:{type:Array,default:()=>[]}},w="virtual-scroll";function s(t,a="px"){if(!(t==null||t===""))return isNaN(+t)?String(t):`${Number(t)}${a}`}var J=E({name:"VirtualScroll",props:G,setup(t,{slots:a}){const u=T(null),n=A({first:0,last:0,scrollTop:0}),p=c(()=>parseInt(t.bench,10)),m=c(()=>parseInt(t.itemHeight,10)),d=c(()=>Math.max(0,n.first-i(p))),f=c(()=>Math.min((t.items||[]).length,n.last+i(p))),v=c(()=>({height:s((t.items||[]).length*i(m))})),h=c(()=>{const e={},r=s(t.height),l=s(t.minHeight),H=s(t.minWidth),N=s(t.maxHeight),b=s(t.maxWidth),F=s(t.width);return r&&(e.height=r),l&&(e.minHeight=l),H&&(e.minWidth=H),N&&(e.maxHeight=N),b&&(e.maxWidth=b),F&&(e.width=F),e});B([()=>t.itemHeight,()=>t.height],()=>{y()});function x(e){const r=i(u);if(!r)return 0;const l=parseInt(t.height||0,10)||r.clientHeight;return e+Math.ceil(l/i(m))}function $(){return Math.floor(n.scrollTop/i(m))}function y(){const e=i(u);!e||(n.scrollTop=e.scrollTop,n.first=$(),n.last=x(n.first))}function D(){const{items:e=[]}=t;return e.slice(i(d),i(f)).map(R)}function R(e,r){r+=i(d);const l=s(r*i(m));return o("div",{class:`${w}__item`,style:{top:l},key:r},[k(a,"default",{index:r,item:e})])}return I(()=>{n.last=x(0),M(()=>{const e=i(u);!e||P({el:e,name:"scroll",listener:y,wait:0})})}),()=>o("div",{class:w,style:i(h),ref:u},[o("div",{class:`${w}__container`,style:i(v)},[D()])])}});var K=C(J,[["__scopeId","data-v-dd7becb6"]]);const O=L(K);const Q=(()=>{const t=[];for(let a=1;a<2e4;a++)t.push({title:"\u5217\u8868\u9879"+a});return t})(),X=E({components:{VScroll:O,Divider:z,PageWrapper:U},setup(){return{data:Q}}}),Y=V("\u57FA\u7840\u6EDA\u52A8\u793A\u4F8B"),Z={class:"virtual-scroll-demo-wrap"},tt={class:"virtual-scroll-demo__item"},et=V("\u5373\u4F7F\u4E0D\u53EF\u89C1\uFF0C\u4E5F\u9884\u5148\u52A0\u8F7D50\u6761\u6570\u636E\uFF0C\u9632\u6B62\u7A7A\u767D"),it={class:"virtual-scroll-demo-wrap"},rt={class:"virtual-scroll-demo__item"};function nt(t,a,u,n,p,m){const d=S("Divider"),f=S("VScroll"),v=S("PageWrapper");return j(),q(v,{class:"virtual-scroll-demo"},{default:_(()=>[o(d,null,{default:_(()=>[Y]),_:1}),g("div",Z,[o(f,{itemHeight:41,items:t.data,height:300,width:300},{default:_(({item:h})=>[g("div",tt,W(h.title),1)]),_:1},8,["items"])]),o(d,null,{default:_(()=>[et]),_:1}),g("div",it,[o(f,{itemHeight:41,items:t.data,height:300,width:300,bench:50},{default:_(({item:h})=>[g("div",rt,W(h.title),1)]),_:1},8,["items"])])]),_:1})}var pt=C(X,[["render",nt],["__scopeId","data-v-002a1a68"]]);export{pt as default};
