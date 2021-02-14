exports.ids = [3];
exports.modules = {

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/includes/Header.vue?vue&type=template&id=52f841c6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"header"},[_vm._ssrNode("<nav class=\"navbar navbar-expand-lg header-nav fixed-top\">","</nav>",[_vm._ssrNode("<div class=\"navbar-header\">","</div>",[_vm._ssrNode("<a id=\"mobile_btn\" href=\"javascript:void(0);\"><span class=\"bar-icon\"><span></span> <span></span> <span></span></span></a> "),_c('nuxt-link',{staticClass:"navbar-brand logo",attrs:{"to":"/","tag":"a"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/img/logo.png","alt":"Logo"}})])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"main-menu-wrapper\">","</div>",[_vm._ssrNode("<div class=\"menu-header\">","</div>",[_c('nuxt-link',{staticClass:"menu-logo",attrs:{"to":"/","tag":"a"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/img/logo.png","alt":"Logo"}})]),_vm._ssrNode(" <a id=\"menu_close\" href=\"javascript:void(0);\" class=\"menu-close\"><i class=\"fa fa-times\"></i></a>")],2),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"main-nav\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/","tag":"a"}},[_vm._v("Anasayfa")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/dieticians","tag":"a"}},[_vm._v("Diyetisyenler")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/calorie","tag":"a"}},[_vm._v("Kaç Kalori?")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/recipe-categories","tag":"a"}},[_vm._v("Yemek Tarifleri")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/criterias","tag":"a"}},[_vm._v("Ölçütler")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/exercises","tag":"a"}},[_vm._v("Egzersiz")])],1)],2)],2),_vm._ssrNode(" "),(!_vm.isEmpty(_vm.userData) && _vm.isAuthenticated)?_vm._ssrNode("<ul class=\"nav main-nav header-navbar-rht\">","</ul>",[_vm._ssrNode("<li class=\"has-submenu nav-item my-auto py-auto\">","</li>",[_vm._ssrNode(((_vm.userData !== null)?("<a href=\"javascript:void(0)\" class=\"my-auto py-auto\"><img"+(_vm._ssrAttr("src",_vm.img_url +
							'/public/storage/' +
							(_vm.userData.status === 'dietician'
								? _vm.userData.profile_photo
								: _vm.userData.img_url)))+" width=\"55\" height=\"55\""+(_vm._ssrAttr("alt",_vm.userData.name))+" class=\"rounded-circle my-auto py-auto\"> <span class=\"my-auto py-auto\">"+_vm._ssrEscape(_vm._s(_vm.userData.name))+"</span> <i class=\"fa fa-chevron-down\"></i></a>"):"<!---->")+" "),_vm._ssrNode("<ul class=\"submenu\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"to":"/profile","tag":"a"}},[_vm._v("Profil")])],1),_vm._ssrNode(" "),(
							!_vm.isEmpty(_vm.userData) &&
							_vm.isAuthenticated &&
							_vm.userData.status === 'dietician'
						)?_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/dietician-panel","tag":"a"}},[_vm._v("Diyetisyen Paneli")])],1):_vm._e(),_vm._ssrNode(" <li><a href=\"javascript:void(0)\">Çıkış Yap</a></li>")],2)],2)]):_vm._ssrNode("<ul class=\"nav header-navbar-rht\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{staticClass:"nav-link header-login",attrs:{"to":"/login","tag":"a"}},[_vm._v("Giriş Yap / Kayıt Ol")])],1)])],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/includes/Header.vue?vue&type=template&id=52f841c6&

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


/* harmony default export */ var Headervue_type_script_lang_js_ = ({
  computed: {
    img_url() {
      return "https://api.klinikdiyetisyen.com/";
    }

  },
  methods: {
    isEmpty(obj) {
      if (typeof obj == "number") return false;else if (typeof obj == "string") return obj.length == 0;else if (Array.isArray(obj)) return obj.length == 0;else if (typeof obj == "object") return obj == null || Object.keys(obj).length == 0;else if (typeof obj == "boolean") return false;else return !obj;
    },

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
      userData: !this.isEmpty(external_js_cookie_default.a.get("userData")) ? JSON.parse(external_js_base64_["Base64"].decode(external_js_cookie_default.a.get("userData"))) : null,
      isAuthenticated: !this.isEmpty(external_js_cookie_default.a.get("userData")) ? JSON.parse(external_js_base64_["Base64"].decode(external_js_cookie_default.a.get("userData"))).api_token : null,
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

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/includes/Footer.vue?vue&type=template&id=89ea7aa6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',{staticClass:"footer"},[_vm._ssrNode("<div class=\"footer-top\"><div class=\"container-fluid\"><div class=\"row\"><div class=\"col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3\"><div class=\"footer-widget footer-about\"><div class=\"footer-logo\"><img src=\"/img/footer-logo.png\" alt=\"logo\"></div> <div class=\"footer-about-content\"><p>\n\t\t\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipiscing elit, sed\n\t\t\t\t\t\t\t\tdo eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\t\t\t\t\t\t\t</p> <div class=\"social-icon\"><ul><li><a href=\"#\" target=\"_blank\"><i class=\"fa fa-facebook-f\"></i></a></li> <li><a href=\"#\" target=\"_blank\"><i class=\"fa fa-twitter\"></i></a></li> <li><a href=\"#\" target=\"_blank\"><i class=\"fa fa-linkedin\"></i></a></li> <li><a href=\"#\" target=\"_blank\"><i class=\"fa fa-instagram\"></i></a></li> <li><a href=\"#\" target=\"_blank\"><i class=\"fa fa-dribbble\"></i></a></li></ul></div></div></div></div> <div class=\"col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3\"><div class=\"footer-widget footer-menu\"><h2 class=\"footer-title\">For Patients</h2> <ul><li><a href=\"search.html\">Search for Doctors</a></li> <li><a href=\"login.html\">Login</a></li> <li><a href=\"register.html\">Register</a></li> <li><a href=\"booking.html\">Booking</a></li> <li><a href=\"patient-dashboard.html\">Patient Dashboard</a></li></ul></div></div> <div class=\"col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3\"><div class=\"footer-widget footer-menu\"><h2 class=\"footer-title\">For Doctors</h2> <ul><li><a href=\"appointments.html\">Appointments</a></li> <li><a href=\"chat.html\">Chat</a></li> <li><a href=\"login.html\">Login</a></li> <li><a href=\"doctor-register.html\">Register</a></li> <li><a href=\"doctor-dashboard.html\">Doctor Dashboard</a></li></ul></div></div> <div class=\"col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3\"><div class=\"footer-widget footer-contact\"><h2 class=\"footer-title\">Contact Us</h2> <div class=\"footer-contact-info\"><div class=\"footer-address\"><span><i class=\"fa fa-map-marker-alt\"></i></span> <p>\n\t\t\t\t\t\t\t\t\t3556 Beech Street, San Francisco,\n\t\t\t\t\t\t\t\t\t<br>California, CA 94108\n\t\t\t\t\t\t\t\t</p></div> <p><i class=\"fa fa-phone-alt\"></i>\n\t\t\t\t\t\t\t\t+1 315 369 5943\n\t\t\t\t\t\t\t</p> <p class=\"mb-0\"><i class=\"fa fa-envelope\"></i>\n\t\t\t\t\t\t\t\tdoccure@example.com\n\t\t\t\t\t\t\t</p></div></div></div></div></div></div> "),_vm._ssrNode("<div class=\"footer-bottom\">","</div>",[_vm._ssrNode("<div class=\"container-fluid\">","</div>",[_vm._ssrNode("<div class=\"copyright\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 py-auto my-auto\">","</div>",[_vm._ssrNode("<div class=\"copyright-text py-auto my-auto\">","</div>",[_vm._ssrNode("<p class=\"mb-0 py-auto my-auto\">","</p>",[_vm._ssrNode("\n\t\t\t\t\t\t\t\t© 2020\n\t\t\t\t\t\t\t\t"),_c('nuxt-link',{attrs:{"to":"/","tag":"a"}},[_vm._v("Diyetisyen Klinik")]),_vm._ssrNode(". Tüm\n\t\t\t\t\t\t\t\tHakları Saklıdır.\n\t\t\t\t\t\t\t")],2)])]),_vm._ssrNode(" <div class=\"col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 text-center py-auto my-auto\"><a href=\"https://mutfakyapim.com\" target=\"_blank\" class=\"text-center py-auto my-auto\"><img src=\"/img/my-logo.png\" alt=\"Mutfak Yapım\" height=\"50\" class=\"py-auto my-auto\"></a></div> <div class=\"col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 py-auto my-auto\"><div class=\"copyright-menu py-auto my-auto\"><ul class=\"policy-menu\"><li><a href=\"term-condition.html\">Terms and Conditions</a></li> <li><a href=\"privacy-policy.html\">Policy</a></li></ul></div></div>")],2)])])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/includes/Footer.vue?vue&type=template&id=89ea7aa6&

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
installComponents(component, {Footer: __webpack_require__(175).default})


/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=template&id=848c4cd6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Header'),_vm._ssrNode(" "),_c('Nuxt'),_vm._ssrNode(" "),_c('Footer')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./layouts/default.vue?vue&type=template&id=848c4cd6&

// EXTERNAL MODULE: ./components/includes/Header.vue + 4 modules
var Header = __webpack_require__(172);

// EXTERNAL MODULE: ./components/includes/Footer.vue + 2 modules
var Footer = __webpack_require__(175);

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
installComponents(component, {Header: __webpack_require__(172).default,Footer: __webpack_require__(175).default})


/***/ })

};;
//# sourceMappingURL=default.js.map