exports.ids = [69];
exports.modules = {

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VApp_VApp_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70);
/* harmony import */ var _src_components_VApp_VApp_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VApp_VApp_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mixins_themeable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41);
// Styles
 // Mixins

 // Utilities


/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_mixins_themeable__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]).extend({
  name: 'v-app',
  props: {
    dark: {
      type: Boolean,
      default: undefined
    },
    id: {
      type: String,
      default: 'app'
    },
    light: {
      type: Boolean,
      default: undefined
    }
  },
  computed: {
    isDark() {
      return this.$vuetify.theme.dark;
    }

  },

  beforeCreate() {
    if (!this.$vuetify || this.$vuetify === this.$root) {
      throw new Error('Vuetify is not properly initialized, see https://vuetifyjs.com/getting-started/quick-start#bootstrapping-the-vuetify-object');
    }
  },

  render(h) {
    const wrapper = h('div', {
      staticClass: 'v-application--wrap'
    }, this.$slots.default);
    return h('div', {
      staticClass: 'v-application',
      class: {
        'v-application--is-rtl': this.$vuetify.rtl,
        'v-application--is-ltr': !this.$vuetify.rtl,
        ...this.themeClasses
      },
      attrs: {
        'data-app': true
      },
      domProps: {
        id: this.id
      }
    }, [wrapper]);
  }

}));

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/includes/Sidebar.vue?vue&type=template&id=32e6660a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('client-only',[_c('div',{staticClass:"profile-sidebar"},[_c('div',{staticClass:"widget-profile pro-widget-content"},[_c('div',{staticClass:"profile-info-widget"},[_c('nuxt-link',{staticClass:"booking-doc-img",attrs:{"to":"/profile","tag":"a"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":_vm.img_url +
              '/public/storage/' +
              (_vm.userData.img_url !== undefined &&
              _vm.userData.img_url !== null &&
              _vm.userData.img_url !== ''
                ? _vm.userData.img_url
                : null),"alt":_vm.userData.name}})]),_vm._v(" "),_c('div',{staticClass:"profile-det-info"},[_c('h3',[_vm._v(_vm._s(_vm.userData.name))]),_vm._v(" "),_c('div',{staticClass:"patient-details"},[_c('h5',{staticClass:"mb-0"},[_c('i',{staticClass:"fa fa-map-marker-alt"}),_vm._v(" "+_vm._s(_vm.userData.city)+",\n              "+_vm._s(_vm.userData.town)+"\n            ")])])])],1)]),_vm._v(" "),_c('div',{staticClass:"dashboard-widget"},[_c('nav',{staticClass:"dashboard-menu"},[_c('ul',[_c('nuxt-link',{attrs:{"to":"/profile","tag":"li","exact-active-class":"active"}},[_c('a',[_c('i',{staticClass:"fa fa-user-cog"}),_vm._v(" "),_c('span',[_vm._v("Kayıt Bilgileri")])])]),_vm._v(" "),_c('nuxt-link',{attrs:{"to":"/profile/diet-list","tag":"li","active-class":"active"}},[_c('a',[_c('i',{staticClass:"fa fa-calendar-check"}),_vm._v(" "),_c('span',[_vm._v("Diyet Listesi")])])]),_vm._v(" "),_c('nuxt-link',{attrs:{"to":"/profile/my-dietician","tag":"li","active-class":"active"}},[_c('a',[_c('i',{staticClass:"fa fa-user-md"}),_vm._v(" "),_c('span',[_vm._v("Diyetisyenim")])])]),_vm._v(" "),_c('nuxt-link',{attrs:{"to":"/profile/liked-foods-list","tag":"li","active-class":"active"}},[_c('a',[_c('i',{staticClass:"fa fa-drumstick-bite"}),_vm._v(" "),_c('span',[_vm._v("Sevdiğim Besinler / Yemekler")])])]),_vm._v(" "),_c('nuxt-link',{attrs:{"to":"/profile/unliked-foods-list","tag":"li","active-class":"active"}},[_c('a',[_c('i',{staticClass:"fa fa-stroopwafel"}),_vm._v(" "),_c('span',[_vm._v("Sevmediğim Besinler / Yemekler")])])]),_vm._v(" "),_c('nuxt-link',{attrs:{"to":"/profile/allergen-foods-list","tag":"li","active-class":"active"}},[_c('a',[_c('i',{staticClass:"fa fa-cloud-meatball"}),_vm._v(" "),_c('span',[_vm._v("Alerjen Olduğum Besinler / Yemekler")])])]),_vm._v(" "),_c('nuxt-link',{attrs:{"to":"/profile/messages","tag":"li","active-class":"active"}},[_c('a',[_c('i',{staticClass:"fa fa-comments"}),_vm._v(" "),_c('span',[_vm._v("Mesajlar")]),_vm._v(" "),_c('small',{staticClass:"unread-msg"},[_vm._v("23")])])]),_vm._v(" "),_c('nuxt-link',{attrs:{"to":"/profile/social-media","tag":"li","active-class":"active"}},[_c('a',[_c('i',{staticClass:"fa fa-share-alt"}),_vm._v(" "),_c('span',[_vm._v("Sosyal Medya")])])]),_vm._v(" "),_c('nuxt-link',{attrs:{"to":"/profile/password-update","tag":"li","active-class":"active"}},[_c('a',[_c('i',{staticClass:"fa fa-lock"}),_vm._v(" "),_c('span',[_vm._v("Şifre Güncelle")])])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"javascript:void(0)"},on:{"click":function($event){$event.preventDefault();return _vm.logout($event)}}},[_c('i',{staticClass:"fa fa-sign-out-alt"}),_vm._v(" "),_c('span',[_vm._v("Çıkış Yap")])])])],1)])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/includes/Sidebar.vue?vue&type=template&id=32e6660a&

// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__(2);
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);

