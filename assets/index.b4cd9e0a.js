import{B as f}from"./TableImg.3a1e0e27.js";import{j as h}from"./BasicForm.e6b43b32.js";import{u as b}from"./useTable.6b57706b.js";import{a as g}from"./system.35dce4f6.js";import{b as _}from"./index.4c8aad17.js";import{D as C,c as T,s as B}from"./DeptModal.e8b76f68.js";import{av as D,a as E,ax as e,o as M,h as S,n as i,z as m,B as R}from"./index.065dfc24.js";import"./index.73a47fee.js";import"./Checkbox.3713ceca.js";import"./index.85938da2.js";import"./index.a97ece72.js";import"./eagerComputed.0f895987.js";import"./useForm.61804103.js";import"./index.3693d59d.js";import"./index.5b8b03d6.js";import"./index.eee6f788.js";import"./useSize.a2c16550.js";import"./useWindowSizeFn.b1b92eb5.js";import"./useContentViewHeight.1c3d485e.js";import"./ArrowLeftOutlined.ca5e5c0f.js";import"./index.6fa4bb48.js";import"./transButton.92e9c4c6.js";import"./index.8587e190.js";import"./index.cb657b3f.js";import"./index.7199bbfe.js";import"./uuid.9bdf29ec.js";import"./index.537549ef.js";import"./_baseIteratee.93469a08.js";import"./get.817062c6.js";import"./DeleteOutlined.47b56d81.js";import"./index.d5331453.js";import"./useRefs.4759370c.js";import"./Form.adc4f818.js";import"./Col.cddb608c.js";import"./useFlexGapSupport.81e1a6d6.js";import"./index.427a8794.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.ceaf2f9b.js";import"./FullscreenOutlined.b1783304.js";import"./index.8956298c.js";import"./fromPairs.84aabb58.js";import"./scrollTo.4e4030ab.js";import"./index.e10b48ab.js";/* empty css              *//* empty css               */import"./index.53f31672.js";import"./index.299a22dc.js";import"./index.1739f783.js";import"./download.3eae6857.js";import"./base64Conver.08b9f4ec.js";import"./index.8ff2c330.js";import"./index.09a1c2b0.js";import"./uniqBy.fb23b9e2.js";const k=E({name:"DeptManagement",components:{BasicTable:f,DeptModal:C,TableAction:h},setup(){const[o,{openModal:r}]=_(),[p,{reload:s}]=b({title:"\u90E8\u95E8\u5217\u8868",api:g,columns:T,formConfig:{labelWidth:120,schemas:B},pagination:!1,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,actionColumn:{width:80,title:"\u64CD\u4F5C",dataIndex:"action",slots:{customRender:"action"},fixed:void 0}});function l(){r(!0,{isUpdate:!1})}function c(t){r(!0,{record:t,isUpdate:!0})}function n(t){}function a(){s()}return{registerTable:p,registerModal:o,handleCreate:l,handleEdit:c,handleDelete:n,handleSuccess:a}}}),v=R(" \u65B0\u589E\u90E8\u95E8 ");function w(o,r,p,s,l,c){const n=e("a-button"),a=e("TableAction"),t=e("BasicTable"),d=e("DeptModal");return M(),S("div",null,[i(t,{onRegister:o.registerTable},{toolbar:m(()=>[i(n,{type:"primary",onClick:o.handleCreate},{default:m(()=>[v]),_:1},8,["onClick"])]),action:m(({record:u})=>[i(a,{actions:[{icon:"clarity:note-edit-line",onClick:o.handleEdit.bind(null,u)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:o.handleDelete.bind(null,u)}}]},null,8,["actions"])]),_:1},8,["onRegister"]),i(d,{onRegister:o.registerModal,onSuccess:o.handleSuccess},null,8,["onRegister","onSuccess"])])}var xo=D(k,[["render",w]]);export{xo as default};