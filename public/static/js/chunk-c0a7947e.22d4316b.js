(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c0a7947e"],{"0ccb":function(e,t,n){var r=n("50c4"),a=n("1148"),o=n("1d80"),i=Math.ceil,s=function(e){return function(t,n,s){var u,c,l=String(o(t)),d=l.length,p=void 0===s?" ":String(s),f=r(n);return f<=d||""==p?l:(u=f-d,c=a.call(p,i(u/p.length)),c.length>u&&(c=c.slice(0,u)),e?l+c:c+l)}};e.exports={start:s(!1),end:s(!0)}},1276:function(e,t,n){"use strict";var r=n("d784"),a=n("44e7"),o=n("825a"),i=n("1d80"),s=n("4840"),u=n("8aa5"),c=n("50c4"),l=n("14c3"),d=n("9263"),p=n("d039"),f=[].push,m=Math.min,h=4294967295,g=!p((function(){return!RegExp(h,"y")}));r("split",2,(function(e,t,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var r=String(i(this)),o=void 0===n?h:n>>>0;if(0===o)return[];if(void 0===e)return[r];if(!a(e))return t.call(r,e,o);var s,u,c,l=[],p=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),m=0,g=new RegExp(e.source,p+"g");while(s=d.call(g,r)){if(u=g.lastIndex,u>m&&(l.push(r.slice(m,s.index)),s.length>1&&s.index<r.length&&f.apply(l,s.slice(1)),c=s[0].length,m=u,l.length>=o))break;g.lastIndex===s.index&&g.lastIndex++}return m===r.length?!c&&g.test("")||l.push(""):l.push(r.slice(m)),l.length>o?l.slice(0,o):l}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var a=i(this),o=void 0==t?void 0:t[e];return void 0!==o?o.call(t,a,n):r.call(String(a),t,n)},function(e,a){var i=n(r,e,this,a,r!==t);if(i.done)return i.value;var d=o(e),p=String(this),f=s(d,RegExp),b=d.unicode,v=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(g?"y":"g"),w=new f(g?d:"^(?:"+d.source+")",v),D=void 0===a?h:a>>>0;if(0===D)return[];if(0===p.length)return null===l(w,p)?[p]:[];var x=0,y=0,j=[];while(y<p.length){w.lastIndex=g?y:0;var O,k=l(w,g?p:p.slice(y));if(null===k||(O=m(c(w.lastIndex+(g?0:y)),p.length))===x)y=u(p,y,b);else{if(j.push(p.slice(x,y)),j.length===D)return j;for(var _=1;_<=k.length-1;_++)if(j.push(k[_]),j.length===D)return j;y=x=O}}return j.push(p.slice(x)),j}]}),!g)},"1eef":function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var r=n("b775");function a(){return Object(r["a"])({url:"/company/department"})}function o(e){return Object(r["a"])({url:"/company/department/".concat(e),method:"delete"})}function i(e){return Object(r["a"])({url:"/company/department",method:"post",data:e})}},"4d90":function(e,t,n){"use strict";var r=n("23e7"),a=n("0ccb").start,o=n("9a0c");r({target:"String",proto:!0,forced:o},{padStart:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})},"6f11":function(e,t,n){},"7a19":function(e,t,n){"use strict";n("6f11")},"8f00":function(e,t,n){"use strict";n.d(t,"f",(function(){return a})),n.d(t,"e",(function(){return o})),n.d(t,"d",(function(){return i})),n.d(t,"a",(function(){return s})),n.d(t,"i",(function(){return u})),n.d(t,"h",(function(){return c})),n.d(t,"k",(function(){return l})),n.d(t,"g",(function(){return d})),n.d(t,"j",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n("b775");function a(){return Object(r["a"])({url:"/sys/user/simple"})}function o(e){return Object(r["a"])({url:"/sys/user",params:e})}function i(e){return Object(r["a"])({url:"/sys/user/".concat(e),method:"delete"})}function s(e){return Object(r["a"])({url:"/sys/user",method:"post",data:e})}function u(e){return Object(r["a"])({url:"/sys/user/".concat(e.id),method:"put",data:e})}function c(e){return Object(r["a"])({url:"/employees/".concat(e,"/personalInfo")})}function l(e){return Object(r["a"])({url:"/employees/".concat(e.userId,"/personalInfo"),method:"put",data:e})}function d(e){return Object(r["a"])({url:"/employees/".concat(e,"/jobs")})}function p(e){return Object(r["a"])({url:"/employees/".concat(e.userId,"/jobs"),method:"put",data:e})}function f(e){return Object(r["a"])({url:"/sys/user/assignRoles",data:e,method:"put"})}},"9a0c":function(e,t,n){var r=n("342f");e.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(r)},ed08:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n("53ca"),n("ac1f"),n("5319"),n("4d63"),n("25f0"),n("d3b7"),n("4d90"),n("1276"),n("159b");function r(e,t){var n=[];return e&&e.forEach((function(a){if(a.pid===t){n.push(a);var o=r(e,a.id);o.length&&(a.children=o)}})),n}},fb3b:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"dashboard-container"},[n("div",{staticClass:"app-container"},[n("el-card",{staticClass:"tree-card"},[n("tree-tools",{attrs:{"tree-node":e.company,"is-root":!0},on:{addDepts:e.addDepts}}),n("el-tree",{attrs:{data:e.departs,props:e.defaultProps,"default-expand-all":""},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.data;return n("tree-tools",{attrs:{"tree-node":r},on:{delDepts:e.getDepartments,addDepts:e.addDepts,editDepts:e.editDepts}})}}])})],1)],1),n("add-dept",{ref:"addDept",attrs:{"show-dialog":e.showDialog,"tree-node":e.node},on:{"update:showDialog":function(t){e.showDialog=t},"update:show-dialog":function(t){e.showDialog=t},addDepts:e.getDepartments}})],1)},a=[],o=n("1da1"),i=(n("96cf"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-row",{staticStyle:{height:"40px",width:"100%"},attrs:{type:"flex",justify:"space-between",align:"middle"}},[n("el-col",[n("span",[e._v(e._s(e.treeNode.name))])]),n("el-col",{attrs:{span:4}},[n("el-row",{attrs:{type:"flex",justify:"end"}},[n("el-col",[e._v(e._s(e.treeNode.manager))]),n("el-col",[n("el-dropdown",{on:{command:e.operateDepts}},[n("span",[e._v(" 操作"),n("i",{staticClass:"el-icon-arrow-down"})]),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{attrs:{command:"add"}},[e._v("添加子部门")]),e.isRoot?e._e():n("el-dropdown-item",{attrs:{command:"edit"}},[e._v("编辑部门")]),e.isRoot?e._e():n("el-dropdown-item",{attrs:{command:"del"}},[e._v("删除部门")])],1)],1)],1)],1)],1)],1)}),s=[],u=n("1eef"),c={props:{treeNode:{type:Object,required:!0},isRoot:{type:Boolean,default:!1}},methods:{operateDepts:function(e){var t=this;"add"===e?this.$emit("addDepts",this.treeNode):"edit"===e?this.$emit("editDepts",this.treeNode):this.$confirm("确定要删除该部门吗").then((function(){return Object(u["b"])(t.treeNode.id)})).then((function(){t.$emit("delDepts"),t.$message.success("删除部门成功")}))}}},l=c,d=n("2877"),p=Object(d["a"])(l,i,s,!1,null,null,null),f=p.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-dialog",{attrs:{title:"新增部门",visible:e.showDialog},on:{close:e.btnCancel}},[n("el-form",{ref:"deptForm",attrs:{model:e.formData,rules:e.rules,"label-width":"120px"}},[n("el-form-item",{attrs:{label:"部门名称",prop:"name"}},[n("el-input",{staticStyle:{width:"80%"},attrs:{placeholder:"1-50个字符"},model:{value:e.formData.name,callback:function(t){e.$set(e.formData,"name",t)},expression:"formData.name"}})],1),n("el-form-item",{attrs:{label:"部门编码",prop:"code"}},[n("el-input",{staticStyle:{width:"80%"},attrs:{placeholder:"1-50个字符"},model:{value:e.formData.code,callback:function(t){e.$set(e.formData,"code",t)},expression:"formData.code"}})],1),n("el-form-item",{attrs:{label:"部门负责人",prop:"manager"}},[n("el-select",{staticStyle:{width:"80%"},attrs:{placeholder:"请选择"},on:{focus:e.getEmployeeSimple},model:{value:e.formData.manager,callback:function(t){e.$set(e.formData,"manager",t)},expression:"formData.manager"}},e._l(e.peoples,(function(e){return n("el-option",{key:e.id,attrs:{label:e.username,value:e.username}})})),1)],1),n("el-form-item",{attrs:{label:"部门介绍",prop:"introduce"}},[n("el-input",{staticStyle:{width:"80%"},attrs:{placeholder:"1-300个字符",type:"textarea",rows:3},model:{value:e.formData.introduce,callback:function(t){e.$set(e.formData,"introduce",t)},expression:"formData.introduce"}})],1)],1),n("el-row",{attrs:{slot:"footer",type:"flex",justify:"center"},slot:"footer"},[n("el-col",{attrs:{span:6}},[n("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.btnOK}},[e._v("确定")]),n("el-button",{attrs:{size:"small"},on:{click:e.btnCancel}},[e._v("取消")])],1)],1)],1)},h=[],g=n("5530"),b=(n("4de4"),n("b0c0"),n("8f00")),v={props:{showDialog:{type:Boolean,default:!1},treeNode:{type:Object,default:null}},data:function(){var e=this,t=function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(n,r,a){var o,i,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(u["d"])();case 2:o=t.sent,i=o.depts,s=!1,s=!e.formData.id&&i.filter((function(t){return t.pid===e.treeNode.id})).some((function(e){return e.name===r})),s?a(new Error("同级部门下已经有".concat(r,"的部门了"))):a();case 7:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}(),n=function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(n,r,a){var o,i,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(u["d"])();case 2:o=t.sent,i=o.depts,s=!1,s=e.formData.id?i.some((function(t){return t.id!==e.formData.id&&t.code===r&&r})):i.some((function(e){return e.code===r&&r})),s?a(new Error("组织架构中已经有部门使用".concat(r,"编码"))):a();case 7:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}();return{formData:{name:"",code:"",manager:"",introduce:""},rules:{name:[{required:!0,message:"部门名称不能为空",trigger:"blur"},{min:1,max:50,message:"部门名称要求1-50个字符",trigger:"blur"},{trigger:"blur",validator:t}],code:[{required:!0,message:"部门编码不能为空",trigger:"blur"},{min:1,max:50,message:"部门编码要求1-50个字符",trigger:"blur"},{trigger:"blur",validator:n}],manager:[{required:!0,message:"部门负责人不能为空",trigger:"blur"}],introduce:[{required:!0,message:"部门介绍不能为空",trigger:"blur"},{trigger:"blur",min:1,max:300,message:"部门介绍要求1-50个字符"}]},peoples:[]}},methods:{getEmployeeSimple:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(b["f"])();case 2:e.peoples=t.sent;case 3:case"end":return t.stop()}}),t)})))()},btnOK:function(){var e=this;this.$refs.deptForm.validate(function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!n){t.next=10;break}if(!e.formData.id){t.next=6;break}return t.next=4,Object(u["updateDepartments"])(e.formData);case 4:t.next=8;break;case 6:return t.next=8,Object(u["a"])(Object(g["a"])(Object(g["a"])({},e.formData),{},{pid:e.treeNode.id}));case 8:e.$emit("addDepts"),e.$emit("update:showDialog",!1);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},btnCancel:function(){this.formData={name:"",code:"",manager:"",introduce:""},this.$refs.deptForm.resetFields(),this.$emit("update:showDialog",!1)},getDepartDetail:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(u["getDepartDetail"])(e);case 2:t.formData=n.sent;case 3:case"end":return n.stop()}}),n)})))()}}},w=v,D=Object(d["a"])(w,m,h,!1,null,null,null),x=D.exports,y=n("ed08"),j={components:{TreeTools:f,AddDept:x},data:function(){return{loading:!1,showDialog:!1,node:null,defaultProps:{label:"name"},departs:[],company:{name:"605科技股份有限公司",manager:"负责人",id:""}}},created:function(){this.getDepartments()},methods:{getDepartments:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,Object(u["d"])();case 3:n=t.sent,e.departs=Object(y["a"])(n.depts,""),e.loading=!1;case 6:case"end":return t.stop()}}),t)})))()},addDepts:function(e){this.showDialog=!0,this.node=e},editDepts:function(e){this.showDialog=!0,this.node=e,this.$refs.addDept.getDepartDetail(e.id)}}},O=j,k=(n("7a19"),Object(d["a"])(O,r,a,!1,null,null,null));t["default"]=k.exports}}]);