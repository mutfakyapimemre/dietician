exports.ids = [60];
exports.modules = {

/***/ 104:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 107:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 108:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/panel/settings/update/_id.vue?vue&type=template&id=bb61db1a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main-wrapper"},[_vm._ssrNode("<div class=\"page-wrapper\">","</div>",[_vm._ssrNode("<div class=\"content container-fluid\">","</div>",[_vm._ssrNode("<div class=\"page-header\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-sm-12\">","</div>",[_vm._ssrNode("<h3 class=\"page-title\">Ayarlar</h3> "),_vm._ssrNode("<ul class=\"breadcrumb\">","</ul>",[_vm._ssrNode("<li class=\"breadcrumb-item\">","</li>",[_c('nuxt-link',{attrs:{"to":"/panel","tag":"a"}},[_vm._v("Anasayfa")])],1),_vm._ssrNode(" <li class=\"breadcrumb-item active\">Ayarlar</li>")],2)],2)])]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-12\">","</div>",[_vm._ssrNode("<div class=\"card\">","</div>",[_vm._ssrNode("<div class=\"card-header\"><h4 class=\"card-title\">Ayarlar</h4></div> "),_vm._ssrNode("<div class=\"card-body\">","</div>",[_c('ValidationObserver',{scopedSlots:_vm._u([{key:"default",fn:function(ref){
var handleSubmit = ref.handleSubmit;
return [_c('form',{ref:"settingsForm",attrs:{"enctype":"multipart/form-data"},on:{"submit":function($event){$event.preventDefault();return handleSubmit(_vm.editSettings)}}},[_c('ul',{staticClass:"nav nav-tabs nav-tabs-bottom nav-justified"},[_c('li',{staticClass:"nav-item"},[_c('a',{staticClass:"nav-link active",attrs:{"href":"#genel-ayarlar","data-toggle":"tab"}},[_vm._v("Genel Ayarlar")])]),_vm._v(" "),_c('li',{staticClass:"nav-item"},[_c('a',{staticClass:"nav-link",attrs:{"href":"#iletisim","data-toggle":"tab"}},[_vm._v("İletişim")])]),_vm._v(" "),_c('li',{staticClass:"nav-item"},[_c('a',{staticClass:"nav-link",attrs:{"href":"#sosyal-medya","data-toggle":"tab"}},[_vm._v("Sosyal Medya")])]),_vm._v(" "),_c('li',{staticClass:"nav-item"},[_c('a',{staticClass:"nav-link",attrs:{"href":"#meta-etiketleri","data-toggle":"tab"}},[_vm._v("Meta Etiketleri")])]),_vm._v(" "),_c('li',{staticClass:"nav-item"},[_c('a',{staticClass:"nav-link",attrs:{"href":"#site-analizleri","data-toggle":"tab"}},[_vm._v("Site Analizleri")])]),_vm._v(" "),_c('li',{staticClass:"nav-item"},[_c('a',{staticClass:"nav-link",attrs:{"href":"#canli-destek","data-toggle":"tab"}},[_vm._v("Canlı Destek")])])]),_vm._v(" "),_c('div',{staticClass:"tab-content mb-3"},[_c('div',{staticClass:"tab-pane show active",attrs:{"id":"genel-ayarlar"}},[_c('ValidationProvider',{attrs:{"name":"Web Sitesi Adı","rules":"required"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
return [_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"title"}},[_vm._v("Web Sitesi Adı")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.data.title),expression:"data.title"}],staticClass:"form-control",attrs:{"id":"title","type":"text","name":"title"},domProps:{"value":(_vm.data.title)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.data, "title", $event.target.value)}}}),_vm._v(" "),_c('small',{staticClass:"font-weight-bold text-danger"},[_vm._v(_vm._s(errors[0]))])])]}}],null,true)}),_vm._v(" "),_c('ValidationProvider',{attrs:{"name":"Firma Adı","rules":"required"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
return [_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"company_name"}},[_vm._v("Firma Adı")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.data.company_name),expression:"data.company_name"}],staticClass:"form-control",attrs:{"id":"company_name","type":"text","name":"company_name"},domProps:{"value":(_vm.data.company_name)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.data, "company_name", $event.target.value)}}}),_vm._v(" "),_c('small',{staticClass:"font-weight-bold text-danger"},[_vm._v(_vm._s(errors[0]))])])]}}],null,true)}),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3"},[_c('img',{attrs:{"src":decodeURIComponent(_vm.siteSettings.baseURL) +
                              '/public/storage/' +
                              _vm.data.logo,"alt":_vm.data.company_name}})]),_vm._v(" "),_c('div',{staticClass:"col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9"},[_c('div',{staticClass:"form-group"},[_c('label',[_vm._v("Website Logosu")]),_vm._v(" "),_c('input',{ref:"logo",staticClass:"form-control",attrs:{"type":"file","id":"logo","name":"logo"}})])])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3"},[_c('img',{attrs:{"src":decodeURIComponent(_vm.siteSettings.baseURL) +
                              '/public/storage/' +
                              _vm.data.favicon,"alt":_vm.data.company_name}})]),_vm._v(" "),_c('div',{staticClass:"col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9"},[_c('div',{staticClass:"form-group mb-0"},[_c('label',[_vm._v("Favicon")]),_vm._v(" "),_c('input',{ref:"favicon",staticClass:"form-control",attrs:{"type":"file","id":"favicon","name":"favicon"}})])])])],1),_vm._v(" "),_c('div',{staticClass:"tab-pane",attrs:{"id":"iletisim"}},[_c('ValidationProvider',{attrs:{"name":"Telefon","rules":"required"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
                              var errors = ref.errors;
return [_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"phone"}},[_vm._v("Telefon")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.data.phone),expression:"data.phone"}],staticClass:"form-control",attrs:{"id":"phone","type":"text","name":"phone"},domProps:{"value":(_vm.data.phone)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.data, "phone", $event.target.value)}}}),_vm._v(" "),_c('small',{staticClass:"font-weight-bold text-danger"},[_vm._v(_vm._s(errors[0]))])])]}}],null,true)}),_vm._v(" "),_c('ValidationProvider',{attrs:{"name":"Email","rules":"required|email"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
                              var errors = ref.errors;
return [_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"email"}},[_vm._v("Email")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.data.email),expression:"data.email"}],staticClass:"form-control",attrs:{"id":"email","type":"text","name":"email"},domProps:{"value":(_vm.data.email)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.data, "email", $event.target.value)}}}),_vm._v(" "),_c('small',{staticClass:"font-weight-bold text-danger"},[_vm._v(_vm._s(errors[0]))])])]}}],null,true)}),_vm._v(" "),_c('ValidationProvider',{attrs:{"name":"Adres","rules":"required"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
                              var errors = ref.errors;
return [_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"address"}},[_vm._v("Adres")]),_vm._v(" "),_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.data.address),expression:"data.address"}],staticClass:"form-control",attrs:{"id":"address","name":"address"},domProps:{"value":(_vm.data.address)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.data, "address", $event.target.value)}}}),_vm._v(" "),_c('small',{staticClass:"font-weight-bold text-danger"},[_vm._v(_vm._s(errors[0]))])])]}}],null,true)})],1),_vm._v(" "),_c('div',{staticClass:"tab-pane",attrs:{"id":"sosyal-medya"}},[_c('ValidationProvider',{attrs:{"name":"Facebook","rules":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
                              var errors = ref.errors;
return [_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"facebook"}},[_vm._v("Facebook")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.data.facebook),expression:"data.facebook"}],staticClass:"form-control",attrs:{"id":"facebook","type":"text","name":"facebook"},domProps:{"value":(_vm.data.facebook)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.data, "facebook", $event.target.value)}}}),_vm._v(" "),_c('small',{staticClass:"font-weight-bold text-danger"},[_vm._v(_vm._s(errors[0]))])])]}}],null,true)}),_vm._v(" "),_c('ValidationProvider',{attrs:{"name":"Facebook","rules":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
                              var errors = ref.errors;
return [_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"twitter"}},[_vm._v("Twitter")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.data.twitter),expression:"data.twitter"}],staticClass:"form-control",attrs:{"id":"twitter","type":"text","name":"twitter"},domProps:{"value":(_vm.data.twitter)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.data, "twitter", $event.target.value)}}}),_vm._v(" "),_c('small',{staticClass:"font-weight-bold text-danger"},[_vm._v(_vm._s(errors[0]))])])]}}],null,true)}),_vm._v(" "),_c('ValidationProvider',{attrs:{"name":"Instagram","rules":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
                              var errors = ref.errors;
return [_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"instagram"}},[_vm._v("Instagram")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.data.instagram),expression:"data.instagram"}],staticClass:"form-control",attrs:{"id":"instagram","type":"text","name":"instagram"},domProps:{"value":(_vm.data.instagram)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.data, "instagram", $event.target.value)}}}),_vm._v(" "),_c('small',{staticClass:"font-weight-bold text-danger"},[_vm._v(_vm._s(errors[0]))])])]}}],null,true)}),_vm._v(" "),_c('ValidationProvider',{attrs:{"name":"Linkedin","rules":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
                              var errors = ref.errors;
return [_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"linkedin"}},[_vm._v("Linkedin")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.data.linkedin),expression:"data.linkedin"}],staticClass:"form-control",attrs:{"id":"linkedin","type":"text","name":"linkedin"},domProps:{"value":(_vm.data.linkedin)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.data, "linkedin", $event.target.value)}}}),_vm._v(" "),_c('small',{staticClass:"font-weight-bold text-danger"},[_vm._v(_vm._s(errors[0]))])])]}}],null,true)}),_vm._v(" "),_c('ValidationProvider',{attrs:{"name":"Youtube","rules":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
                              var errors = ref.errors;
return [_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"youtube"}},[_vm._v("Youtube")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.data.youtube),expression:"data.youtube"}],staticClass:"form-control",attrs:{"id":"youtube","type":"text","name":"youtube"},domProps:{"value":(_vm.data.youtube)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.data, "youtube", $event.target.value)}}}),_vm._v(" "),_c('small',{staticClass:"font-weight-bold text-danger"},[_vm._v(_vm._s(errors[0]))])])]}}],null,true)})],1),_vm._v(" "),_c('div',{staticClass:"tab-pane",attrs:{"id":"meta-etiketleri"}},[_c('ValidationProvider',{attrs:{"name":"Meta Keywords","rules":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
                              var errors = ref.errors;
return [_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"metaKeywords"}},[_vm._v("Meta Keywords")]),_vm._v(" "),_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.data.metaKeywords),expression:"data.metaKeywords"}],staticClass:"form-control",attrs:{"name":"metaKeywords","id":"metaKeywords"},domProps:{"value":(_vm.data.metaKeywords)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.data, "metaKeywords", $event.target.value)}}}),_vm._v(" "),_c('small',{staticClass:"font-weight-bold text-danger"},[_vm._v(_vm._s(errors[0]))])])]}}],null,true)}),_vm._v(" "),_c('ValidationProvider',{attrs:{"name":"Meta Description","rules":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
                              var errors = ref.errors;
return [_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"metaDescription"}},[_vm._v("Meta Description")]),_vm._v(" "),_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.data.metaDescription),expression:"data.metaDescription"}],staticClass:"form-control",attrs:{"name":"metaDescription","id":"metaDescription"},domProps:{"value":(_vm.data.metaDescription)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.data, "metaDescription", $event.target.value)}}}),_vm._v(" "),_c('small',{staticClass:"font-weight-bold text-danger"},[_vm._v(_vm._s(errors[0]))])])]}}],null,true)})],1),_vm._v(" "),_c('div',{staticClass:"tab-pane",attrs:{"id":"site-analizleri"}},[_c('ValidationProvider',{attrs:{"name":"Google Analytics","rules":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
                              var errors = ref.errors;
return [_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"analytics"}},[_vm._v("Google Analytics")]),_vm._v(" "),_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.data.analytics),expression:"data.analytics"}],staticClass:"form-control",attrs:{"name":"analytics","id":"analytics"},domProps:{"value":(_vm.data.analytics)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.data, "analytics", $event.target.value)}}}),_vm._v(" "),_c('small',{staticClass:"font-weight-bold text-danger"},[_vm._v(_vm._s(errors[0]))])])]}}],null,true)}),_vm._v(" "),_c('ValidationProvider',{attrs:{"name":"Yandex Metrica","rules":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
                              var errors = ref.errors;
return [_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"metrica"}},[_vm._v("Yandex Metrica")]),_vm._v(" "),_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.data.metrica),expression:"data.metrica"}],staticClass:"form-control",attrs:{"name":"metrica","id":"metrica"},domProps:{"value":(_vm.data.metrica)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.data, "metrica", $event.target.value)}}}),_vm._v(" "),_c('small',{staticClass:"font-weight-bold text-danger"},[_vm._v(_vm._s(errors[0]))])])]}}],null,true)})],1),_vm._v(" "),_c('div',{staticClass:"tab-pane",attrs:{"id":"canli-destek"}},[_c('ValidationProvider',{attrs:{"name":"Canlı Destek","rules":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
                              var errors = ref.errors;
return [_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"liveSupport"}},[_vm._v("Canlı Destek")]),_vm._v(" "),_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.data.liveSupport),expression:"data.liveSupport"}],staticClass:"form-control",attrs:{"name":"liveSupport","id":"liveSupport"},domProps:{"value":(_vm.data.liveSupport)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.data, "liveSupport", $event.target.value)}}}),_vm._v(" "),_c('small',{staticClass:"font-weight-bold text-danger"},[_vm._v(_vm._s(errors[0]))])])]}}],null,true)})],1)]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('v-btn',{attrs:{"color":"#1b5a90","dark":"","type":"submit"}},[_vm._v("Gönder")])],1)])]}}])})],1)],2)])])],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/panel/settings/update/_id.vue?vue&type=template&id=bb61db1a&

// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__(2);
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);

// EXTERNAL MODULE: external "js-base64"
var external_js_base64_ = __webpack_require__(7);

// EXTERNAL MODULE: external "vee-validate"
var external_vee_validate_ = __webpack_require__(37);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/panel/settings/update/_id.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  middleware: ["session-control", "admin"],
  layout: "admin",
  components: {
    ValidationObserver: external_vee_validate_["ValidationObserver"],
    ValidationProvider: external_vee_validate_["ValidationProvider"]
  },

  data() {
    return {
      data: {
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
        logo: null,
        favicon: null
      },
      siteSettings: this.$store.getters.siteSettings,
      userData: external_js_cookie_default.a.get("userData") !== null && external_js_cookie_default.a.get("userData") !== undefined && external_js_cookie_default.a.get("userData") !== "" ? JSON.parse(external_js_base64_["Base64"].decode(external_js_cookie_default.a.get("userData"))) : null
    };
  },

  validate({
    params
  }) {
    return params.id !== null ? params.id : null;
  },

  async asyncData({
    params,
    error,
    $axios
  }) {
    try {
      const {
        data
      } = await $axios.get("https://api.klinikdiyetisyen.com/api/" + "panel/settings/update/" + params.id);
      return data;
    } catch (e) {
      error({
        message: "Site Ayarı Bulunamadı.",
        statusCode: 404
      });
    }
  },

  methods: {
    editSettings() {
      let formData = new FormData(this.$refs.settingsForm);
      this.$axios.post("https://api.klinikdiyetisyen.com/api/" + "panel/settings/update/" + this.data._id.$oid, formData, {
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
        }
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
// CONCATENATED MODULE: ./pages/panel/settings/update/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var update_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(66);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 1 modules
var VBtn = __webpack_require__(77);

// CONCATENATED MODULE: ./pages/panel/settings/update/_id.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  update_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "13c14a13"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */


installComponents_default()(component, {VBtn: VBtn["a" /* default */]})


/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mixins; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable max-len, import/export, no-use-before-define */

function mixins(...args) {
  return vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
    mixins: args
  });
}

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return functionalThemeClasses; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* @vue/component */

const Themeable = vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend().extend({
  name: 'themeable',

  provide() {
    return {
      theme: this.themeableProvide
    };
  },

  inject: {
    theme: {
      default: {
        isDark: false
      }
    }
  },
  props: {
    dark: {
      type: Boolean,
      default: null
    },
    light: {
      type: Boolean,
      default: null
    }
  },

  data() {
    return {
      themeableProvide: {
        isDark: false
      }
    };
  },

  computed: {
    appIsDark() {
      return this.$vuetify.theme.dark || false;
    },

    isDark() {
      if (this.dark === true) {
        // explicitly dark
        return true;
      } else if (this.light === true) {
        // explicitly light
        return false;
      } else {
        // inherit from parent, or default false if there is none
        return this.theme.isDark;
      }
    },

    themeClasses() {
      return {
        'theme--dark': this.isDark,
        'theme--light': !this.isDark
      };
    },

    /** Used by menus and dialogs, inherits from v-app instead of the parent */
    rootIsDark() {
      if (this.dark === true) {
        // explicitly dark
        return true;
      } else if (this.light === true) {
        // explicitly light
        return false;
      } else {
        // inherit from v-app
        return this.appIsDark;
      }
    },

    rootThemeClasses() {
      return {
        'theme--dark': this.rootIsDark,
        'theme--light': !this.rootIsDark
      };
    }

  },
  watch: {
    isDark: {
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          this.themeableProvide.isDark = this.isDark;
        }
      },

      immediate: true
    }
  }
});
/* harmony default export */ __webpack_exports__["a"] = (Themeable);
function functionalThemeClasses(context) {
  const vm = { ...context.props,
    ...context.injections
  };
  const isDark = Themeable.options.computed.isDark.call(vm);
  return Themeable.options.computed.themeClasses.call({
    isDark
  });
}

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _util_colorUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);



