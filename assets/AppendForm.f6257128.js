var B=(e,n,r)=>new Promise((l,i)=>{var t=o=>{try{p(r.next(o))}catch(m){i(m)}},a=o=>{try{p(r.throw(o))}catch(m){i(m)}},p=o=>o.done?l(o.value):Promise.resolve(o.value).then(t,a);p((r=r.apply(e,n)).next())});import{B as h}from"./BasicForm.e6b43b32.js";import{u as $}from"./useForm.61804103.js";import{av as P,a as g,cC as k,I as _,dx as F,v as I,ax as u,o as d,j as f,z as s,n as C,k as b,B as v}from"./index.065dfc24.js";import{P as y}from"./index.3693d59d.js";/* empty css              *//* empty css               */import"./index.427a8794.js";import"./index.73a47fee.js";import"./Checkbox.3713ceca.js";import"./index.85938da2.js";import"./index.7199bbfe.js";import"./index.8587e190.js";import"./index.cb657b3f.js";import"./index.53f31672.js";import"./get.817062c6.js";import"./index.a97ece72.js";import"./eagerComputed.0f895987.js";import"./index.537549ef.js";import"./_baseIteratee.93469a08.js";import"./DeleteOutlined.47b56d81.js";import"./index.d5331453.js";import"./useRefs.4759370c.js";import"./Form.adc4f818.js";import"./Col.cddb608c.js";import"./useFlexGapSupport.81e1a6d6.js";import"./useSize.a2c16550.js";import"./index.299a22dc.js";import"./index.4c8aad17.js";import"./useWindowSizeFn.b1b92eb5.js";import"./FullscreenOutlined.b1783304.js";import"./index.1739f783.js";import"./index.8956298c.js";import"./uuid.9bdf29ec.js";import"./download.3eae6857.js";import"./base64Conver.08b9f4ec.js";import"./index.8ff2c330.js";import"./index.09a1c2b0.js";import"./uniqBy.fb23b9e2.js";import"./index.5b8b03d6.js";import"./index.eee6f788.js";import"./useContentViewHeight.1c3d485e.js";import"./ArrowLeftOutlined.ca5e5c0f.js";import"./index.6fa4bb48.js";import"./transButton.92e9c4c6.js";const S=g({components:{BasicForm:h,CollapseContainer:k,PageWrapper:y,[_.name]:_,Button:F},setup(){const[e,{appendSchemaByField:n,removeSchemaByFiled:r,validate:l}]=$({schemas:[{field:"field0a",component:"Input",label:"\u5B57\u6BB50",colProps:{span:8},required:!0},{field:"field0b",component:"Input",label:"\u5B57\u6BB50",colProps:{span:8},required:!0},{field:"0",component:"Input",label:" ",colProps:{span:8},slot:"add"}],labelWidth:100,actionColOptions:{span:24}});function i(){return B(this,null,function*(){try{const o=yield l()}catch(o){}})}const t=I(1);function a(){n({field:`field${t.value}a`,component:"Input",label:"\u5B57\u6BB5"+t.value,colProps:{span:8},required:!0},""),n({field:`field${t.value}b`,component:"Input",label:"\u5B57\u6BB5"+t.value,colProps:{span:8},required:!0},""),n({field:`${t.value}`,component:"Input",label:" ",colProps:{span:8},slot:"add"},""),t.value++}function p(o){r([`field${o}a`,`field${o}b`,`${o}`]),t.value--}return{register:e,handleSubmit:i,add:a,del:p}}}),q=v("+"),N=v("-");function W(e,n,r,l,i,t){const a=u("Button"),p=u("BasicForm"),o=u("CollapseContainer"),m=u("PageWrapper");return d(),f(m,{title:"\u8868\u5355\u589E\u5220\u793A\u4F8B"},{default:s(()=>[C(o,{title:"\u8868\u5355\u589E\u5220"},{default:s(()=>[C(p,{onRegister:e.register,onSubmit:e.handleSubmit},{add:s(({field:c})=>[Number(c)===0?(d(),f(a,{key:0,onClick:e.add},{default:s(()=>[q]),_:1},8,["onClick"])):b("",!0),c>0?(d(),f(a,{key:1,onClick:x=>e.del(c)},{default:s(()=>[N]),_:2},1032,["onClick"])):b("",!0)]),_:1},8,["onRegister","onSubmit"])]),_:1})]),_:1})}var Fo=P(S,[["render",W]]);export{Fo as default};
