<template>
  <v-app>
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
                  Kaç Kalori?
                </li>
              </ol>
            </nav>
            <h2 class="breadcrumb-title">Kaç Kalori?</h2>
          </div>
        </div>
      </div>
    </div>
    <!-- /Breadcrumb -->
    <div class="main-wrapper">
      <!-- Home Banner -->
      <section class="section section-search py-5">
        <div class="container-fluid">
          <div class="banner-wrapper">
            <div class="banner-header text-center">
              <h1>Besin Ara</h1>
              <p><small>En Sağlıklı Besinleri Keşfet</small></p>
            </div>

            <!-- Search -->
            <div class="search-box">
              <form onsubmit="return false">
                <div class="form-group search-info w-100">
                  <input
                    type="text"
                    class="form-control rounded-0"
                    v-on:keyup.prevent="getNutrients()"
                    v-model="search"
                    placeholder="Besin Aramak İçin Buraya Yazın..."
                  />
                </div>
              </form>
            </div>
            <!-- /Search -->
          </div>
        </div>
      </section>
      <!-- /Home Banner -->
      <div class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12 col-sm-12 col-md-7 col-lg-8 col-xl-9">
              <h1
                class="text-center"
                v-if="search !== null && search !== '' && search !== undefined"
              >
                "{{ search }}" Aramasıyla İle İlgili Besinler
              </h1>
              <h1
                class="text-center"
                v-if="search === null || search === '' || search === undefined"
              >
                Tüm Besinler
              </h1>
              <hr />
              <div
                class="row row-grid"
                v-if="
                  nutrients !== null &&
                  nutrients !== '' &&
                  nutrients !== undefined
                "
              >
                <div
                  v-bind:key="index"
                  v-for="(nutrient, index) in nutrients"
                  class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3"
                >
                  <div class="profile-widget">
                    <div class="doc-img">
                      <nuxt-link v-bind:to="/calorie/ + nutrient.slug" tag="a">
                        <img
                          height="300"
                          v-bind:alt="nutrient.name"
                          v-bind:src="
                            img_url + 'public/storage/' + (nutrient.nutrients !== null && nutrient.nutrients !== '' && nutrient.nutrients !== undefined && nutrient.nutrients.img_url !== null && nutrient.nutrients.img_url !== '' && nutrient.nutrients.img_url !== undefined ? nutrient.nutrients.img_url : this.empty_url)
                          "
                        />
                      </nuxt-link>
                    </div>
                    <div class="pro-content">
                      <h3 class="title">
                        <nuxt-link
                          v-bind:to="/calorie/ + nutrient.slug"
                          tag="a"
                          >{{ nutrient.name }}</nuxt-link
                        >
                      </h3>
                      <p class="speciality">{{ nutrient.description }}</p>

                      <div class="row row-sm">
                        <div class="col-12">
                          <nuxt-link
                            tag="a"
                            v-bind:to="/calorie/ + nutrient.slug"
                            class="btn btn-info-light rounded-0 view-btn"
                            >Besin Detayı</nuxt-link
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="container">
                <v-pagination
                  class="my-3"
                  v-model="pagination.current"
                  :length="pagination.total"
                  @input="onPageChange"
                  total-visible="11"
                ></v-pagination>
              </div>
            </div>
            <div
              class="col-12 col-sm-12 col-md-5 col-lg-4 col-xl-3 theiaStickySidebar"
            >
              <div class="profile-sidebar">
                <div class="widget-profile pro-widget-content">
                  <div class="profile-info-widget">
                    <a href="#" class="booking-doc-img">
                      <img
                        src="assets/img/patients/patient.jpg"
                        alt="User Image"
                      />
                    </a>
                    <div class="profile-det-info">
                      <h3>Richard Wilson</h3>
                      <div class="patient-details">
                        <h5>
                          <i class="fa fa-birthday-cake"></i> 24 Jul 1983, 38
                          years
                        </h5>
                        <h5 class="mb-0">
                          <i class="fa fa-map-marker-alt"></i> Newyork, USA
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="dashboard-widget">
                  <nav class="dashboard-menu">
                    <ul>
                      <li>
                        <a href="patient-dashboard.html">
                          <i class="fa fa-columns"></i>
                          <span>Dashboard</span>
                        </a>
                      </li>
                      <li class="active">
                        <a href="favourites.html">
                          <i class="fa fa-bookmark"></i>
                          <span>Favourites</span>
                        </a>
                      </li>
                      <li>
                        <a href="chat.html">
                          <i class="fa fa-comments"></i>
                          <span>Message</span>
                          <small class="unread-msg">23</small>
                        </a>
                      </li>
                      <li>
                        <a href="profile-settings.html">
                          <i class="fa fa-user-cog"></i>
                          <span>Profile Settings</span>
                        </a>
                      </li>
                      <li>
                        <a href="change-password.html">
                          <i class="fa fa-lock"></i>
                          <span>Change Password</span>
                        </a>
                      </li>
                      <li>
                        <a href="index.html">
                          <i class="fa fa-sign-out-alt"></i>
                          <span>Logout</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";
export default {
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  name: "index",
  computed: {
    img_url() {
      return process.env.apiPublicUrl;
    },
  },
  methods: {
    getNutrients(param) {
      if (this.search !== null) {
        this.$store
          .dispatch("getNutrients", {
            nutrientsURL:
              "nutrients?page=" +
              this.pagination.current +
              "&search=" +
              decodeURIComponent(this.search),
          })
          .then((response) => {
            this.empty_url = this.$store.getters.nutrients.empty_url;
            this.nutrients = this.$store.getters.nutrients.data;
            this.pagination.current = this.$store.getters.nutrients.current_page;
            this.pagination.total = this.$store.getters.nutrients.last_page;
          });
      } else {
        if (param) {
          this.$store
            .dispatch("getNutrients", { nutrientsURL: param })
            .then((response) => {
              this.empty_url = this.$store.getters.nutrients.empty_url;
              this.nutrients = this.$store.getters.nutrients.data;
              this.pagination.current = this.$store.getters.nutrients.current_page;
              this.pagination.total = this.$store.getters.nutrients.last_page;
            });
        } else {
          this.$store
            .dispatch("getNutrients", {
              nutrientsURL: "nutrients?page=" + this.pagination.current,
            })
            .then((response) => {
              this.empty_url = this.$store.getters.nutrients.empty_url;
              this.nutrients = this.$store.getters.nutrients.data;
              this.pagination.current = this.$store.getters.nutrients.current_page;
              this.pagination.total = this.$store.getters.nutrients.last_page;
            });
        }
      }
    },
    onPageChange() {
      this.getNutrients();
    },
  },
  data() {
    return {
      nutrients: [],
      search: null,
      empty_url: null,
      pagination: {
        current: 1,
        total: 1,
      },
    };
  },
  mounted() {
    this.getNutrients();
  },
};
</script>
