(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d0e55fa4"],{"8c4d":function(t,a,n){},c3c5:function(t,a,n){"use strict";n("8c4d")},d939:function(t,a,n){t.exports=n.p+"img/logo-white.7ed421f4.png"},f033:function(t,a,n){"use strict";n.r(a);var i=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"my-lawler"},[i("v-container",[i("v-row",{staticClass:"text-center bg-primary-gradient"},[i("v-col",{attrs:{cols:"12"}},[i("v-img",{attrs:{src:n("d939"),contain:"",height:"120"}})],1),i("v-col",{attrs:{cols:"12","align-self":"center"}},[i("h1",{staticClass:"font-weight-bold profile-title text-center",staticStyle:{"font-size":"1.5rem"}},[t._v("Documentos en línea")])])],1),i("v-row",{staticClass:"breadcrumbs"},[i("v-col",{attrs:{cols:"12"}},[t._v("Categoría > Subcategoría > Tipo de pago > Depósito")])],1),i("v-row",[i("v-col",[i("div",{staticClass:"page-title text-capitalize"},[t._v(t._s(t.operation.name))]),i("div",{staticClass:"call-to-action"},[i("div",{staticClass:"text text-center",staticStyle:{display:"block"}},[t._v("Precio final: S/. "+t._s(t.operation.price_final))])]),i("div",{staticClass:"page-title"},[t._v("Depósito bancario")]),t._l(t.banks,(function(a){return i("div",{key:a.id,staticClass:"call-to-action"},[i("v-img",{attrs:{src:a.iconUrl,contain:"",position:"left",width:"60"}}),i("span",[t._v(t._s(a.type)+":")]),t._v(" "+t._s(a.number)+" "),i("div",{staticStyle:{display:"inline-grid","text-align":"center"}},[i("v-btn",{staticClass:"mx-2",attrs:{fab:"",dark:"",small:"",color:"primary"},on:{click:function(n){return t.onCopy(a.number)}}},[i("v-icon",{attrs:{dark:""}},[t._v(" mdi-clipboard-outline")])],1),i("span",[t._v("Copiar")])],1),i("br"),i("span",[t._v("Titular:")]),t._v(" "+t._s(a.principal)+" ")],1)})),i("div",{staticClass:"text-center",staticStyle:{margin:"2rem 0"}},[i("v-btn",{attrs:{color:"primary",width:"160"},on:{click:function(a){return t.goToConfirm()}}},[t._v(" Continuar "),i("v-img",{attrs:{src:n("7aed"),height:"20",contain:""}})],1)],1)],2)],1)],1)],1)},o=[],e=n("5530"),c=n("2f62"),s=n("bc3a"),r=n.n(s),l={name:"DocumentsBank",data:function(){return{isLoading:!1,banks:[]}},computed:Object(e["a"])({},Object(c["c"])(["user","operation"])),mounted:function(){this.getBankAccounts()},methods:{goToConfirm:function(){var t=this;this.isLoading=!0;var a="operations",n={resource_id:this.operation.id,payment_method_id:2,status_id:3,coupon_code:this.operation.coupon_code};r.a.post(a,n).then((function(a){t.$router.push({name:"OperationPayment",params:{id:a.data.id}})})).catch((function(){t.notyf.error("Ups! Ocurrio un error, por favor intentelo mas tarde.")})).then((function(){t.isLoading=!1}))},getBankAccounts:function(){var t=this;r.a.get("banks").then((function(a){t.banks=a.data}))},onCopy:function(t){navigator.clipboard.writeText(t)}}},d=l,p=(n("c3c5"),n("2877")),u=n("6544"),v=n.n(u),f=n("8336"),m=n("62ad"),g=n("a523"),_=n("132d"),b=n("adda"),h=n("0fd9"),C=Object(p["a"])(d,i,o,!1,null,"76d3b48c",null);a["default"]=C.exports;v()(C,{VBtn:f["a"],VCol:m["a"],VContainer:g["a"],VIcon:_["a"],VImg:b["a"],VRow:h["a"]})}}]);
//# sourceMappingURL=chunk-d0e55fa4.0f7b6ebc.js.map