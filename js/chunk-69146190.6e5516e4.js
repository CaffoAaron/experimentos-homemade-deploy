(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-69146190"],{"132d":function(e,t,a){"use strict";a("7db0"),a("caad"),a("c975"),a("fb6a"),a("45fc"),a("a9e3"),a("2532"),a("498a"),a("c96a");var i,s=a("5530"),n=(a("4804"),a("7e2b")),r=a("a9ad"),o=a("af2b"),c=a("7560"),l=a("80d2"),d=a("2b0e"),h=a("58df");function u(e){return["fas","far","fal","fab","fad"].some((function(t){return e.includes(t)}))}function v(e){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(e)&&/[\dz]$/i.test(e)&&e.length>4}(function(e){e["xSmall"]="12px",e["small"]="16px",e["default"]="24px",e["medium"]="28px",e["large"]="36px",e["xLarge"]="40px"})(i||(i={}));var p=Object(h["a"])(n["a"],r["a"],o["a"],c["a"]).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium:function(){return!1},hasClickListener:function(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon:function(){var e="";return this.$slots.default&&(e=this.$slots.default[0].text.trim()),Object(l["q"])(this,e)},getSize:function(){var e={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},t=Object(l["n"])(e).find((function(t){return e[t]}));return t&&i[t]||Object(l["d"])(this.size)},getDefaultData:function(){return{staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:Object(s["a"])({"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0},this.attrs$),on:this.listeners$}},getSvgWrapperData:function(){var e=this.getSize(),t=Object(s["a"])(Object(s["a"])({},this.getDefaultData()),{},{style:e?{fontSize:e,height:e,width:e}:void 0});return this.applyColors(t),t},applyColors:function(e){e.class=Object(s["a"])(Object(s["a"])({},e.class),this.themeClasses),this.setTextColor(this.color,e)},renderFontIcon:function(e,t){var a=[],i=this.getDefaultData(),s="material-icons",n=e.indexOf("-"),r=n<=-1;r?a.push(e):(s=e.slice(0,n),u(s)&&(s="")),i.class[s]=!0,i.class[e]=!r;var o=this.getSize();return o&&(i.style={fontSize:o}),this.applyColors(i),t(this.hasClickListener?"button":this.tag,i,a)},renderSvgIcon:function(e,t){var a={class:"v-icon__svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":!0}},i=this.getSize();return i&&(a.style={fontSize:i,height:i,width:i}),t(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[t("svg",a,[t("path",{attrs:{d:e}})])])},renderSvgIconComponent:function(e,t){var a={class:{"v-icon__component":!0}},i=this.getSize();i&&(a.style={fontSize:i,height:i,width:i}),this.applyColors(a);var s=e.component;return a.props=e.props,a.nativeOn=a.on,t(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[t(s,a)])}},render:function(e){var t=this.getIcon();return"string"===typeof t?v(t)?this.renderSvgIcon(t,e):this.renderFontIcon(t,e):this.renderSvgIconComponent(t,e)}});t["a"]=d["a"].extend({name:"v-icon",$_wrapperFor:p,functional:!0,render:function(e,t){var a=t.data,i=t.children,s="";return a.domProps&&(s=a.domProps.textContent||a.domProps.innerHTML||s,delete a.domProps.textContent,delete a.domProps.innerHTML),e(p,a,s?[s]:i)}})},4804:function(e,t,a){},"9d26":function(e,t,a){"use strict";var i=a("132d");t["a"]=i["a"]},a334:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-main",{staticClass:"grey lighten-3"},[a("v-container",[a("v-row",[a("v-col",{staticClass:"mx-auto my-12",attrs:{cols:"2"}},[a("v-sheet",{attrs:{rounded:"lg"}},[a("v-card",{staticClass:"mx-auto my-12",attrs:{loading:e.loading,"max-width":"374"}},[a("template",{slot:"progress"},[a("v-progress-linear",{attrs:{color:"deep-purple",height:"10",indeterminate:""}})],1),a("v-img",{attrs:{height:"250",src:"https://thumbs.dreamstime.com/t/mujer-casera-novata-del-cocinero-en-la-cocina-roja-del-delantal-en-casa-que-celebra-cocinar-el-griter%C3%ADo-de-la-cacerola-y-del-62985199.jpg"}}),a("v-card-title",[e._v("Homemade Standar")]),a("v-card-text",[a("h1",[e._v("Precio")]),a("h2",[e._v("s/00.00")])]),a("v-divider",{staticClass:"mx-4"}),a("v-card-title",[e._v("Beneficios")]),a("v-card-text",[a("v-chip-group",{attrs:{"active-class":"deep-purple accent-4 white--text",column:""},model:{value:e.selection,callback:function(t){e.selection=t},expression:"selection"}},[a("v-chip",[e._v("2 publicaciones de recetas al mes")]),a("v-chip",[e._v("sin destaque de recestas")])],1)],1),a("v-card-actions")],2)],1)],1),a("v-col",{staticClass:"mx-auto my-12",attrs:{cols:"2"}},[a("v-sheet",{attrs:{rounded:"lg"}},[a("v-card",{staticClass:"mx-auto my-12",attrs:{loading:e.loading,"max-width":"374"}},[a("template",{slot:"progress"},[a("v-progress-linear",{attrs:{color:"deep-purple",height:"10",indeterminate:""}})],1),a("v-img",{attrs:{height:"250",src:"https://image.freepik.com/foto-gratis/chef-profesional-cocina-preparando-comida_23-2147863751.jpg"}}),a("v-card-title",[e._v("Homemade Premiun")]),a("v-card-text",[a("h1",[e._v("Precio")]),a("h2",[e._v("s/24.99")])]),a("v-divider",{staticClass:"mx-4"}),a("v-card-title",[e._v("Beneficios")]),a("v-card-text",[a("v-chip-group",{attrs:{"active-class":"deep-purple accent-4 white--text",column:""},model:{value:e.selection,callback:function(t){e.selection=t},expression:"selection"}},[a("v-chip",[e._v("Sin limites de recetas por mes")]),a("v-chip",[e._v("Destaca todas tus recetas")])],1)],1),a("v-card-actions",[a("v-btn",{attrs:{color:"deep-purple lighten-2",text:""},on:{click:e.reserve}},[a("router-link",{attrs:{to:"/hoomechef/menbresia/add"}},[a("span",{staticClass:"mr-2"},[e._v("Obtener")])])],1)],1)],2)],1)],1)],1)],1)],1)},s=[],n={name:"menbresia",data:function(){return{loading:!1,selection:1}},methods:{reserve:function(){var e=this;this.loading=!0,setTimeout((function(){return e.loading=!1}),2e3)}}},r=n,o=a("2877"),c=a("6544"),l=a.n(c),d=a("8336"),h=a("b0af"),u=a("99d9"),v=a("cc20"),p=a("ef9a"),m=a("62ad"),g=a("a523"),f=a("ce7e"),b=a("adda"),x=a("f6c4"),C=a("8e36"),w=a("0fd9"),_=a("8dd9"),S=Object(o["a"])(r,i,s,!1,null,"1935c7e5",null);t["default"]=S.exports;l()(S,{VBtn:d["a"],VCard:h["a"],VCardActions:u["a"],VCardText:u["c"],VCardTitle:u["d"],VChip:v["a"],VChipGroup:p["a"],VCol:m["a"],VContainer:g["a"],VDivider:f["a"],VImg:b["a"],VMain:x["a"],VProgressLinear:C["a"],VRow:w["a"],VSheet:_["a"]})},dc22:function(e,t,a){"use strict";function i(e,t){var a=t.value,i=t.options||{passive:!0};window.addEventListener("resize",a,i),e._onResize={callback:a,options:i},t.modifiers&&t.modifiers.quiet||a()}function s(e){if(e._onResize){var t=e._onResize,a=t.callback,i=t.options;window.removeEventListener("resize",a,i),delete e._onResize}}var n={inserted:i,unbind:s};t["a"]=n}}]);
//# sourceMappingURL=chunk-69146190.6e5516e4.js.map