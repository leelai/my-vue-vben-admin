import{v,af as W,i as c,fm as w,fn as x,M as y,fo as b,as as $,dC as g,av as B,a as R,cC as I,ax as C,o as M,j as P,z as d,n as u,B as k}from"./index.065dfc24.js";import{P as z}from"./index.3693d59d.js";import"./index.5b8b03d6.js";import"./index.eee6f788.js";import"./useSize.a2c16550.js";import"./eagerComputed.0f895987.js";import"./useWindowSizeFn.b1b92eb5.js";import"./useContentViewHeight.1c3d485e.js";import"./ArrowLeftOutlined.ca5e5c0f.js";import"./index.6fa4bb48.js";import"./transButton.92e9c4c6.js";const S=Symbol("watermark-dom");function E(n=v(document.body)){const o=b(function(){const t=c(n);if(!t)return;const{clientHeight:e,clientWidth:a}=t;i({height:e,width:a})}),s=S.toString(),l=W(),f=()=>{const t=c(l);l.value=void 0;const e=c(n);!e||(t&&e.removeChild(t),w(e,o))};function _(t){const e=document.createElement("canvas"),a=300,m=240;Object.assign(e,{width:a,height:m});const r=e.getContext("2d");return r&&(r.rotate(-20*Math.PI/120),r.font="15px Vedana",r.fillStyle="rgba(0, 0, 0, 0.15)",r.textAlign="left",r.textBaseline="middle",r.fillText(t,a/20,m)),e.toDataURL("image/png")}function i(t){const e=c(l);!e||(g(t.width)&&(e.style.width=`${t.width}px`),g(t.height)&&(e.style.height=`${t.height}px`),g(t.str)&&(e.style.background=`url(${_(t.str)}) left top repeat`))}const p=t=>{if(c(l))return i({str:t}),s;const e=document.createElement("div");l.value=e,e.id=s,e.style.pointerEvents="none",e.style.top="0px",e.style.left="0px",e.style.position="absolute",e.style.zIndex="100000";const a=c(n);if(!a)return s;const{clientHeight:m,clientWidth:r}=a;return i({str:t,width:r,height:m}),a.appendChild(e),s};function h(t){p(t),x(document.documentElement,o),$()&&y(()=>{f()})}return{setWatermark:h,clear:f}}const L=R({components:{CollapseContainer:I,PageWrapper:z},setup(){const n=v(null),{setWatermark:o,clear:s}=E();return{setWatermark:o,clear:s,areaRef:n}}}),N=k(" Create "),T=k(" Clear "),V=k(" Reset ");function j(n,o,s,l,f,_){const i=C("a-button"),p=C("CollapseContainer"),h=C("PageWrapper");return M(),P(h,{title:"\u6C34\u5370\u793A\u4F8B"},{default:d(()=>[u(p,{class:"w-full h-32 bg-white rounded-md",title:"Global WaterMark"},{default:d(()=>[u(i,{type:"primary",class:"mr-2",onClick:o[0]||(o[0]=t=>n.setWatermark("WaterMark Info"))},{default:d(()=>[N]),_:1}),u(i,{color:"error",class:"mr-2",onClick:n.clear},{default:d(()=>[T]),_:1},8,["onClick"]),u(i,{color:"warning",class:"mr-2",onClick:o[1]||(o[1]=t=>n.setWatermark("WaterMark Info New"))},{default:d(()=>[V]),_:1})]),_:1})]),_:1})}var X=B(L,[["render",j]]);export{X as default};