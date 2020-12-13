<template>
<v-app class="h-auto">
  <div class="main-wrapper">
    <!-- Home Banner -->
    <section class="section section-search">
      <div class="container-fluid">
        <div class="banner-wrapper">
          <div class="banner-header text-center">
            <h1>Diyetisyen, Besin, Yemek Tarifi Ara</h1>
            <p><small>En profesyonel diyetisyenleri keşfet, sağlıklı yemek tarifleri al & senin için en uygun olanı
              tercih et.</small></p>
          </div>

          <!-- Search -->
          <div class="search-box">
            <form action="https://doccure-laravel.dreamguystech.com/template/public/search">
              <div class="form-group search-info w-100">
                <input type="text" class="form-control" placeholder="Diyetisyen, Besin, Yemek Tarifi Ara"/>
              </div>
              <button type="submit" class="btn btn-primary search-btn">
                <i class="fa fa-search"></i>
                <span>Search</span>
              </button>
            </form>
          </div>
          <!-- /Search -->
        </div>
      </div>
    </section>
    <!-- /Home Banner -->

    <!-- News Headline -->
    <section class="section section-blogs">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9">
            <no-ssr>
            <carousel v-if="data.sliders !== null && data.sliders !== '' && data.sliders !== undefined && data.sliders.length>0" :navs="true" :dots="false" :autoplay="true" :items="1" :loop="true">
              <img class="img-fluid" style="max-height: 500px;object-fit: cover" v-bind:src="base_img_url+'/public/storage/'+slide.img_url" v-bind:alt="slide.title" v-for="slide in data.sliders"/>
            </carousel>
            </no-ssr>
          </div>
          <div class="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
            <h3>Reklamlar</h3>
          </div>
        </div>

      </div>
    </section>
    <!-- News Headline -->

    <!-- Popular Section -->
    <section class="section section-doctor">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
            <div class="section-header">
              <h2>Diyetisyenlerimizden Randevu Alın</h2>
              <p>Lorem Ipsum is simply dummy text</p>
            </div>
            <div class="about-content">
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when
                looking at its layout. The point of using Lorem Ipsum.</p>
              <p>web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will
                uncover many web sites still in their infancy. Various versions have evolved over the years,
                sometimes</p>
              <a href="javascript:;">Read More..</a>
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
            <div class="doctor-slider slider">
              <VueSlickCarousel :arrows="true" :dots="true" :infinite="true" :variableWidth="true" :prevArrow="true" :nextArrow="true">
                <!-- Doctor Widget -->
                <div v-if="data.doctors !== null && data.doctors !== '' && data.doctors !== undefined && data.doctors.length>0" v-for="doctor in data.doctors" class="profile-widget">
                  <div class="doc-img">
                    <nuxt-link tag="a" v-bind:to="'/profile/'+doctor.slug">
                      <img class="img-fluid" v-bind:alt="doctor.name" v-bind:src="base_img_url+'/public/storage/'+doctor.profile_photo"/>
                    </nuxt-link>
                  </div>
                  <div class="pro-content">
                    <h3 class="title">
                      <nuxt-link tag="a" v-bind:to="'/profile/'+doctor.slug">{{ doctor.name }}</nuxt-link>
                      <i class="fa fa-check-circle verified"></i>
                    </h3>
                    <p class="speciality">MDS - Periodontology and Oral Implantology, BDS</p>
                    <!--<div class="rating">
                      <i class="fa fa-star filled"></i>
                      <i class="fa fa-star filled"></i>
                      <i class="fa fa-star filled"></i>
                      <i class="fa fa-star filled"></i>
                      <i class="fa fa-star filled"></i>
                      <span class="d-inline-block average-rating">(17)</span>
                    </div>-->
                    <ul class="available-info">
                      <li><i class="fa fa-map-marker-alt"></i> {{doctor.city}}, {{ doctor.town }}</li>
                      <li v-if="doctor.appointment_hour !== undefined && doctor.appointment_hour !== null && doctor.appointment_hour !== ''"><i class="fa fa-clock"></i> {{ doctor.appointment_hour }}</li>
                      <li v-if="doctor.price !== undefined && doctor.price !== null && doctor.price !== ''"><i class="fa fa-money-bill-alt"></i> {{doctor.price}}<i class="fa fa-info-circle" data-toggle="tooltip" title="Fiyatlar Değişkenlik Gösterebilir"></i></li>
                    </ul>
                    <div class="row row-sm">
                      <div class="col-6">
                        <a href="doctor-profile.html" class="btn view-btn">View Profile</a>
                      </div>
                      <div class="col-6">
                        <a href="booking.html" class="btn book-btn">Book Now</a>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- /Doctor Widget -->
              </VueSlickCarousel>
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <!-- /Section Header -->

        <div class="row blog-grid-row">
          <div class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
            <!-- Blog Post -->
            <div class="blog grid-blog">
              <div class="blog-image">
                <a href="blog-details.html">
                  <img class="img-fluid" src="/img/blog/blog-01.jpg" alt="Post Image"/>
                </a>
              </div>
              <div class="blog-content">
                <ul class="entry-meta meta-item">
                  <li>
                    <div class="post-author">
                      <a href="doctor-profile.html">
                        <img src="/img/doctors/doctor-thumb-01.jpg" alt="Post Author"/>
                        <span>Dr. Ruby Perrin</span>
                      </a>
                    </div>
                  </li>
                  <li>
                    <i class="fa fa-clock"></i> 4 Dec 2019
                  </li>
                </ul>
                <h3 class="blog-title">
                  <a href="blog-details.html">
                    Doccure – Making your clinic painless
                    visit?
                  </a>
                </h3>
                <p class="mb-0">
                  Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod
                  tempor.
                </p>
              </div>
            </div>
            <!-- /Blog Post -->
          </div>
        </div>
        <div class="view-all text-center">
          <a href="blog-list.html" class="btn btn-primary">Tümünü Görüntüle</a>
        </div>
      </div>
    </section>
    <!-- /Blog Section -->
  </div>
  <!-- /Main Wrapper -->
</v-app>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import Cookie from "js-cookie";
import {Base64} from "js-base64";
// optional style for arrows & dots
//import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  components: {
    VueSlickCarousel,
  },
  computed:{
    base_img_url() {
      return process.env.apiPublicUrl;
    },
  },
  data(){
    return {

    }
  },
  async asyncData({error, $axios}) {
    try {
      let {data} = await $axios.get(  process.env.apiBaseUrl+"home")
      return data
    } catch (e) {
      error({message: 'Site Ayarı Bulunamadı.', statusCode: 404})
    }
  }
};
</script>

<style>
</style>
