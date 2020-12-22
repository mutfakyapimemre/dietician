<template>
  <v-app class="h-auto">
    <div class="main-wrapper">
      <!-- Home Banner -->
      <section class="section section-search pt-5 bg-white">
        <div class="container-fluid">
          <div class="banner-wrapper">
            <div class="banner-header text-center">
              <h1>Diyetisyen, Besin, Yemek Tarifi Ara</h1>
              <p><small>En profesyonel diyetisyenleri keşfet, sağlıklı yemek tarifleri al & senin için en uygun olanı tercih et.</small></p>
            </div>

            <!-- Search -->
            <div class="search-box justify-content-center">
              <form onsubmit="return false" class="justify-content-center">
                <div class="form-group search-info w-100">
                  <input
                    type="text"
                    class="form-control rounded-0"
                    v-on:keyup.prevent="goToSearch()"
                    placeholder="Diyetisyen, Besin, Yemek Tarifi Ara"
                  />
                </div>
              </form>
            </div>
            <!-- /Search -->
          </div>
        </div>
      </section>
      <!-- /Home Banner -->

      <!-- News Headline -->
      <section class="section section-blogs py-2">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9">
              <client-only>
                <carousel
                  v-if="data.sliders !== null && data.sliders !== '' && data.sliders !== undefined && data.sliders.length > 0"
                  :navs="true"
                  :dots="false"
                  :autoplay="true"
                  :items="1"
                  :loop="true"
                >
                  <img
                    class="img-fluid"
                    style="max-height: 450px; object-fit: cover"
                    v-bind:key="index"
                    v-bind:src="base_img_url + '/public/storage/' + slide.img_url"
                    v-bind:alt="slide.title"
                    v-for="(slide, index) in data.sliders"
                  />
                </carousel>
              </client-only>
            </div>
            <div class="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
              <h3>Reklamlar</h3>
            </div>
          </div>
        </div>
      </section>
      <!-- News Headline -->

      <!-- Popular Section -->
      <section class="section section-doctor slider py-0 bg-white">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
              <div class="section-header">
                <h2>Diyetisyenlerimizden Randevu Alın</h2>
                <p>Lorem Ipsum is simply dummy text</p>
              </div>
              <div class="about-content">
                <nuxt-link to="/dieticians" tag="a" class="btn rounded-0 btn-info-light">Diyetisyenlerimiz</nuxt-link>
              </div>
            </div>
            <div class="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
              <div
                class="doctor-slider bg-white"
                v-if="data.doctors !== null && data.doctors !== '' && data.doctors !== undefined && data.doctors.length > 0"
              >
                <carousel
                  :navs="true"
                  :dots="false"
                  :autoplay="true"
                  :items="4"
                  :loop="true"
                  :responsive="{
                    0: { items: 1, nav: true },
                    578: { items: 1, nav: true },
                    768: { items: 2, nav: true },
                    991: { items: 3, nav: true },
                    1400: { items: 4, nav: true },
                  }"
                >
                  <!-- Doctor Widget -->
                  <div v-bind:key="index" v-for="(doctor, index) in data.doctors" class="h-100 profile-widget mx-1">
                    <div class="doc-img">
                      <nuxt-link tag="a" v-bind:to="'/profile/' + doctor.slug">
                        <img
                          class="img-fluid"
                          style="min-height: 273px"
                          v-bind:alt="doctor.name"
                          v-bind:src="
                            base_img_url +
                            '/public/storage/' +
                            (doctor.profile_photo.img_url === null ||
                            doctor.profile_photo.img_url === '' ||
                            doctor.profile_photo.img_url === undefined
                              ? null
                              : doctor.profile_photo.img_url)
                          "
                        />
                      </nuxt-link>
                    </div>
                    <div class="pro-content h-100">
                      <h3 class="title">
                        <nuxt-link tag="a" v-bind:to="'/profile/' + doctor.slug">{{ doctor.name }}</nuxt-link>
                        <i class="fa fa-check-circle verified"></i>
                      </h3>
                      <p class="speciality">{{ doctor.hospitalName }} - {{ doctor.department }}</p>
                      <!--<div class="rating">
                      <i class="fa fa-star filled"></i>
                      <i class="fa fa-star filled"></i>
                      <i class="fa fa-star filled"></i>
                      <i class="fa fa-star filled"></i>
                      <i class="fa fa-star filled"></i>
                      <span class="d-inline-block average-rating">(17)</span>
                    </div>-->
                      <ul class="available-info">
                        <li><i class="fa fa-map-marker-alt"></i> {{ doctor.company_city }}, {{ doctor.company_town }}</li>
                        <li v-if="doctor.appointment_hour !== undefined && doctor.appointment_hour !== null && doctor.appointment_hour !== ''">
                          <i class="fa fa-clock"></i> {{ doctor.appointment_hour }}
                        </li>
                        <li v-if="doctor.price !== undefined && doctor.price !== null && doctor.price !== ''">
                          <i class="fa fa-money-bill-alt"></i> {{ doctor.price
                          }}<i class="fa fa-info-circle" data-toggle="tooltip" title="Fiyatlar Değişkenlik Gösterebilir"></i>
                        </li>
                      </ul>
                      <div class="d-flex">
                        <div class="flex-grow-1">
                          <nuxt-link v-bind:to="'/profile/' + doctor.slug" class="btn btn-green-light rounded-0">Profilini Görüntüle</nuxt-link>
                        </div>
                        <div class="flex-shrink-1">
                          <nuxt-link v-bind:to="'/make-appointment/' + doctor.slug" class="btn btn-info-light rounded-0">Randevu Al</nuxt-link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- /Doctor Widget -->
                </carousel>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- /Popular Section -->

      <!-- Blog Section -->
      <section class="section section-blogs">
        <div class="container-fluid">
          <!-- Section Header -->
          <div class="section-header text-center">
            <h2>Blog</h2>
            <p class="sub-title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <!-- /Section Header -->

          <div class="row blog-grid-row">
            <div class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
              <!-- Blog Post -->
              <div class="blog grid-blog">
                <div class="blog-image">
                  <a href="blog-details.html">
                    <img class="img-fluid" src="/img/blog/blog-01.jpg" alt="Post Image" />
                  </a>
                </div>
                <div class="blog-content">
                  <ul class="entry-meta meta-item">
                    <li>
                      <div class="post-author">
                        <a href="doctor-profile.html">
                          <img src="/img/doctors/doctor-thumb-01.jpg" alt="Post Author" />
                          <span>Dr. Ruby Perrin</span>
                        </a>
                      </div>
                    </li>
                    <li><i class="fa fa-clock"></i> 4 Dec 2019</li>
                  </ul>
                  <h3 class="blog-title">
                    <a href="blog-details.html"> Doccure – Making your clinic painless visit? </a>
                  </h3>
                  <p class="mb-0">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                </div>
              </div>
              <!-- /Blog Post -->
            </div>
          </div>
          <div class="view-all text-center">
            <nuxt-link to="/blogs" class="btn btn-info-light rounded-0" tag="a">Tümünü Görüntüle</nuxt-link>
          </div>
        </div>
      </section>
      <!-- /Blog Section -->
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
    return {};
  },
  async asyncData({ error, $axios }) {
    try {
      let { data } = await $axios.get(process.env.apiBaseUrl + "home");

      return data;
    } catch (e) {
      error({ message: "Site Ayarı Bulunamadı.", statusCode: 404 });
    }
  },
  methods: {
    shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    },
    goToSearch() {
      window.location.href = decodeURIComponent("/profile");
    },
  },
};
</script>

<style></style>
