(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0cfa3a50"],{"36e4":function(t,a,e){"use strict";e.r(a);var o=function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",{staticClass:"my-lawler"},[o("v-container",[o("v-row",{staticClass:"text-center bg-primary-gradient"},[o("v-col",{attrs:{cols:"12"}},[o("v-img",{attrs:{src:e("d939"),contain:"",height:"120"}})],1),o("v-col",{attrs:{cols:"12","align-self":"center"}},[o("h1",{staticClass:"font-weight-bold profile-title text-center",staticStyle:{"font-size":"1.5rem"}},[t._v("Documentos en línea")])])],1),o("v-row",{staticClass:"breadcrumbs"},[o("v-col",{attrs:{cols:"12"}},[t._v("Categoría > Subcategoría")])],1),o("v-row",[o("v-col",[o("div",{staticClass:"page-title text-capitalize"},[t._v(t._s(t.resource.name))]),o("div",{domProps:{innerHTML:t._s(t.resource.description)}}),o("v-img",{staticClass:"mb-3",attrs:{src:e("3b07"),contain:"",height:"240"}}),o("v-btn",{staticClass:"mb-2",attrs:{color:"primary",block:""},on:{click:t.goToData}},[t._v("Iniciar proceso")])],1)],1),o("button-back")],1)],1)},r=[],n=e("5530"),c=e("2f62"),s=e("bc3a"),i=e.n(s),l=e("bfe1"),u={name:"DocumentVariableIndex",components:{ButtonBack:l["a"]},data:function(){return{resource:""}},computed:Object(n["a"])(Object(n["a"])({},Object(c["c"])(["user"])),{},{resourceId:function(){return this.$route.params.id}}),created:function(){this.loadResource()},methods:{loadResource:function(){var t=this,a="resources/"+this.resourceId;i.a.get(a).then((function(a){t.resource=a.data}))},goToData:function(){var t=this;this.isLoading=!0;var a="operations",e={resource_id:this.resourceId,payment_method_id:0,status_id:1};i.a.post(a,e).then((function(a){t.$router.push({name:"DocumentVariableDataForm",params:{id:a.data.id}})})).catch((function(){t.notyf.error("Ups! Ocurrio un error, por favor intentelo mas tarde.")})).then((function(){t.isLoading=!1}))}}},d=u,m=e("2877"),f=e("6544"),v=e.n(f),p=e("8336"),g=e("62ad"),h=e("a523"),b=e("adda"),w=e("0fd9"),_=Object(m["a"])(d,o,r,!1,null,null,null);a["default"]=_.exports;v()(_,{VBtn:p["a"],VCol:g["a"],VContainer:h["a"],VImg:b["a"],VRow:w["a"]})},"3b07":function(t,a,e){t.exports=e.p+"img/agree.3b0c7e5c.svg"},bfe1:function(t,a,e){"use strict";var o=function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("v-container",[o("v-row",[o("v-col",{attrs:{cols:"9"}}),o("v-col",{staticClass:"text-center",attrs:{cols:"3"},on:{click:t.goToBack}},[o("v-img",{attrs:{src:e("bc02"),contain:"",height:"48"}}),t._v(" Regresar ")],1)],1)],1)},r=[],n={name:"ButtonBack",data:function(){return{}},methods:{goToBack:function(){this.$emit("click")}}},c=n,s=e("2877"),i=e("6544"),l=e.n(i),u=e("62ad"),d=e("a523"),m=e("adda"),f=e("0fd9"),v=Object(s["a"])(c,o,r,!1,null,null,null);a["a"]=v.exports;l()(v,{VCol:u["a"],VContainer:d["a"],VImg:m["a"],VRow:f["a"]})},d939:function(t,a,e){t.exports=e.p+"img/logo-white.7ed421f4.png"}}]);
//# sourceMappingURL=chunk-0cfa3a50.2d0e0074.js.map