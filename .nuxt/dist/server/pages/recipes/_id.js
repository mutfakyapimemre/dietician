exports.ids = [71];
exports.modules = {

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

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VGrid_VGrid_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98);
/* harmony import */ var _src_components_VGrid_VGrid_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VGrid_VGrid_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_mergeData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);



 // no xs

const breakpoints = ['sm', 'md', 'lg', 'xl'];

const breakpointProps = (() => {
  return breakpoints.reduce((props, val) => {
    props[val] = {
      type: [Boolean, String, Number],
      default: false
    };
    return props;
  }, {});
})();

const offsetProps = (() => {
  return breakpoints.reduce((props, val) => {
    props['offset' + Object(_util_helpers__WEBPACK_IMPORTED_MODULE_3__[/* upperFirst */ "B"])(val)] = {
      type: [String, Number],
      default: null
    };
    return props;
  }, {});
})();

const orderProps = (() => {
  return breakpoints.reduce((props, val) => {
    props['order' + Object(_util_helpers__WEBPACK_IMPORTED_MODULE_3__[/* upperFirst */ "B"])(val)] = {
      type: [String, Number],
      default: null
    };
    return props;
  }, {});
})();

const propMap = {
  col: Object.keys(breakpointProps),
  offset: Object.keys(offsetProps),
  order: Object.keys(orderProps)
};

function breakpointClass(type, prop, val) {
  let className = type;

  if (val == null || val === false) {
    return undefined;
  }

  if (prop) {
    const breakpoint = prop.replace(type, '');
    className += `-${breakpoint}`;
  } // Handling the boolean style prop when accepting [Boolean, String, Number]
  // means Vue will not convert <v-col sm></v-col> to sm: true for us.
  // Since the default is false, an empty string indicates the prop's presence.


  if (type === 'col' && (val === '' || val === true)) {
    // .col-md
    return className.toLowerCase();
  } // .order-md-6


  className += `-${val}`;
  return className.toLowerCase();
}

