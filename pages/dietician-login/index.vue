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
                <li class="breadcrumb-item active" aria-current="page">Diyetisyen Girişi</li>
              </ol>
            </nav>
            <h2 class="breadcrumb-title">Diyetisyen Girişi</h2>
          </div>
        </div>
      </div>
    </div>
    <!-- /Breadcrumb -->
    <!-- Page Content -->
    <div class="content account-page" style="padding: 50px 0">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-8 offset-md-2 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2">
            <!-- Login Tab Content -->
            <div class="account-content">
              <div class="row align-items-center justify-content-center">
                <div class="col-12 col-sm-12 col-md-7 col-lg-6 col-xl-6 login-left">
                  <img src="/img/login-banner.png" class="img-fluid" alt="Diyetisyen Klinik" />
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 login-right">
                  <nav class="user-tabs mb-4">
                    <ul class="nav nav-tabs nav-tabs-bottom nav-justified">
                      <li class="nav-item">
                        <a class="nav-link active" href="#login" data-toggle="tab">Giriş Yap</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#register" data-toggle="tab">Kayıt Ol</a>
                      </li>
                    </ul>
                  </nav>
                  <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="login" role="tabpanel" aria-labelledby="login-tab">
                      <div class="login-header">
                        <h3 class="font-weight-bold">
                          Diyetisyen Klinik
                          <small class="font-weight-normal">Diyetisyen Girişi</small>
                          <nuxt-link to="/login" tag="a">Kullanıcı Mısınız? Hemen Giriş Yapın</nuxt-link>
                        </h3>
                      </div>
                      <ValidationObserver v-slot="{ handleSubmit }">
                        <form @submit.prevent="handleSubmit(onLogin)" ref="userLogin" enctype="multipart/form-data">
                          <div class="form-group form-focus">
                            <ValidationProvider name="Email Adresiniz" rules="required|email" v-slot="{ errors }">
                              <v-text-field label="Email Adresiniz" hide-details="auto" name="email" v-model="email"></v-text-field>
                              <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                            </ValidationProvider>
                          </div>

                          <div class="form-group form-focus">
                            <ValidationProvider name="Şifreniz" rules="required" v-slot="{ errors }">
                              <v-text-field label="Şifreniz" hide-details="auto" type="password" name="password" v-model="password"></v-text-field>
                              <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                            </ValidationProvider>
                          </div>
                          <div class="text-right">
                            <nuxt-link to="/forgot-password" tag="a" class="forgot-link">Şifremi Unuttum.</nuxt-link>
                          </div>
                          <button class="btn btn-green-light rounded-0 login-btn" type="submit">Giriş Yap</button>
                        </form>
                      </ValidationObserver>
                    </div>
                    <div class="tab-pane fade" id="register" role="tabpanel" aria-labelledby="register-tab">
                      <div class="login-header">
                        <h3 class="font-weight-bold">
                          Diyetisyen Klinik
                          <small class="font-weight-normal">Diyetisyen Kaydı</small>
                          <nuxt-link to="/login" tag="a">Kullanıcı Mısınız? Hemen Kayıt Olun</nuxt-link>
                        </h3>
                      </div>
                      <ValidationObserver v-slot="{ handleSubmit }">
                        <form @submit.prevent="handleSubmit(onRegister)" ref="userRegister" enctype="multipart/form-data">
                          <v-stepper v-model="e1">
                            <v-stepper-header>
                              <v-stepper-step :complete="e1 > 1" step="1"> Kayıt Bilgileriniz </v-stepper-step>

                              <v-divider></v-divider>

                              <v-stepper-step :complete="e1 > 2" step="2"> Diploma / İşyeri Bilgileriniz </v-stepper-step>
                            </v-stepper-header>

                            <v-stepper-items>
                              <v-stepper-content step="1">
                                <div class="form-group form-focus">
                                  <ValidationProvider name="Adınız ve Soyadınız" rules="required" v-slot="{ errors }">
                                    <v-text-field label="Adınız ve Soyadınız" hide-details="auto" name="name" v-model="name"></v-text-field>
                                    <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                                  </ValidationProvider>
                                </div>

                                <div class="form-group form-focus">
                                  <ValidationProvider name="T.C. Kimlik Numaranız" rules="required" v-slot="{ errors }">
                                    <v-text-field label="T.C. Kimlik Numaranız" hide-details="auto" name="tc" v-model="tc"></v-text-field>
                                    <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                                  </ValidationProvider>
                                </div>

                                <div class="form-group form-focus">
                                  <ValidationProvider name="Email Adresiniz" rules="required|email" v-slot="{ errors }">
                                    <v-text-field label="Email Adresiniz" hide-details="auto" name="email" v-model="email"></v-text-field>
                                    <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                                  </ValidationProvider>
                                </div>

                                <div class="form-group form-focus">
                                  <ValidationProvider name="Telefon Numaranız" rules="required" v-slot="{ errors }">
                                    <v-text-field label="Telefon Numaranız" hide-details="auto" name="phone" v-model="phone"></v-text-field>
                                    <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                                  </ValidationProvider>
                                </div>
                                <div class="form-group form-focus">
                                  <ValidationProvider name="Şifreniz" rules="required" v-slot="{ errors }">
                                    <v-text-field
                                      label="Şifreniz"
                                      hide-details="auto"
                                      name="password"
                                      type="password"
                                      v-model="password"
                                    ></v-text-field>
                                    <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                                  </ValidationProvider>
                                </div>
                                <div class="form-group form-focus">
                                  <ValidationProvider name="Tekrar Şifreniz" rules="required" v-slot="{ errors }">
                                    <v-text-field
                                      label="Tekrar Şifreniz"
                                      hide-details="auto"
                                      name="password_confirmation"
                                      type="password"
                                      v-model="password_confirmation"
                                    ></v-text-field>
                                    <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                                  </ValidationProvider>
                                </div>
                                <button class="btn btn-green-light rounded-0" role="button" type="button" @click="e1 = 2">Sonraki</button>
                              </v-stepper-content>

                              <v-stepper-content step="2">
                                <div class="form-group form-focus">
                                  <ValidationProvider name="Hastane/Poliklinik Adı" rules="required" v-slot="{ errors }">
                                    <v-text-field
                                      label="Hastane/Poliklinik Adı"
                                      hide-details="auto"
                                      name="hospitalName"
                                      v-model="hospitalName"
                                    ></v-text-field>
                                    <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                                  </ValidationProvider>
                                </div>
                                <div class="form-group form-focus">
                                  <ValidationProvider name="Departmanınız" rules="required" v-slot="{ errors }">
                                    <v-text-field label="Departmanınız" hide-details="auto" name="department" v-model="department"></v-text-field>
                                    <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                                  </ValidationProvider>
                                </div>
                                <div class="form-group form-focus">
                                  <ValidationProvider name="İş Telefon Numaranız" rules="required" v-slot="{ errors }">
                                    <v-text-field
                                      label="İş Telefon Numaranız"
                                      hide-details="auto"
                                      name="work_phone"
                                      v-model="work_phone"
                                    ></v-text-field>
                                    <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                                  </ValidationProvider>
                                </div>
                                <div class="form-group form-focus">
                                  <ValidationProvider name="Telefon Numaranız 2" rules="required" v-slot="{ errors }">
                                    <v-text-field
                                      label="İş Telefon Numaranız 2"
                                      hide-details="auto"
                                      name="work_phone_2"
                                      v-model="work_phone_2"
                                    ></v-text-field>
                                    <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                                  </ValidationProvider>
                                </div>
                                <div class="form-group form-focus">
                                  <ValidationProvider name="İşyerinizin Bulunduğu İl" rules="required" v-slot="{ errors }">
                                    <label for="company_city">İşyerinizin Bulunduğu İl</label>
                                    <select
                                      v-on:change="getTowns"
                                      name="company_city"
                                      id="company_city"
                                      class="form-control rounded-0"
                                      v-if="
                                        country.cities !== null && country.cities !== undefined && country.cities !== '' && country.cities.length > 0
                                      "
                                    >
                                      <option value="" selected="selected">İl Seçiniz.</option>
                                      <option
                                        v-bind:data-id="city.towns"
                                        v-bind:value="city.name"
                                        v-bind:key="index"
                                        v-for="(city, index) in country.cities"
                                      >
                                        {{ city.name }}
                                      </option>
                                    </select>
                                    <select
                                      v-on:change="getTowns"
                                      name="company_city"
                                      id="company_city"
                                      class="form-control rounded-0"
                                      v-else-if="
                                        country.cities === null && country.cities === undefined && country.cities === '' && country.cities.length <= 0
                                      "
                                    >
                                      <option value="" selected="selected">İl Seçiniz.</option>
                                    </select>
                                    <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                                  </ValidationProvider>
                                </div>
                                <div class="form-group form-focus">
                                  <ValidationProvider name="İşyerinizin Bulunduğu İlçe" rules="required" v-slot="{ errors }">
                                    <label for="company_town">İşyerinizin Bulunduğu İlçe</label>
                                    <select
                                      v-on:change="getDistricts"
                                      name="company_town"
                                      id="company_town"
                                      class="form-control floating rounded-0"
                                      v-if="country.towns !== null && country.towns !== undefined && country.towns !== '' && country.towns.length > 0"
                                    >
                                      <option value="" v-if="country.towns.length > 0" selected="selected">İlçe Seçiniz.</option>
                                      <option value="" v-if="country.towns.length <= 0" selected="selected">Önce İl Seçiniz.</option>
                                      <option
                                        v-bind:data-id="town.districts"
                                        v-bind:value="town.name"
                                        v-bind:key="index"
                                        v-for="(town, index) in country.towns"
                                      >
                                        {{ town.name }}
                                      </option>
                                    </select>
                                    <select
                                      v-on:change="getDistricts"
                                      name="company_town"
                                      id="company_town"
                                      class="form-control floating rounded-0"
                                      v-else-if="
                                        country.towns === null && country.towns === undefined && country.towns === '' && country.towns.length <= 0
                                      "
                                    >
                                      <option value="" v-if="country.towns.length > 0" selected="selected">İlçe Seçiniz.</option>
                                      <option value="" v-if="country.towns.length <= 0" selected="selected">Önce İl Seçiniz.</option>
                                    </select>
                                    <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                                  </ValidationProvider>
                                </div>
                                <div class="form-group form-focus">
                                  <ValidationProvider name="İşyerinizin Bulunduğu Semt" rules="required" v-slot="{ errors }">
                                    <label for="company_district">İşyerinizin Bulunduğu Semt</label>
                                    <select
                                      v-on:change="getNeighborhoods"
                                      name="company_district"
                                      id="company_district"
                                      class="form-control floating rounded-0"
                                      v-if="
                                        country.districts !== null &&
                                        country.districts !== undefined &&
                                        country.districts !== '' &&
                                        country.districts.length > 0
                                      "
                                    >
                                      <option value="" v-if="country.districts.length > 0" selected="selected">Semt Seçiniz.</option>
                                      <option value="" v-if="country.districts.length <= 0" selected="selected">Önce İlçe Seçiniz.</option>
                                      <option
                                        v-bind:data-id="district.neighborhoods"
                                        v-bind:value="district.name"
                                        v-bind:key="index"
                                        v-for="(district, index) in country.districts"
                                      >
                                        {{ district.name }}
                                      </option>
                                    </select>
                                    <select
                                      v-on:change="getNeighborhoods"
                                      name="company_district"
                                      id="company_district"
                                      class="form-control floating rounded-0"
                                      v-else-if="
                                        country.districts === null &&
                                        country.districts === undefined &&
                                        country.districts === '' &&
                                        country.districts.length <= 0
                                      "
                                    >
                                      <option value="" v-if="country.districts.length > 0" selected="selected">Semt Seçiniz.</option>
                                      <option value="" v-if="country.districts.length <= 0" selected="selected">Önce İlçe Seçiniz.</option>
                                    </select>
                                    <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                                  </ValidationProvider>
                                </div>
                                <div class="form-group form-focus">
                                  <ValidationProvider name="İşyerinizin Bulunduğu Mahalle" rules="required" v-slot="{ errors }">
                                    <label for="company_neighborhood">İşyerinizin Bulunduğu Mahalle</label>
                                    <select
                                      name="company_neighborhood"
                                      id="company_neighborhood"
                                      class="form-control floating rounded-0"
                                      v-if="
                                        country.neighborhoods !== null &&
                                        country.neighborhoods !== undefined &&
                                        country.neighborhoods !== '' &&
                                        country.neighborhoods.length > 0
                                      "
                                    >
                                      <option value="" v-if="country.neighborhoods.length > 0" selected="selected">Mahalle Seçiniz.</option>
                                      <option value="" v-if="country.neighborhoods.length <= 0" selected="selected">Önce Semt Seçiniz.</option>
                                      <option
                                        v-bind:value="neighborhood.name"
                                        v-bind:key="index"
                                        v-for="(neighborhood, index) in country.neighborhoods"
                                      >
                                        {{ neighborhood.name }}
                                      </option>
                                    </select>
                                    <select
                                      name="company_neighborhood"
                                      id="company_neighborhood"
                                      class="form-control floating rounded-0"
                                      v-else-if="
                                        country.neighborhoods === null &&
                                        country.neighborhoods === undefined &&
                                        country.neighborhoods === '' &&
                                        country.neighborhoods.length <= 0
                                      "
                                    >
                                      <option value="" v-if="country.neighborhoods.length > 0" selected="selected">Mahalle Seçiniz.</option>
                                      <option value="" v-if="country.neighborhoods.length <= 0" selected="selected">Önce Semt Seçiniz.</option>
                                    </select>
                                    <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                                  </ValidationProvider>
                                </div>
                                <div class="form-group form-focus">
                                  <ValidationProvider name="İşyerinizin Adresi" rules="required" v-slot="{ errors }">
                                    <v-textarea
                                      name="company_address"
                                      label="İşyerinizin Adresi"
                                      value=""
                                      clearable
                                      clear-icon="fa fa-times-circle"
                                      v-model="company_address"
                                    ></v-textarea>
                                    <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                                  </ValidationProvider>
                                </div>
                                <div class="form-group form-focus">
                                  <input
                                    type="file"
                                    name="certificate_file"
                                    class="form-control rounded-0"
                                    placeholder="Diploma Örneği"
                                    accept="image/*,.pdf"
                                    required
                                  />
                                </div>
                                <div class="form-group form-focus">
                                  <input
                                    type="file"
                                    name="identity_file"
                                    class="form-control rounded-0"
                                    placeholder="Kimlik İle Çekilmiş Fotoğraf Örneği"
                                    accept="image/*"
                                    required
                                  />
                                </div>
                                <div class="form-group pt-3">
                                  <button class="btn btn-info-light mr-3 rounded-0 float-left" type="button" role="button" @click="e1 = 1">
                                    Geri Dön
                                  </button>
                                  <button class="btn btn-green-light rounded-0" type="submit">Kayıt Ol</button>
                                </div>
                              </v-stepper-content>
                            </v-stepper-items>
                          </v-stepper>
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
import { ValidationObserver, ValidationProvider } from "vee-validate/dist/vee-validate.full.esm";
import { mapGetters } from "vuex";

