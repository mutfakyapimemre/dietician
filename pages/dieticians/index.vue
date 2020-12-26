<template>
  <v-app class="h-auto">
    <div class="main-wrapper">
      <!-- Home Banner -->
      <section class="section section-search pt-5 bg-white">
        <div class="container-fluid">
          <div class="banner-wrapper">
            <div class="banner-header text-center">
              <h1>Diyetisyen Ara</h1>
              <p>
                <small
                  >En profesyonel diyetisyenleri keşfet, sağlıklı yemek tarifleri al &
                  senin için en uygun olanı tercih et.</small
                >
              </p>
            </div>

            <!-- Search -->
            <div class="search-box justify-content-center">
              <form onsubmit="return false" class="justify-content-center">
                <div class="form-group search-info w-100">
                  <input
                    type="text"
                    class="form-control rounded-0"
                    v-on:keyup.prevent="getDoctors()"
                    v-model="search"
                    placeholder="Diyetisyen Aramak İçin Buraya Yazın..."
                  />
                </div>
              </form>
            </div>
            <!-- /Search -->
          </div>
        </div>
      </section>
      <!-- /Home Banner -->
      <section>
        <div class="row">
          <div class="col-12 col-sm-12 col-md-6 col-lg-9 col-xl-9">
            <v-row
              v-if="
                doctors !== null &&
                doctors !== '' &&
                doctors !== undefined &&
                doctors.length > 0
              "
            >
              <!-- Doctor Widget -->
              <v-col
                v-bind:key="index"
                v-for="(doctor, index) in doctors"
                cols="12" xs="12" sm="6" md="6" lg="4" xl="3"
              >
                <div class="h-100 profile-widget mx-1">
                  <div class="doc-img">
                    <nuxt-link tag="a" v-bind:to="'/profile/' + doctor.slug">
                      <img
                        class="img-fluid"
                        style="min-height: 273px"
                        v-bind:alt="doctor.name"
                        v-bind:src="
                          base_img_url + '/public/storage/' + doctor.profile_photo.img_url
                        "
                      />
                    </nuxt-link>
                  </div>
                  <div class="pro-content h-100">
                    <h3 class="title">
                      <nuxt-link tag="a" v-bind:to="'/profile/' + doctor.slug">{{
                        doctor.name
                      }}</nuxt-link>
                      <i class="fa fa-check-circle verified"></i>
                    </h3>
                    <p class="speciality">
                      {{ doctor.hospitalName }} - {{ doctor.department }}
                    </p>
                    <!--<div class="rating">
                        <i class="fa fa-star filled"></i>
                        <i class="fa fa-star filled"></i>
                        <i class="fa fa-star filled"></i>
                        <i class="fa fa-star filled"></i>
                        <i class="fa fa-star filled"></i>
                        <span class="d-inline-block average-rating">(17)</span>
                    </div>-->
                    <ul class="available-info">
                      <li>
                        <i class="fa fa-map-marker-alt"></i> {{ doctor.company_city }},
                        {{ doctor.company_town }}
                      </li>
                      <li
                        v-if="
                          doctor.appointment_hour !== undefined &&
                          doctor.appointment_hour !== null &&
                          doctor.appointment_hour !== ''
                        "
                      >
                        <i class="fa fa-clock"></i> {{ doctor.appointment_hour }}
                      </li>
                      <li
                        v-if="
                          doctor.price !== undefined &&
                          doctor.price !== null &&
                          doctor.price !== ''
                        "
                      >
                        <i class="fa fa-money-bill-alt"></i> {{ doctor.price
                        }}<i
                          class="fa fa-info-circle"
                          data-toggle="tooltip"
                          title="Fiyatlar Değişkenlik Gösterebilir"
                        ></i>
                      </li>
                    </ul>
                    <nuxt-link
                      v-bind:to="'/make-appointment/' + doctor.slug"
                      class="btn btn-info-light rounded-0 w-100"
                      >Randevu Al</nuxt-link
                    >
                  </div>
                </div>
              </v-col>
              <!-- /Doctor Widget -->
            </v-row>
            <v-pagination
              v-model="pagination.current"
              :length="pagination.total"
              @input="onPageChange"
            ></v-pagination>
          </div>
          <div class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3"></div>
        </div>
      </section>
    </div>
    <!-- /Main Wrapper -->
  </v-app>
</template>

<script>
import Cookie from "js-cookie";
import { Base64 } from "js-base64";
// optional style for arrows & dots
export default {
  computed: {
    base_img_url() {
      return process.env.apiPublicUrl;
    },
  },
  data() {
    return {
      doctors: [],
      search: null,
      pagination: {
        current: 1,
        total: 1,
      },
    };
  },
  mounted() {
    this.getDoctors();
  },
  methods: {
    getDoctors(param) {
      if (this.search !== null) {
        this.$store
          .dispatch("getDoctors", {
            doctorsURL:
              "doctors?page=" +
              this.pagination.current +
              "&search=" +
              decodeURIComponent(this.search),
          })
          .then((response) => {
            this.doctors = this.$store.getters.doctors.data;
            this.pagination.current = this.$store.getters.doctors.current_page;
            this.pagination.total = this.$store.getters.doctors.last_page;
          });
      } else {
        if (param) {
          this.$store.dispatch("getDoctors", { doctorsURL: param }).then((response) => {
            this.doctors = this.$store.getters.doctors.data;
            this.pagination.current = this.$store.getters.doctors.current_page;
            this.pagination.total = this.$store.getters.doctors.last_page;
          });
        } else {
          this.$store
            .dispatch("getDoctors", {
              doctorsURL: "doctors?page=" + this.pagination.current,
            })
            .then((response) => {
              this.doctors = this.$store.getters.doctors.data;
              this.pagination.current = this.$store.getters.doctors.current_page;
              this.pagination.total = this.$store.getters.doctors.last_page;
            });
        }
      }
    },
    onPageChange() {
      this.getDoctors();
    },
  },
};
</script>

<style></style>
