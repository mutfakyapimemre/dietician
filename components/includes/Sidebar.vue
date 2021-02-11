<template>
  <client-only>
    <div class="profile-sidebar">
      <div class="widget-profile pro-widget-content">
        <div class="profile-info-widget">
          <nuxt-link to="/profile" tag="a" class="booking-doc-img">
            <img
              v-bind:src="
                img_url +
                '/public/storage/' +
                (userData.img_url !== undefined &&
                userData.img_url !== null &&
                userData.img_url !== ''
                  ? userData.img_url
                  : null)
              "
              class="img-fluid"
              v-bind:alt="userData.name"
            />
          </nuxt-link>
          <div class="profile-det-info">
            <h3>{{ userData.name }}</h3>

            <div class="patient-details">
              <h5 class="mb-0">
                <i class="fa fa-map-marker-alt"></i> {{ userData.city }},
                {{ userData.town }}
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div class="dashboard-widget">
        <nav class="dashboard-menu">
          <ul>
            <nuxt-link to="/profile" tag="li" exact-active-class="active">
              <a>
                <i class="fa fa-user-cog"></i>
                <span>Kayıt Bilgileri</span>
              </a>
            </nuxt-link>
            <nuxt-link to="/profile/diet-list" tag="li" active-class="active">
              <a>
                <i class="fa fa-calendar-check"></i>
                <span>Diyet Listesi</span>
              </a>
            </nuxt-link>
            <nuxt-link
              to="/profile/my-dietician"
              tag="li"
              active-class="active"
            >
              <a>
                <i class="fa fa-user-md"></i>
                <span>Diyetisyenim</span>
              </a>
            </nuxt-link>
            <nuxt-link
              to="/profile/liked-foods-list"
              tag="li"
              active-class="active"
            >
              <a>
                <i class="fa fa-drumstick-bite"></i>
                <span>Sevdiğim Besinler / Yemekler</span>
              </a>
            </nuxt-link>
            <nuxt-link
              to="/profile/unliked-foods-list"
              tag="li"
              active-class="active"
            >
              <a>
                <i class="fa fa-stroopwafel"></i>
                <span>Sevmediğim Besinler / Yemekler</span>
              </a>
            </nuxt-link>
            <nuxt-link
              to="/profile/allergen-foods-list"
              tag="li"
              active-class="active"
            >
              <a>
                <i class="fa fa-cloud-meatball"></i>
                <span>Alerjen Olduğum Besinler / Yemekler</span>
              </a>
            </nuxt-link>
            <nuxt-link to="/profile/messages" tag="li" active-class="active">
              <a>
                <i class="fa fa-comments"></i>
                <span>Mesajlar</span>
                <small class="unread-msg">23</small>
              </a>
            </nuxt-link>
            <nuxt-link
              to="/profile/social-media"
              tag="li"
              active-class="active"
            >
              <a>
                <i class="fa fa-share-alt"></i>
                <span>Sosyal Medya</span>
              </a>
            </nuxt-link>
            <nuxt-link
              to="/profile/password-update"
              tag="li"
              active-class="active"
            >
              <a>
                <i class="fa fa-lock"></i>
                <span>Şifre Güncelle</span>
              </a>
            </nuxt-link>
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
  </client-only>
</template>

<script>
import Cookie from "js-cookie";
import { Base64 } from "js-base64";
export default {
  middleware: ["session-control", "guest"],
  layout: "default",
  computed: {
    img_url() {
      return process.env.apiPublicUrl;
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
    };
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
};
</script>
