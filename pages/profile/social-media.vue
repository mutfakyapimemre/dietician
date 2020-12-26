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
                  Sosyal Medya Ayarlarım
                </li>
              </ol>
            </nav>
            <h2 class="breadcrumb-title">Sosyal Medya Ayarlarım</h2>
          </div>
        </div>
      </div>
    </div>
    <!-- /Breadcrumb -->
    <!-- Page Content -->
    <div class="content">
      <div class="container-fluid">
        <div class="row">
          <div
            class="col-12 col-sm-12 col-md-5 col-lg-4 col-xl-3 theiaStickySidebar"
          >
            <Sidebar v-if="userData.status !== 'dietician'"></Sidebar>
            <DieticianSidebar
              v-if="userData.status === 'dietician'"
            ></DieticianSidebar>
          </div>

          <div class="col-12 col-sm-12 col-md-7 col-lg-8 col-xl-9">
            <div class="card card-table my-0">
              <div class="card-header">
                <div class="card-title my-auto">
                  <h4 class="my-auto">Sosyal Medya Ayarlarım</h4>
                </div>
              </div>
              <div class="card-body">
                <ValidationObserver v-slot="{ handleSubmit }">
                  <form
                    @submit.prevent="handleSubmit(updateSocialMedia)"
                    ref="socialMediaUpdateForm"
                    enctype="multipart/form-data"
                  >
                    <div class="table-responsive">
                      <table
                        class="table table-striped table-hover table-center table-borderless mb-0"
                        style="border-top: none"
                      >
                        <tbody>
                          <tr>
                            <td><b>Facebook :</b></td>
                            <td colspan="2">
                              <input
                                type="text"
                                name="facebook"
                                id="facebook"
                                class="form-control"
                                v-model="userData.facebook"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td><b>Instagram :</b></td>
                            <td colspan="2">
                              <input
                                type="text"
                                name="instagram"
                                id="instagram"
                                class="form-control"
                                v-model="userData.instagram"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td><b>Linkedin :</b></td>
                            <td colspan="2">
                              <input
                                type="text"
                                name="linkedin"
                                id="linkedin"
                                class="form-control"
                                v-model="userData.linkedin"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td><b>Twitter :</b></td>
                            <td colspan="2">
                              <input
                                type="text"
                                name="twitter"
                                id="twitter"
                                class="form-control"
                                v-model="userData.twitter"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td><b>Youtube :</b></td>
                            <td colspan="2">
                              <input
                                type="text"
                                name="youtube"
                                id="youtube"
                                class="form-control"
                                v-model="userData.youtube"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td><b>Medium :</b></td>
                            <td colspan="2">
                              <input
                                type="text"
                                name="medium"
                                id="medium"
                                class="form-control"
                                v-model="userData.medium"
                              />
                            </td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <td colspan="3">
                              <div class="form-group">
                                <button
                                  class="btn btn-green-light float-right"
                                  type="submit"
                                >
                                  Sosyal Medya Bilgilerimi Güncelle
                                </button>
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
import DieticianSidebar from "~/components/includes/DieticianSidebar";

export default {
  middleware: ["session-control", "guest"],
  name: "profile",
  components: {
    ValidationObserver,
    ValidationProvider,
    Sidebar,
    DieticianSidebar,
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
      userData:
        Cookie.get("userData") !== null &&
        Cookie.get("userData") !== undefined &&
        Cookie.get("userData") !== ""
          ? JSON.parse(Base64.decode(Cookie.get("userData")))
          : this.$store.getters.loggedInUser !== undefined &&
            this.$store.getters.loggedInUser !== null &&
            this.$store.getters.loggedInUser !== ""
          ? this.$store.getters.loggedInUser
          : null,
    };
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
    updateSocialMedia() {
      let formData = new FormData(this.$refs.socialMediaUpdateForm);
      formData.append("api_token", this.userData.api_token);
      this.$axios
        .post(
          process.env.apiBaseUrl +
            (this.userData.status === "dietician"
              ? "dietician/profile/update"
              : "users/update"),
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
            Cookie.set(
              "userData",
              Base64.encode(JSON.stringify(response.data.data))
            );
            localStorage.setItem(
              "userData",
              Base64.encode(JSON.stringify(response.data.data))
            );
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