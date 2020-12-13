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
              <h3 class="page-title">Ölçüt Düzenle</h3>
              <ul class="breadcrumb">
                <li class="breadcrumb-item">
                  <nuxt-link to="/panel" tag="a">Anasayfa</nuxt-link>
                </li>
                <li class="breadcrumb-item active">Ölçüt Düzenle</li>
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
                <h4 class="card-title">Ölçüt Düzenle</h4>
              </div>
              <div class="card-body">
                <ValidationObserver v-slot="{ invalid,handleSubmit }">
                  <form @submit.prevent="handleSubmit(editCriterias)" ref="criteriasForm" enctype="multipart/form-data">
                    <v-stepper v-model="e1">
                      <v-stepper-header>
                        <v-stepper-step :complete="e1 > 1" step="1">
                          Ölçüt Bilgileri
                        </v-stepper-step>

                        <v-divider></v-divider>
                      </v-stepper-header>

                      <v-stepper-items>
                        <v-stepper-content step="1">
                          <ValidationProvider name="Ölçüt Adı" rules="required" v-slot="{ errors }">
                            <div class="form-group">
                              <label for="title">Ölçüt Adı</label>
                              <input id="title" type="text" class="form-control" name="name" v-model="data.name">
                              <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                            </div>
                          </ValidationProvider>
                          <button class="btn btn-outline-primary rounded-0 btn-lg" type="submit">Ölçütü Güncelle</button>

                        </v-stepper-content>

                      </v-stepper-items>
                    </v-stepper>


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
    ValidationProvider
  },
  mounted() {
  },
  data() {
    return {
      counter: (this.data !== null && this.data !== undefined && this.data !== "" && this.data.values !== null && this.data.values !== undefined && this.data.values !== "" ? this.data.values.length : 0),
      e1: 1,
      imageData: [],
      data: {
        images: [],
      },
      userData: (Cookie.get("userData") !== null && Cookie.get("userData") !== undefined && Cookie.get("userData") !== "" ? JSON.parse(Base64.decode(Cookie.get("userData"))) : null),

    }
  },
  computed: {
    img_url() {
      return process.env.apiPublicUrl;
    },

  },
  validate({params}) {
    return (params.id !== null ? params.id : null)
  },
  async asyncData({params, error, $axios}) {
    try {

      const {data} = await $axios.get(process.env.apiBaseUrl + "panel/criteria/update/" + params.id)

      return data
    } catch (e) {
      error({message: 'Ölçüt Bilgisi Bulunamadı.', statusCode: 404})
    }
  },
  methods: {
    cloneProperty() {
      this.data.values.push({
        title: '',
        value: '',
        type: '',
        id: ++this.counter
      });
    },
    removeProperty(id) {
      this.data.values.splice(id, 1);
    },
    editCriterias() {
      let formData = new FormData(this.$refs.criteriasForm);
      this.$axios.post(process.env.apiBaseUrl + "panel/criteria/update/" + this.data._id.$oid, formData, {
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
      })
        .then(response => {
          if (response.data.success) {
            this.$izitoast.success({
              title: response.data.title,
              message: response.data.msg,
              position: 'topCenter'
            })
            setTimeout(() => {
              this.$router.go(decodeURIComponent("/panel/criterias"))
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
