import{p as e,a as t,o,c as l,b as s,F as a,r as n,w as i,d as c,v as r,t as d,e as m,f as p,g as u,h,i as y,j as b}from"./vendor.16deffd3.js";const g={name:"employee-table",props:{employees:Array},data:()=>({editing:null}),methods:{editMode(e){this.cachedEmployee=Object.assign({},e),this.editing=e.id},editEmployee(e){""!==e.name&&""!==e.email&&(this.$emit("edit:employee",e.id,e),this.editing=null)},cancelEdit(e){Object.assign(e,this.cachedEmployee),this.editing=null}}},v=i();e("data-v-1b0bb708");const f={id:"employee-table"},k={key:0,class:"empty-table"},E={key:1},S=s("thead",null,[s("tr",null,[s("th",null,"Name"),s("th",null,"Email"),s("th",null,"Actions")])],-1),x={key:0},w={key:1},I={key:2},$={key:3},C={key:4},V={key:5};t();const j=v(((e,t,i,m,p,u)=>(o(),l("section",f,[i.employees.length<1?(o(),l("p",k," No employees. ")):(o(),l("table",E,[S,s("tbody",null,[(o(!0),l(a,null,n(i.employees,(t=>(o(),l("tr",{key:t.id},[p.editing===t.id?(o(),l("td",x,[c(s("input",{type:"text","onUpdate:modelValue":e=>t.name=e},null,8,["onUpdate:modelValue"]),[[r,t.name]])])):(o(),l("td",w,d(t.name),1)),p.editing===t.id?(o(),l("td",I,[c(s("input",{type:"email","onUpdate:modelValue":e=>t.email=e},null,8,["onUpdate:modelValue"]),[[r,t.email]])])):(o(),l("td",$,d(t.email),1)),p.editing===t.id?(o(),l("td",C,[s("button",{onClick:e=>u.editEmployee(t)},"Save",8,["onClick"]),s("button",{onClick:e=>u.cancelEdit(t)},"Cancel",8,["onClick"])])):(o(),l("td",V,[s("button",{onClick:e=>u.editMode(t)},"Edit",8,["onClick"]),s("button",{onClick:o=>e.$emit("delete:employee",t.id)}," Delete ",8,["onClick"])]))])))),128))])]))]))));g.render=j,g.__scopeId="data-v-1b0bb708";const U={name:"employee-form",data:()=>({submitting:!1,error:!1,success:!1,employee:{name:"",email:""}}),methods:{handleSubmit(){this.submitting=!0,this.clearStatus(),this.invalidName||this.invalidEmail?this.error=!0:(this.$emit("add:employee",this.employee),this.$refs.first.focus(),this.employee={name:"",email:""},this.error=!1,this.success=!0,this.submitting=!1)},clearStatus(){this.success=!1,this.error=!1}},computed:{invalidName(){return""===this.employee.name},invalidEmail(){return""===this.employee.email}}},R=i();e("data-v-7a8dfafe");const _={id:"employee-form"},N={key:0,class:"error-message"},F={key:1,class:"success-message"},H={class:"block"},T=s("span",null,"New employee name",-1),A={class:"block"},O=s("span",null,"New employee email",-1),D=s("button",null,"Add Employee",-1);t();const P=R(((e,t,a,n,i,d)=>(o(),l("section",_,[s("form",{onSubmit:t[6]||(t[6]=p(((...e)=>d.handleSubmit&&d.handleSubmit(...e)),["prevent"]))},[i.error&&i.submitting?(o(),l("p",N," Please fill out all required fields. ")):m("",!0),i.success?(o(),l("p",F," Employee successfully added! ")):m("",!0),s("label",H,[T,c(s("input",{ref:"first",type:"text",class:{"has-error":i.submitting&&d.invalidName},"onUpdate:modelValue":t[1]||(t[1]=e=>i.employee.name=e),onFocus:t[2]||(t[2]=(...e)=>d.clearStatus&&d.clearStatus(...e)),onKeypress:t[3]||(t[3]=(...e)=>d.clearStatus&&d.clearStatus(...e))},null,34),[[r,i.employee.name]])]),s("label",A,[O,c(s("input",{type:"email",class:{"has-error":i.submitting&&d.invalidEmail},"onUpdate:modelValue":t[4]||(t[4]=e=>i.employee.email=e),onFocus:t[5]||(t[5]=(...e)=>d.clearStatus&&d.clearStatus(...e))},null,34),[[r,i.employee.email]])]),D],32)]))));U.render=P,U.__scopeId="data-v-7a8dfafe";const J={name:"employees",components:{EmployeeTable:g,EmployeeForm:U},data:()=>({employees:[]}),mounted(){this.getEmployees()},methods:{async getEmployees(){try{const e=await fetch("https://jsonplaceholder.typicode.com/users"),t=await e.json();this.employees=t}catch(e){console.error(e)}},async addEmployee(e){try{const t=await fetch("https://jsonplaceholder.typicode.com/users",{method:"POST",body:JSON.stringify(e),headers:{"Content-type":"application/json; charset=UTF-8"}}),o=await t.json();this.employees=[...this.employees,o]}catch(t){console.error(t)}},async editEmployee(e,t){try{const o=await fetch(`https://jsonplaceholder.typicode.com/users/${e}`,{method:"PUT",body:JSON.stringify(t),headers:{"Content-type":"application/json; charset=UTF-8"}}),l=await o.json();this.employees=this.employees.map((t=>t.id===e?l:t))}catch(o){console.error(o)}},async deleteEmployee(e){try{await fetch(`https://jsonplaceholder.typicode.com/users/${e}`,{method:"DELETE"}),this.employees=this.employees.filter((t=>t.id!==e))}catch(t){console.error(t)}}}},M=i();e("data-v-ac4a3864");const q={id:"employees"},B=s("h1",null,"Employees",-1);t();const G=M(((e,t,a,n,i,c)=>{const r=u("employee-form"),d=u("employee-table");return o(),l("div",q,[s("main",null,[B,s(r,{"onAdd:employee":c.addEmployee},null,8,["onAdd:employee"]),s(d,{employees:i.employees,"onEdit:employee":c.editEmployee,"onDelete:employee":c.deleteEmployee},null,8,["employees","onEdit:employee","onDelete:employee"])])])}));J.render=G,J.__scopeId="data-v-ac4a3864";const K={name:"hex-input",props:{modelValue:String},methods:{checkInput(e){let t=e.target.value;t.startsWith("#")&&(t=t.replace("#","")),this.$emit("update:modelValue",t),this.isInvalid(t)||3!==t.length&&6!==t.length?this.$emit("reset"):this.$emit("use:hex",t)},isInvalid:e=>!/^[0-9a-f]{1,6}$/i.test(e)}};K.render=function(e,t,s,a,n,i){return o(),l("input",{type:"text",value:s.modelValue,onInput:t[1]||(t[1]=(...e)=>i.checkInput&&i.checkInput(...e))},null,40,["value"])};const L={name:"rgb-input",props:{modelValue:String},methods:{checkInput(e){let t=e.target.value;const o=t.split(",").map((e=>e.trim()));t=o.join(","),o.length<3&&3===o[o.length-1].length&&(t=`${t},`),this.$emit("update:modelValue",t),this.isInvalid(t)||3!==o.length?this.$emit("reset"):this.$emit("use:rgb",t)},isInvalid(e){const t=e.split(",");if(t.length>3)return!0;let o=!1;return t.forEach((e=>{const t=+e;(!t||t<0||t>255)&&(o=!0)})),o}}};L.render=function(e,t,s,a,n,i){return o(),l("input",{type:"text",value:s.modelValue,onInput:t[1]||(t[1]=(...e)=>i.checkInput&&i.checkInput(...e))},null,40,["value"])};const W={name:"color-converter",components:{HexInput:K,RgbInput:L},data:()=>({color:{hex:"",rgb:""},colorStyle:{backgroundColor:""}}),methods:{resetRgb(){this.color.rgb="",this.colorStyle.backgroundColor=""},resetHex(){this.color.hex="",this.colorStyle.backgroundColor=""},async getRgb(e){try{const t=await fetch(`https://www.thecolorapi.com/id?hex=${e}`),o=await t.json();this.color.rgb=`${o.rgb.r},${o.rgb.g},${o.rgb.b}`,this.colorStyle.backgroundColor=o.hex.value}catch(t){console.error(t)}},async getHex(e){try{const t=await fetch(`https://www.thecolorapi.com/id?rgb=${e}`),o=await t.json();this.color.hex=o.hex.clean,this.colorStyle.backgroundColor=o.hex.value}catch(t){console.error(t)}}}},X=i();e("data-v-a91d199a");const z={id:"color-converter"},Q={class:"block"},Y=s("span",{class:"label"},"HEX",-1),Z={class:"block"},ee=s("span",{class:"label"},"RGB",-1),te=s("button",null,"Pin",-1);t();const oe=X(((e,t,a,n,i,c)=>{const r=u("hex-input"),d=u("rgb-input");return o(),l("section",z,[s("div",{class:"color-block",style:i.colorStyle},null,4),s("form",null,[s("label",Q,[Y,s(r,{modelValue:i.color.hex,"onUpdate:modelValue":t[1]||(t[1]=e=>i.color.hex=e),"onUse:hex":c.getRgb,onReset:c.resetRgb},null,8,["modelValue","onUse:hex","onReset"])]),s("label",Z,[ee,s(d,{modelValue:i.color.rgb,"onUpdate:modelValue":t[2]||(t[2]=e=>i.color.rgb=e),"onUse:rgb":c.getHex,onReset:c.resetHex},null,8,["modelValue","onUse:rgb","onReset"])]),te])])}));W.render=oe,W.__scopeId="data-v-a91d199a";const le={name:"home",components:{ColorConverter:W}},se=i();e("data-v-8de6cce6");const ae=s("div",{id:"circle",class:"repeat-bg"},null,-1),ne={id:"home",class:"element"},ie=s("header",null,[s("h1",null,"color converter")],-1);t();const ce=se(((e,t,n,i,c,r)=>{const d=u("color-converter");return o(),l(a,null,[ae,s("div",ne,[s("main",null,[ie,s(d)])])],64)}));le.render=ce,le.__scopeId="data-v-8de6cce6";const re={name:"app"};re.render=function(e,t,s,a,n,i){const c=u("router-view");return o(),l(c)};const de=[{path:"/",component:le},{path:"/employees",component:J}],me=h({history:y(),routes:de}),pe=b(re);pe.use(me),pe.mount("#app");