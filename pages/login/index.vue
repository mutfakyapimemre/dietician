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
                <li class="breadcrumb-item active" aria-current="page">
                  Kullanıcı Girişi
                </li>
              </ol>
            </nav>
            <h2 class="breadcrumb-title">Kullanıcı Girişi</h2>
          </div>
        </div>
      </div>
    </div>
    <!-- /Breadcrumb -->
    <!-- Page Content -->
    <div class="content account-page" style="padding: 50px 0">
      <div class="container-fluid">
        <div class="row">
          <div
            class="col-12 col-sm-12 col-md-8 offset-md-2 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2"
          >
            <!-- Login Tab Content -->
            <div class="account-content">
              <div class="row align-items-center justify-content-center">
                <div class="col-12 col-sm-12 col-md-7 col-lg-6 col-xl-6 login-left">
                  <img
                    src="/img/login-banner.png"
                    class="img-fluid"
                    alt="Diyetisyen Klinik"
                  />
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 login-right">
                  <nav class="user-tabs mb-4">
                    <ul class="nav nav-tabs nav-tabs-bottom nav-justified">
                      <li class="nav-item">
                        <a class="nav-link active" href="#login" data-toggle="tab"
                          >Giriş Yap</a
                        >
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#register" data-toggle="tab"
                          >Kayıt Ol</a
                        >
                      </li>
                    </ul>
                  </nav>
                  <div class="tab-content" id="myTabContent">
                    <div
                      class="tab-pane fade show active"
                      id="login"
                      role="tabpanel"
                      aria-labelledby="login-tab"
                    >
                      <div class="login-header">
                        <h3 class="font-weight-bold">
                          Diyetisyen Klinik
                          <small class="font-weight-normal">Kullanıcı Girişi</small>
                          <nuxt-link to="/dietician-login" tag="a"
                            >Diyetisyen Misiniz? Hemen Giriş Yapın</nuxt-link
                          >
                        </h3>
                      </div>
                      <ValidationObserver v-slot="{ handleSubmit }">
                        <form
                          @submit.prevent="handleSubmit(onLogin)"
                          ref="userLogin"
                          enctype="multipart/form-data"
                        >
                          <div class="form-group form-focus">
                            <ValidationProvider
                              name="Email Adresiniz"
                              rules="required|email"
                              v-slot="{ errors }"
                            >
                              <v-text-field
                                label="Email Adresiniz"
                                hide-details="auto"
                                name="email"
                                v-model="email"
                              ></v-text-field>
                              <small class="font-weight-bold text-danger">{{
                                errors[0]
                              }}</small>
                            </ValidationProvider>
                          </div>

                          <div class="form-group form-focus">
                            <ValidationProvider
                              name="Şifreniz"
                              rules="required"
                              v-slot="{ errors }"
                            >
                              <v-text-field
                                label="Şifreniz"
                                hide-details="auto"
                                type="password"
                                name="password"
                                v-model="password"
                              ></v-text-field>
                              <small class="font-weight-bold text-danger">{{
                                errors[0]
                              }}</small>
                            </ValidationProvider>
                          </div>
                          <div class="text-right">
                            <nuxt-link to="/forgot-password" tag="a" class="forgot-link"
                              >Şifremi Unuttum.</nuxt-link
                            >
                          </div>
                          <button class="btn btn-green-light login-btn" type="submit">
                            Giriş Yap
                          </button>
                        </form>
                      </ValidationObserver>
                    </div>
                    <div
                      class="tab-pane fade"
                      id="register"
                      role="tabpanel"
                      aria-labelledby="register-tab"
                    >
                      <div class="login-header">
                        <h3 class="font-weight-bold">
                          Diyetisyen Klinik
                          <small class="font-weight-normal">Kullanıcı Kaydı</small>
                          <nuxt-link to="/dietician-login" tag="a"
                            >Diyetisyen Misiniz? Hemen Kayıt Olun</nuxt-link
                          >
                        </h3>
                      </div>
                      <ValidationObserver v-slot="{ handleSubmit }">
                        <form
                          @submit.prevent="handleSubmit(onRegister)"
                          ref="userRegister"
                          enctype="multipart/form-data"
                        >
                          <div class="form-group form-focus">
                            <ValidationProvider
                              name="Adınız ve Soyadınız"
                              rules="required"
                              v-slot="{ errors }"
                            >
                              <v-text-field
                                label="Adınız ve Soyadınız"
                                hide-details="auto"
                                type="text"
                                name="name"
                                v-model="name"
                              ></v-text-field>
                              <small class="font-weight-bold text-danger">{{
                                errors[0]
                              }}</small>
                            </ValidationProvider>
                          </div>
                          <div class="form-group form-focus">
                            <ValidationProvider
                              name="Email Adresiniz"
                              rules="required|email"
                              v-slot="{ errors }"
                            >
                              <v-text-field
                                label="Email Adresiniz"
                                hide-details="auto"
                                type="email"
                                name="email"
                                v-model="email"
                              ></v-text-field>
                              <small class="font-weight-bold text-danger">{{
                                errors[0]
                              }}</small>
                            </ValidationProvider>
                          </div>
                          <div class="form-group form-focus">
                            <ValidationProvider
                              name="Telefon Numaranız"
                              rules="required|phone"
                              v-slot="{ errors }"
                            >
                              <v-text-field
                                label="Telefon Numaranız"
                                hide-details="auto"
                                type="text"
                                name="phone"
                                v-model="phone"
                              ></v-text-field>
                              <small class="font-weight-bold text-danger">{{
                                errors[0]
                              }}</small>
                            </ValidationProvider>
                          </div>
                          <div class="form-group form-focus">
                            <ValidationProvider
                              name="Şifreniz"
                              rules="required"
                              v-slot="{ errors }"
                            >
                              <v-text-field
                                label="Şifreniz"
                                hide-details="auto"
                                type="password"
                                name="password"
                                v-model="password"
                              ></v-text-field>
                              <small class="font-weight-bold text-danger">{{
                                errors[0]
                              }}</small>
                            </ValidationProvider>
                          </div>
                          <div class="form-group form-focus">
                            <ValidationProvider
                              name="Tekrar Şifreniz"
                              rules="required"
                              v-slot="{ errors }"
                            >
                              <v-text-field
                                label="Şifreniz"
                                hide-details="auto"
                                type="password"
                                name="password_confirmation"
                                v-model="password_confirmation"
                              ></v-text-field>
                              <small class="font-weight-bold text-danger">{{
                                errors[0]
                              }}</small>
                            </ValidationProvider>
                          </div>
                          <button class="btn btn-green-light login-btn" type="submit">
                            Kayıt Ol
                          </button>
                        </form>
                      </ValidationObserver>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- /Login Tab Content -->
          </div>
        </div>
      </div>
    </div>
    <!-- /Page Content -->
  </v-app>
