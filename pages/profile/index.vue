<template>
  <v-app class="h-auto" v-if="userData.status !=='dietician'">
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

            <!-- Profile Sidebar -->
            <div class="profile-sidebar">
              <div class="widget-profile pro-widget-content">
                <div class="profile-info-widget">
                  <a href="#" class="booking-doc-img">
                    <img v-bind:src="img_url+'/public/storage/'+data.img_url" class="img-fluid"
                         v-bind:alt="data.name">
                  </a>
                  <div class="profile-det-info">
                    <h3>{{ data.name }}</h3>

                    <div class="patient-details">
                      <h5 class="mb-0"><i class="fa fa-map-marker-alt"></i> {{ data.city }}, {{ data.town }}
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div class="dashboard-widget">
                <nav class="dashboard-menu">
                  <ul>
                    <li class="active">
                      <nuxt-link to="/profile" tag="a">
                        <i class="fa fa-user-cog"></i>
                        <span>Kayıt Bilgileri</span>
                      </nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/profile/diet-list" tag="a">
                        <i class="fa fa-calendar-check"></i>
                        <span>Diyet Listesi</span>
                      </nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/profile/dietician-list" tag="a">
                        <i class="fa fa-user-md"></i>
                        <span>Diyetisyenlerim</span>
                      </nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/profile/liked-foods-list" tag="a">
                        <i class="fa fa-drumstick-bite"></i>
                        <span>Sevdiğim Besinler / Yemekler</span>
                      </nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/profile/unliked-foods-list" tag="a">
                        <i class="fa fa-stroopwafel"></i>
                        <span>Sevmediğim Besinler / Yemekler</span>
                      </nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/profile/allergen-foods-list" tag="a">
                        <i class="fa fa-cloud-meatball"></i>
                        <span>Alerjen Olduğum Besinler / Yemekler</span>
                      </nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/profile/reports" tag="a">
                        <i class="fa fa-clipboard-list"></i>
                        <span>Raporlar</span>
                      </nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/profile/messages">
                        <i class="fa fa-comments"></i>
                        <span>Mesajlar</span>
                        <small class="unread-msg">23</small>
                      </nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/profile/social-media" tag="a">
                        <i class="fa fa-share-alt"></i>
                        <span>Sosyal Medya</span>
                      </nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/profile/password-update" tag="a">
                        <i class="fa fa-lock"></i>
                        <span>Şifre Güncelle</span>
                      </nuxt-link>
                    </li>
                    <li>
                      <a href="javascript:void(0)" @click.prevent="logout">
                        <i class="fa fa-sign-out-alt"></i>
                        <span>Çıkış Yap</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <!-- /Profile Sidebar -->

          </div>

          <div class="col-12 col-sm-12 col-md-7 col-lg-8 col-xl-9">

            <div class="row">
              <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <div class="card dash-card">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                        <div class="dash-widget dct-border-rht">
                          <div class="circle-bar circle-bar1">
                            <div class="circle-graph1" data-percent="75">
                              <img src="/img/icon-01.png" class="img-fluid"
                                   alt="patient">
                            </div>
                          </div>
                          <div class="dash-widget-info">
                            <h6>Yakılan Kalori</h6>
                            <h3>1500</h3>
                            <p class="text-muted">Bugün</p>
                          </div>
                        </div>
                      </div>

                      <div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                        <div class="dash-widget dct-border-rht">
                          <div class="circle-bar circle-bar2">
                            <div class="circle-graph2" data-percent="65">
                              <img src="/img/icon-02.png" class="img-fluid"
                                   alt="Patient">
                            </div>
                          </div>
                          <div class="dash-widget-info">
                            <h6>Verilen Kilo</h6>
                            <h3>160</h3>
                            <p class="text-muted">Haftada</p>
                          </div>
                        </div>
                      </div>

                      <div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                        <div class="dash-widget">
                          <div class="circle-bar circle-bar3">
                            <div class="circle-graph3" data-percent="50">
                              <img src="/img/icon-03.png" class="img-fluid"
                                   alt="Patient">
                            </div>
                          </div>
                          <div class="dash-widget-info">
                            <h6>Yapılan Egzersiz</h6>
                            <h3>85</h3>
                            <p class="text-muted">Ayda</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <h4 class="mb-4">Kayıt Bilgileri</h4>
                <div class="appointment-tab">

                  <!-- Appointment Tab -->
                  <ul class="nav nav-tabs nav-tabs-solid nav-tabs-rounded">
                    <li class="nav-item">
                      <a class="nav-link active" href="#kayit_bilgilerim"
                         data-toggle="tab">Kayıt Bilgilerim</a>
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
                            <table class="table table-striped table-hover table-center table-borderless mb-0  "
                                   style="border-top:none">
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
                    <div class="tab-pane" id="kayit_bilgisi_duzenle">
                      <div class="card card-table mb-0">
                        <div class="card-body">
                          <ValidationObserver v-slot="{ invalid,handleSubmit }">
                            <form @submit.prevent="handleSubmit(updateInformation)" ref="informationForm"
                                  enctype="multipart/form-data">
                              <div class="table-responsive mt-5">
                                <table class="table table-striped table-hover table-center table-borderless mb-0  "
                                       style="border-top:none">
                                  <tbody>
                                  <tr>
                                    <td><b>Ad Soyad :</b></td>
                                    <td colspan="2">
                                      <ValidationProvider name="Adınız ve Soyadınız" rules="required"
                                                          v-slot="{ errors }">
                                        <input id="name" type="text" class="form-control" name="name"
                                               v-model="data.name">
                                        <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                                      </ValidationProvider>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td><b>Cinsiyet :</b></td>
                                    <td colspan="2">
                                      <ValidationProvider name="Cinsiyetiniz" rules="required" v-slot="{ errors }">
                                        <v-radio-group v-model="data.gender" name="gender" row>
                                          <v-radio value="Erkek">
                                            <template v-slot:label>
                                              Erkek
                                            </template>
                                          </v-radio>
                                          <v-radio value="Kadın">
                                            <template v-slot:label>
                                              Kadın
                                            </template>
                                          </v-radio>
                                        </v-radio-group>
                                        <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                                      </ValidationProvider>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td><b>İkamet Ettiğiniz İl :</b></td>
                                    <td colspan="2">
                                      <ValidationProvider name="İkamet Ettiğiniz İl" rules="required"
                                                          v-slot="{ errors }">
                                        <select v-on:change="getTowns" name="city" id="city" class="form-control"
                                                v-model="data.city">
                                          <option :value="null" selected="selected">İl Seçiniz.</option>
                                          <option v-bind:data-id="city.towns" :value="city.name"
                                                  v-if="country.cities !== null && country.cities !== undefined && country.cities !== ''"
                                                  v-for="city in country.cities">{{ city.name }}
                                          </option>
                                        </select>
                                        <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                                      </ValidationProvider>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td><b>İkamet Ettiğiniz İlçe :</b></td>
                                    <td colspan="2">
                                      <ValidationProvider name="İkamet Ettiğiniz İlçe" rules="required"
                                                          v-slot="{ errors }">
                                        <select v-on:change="getDistricts" name="town" id="town" class="form-control"
                                                v-model="data.town">
                                          <option :value="null" v-if="data.towns.length > 0 || country.towns.length > 0"
                                                  selected="selected">İlçe Seçiniz.
                                          </option>
                                          <option :value="null" v-if="data.towns.length <= 0 && country.towns.length <= 0"
                                                  selected="selected">Önce İl Seçiniz.
                                          </option>
                                          <option v-bind:data-id="town.districts" :value="town.name"
                                                  v-if="country.towns !== null && country.towns !== undefined && country.towns !== '' && country.towns.length >0"
                                                  v-for="town in country.towns">{{ town.name }}
                                          </option>
                                          <option v-bind:data-id="town.districts" :value="town.name"
                                                  v-if="country.towns === null || country.towns === undefined || country.towns === '' || country.towns.length <= 0"
                                                  v-for="town in data.towns">{{ town.name }}
                                          </option>
                                        </select>
                                        <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                                      </ValidationProvider>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td><b>İkamet Ettiğiniz Semt :</b></td>
                                    <td colspan="2">
                                      <ValidationProvider name="İkamet Ettiğiniz Semt" rules="required"
                                                          v-slot="{ errors }">
                                        <select v-on:change="getNeighborhoods" name="district" id="district"
                                                class="form-control" v-model="data.district">
                                          <option :value="null"
                                                  v-if="data.districts.length > 0 || country.districts.length > 0"
                                                  selected="selected">Semt Seçiniz.
                                          </option>
                                          <option :value="null"
                                                  v-if="data.districts.length <= 0 && country.districts.length <= 0"
                                                  selected="selected">Önce İlçe Seçiniz.
                                          </option>
                                          <option v-bind:data-id="district.neighborhoods" :value="district.name"
                                                  v-if="country.districts !== null && country.districts !== undefined && country.districts !== '' && country.districts.length > 0"
                                                  v-for="district in country.districts">{{ district.name }}
                                          </option>
                                          <option v-bind:data-id="district.neighborhoods" :value="district.name"
                                                  v-if="country.districts === null || country.districts === undefined || country.districts === '' || country.districts.length <=0"
                                                  v-for="district in data.districts">{{ district.name }}
                                          </option>
                                        </select>
                                        <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                                      </ValidationProvider>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td><b>İkamet Ettiğiniz Mahalle :</b></td>
                                    <td colspan="2">
                                      <ValidationProvider name="İkamet Ettiğiniz Mahalle" rules="required"
                                                          v-slot="{ errors }">
                                        <select name="neighborhood" id="neighborhood" class="form-control"
                                                v-model="data.neighborhood">
                                          <option :value="null"
                                                  v-if="data.neighborhoods.length > 0 || country.neighborhoods.length > 0"
                                                  selected="selected">Mahalle Seçiniz.
                                          </option>
                                          <option :value="null"
                                                  v-if="data.neighborhoods.length <= 0 && country.neighborhoods.length <= 0"
                                                  selected="selected">Önce Semt Seçiniz.
                                          </option>
                                          <option :value="neighborhood.name"
                                                  v-if="country.neighborhoods !== null && country.neighborhoods !== undefined && country.neighborhoods !== '' && country.neighborhoods.length > 0"
                                                  v-for="neighborhood in country.neighborhoods">{{ neighborhood.name }}
                                          </option>
                                          <option :value="neighborhood.name"
                                                  v-if="country.neighborhoods === null || country.neighborhoods === undefined || country.neighborhoods === '' || country.neighborhoods.length <= 0"
                                                  v-for="neighborhood in data.neighborhoods">{{ neighborhood.name }}
                                          </option>
                                        </select>
                                        <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                                      </ValidationProvider>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td><b>İkamet Ettiğiniz Adres :</b></td>
                                    <td colspan="2">
                                      <ValidationProvider name="İkamet Ettiğiniz Adres" rules="required"
                                                          v-slot="{ errors }">
                                        <textarea name="address" id="address" class="form-control" cols="30" rows="5"
                                                  v-model="data.address">{{data.address}}</textarea>
                                        <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                                      </ValidationProvider>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td><b>Doğum Tarihi :</b></td>
                                    <td colspan="2">
                                      <ValidationProvider name="Doğum Tarihi" rules="required"
                                                          v-slot="{ errors }">
                                        <input type="date" class="form-control" name="birthDate" placeholder="Doğum Tarihi" v-model="data.birthDate">
                                        <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                                      </ValidationProvider>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td><b>Boy (cm) :</b></td>
                                    <td colspan="2">
                                      <ValidationProvider name="Boy (cm)" rules="required"
                                                          v-slot="{ errors }">
                                        <input type="number" name="size" id="size" class="form-control"
                                               v-model="data.size">
                                        <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                                      </ValidationProvider>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td><b>Ağırlık (kg) :</b></td>
                                    <td colspan="2">
                                      <ValidationProvider name="Ağırlık (kg)" rules="required"
                                                          v-slot="{ errors }">
                                        <input type="number" name="weight" id="weight" class="form-control"
                                               v-model="data.weight">
                                        <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                                      </ValidationProvider>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td><b>Bel (cm) :</b></td>
                                    <td colspan="2">
                                      <ValidationProvider name="Bel (cm)" rules="required"
                                                          v-slot="{ errors }">
                                        <input type="number" name="waist" id="waist" class="form-control"
                                               v-model="data.waist">
                                        <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                                      </ValidationProvider>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td><b>Kalça (cm) :</b></td>
                                    <td colspan="2">
                                      <ValidationProvider name="Kalça (cm)" rules="required"
                                                          v-slot="{ errors }">
                                        <input type="number" name="hip" id="hip" class="form-control"
                                               v-model="data.hip">
                                        <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                                      </ValidationProvider>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td><b>Göğüs (cm) :</b></td>
                                    <td colspan="2">
                                      <ValidationProvider name="Göğüs (cm)" rules="required"
                                                          v-slot="{ errors }">
                                        <input type="number" name="chest" id="chest" class="form-control"
                                               v-model="data.chest">
                                        <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                                      </ValidationProvider>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td><b>Boyun (cm) : </b></td>
                                    <td colspan="2">
                                      <ValidationProvider name="Boyun (cm)" rules="required"
                                                          v-slot="{ errors }">
                                        <input type="number" name="neck" id="neck" class="form-control"
                                               v-model="data.neck">
                                        <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                                      </ValidationProvider>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td><b>Üst Kol (cm) :</b></td>
                                    <td colspan="2">
                                      <ValidationProvider name="Üst Kol (cm)" rules="required"
                                                          v-slot="{ errors }">
                                        <input type="number" name="upperArm" id="upperArm" class="form-control"
                                               v-model="data.upperArm">
                                        <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                                      </ValidationProvider>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td><b>Alt Kol (cm) :</b></td>
                                    <td colspan="2">
                                      <ValidationProvider name="Alt Kol (cm)" rules="required"
                                                          v-slot="{ errors }">
                                        <input type="number" name="lowerArm" id="lowerArm" class="form-control"
                                               v-model="data.lowerArm">
                                        <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                                      </ValidationProvider>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td><b>Kol Bileği (cm) :</b></td>
                                    <td colspan="2">
                                      <ValidationProvider name="Kol Bileği (cm)" rules="required"
                                                          v-slot="{ errors }">
                                        <input type="number" name="wrist" id="wrist" class="form-control"
                                               v-model="data.wrist">
                                        <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                                      </ValidationProvider>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td><b>Üst Bacak (cm) :</b></td>
                                    <td colspan="2">
                                      <ValidationProvider name="Üst Bacak (cm)" rules="required"
                                                          v-slot="{ errors }">
                                        <input type="number" name="upperLeg" id="upperLeg" class="form-control"
                                               v-model="data.upperLeg">
                                        <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                                      </ValidationProvider>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td><b>Alt Bacak (cm) :</b></td>
                                    <td colspan="2">
                                      <ValidationProvider name="Alt Bacak (cm)" rules="required"
                                                          v-slot="{ errors }">
                                        <input type="number" name="lowerLeg" id="lowerLeg" class="form-control"
                                               v-model="data.lowerLeg">
                                        <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                                      </ValidationProvider>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td><b>Deri Kıvrım Kalınlığı (cm) :</b></td>
                                    <td colspan="2">
                                      <ValidationProvider name="Deri Kıvrım Kalınlığı (cm)" rules="required"
                                                          v-slot="{ errors }">
                                        <input type="number" name="skinfoldThickness" id="skinfoldThickness"
                                               class="form-control" v-model="data.skinfoldThickness">
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
                                  <tr>
                                    <td><b>Profil Resminiz :</b></td>
                                    <td colspan="2" class="align-middle">
                                      <div class="row">
                                        <div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 text-center align-middle py-auto my-auto">
                                          <img v-bind:src="img_url+'/public/storage/'+data.img_url" class="img-fluid rounded-profile"
                                               alt="Profil Resminiz">
                                        </div>
                                        <div class="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 align-middle py-auto my-auto">
                                          <input type="file" accept="image/*" placeholder="Profil Resminiz" name="img_url">
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                  </tbody>
                                  <tfoot>
                                  <tr>
                                    <td colspan="3">
                                      <div class="form-group">
                                        <button class="btn btn-primary login-btn text-white float-right" type="submit">Bilgilerimi
                                          Güncelle
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
  <v-app class="h-auto" v-else-if="userData.status ==='dietician'">
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

            <!-- Profile Sidebar -->
            <div class="profile-sidebar">
              <div class="widget-profile pro-widget-content text-center justify-content-center">
                <div class="profile-info-widget text-center justify-content-center">
                  <nuxt-link to="/profile" class="booking-doc-img">
                    <img v-bind:src="img_url+'/public/storage/'+data.profile_photo" class="img-fluid text-center justify-content-center"
                         v-bind:alt="data.name">
                  </nuxt-link>
                  <div class="profile-det-info">
                    <h3>{{ data.name }}</h3>

                    <div class="clinic-details text-center justify-content-center">
                      <h5 class="mb-2"><i class="fa fa-map-marker-alt"></i> {{ data.city }}, {{ data.town }}
                      </h5>

                      <h5 class="mb-2 font-weight-bold">Klinik'ten Görüntüler</h5>
                      <ul class="clinic-gallery text-center justify-content-center px-0"  v-if="data.clinic_photos !== '' && data.clinic_photos !== null && data.clinic_photos !== undefined && data.clinic_photos.length > 0">
                        <li v-if="index <=3" v-for="(item,index) in data.clinic_photos">
                          <a v-bind:href="img_url+'/public/storage/'+item.img_url" data-fancybox="gallery">
                            <img v-bind:src="img_url+'/public/storage/'+item.img_url" alt="Klinik'ten Görüntüler">
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="dashboard-widget">
                <nav class="dashboard-menu">
                  <ul>
                    <li class="active">
                      <nuxt-link to="/profile" tag="a">
                        <i class="fa fa-user-cog"></i>
                        <span>Kayıt Bilgileri</span>
                      </nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/profile/patient-list" tag="a">
                        <i class="fa fa-calendar-check"></i>
                        <span>Hasta Listesi</span>
                      </nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/profile/news-list" tag="a">
                        <i class="fa fa-newspaper"></i>
                        <span>Haberler</span>
                      </nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/profile/food-recipes-list" tag="a">
                        <i class="fa fa-utensils"></i>
                        <span>Yemek Tarifleri</span>
                      </nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/profile/messages">
                        <i class="fa fa-comments"></i>
                        <span>Mesajlar</span>
                        <small class="unread-msg">23</small>
                      </nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/profile/social-media" tag="a">
                        <i class="fa fa-share-alt"></i>
                        <span>Sosyal Medya</span>
                      </nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/profile/password-update" tag="a">
                        <i class="fa fa-lock"></i>
                        <span>Şifre Güncelle</span>
                      </nuxt-link>
                    </li>
                    <li>
                      <a href="javascript:void(0)" @click.prevent="logout">
                        <i class="fa fa-sign-out-alt"></i>
                        <span>Çıkış Yap</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <!-- /Profile Sidebar -->

          </div>

          <div class="col-12 col-sm-12 col-md-7 col-lg-8 col-xl-9">

            <div class="row">
              <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <div class="card dash-card">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                        <div class="dash-widget dct-border-rht">
                          <div class="circle-bar circle-bar1">
                            <div class="circle-graph1" data-percent="75">
                              <img src="/img/icon-01.png" class="img-fluid"
                                   alt="patient">
                            </div>
                          </div>
                          <div class="dash-widget-info">
                            <h6>Danışman</h6>
                            <h3>1500</h3>
                            <p class="text-muted">Toplam</p>
                          </div>
                        </div>
                      </div>

                      <div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                        <div class="dash-widget dct-border-rht">
                          <div class="circle-bar circle-bar2">
                            <div class="circle-graph2" data-percent="65">
                              <img src="/img/icon-02.png" class="img-fluid"
                                   alt="Patient">
                            </div>
                          </div>
                          <div class="dash-widget-info">
                            <h6>Makale</h6>
                            <h3>160</h3>
                            <p class="text-muted">Toplam</p>
                          </div>
                        </div>
                      </div>

                      <div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                        <div class="dash-widget">
                          <div class="circle-bar circle-bar3">
                            <div class="circle-graph3" data-percent="50">
                              <img src="/img/icon-03.png" class="img-fluid"
                                   alt="Patient">
                            </div>
                          </div>
                          <div class="dash-widget-info">
                            <h6>Tarif</h6>
                            <h3>85</h3>
                            <p class="text-muted">Toplam</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <h4 class="mb-4">Kayıt Bilgileri</h4>
                <div class="appointment-tab">

                  <!-- Appointment Tab -->
                  <ul class="nav nav-tabs nav-tabs-solid nav-tabs-rounded">
                    <li class="nav-item">
                      <a class="nav-link active" href="#diyetisyen_kayit_bilgilerim"
                         data-toggle="tab">Kayıt Bilgilerim</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#diyetisyen_kayit_bilgisi_duzenle" data-toggle="tab">Kayıt Bilgisi Düzenle</a>
                    </li>
                  </ul>
                  <!-- /Appointment Tab -->

                  <div class="tab-content">

                    <!-- Upcoming Appointment Tab -->
                    <div class="tab-pane show active" id="diyetisyen_kayit_bilgilerim">
                      <div class="card card-table mb-0">
                        <div class="card-body">
                          <div class="table-responsive bg-light mt-5">
                            <table class="table table-striped table-hover table-center table-borderless mb-0  "
                                   style="border-top:none">
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
                                <td><b>İş Yerinizin Bulunduğu İl :</b></td>
                                <td colspan="2">{{ data.company_city }}</td>
                              </tr>
                              <tr>
                                <td><b>İş Yerinizin Bulunduğu İlçe :</b></td>
                                <td colspan="2">{{ data.company_town }}</td>
                              </tr>
                              <tr>
                                <td><b>İş Yerinizin Bulunduğu Semt :</b></td>
                                <td colspan="2">{{ data.company_district }}</td>
                              </tr>
                              <tr>
                                <td><b>İş Yerinizin Bulunduğu Mahalle :</b></td>
                                <td colspan="2">{{ data.company_neighborhood }}</td>
                              </tr>
                              <tr>
                                <td><b>İşyerinizin Adresi :</b></td>
                                <td colspan="2">{{ data.company_address }}</td>
                              </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- /Upcoming Appointment Tab -->

                    <!-- Today Appointment Tab -->
                    <div class="tab-pane" id="diyetisyen_kayit_bilgisi_duzenle">
                      <div class="card card-table mb-0">
                        <div class="card-body">
                          <ValidationObserver v-slot="{ invalid,handleSubmit }">
                            <form @submit.prevent="handleSubmit(updateInformation)" ref="informationForm"
                                  enctype="multipart/form-data">
                              <div class="table-responsive mt-5">
                                <table class="table table-striped table-hover table-center table-borderless mb-0  "
                                       style="border-top:none">
                                  <tbody>
                                  <tr>
                                    <td><b>Ad Soyad :</b></td>
                                    <td colspan="2">
                                      <ValidationProvider name="Adınız ve Soyadınız" rules="required"
                                                          v-slot="{ errors }">
                                        <input id="dietician_name" type="text" class="form-control" name="name"
                                               v-model="data.name">
                                        <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                                      </ValidationProvider>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td><b>Cinsiyet :</b></td>
                                    <td colspan="2">
                                      <ValidationProvider name="Cinsiyetiniz" rules="required" v-slot="{ errors }">
                                        <v-radio-group v-model="data.gender" name="gender" row>
                                          <v-radio value="Erkek">
                                            <template v-slot:label>
                                              Erkek
                                            </template>
                                          </v-radio>
                                          <v-radio value="Kadın">
                                            <template v-slot:label>
                                              Kadın
                                            </template>
                                          </v-radio>
                                        </v-radio-group>
                                        <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                                      </ValidationProvider>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td><b>İkamet Ettiğiniz İl :</b></td>
                                    <td colspan="2">
                                      <ValidationProvider name="İkamet Ettiğiniz İl" rules="required"
                                                          v-slot="{ errors }">
                                        <select v-on:change="getTowns" name="city" id="dietician_city" class="form-control"
                                                v-model="data.city">
                                          <option :value="null" selected="selected">İl Seçiniz.</option>
                                          <option v-bind:data-id="city.towns" v-bind:value="city.name"
                                                  v-if="country.cities !== null && country.cities !== undefined && country.cities !== '' && country.cities.length > 0"
                                                  v-for="city in country.cities">{{ city.name }}
                                          </option>
                                        </select>
                                        <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                                      </ValidationProvider>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td><b>İkamet Ettiğiniz İlçe :</b></td>
                                    <td colspan="2">
                                      <ValidationProvider name="İkamet Ettiğiniz İlçe" rules="required"
                                                          v-slot="{ errors }">
                                        <select v-on:change="getDistricts" name="town" id="dietician_town" class="form-control"
                                                v-model="data.town">
                                          <option :value="null" v-if="data.towns.length > 0 || country.towns.length > 0"
                                                  selected="selected">İlçe Seçiniz.
                                          </option>
                                          <option :value="null" v-if="data.towns.length <= 0 && country.towns.length <= 0"
                                                  selected="selected">Önce İl Seçiniz.
                                          </option>
                                          <option v-bind:data-id="town.districts" v-bind:value="town.name"
                                                  v-if="country.towns !== null && country.towns !== undefined && country.towns !== '' && country.towns.length >0"
                                                  v-for="town in country.towns">{{ town.name }}
                                          </option>
                                          <option v-bind:data-id="town.districts" v-bind:value="town.name"
                                                  v-if="country.towns === null || country.towns === undefined || country.towns === '' || (country.towns.length <= 0 && data.towns.length >0)"
                                                  v-for="town in data.towns">{{ town.name }}
                                          </option>
                                        </select>
                                        <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                                      </ValidationProvider>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td><b>İkamet Ettiğiniz Semt :</b></td>
                                    <td colspan="2">
                                      <ValidationProvider name="İkamet Ettiğiniz Semt" rules="required"
                                                          v-slot="{ errors }">
                                        <select v-on:change="getNeighborhoods" name="district" id="dietician_district"
                                                class="form-control" v-model="data.district">
                                          <option :value="null"
                                                  v-if="data.districts.length > 0 || country.districts.length > 0"
                                                  selected="selected">Semt Seçiniz.
                                          </option>
                                          <option :value="null"
                                                  v-if="data.districts.length <= 0 && country.districts.length <= 0"
                                                  selected="selected">Önce İlçe Seçiniz.
                                          </option>
                                          <option v-bind:data-id="district.neighborhoods" v-bind:value="district.name"
                                                  v-if="country.districts !== null && country.districts !== undefined && country.districts !== '' && country.districts.length > 0"
                                                  v-for="district in country.districts">{{ district.name }}
                                          </option>
                                          <option v-bind:data-id="district.neighborhoods" v-bind:value="district.name"
                                                  v-if="country.districts === null || country.districts === undefined || country.districts === '' || (country.districts.length <=0 && data.districts.length>0)"
                                                  v-for="district in data.districts">{{ district.name }}
                                          </option>
                                        </select>
                                        <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                                      </ValidationProvider>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td><b>İkamet Ettiğiniz Mahalle :</b></td>
                                    <td colspan="2">
                                      <ValidationProvider name="İkamet Ettiğiniz Mahalle" rules="required"
                                                          v-slot="{ errors }">
                                        <select name="neighborhood" id="dietician_neighborhood" class="form-control"
                                                v-model="data.neighborhood">
                                          <option :value="null"
                                                  v-if="data.neighborhoods.length > 0 || country.neighborhoods.length > 0"
                                                  selected="selected">Mahalle Seçiniz.
                                          </option>
                                          <option :value="null"
                                                  v-if="data.neighborhoods.length <= 0 && country.neighborhoods.length <= 0"
                                                  selected="selected">Önce Semt Seçiniz.
                                          </option>
                                          <option v-bind:value="neighborhood.name"
                                                  v-if="country.neighborhoods !== null && country.neighborhoods !== undefined && country.neighborhoods !== '' && country.neighborhoods.length > 0"
                                                  v-for="neighborhood in country.neighborhoods">{{ neighborhood.name }}
                                          </option>
                                          <option v-bind:value="neighborhood.name"
                                                  v-if="country.neighborhoods === null || country.neighborhoods === undefined || country.neighborhoods === '' || (country.neighborhoods.length <= 0 && data.neighborhoods.length>0)"
                                                  v-for="neighborhood in data.neighborhoods">{{ neighborhood.name }}
                                          </option>
                                        </select>
                                        <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                                      </ValidationProvider>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td><b>İkamet Ettiğiniz Adres :</b></td>
                                    <td colspan="2">
                                      <ValidationProvider name="İkamet Ettiğiniz Adres" rules="required"
                                                          v-slot="{ errors }">
                                        <textarea name="address" id="dietician_address" class="form-control" cols="30" rows="5"
                                                  v-model="data.address">{{data.address}}</textarea>
                                        <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                                      </ValidationProvider>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td><b>Doğum Tarihi :</b></td>
                                    <td colspan="2">
                                      <ValidationProvider name="Doğum Tarihi" rules="required"
                                                          v-slot="{ errors }">
                                        <input type="date" class="form-control" name="birthDate" placeholder="Doğum Tarihi" v-model="data.birthDate">
                                        <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                                      </ValidationProvider>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td><b>İşyerinizin Bulunduğu İl :</b></td>
                                    <td colspan="2">
                                      <ValidationProvider name="İş Yerinizin Bulunduğu İl" rules="required"
                                                          v-slot="{ errors }">
                                        <select v-on:change="getTowns2" name="company_city" id="company_city" class="form-control"
                                                v-model="data.company_city">
                                          <option :value="null" selected="selected">İl Seçiniz.</option>
                                          <option v-bind:data-id="city.towns" v-bind:value="city.name"
                                                  v-if="country2.cities !== null && country2.cities !== undefined && country2.cities !== '' && country2.cities.length > 0"
                                                  v-for="city in country2.cities">{{ city.name }}
                                          </option>
                                        </select>
                                        <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                                      </ValidationProvider>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td><b>İşyerinizin Bulunduğu İlçe :</b></td>
                                    <td colspan="2">
                                      <ValidationProvider name="İşyerinizin Bulunduğu İlçe" rules="required"
                                                          v-slot="{ errors }">
                                        <select v-on:change="getDistricts2" name="company_town" id="company_town" class="form-control"
                                                v-model="data.company_town">
                                          <option :value="null" v-if="data.company_towns.length > 0 || country2.towns.length > 0"
                                                  selected="selected">İlçe Seçiniz.
                                          </option>
                                          <option :value="null" v-if="data.company_towns.length <= 0 && country2.towns.length <= 0"
                                                  selected="selected">Önce İl Seçiniz.
                                          </option>
                                          <option v-bind:data-id="town.districts" v-bind:value="town.name"
                                                  v-if="country2.towns !== null && country2.towns !== undefined && country2.towns !== '' && country2.towns.length >0"
                                                  v-for="town in country2.towns">{{ town.name }}
                                          </option>
                                          <option v-bind:data-id="town.districts" v-bind:value="town.name"
                                                  v-if="country2.towns === null || country2.towns === undefined || country2.towns === '' || (country2.towns.length <= 0 && data.company_towns.length >0)"
                                                  v-for="town in data.company_towns">{{ town.name }}
                                          </option>
                                        </select>
                                        <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                                      </ValidationProvider>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td><b>İşyerinizin Bulunduğu Semt :</b></td>
                                    <td colspan="2">
                                      <ValidationProvider name="İşyerinizin Bulunduğu Semt" rules="required"
                                                          v-slot="{ errors }">
                                        <select v-on:change="getNeighborhoods2" name="company_district" id="company_district"
                                                class="form-control" v-model="data.company_district">
                                          <option :value="null"
                                                  v-if="data.company_districts.length > 0 || country2.districts.length > 0"
                                                  selected="selected">Semt Seçiniz.
                                          </option>
                                          <option :value="null"
                                                  v-if="data.company_districts.length <= 0 && country2.districts.length <= 0"
                                                  selected="selected">Önce İlçe Seçiniz.
                                          </option>
                                          <option v-bind:data-id="district.neighborhoods" v-bind:value="district.name"
                                                  v-if="country2.districts !== null && country2.districts !== undefined && country2.districts !== '' && country2.districts.length > 0"
                                                  v-for="district in country2.districts">{{ district.name }}
                                          </option>
                                          <option v-bind:data-id="district.neighborhoods" v-bind:value="district.name"
                                                  v-if="country2.districts === null || country2.districts === undefined || country2.districts === '' || (country2.districts.length <=0 && data.company_districts.length>0)"
                                                  v-for="district in data.company_districts">{{ district.name }}
                                          </option>
                                        </select>
                                        <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                                      </ValidationProvider>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td><b>İşyerinizin Bulunduğu Mahalle :</b></td>
                                    <td colspan="2">
                                      <ValidationProvider name="İşyerinizin Bulunduğu Mahalle" rules="required"
                                                          v-slot="{ errors }">
                                        <select name="company_neighborhood" id="company_neighborhood" class="form-control"
                                                v-model="data.company_neighborhood">
                                          <option :value="null"
                                                  v-if="data.company_neighborhoods.length > 0 || country.neighborhoods.length > 0"
                                                  selected="selected">Mahalle Seçiniz.
                                          </option>
                                          <option :value="null"
                                                  v-if="data.company_neighborhoods.length <= 0 && country.neighborhoods.length <= 0"
                                                  selected="selected">Önce Semt Seçiniz.
                                          </option>
                                          <option v-bind:value="neighborhood.name"
                                                  v-if="country2.neighborhoods !== null && country2.neighborhoods !== undefined && country2.neighborhoods !== '' && country2.neighborhoods.length > 0"
                                                  v-for="neighborhood in country2.neighborhoods">{{ neighborhood.name }}
                                          </option>
                                          <option v-bind:value="neighborhood.name"
                                                  v-if="country2.neighborhoods === null || country2.neighborhoods === undefined || country2.neighborhoods === '' || (country2.neighborhoods.length <= 0 && data.company_neighborhoods.length>0)"
                                                  v-for="neighborhood in data.company_neighborhoods">{{ neighborhood.name }}
                                          </option>
                                        </select>
                                        <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                                      </ValidationProvider>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td><b>İşyerinizin Adresi :</b></td>
                                    <td colspan="2">
                                      <ValidationProvider name="İşyerinizin Adresi" rules="required"
                                                          v-slot="{ errors }">
                                        <textarea name="company_address" id="company_address" class="form-control" cols="30" rows="5"
                                                  v-model="data.company_address">{{data.company_address}}</textarea>
                                        <small class="font-weight-bold text-danger">{{ errors[0] }}</small>
                                      </ValidationProvider>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td><b>Profil Resminiz :</b></td>
                                    <td colspan="2" class="align-middle">
                                      <div class="row">
                                        <div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 text-center align-middle py-auto my-auto">
                                          <img v-bind:src="img_url+'/public/storage/'+data.profile_photo" class="img-fluid rounded-profile"
                                               alt="Profil Resminiz">
                                        </div>
                                        <div class="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 align-middle py-auto my-auto">
                                          <input type="file" accept="image/*" placeholder="Profil Resminiz" name="profile_photo">
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td><b>İşyerinizin Logosu :</b></td>
                                    <td colspan="2" class="align-middle">
                                      <div class="row">
                                        <div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 text-center align-middle py-auto my-auto">
                                          <img v-bind:src="img_url+'/public/storage/'+data.company_logo" class="img-fluid align-middle py-auto my-auto" width="225" height="80"
                                               alt="İşyerinizin Logosu">
                                        </div>
                                        <div class="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 align-middle py-auto my-auto">
                                          <input type="file" accept="image/*" placeholder="İşyerinizin Logosu" name="company_logo">
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td><b>Klinik Fotoğrafları :</b></td>
                                    <td colspan="2">
                                      <input type="file" accept="image/*" placeholder="Klinik Fotoğrafları" name="clinic_photos[]" multiple>
                                    </td>
                                  </tr>
                                  </tbody>
                                  <tfoot>
                                  <tr>
                                    <td colspan="3">
                                      <div class="form-group">
                                        <button class="btn btn-primary login-btn text-white float-right" type="submit">Bilgilerimi
                                          Güncelle
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
import {Base64} from "js-base64";
import $ from "jquery";
import {ValidationObserver, ValidationProvider} from "vee-validate"

