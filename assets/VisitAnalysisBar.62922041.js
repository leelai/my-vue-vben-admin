var l=Object.defineProperty;var s=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var i=(a,e,t)=>e in a?l(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,n=(a,e)=>{for(var t in e||(e={}))p.call(e,t)&&i(a,t,e[t]);if(s)for(var t of s(e))m.call(e,t)&&i(a,t,e[t]);return a};import{u as c}from"./useECharts.9c9a3f7b.js";import{b as h}from"./props.f48aca0b.js";import{a as u,v as f,N as d,o as y,h as b,bl as g}from"./index.065dfc24.js";const k=u({name:"VisitAnalysisBar",props:n({},h),setup(a){const e=f(null),{setOptions:t}=c(e);return d(()=>{t({tooltip:{trigger:"axis",axisPointer:{lineStyle:{width:1,color:"#019680"}}},grid:{left:"1%",right:"1%",top:"2  %",bottom:0,containLabel:!0},xAxis:{type:"category",data:[...new Array(12)].map((r,o)=>`${o+1}\u6708`)},yAxis:{type:"value",max:8e3,splitNumber:4},series:[{data:[3e3,2e3,3333,5e3,3200,4200,3200,2100,3e3,5100,6e3,3200,4800],type:"bar",barMaxWidth:80}]})}),(r,o)=>(y(),b("div",{ref_key:"chartRef",ref:e,style:g({height:r.height,width:r.width})},null,4))}});export{k as default};
