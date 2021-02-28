<template>
	<v-app>
		<div class="breadcrumb-bar">
			<div class="container-fluid">
				<div class="row align-items-center">
					<v-col cols="12" sm="12" md="12" lg="12" xl="12">
						<nav aria-label="breadcrumb" class="page-breadcrumb">
							<ol class="breadcrumb pl-0">
								<li class="breadcrumb-item">
									<nuxt-link to="/">Anasayfa</nuxt-link>
								</li>
								<li class="breadcrumb-item active" aria-current="page">
									Yemek Tarifi Türleri
								</li>
							</ol>
						</nav>
						<h2 class="breadcrumb-title">Yemek Tarifi Türleri</h2>
					</v-col>
				</div>
			</div>
		</div>
		<div class="main-wrapper">
			<section class="section section-search">
				<div class="container-fluid">
					<div class="banner-wrapper">
						<div class="banner-header text-center">
							<h1>Yemek Tarifi Türü Ara</h1>
							<p><small>En Sağlıklı Besinleri Keşfet</small></p>
						</div>

						<div class="search-box">
							<form onsubmit="return false">
								<div class="form-group search-info w-100">
									<input
										type="text"
										class="form-control rounded-0"
										v-on:keyup.prevent="getRecipeCategories()"
										v-model="search"
										placeholder="Yemek Tarifi Türü Aramak İçin Buraya Yazın..."
									/>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
			<div class="content">
				<div class="container-fluid">
					<div class="row">
						<v-col cols="12" sm="12" md="7" lg="8" xl="9">
							<h3 class="text-center" v-if="!isEmpty(search)">
								"{{ search }}" Aramasıyla İle İlgili Yemek Tarifi Türleri
							</h3>
							<h3
								class="text-center"
								v-if="search === null || search === '' || search === undefined"
							>
								Tüm Yemek Tarifi Türleri
							</h3>
							<div class="row row-grid" v-if="!isEmpty(recipeCategories)">
								<client-only>
									<div
										v-bind:key="index"
										v-for="(recipeCategory, index) in recipeCategories"
										class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3"
									>
										<div class="profile-widget">
											<div class="doc-img">
												<nuxt-link
													v-bind:to="/recipe-categories/ + recipeCategory.slug"
												>
													<img
														height="300"
														v-bind:alt="recipeCategory.name"
														v-bind:src="
															img_url +
																'public/storage/' +
																recipeCategory.img_url
														"
													/>
												</nuxt-link>
											</div>
											<div class="pro-content">
												<h3 class="title">
													<nuxt-link
														v-bind:to="
															/recipe-categories/ + recipeCategory.slug
														"
														>{{ recipeCategory.name }}</nuxt-link
													>
												</h3>
												<p class="speciality">
													{{ recipeCategory.description }}
												</p>

												<div class="row row-sm">
													<div class="col-12">
														<nuxt-link
															v-bind:to="
																/recipe-categories/ + recipeCategory.slug
															"
															class="btn btn-info-light rounded-0 view-btn"
															>Yemek Tarifleri</nuxt-link
														>
													</div>
												</div>
											</div>
										</div>
									</div>
								</client-only>
							</div>
							<v-pagination
								v-model="pagination.current"
								:length="pagination.total"
								@input="onPageChange"
							></v-pagination>
						</v-col>
						<div
							class="col-12 col-sm-12 col-md-5 col-lg-4 col-xl-3 theiaStickySidebar"
						></div>
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
			ValidationProvider
		},
		name: "index",
		computed: {
			img_url() {
				return process.env.apiPublicUrl;
			}
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
			getRecipeCategories(param) {
				if (this.search !== null) {
					this.$store
						.dispatch("getRecipeCategories", {
							recipeCategoriesURL:
								"recipe-categories?page=" +
								this.pagination.current +
								"&search=" +
								decodeURIComponent(this.search)
						})
						.then(response => {
							this.recipeCategories = this.$store.getters.recipeCategories.data;
							this.pagination.current = this.$store.getters.recipeCategories.current_page;
							this.pagination.total = this.$store.getters.recipeCategories.last_page;
						});
				} else {
					if (param) {
						this.$store
							.dispatch("getRecipeCategories", { recipeCategoriesURL: param })
							.then(response => {
								this.recipeCategories = this.$store.getters.recipeCategories.data;
								this.pagination.current = this.$store.getters.recipeCategories.current_page;
								this.pagination.total = this.$store.getters.recipeCategories.last_page;
							});
					} else {
						this.$store
							.dispatch("getRecipeCategories", {
								recipeCategoriesURL:
									"recipe-categories?page=" + this.pagination.current
							})
							.then(response => {
								this.recipeCategories = this.$store.getters.recipeCategories.data;
								this.pagination.current = this.$store.getters.recipeCategories.current_page;
								this.pagination.total = this.$store.getters.recipeCategories.last_page;
							});
					}
				}
			},
			onPageChange() {
				this.getRecipeCategories();
			}
		},
		data() {
			return {
				recipeCategories: [],
				search: null,
				pagination: {
					current: 1,
					total: 1
				}
			};
		},
		mounted() {
			this.getRecipeCategories();
		}
	};
</script>