// EXTERNAL MODULE: external "js-base64"
var external_js_base64_ = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/includes/Sidebar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var Sidebarvue_type_script_lang_js_ = ({
  middleware: ["session-control", "guest"],
  layout: "default",
  computed: {
    img_url() {
      return "https://api.klinikdiyetisyen.com/";
    }

  },

  data() {
    return {
      userData: external_js_cookie_default.a.get("userData") !== null && external_js_cookie_default.a.get("userData") !== undefined && external_js_cookie_default.a.get("userData") !== "" ? JSON.parse(external_js_base64_["Base64"].decode(external_js_cookie_default.a.get("userData"))) : this.$store.getters.loggedInUser !== undefined && this.$store.getters.loggedInUser !== null && this.$store.getters.loggedInUser !== "" ? this.$store.getters.loggedInUser : null
    };
  },

  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$izitoast.success({
        title: "Başarılı!",
        message: "Başarıyla Çıkış Yaptınız Yönlendiriliyorsunuz.",
        position: "topCenter"
      });
      setTimeout(() => {
        this.$router.go(decodeURIComponent("/"));
      }, 2000);
    }

  }
});
// CONCATENATED MODULE: ./components/includes/Sidebar.vue?vue&type=script&lang=js&
 /* harmony default export */ var includes_Sidebarvue_type_script_lang_js_ = (Sidebarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(13);

// CONCATENATED MODULE: ./components/includes/Sidebar.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  includes_Sidebarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "595bfa98"
  
)

