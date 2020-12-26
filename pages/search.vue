<template>
  <v-app class="h-auto">
    <div class="main-wrapper">
      <!-- Home Banner -->
      <section class="section section-search pt-5 bg-white">
        <div class="container-fluid">
          <div class="banner-wrapper">
            <div class="banner-header text-center">
              <h1>Diyetisyen, Besin, Yemek Tarifi Ara</h1>
              <p>
                <small
                  >En profesyonel diyetisyenleri keşfet, sağlıklı yemek
                  tarifleri al & senin için en uygun olanı tercih et.</small
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
                    v-on:keyup.prevent="getSearchs()"
                    v-model="search"
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
  methods: {
    getSearchs(param) {
      if (this.search !== null) {
        this.$store
          .dispatch("getSearchs", {
            searchsURL:
              "searchs?page=" +
              this.pagination.current +
              "&search=" +
              decodeURIComponent(this.search),
          })
          .then((response) => {
            this.searchs = this.$store.getters.searchs.data;
            this.pagination.current = this.$store.getters.searchs.current_page;
            this.pagination.total = this.$store.getters.searchs.last_page;
          });
      } else {
        if (param) {
          this.$store
            .dispatch("getSearchs", { searchsURL: param })
            .then((response) => {
              this.searchs = this.$store.getters.searchs.data;
              this.pagination.current = this.$store.getters.searchs.current_page;
              this.pagination.total = this.$store.getters.searchs.last_page;
            });
        } else {
          this.$store
            .dispatch("getSearchs", {
              searchsURL: "searchs?page=" + this.pagination.current,
            })
            .then((response) => {
              this.searchs = this.$store.getters.searchs.data;
              this.pagination.current = this.$store.getters.searchs.current_page;
              this.pagination.total = this.$store.getters.searchs.last_page;
            });
        }
      }
    },
    onPageChange() {
      this.getSearchs();
    },
  },
  data() {
    return {
      searchs: [],
      search: null,
      pagination: {
        current: 1,
        total: 1,
      },
    };
  },
};
</script>