const cache = new Map();
/* harmony default export */ __webpack_exports__["a"] = (vue__WEBPACK_IMPORTED_MODULE_1___default.a.extend({
  name: 'v-col',
  functional: true,
  props: {
    cols: {
      type: [Boolean, String, Number],
      default: false
    },
    ...breakpointProps,
    offset: {
      type: [String, Number],
      default: null
    },
    ...offsetProps,
    order: {
      type: [String, Number],
      default: null
    },
    ...orderProps,
    alignSelf: {
      type: String,
      default: null,
      validator: str => ['auto', 'start', 'end', 'center', 'baseline', 'stretch'].includes(str)
    },
    tag: {
      type: String,
      default: 'div'
    }
  },

  render(h, {
    props,
    data,
    children,
    parent
  }) {
    // Super-fast memoization based on props, 5x faster than JSON.stringify
    let cacheKey = '';

    for (const prop in props) {
      cacheKey += String(props[prop]);
    }

    let classList = cache.get(cacheKey);

    if (!classList) {
      classList = []; // Loop through `col`, `offset`, `order` breakpoint props

      let type;

      for (type in propMap) {
        propMap[type].forEach(prop => {
          const value = props[prop];
          const className = breakpointClass(type, prop, value);
          if (className) classList.push(className);
        });
      }

      const hasColClasses = classList.some(className => className.startsWith('col-'));
      classList.push({
        // Default to .col if no other col-{bp}-* classes generated nor `cols` specified.
        col: !hasColClasses || !props.cols,
        [`col-${props.cols}`]: props.cols,
        [`offset-${props.offset}`]: props.offset,
        [`order-${props.order}`]: props.order,
        [`align-self-${props.alignSelf}`]: props.alignSelf
      });
      cache.set(cacheKey, classList);
    }

    return h(props.tag, Object(_util_mergeData__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(data, {
      class: classList
    }), children);
  }

}));

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/recipes/_id.vue?vue&type=template&id=79a54cdb&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-app',[_c('div',{staticClass:"breadcrumb-bar"},[_c('div',{staticClass:"container-fluid"},[_c('div',{staticClass:"row align-items-center"},[_c('v-col',{attrs:{"cols":"12","sm":"12","md":"12","lg":"12","xl":"12"}},[_c('nav',{staticClass:"page-breadcrumb",attrs:{"aria-label":"breadcrumb"}},[_c('ol',{staticClass:"breadcrumb pl-0"},[_c('li',{staticClass:"breadcrumb-item"},[_c('nuxt-link',{attrs:{"to":"/","tag":"a"}},[_vm._v("Anasayfa")])],1),_vm._v(" "),_c('li',{staticClass:"breadcrumb-item"},[_c('nuxt-link',{attrs:{"to":"/calorie","tag":"a"}},[_vm._v("Kaç Kalori?")])],1),_vm._v(" "),_c('li',{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[_vm._v("\n\t\t\t\t\t\t\t\t"+_vm._s(_vm.data.name)+"\n\t\t\t\t\t\t\t")])])]),_vm._v(" "),_c('h2',{staticClass:"breadcrumb-title"},[_vm._v(_vm._s(_vm.data.name))])])],1)])]),_vm._v(" "),_c('div',{staticClass:"main-wrapper"},[_c('div',{staticClass:"content"},[_c('div',{staticClass:"container-fluid"},[_c('div',{staticClass:"row"},[_c('v-col',{attrs:{"cols":"12","sm":"12","md":"7","lg":"8","xl":"9"}},[_c('div',{staticClass:"card"},[_c('div',{staticClass:"card-body"},[_c('div',{staticClass:"doctor-widget"},[_c('div',{staticClass:"doc-info-left"},[(!_vm.isEmpty(_vm.data) && _vm.image.isCover === 1)?_c('div',{staticClass:"doctor-img"},_vm._l((_vm.images),function(image,index){return _c('img',{key:index,staticClass:"img-fluid",attrs:{"src":_vm.img_url + 'public/storage/' + image.img_url,"alt":_vm.data.name}})}),0):_vm._e(),_vm._v(" "),_c('div',{staticClass:"doc-info-cont"},[_c('h4',{staticClass:"doc-name"},[_vm._v(_vm._s(_vm.data.name))]),_vm._v(" "),_c('p',{staticClass:"doc-speciality"},[_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\""+_vm._s(_vm.data.name)+"\" Besini Hakkında Detaylı Bilgiler\n\t\t\t\t\t\t\t\t\t\t\t")])])]),_vm._v(" "),_c('div',{staticClass:"doc-info-right"},[_c('div',{staticClass:"clini-infos"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6"},[_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"unit"}},[_vm._v("Birim")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.unit),expression:"unit"}],staticClass:"form-control rounded-0",attrs:{"type":"number","min":"1","step":"1","id":"unit","name":"unit"},domProps:{"value":(_vm.unit)},on:{"input":[function($event){if($event.target.composing){ return; }_vm.unit=$event.target.value},_vm.changeValue]}})])]),_vm._v(" "),_c('div',{staticClass:"col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6"},[_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"criteriaValue"}},[_vm._v("Ölçüt")]),_vm._v(" "),(
																!_vm.isEmpty(_vm.data) &&
																!_vm.isEmpty(_vm.values) &&
																!_vm.isEmpty(_vm.criterias)
															)?_c('select',{staticClass:"form-control rounded-0",attrs:{"id":"criteriaValue"},on:{"change":_vm.setCriteriaValue}},[_c('option',{attrs:{"selected":""},domProps:{"value":0}},[_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tÖlçüt Seçiniz\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t")]),_vm._v(" "),_vm._l((_vm.criterias),function(criteria,index){return _c('option',{key:index,attrs:{"data-type":criteria.type,"data-value":criteria.value},domProps:{"value":criteria.title +
																	criteria.value +
																	criteria.type}},[_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"+_vm._s(criteria.title)+"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t")])})],2):_vm._e(),_vm._v(" "),(
																_vm.isEmpty(_vm.data) ||
																_vm.isEmpty(_vm.values) ||
																_vm.isEmpty(_vm.criterias)
															)?_c('select',{staticClass:"form-control rounded-0",attrs:{"id":"criteriaValue"},on:{"change":_vm.setCriteriaValue}},[_c('option',{attrs:{"selected":""},domProps:{"value":0}},[_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tÖlçüt Seçiniz\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t")])]):_vm._e()])])])])])])])]),_vm._v(" "),_c('div',{staticClass:"card"},[_c('div',{staticClass:"card-body pt-0"},[_c('nav',{staticClass:"user-tabs mb-4"},[_c('ul',{staticClass:"nav nav-tabs nav-tabs-bottom nav-justified"},[_c('li',{staticClass:"nav-item"},[_c('a',{staticClass:"nav-link active",attrs:{"href":"#nutrients_value","data-toggle":"tab"}},[_vm._v("Besin Değerleri")])]),_vm._v(" "),_c('li',{staticClass:"nav-item"},[_c('a',{staticClass:"nav-link",attrs:{"href":"#description","data-toggle":"tab"}},[_vm._v("Açıklama")])])])]),_vm._v(" "),_c('div',{staticClass:"tab-content pt-0"},[_c('div',{staticClass:"tab-pane fade show active",attrs:{"role":"tabpanel","id":"nutrients_value"}},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 offset-md-3 offset-lg-3 offset-xl-3"},[_c('div',{staticClass:"widget business-widget"},[_c('div',{staticClass:"widget-content"},[(!_vm.isEmpty(_vm.data) && !_vm.isEmpty(_vm.values))?_c('div',{staticClass:"listing-hours"},[_c('div',{staticClass:"listing-day current"},[_c('div',{staticClass:"day"},[_vm._v("Besin Değeri Adı")]),_vm._v(" "),_c('div',{staticClass:"time-items"},[_c('span',{staticClass:"time"},[_vm._v("Besin Değeri")])])]),_vm._v(" "),_vm._l((_vm.fordata),function(value,index){return _c('div',{key:index,class:' px-2 listing-day ' +
																	(index % 2 === 0
																		? 'bg-secondary text-white py-2'
																		: '')},[_c('div',{staticClass:"day"},[_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"+_vm._s(value.title)+" ("+_vm._s(value.type)+")\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t")]),_vm._v(" "),_c('div',{staticClass:"time-items"},[_c('span',{class:'time' +
																			(index % 2 === 0 ? ' text-white ' : '')},[_vm._v(_vm._s(value.value))])])])})],2):_vm._e()])])])])]),_vm._v(" "),_c('div',{staticClass:"tab-pane fade",attrs:{"role":"tabpanel","id":"description"}},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9"},[_c('div',{staticClass:"widget about-widget"},[_c('h4',{staticClass:"widget-title"},[_vm._v("Besin Hakkında")]),_vm._v(" "),_c('p',[_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t"+_vm._s(_vm.data.description)+"\n\t\t\t\t\t\t\t\t\t\t\t\t\t")])])]),_vm._v(" "),_c('div',{staticClass:"col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3"})])])])])])]),_vm._v(" "),_c('v-col',{staticClass:"theiaStickySidebar",attrs:{"cols":"12","sm":"12","md":"5","lg":"4","xl":"3"}})],1)])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/recipes/_id.vue?vue&type=template&id=79a54cdb&

