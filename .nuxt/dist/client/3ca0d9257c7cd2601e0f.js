(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{441:function(t,e,r){"use strict";r.r(e);r(50);var n=r(5),l=r(21),o=r.n(l),d=r(55),c=r(69),m={middleware:["session-control","admin"],layout:"admin",components:{ValidationObserver:c.a,ValidationProvider:c.b},data:function(){return{data:{name:null,phone:null,email:null,facebook:null,twitter:null,instagram:null,youtube:null,linkedin:null,img_url:null},siteSettings:this.$store.getters.siteSettings,userData:null!==o.a.get("userData")&&void 0!==o.a.get("userData")&&""!==o.a.get("userData")?JSON.parse(d.a.decode(o.a.get("userData"))):null}},validate:function(t){var e=t.params;return null!==e.id?e.id:null},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,l,o,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.params,n=t.error,l=t.$axios,e.prev=1,e.next=4,l.get("https://api.klinikdiyetisyen.com/api/panel/users/update/"+r.id);case 4:return o=e.sent,data=o.data,e.abrupt("return",data);case 9:e.prev=9,e.t0=e.catch(1),n({message:"Kullanıcı Bilgisi Bulunamadı.",statusCode:404});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))()},methods:{editUsers:function(){var t=this,e=new FormData(this.$refs.usersForm);this.$axios.post("https://api.klinikdiyetisyen.com/api/panel/users/update/"+this.data._id.$oid,e,{json:!0,withCredentials:!1,mode:"no-cors",headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Origin, Content-Type, X-Auth-Token, Authorization","Access-Control-Allow-Methods":"GET, POST, PATCH, PUT, DELETE, OPTIONS","Access-Control-Allow-Credentials":!0,"Content-Type":"multipart/form-data; boundary="+e._boundary,Authorization:"Bearer "+this.userData.api_token}}).then((function(e){e.data.success?(t.$izitoast.success({title:e.data.title,message:e.data.msg,position:"topCenter"}),setTimeout((function(){t.$router.go(decodeURIComponent("/panel/users"))}),2e3)):t.$izitoast.error({title:e.data.title,message:e.data.msg,position:"topCenter"})}))}}},v=r(68),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"main-wrapper"},[r("div",{staticClass:"page-wrapper"},[r("div",{staticClass:"content container-fluid"},[r("div",{staticClass:"page-header"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-12"},[r("h3",{staticClass:"page-title"},[t._v("Kullanıcı Düzenle")]),t._v(" "),r("ul",{staticClass:"breadcrumb"},[r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{attrs:{to:"/panel",tag:"a"}},[t._v("Anasayfa")])],1),t._v(" "),r("li",{staticClass:"breadcrumb-item active"},[t._v("Kullanıcı Düzenle")])])])])]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("div",{staticClass:"card"},[t._m(0),t._v(" "),r("div",{staticClass:"card-body"},[r("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(e){var n=e.handleSubmit;return[r("form",{ref:"usersForm",attrs:{enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),n(t.editUsers)}}},[r("ul",{staticClass:"nav nav-tabs nav-tabs-bottom nav-justified"},[r("li",{staticClass:"nav-item"},[r("a",{staticClass:"nav-link active",attrs:{href:"#genel-bilgiler","data-toggle":"tab"}},[t._v("Genel Bilgiler")])]),t._v(" "),r("li",{staticClass:"nav-item"},[r("a",{staticClass:"nav-link",attrs:{href:"#sosyal-medya","data-toggle":"tab"}},[t._v("Sosyal Medya")])])]),t._v(" "),r("div",{staticClass:"tab-content mb-3"},[r("div",{staticClass:"tab-pane show active",attrs:{id:"genel-bilgiler"}},[r("ValidationProvider",{attrs:{name:"Adınız ve Soyadınız",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"title"}},[t._v("Adınız ve Soyadınız")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.data.name,expression:"data.name"}],staticClass:"form-control",attrs:{id:"title",type:"text",name:"name"},domProps:{value:t.data.name},on:{input:function(e){e.target.composing||t.$set(t.data,"name",e.target.value)}}}),t._v(" "),r("small",{staticClass:"font-weight-bold text-danger"},[t._v(t._s(n[0]))])])]}}],null,!0)}),t._v(" "),r("ValidationProvider",{attrs:{name:"Email Adresiniz",rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"company_name"}},[t._v("Email Adresiniz")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.data.email,expression:"data.email"}],staticClass:"form-control",attrs:{id:"company_name",type:"text",name:"email"},domProps:{value:t.data.email},on:{input:function(e){e.target.composing||t.$set(t.data,"email",e.target.value)}}}),t._v(" "),r("small",{staticClass:"font-weight-bold text-danger"},[t._v(t._s(n[0]))])])]}}],null,!0)}),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3"},[r("img",{attrs:{src:decodeURIComponent(t.siteSettings.baseURL)+"/public/storage/"+t.data.img_url,alt:t.data.name,width:"300",height:"300"}})]),t._v(" "),r("div",{staticClass:"col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9"},[r("div",{staticClass:"form-group"},[r("label",[t._v("Kullanıcı Görseli")]),t._v(" "),r("input",{ref:"img_url",staticClass:"form-control",attrs:{type:"file",id:"img_url",name:"img_url"}})])])])],1),t._v(" "),r("div",{staticClass:"tab-pane",attrs:{id:"sosyal-medya"}},[r("ValidationProvider",{attrs:{name:"Facebook",rules:""},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"facebook"}},[t._v("Facebook")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.data.facebook,expression:"data.facebook"}],staticClass:"form-control",attrs:{id:"facebook",type:"text",name:"facebook"},domProps:{value:t.data.facebook},on:{input:function(e){e.target.composing||t.$set(t.data,"facebook",e.target.value)}}}),t._v(" "),r("small",{staticClass:"font-weight-bold text-danger"},[t._v(t._s(n[0]))])])]}}],null,!0)}),t._v(" "),r("ValidationProvider",{attrs:{name:"Facebook",rules:""},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"twitter"}},[t._v("Twitter")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.data.twitter,expression:"data.twitter"}],staticClass:"form-control",attrs:{id:"twitter",type:"text",name:"twitter"},domProps:{value:t.data.twitter},on:{input:function(e){e.target.composing||t.$set(t.data,"twitter",e.target.value)}}}),t._v(" "),r("small",{staticClass:"font-weight-bold text-danger"},[t._v(t._s(n[0]))])])]}}],null,!0)}),t._v(" "),r("ValidationProvider",{attrs:{name:"Instagram",rules:""},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"instagram"}},[t._v("Instagram")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.data.instagram,expression:"data.instagram"}],staticClass:"form-control",attrs:{id:"instagram",type:"text",name:"instagram"},domProps:{value:t.data.instagram},on:{input:function(e){e.target.composing||t.$set(t.data,"instagram",e.target.value)}}}),t._v(" "),r("small",{staticClass:"font-weight-bold text-danger"},[t._v(t._s(n[0]))])])]}}],null,!0)}),t._v(" "),r("ValidationProvider",{attrs:{name:"Linkedin",rules:""},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"linkedin"}},[t._v("Linkedin")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.data.linkedin,expression:"data.linkedin"}],staticClass:"form-control",attrs:{id:"linkedin",type:"text",name:"linkedin"},domProps:{value:t.data.linkedin},on:{input:function(e){e.target.composing||t.$set(t.data,"linkedin",e.target.value)}}}),t._v(" "),r("small",{staticClass:"font-weight-bold text-danger"},[t._v(t._s(n[0]))])])]}}],null,!0)}),t._v(" "),r("ValidationProvider",{attrs:{name:"Youtube",rules:""},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"youtube"}},[t._v("Youtube")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.data.youtube,expression:"data.youtube"}],staticClass:"form-control",attrs:{id:"youtube",type:"text",name:"youtube"},domProps:{value:t.data.youtube},on:{input:function(e){e.target.composing||t.$set(t.data,"youtube",e.target.value)}}}),t._v(" "),r("small",{staticClass:"font-weight-bold text-danger"},[t._v(t._s(n[0]))])])]}}],null,!0)})],1)]),t._v(" "),r("div",{staticClass:"form-group"},[r("button",{staticClass:"btn btn-primary login-btn",attrs:{type:"submit"}},[t._v("\n                      Gönder\n                    ")])])])]}}])})],1)])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header"},[e("h4",{staticClass:"card-title"},[this._v("Kullanıcı Düzenle")])])}],!1,null,null,null);e.default=component.exports}}]);