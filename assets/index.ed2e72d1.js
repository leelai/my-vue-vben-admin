var $e=Object.defineProperty,Pe=Object.defineProperties;var Ue=Object.getOwnPropertyDescriptors;var se=Object.getOwnPropertySymbols;var je=Object.prototype.hasOwnProperty,me=Object.prototype.propertyIsEnumerable;var re=(e,t,a)=>t in e?$e(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,O=(e,t)=>{for(var a in t||(t={}))je.call(t,a)&&re(e,a,t[a]);if(se)for(var a of se(t))me.call(t,a)&&re(e,a,t[a]);return e},ie=(e,t)=>Pe(e,Ue(t));var oe=(e,t,a)=>new Promise((y,E)=>{var K=g=>{try{p(a.next(g))}catch(v){E(v)}},c=g=>{try{p(a.throw(g))}catch(v){E(v)}},p=g=>g.done?y(g.value):Promise.resolve(g.value).then(K,c);p((a=a.apply(e,t)).next())});import{eK as Re,eL as Ve,eM as He,eN as Ye,eO as Xe,eP as ze,eb as qe,eh as de,eQ as Ge,eR as Je,eS as We,eT as Ze,a as Le,v as Ae,eU as Qe,c as et,f as I,a7 as P,o as M,h as j,i as r,aB as tt,k as $,j as J,z as m,B as ue,t as he,dJ as nt,q as fe,n as C,eV as at,F as Z,aA as lt,ce as ct,aC as st,aD as rt,eW as it,b6 as ot,b5 as Q,bk as dt,cF as ut,bs as ht,eX as ft,bR as yt,ah as ee,eY as ye,w as pe,am as X,dn as pt,ao as kt,aw as W,eZ as gt,ep as St,L as R,N as Kt,e_ as xt,dG as bt,cA as Lt,b0 as At,x as ke,y as ge,bD as Ct,ay as vt,e8 as Se,e$ as Et,bp as Ke,cB as Tt}from"./index.065dfc24.js";import{f as _t}from"./fromPairs.84aabb58.js";import{b as Bt}from"./index.a97ece72.js";import{u as wt}from"./useContextMenu.8ece64c1.js";import{g as Dt}from"./get.817062c6.js";var Ft=200;function Nt(e,t,a,y){var E=-1,K=Ye,c=!0,p=e.length,g=[],v=t.length;if(!p)return g;a&&(t=Re(t,Ve(a))),y?(K=Xe,c=!1):t.length>=Ft&&(K=ze,c=!1,t=new He(t));e:for(;++E<p;){var S=e[E],o=a==null?S:a(S);if(S=y||S!==0?S:0,c&&o===o){for(var n=v;n--;)if(t[n]===o)continue e;g.push(S)}else K(t,o,y)||g.push(S)}return g}var Mt=qe(function(e,t){return de(e)?Nt(e,Ge(t,1,de,!0)):[]}),It=Mt;function te(e,t){return t?typeof t=="string"?` ${e}--${t}`:Array.isArray(t)?t.reduce((a,y)=>a+te(e,y),""):Object.keys(t).reduce((a,y)=>a+(t[y]?te(e,y):""),""):""}function Ot(e){return(t,a)=>(t&&typeof t!="string"&&(a=t,t=""),t=t?`${e}__${t}`:e,`${t}${te(t,a)}`)}function Ce(e){return[Ot(`${Je}-${e}`)]}const xe=Symbol(),be=Symbol();function $t(e,t){if(!We(e)||!!e[be])return e;const{values:a,required:y,default:E,type:K,validator:c}=e,p=a||c?g=>{let v=!1,S=[];if(a&&(S=[...a,E],v||(v=S.includes(g))),c&&(v||(v=c(g))),!v&&S.length>0){const o=[...new Set(S)].map(n=>JSON.stringify(n)).join(", ");Ze(`Invalid prop: validation failed${t?` for prop "${t}"`:""}. Expected one of [${o}], got value ${JSON.stringify(g)}.`)}return v}:void 0;return{type:typeof K=="object"&&Object.getOwnPropertySymbols(K).includes(xe)?K[xe]:K,required:!!y,default:E,validator:p,[be]:!0}}const Pt=e=>_t(Object.entries(e).map(([t,a])=>[t,$t(a,t)]));var _=(e=>(e[e.SELECT_ALL=0]="SELECT_ALL",e[e.UN_SELECT_ALL=1]="UN_SELECT_ALL",e[e.EXPAND_ALL=2]="EXPAND_ALL",e[e.UN_EXPAND_ALL=3]="UN_EXPAND_ALL",e[e.CHECK_STRICTLY=4]="CHECK_STRICTLY",e[e.CHECK_UN_STRICTLY=5]="CHECK_UN_STRICTLY",e))(_||{});const Ut=["update:expandedKeys","update:selectedKeys","update:value","change","check","update:searchValue"],jt=Pt({value:{type:[Object,Array]},renderIcon:{type:Function},helpMessage:{type:[String,Array],default:""},title:{type:String,default:""},toolbar:Boolean,search:Boolean,searchValue:{type:String,default:""},checkStrictly:Boolean,clickRowToExpand:{type:Boolean,default:!1},checkable:Boolean,defaultExpandLevel:{type:[String,Number],default:""},defaultExpandAll:Boolean,fieldNames:{type:Object},treeData:{type:Array},actionList:{type:Array,default:()=>[]},expandedKeys:{type:Array,default:()=>[]},selectedKeys:{type:Array,default:()=>[]},checkedKeys:{type:Array,default:()=>[]},beforeRightClick:{type:Function,default:void 0},rightMenuList:{type:Array},filterFn:{type:Function,default:void 0},highlight:{type:[Boolean,String],default:!1},expandOnSearch:Boolean,checkOnSearch:Boolean,selectedOnSearch:Boolean,loading:{type:Boolean,default:!1}}),mt={key:2,class:"flex items-center flex-1 cursor-pointer justify-self-stretch"},Rt=Le({name:"TreeHeader",props:{helpMessage:{type:[String,Array],default:""},title:{type:String,default:""},toolbar:{type:Boolean,default:!1},checkable:{type:Boolean,default:!1},search:{type:Boolean,default:!1},searchText:{type:String,default:""},checkAll:{type:Function,default:void 0},expandAll:{type:Function,default:void 0}},emits:["strictly-change","search"],setup(e,{emit:t}){const a=e,y=Ae(""),[E]=Ce("tree-header"),K=Qe(),{t:c}=et(),p=I(()=>{const n=K.headerTitle||a.title;return["mr-1","w-full",{["ml-5"]:n}]}),g=I(()=>{const{checkable:n}=a,s=[{label:c("component.tree.expandAll"),value:_.EXPAND_ALL},{label:c("component.tree.unExpandAll"),value:_.UN_EXPAND_ALL,divider:n}];return n?[{label:c("component.tree.selectAll"),value:_.SELECT_ALL},{label:c("component.tree.unSelectAll"),value:_.UN_SELECT_ALL,divider:n},...s,{label:c("component.tree.checkStrictly"),value:_.CHECK_STRICTLY},{label:c("component.tree.checkUnStrictly"),value:_.CHECK_UN_STRICTLY}]:s});function v(n){var i,d,h,u;const{key:s}=n;switch(s){case _.SELECT_ALL:(i=a.checkAll)==null||i.call(a,!0);break;case _.UN_SELECT_ALL:(d=a.checkAll)==null||d.call(a,!1);break;case _.EXPAND_ALL:(h=a.expandAll)==null||h.call(a,!0);break;case _.UN_EXPAND_ALL:(u=a.expandAll)==null||u.call(a,!1);break;case _.CHECK_STRICTLY:t("strictly-change",!1);break;case _.CHECK_UN_STRICTLY:t("strictly-change",!0);break}}function S(n){t("search",n)}const o=ht(S,200);return P(()=>y.value,n=>{o(n)}),P(()=>a.searchText,n=>{n!==y.value&&(y.value=n)}),(n,s)=>(M(),j("div",{class:fe([r(E)(),"flex px-2 py-1.5 items-center"])},[r(K).headerTitle?tt(n.$slots,"headerTitle",{key:0}):$("",!0),!r(K).headerTitle&&n.title?(M(),J(r(nt),{key:1,helpMessage:n.helpMessage},{default:m(()=>[ue(he(n.title),1)]),_:1},8,["helpMessage"])):$("",!0),n.search||n.toolbar?(M(),j("div",mt,[n.search?(M(),j("div",{key:0,class:fe(r(p))},[C(r(at),{placeholder:r(c)("common.searchText"),size:"small",allowClear:"",value:y.value,"onUpdate:value":s[0]||(s[0]=i=>y.value=i)},null,8,["placeholder","value"])],2)):$("",!0),n.toolbar?(M(),J(r(ut),{key:1,onClick:s[1]||(s[1]=dt(()=>{},["prevent"]))},{overlay:m(()=>[C(r(ot),{onClick:v},{default:m(()=>[(M(!0),j(Z,null,lt(r(g),i=>(M(),j(Z,{key:i.value},[C(r(ct),st(rt({key:i.value})),{default:m(()=>[ue(he(i.label),1)]),_:2},1040),i.divider?(M(),J(r(it),{key:0})):$("",!0)],64))),128))]),_:1})]),default:m(()=>[C(r(Q),{icon:"ion:ellipsis-vertical"})]),_:1})):$("",!0)])):$("",!0)],2))}}),Vt=({icon:e})=>e?ft(e)?yt(Q,{icon:e,class:"mr-1"}):Q:null;function Ht(e,t){function a(o){const n=[],s=o||r(e),{key:i,children:d}=r(t);if(!d||!i)return n;for(let h=0;h<s.length;h++){const u=s[h];n.push(u[i]);const k=u[d];k&&k.length&&n.push(...a(k))}return n}function y(o){const n=[],s=o||r(e),{key:i,children:d}=r(t);if(!d||!i)return n;for(let h=0;h<s.length;h++){const u=s[h];u.disabled!==!0&&u.selectable!==!1&&n.push(u[i]);const k=u[d];k&&k.length&&n.push(...y(k))}return n}function E(o,n){const s=[],i=n||r(e),{key:d,children:h}=r(t);if(!h||!d)return s;for(let u=0;u<i.length;u++){const k=i[u],T=k[h];o===k[d]?(s.push(k[d]),T&&T.length&&s.push(...a(T))):T&&T.length&&s.push(...E(o,T))}return s}function K(o,n,s){if(!o)return;const i=s||r(e),{key:d,children:h}=r(t);if(!(!h||!d))for(let u=0;u<i.length;u++){const k=i[u],T=k[h];if(k[d]===o){i[u]=O(O({},i[u]),n);break}else T&&T.length&&K(o,n,k[h])}}function c(o=1,n,s=1){if(!o)return[];const i=[],d=n||r(e)||[];for(let h=0;h<d.length;h++){const u=d[h],{key:k,children:T}=r(t),z=k?u[k]:"",U=T?u[T]:[];i.push(z),U&&U.length&&s<o&&(s+=1,i.push(...c(o,U,s)))}return i}function p({parentKey:o=null,node:n,push:s="push"}){const i=ee(r(e));if(!o){i[s](n),e.value=i;return}const{key:d,children:h}=r(t);!h||!d||(ye(i,u=>{if(u[d]===o)return u[h]=u[h]||[],u[h][s](n),!0}),e.value=i)}function g({parentKey:o=null,list:n,push:s="push"}){const i=ee(r(e));if(!(!n||n.length<1))if(o){const{key:d,children:h}=r(t);if(!h||!d)return;ye(i,u=>{if(u[d]===o){u[h]=u[h]||[];for(let k=0;k<n.length;k++)u[h][s](n[k]);return e.value=i,!0}})}else for(let d=0;d<n.length;d++)i[s](n[d])}function v(o,n){if(!o)return;const s=n||r(e),{key:i,children:d}=r(t);if(!(!d||!i))for(let h=0;h<s.length;h++){const u=s[h],k=u[d];if(u[i]===o){s.splice(h,1);break}else k&&k.length&&v(o,u[d])}}function S(o,n,s){return!o&&o!==0?null:((n||r(e)).forEach(d=>{if((s==null?void 0:s.key)||(s==null?void 0:s.key)===0)return s;if(d.key===o){s=d;return}d.children&&d.children.length&&(s=S(o,d.children,s))}),s||null)}return{deleteNodeByKey:v,insertNodeByKey:p,insertNodesByKey:g,filterByLevel:c,updateNodeByKey:K,getAllKeys:a,getChildrenKeys:E,getEnabledKeys:y,getSelectedNode:S}}function Yt(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Lt(e)}var Zt=Le({name:"BasicTree",inheritAttrs:!1,props:jt,emits:Ut,setup(e,{attrs:t,slots:a,emit:y,expose:E}){const[K]=Ce("tree"),c=pe({checkStrictly:e.checkStrictly,expandedKeys:e.expandedKeys||[],selectedKeys:e.selectedKeys||[],checkedKeys:e.checkedKeys||[]}),p=pe({startSearch:!1,searchText:"",searchData:[]}),g=Ae([]),[v]=wt(),S=I(()=>{const{fieldNames:l}=e;return O({children:"children",title:"title",key:"key"},l)}),o=I(()=>{let l=ie(O(O({blockNode:!0},t),e),{expandedKeys:c.expandedKeys,selectedKeys:c.selectedKeys,checkedKeys:c.checkedKeys,checkStrictly:c.checkStrictly,fieldNames:r(S),"onUpdate:expandedKeys":f=>{c.expandedKeys=f,y("update:expandedKeys",f)},"onUpdate:selectedKeys":f=>{c.selectedKeys=f,y("update:selectedKeys",f)},onCheck:(f,b)=>{let x=X(c.checkedKeys);if(pt(x)&&p.startSearch){const{key:A}=r(S);x=It(x,z(b.node.$attrs.node[A])),b.checked&&x.push(b.node.$attrs.node[A]),c.checkedKeys=x}else c.checkedKeys=f;const L=X(c.checkedKeys);y("update:value",L),y("check",L,b)},onRightClick:Te});return kt(l,"treeData","class")}),n=I(()=>p.startSearch?p.searchData:r(g)),s=I(()=>!n.value||n.value.length===0),{deleteNodeByKey:i,insertNodeByKey:d,insertNodesByKey:h,filterByLevel:u,updateNodeByKey:k,getAllKeys:T,getChildrenKeys:z,getEnabledKeys:U,getSelectedNode:ve}=Ht(g,S);function Ee(l,f){return!f&&e.renderIcon&&W(e.renderIcon)?e.renderIcon(l):f}function Te(b){return oe(this,arguments,function*({event:l,node:f}){var D;const{rightMenuList:x=[],beforeRightClick:L}=e;let A={event:l,items:[]};if(L&&W(L)){let B=yield L(f,l);Array.isArray(B)?A.items=B:Object.assign(A,B)}else A.items=x;!((D=A.items)!=null&&D.length)||(A.items=A.items.filter(B=>!B.hidden),v(A))})}function V(l){c.expandedKeys=l}function _e(){return c.expandedKeys}function ne(l){c.selectedKeys=l}function Be(){return c.selectedKeys}function ae(l){c.checkedKeys=l}function we(){return c.checkedKeys}function le(l){c.checkedKeys=l?U():[]}function q(l){c.expandedKeys=l?T():[]}function De(l){c.checkStrictly=l}P(()=>e.searchValue,l=>{l!==p.searchText&&(p.searchText=l)},{immediate:!0}),P(()=>e.treeData,l=>{l&&G(p.searchText)});function G(l){if(l!==p.searchText&&(p.searchText=l),y("update:searchValue",l),!l){p.startSearch=!1;return}const{filterFn:f,checkable:b,expandOnSearch:x,checkOnSearch:L,selectedOnSearch:A}=r(e);p.startSearch=!0;const{title:D,key:B}=r(S),F=[];if(p.searchData=gt(r(g),w=>{var H,Y;const N=f?f(l,w,r(S)):(Y=(H=w[D])==null?void 0:H.includes(l))!=null?Y:!1;return N&&F.push(w[B]),N},r(S)),x){const w=St(p.searchData).map(N=>N[B]);w&&w.length&&V(w)}L&&b&&F.length&&ae(F),A&&F.length&&ne(F)}function Fe(l,f){if(!(!e.clickRowToExpand||!f||f.length===0))if(!c.expandedKeys.includes(l))V([...c.expandedKeys,l]);else{const b=[...c.expandedKeys],x=b.findIndex(L=>L===l);x!==-1&&b.splice(x,1),V(b)}}R(()=>{g.value=e.treeData}),Kt(()=>{const l=parseInt(e.defaultExpandLevel);l>0?c.expandedKeys=u(l):e.defaultExpandAll&&q(!0)}),R(()=>{c.expandedKeys=e.expandedKeys}),R(()=>{c.selectedKeys=e.selectedKeys}),R(()=>{c.checkedKeys=e.checkedKeys}),P(()=>e.value,()=>{c.checkedKeys=X(e.value||[])},{immediate:!0}),P(()=>c.checkedKeys,()=>{const l=X(c.checkedKeys);y("update:value",l),y("change",l)}),R(()=>{c.checkStrictly=e.checkStrictly});const Ne={setExpandedKeys:V,getExpandedKeys:_e,setSelectedKeys:ne,getSelectedKeys:Be,setCheckedKeys:ae,getCheckedKeys:we,insertNodeByKey:d,insertNodesByKey:h,deleteNodeByKey:i,updateNodeByKey:k,getSelectedNode:ve,checkAll:le,expandAll:q,filterByLevel:l=>{c.expandedKeys=u(l)},setSearchValue:l=>{G(l)},getSearchValue:()=>p.searchText};function Me(l){const{actionList:f}=e;if(!(!f||f.length===0))return f.map((b,x)=>{var A;let L=!0;return W(b.show)?L=(A=b.show)==null?void 0:A.call(b,l):Ke(b.show)&&(L=b.show),L?C("span",{key:x,class:K("action")},[b.render(l)]):null})}const Ie=I(()=>{const l=ee(n.value);return xt(l,(f,b)=>{var ce;const x=p.searchText,{highlight:L}=r(e),{title:A,key:D,children:B}=r(S),F=Ee(f,f.icon),w=Dt(f,A),N=x?w.indexOf(x):-1,H=p.startSearch&&!Et(x)&&L&&N!==-1,Y=`color: ${Ke(L)?"#f50":L}`,Oe=H?C("span",{class:(ce=r(o))!=null&&ce.blockNode?`${K("content")}`:""},[C("span",null,[w.substr(0,N)]),C("span",{style:Y},[x]),C("span",null,[w.substr(N+x.length)])]):w;return f[A]=C("span",{class:`${K("title")} pl-2`,onClick:Fe.bind(null,f[D],f[B])},[a!=null&&a.title?Tt(a,"title",f):C(Z,null,[F&&C(Vt,{icon:F},null),Oe,C("span",{class:K("actions")},[Me(f)])])]),f}),l});return E(Ne),()=>{let l;const{title:f,helpMessage:b,toolbar:x,search:L,checkable:A}=e,D=f||x||L||a.headerTitle,B={height:"calc(100% - 38px)"};return C("div",{class:[K(),"h-full",t.class]},[D&&C(Rt,{checkable:A,checkAll:le,expandAll:q,title:f,search:L,toolbar:x,helpMessage:b,onStrictlyChange:De,onSearch:G,searchText:p.searchText},Yt(l=bt(a))?l:{default:()=>[l]}),C(At,{spinning:r(e.loading),tip:"\u52A0\u8F7D\u4E2D..."},{default:()=>[ke(C(Ct,{style:B},{default:()=>[C(Bt,vt(r(o),{showIcon:!1,treeData:Ie.value}),null)]}),[[ge,!r(s)]]),ke(C(Se,{image:Se.PRESENTED_IMAGE_SIMPLE,class:"!mt-4"},null),[[ge,r(s)]])]})])}}});export{Zt as _};