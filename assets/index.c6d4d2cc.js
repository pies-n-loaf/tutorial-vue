import{p as e,a as t,o,c as l,b as s,F as a,r as n,w as i,d as c,v as r,t as m,e as d,f as p,g as h,h as u,i as y,j as b}from"./vendor.70c3173f.js";const g={name:"employee-table",props:{employees:Array},data:()=>({editing:null}),methods:{editMode(e){this.cachedEmployee=Object.assign({},e),this.editing=e.id},editEmployee(e){""!==e.name&&""!==e.email&&(this.$emit("edit:employee",e.id,e),this.editing=null)},cancelEdit(e){Object.assign(e,this.cachedEmployee),this.editing=null}}},f=i();e("data-v-3af2dc0a");const v={id:"employee-table"},E={key:0,class:"empty-table"},k={key:1},w=s("thead",null,[s("tr",null,[s("th",null,"Name"),s("th",null,"Email"),s("th",null,"Actions")])],-1),x={key:0},j={key:1},S={key:2},C={key:3},I={key:4},$={key:5};t();const U=f(((e,t,i,d,p,h)=>(o(),l("section",v,[i.employees.length<1?(o(),l("p",E," No employees. ")):(o(),l("table",k,[w,s("tbody",null,[(o(!0),l(a,null,n(i.employees,(t=>(o(),l("tr",{key:t.id},[p.editing===t.id?(o(),l("td",x,[c(s("input",{type:"text","onUpdate:modelValue":e=>t.name=e},null,8,["onUpdate:modelValue"]),[[r,t.name]])])):(o(),l("td",j,m(t.name),1)),p.editing===t.id?(o(),l("td",S,[c(s("input",{type:"email","onUpdate:modelValue":e=>t.email=e},null,8,["onUpdate:modelValue"]),[[r,t.email]])])):(o(),l("td",C,m(t.email),1)),p.editing===t.id?(o(),l("td",I,[s("button",{onClick:e=>h.editEmployee(t)},"Save",8,["onClick"]),s("button",{class:"muted-button",onClick:e=>h.cancelEdit(t)},"Cancel",8,["onClick"])])):(o(),l("td",$,[s("button",{onClick:e=>h.editMode(t)},"Edit",8,["onClick"]),s("button",{onClick:o=>e.$emit("delete:employee",t.id)}," Delete ",8,["onClick"])]))])))),128))])]))]))));g.render=U,g.__scopeId="data-v-3af2dc0a";const _={name:"employee-form",data:()=>({submitting:!1,error:!1,success:!1,employee:{name:"",email:""}}),methods:{handleSubmit(){this.submitting=!0,this.clearStatus(),this.invalidName||this.invalidEmail?this.error=!0:(this.$emit("add:employee",this.employee),this.$refs.first.focus(),this.employee={name:"",email:""},this.error=!1,this.success=!0,this.submitting=!1)},clearStatus(){this.success=!1,this.error=!1}},computed:{invalidName(){return""===this.employee.name},invalidEmail(){return""===this.employee.email}}},N=i();e("data-v-4da38abe");const V={id:"employee-form"},B={key:0,class:"error-message"},F={key:1,class:"success-message"},G={class:"block"},H=s("span",null,"New employee name",-1),R={class:"block"},T=s("span",null,"New employee email",-1),A=s("button",null,"Add Employee",-1);t();const O=N(((e,t,a,n,i,m)=>(o(),l("section",V,[s("form",{onSubmit:t[6]||(t[6]=p(((...e)=>m.handleSubmit&&m.handleSubmit(...e)),["prevent"]))},[i.error&&i.submitting?(o(),l("p",B," Please fill out all required fields. ")):d("",!0),i.success?(o(),l("p",F," Employee successfully added! ")):d("",!0),s("label",G,[H,c(s("input",{ref:"first",type:"text",class:{"has-error":i.submitting&&m.invalidName},"onUpdate:modelValue":t[1]||(t[1]=e=>i.employee.name=e),onFocus:t[2]||(t[2]=(...e)=>m.clearStatus&&m.clearStatus(...e)),onKeypress:t[3]||(t[3]=(...e)=>m.clearStatus&&m.clearStatus(...e))},null,34),[[r,i.employee.name]])]),s("label",R,[T,c(s("input",{type:"email",class:{"has-error":i.submitting&&m.invalidEmail},"onUpdate:modelValue":t[4]||(t[4]=e=>i.employee.email=e),onFocus:t[5]||(t[5]=(...e)=>m.clearStatus&&m.clearStatus(...e))},null,34),[[r,i.employee.email]])]),A],32)]))));_.render=O,_.__scopeId="data-v-4da38abe";const D={name:"employees",components:{EmployeeTable:g,EmployeeForm:_},data:()=>({employees:[]}),mounted(){this.getEmployees()},methods:{async getEmployees(){try{const e=await fetch("https://jsonplaceholder.typicode.com/users"),t=await e.json();this.employees=t}catch(e){console.error(e)}},async addEmployee(e){try{const t=await fetch("https://jsonplaceholder.typicode.com/users",{method:"POST",body:JSON.stringify(e),headers:{"Content-type":"application/json; charset=UTF-8"}}),o=await t.json();this.employees=[...this.employees,o]}catch(t){console.error(t)}},async editEmployee(e,t){try{const o=await fetch(`https://jsonplaceholder.typicode.com/users/${e}`,{method:"PUT",body:JSON.stringify(t),headers:{"Content-type":"application/json; charset=UTF-8"}}),l=await o.json();this.employees=this.employees.map((t=>t.id===e?l:t))}catch(o){console.error(o)}},async deleteEmployee(e){try{await fetch(`https://jsonplaceholder.typicode.com/users/${e}`,{method:"DELETE"}),this.employees=this.employees.filter((t=>t.id!==e))}catch(t){console.error(t)}}}},P=i();e("data-v-5d45bea9");const J={id:"employees"},M=s("h1",null,"Employees",-1);t();const q=P(((e,t,a,n,i,c)=>{const r=h("employee-form"),m=h("employee-table");return o(),l("div",J,[s("main",null,[M,s(r,{"onAdd:employee":c.addEmployee},null,8,["onAdd:employee"]),s(m,{employees:i.employees,"onEdit:employee":c.editEmployee,"onDelete:employee":c.deleteEmployee},null,8,["employees","onEdit:employee","onDelete:employee"])])])}));D.render=q,D.__scopeId="data-v-5d45bea9";const K={name:"color-converter",data:()=>({color:{hex:"",rgb:""}}),methods:{checkHexInput(e){const t=e.target.value;3===t.length||6===t.length?this.getRGB(t):this.color.rgb=""},checkRGBInput(e){const t=e.target.value,o=t.split(",").map((e=>e.trim()));3===o.length?this.getHex(o.join(",")):3===o[o.length-1].length?(this.color.rgb=`${t},`,this.color.hex=""):this.color.hex=""},async getRGB(e){try{const t=await fetch(`https://www.thecolorapi.com/id?hex=${e}`),o=await t.json();this.color.rgb=`${o.rgb.r},${o.rgb.g},${o.rgb.b}`}catch(t){console.error(t)}},async getHex(e){try{const t=await fetch(`https://www.thecolorapi.com/id?rgb=${e}`),o=await t.json();this.color.hex=o.hex.clean}catch(t){console.error(t)}}}},L=i();e("data-v-f62398c4");const X={id:"color-converter"},z={class:"block"},Q=s("span",null,"HEX",-1),W={class:"block"},Y=s("span",null,"RGB",-1),Z=s("button",null,"Pin",-1);t();const ee=L(((e,t,a,n,i,m)=>(o(),l("section",X,[s("form",null,[s("label",z,[Q,c(s("input",{ref:"first",type:"text","onUpdate:modelValue":t[1]||(t[1]=e=>i.color.hex=e),onInput:t[2]||(t[2]=(...e)=>m.checkHexInput&&m.checkHexInput(...e))},null,544),[[r,i.color.hex]])]),s("label",W,[Y,c(s("input",{type:"text","onUpdate:modelValue":t[3]||(t[3]=e=>i.color.rgb=e),onInput:t[4]||(t[4]=(...e)=>m.checkRGBInput&&m.checkRGBInput(...e))},null,544),[[r,i.color.rgb]])]),Z])]))));K.render=ee,K.__scopeId="data-v-f62398c4";const te={name:"home",components:{ColorConverter:K}},oe=i();e("data-v-8de6cce6");const le=s("div",{id:"circle",class:"repeat-bg"},null,-1),se={id:"home",class:"element"},ae=s("header",null,[s("h1",null,"color converter")],-1);t();const ne=oe(((e,t,n,i,c,r)=>{const m=h("color-converter");return o(),l(a,null,[le,s("div",se,[s("main",null,[ae,s(m)])])],64)}));te.render=ne,te.__scopeId="data-v-8de6cce6";const ie={name:"app"};ie.render=function(e,t,s,a,n,i){const c=h("router-view");return o(),l(c)};const ce=[{path:"/",component:te},{path:"/employees",component:D}],re=u({history:y(),routes:ce}),me=b(ie);me.use(re),me.mount("#app");
