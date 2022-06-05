(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{297:function(t,o,e){"use strict";var l=e(299),n=e.n(l);o.a=n.a.create({baseURL:"http://localhost:8080"})},335:function(t,o,e){"use strict";e.r(o);e(162);var l=e(297),n={layout:"default",props:["profileId"],data:function(){return{newJobApplication:{companyName:"",jobUrl:"",createdDate:""},jobApplications:[]}},created:function(){var t=this;l.a.get("/jobapplications/profile/"+this.profileId).then((function(o){return t.jobApplications=o.data}))},methods:{insert:function(){var t=this;this.newJobApplication.profileId=this.profileId,l.a.post("/jobapplications",this.newJobApplication).then((function(o){t.newJobApplication={companyName:"",jobUrl:"",createdDate:""},t.newJobApplications.push(o.data)}))},update:function(t){link.profileId=this.profileId,l.a.put("jobapplications/"+t.id,t).then((function(t){}))},remove:function(t,o){var e=this;l.a.delete("jobapplications/"+t).then((function(t){return e.jobApplications.splice(o,1)}))}}},r=e(64),component=Object(r.a)(n,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"child-module"},[e("h5",[t._v("Applying")]),t._v(" "),e("b-form",[e("b-form-row",[e("b-col",{attrs:{cols:"3"}},[e("b-form-group",{attrs:{id:"job-application-company-name",label:"Company name","label-for":"job-application-company-name-tx"}},[e("b-form-input",{attrs:{id:"job-application-company-name-tx",placeholder:"Company name",required:""},model:{value:t.newJobApplication.companyName,callback:function(o){t.$set(t.newJobApplication,"companyName",o)},expression:"newJobApplication.companyName"}})],1)],1),t._v(" "),e("b-col",{attrs:{cols:"3"}},[e("b-form-group",{attrs:{id:"job-application-job-url",label:"Job URL","label-for":"job-application-job-url-tx"}},[e("b-form-input",{attrs:{id:"job-application-job-url-tx",placeholder:"Job URL"},model:{value:t.newJobApplication.jobUrl,callback:function(o){t.$set(t.newJobApplication,"jobUrl",o)},expression:"newJobApplication.jobUrl"}})],1)],1),t._v(" "),e("b-col",{attrs:{cols:"3"}},[e("b-form-group",{attrs:{id:"job-application-created-date",label:"Date","label-for":"job-application-created-date-tx"}},[e("b-form-datepicker",{staticClass:"mb-2",attrs:{id:"job-application-created-date-tx","date-format-options":{year:"numeric",month:"numeric",day:"numeric"},placeholder:"Date"},model:{value:t.newJobApplication.createdDate,callback:function(o){t.$set(t.newJobApplication,"createdDate",o)},expression:"newJobApplication.createdDate"}})],1)],1),t._v(" "),e("b-col",{attrs:{cols:"3"}},[e("b-form-group",{attrs:{id:"job-application-action",label:"Action","label-for":"job-application-action-butt"}},[e("b-button",{attrs:{id:"job-application-action-butt",type:"button"},on:{click:t.insert}},[t._v("Add")])],1)],1)],1),t._v(" "),e("b-form-row",[e("b-col",{attrs:{cols:"2"}},[e("b-form-group",{attrs:{label:"Company name"}})],1),t._v(" "),e("b-col",{attrs:{cols:"2"}},[e("b-form-group",{attrs:{label:"Job URL"}})],1),t._v(" "),e("b-col",{attrs:{cols:"2"}},[e("b-form-group",{attrs:{label:"Date apply"}})],1),t._v(" "),e("b-col",{attrs:{cols:"2"}},[e("b-form-group",{attrs:{label:"Updated date"}})],1),t._v(" "),e("b-col",{attrs:{cols:"2"}},[e("b-form-group",{attrs:{label:"Latest status"}})],1),t._v(" "),e("b-col",{attrs:{cols:"2"}},[e("b-form-group",{attrs:{label:"Action"}})],1)],1),t._v(" "),t._l(t.jobApplications,(function(o,l){return e("b-form-row",[e("b-col",{attrs:{cols:"2"}},[e("b-form-group",[e("b-form-input",{attrs:{id:"job-application-company-name-tx"+l,placeholder:"Company name",required:""},model:{value:o.companyName,callback:function(e){t.$set(o,"companyName",e)},expression:"jobApplication.companyName"}})],1)],1),t._v(" "),e("b-col",{attrs:{cols:"2"}},[e("b-form-group",[e("b-form-input",{attrs:{id:"job-application-job-url-tx"+l,placeholder:"Job URL"},model:{value:o.jobUrl,callback:function(e){t.$set(o,"jobUrl",e)},expression:"jobApplication.jobUrl"}})],1)],1),t._v(" "),e("b-col",{attrs:{cols:"2"}},[e("b-form-group",[e("b-form-datepicker",{staticClass:"mb-2",attrs:{id:"job-application-created-date-tx"+l,"date-format-options":{year:"numeric",month:"numeric",day:"numeric"},placeholder:"Date"},model:{value:o.createdDate,callback:function(e){t.$set(o,"createdDate",e)},expression:"jobApplication.createdDate"}})],1)],1),t._v(" "),e("b-col",{attrs:{cols:"2"}},[e("b-form-group",[e("b-form-datepicker",{staticClass:"mb-2",attrs:{id:"job-application-updated-date-tx"+l,"date-format-options":{year:"numeric",month:"numeric",day:"numeric"},placeholder:"Date"},model:{value:o.updatedDate,callback:function(e){t.$set(o,"updatedDate",e)},expression:"jobApplication.updatedDate"}})],1)],1),t._v(" "),e("b-col",{attrs:{cols:"2"}},[e("b-form-group",[e("b-form-input",{attrs:{id:"job-application-job-url-tx"+l,placeholder:"Latest status"},model:{value:o.latestStatus,callback:function(e){t.$set(o,"latestStatus",e)},expression:"jobApplication.latestStatus"}})],1)],1),t._v(" "),e("b-col",{attrs:{cols:"2"}},[e("b-form-group",[e("b-button",{attrs:{id:"job-application-action-save-butt"+l,type:"button"},on:{click:function(e){return t.update(o)}}},[t._v("Save")]),t._v(" "),e("b-button",{attrs:{id:"job-application-action-del-butt"+l,type:"button",variant:"danger"},on:{click:function(e){return t.remove(o.id,l)}}},[t._v("Delete")])],1)],1)],1)}))],2)],1)}),[],!1,null,null,null);o.default=component.exports}}]);