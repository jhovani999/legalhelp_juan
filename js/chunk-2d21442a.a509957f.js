(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21442a"],{afd3:function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"my-lawler"},[a("v-container",[a("v-row",{staticClass:"text-center bg-primary-gradient"},[a("v-col",{attrs:{cols:"3"}},[a("v-img",{attrs:{src:o("38a3"),contain:"",height:"90"}})],1),a("v-col",{attrs:{cols:"8","align-self":"center"}},[a("h1",{staticClass:"font-weight-bold profile-title",staticStyle:{"font-size":"1.5rem"}},[t._v(" ¿Cómo calcular el IGV? ")])])],1),a("v-row",{staticClass:"breadcrumbs"},[a("v-col",{attrs:{cols:"12"}})],1),a("v-row",[a("v-col")],1),a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("div",{staticClass:"call-to-action",staticStyle:{margin:"1rem"}},[a("p",[t._v("Monto Base")]),a("v-text-field",{attrs:{type:"number",prefix:"S/","hide-details":""},on:{keyup:function(e){return t.calculateEvent("monto_base")}},model:{value:t.price.monto_base,callback:function(e){t.$set(t.price,"monto_base",e)},expression:"price.monto_base"}})],1),a("div",{staticClass:"call-to-action",staticStyle:{margin:"1rem"}},[a("p",[t._v("IGV 18%")]),a("v-text-field",{attrs:{type:"number",prefix:"S/","hide-details":""},on:{keyup:function(e){return t.calculateEvent("monto_igv")}},model:{value:t.price.monto_igv,callback:function(e){t.$set(t.price,"monto_igv",e)},expression:"price.monto_igv"}})],1),a("div",{staticClass:"call-to-action",staticStyle:{margin:"1rem"}},[a("p",[t._v("Total")]),a("v-text-field",{attrs:{type:"number",prefix:"S/","hide-details":""},on:{keyup:function(e){return t.calculateEvent("monto_total")}},model:{value:t.price.monto_total,callback:function(e){t.$set(t.price,"monto_total",e)},expression:"price.monto_total"}})],1)]),a("v-col",{attrs:{cols:"9"}}),a("v-col",{staticClass:"text-center",attrs:{cols:"3"},on:{click:t.goToIndex}},[a("v-img",{attrs:{src:o("bc02"),contain:"",height:"48"}}),t._v(" Regresar ")],1)],1)],1)],1)},i=[],n=(o("a9e3"),o("bc3a")),r=o.n(n),s={name:"Calculator03",data:function(){return{uit:0,price:{monto_base:0,monto_igv:0,monto_total:0},tax:0}},computed:{total:function(){return Number(this.price.monto_base)+Number(this.price.monto_igv)+Number(this.price.monto_total)}},mounted:function(){this.getUITValue()},methods:{getUITValue:function(){var t=this,e="settings/1";r.a.get(e).then((function(e){t.uit=parseInt(e.data.value)}))},onSubmit:function(){this.tax=.05*(this.price.auto-this.price.total),this.tax<=0&&(this.tax="No se encuentra afecto")},goToIndex:function(){this.$router.push({name:"CalculatorIndex"})},getRedondear:function(t){return Math.round(100*t)/100},calculateEvent:function(t){"monto_igv"==t?(this.price.monto_base=this.getRedondear(100*Number(this.price.monto_igv)/18),this.price.monto_total=this.getRedondear(Number(this.price.monto_igv)+100*Number(this.price.monto_igv)/18)):"monto_base"==t?(this.price.monto_igv=this.getRedondear(.18*Number(this.price.monto_base)),this.price.monto_total=this.getRedondear(Number(this.price.monto_base)+.18*Number(this.price.monto_base))):"monto_total"==t&&(this.price.monto_base=this.getRedondear(Number(this.price.monto_total)/1.18),this.price.monto_igv=this.getRedondear(Number(this.price.monto_total)/1.18*.18))}}},c=s,l=o("2877"),m=o("6544"),u=o.n(m),p=o("62ad"),d=o("a523"),v=o("adda"),h=o("0fd9"),_=o("8654"),b=Object(l["a"])(c,a,i,!1,null,null,null);e["default"]=b.exports;u()(b,{VCol:p["a"],VContainer:d["a"],VImg:v["a"],VRow:h["a"],VTextField:_["a"]})}}]);
//# sourceMappingURL=chunk-2d21442a.a509957f.js.map