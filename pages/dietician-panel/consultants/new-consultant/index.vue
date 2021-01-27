<template>
  <!-- Main Wrapper -->
  <div class="main-wrapper">
    <div class="page-wrapper">
      <div class="content container-fluid">
        <!-- Page Header -->
        <div class="page-header">
          <div class="row">
            <div class="col-sm-12">
              <h3 class="page-title">Yeni Danışman Kaydet</h3>
              <ul class="breadcrumb">
                <li class="breadcrumb-item">
                  <nuxt-link to="/dietician-panel" tag="a">Anasayfa</nuxt-link>
                </li>
                <li class="breadcrumb-item active">Yeni Danışman Kaydet</li>
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
                <h4 class="card-title">Yeni Danışman Kaydet</h4>
              </div>
              <div class="card-body">
                <ValidationObserver v-slot="{ handleSubmit }">
                  <form
                    @submit.prevent="handleSubmit(saveInformation)"
                    ref="informationForm"
                    enctype="multipart/form-data"
                  >
                    <div class="table-responsive">
                      <table
                        class="table table-striped table-hover table-center table-borderless mb-0"
                        style="border-top: none"
                      >
                        <tbody>
                          <tr>
                            <td>
                              <b>Email Adresiniz :</b>
                            </td>
                            <td colspan="2">
                              <ValidationProvider
                                name="Email Adresiniz"
                                rules="required|email"
                                v-slot="{ errors }"
                              >
                                <input
                                  id="email"
                                  type="text"
                                  class="form-control"
                                  name="email"
                                  v-model="data.email"
                                />
                                <small class="font-weight-bold text-danger">{{
                                  errors[0]
                                }}</small>
                              </ValidationProvider>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <b>Telefon Numaranız :</b>
                            </td>
                            <td colspan="2">
                              <ValidationProvider
                                name="Telefon Numaranız"
                                rules="required"
                                v-slot="{ errors }"
                              >
                                <input
                                  id="phone"
                                  type="text"
                                  class="form-control"
                                  name="phone"
                                  v-model="data.phone"
                                />
                                <small class="font-weight-bold text-danger">{{
                                  errors[0]
                                }}</small>
                              </ValidationProvider>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <b>T.C. Kimlik Numaranız :</b>
                            </td>
                            <td colspan="2">
                              <ValidationProvider
                                name="T.C. Kimlik Numaranız"
                                rules="required"
                                v-slot="{ errors }"
                              >
                                <input
                                  id="tc"
                                  type="text"
                                  class="form-control"
                                  name="tc"
                                  v-model="data.tc"
                                />
                                <small class="font-weight-bold text-danger">{{
                                  errors[0]
                                }}</small>
                              </ValidationProvider>
                            </td>
                          </tr>
                          <tr>
                            <td><b>Şifreniz :</b></td>
                            <td colspan="2">
                              <ValidationProvider
                                name="Şifreniz"
                                rules="required"
                                v-slot="{ errors }"
                              >
                                <input
                                  type="password"
                                  name="password"
                                  id="password"
                                  class="form-control"
                                  required
                                  v-model="data.password"
                                />
                                <small class="font-weight-bold text-danger">{{
                                  errors[0]
                                }}</small>
                              </ValidationProvider>
                            </td>
                          </tr>
                          <tr>
                            <td><b>Tekrar Şifreniz :</b></td>
                            <td colspan="2">
                              <ValidationProvider
                                name="Tekrar Şifreniz"
                                rules="required"
                                v-slot="{ errors }"
                              >
                                <input
                                  type="password"
                                  name="password_confirmation"
                                  id="password_confirmation"
                                  class="form-control"
                                  required
                                  v-model="data.password_confirmation"
                                />
                                <small class="font-weight-bold text-danger">{{
                                  errors[0]
                                }}</small>
                              </ValidationProvider>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <b>Adınız ve Soyadınız :</b>
                            </td>
                            <td colspan="2">
                              <ValidationProvider
                                name="Adınız ve Soyadınız"
                                rules="required"
                                v-slot="{ errors }"
                              >
                                <input
                                  id="name"
                                  type="text"
                                  class="form-control"
                                  name="name"
                                  v-model="data.name"
                                />
                                <small class="font-weight-bold text-danger">{{
                                  errors[0]
                                }}</small>
                              </ValidationProvider>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <b>Cinsiyet :</b>
                            </td>
                            <td colspan="2">
                              <ValidationProvider
                                name="Cinsiyetiniz"
                                rules="required"
                                v-slot="{ errors }"
                              >
                                <v-radio-group
                                  v-model="data.gender"
                                  name="gender"
                                  row
                                >
                                  <v-radio value="Erkek">
                                    <template v-slot:label> Erkek </template>
                                  </v-radio>
                                  <v-radio value="Kadın">
                                    <template v-slot:label> Kadın </template>
                                  </v-radio>
                                </v-radio-group>
                                <small class="font-weight-bold text-danger">{{
                                  errors[0]
                                }}</small>
                              </ValidationProvider>
                            </td>
                          </tr>
                          <tr>
                            <td><b>Özel Durum :</b></td>
                            <td colspan="2">
                              <ValidationProvider
                                name="Özel Durum"
                                rules="required"
                                v-slot="{ errors }"
                              >
                              <select name="special_case" id="special_durum" class="form-control">
                                <option value="YOK">YOK</option>
                                <option value="HAMİLE">HAMİLE</option>
                                <option value="EMZİKLİ">EMZİKLİ</option>
                              </select>
                                <small class="font-weight-bold text-danger">{{
                                  errors[0]
                                }}</small>
                              </ValidationProvider>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <b>İkamet Ettiğiniz İl :</b>
                            </td>
                            <td colspan="2">
                              <ValidationProvider
                                name="İkamet Ettiğiniz İl"
                                rules="required"
                                v-slot="{ errors }"
                              >
                                <select
                                  v-on:change="getTowns"
                                  name="city"
                                  id="city"
                                  class="form-control"
                                  v-if="
                                    country.cities !== null &&
                                    country.cities !== undefined &&
                                    country.cities !== '' &&
                                    country.cities.length > 0
                                  "
                                  v-model="data.city"
                                  ref="city"
                                >
                                  <option
                                    :value="null"
                                    :selected="
                                      data.city === null ||
                                      data.city === undefined ||
                                      data.city === ''
                                    "
                                  >
                                    İl Seçiniz.
                                  </option>
                                  <option
                                    v-bind:data-id="city.towns"
                                    :value="city.name"
                                    v-bind:key="index"
                                    v-for="(city, index) in country.cities"
                                    :selected="data.city === city.name"
                                  >
                                    {{ city.name }}
                                  </option>
                                </select>
                                <small class="font-weight-bold text-danger">{{
                                  errors[0]
                                }}</small>
                              </ValidationProvider>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <b>İkamet Ettiğiniz İlçe :</b>
                            </td>
                            <td colspan="2">
                              <ValidationProvider
                                name="İkamet Ettiğiniz İlçe"
                                rules="required"
                                v-slot="{ errors }"
                              >
                                <select
                                  v-on:change="getDistricts"
                                  name="town"
                                  id="town"
                                  class="form-control"
                                  ref="town"
                                  v-model="data.town"
                                >
                                  <option
                                    :value="null"
                                    v-if="country.towns.length > 0"
                                    selected
                                  >
                                    İlçe Seçiniz.
                                  </option>
                                  <option
                                    :value="null"
                                    v-else-if="country.towns.length <= 0"
                                    selected
                                  >
                                    Önce İl Seçiniz.
                                  </option>
                                  <option
                                    v-bind:data-id="town.districts"
                                    :value="town.name"
                                    v-bind:key="index"
                                    v-for="(town, index) in country.towns"
                                    :selected="town.name === data.town"
                                  >
                                    {{ town.name }}
                                  </option>
                                </select>
                                <small class="font-weight-bold text-danger">{{
                                  errors[0]
                                }}</small>
                              </ValidationProvider>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <b>İkamet Ettiğiniz Semt :</b>
                            </td>
                            <td colspan="2">
                              <ValidationProvider
                                name="İkamet Ettiğiniz Semt"
                                rules="required"
                                v-slot="{ errors }"
                              >
                                <select
                                  v-on:change="getNeighborhoods"
                                  name="district"
                                  id="district"
                                  class="form-control"
                                  ref="district"
                                  v-model="data.district"
                                >
                                  <option
                                    :value="null"
                                    v-if="country.districts.length > 0"
                                    selected
                                  >
                                    Semt Seçiniz.
                                  </option>
                                  <option
                                    :value="data.district"
                                    v-else-if="country.districts.length <= 0"
                                    selected
                                  >
                                    Önce İlçe Seçiniz.
                                  </option>
                                  <option
                                    v-bind:data-id="district.neighborhoods"
                                    :value="district.name"
                                    v-bind:key="index"
                                    v-for="(
                                      district, index
                                    ) in country.districts"
                                    :selected="district.name === data.district"
                                  >
                                    {{ district.name }}
                                  </option>
                                </select>
                                <small class="font-weight-bold text-danger">{{
                                  errors[0]
                                }}</small>
                              </ValidationProvider>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <b>İkamet Ettiğiniz Mahalle :</b>
                            </td>
                            <td colspan="2">
                              <ValidationProvider
                                name="İkamet Ettiğiniz Mahalle"
                                rules="required"
                                v-slot="{ errors }"
                              >
                                <select
                                  name="neighborhood"
                                  id="neighborhood"
                                  class="form-control"
                                  ref="neighborhood"
                                  v-model="data.neighborhood"
                                >
                                  <option
                                    :value="null"
                                    v-if="country.neighborhoods.length > 0"
                                    selected="selected"
                                  >
                                    Mahalle Seçiniz.
                                  </option>
                                  <option
                                    :value="data.neighborhood"
                                    v-else-if="
                                      country.neighborhoods.length <= 0
                                    "
                                    selected="selected"
                                  >
                                    Önce Semt Seçiniz.
                                  </option>
                                  <option
                                    :value="neighborhood.name"
                                    v-bind:key="index"
                                    v-for="(
                                      neighborhood, index
                                    ) in country.neighborhoods"
                                    :selected="
                                      neighborhood.name === data.neighborhood
                                    "
                                  >
                                    {{ neighborhood.name }}
                                  </option>
                                </select>
                                <small class="font-weight-bold text-danger">{{
                                  errors[0]
                                }}</small>
                              </ValidationProvider>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <b>İkamet Ettiğiniz Adres :</b>
                            </td>
                            <td colspan="2">
                              <ValidationProvider
                                name="İkamet Ettiğiniz Adres"
                                rules="required"
                                v-slot="{ errors }"
                              >
                                <textarea
                                  name="address"
                                  id="address"
                                  class="form-control"
                                  cols="30"
                                  rows="5"
                                  v-model="data.address"
                                ></textarea>
                                <small class="font-weight-bold text-danger">{{
                                  errors[0]
                                }}</small>
                              </ValidationProvider>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <b>Doğum Tarihi :</b>
                            </td>
                            <td colspan="2">
                              <ValidationProvider
                                name="Doğum Tarihi"
                                rules="required"
                                v-slot="{ errors }"
                              >
                                <input
                                  type="date"
                                  class="form-control"
                                  name="birthDate"
                                  placeholder="Doğum Tarihi"
                                  v-model="data.birthDate"
                                />
                                <small class="font-weight-bold text-danger">{{
                                  errors[0]
                                }}</small>
                              </ValidationProvider>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <b>Boy (cm) :</b>
                            </td>
                            <td colspan="2">
                              <ValidationProvider
                                name="Boy (cm)"
                                rules="required"
                                v-slot="{ errors }"
                              >
                                <input
                                  type="number"
                                  name="size"
                                  id="size"
                                  class="form-control"
                                  v-model="data.size"
                                />
                                <small class="font-weight-bold text-danger">{{
                                  errors[0]
                                }}</small>
                              </ValidationProvider>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <b>Ağırlık (kg) :</b>
                            </td>
                            <td colspan="2">
                              <ValidationProvider
                                name="Ağırlık (kg)"
                                rules="required"
                                v-slot="{ errors }"
                              >
                                <input
                                  type="number"
                                  name="weight"
                                  id="weight"
                                  class="form-control"
                                  v-model="data.weight"
                                />
                                <small class="font-weight-bold text-danger">{{
                                  errors[0]
                                }}</small>
                              </ValidationProvider>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <b>Bel (cm) :</b>
                            </td>
                            <td colspan="2">
                              <ValidationProvider
                                name="Bel (cm)"
                                rules="required"
                                v-slot="{ errors }"
                              >
                                <input
                                  type="number"
                                  name="waist"
                                  id="waist"
                                  class="form-control"
                                  v-model="data.waist"
                                />
                                <small class="font-weight-bold text-danger">{{
                                  errors[0]
                                }}</small>
                              </ValidationProvider>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <b>Kalça (cm) :</b>
                            </td>
                            <td colspan="2">
                              <ValidationProvider
                                name="Kalça (cm)"
                                rules="required"
                                v-slot="{ errors }"
                              >
                                <input
                                  type="number"
                                  name="hip"
                                  id="hip"
                                  class="form-control"
                                  v-model="data.hip"
                                />
                                <small class="font-weight-bold text-danger">{{
                                  errors[0]
                                }}</small>
                              </ValidationProvider>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <b>Göğüs (cm) :</b>
                            </td>
                            <td colspan="2">
                              <ValidationProvider
                                name="Göğüs (cm)"
                                rules="required"
                                v-slot="{ errors }"
                              >
                                <input
                                  type="number"
                                  name="chest"
                                  id="chest"
                                  class="form-control"
                                  v-model="data.chest"
                                />
                                <small class="font-weight-bold text-danger">{{
                                  errors[0]
                                }}</small>
                              </ValidationProvider>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <b>Boyun (cm) : </b>
                            </td>
                            <td colspan="2">
                              <ValidationProvider
                                name="Boyun (cm)"
                                rules="required"
                                v-slot="{ errors }"
                              >
                                <input
                                  type="number"
                                  name="neck"
                                  id="neck"
                                  class="form-control"
                                  v-model="data.neck"
                                />
                                <small class="font-weight-bold text-danger">{{
                                  errors[0]
                                }}</small>
                              </ValidationProvider>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <b>Üst Kol (cm) :</b>
                            </td>
                            <td colspan="2">
                              <ValidationProvider
                                name="Üst Kol (cm)"
                                rules="required"
                                v-slot="{ errors }"
                              >
                                <input
                                  type="number"
                                  name="upperArm"
                                  id="upperArm"
                                  class="form-control"
                                  v-model="data.upperArm"
                                />
                                <small class="font-weight-bold text-danger">{{
                                  errors[0]
                                }}</small>
                              </ValidationProvider>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <b>Alt Kol (cm) :</b>
                            </td>
                            <td colspan="2">
                              <ValidationProvider
                                name="Alt Kol (cm)"
                                rules="required"
                                v-slot="{ errors }"
                              >
                                <input
                                  type="number"
                                  name="lowerArm"
                                  id="lowerArm"
                                  class="form-control"
                                  v-model="data.lowerArm"
                                />
                                <small class="font-weight-bold text-danger">{{
                                  errors[0]
                                }}</small>
                              </ValidationProvider>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <b>Kol Bileği (cm) :</b>
                            </td>
                            <td colspan="2">
                              <ValidationProvider
                                name="Kol Bileği (cm)"
                                rules="required"
                                v-slot="{ errors }"
                              >
                                <input
                                  type="number"
                                  name="wrist"
                                  id="wrist"
                                  class="form-control"
                                  v-model="data.wrist"
                                />
                                <small class="font-weight-bold text-danger">{{
                                  errors[0]
                                }}</small>
                              </ValidationProvider>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <b>Üst Bacak (cm) :</b>
                            </td>
                            <td colspan="2">
                              <ValidationProvider
                                name="Üst Bacak (cm)"
                                rules="required"
                                v-slot="{ errors }"
                              >
                                <input
                                  type="number"
                                  name="upperLeg"
                                  id="upperLeg"
                                  class="form-control"
                                  v-model="data.upperLeg"
                                />
                                <small class="font-weight-bold text-danger">{{
                                  errors[0]
                                }}</small>
                              </ValidationProvider>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <b>Alt Bacak (cm) :</b>
                            </td>
                            <td colspan="2">
                              <ValidationProvider
                                name="Alt Bacak (cm)"
                                rules="required"
                                v-slot="{ errors }"
                              >
                                <input
                                  type="number"
                                  name="lowerLeg"
                                  id="lowerLeg"
                                  class="form-control"
                                  v-model="data.lowerLeg"
                                />
                                <small class="font-weight-bold text-danger">{{
                                  errors[0]
                                }}</small>
                              </ValidationProvider>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <b>Deri Kıvrım Kalınlığı (cm) :</b>
                            </td>
                            <td colspan="2">
                              <ValidationProvider
                                name="Deri Kıvrım Kalınlığı (cm)"
                                rules="required"
                                v-slot="{ errors }"
                              >
                                <input
                                  type="number"
                                  name="skinfoldThickness"
                                  id="skinfoldThickness"
                                  class="form-control"
                                  v-model="data.skinfoldThickness"
                                />
                                <small class="font-weight-bold text-danger">{{
                                  errors[0]
                                }}</small>
                              </ValidationProvider>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <b>Yağ :</b>
                            </td>
                            <td>
                              %
                              {{ data.fatRatio }}
                            </td>
                            <td>
                              {{ data.fat }}
                              KG
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <b>Kas :</b>
                            </td>
                            <td>
                              %
                              {{ data.muscleRatio }}
                            </td>
                            <td>
                              {{ data.muscle }}
                              KG
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <b>Su :</b>
                            </td>
                            <td>
                              %
                              {{ data.waterRatio }}
                            </td>
                            <td>
                              {{ data.water }}
                              KG
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <b>Profil Resminiz :</b>
                            </td>
                            <td colspan="2" class="align-middle">
                              <input
                                type="file"
                                class="form-control"
                                accept="image/*"
                                placeholder="Profil Resminiz"
                                name="img_url"
                              />
                            </td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <td colspan="3"></td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                    <button
                      class="btn btn-primary login-btn text-white float-right"
                      type="submit"
                    >
                      Danışan Bilgilerini Kaydet
                    </button>
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
  middleware: ["session-control", "dietician"],
  layout: "dietician",
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data() {
    return {
      data: {
        name: null,
        gender: null,
        city: null,
        town: null,
        district: null,
        neighborhoods: null,
        address: null,
        birthDate: null,
        size: null,
        weight: null,
        waist: null,
        hip: null,
        chest: null,
        neck: null,
        upperArm: null,
        lowerArm: null,
        wrist: null,
        upperLeg: null,
        lowerLeg: null,
        skinfoldThickness: null,
        fatRatio: null,
        fat: null,
        muscleRatio: null,
        muscle: null,
        waterRatio: null,
        water: null,
        tc: null,
        phone: null,
        email: null,
        password: null,
        password_confirmation: null,
      },
      country: { cities: [], towns: [], districts: [], neighborhoods: [] },
      months: [
        "OCAK",
        "ŞUBAT",
        "MART",
        "NİSAN",
        "MAYIS",
        "HAZİRAN",
        "TEMMUZ",
        "AĞUSTOS",
        "EYLÜL",
        "EKİM",
        "KASIM",
        "ARALIK",
      ],
      siteSettings: this.$store.getters.siteSettings,
      userData:
        Cookie.get("userData") !== null &&
        Cookie.get("userData") !== undefined &&
        Cookie.get("userData") !== ""
          ? JSON.parse(Base64.decode(Cookie.get("userData")))
          : null,
    };
  },
  computed: {
    img_url() {
      return process.env.apiPublicUrl;
    },
  },
  mounted() {
    this.getCities();
  },
  methods: {
    getCities() {
      this.$axios
        .get(process.env.apiBaseUrl + "informations/cities")
        .then((response) => {
          this.country.cities =
            response.data.data.cities.length > 0
              ? response.data.data.cities
              : [];
          setTimeout(() => {
            this.getTowns();
          }, 100);
        });
    },
    getTowns: function (event) {
      let townIds = null;
      if (event !== undefined && event.target.options.selectedIndex > -1) {
        const theTarget =
          event.target.options[event.target.options.selectedIndex].dataset;
        townIds = theTarget.id;
      }
      if (
        townIds === null ||
        townIds === undefined ||
        (townIds === "" &&
          this.$refs.city.options !== undefined &&
          this.$refs.city.options.length > 0)
      ) {
        for (let element in this.$refs.city.options) {
          if (this.$refs.city.options[element].selected) {
            townIds = this.$refs.city.options[element].dataset.id;
          }
        }
      }
      this.$axios
        .get(process.env.apiBaseUrl + "informations/towns?id=" + townIds)
        .then((response) => {
          this.country.towns =
            response.data.towns.length > 0 ? response.data.towns : [];
          this.country.districts = [];
          this.country.neighborhoods = [];
          if (event === undefined) {
            setTimeout(() => {
              this.getDistricts();
            }, 100);
          }
        });
    },
    getDistricts: function (event) {
      let districtIds = null;
      if (event !== undefined && event.target.options.selectedIndex > -1) {
        const theTarget =
          event.target.options[event.target.options.selectedIndex].dataset;
        districtIds = theTarget.id;
      }
      if (
        (districtIds === null ||
          districtIds === undefined ||
          districtIds === "") &&
        this.$refs.town.options !== undefined &&
        this.$refs.town.options.length > 0
      ) {
        for (let element in this.$refs.town.options) {
          if (this.$refs.town.options[element].selected) {
            districtIds = this.$refs.town.options[element].dataset.id;
          }
        }
      }
      this.$axios
        .get(
          process.env.apiBaseUrl + "informations/districts?id=" + districtIds
        )
        .then((response) => {
          this.country.districts =
            response.data.districts.length > 0 ? response.data.districts : [];
          this.country.neighborhoods = [];
          if (event === undefined) {
            setTimeout(() => {
              this.getNeighborhoods();
            }, 100);
          }
        });
    },
    getNeighborhoods: function (event) {
      let neighborhoodIds = null;
      if (event !== undefined && event.target.options.selectedIndex > -1) {
        const theTarget =
          event.target.options[event.target.options.selectedIndex].dataset;
        neighborhoodIds = theTarget.id;
      }
      if (
        (neighborhoodIds === null ||
          neighborhoodIds === undefined ||
          neighborhoodIds === "") &&
        this.$refs.district.options !== undefined &&
        this.$refs.district.options.length > 0
      ) {
        for (let element in this.$refs.district.options) {
          if (this.$refs.district.options[element].selected) {
            neighborhoodIds = this.$refs.district.options[element].dataset.id;
          }
        }
      }
      this.$axios
        .get(
          process.env.apiBaseUrl +
            "informations/neighborhoods?id=" +
            neighborhoodIds
        )
        .then((response) => {
          this.country.neighborhoods =
            response.data.neighborhoods.length > 0
              ? response.data.neighborhoods
              : [];
        });
    },
    saveInformation() {
      let formData = new FormData(this.$refs.informationForm);
      formData.append("dietician_id", this.userData._id);
      this.$axios
        .post(process.env.apiBaseUrl + "users/register/", formData, {
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
        })
        .then((response) => {
          if (response.data.success) {
            this.$izitoast.success({
              title: response.data.title,
              message: response.data.msg,
              position: "topCenter",
            });
            setTimeout(() => {
              this.$router.go(
                decodeURIComponent("/dietician-panel/consultants/")
              );
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