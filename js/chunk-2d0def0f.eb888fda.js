(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0def0f"],{8892:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"my-lawler"},[a("v-container",[a("v-row",{staticClass:"text-center bg-primary-gradient"},[a("v-col",{attrs:{cols:"3"}},[a("v-img",{attrs:{src:s("0479"),contain:"",height:"90"}})],1),a("v-col",{attrs:{cols:"8","align-self":"center"}},[a("h1",{staticClass:"font-weight-bold profile-title",staticStyle:{"font-size":"1.5rem"}},[e._v("Abogado de emergencia")])])],1),a("v-row",{staticClass:"breadcrumbs"},[a("v-col",{attrs:{cols:"12"}})],1),a("v-row",[a("v-col",[a("div",{staticClass:"call-to-action"},[a("div",{staticClass:"text text-center",staticStyle:{display:"block"}},[a("div",[e._v("LegalHelp - Chat")])])])])],1),a("chat",{attrs:{"key-field":"channel_id","key-value":e.user.id,"event-name":"channel-id-"+e.user.id,"event-class":"App\\Events\\MessageAdded","get-messages-url":e.getMessagesUrl,"post-messages-url":e.postMessagesUrl}})],1)],1)},c=[],n=s("5530"),l=s("2f62"),o=s("e6b0"),r=s("bc3a"),i=s.n(r),d={name:"Emergency",components:{Chat:o["a"]},computed:Object(n["a"])(Object(n["a"])({},Object(l["c"])(["user"])),{},{getMessagesUrl:function(){return"/messages"},postMessagesUrl:function(){return"/messages"}}),mounted:function(){this.getWelcomeMessage()},methods:{getWelcomeMessage:function(){i.a.get("messages/"+this.user.id+"/welcome")}}},g=d,u=s("2877"),m=s("6544"),v=s.n(m),f=s("62ad"),p=s("a523"),h=s("adda"),b=s("0fd9"),w=Object(u["a"])(g,a,c,!1,null,null,null);t["default"]=w.exports;v()(w,{VCol:f["a"],VContainer:p["a"],VImg:h["a"],VRow:b["a"]})}}]);
//# sourceMappingURL=chunk-2d0def0f.eb888fda.js.map