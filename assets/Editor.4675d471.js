import{B as s}from"./BasicForm.e6b43b32.js";import{av as u,a as l,cC as c,ax as r,o as d,j as f,z as i,n as p,bR as C,E as _}from"./index.065dfc24.js";import{M as h}from"./index.8e4a3882.js";import{P as b}from"./index.3693d59d.js";/* empty css              *//* empty css               */import"./index.427a8794.js";import"./index.73a47fee.js";import"./Checkbox.3713ceca.js";import"./index.85938da2.js";import"./index.7199bbfe.js";import"./index.8587e190.js";import"./index.cb657b3f.js";import"./index.53f31672.js";import"./get.817062c6.js";import"./index.a97ece72.js";import"./eagerComputed.0f895987.js";import"./index.537549ef.js";import"./_baseIteratee.93469a08.js";import"./DeleteOutlined.47b56d81.js";import"./index.d5331453.js";import"./useRefs.4759370c.js";import"./Form.adc4f818.js";import"./Col.cddb608c.js";import"./useFlexGapSupport.81e1a6d6.js";import"./useSize.a2c16550.js";import"./index.299a22dc.js";import"./index.4c8aad17.js";import"./useWindowSizeFn.b1b92eb5.js";import"./FullscreenOutlined.b1783304.js";import"./index.1739f783.js";import"./index.8956298c.js";import"./uuid.9bdf29ec.js";import"./download.3eae6857.js";import"./base64Conver.08b9f4ec.js";import"./index.8ff2c330.js";import"./index.09a1c2b0.js";import"./uniqBy.fb23b9e2.js";import"./index.5b8b03d6.js";import"./index.eee6f788.js";import"./useContentViewHeight.1c3d485e.js";import"./ArrowLeftOutlined.ca5e5c0f.js";import"./index.6fa4bb48.js";import"./transButton.92e9c4c6.js";const g=[{field:"title",component:"Input",label:"title",defaultValue:"\u6807\u9898",rules:[{required:!0}]},{field:"markdown",component:"Input",label:"markdown",defaultValue:"defaultValue",rules:[{required:!0,trigger:"blur"}],render:({model:o,field:t})=>C(h,{value:o[t],onChange:e=>{o[t]=e}})}],k=l({components:{BasicForm:s,CollapseContainer:c,PageWrapper:b},setup(){const{createMessage:o}=_();return{schemas:g,handleSubmit:t=>{o.success("click search,values:"+JSON.stringify(t))}}}});function B(o,t,e,w,F,M){const a=r("BasicForm"),m=r("CollapseContainer"),n=r("PageWrapper");return d(),f(n,{title:"MarkDown\u7EC4\u4EF6\u5D4C\u5165Form\u793A\u4F8B"},{default:i(()=>[p(m,{title:"MarkDown\u8868\u5355"},{default:i(()=>[p(a,{labelWidth:100,schemas:o.schemas,actionColOptions:{span:24},onSubmit:o.handleSubmit},null,8,["schemas","onSubmit"])]),_:1})]),_:1})}var _o=u(k,[["render",B]]);export{_o as default};
