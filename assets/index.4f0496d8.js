var d=(o,l,r)=>new Promise((m,n)=>{var c=t=>{try{e(r.next(t))}catch(a){n(a)}},u=t=>{try{e(r.throw(t))}catch(a){n(a)}},e=t=>t.done?m(t.value):Promise.resolve(t.value).then(c,u);e((r=r.apply(o,l)).next())});import{B as P}from"./BasicForm.e6b43b32.js";import{u as _}from"./useForm.61804103.js";import A from"./PersonTable.bbc6e703.js";import{P as F}from"./index.3693d59d.js";import{av as g,a as v,v as C,ax as s,o as D,j as h,z as i,n as p,B as q}from"./index.065dfc24.js";import{C as b}from"./index.77e1db6f.js";import"./index.061a58e1.js";/* empty css               */import"./index.08372a20.js";/* empty css              */import"./index.427a8794.js";import"./index.73a47fee.js";import"./Checkbox.3713ceca.js";import"./index.85938da2.js";import"./index.7199bbfe.js";import"./index.8587e190.js";import"./index.cb657b3f.js";import"./index.53f31672.js";import"./get.817062c6.js";import"./index.a97ece72.js";import"./eagerComputed.0f895987.js";import"./index.537549ef.js";import"./_baseIteratee.93469a08.js";import"./DeleteOutlined.47b56d81.js";import"./index.d5331453.js";import"./useRefs.4759370c.js";import"./Form.adc4f818.js";import"./Col.cddb608c.js";import"./useFlexGapSupport.81e1a6d6.js";import"./useSize.a2c16550.js";import"./index.299a22dc.js";import"./index.4c8aad17.js";import"./useWindowSizeFn.b1b92eb5.js";import"./FullscreenOutlined.b1783304.js";import"./index.1739f783.js";import"./index.8956298c.js";import"./uuid.9bdf29ec.js";import"./download.3eae6857.js";import"./base64Conver.08b9f4ec.js";import"./index.8ff2c330.js";import"./index.09a1c2b0.js";import"./uniqBy.fb23b9e2.js";import"./TableImg.3a1e0e27.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.ceaf2f9b.js";import"./fromPairs.84aabb58.js";import"./scrollTo.4e4030ab.js";import"./index.e10b48ab.js";import"./useTable.6b57706b.js";import"./index.5b8b03d6.js";import"./index.eee6f788.js";import"./useContentViewHeight.1c3d485e.js";import"./ArrowLeftOutlined.ca5e5c0f.js";import"./index.6fa4bb48.js";import"./transButton.92e9c4c6.js";import"./index.4e8e714e.js";import"./PlusOutlined.a5143f39.js";const f=[{label:"\u4ED8\u6653\u6653",value:"1"},{label:"\u5468\u6BDB\u6BDB",value:"2"}],B=[{label:"\u79C1\u5BC6",value:"1"},{label:"\u516C\u5F00",value:"2"}],k=[{field:"f1",component:"Input",label:"\u4ED3\u5E93\u540D",required:!0},{field:"f2",component:"Input",label:"\u4ED3\u5E93\u57DF\u540D",required:!0,componentProps:{addonBefore:"http://",addonAfter:"com"},colProps:{offset:2}},{field:"f3",component:"Select",label:"\u4ED3\u5E93\u7BA1\u7406\u5458",componentProps:{options:f},required:!0,colProps:{offset:2}},{field:"f4",component:"Select",label:"\u5BA1\u6279\u4EBA",componentProps:{options:f},required:!0},{field:"f5",component:"RangePicker",label:"\u751F\u6548\u65E5\u671F",required:!0,colProps:{offset:2}},{field:"f6",component:"Select",label:"\u4ED3\u5E93\u7C7B\u578B",componentProps:{options:B},required:!0,colProps:{offset:2}}],y=[{field:"t1",component:"Input",label:"\u4EFB\u52A1\u540D",required:!0},{field:"t2",component:"Input",label:"\u4EFB\u52A1\u63CF\u8FF0",required:!0,colProps:{offset:2}},{field:"t3",component:"Select",label:"\u6267\u884C\u4EBA",componentProps:{options:f},required:!0,colProps:{offset:2}},{field:"t4",component:"Select",label:"\u8D23\u4EFB\u4EBA",componentProps:{options:f},required:!0},{field:"t5",component:"TimePicker",label:"\u751F\u6548\u65E5\u671F",required:!0,componentProps:{style:{width:"100%"}},colProps:{offset:2}},{field:"t6",component:"Select",label:"\u4EFB\u52A1\u7C7B\u578B",componentProps:{options:B},required:!0,colProps:{offset:2}}];const T=v({name:"FormHightPage",components:{BasicForm:P,PersonTable:A,PageWrapper:F,[b.name]:b},setup(){const o=C(null),[l,{validate:r}]=_({layout:"vertical",baseColProps:{span:6},schemas:k,showActionButtonGroup:!1}),[m,{validate:n}]=_({layout:"vertical",baseColProps:{span:6},schemas:y,showActionButtonGroup:!1});function c(){return d(this,null,function*(){try{o.value&&o.value.getDataSource();const[u,e]=yield Promise.all([r(),n()])}catch(u){}})}return{register:l,registerTask:m,submitAll:c,tableRef:o}}}),S=q(" \u63D0\u4EA4 ");function R(o,l,r,m,n,c){const u=s("BasicForm"),e=s("a-card"),t=s("PersonTable"),a=s("a-button"),E=s("PageWrapper");return D(),h(E,{class:"high-form",title:"\u9AD8\u7EA7\u8868\u5355",content:" \u9AD8\u7EA7\u8868\u5355\u5E38\u89C1\u4E8E\u4E00\u6B21\u6027\u8F93\u5165\u548C\u63D0\u4EA4\u5927\u6279\u91CF\u6570\u636E\u7684\u573A\u666F\u3002"},{rightFooter:i(()=>[p(a,{type:"primary",onClick:o.submitAll},{default:i(()=>[S]),_:1},8,["onClick"])]),default:i(()=>[p(e,{title:"\u4ED3\u5E93\u7BA1\u7406",bordered:!1},{default:i(()=>[p(u,{onRegister:o.register},null,8,["onRegister"])]),_:1}),p(e,{title:"\u4EFB\u52A1\u7BA1\u7406",bordered:!1,class:"!mt-5"},{default:i(()=>[p(u,{onRegister:o.registerTask},null,8,["onRegister"])]),_:1}),p(e,{title:"\u6210\u5458\u7BA1\u7406",bordered:!1},{default:i(()=>[p(t,{ref:"tableRef"},null,512)]),_:1})]),_:1})}var Wo=g(T,[["render",R],["__scopeId","data-v-6b59bc47"]]);export{Wo as default};