<template>
	<v-app>
		<div class="breadcrumb-bar">
			<div class="container-fluid">
				<div class="row align-items-center">
					<div class="col-12 col-sm-12 col-md-12 col-12 col-xl-12">
						<nav aria-label="breadcrumb" class="page-breadcrumb">
							<ol class="breadcrumb pl-0">
								<li class="breadcrumb-item">
									<nuxt-link to="/">Anasayfa</nuxt-link>
								</li>
								<li class="breadcrumb-item">
									<nuxt-link to="/recipe-categories">Yemek Tarifleri</nuxt-link>
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
		<div class="main-wrapper">
			<section class="section section-search py-5">
				<div class="container-fluid">
					<div class="banner-wrapper">
						<div class="banner-header text-center">
							<h1>Yemek Tarifi Ara</h1>
							<p><small>En Sağlıklı Besinleri Keşfet</small></p>
						</div>

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
					</div>
				</div>
			</section>
			<div class="content">
				<div class="container">
					<div class="row">
						<div class="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9">
							<h3 class="text-center" v-if="!isEmpty(search)">
								"{{ search }}" Aramasıyla İle İlgili "{{ categories.name }}"
								Kategorisine Ait Yemek Tarifleri
							</h3>
							<h3
								class="text-center"
								v-if="search === null || search === '' || search === undefined"
							>
								"{{ categories.name }}" Kategorisine Ait Tüm Yemek Tarifleri
							</h3>
							<div class="row" v-if="!isEmpty(recipes)">
								<client-only>
									<div
										class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6"
										v-bind:key="index"
										v-for="(recipe, index) in recipes"
									>
										<v-card>
											<v-card-title class="headline mb-0 py-0">
												<v-list-item three-line class="px-0">
													<nuxt-link
														v-bind:to="'/profile/' + recipe.dietician.slug"
													>
														<v-list-item-avatar tile size="65" class="rounded">
															<img
																v-bind:alt="recipe.name"
																v-bind:src="
																	img_url +
																		'public/storage/' +
																		(!isEmpty(recipe.dietician)
																			? recipe.dietician.profile_photo
																			: siteSettings.logo)
																"
															/>
														</v-list-item-avatar>
													</nuxt-link>
													<v-list-item-content>
														<v-list-item-title class="headline">
														</v-list-item-title>
														<div class="overline font-weight-bold mb-0">
															{{
																!isEmpty(recipe.dietician)
																	? recipe.dietician.name
																	: "Admin"
															}}
														</div>
														<v-list-item-subtitle>{{
															recipe.createdAt
														}}</v-list-item-subtitle>
													</v-list-item-content>
												</v-list-item>
											</v-card-title>
											<v-divider class="mt-0 mb-1 mx-3"></v-divider>
											<v-list-item
												class="align-items-top align-top d-flex align-start align-self-start"
											>
												<div class="justify-content-start">
													<nuxt-link v-bind:to="'/recipe/' + recipe.slug">
														<v-list-item-avatar tile size="165" class="rounded">
															<img
																v-bind:alt="recipe.name"
																v-bind:src="
																	img_url + 'public/storage/' + recipe.img_url
																"
															/>
														</v-list-item-avatar>
													</nuxt-link>
												</div>
												<div
													class="justify-content-end align-items-top align-top align-self-start w-100"
												>
													<v-list-item-content
														class="align-items-top align-top d-block align-start align-self-start w-100 py-0"
													>
														<nuxt-link
															v-bind:to="'/recipe/' + recipe.slug"
															class="btn-link font-weight-bold my-auto text-decoration-none h3 w-100"
															>{{ recipe.name }}</nuxt-link
														>
														<v-list-item-subtitle class="overline w-100"
															>YEMEK TARİFİ</v-list-item-subtitle
														>
													</v-list-item-content>
													<v-list-item-content
														class="align-items-top align-top d-flex align-start align-self-start flex-wrap"
													>
														<div class="row d-flex flex-wrap">
															<div
																class="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 text-center justify-content-center align-middle"
															>
																<div
																	class="bg-light p-3 font-weight-bold text-center justify-content-center align-middle"
																>
																	<div class="d-block">1 Porsiyon</div>
																	{{ recipe.calorie }}
																</div>
															</div>
															<div
																class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 text-center justify-content-center align-middle"
															>
																<div
																	class="bg-light p-3 font-weight-bold text-center justify-content-center align-middle"
																>
																	{{ recipe.portion }}
																</div>
															</div>
														</div>
													</v-list-item-content>
												</div>
											</v-list-item>
										</v-card>
									</div>
								</client-only>
							</div>
							<v-pagination
								v-model="pagination.current"
								:length="pagination.total"
								@input="onPageChange"
							></v-pagination>
						</div>
						<div
							class="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 theiaStickySidebar"
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
			ValidationProvider
		},
		name: "index",
		computed: {
			img_url() {
				return process.env.apiPublicUrl;
			}
		},
		validate({ params }) {
			return params.id !== null ? params.id : null;
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
								decodeURIComponent(this.search)
						})
						.then(response => {
							this.recipes = this.$store.getters.recipeCategories.recipes.data;
							this.categories = this.$store.getters.recipeCategories.categories;
							this.pagination.current = this.$store.getters.recipeCategories.recipes.current_page;
							this.pagination.total = this.$store.getters.recipeCategories.recipes.last_page;
						});
				} else {
					if (param) {
						this.$store
							.dispatch("getRecipeCategories", { recipeCategoriesURL: param })
							.then(response => {
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
									this.pagination.current
							})
							.then(response => {
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
			}
		},
		data() {
			return {
				categories: [],
				recipes: [],
				search: null,
				pagination: {
					current: 1,
					total: 1
				},
				siteSettings: this.$store.getters.siteSettings
			};
		},
		mounted() {
			this.getRecipes();
		}
	};
</script>