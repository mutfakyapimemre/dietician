<template>
  <!-- Main Wrapper -->
  <div class="main-wrapper">
    <div class="page-wrapper">
      <div class="content container-fluid">
        <!-- Page Header -->
        <div class="page-header">
          <div class="row">
            <div class="col-sm-12">
              <h3 class="page-title">Kullanıcılar</h3>
              <ul class="breadcrumb">
                <li class="breadcrumb-item">
                  <nuxt-link to="/panel" tag="a">Anasayfa</nuxt-link>
                </li>
                <li class="breadcrumb-item active">Kullanıcılar</li>
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
                <h4 class="card-title">Kullanıcı Ekle</h4>
              </div>
              <div class="card-body">
                <ValidationObserver v-slot="{ handleSubmit }">
                  <form @submit.prevent="handleSubmit(saveUsers)" ref="usersForm" enctype="multipart/form-data">
                    <ul class="nav nav-tabs nav-tabs-bottom nav-justified">
                      <li class="nav-item">
                        <a class="nav-link active" href="#genel-bilgiler" data-toggle="tab">Genel Bilgiler</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#sosyal-medya" data-toggle="tab">Sosyal Medya</a>
                      </li>
                    </ul>
                    <div class="tab-content mb-3">
                      <div class="tab-pane show active" id="genel-bilgiler">
                        <ValidationProvider name="Adınız ve Soyadınız" rules="required" v-slot="{ errors }">
                          <div class="form-group">
                            <label for="title">Adınız ve Soyadınız</label>
                            <input id="title" type="text" class="form-control" name="name" v-model="data.name" />
                            <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                          </div>
                        </ValidationProvider>
                        <ValidationProvider name="Email Adresiniz" rules="required|email" v-slot="{ errors }">
                          <div class="form-group">
                            <label for="company_name">Email Adresiniz</label>
                            <input id="company_name" type="text" class="form-control" name="email" v-model="data.email" />
                            <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                          </div>
                        </ValidationProvider>
                        <ValidationProvider name="Şifreniz" rules="required" v-slot="{ errors }">
                          <div class="form-group">
                            <label for="password">Şifreniz</label>
                            <input id="password" type="text" class="form-control" name="password" v-model="data.password" />
                            <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                          </div>
                        </ValidationProvider>
                        <ValidationProvider name="Tekrar Şifreniz" rules="required" v-slot="{ errors }">
                          <div class="form-group">
                            <label for="password_confirmation">Tekrar Şifreniz</label>
                            <input
                              id="password_confirmation"
                              type="text"
                              class="form-control"
                              name="password_confirmation"
                              v-model="data.password_confirmation"
                            />
                            <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                          </div>
                        </ValidationProvider>
                        <div class="row">
                          <div class="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                            <img v-bind:src="decodeURIComponent(siteSettings.baseURL) + '/public/storage/' + data.img_url" v-bind:alt="data.name" />
                          </div>
                          <div class="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9">
                            <div class="form-group">
                              <label>Kullanıcı Görseli</label>
                              <input type="file" id="img_url" ref="img_url" name="img_url" class="form-control" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="tab-pane" id="sosyal-medya">
                        <ValidationProvider name="Facebook" rules="" v-slot="{ errors }">
                          <div class="form-group">
                            <label for="facebook">Facebook</label>
                            <input id="facebook" type="text" class="form-control" name="facebook" v-model="data.facebook" />
                            <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                          </div>
                        </ValidationProvider>
                        <ValidationProvider name="Facebook" rules="" v-slot="{ errors }">
                          <div class="form-group">
                            <label for="twitter">Twitter</label>
                            <input id="twitter" type="text" class="form-control" name="twitter" v-model="data.twitter" />
                            <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                          </div>
                        </ValidationProvider>
                        <ValidationProvider name="Instagram" rules="" v-slot="{ errors }">
                          <div class="form-group">
                            <label for="instagram">Instagram</label>
                            <input id="instagram" type="text" class="form-control" name="instagram" v-model="data.instagram" />
                            <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                          </div>
                        </ValidationProvider>
                        <ValidationProvider name="Linkedin" rules="" v-slot="{ errors }">
                          <div class="form-group">
                            <label for="linkedin">Linkedin</label>
                            <input id="linkedin" type="text" class="form-control" name="linkedin" v-model="data.linkedin" />
                            <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                          </div>
                        </ValidationProvider>
                        <ValidationProvider name="Youtube" rules="" v-slot="{ errors }">
                          <div class="form-group">
                            <label for="youtube">Youtube</label>
                            <input id="youtube" type="text" class="form-control" name="youtube" v-model="data.youtube" />
                            <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                          </div>
                        </ValidationProvider>
                      </div>
                    </div>
                    <div class="form-group">
                      <button class="btn btn-primary login-btn" type="submit">Gönder</button>
                    </div>
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
      userData:
        Cookie.get("userData") !== null && Cookie.get("userData") !== undefined && Cookie.get("userData") !== ""
          ? JSON.parse(Base64.decode(Cookie.get("userData")))
          : null,
    };
  },
  methods: {
    saveUsers() {
      let formData = new FormData(this.$refs.usersForm);

      this.$axios
        .post(process.env.apiBaseUrl + "panel/users/create", formData, {
          json: true,
          withCredentials: false,
          mode: "no-cors",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token, Authorization",
            "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Credentials": true,
            "Content-Type": "multipart/form-data; boundary=" + formData._boundary,
            Authorization: "Bearer " + this.userData.api_token,
          },
          credentials: "same-origin",
        })
        .then((response) => {
          if (response.data.success) {
            this.$izitoast.success({
              title: response.data.title,
              message: response.data.msg,
              position: "topCenter",
            });
            setTimeout(() => {
              this.$router.go(decodeURIComponent("/panel/users"));
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
