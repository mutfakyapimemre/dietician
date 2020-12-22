<template>
  <v-app class="h-auto">
    <!-- Breadcrumb -->
    <div class="breadcrumb-bar">
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-12 col-sm-12 col-md-12 col-12 col-xl-12">
            <nav aria-label="breadcrumb" class="page-breadcrumb">
              <ol class="breadcrumb pl-0">
                <li class="breadcrumb-item">
                  <nuxt-link to="/" tag="a">Anasayfa</nuxt-link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">Profil</li>
              </ol>
            </nav>
            <h2 class="breadcrumb-title">Profil</h2>
          </div>
        </div>
      </div>
    </div>
    <!-- /Breadcrumb -->
    <!-- Page Content -->
    <div class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
            <Sidebar></Sidebar>
          </div>

          <div class="col-12 col-sm-12 col-md-7 col-lg-8 col-xl-9">
            <div class="row">
              <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <div class="card dash-card">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                        <div class="dash-widget dct-border-rht">
                          <div class="circle-bar circle-bar1">
                            <div class="circle-graph1" data-percent="75">
                              <img src="/img/icon-01.png" class="img-fluid" alt="patient" />
                            </div>
                          </div>
                          <div class="dash-widget-info">
                            <h6>Yakılan Kalori</h6>
                            <h3>1500</h3>
                            <p class="text-muted">Bugün</p>
                          </div>
                        </div>
                      </div>

                      <div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                        <div class="dash-widget dct-border-rht">
                          <div class="circle-bar circle-bar2">
                            <div class="circle-graph2" data-percent="65">
                              <img src="/img/icon-02.png" class="img-fluid" alt="Patient" />
                            </div>
                          </div>
                          <div class="dash-widget-info">
                            <h6>Verilen Kilo</h6>
                            <h3>160</h3>
                            <p class="text-muted">Haftada</p>
                          </div>
                        </div>
                      </div>

                      <div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                        <div class="dash-widget">
                          <div class="circle-bar circle-bar3">
                            <div class="circle-graph3" data-percent="50">
                              <img src="/img/icon-03.png" class="img-fluid" alt="Patient" />
                            </div>
                          </div>
                          <div class="dash-widget-info">
                            <h6>Yapılan Egzersiz</h6>
                            <h3>85</h3>
                            <p class="text-muted">Ayda</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <h4 class="mb-4">Şifre Güncelle</h4>
                <div class="appointment-tab">
                  <!-- Appointment Tab -->
                  <ul class="nav nav-tabs nav-tabs-solid nav-tabs-rounded">
                    <li class="nav-item">
                      <a class="nav-link active" href="#sifre_guncelle" data-toggle="tab">Şifre Güncelle</a>
                    </li>
                  </ul>
                  <!-- /Appointment Tab -->

                  <div class="tab-content">
                    <!-- Today Appointment Tab -->
                    <div class="tab-pane show active" id="sifre_guncelle">
                      <div class="card card-table mb-0">
                        <div class="card-body">
                          <ValidationObserver v-slot="{ handleSubmit }">
                            <form @submit.prevent="handleSubmit(updatePassword)" ref="passwordUpdateForm" enctype="multipart/form-data">
                              <div class="table-responsive mt-5">
                                <table class="table table-striped table-hover table-center table-borderless mb-0" style="border-top: none">
                                  <tbody>
                                    <tr>
                                      <td><b>Mevcut Şifreniz :</b></td>
                                      <td colspan="2">
                                        <ValidationProvider name="Mevcut Şifreniz" rules="required" v-slot="{ errors }">
                                          <input
                                            type="password"
                                            name="current_password"
                                            id="current_password"
                                            class="form-control"
                                            required
                                            v-model="current_password"
                                          />
                                          <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                                        </ValidationProvider>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td><b>Yeni Şifreniz :</b></td>
                                      <td colspan="2">
                                        <ValidationProvider name="Yeni Şifreniz" rules="required" v-slot="{ errors }">
                                          <input type="password" name="password" id="password" class="form-control" required v-model="password" />
                                          <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                                        </ValidationProvider>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td><b>Tekrar Yeni Şifreniz :</b></td>
                                      <td colspan="2">
                                        <ValidationProvider name="Tekrar Yeni Şifreniz" rules="required" v-slot="{ errors }">
                                          <input
                                            type="password"
                                            name="password_confirmation"
                                            id="password_confirmation"
                                            class="form-control"
                                            required
                                            v-model="password_confirmation"
                                          />
                                          <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                                        </ValidationProvider>
                                      </td>
                                    </tr>
                                  </tbody>
                                  <tfoot>
                                    <tr>
                                      <td colspan="3">
                                        <div class="form-group">
                                          <button class="btn btn-green-light float-right" type="submit">Şifremi Güncelle</button>
                                        </div>
                                      </td>
                                    </tr>
                                  </tfoot>
                                </table>
                              </div>
                            </form>
                          </ValidationObserver>
                        </div>
                      </div>
                    </div>
                    <!-- /Today Appointment Tab -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /Page Content -->
  </v-app>
</template>

<script>
import Cookie from "js-cookie";
import { Base64 } from "js-base64";
import $ from "jquery";
import { ValidationObserver, ValidationProvider } from "vee-validate";
import Sidebar from "~/components/includes/Sidebar";

export default {
  middleware: ["session-control", "guest"],
  name: "profile",
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  computed: {
    img_url() {
      return process.env.apiPublicUrl;
    },
  },
  mounted() {
    let inputs = document.querySelectorAll(".v-file-input input");
    [...inputs].forEach((input) => {
      input.remove();
    });
  },
  data() {
    return {
      password: null,
      password_confirmation: null,
      current_password: null,
      userData:
        Cookie.get("userData") !== null && Cookie.get("userData") !== undefined && Cookie.get("userData") !== ""
          ? JSON.parse(Base64.decode(Cookie.get("userData")))
          : this.$store.getters.loggedInUser !== undefined && this.$store.getters.loggedInUser !== null && this.$store.getters.loggedInUser !== ""
          ? this.$store.getters.loggedInUser
          : null,
    };
  },
  async asyncData({ app, store, route, params, error, $axios }) {
    try {
      if (store.getters.loggedInUser.status === "dietician") {
        let { data } = await $axios.get(process.env.apiBaseUrl + "dietician/profile/");
        return data;
      } else {
        let { data } = await $axios.get(process.env.apiBaseUrl + "users/profile/");
        return data;
      }
    } catch (e) {
      error({ message: "Kullanıcı Bilgisi Bulunamadı.", statusCode: 404 });
    }
  },

  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$izitoast.success({
        title: "Başarılı!",
        message: "Başarıyla Çıkış Yaptınız Yönlendiriliyorsunuz.",
        position: "topCenter",
      });
      setTimeout(() => {
        this.$router.go(decodeURIComponent("/"));
      }, 2000);
    },
    updatePassword() {
      let formData = new FormData(this.$refs.passwordUpdateForm);
      formData.append("api_token", this.userData.api_token);
      this.$axios
        .post(process.env.apiBaseUrl + (this.userData.status === "dietician" ? "dietician/profile/pass_update" : "users/pass_update"), formData, {
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
        })
        .then((response) => {
          if (response.data.success) {
            this.$izitoast.success({
              title: response.data.title,
              message: response.data.msg,
              position: "topCenter",
            });
            Cookie.set("userData", Base64.encode(JSON.stringify(response.data.data)));
            localStorage.setItem("userData", Base64.encode(JSON.stringify(response.data.data)));
            setTimeout(() => {
              this.$router.go(decodeURIComponent("/profile"));
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

<style scoped></style>