/* harmony default export */ __webpack_exports__["a"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  name: 'colorable',
  props: {
    color: String
  },
  methods: {
    setBackgroundColor(color, data = {}) {
      if (typeof data.style === 'string') {
        // istanbul ignore next
        Object(_util_console__WEBPACK_IMPORTED_MODULE_1__[/* consoleError */ "b"])('style must be an object', this); // istanbul ignore next

        return data;
      }

      if (typeof data.class === 'string') {
        // istanbul ignore next
        Object(_util_console__WEBPACK_IMPORTED_MODULE_1__[/* consoleError */ "b"])('class must be an object', this); // istanbul ignore next

        return data;
      }

      if (Object(_util_colorUtils__WEBPACK_IMPORTED_MODULE_2__[/* isCssColor */ "d"])(color)) {
        data.style = { ...data.style,
          'background-color': `${color}`,
          'border-color': `${color}`
        };
      } else if (color) {
        data.class = { ...data.class,
          [color]: true
        };
      }

      return data;
    },

    setTextColor(color, data = {}) {
      if (typeof data.style === 'string') {
        // istanbul ignore next
        Object(_util_console__WEBPACK_IMPORTED_MODULE_1__[/* consoleError */ "b"])('style must be an object', this); // istanbul ignore next

        return data;
      }

      if (typeof data.class === 'string') {
        // istanbul ignore next
        Object(_util_console__WEBPACK_IMPORTED_MODULE_1__[/* consoleError */ "b"])('class must be an object', this); // istanbul ignore next

        return data;
      }

      if (Object(_util_colorUtils__WEBPACK_IMPORTED_MODULE_2__[/* isCssColor */ "d"])(color)) {
        data.style = { ...data.style,
          color: `${color}`,
          'caret-color': `${color}`
        };
      } else if (color) {
        const [colorName, colorModifier] = color.toString().trim().split(' ', 2);
        data.class = { ...data.class,
          [colorName + '--text']: true
        };

        if (colorModifier) {
          data.class['text--' + colorModifier] = true;
        }
      }

      return data;
    }

  }
}));

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Ripple */
/* harmony import */ var _src_directives_ripple_VRipple_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92);
/* harmony import */ var _src_directives_ripple_VRipple_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_directives_ripple_VRipple_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
// Styles
 // Utilities



