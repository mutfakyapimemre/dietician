<template>
  <!-- Main Wrapper -->
  <div class="main-wrapper">
    <div class="page-wrapper">
      <div class="content container-fluid">
        <!-- Page Header -->
        <div class="page-header">
          <div class="row">
            <div class="col-sm-12">
              <h3 class="page-title">Ayarlar</h3>
              <ul class="breadcrumb">
                <li class="breadcrumb-item">
                  <nuxt-link to="/panel" tag="a">Anasayfa</nuxt-link>
                </li>
                <li class="breadcrumb-item active">Ayarlar</li>
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
                <h4 class="card-title">Ayarlar</h4>
              </div>
              <div class="card-body">
                <ValidationObserver v-slot="{ handleSubmit }">
                  <form @submit.prevent="handleSubmit(saveSettings)" ref="settingsForm" enctype="multipart/form-data">
                    <ul class="nav nav-tabs nav-tabs-bottom nav-justified">
                      <li class="nav-item">
                        <a class="nav-link active" href="#genel-ayarlar" data-toggle="tab">Genel Ayarlar</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#iletisim" data-toggle="tab">İletişim</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#sosyal-medya" data-toggle="tab">Sosyal Medya</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#meta-etiketleri" data-toggle="tab">Meta Etiketleri</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#site-analizleri" data-toggle="tab">Site Analizleri</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#canli-destek" data-toggle="tab">Canlı Destek</a>
                      </li>
                    </ul>
                    <div class="tab-content mb-3">
                      <div class="tab-pane show active" id="genel-ayarlar">
                        <ValidationProvider name="Web Sitesi Adı" rules="required" v-slot="{ errors }">
                          <div class="form-group">
                            <label for="title">Web Sitesi Adı</label>
                            <input id="title" type="text" class="form-control" name="title" v-model="title" />
                            <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                          </div>
                        </ValidationProvider>
                        <ValidationProvider name="Firma Adı" rules="required" v-slot="{ errors }">
                          <div class="form-group">
                            <label for="company_name">Firma Adı</label>
                            <input id="company_name" type="text" class="form-control" name="company_name" v-model="company_name" />
                            <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                          </div>
                        </ValidationProvider>
                        <div class="form-group">
                          <label>Website Logosu</label>
                          <input type="file" id="logo" ref="logo" name="logo" class="form-control" />
                        </div>
                        <div class="form-group mb-0">
                          <label>Favicon</label>
                          <input type="file" id="favicon" ref="favicon" name="favicon" class="form-control" />
                        </div>
                      </div>
                      <div class="tab-pane" id="iletisim">
                        <ValidationProvider name="Telefon" rules="required" v-slot="{ errors }">
                          <div class="form-group">
                            <label for="phone">Telefon</label>
                            <input id="phone" type="text" class="form-control" name="phone" v-model="phone" />
                            <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                          </div>
                        </ValidationProvider>
                        <ValidationProvider name="Email" rules="required|email" v-slot="{ errors }">
                          <div class="form-group">
                            <label for="email">Email</label>
                            <input id="email" type="text" class="form-control" name="email" v-model="email" />
                            <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                          </div>
                        </ValidationProvider>
                        <ValidationProvider name="Adres" rules="required" v-slot="{ errors }">
                          <div class="form-group">
                            <label for="address">Adres</label>
                            <input id="address" type="text" class="form-control" name="address" v-model="address" />
                            <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                          </div>
                        </ValidationProvider>
                      </div>
                      <div class="tab-pane" id="sosyal-medya">
                        <ValidationProvider name="Facebook" rules="" v-slot="{ errors }">
                          <div class="form-group">
                            <label for="facebook">Facebook</label>
                            <input id="facebook" type="text" class="form-control" name="facebook" v-model="facebook" />
                            <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                          </div>
                        </ValidationProvider>
                        <ValidationProvider name="Facebook" rules="" v-slot="{ errors }">
                          <div class="form-group">
                            <label for="twitter">Twitter</label>
                            <input id="twitter" type="text" class="form-control" name="twitter" v-model="twitter" />
                            <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                          </div>
                        </ValidationProvider>
                        <ValidationProvider name="Instagram" rules="" v-slot="{ errors }">
                          <div class="form-group">
                            <label for="instagram">Instagram</label>
                            <input id="instagram" type="text" class="form-control" name="instagram" v-model="instagram" />
                            <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                          </div>
                        </ValidationProvider>
                        <ValidationProvider name="Linkedin" rules="" v-slot="{ errors }">
                          <div class="form-group">
                            <label for="linkedin">Linkedin</label>
                            <input id="linkedin" type="text" class="form-control" name="linkedin" v-model="linkedin" />
                            <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                          </div>
                        </ValidationProvider>
                        <ValidationProvider name="Youtube" rules="" v-slot="{ errors }">
                          <div class="form-group">
                            <label for="youtube">Youtube</label>
                            <input id="youtube" type="text" class="form-control" name="youtube" v-model="youtube" />
                            <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                          </div>
                        </ValidationProvider>
                      </div>
                      <div class="tab-pane" id="meta-etiketleri">
                        <ValidationProvider name="Meta Keywords" rules="" v-slot="{ errors }">
                          <div class="form-group">
                            <label for="metaKeywords">Meta Keywords</label>
                            <textarea name="metaKeywords" id="metaKeywords" class="form-control" v-model="metaKeywords"></textarea>
                            <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                          </div>
                        </ValidationProvider>
                        <ValidationProvider name="Meta Description" rules="" v-slot="{ errors }">
                          <div class="form-group">
                            <label for="metaDescription">Meta Description</label>
                            <textarea name="metaDescription" id="metaDescription" class="form-control" v-model="metaDescription"></textarea>
                            <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                          </div>
                        </ValidationProvider>
                      </div>
                      <div class="tab-pane" id="site-analizleri">
                        <ValidationProvider name="Google Analytics" rules="" v-slot="{ errors }">
                          <div class="form-group">
                            <label for="analytics">Google Analytics</label>
                            <textarea name="analytics" id="analytics" class="form-control" v-model="analytics"></textarea>
                            <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                          </div>
                        </ValidationProvider>
                        <ValidationProvider name="Yandex Metrica" rules="" v-slot="{ errors }">
                          <div class="form-group">
                            <label for="metrica">Yandex Metrica</label>
                            <textarea name="metrica" id="metrica" class="form-control" v-model="metrica"></textarea>
                            <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                          </div>
                        </ValidationProvider>
                      </div>
                      <div class="tab-pane" id="canli-destek">
                        <ValidationProvider name="Canlı Destek" rules="" v-slot="{ errors }">
                          <div class="form-group">
                            <label for="liveSupport">Canlı Destek</label>
                            <textarea name="liveSupport" id="liveSupport" class="form-control" v-model="liveSupport"></textarea>
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
      title: null,
      company_name: null,
      phone: null,
      email: null,
      address: null,
      facebook: null,
      twitter: null,
      instagram: null,
      youtube: null,
      linkedin: null,
      metaKeywords: null,
      metaDescription: null,
      analytics: null,
      metrica: null,
      liveSupport: null,
      userData:
        Cookie.get("userData") !== null && Cookie.get("userData") !== undefined && Cookie.get("userData") !== ""
          ? JSON.parse(Base64.decode(Cookie.get("userData")))
          : null,
    };
  },
  methods: {
    saveSettings() {
      let formData = new FormData(this.$refs.settingsForm);
      this.$axios
        .post(process.env.apiBaseUrl + "panel/settings/create", formData, {
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
              this.$router.go(decodeURIComponent("/panel/settings"));
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
