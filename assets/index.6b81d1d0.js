import{a as s,v as r,fk as m,N as _,o as c,h as k,aB as f,aE as C,av as v,ax as o,j as O,z as a,n as x,m as B,t as S}from"./index.065dfc24.js";import{P as E}from"./index.3693d59d.js";import"./index.5b8b03d6.js";import"./index.eee6f788.js";import"./useSize.a2c16550.js";import"./eagerComputed.0f895987.js";import"./useWindowSizeFn.b1b92eb5.js";import"./useContentViewHeight.1c3d485e.js";import"./ArrowLeftOutlined.ca5e5c0f.js";import"./index.6fa4bb48.js";import"./transButton.92e9c4c6.js";const $=s({name:"ClickOutSide",emits:["mounted","clickOutside"],setup(e,{emit:t}){const n=r(null);return m(n,()=>{t("clickOutside")}),_(()=>{t("mounted")}),(i,l)=>(c(),k("div",{ref_key:"wrap",ref:n},[f(i.$slots,"default")],512))}}),g=C($);const h=s({components:{ClickOutSide:g,PageWrapper:E},setup(){const e=r("Click");function t(){e.value="Click Out Side"}function n(){e.value="Click Inner"}return{innerClick:n,handleClickOutside:t,text:e}}});function y(e,t,n,i,l,w){const u=o("ClickOutSide"),d=o("PageWrapper");return c(),O(d,{title:"\u70B9\u5185\u5916\u90E8\u89E6\u53D1\u4E8B\u4EF6"},{default:a(()=>[x(u,{onClickOutside:e.handleClickOutside,class:"flex justify-center"},{default:a(()=>[B("div",{onClick:t[0]||(t[0]=(...p)=>e.innerClick&&e.innerClick(...p)),class:"demo-box"},S(e.text),1)]),_:1},8,["onClickOutside"])]),_:1})}var q=v(h,[["render",y],["__scopeId","data-v-6c56edd4"]]);export{q as default};