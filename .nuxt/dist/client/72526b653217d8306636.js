(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{236:function(e,t,r){"use strict";r.d(t,"g",(function(){return h})),r.d(t,"f",(function(){return f})),r.d(t,"c",(function(){return y})),r.d(t,"d",(function(){return _})),r.d(t,"e",(function(){return C})),r.d(t,"a",(function(){return k})),r.d(t,"b",(function(){return O}));var n=r(235);function o(){for(var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return(e=Array()).concat.apply(e,[t].concat(n))}function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top center 0",r=arguments.length>2?arguments[2]:void 0;return{name:e,functional:!0,props:{group:{type:Boolean,default:!1},hideOnLeave:{type:Boolean,default:!1},leaveAbsolute:{type:Boolean,default:!1},mode:{type:String,default:r},origin:{type:String,default:t}},render:function(t,r){var l="transition".concat(r.props.group?"-group":""),data={props:{name:e,mode:r.props.mode},on:{beforeEnter:function(e){e.style.transformOrigin=r.props.origin,e.style.webkitTransformOrigin=r.props.origin}}};return r.props.leaveAbsolute&&(data.on.leave=o(data.on.leave,(function(e){return e.style.position="absolute"}))),r.props.hideOnLeave&&(data.on.leave=o(data.on.leave,(function(e){return e.style.display="none"}))),t(l,Object(n.a)(r.data,data),r.children)}}}function c(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"in-out";return{name:e,functional:!0,props:{mode:{type:String,default:r}},render:function(r,o){return r("transition",Object(n.a)(o.data,{props:{name:e},on:t}),o.children)}}}var d=r(9),v=r(10),m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=t?"width":"height",n="offset".concat(Object(v.B)(r));return{beforeEnter:function(e){e._parent=e.parentNode,e._initialStyle=Object(d.a)({transition:e.style.transition,overflow:e.style.overflow},r,e.style[r])},enter:function(t){var o=t._initialStyle;t.style.setProperty("transition","none","important"),t.style.overflow="hidden";var l="".concat(t[n],"px");t.style[r]="0",t.offsetHeight,t.style.transition=o.transition,e&&t._parent&&t._parent.classList.add(e),requestAnimationFrame((function(){t.style[r]=l}))},afterEnter:l,enterCancelled:l,leave:function(e){e._initialStyle=Object(d.a)({transition:"",overflow:e.style.overflow},r,e.style[r]),e.style.overflow="hidden",e.style[r]="".concat(e[n],"px"),e.offsetHeight,requestAnimationFrame((function(){return e.style[r]="0"}))},afterLeave:o,leaveCancelled:o};function o(t){e&&t._parent&&t._parent.classList.remove(e),l(t)}function l(e){var t=e._initialStyle[r];e.style.overflow=e._initialStyle.overflow,null!=t&&(e.style[r]=t),delete e._initialStyle}},h=(l("carousel-transition"),l("carousel-reverse-transition"),l("tab-transition")),f=l("tab-reverse-transition"),y=(l("menu-transition"),l("fab-transition","center center","out-in")),_=(l("dialog-transition"),l("dialog-bottom-transition"),l("dialog-top-transition"),l("fade-transition")),C=(l("scale-transition"),l("scroll-x-transition"),l("scroll-x-reverse-transition"),l("scroll-y-transition"),l("scroll-y-reverse-transition"),l("slide-x-transition")),k=(l("slide-x-reverse-transition"),l("slide-y-transition"),l("slide-y-reverse-transition"),c("expand-transition",m())),O=c("expand-x-transition",m("",!0))},266:function(e,t,r){"use strict";r(99);var n=r(1),o=(r(30),r(24),r(12),r(2),r(23),r(335),r(9)),l=(r(338),r(236)),c=r(229),d=r(303),v=r(265),m=r(228),h=r(10),f=r(227);function y(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var _=Object(f.a)(c.a,Object(d.b)(["absolute","fixed","top","bottom"]),v.a,m.a).extend({name:"v-progress-linear",props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(h.e)(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(h.e)(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var e;return e={opacity:null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity)},Object(o.a)(e,this.isReversed?"right":"left",Object(h.e)(this.normalizedValue,"%")),Object(o.a)(e,"width",Object(h.e)(this.normalizedBuffer-this.normalizedValue,"%")),e},classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped},this.themeClasses)},computedTransition:function(){return this.indeterminate?l.d:l.e},isReversed:function(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var e={};return this.active||(e.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(e.width=Object(h.e)(this.normalizedBuffer,"%")),e}},methods:{genContent:function(){var slot=Object(h.p)(this,"default",{value:this.internalLazyValue});return slot?this.$createElement("div",{staticClass:"v-progress-linear__content"},slot):null},genListeners:function(){var e=this.$listeners;return this.reactive&&(e.click=this.onClick),e},genProgressBar:function(e){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(o.a)({},e,!0)}))},onClick:function(e){if(this.reactive){var t=this.$el.getBoundingClientRect().width;this.internalValue=e.offsetX/t*100}},normalize:function(e){return e<0?0:e>100?100:parseFloat(e)}},render:function(e){return e("div",{staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:{bottom:this.bottom?0:void 0,height:this.active?Object(h.e)(this.height):0,top:this.top?0:void 0},on:this.genListeners()},[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}});t.a=n.default.extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(_,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},268:function(e,t,r){"use strict";var n={inserted:function(e,t){var r=t.value,n=t.options||{passive:!0};window.addEventListener("resize",r,n),e._onResize={callback:r,options:n},t.modifiers&&t.modifiers.quiet||r()},unbind:function(e){if(e._onResize){var t=e._onResize,r=t.callback,n=t.options;window.removeEventListener("resize",r,n),delete e._onResize}}};t.a=n},302:function(e,t,r){},303:function(e,t,r){"use strict";r.d(t,"b",(function(){return c}));var n=r(1),o=r(10),l={absolute:Boolean,bottom:Boolean,fixed:Boolean,left:Boolean,right:Boolean,top:Boolean};function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return n.default.extend({name:"positionable",props:e.length?Object(o.k)(l,e):l})}t.a=c()},323:function(e,t,r){"use strict";r(30),r(24),r(12),r(2),r(23);var n=r(9),o=(r(302),r(228)),l=r(227);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=Object(l.a)(o.a).extend({name:"v-app",props:{dark:{type:Boolean,default:void 0},id:{type:String,default:"app"},light:{type:Boolean,default:void 0}},computed:{isDark:function(){return this.$vuetify.theme.dark}},beforeCreate:function(){if(!this.$vuetify||this.$vuetify===this.$root)throw new Error("Vuetify is not properly initialized, see https://vuetifyjs.com/getting-started/quick-start#bootstrapping-the-vuetify-object")},render:function(e){var t=e("div",{staticClass:"v-application--wrap"},this.$slots.default);return e("div",{staticClass:"v-application",class:d({"v-application--is-rtl":this.$vuetify.rtl,"v-application--is-ltr":!this.$vuetify.rtl},this.themeClasses),attrs:{"data-app":!0},domProps:{id:this.id}},[t])}})},335:function(e,t,r){"use strict";r(154)("fixed",(function(e){return function(){return e(this,"tt","","")}}))},338:function(e,t,r){},431:function(e,t,r){"use strict";r.r(t);r(50);var n=r(5),o=(r(12),r(2),r(21)),l=r.n(o),c=r(55),d=r(69),v={middleware:["session-control","admin"],layout:"admin",components:{ValidationObserver:d.a,ValidationProvider:d.b},mounted:function(){this.retrieveData()},data:function(){return{counter:null!==this.data&&void 0!==this.data&&""!==this.data&&null!==this.data.values&&void 0!==this.data.values&&""!==this.data.values?this.data.values.length:0,e1:1,imageData:[],data:{images:[]},searchTitle:null,headers:[{text:"#",align:"center",value:"rank"},{text:"Görsel",align:"center",value:"img_url",sortable:!1},{text:"Kapak Fotoğrafı",align:"center",value:"isCover"},{text:"Durum",align:"center",value:"isActive"},{text:"İşlemler",align:"center",value:"actions",sortable:!1}],page:1,totalPages:0,pageSize:25,pageSizes:[25,50,100,200,500,1e3],loading:!1,options:{url:"https://api.klinikdiyetisyen.com/api/panel/diseases/create-file/"+this.$route.params.id,headers:{Authorization:"Bearer "+(null!==l.a.get("userData")&&void 0!==l.a.get("userData")&&""!==l.a.get("userData")?JSON.parse(c.a.decode(l.a.get("userData"))).api_token:null)},params:{title:null},uploadMultiple:!0,parallelUploads:10},userData:null!==l.a.get("userData")&&void 0!==l.a.get("userData")&&""!==l.a.get("userData")?JSON.parse(c.a.decode(l.a.get("userData"))):null,tab:null,items:[{tab:"Hastalık Değerleri"}]}},computed:{img_url:function(){return"https://api.klinikdiyetisyen.com/"}},validate:function(e){var t=e.params;return null!==t.id?t.id:null},asyncData:function(e){return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,o,l,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.params,n=e.error,o=e.$axios,t.prev=1,t.next=4,o.get("https://api.klinikdiyetisyen.com/api/panel/diseases/update/"+r.id);case 4:return l=t.sent,0!==(data=l.data).data.values.length&&null!==data.data.values.length&&void 0!==data.data.values.length||data.data.values.push({title:"",min:"",max:"",type:"",id:0}),t.abrupt("return",data);case 10:t.prev=10,t.t0=t.catch(1),n({message:"Hastalık Bilgisi Bulunamadı.",statusCode:404});case 13:case"end":return t.stop()}}),t,null,[[1,10]])})))()},methods:{selectCover:function(){this.e1=3,this.retrieveData()},getRequestParams:function(e,t,r){var n={};return n.title=e,n.page=t,n.size=r,n},retrieveData:function(e){var t=this,r="get-all";void 0!==e&&""!==e&&null!==e&&(r=e);var n=this.getRequestParams(this.searchTitle,this.page,this.pageSize);this.$axios.get("".concat("https://api.klinikdiyetisyen.com/api/","panel/datatables/").concat(r,"?table=diseases_file&page=").concat(n.page,"&per_page=").concat(n.size,"&search=").concat(n.title,"&search_columns=name,email,phone&where_column=diseases_id&where_value=").concat(this.data._id.$oid,"&joins=diseases_file"),{json:!0,withCredentials:!1,mode:"no-cors",headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Origin, Content-Type, X-Auth-Token, Authorization","Access-Control-Allow-Methods":"GET, POST, PATCH, PUT, DELETE, OPTIONS","Access-Control-Allow-Credentials":!0,"Content-type":"application/json",Authorization:"Bearer "+this.userData.api_token},credentials:"same-origin"}).then((function(e){t.imageData=e.data.data.data.map(t.getDisplayData),t.totalPages=e.data.data.last_page})).catch((function(e){return console.log(e)})).finally((function(){return t.loading=!1}))},handlePageChange:function(e){this.page=e,this.retrieveData()},handlePageSizeChange:function(e){this.pageSize=e,this.page=1,this.retrieveData()},refreshList:function(){this.retrieveData()},deleteData:function(e){var t=this;this.$axios.delete("https://api.klinikdiyetisyen.com/api/panel/diseases/delete/"+e,{json:!0,withCredentials:!1,mode:"no-cors",headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Origin, Content-Type, X-Auth-Token, Authorization","Access-Control-Allow-Methods":"GET, POST, PATCH, PUT, DELETE, OPTIONS","Access-Control-Allow-Credentials":!0,"Content-type":"application/json",Authorization:"Bearer "+this.userData.api_token},credentials:"same-origin"}).then((function(e){e.data.success?(t.$izitoast.success({title:e.data.title,message:e.data.msg,position:"topCenter",displayMode:"once"}),t.refreshList()):t.$izitoast.error({title:e.data.title,message:e.data.msg,position:"topCenter",displayMode:"once"})}))},isActiveSetter:function(e){var t=this;this.$axios.get("https://api.klinikdiyetisyen.com/api/panel/datatables/is-active-setter?table=diseases_file&id="+e,{json:!0,withCredentials:!1,mode:"no-cors",headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Origin, Content-Type, X-Auth-Token, Authorization","Access-Control-Allow-Methods":"GET, POST, PATCH, PUT, DELETE, OPTIONS","Access-Control-Allow-Credentials":!0,"Content-type":"application/json",Authorization:"Bearer "+this.userData.api_token},credentials:"same-origin"}).then((function(e){e.data.success?(t.$izitoast.success({title:e.data.title,message:e.data.msg,position:"topCenter",displayMode:"once"}),t.refreshList()):t.$izitoast.error({title:e.data.title,message:e.data.msg,position:"topCenter",displayMode:"once"})}))},isCoverSetter:function(e){var t=this;this.$axios.get("https://api.klinikdiyetisyen.com/api/panel/datatables/is-cover-setter?table=diseases_file&foreign_column=diseases_id&id="+e,{json:!0,withCredentials:!1,mode:"no-cors",headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Origin, Content-Type, X-Auth-Token, Authorization","Access-Control-Allow-Methods":"GET, POST, PATCH, PUT, DELETE, OPTIONS","Access-Control-Allow-Credentials":!0,"Content-type":"application/json",Authorization:"Bearer "+this.userData.api_token},credentials:"same-origin"}).then((function(e){e.data.success?(t.$izitoast.success({title:e.data.title,message:e.data.msg,position:"topCenter",displayMode:"once"}),t.refreshList()):t.$izitoast.error({title:e.data.title,message:e.data.msg,position:"topCenter",displayMode:"once"})}))},getDisplayData:function(data){return{rank:data.rank,id:data._id.$oid,img_url:this.img_url+"public/storage/"+data.img_url,isCover:data.isCover,isActive:data.isActive}},cloneProperty:function(){this.data.values.push({title:"",value:"",type:"",id:++this.counter})},removeProperty:function(e){this.data.values.splice(e,1)},cloneProperty2:function(){this.data.criteria_values.push({value:"",type:"",id:++this.counter2})},removeProperty2:function(e){this.data.criteria_values.splice(e,1)},onComplete:function(e){JSON.parse(e.xhr.response).success?this.$izitoast.success({title:JSON.parse(e.xhr.response).title,message:JSON.parse(e.xhr.response).msg,position:"topCenter",displayMode:"once"}):this.$izitoast.error({title:JSON.parse(e.xhr.response).title,message:JSON.parse(e.xhr.response).msg,position:"topCenter",displayMode:"once"})},editDiseases:function(){var e=this,t=new FormData(this.$refs.diseasesForm);this.$axios.post("https://api.klinikdiyetisyen.com/api/panel/diseases/update/"+this.data._id.$oid,t,{json:!0,withCredentials:!1,mode:"no-cors",headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Origin, Content-Type, X-Auth-Token, Authorization","Access-Control-Allow-Methods":"GET, POST, PATCH, PUT, DELETE, OPTIONS","Access-Control-Allow-Credentials":!0,"Content-Type":"multipart/form-data; boundary="+t._boundary,Authorization:"Bearer "+this.userData.api_token}}).then((function(t){t.data.success?(e.$izitoast.success({title:t.data.title,message:t.data.msg,position:"topCenter"}),setTimeout((function(){e.$router.go(decodeURIComponent("/panel/diseases"))}),2e3)):e.$izitoast.error({title:t.data.title,message:t.data.msg,position:"topCenter"})}))}}},m=r(68),h=r(264),f=r.n(h),y=r(323),_=r(258),C=r(255),k=r(245),O=r(274),w=r(275),x=r(237),A=r(276),P=r(330),D=r(332),S=r(331),T=r(322),component=Object(m.a)(v,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("div",{staticClass:"main-wrapper"},[r("div",{staticClass:"page-wrapper"},[r("div",{staticClass:"content container-fluid"},[r("div",{staticClass:"page-header"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-12"},[r("h3",{staticClass:"page-title"},[e._v("Hastalık Düzenle")]),e._v(" "),r("ul",{staticClass:"breadcrumb"},[r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{attrs:{to:"/panel",tag:"a"}},[e._v("Anasayfa")])],1),e._v(" "),r("li",{staticClass:"breadcrumb-item active"},[e._v("Hastalık Düzenle")])])])])]),e._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-header"},[r("h4",{staticClass:"card-title"},[e._v("Hastalık Düzenle")])]),e._v(" "),r("div",{staticClass:"card-body"},[r("ValidationObserver",{scopedSlots:e._u([{key:"default",fn:function(t){var n=t.handleSubmit;return[r("form",{ref:"diseasesForm",attrs:{enctype:"multipart/form-data"},on:{submit:function(t){return t.preventDefault(),n(e.editDiseases)}}},[r("v-stepper",{model:{value:e.e1,callback:function(t){e.e1=t},expression:"e1"}},[r("v-stepper-header",[r("v-stepper-step",{attrs:{complete:e.e1>1,step:"1"}},[e._v("\n                          Hastalık Bilgileri\n                        ")]),e._v(" "),r("v-divider")],1),e._v(" "),r("v-stepper-items",[r("v-stepper-content",{attrs:{step:"1"}},[r("ValidationProvider",{attrs:{name:"Hastalık Adı",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"title"}},[e._v("Hastalık Adı")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.data.name,expression:"data.name"}],staticClass:"form-control",attrs:{id:"title",type:"text",name:"name"},domProps:{value:e.data.name},on:{input:function(t){t.target.composing||e.$set(e.data,"name",t.target.value)}}}),e._v(" "),r("small",{staticClass:"font-weight-bold text-danger"},[e._v(e._s(n[0]))])])]}}],null,!0)}),e._v(" "),r("ValidationProvider",{attrs:{name:"Hastalık Açıklaması",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"description"}},[e._v("Hastalık Açıklaması")]),e._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.data.description,expression:"data.description"}],staticClass:"form-control",attrs:{id:"description",name:"description"},domProps:{value:e.data.description},on:{input:function(t){t.target.composing||e.$set(e.data,"description",t.target.value)}}}),e._v(" "),r("small",{staticClass:"font-weight-bold text-danger"},[e._v(e._s(n[0]))])])]}}],null,!0)}),e._v(" "),r("v-tabs",{attrs:{"background-color":"primary",dark:""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},e._l(e.items,(function(t){return r("v-tab",{key:t.tab},[e._v("\n                              "+e._s(t.tab)+"\n                            ")])})),1),e._v(" "),r("v-tabs-items",{model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[r("v-tab-item",{attrs:{eager:""}},[r("v-card",{attrs:{flat:""}},[null!==e.data.values&&void 0!==e.data.values&&""!==e.data.values&&e.data.values.length>0?r("v-card-text",e._l(e.data.values,(function(input,t){return r("div",{key:t,staticClass:"row"},[r("div",{staticClass:"col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4"},[r("ValidationProvider",{attrs:{name:"Hastalık Değeri Adı",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(n){var o=n.errors;return[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"disease"+t}},[e._v("Hastalık Değeri Adı")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:input.title,expression:"input.title"}],staticClass:"form-control",attrs:{id:"disease"+t,type:"text",name:"diseaseName[]"},domProps:{value:input.title},on:{input:function(t){t.target.composing||e.$set(input,"title",t.target.value)}}}),e._v(" "),r("small",{staticClass:"font-weight-bold text-danger"},[e._v(e._s(o[0]))])])]}}],null,!0)})],1),e._v(" "),r("div",{staticClass:"col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2"},[r("ValidationProvider",{attrs:{name:"Minimum Hastalık Değeri",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(n){var o=n.errors;return[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"diseaseMin"+t}},[e._v("Minimum Hastalık Değeri")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:input.min,expression:"input.min"}],staticClass:"form-control",attrs:{id:"diseaseMin"+t,type:"text",name:"diseaseMin[]"},domProps:{value:input.min},on:{input:function(t){t.target.composing||e.$set(input,"min",t.target.value)}}}),e._v(" "),r("small",{staticClass:"font-weight-bold text-danger"},[e._v(e._s(o[0]))])])]}}],null,!0)})],1),e._v(" "),r("div",{staticClass:"col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2"},[r("ValidationProvider",{attrs:{name:"Maximum Hastalık Değeri",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(n){var o=n.errors;return[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"diseaseMax"+t}},[e._v("Maximum Hastalık Değeri")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:input.max,expression:"input.max"}],staticClass:"form-control",attrs:{id:"diseaseMax"+t,type:"text",name:"diseaseMax[]"},domProps:{value:input.max},on:{input:function(t){t.target.composing||e.$set(input,"max",t.target.value)}}}),e._v(" "),r("small",{staticClass:"font-weight-bold text-danger"},[e._v(e._s(o[0]))])])]}}],null,!0)})],1),e._v(" "),r("div",{staticClass:"col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2"},[r("ValidationProvider",{attrs:{name:"Hastalık Değeri Türü",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(n){var o=n.errors;return[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"diseaseType"+t}},[e._v("Hastalık Değeri Türü")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:input.type,expression:"input.type"}],staticClass:"form-control",attrs:{id:"diseaseType"+t,type:"text",name:"diseaseType[]"},domProps:{value:input.type},on:{input:function(t){t.target.composing||e.$set(input,"type",t.target.value)}}}),e._v(" "),r("small",{staticClass:"font-weight-bold text-danger"},[e._v(e._s(o[0]))])])]}}],null,!0)})],1),e._v(" "),r("div",{staticClass:"col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2 py-auto my-auto text-center align-bottom"},[r("button",{staticClass:"btn btn-lg btn-primary text-white rounded-circle align-bottom text-center",attrs:{role:"button"},on:{click:function(t){return t.preventDefault(),e.cloneProperty(t)}}},[r("i",{staticClass:"fa fa-plus"})]),e._v(" "),e.data.values.length>1?r("button",{staticClass:"btn btn-lg btn-danger text-white rounded-circle align-bottom text-center",attrs:{role:"button"},on:{click:function(r){return r.preventDefault(),e.removeProperty(t)}}},[r("i",{staticClass:"fa fa-times"})]):e._e()])])})),0):e._e()],1)],1)],1),e._v(" "),r("button",{staticClass:"btn btn-outline-primary rounded-0 btn-lg",attrs:{type:"submit"}},[e._v("\n                            Hastalığı Güncelle\n                          ")])],1)],1)],1)],1)]}}])})],1)])])])])])])])}),[],!1,null,null,null);t.default=component.exports;f()(component,{VApp:y.a,VCard:_.a,VCardText:C.c,VDivider:k.a,VStepper:O.a,VStepperContent:w.a,VStepperHeader:x.a,VStepperItems:x.b,VStepperStep:A.a,VTab:P.a,VTabItem:D.a,VTabs:S.a,VTabsItems:T.a})}}]);