/* harmony default export */ var Sidebar = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/includes/DieticianSidebar.vue?vue&type=template&id=785c0695&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('client-only',[_c('div',{staticClass:"profile-sidebar"},[_c('div',{staticClass:"widget-profile pro-widget-content text-center justify-content-center"},[_c('div',{staticClass:"profile-info-widget text-center justify-content-center"},[_c('nuxt-link',{staticClass:"booking-doc-img",attrs:{"to":"/profile"}},[_c('img',{staticClass:"img-fluid text-center justify-content-center",attrs:{"src":_vm.img_url + '/public/storage/' + _vm.userData.profile_photo,"alt":_vm.userData.name}})]),_vm._v(" "),_c('div',{staticClass:"profile-det-info"},[_c('h3',[_vm._v(_vm._s(_vm.userData.name))]),_vm._v(" "),_c('div',{staticClass:"clinic-details text-center justify-content-center"},[_c('h5',{staticClass:"mb-2"},[_c('i',{staticClass:"fa fa-map-marker-alt"}),_vm._v(" "+_vm._s(_vm.userData.city)+",\n              "+_vm._s(_vm.userData.town)+"\n            ")]),_vm._v(" "),_c('h5',{staticClass:"mb-2"},[_c('i',{staticClass:"fa fa-hospital"}),_vm._v(" "+_vm._s(_vm.userData.company_city)+",\n              "+_vm._s(_vm.userData.company_town)+"\n            ")]),_vm._v(" "),_c('h5',{staticClass:"mb-2 font-weight-bold"},[_vm._v("Klinik'ten Görüntüler")]),_vm._v(" "),(
                _vm.userData.clinic_photos !== '' &&
                _vm.userData.clinic_photos !== null &&
                _vm.userData.clinic_photos !== undefined &&
                _vm.userData.clinic_photos.length > 0
              )?_c('ul',{staticClass:"clinic-gallery text-center justify-content-center px-0"},_vm._l((_vm.userData.clinic_photos),function(item,index){return _c('li',{key:index},[(index <= 3)?_c('a',{attrs:{"href":_vm.img_url + '/public/storage/' + item.img_url,"data-fancybox":"gallery"}},[(index <= 3)?_c('img',{attrs:{"src":_vm.img_url + '/public/storage/' + item.img_url,"alt":"Klinik'ten Görüntüler"}}):_vm._e()]):_vm._e()])}),0):_vm._e()])])],1)]),_vm._v(" "),_c('div',{staticClass:"dashboard-widget"},[_c('nav',{staticClass:"dashboard-menu"},[_c('ul',[_c('nuxt-link',{attrs:{"to":"/profile","tag":"li","exact-active-class":"active"}},[_c('a',[_c('i',{staticClass:"fa fa-user-cog"}),_vm._v(" "),_c('span',[_vm._v("Kayıt Bilgileri")])])]),_vm._v(" "),_c('nuxt-link',{attrs:{"to":"/profile/patient-list","tag":"li","active-class":"active"}},[_c('a',[_c('i',{staticClass:"fa fa-calendar-check"}),_vm._v(" "),_c('span',[_vm._v("Hasta Listesi")])])]),_vm._v(" "),_c('nuxt-link',{attrs:{"to":"/profile/news-list","tag":"li","active-class":"active"}},[_c('a',[_c('i',{staticClass:"fa fa-newspaper"}),_vm._v(" "),_c('span',[_vm._v("Haberler")])])]),_vm._v(" "),_c('nuxt-link',{attrs:{"to":"/profile/food-recipes-list","tag":"li","active-class":"active"}},[_c('a',[_c('i',{staticClass:"fa fa-utensils"}),_vm._v(" "),_c('span',[_vm._v("Yemek Tarifleri")])])]),_vm._v(" "),_c('nuxt-link',{attrs:{"to":"/profile/messages","tag":"li","active-class":"active"}},[_c('a',[_c('i',{staticClass:"fa fa-comments"}),_vm._v(" "),_c('span',[_vm._v("Mesajlar")]),_vm._v(" "),_c('small',{staticClass:"unread-msg"},[_vm._v("23")])])]),_vm._v(" "),_c('nuxt-link',{attrs:{"to":"/profile/social-media","tag":"li","active-class":"active"}},[_c('a',[_c('i',{staticClass:"fa fa-share-alt"}),_vm._v(" "),_c('span',[_vm._v("Sosyal Medya")])])]),_vm._v(" "),_c('nuxt-link',{attrs:{"to":"/profile/password-update","tag":"li","active-class":"active"}},[_c('a',[_c('i',{staticClass:"fa fa-lock"}),_vm._v(" "),_c('span',[_vm._v("Şifre Güncelle")])])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"javascript:void(0)"},on:{"click":function($event){$event.preventDefault();return _vm.logout($event)}}},[_c('i',{staticClass:"fa fa-sign-out-alt"}),_vm._v(" "),_c('span',[_vm._v("Çıkış Yap")])])])],1)])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/includes/DieticianSidebar.vue?vue&type=template&id=785c0695&

// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__(2);
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);

// EXTERNAL MODULE: external "js-base64"
var external_js_base64_ = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/includes/DieticianSidebar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var DieticianSidebarvue_type_script_lang_js_ = ({
  middleware: ["session-control", "guest"],
  layout: "default",
  computed: {
    img_url() {
      return "https://api.klinikdiyetisyen.com/";
    }

  },

  data() {
    return {
      data: {},
      userData: external_js_cookie_default.a.get("userData") !== null && external_js_cookie_default.a.get("userData") !== undefined && external_js_cookie_default.a.get("userData") !== "" ? JSON.parse(external_js_base64_["Base64"].decode(external_js_cookie_default.a.get("userData"))) : this.$store.getters.loggedInUser !== undefined && this.$store.getters.loggedInUser !== null && this.$store.getters.loggedInUser !== "" ? this.$store.getters.loggedInUser : null
    };
  },

  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$izitoast.success({
        title: "Başarılı!",
        message: "Başarıyla Çıkış Yaptınız Yönlendiriliyorsunuz.",
        position: "topCenter"
      });
      setTimeout(() => {
        this.$router.go(decodeURIComponent("/"));
      }, 2000);
    }

  }
});
// CONCATENATED MODULE: ./components/includes/DieticianSidebar.vue?vue&type=script&lang=js&
 /* harmony default export */ var includes_DieticianSidebarvue_type_script_lang_js_ = (DieticianSidebarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(13);

// CONCATENATED MODULE: ./components/includes/DieticianSidebar.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  includes_DieticianSidebarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1d51108c"
  
)

