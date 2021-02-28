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
								<li class="breadcrumb-item active" aria-current="page">
									Ölçütler
								</li>
							</ol>
						</nav>
						<h2 class="breadcrumb-title">Ölçütler</h2>
					</div>
				</div>
			</div>
		</div>
		<div class="main-wrapper">
			<section class="section section-search py-5">
				<div class="container-fluid">
					<div class="banner-wrapper">
						<div class="banner-header text-center">
							<h1>Ölçüt Ara</h1>
							<p><small>En Sağlıklı Ölçütleri Keşfet</small></p>
						</div>

						<div class="search-box">
							<form onsubmit="return false">
								<div class="form-group search-info w-100">
									<input
										type="text"
										class="form-control rounded-0"
										v-on:keyup.prevent="getCriterias()"
										v-model="search"
										placeholder="Ölçüt Aramak İçin Buraya Yazın..."
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
						<div
							class="col-12 col-sm-12 col-md-7 col-lg-8 col-xl-9"
							v-if="!isEmpty(criterias)"
						>
							<h3 class="text-center" v-if="!isEmpty(search)">
								"{{ search }}" Aramasıyla İle İlgili Ölçütler
							</h3>
							<h3
								class="text-center"
								v-if="search === null || search === '' || search === undefined"
							>
								Tüm Ölçütler
							</h3>
							<client-only>
								<table
									class="table table-bordered table-striped mb-2 w-100"
									v-bind:key="index"
									v-for="(criteria, index) in criterias"
								>
									<thead>
										<tr>
											<th colspan="2" class="text-center">
												<nuxt-link v-bind:to="'calorie/' + criteria.slug">
													{{ criteria.name }}
												</nuxt-link>
											</th>
										</tr>
										<tr>
											<th class="w-50 text-break" scope="col">Ölçüt</th>
											<th class="w-50 text-break" scope="col">Ölçüt Değeri</th>
										</tr>
									</thead>
									<tbody>
										<client-only>
											<tr
												v-bind:key="index"
												v-for="(value, index) in criteria.criteria_values"
											>
												<td class="w-50 text-break">{{ value.title }}</td>
												<td class="w-50 text-break">
													{{ value.value }} {{ value.type }}
												</td>
											</tr>
										</client-only>
									</tbody>
								</table>
							</client-only>
							<v-pagination
								v-model="pagination.current"
								:length="pagination.total"
								@input="onPageChange"
							></v-pagination>
						</div>
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
			getCriterias(param) {
				if (this.search !== null) {
					this.$store
						.dispatch("getCriterias", {
							criteriasURL:
								"criteria?page=" +
								this.pagination.current +
								"&search=" +
								decodeURIComponent(this.search)
						})
						.then(response => {
							this.criterias = this.$store.getters.criterias.data;
							this.pagination.current = this.$store.getters.criterias.current_page;
							this.pagination.total = this.$store.getters.criterias.last_page;
						});
				} else {
					if (param) {
						this.$store
							.dispatch("getCriterias", { criteriasURL: param })
							.then(response => {
								this.criterias = this.$store.getters.criterias;
							});
					} else {
						this.$store
							.dispatch("getCriterias", {
								criteriasURL: "criteria?page=" + this.pagination.current
							})
							.then(response => {
								this.criterias = this.$store.getters.criterias.data;
								this.pagination.current = this.$store.getters.criterias.current_page;
								this.pagination.total = this.$store.getters.criterias.last_page;
							});
					}
				}
			},
			onPageChange() {
				this.getCriterias();
			}
		},
		data() {
			return {
				criterias: [],
				search: null,
				pagination: {
					current: 1,
					total: 1
				}
			};
		},
		mounted() {
			this.getCriterias();
		}
	};
</script>
