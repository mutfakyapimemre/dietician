(window.webpackJsonp=window.webpackJsonp||[]).push([[81,16],{265:function(t,e,r){"use strict";r.d(e,"a",(function(){return o})),r.d(e,"b",(function(){return c})),r.d(e,"c",(function(){return d})),r.d(e,"d",(function(){return v}));var n=r(267),l=r(11),o=Object(l.f)("v-card__actions"),c=Object(l.f)("v-card__subtitle"),d=Object(l.f)("v-card__text"),v=Object(l.f)("v-card__title");n.a},267:function(t,e,r){"use strict";r(28),r(23),r(19),r(5),r(2),r(13);var n=r(8),l=(r(108),r(280),r(314)),o=r(277),c=r(270),d=r(241);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(o.a,c.a,l.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return f(f({"v-card":!0},c.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},l.a.options.computed.classes.call(this))},styles:function(){var style=f({},l.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=o.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},280:function(t,e,r){},352:function(t,e,r){"use strict";r.r(e);r(5),r(2),r(13);var n=r(4),l={middleware:["guest2"],layout:"default",computed:{img_url:function(){return"https://api.klinikdiyetisyen.com/"}},data:function(){return{userData:this.isEmpty(this.$auth.$storage.getUniversal("user"))?null:this.$auth.$storage.getUniversal("user")}},methods:{isEmpty:function(t){return"number"!=typeof t&&("string"==typeof t||Array.isArray(t)?0==t.length:"object"==Object(n.a)(t)?null==t||0==Object.keys(t).length:"boolean"!=typeof t&&!t)},logout:function(){var t=this;this.$auth.logout(),this.$auth.$storage.removeUniversal("user"),this.$auth.strategy.refreshToken.reset(),this.$izitoast.success({title:"Başarılı!",message:"Başarıyla Çıkış Yaptınız Yönlendiriliyorsunuz.",position:"topCenter"}),setTimeout((function(){t.$router.go(decodeURIComponent("/"))}),2e3)}}},o=r(71),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"profile-sidebar"},[r("div",{staticClass:"widget-profile pro-widget-content"},[r("div",{staticClass:"profile-info-widget"},[r("nuxt-link",{staticClass:"booking-doc-img",attrs:{to:"/profile"}},[r("img",{staticClass:"img-fluid",attrs:{src:t.img_url+"/public/storage/"+(t.isEmpty(t.userData.img_url)?null:t.userData.img_url),alt:t.userData.name}})]),t._v(" "),r("div",{staticClass:"profile-det-info"},[r("h3",[t._v(t._s(t.userData.name))]),t._v(" "),r("div",{staticClass:"patient-details"},[r("h5",{staticClass:"mb-0"},[r("i",{staticClass:"fa fa-map-marker-alt"}),t._v(" "+t._s(t.userData.city)+",\n\t\t\t\t\t\t"+t._s(t.userData.town)+"\n\t\t\t\t\t")])])])],1)]),t._v(" "),r("div",{staticClass:"dashboard-widget"},[r("nav",{staticClass:"dashboard-menu"},[r("ul",[r("nuxt-link",{attrs:{to:"/profile",tag:"li","exact-active-class":"active"}},[r("a",[r("i",{staticClass:"fa fa-user-cog"}),t._v(" "),r("span",[t._v("Kayıt Bilgileri")])])]),t._v(" "),r("nuxt-link",{attrs:{to:"/profile/diet-list",tag:"li","active-class":"active"}},[r("a",[r("i",{staticClass:"fa fa-calendar-check"}),t._v(" "),r("span",[t._v("Diyet Listesi")])])]),t._v(" "),r("nuxt-link",{attrs:{to:"/profile/my-dietician",tag:"li","active-class":"active"}},[r("a",[r("i",{staticClass:"fa fa-user-md"}),t._v(" "),r("span",[t._v("Diyetisyenim")])])]),t._v(" "),r("nuxt-link",{attrs:{to:"/profile/liked-foods-list",tag:"li","active-class":"active"}},[r("a",[r("i",{staticClass:"fa fa-drumstick-bite"}),t._v(" "),r("span",[t._v("Sevdiğim Besinler / Yemekler")])])]),t._v(" "),r("nuxt-link",{attrs:{to:"/profile/unliked-foods-list",tag:"li","active-class":"active"}},[r("a",[r("i",{staticClass:"fa fa-stroopwafel"}),t._v(" "),r("span",[t._v("Sevmediğim Besinler / Yemekler")])])]),t._v(" "),r("nuxt-link",{attrs:{to:"/profile/allergen-foods-list",tag:"li","active-class":"active"}},[r("a",[r("i",{staticClass:"fa fa-cloud-meatball"}),t._v(" "),r("span",[t._v("Alerjen Olduğum Besinler / Yemekler")])])]),t._v(" "),r("nuxt-link",{attrs:{to:"/profile/messages",tag:"li","active-class":"active"}},[r("a",[r("i",{staticClass:"fa fa-comments"}),t._v(" "),r("span",[t._v("Mesajlar")]),t._v(" "),r("small",{staticClass:"unread-msg"},[t._v("23")])])]),t._v(" "),r("nuxt-link",{attrs:{to:"/profile/social-media",tag:"li","active-class":"active"}},[r("a",[r("i",{staticClass:"fa fa-share-alt"}),t._v(" "),r("span",[t._v("Sosyal Medya")])])]),t._v(" "),r("nuxt-link",{attrs:{to:"/profile/password-update",tag:"li","active-class":"active"}},[r("a",[r("i",{staticClass:"fa fa-lock"}),t._v(" "),r("span",[t._v("Şifre Güncelle")])])]),t._v(" "),r("li",[r("a",{attrs:{href:"javascript:void(0)"},on:{click:function(e){return e.preventDefault(),t.logout(e)}}},[r("i",{staticClass:"fa fa-sign-out-alt"}),t._v(" "),r("span",[t._v("Çıkış Yap")])])])],1)])])])}),[],!1,null,null,null);e.default=component.exports},461:function(t,e,r){"use strict";r.r(e);r(5),r(2),r(13);var n=r(4),l=(r(54),r(7)),o=r(244),c=r(72),d=r(352),v={middleware:["guest2"],name:"profile",components:{ValidationObserver:c.a,ValidationProvider:c.b,Sidebar:d.default},computed:{img_url:function(){return"https://api.klinikdiyetisyen.com/"}},mounted:function(){var t=document.querySelectorAll(".v-file-input input");Object(o.a)(t).forEach((function(input){input.remove()}))},data:function(){return{dietician_check:null,userData:this.isEmpty(this.$auth.$storage.getUniversal("user"))?null:this.$auth.$storage.getUniversal("user")}},asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var r,n,l,o,data,c,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.app,r=t.store,t.route,t.params,n=t.error,l=t.$axios,e.prev=1,"dietician"!==r.getters.loggedInUser.status){e.next=10;break}return e.next=5,l.get("https://api.klinikdiyetisyen.com/api/dietician/profile/");case 5:return o=e.sent,data=o.data,e.abrupt("return",data);case 10:return e.next=12,l.get("https://api.klinikdiyetisyen.com/api/users/profile/");case 12:return c=e.sent,d=c.data,e.abrupt("return",d);case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(1),n({message:"Kullanıcı Bilgisi Bulunamadı.",statusCode:404});case 20:case"end":return e.stop()}}),e,null,[[1,17]])})))()},validate:function(t){var e=t.params;return null!==e.id?e.id:null},methods:{isEmpty:function(t){return"number"!=typeof t&&("string"==typeof t||Array.isArray(t)?0==t.length:"object"==Object(n.a)(t)?null==t||0==Object.keys(t).length:"boolean"!=typeof t&&!t)},logout:function(){var t=this;this.$auth.logout(),this.$auth.$storage.removeUniversal("user"),this.$auth.strategy.refreshToken.reset(),this.$izitoast.success({title:"Başarılı!",message:"Başarıyla Çıkış Yaptınız Yönlendiriliyorsunuz.",position:"topCenter"}),setTimeout((function(){t.$router.go(decodeURIComponent("/"))}),2e3)},applyDietician:function(){var t=this,e=new FormData(this.$refs.applyDieticianForm);e.append("api_token",this.userData.api_token),e.append("slug",this.$route.params.id),this.$axios.post("https://api.klinikdiyetisyen.com/api/users/dietician-update",e,{json:!0,withCredentials:!1,mode:"no-cors",headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Origin, Content-Type, X-Auth-Token, Authorization","Access-Control-Allow-Methods":"GET, POST, PATCH, PUT, DELETE, OPTIONS","Access-Control-Allow-Credentials":!0,"Content-Type":"multipart/form-data; boundary="+e._boundary,Authorization:"Bearer "+this.userData.api_token}}).then((function(e){e.data.success?(t.$izitoast.success({title:e.data.title,message:e.data.msg,position:"topCenter"}),t.$auth.$storage.setUniversal("user",e.data.data),t.$auth.strategy.token.set(t.$auth.$storage.getUniversal("user").api_token),setTimeout((function(){t.$router.go(decodeURIComponent("/profile"))}),2e3)):t.$izitoast.error({title:e.data.title,message:e.data.msg,position:"topCenter"})}))}}},f=r(71),m=r(273),h=r.n(m),y=r(335),_=r(284),k=r(267),C=r(265),O=r(316),component=Object(f.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return"dietician"!==t.userData.status?r("v-app",{staticClass:"h-auto"},[r("div",{staticClass:"breadcrumb-bar"},[r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"row align-items-center"},[r("div",{staticClass:"col-12 col-sm-12 col-md-12 col-12 col-xl-12"},[r("nav",{staticClass:"page-breadcrumb",attrs:{"aria-label":"breadcrumb"}},[r("ol",{staticClass:"breadcrumb pl-0"},[r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{attrs:{to:"/"}},[t._v("Anasayfa")])],1),t._v(" "),r("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v("\n\t\t\t\t\t\t\t\tDiyetisyen Onayı\n\t\t\t\t\t\t\t")])])]),t._v(" "),r("h2",{staticClass:"breadcrumb-title"},[t._v("Diyetisyen Onayı")])])])])]),t._v(" "),r("div",{staticClass:"content"},[r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-sm-12 col-md-5 col-lg-4 col-xl-3 theiaStickySidebar"},[r("Sidebar")],1),t._v(" "),r("div",{staticClass:"col-12 col-sm-12 col-md-7 col-lg-8 col-xl-9"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"},[r("h4",{staticClass:"mb-4"},[t._v("Diyetisyen Onayı")]),t._v(" "),r("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(e){var n=e.handleSubmit;return[r("form",{ref:"applyDieticianForm",attrs:{enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),n(t.applyDietician)}}},[r("v-card",{attrs:{color:"#15558d",dark:""}},[r("v-card-title",{staticClass:"headline"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\tKlinik Diyetisyen Diyetisyen Onay İşlemleri\n\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),r("v-card-subtitle",[t._v("Lütfen e-mail veya sms yolu ile iletilen kodu girip\n\t\t\t\t\t\t\t\t\t\t\tdiyetisyen onay işlemini tamamlayın.")]),t._v(" "),r("ValidationProvider",{attrs:{name:"Tekrar Yeni Şifreniz",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[r("v-text-field",{staticClass:"px-3",attrs:{label:"Lütfen 6 Haneli Onay Kodunuzu Girin...","hide-details":"auto",name:"dietician_check"},model:{value:t.dietician_check,callback:function(e){t.dietician_check=e},expression:"dietician_check"}}),t._v(" "),r("small",{staticClass:"font-weight-bold text-danger"},[t._v(t._s(n[0]))])]}}],null,!0)}),t._v(" "),r("v-card-actions",[r("v-btn",{attrs:{type:"submit",text:""}},[t._v("Diyetisyeni Onayla")])],1)],1)],1)]}}],null,!1,913164435)})],1)])])])])])]):t._e()}),[],!1,null,null,null);e.default=component.exports;h()(component,{VApp:y.a,VBtn:_.a,VCard:k.a,VCardActions:C.a,VCardSubtitle:C.b,VCardTitle:C.d,VTextField:O.a})}}]);