// EXTERNAL MODULE: external "vee-validate"
var external_vee_validate_ = __webpack_require__(37);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/recipes/_id.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  computed: {
    img_url() {
      return "https://api.klinikdiyetisyen.com/";
    }

  },
  methods: {
    isEmpty(obj) {
      if (typeof obj == "number") return false;else if (typeof obj == "string") return obj.length == 0;else if (Array.isArray(obj)) return obj.length == 0;else if (typeof obj == "object") return obj == null || Object.keys(obj).length == 0;else if (typeof obj == "boolean") return false;else return !obj;
    },

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
      unit: 100,
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
// CONCATENATED MODULE: ./pages/recipes/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var recipes_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(67);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VApp/VApp.js
var VApp = __webpack_require__(141);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(146);

// CONCATENATED MODULE: ./pages/recipes/_id.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  recipes_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "16725fa4"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */



installComponents_default()(component, {VApp: VApp["a" /* default */],VCol: VCol["a" /* default */]})


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

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mergeData; });
/* unused harmony export mergeStyles */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return mergeClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return mergeListeners; });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

const pattern = {
  styleList: /;(?![^(]*\))/g,
  styleProp: /:(.*)/
};

function parseStyle(style) {
  const styleMap = {};

  for (const s of style.split(pattern.styleList)) {
    let [key, val] = s.split(pattern.styleProp);
    key = key.trim();

    if (!key) {
      continue;
    } // May be undefined if the `key: value` pair is incomplete.


    if (typeof val === 'string') {
      val = val.trim();
    }

    styleMap[Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[/* camelize */ "a"])(key)] = val;
  }

  return styleMap;
}

