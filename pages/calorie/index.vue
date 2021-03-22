<template>
	<div>
		<div class="breadcrumb-bar">
			<v-container fluid>
				<nav aria-label="breadcrumb" class="page-breadcrumb">
					<ol class="breadcrumb pl-0">
						<li class="breadcrumb-item">
							<nuxt-link to="/" custom>Anasayfa</nuxt-link>
						</li>
						<li class="breadcrumb-item active" aria-current="page">
							Kaç Kalori?
						</li>
					</ol>
				</nav>
				<h2 class="breadcrumb-title">Kaç Kalori?</h2>
			</v-container>
		</div>
		<div class="main-wrapper">
			<section class="section section-search py-5">
				<v-container fluid>
					<div class="banner-wrapper">
						<div class="banner-header text-center">
							<h1>Besin Ara</h1>
							<p><small>En Sağlıklı Besinleri Keşfet</small></p>
						</div>

						<div class="search-box">
							<form onsubmit="return false">
								<div class="form-group search-info w-100">
									<input
										type="text"
										class="form-control rounded-0"
										v-on:keyup.prevent="getNutrients()"
										v-model="search"
										placeholder="Besin Aramak İçin Buraya Yazın..."
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
						<v-col cols="12" sm="12" md="7" lg="8" xl="9">
							<h1 class="text-center" v-if="!isEmpty(search)">
								"{{ search }}" Aramasıyla İle İlgili Besinler
							</h1>
							<h1
								class="text-center"
								v-if="search === null || search === '' || search === undefined"
							>
								Tüm Besinler
							</h1>
							<hr />
							<v-row class="row-grid" v-if="!isEmpty(nutrients)">
								<client-only>
									<v-col
										cols="12"
										sm="12"
										md="6"
										lg="4"
										xl="3"
										v-bind:key="index"
										v-for="(nutrient, index) in nutrients"
									>
										<div class="profile-widget">
											<div class="doc-img">
												<nuxt-link v-bind:to="/calorie/ + nutrient.slug">
													<img
														height="300"
														v-bind:alt="nutrient.name"
														v-bind:src="
															img_url +
																(!isEmpty(nutrient.nutrients) &&
																!isEmpty(nutrient.nutrients.img_url)
																	? nutrient.nutrients.img_url
																	: empty_url)
														"
													/>
												</nuxt-link>
											</div>
											<div class="pro-content">
												<h3 class="title">
													<nuxt-link v-bind:to="/calorie/ + nutrient.slug">{{
														nutrient.name
													}}</nuxt-link>
												</h3>
												<p class="speciality">{{ nutrient.description }}</p>

												<v-row>
													<v-col cols="12" sm="12" md="12" lg="12" xl="12">
														<v-btn
															v-bind:to="/calorie/ + nutrient.slug"
															color="primary"
															>Besin Detayı</v-btn
														>
													</v-col>
												</v-row>
											</div>
										</div>
									</v-col>
								</client-only>
							</v-row>
							<div class="container">
								<v-pagination
									class="my-3"
									v-model="pagination.current"
									:length="pagination.total"
									@input="onPageChange"
									total-visible="11"
								></v-pagination>
							</div>
						</v-col>
						<v-col
							cols="12"
							sm="12"
							md="5"
							lg="4"
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
			getNutrients(param) {
				if (this.search !== null) {
					this.$store
						.dispatch("getNutrients", {
							nutrientsURL:
								"nutrients?page=" +
								this.pagination.current +
								"&search=" +
								decodeURIComponent(this.search)
						})
						.then(response => {
							this.empty_url = this.$store.getters.empty_url;
							this.nutrients = this.$store.getters.nutrients.data;
							this.pagination.current = this.$store.getters.nutrients.current_page;
							this.pagination.total = this.$store.getters.nutrients.last_page;
						});
				} else {
					if (param) {
						this.$store
							.dispatch("getNutrients", { nutrientsURL: param })
							.then(response => {
								this.empty_url = this.$store.getters.empty_url;
								this.nutrients = this.$store.getters.nutrients.data;
								this.pagination.current = this.$store.getters.nutrients.current_page;
								this.pagination.total = this.$store.getters.nutrients.last_page;
							});
					} else {
						this.$store
							.dispatch("getNutrients", {
								nutrientsURL: "nutrients?page=" + this.pagination.current
							})
							.then(response => {
								this.empty_url = this.$store.getters.empty_url;
								this.nutrients = this.$store.getters.nutrients.data;
								this.pagination.current = this.$store.getters.nutrients.current_page;
								this.pagination.total = this.$store.getters.nutrients.last_page;
							});
					}
				}
			},
			onPageChange() {
				this.getNutrients();
			}
		},
		data() {
			return {
				nutrients: [],
				search: null,
				empty_url: null,
				pagination: {
					current: 1,
					total: 1
				}
			};
		},
		mounted() {
			this.getNutrients();
		}
	};
</script>
