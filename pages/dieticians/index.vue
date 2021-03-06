<template>
	<div>
		<div class="breadcrumb-bar">
			<v-container fluid>
				<nav aria-label="breadcrumb" class="page-breadcrumb">
					<ol class="breadcrumb pl-0">
						<li class="breadcrumb-item">
							<nuxt-link to="/">Anasayfa</nuxt-link>
						</li>
						<li class="breadcrumb-item active" aria-current="page">
							Diyetisyenler
						</li>
					</ol>
				</nav>
				<h2 class="breadcrumb-title">Diyetisyenler</h2>
			</v-container>
		</div>
		<div class="main-wrapper">
			<section class="section section-search pt-5 bg-white">
				<v-container fluid>
					<div class="banner-wrapper">
						<div class="banner-header text-center">
							<h1>Diyetisyen Ara</h1>
							<p>
								<small
									>En profesyonel diyetisyenleri keşfet, sağlıklı yemek
									tarifleri al & senin için en uygun olanı tercih et.</small
								>
							</p>
						</div>

						<div class="search-box justify-content-center">
							<form onsubmit="return false" class="justify-content-center">
								<div class="form-group search-info w-100">
									<input
										type="text"
										class="form-control rounded-0"
										v-on:keyup.prevent="getDieticians()"
										v-model="search"
										placeholder="Diyetisyen Aramak İçin Buraya Yazın..."
									/>
								</div>
							</form>
						</div>
					</div>
				</v-container>
			</section>
			<section class="section">
				<div class="content">
					<v-container fluid>
						<v-row>
							<v-col cols="12" sm="12" md="6" lg="9" xl="9">
								<h1 class="text-center" v-if="!isEmpty(search)">
									"{{ search }}" Aramasıyla İle İlgili Eşleşen Diyetisyenler
								</h1>
								<h1
									class="text-center"
									v-if="
										search === null || search === '' || search === undefined
									"
								>
									Tüm Diyetisyenler
								</h1>
								<hr />
								<v-row v-if="!isEmpty(dieticians)">
									<client-only>
										<v-col
											v-bind:key="index"
											v-for="(dietician, index) in dieticians"
											cols="12"
											sm="6"
											md="6"
											lg="4"
											xl="3"
										>
											<div class="h-100 profile-widget mx-1">
												<div class="doc-img">
													<nuxt-link v-bind:to="'/profile/' + dietician.slug">
														<img
															v-if="!isEmpty(dietician.profile_photo)"
															class="img-fluid"
															style="min-height: 273px"
															v-bind:alt="dietician.name"
															v-bind:src="
																img_url + dietician.profile_photo.img_url
															"
														/>
													</nuxt-link>
												</div>
												<div class="pro-content h-100">
													<h3 class="title">
														<nuxt-link
															v-bind:to="'/profile/' + dietician.slug"
															>{{ dietician.name }}</nuxt-link
														>
														<i class="fa fa-check-circle verified"></i>
													</h3>
													<p class="speciality">
														{{ dietician.hospitalName }} -
														{{ dietician.department }}
													</p>
													<ul class="available-info">
														<li>
															<i class="fa fa-map-marker-alt"></i>
															{{ dietician.company_city }},
															{{ dietician.company_town }}
														</li>
														<li v-if="!isEmpty(dietician.appointment_hour)">
															<i class="fa fa-clock"></i>
															{{ dietician.appointment_hour }}
														</li>
														<li v-if="!isEmpty(dietician.price)">
															<i class="fa fa-money-bill-alt"></i>
															{{ dietician.price
															}}<i
																class="fa fa-info-circle"
																data-toggle="tooltip"
																title="Fiyatlar Değişkenlik Gösterebilir"
															></i>
														</li>
													</ul>
													<nuxt-link
														v-bind:to="'/make-appointment/' + dietician.slug"
														class="btn btn-info-light rounded-0 w-100"
														>Randevu Al</nuxt-link
													>
												</div>
											</div>
										</v-col>
									</client-only>
								</v-row>
								<v-pagination
									class="my-3"
									v-model="pagination.current"
									:length="pagination.total"
									@input="onPageChange"
								></v-pagination>
							</v-col>
							<v-col cols="12" sm="12" md="6" lg="3" xl="3"></v-col>
						</v-row>
					</v-container>
				</div>
			</section>
		</div>
	</div>
</template>

<script>
	export default {
		computed: {
			img_url() {
				return process.env.apiPublicUrl;
			}
		},
		data() {
			return {
				dieticians: [],
				search: null,
				pagination: {
					current: 1,
					total: 1
				}
			};
		},
		mounted() {
			this.getDieticians();
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
			getDieticians() {
				let url = "dieticians/dieticians?page=" + this.pagination.current;
				this.$store
					.dispatch("getDieticians", {
						dieticiansURL:
							url +
							(this.search !== null
								? "&search=" + decodeURIComponent(this.search)
								: "")
					})
					.then(response => {
						this.dieticians = this.$store.getters.dieticians.data;
						console.log(this.dieticians);
						this.pagination.current = this.$store.getters.dieticians.current_page;
						this.pagination.total = this.$store.getters.dieticians.last_page;
					});
			},
			onPageChange() {
				this.getDieticians();
			}
		}
	};
</script>
