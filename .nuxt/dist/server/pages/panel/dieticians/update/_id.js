exports.ids = [30];
exports.modules = {

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/panel/dieticians/update/_id.vue?vue&type=template&id=4b503859&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main-wrapper"},[_vm._ssrNode("<div class=\"page-wrapper\">","</div>",[_vm._ssrNode("<div class=\"content container-fluid\">","</div>",[_vm._ssrNode("<div class=\"page-header\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-sm-12\">","</div>",[_vm._ssrNode("<h3 class=\"page-title\">Diyetisyen Düzenle</h3> "),_vm._ssrNode("<ul class=\"breadcrumb\">","</ul>",[_vm._ssrNode("<li class=\"breadcrumb-item\">","</li>",[_c('nuxt-link',{attrs:{"to":"/panel","tag":"a"}},[_vm._v("Anasayfa")])],1),_vm._ssrNode(" <li class=\"breadcrumb-item active\">Diyetisyen Düzenle</li>")],2)],2)])]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-12\">","</div>",[_vm._ssrNode("<div class=\"card\">","</div>",[_vm._ssrNode("<div class=\"card-header\"><h4 class=\"card-title\">Diyetisyen Düzenle</h4></div> "),_vm._ssrNode("<div class=\"card-body\">","</div>",[_c('ValidationObserver',{scopedSlots:_vm._u([{key:"default",fn:function(ref){
var handleSubmit = ref.handleSubmit;
return [_c('form',{ref:"dieticiansForm",attrs:{"enctype":"multipart/form-data"},on:{"submit":function($event){$event.preventDefault();return handleSubmit(_vm.editDieticians)}}},[_c('ul',{staticClass:"nav nav-tabs nav-tabs-bottom nav-justified"},[_c('li',{staticClass:"nav-item"},[_c('a',{staticClass:"nav-link active",attrs:{"href":"#genel-bilgiler","data-toggle":"tab"}},[_vm._v("Genel Bilgiler")])]),_vm._v(" "),_c('li',{staticClass:"nav-item"},[_c('a',{staticClass:"nav-link",attrs:{"href":"#sosyal-medya","data-toggle":"tab"}},[_vm._v("Sosyal Medya")])]),_vm._v(" "),_c('li',{staticClass:"nav-item"},[_c('a',{staticClass:"nav-link",attrs:{"href":"#is-yeri-bilgileri","data-toggle":"tab"}},[_vm._v("İş Yeri Bilgileri")])])]),_vm._v(" "),_c('div',{staticClass:"tab-content mb-3"},[_c('div',{staticClass:"tab-pane show active",attrs:{"id":"genel-bilgiler"}},[_c('ValidationProvider',{attrs:{"name":"Adınız ve Soyadınız","rules":"required"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
return [_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"title"}},[_vm._v("Adınız ve Soyadınız")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.data.name),expression:"data.name"}],staticClass:"form-control",attrs:{"id":"title","type":"text","name":"name"},domProps:{"value":(_vm.data.name)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.data, "name", $event.target.value)}}}),_vm._v(" "),_c('small',{staticClass:"font-weight-bold text-danger"},[_vm._v(_vm._s(errors[0]))])])]}}],null,true)}),_vm._v(" "),_c('ValidationProvider',{attrs:{"name":"T.C. Kimlik Numaranız","rules":"required"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
return [_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"tc"}},[_vm._v("T.C. Kimlik Numaranız")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.data.tc),expression:"data.tc"}],staticClass:"form-control",attrs:{"id":"tc","type":"text","name":"tc"},domProps:{"value":(_vm.data.tc)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.data, "tc", $event.target.value)}}}),_vm._v(" "),_c('small',{staticClass:"font-weight-bold text-danger"},[_vm._v(_vm._s(errors[0]))])])]}}],null,true)}),_vm._v(" "),_c('ValidationProvider',{attrs:{"name":"Email Adresiniz","rules":"required|email"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
return [_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"company_name"}},[_vm._v("Email Adresiniz")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.data.email),expression:"data.email"}],staticClass:"form-control",attrs:{"id":"company_name","type":"text","name":"email"},domProps:{"value":(_vm.data.email)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.data, "email", $event.target.value)}}}),_vm._v(" "),_c('small',{staticClass:"font-weight-bold text-danger"},[_vm._v(_vm._s(errors[0]))])])]}}],null,true)}),_vm._v(" "),_c('ValidationProvider',{attrs:{"name":"Telefon Numaranız","rules":"required"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
return [_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"phone"}},[_vm._v("Telefon Numaranız")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.data.phone),expression:"data.phone"}],staticClass:"form-control",attrs:{"id":"phone","type":"text","name":"phone"},domProps:{"value":(_vm.data.phone)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.data, "phone", $event.target.value)}}}),_vm._v(" "),_c('small',{staticClass:"font-weight-bold text-danger"},[_vm._v(_vm._s(errors[0]))])])]}}],null,true)}),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3"},[_c('img',{attrs:{"src":decodeURIComponent(_vm.siteSettings.baseURL) +
															'/public/storage/' +
															_vm.data.img_url,"alt":_vm.data.name,"width":"300","height":"300"}})]),_vm._v(" "),_c('div',{staticClass:"col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9"},[_c('div',{staticClass:"form-group"},[_c('label',[_vm._v("Kullanıcı Görseli")]),_vm._v(" "),_c('input',{ref:"img_url",staticClass:"form-control",attrs:{"type":"file","id":"img_url","name":"img_url"}})])])])],1),_vm._v(" "),_c('div',{staticClass:"tab-pane",attrs:{"id":"sosyal-medya"}},[_c('ValidationProvider',{attrs:{"name":"Facebook","rules":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
															var errors = ref.errors;
return [_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"facebook"}},[_vm._v("Facebook")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.data.facebook),expression:"data.facebook"}],staticClass:"form-control",attrs:{"id":"facebook","type":"text","name":"facebook"},domProps:{"value":(_vm.data.facebook)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.data, "facebook", $event.target.value)}}}),_vm._v(" "),_c('small',{staticClass:"font-weight-bold text-danger"},[_vm._v(_vm._s(errors[0]))])])]}}],null,true)}),_vm._v(" "),_c('ValidationProvider',{attrs:{"name":"Facebook","rules":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
															var errors = ref.errors;
return [_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"twitter"}},[_vm._v("Twitter")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.data.twitter),expression:"data.twitter"}],staticClass:"form-control",attrs:{"id":"twitter","type":"text","name":"twitter"},domProps:{"value":(_vm.data.twitter)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.data, "twitter", $event.target.value)}}}),_vm._v(" "),_c('small',{staticClass:"font-weight-bold text-danger"},[_vm._v(_vm._s(errors[0]))])])]}}],null,true)}),_vm._v(" "),_c('ValidationProvider',{attrs:{"name":"Instagram","rules":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
															var errors = ref.errors;
return [_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"instagram"}},[_vm._v("Instagram")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.data.instagram),expression:"data.instagram"}],staticClass:"form-control",attrs:{"id":"instagram","type":"text","name":"instagram"},domProps:{"value":(_vm.data.instagram)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.data, "instagram", $event.target.value)}}}),_vm._v(" "),_c('small',{staticClass:"font-weight-bold text-danger"},[_vm._v(_vm._s(errors[0]))])])]}}],null,true)}),_vm._v(" "),_c('ValidationProvider',{attrs:{"name":"Linkedin","rules":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
															var errors = ref.errors;
return [_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"linkedin"}},[_vm._v("Linkedin")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.data.linkedin),expression:"data.linkedin"}],staticClass:"form-control",attrs:{"id":"linkedin","type":"text","name":"linkedin"},domProps:{"value":(_vm.data.linkedin)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.data, "linkedin", $event.target.value)}}}),_vm._v(" "),_c('small',{staticClass:"font-weight-bold text-danger"},[_vm._v(_vm._s(errors[0]))])])]}}],null,true)}),_vm._v(" "),_c('ValidationProvider',{attrs:{"name":"Youtube","rules":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
															var errors = ref.errors;
return [_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"youtube"}},[_vm._v("Youtube")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.data.youtube),expression:"data.youtube"}],staticClass:"form-control",attrs:{"id":"youtube","type":"text","name":"youtube"},domProps:{"value":(_vm.data.youtube)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.data, "youtube", $event.target.value)}}}),_vm._v(" "),_c('small',{staticClass:"font-weight-bold text-danger"},[_vm._v(_vm._s(errors[0]))])])]}}],null,true)})],1),_vm._v(" "),_c('div',{staticClass:"tab-pane",attrs:{"id":"is-yeri-bilgileri"}},[_c('ValidationProvider',{attrs:{"name":"Hastane/Poliklinik Adı","rules":"required"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
															var errors = ref.errors;
return [_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"hospitalName"}},[_vm._v("Hastane/Poliklinik Adı")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.data.hospitalName),expression:"data.hospitalName"}],staticClass:"form-control",attrs:{"id":"hospitalName","type":"text","name":"hospitalName"},domProps:{"value":(_vm.data.hospitalName)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.data, "hospitalName", $event.target.value)}}}),_vm._v(" "),_c('small',{staticClass:"font-weight-bold text-danger"},[_vm._v(_vm._s(errors[0]))])])]}}],null,true)}),_vm._v(" "),_c('ValidationProvider',{attrs:{"name":"Departmanınız","rules":"required"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
															var errors = ref.errors;
return [_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"department"}},[_vm._v("Departmanınız")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.data.department),expression:"data.department"}],staticClass:"form-control",attrs:{"id":"department","type":"text","name":"department"},domProps:{"value":(_vm.data.department)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.data, "department", $event.target.value)}}}),_vm._v(" "),_c('small',{staticClass:"font-weight-bold text-danger"},[_vm._v(_vm._s(errors[0]))])])]}}],null,true)}),_vm._v(" "),_c('ValidationProvider',{attrs:{"name":"Telefon Numaranız","rules":"required"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
															var errors = ref.errors;
return [_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"work_phone"}},[_vm._v("Telefon Numaranız")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.data.work_phone),expression:"data.work_phone"}],staticClass:"form-control",attrs:{"id":"work_phone","type":"text","name":"work_phone"},domProps:{"value":(_vm.data.work_phone)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.data, "work_phone", $event.target.value)}}}),_vm._v(" "),_c('small',{staticClass:"font-weight-bold text-danger"},[_vm._v(_vm._s(errors[0]))])])]}}],null,true)}),_vm._v(" "),_c('ValidationProvider',{attrs:{"name":"Telefon Numaranız 2","rules":"required"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
															var errors = ref.errors;
return [_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"work_phone_2"}},[_vm._v("Telefon Numaranız 2")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.data.work_phone_2),expression:"data.work_phone_2"}],staticClass:"form-control",attrs:{"id":"work_phone_2","type":"text","name":"work_phone_2"},domProps:{"value":(_vm.data.work_phone_2)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.data, "work_phone_2", $event.target.value)}}}),_vm._v(" "),_c('small',{staticClass:"font-weight-bold text-danger"},[_vm._v(_vm._s(errors[0]))])])]}}],null,true)}),_vm._v(" "),_c('ValidationProvider',{attrs:{"name":"Adresiniz","rules":"required"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
															var errors = ref.errors;
return [_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"address"}},[_vm._v("Adresiniz")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.data.address),expression:"data.address"}],staticClass:"form-control",attrs:{"id":"address","type":"text","name":"address"},domProps:{"value":(_vm.data.address)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.data, "address", $event.target.value)}}}),_vm._v(" "),_c('small',{staticClass:"font-weight-bold text-danger"},[_vm._v(_vm._s(errors[0]))])])]}}],null,true)})],1)]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('button',{staticClass:"btn btn-primary login-btn text-white",attrs:{"type":"submit"}},[_vm._v("\n\t\t\t\t\t\t\t\t\t\t\tGönder\n\t\t\t\t\t\t\t\t\t\t")])])])]}}])})],1)],2)])])],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/panel/dieticians/update/_id.vue?vue&type=template&id=4b503859&

// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__(2);
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);

// EXTERNAL MODULE: external "js-base64"
var external_js_base64_ = __webpack_require__(7);

// EXTERNAL MODULE: external "vee-validate"
var external_vee_validate_ = __webpack_require__(37);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/panel/dieticians/update/_id.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        name: null,
        phone: null,
        email: null,
        facebook: null,
        twitter: null,
        instagram: null,
        youtube: null,
        linkedin: null,
        img_url: null,
        department: null,
        hospitalName: null,
        address: null,
        tc: null,
        work_phone: null,
        work_phone_2: null
      },
      siteSettings: this.$store.getters.siteSettings,
      userData: !this.isEmpty(external_js_cookie_default.a.get("userData")) ? JSON.parse(external_js_base64_["Base64"].decode(external_js_cookie_default.a.get("userData"))) : null
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
      } = await $axios.get("https://api.klinikdiyetisyen.com/api/" + "panel/doctors/update/" + params.id);
      return data;
    } catch (e) {
      error({
        message: "Diyetisyen Bilgisi Bulunamadı.",
        statusCode: 404
      });
    }
  },

  methods: {
    isEmpty(obj) {
      if (typeof obj == "number") return false;else if (typeof obj == "string") return obj.length == 0;else if (Array.isArray(obj)) return obj.length == 0;else if (typeof obj == "object") return obj == null || Object.keys(obj).length == 0;else if (typeof obj == "boolean") return false;else return !obj;
    },

    editDieticians() {
      let formData = new FormData(this.$refs.dieticiansForm);
      this.$axios.post("https://api.klinikdiyetisyen.com/api/" + "panel/doctors/update/" + this.data._id, formData, {
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
            this.$router.go(decodeURIComponent("/panel/dieticians"));
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
// CONCATENATED MODULE: ./pages/panel/dieticians/update/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var update_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(13);

// CONCATENATED MODULE: ./pages/panel/dieticians/update/_id.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  update_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5982c08b"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_id.js.map