const DELAY_RIPPLE = 80;

function transform(el, value) {
  el.style.transform = value;
  el.style.webkitTransform = value;
}

function opacity(el, value) {
  el.style.opacity = value.toString();
}

function isTouchEvent(e) {
  return e.constructor.name === 'TouchEvent';
}

function isKeyboardEvent(e) {
  return e.constructor.name === 'KeyboardEvent';
}

const calculate = (e, el, value = {}) => {
  let localX = 0;
  let localY = 0;

  if (!isKeyboardEvent(e)) {
    const offset = el.getBoundingClientRect();
    const target = isTouchEvent(e) ? e.touches[e.touches.length - 1] : e;
    localX = target.clientX - offset.left;
    localY = target.clientY - offset.top;
  }

  let radius = 0;
  let scale = 0.3;

  if (el._ripple && el._ripple.circle) {
    scale = 0.15;
    radius = el.clientWidth / 2;
    radius = value.center ? radius : radius + Math.sqrt((localX - radius) ** 2 + (localY - radius) ** 2) / 4;
  } else {
    radius = Math.sqrt(el.clientWidth ** 2 + el.clientHeight ** 2) / 2;
  }

  const centerX = `${(el.clientWidth - radius * 2) / 2}px`;
  const centerY = `${(el.clientHeight - radius * 2) / 2}px`;
  const x = value.center ? centerX : `${localX - radius}px`;
  const y = value.center ? centerY : `${localY - radius}px`;
  return {
    radius,
    scale,
    x,
    y,
    centerX,
    centerY
  };
};

const ripples = {
  /* eslint-disable max-statements */
  show(e, el, value = {}) {
    if (!el._ripple || !el._ripple.enabled) {
      return;
    }

    const container = document.createElement('span');
    const animation = document.createElement('span');
    container.appendChild(animation);
    container.className = 'v-ripple__container';

    if (value.class) {
      container.className += ` ${value.class}`;
    }

    const {
      radius,
      scale,
      x,
      y,
      centerX,
      centerY
    } = calculate(e, el, value);
    const size = `${radius * 2}px`;
    animation.className = 'v-ripple__animation';
    animation.style.width = size;
    animation.style.height = size;
    el.appendChild(container);
    const computed = window.getComputedStyle(el);

    if (computed && computed.position === 'static') {
      el.style.position = 'relative';
      el.dataset.previousPosition = 'static';
    }

    animation.classList.add('v-ripple__animation--enter');
    animation.classList.add('v-ripple__animation--visible');
    transform(animation, `translate(${x}, ${y}) scale3d(${scale},${scale},${scale})`);
    opacity(animation, 0);
    animation.dataset.activated = String(performance.now());
    setTimeout(() => {
      animation.classList.remove('v-ripple__animation--enter');
      animation.classList.add('v-ripple__animation--in');
      transform(animation, `translate(${centerX}, ${centerY}) scale3d(1,1,1)`);
      opacity(animation, 0.25);
    }, 0);
  },

  hide(el) {
    if (!el || !el._ripple || !el._ripple.enabled) return;
    const ripples = el.getElementsByClassName('v-ripple__animation');
    if (ripples.length === 0) return;
    const animation = ripples[ripples.length - 1];
    if (animation.dataset.isHiding) return;else animation.dataset.isHiding = 'true';
    const diff = performance.now() - Number(animation.dataset.activated);
    const delay = Math.max(250 - diff, 0);
    setTimeout(() => {
      animation.classList.remove('v-ripple__animation--in');
      animation.classList.add('v-ripple__animation--out');
      opacity(animation, 0);
      setTimeout(() => {
        const ripples = el.getElementsByClassName('v-ripple__animation');

        if (ripples.length === 1 && el.dataset.previousPosition) {
          el.style.position = el.dataset.previousPosition;
          delete el.dataset.previousPosition;
        }

        animation.parentNode && el.removeChild(animation.parentNode);
      }, 300);
    }, delay);
  }

};

function isRippleEnabled(value) {
  return typeof value === 'undefined' || !!value;
}

function rippleShow(e) {
  const value = {};
  const element = e.currentTarget;
  if (!element || !element._ripple || element._ripple.touched) return;

  if (isTouchEvent(e)) {
    element._ripple.touched = true;
    element._ripple.isTouch = true;
  } else {
    // It's possible for touch events to fire
    // as mouse events on Android/iOS, this
    // will skip the event call if it has
    // already been registered as touch
    if (element._ripple.isTouch) return;
  }

  value.center = element._ripple.centered || isKeyboardEvent(e);

  if (element._ripple.class) {
    value.class = element._ripple.class;
  }

  if (isTouchEvent(e)) {
    // already queued that shows or hides the ripple
    if (element._ripple.showTimerCommit) return;

    element._ripple.showTimerCommit = () => {
      ripples.show(e, element, value);
    };

    element._ripple.showTimer = window.setTimeout(() => {
      if (element && element._ripple && element._ripple.showTimerCommit) {
        element._ripple.showTimerCommit();

        element._ripple.showTimerCommit = null;
      }
    }, DELAY_RIPPLE);
  } else {
    ripples.show(e, element, value);
  }
}

