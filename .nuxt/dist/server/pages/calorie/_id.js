exports.ids = [7];
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

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/calorie/_id.vue?vue&type=template&id=5ff795f8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-app',[_c('div',{staticClass:"breadcrumb-bar"},[_c('div',{staticClass:"container-fluid"},[_c('div',{staticClass:"row align-items-center"},[_c('div',{staticClass:"col-12 col-sm-12 col-md-12 col-12 col-xl-12"},[_c('nav',{staticClass:"page-breadcrumb",attrs:{"aria-label":"breadcrumb"}},[_c('ol',{staticClass:"breadcrumb pl-0"},[_c('li',{staticClass:"breadcrumb-item"},[_c('nuxt-link',{attrs:{"to":"/","tag":"a"}},[_vm._v("Anasayfa")])],1),_vm._v(" "),_c('li',{staticClass:"breadcrumb-item"},[_c('nuxt-link',{attrs:{"to":"/calorie","tag":"a"}},[_vm._v("Kaç Kalori?")])],1),_vm._v(" "),_c('li',{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[_vm._v("\n                "+_vm._s(_vm.data.name)+"\n              ")])])]),_vm._v(" "),_c('h2',{staticClass:"breadcrumb-title"},[_vm._v(_vm._s(_vm.data.name))])])])])]),_vm._v(" "),_c('div',{staticClass:"main-wrapper"},[_c('div',{staticClass:"content"},[_c('div',{staticClass:"container-fluid"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-12 col-sm-12 col-md-7 col-lg-8 col-xl-9"},[_c('div',{staticClass:"card"},[_c('div',{staticClass:"card-body"},[_c('div',{staticClass:"doctor-widget"},[_c('div',{staticClass:"doc-info-left"},[(
                        _vm.data !== null && _vm.data !== '' && _vm.data !== undefined
                      )?_c('div',{staticClass:"doctor-img"},_vm._l((_vm.images),function(image,index){return _c('img',{key:index,staticClass:"img-fluid",attrs:{"src":_vm.img_url + 'public/storage/' + image.img_url,"alt":_vm.data.name}})}),0):_vm._e(),_vm._v(" "),_c('div',{staticClass:"doc-info-cont"},[_c('h4',{staticClass:"doc-name"},[_vm._v(_vm._s(_vm.data.name))]),_vm._v(" "),_c('p',{staticClass:"doc-speciality"},[_vm._v("\n                        \""+_vm._s(_vm.data.name)+"\" Besini Hakkında Detaylı Bilgiler\n                      ")])])]),_vm._v(" "),_c('div',{staticClass:"doc-info-right"},[_c('div',{staticClass:"clini-infos"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6"},[_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"unit"}},[_vm._v("Birim")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.unit),expression:"unit"}],staticClass:"form-control rounded-0",attrs:{"type":"number","min":"1","step":"1","id":"unit","name":"unit"},domProps:{"value":(_vm.unit)},on:{"input":[function($event){if($event.target.composing){ return; }_vm.unit=$event.target.value},_vm.changeValue]}})])]),_vm._v(" "),_c('div',{staticClass:"col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6"},[_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"criteriaValue"}},[_vm._v("Ölçüt")]),_vm._v(" "),(
                                _vm.criterias !== null &&
                                _vm.criterias !== undefined &&
                                _vm.criterias !== ''
                              )?_c('select',{staticClass:"form-control rounded-0",attrs:{"id":"criteriaValue"},on:{"change":_vm.setCriteriaValue}},_vm._l((_vm.criterias),function(criteria,index){return _c('option',{key:index,attrs:{"data-type":criteria.type,"data-value":criteria.value},domProps:{"value":criteria.title,"selected":criteria.title === 'Gram'}},[_vm._v("\n                                "+_vm._s(criteria.title)+"\n                              ")])}),0):(
                                _vm.criterias == null &&
                                _vm.criterias == undefined &&
                                _vm.criterias == ''
                              )?_c('select',{staticClass:"form-control rounded-0",attrs:{"id":"criteriaValue"},on:{"change":_vm.setCriteriaValue}},[_c('option',{attrs:{"value":"0"}},[_vm._v("Ölçüt Seçiniz")])]):_vm._e()])])])])])])])]),_vm._v(" "),_c('div',{staticClass:"card"},[_c('div',{staticClass:"card-body pt-0"},[_c('nav',{staticClass:"user-tabs mb-4"},[_c('ul',{staticClass:"nav nav-tabs nav-tabs-bottom nav-justified"},[_c('li',{staticClass:"nav-item"},[_c('a',{staticClass:"nav-link active",attrs:{"href":"#nutrients_value","data-toggle":"tab"}},[_vm._v("Besin Değerleri")])]),_vm._v(" "),_c('li',{staticClass:"nav-item"},[_c('a',{staticClass:"nav-link",attrs:{"href":"#description","data-toggle":"tab"}},[_vm._v("Açıklama")])])])]),_vm._v(" "),_c('div',{staticClass:"tab-content pt-0"},[_c('div',{staticClass:"tab-pane fade show active",attrs:{"role":"tabpanel","id":"nutrients_value"}},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 offset-md-3 offset-lg-3 offset-xl-3"},[_c('div',{staticClass:"widget business-widget"},[_c('div',{staticClass:"widget-content"},[(
                                _vm.values !== null &&
                                _vm.values !== undefined &&
                                _vm.values !== ''
                              )?_c('div',{staticClass:"listing-hours"},[_c('div',{staticClass:"listing-day current"},[_c('div',{staticClass:"day"},[_vm._v("Besin Değeri Adı")]),_vm._v(" "),_c('div',{staticClass:"time-items"},[_c('span',{staticClass:"time"},[_vm._v("Besin Değeri")])])]),_vm._v(" "),_vm._l((_vm.fordata),function(value,index){return _c('div',{key:index,class:' px-2 listing-day ' +
                                  (index % 2 === 0
                                    ? 'bg-secondary text-white py-2'
                                    : '')},[_c('div',{staticClass:"day"},[_vm._v("\n                                  "+_vm._s(value.title)+" ("+_vm._s(value.type)+")\n                                ")]),_vm._v(" "),_c('div',{staticClass:"time-items"},[_c('span',{class:'time' +
                                      (index % 2 === 0 ? ' text-white ' : '')},[_vm._v(_vm._s(value.value))])])])})],2):_vm._e()])])])])]),_vm._v(" "),_c('div',{staticClass:"tab-pane fade",attrs:{"role":"tabpanel","id":"description"}},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9"},[_c('div',{staticClass:"widget about-widget"},[_c('h4',{staticClass:"widget-title"},[_vm._v("Besin Hakkında")]),_vm._v(" "),_c('p',[_vm._v("\n                            "+_vm._s(_vm.data.description)+"\n                          ")])])]),_vm._v(" "),_c('div',{staticClass:"col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3"})])])])])])]),_vm._v(" "),_c('div',{staticClass:"col-12 col-sm-12 col-md-5 col-lg-4 col-xl-3 theiaStickySidebar"},[_c('div',{staticClass:"profile-sidebar"},[_c('div',{staticClass:"widget-profile pro-widget-content"},[_c('div',{staticClass:"profile-info-widget"},[_c('a',{staticClass:"booking-doc-img",attrs:{"href":"#"}},[_c('img',{attrs:{"src":"assets/img/patients/patient.jpg","alt":"User Image"}})]),_vm._v(" "),_c('div',{staticClass:"profile-det-info"},[_c('h3',[_vm._v("Richard Wilson")]),_vm._v(" "),_c('div',{staticClass:"patient-details"},[_c('h5',[_c('i',{staticClass:"fa fa-birthday-cake"}),_vm._v(" 24 Jul 1983, 38\n                        years\n                      ")]),_vm._v(" "),_c('h5',{staticClass:"mb-0"},[_c('i',{staticClass:"fa fa-map-marker-alt"}),_vm._v(" Newyork, USA\n                      ")])])])])]),_vm._v(" "),_c('div',{staticClass:"dashboard-widget"},[_c('nav',{staticClass:"dashboard-menu"},[_c('ul',[_c('li',[_c('a',{attrs:{"href":"patient-dashboard.html"}},[_c('i',{staticClass:"fa fa-columns"}),_vm._v(" "),_c('span',[_vm._v("Dashboard")])])]),_vm._v(" "),_c('li',{staticClass:"active"},[_c('a',{attrs:{"href":"favourites.html"}},[_c('i',{staticClass:"fa fa-bookmark"}),_vm._v(" "),_c('span',[_vm._v("Favourites")])])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"chat.html"}},[_c('i',{staticClass:"fa fa-comments"}),_vm._v(" "),_c('span',[_vm._v("Message")]),_vm._v(" "),_c('small',{staticClass:"unread-msg"},[_vm._v("23")])])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"profile-settings.html"}},[_c('i',{staticClass:"fa fa-user-cog"}),_vm._v(" "),_c('span',[_vm._v("Profile Settings")])])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"change-password.html"}},[_c('i',{staticClass:"fa fa-lock"}),_vm._v(" "),_c('span',[_vm._v("Change Password")])])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"index.html"}},[_c('i',{staticClass:"fa fa-sign-out-alt"}),_vm._v(" "),_c('span',[_vm._v("Logout")])])])])])])])])])])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/calorie/_id.vue?vue&type=template&id=5ff795f8&

// EXTERNAL MODULE: external "vee-validate"
var external_vee_validate_ = __webpack_require__(37);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/calorie/_id.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    ValidationObserver: external_vee_validate_["ValidationObserver"],
    ValidationProvider: external_vee_validate_["ValidationProvider"]
  },
  name: "index",

  mounted() {},

  computed: {
    img_url() {
      return "https://api.klinikdiyetisyen.com/";
    }

  },
  methods: {
    setCriteriaValue: function (event) {
      event.preventDefault();
      event.stopImmediatePropagation();

      if (event.target.options.selectedIndex > -1) {
        const theTarget = event.target.options[event.target.options.selectedIndex].dataset;
        this.type = theTarget.type;
        this.criteriaValue = theTarget.value;
      }

      this.changeValue(event);
    },
    changeValue: function (event) {
      event.preventDefault();
      event.stopImmediatePropagation();

      if (this.values.length > 0) {
        for (let i = 0; i < this.values.length; i++) {
          this.fordata[i].value = (parseFloat(this.values[i].value) / 100 * (parseFloat(this.unit) * parseFloat(this.criteriaValue))).toFixed(2);

          if (this.fordata[i].value === undefined || this.fordata[i].value === "" || this.fordata[i].value === null || this.fordata[i].value <= 1 || isNaN(this.fordata[i].value)) {
            this.fordata[i].value = this.values[i].value;
          }
        }
      }
    }
  },

  data() {
    return {
      data: {},
      fordata: [],
      criteriaValue: 0,
      value: null,
      unit: 1,
      type: null
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
      } = await $axios.get("https://api.klinikdiyetisyen.com/api/" + "nutrients/" + params.id);
      return data;
    } catch (e) {
      error({
        message: "Besin Bilgisi Bulunamadı.",
        statusCode: 404
      });
    }
  }

});
// CONCATENATED MODULE: ./pages/calorie/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var calorie_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(66);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VApp/VApp.js
var VApp = __webpack_require__(136);

// CONCATENATED MODULE: ./pages/calorie/_id.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  calorie_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "cd2abad4"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

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
//# sourceMappingURL=_id.js.map