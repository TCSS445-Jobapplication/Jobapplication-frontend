(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{297:function(t,e,r){"use strict";var n=r(299),l=r.n(n);e.a=l.a.create({baseURL:"https://jobappapi.vunguyen.dev:8080"})},335:function(t,e,r){"use strict";r.r(e);r(16);var n=r(297),l={layout:"default",props:["profileId"],data:function(){return{topSkills:[],topCompanies:[],topApplicants:[]}},created:function(){var t=this;n.a.get("/topskills").then((function(e){return t.topSkills=e.data.map((function(t,i){return{"#":i+1,name:t[0],type:t[1],total:t[2]}}))})),n.a.get("/topcompanies").then((function(e){return t.topCompanies=e.data.map((function(t,i){return{"#":i+1,name:t[0],total:t[1]}}))})),n.a.get("/topapplicants").then((function(e){return t.topApplicants=e.data.map((function(t,i){return{"#":i+1,email:t[0],total:t[1]}}))}))},methods:{}},o=r(64),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"child-module"},[r("h5",[t._v("Stats")]),t._v(" "),r("b-row",[r("b-col",{attrs:{cols:"4",md:"6",lg:"4"}},[r("b-card",{staticClass:"text-left",staticStyle:{"max-width":"40rem"},attrs:{"bg-variant":"light",header:"Top 10 skills"}},[r("b-card-text",[r("b-table",{attrs:{striped:"",hover:"",items:t.topSkills}})],1)],1)],1),t._v(" "),r("b-col",{attrs:{cols:"4",md:"6",lg:"4"}},[r("b-card",{staticClass:"text-left",staticStyle:{"max-width":"40rem"},attrs:{"bg-variant":"light",header:"Top 10 companies"}},[r("b-card-text",[r("b-table",{attrs:{striped:"",hover:"",items:t.topCompanies}})],1)],1)],1),t._v(" "),r("b-col",{attrs:{cols:"4",md:"6",lg:"4"}},[r("b-card",{staticClass:"text-left",staticStyle:{"max-width":"40rem"},attrs:{"bg-variant":"light",header:"Top 10 job applicants"}},[r("b-card-text",[r("b-table",{attrs:{striped:"",hover:"",items:t.topApplicants}})],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);