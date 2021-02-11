<template>
  <v-app>
    <div class="main-wrapper">
      <div class="page-wrapper">
        <div class="content container-fluid">
          <div class="page-header">
            <div class="row">
              <div class="col-sm-12">
                <h3 class="page-title">Slayt Düzenle</h3>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item">
                    <nuxt-link to="/panel" tag="a">Anasayfa</nuxt-link>
                  </li>
                  <li class="breadcrumb-item active">Slayt Düzenle</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-12">

              <div class="card">
                <div class="card-header">
                  <h4 class="card-title">Slayt Düzenle</h4>
                </div>
                <div class="card-body">
                  <ValidationObserver v-slot="{ handleSubmit }">
                    <form
                      @submit.prevent="handleSubmit(editSlides)"
                      ref="slidesForm"
                      enctype="multipart/form-data"
                    >
                      <ValidationProvider
                        name="Slayt Adı"
                        rules="required"
                        v-slot="{ errors }"
                      >
                        <div class="form-group">
                          <label for="title">Slayt Adı</label>
                          <input
                            id="title"
                            type="text"
                            class="form-control"
                            name="title"
                            v-model="data.title"
                          />
                          <small class="font-weight-bold text-danger">{{
                            errors[0]
                          }}</small>
                        </div>
                      </ValidationProvider>
                      <ValidationProvider
                        name="Slayt Açıklaması"
                        rules="required"
                        v-slot="{ errors }"
                      >
                        <div class="form-group">
                          <label for="description">Slayt Açıklaması</label>
                          <textarea
                            name="description"
                            id="description"
                            class="form-control"
                            cols="30"
                            rows="10"
                            v-model="data.description"
                          ></textarea>
                          <small class="font-weight-bold text-danger">{{
                            errors[0]
                          }}</small>
                        </div>
                      </ValidationProvider>
                      <div class="row">
                        <div
                          class="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3"
                        >
                          <img
                            v-bind:src="
                              base_img_url + '/public/storage/' + data.img_url
                            "
                            v-bind:alt="data.title"
                            class="img-fluid"
                          />
                        </div>
                        <div
                          class="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9"
                        >
                          <div class="form-group">
                            <label for="img_url">Slayt Görseli</label>
                            <input
                              id="img_url"
                              type="file"
                              class="form-control"
                              name="img_url"
                              required
                            />
                          </div>
                        </div>
                      </div>

                      <button
                        class="btn btn-outline-primary rounded-0 btn-lg"
                        type="submit"
                      >
                        Slaytı Güncelle
                      </button>
                    </form>
                  </ValidationObserver>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </v-app>
</template>
<script>
import Cookie from "js-cookie";
import { Base64 } from "js-base64";

import { ValidationObserver, ValidationProvider } from "vee-validate";

export default {
  middleware: ["session-control", "admin"],
  layout: "admin",
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data() {
    return {
      data: {},
      userData:
        Cookie.get("userData") !== null &&
        Cookie.get("userData") !== undefined &&
        Cookie.get("userData") !== ""
          ? JSON.parse(Base64.decode(Cookie.get("userData")))
          : null,
    };
  },
  computed: {
    base_img_url() {
      return process.env.apiPublicUrl;
    },
  },
  validate({ params }) {
    return params.id !== null ? params.id : null;
  },
  async asyncData({ params, error, $axios }) {
    try {
      const { data } = await $axios.get(
        process.env.apiBaseUrl + "panel/sliders/update/" + params.id
      );
      return data;
    } catch (e) {
      error({ message: "Slayt Bilgisi Bulunamadı.", statusCode: 404 });
    }
  },
  methods: {
    editSlides() {
      let formData = new FormData(this.$refs.slidesForm);
      this.$axios
        .post(
          process.env.apiBaseUrl + "panel/sliders/update/" + this.data._id,
          formData,
          {
            json: true,
            withCredentials: false,
            mode: "no-cors",
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Headers":
                "Origin, Content-Type, X-Auth-Token, Authorization",
              "Access-Control-Allow-Methods":
                "GET, POST, PATCH, PUT, DELETE, OPTIONS",
              "Access-Control-Allow-Credentials": true,
              "Content-Type":
                "multipart/form-data; boundary=" + formData._boundary,
              Authorization: "Bearer " + this.userData.api_token,
            },
          }
        )
        .then((response) => {
          if (response.data.success) {
            this.$izitoast.success({
              title: response.data.title,
              message: response.data.msg,
              position: "topCenter",
            });
            setTimeout(() => {
              this.$router.go(decodeURIComponent("/panel/slides"));
            }, 2000);
          } else {
            this.$izitoast.error({
              title: response.data.title,
              message: response.data.msg,
              position: "topCenter",
            });
          }
        });
    },
  },
};
</script>
