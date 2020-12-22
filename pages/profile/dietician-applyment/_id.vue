<template>
  <v-app class="h-auto" v-if="userData.status !== 'dietician'">
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
                <li class="breadcrumb-item active" aria-current="page">Diyetisyen Onayı</li>
              </ol>
            </nav>
            <h2 class="breadcrumb-title">Diyetisyen Onayı</h2>
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
                <h4 class="mb-4">Diyetisyen Onayı</h4>
                <ValidationObserver v-slot="{ handleSubmit }">
                  <form @submit.prevent="handleSubmit(applyDietician)" ref="applyDieticianForm" enctype="multipart/form-data">
                    <v-card color="#15558d" dark>
                      <v-card-title class="headline"> Klinik Diyetisyen Diyetisyen Onay İşlemleri </v-card-title>

                      <v-card-subtitle>Lütfen e-mail veya sms yolu ile iletilen kodu girip diyetisyen onay işlemini tamamlayın.</v-card-subtitle>
                      <ValidationProvider name="Tekrar Yeni Şifreniz" rules="required" v-slot="{ errors }">
                        <v-text-field
                          label="Lütfen 6 Haneli Onay Kodunuzu Girin..."
                          hide-details="auto"
                          class="px-3"
                          v-model="dietician_check"
                        ></v-text-field>
                        <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                      </ValidationProvider>
                      <v-card-actions>
                        <button type="submit" class="btn btn-default">Diyetisyeni Onayla</button>
                      </v-card-actions>
                    </v-card>
                  </form>
                </ValidationObserver>
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
import Sidebar from "~/components/includes/Sidebar.vue";
export default {
  middleware: ["session-control", "guest"],
  name: "profile",
  components: {
    ValidationObserver,
    ValidationProvider,
    Sidebar,
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
      dietician_check: null,
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
  validate({ params }) {
    return params.id !== null ? params.id : null;
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
    applyDietician() {
      let formData = new FormData(this.$refs.applyDieticianForm);
      formData.append("api_token", this.userData.api_token);
      formData.append("slug", this.$route.params.id);
      this.$axios
        .post(process.env.apiBaseUrl + "users/dietician-update", formData, {
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