</template>
<script>
import {
  ValidationObserver,
  ValidationProvider,
} from "vee-validate/dist/vee-validate.full.esm";
import { mapGetters } from "vuex";
export default {
  middleware: ["session-control", "auth"],
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data() {
    return {
      isUser: true,
      isDietician: false,
      email: null,
      password: null,
      password_confirmation: null,
      name: null,
      phone: null,
    };
  },
  computed: {
    ...mapGetters(["isAuthenticated", "loggedInUser"]),
  },
  methods: {
    /**
     * User Login Method
     */
    onLogin() {
      let formData = new FormData(this.$refs.userLogin);
      formData.append("isUser", this.isUser);
      formData.append("isDietician", this.isDietician);
      this.$store.dispatch("LoginUser", formData).then((response) => {
        if (response.success) {
          this.$izitoast.success({
            title: response.title,
            message: response.msg,
            position: "topCenter",
          });
          setTimeout(() => {
            this.$router.go(decodeURIComponent("/profile"));
          }, 2000);
        } else {
          this.$izitoast.error({
            title: response.title,
            message: response.msg,
            position: "topCenter",
          });
        }
      });
    },
    /**
     * User Register Method
     */
    onRegister() {
      let formData = new FormData(this.$refs.userRegister);
      formData.append("isUser", this.isUser);
      formData.append("isDietician", this.isDietician);
      this.$store.dispatch("RegisterUser", formData).then((response) => {
        if (response.success) {
          this.$izitoast.success({
            title: response.title,
            message: response.msg,
            position: "topCenter",
          });
        } else {
          this.$izitoast.error({
            title: response.title,
            message: response.msg,
            position: "topCenter",
          });
        }
      });
    },
  },
};
</script>