function rippleHide(e) {
  const element = e.currentTarget;
  if (!element || !element._ripple) return;
  window.clearTimeout(element._ripple.showTimer); // The touch interaction occurs before the show timer is triggered.
  // We still want to show ripple effect.

  if (e.type === 'touchend' && element._ripple.showTimerCommit) {
    element._ripple.showTimerCommit();

    element._ripple.showTimerCommit = null; // re-queue ripple hiding

    element._ripple.showTimer = setTimeout(() => {
      rippleHide(e);
    });
    return;
  }

  window.setTimeout(() => {
    if (element._ripple) {
      element._ripple.touched = false;
    }
  });
  ripples.hide(element);
}

function rippleCancelShow(e) {
  const element = e.currentTarget;
  if (!element || !element._ripple) return;

  if (element._ripple.showTimerCommit) {
    element._ripple.showTimerCommit = null;
  }

  window.clearTimeout(element._ripple.showTimer);
}

let keyboardRipple = false;

function keyboardRippleShow(e) {
  if (!keyboardRipple && (e.keyCode === _util_helpers__WEBPACK_IMPORTED_MODULE_1__[/* keyCodes */ "u"].enter || e.keyCode === _util_helpers__WEBPACK_IMPORTED_MODULE_1__[/* keyCodes */ "u"].space)) {
    keyboardRipple = true;
    rippleShow(e);
  }
}

function keyboardRippleHide(e) {
  keyboardRipple = false;
  rippleHide(e);
}

function updateRipple(el, binding, wasEnabled) {
  const enabled = isRippleEnabled(binding.value);

  if (!enabled) {
    ripples.hide(el);
  }

  el._ripple = el._ripple || {};
  el._ripple.enabled = enabled;
  const value = binding.value || {};

  if (value.center) {
    el._ripple.centered = true;
  }

  if (value.class) {
    el._ripple.class = binding.value.class;
  }

  if (value.circle) {
    el._ripple.circle = value.circle;
  }

  if (enabled && !wasEnabled) {
    el.addEventListener('touchstart', rippleShow, {
      passive: true
    });
    el.addEventListener('touchend', rippleHide, {
      passive: true
    });
    el.addEventListener('touchmove', rippleCancelShow, {
      passive: true
    });
    el.addEventListener('touchcancel', rippleHide);
    el.addEventListener('mousedown', rippleShow);
    el.addEventListener('mouseup', rippleHide);
    el.addEventListener('mouseleave', rippleHide);
    el.addEventListener('keydown', keyboardRippleShow);
    el.addEventListener('keyup', keyboardRippleHide); // Anchor tags can be dragged, causes other hides to fail - #1537

    el.addEventListener('dragstart', rippleHide, {
      passive: true
    });
  } else if (!enabled && wasEnabled) {
    removeListeners(el);
  }
}

function removeListeners(el) {
  el.removeEventListener('mousedown', rippleShow);
  el.removeEventListener('touchstart', rippleShow);
  el.removeEventListener('touchend', rippleHide);
  el.removeEventListener('touchmove', rippleCancelShow);
  el.removeEventListener('touchcancel', rippleHide);
  el.removeEventListener('mouseup', rippleHide);
  el.removeEventListener('mouseleave', rippleHide);
  el.removeEventListener('keydown', keyboardRippleShow);
  el.removeEventListener('keyup', keyboardRippleHide);
  el.removeEventListener('dragstart', rippleHide);
}

function directive(el, binding, node) {
  updateRipple(el, binding, false);

  if (false) {}
}

function unbind(el) {
  delete el._ripple;
  removeListeners(el);
}

function update(el, binding) {
  if (binding.value === binding.oldValue) {
    return;
  }

  const wasEnabled = isRippleEnabled(binding.oldValue);
  updateRipple(el, binding, wasEnabled);
}

const Ripple = {
  bind: directive,
  unbind,
  update
};
/* harmony default export */ __webpack_exports__["a"] = (Ripple);

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return factory; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

function factory(prop = 'value', event = 'input') {
  return vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
    name: 'toggleable',
    model: {
      prop,
      event
    },
    props: {
      [prop]: {
        required: false
      }
    },

    data() {
      return {
        isActive: !!this[prop]
      };
    },

    watch: {
      [prop](val) {
        this.isActive = !!val;
      },

      isActive(val) {
        !!val !== this[prop] && this.$emit(event, val);
      }

    }
  });
}
/* eslint-disable-next-line @typescript-eslint/no-redeclare */

const Toggleable = factory();
/* harmony default export */ __webpack_exports__["a"] = (Toggleable);

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return inject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return provide; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);



function generateWarning(child, parent) {
  return () => Object(_util_console__WEBPACK_IMPORTED_MODULE_1__[/* consoleWarn */ "c"])(`The ${child} component must be used inside a ${parent}`);
}

function inject(namespace, child, parent) {
  const defaultImpl = child && parent ? {
    register: generateWarning(child, parent),
    unregister: generateWarning(child, parent)
  } : null;
  return vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
    name: 'registrable-inject',
    inject: {
      [namespace]: {
        default: defaultImpl
      }
    }
  });
}
function provide(namespace, self = false) {
  return vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
    name: 'registrable-provide',

    provide() {
      return {
        [namespace]: self ? this : {
          register: this.register,
          unregister: this.unregister
        }
      };
    }

  });
}

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/**
 * This mixin provides `attrs$` and `listeners$` to work around
 * vue bug https://github.com/vuejs/vue/issues/10115
 */

function makeWatcher(property) {
  return function (val, oldVal) {
    for (const attr in oldVal) {
      if (!Object.prototype.hasOwnProperty.call(val, attr)) {
        this.$delete(this.$data[property], attr);
      }
    }

    for (const attr in val) {
      this.$set(this.$data[property], attr, val[attr]);
    }
  };
}

/* harmony default export */ __webpack_exports__["a"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  data: () => ({
    attrs$: {},
    listeners$: {}
  }),

  created() {
    // Work around unwanted re-renders: https://github.com/vuejs/vue/issues/10115
    // Make sure to use `attrs$` instead of `$attrs` (confusing right?)
    this.$watch('$attrs', makeWatcher('attrs$'), {
      immediate: true
    });
    this.$watch('$listeners', makeWatcher('listeners$'), {
      immediate: true
    });
  }

}));

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _directives_ripple__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
 // Directives

 // Utilities


