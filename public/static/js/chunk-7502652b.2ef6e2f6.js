(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7502652b"],{"149a":function(t,e,a){"use strict";a("bee9")},2506:function(t,e,a){"use strict";a.d(e,"h",(function(){return r})),a.d(e,"l",(function(){return n})),a.d(e,"m",(function(){return c})),a.d(e,"p",(function(){return o})),a.d(e,"i",(function(){return i})),a.d(e,"j",(function(){return l})),a.d(e,"g",(function(){return u})),a.d(e,"k",(function(){return d})),a.d(e,"r",(function(){return p})),a.d(e,"q",(function(){return f})),a.d(e,"c",(function(){return m})),a.d(e,"f",(function(){return h})),a.d(e,"d",(function(){return v})),a.d(e,"e",(function(){return b})),a.d(e,"a",(function(){return _})),a.d(e,"b",(function(){return g})),a.d(e,"s",(function(){return y}));a("99af");var s=a("b775");function r(t){return Object(s["a"])({url:"/user/process/instance/".concat(t.page,"/").concat(t.pageSize),method:"put",data:t})}function n(t){return Object(s["a"])({url:"/user/process/instance/getById/".concat(t)})}function c(t){return Object(s["a"])({url:"/approvals/flows/".concat(t)})}function o(t){return Object(s["a"])({url:"/approvals/setting",method:"put",data:t})}function i(t){return Object(s["a"])({url:"/user/process/instance/".concat(t)})}function l(t){return Object(s["a"])({url:"/user/process/instance/tasks/".concat(t)})}function u(t){return Object(s["a"])({url:"//user/process/buss/showBussImgById/".concat(t)})}function d(t){return Object(s["a"])({url:"/user/process/definition",params:t})}function p(t){return Object(s["a"])({url:"/user/process/suspend/".concat(t.processKey),params:t})}function f(t){return Object(s["a"])({url:"/user/process/startProcess",data:t,method:"post"})}function m(t){return Object(s["a"])({url:"/user/process_leave/startProcess",data:t,method:"post"})}function h(t){return Object(s["a"])({url:"/user/approvals/".concat(t.id,"/reject"),method:"put",data:t})}function v(t){return Object(s["a"])({url:"/user/approvals/".concat(t),method:"delete"})}function b(t){return Object(s["a"])({url:"/user/process/instance/commit",method:"put",data:t})}function _(t){return Object(s["a"])({url:"/user/process_dimission/startProcess",method:"post",data:t})}function g(t){return Object(s["a"])({url:"/user/process_overtime/startProcess",method:"post",data:t})}function y(t){return Object(s["a"])({url:"/sys/user/".concat(t.id),method:"put",data:t})}},"4be6":function(t,e,a){"use strict";a("5d46")},"50db":function(t,e,a){"use strict";a("d482")},"5d46":function(t,e,a){},"616f":function(t,e,a){t.exports=a.p+"static/img/img.0615818f.jpeg"},9406:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"dashboard-container"},[s("el-card",{staticClass:"header-card"},[s("div",[s("div",{staticClass:"fl headL"},[s("div",{staticClass:"headImg"},[s("img",{directives:[{name:"imageerror",rawName:"v-imageerror",value:t.defaultImg,expression:"defaultImg"}],ref:"myHead",attrs:{src:t.userInfo.staffPhoto}})]),s("div",{staticClass:"headInfoTip"},[s("p",{staticClass:"firstChild"},[t._v("早安，"+t._s(t.userInfo.username)+"，祝你开心每一天！")]),s("p",{staticClass:"lastChild"},[t._v(t._s(t.userInfo.username)+" | 605科技 - "+t._s(t.userInfo.departmentName))])])]),s("div",{staticClass:"fr"})])]),s("el-row",{attrs:{type:"flex",justify:"space-between"}},[s("el-col",{staticStyle:{"padding-right":"26px"},attrs:{span:13}},[s("el-card",{staticClass:"box-card"},[s("div",{staticClass:"header",attrs:{slot:"header"},slot:"header"},[s("span",[t._v("工作日历")])]),s("work-calendar")],1),s("el-card",{staticClass:"box-card"},[s("div",{staticClass:"advContent"},[s("div",{staticClass:"title"},[t._v(" 公告")]),s("div",{staticClass:"contentItem"},[s("ul",{staticClass:"noticeList"},[s("li",[s("div",{staticClass:"item"},[s("img",{attrs:{src:a("616f"),alt:""}}),s("div",[s("p",[s("span",{staticClass:"col"},[t._v("马云")]),t._v(" 发布了 第1期“吹水大讲堂”互动讨论获奖名单公布")]),s("p",[t._v("2018-07-21 15:21:38")])])])]),s("li",[s("div",{staticClass:"item"},[s("img",{attrs:{src:a("616f"),alt:""}}),s("div",[s("p",[s("span",{staticClass:"col"},[t._v("刘强东")]),t._v(" 发布了 第2期“忽悠大讲堂”互动讨论获奖名单公布")]),s("p",[t._v("2018-07-21 15:21:38")])])])]),s("li",[s("div",{staticClass:"item"},[s("img",{attrs:{src:a("616f"),alt:""}}),s("div",[s("p",[s("span",{staticClass:"col"},[t._v("马化腾")]),t._v(" 发布了 第3期“怂恿大讲堂”互动讨论获奖名单公布")]),s("p",[t._v("2018-07-21 15:21:38")])])])])])])])])],1),s("el-col",{attrs:{span:11}},[s("el-card",{staticClass:"box-card"},[s("div",{staticClass:"header headTit"},[s("span",[t._v("流程申请")])]),s("div",{staticClass:"sideNav"},[s("el-button",{staticClass:"sideBtn",on:{click:function(e){t.showDialog=!0}}},[t._v("加班离职")]),s("el-button",{staticClass:"sideBtn"},[t._v("请假调休")]),s("el-button",{staticClass:"sideBtn",on:{click:function(e){return t.$router.push("/users/approvals")}}},[t._v("审批列表")]),s("el-button",{staticClass:"sideBtn",on:{click:function(e){return t.$router.push("/users/info")}}},[t._v("我的信息")])],1)]),s("el-card",{staticClass:"box-card"},[s("div",{staticClass:"header",attrs:{slot:"header"},slot:"header"},[s("span",[t._v("绩效指数")])]),s("radar")],1),s("el-card",{staticClass:"box-card"},[s("div",{staticClass:"header headTit"},[s("span",[t._v("帮助链接")])]),s("div",{staticClass:"sideLink"},[s("el-row",[s("el-col",{attrs:{span:8}},[s("a",{attrs:{href:"#"}},[s("span",{staticClass:"icon iconGuide"}),s("p",[t._v("入门指南")])])]),s("el-col",{attrs:{span:8}},[s("a",{attrs:{href:"#"}},[s("span",{staticClass:"icon iconHelp"}),s("p",[t._v("在线帮助手册")])])]),s("el-col",{attrs:{span:8}},[s("a",{attrs:{href:"#"}},[s("span",{staticClass:"icon iconTechnology"}),s("p",[t._v("联系技术支持")])])])],1)],1)])],1)],1),s("el-dialog",{attrs:{visible:t.showDialog,title:"加班申请"},on:{close:t.btnCancel}},[s("el-form",{ref:"ruleForm",attrs:{model:t.ruleForm,"status-icon":"","label-width":"110px",rules:t.rules}},[s("el-form-item",{attrs:{label:"加班开始时间",prop:"start_time"}},[s("el-date-picker",{attrs:{type:"datetime","value-format":"yyyy-MM-dd HH:mm:ss",placeholder:"选择日期时间"},model:{value:t.ruleForm.start_time,callback:function(e){t.$set(t.ruleForm,"start_time",e)},expression:"ruleForm.start_time"}})],1),s("el-form-item",{attrs:{label:"加班结束时间",prop:"end_time"}},[s("el-date-picker",{attrs:{type:"datetime","value-format":"yyyy-MM-dd HH:mm:ss",placeholder:"选择日期时间"},model:{value:t.ruleForm.end_time,callback:function(e){t.$set(t.ruleForm,"end_time",e)},expression:"ruleForm.end_time"}})],1),s("el-form-item",{attrs:{label:"补偿方式"}},[s("span",[t._v("调休")])]),s("el-form-item",{attrs:{label:"加班原因",prop:"reason"}},[s("el-input",{staticStyle:{width:"70%"},attrs:{type:"textarea",autosize:{minRows:3,maxRows:8},placeholder:"请输入内容"},model:{value:t.ruleForm.reason,callback:function(e){t.$set(t.ruleForm,"reason",e)},expression:"ruleForm.reason"}})],1)],1),s("el-row",{attrs:{slot:"footer",type:"flex",justify:"center"},slot:"footer"},[s("el-col",{attrs:{span:6}},[s("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.btnOK}},[t._v("确定")]),s("el-button",{attrs:{size:"small"},on:{click:t.btnCancel}},[t._v("取消")])],1)],1)],1)],1)},r=[],n=a("1da1"),c=a("5530"),o=(a("96cf"),a("2f62")),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",[a("el-row",{attrs:{type:"flex",justify:"end"}},[a("el-select",{staticStyle:{width:"120px"},attrs:{size:"small"},on:{change:t.dateChange},model:{value:t.currentYear,callback:function(e){t.currentYear=e},expression:"currentYear"}},t._l(t.yearList,(function(e){return a("el-option",{key:e,attrs:{label:e,value:e}},[t._v(t._s(e))])})),1),a("el-select",{staticStyle:{width:"120px","margin-left":"10px"},attrs:{size:"small"},on:{change:t.dateChange},model:{value:t.currentMonth,callback:function(e){t.currentMonth=e},expression:"currentMonth"}},t._l(12,(function(e){return a("el-option",{key:e,attrs:{label:e,value:e}},[t._v(t._s(e))])})),1)],1),a("el-calendar",{attrs:{range:t.range},scopedSlots:t._u([{key:"dateCell",fn:function(e){var s=e.date,r=e.data;return[a("div",{staticClass:"date-content"},[a("span",{staticClass:"text"},[t._v(" "+t._s(t._f("getDay")(r.day)))]),t.isWeek(s)?a("span",{staticClass:"rest"},[t._v("休")]):t._e()])]}}])})],1)},l=[],u=(a("ac1f"),a("1276"),a("2ca0"),a("a630"),a("3ca3"),a("99af"),{filters:{getDay:function(t){var e=t.split("-")[2];return e.startsWith("0")?e.substr(1):e}},props:{startDate:{type:Date,default:function(){return new Date}}},data:function(){return{range:[],currentMonth:"",currentYear:"",yearList:[]}},created:function(){var t=this;this.currentMonth=this.startDate.getMonth()+1,this.currentYear=this.startDate.getFullYear(),this.yearList=Array.from(Array(11),(function(e,a){return a>4?t.currentYear+a-5:t.currentYear-(5-a)})),this.dateChange()},methods:{isWeek:function(t){return 6===t.getDay()||0===t.getDay()},dateChange:function(){var t=this.currentYear,e=this.currentMonth,a=new Date("".concat(t,"-").concat(e,"-1")),s=new Date("".concat(t,"-").concat(e,"-").concat(this.getDays(t,e))),r=a.getDay(),n=s.getDay(),c="",o="";c=1===r?"".concat(t,"-").concat(e,"-1"):1!==e?"".concat(t,"-").concat(e-1,"-").concat(this.getDays(t,e-1)-r+2):"".concat(t-1,"-",12,"-").concat(this.getDays(t-1,12)-r+2),o=0===n?"".concat(t,"-").concat(e,"-").concat(this.getDays(t,e)):"".concat(t,"-").concat(e,"-").concat(this.getDays(t,e)-n),this.range=[c,o]},getDays:function(t,e){var a=[31,28,31,30,31,30,31,31,30,31,30,31];return t%4!==0||t%100===0&&t%400!==0||(a[1]=29),a[e-1]}}}),d=u,p=(a("149a"),a("2877")),f=Object(p["a"])(d,i,l,!1,null,"7d48aaea",null),m=f.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"myDiv",staticClass:"radar-echart"})},v=[],b=a("3eba");a("8deb");var _={mounted:function(){this.chart=b.init(this.$refs.myDiv),this.setOption()},methods:{setOption:function(){this.chart.setOption({tooltip:{},legend:{data:["预算分配（Allocated Budget）","实际开销（Actual Spending）"]},radar:{name:{textStyle:{color:"#fff",backgroundColor:"#999",borderRadius:3,padding:[3,5]}},indicator:[{name:"能力",max:100},{name:"管理",max:100},{name:"周边",max:100},{name:"贡献",max:100},{name:"态度",max:100}]},series:[{name:"预算 vs 开销（Budget vs spending）",type:"radar",data:[{value:[10,20,20,80,90,100],name:"个人"},{value:[40,60,20,60,77,56],name:"部门"},{value:[26,77,24,55,37,85],name:"公司"}]}]})}}},g=_,y=(a("4be6"),Object(p["a"])(g,h,v,!1,null,"a97a5f24",null)),C=y.exports,x=a("2506"),j=Object(o["a"])("user"),w=j.mapState,O={name:"Dashboard",components:{WorkCalendar:m,Radar:C},data:function(){return{defaultImg:a("ed7b"),showDialog:!1,ruleForm:{start_time:"",end_time:"",reason:"",processKey:"process_overtime",processName:"加班"},rules:{start_time:[{required:!0,message:"加班起始时间不能为空"}],end_time:[{required:!0,message:"加班结束时间不能为空"}],reason:[{required:!0,message:"加班原因不能为空"}]}}},computed:Object(c["a"])({},w(["userInfo"])),methods:{btnOK:function(){var t=this;this.$refs.ruleForm.validate(function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(a){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!a){e.next=6;break}return s=Object(c["a"])(Object(c["a"])({},t.ruleForm),{},{userId:t.userId}),e.next=4,Object(x["q"])(s);case 4:t.$message.success("提交流程成功"),t.btnCancel();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},btnCancel:function(){this.showDialog=!1,this.$refs.ruleForm.resetFields(),this.ruleForm={start_time:"",end_time:"",reason:"",processKey:"process_overtime",processName:"加班"}}}},k=O,D=(a("50db"),Object(p["a"])(k,s,r,!1,null,"3b50fe1a",null));e["default"]=D.exports},bee9:function(t,e,a){},d482:function(t,e,a){}}]);