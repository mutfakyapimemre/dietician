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
                <h3 class="page-title">Danışmanlarım</h3>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item">
                    <nuxt-link to="/panel" tag="a">Anasayfa</nuxt-link>
                  </li>
                  <li class="breadcrumb-item active">Danışmanlarım</li>
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
                  <h4 class="card-title">Danışman Ekle</h4>
                </div>
                <div class="card-body">
                  <v-alert
                    color="indigo"
                    dark
                    dense
                    icon="mdi-information"
                    prominent
                  >
                    <h3 class="headline">
                      Bilgi
                    </h3>
                    <div>Danışman Kaydı Yapabilmeniz İçin Aşağıdaki Bilgileri Doldurup Danışmanınıza İstek
                      Gönderebilirsiniz.
                    </div>

                    <v-divider
                      class="my-4 info"
                      style="opacity: 0.22"
                    ></v-divider>

                    <div>
                      Gönderdiğiniz İstek Danışmanınız Tarafından Kabul Edildikten Sonra E-Diyet, Egzersiz, Randevu
                      Oluşturma Gibi İşlemler Yapılabilir.
                    </div>
                  </v-alert>
                  <ValidationObserver v-slot="{ invalid,handleSubmit }">
                    <form @submit.prevent="handleSubmit(saveConsultants)" ref="usersForm" enctype="multipart/form-data">
                      <v-text-field label="Danışmanın Kimlik Numarası" name="tc" v-model="consultant.tc" required
                                    counter="11"></v-text-field>
                      <v-text-field label="Danışmanın Telefon Numarası" name="phone" v-model="consultant.phone" required
                                    counter="11"></v-text-field>
                      <div class="form-group">
                        <button class="btn btn-primary login-btn text-white" type="submit">Danışmanı Bul ve Diyetisyen
                          Bildirimi Yolla
                        </button>
                      </div>
                    </form>
                  </ValidationObserver>
                  <div class="profile-header" v-if="data !== null && data!== undefined && data!==''">
                    <div class="row align-items-center">
                      <div class="col-auto profile-image">
                        <a href="javascript:void(0)">
                          <img v-bind:src="img_url+'/public/storage/'+data.img_url" class="img-fluid"
                               v-bind:alt="data.name">
                        </a>
                      </div>
                      <div class="col ml-md-n2 profile-user-info">
                        <h4 class="user-name mb-0">{{ data.name }}</h4>
                        <h6 class="text-muted">{{ data.email }}</h6>
                        <div class="user-Location"><i class="fa fa-map-marker"></i> {{ data.city }}, {{ data.town }}
                        </div>
                        <div class="user-Location"><i class="fa fa-phone"></i> <a v-bind:href="'tel:'+data.phone">{{ data.phone }}</a>
                        </div>
                        <div class="user-Location"><i class="fa fa-envelope"></i> <a v-bind:href="'mailto:'+data.email">{{ data.email }}</a>
                        </div>
                        <div class="about-text">{{ data.about }}</div>
                      </div>
                    </div>
                  </div>

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
  middleware: ["session-control", "dietician"],
  layout: "dietician",
  components: {
    ValidationObserver,
    ValidationProvider
  },
  data() {
    return {
      rules: [
        value => !!value || 'Zorunludur.',
        value => (value && value.length >= 3) || 'Alanı Minimum 11 Karakter Olmalıdır',
      ],
      consultant: {tc: null, phone: null},
      userData: (Cookie.get("userData") !== null && Cookie.get("userData") !== undefined && Cookie.get("userData") !== "" ? JSON.parse(Base64.decode(Cookie.get("userData"))) : null),
    }
  },
  computed: {
    img_url() {
      return process.env.apiPublicUrl;
    },
  },
  mounted() {

  },
  methods: {
    saveConsultants() {
      let formData = new FormData(this.$refs.usersForm);
      formData.append("dietician_id",this.userData._id)
      this.$axios.post(process.env.apiBaseUrl + "dietician/users/user-mail", formData, {
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
          console.log(response);
          if (response.data.success) {
            this.$izitoast.success({
              title: response.data.title,
              message: response.data.msg,
              position: 'topCenter'
            })
            setTimeout(() => {
              this.$router.go(decodeURIComponent("/dietician-panel/consultants"))
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