/* harmony default export */ __webpack_exports__["a"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  name: 'routable',
  directives: {
    Ripple: _directives_ripple__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]
  },
  props: {
    activeClass: String,
    append: Boolean,
    disabled: Boolean,
    exact: {
      type: Boolean,
      default: undefined
    },
    exactActiveClass: String,
    link: Boolean,
    href: [String, Object],
    to: [String, Object],
    nuxt: Boolean,
    replace: Boolean,
    ripple: {
      type: [Boolean, Object],
      default: null
    },
    tag: String,
    target: String
  },
  data: () => ({
    isActive: false,
    proxyClass: ''
  }),
  computed: {
    classes() {
      const classes = {};
      if (this.to) return classes;
      if (this.activeClass) classes[this.activeClass] = this.isActive;
      if (this.proxyClass) classes[this.proxyClass] = this.isActive;
      return classes;
    },

    computedRipple() {
      var _this$ripple;

      return (_this$ripple = this.ripple) != null ? _this$ripple : !this.disabled && this.isClickable;
    },

    isClickable() {
      if (this.disabled) return false;
      return Boolean(this.isLink || this.$listeners.click || this.$listeners['!click'] || this.$attrs.tabindex);
    },

    isLink() {
      return this.to || this.href || this.link;
    },

    styles: () => ({})
  },
  watch: {
    $route: 'onRouteChange'
  },
  methods: {
    click(e) {
      this.$emit('click', e);
    },

    generateRouteLink() {
      let exact = this.exact;
      let tag;
      const data = {
        attrs: {
          tabindex: 'tabindex' in this.$attrs ? this.$attrs.tabindex : undefined
        },
        class: this.classes,
        style: this.styles,
        props: {},
        directives: [{
          name: 'ripple',
          value: this.computedRipple
        }],
        [this.to ? 'nativeOn' : 'on']: { ...this.$listeners,
          click: this.click
        },
        ref: 'link'
      };

      if (typeof this.exact === 'undefined') {
        exact = this.to === '/' || this.to === Object(this.to) && this.to.path === '/';
      }

      if (this.to) {
        // Add a special activeClass hook
        // for component level styles
        let activeClass = this.activeClass;
        let exactActiveClass = this.exactActiveClass || activeClass;

        if (this.proxyClass) {
          activeClass = `${activeClass} ${this.proxyClass}`.trim();
          exactActiveClass = `${exactActiveClass} ${this.proxyClass}`.trim();
        }

        tag = this.nuxt ? 'nuxt-link' : 'router-link';
        Object.assign(data.props, {
          to: this.to,
          exact,
          activeClass,
          exactActiveClass,
          append: this.append,
          replace: this.replace
        });
      } else {
        tag = this.href && 'a' || this.tag || 'div';
        if (tag === 'a' && this.href) data.attrs.href = this.href;
      }

      if (this.target) data.attrs.target = this.target;
      return {
        tag,
        data
      };
    },

    onRouteChange() {
      if (!this.to || !this.$refs.link || !this.$route) return;
      const activeClass = `${this.activeClass} ${this.proxyClass || ''}`.trim();
      const path = `_vnode.data.class.${activeClass}`;
      this.$nextTick(() => {
        /* istanbul ignore else */
        if (Object(_util_helpers__WEBPACK_IMPORTED_MODULE_2__[/* getObjectValueByPath */ "m"])(this.$refs.link, path)) {
          this.toggle();
        }
      });
    },

    toggle: () => {}
  }
}));

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["a"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  name: 'sizeable',
  props: {
    large: Boolean,
    small: Boolean,
    xLarge: Boolean,
    xSmall: Boolean
  },
  computed: {
    medium() {
      return Boolean(!this.xSmall && !this.small && !this.large && !this.xLarge);
    },

    sizeableClasses() {
      return {
        'v-size--x-small': this.xSmall,
        'v-size--small': this.small,
        'v-size--default': this.medium,
        'v-size--large': this.large,
        'v-size--x-large': this.xLarge
      };
    }

  }
}));

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return factory; });
/* harmony import */ var _registrable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48);
// Mixins

function factory(namespace, child, parent) {
  return Object(_registrable__WEBPACK_IMPORTED_MODULE_0__[/* inject */ "a"])(namespace, child, parent).extend({
    name: 'groupable',
    props: {
      activeClass: {
        type: String,

        default() {
          if (!this[namespace]) return undefined;
          return this[namespace].activeClass;
        }

      },
      disabled: Boolean
    },

    data() {
      return {
        isActive: false
      };
    },

    computed: {
      groupClasses() {
        if (!this.activeClass) return {};
        return {
          [this.activeClass]: this.isActive
        };
      }

    },

    created() {
      this[namespace] && this[namespace].register(this);
    },

    beforeDestroy() {
      this[namespace] && this[namespace].unregister(this);
    },

    methods: {
      toggle() {
        this.$emit('change');
      }

    }
  });
}
/* eslint-disable-next-line @typescript-eslint/no-redeclare */

const Groupable = factory('itemGroup');
/* unused harmony default export */ var _unused_webpack_default_export = (Groupable);

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return factory; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);


const availableProps = {
  absolute: Boolean,
  bottom: Boolean,
  fixed: Boolean,
  left: Boolean,
  right: Boolean,
  top: Boolean
};
function factory(selected = []) {
  return vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
    name: 'positionable',
    props: selected.length ? Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__[/* filterObjectOnKeys */ "k"])(availableProps, selected) : availableProps
  });
}
/* harmony default export */ __webpack_exports__["a"] = (factory()); // Add a `*` before the second `/`

/* Tests /
let single = factory(['top']).extend({
  created () {
    this.top
    this.bottom
    this.absolute
  }
})

let some = factory(['top', 'bottom']).extend({
  created () {
    this.top
    this.bottom
    this.absolute
  }
})

let all = factory().extend({
  created () {
    this.top
    this.bottom
    this.absolute
    this.foobar
  }
})
/**/

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VSheet_VSheet_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(104);
/* harmony import */ var _src_components_VSheet_VSheet_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VSheet_VSheet_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mixins_binds_attrs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50);
/* harmony import */ var _mixins_colorable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43);
/* harmony import */ var _mixins_elevatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73);
/* harmony import */ var _mixins_measurable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(76);
/* harmony import */ var _mixins_roundable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(61);
/* harmony import */ var _mixins_themeable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(42);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(41);
// Styles
 // Mixins






 // Helpers


