(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-45563e0a"],{1401:function(t,e,a){"use strict";a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return i})),a.d(e,"i",(function(){return c})),a.d(e,"e",(function(){return s})),a.d(e,"h",(function(){return l})),a.d(e,"a",(function(){return o})),a.d(e,"j",(function(){return u})),a.d(e,"d",(function(){return p})),a.d(e,"f",(function(){return d})),a.d(e,"g",(function(){return b}));a("99af");var n=a("b775");function r(t){return Object(n["a"])({url:"/social_securitys/historys/".concat(t.month),params:t})}function i(t){return Object(n["a"])({url:"/social_securitys/historys/".concat(t.year,"/list"),data:t})}function c(t){return Object(n["a"])({url:"/social_securitys/historys/".concat(t.yearMonth,"/newReport"),method:"put",data:t})}function s(t){return Object(n["a"])({url:"/social_securitys/historys/archiveDetail/".concat(t.userId,"/").concat(t.yearMonth),data:t})}function l(t){return Object(n["a"])({url:"/social_securitys/list",method:"post",data:t})}function o(t){return Object(n["a"])({url:"/social_securitys/historys/".concat(t.yearMonth,"/archive"),method:"post",data:t})}function u(t){return Object(n["a"])({url:"/social_securitys/".concat(t.userId),method:"put",data:t})}function p(t){return Object(n["a"])({url:"/social_securitys/".concat(t)})}function d(t){return Object(n["a"])({url:"/social_securitys/payment_item/".concat(t)})}function b(){return Object(n["a"])({url:"/social_securitys/settings"})}},"15c7":function(t,e,a){"use strict";a("5737")},"419f":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"historicalArcBox"},[a("div",{staticClass:"historicalArcTop"},[a("div",{staticClass:"title"},[a("span",[t._v("全公司")]),a("div",{staticClass:"yearChange"},[a("el-date-picker",{attrs:{type:"year",size:"mini",width:"130px",placeholder:"选择年"},model:{value:t.yearVal,callback:function(e){t.yearVal=e},expression:"yearVal"}})],1)])]),a("div",{staticClass:"historicalTable"},t._l(t.tableData,(function(e,n){return a("div",{key:n,staticClass:"itemes"},[a("div",{staticClass:"itemTopLab",class:{act:e.act}},[a("div",{staticClass:"lab",on:{click:function(a){return t.openTable(e,n)}}},[t._v(" > ")]),a("div",[a("p",{staticClass:"title"},[t._v(t._s(e.month)+"社保报表 "),a("span",[t._v(t._s(e.creationTime))])]),a("p",{staticClass:"labTit",on:{click:function(a){return t.openTable(e,n)}}},[t._v("社保报表")])]),a("div",[t._m(0,!0),a("p",{staticClass:"itemNum"},[t._v(t._s(e.enterprisePayment))])]),a("div",[t._m(1,!0),a("p",{staticClass:"itemNum"},[t._v(t._s(e.personalPayment))])]),a("div",[t._m(2,!0),a("p",{staticClass:"itemNum"},[t._v(t._s(e.total))])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.act,expression:"itemes.act"}],staticClass:"itemDropDown"},[t._m(3,!0),a("el-table",{staticStyle:{width:"100%","text-align":"center"},attrs:{data:e.contentData,height:"300",border:""}},[a("el-table-column",{attrs:{type:"index",label:"序号",fixed:"",center:"",width:"50"}}),a("el-table-column",{attrs:{prop:"fullName",label:"姓名",width:"150px"}}),a("el-table-column",{attrs:{prop:"dateOfEntry",label:"入职时间",width:"150px"}}),a("el-table-column",{attrs:{prop:"cellPhoneNumber",label:"手机号",width:"150px"}}),a("el-table-column",{attrs:{prop:"iDNumber",label:"身份证号码",width:"150px"}}),a("el-table-column",{attrs:{prop:"bankCardNumber",label:"银行卡号",width:"150px"}}),a("el-table-column",{attrs:{prop:"firstLevelDepartment",label:"一级部门",width:"150px"}}),a("el-table-column",{attrs:{prop:"twoLevelDepartment",label:"二级部门",width:"150px"}}),a("el-table-column",{attrs:{prop:"twoLevelDepartment",label:"工作城市",width:"150px"}}),a("el-table-column",{attrs:{prop:"twoLevelDepartment",label:"社保电脑号",width:"150px"}}),a("el-table-column",{attrs:{prop:"twoLevelDepartment",label:"公积金账号",width:"150px"}}),a("el-table-column",{attrs:{prop:"twoLevelDepartment",label:"离职日期",width:"150px"}}),a("el-table-column",{attrs:{prop:"twoLevelDepartment",label:"户籍类型",width:"150px"}}),a("el-table-column",{attrs:{prop:"twoLevelDepartment",label:"参保城市",width:"150px"}}),a("el-table-column",{attrs:{prop:"twoLevelDepartment",label:"社保月份",width:"150px"}})],1)],1)])})),0)])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"itemTit"},[a("span",[t._v("企业缴纳")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"itemTit"},[a("span",[t._v("个人缴纳")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"itemTit"},[a("span",[t._v("合计")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"topLab"},[a("div",[a("span",{staticStyle:{"background-color":"#cfeffe"}}),t._v("已离职")]),a("div",[a("span",{staticStyle:{"background-color":"#a8f8bb"}}),t._v("再入职")]),a("div",[a("span",{staticStyle:{"background-color":"#fedbd7"}}),t._v("公司合计")]),a("div",[a("span",{staticStyle:{"background-color":"#ffe8c9"}}),t._v("一级部门")]),a("div",[a("span",{staticStyle:{"background-color":"#fdfcd5"}}),t._v("二级部门")]),a("div",{staticClass:"rightLabBox"},[a("a",{attrs:{href:"/"}},[a("i",{staticClass:"el-icon-search"})]),a("a",{attrs:{href:"/"}},[a("div",[t._v("导出")])])])])}],i=a("1da1"),c=(a("96cf"),a("1401")),s={name:"HistoricalArchiving",data:function(){return{num:0,yearVal:"2018",tableData:[]}},created:function(){this.getArchivingList()},methods:{getArchivingList:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,Object(c["c"])({});case 3:a=e.sent,n=a.data,t.tableData=n.items,t.loading=!1;case 7:case"end":return e.stop()}}),e)})))()},openTable:function(t,e){var a=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var r,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t.act){n.next=11;break}return a.loading=!0,n.next=4,Object(c["b"])({month:t.month});case 4:r=n.sent,i=r.data,a.$set(a.tableData[e],"contentData",i.items),a.loading=!1,a.$set(a.tableData[e],"act",!0),n.next=12;break;case 11:a.$set(a.tableData[e],"act",!1);case 12:case"end":return n.stop()}}),n)})))()}}},l=s,o=(a("15c7"),a("2877")),u=Object(o["a"])(l,n,r,!1,null,"a484d482",null);e["default"]=u.exports},5737:function(t,e,a){}}]);