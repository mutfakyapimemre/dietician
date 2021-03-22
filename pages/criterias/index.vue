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
							Ölçütler
						</li>
					</ol>
				</nav>
				<h2 class="breadcrumb-title">Ölçütler</h2>
			</v-container>
		</div>
		<div class="main-wrapper">
			<section class="section section-search py-5">
				<v-container fluid>
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
				</v-container>
			</section>
			<div class="content">
				<v-container>
					<v-row>
						<v-col
							cols="12"
							sm="12"
							md="7"
							lg="8"
							xl="9"
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