/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(_mixins_binds_attrs__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], _mixins_colorable__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], _mixins_elevatable__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], _mixins_measurable__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], _mixins_roundable__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], _mixins_themeable__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"]).extend({
  name: 'v-sheet',
  props: {
    outlined: Boolean,
    shaped: Boolean,
    tag: {
      type: String,
      default: 'div'
    }
  },
  computed: {
    classes() {
      return {
        'v-sheet': true,
        'v-sheet--outlined': this.outlined,
        'v-sheet--shaped': this.shaped,
        ...this.themeClasses,
        ...this.elevationClasses,
        ...this.roundedClasses
      };
    },

    styles() {
      return this.measurableStyles;
    }

  },

  render(h) {
    const data = {
      class: this.classes,
      style: this.styles,
      on: this.listeners$
    };
    return h(this.tag, this.setBackgroundColor(this.color, data), this.$slots.default);
  }

}));

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  name: 'roundable',
  props: {
    rounded: [Boolean, String],
    tile: Boolean
  },
  computed: {
    roundedClasses() {
      const composite = [];
      const rounded = typeof this.rounded === 'string' ? String(this.rounded) : this.rounded === true;

      if (this.tile) {
        composite.push('rounded-0');
      } else if (typeof rounded === 'string') {
        const values = rounded.split(' ');

        for (const value of values) {
          composite.push(`rounded-${value}`);
        }
      } else if (rounded) {
        composite.push('rounded');
      }

      return composite.length > 0 ? {
        [composite.join(' ')]: true
      } : {};
    }

  }
}));

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VProgressCircular_VProgressCircular_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(108);
/* harmony import */ var _src_components_VProgressCircular_VProgressCircular_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VProgressCircular_VProgressCircular_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mixins_colorable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
// Styles
 // Mixins

 // Utils


/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (_mixins_colorable__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].extend({
  name: 'v-progress-circular',
  props: {
    button: Boolean,
    indeterminate: Boolean,
    rotate: {
      type: [Number, String],
      default: 0
    },
    size: {
      type: [Number, String],
      default: 32
    },
    width: {
      type: [Number, String],
      default: 4
    },
    value: {
      type: [Number, String],
      default: 0
    }
  },
  data: () => ({
    radius: 20
  }),
  computed: {
    calculatedSize() {
      return Number(this.size) + (this.button ? 8 : 0);
    },

    circumference() {
      return 2 * Math.PI * this.radius;
    },

    classes() {
      return {
        'v-progress-circular--indeterminate': this.indeterminate,
        'v-progress-circular--button': this.button
      };
    },

    normalizedValue() {
      if (this.value < 0) {
        return 0;
      }

      if (this.value > 100) {
        return 100;
      }

      return parseFloat(this.value);
    },

    strokeDashArray() {
      return Math.round(this.circumference * 1000) / 1000;
    },

    strokeDashOffset() {
      return (100 - this.normalizedValue) / 100 * this.circumference + 'px';
    },

    strokeWidth() {
      return Number(this.width) / +this.size * this.viewBoxSize * 2;
    },

    styles() {
      return {
        height: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_2__[/* convertToUnit */ "e"])(this.calculatedSize),
        width: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_2__[/* convertToUnit */ "e"])(this.calculatedSize)
      };
    },

    svgStyles() {
      return {
        transform: `rotate(${Number(this.rotate)}deg)`
      };
    },

    viewBoxSize() {
      return this.radius / (1 - Number(this.width) / +this.size);
    }

  },
  methods: {
    genCircle(name, offset) {
      return this.$createElement('circle', {
        class: `v-progress-circular__${name}`,
        attrs: {
          fill: 'transparent',
          cx: 2 * this.viewBoxSize,
          cy: 2 * this.viewBoxSize,
          r: this.radius,
          'stroke-width': this.strokeWidth,
          'stroke-dasharray': this.strokeDashArray,
          'stroke-dashoffset': offset
        }
      });
    },

    genSvg() {
      const children = [this.indeterminate || this.genCircle('underlay', 0), this.genCircle('overlay', this.strokeDashOffset)];
      return this.$createElement('svg', {
        style: this.svgStyles,
        attrs: {
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: `${this.viewBoxSize} ${this.viewBoxSize} ${2 * this.viewBoxSize} ${2 * this.viewBoxSize}`
        }
      }, children);
    },

    genInfo() {
      return this.$createElement('div', {
        staticClass: 'v-progress-circular__info'
      }, this.$slots.default);
    }

  },

  render(h) {
    return h('div', this.setTextColor(this.color, {
      staticClass: 'v-progress-circular',
      attrs: {
        role: 'progressbar',
        'aria-valuemin': 0,
        'aria-valuemax': 100,
        'aria-valuenow': this.indeterminate ? undefined : this.normalizedValue
      },
      class: this.classes,
      style: this.styles,
      on: this.$listeners
    }), [this.genSvg(), this.genInfo()]);
  }

}));

/***/ }),

/***/ 66:
/***/ (function(module, exports) {

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function installComponents (component, components) {
  var options = typeof component.exports === 'function'
    ? component.exports.extendOptions
    : component.options

  if (typeof component.exports === 'function') {
    options.components = component.exports.options.components
  }

  options.components = options.components || {}

  for (var i in components) {
    options.components[i] = options.components[i] || components[i]
  }
}


/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["a"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  name: 'elevatable',
  props: {
    elevation: [Number, String]
  },
  computed: {
    computedElevation() {
      return this.elevation;
    },

    elevationClasses() {
      const elevation = this.computedElevation;
      if (elevation == null) return {};
      if (isNaN(parseInt(elevation))) return {};
      return {
        [`elevation-${this.elevation}`]: true
      };
    }

  }
}));

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _VSheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59);


/* harmony default export */ __webpack_exports__["a"] = (_VSheet__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);
// Helpers
 // Types


