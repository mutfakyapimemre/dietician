exports.ids = [56];
exports.modules = {

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/panel/settings/add/index.vue?vue&type=template&id=dcb53652&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main-wrapper"},[_vm._ssrNode("<div class=\"page-wrapper\">","</div>",[_vm._ssrNode("<div class=\"content container-fluid\">","</div>",[_vm._ssrNode("<div class=\"page-header\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-sm-12\">","</div>",[_vm._ssrNode("<h3 class=\"page-title\">Ayarlar</h3> "),_vm._ssrNode("<ul class=\"breadcrumb\">","</ul>",[_vm._ssrNode("<li class=\"breadcrumb-item\">","</li>",[_c('nuxt-link',{attrs:{"to":"/panel","tag":"a"}},[_vm._v("Anasayfa")])],1),_vm._ssrNode(" <li class=\"breadcrumb-item active\">Ayarlar</li>")],2)],2)])]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-12\">","</div>",[_vm._ssrNode("<div class=\"card\">","</div>",[_vm._ssrNode("<div class=\"card-header\"><h4 class=\"card-title\">Ayarlar</h4></div> "),_vm._ssrNode("<div class=\"card-body\">","</div>",[_c('ValidationObserver',{scopedSlots:_vm._u([{key:"default",fn:function(ref){
var handleSubmit = ref.handleSubmit;
return [_c('form',{ref:"settingsForm",attrs:{"enctype":"multipart/form-data"},on:{"submit":function($event){$event.preventDefault();return handleSubmit(_vm.saveSettings)}}},[_c('ul',{staticClass:"nav nav-tabs nav-tabs-bottom nav-justified"},[_c('li',{staticClass:"nav-item"},[_c('a',{staticClass:"nav-link active",attrs:{"href":"#genel-ayarlar","data-toggle":"tab"}},[_vm._v("Genel Ayarlar")])]),_vm._v(" "),_c('li',{staticClass:"nav-item"},[_c('a',{staticClass:"nav-link",attrs:{"href":"#iletisim","data-toggle":"tab"}},[_vm._v("İletişim")])]),_vm._v(" "),_c('li',{staticClass:"nav-item"},[_c('a',{staticClass:"nav-link",attrs:{"href":"#sosyal-medya","data-toggle":"tab"}},[_vm._v("Sosyal Medya")])]),_vm._v(" "),_c('li',{staticClass:"nav-item"},[_c('a',{staticClass:"nav-link",attrs:{"href":"#meta-etiketleri","data-toggle":"tab"}},[_vm._v("Meta Etiketleri")])]),_vm._v(" "),_c('li',{staticClass:"nav-item"},[_c('a',{staticClass:"nav-link",attrs:{"href":"#site-analizleri","data-toggle":"tab"}},[_vm._v("Site Analizleri")])]),_vm._v(" "),_c('li',{staticClass:"nav-item"},[_c('a',{staticClass:"nav-link",attrs:{"href":"#canli-destek","data-toggle":"tab"}},[_vm._v("Canlı Destek")])])]),_vm._v(" "),_c('div',{staticClass:"tab-content mb-3"},[_c('div',{staticClass:"tab-pane show active",attrs:{"id":"genel-ayarlar"}},[_c('ValidationProvider',{attrs:{"name":"Web Sitesi Adı","rules":"required"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
return [_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"title"}},[_vm._v("Web Sitesi Adı")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.title),expression:"title"}],staticClass:"form-control",attrs:{"id":"title","type":"text","name":"title"},domProps:{"value":(_vm.title)},on:{"input":function($event){if($event.target.composing){ return; }_vm.title=$event.target.value}}}),_vm._v(" "),_c('small',{staticClass:"font-weight-bold text-danger"},[_vm._v(_vm._s(errors[0]))])])]}}],null,true)}),_vm._v(" "),_c('ValidationProvider',{attrs:{"name":"Firma Adı","rules":"required"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
return [_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"company_name"}},[_vm._v("Firma Adı")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.company_name),expression:"company_name"}],staticClass:"form-control",attrs:{"id":"company_name","type":"text","name":"company_name"},domProps:{"value":(_vm.company_name)},on:{"input":function($event){if($event.target.composing){ return; }_vm.company_name=$event.target.value}}}),_vm._v(" "),_c('small',{staticClass:"font-weight-bold text-danger"},[_vm._v(_vm._s(errors[0]))])])]}}],null,true)}),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',[_vm._v("Website Logosu")]),_vm._v(" "),_c('input',{ref:"logo",staticClass:"form-control",attrs:{"type":"file","id":"logo","name":"logo"}})]),_vm._v(" "),_c('div',{staticClass:"form-group mb-0"},[_c('label',[_vm._v("Favicon")]),_vm._v(" "),_c('input',{ref:"favicon",staticClass:"form-control",attrs:{"type":"file","id":"favicon","name":"favicon"}})])],1),_vm._v(" "),_c('div',{staticClass:"tab-pane",attrs:{"id":"iletisim"}},[_c('ValidationProvider',{attrs:{"name":"Telefon","rules":"required"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
return [_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"phone"}},[_vm._v("Telefon")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.phone),expression:"phone"}],staticClass:"form-control",attrs:{"id":"phone","type":"text","name":"phone"},domProps:{"value":(_vm.phone)},on:{"input":function($event){if($event.target.composing){ return; }_vm.phone=$event.target.value}}}),_vm._v(" "),_c('small',{staticClass:"font-weight-bold text-danger"},[_vm._v(_vm._s(errors[0]))])])]}}],null,true)}),_vm._v(" "),_c('ValidationProvider',{attrs:{"name":"Email","rules":"required|email"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
return [_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"email"}},[_vm._v("Email")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.email),expression:"email"}],staticClass:"form-control",attrs:{"id":"email","type":"text","name":"email"},domProps:{"value":(_vm.email)},on:{"input":function($event){if($event.target.composing){ return; }_vm.email=$event.target.value}}}),_vm._v(" "),_c('small',{staticClass:"font-weight-bold text-danger"},[_vm._v(_vm._s(errors[0]))])])]}}],null,true)}),_vm._v(" "),_c('ValidationProvider',{attrs:{"name":"Adres","rules":"required"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
return [_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"address"}},[_vm._v("Adres")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.address),expression:"address"}],staticClass:"form-control",attrs:{"id":"address","type":"text","name":"address"},domProps:{"value":(_vm.address)},on:{"input":function($event){if($event.target.composing){ return; }_vm.address=$event.target.value}}}),_vm._v(" "),_c('small',{staticClass:"font-weight-bold text-danger"},[_vm._v(_vm._s(errors[0]))])])]}}],null,true)})],1),_vm._v(" "),_c('div',{staticClass:"tab-pane",attrs:{"id":"sosyal-medya"}},[_c('ValidationProvider',{attrs:{"name":"Facebook","rules":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
return [_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"facebook"}},[_vm._v("Facebook")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.facebook),expression:"facebook"}],staticClass:"form-control",attrs:{"id":"facebook","type":"text","name":"facebook"},domProps:{"value":(_vm.facebook)},on:{"input":function($event){if($event.target.composing){ return; }_vm.facebook=$event.target.value}}}),_vm._v(" "),_c('small',{staticClass:"font-weight-bold text-danger"},[_vm._v(_vm._s(errors[0]))])])]}}],null,true)}),_vm._v(" "),_c('ValidationProvider',{attrs:{"name":"Facebook","rules":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
return [_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"twitter"}},[_vm._v("Twitter")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.twitter),expression:"twitter"}],staticClass:"form-control",attrs:{"id":"twitter","type":"text","name":"twitter"},domProps:{"value":(_vm.twitter)},on:{"input":function($event){if($event.target.composing){ return; }_vm.twitter=$event.target.value}}}),_vm._v(" "),_c('small',{staticClass:"font-weight-bold text-danger"},[_vm._v(_vm._s(errors[0]))])])]}}],null,true)}),_vm._v(" "),_c('ValidationProvider',{attrs:{"name":"Instagram","rules":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
return [_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"instagram"}},[_vm._v("Instagram")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.instagram),expression:"instagram"}],staticClass:"form-control",attrs:{"id":"instagram","type":"text","name":"instagram"},domProps:{"value":(_vm.instagram)},on:{"input":function($event){if($event.target.composing){ return; }_vm.instagram=$event.target.value}}}),_vm._v(" "),_c('small',{staticClass:"font-weight-bold text-danger"},[_vm._v(_vm._s(errors[0]))])])]}}],null,true)}),_vm._v(" "),_c('ValidationProvider',{attrs:{"name":"Linkedin","rules":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
return [_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"linkedin"}},[_vm._v("Linkedin")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.linkedin),expression:"linkedin"}],staticClass:"form-control",attrs:{"id":"linkedin","type":"text","name":"linkedin"},domProps:{"value":(_vm.linkedin)},on:{"input":function($event){if($event.target.composing){ return; }_vm.linkedin=$event.target.value}}}),_vm._v(" "),_c('small',{staticClass:"font-weight-bold text-danger"},[_vm._v(_vm._s(errors[0]))])])]}}],null,true)}),_vm._v(" "),_c('ValidationProvider',{attrs:{"name":"Youtube","rules":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
return [_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"youtube"}},[_vm._v("Youtube")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.youtube),expression:"youtube"}],staticClass:"form-control",attrs:{"id":"youtube","type":"text","name":"youtube"},domProps:{"value":(_vm.youtube)},on:{"input":function($event){if($event.target.composing){ return; }_vm.youtube=$event.target.value}}}),_vm._v(" "),_c('small',{staticClass:"font-weight-bold text-danger"},[_vm._v(_vm._s(errors[0]))])])]}}],null,true)})],1),_vm._v(" "),_c('div',{staticClass:"tab-pane",attrs:{"id":"meta-etiketleri"}},[_c('ValidationProvider',{attrs:{"name":"Meta Keywords","rules":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
return [_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"metaKeywords"}},[_vm._v("Meta Keywords")]),_vm._v(" "),_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.metaKeywords),expression:"metaKeywords"}],staticClass:"form-control",attrs:{"name":"metaKeywords","id":"metaKeywords"},domProps:{"value":(_vm.metaKeywords)},on:{"input":function($event){if($event.target.composing){ return; }_vm.metaKeywords=$event.target.value}}}),_vm._v(" "),_c('small',{staticClass:"font-weight-bold text-danger"},[_vm._v(_vm._s(errors[0]))])])]}}],null,true)}),_vm._v(" "),_c('ValidationProvider',{attrs:{"name":"Meta Description","rules":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
return [_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"metaDescription"}},[_vm._v("Meta Description")]),_vm._v(" "),_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.metaDescription),expression:"metaDescription"}],staticClass:"form-control",attrs:{"name":"metaDescription","id":"metaDescription"},domProps:{"value":(_vm.metaDescription)},on:{"input":function($event){if($event.target.composing){ return; }_vm.metaDescription=$event.target.value}}}),_vm._v(" "),_c('small',{staticClass:"font-weight-bold text-danger"},[_vm._v(_vm._s(errors[0]))])])]}}],null,true)})],1),_vm._v(" "),_c('div',{staticClass:"tab-pane",attrs:{"id":"site-analizleri"}},[_c('ValidationProvider',{attrs:{"name":"Google Analytics","rules":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
return [_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"analytics"}},[_vm._v("Google Analytics")]),_vm._v(" "),_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.analytics),expression:"analytics"}],staticClass:"form-control",attrs:{"name":"analytics","id":"analytics"},domProps:{"value":(_vm.analytics)},on:{"input":function($event){if($event.target.composing){ return; }_vm.analytics=$event.target.value}}}),_vm._v(" "),_c('small',{staticClass:"font-weight-bold text-danger"},[_vm._v(_vm._s(errors[0]))])])]}}],null,true)}),_vm._v(" "),_c('ValidationProvider',{attrs:{"name":"Yandex Metrica","rules":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
return [_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"metrica"}},[_vm._v("Yandex Metrica")]),_vm._v(" "),_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.metrica),expression:"metrica"}],staticClass:"form-control",attrs:{"name":"metrica","id":"metrica"},domProps:{"value":(_vm.metrica)},on:{"input":function($event){if($event.target.composing){ return; }_vm.metrica=$event.target.value}}}),_vm._v(" "),_c('small',{staticClass:"font-weight-bold text-danger"},[_vm._v(_vm._s(errors[0]))])])]}}],null,true)})],1),_vm._v(" "),_c('div',{staticClass:"tab-pane",attrs:{"id":"canli-destek"}},[_c('ValidationProvider',{attrs:{"name":"Canlı Destek","rules":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
return [_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"liveSupport"}},[_vm._v("Canlı Destek")]),_vm._v(" "),_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.liveSupport),expression:"liveSupport"}],staticClass:"form-control",attrs:{"name":"liveSupport","id":"liveSupport"},domProps:{"value":(_vm.liveSupport)},on:{"input":function($event){if($event.target.composing){ return; }_vm.liveSupport=$event.target.value}}}),_vm._v(" "),_c('small',{staticClass:"font-weight-bold text-danger"},[_vm._v(_vm._s(errors[0]))])])]}}],null,true)})],1)]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('button',{staticClass:"btn btn-primary login-btn",attrs:{"type":"submit"}},[_vm._v("\n                      Gönder\n                    ")])])])]}}])})],1)],2)])])],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/panel/settings/add/index.vue?vue&type=template&id=dcb53652&

// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__(2);
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);

// EXTERNAL MODULE: external "js-base64"
var external_js_base64_ = __webpack_require__(7);

// EXTERNAL MODULE: external "vee-validate"
var external_vee_validate_ = __webpack_require__(37);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/panel/settings/add/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var addvue_type_script_lang_js_ = ({
  middleware: ["session-control", "admin"],
  layout: "admin",
  components: {
    ValidationObserver: external_vee_validate_["ValidationObserver"],
    ValidationProvider: external_vee_validate_["ValidationProvider"]
  },

  data() {
    return {
      title: null,
      company_name: null,
      phone: null,
      email: null,
      address: null,
      facebook: null,
      twitter: null,
      instagram: null,
      youtube: null,
      linkedin: null,
      metaKeywords: null,
      metaDescription: null,
      analytics: null,
      metrica: null,
      liveSupport: null,
      userData: external_js_cookie_default.a.get("userData") !== null && external_js_cookie_default.a.get("userData") !== undefined && external_js_cookie_default.a.get("userData") !== "" ? JSON.parse(external_js_base64_["Base64"].decode(external_js_cookie_default.a.get("userData"))) : null
    };
  },

  methods: {
    saveSettings() {
      let formData = new FormData(this.$refs.settingsForm);
      this.$axios.post("https://api.klinikdiyetisyen.com/api/" + "panel/settings/create", formData, {
        json: true,
        withCredentials: false,
        mode: "no-cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token, Authorization",
          "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Credentials": true,
          "Content-Type": "multipart/form-data; boundary=" + formData._boundary,
          Authorization: "Bearer " + this.userData.api_token
        },
        credentials: "same-origin"
      }).then(response => {
        if (response.data.success) {
          this.$izitoast.success({
            title: response.data.title,
            message: response.data.msg,
            position: "topCenter"
          });
          setTimeout(() => {
            this.$router.go(decodeURIComponent("/panel/settings"));
          }, 2000);
        } else {
          this.$izitoast.error({
            title: response.data.title,
            message: response.data.msg,
            position: "topCenter"
          });
        }
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/panel/settings/add/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var settings_addvue_type_script_lang_js_ = (addvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(13);

// CONCATENATED MODULE: ./pages/panel/settings/add/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  settings_addvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "ed4620ca"
  
)

/* harmony default export */ var add = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map