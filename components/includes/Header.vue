<template>
  <div class="header">
    <nav class="navbar navbar-expand-lg header-nav fixed-top">
      <div class="navbar-header">
        <a id="mobile_btn" href="javascript:void(0);">
          <span class="bar-icon">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </a>
        <nuxt-link to="/" tag="a" class="navbar-brand logo"
          ><img src="/img/logo.png" class="img-fluid" alt="Logo" />
        </nuxt-link>
      </div>
      <div class="main-menu-wrapper">
        <div class="menu-header">
          <nuxt-link to="/" tag="a" class="menu-logo"
            ><img src="/img/logo.png" class="img-fluid" alt="Logo" />
          </nuxt-link>
          <a id="menu_close" class="menu-close" href="javascript:void(0);">
            <i class="fa fa-times"></i>
          </a>
        </div>
        <ul class="main-nav">
          <li>
            <nuxt-link to="/" tag="a">Anasayfa</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/dieticians" tag="a">Diyetisyenler</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/calorie" tag="a">Kaç Kalori?</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/recipe-categories" tag="a"
              >Yemek Tarifleri</nuxt-link
            >
          </li>
          <li>
            <nuxt-link to="/criterias" tag="a">Ölçütler</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/exercises" tag="a">Egzersiz</nuxt-link>
          </li>
        </ul>
      </div>
      <ul
        class="nav main-nav header-navbar-rht"
        v-if="!isEmpty(userData) && isAuthenticated"
      >
        <li class="has-submenu nav-item my-auto py-auto">
          <a href="javascript:void(0)" class="my-auto py-auto">
            <img
              v-bind:src="
                img_url +
                '/public/storage/' +
                (userData.status === 'dietician'
                  ? userData.profile_photo
                  : userData.img_url)
              "
              width="55"
              height="55"
              class="rounded-circle my-auto py-auto"
              v-bind:alt="userData.name" />
            <span class="my-auto py-auto" v-if="userData !== null">{{
              userData.name
            }}</span>
            <i class="fa fa-chevron-down"></i
          ></a>
          <ul class="submenu">
            <li>
              <nuxt-link to="/profile" tag="a" class="nav-link"
                >Profil</nuxt-link
              >
            </li>
            <li
              v-if="
                !isEmpty(userData) &&
                isAuthenticated &&
                userData.status === 'dietician'
              "
            >
              <nuxt-link to="/dietician-panel" tag="a"
                >Diyetisyen Paneli</nuxt-link
              >
            </li>
            <li>
              <a href="javascript:void(0)" @click.prevent="logout">Çıkış Yap</a>
            </li>
          </ul>
        </li>
      </ul>
      <ul class="nav header-navbar-rht" v-else>
        <li>
          <nuxt-link to="/login" class="nav-link header-login" tag="a"
            >Giriş Yap / Kayıt Ol</nuxt-link
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import Cookie from "js-cookie";
import { Base64 } from "js-base64";

export default {
  computed: {
    img_url() {
      return process.env.apiPublicUrl;
    },
  },
  methods: {
    isEmpty(obj) {
      if (typeof obj == "number") return false;
      else if (typeof obj == "string") return obj.length == 0;
      else if (Array.isArray(obj)) return obj.length == 0;
      else if (typeof obj == "object")
        return obj == null || Object.keys(obj).length == 0;
      else if (typeof obj == "boolean") return false;
      else return !obj;
    },
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
  },
  data() {
    return {
      userData: !this.isEmpty(Cookie.get("userData"))
          ? JSON.parse(Base64.decode(Cookie.get("userData")))
          : null,
      isAuthenticated: !this.isEmpty(Cookie.get("userData"))
          ? JSON.parse(Base64.decode(Cookie.get("userData"))).api_token
          : null,
      siteSettings: this.$store.getters.siteSettings,
    };
  },
};
</script>