/* harmony default export */ __webpack_exports__["a"] = (vue__WEBPACK_IMPORTED_MODULE_1___default.a.extend({
  name: 'measurable',
  props: {
    height: [Number, String],
    maxHeight: [Number, String],
    maxWidth: [Number, String],
    minHeight: [Number, String],
    minWidth: [Number, String],
    width: [Number, String]
  },
  computed: {
    measurableStyles() {
      const styles = {};
      const height = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_0__[/* convertToUnit */ "e"])(this.height);
      const minHeight = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_0__[/* convertToUnit */ "e"])(this.minHeight);
      const minWidth = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_0__[/* convertToUnit */ "e"])(this.minWidth);
      const maxHeight = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_0__[/* convertToUnit */ "e"])(this.maxHeight);
      const maxWidth = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_0__[/* convertToUnit */ "e"])(this.maxWidth);
      const width = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_0__[/* convertToUnit */ "e"])(this.width);
      if (height) styles.height = height;
      if (minHeight) styles.minHeight = minHeight;
      if (minWidth) styles.minWidth = minWidth;
      if (maxHeight) styles.maxHeight = maxHeight;
      if (maxWidth) styles.maxWidth = maxWidth;
      if (width) styles.width = width;
      return styles;
    }

  }
}));

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VBtn/VBtn.sass
var VBtn = __webpack_require__(107);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSheet/index.js
var VSheet = __webpack_require__(74);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VProgressCircular/VProgressCircular.js
var VProgressCircular = __webpack_require__(62);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VProgressCircular/index.js


/* harmony default export */ var components_VProgressCircular = (VProgressCircular["a" /* default */]);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/groupable/index.js
var groupable = __webpack_require__(55);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/toggleable/index.js
var toggleable = __webpack_require__(47);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/elevatable/index.js
var elevatable = __webpack_require__(73);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/positionable/index.js
var positionable = __webpack_require__(58);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/routable/index.js
var routable = __webpack_require__(51);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/sizeable/index.js
var sizeable = __webpack_require__(54);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mixins.js
var mixins = __webpack_require__(41);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/console.js
var console = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
// Styles
 // Extensions

 // Components

 // Mixins






 // Utilities



const baseMixins = Object(mixins["a" /* default */])(VSheet["a" /* default */], routable["a" /* default */], positionable["a" /* default */], sizeable["a" /* default */], Object(groupable["a" /* factory */])('btnToggle'), Object(toggleable["b" /* factory */])('inputValue')
/* @vue/component */
);
/* harmony default export */ var VBtn_VBtn = __webpack_exports__["a"] = (baseMixins.extend().extend({
  name: 'v-btn',
  props: {
    activeClass: {
      type: String,

      default() {
        if (!this.btnToggle) return '';
        return this.btnToggle.activeClass;
      }

    },
    block: Boolean,
    depressed: Boolean,
    fab: Boolean,
    icon: Boolean,
    loading: Boolean,
    outlined: Boolean,
    plain: Boolean,
    retainFocusOnClick: Boolean,
    rounded: Boolean,
    tag: {
      type: String,
      default: 'button'
    },
    text: Boolean,
    tile: Boolean,
    type: {
      type: String,
      default: 'button'
    },
    value: null
  },
  data: () => ({
    proxyClass: 'v-btn--active'
  }),
  computed: {
    classes() {
      return {
        'v-btn': true,
        ...routable["a" /* default */].options.computed.classes.call(this),
        'v-btn--absolute': this.absolute,
        'v-btn--block': this.block,
        'v-btn--bottom': this.bottom,
        'v-btn--disabled': this.disabled,
        'v-btn--is-elevated': this.isElevated,
        'v-btn--fab': this.fab,
        'v-btn--fixed': this.fixed,
        'v-btn--has-bg': this.hasBg,
        'v-btn--icon': this.icon,
        'v-btn--left': this.left,
        'v-btn--loading': this.loading,
        'v-btn--outlined': this.outlined,
        'v-btn--plain': this.plain,
        'v-btn--right': this.right,
        'v-btn--round': this.isRound,
        'v-btn--rounded': this.rounded,
        'v-btn--router': this.to,
        'v-btn--text': this.text,
        'v-btn--tile': this.tile,
        'v-btn--top': this.top,
        ...this.themeClasses,
        ...this.groupClasses,
        ...this.elevationClasses,
        ...this.sizeableClasses
      };
    },

    computedElevation() {
      if (this.disabled) return undefined;
      return elevatable["a" /* default */].options.computed.computedElevation.call(this);
    },

    computedRipple() {
      var _this$ripple;

      const defaultRipple = this.icon || this.fab ? {
        circle: true
      } : true;
      if (this.disabled) return false;else return (_this$ripple = this.ripple) != null ? _this$ripple : defaultRipple;
    },

    hasBg() {
      return !this.text && !this.plain && !this.outlined && !this.icon;
    },

    isElevated() {
      return Boolean(!this.icon && !this.text && !this.outlined && !this.depressed && !this.disabled && !this.plain && (this.elevation == null || Number(this.elevation) > 0));
    },

    isRound() {
      return Boolean(this.icon || this.fab);
    },

    styles() {
      return { ...this.measurableStyles
      };
    }

  },

  created() {
    const breakingProps = [['flat', 'text'], ['outline', 'outlined'], ['round', 'rounded']];
    /* istanbul ignore next */

    breakingProps.forEach(([original, replacement]) => {
      if (this.$attrs.hasOwnProperty(original)) Object(console["a" /* breaking */])(original, replacement, this);
    });
  },

  methods: {
    click(e) {
      // TODO: Remove this in v3
      !this.retainFocusOnClick && !this.fab && e.detail && this.$el.blur();
      this.$emit('click', e);
      this.btnToggle && this.toggle();
    },

    genContent() {
      return this.$createElement('span', {
        staticClass: 'v-btn__content'
      }, this.$slots.default);
    },

    genLoader() {
      return this.$createElement('span', {
        class: 'v-btn__loader'
      }, this.$slots.loader || [this.$createElement(components_VProgressCircular, {
        props: {
          indeterminate: true,
          size: 23,
          width: 2
        }
      })]);
    }

  },

  render(h) {
    const children = [this.genContent(), this.loading && this.genLoader()];
    const {
      tag,
      data
    } = this.generateRouteLink();
    const setColor = this.hasBg ? this.setBackgroundColor : this.setTextColor;

    if (tag === 'button') {
      data.attrs.type = this.type;
      data.attrs.disabled = this.disabled;
    }

    data.attrs.value = ['string', 'number'].includes(typeof this.value) ? this.value : JSON.stringify(this.value);
    return h(tag, this.disabled ? data : setColor(this.color, data), children);
  }

}));

/***/ }),

/***/ 92:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ })

};;
//# sourceMappingURL=_id.js.map