/* harmony default export */ var DieticianSidebar = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile/password-update.vue?vue&type=template&id=78b69853&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-app',{staticClass:"h-auto"},[_c('div',{staticClass:"breadcrumb-bar"},[_c('div',{staticClass:"container-fluid"},[_c('div',{staticClass:"row align-items-center"},[_c('div',{staticClass:"col-12 col-sm-12 col-md-12 col-12 col-xl-12"},[_c('nav',{staticClass:"page-breadcrumb",attrs:{"aria-label":"breadcrumb"}},[_c('ol',{staticClass:"breadcrumb pl-0"},[_c('li',{staticClass:"breadcrumb-item"},[_c('nuxt-link',{attrs:{"to":"/","tag":"a"}},[_vm._v("Anasayfa")])],1),_vm._v(" "),_c('li',{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[_vm._v("\n                Profil\n              ")])])]),_vm._v(" "),_c('h2',{staticClass:"breadcrumb-title"},[_vm._v("Profil")])])])])]),_vm._v(" "),_c('div',{staticClass:"content"},[_c('div',{staticClass:"container-fluid"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-12 col-sm-12 col-md-5 col-lg-4 col-xl-3 theiaStickySidebar"},[(_vm.userData.status !== 'dietician')?_c('Sidebar'):(_vm.userData.status === 'dietician')?_c('DieticianSidebar'):_vm._e()],1),_vm._v(" "),_c('div',{staticClass:"col-12 col-sm-12 col-md-7 col-lg-8 col-xl-9"},[_c('div',{staticClass:"card card-table"},[_c('div',{staticClass:"card-header"},[_c('div',{staticClass:"card-title my-auto"},[_c('h4',{staticClass:"my-auto"},[_vm._v("Şifre Güncelle")])])]),_vm._v(" "),_c('div',{staticClass:"card-body"},[_c('ValidationObserver',{scopedSlots:_vm._u([{key:"default",fn:function(ref){
var handleSubmit = ref.handleSubmit;
return [_c('form',{ref:"passwordUpdateForm",attrs:{"enctype":"multipart/form-data"},on:{"submit":function($event){$event.preventDefault();return handleSubmit(_vm.updatePassword)}}},[_c('div',{staticClass:"table-responsive"},[_c('table',{staticClass:"table table-striped table-hover table-center table-borderless mb-0",staticStyle:{"border-top":"none"}},[_c('tbody',[_c('tr',[_c('td',[_c('b',[_vm._v("Mevcut Şifreniz :")])]),_vm._v(" "),_c('td',{attrs:{"colspan":"2"}},[_c('ValidationProvider',{attrs:{"name":"Mevcut Şifreniz","rules":"required"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
return [_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.current_password),expression:"current_password"}],staticClass:"form-control",attrs:{"type":"password","name":"current_password","id":"current_password","required":""},domProps:{"value":(_vm.current_password)},on:{"input":function($event){if($event.target.composing){ return; }_vm.current_password=$event.target.value}}}),_vm._v(" "),_c('small',{staticClass:"font-weight-bold text-danger"},[_vm._v(_vm._s(errors[0]))])]}}],null,true)})],1)]),_vm._v(" "),_c('tr',[_c('td',[_c('b',[_vm._v("Yeni Şifreniz :")])]),_vm._v(" "),_c('td',{attrs:{"colspan":"2"}},[_c('ValidationProvider',{attrs:{"name":"Yeni Şifreniz","rules":"required"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
return [_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.password),expression:"password"}],staticClass:"form-control",attrs:{"type":"password","name":"password","id":"password","required":""},domProps:{"value":(_vm.password)},on:{"input":function($event){if($event.target.composing){ return; }_vm.password=$event.target.value}}}),_vm._v(" "),_c('small',{staticClass:"font-weight-bold text-danger"},[_vm._v(_vm._s(errors[0]))])]}}],null,true)})],1)]),_vm._v(" "),_c('tr',[_c('td',[_c('b',[_vm._v("Tekrar Yeni Şifreniz :")])]),_vm._v(" "),_c('td',{attrs:{"colspan":"2"}},[_c('ValidationProvider',{attrs:{"name":"Tekrar Yeni Şifreniz","rules":"required"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
return [_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.password_confirmation),expression:"password_confirmation"}],staticClass:"form-control",attrs:{"type":"password","name":"password_confirmation","id":"password_confirmation","required":""},domProps:{"value":(_vm.password_confirmation)},on:{"input":function($event){if($event.target.composing){ return; }_vm.password_confirmation=$event.target.value}}}),_vm._v(" "),_c('small',{staticClass:"font-weight-bold text-danger"},[_vm._v(_vm._s(errors[0]))])]}}],null,true)})],1)])]),_vm._v(" "),_c('tfoot',[_c('tr',[_c('td',{attrs:{"colspan":"3"}},[_c('div',{staticClass:"form-group"},[_c('button',{staticClass:"btn btn-green-light float-right",attrs:{"type":"submit"}},[_vm._v("\n                                Şifremi Güncelle\n                              ")])])])])])])])])]}}])})],1)])])])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/profile/password-update.vue?vue&type=template&id=78b69853&

// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__(2);
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);

// EXTERNAL MODULE: external "js-base64"
var external_js_base64_ = __webpack_require__(7);

// EXTERNAL MODULE: external "jquery"
var external_jquery_ = __webpack_require__(38);

// EXTERNAL MODULE: external "vee-validate"
var external_vee_validate_ = __webpack_require__(37);

// EXTERNAL MODULE: ./components/includes/Sidebar.vue + 4 modules
var Sidebar = __webpack_require__(157);

// EXTERNAL MODULE: ./components/includes/DieticianSidebar.vue + 4 modules
var DieticianSidebar = __webpack_require__(160);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile/password-update.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var password_updatevue_type_script_lang_js_ = ({
  middleware: ["session-control", "guest"],
  name: "profile",
  components: {
    ValidationObserver: external_vee_validate_["ValidationObserver"],
    ValidationProvider: external_vee_validate_["ValidationProvider"],
    Sidebar: Sidebar["default"],
    DieticianSidebar: DieticianSidebar["default"]
  },
  computed: {
    img_url() {
      return "https://api.klinikdiyetisyen.com/";
    }

  },

  mounted() {
    let inputs = document.querySelectorAll(".v-file-input input");
    [...inputs].forEach(input => {
      input.remove();
    });
  },

  data() {
    return {
      password: null,
      password_confirmation: null,
      current_password: null,
      userData: external_js_cookie_default.a.get("userData") !== null && external_js_cookie_default.a.get("userData") !== undefined && external_js_cookie_default.a.get("userData") !== "" ? JSON.parse(external_js_base64_["Base64"].decode(external_js_cookie_default.a.get("userData"))) : this.$store.getters.loggedInUser !== undefined && this.$store.getters.loggedInUser !== null && this.$store.getters.loggedInUser !== "" ? this.$store.getters.loggedInUser : null
    };
  },

  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$izitoast.success({
        title: "Başarılı!",
        message: "Başarıyla Çıkış Yaptınız Yönlendiriliyorsunuz.",
        position: "topCenter"
      });
      setTimeout(() => {
        this.$router.go(decodeURIComponent("/"));
      }, 2000);
    },

    updatePassword() {
      let formData = new FormData(this.$refs.passwordUpdateForm);
      formData.append("api_token", this.userData.api_token);
      this.$axios.post("https://api.klinikdiyetisyen.com/api/" + (this.userData.status === "dietician" ? "dietician/profile/pass_update" : "users/pass_update"), formData, {
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
          external_js_cookie_default.a.set("userData", external_js_base64_["Base64"].encode(JSON.stringify(response.data.data)));
          localStorage.setItem("userData", external_js_base64_["Base64"].encode(JSON.stringify(response.data.data)));
          setTimeout(() => {
            this.$router.go(decodeURIComponent("/profile"));
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
// CONCATENATED MODULE: ./pages/profile/password-update.vue?vue&type=script&lang=js&
 /* harmony default export */ var profile_password_updatevue_type_script_lang_js_ = (password_updatevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(66);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VApp/VApp.js
var VApp = __webpack_require__(136);

// CONCATENATED MODULE: ./pages/profile/password-update.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  profile_password_updatevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "77692333"
  
)

/* harmony default export */ var password_update = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents_default()(component, {Sidebar: __webpack_require__(157).default,DieticianSidebar: __webpack_require__(160).default})


/* vuetify-loader */


installComponents_default()(component, {VApp: VApp["a" /* default */]})


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

/***/ 70:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ })

};;
//# sourceMappingURL=password-update.js.map