(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{297:function(e,r,o){"use strict";var t=o(299),n=o.n(t);r.a=n.a.create({baseURL:"https://jobappapi.vunguyen.dev:8080"})},347:function(e,r,o){"use strict";o.r(r);o(162);var t=o(297),n={layout:"default",props:["profileId"],data:function(){return{newExperience:{jobTitle:"",from:"",to:"",companyName:"",companyAddress:"",jobDescription:""},experiences:[]}},created:function(){var e=this;t.a.get("/experiences/profile/"+this.profileId).then((function(r){return e.experiences=r.data}))},methods:{insert:function(){var e=this;this.newExperience.profileId=this.profileId,t.a.post("/experiences",this.newExperience).then((function(r){e.newExperience={name:"",from:"",to:"",url:""},e.experiences.push(r.data)}))},update:function(e){e.profileId=this.profileId,t.a.put("experiences/"+e.id,e).then((function(e){}))},remove:function(e,r){var o=this;t.a.delete("experiences/"+e).then((function(e){return o.experiences.splice(r,1)}))}}},c=o(64),component=Object(c.a)(n,(function(){var e=this,r=e.$createElement,o=e._self._c||r;return o("div",{staticClass:"child-module"},[o("h5",[e._v("Experience")]),e._v(" "),o("b-form",[o("b-form-row",[o("b-col",{attrs:{cols:"4"}},[o("b-form-group",{attrs:{id:"experience-job-title",label:"Job title","label-for":"experience-job-title-tx"}},[o("b-form-input",{attrs:{id:"experience-job-title-tx",placeholder:"Job title",required:""},model:{value:e.newExperience.jobTitle,callback:function(r){e.$set(e.newExperience,"jobTitle",r)},expression:"newExperience.jobTitle"}})],1)],1),e._v(" "),o("b-col",{attrs:{cols:"4"}},[o("b-form-group",{attrs:{id:"from",label:"From","label-for":"from-tx"}},[o("b-form-datepicker",{staticClass:"mb-2",attrs:{id:"from-tx","date-format-options":{year:"numeric",month:"numeric",day:"numeric"},placeholder:"From",required:""},model:{value:e.newExperience.from,callback:function(r){e.$set(e.newExperience,"from",r)},expression:"newExperience.from"}})],1)],1),e._v(" "),o("b-col",{attrs:{cols:"4"}},[o("b-form-group",{attrs:{id:"to",label:"To","label-for":"to-tx"}},[o("b-form-datepicker",{staticClass:"mb-2",attrs:{id:"to-tx","date-format-options":{year:"numeric",month:"numeric",day:"numeric"},placeholder:"To"},model:{value:e.newExperience.to,callback:function(r){e.$set(e.newExperience,"to",r)},expression:"newExperience.to"}})],1)],1)],1),e._v(" "),o("b-form-row",[o("b-col",{attrs:{cols:"5"}},[o("b-form-group",{attrs:{id:"experience-company-name",label:"Company name","label-for":"experience-company-name-tx"}},[o("b-form-input",{attrs:{id:"experience-company-name-tx",placeholder:"Company name",required:""},model:{value:e.newExperience.companyName,callback:function(r){e.$set(e.newExperience,"companyName",r)},expression:"newExperience.companyName"}})],1)],1),e._v(" "),o("b-col",{attrs:{cols:"5"}},[o("b-form-group",{attrs:{id:"experience-company-address",label:"Company address","label-for":"experience-company-address-tx"}},[o("b-form-input",{attrs:{id:"experience-company-address-tx",placeholder:"Company address",required:""},model:{value:e.newExperience.companyAddress,callback:function(r){e.$set(e.newExperience,"companyAddress",r)},expression:"newExperience.companyAddress"}})],1)],1)],1),e._v(" "),o("b-form-row",[o("b-col",{attrs:{cols:"12"}},[o("b-form-group",{attrs:{id:"experience-job-description",label:"Description","label-for":"experience-job-description-tx"}},[o("b-form-textarea",{attrs:{id:"experience-job-description-tx",placeholder:"Job description",rows:"3","max-rows":"6"},model:{value:e.newExperience.jobDescription,callback:function(r){e.$set(e.newExperience,"jobDescription",r)},expression:"newExperience.jobDescription"}})],1)],1)],1),e._v(" "),o("b-form-row",[o("b-col",{attrs:{cols:"12"}},[o("b-form-group",{attrs:{id:"experience-action",label:"Action","label-for":"experience-action-butt"}},[o("b-button",{attrs:{id:"experience-action-butt",type:"button"},on:{click:e.insert}},[e._v("Add")])],1)],1)],1),e._v(" "),e._l(e.experiences,(function(r,t){return[o("b-form-row",[o("b-col",{attrs:{cols:"4"}},[o("b-form-group",{attrs:{id:"experience-job-title"+t,label:"Job title","label-for":"experience-job-title-tx"+t}},[o("b-form-input",{attrs:{id:"experience-job-title-tx"+t,placeholder:"Job title",required:""},model:{value:r.jobTitle,callback:function(o){e.$set(r,"jobTitle",o)},expression:"experience.jobTitle"}})],1)],1),e._v(" "),o("b-col",{attrs:{cols:"4"}},[o("b-form-group",{attrs:{id:"from"+t,label:"From","label-for":"from-tx"+t}},[o("b-form-datepicker",{staticClass:"mb-2",attrs:{id:"from-tx"+t,"date-format-options":{year:"numeric",month:"numeric",day:"numeric"},placeholder:"From",required:""},model:{value:r.from,callback:function(o){e.$set(r,"from",o)},expression:"experience.from"}})],1)],1),e._v(" "),o("b-col",{attrs:{cols:"4"}},[o("b-form-group",{attrs:{id:"to"+t,label:"To","label-for":"to-tx"+t}},[o("b-form-datepicker",{staticClass:"mb-2",attrs:{id:"to-tx"+t,"date-format-options":{year:"numeric",month:"numeric",day:"numeric"},placeholder:"To"},model:{value:r.to,callback:function(o){e.$set(r,"to",o)},expression:"experience.to"}})],1)],1)],1),e._v(" "),o("b-form-row",[o("b-col",{attrs:{cols:"5"}},[o("b-form-group",{attrs:{id:"experience-company-name"+t,label:"Company name","label-for":"experience-company-name-tx"+t}},[o("b-form-input",{attrs:{id:"experience-company-name-tx"+t,placeholder:"Company name",required:""},model:{value:r.companyName,callback:function(o){e.$set(r,"companyName",o)},expression:"experience.companyName"}})],1)],1),e._v(" "),o("b-col",{attrs:{cols:"5"}},[o("b-form-group",{attrs:{id:"experience-company-address"+t,label:"Company address","label-for":"experience-company-address-tx"+t}},[o("b-form-input",{attrs:{id:"experience-company-address-tx"+t,placeholder:"Company address",required:""},model:{value:r.companyAddress,callback:function(o){e.$set(r,"companyAddress",o)},expression:"experience.companyAddress"}})],1)],1)],1),e._v(" "),o("b-form-row",[o("b-col",{attrs:{cols:"12"}},[o("b-form-group",{attrs:{id:"experience-job-description"+t,label:"Description","label-for":"experience-job-description-tx"+t}},[o("b-form-textarea",{attrs:{id:"experience-job-description-tx"+t,placeholder:"Job description",rows:"3","max-rows":"6"},model:{value:r.jobDescription,callback:function(o){e.$set(r,"jobDescription",o)},expression:"experience.jobDescription"}})],1)],1)],1),e._v(" "),o("b-form-row",[o("b-col",{attrs:{cols:"12"}},[o("b-form-group",[o("b-button",{attrs:{id:"experience-action-save-butt"+t,type:"button"},on:{click:function(o){return e.update(r)}}},[e._v("Save")]),e._v(" "),o("b-button",{attrs:{id:"experience-action-del-butt"+t,type:"button",variant:"danger"},on:{click:function(o){return e.remove(r.id,t)}}},[e._v("Delete")])],1)],1)],1)]}))],2)],1)}),[],!1,null,null,null);r.default=component.exports}}]);