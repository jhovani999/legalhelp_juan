(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2955a278"],{3370:function(t,a,o){"use strict";o("ac02")},"3f8e":function(t,a,o){"use strict";o.r(a);var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"login text-center "},[s("div",{staticClass:"bg-primary-gradient"},[s("div",{staticClass:"logo"},[s("v-img",{staticClass:"mb-5",attrs:{src:o("d939"),contain:"",height:"176"}})],1),t._m(0),s("div",{staticStyle:{padding:"0 3rem"}},[s("v-text-field",{attrs:{label:"Nueva Contraseña",type:"password",filled:"","append-icon":"mdi-lock",color:"white","background-color":"white"},model:{value:t.password,callback:function(a){t.password=a},expression:"password"}}),s("v-text-field",{attrs:{label:"Repetir Contraseña",type:"password",filled:"","append-icon":"mdi-lock",color:"white","background-color":"white"},model:{value:t.password_confirmation,callback:function(a){t.password_confirmation=a},expression:"password_confirmation"}})],1),s("div",{staticClass:"my-5"},[s("v-btn",{attrs:{width:"240",loading:t.isLoading},on:{click:t.onSave}},[t._v("Guardar contraseña")])],1),s("div",[s("v-btn",{attrs:{width:"240",to:{name:"Home"}}},[t._v("Volver al inicio")])],1)]),s("svg",{attrs:{width:"100%",height:"124",viewBox:"0 0 100 100",preserveAspectRatio:"none"}},[s("defs",[s("polygon",{attrs:{id:"r1",points:"0,0 100,0 70.8,100 0,22.5"}}),s("linearGradient",{attrs:{id:"g1",x1:"0%",y1:"0%",x2:"100%",y2:"0%"}},[s("stop",{attrs:{"stop-color":"#0084CA",offset:"0%"}}),s("stop",{attrs:{"stop-color":"#00406C",offset:"100%"}})],1)],1),s("use",{attrs:{x:"0",y:"0","xlink:href":"#r1",fill:"url(#g1)"}})])])},i=[function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",{staticClass:"title-primary"},[o("div",{staticClass:"title"},[t._v("Cambiar Contraseña")])])}],e=o("bc3a"),n=o.n(e),r={name:"ChangePassword",inject:["notyf"],data:function(){return{isLoading:!1,password:"",password_confirmation:""}},created:function(){},methods:{onSave:function(){var t=this;this.isLoading=!0;var a={password:this.password,password_confirmation:this.password_confirmation};n.a.post("profile",a).then((function(){t.notyf.success("Contraseña actualizado correctamente."),t.$router.push({name:"Home"})})).catch((function(a){t.notyf.error(a.response.data.message)})).then((function(){t.isLoading=!1}))}}},c=r,d=(o("3370"),o("2877")),l=o("6544"),p=o.n(l),f=o("8336"),u=o("adda"),m=o("8654"),v=Object(d["a"])(c,s,i,!1,null,"1ef18dbb",null);a["default"]=v.exports;p()(v,{VBtn:f["a"],VImg:u["a"],VTextField:m["a"]})},ac02:function(t,a,o){},d939:function(t,a,o){t.exports=o.p+"img/logo-white.7ed421f4.png"}}]);
//# sourceMappingURL=chunk-2955a278.b7c06105.js.map