(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3590c2d6"],{"0147":function(t,a,r){},7413:function(t,a,r){"use strict";r.r(a);var s=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticClass:"dashboard-container"},[r("div",{staticClass:"app-container"},[r("el-card",[r("el-breadcrumb",{staticClass:"titInfo ",attrs:{separator:"/"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v("首页")]),r("el-breadcrumb-item",[r("router-link",{attrs:{to:{path:"/employees"}}},[t._v("员工管理")])],1),r("el-breadcrumb-item",[t._v("打印")])],1),"personal"===t.type?r("div",[r("h2",{staticClass:"centInfo"},[t._v("员工信息表")]),r("table",{staticClass:"tableList",attrs:{cellspacing:"1",border:"",width:"100%"}},[r("tr",{staticClass:"title"},[r("td",{staticClass:"centInfo",attrs:{colspan:"8"}},[t._v("基本信息")])]),r("tr",[r("th",{staticStyle:{width:"10%"}},[t._v("姓名")]),r("td",{staticStyle:{width:"80%"},attrs:{colspan:"6"}},[t._v(t._s(t.formData.username))]),r("td",{staticStyle:{width:"10%"},attrs:{rowspan:"5"}},[r("img",{staticStyle:{width:"155px",height:"218px"},attrs:{src:t.formData.staffPhoto}})])]),r("tr",[r("th",[t._v("性别")]),r("td",{attrs:{colspan:"6"}},[t._v(t._s(t.formData.sex))])]),r("tr",[r("th",[t._v("手机")]),r("td",{attrs:{colspan:"6"}},[t._v(t._s(t.formData.mobile))])]),r("tr",[r("th",[t._v("出生日期")]),r("td",{attrs:{colspan:"6"}},[t._v(t._s(t._f("formatDate")(t.formData.dateOfBirth)))])]),r("tr",[r("th",[t._v("最高学历")]),r("td",{attrs:{colspan:"6"}},[t._v(t._s(t.formData.theHighestDegreeOfEducation))])]),r("tr",[r("th",{staticStyle:{width:"10%"}},[t._v("是否可编辑")]),r("td",{staticStyle:{width:"35%"}},[t._v(t._s(t.formData.isItEditable))]),r("th",{staticStyle:{width:"10%"}},[t._v("是否隐藏号码")]),r("td",{staticStyle:{width:"45%"},attrs:{colspan:"5"}},[t._v(t._s(t.formData.doYouHideNumbers))])]),r("tr",[r("th",[t._v("国家地区")]),r("td",[t._v(t._s(t.formData.nationalArea))]),r("th",[t._v("护照号")]),r("td",{attrs:{colspan:"5"}},[t._v(t._s(t.formData.passportNo))])]),r("tr",[r("th",[t._v("身份证号")]),r("td",[t._v(t._s(t.formData.idNumber))]),r("th",[t._v("身份证照片")]),r("td",{attrs:{colspan:"5"}},[t._v(t._s(t.formData.iDCardPhoto))])]),r("tr",[r("th",[t._v("籍贯")]),r("td",[t._v(t._s(t.formData.nativePlace))]),r("th",[t._v("民族")]),r("td",{attrs:{colspan:"5"}},[t._v(t._s(t.formData.nation))])]),r("tr",[r("th",[t._v("英文名")]),r("td",[t._v(t._s(t.formData.englishName))]),r("th",[t._v("婚姻状况")]),r("td",{attrs:{colspan:"5"}},[t._v(t._s(t.formData.maritalStatus))])]),r("tr",[r("th",[t._v("员工照片")]),r("td",[t._v(t._s(t.formData.staffPhoto))]),r("th",[t._v("生日")]),r("td",{attrs:{colspan:"5"}},[t._v(t._s(t.formData.birthday))])]),r("tr",[r("th",[t._v("属相")]),r("td",[t._v(t._s(t.formData.zodiac))]),r("th",[t._v("年龄")]),r("td",{attrs:{colspan:"5"}},[t._v(t._s(t.formData.age))])]),r("tr",[r("th",[t._v("星座")]),r("td",[t._v(t._s(t.formData.constellation))]),r("th",[t._v("血型")]),r("td",{attrs:{colspan:"5"}},[t._v(t._s(t.formData.bloodType))])]),r("tr",[r("th",[t._v("户籍所在地")]),r("td",[t._v(t._s(t.formData.domicile))]),r("th",[t._v("政治面貌")]),r("td",{attrs:{colspan:"5"}},[t._v(t._s(t.formData.politicalOutlook))])]),r("tr",[r("th",[t._v("入党时间")]),r("td",[t._v(t._s(t.formData.timeToJoinTheParty))]),r("th",[t._v("存档机构")]),r("td",{attrs:{colspan:"5"}},[t._v(t._s(t.formData.archivingOrganization))])]),r("tr",[r("th",[t._v("子女状态")]),r("td",[t._v(t._s(t.formData.stateOfChildren))]),r("th",[t._v("子女有无商业保险")]),r("td",{attrs:{colspan:"5"}},[t._v(t._s(t.formData.doChildrenHaveCommercialInsurance))])]),r("tr",[r("th",[t._v("有无违法违纪行为")]),r("td",[t._v(t._s(t.formData.isThereAnyViolationOfLawOrDiscipline))]),r("th",[t._v("有无重大病史")]),r("td",{attrs:{colspan:"5"}},[t._v(t._s(t.formData.areThereAnyMajorMedicalHistories))])]),r("tr",{staticClass:"title"},[r("td",{staticClass:"centInfo",attrs:{colspan:"8"}},[t._v("通讯信息")])]),r("tr",[r("th",[t._v("QQ")]),r("td",[t._v(t._s(t.formData.qQ))]),r("th",[t._v("微信")]),r("td",{attrs:{colspan:"5"}},[t._v(t._s(t.formData.weChat))])]),r("tr",[r("th",[t._v("居住证城市")]),r("td",[t._v(t._s(t.formData.residenceCardCity))]),r("th",[t._v("居住证办理日期")]),r("td",{attrs:{colspan:"5"}},[t._v(t._s(t.formData.dateOfResidencePermit))])]),r("tr",[r("th",[t._v("居住证截止日期")]),r("td",[t._v(t._s(t.formData.residencePermitDeadline))]),r("th",[t._v("现居住地")]),r("td",{attrs:{colspan:"5"}},[t._v(t._s(t.formData.placeOfResidence))])]),r("tr",[r("th",[t._v("通讯地址")]),r("td",[t._v(t._s(t.formData.postalAddress))]),r("th",[t._v("联系手机")]),r("td",{attrs:{colspan:"5"}},[t._v(t._s(t.formData.contactTheMobilePhone))])]),r("tr",[r("th",[t._v("个人邮箱")]),r("td",[t._v(t._s(t.formData.personalMailbox))]),r("th",[t._v("紧急联系人")]),r("td",{attrs:{colspan:"5"}},[t._v(t._s(t.formData.emergencyContact))])]),r("tr",[r("th",[t._v("紧急联系电话")]),r("td",{attrs:{colspan:"7"}},[t._v(t._s(t.formData.emergencyContactNumber))])]),r("tr",{staticClass:"title"},[r("td",{staticClass:"centInfo",attrs:{colspan:"8"}},[t._v("账号信息")])]),r("tr",[r("th",[t._v("社保电脑号")]),r("td",[t._v(t._s(t.formData.socialSecurityComputerNumber))]),r("th",[t._v("公积金账号")]),r("td",{attrs:{colspan:"5"}},[t._v(t._s(t.formData.providentFundAccount))])]),r("tr",[r("th",[t._v("银行卡号")]),r("td",[t._v(t._s(t.formData.bankCardNumber))]),r("th",[t._v("开户行")]),r("td",{attrs:{colspan:"5"}},[t._v(t._s(t.formData.openingBank))])]),r("tr",{staticClass:"title"},[r("td",{staticClass:"centInfo",attrs:{colspan:"8"}},[t._v("教育信息")])]),r("tr",[r("th",[t._v("学历类型")]),r("td",[t._v(t._s(t.formData.educationalType))]),r("th",[t._v("毕业学校")]),r("td",{attrs:{colspan:"5"}},[t._v(t._s(t.formData.graduateSchool))])]),r("tr",[r("th",[t._v("入学时间")]),r("td",[t._v(t._s(t.formData.enrolmentTime))]),r("th",[t._v("毕业时间")]),r("td",{attrs:{colspan:"5"}},[t._v(t._s(t.formData.graduationTime))])]),r("tr",[r("th",[t._v("专业")]),r("td",[t._v(t._s(t.formData.major))]),r("th",[t._v("毕业证书")]),r("td",{attrs:{colspan:"5"}},[t._v(t._s(t.formData.graduationCertificate))])]),r("tr",[r("th",[t._v("学位证书")]),r("td",{attrs:{colspan:"7"}},[t._v(t._s(t.formData.certificateOfAcademicDegree))])]),r("tr",{staticClass:"title"},[r("td",{staticClass:"centInfo",attrs:{colspan:"8"}},[t._v("从业信息")])]),r("tr",[r("th",[t._v("上家公司")]),r("td",[t._v(t._s(t.formData.homeCompany))]),r("th",[t._v("职称")]),r("td",{attrs:{colspan:"5"}},[t._v(t._s(t.formData.title))])]),r("tr",[r("th",[t._v("简历")]),r("td",[t._v(t._s(t.formData.resume))]),r("th",[t._v("有无竞业限制")]),r("td",{attrs:{colspan:"5"}},[t._v(t._s(t.formData.isThereAnyCompetitionRestriction))])]),r("tr",[r("th",[t._v("前公司离职证明")]),r("td",[t._v(t._s(t.formData.proofOfDepartureOfFormerCompany))]),r("th",[t._v("备注")]),r("td",{attrs:{colspan:"5"}},[t._v(t._s(t.formData.remarks))])])]),r("div",{staticClass:"foot"},[t._v("签字：___________日期:___________")])]):r("div",[r("h2",{staticClass:"centInfo"},[t._v("岗位信息表")]),r("table",{staticClass:"tableList",attrs:{cellspacing:"0",width:"100%"}},[r("tr",{staticClass:"title"},[r("td",{staticClass:"centInfo",attrs:{colspan:"4"}},[t._v("基本信息")])]),r("tr",[r("th",{staticStyle:{width:"10%"}},[t._v("姓名")]),r("td",{staticStyle:{width:"40%"}},[t._v(t._s(t.formData.username))]),r("th",{staticStyle:{width:"10%"}},[t._v("入职日期")]),r("td",{staticStyle:{width:"40%"}},[t._v(t._s(t.formData.dateOfEntry))])]),r("tr",[r("th",[t._v("部门")]),r("td",[t._v(t._s(t.formData.departmentName))]),r("th",[t._v("岗位")]),r("td",[t._v(t._s(t.formData.post))])]),r("tr",[r("th",[t._v("工作邮箱")]),r("td",[t._v(t._s(t.formData.workMailbox))]),r("th",[t._v("工号")]),r("td",[t._v(t._s(t.formData.workNumber))])]),r("tr",[r("th",[t._v("转正日期")]),r("td",[t._v(t._s(t.formData.dateOfCorrection))]),r("th",[t._v("转正状态")]),r("td",[t._v(t._s(t.formData.stateOfCorrection))])]),r("tr",[r("th",[t._v("职级")]),r("td",[t._v(t._s(t.formData.rank))]),r("th",[t._v("汇报对象")]),r("td",[t._v(t._s(t.formData.reportName))])]),r("tr",[r("th",[t._v("HRBP")]),r("td",[t._v(t._s(t.formData.hRBP))]),r("th",[t._v("聘用形式")]),r("td",[t._v(t._s(t.formData.formOfEmployment))])]),r("tr",[r("th",[t._v("管理形式")]),r("td",[t._v(t._s(t.formData.formOfManagement))]),r("th",[t._v("调整司龄")]),r("td",[t._v(t._s(t.formData.adjustmentAgedays))])]),r("tr",[r("th",[t._v("司龄")]),r("td",[t._v(t._s(t.formData.ageOfDivision))]),r("th",[t._v("首次参加工作时间")]),r("td",[t._v(t._s(t.formData.workingTimeForTheFirstTime))])]),r("tr",[r("th",[t._v("调整工龄天")]),r("td",[t._v(t._s(t.formData.adjustmentOfLengthOfService))]),r("th",[t._v("工龄")]),r("td",[t._v(t._s(t.formData.workingYears))])]),r("tr",[r("th",[t._v("纳税城市")]),r("td",[t._v(t._s(t.formData.taxableCity))]),r("th",[t._v("转正评价")]),r("td",[t._v(t._s(t.formData.correctionEvaluation))])]),r("tr",{staticClass:"title"},[r("td",{staticClass:"centInfo",attrs:{colspan:"4"}},[t._v("合同信息")])]),r("tr",[r("th",[t._v("首次合同开始时间")]),r("td",[t._v(t._s(t.formData.initialContractStartTime))]),r("th",[t._v("首次合同结束时间")]),r("td",[t._v(t._s(t.formData.firstContractTerminationTime))])]),r("tr",[r("th",[t._v("现合同开始时间")]),r("td",[t._v(t._s(t.formData.currentContractStartTime))]),r("th",[t._v("现合同结束时间")]),r("td",[t._v(t._s(t.formData.closingTimeOfCurrentContract))])]),r("tr",[r("th",[t._v("合同期限")]),r("td",[t._v(t._s(t.formData.contractPeriod))]),r("th",[t._v("合同文件")]),r("td",[t._v(t._s(t.formData.contractDocuments))])]),r("tr",[r("th",[t._v("续签次数")]),r("td",{attrs:{colspan:"3"}},[t._v(t._s(t.formData.renewalNumber))])]),r("tr",{staticClass:"title"},[r("td",{staticClass:"centInfo",attrs:{colspan:"4"}},[t._v("招聘信息")])]),r("tr",[r("th",[t._v("其他招聘渠道")]),r("td",[t._v(t._s(t.formData.otherRecruitmentChannels))]),r("th",[t._v("招聘渠道")]),r("td",[t._v(t._s(t.formData.recruitmentChannels))])]),r("tr",[r("th",[t._v("社招校招")]),r("td",[t._v(t._s(t.formData.socialRecruitment))]),r("th",[t._v("推荐企业人")]),r("td",[t._v(t._s(t.formData.recommenderBusinessPeople))])])]),r("div",{staticClass:"foot"},[t._v("签字：___________日期:___________")])])],1)],1)])},e=[],o=r("5530"),_=r("1da1"),n=(r("96cf"),r("8f00")),i=r("c24f"),c={data:function(){return{formData:{},userId:this.$route.params.id,type:this.$route.query.type}},created:function(){"personal"===this.type?this.getPersonalDetail():this.getJobDetail()},methods:{getPersonalDetail:function(){var t=this;return Object(_["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,Object(n["h"])(t.userId);case 2:t.formData=a.sent,t.$nextTick((function(){window.print()}));case 4:case"end":return a.stop()}}),a)})))()},getJobDetail:function(){var t=this;return Object(_["a"])(regeneratorRuntime.mark((function a(){var r,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,Object(i["a"])(t.userId);case 2:return r=a.sent,a.next=5,Object(n["g"])(t.userId);case 5:s=a.sent,t.formData=Object(o["a"])(Object(o["a"])({},r),s),t.$nextTick((function(){window.print()}));case 8:case"end":return a.stop()}}),a)})))()}}},v=c,d=(r("f958"),r("2877")),f=Object(d["a"])(v,s,e,!1,null,null,null);a["default"]=f.exports},"8f00":function(t,a,r){"use strict";r.d(a,"f",(function(){return e})),r.d(a,"e",(function(){return o})),r.d(a,"d",(function(){return _})),r.d(a,"a",(function(){return n})),r.d(a,"i",(function(){return i})),r.d(a,"h",(function(){return c})),r.d(a,"k",(function(){return v})),r.d(a,"g",(function(){return d})),r.d(a,"j",(function(){return f})),r.d(a,"b",(function(){return l}));var s=r("b775");function e(){return Object(s["a"])({url:"/sys/user/simple"})}function o(t){return Object(s["a"])({url:"/sys/user",params:t})}function _(t){return Object(s["a"])({url:"/sys/user/".concat(t),method:"delete"})}function n(t){return Object(s["a"])({url:"/sys/user",method:"post",data:t})}function i(t){return Object(s["a"])({url:"/sys/user/".concat(t.id),method:"put",data:t})}function c(t){return Object(s["a"])({url:"/employees/".concat(t,"/personalInfo")})}function v(t){return Object(s["a"])({url:"/employees/".concat(t.userId,"/personalInfo"),method:"put",data:t})}function d(t){return Object(s["a"])({url:"/employees/".concat(t,"/jobs")})}function f(t){return Object(s["a"])({url:"/employees/".concat(t.userId,"/jobs"),method:"put",data:t})}function l(t){return Object(s["a"])({url:"/sys/user/assignRoles",data:t,method:"put"})}},f958:function(t,a,r){"use strict";r("0147")}}]);