export default {
  middleware: ["session-control", "auth"],
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  mounted() {
    this.getCities();
    let inputs = document.querySelectorAll(".v-file-input input");
    [...inputs].forEach((input) => {
      input.remove();
    });
  },
  data() {
    return {
      e1: 1,
      country: { cities: [], towns: [], districts: [], neighborhoods: [] },
      isUser: true,
      isDietician: true,
      isAdmin: false,
      email: null,
      password: null,
      password_confirmation: null,
      name: null,
      tc: null,
      identity_file: null,
      certificate_file: null,
      phone: null,
      hospitalName: null,
      department: null,
      work_phone: null,
      work_phone_2: null,
      company_city: null,
      company_town: null,
      company_neighborhood: null,
      company_district: null,
      company_address: null,
    };
  },
  computed: {
    ...mapGetters(["isAuthenticated", "loggedInUser"]),
  },
  methods: {
    getCities() {
      this.$axios.get(process.env.apiBaseUrl + "informations/cities").then((response) => {
        this.country.cities = response.data.data.cities.length > 0 ? response.data.data.cities : [];
      });
    },
    getTowns: function (event) {
      if (event.target.options.selectedIndex > -1) {
        const theTarget = event.target.options[event.target.options.selectedIndex].dataset;
        let townIds = theTarget.id;
        this.$axios.get(process.env.apiBaseUrl + "informations/towns?id=" + townIds).then((response) => {
          this.country.towns = response.data.towns.length > 0 ? response.data.towns : [];
          this.country.districts = [];
          this.country.neighborhoods = [];
          this.company_district = null;
          this.company_neighborhood = null;
        });
      }
    },
    getDistricts: function (event) {
      if (event.target.options.selectedIndex > -1) {
        const theTarget = event.target.options[event.target.options.selectedIndex].dataset;
        let districtIds = theTarget.id;
        this.$axios.get(process.env.apiBaseUrl + "informations/districts?id=" + districtIds).then((response) => {
          this.country.districts = response.data.districts.length > 0 ? response.data.districts : [];
          this.country.neighborhoods = [];
          this.company_neighborhood = null;
        });
      }
    },
    getNeighborhoods: function (event) {
      if (event.target.options.selectedIndex > -1) {
        const theTarget = event.target.options[event.target.options.selectedIndex].dataset;
        let neighborhoodIds = theTarget.id;
        this.$axios.get(process.env.apiBaseUrl + "informations/neighborhoods?id=" + neighborhoodIds).then((response) => {
          this.country.neighborhoods = response.data.neighborhoods.length > 0 ? response.data.neighborhoods : [];
        });
      }
    },
    /**
     * User Login Method
     */
    onLogin() {
      let formData = new FormData(this.$refs.userLogin);
      formData.append("isUser", this.isUser);
      formData.append("isDietician", this.isDietician);
      formData.append("isAdmin", this.isAdmin);
      this.$store.dispatch("LoginUser", formData).then((response) => {
        if (response.success) {
          this.$izitoast.success({
            title: response.title,
            message: response.msg,
            position: "topCenter",
          });
          setTimeout(() => {
            window.location.href = decodeURIComponent("/profile");
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
      formData.append("status", "dietician");
      this.$store.dispatch("RegisterUser", formData).then((response) => {
        if (response.success) {
          this.$izitoast.success({
            title: response.title,
            message: response.msg,
            position: "topCenter",
          });
          setTimeout(() => {
            window.location.href = decodeURIComponent("/dietician-login");
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
