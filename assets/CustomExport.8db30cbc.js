import{B as d}from"./TableImg.3a1e0e27.js";import"./BasicForm.e6b43b32.js";import{E as f}from"./index.038e4887.js";import{c as _,d as s,j as E}from"./data.32988f28.js";import{b as B}from"./index.4c8aad17.js";import{P as C}from"./index.3693d59d.js";import{av as F,a as x,ax as t,o as b,j as g,z as r,n as p,B as M}from"./index.065dfc24.js";import"./index.73a47fee.js";import"./Checkbox.3713ceca.js";import"./index.85938da2.js";import"./index.a97ece72.js";import"./eagerComputed.0f895987.js";import"./useForm.61804103.js";import"./index.8587e190.js";import"./index.cb657b3f.js";import"./index.7199bbfe.js";import"./uuid.9bdf29ec.js";import"./index.537549ef.js";import"./_baseIteratee.93469a08.js";import"./get.817062c6.js";import"./DeleteOutlined.47b56d81.js";import"./index.d5331453.js";import"./useRefs.4759370c.js";import"./Form.adc4f818.js";import"./Col.cddb608c.js";import"./useFlexGapSupport.81e1a6d6.js";import"./useSize.a2c16550.js";import"./useWindowSizeFn.b1b92eb5.js";import"./index.427a8794.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.ceaf2f9b.js";import"./FullscreenOutlined.b1783304.js";import"./index.8956298c.js";import"./fromPairs.84aabb58.js";import"./scrollTo.4e4030ab.js";import"./index.e10b48ab.js";/* empty css              *//* empty css               */import"./index.53f31672.js";import"./index.299a22dc.js";import"./index.1739f783.js";import"./download.3eae6857.js";import"./base64Conver.08b9f4ec.js";import"./index.8ff2c330.js";import"./index.09a1c2b0.js";import"./uniqBy.fb23b9e2.js";import"./index.5b8b03d6.js";import"./index.eee6f788.js";import"./useContentViewHeight.1c3d485e.js";import"./ArrowLeftOutlined.ca5e5c0f.js";import"./index.6fa4bb48.js";import"./transButton.92e9c4c6.js";const A=x({components:{BasicTable:d,ExpExcelModal:f,PageWrapper:C},setup(){function o({filename:m,bookType:a}){E({data:s,filename:m,write2excelOpts:{bookType:a}})}const[e,{openModal:i}]=B();return{defaultHeader:o,columns:_,data:s,register:e,openModal:i}}}),S=M(" \u5BFC\u51FA ");function T(o,e,i,m,a,h){const n=t("a-button"),u=t("BasicTable"),c=t("ExpExcelModal"),l=t("PageWrapper");return b(),g(l,{title:"\u5BFC\u51FA\u793A\u4F8B",content:"\u53EF\u4EE5\u9009\u62E9\u5BFC\u51FA\u683C\u5F0F"},{default:r(()=>[p(u,{title:"\u57FA\u7840\u8868\u683C",columns:o.columns,dataSource:o.data},{toolbar:r(()=>[p(n,{onClick:o.openModal},{default:r(()=>[S]),_:1},8,["onClick"])]),_:1},8,["columns","dataSource"]),p(c,{onRegister:o.register,onSuccess:o.defaultHeader},null,8,["onRegister","onSuccess"])]),_:1})}var ho=F(A,[["render",T]]);export{ho as default};
