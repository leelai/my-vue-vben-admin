import{a as r,v as i,a7 as u,o as n,j as l,z as s,m,bl as d,i as p}from"./index.065dfc24.js";import{C as f}from"./index.77e1db6f.js";import"./index.061a58e1.js";/* empty css               */import{u as c}from"./useECharts.9c9a3f7b.js";import"./index.4e8e714e.js";import"./index.09a1c2b0.js";import"./Col.cddb608c.js";import"./useFlexGapSupport.81e1a6d6.js";import"./useRefs.4759370c.js";import"./PlusOutlined.a5143f39.js";const z=r({name:"VisitRadar",props:{loading:Boolean,width:{type:String,default:"100%"},height:{type:String,default:"300px"}},setup(a){const e=a,t=i(null),{setOptions:o}=c(t);return u(()=>e.loading,()=>{e.loading||o({legend:{bottom:0,data:["\u8BBF\u95EE","\u8D2D\u4E70"]},tooltip:{},radar:{radius:"60%",splitNumber:8,indicator:[{name:"\u7535\u8111"},{name:"\u5145\u7535\u5668"},{name:"\u8033\u673A"},{name:"\u624B\u673A"},{name:"Ipad"},{name:"\u8033\u673A"}]},series:[{type:"radar",symbolSize:0,areaStyle:{shadowBlur:0,shadowColor:"rgba(0,0,0,.2)",shadowOffsetX:0,shadowOffsetY:10,opacity:1},data:[{value:[90,50,86,40,50,20],name:"\u8BBF\u95EE",itemStyle:{color:"#b6a2de"}},{value:[70,75,70,76,20,85],name:"\u8D2D\u4E70",itemStyle:{color:"#5ab1ef"}}]}]})},{immediate:!0}),(h,g)=>(n(),l(p(f),{title:"\u8F6C\u5316\u7387",loading:a.loading},{default:s(()=>[m("div",{ref_key:"chartRef",ref:t,style:d({width:a.width,height:a.height})},null,4)]),_:1},8,["loading"]))}});export{z as default};