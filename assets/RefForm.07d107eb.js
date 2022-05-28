import{B as C}from"./BasicForm.e6b43b32.js";import{av as B,a as c,cC as E,v as P,ax as i,o as b,j as F,z as e,m as a,n as s,E as v,B as l}from"./index.065dfc24.js";import{P as k}from"./index.3693d59d.js";/* empty css              *//* empty css               */import"./index.427a8794.js";import"./index.73a47fee.js";import"./Checkbox.3713ceca.js";import"./index.85938da2.js";import"./index.7199bbfe.js";import"./index.8587e190.js";import"./index.cb657b3f.js";import"./index.53f31672.js";import"./get.817062c6.js";import"./index.a97ece72.js";import"./eagerComputed.0f895987.js";import"./index.537549ef.js";import"./_baseIteratee.93469a08.js";import"./DeleteOutlined.47b56d81.js";import"./index.d5331453.js";import"./useRefs.4759370c.js";import"./Form.adc4f818.js";import"./Col.cddb608c.js";import"./useFlexGapSupport.81e1a6d6.js";import"./useSize.a2c16550.js";import"./index.299a22dc.js";import"./index.4c8aad17.js";import"./useWindowSizeFn.b1b92eb5.js";import"./FullscreenOutlined.b1783304.js";import"./index.1739f783.js";import"./index.8956298c.js";import"./uuid.9bdf29ec.js";import"./download.3eae6857.js";import"./base64Conver.08b9f4ec.js";import"./index.8ff2c330.js";import"./index.09a1c2b0.js";import"./uniqBy.fb23b9e2.js";import"./index.5b8b03d6.js";import"./index.eee6f788.js";import"./useContentViewHeight.1c3d485e.js";import"./ArrowLeftOutlined.ca5e5c0f.js";import"./index.6fa4bb48.js";import"./transButton.92e9c4c6.js";const _=[{field:"field1",component:"Input",label:"\u5B57\u6BB51",colProps:{span:8},componentProps:{placeholder:"\u81EA\u5B9A\u4E49placeholder",onChange:t=>{}}},{field:"field2",component:"Input",label:"\u5B57\u6BB52",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"\u5B57\u6BB53",colProps:{span:8}},{field:"field4",component:"Select",label:"\u5B57\u6BB54",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1",key:"1"},{label:"\u9009\u98792",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"\u5B57\u6BB55",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]}},{field:"field7",component:"RadioGroup",label:"\u5B57\u6BB57",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]}}],$=c({components:{BasicForm:C,CollapseContainer:E,PageWrapper:k},setup(){const t=P(null),{createMessage:o}=v();return{formElRef:t,schemas:_,handleSubmit:r=>{o.success("click search,values:"+JSON.stringify(r))},setProps(r){const p=t.value;!p||p.setProps(r)}}}}),D={class:"mb-4"},A=l(" \u66F4\u6539labelWidth "),g=l(" \u8FD8\u539FlabelWidth "),S=l(" \u66F4\u6539Size "),h=l(" \u8FD8\u539FSize "),w=l(" \u7981\u7528\u8868\u5355 "),W=l(" \u89E3\u9664\u7981\u7528 "),R=l(" \u7D27\u51D1\u8868\u5355 "),z=l(" \u8FD8\u539F\u6B63\u5E38\u95F4\u8DDD "),N=l(" \u64CD\u4F5C\u6309\u94AE\u4F4D\u7F6E "),O={class:"mb-4"},G=l(" \u9690\u85CF\u64CD\u4F5C\u6309\u94AE "),y=l(" \u663E\u793A\u64CD\u4F5C\u6309\u94AE "),V=l(" \u9690\u85CF\u91CD\u7F6E\u6309\u94AE "),I=l(" \u663E\u793A\u91CD\u7F6E\u6309\u94AE "),M=l(" \u9690\u85CF\u67E5\u8BE2\u6309\u94AE "),j=l(" \u663E\u793A\u67E5\u8BE2\u6309\u94AE "),J=l(" \u4FEE\u6539\u91CD\u7F6E\u6309\u94AE "),T=l(" \u4FEE\u6539\u67E5\u8BE2\u6309\u94AE ");function q(t,o,r,p,H,K){const u=i("a-button"),m=i("BasicForm"),d=i("CollapseContainer"),f=i("PageWrapper");return b(),F(f,{title:"Ref\u64CD\u4F5C\u793A\u4F8B"},{default:e(()=>[a("div",D,[s(u,{onClick:o[0]||(o[0]=n=>t.setProps({labelWidth:150})),class:"mr-2"},{default:e(()=>[A]),_:1}),s(u,{onClick:o[1]||(o[1]=n=>t.setProps({labelWidth:120})),class:"mr-2"},{default:e(()=>[g]),_:1}),s(u,{onClick:o[2]||(o[2]=n=>t.setProps({size:"large"})),class:"mr-2"},{default:e(()=>[S]),_:1}),s(u,{onClick:o[3]||(o[3]=n=>t.setProps({size:"default"})),class:"mr-2"},{default:e(()=>[h]),_:1}),s(u,{onClick:o[4]||(o[4]=n=>t.setProps({disabled:!0})),class:"mr-2"},{default:e(()=>[w]),_:1}),s(u,{onClick:o[5]||(o[5]=n=>t.setProps({disabled:!1})),class:"mr-2"},{default:e(()=>[W]),_:1}),s(u,{onClick:o[6]||(o[6]=n=>t.setProps({compact:!0})),class:"mr-2"},{default:e(()=>[R]),_:1}),s(u,{onClick:o[7]||(o[7]=n=>t.setProps({compact:!1})),class:"mr-2"},{default:e(()=>[z]),_:1}),s(u,{onClick:o[8]||(o[8]=n=>t.setProps({actionColOptions:{span:8}})),class:"mr-2"},{default:e(()=>[N]),_:1})]),a("div",O,[s(u,{onClick:o[9]||(o[9]=n=>t.setProps({showActionButtonGroup:!1})),class:"mr-2"},{default:e(()=>[G]),_:1}),s(u,{onClick:o[10]||(o[10]=n=>t.setProps({showActionButtonGroup:!0})),class:"mr-2"},{default:e(()=>[y]),_:1}),s(u,{onClick:o[11]||(o[11]=n=>t.setProps({showResetButton:!1})),class:"mr-2"},{default:e(()=>[V]),_:1}),s(u,{onClick:o[12]||(o[12]=n=>t.setProps({showResetButton:!0})),class:"mr-2"},{default:e(()=>[I]),_:1}),s(u,{onClick:o[13]||(o[13]=n=>t.setProps({showSubmitButton:!1})),class:"mr-2"},{default:e(()=>[M]),_:1}),s(u,{onClick:o[14]||(o[14]=n=>t.setProps({showSubmitButton:!0})),class:"mr-2"},{default:e(()=>[j]),_:1}),s(u,{onClick:o[15]||(o[15]=n=>t.setProps({resetButtonOptions:{disabled:!0,text:"\u91CD\u7F6ENew"}})),class:"mr-2"},{default:e(()=>[J]),_:1}),s(u,{onClick:o[16]||(o[16]=n=>t.setProps({submitButtonOptions:{disabled:!0,loading:!0}})),class:"mr-2"},{default:e(()=>[T]),_:1})]),s(d,{title:"\u4F7F\u7528ref\u8C03\u7528\u8868\u5355\u5185\u90E8\u51FD\u6570\u793A\u4F8B"},{default:e(()=>[s(m,{schemas:t.schemas,ref:"formElRef",labelWidth:100,onSubmit:t.handleSubmit,actionColOptions:{span:24}},null,8,["schemas","onSubmit"])]),_:1})]),_:1})}var yo=B($,[["render",q]]);export{yo as default};