function mergeData() {
  const mergeTarget = {};
  let i = arguments.length;
  let prop; // Allow for variadic argument length.

  while (i--) {
    // Iterate through the data properties and execute merge strategies
    // Object.keys eliminates need for hasOwnProperty call
    for (prop of Object.keys(arguments[i])) {
      switch (prop) {
        // Array merge strategy (array concatenation)
        case 'class':
        case 'directives':
          if (arguments[i][prop]) {
            mergeTarget[prop] = mergeClasses(mergeTarget[prop], arguments[i][prop]);
          }

          break;

        case 'style':
          if (arguments[i][prop]) {
            mergeTarget[prop] = mergeStyles(mergeTarget[prop], arguments[i][prop]);
          }

          break;
        // Space delimited string concatenation strategy

        case 'staticClass':
          if (!arguments[i][prop]) {
            break;
          }

          if (mergeTarget[prop] === undefined) {
            mergeTarget[prop] = '';
          }

          if (mergeTarget[prop]) {
            // Not an empty string, so concatenate
            mergeTarget[prop] += ' ';
          }

          mergeTarget[prop] += arguments[i][prop].trim();
          break;
        // Object, the properties of which to merge via array merge strategy (array concatenation).
        // Callback merge strategy merges callbacks to the beginning of the array,
        // so that the last defined callback will be invoked first.
        // This is done since to mimic how Object.assign merging
        // uses the last given value to assign.

        case 'on':
        case 'nativeOn':
          if (arguments[i][prop]) {
            mergeTarget[prop] = mergeListeners(mergeTarget[prop], arguments[i][prop]);
          }

          break;
        // Object merge strategy

        case 'attrs':
        case 'props':
        case 'domProps':
        case 'scopedSlots':
        case 'staticStyle':
        case 'hook':
        case 'transition':
          if (!arguments[i][prop]) {
            break;
          }

          if (!mergeTarget[prop]) {
            mergeTarget[prop] = {};
          }

          mergeTarget[prop] = { ...arguments[i][prop],
            ...mergeTarget[prop]
          };
          break;
        // Reassignment strategy (no merge)

        default:
          // slot, key, ref, tag, show, keepAlive
          if (!mergeTarget[prop]) {
            mergeTarget[prop] = arguments[i][prop];
          }

      }
    }
  }

  return mergeTarget;
}
function mergeStyles(target, source) {
  if (!target) return source;
  if (!source) return target;
  target = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[/* wrapInArray */ "C"])(typeof target === 'string' ? parseStyle(target) : target);
  return target.concat(typeof source === 'string' ? parseStyle(source) : source);
}
function mergeClasses(target, source) {
  if (!source) return target;
  if (!target) return source;
  return target ? Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[/* wrapInArray */ "C"])(target).concat(source) : source;
}
function mergeListeners(...args) {
  if (!args[0]) return args[1];
  if (!args[1]) return args[0];
  const dest = {};

  for (let i = 2; i--;) {
    const arg = args[i];

    for (const event in arg) {
      if (!arg[event]) continue;

      if (dest[event]) {
        // Merge current listeners before (because we are iterating backwards).
        // Note that neither "target" or "source" must be altered.
        dest[event] = [].concat(arg[event], dest[event]);
      } else {
        // Straight assign.
        dest[event] = arg[event];
      }
    }
  }

  return dest;
}

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

/***/ 98:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ })

};;
//# sourceMappingURL=_id.js.map