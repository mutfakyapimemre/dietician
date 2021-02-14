exports.ids = [20];
exports.modules = {

/***/ 117:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 141:
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

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=0d42bd28&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-app',[_c('div',{staticClass:"main-wrapper"},[_c('section',{staticClass:"section section-search pt-5 bg-white"},[_c('div',{staticClass:"container-fluid"},[_c('div',{staticClass:"banner-wrapper"},[_c('div',{staticClass:"banner-header text-center"},[_c('h1',[_vm._v("Diyetisyen, Besin, Yemek Tarifi Ara")]),_vm._v(" "),_c('p',[_c('small',[_vm._v("En profesyonel diyetisyenleri keşfet, sağlıklı yemek\n                tarifleri al & senin için en uygun olanı tercih et.")])])]),_vm._v(" "),_c('div',{staticClass:"search-box justify-content-center"},[_c('form',{staticClass:"justify-content-center",attrs:{"onsubmit":"return false"}},[_c('div',{staticClass:"form-group search-info w-100"},[_c('input',{staticClass:"form-control rounded-0",attrs:{"type":"text","placeholder":"Diyetisyen, Besin, Yemek Tarifi Ara"},on:{"keyup":function($event){$event.preventDefault();return _vm.goToSearch()}}})])])])])])]),_vm._v(" "),_c('section',{staticClass:"section section-blogs"},[_c('client-only',[(!_vm.isEmpty(_vm.sliders))?_c('carousel',{attrs:{"navs":true,"dots":false,"autoplay":true,"items":1,"loop":true}},_vm._l((_vm.sliders),function(slide,index){return _c('img',{key:index,staticClass:"img-fluid",attrs:{"src":_vm.base_img_url + '/public/storage/' + slide.img_url,"alt":slide.title}})}),0):_vm._e()],1)],1),_vm._v(" "),(!_vm.isEmpty(_vm.doctors))?_c('section',{staticClass:"section section-doctor slider bg-white"},[_c('div',{staticClass:"container-fluid"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4"},[_c('div',{staticClass:"section-header"},[_c('h2',[_vm._v("Diyetisyenlerimizden Randevu Alın")]),_vm._v(" "),_c('p',[_vm._v("Lorem Ipsum is simply dummy text")])]),_vm._v(" "),_c('div',{staticClass:"about-content"},[_c('nuxt-link',{staticClass:"btn rounded-0 btn-info-light",attrs:{"to":"/dieticians","tag":"a"}},[_vm._v("Diyetisyenlerimiz")])],1)]),_vm._v(" "),_c('div',{staticClass:"col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8"},[(!_vm.isEmpty(_vm.doctors))?_c('div',{staticClass:"doctor-slider bg-white"},[_c('client-only',[_c('carousel',{attrs:{"navs":true,"dots":false,"autoplay":true,"items":4,"loop":true,"responsive":{
                    0: { items: 1, nav: true },
                    578: { items: 1, nav: true },
                    768: { items: 2, nav: true },
                    991: { items: 3, nav: true },
                    1400: { items: 4, nav: true },
                  }}},_vm._l((_vm.doctors),function(doctor,index){return _c('div',{key:index,staticClass:"h-100 profile-widget mx-1"},[_c('div',{staticClass:"doc-img"},[_c('nuxt-link',{attrs:{"tag":"a","to":'/profile/' + doctor.slug}},[_c('v-avatar',{attrs:{"size":"273","tile":""}},[_c('img',{attrs:{"alt":doctor.name,"src":_vm.base_img_url +
                              '/public/storage/' +
                              (!_vm.isEmpty(doctor.profile_photo.img_url) ? doctor.profile_photo.img_url : null)}})])],1)],1),_vm._v(" "),_c('div',{staticClass:"pro-content h-100"},[_c('h3',{staticClass:"title"},[_c('nuxt-link',{attrs:{"tag":"a","to":'/profile/' + doctor.slug}},[_vm._v(_vm._s(doctor.name))]),_vm._v(" "),_c('i',{staticClass:"fa fa-check-circle verified"})],1),_vm._v(" "),_c('p',{staticClass:"speciality"},[_vm._v("\n                        "+_vm._s(doctor.hospitalName)+" - "+_vm._s(doctor.department)+"\n                      ")]),_vm._v(" "),_c('ul',{staticClass:"available-info"},[_c('li',[_c('i',{staticClass:"fa fa-map-marker-alt"}),_vm._v("\n                          "+_vm._s(doctor.company_city)+", "+_vm._s(doctor.company_town)+"\n                        ")]),_vm._v(" "),(!_vm.isEmpty(doctor.appointment_hour))?_c('li',[_c('i',{staticClass:"fa fa-clock"}),_vm._v("\n                          "+_vm._s(doctor.appointment_hour)+"\n                        ")]):_vm._e(),_vm._v(" "),(!_vm.isEmpty(doctor.price))?_c('li',[_c('i',{staticClass:"fa fa-money-bill-alt"}),_vm._v("\n                          "+_vm._s(doctor.price)),_c('i',{staticClass:"fa fa-info-circle",attrs:{"data-toggle":"tooltip","title":"Fiyatlar Değişkenlik Gösterebilir"}})]):_vm._e()]),_vm._v(" "),_c('nuxt-link',{staticClass:"btn btn-info-light rounded-0 w-100",attrs:{"to":'/make-appointment/' + doctor.slug}},[_vm._v("Randevu Al")])],1)])}),0)],1)],1):_vm._e()])])])]):_vm._e(),_vm._v(" "),_c('section',{staticClass:"section section-blogs"},[_c('div',{staticClass:"container-fluid"},[_c('div',{staticClass:"section-header text-center"},[_c('h2',[_vm._v("Blog")]),_vm._v(" "),_c('p',{staticClass:"sub-title"},[_vm._v("\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n            eiusmod tempor incididunt ut labore et dolore magna aliqua.\n          ")])]),_vm._v(" "),_c('div',{staticClass:"row blog-grid-row"},[_c('div',{staticClass:"col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3"},[_c('div',{staticClass:"blog grid-blog"},[_c('div',{staticClass:"blog-image"},[_c('a',{attrs:{"href":"blog-details.html"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/img/blog/blog-01.jpg","alt":"Post Image"}})])]),_vm._v(" "),_c('div',{staticClass:"blog-content"},[_c('ul',{staticClass:"entry-meta meta-item"},[_c('li',[_c('div',{staticClass:"post-author"},[_c('a',{attrs:{"href":"doctor-profile.html"}},[_c('img',{attrs:{"src":"/img/doctors/doctor-thumb-01.jpg","alt":"Post Author"}}),_vm._v(" "),_c('span',[_vm._v("Dr. Ruby Perrin")])])])]),_vm._v(" "),_c('li',[_c('i',{staticClass:"fa fa-clock"}),_vm._v(" 4 Dec 2019")])]),_vm._v(" "),_c('h3',{staticClass:"blog-title"},[_c('a',{attrs:{"href":"blog-details.html"}},[_vm._v("\n                    Doccure – Making your clinic painless visit?\n                  ")])]),_vm._v(" "),_c('p',{staticClass:"mb-0"},[_vm._v("\n                  Lorem ipsum dolor sit amet, consectetur em adipiscing elit,\n                  sed do eiusmod tempor.\n                ")])])])])]),_vm._v(" "),_c('div',{staticClass:"view-all text-center"},[_c('nuxt-link',{staticClass:"btn btn-info-light rounded-0",attrs:{"to":"/blogs","tag":"a"}},[_vm._v("Tümünü Görüntüle")])],1)])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=0d42bd28&

// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__(2);

// EXTERNAL MODULE: external "js-base64"
var external_js_base64_ = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  computed: {
    base_img_url() {
      return "https://api.klinikdiyetisyen.com/";
    }

  },

  data() {
    return {};
  },

  async asyncData({
    error,
    $axios
  }) {
    try {
      let {
        data
      } = await $axios.get("https://api.klinikdiyetisyen.com/api/" + "home");
      return data.data;
    } catch (e) {
      error({
        message: "Site Ayarı Bulunamadı.",
        statusCode: 404
      });
    }
  },

  methods: {
    isEmpty(obj) {
      if (typeof obj == "number") return false;else if (typeof obj == "string") return obj.length == 0;else if (Array.isArray(obj)) return obj.length == 0;else if (typeof obj == "object") return obj == null || Object.keys(obj).length == 0;else if (typeof obj == "boolean") return false;else return !obj;
    },

    shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    },

    goToSearch() {
      this.$router.go(decodeURIComponent("/profile"));
    }

  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(67);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VApp/VApp.js
var VApp = __webpack_require__(141);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAvatar/VAvatar.js
var VAvatar = __webpack_require__(82);

// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "986b8486"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */



installComponents_default()(component, {VApp: VApp["a" /* default */],VAvatar: VAvatar["a" /* default */]})


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

/***/ 60:
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

/***/ 67:
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


/***/ }),

/***/ 73:
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

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VAvatar_VAvatar_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(117);
/* harmony import */ var _src_components_VAvatar_VAvatar_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VAvatar_VAvatar_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mixins_colorable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43);
/* harmony import */ var _mixins_measurable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73);
/* harmony import */ var _mixins_roundable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41);
 // Mixins



 // Utilities



/* harmony default export */ __webpack_exports__["a"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_mixins_colorable__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], _mixins_measurable__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], _mixins_roundable__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]).extend({
  name: 'v-avatar',
  props: {
    left: Boolean,
    right: Boolean,
    size: {
      type: [Number, String],
      default: 48
    }
  },
  computed: {
    classes() {
      return {
        'v-avatar--left': this.left,
        'v-avatar--right': this.right,
        ...this.roundedClasses
      };
    },

    styles() {
      return {
        height: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__[/* convertToUnit */ "e"])(this.size),
        minWidth: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__[/* convertToUnit */ "e"])(this.size),
        width: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__[/* convertToUnit */ "e"])(this.size),
        ...this.measurableStyles
      };
    }

  },

  render(h) {
    const data = {
      staticClass: 'v-avatar',
      class: this.classes,
      style: this.styles,
      on: this.$listeners
    };
    return h('div', this.setBackgroundColor(this.color, data), this.$slots.default);
  }

}));

/***/ })

};;
//# sourceMappingURL=index.js.map