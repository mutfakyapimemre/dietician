exports.ids = [3];
exports.modules = {

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/includes/Header.vue?vue&type=template&id=243d9403&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('client-only',[_c('div',{staticClass:"header"},[_c('nav',{staticClass:"navbar navbar-expand-lg header-nav fixed-top"},[_c('div',{staticClass:"navbar-header"},[_c('a',{attrs:{"id":"mobile_btn","href":"javascript:void(0);"}},[_c('span',{staticClass:"bar-icon"},[_c('span'),_vm._v(" "),_c('span'),_vm._v(" "),_c('span')])]),_vm._v(" "),_c('nuxt-link',{staticClass:"navbar-brand logo",attrs:{"to":"/","tag":"a"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/img/logo.png","alt":"Logo"}})])],1),_vm._v(" "),_c('div',{staticClass:"main-menu-wrapper"},[_c('div',{staticClass:"menu-header"},[_c('nuxt-link',{staticClass:"menu-logo",attrs:{"to":"/","tag":"a"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/img/logo.png","alt":"Logo"}})]),_vm._v(" "),_c('a',{staticClass:"menu-close",attrs:{"id":"menu_close","href":"javascript:void(0);"}},[_c('i',{staticClass:"fa fa-times"})])],1),_vm._v(" "),_c('ul',{staticClass:"main-nav"},[_c('li',[_c('nuxt-link',{attrs:{"to":"/","tag":"a"}},[_vm._v("Anasayfa")])],1),_vm._v(" "),_c('li',[_c('nuxt-link',{attrs:{"to":"/dieticians","tag":"a"}},[_vm._v("Diyetisyenler")])],1),_vm._v(" "),_c('li',[_c('nuxt-link',{attrs:{"to":"/calorie","tag":"a"}},[_vm._v("Kaç Kalori?")])],1),_vm._v(" "),_c('li',[_c('nuxt-link',{attrs:{"to":"/recipe-categories","tag":"a"}},[_vm._v("Yemek Tarifleri")])],1),_vm._v(" "),_c('li',[_c('nuxt-link',{attrs:{"to":"/criterias","tag":"a"}},[_vm._v("Ölçütler")])],1),_vm._v(" "),_c('li',[_c('nuxt-link',{attrs:{"to":"/exercises","tag":"a"}},[_vm._v("Egzersiz")])],1)])]),_vm._v(" "),(
          _vm.isAuthenticated &&
          _vm.userData !== null &&
          _vm.userData !== undefined &&
          _vm.userData !== ''
        )?_c('ul',{staticClass:"nav main-nav header-navbar-rht"},[_c('li',{staticClass:"has-submenu nav-item my-auto py-auto"},[_c('a',{staticClass:"my-auto py-auto",attrs:{"href":"javascript:void(0)"}},[_c('img',{staticClass:"rounded-circle my-auto py-auto",attrs:{"src":_vm.img_url +
                '/public/storage/' +
                (_vm.userData.status === 'dietician'
                  ? _vm.userData.profile_photo
                  : _vm.userData.img_url),"width":"55","height":"55","alt":_vm.userData.name}}),_vm._v(" "),(_vm.userData !== null)?_c('span',{staticClass:"my-auto py-auto"},[_vm._v(_vm._s(_vm.userData.name))]):_vm._e(),_vm._v(" "),_c('i',{staticClass:"fa fa-chevron-down"})]),_vm._v(" "),_c('ul',{staticClass:"submenu"},[_c('li',[_c('nuxt-link',{staticClass:"nav-link",attrs:{"to":"/profile","tag":"a"}},[_vm._v("Profil")])],1),_vm._v(" "),_c('li',[(
                  _vm.isAuthenticated &&
                  _vm.userData !== null &&
                  _vm.userData !== undefined &&
                  _vm.userData !== '' &&
                  _vm.userData.status === 'dietician'
                )?_c('nuxt-link',{attrs:{"to":"/dietician-panel","tag":"a"}},[_vm._v("Diyetisyen Paneli")]):_vm._e()],1),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"javascript:void(0)"},on:{"click":function($event){$event.preventDefault();return _vm.logout($event)}}},[_vm._v("Çıkış Yap")])])])])]):_vm._e(),_vm._v(" "),(!_vm.isAuthenticated)?_c('ul',{staticClass:"nav header-navbar-rht"},[_c('li',[_c('nuxt-link',{staticClass:"nav-link header-login",attrs:{"to":"/login","tag":"a"}},[_vm._v("Giriş Yap / Kayıt Ol")])],1)]):_vm._e()])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/includes/Header.vue?vue&type=template&id=243d9403&

// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__(2);
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);

