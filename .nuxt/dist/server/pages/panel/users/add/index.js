exports.ids = [62];
exports.modules = {

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/panel/users/add/index.vue?vue&type=template&id=f8c8ab98&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main-wrapper"},[_vm._ssrNode("<div class=\"page-wrapper\">","</div>",[_vm._ssrNode("<div class=\"content container-fluid\">","</div>",[_vm._ssrNode("<div class=\"page-header\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-sm-12\">","</div>",[_vm._ssrNode("<h3 class=\"page-title\">Kullanıcılar</h3> "),_vm._ssrNode("<ul class=\"breadcrumb\">","</ul>",[_vm._ssrNode("<li class=\"breadcrumb-item\">","</li>",[_c('nuxt-link',{attrs:{"to":"/panel","tag":"a"}},[_vm._v("Anasayfa")])],1),_vm._ssrNode(" <li class=\"breadcrumb-item active\">Kullanıcılar</li>")],2)],2)])]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-12\">","</div>",[_vm._ssrNode("<div class=\"card\">","</div>",[_vm._ssrNode("<div class=\"card-header\"><h4 class=\"card-title\">Kullanıcı Ekle</h4></div> "),_vm._ssrNode("<div class=\"card-body\">","</div>",[_c('ValidationObserver',{scopedSlots:_vm._u([{key:"default",fn:function(ref){
var handleSubmit = ref.handleSubmit;
return [_c('form',{ref:"usersForm",attrs:{"enctype":"multipart/form-data"},on:{"submit":function($event){$event.preventDefault();return handleSubmit(_vm.saveUsers)}}},[_c('ul',{staticClass:"nav nav-tabs nav-tabs-bottom nav-justified"},[_c('li',{staticClass:"nav-item"},[_c('a',{staticClass:"nav-link active",attrs:{"href":"#genel-bilgiler","data-toggle":"tab"}},[_vm._v("Genel Bilgiler")])]),_vm._v(" "),_c('li',{staticClass:"nav-item"},[_c('a',{staticClass:"nav-link",attrs:{"href":"#sosyal-medya","data-toggle":"tab"}},[_vm._v("Sosyal Medya")])])]),_vm._v(" "),_c('div',{staticClass:"tab-content mb-3"},[_c('div',{staticClass:"tab-pane show active",attrs:{"id":"genel-bilgiler"}},[_c('ValidationProvider',{attrs:{"name":"Adınız ve Soyadınız","rules":"required"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
return [_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"title"}},[_vm._v("Adınız ve Soyadınız")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.data.name),expression:"data.name"}],staticClass:"form-control",attrs:{"id":"title","type":"text","name":"name"},domProps:{"value":(_vm.data.name)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.data, "name", $event.target.value)}}}),_vm._v(" "),_c('small',{staticClass:"font-weight-bold text-danger"},[_vm._v(_vm._s(errors[0]))])])]}}],null,true)}),_vm._v(" "),_c('ValidationProvider',{attrs:{"name":"Email Adresiniz","rules":"required|email"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
return [_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"company_name"}},[_vm._v("Email Adresiniz")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.data.email),expression:"data.email"}],staticClass:"form-control",attrs:{"id":"company_name","type":"text","name":"email"},domProps:{"value":(_vm.data.email)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.data, "email", $event.target.value)}}}),_vm._v(" "),_c('small',{staticClass:"font-weight-bold text-danger"},[_vm._v(_vm._s(errors[0]))])])]}}],null,true)}),_vm._v(" "),_c('ValidationProvider',{attrs:{"name":"Şifreniz","rules":"required"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
return [_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"password"}},[_vm._v("Şifreniz")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.data.password),expression:"data.password"}],staticClass:"form-control",attrs:{"id":"password","type":"text","name":"password"},domProps:{"value":(_vm.data.password)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.data, "password", $event.target.value)}}}),_vm._v(" "),_c('small',{staticClass:"font-weight-bold text-danger"},[_vm._v(_vm._s(errors[0]))])])]}}],null,true)}),_vm._v(" "),_c('ValidationProvider',{attrs:{"name":"Tekrar Şifreniz","rules":"required"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
return [_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"password_confirmation"}},[_vm._v("Tekrar Şifreniz")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.data.password_confirmation),expression:"data.password_confirmation"}],staticClass:"form-control",attrs:{"id":"password_confirmation","type":"text","name":"password_confirmation"},domProps:{"value":(_vm.data.password_confirmation)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.data, "password_confirmation", $event.target.value)}}}),_vm._v(" "),_c('small',{staticClass:"font-weight-bold text-danger"},[_vm._v(_vm._s(errors[0]))])])]}}],null,true)}),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3"},[_c('img',{attrs:{"src":decodeURIComponent(_vm.siteSettings.baseURL) +
															'/public/storage/' +
															_vm.data.img_url,"alt":_vm.data.name}})]),_vm._v(" "),_c('div',{staticClass:"col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9"},[_c('div',{staticClass:"form-group"},[_c('label',[_vm._v("Kullanıcı Görseli")]),_vm._v(" "),_c('input',{ref:"img_url",staticClass:"form-control",attrs:{"type":"file","id":"img_url","name":"img_url"}})])])])],1),_vm._v(" "),_c('div',{staticClass:"tab-pane",attrs:{"id":"sosyal-medya"}},[_c('ValidationProvider',{attrs:{"name":"Facebook","rules":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
															var errors = ref.errors;
return [_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"facebook"}},[_vm._v("Facebook")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.data.facebook),expression:"data.facebook"}],staticClass:"form-control",attrs:{"id":"facebook","type":"text","name":"facebook"},domProps:{"value":(_vm.data.facebook)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.data, "facebook", $event.target.value)}}}),_vm._v(" "),_c('small',{staticClass:"font-weight-bold text-danger"},[_vm._v(_vm._s(errors[0]))])])]}}],null,true)}),_vm._v(" "),_c('ValidationProvider',{attrs:{"name":"Facebook","rules":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
															var errors = ref.errors;
return [_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"twitter"}},[_vm._v("Twitter")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.data.twitter),expression:"data.twitter"}],staticClass:"form-control",attrs:{"id":"twitter","type":"text","name":"twitter"},domProps:{"value":(_vm.data.twitter)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.data, "twitter", $event.target.value)}}}),_vm._v(" "),_c('small',{staticClass:"font-weight-bold text-danger"},[_vm._v(_vm._s(errors[0]))])])]}}],null,true)}),_vm._v(" "),_c('ValidationProvider',{attrs:{"name":"Instagram","rules":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
															var errors = ref.errors;
return [_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"instagram"}},[_vm._v("Instagram")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.data.instagram),expression:"data.instagram"}],staticClass:"form-control",attrs:{"id":"instagram","type":"text","name":"instagram"},domProps:{"value":(_vm.data.instagram)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.data, "instagram", $event.target.value)}}}),_vm._v(" "),_c('small',{staticClass:"font-weight-bold text-danger"},[_vm._v(_vm._s(errors[0]))])])]}}],null,true)}),_vm._v(" "),_c('ValidationProvider',{attrs:{"name":"Linkedin","rules":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
															var errors = ref.errors;
return [_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"linkedin"}},[_vm._v("Linkedin")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.data.linkedin),expression:"data.linkedin"}],staticClass:"form-control",attrs:{"id":"linkedin","type":"text","name":"linkedin"},domProps:{"value":(_vm.data.linkedin)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.data, "linkedin", $event.target.value)}}}),_vm._v(" "),_c('small',{staticClass:"font-weight-bold text-danger"},[_vm._v(_vm._s(errors[0]))])])]}}],null,true)}),_vm._v(" "),_c('ValidationProvider',{attrs:{"name":"Youtube","rules":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
															var errors = ref.errors;
return [_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"youtube"}},[_vm._v("Youtube")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.data.youtube),expression:"data.youtube"}],staticClass:"form-control",attrs:{"id":"youtube","type":"text","name":"youtube"},domProps:{"value":(_vm.data.youtube)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.data, "youtube", $event.target.value)}}}),_vm._v(" "),_c('small',{staticClass:"font-weight-bold text-danger"},[_vm._v(_vm._s(errors[0]))])])]}}],null,true)})],1)]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('button',{staticClass:"btn btn-primary login-btn",attrs:{"type":"submit"}},[_vm._v("\n\t\t\t\t\t\t\t\t\t\t\tGönder\n\t\t\t\t\t\t\t\t\t\t")])])])]}}])})],1)],2)])])],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/panel/users/add/index.vue?vue&type=template&id=f8c8ab98&

// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__(2);
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);

// EXTERNAL MODULE: external "js-base64"
var external_js_base64_ = __webpack_require__(7);

// EXTERNAL MODULE: external "vee-validate"
var external_vee_validate_ = __webpack_require__(37);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/panel/users/add/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      name: null,
      phone: null,
      email: null,
      password: null,
      password_confirmation: null,
      facebook: null,
      twitter: null,
      instagram: null,
      youtube: null,
      linkedin: null,
      img_url: null,
      userData: !this.isEmpty(external_js_cookie_default.a.get("userData")) ? JSON.parse(external_js_base64_["Base64"].decode(external_js_cookie_default.a.get("userData"))) : null
    };
  },

  methods: {
    isEmpty(obj) {
      if (typeof obj == "number") return false;else if (typeof obj == "string") return obj.length == 0;else if (Array.isArray(obj)) return obj.length == 0;else if (typeof obj == "object") return obj == null || Object.keys(obj).length == 0;else if (typeof obj == "boolean") return false;else return !obj;
    },

    saveUsers() {
      let formData = new FormData(this.$refs.usersForm);
      this.$axios.post("https://api.klinikdiyetisyen.com/api/" + "panel/users/create", formData, {
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
            this.$router.go(decodeURIComponent("/panel/users"));
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
// CONCATENATED MODULE: ./pages/panel/users/add/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var users_addvue_type_script_lang_js_ = (addvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(13);

// CONCATENATED MODULE: ./pages/panel/users/add/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  users_addvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "702d8196"
  
)

/* harmony default export */ var add = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map