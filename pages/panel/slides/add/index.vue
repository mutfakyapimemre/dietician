<template>
  <v-app>
  <!-- Main Wrapper -->
  <div class="main-wrapper">
    <div class="page-wrapper">
      <div class="content container-fluid">

        <!-- Page Header -->
        <div class="page-header">
          <div class="row">
            <div class="col-sm-12">
              <h3 class="page-title">Slaytlar</h3>
              <ul class="breadcrumb">
                <li class="breadcrumb-item">
                  <nuxt-link to="/panel" tag="a">Anasayfa</nuxt-link>
                </li>
                <li class="breadcrumb-item active">Slaytlar</li>
              </ul>
            </div>
          </div>
        </div>
        <!-- /Page Header -->

        <div class="row">

          <div class="col-12">

            <!-- General -->

            <div class="card">
              <div class="card-header">
                <h4 class="card-title">Slayt Ekle</h4>
              </div>
              <div class="card-body">
                <ValidationObserver v-slot="{ invalid,handleSubmit }">
                  <form @submit.prevent="handleSubmit(saveSlides)" ref="slidesForm" enctype="multipart/form-data">
                          <ValidationProvider name="Slayt Adı" rules="required" v-slot="{ errors }">
                            <div class="form-group">
                              <label for="title">Slayt Adı</label>
                              <input id="title" type="text" class="form-control" name="title" v-model="title">
                              <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                            </div>
                          </ValidationProvider>
                          <ValidationProvider name="Slayt Açıklaması" rules="required" v-slot="{ errors }">
                            <div class="form-group">
                              <label for="description">Slayt Açıklaması</label>
                              <textarea name="description" id="description" class="form-control" cols="30" rows="10" v-model="description"></textarea>
                              <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                            </div>
                          </ValidationProvider>
                            <div class="form-group">
                              <label for="img_url">Slayt Görseli</label>
                              <input id="img_url" type="file" class="form-control" name="img_url" required>
                            </div>
                          <button class="btn btn-outline-primary rounded-0 btn-lg" type="submit">Slaytı Kayıt Et</button>
                  </form>
                </ValidationObserver>
              </div>
            </div>

            <!-- /General -->

          </div>
        </div>

      </div>
    </div>
    <!-- /Page Wrapper -->
  </div>
  <!-- /Main Wrapper -->
  </v-app>
</template>
<script>
import Cookie from "js-cookie"
import {Base64} from 'js-base64';

import {ValidationObserver, ValidationProvider} from "vee-validate"

export default {
  middleware: ["session-control", "admin"],
  layout: "admin",
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  mounted() {
  },
  data() {
    return {
      title:null,
      description:null,
      userData: (Cookie.get("userData") !== null && Cookie.get("userData") !== undefined && Cookie.get("userData") !== "" ? JSON.parse(Base64.decode(Cookie.get("userData"))) : null),

    }
  },
  computed: {
    img_url() {
      return process.env.apiPublicUrl;
    },

  },
  methods: {
    saveSlides() {
      let formData = new FormData(this.$refs.slidesForm);
      this.$axios.post(process.env.apiBaseUrl + "panel/sliders/create", formData, {
        json: true,
        withCredentials: false,
        mode: 'no-cors',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token, Authorization',
          'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Credentials': true,
          "Content-Type": "multipart/form-data; boundary=" + formData._boundary,
          "Authorization": "Bearer " + this.userData.api_token
        },
        credentials: 'same-origin',
      })
        .then(response => {
          if (response.data.success) {
            this.$izitoast.success({
              title: response.data.title,
              message: response.data.msg,
              position: 'topCenter'
            })

            setTimeout(() => {
              this.$router.go(decodeURIComponent("/panel/slides"))
            }, 2000)
          } else {
            this.$izitoast.error({
              title: response.data.title,
              message: response.data.msg,
              position: 'topCenter'
            })
          }
        })
    }
  }
}
</script>
