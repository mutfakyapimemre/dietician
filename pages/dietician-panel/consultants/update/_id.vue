<template>
  <!-- Main Wrapper -->
  <div class="main-wrapper">
    <div class="page-wrapper">
      <div class="content container-fluid">
        <!-- Page Header -->
        <div class="page-header">
          <div class="row">
            <div class="col-sm-12">
              <h3 class="page-title">Danışman Düzenle</h3>
              <ul class="breadcrumb">
                <li class="breadcrumb-item">
                  <nuxt-link to="/dietician-panel" tag="a">Anasayfa</nuxt-link>
                </li>
                <li class="breadcrumb-item active">Danışman Düzenle</li>
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
                <h4 class="card-title">Danışman Düzenle</h4>
              </div>
              <div class="card-body">
                <div class="profile-header">
                  <div class="row align-items-center">
                    <div class="col-auto profile-image">
                      <a href="javascript:void(0)">
                        <img v-bind:src="img_url + '/public/storage/' + data.img_url" class="img-fluid" v-bind:alt="data.name" />
                      </a>
                    </div>
                    <div class="col ml-md-n2 profile-user-info">
                      <h4 class="user-name mb-0">{{ data.name }}</h4>
                      <h6 class="text-muted">{{ data.email }}</h6>
                      <div class="user-Location"><i class="fa fa-map-marker"></i> {{ data.city }}, {{ data.town }}</div>
                      <div class="user-Location">
                        <i class="fa fa-phone"></i>
                        <a v-bind:href="'tel:' + data.phone">{{ data.phone }}</a>
                      </div>
                      <div class="user-Location">
                        <i class="fa fa-envelope"></i>
                        <a v-bind:href="'mailto:' + data.email">{{ data.email }}</a>
                      </div>
                      <div class="about-text">{{ data.about }}</div>
                    </div>
                  </div>
                </div>

                <div class="appointment-tab">
                  <!-- Appointment Tab -->
                  <ul class="nav nav-tabs nav-tabs-bottom nav-justified">
                    <li class="nav-item">
                      <a class="nav-link active" href="#danisman_kayit_bilgileri" data-toggle="tab">Danışman Bilgileri</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#danisman_kayit_bilgisi_duzenle" data-toggle="tab">Danışman Bilgisi Düzenle</a>
                    </li>
                  </ul>
                  <!-- /Appointment Tab -->

                  <div class="tab-content">
                    <!-- Upcoming Appointment Tab -->
                    <div class="tab-pane show active" id="danisman_kayit_bilgileri">
                      <div class="card card-table mb-0">
                        <div class="card-body">
                          <div class="table-responsive bg-light mt-5">
                            <table class="table table-striped table-hover table-center table-borderless mb-0" style="border-top: none">
                              <tbody>
                                <tr>
                                  <td><b>Ad Soyad :</b></td>
                                  <td colspan="2">{{ data.name }}</td>
                                </tr>
                                <tr>
                                  <td><b>Cinsiyet :</b></td>
                                  <td colspan="2">{{ data.gender }}</td>
                                </tr>
                                <tr>
                                  <td><b>İkamet Ettiğiniz İl :</b></td>
                                  <td colspan="2">{{ data.city }}</td>
                                </tr>
                                <tr>
                                  <td><b>İkamet Ettiğiniz İlçe :</b></td>
                                  <td colspan="2">{{ data.town }}</td>
                                </tr>
                                <tr>
                                  <td><b>İkamet Ettiğiniz Semt :</b></td>
                                  <td colspan="2">{{ data.district }}</td>
                                </tr>
                                <tr>
                                  <td><b>İkamet Ettiğiniz Mahalle :</b></td>
                                  <td colspan="2">{{ data.neighborhood }}</td>
                                </tr>
                                <tr>
                                  <td><b>İkamet Ettiğiniz Adres :</b></td>
                                  <td colspan="2">{{ data.address }}</td>
                                </tr>
                                <tr>
                                  <td><b>Doğum Tarihi :</b></td>
                                  <td colspan="2">{{ data.birthDate }}</td>
                                </tr>
                                <tr>
                                  <td><b>Boy (cm) :</b></td>
                                  <td colspan="2">{{ data.size }}</td>
                                </tr>
                                <tr>
                                  <td><b>Ağırlık (kg) :</b></td>
                                  <td colspan="2">{{ data.weight }}</td>
                                </tr>
                                <tr>
                                  <td><b>Bel (cm) :</b></td>
                                  <td colspan="2">{{ data.waist }}</td>
                                </tr>
                                <tr>
                                  <td><b>Kalça (cm) :</b></td>
                                  <td colspan="2">{{ data.hip }}</td>
                                </tr>
                                <tr>
                                  <td><b>Göğüs (cm) :</b></td>
                                  <td colspan="2">{{ data.chest }}</td>
                                </tr>
                                <tr>
                                  <td><b>Boyun (cm) : </b></td>
                                  <td colspan="2">{{ data.neck }}</td>
                                </tr>
                                <tr>
                                  <td><b>Üst Kol (cm) :</b></td>
                                  <td colspan="2">{{ data.upperArm }}</td>
                                </tr>
                                <tr>
                                  <td><b>Alt Kol (cm) :</b></td>
                                  <td colspan="2">{{ data.lowerArm }}</td>
                                </tr>
                                <tr>
                                  <td><b>Kol Bileği (cm) :</b></td>
                                  <td colspan="2">{{ data.wrist }}</td>
                                </tr>
                                <tr>
                                  <td><b>Üst Bacak (cm) :</b></td>
                                  <td colspan="2">{{ data.upperLeg }}</td>
                                </tr>
                                <tr>
                                  <td><b>Alt Bacak (cm) :</b></td>
                                  <td colspan="2">{{ data.lowerLeg }}</td>
                                </tr>
                                <tr>
                                  <td><b>Deri Kıvrım Kalınlığı (cm) :</b></td>
                                  <td colspan="2">{{ data.skinfoldThickness }}</td>
                                </tr>
                                <tr>
                                  <td><b>Yağ :</b></td>
                                  <td>% {{ data.fatRatio }}</td>
                                  <td>{{ data.fat }} KG</td>
                                </tr>
                                <tr>
                                  <td><b>Kas :</b></td>
                                  <td>% {{ data.muscleRatio }}</td>
                                  <td>{{ data.muscle }} KG</td>
                                </tr>
                                <tr>
                                  <td><b>Su :</b></td>
                                  <td>% {{ data.waterRatio }}</td>
                                  <td>{{ data.water }} KG</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- /Upcoming Appointment Tab -->

                    <!-- Today Appointment Tab -->
                    <div class="tab-pane" id="danisman_kayit_bilgisi_duzenle">
                      <div class="card card-table mb-0">
                        <div class="card-body">
                          <ValidationObserver v-slot="{ handleSubmit }">
                            <form @submit.prevent="handleSubmit(updateInformation)" ref="informationForm" enctype="multipart/form-data">
                              <div class="table-responsive mt-5">
                                <table class="table table-striped table-hover table-center table-borderless mb-0" style="border-top: none">
                                  <tbody>
                                    <tr>
                                      <td><b>Ad Soyad :</b></td>
                                      <td colspan="2">{{ data.name }}</td>
                                    </tr>
                                    <tr>
                                      <td><b>Cinsiyet :</b></td>
                                      <td colspan="2">
                                        <v-radio-group v-model="data.gender" row>
                                          <v-radio value="Erkek" disabled>
                                            <template v-slot:label> Erkek </template>
                                          </v-radio>
                                          <v-radio value="Kadın" disabled>
                                            <template v-slot:label> Kadın </template>
                                          </v-radio>
                                        </v-radio-group>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td><b>İkamet Ettiği İl :</b></td>
                                      <td colspan="2">{{ data.city }}</td>
                                    </tr>
                                    <tr>
                                      <td><b>İkamet Ettiği İlçe :</b></td>
                                      <td colspan="2">{{ data.town }}</td>
                                    </tr>
                                    <tr>
                                      <td><b>İkamet Ettiği Semt :</b></td>
                                      <td colspan="2">{{ data.district }}</td>
                                    </tr>
                                    <tr>
                                      <td><b>İkamet Ettiği Mahalle :</b></td>
                                      <td colspan="2">{{ data.neighborhood }}</td>
                                    </tr>
                                    <tr>
                                      <td><b>İkamet Ettiğiniz Adres :</b></td>
                                      <td colspan="2">
                                        <textarea
                                          name="address"
                                          id="dietician_address"
                                          class="form-control"
                                          cols="30"
                                          rows="5"
                                          v-model="data.address"
                                          disabled
                                        ></textarea>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td><b>Doğum Tarihi :</b></td>
                                      <td colspan="2">
                                        <ValidationProvider name="Doğum Tarihi" rules="required" v-slot="{ errors }">
                                          <input
                                            type="date"
                                            class="form-control"
                                            name="birthDate"
                                            placeholder="Doğum Tarihi"
                                            v-model="data.birthDate"
                                          />
                                          <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                                        </ValidationProvider>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td><b>Boy (cm) :</b></td>
                                      <td colspan="2">
                                        <ValidationProvider name="Boy (cm)" rules="required" v-slot="{ errors }">
                                          <input type="number" name="size" id="size" class="form-control" v-model="data.size" />
                                          <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                                        </ValidationProvider>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td><b>Ağırlık (kg) :</b></td>
                                      <td colspan="2">
                                        <ValidationProvider name="Ağırlık (kg)" rules="required" v-slot="{ errors }">
                                          <input type="number" name="weight" id="weight" class="form-control" v-model="data.weight" />
                                          <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                                        </ValidationProvider>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td><b>Bel (cm) :</b></td>
                                      <td colspan="2">
                                        <ValidationProvider name="Bel (cm)" rules="required" v-slot="{ errors }">
                                          <input type="number" name="waist" id="waist" class="form-control" v-model="data.waist" />
                                          <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                                        </ValidationProvider>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td><b>Kalça (cm) :</b></td>
                                      <td colspan="2">
                                        <ValidationProvider name="Kalça (cm)" rules="required" v-slot="{ errors }">
                                          <input type="number" name="hip" id="hip" class="form-control" v-model="data.hip" />
                                          <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                                        </ValidationProvider>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td><b>Göğüs (cm) :</b></td>
                                      <td colspan="2">
                                        <ValidationProvider name="Göğüs (cm)" rules="required" v-slot="{ errors }">
                                          <input type="number" name="chest" id="chest" class="form-control" v-model="data.chest" />
                                          <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                                        </ValidationProvider>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td><b>Boyun (cm) : </b></td>
                                      <td colspan="2">
                                        <ValidationProvider name="Boyun (cm)" rules="required" v-slot="{ errors }">
                                          <input type="number" name="neck" id="neck" class="form-control" v-model="data.neck" />
                                          <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                                        </ValidationProvider>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td><b>Üst Kol (cm) :</b></td>
                                      <td colspan="2">
                                        <ValidationProvider name="Üst Kol (cm)" rules="required" v-slot="{ errors }">
                                          <input type="number" name="upperArm" id="upperArm" class="form-control" v-model="data.upperArm" />
                                          <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                                        </ValidationProvider>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td><b>Alt Kol (cm) :</b></td>
                                      <td colspan="2">
                                        <ValidationProvider name="Alt Kol (cm)" rules="required" v-slot="{ errors }">
                                          <input type="number" name="lowerArm" id="lowerArm" class="form-control" v-model="data.lowerArm" />
                                          <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                                        </ValidationProvider>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td><b>Kol Bileği (cm) :</b></td>
                                      <td colspan="2">
                                        <ValidationProvider name="Kol Bileği (cm)" rules="required" v-slot="{ errors }">
                                          <input type="number" name="wrist" id="wrist" class="form-control" v-model="data.wrist" />
                                          <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                                        </ValidationProvider>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td><b>Üst Bacak (cm) :</b></td>
                                      <td colspan="2">
                                        <ValidationProvider name="Üst Bacak (cm)" rules="required" v-slot="{ errors }">
                                          <input type="number" name="upperLeg" id="upperLeg" class="form-control" v-model="data.upperLeg" />
                                          <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                                        </ValidationProvider>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td><b>Alt Bacak (cm) :</b></td>
                                      <td colspan="2">
                                        <ValidationProvider name="Alt Bacak (cm)" rules="required" v-slot="{ errors }">
                                          <input type="number" name="lowerLeg" id="lowerLeg" class="form-control" v-model="data.lowerLeg" />
                                          <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                                        </ValidationProvider>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td><b>Deri Kıvrım Kalınlığı (cm) :</b></td>
                                      <td colspan="2">
                                        <ValidationProvider name="Deri Kıvrım Kalınlığı (cm)" rules="required" v-slot="{ errors }">
                                          <input
                                            type="number"
                                            name="skinfoldThickness"
                                            id="skinfoldThickness"
                                            class="form-control"
                                            v-model="data.skinfoldThickness"
                                          />
                                          <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                                        </ValidationProvider>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td><b>Yağ :</b></td>
                                      <td>% {{ data.fatRatio }}</td>
                                      <td>{{ data.fat }} KG</td>
                                    </tr>
                                    <tr>
                                      <td><b>Kas :</b></td>
                                      <td>% {{ data.muscleRatio }}</td>
                                      <td>{{ data.muscle }} KG</td>
                                    </tr>
                                    <tr>
                                      <td><b>Su :</b></td>
                                      <td>% {{ data.waterRatio }}</td>
                                      <td>{{ data.water }} KG</td>
                                    </tr>
                                  </tbody>
                                  <tfoot>
                                    <tr>
                                      <td colspan="3">
                                        <div class="form-group">
                                          <button class="btn btn-info-light login-btn float-right" type="submit">Danışan Bilgilerini Güncelle</button>
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
      data: { cities: [], towns: [], districts: [], neighborhoods: [] },
      country: { cities: [], towns: [], districts: [], neighborhoods: [] },
      months: ["OCAK", "ŞUBAT", "MART", "NİSAN", "MAYIS", "HAZİRAN", "TEMMUZ", "AĞUSTOS", "EYLÜL", "EKİM", "KASIM", "ARALIK"],
      siteSettings: this.$store.getters.siteSettings,
      userData:
        Cookie.get("userData") !== null && Cookie.get("userData") !== undefined && Cookie.get("userData") !== ""
          ? JSON.parse(Base64.decode(Cookie.get("userData")))
          : null,
    };
  },
  validate({ params }) {
    return params.id !== null ? params.id : null;
  },
  computed: {
    img_url() {
      return process.env.apiPublicUrl;
    },
  },
  async asyncData({ params, error, $axios }) {
    try {
      const { data } = await $axios.get(process.env.apiBaseUrl + "dietician/users/update/" + params.id);

      return data;
    } catch (e) {
      error({ message: "Kullanıcı Bilgisi Bulunamadı.", statusCode: 404 });
    }
  },
  methods: {
    updateInformation() {
      let formData = new FormData(this.$refs.informationForm);
      this.$axios
        .post(process.env.apiBaseUrl + "dietician/users/update/" + this.data._id.$oid, formData, {
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
