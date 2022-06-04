(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{297:function(t,o,e){"use strict";var r=e(299),c=e.n(r);o.a=c.a.create({baseURL:"http://localhost:8080"})},350:function(t,o,e){"use strict";e.r(o);e(162);var r=e(297),c={layout:"default",props:["profileId"],data:function(){return{newProject:{schoolName:"",degree:"",major:"",from:"",to:"",gpa:""},projects:[]}},created:function(){var t=this;r.a.get("/projects/profile/"+this.profileId).then((function(o){return t.projects=o.data}))},methods:{insert:function(){var t=this;this.newProject.profileId=this.profileId,r.a.post("/projects",this.newProject).then((function(o){t.newProject={name:"",from:"",to:"",url:""},t.projects.push(o.data)}))},update:function(t){t.profileId=this.profileId,r.a.put("projects/"+t.id,t).then((function(t){}))},remove:function(t,o){var e=this;r.a.delete("projects/"+t).then((function(t){return e.projects.splice(o,1)}))}}},l=e(64),component=Object(l.a)(c,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"child-module"},[e("h5",[t._v("Projects")]),t._v(" "),e("b-form",[e("b-form-row",[e("b-col",{attrs:{cols:"4"}},[e("b-form-group",{attrs:{id:"project-name",label:"Name","label-for":"project-name-tx"}},[e("b-form-input",{attrs:{id:"project-name-tx",placeholder:"Name",required:""},model:{value:t.newProject.name,callback:function(o){t.$set(t.newProject,"name",o)},expression:"newProject.name"}})],1)],1),t._v(" "),e("b-col",{attrs:{cols:"4"}},[e("b-form-group",{attrs:{id:"from",label:"From","label-for":"from-tx"}},[e("b-form-datepicker",{staticClass:"mb-2",attrs:{id:"from-tx","date-format-options":{year:"numeric",month:"numeric",day:"numeric"},placeholder:"From",required:""},model:{value:t.newProject.from,callback:function(o){t.$set(t.newProject,"from",o)},expression:"newProject.from"}})],1)],1),t._v(" "),e("b-col",{attrs:{cols:"4"}},[e("b-form-group",{attrs:{id:"to",label:"To","label-for":"to-tx"}},[e("b-form-datepicker",{staticClass:"mb-2",attrs:{id:"to-tx","date-format-options":{year:"numeric",month:"numeric",day:"numeric"},placeholder:"To"},model:{value:t.newProject.to,callback:function(o){t.$set(t.newProject,"to",o)},expression:"newProject.to"}})],1)],1)],1),t._v(" "),e("b-form-row",[e("b-col",{attrs:{cols:"12"}},[e("b-form-group",{attrs:{id:"project-description",label:"Description","label-for":"project-description-tx"}},[e("b-form-textarea",{attrs:{id:"project-description-tx",placeholder:"Description",rows:"3","max-rows":"6"},model:{value:t.newProject.description,callback:function(o){t.$set(t.newProject,"description",o)},expression:"newProject.description"}})],1)],1)],1),t._v(" "),e("b-form-row",[e("b-col",{attrs:{cols:"12"}},[e("b-form-group",{attrs:{id:"project-url",label:"URL","label-for":"project-url-tx"}},[e("b-form-input",{attrs:{id:"project-url-tx",placeholder:"URL"},model:{value:t.newProject.url,callback:function(o){t.$set(t.newProject,"url",o)},expression:"newProject.url"}})],1)],1)],1),t._v(" "),e("b-form-row",[e("b-col",{attrs:{cols:"12"}},[e("b-form-group",{attrs:{id:"project-action",label:"Action","label-for":"project-action-butt"}},[e("b-button",{attrs:{id:"project-action-butt",type:"button"},on:{click:t.insert}},[t._v("Add")])],1)],1)],1),t._v(" "),t._l(t.projects,(function(o,r){return[e("b-form-row",[e("b-col",{attrs:{cols:"4"}},[e("b-form-group",{attrs:{id:"project-name"+r,label:"Name","label-for":"project-name-tx"+r}},[e("b-form-input",{attrs:{id:"project-name-tx"+r,placeholder:"Name",required:""},model:{value:o.name,callback:function(e){t.$set(o,"name",e)},expression:"project.name"}})],1)],1),t._v(" "),e("b-col",{attrs:{cols:"4"}},[e("b-form-group",{attrs:{id:"from"+r,label:"From","label-for":"from-tx"+r}},[e("b-form-datepicker",{staticClass:"mb-2",attrs:{id:"from-tx"+r,"date-format-options":{year:"numeric",month:"numeric",day:"numeric"},placeholder:"From",required:""},model:{value:o.from,callback:function(e){t.$set(o,"from",e)},expression:"project.from"}})],1)],1),t._v(" "),e("b-col",{attrs:{cols:"4"}},[e("b-form-group",{attrs:{id:"to"+r,label:"To","label-for":"to-tx"+r}},[e("b-form-datepicker",{staticClass:"mb-2",attrs:{id:"to-tx"+r,"date-format-options":{year:"numeric",month:"numeric",day:"numeric"},placeholder:"To"},model:{value:o.to,callback:function(e){t.$set(o,"to",e)},expression:"project.to"}})],1)],1)],1),t._v(" "),e("b-form-row",[e("b-col",{attrs:{cols:"12"}},[e("b-form-group",{attrs:{id:"project-description"+r,label:"Description","label-for":"project-description-tx"+r}},[e("b-form-textarea",{attrs:{id:"project-description-tx"+r,placeholder:"Description",rows:"3","max-rows":"6"},model:{value:o.description,callback:function(e){t.$set(o,"description",e)},expression:"project.description"}})],1)],1)],1),t._v(" "),e("b-form-row",[e("b-col",{attrs:{cols:"12"}},[e("b-form-group",{attrs:{id:"project-url"+r,label:"URL","label-for":"project-url-tx"+r}},[e("b-form-input",{attrs:{id:"project-url-tx"+r,placeholder:"URL"},model:{value:o.url,callback:function(e){t.$set(o,"url",e)},expression:"project.url"}})],1)],1)],1),t._v(" "),e("b-form-row",[e("b-col",{attrs:{cols:"12"}},[e("b-form-group",[e("b-button",{attrs:{id:"project-action-save-butt"+r,type:"button"},on:{click:function(e){return t.update(o)}}},[t._v("Save")]),t._v(" "),e("b-button",{attrs:{id:"project-action-del-butt"+r,type:"button",variant:"danger"},on:{click:function(e){return t.remove(o.id,r)}}},[t._v("Delete")])],1)],1)],1)]}))],2)],1)}),[],!1,null,null,null);o.default=component.exports}}]);