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
                <h4 class="mb-4">Kayıt Bilgileri</h4>
                <div class="appointment-tab">
                  <!-- Appointment Tab -->
                  <ul class="nav nav-tabs nav-tabs-solid nav-tabs-rounded">
                    <li class="nav-item">
                      <a class="nav-link active" href="#kayit_bilgilerim" data-toggle="tab">Kayıt Bilgilerim</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#kayit_bilgisi_duzenle" data-toggle="tab">Kayıt Bilgisi Düzenle</a>
                    </li>
                  </ul>
                  <!-- /Appointment Tab -->

                  <div class="tab-content">
                    <!-- Upcoming Appointment Tab -->
                    <div class="tab-pane show active" id="kayit_bilgilerim">
                      <div class="card card-table mb-0">
                        <div class="card-body">
                          <div class="table-responsive bg-light mt-5">
                            <table class="table table-striped table-hover table-center table-borderless mb-0" style="border-top: none">
                              <tbody>
                                <tr>
                                  <td>
                                    <b>Ad Soyad :</b>
                                  </td>
                                  <td colspan="2">
                                    {{ userData.name }}
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <b>Cinsiyet :</b>
                                  </td>
                                  <td colspan="2">
                                    {{ userData.gender }}
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <b>İkamet Ettiğiniz İl :</b>
                                  </td>
                                  <td colspan="2">
                                    {{ userData.city }}
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <b>İkamet Ettiğiniz İlçe :</b>
                                  </td>
                                  <td colspan="2">
                                    {{ userData.town }}
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <b>İkamet Ettiğiniz Semt :</b>
                                  </td>
                                  <td colspan="2">
                                    {{ userData.district }}
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <b>İkamet Ettiğiniz Mahalle :</b>
                                  </td>
                                  <td colspan="2">
                                    {{ userData.neighborhood }}
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <b>İkamet Ettiğiniz Adres :</b>
                                  </td>
                                  <td colspan="2">
                                    {{ userData.address }}
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <b>Doğum Tarihi :</b>
                                  </td>
                                  <td colspan="2">
                                    {{ userData.birthDate }}
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <b>Boy (cm) :</b>
                                  </td>
                                  <td colspan="2">
                                    {{ userData.size }}
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <b>Ağırlık (kg) :</b>
                                  </td>
                                  <td colspan="2">
                                    {{ userData.weight }}
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <b>Bel (cm) :</b>
                                  </td>
                                  <td colspan="2">
                                    {{ userData.waist }}
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <b>Kalça (cm) :</b>
                                  </td>
                                  <td colspan="2">
                                    {{ userData.hip }}
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <b>Göğüs (cm) :</b>
                                  </td>
                                  <td colspan="2">
                                    {{ userData.chest }}
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <b>Boyun (cm) : </b>
                                  </td>
                                  <td colspan="2">
                                    {{ userData.neck }}
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <b>Üst Kol (cm) :</b>
                                  </td>
                                  <td colspan="2">
                                    {{ userData.upperArm }}
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <b>Alt Kol (cm) :</b>
                                  </td>
                                  <td colspan="2">
                                    {{ userData.lowerArm }}
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <b>Kol Bileği (cm) :</b>
                                  </td>
                                  <td colspan="2">
                                    {{ userData.wrist }}
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <b>Üst Bacak (cm) :</b>
                                  </td>
                                  <td colspan="2">
                                    {{ userData.upperLeg }}
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <b>Alt Bacak (cm) :</b>
                                  </td>
                                  <td colspan="2">
                                    {{ userData.lowerLeg }}
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <b>Deri Kıvrım Kalınlığı (cm) :</b>
                                  </td>
                                  <td colspan="2">
                                    {{ userData.skinfoldThickness }}
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <b>Yağ :</b>
                                  </td>
                                  <td>
                                    %
                                    {{ userData.fatRatio }}
                                  </td>
                                  <td>
                                    {{ userData.fat }}
                                    KG
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <b>Kas :</b>
                                  </td>
                                  <td>
                                    %
                                    {{ userData.muscleRatio }}
                                  </td>
                                  <td>
                                    {{ userData.muscle }}
                                    KG
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <b>Su :</b>
                                  </td>
                                  <td>
                                    %
                                    {{ userData.waterRatio }}
                                  </td>
                                  <td>
                                    {{ userData.water }}
                                    KG
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- /Upcoming Appointment Tab -->

                    <!-- Today Appointment Tab -->
                    <div class="tab-pane" id="kayit_bilgisi_duzenle">
                      <div class="card card-table mb-0">
                        <div class="card-body">
                          <ValidationObserver v-slot="{ handleSubmit }">
                            <form @submit.prevent="handleSubmit(updateInformation)" ref="informationForm" enctype="multipart/form-data">
                              <div class="table-responsive mt-5">
                                <table class="table table-striped table-hover table-center table-borderless mb-0" style="border-top: none">
                                  <tbody>
                                    <tr>
                                      <td>
                                        <b>Ad Soyad :</b>
                                      </td>
                                      <td colspan="2">
                                        <ValidationProvider name="Adınız ve Soyadınız" rules="required" v-slot="{ errors }">
                                          <input id="name" type="text" class="form-control" name="name" v-model="userData.name" />
                                          <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                                        </ValidationProvider>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <b>Cinsiyet :</b>
                                      </td>
                                      <td colspan="2">
                                        <ValidationProvider name="Cinsiyetiniz" rules="required" v-slot="{ errors }">
                                          <v-radio-group v-model="userData.gender" name="gender" row>
                                            <v-radio value="Erkek">
                                              <template v-slot:label> Erkek </template>
                                            </v-radio>
                                            <v-radio value="Kadın">
                                              <template v-slot:label> Kadın </template>
                                            </v-radio>
                                          </v-radio-group>
                                          <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                                        </ValidationProvider>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <b>İkamet Ettiğiniz İl :</b>
                                      </td>
                                      <td colspan="2">
                                        <ValidationProvider name="İkamet Ettiğiniz İl" rules="required" v-slot="{ errors }">
                                          <select v-on:change="getTowns" name="city" id="city" class="form-control" v-if="country.cities !== null && country.cities !== undefined && country.cities !== '' && country.cities.length > 0" ref="city">
                                            <option :value="null" :selected="userData.city === null || userData.city === undefined || userData.city === ''">İl Seçiniz.</option>
                                            <option v-bind:data-id="city.towns" :value="city.name" v-bind:key="index" v-for="(city, index) in country.cities" :selected="userData.city === city.name">
                                              {{ city.name }}
                                            </option>
                                          </select>
                                          <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                                        </ValidationProvider>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <b>İkamet Ettiğiniz İlçe :</b>
                                      </td>
                                      <td colspan="2">
                                        <ValidationProvider name="İkamet Ettiğiniz İlçe" rules="required" v-slot="{ errors }">
                                          <select v-on:change="getDistricts" name="town" id="town" class="form-control" ref="town">
                                            <option :value="null" v-if="country.towns.length > 0" selected>İlçe Seçiniz.</option>
                                            <option :value="null" v-else-if="country.towns.length <= 0" selected>Önce İl Seçiniz.</option>
                                            <option v-bind:data-id="town.districts" :value="town.name" v-bind:key="index" v-for="(town, index) in country.towns" :selected="town.name === userData.town">
                                              {{ town.name }}
                                            </option>
                                          </select>
                                          <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                                        </ValidationProvider>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <b>İkamet Ettiğiniz Semt :</b>
                                      </td>
                                      <td colspan="2">
                                        <ValidationProvider name="İkamet Ettiğiniz Semt" rules="required" v-slot="{ errors }">
                                          <select v-on:change="getNeighborhoods" name="district" id="district" class="form-control" ref="district">
                                            <option :value="null" v-if="country.districts.length > 0" selected>Semt Seçiniz.</option>
                                            <option :value="userData.district" v-else-if="country.districts.length <= 0" selected>Önce İlçe Seçiniz.</option>
                                            <option v-bind:data-id="district.neighborhoods" :value="district.name" v-bind:key="index" v-for="(district, index) in country.districts" :selected="district.name === userData.district">
                                              {{ district.name }}
                                            </option>
                                          </select>
                                          <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                                        </ValidationProvider>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <b>İkamet Ettiğiniz Mahalle :</b>
                                      </td>
                                      <td colspan="2">
                                        <ValidationProvider name="İkamet Ettiğiniz Mahalle" rules="required" v-slot="{ errors }">
                                          <select name="neighborhood" id="neighborhood" class="form-control" ref="neighborhood">
                                            <option :value="null" v-if="country.neighborhoods.length > 0" selected="selected">Mahalle Seçiniz.</option>
                                            <option :value="userData.neighborhood" v-else-if="country.neighborhoods.length <= 0" selected="selected">Önce Semt Seçiniz.</option>
                                            <option :value="neighborhood.name" v-bind:key="index" v-for="(neighborhood, index) in country.neighborhoods" :selected="neighborhood.name === userData.neighborhood">
                                              {{ neighborhood.name }}
                                            </option>
                                          </select>
                                          <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                                        </ValidationProvider>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <b>İkamet Ettiğiniz Adres :</b>
                                      </td>
                                      <td colspan="2">
                                        <ValidationProvider name="İkamet Ettiğiniz Adres" rules="required" v-slot="{ errors }">
                                          <textarea name="address" id="address" class="form-control" cols="30" rows="5" v-model="userData.address"></textarea>
                                          <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                                        </ValidationProvider>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <b>Doğum Tarihi :</b>
                                      </td>
                                      <td colspan="2">
                                        <ValidationProvider name="Doğum Tarihi" rules="required" v-slot="{ errors }">
                                          <input type="date" class="form-control" name="birthDate" placeholder="Doğum Tarihi" v-model="userData.birthDate" />
                                          <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                                        </ValidationProvider>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <b>Boy (cm) :</b>
                                      </td>
                                      <td colspan="2">
                                        <ValidationProvider name="Boy (cm)" rules="required" v-slot="{ errors }">
                                          <input type="number" name="size" id="size" class="form-control" v-model="userData.size" />
                                          <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                                        </ValidationProvider>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <b>Ağırlık (kg) :</b>
                                      </td>
                                      <td colspan="2">
                                        <ValidationProvider name="Ağırlık (kg)" rules="required" v-slot="{ errors }">
                                          <input type="number" name="weight" id="weight" class="form-control" v-model="userData.weight" />
                                          <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                                        </ValidationProvider>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <b>Bel (cm) :</b>
                                      </td>
                                      <td colspan="2">
                                        <ValidationProvider name="Bel (cm)" rules="required" v-slot="{ errors }">
                                          <input type="number" name="waist" id="waist" class="form-control" v-model="userData.waist" />
                                          <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                                        </ValidationProvider>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <b>Kalça (cm) :</b>
                                      </td>
                                      <td colspan="2">
                                        <ValidationProvider name="Kalça (cm)" rules="required" v-slot="{ errors }">
                                          <input type="number" name="hip" id="hip" class="form-control" v-model="userData.hip" />
                                          <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                                        </ValidationProvider>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <b>Göğüs (cm) :</b>
                                      </td>
                                      <td colspan="2">
                                        <ValidationProvider name="Göğüs (cm)" rules="required" v-slot="{ errors }">
                                          <input type="number" name="chest" id="chest" class="form-control" v-model="userData.chest" />
                                          <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                                        </ValidationProvider>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <b>Boyun (cm) : </b>
                                      </td>
                                      <td colspan="2">
                                        <ValidationProvider name="Boyun (cm)" rules="required" v-slot="{ errors }">
                                          <input type="number" name="neck" id="neck" class="form-control" v-model="userData.neck" />
                                          <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                                        </ValidationProvider>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <b>Üst Kol (cm) :</b>
                                      </td>
                                      <td colspan="2">
                                        <ValidationProvider name="Üst Kol (cm)" rules="required" v-slot="{ errors }">
                                          <input type="number" name="upperArm" id="upperArm" class="form-control" v-model="userData.upperArm" />
                                          <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                                        </ValidationProvider>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <b>Alt Kol (cm) :</b>
                                      </td>
                                      <td colspan="2">
                                        <ValidationProvider name="Alt Kol (cm)" rules="required" v-slot="{ errors }">
                                          <input type="number" name="lowerArm" id="lowerArm" class="form-control" v-model="userData.lowerArm" />
                                          <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                                        </ValidationProvider>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <b>Kol Bileği (cm) :</b>
                                      </td>
                                      <td colspan="2">
                                        <ValidationProvider name="Kol Bileği (cm)" rules="required" v-slot="{ errors }">
                                          <input type="number" name="wrist" id="wrist" class="form-control" v-model="userData.wrist" />
                                          <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                                        </ValidationProvider>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <b>Üst Bacak (cm) :</b>
                                      </td>
                                      <td colspan="2">
                                        <ValidationProvider name="Üst Bacak (cm)" rules="required" v-slot="{ errors }">
                                          <input type="number" name="upperLeg" id="upperLeg" class="form-control" v-model="userData.upperLeg" />
                                          <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                                        </ValidationProvider>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <b>Alt Bacak (cm) :</b>
                                      </td>
                                      <td colspan="2">
                                        <ValidationProvider name="Alt Bacak (cm)" rules="required" v-slot="{ errors }">
                                          <input type="number" name="lowerLeg" id="lowerLeg" class="form-control" v-model="userData.lowerLeg" />
                                          <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                                        </ValidationProvider>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <b>Deri Kıvrım Kalınlığı (cm) :</b>
                                      </td>
                                      <td colspan="2">
                                        <ValidationProvider name="Deri Kıvrım Kalınlığı (cm)" rules="required" v-slot="{ errors }">
                                          <input type="number" name="skinfoldThickness" id="skinfoldThickness" class="form-control" v-model="userData.skinfoldThickness" />
                                          <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                                        </ValidationProvider>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <b>Yağ :</b>
                                      </td>
                                      <td>
                                        %
                                        {{ userData.fatRatio }}
                                      </td>
                                      <td>
                                        {{ userData.fat }}
                                        KG
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <b>Kas :</b>
                                      </td>
                                      <td>
                                        %
                                        {{ userData.muscleRatio }}
                                      </td>
                                      <td>
                                        {{ userData.muscle }}
                                        KG
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <b>Su :</b>
                                      </td>
                                      <td>
                                        %
                                        {{ userData.waterRatio }}
                                      </td>
                                      <td>
                                        {{ userData.water }}
                                        KG
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <b>Profil Resminiz :</b>
                                      </td>
                                      <td colspan="2" class="align-middle">
                                        <div class="row">
                                          <div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 text-center align-middle py-auto my-auto">
                                            <img v-bind:src="img_url + '/public/storage/' + userData.img_url" class="img-fluid rounded-profile" alt="Profil Resminiz" />
                                          </div>
                                          <div class="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 align-middle py-auto my-auto">
                                            <input type="file" class="form-control" accept="image/*" placeholder="Profil Resminiz" name="img_url" />
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                  <tfoot>
                                    <tr>
                                      <td colspan="3">
                                        <div class="form-group">
                                          <button class="btn btn-primary login-btn text-white float-right" type="submit">Bilgilerimi Güncelle</button>
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
    Sidebar,
  },
  computed: {
    img_url() {
      return process.env.apiPublicUrl;
    },
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
      data: {
        cities: [],
        towns: [],
        districts: [],
        neighborhoods: [],
        company_cities: [],
        company_towns: [],
        company_districts: [],
        company_neighborhoods: [],
        city: "",
        town: "",
        district: "",
        neighborhood: "",
        company_city: "",
        company_town: "",
        company_district: "",
        company_neighborhood: "",
      },
      country: {
        cities: [],
        towns: [],
        districts: [],
        neighborhoods: [],
      },
      country2: {
        cities: [],
        towns: [],
        districts: [],
        neighborhoods: [],
      },
      months: ["OCAK", "ŞUBAT", "MART", "NİSAN", "MAYIS", "HAZİRAN", "TEMMUZ", "AĞUSTOS", "EYLÜL", "EKİM", "KASIM", "ARALIK"],
      userData: Cookie.get("userData") !== null && Cookie.get("userData") !== undefined && Cookie.get("userData") !== "" ? JSON.parse(Base64.decode(Cookie.get("userData"))) : this.$store.getters.loggedInUser !== undefined && this.$store.getters.loggedInUser !== null && this.$store.getters.loggedInUser !== "" ? this.$store.getters.loggedInUser : null,
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
      error({
        message: "Kullanıcı Bilgisi Bulunamadı.",
        statusCode: 404,
      });
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
    getCities() {
      this.$axios.get(process.env.apiBaseUrl + "informations/cities").then((response) => {
        this.country.cities = response.data.data.cities.length > 0 ? response.data.data.cities : [];
        setTimeout(() => {
          this.getTowns();
        }, 100);
      });
    },
    getTowns: function (event) {
      let townIds = null;
      if (event !== undefined && event.target.options.selectedIndex > -1) {
        const theTarget = event.target.options[event.target.options.selectedIndex].dataset;
        townIds = theTarget.id;
      }
      if (townIds === null || townIds === undefined || townIds === "") {
        for (let element in this.$refs.city.options) {
          if (this.$refs.city.options[element].selected) {
            townIds = this.$refs.city.options[element].dataset.id;
          }
        }
      }
      this.$axios.get(process.env.apiBaseUrl + "informations/towns?id=" + townIds).then((response) => {
        this.country.towns = response.data.towns.length > 0 ? response.data.towns : [];
        this.country.districts = [];
        this.userData.districts = [];
        this.country.neighborhoods = [];
        this.userData.neighborhoods = [];
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
        const theTarget = event.target.options[event.target.options.selectedIndex].dataset;
        districtIds = theTarget.id;
      }
      if (districtIds === null || districtIds === undefined || districtIds === "") {
        for (let element in this.$refs.town.options) {
          if (this.$refs.town.options[element].selected) {
            districtIds = this.$refs.town.options[element].dataset.id;
          }
        }
      }
      this.$axios.get(process.env.apiBaseUrl + "informations/districts?id=" + districtIds).then((response) => {
        this.country.districts = response.data.districts.length > 0 ? response.data.districts : [];
        this.country.neighborhoods = [];
        this.userData.neighborhoods = [];
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
        const theTarget = event.target.options[event.target.options.selectedIndex].dataset;
        neighborhoodIds = theTarget.id;
      }
      if (neighborhoodIds === null || neighborhoodIds === undefined || neighborhoodIds === "") {
        for (let element in this.$refs.district.options) {
          if (this.$refs.district.options[element].selected) {
            neighborhoodIds = this.$refs.district.options[element].dataset.id;
          }
        }
      }
      this.$axios.get(process.env.apiBaseUrl + "informations/neighborhoods?id=" + neighborhoodIds).then((response) => {
        this.country.neighborhoods = response.data.neighborhoods.length > 0 ? response.data.neighborhoods : [];
      });
    },
    updateInformation() {
      let formData = new FormData(this.$refs.informationForm);
      formData.append("api_token", this.userData.api_token);
      this.$axios
        .post(process.env.apiBaseUrl + (this.userData.status === "dietician" ? "dietician/profile/update" : "users/update"), formData, {
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
