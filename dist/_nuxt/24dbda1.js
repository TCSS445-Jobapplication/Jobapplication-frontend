(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{297:function(n,t,e){"use strict";var l=e(299),o=e.n(l);t.a=o.a.create({baseURL:"ec2-52-26-31-177.us-west-2.compute.amazonaws.com"})},348:function(n,t,e){"use strict";e.r(t);e(162);var l=e(297),o={layout:"default",props:["profileId"],data:function(){return{newLink:{name:"",url:""},links:[]}},created:function(){var n=this;l.a.get("/links/profile/"+this.profileId).then((function(t){return n.links=t.data}))},methods:{insert:function(){var n=this;this.newLink.profileId=this.profileId,l.a.post("/links",this.newLink).then((function(t){n.newLink={name:"",link:""},n.links.push(t.data)}))},update:function(link){link.profileId=this.profileId,l.a.put("links/"+link.id,link).then((function(n){}))},remove:function(n,t){var e=this;l.a.delete("links/"+n).then((function(n){return e.links.splice(t,1)}))}}},r=e(64),component=Object(r.a)(o,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"child-module"},[e("h5",[n._v("Links")]),n._v(" "),e("b-form",[e("b-form-row",[e("b-col",{attrs:{cols:"5"}},[e("b-form-group",{attrs:{id:"link-name",label:"Link name","label-for":"link-name-tx"}},[e("b-form-input",{attrs:{id:"link-name-tx",placeholder:"Link name",required:""},model:{value:n.newLink.name,callback:function(t){n.$set(n.newLink,"name",t)},expression:"newLink.name"}})],1)],1),n._v(" "),e("b-col",{attrs:{cols:"5"}},[e("b-form-group",{attrs:{id:"link",label:"Link","label-for":"link-tx"}},[e("b-form-input",{attrs:{id:"link-tx",placeholder:"Link",required:""},model:{value:n.newLink.url,callback:function(t){n.$set(n.newLink,"url",t)},expression:"newLink.url"}})],1)],1),n._v(" "),e("b-col",{attrs:{cols:"2"}},[e("b-form-group",{attrs:{id:"link-action",label:"Action","label-for":"link-action-butt"}},[e("b-button",{attrs:{id:"link-action-butt",type:"button"},on:{click:n.insert}},[n._v("Add")])],1)],1)],1),n._v(" "),n._l(n.links,(function(link,t){return e("b-form-row",[e("b-col",{attrs:{cols:"5"}},[e("b-form-group",[e("b-form-input",{attrs:{id:"link-name-tx"+t,placeholder:"Link name",required:""},model:{value:link.name,callback:function(t){n.$set(link,"name",t)},expression:"link.name"}})],1)],1),n._v(" "),e("b-col",{attrs:{cols:"5"}},[e("b-form-group",[e("b-form-input",{attrs:{id:"link-tx"+t,placeholder:"Link",required:""},model:{value:link.url,callback:function(t){n.$set(link,"url",t)},expression:"link.url"}})],1)],1),n._v(" "),e("b-col",{attrs:{cols:"2"}},[e("b-form-group",[e("b-button",{attrs:{id:"link-action-save-butt"+t,type:"button"},on:{click:function(t){return n.update(link)}}},[n._v("Save")]),n._v(" "),e("b-button",{attrs:{id:"link-action-del-butt"+t,type:"button",variant:"danger"},on:{click:function(e){return n.remove(link.id,t)}}},[n._v("Delete")])],1)],1)],1)}))],2)],1)}),[],!1,null,null,null);t.default=component.exports}}]);