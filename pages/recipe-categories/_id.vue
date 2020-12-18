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
                <li class="breadcrumb-item">
                  <nuxt-link to="/recipe-categories" tag="a">Yemek Tarifleri</nuxt-link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  {{ categories.name }}
                </li>
              </ol>
            </nav>
            <h2 class="breadcrumb-title">{{ categories.name }}</h2>
          </div>
        </div>
      </div>
    </div>
    <!-- /Breadcrumb -->
    <!-- /Breadcrumb -->
    <div class="main-wrapper">
      <!-- Home Banner -->
      <section class="section section-search py-5">
        <div class="container-fluid">
          <div class="banner-wrapper">
            <div class="banner-header text-center">
              <h1>Yemek Tarifi Ara</h1>
              <p><small>En Sağlıklı Besinleri Keşfet</small></p>
            </div>

            <!-- Search -->
            <div class="search-box">
              <form onsubmit="return false">
                <div class="form-group search-info w-100">
                  <input
                    type="text"
                    class="form-control rounded-0"
                    v-on:keyup.prevent="getRecipes()"
                    v-model="search"
                    placeholder="Yemek Tarifi Aramak İçin Buraya Yazın..."
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
              <h3
                class="text-center"
                v-if="search !== null && search !== '' && search !== undefined"
              >
                "{{ search }}" Aramasıyla İle İlgili "{{ categories.name }}" Kategorisine
                Ait Yemek Tarifleri
              </h3>
              <h3
                class="text-center"
                v-if="search === null || search === '' || search === undefined"
              >
                "{{ categories.name }}" Kategorisine Ait Tüm Yemek Tarifleri
              </h3>
              <div class="row row-grid">
                <div
                  v-if="recipes !== null && recipes !== '' && recipes !== undefined"
                  v-for="recipe in recipes"
                  class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3"
                >
                  <div class="profile-widget">
                    <div class="doc-img">
                      <nuxt-link v-bind:to="/recipe/ + recipe.slug" tag="a">
                        <img
                          height="300"
                          v-bind:alt="recipe.name"
                          v-bind:src="img_url + 'public/storage/' + recipe.img_url"
                        />
                      </nuxt-link>
                    </div>
                    <div class="pro-content">
                      <h3 class="title">
                        <nuxt-link v-bind:to="/recipe/ + recipe.slug" tag="a">{{
                          recipe.name
                        }}</nuxt-link>
                      </h3>
                      <p class="speciality">{{ recipe.description }}</p>

                      <div class="row row-sm">
                        <div class="col-12">
                          <nuxt-link
                            tag="a"
                            v-bind:to="/recipe/ + recipe.slug"
                            class="btn btn-info-light rounded-0 view-btn"
                            >Yemek Tarifi Detayı</nuxt-link
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <v-pagination
                v-model="pagination.current"
                :length="pagination.total"
                @input="onPageChange"
              ></v-pagination>
            </div>
            <div class="col-12 col-sm-12 col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
              <div class="profile-sidebar">
                <div class="widget-profile pro-widget-content">
                  <div class="profile-info-widget">
                    <a href="#" class="booking-doc-img">
                      <img src="assets/img/patients/patient.jpg" alt="User Image" />
                    </a>
                    <div class="profile-det-info">
                      <h3>Richard Wilson</h3>
                      <div class="patient-details">
                        <h5><i class="fa fa-birthday-cake"></i> 24 Jul 1983, 38 years</h5>
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
  validate({ params }) {
    return params.id !== null ? params.id : null;
  },
  methods: {
    getRecipes(param) {
      if (this.search !== null) {
        this.$store
          .dispatch("getRecipeCategories", {
            recipeCategoriesURL:
              "recipe-categories/" +
              this.$route.params.id +
              "?page=" +
              this.pagination.current +
              "&search=" +
              decodeURIComponent(this.search),
          })
          .then((response) => {
            this.recipes = this.$store.getters.recipeCategories.recipes.data;
            this.categories = this.$store.getters.recipeCategories.categories;
            this.pagination.current = this.$store.getters.recipeCategories.recipes.current_page;
            this.pagination.total = this.$store.getters.recipeCategories.recipes.last_page;
          });
      } else {
        if (param) {
          this.$store
            .dispatch("getRecipeCategories", { recipeCategoriesURL: param })
            .then((response) => {
              this.recipes = this.$store.getters.recipeCategories.recipes.data;
              this.categories = this.$store.getters.recipeCategories.categories;
              this.pagination.current = this.$store.getters.recipeCategories.recipes.current_page;
              this.pagination.total = this.$store.getters.recipeCategories.recipes.last_page;
            });
        } else {
          this.$store
            .dispatch("getRecipeCategories", {
              recipeCategoriesURL:
                "recipe-categories/" +
                this.$route.params.id +
                "?page=" +
                this.pagination.current,
            })
            .then((response) => {
              this.recipes = this.$store.getters.recipeCategories.recipes.data;
              this.categories = this.$store.getters.recipeCategories.categories;
              this.pagination.current = this.$store.getters.recipeCategories.recipes.current_page;
              this.pagination.total = this.$store.getters.recipeCategories.recipes.last_page;
            });
        }
      }
    },
    onPageChange() {
      this.getRecipes();
    },
  },
  data() {
    return {
      categories: [],
      recipes: [],
      search: null,
      pagination: {
        current: 1,
        total: 1,
      },
    };
  },
  mounted() {
    this.getRecipes();
  },
  /*async asyncData({ params, error, $axios }) {
    try {
      const { data } = await $axios.get(
        process.env.apiBaseUrl + "recipe-categories/" + params.id
      );
      return { data };
    } catch (e) {
      error({ message: "Yemek Tarifleri Bulunamadı.", statusCode: 404 });
    }
  },*/
};
</script>

<style scoped></style>
