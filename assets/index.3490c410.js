import{_ as y}from"./index.ed2e72d1.js";import{t as C}from"./data.ec134722.js";import{P as B}from"./index.3693d59d.js";import{av as E,a as k,b0 as v,v as p,ax as r,o as A,j as K,z as a,n as e,ah as T,al as R,i as _,B as D}from"./index.065dfc24.js";import{C as $}from"./index.77e1db6f.js";import"./index.061a58e1.js";/* empty css               */import{R as L,C as b}from"./index.09a1c2b0.js";import"./fromPairs.84aabb58.js";import"./index.a97ece72.js";import"./eagerComputed.0f895987.js";import"./useContextMenu.8ece64c1.js";import"./index.427a8794.js";import"./get.817062c6.js";import"./index.5b8b03d6.js";import"./index.eee6f788.js";import"./useSize.a2c16550.js";import"./useWindowSizeFn.b1b92eb5.js";import"./useContentViewHeight.1c3d485e.js";import"./ArrowLeftOutlined.ca5e5c0f.js";import"./index.6fa4bb48.js";import"./transButton.92e9c4c6.js";import"./index.4e8e714e.js";import"./useRefs.4759370c.js";import"./PlusOutlined.a5143f39.js";import"./Col.cddb608c.js";import"./useFlexGapSupport.81e1a6d6.js";const w=k({components:{BasicTree:y,PageWrapper:B,Card:$,Row:L,Col:b,Spin:v},setup(){const t=p(null),d=p(null),F=p(null),c=p([]),l=p(!1);function h(n,i){}function o(){l.value=!0,setTimeout(()=>{c.value=T(C),l.value=!1,R(()=>{var n;_(d),(n=_(d))==null||n.expandAll(!0)})},2e3)}function u(){l.value=!0,setTimeout(()=>{c.value=T(C),l.value=!1},2e3)}const m=p([{title:"parent ",key:"0-0"}]);function f(n){return new Promise(i=>{if(!n.children){i();return}setTimeout(()=>{const s=_(t);if(s){const g=[{title:`Child Node ${n.eventKey}-0`,key:`${n.eventKey}-0`},{title:`Child Node ${n.eventKey}-1`,key:`${n.eventKey}-1`}];s.updateNodeByKey(n.eventKey,{children:g}),s.setExpandedKeys([n.eventKey,...s.getExpandedKeys()])}i()},1e3)})}return{treeData:C,handleCheck:h,tree:m,onLoadData:f,asyncTreeRef:t,asyncExpandTreeRef:d,loadTreeRef:F,tree2:c,loadTreeData:o,treeLoading:l,loadTreeData2:u}}}),P=D(" 123123 "),x=D("\u52A0\u8F7D\u6570\u636E"),S=D("\u8BF7\u6C42\u6570\u636E");function W(t,d,F,c,l,h){const o=r("BasicTree"),u=r("Col"),m=r("a-button"),f=r("Spin"),n=r("Card"),i=r("Row"),s=r("PageWrapper");return A(),K(s,{title:"Tree\u57FA\u7840\u793A\u4F8B"},{default:a(()=>[e(i,{gutter:[16,16]},{default:a(()=>[e(u,{span:8},{default:a(()=>[e(o,{title:"\u57FA\u7840\u793A\u4F8B\uFF0C\u9ED8\u8BA4\u5C55\u5F00\u7B2C\u4E00\u5C42",treeData:t.treeData,defaultExpandLevel:"1"},{title:a(()=>[P]),_:1},8,["treeData"])]),_:1}),e(u,{span:8},{default:a(()=>[e(o,{title:"\u53EF\u52FE\u9009\uFF0C\u9ED8\u8BA4\u5168\u90E8\u5C55\u5F00",treeData:t.treeData,checkable:!0,defaultExpandAll:"",onCheck:t.handleCheck},null,8,["treeData","onCheck"])]),_:1}),e(u,{span:8},{default:a(()=>[e(o,{title:"\u6307\u5B9A\u9ED8\u8BA4\u5C55\u5F00/\u52FE\u9009\u793A\u4F8B",treeData:t.treeData,checkable:!0,expandedKeys:["0-0"],checkedKeys:["0-0"]},null,8,["treeData"])]),_:1}),e(u,{span:8},{default:a(()=>[e(o,{title:"\u61D2\u52A0\u8F7D\u5F02\u6B65\u6811",ref:"asyncTreeRef",treeData:t.tree,"load-data":t.onLoadData},null,8,["treeData","load-data"])]),_:1}),e(u,{span:8},{default:a(()=>[e(n,{title:"\u5F02\u6B65\u6570\u636E\uFF0C\u9ED8\u8BA4\u5C55\u5F00"},{extra:a(()=>[e(m,{onClick:t.loadTreeData,loading:t.treeLoading},{default:a(()=>[x]),_:1},8,["onClick","loading"])]),default:a(()=>[e(f,{spinning:t.treeLoading},{default:a(()=>[e(o,{ref:"asyncExpandTreeRef",treeData:t.tree2},null,8,["treeData"])]),_:1},8,["spinning"])]),_:1})]),_:1}),e(u,{span:8},{default:a(()=>[e(n,{title:"BasicTree\u5185\u7F6E\u52A0\u8F7D"},{extra:a(()=>[e(m,{onClick:t.loadTreeData2,loading:t.treeLoading},{default:a(()=>[S]),_:1},8,["onClick","loading"])]),default:a(()=>[e(o,{ref:"loadTreeRef",treeData:t.tree2,loading:t.treeLoading},null,8,["treeData","loading"])]),_:1})]),_:1})]),_:1})]),_:1})}var de=E(w,[["render",W]]);export{de as default};