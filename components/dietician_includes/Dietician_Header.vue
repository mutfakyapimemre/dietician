<template>
  <client-only>
    <!-- Header -->
    <div class="header">
      <!-- Logo -->
      <div class="header-left">
        <nuxt-link to="/" tag="a">
          <img src="/img/logo.png" class="logo" alt="Diyetisyen Klinik" />
        </nuxt-link>
        <nuxt-link to="/" tag="a" class="logo logo-small">
          <img
            src="/img/favicon.png"
            alt="Diyetisyen Klinik"
            width="30"
            height="30"
          />
        </nuxt-link>
      </div>
      <!-- /Logo -->

      <a href="javascript:void(0);" id="toggle_btn">
        <i class="fa fa-bars"></i>
      </a>

      <!-- Mobile Menu Toggle -->
      <a class="mobile_btn" href="javascript:void(0)" id="mobile_btn">
        <i class="fa fa-bars"></i>
      </a>
      <!-- /Mobile Menu Toggle -->

      <!-- Header Right Menu -->
      <ul class="nav user-menu">
        <!-- Notifications -->
        <li class="nav-item dropdown noti-dropdown">
          <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
            <i class="fa fa-bell"></i> <span class="badge badge-pill">3</span>
          </a>
          <div class="dropdown-menu notifications">
            <div class="topnav-dropdown-header">
              <span class="notification-title">Bildirimler</span>
              <a href="javascript:void(0)" class="clear-noti">
                Tümünü Temizle
              </a>
            </div>
            <div class="noti-content">
              <ul class="notification-list">
                <li class="notification-message">
                  <a href="#">
                    <div class="media">
                      <span class="avatar avatar-sm">
                        <img
                          class="avatar-img rounded-circle"
                          alt="User Image"
                          src="/img/patients/patient3.jpg"
                        />
                      </span>
                      <div class="media-body">
                        <p class="noti-details">
                          <span class="noti-title">Carl Kelly</span> send a
                          message <span class="noti-title"> to his doctor</span>
                        </p>
                        <p class="noti-time">
                          <span class="notification-time">12 mins ago</span>
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div class="topnav-dropdown-footer">
              <nuxt-link to="/panel/notifications"
                >Tüm Bildirimleri Görüntüle</nuxt-link
              >
            </div>
          </div>
        </li>
        <!-- /Notifications -->

        <!-- User Menu -->
        <li class="nav-item dropdown has-arrow">
          <a
            href="javascript:void(0)"
            class="dropdown-toggle nav-link"
            data-toggle="dropdown"
          >
            <span class="user-img"
              ><img
                v-bind:src="
                  img_url + '/public/storage/' + userData.profile_photo
                "
                width="31"
                class="rounded-circle"
                v-bind:alt="userData.name"
            /></span>
          </a>
          <div class="dropdown-menu">
            <div class="user-header">
              <div class="avatar avatar-sm">
                <img
                  v-bind:src="
                    img_url + '/public/storage/' + userData.profile_photo
                  "
                  class="avatar-img rounded-circle"
                  v-bind:alt="userData.name"
                />
              </div>
              <div class="user-text">
                <h6>
                  <span v-if="userData !== null">{{ userData.name }}</span>
                </h6>
                <p class="text-muted mb-0">{{ userData.department }}</p>
              </div>
            </div>
            <nuxt-link
              v-if="userData !== null && userData._id !== null"
              class="dropdown-item"
              to="/profile"
              >Profilim</nuxt-link
            >
            <nuxt-link class="dropdown-item" tag="a" to="/panel/settings"
              >Ayarlar</nuxt-link
            >
            <a class="dropdown-item" href="javascript:void(0)" @click="logout"
              >Çıkış Yap</a
            >
          </div>
        </li>
        <!-- /User Menu -->
      </ul>
      <!-- /Header Right Menu -->
    </div>
    <!-- /Header -->
  </client-only>
</template>

<script>
import Cookie from "js-cookie";
import { Base64 } from "js-base64";

export default {
  layout: "dietician",
  computed: {
    img_url() {
      return process.env.apiPublicUrl;
    },
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
  },
  data() {
    return {
      userData:
        Cookie.get("userData") !== null &&
        Cookie.get("userData") !== undefined &&
        Cookie.get("userData") !== ""
          ? JSON.parse(Base64.decode(Cookie.get("userData")))
          : this.$store.getters.loggedInUser !== undefined &&
            this.$store.getters.loggedInUser !== null &&
            this.$store.getters.loggedInUser !== ""
          ? this.$store.getters.loggedInUser
          : null,
      isAuthenticated:
        Cookie.get("userData") !== null &&
        Cookie.get("userData") !== undefined &&
        Cookie.get("userData") !== ""
          ? JSON.parse(Base64.decode(Cookie.get("userData"))).api_token
          : null,
      siteSettings: this.$store.getters.siteSettings,
    };
  },
};
</script>
