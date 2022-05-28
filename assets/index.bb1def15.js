var de=Object.defineProperty,fe=Object.defineProperties;var ge=Object.getOwnPropertyDescriptors;var J=Object.getOwnPropertySymbols;var we=Object.prototype.hasOwnProperty,he=Object.prototype.propertyIsEnumerable;var U=(e,s,o)=>s in e?de(e,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[s]=o,D=(e,s)=>{for(var o in s||(s={}))we.call(s,o)&&U(e,o,s[o]);if(J)for(var o of J(s))he.call(s,o)&&U(e,o,s[o]);return e},H=(e,s)=>fe(e,ge(s));var G=(e,s,o)=>new Promise((c,l)=>{var p=i=>{try{r(o.next(i))}catch(u){l(u)}},t=i=>{try{r(o.throw(i))}catch(u){l(u)}},r=i=>i.done?c(i.value):Promise.resolve(i.value).then(p,t);r((o=o.apply(e,s)).next())});import{c as Z,a as N,b as j,f as w,av as z,ax as C,o as f,h as B,F as me,aB as g,j as S,z as h,B as R,t as T,ay as O,k as P,q as k,bl as x,dJ as ye,aF as V,m as K,n as A,bD as De,v,cz as Ce,a7 as Q,dE as W,i as a,am as b,cy as ve,al as ee,aw as te,bP as ke,az as X,x as $e,aA as be,aC as Be,aD as Pe,as as F,w as oe,au as se,cD as Se,ap as Te,dD as re,L as Oe,aE as Fe}from"./index.065dfc24.js";import{D as _e}from"./index.20cd6538.js";import{A as Le}from"./ArrowLeftOutlined.ca5e5c0f.js";const{t:Y}=Z(),ne={confirmLoading:{type:Boolean},showCancelBtn:{type:Boolean,default:!0},cancelButtonProps:Object,cancelText:{type:String,default:Y("common.cancelText")},showOkBtn:{type:Boolean,default:!0},okButtonProps:Object,okText:{type:String,default:Y("common.okText")},okType:{type:String,default:"primary"},showFooter:{type:Boolean},footerHeight:{type:[String,Number],default:60}},He=D({isDetail:{type:Boolean},title:{type:String,default:""},loadingText:{type:String},showDetailBack:{type:Boolean,default:!0},visible:{type:Boolean},loading:{type:Boolean},maskClosable:{type:Boolean,default:!0},getContainer:{type:[Object,String]},closeFunc:{type:[Function,Object],default:null},destroyOnClose:{type:Boolean}},ne);const Ve=N({name:"BasicDrawerFooter",props:H(D({},ne),{height:{type:String,default:"60px"}}),emits:["ok","close"],setup(e,{emit:s}){const{prefixCls:o}=j("basic-drawer-footer"),c=w(()=>{const t=`${e.height}`;return{height:t,lineHeight:t}});function l(){s("ok")}function p(){s("close")}return{handleOk:l,prefixCls:o,handleClose:p,getStyle:c}}});function Re(e,s,o,c,l,p){const t=C("a-button");return e.showFooter||e.$slots.footer?(f(),B("div",{key:0,class:k(e.prefixCls),style:x(e.getStyle)},[e.$slots.footer?g(e.$slots,"footer",{key:1}):(f(),B(me,{key:0},[g(e.$slots,"insertFooter"),e.showCancelBtn?(f(),S(t,O({key:0},e.cancelButtonProps,{onClick:e.handleClose,class:"mr-2"}),{default:h(()=>[R(T(e.cancelText),1)]),_:1},16,["onClick"])):P("",!0),g(e.$slots,"centerFooter"),e.showOkBtn?(f(),S(t,O({key:1,type:e.okType,onClick:e.handleOk},e.okButtonProps,{class:"mr-2",loading:e.confirmLoading}),{default:h(()=>[R(T(e.okText),1)]),_:1},16,["type","onClick","loading"])):P("",!0),g(e.$slots,"appendFooter")],64))],6)):P("",!0)}var Ae=z(Ve,[["render",Re]]);const Ee=N({name:"BasicDrawerHeader",components:{BasicTitle:ye,ArrowLeftOutlined:Le},props:{isDetail:V.bool,showDetailBack:V.bool,title:V.string},emits:["close"],setup(e,{emit:s}){const{prefixCls:o}=j("basic-drawer-header");function c(){s("close")}return{prefixCls:o,handleClose:c}}}),Ne={key:1};function je(e,s,o,c,l,p){const t=C("BasicTitle"),r=C("ArrowLeftOutlined");return e.isDetail?(f(),B("div",{key:1,class:k([e.prefixCls,`${e.prefixCls}--detail`])},[K("span",{class:k(`${e.prefixCls}__twrap`)},[e.showDetailBack?(f(),B("span",{key:0,onClick:s[0]||(s[0]=(...i)=>e.handleClose&&e.handleClose(...i))},[A(r,{class:k(`${e.prefixCls}__back`)},null,8,["class"])])):P("",!0),e.title?(f(),B("span",Ne,T(e.title),1)):P("",!0)],2),K("span",{class:k(`${e.prefixCls}__toolbar`)},[g(e.$slots,"titleToolbar")],2)],2)):(f(),S(t,{key:0,class:k(e.prefixCls)},{default:h(()=>[g(e.$slots,"title"),R(" "+T(e.$slots.title?"":e.title),1)]),_:3},8,["class"]))}var ze=z(Ee,[["render",je]]);const qe=N({components:{Drawer:_e,ScrollContainer:De,DrawerFooter:Ae,DrawerHeader:ze},inheritAttrs:!1,props:He,emits:["visible-change","ok","close","register"],setup(e,{emit:s}){const o=v(!1),c=Ce(),l=v(null),{t:p}=Z(),{prefixVar:t,prefixCls:r}=j("basic-drawer"),i={setDrawerProps:ce,emitVisible:void 0},u=F();u&&s("register",i,u.uid);const y=w(()=>W(b(e),a(l))),m=w(()=>{const n=H(D(D({placement:"right"},a(c)),a(y)),{visible:a(o)});n.title=void 0;const{isDetail:d,width:L,wrapClassName:I,getContainer:pe}=n;if(d){L||(n.width="100%");const M=`${r}__detail`;n.class=I?`${I} ${M}`:M,pe||(n.getContainer=`.${t}-layout-content`)}return n}),_=w(()=>D(D({},c),a(m))),q=w(()=>{const{footerHeight:n,showFooter:d}=a(m);return d&&n?ve(n)?`${n}px`:`${n.replace("px","")}px`:"0px"}),ae=w(()=>{const n=a(q);return{position:"relative",height:`calc(100% - ${n})`}}),le=w(()=>{var n;return!!((n=a(m))!=null&&n.loading)});Q(()=>e.visible,(n,d)=>{n!==d&&(o.value=n)},{deep:!0}),Q(()=>o.value,n=>{ee(()=>{var d;s("visible-change",n),u&&((d=i.emitVisible)==null||d.call(i,n,u.uid))})});function ie(n){return G(this,null,function*(){const{closeFunc:d}=a(m);if(s("close",n),d&&te(d)){const L=yield d();o.value=!L;return}o.value=!1})}function ce(n){l.value=W(a(l)||{},n),Reflect.has(n,"visible")&&(o.value=!!n.visible)}function ue(){s("ok")}return{onClose:ie,t:p,prefixCls:r,getMergeProps:y,getScrollContentStyle:ae,getProps:m,getLoading:le,getBindValues:_,getFooterHeight:q,handleOk:ue}}});function Ie(e,s,o,c,l,p){const t=C("DrawerHeader"),r=C("ScrollContainer"),i=C("DrawerFooter"),u=C("Drawer"),y=ke("loading");return f(),S(u,O({class:e.prefixCls,onClose:e.onClose},e.getBindValues),X({default:h(()=>[$e((f(),S(r,{style:x(e.getScrollContentStyle),"loading-tip":e.loadingText||e.t("common.loadingText")},{default:h(()=>[g(e.$slots,"default")]),_:3},8,["style","loading-tip"])),[[y,e.getLoading]]),A(i,O(e.getProps,{onClose:e.onClose,onOk:e.handleOk,height:e.getFooterHeight}),X({_:2},[be(Object.keys(e.$slots),m=>({name:m,fn:h(_=>[g(e.$slots,m,Be(Pe(_||{})))])}))]),1040,["onClose","onOk","height"])]),_:2},[e.$slots.title?{name:"title",fn:h(()=>[g(e.$slots,"title")])}:{name:"title",fn:h(()=>[A(t,{title:e.getMergeProps.title,isDetail:e.isDetail,showDetailBack:e.showDetailBack,onClose:e.onClose},{titleToolbar:h(()=>[g(e.$slots,"titleToolbar")]),_:3},8,["title","isDetail","showDetailBack","onClose"])])}]),1040,["class","onClose"])}var Me=z(qe,[["render",Ie]]);const $=oe({}),E=oe({});function Qe(){if(!F())throw new Error("useDrawer() can only be used inside setup() or functional components!");const e=v(null),s=v(!1),o=v("");function c(t,r){se(()=>{e.value=null,s.value=null,$[a(o)]=null}),!(a(s)&&Se()&&t===a(e))&&(o.value=r,e.value=t,s.value=!0,t.emitVisible=(i,u)=>{E[u]=i})}const l=()=>{const t=a(e);return t||re("useDrawer instance is undefined!"),t},p={setDrawerProps:t=>{var r;(r=l())==null||r.setDrawerProps(t)},getVisible:w(()=>E[~~a(o)]),openDrawer:(t=!0,r,i=!0)=>{var y;if((y=l())==null||y.setDrawerProps({visible:t}),!r)return;if(i){$[a(o)]=null,$[a(o)]=b(r);return}Te(b($[a(o)]),b(r))||($[a(o)]=b(r))},closeDrawer:()=>{var t;(t=l())==null||t.setDrawerProps({visible:!1})}};return[c,p]}const We=e=>{const s=v(null),o=F(),c=v("");if(!F())throw new Error("useDrawerInner() can only be used inside setup() or functional components!");const l=()=>{const t=a(s);if(!t){re("useDrawerInner instance is undefined!");return}return t},p=(t,r)=>{se(()=>{s.value=null}),c.value=r,s.value=t,o==null||o.emit("register",t,r)};return Oe(()=>{const t=$[a(c)];!t||!e||!te(e)||ee(()=>{e(t)})}),[p,{changeLoading:(t=!0)=>{var r;(r=l())==null||r.setDrawerProps({loading:t})},changeOkLoading:(t=!0)=>{var r;(r=l())==null||r.setDrawerProps({confirmLoading:t})},getVisible:w(()=>E[~~a(c)]),closeDrawer:()=>{var t;(t=l())==null||t.setDrawerProps({visible:!1})},setDrawerProps:t=>{var r;(r=l())==null||r.setDrawerProps(t)}}]},Xe=Fe(Me);export{Xe as B,We as a,Qe as u};
