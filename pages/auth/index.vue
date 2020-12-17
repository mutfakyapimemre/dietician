<template>
  <v-app class="h-100 align-middle align-items-center">
    <div class="login-wrapper align-middle align-items-center">
			<div class="container">
				<div class="loginbox">
					<div class="login-left">
						<img class="img-fluid" src="/img/logo.png" alt="Logo">
					</div>
					<div class="login-right bg-white">
						<div class="login-right-wrap">
							<h1>Klinik Diyetisyen</h1>
							<p class="account-subtitle">Yönetim Paneline Giriş Yap</p>

							<!-- Form -->
							<ValidationObserver v-slot="{ invalid,handleSubmit }">
                <form @submit.prevent="handleSubmit(onSubmit)" ref="userLogin" enctype="multipart/form-data">
                  <div class="form-group form-focus">
                    <ValidationProvider name="email" rules="required|email" v-slot="{ errors }">
                      <v-text-field
                                label="Email Adresiniz"
                                hide-details="auto"
                                name="email"
                                v-model="email"
                              ></v-text-field>
                      <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                    </ValidationProvider>
                  </div>
                  <div class="form-group form-focus">
                    <ValidationProvider name="password" rules="required" v-slot="{ errors }">
                      <v-text-field
                                label="Şifreniz"
                                hide-details="auto"
                                type="password"
                                name="password"
                                v-model="password"
                              ></v-text-field>
                      <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                    </ValidationProvider>
                  </div>
                  <button class="btn btn-green-light rounded-0 login-btn" type="submit">Giriş Yap</button>
                </form>
              </ValidationObserver>
							<!-- /Form -->
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
  </v-app>

</template>
<script>
import {
  ValidationObserver,
  ValidationProvider,
} from "vee-validate/dist/vee-validate.full.esm";
export default {
  layout: "adminlogin",
  middleware: ["session-control", "notadmin"],
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data() {
    return {
      isUser: false,
      isAdmin: true,
      email: null,
      password: null,
    };
  },
  methods: {
    onSubmit() {
      let formData = new FormData(this.$refs.userLogin);
      formData.append("isUser", this.isUser);
      formData.append("isAdmin", this.isAdmin);
      this.$store.dispatch("LoginUser", formData).then((response) => {
        if (response.success) {
          this.$izitoast.success({
            title: response.title,
            message: response.msg,
            position: "topCenter",
          });
          setTimeout(() => {
            this.$router.go(decodeURIComponent("/admin"));
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
  },
};
</script>