export default {
  middleware: ["session-control", "guest"],
  name: "profile",
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  computed: {
    img_url() {
      return process.env.apiPublicUrl;
    },
  },
  mounted() {
    this.getCities()
    this.getCities2()
    let inputs = document.querySelectorAll('.v-file-input input');
    [...inputs].forEach((input) => {
      input.remove()
    })
  },
  data() {
    return {
      data: {cities: [], towns: [], districts: [], neighborhoods: [], company_cities:[], company_towns:[], company_districts:[], company_neighborhoods:[],city:'',town:'',district:'',neighborhood:'',company_city:'',company_town:'',company_district:'',company_neighborhood:''},
      country: {cities: [], towns: [], districts: [], neighborhoods: []},
      country2: {cities: [], towns: [], districts: [], neighborhoods: []},
      months: ["OCAK","ŞUBAT","MART","NİSAN","MAYIS","HAZİRAN","TEMMUZ","AĞUSTOS","EYLÜL","EKİM","KASIM","ARALIK"],
      userData: (Cookie.get("userData") !== null && Cookie.get("userData") !== undefined && Cookie.get("userData") !== "" ? JSON.parse(Base64.decode(Cookie.get("userData"))) : (this.$store.getters.loggedInUser !== undefined && this.$store.getters.loggedInUser !== null && this.$store.getters.loggedInUser !== "" ? this.$store.getters.loggedInUser : null)),
    }
  },
  async asyncData({app,store,route,params, error, $axios}) {
    try {
      if(store.getters.loggedInUser.status === 'dietician'){
        let {data} = await $axios.get(process.env.apiBaseUrl + "dietician/profile/")
        return data
      }else{
        let {data} = await $axios.get(process.env.apiBaseUrl + "users/profile/")
        return data
      }
    } catch (e) {
      console.log(store.getters.loggedInUser)
      console.log(process.env.apiBaseUrl + "dietician/profile/")
      console.log(e);

      error({message: 'Kullanıcı Bilgisi Bulunamadı.', statusCode: 404})
    }
  },

  methods: {
    logout() {
      this.$store.dispatch("logout")
      this.$izitoast.success({
        title: 'Başarılı!',
        message: 'Başarıyla Çıkış Yaptınız Yönlendiriliyorsunuz.',
        position: 'topCenter'
      })
      setTimeout(() => {
        this.$router.go(decodeURIComponent("/"))
      }, 2000)
    },
    getCities() {
      this.$axios.get(process.env.apiBaseUrl + "informations/cities").then(response => {
        this.country.cities = (response.data.data.cities.length > 0 ? response.data.data.cities : [])
      });
    },
    getTowns: function (event) {
      if (event.target.options.selectedIndex > -1) {
        const theTarget = event.target.options[event.target.options.selectedIndex].dataset;
        let townIds = theTarget.id;
        this.$axios.get(process.env.apiBaseUrl + "informations/towns?id=" + townIds)
          .then(response => {
            this.country.towns = (response.data.towns.length >0 ? response.data.towns : [])
            this.country.districts = [];
            this.userData.districts = [];
            this.country.neighborhoods = [];
            this.userData.neighborhoods = [];
            this.data.district = null;
            this.data.neighborhood = null;
          })
      }
    },
    getDistricts: function (event) {
      if (event.target.options.selectedIndex > -1) {
        const theTarget = event.target.options[event.target.options.selectedIndex].dataset;
        let districtIds = theTarget.id;
        this.$axios.get(process.env.apiBaseUrl + "informations/districts?id=" + districtIds)
          .then(response => {
            this.country.districts = (response.data.districts.length >0 ? response.data.districts : [])
            this.country.neighborhoods = [];
            this.userData.neighborhoods = [];
            this.data.neighborhood = null;
          })
      }
    },
    getNeighborhoods: function (event) {
      if (event.target.options.selectedIndex > -1) {
        const theTarget = event.target.options[event.target.options.selectedIndex].dataset;
        let neighborhoodIds = theTarget.id;
        this.$axios.get(process.env.apiBaseUrl + "informations/neighborhoods?id=" + neighborhoodIds)
          .then(response => {
            this.country.neighborhoods = (response.data.neighborhoods.length >0 ? response.data.neighborhoods : [])
          })
      }
    },
    getCities2() {
      this.$axios.get(process.env.apiBaseUrl + "informations/cities").then(response => {
        this.country2.cities = (response.data.data.cities.length > 0 ? response.data.data.cities : [])
      });
    },
    getTowns2: function (event) {
      if (event.target.options.selectedIndex > -1) {
        const theTarget = event.target.options[event.target.options.selectedIndex].dataset;
        let townIds = theTarget.id;
        this.$axios.get(process.env.apiBaseUrl + "informations/towns?id=" + townIds)
          .then(response => {
            this.country2.towns = (response.data.towns.length >0 ? response.data.towns : [])
            this.country2.districts = [];
            this.userData.company_districts = [];
            this.country2.neighborhoods = [];
            this.userData.company_neighborhoods = [];
            this.data.company_district = null;
            this.data.company_neighborhood = null;
          })
      }
    },
    getDistricts2: function (event) {
      if (event.target.options.selectedIndex > -1) {
        const theTarget = event.target.options[event.target.options.selectedIndex].dataset;
        let districtIds = theTarget.id;
        this.$axios.get(process.env.apiBaseUrl + "informations/districts?id=" + districtIds)
          .then(response => {
            this.country2.districts = (response.data.districts.length >0 ? response.data.districts : [])
            this.country2.neighborhoods = [];
            this.userData.company_neighborhoods = [];
            this.data.company_neighborhood = null;
          })
      }
    },
    getNeighborhoods2: function (event) {
      if (event.target.options.selectedIndex > -1) {
        const theTarget = event.target.options[event.target.options.selectedIndex].dataset;
        let neighborhoodIds = theTarget.id;
        this.$axios.get(process.env.apiBaseUrl + "informations/neighborhoods?id=" + neighborhoodIds)
          .then(response => {
            this.country2.neighborhoods = (response.data.neighborhoods.length >0 ? response.data.neighborhoods : [])
          })
      }
    },
    updateInformation() {
      let formData = new FormData(this.$refs.informationForm);
      formData.append("api_token",this.userData.api_token)
      this.$axios.post(process.env.apiBaseUrl + (this.userData.status === "dietician" ? "dietician/profile/update" : "users/update"), formData, {
        json: true,
        withCredentials: false,
        mode: 'no-cors',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token, Authorization',
          'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Credentials': true,
          "Content-Type": "multipart/form-data; boundary=" + formData._boundary,
          "Authorization": "Bearer " + this.userData.api_token
        },
      })
        .then(response => {
          if (response.data.success) {
            this.$izitoast.success({
              title: response.data.title,
              message: response.data.msg,
              position: 'topCenter'
            })
            console.log(response.data.data)
            Cookie.set("userData", Base64.encode(JSON.stringify(response.data.data)))
            localStorage.setItem("userData", Base64.encode(JSON.stringify(response.data.data)))
            setTimeout(() => {
              this.$router.go(decodeURIComponent("/profile"))
            }, 2000)
          } else {
            this.$izitoast.error({
              title: response.data.title,
              message: response.data.msg,
              position: 'topCenter'
            })
          }
        })
    },
  }


}
</script>

<style scoped>

</style>
