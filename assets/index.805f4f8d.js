import{av as E,a as x,cC as w,b5 as D,s as S,f as F,ax as l,o as t,h as r,n as o,z as s,q as n,m as p,F as i,aA as u,fa as P,fb as V,B as b,t as m,j as _,aH as A}from"./index.065dfc24.js";import{T as L}from"./index.7199bbfe.js";import{T as h}from"./index.061a58e1.js";/* empty css               */import N from"./Article.b2e7a918.js";import j from"./Application.d7b8ce37.js";import z from"./Project.ade2b98c.js";import{h as R}from"./header.d801b988.js";import{tags as U,teams as q,details as H,achieveList as G}from"./data.53a0f0fb.js";import{R as T,C as $}from"./index.09a1c2b0.js";import"./useRefs.4759370c.js";import"./PlusOutlined.a5143f39.js";import"./index.d23e78c6.js";import"./Col.cddb608c.js";import"./useFlexGapSupport.81e1a6d6.js";import"./eagerComputed.0f895987.js";import"./index.77e1db6f.js";import"./index.4e8e714e.js";const J=x({components:{CollapseContainer:w,Icon:D,Tag:L,Tabs:h,TabPane:h.TabPane,Article:N,Application:j,Project:z,[T.name]:T,[$.name]:$},setup(){const e=S(),d=F(()=>e.getUserInfo.avatar||R);return{prefixCls:"account-center",avatar:d,tags:U,teams:q,details:H,achieveList:G}}}),g=e=>(P("data-v-5384e32e"),e=e(),V(),e),K=["src"],M=g(()=>p("span",null,"Vben",-1)),O=g(()=>p("div",null,"\u6D77\u7EB3\u767E\u5DDD\uFF0C\u6709\u5BB9\u4E43\u5927",-1));function Q(e,d,W,X,Y,Z){const c=l("a-col"),f=l("Icon"),C=l("a-row"),y=l("Tag"),v=l("CollapseContainer"),B=l("TabPane"),I=l("Tabs");return t(),r("div",{class:n(e.prefixCls)},[o(C,{class:n(`${e.prefixCls}-top`)},{default:s(()=>[o(c,{span:9,class:n(`${e.prefixCls}-col`)},{default:s(()=>[o(C,null,{default:s(()=>[o(c,{span:8},{default:s(()=>[p("div",{class:n(`${e.prefixCls}-top__avatar`)},[p("img",{width:"70",src:e.avatar},null,8,K),M,O],2)]),_:1}),o(c,{span:16},{default:s(()=>[p("div",{class:n(`${e.prefixCls}-top__detail`)},[(t(!0),r(i,null,u(e.details,a=>(t(),r("p",{key:a.title},[o(f,{icon:a.icon},null,8,["icon"]),b(" "+m(a.title),1)]))),128))],2)]),_:1})]),_:1})]),_:1},8,["class"]),o(c,{span:7,class:n(`${e.prefixCls}-col`)},{default:s(()=>[o(v,{title:"\u6807\u7B7E",canExpan:!1},{default:s(()=>[(t(!0),r(i,null,u(e.tags,a=>(t(),_(y,{key:a,class:"mb-2"},{default:s(()=>[b(m(a),1)]),_:2},1024))),128))]),_:1})]),_:1},8,["class"]),o(c,{span:8,class:n(`${e.prefixCls}-col`)},{default:s(()=>[o(v,{class:n(`${e.prefixCls}-top__team`),title:"\u56E2\u961F",canExpan:!1},{default:s(()=>[(t(!0),r(i,null,u(e.teams,(a,k)=>(t(),r("div",{key:k,class:n(`${e.prefixCls}-top__team-item`)},[o(f,{icon:a.icon,color:a.color},null,8,["icon","color"]),p("span",null,m(a.title),1)],2))),128))]),_:1},8,["class"])]),_:1},8,["class"])]),_:1},8,["class"]),p("div",{class:n(`${e.prefixCls}-bottom`)},[o(I,null,{default:s(()=>[(t(!0),r(i,null,u(e.achieveList,a=>(t(),_(B,{key:a.key,tab:a.name},{default:s(()=>[(t(),_(A(a.component)))]),_:2},1032,["tab"]))),128))]),_:1})],2)],2)}var be=E(J,[["render",Q],["__scopeId","data-v-5384e32e"]]);export{be as default};
