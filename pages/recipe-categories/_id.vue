<template>
	<div>
		<div class="breadcrumb-bar">
			<v-container fluid>
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
			</v-container>
		</div>
		<div class="main-wrapper">
			<section class="section section-search py-5">
				<v-container fluid>
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
				</v-container>
			</section>
			<div class="content">
				<v-container fluid>
					<v-row>
						<v-col cols="12" sm="12" md="9" lg="9" xl="9">
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
							<v-row v-if="!isEmpty(recipes)">
								<client-only>
									<v-col
										cols="12"
										sm="12"
										md="12"
										lg="6"
										xl="6"
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
																		(!isEmpty(recipe.dietician)
																			? recipe.dietician.profile_photo
																			: settings.logo)
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
																v-bind:src="img_url + recipe.img_url"
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
														<v-row class="d-flex flex-wrap">
															<v-col
																cols="12"
																sm="12"
																md="8"
																lg="8"
																xl="8"
																class="text-center justify-content-center align-middle"
															>
																<div
																	class="bg-light p-3 font-weight-bold text-center justify-content-center align-middle"
																>
																	<div class="d-block">1 Porsiyon</div>
																	{{ recipe.calorie }}
																</div>
															</v-col>
															<v-col
																cols="12"
																sm="12"
																md="4"
																lg="4"
																xl="4"
																class="text-center justify-content-center align-middle"
															>
																<div
																	class="bg-light p-3 font-weight-bold text-center justify-content-center align-middle"
																>
																	{{ recipe.portion }}
																</div>
															</v-col>
														</v-row>
													</v-list-item-content>
												</div>
											</v-list-item>
										</v-card>
									</v-col>
								</client-only>
							</v-row>
							<v-pagination
								v-model="pagination.current"
								:length="pagination.total"
								@input="onPageChange"
							></v-pagination>
						</v-col>
						<v-col
							cols="12"
							sm="12"
							md="3"
							lg="3"
							xl="3"
							class="theiaStickySidebar"
						></v-col>
					</v-row>
				</v-container>
			</div>
		</div>
	</div>
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
		props: ["settings"],
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
				}
			};
		},
		mounted() {
			this.getRecipes();
		}
	};
</script>