// EXTERNAL MODULE: external "js-base64"
var external_js_base64_ = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/includes/Header.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var Headervue_type_script_lang_js_ = ({
  computed: {
    img_url() {
      return "https://api.klinikdiyetisyen.com/";
    }

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

  },

  data() {
    return {
      userData: external_js_cookie_default.a.get("userData") !== null && external_js_cookie_default.a.get("userData") !== undefined && external_js_cookie_default.a.get("userData") !== "" ? JSON.parse(external_js_base64_["Base64"].decode(external_js_cookie_default.a.get("userData"))) : null,
      isAuthenticated: external_js_cookie_default.a.get("userData") !== null && external_js_cookie_default.a.get("userData") !== undefined && external_js_cookie_default.a.get("userData") !== "" ? JSON.parse(external_js_base64_["Base64"].decode(external_js_cookie_default.a.get("userData"))).api_token : null,
      siteSettings: this.$store.getters.siteSettings
    };
  }

});
// CONCATENATED MODULE: ./components/includes/Header.vue?vue&type=script&lang=js&
 /* harmony default export */ var includes_Headervue_type_script_lang_js_ = (Headervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(13);

// CONCATENATED MODULE: ./components/includes/Header.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  includes_Headervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "810c4836"
  
)

/* harmony default export */ var Header = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/includes/Footer.vue?vue&type=template&id=4a1635f7&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('client-only',[_c('footer',{staticClass:"footer"},[_c('div',{staticClass:"footer-top"},[_c('div',{staticClass:"container-fluid"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3"},[_c('div',{staticClass:"footer-widget footer-about"},[_c('div',{staticClass:"footer-logo"},[_c('img',{attrs:{"src":"/img/footer-logo.png","alt":"logo"}})]),_vm._v(" "),_c('div',{staticClass:"footer-about-content"},[_c('p',[_vm._v("\n                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed\n                  do eiusmod tempor incididunt ut labore et dolore magna\n                  aliqua.\n                ")]),_vm._v(" "),_c('div',{staticClass:"social-icon"},[_c('ul',[_c('li',[_c('a',{attrs:{"href":"#","target":"_blank"}},[_c('i',{staticClass:"fa fa-facebook-f"})])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#","target":"_blank"}},[_c('i',{staticClass:"fa fa-twitter"})])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#","target":"_blank"}},[_c('i',{staticClass:"fa fa-linkedin"})])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#","target":"_blank"}},[_c('i',{staticClass:"fa fa-instagram"})])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#","target":"_blank"}},[_c('i',{staticClass:"fa fa-dribbble"})])])])])])])]),_vm._v(" "),_c('div',{staticClass:"col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3"},[_c('div',{staticClass:"footer-widget footer-menu"},[_c('h2',{staticClass:"footer-title"},[_vm._v("For Patients")]),_vm._v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"search.html"}},[_vm._v("Search for Doctors")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"login.html"}},[_vm._v("Login")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"register.html"}},[_vm._v("Register")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"booking.html"}},[_vm._v("Booking")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"patient-dashboard.html"}},[_vm._v("Patient Dashboard")])])])])]),_vm._v(" "),_c('div',{staticClass:"col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3"},[_c('div',{staticClass:"footer-widget footer-menu"},[_c('h2',{staticClass:"footer-title"},[_vm._v("For Doctors")]),_vm._v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"appointments.html"}},[_vm._v("Appointments")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"chat.html"}},[_vm._v("Chat")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"login.html"}},[_vm._v("Login")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"doctor-register.html"}},[_vm._v("Register")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"doctor-dashboard.html"}},[_vm._v("Doctor Dashboard")])])])])]),_vm._v(" "),_c('div',{staticClass:"col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3"},[_c('div',{staticClass:"footer-widget footer-contact"},[_c('h2',{staticClass:"footer-title"},[_vm._v("Contact Us")]),_vm._v(" "),_c('div',{staticClass:"footer-contact-info"},[_c('div',{staticClass:"footer-address"},[_c('span',[_c('i',{staticClass:"fa fa-map-marker-alt"})]),_vm._v(" "),_c('p',[_vm._v("\n                    3556 Beech Street, San Francisco,\n                    "),_c('br'),_vm._v("California, CA 94108\n                  ")])]),_vm._v(" "),_c('p',[_c('i',{staticClass:"fa fa-phone-alt"}),_vm._v("\n                  +1 315 369 5943\n                ")]),_vm._v(" "),_c('p',{staticClass:"mb-0"},[_c('i',{staticClass:"fa fa-envelope"}),_vm._v("\n                  doccure@example.com\n                ")])])])])])])]),_vm._v(" "),_c('div',{staticClass:"footer-bottom"},[_c('div',{staticClass:"container-fluid"},[_c('div',{staticClass:"copyright"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 py-auto my-auto"},[_c('div',{staticClass:"copyright-text py-auto my-auto"},[_c('p',{staticClass:"mb-0 py-auto my-auto"},[_vm._v("\n                  © 2020\n                  "),_c('nuxt-link',{attrs:{"to":"/","tag":"a"}},[_vm._v("Diyetisyen Klinik")]),_vm._v(". Tüm\n                  Hakları Saklıdır.\n                ")],1)])]),_vm._v(" "),_c('div',{staticClass:"col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 text-center py-auto my-auto"},[_c('a',{staticClass:"text-center py-auto my-auto",attrs:{"href":"https://mutfakyapim.com","target":"_blank"}},[_c('img',{staticClass:"py-auto my-auto",attrs:{"src":"/img/my-logo.png","alt":"Mutfak Yapım","height":"50"}})])]),_vm._v(" "),_c('div',{staticClass:"col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 py-auto my-auto"},[_c('div',{staticClass:"copyright-menu py-auto my-auto"},[_c('ul',{staticClass:"policy-menu"},[_c('li',[_c('a',{attrs:{"href":"term-condition.html"}},[_vm._v("Terms and Conditions")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"privacy-policy.html"}},[_vm._v("Policy")])])])])])])])])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/includes/Footer.vue?vue&type=template&id=4a1635f7&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(13);

// CONCATENATED MODULE: ./components/includes/Footer.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "c371101a"
  
)

/* harmony default export */ var Footer = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Footer: __webpack_require__(167).default})


/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=template&id=848c4cd6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Header'),_vm._ssrNode(" "),_c('Nuxt'),_vm._ssrNode(" "),_c('Footer')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./layouts/default.vue?vue&type=template&id=848c4cd6&

// EXTERNAL MODULE: ./components/includes/Header.vue + 4 modules
var Header = __webpack_require__(162);

// EXTERNAL MODULE: ./components/includes/Footer.vue + 2 modules
var Footer = __webpack_require__(167);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//


/* harmony default export */ var defaultvue_type_script_lang_js_ = ({
  head() {
    return {
      link: [{
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico",
        ssr: false
      }, {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.3/css/bootstrap.min.css",
        ssr: false
      }, {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css",
        ssr: false
      }, {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/v4-shims.min.css",
        ssr: false
      }, {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.css",
        ssr: false
      }, {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css",
        ssr: false
      }, {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-daterangepicker/3.1/daterangepicker.min.css",
        ssr: false
      }, {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/select2/4.1.0-beta.1/css/select2.min.css",
        ssr: false
      }, {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-tagsinput/0.8.0/bootstrap-tagsinput.css",
        ssr: false
      }, {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.7.2/min/dropzone.min.css",
        ssr: false
      }, {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datetimepicker/4.17.47/css/bootstrap-datetimepicker.min.css",
        ssr: false
      }, {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/select2/4.1.0-beta.1/css/select2.min.css",
        ssr: false
      }, {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/4.2.0/bootstrap/main.min.css",
        ssr: false
      }, {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/4.2.0/core/main.min.css",
        ssr: false
      }, {
        rel: "stylesheet",
        href: "/css/style.css",
        ssr: false
      }],
      script: [{
        src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js",
        ssr: false
      }, {
        src: "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.3/js/bootstrap.bundle.min.js",
        ssr: false
      }, {
        src: "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment-with-locales.min.js",
        ssr: false
      }, {
        src: "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datetimepicker/4.17.47/js/bootstrap-datetimepicker.min.js",
        ssr: false
      }, {
        src: "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-daterangepicker/3.0.5/daterangepicker.min.js",
        ssr: false
      }, {
        src: "https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js",
        ssr: false
      }, {
        src: "https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/4.2.0/core/main.min.js",
        ssr: false
      }, {
        src: "https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/4.2.0/bootstrap/main.min.js",
        ssr: false
      }, {
        src: "https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/4.2.0/core/locales-all.min.js",
        ssr: false
      }, {
        src: "/js/ResizeSensor.js",
        ssr: false
      }, {
        src: "/js/theia-sticky-sidebar.js",
        ssr: false
      }, {
        src: "https://cdnjs.cloudflare.com/ajax/libs/select2/4.1.0-beta.1/js/select2.full.min.js",
        ssr: false
      }, {
        src: "https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js",
        ssr: false
      }, {
        src: "https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.7.2/min/dropzone.min.js",
        ssr: false
      }, {
        src: "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-tagsinput/0.8.0/bootstrap-tagsinput.min.js",
        ssr: false
      }, {
        src: "https://cdnjs.cloudflare.com/ajax/libs/jquery-circle-progress/1.2.2/circle-progress.min.js",
        ssr: false
      }, {
        src: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js",
        ssr: false
      }, {
        src: "https://cdnjs.cloudflare.com/ajax/libs/jQuery-slimScroll/1.3.8/jquery.slimscroll.min.js",
        ssr: false
      }, {
        src: "/js/profile-settings.js",
        ssr: false
      }, {
        src: "/js/script.js",
        ssr: false
      }]
    };
  },

  components: {
    Header: Header["default"],
    Footer: Footer["default"]
  }
});
// CONCATENATED MODULE: ./layouts/default.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_defaultvue_type_script_lang_js_ = (defaultvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(13);

// CONCATENATED MODULE: ./layouts/default.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  layouts_defaultvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "129c8f71"
  
)

/* harmony default export */ var layouts_default = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Header: __webpack_require__(162).default,Footer: __webpack_require__(167).default})


/***/ })

};;
//# sourceMappingURL=default.js.map