<template>
  <v-app class="h-auto">
    <!-- Breadcrumb -->
    <div class="breadcrumb-bar">
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-12 col-sm-12 col-md-12 col-12 col-xl-12">
            <nav aria-label="breadcrumb" class="page-breadcrumb">
              <ol class="breadcrumb pl-0">
                <li class="breadcrumb-item"><nuxt-link to="/" tag="a">Anasayfa</nuxt-link></li>
                <li class="breadcrumb-item active" aria-current="page">Yönetici Girişi</li>
              </ol>
            </nav>
            <h2 class="breadcrumb-title">Yönetici Girişi</h2>
          </div>
        </div>
      </div>
    </div>
    <!-- /Breadcrumb -->
    <!-- Page Content -->
    <div class="content account-page" style="padding: 50px 0;">
      <div class="container-fluid">
        <div class="row">
          <div
            class="col-12 col-sm-12 col-md-8 offset-md-2 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2"
          >
            <!-- Login Tab Content -->
            <div class="account-content">
              <div class="row align-items-center justify-content-center">
                <div class="col-12 col-sm-12 col-md-7 col-lg-6 col-xl-6 login-left">
                  <img src="/img/login-banner.png" class="img-fluid" alt="Doccure Login"/>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 login-right">
                  <div class="login-header">
                    <h3 class="font-weight-bold">
                      Diyetisyen Klinik
                      <small class="font-weight-normal">Yönetici Paneli</small>
                    </h3>
                  </div>
                  <ValidationObserver v-slot="{ invalid,handleSubmit }">
                    <form @submit.prevent="handleSubmit(onSubmit)" ref="userLogin" enctype="multipart/form-data">
                      <div class="form-group form-focus">
                        <ValidationProvider name="email" rules="required|email" v-slot="{ errors }">
                          <input id="email" name="email" v-model="email" type="email" class="form-control floating"/>
                          <label class="focus-label" for="email">Email</label>
                          <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                        </ValidationProvider>
                      </div>
                      <div class="form-group form-focus">
                        <ValidationProvider name="password" rules="required" v-slot="{ errors }">
                          <input id="password" name="password" v-model="password" type="password" class="form-control floating"/>
                          <label class="focus-label" for="password">Şifre</label>
                          <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                        </ValidationProvider>
                      </div>
                      <div class="text-right">
                        <nuxt-link class="forgot-link" tag="a" to="/forgot-password">Şifremi Unuttum.</nuxt-link>
                      </div>
                      <button class="btn btn-primary btn-block btn-lg login-btn" type="submit">Giriş Yap</button>
                    </form>
                  </ValidationObserver>
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
import {ValidationObserver, ValidationProvider} from "vee-validate/dist/vee-validate.full.esm";
export default {
  middleware: ["session-control","notadmin"],
  components: {
    ValidationObserver,
    ValidationProvider
  },
  data() {
    return {
      isUser: false,
      isAdmin: true,
      email:null,
      password:null
    };
  },
  methods: {
    onSubmit() {
      let formData = new FormData(this.$refs.userLogin);
      formData.append("isUser",this.isUser)
      formData.append("isAdmin",this.isAdmin)
      this.$store
        .dispatch("LoginUser", formData)
        .then((response) => {
          if (response.success) {
            this.$izitoast.success({
              title: response.title,
              message: response.msg,
              position: 'topCenter'
            })
            setTimeout(() => {
              this.$router.go(decodeURIComponent( "/admin"))
            },2000)
          } else {
            this.$izitoast.error({
              title: response.title,
              message: response.msg,
              position: 'topCenter'
            })
          }
        });
    },
  },
};
</script>
