(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{299:function(n,t,e){"use strict";(function(n){var l=e(301),r=e.n(l);t.a=r.a.create({baseURL:n.env.baseUrl})}).call(this,e(162))},339:function(n,t,e){"use strict";e.r(t);e(163);var l=e(299),r={layout:"default",props:["userId"],data:function(){return{newLink:{name:"",link:""},links:[]}},created:function(){var n=this;l.a.get("/links/user/"+this.userId).then((function(t){return n.links=t.data}))},methods:{insert:function(){var n=this;this.newLink.userId=this.userId,l.a.post("/links",this.newLink).then((function(t){n.newLink={name:"",link:""},n.links.push(t.data)}))},update:function(link){link.userId=this.userId,l.a.put("links/"+link.id,link).then((function(n){}))},remove:function(n,t){var e=this;l.a.delete("links/"+n).then((function(n){return e.links.splice(t,1)}))}}},o=e(64),component=Object(o.a)(r,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"child-module"},[e("h5",[n._v("Links")]),n._v(" "),e("b-form",[e("b-form-row",[e("b-col",{attrs:{cols:"5"}},[e("b-form-group",{attrs:{id:"link-name",label:"Link name","label-for":"link-name-tx"}},[e("b-form-input",{attrs:{id:"link-name-tx",placeholder:"Link name",required:""},model:{value:n.newLink.name,callback:function(t){n.$set(n.newLink,"name",t)},expression:"newLink.name"}})],1)],1),n._v(" "),e("b-col",{attrs:{cols:"5"}},[e("b-form-group",{attrs:{id:"link",label:"Link","label-for":"link-tx"}},[e("b-form-input",{attrs:{id:"link-tx",placeholder:"Link",required:""},model:{value:n.newLink.link,callback:function(t){n.$set(n.newLink,"link",t)},expression:"newLink.link"}})],1)],1),n._v(" "),e("b-col",{attrs:{cols:"2"}},[e("b-form-group",{attrs:{id:"link-action",label:"Action","label-for":"link-action-butt"}},[e("b-button",{attrs:{id:"link-action-butt",type:"button"},on:{click:n.insert}},[n._v("Add")])],1)],1)],1),n._v(" "),n._l(n.links,(function(link,t){return e("b-form-row",[e("b-col",{attrs:{cols:"5"}},[e("b-form-group",[e("b-form-input",{attrs:{id:"link-name-tx"+t,placeholder:"Link name",required:""},model:{value:link.name,callback:function(t){n.$set(link,"name",t)},expression:"link.name"}})],1)],1),n._v(" "),e("b-col",{attrs:{cols:"5"}},[e("b-form-group",[e("b-form-input",{attrs:{id:"link-tx"+t,placeholder:"Link",required:""},model:{value:link.link,callback:function(t){n.$set(link,"link",t)},expression:"link.link"}})],1)],1),n._v(" "),e("b-col",{attrs:{cols:"2"}},[e("b-form-group",[e("b-button",{attrs:{id:"link-action-save-butt"+t,type:"button"},on:{click:function(t){return n.update(link)}}},[n._v("Save")]),n._v(" "),e("b-button",{attrs:{id:"link-action-del-butt"+t,type:"button",variant:"danger"},on:{click:function(e){return n.remove(link.id,t)}}},[n._v("Delete")])],1)],1)],1)}))],2)],1)}),[],!1,null,null,null);t.default=component.exports}}]);