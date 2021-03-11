<template>
	<div>
		<div class="breadcrumb-bar">
			<v-container fluid>
				<v-row class="align-items-center">
					<v-col cols="12" sm="12" md="12" lg="12" xl="12">
						<nav aria-label="breadcrumb" class="page-breadcrumb">
							<ol class="breadcrumb pl-0">
								<li class="breadcrumb-item">
									<nuxt-link to="/">Anasayfa</nuxt-link>
								</li>
								<li class="breadcrumb-item active" aria-current="page">
									Diyetisyen Girişi
								</li>
							</ol>
						</nav>
						<h2 class="breadcrumb-title">Diyetisyen Girişi</h2>
					</v-col>
				</v-row>
			</v-container>
		</div>
		<div class="content account-page" style="padding: 50px 0">
			<v-container fluid>
				<v-row>
					<v-col cols="12" sm="12" md="12" lg="12" xl="12">
						<div class="account-content">
							<v-row class="align-items-center justify-content-center">
								<v-col
									cols="12"
									sm="12"
									md="7"
									lg="6"
									xl="6"
									class="login-left"
								>
									<img
										src="/img/login-banner.png"
										class="img-fluid"
										alt="Diyetisyen Klinik"
									/>
								</v-col>
								<v-col
									cols="12"
									sm="12"
									md="12"
									lg="9"
									xl="9"
									class="login-right"
								>
									<v-tabs
										v-model="tab"
										background-color="primary"
										dark
										fixed-tabs
									>
										<v-tab v-for="item in tabs" :key="item.tab">
											{{ item.tab }}
										</v-tab>
									</v-tabs>
									<v-tabs-items v-model="tab">
										<v-tab-item>
											<ValidationObserver v-slot="{ handleSubmit }">
												<form
													@submit.prevent="handleSubmit(onLogin)"
													ref="userLogin"
													enctype="multipart/form-data"
												>
													<v-card tile>
														<v-card-text>
															<div class="form-group form-focus">
																<ValidationProvider
																	name="Email Adresiniz"
																	rules="required|email"
																	v-slot="{ errors }"
																>
																	<v-text-field
																		label="Email Adresiniz"
																		hide-details="auto"
																		name="email"
																		v-model="email"
																	></v-text-field>
																	<small class="font-weight-bold text-danger">{{
																		errors[0]
																	}}</small>
																</ValidationProvider>
															</div>

															<div class="form-group form-focus">
																<ValidationProvider
																	name="Şifreniz"
																	rules="required"
																	v-slot="{ errors }"
																>
																	<v-text-field
																		label="Şifreniz"
																		hide-details="auto"
																		type="password"
																		name="password"
																		v-model="password"
																	></v-text-field>
																	<small class="font-weight-bold text-danger">{{
																		errors[0]
																	}}</small>
																</ValidationProvider>
															</div>
															<div class="d-flex">
																<v-btn color="primary">
																	Giriş Yap
																</v-btn>
																<nuxt-link
																	to="/forgot-password"
																	class="forgot-link ml-auto"
																	>Şifremi Unuttum.</nuxt-link
																>
															</div>
														</v-card-text>
													</v-card>
												</form>
											</ValidationObserver>
										</v-tab-item>
										<v-tab-item>
											<ValidationObserver v-slot="{ handleSubmit }">
												<form
													@submit.prevent="handleSubmit(onRegister)"
													ref="userRegister"
													enctype="multipart/form-data"
												>
													<v-stepper v-model="e1">
														<v-stepper-header>
															<v-stepper-step :complete="e1 > 1" step="1">
																Kayıt Bilgileriniz
															</v-stepper-step>

															<v-divider></v-divider>

															<v-stepper-step :complete="e1 > 2" step="2">
																Diploma / İşyeri Bilgileriniz
															</v-stepper-step>
														</v-stepper-header>

														<v-stepper-items>
															<v-stepper-content step="1">
																<div class="form-group form-focus">
																	<ValidationProvider
																		name="Adınız ve Soyadınız"
																		rules="required"
																		v-slot="{ errors }"
																	>
																		<v-text-field
																			label="Adınız ve Soyadınız"
																			hide-details="auto"
																			name="name"
																			v-model="name"
																		></v-text-field>
																		<small
																			class="font-weight-bold text-danger"
																			>{{ errors[0] }}</small
																		>
																	</ValidationProvider>
																</div>

																<div class="form-group form-focus">
																	<ValidationProvider
																		name="T.C. Kimlik Numaranız"
																		rules="required"
																		v-slot="{ errors }"
																	>
																		<v-text-field
																			label="T.C. Kimlik Numaranız"
																			hide-details="auto"
																			name="tc"
																			v-model="tc"
																		></v-text-field>
																		<small
																			class="font-weight-bold text-danger"
																			>{{ errors[0] }}</small
																		>
																	</ValidationProvider>
																</div>

																<div class="form-group form-focus">
																	<ValidationProvider
																		name="Email Adresiniz"
																		rules="required|email"
																		v-slot="{ errors }"
																	>
																		<v-text-field
																			label="Email Adresiniz"
																			hide-details="auto"
																			name="email"
																			v-model="email"
																		></v-text-field>
																		<small
																			class="font-weight-bold text-danger"
																			>{{ errors[0] }}</small
																		>
																	</ValidationProvider>
																</div>

																<div class="form-group form-focus">
																	<ValidationProvider
																		name="Telefon Numaranız"
																		rules="required"
																		v-slot="{ errors }"
																	>
																		<v-text-field
																			label="Telefon Numaranız"
																			hide-details="auto"
																			name="phone"
																			v-model="phone"
																		></v-text-field>
																		<small
																			class="font-weight-bold text-danger"
																			>{{ errors[0] }}</small
																		>
																	</ValidationProvider>
																</div>
																<div class="form-group form-focus">
																	<ValidationProvider
																		name="Şifreniz"
																		rules="required"
																		v-slot="{ errors }"
																	>
																		<v-text-field
																			label="Şifreniz"
																			hide-details="auto"
																			name="password"
																			type="password"
																			v-model="password"
																		></v-text-field>
																		<small
																			class="font-weight-bold text-danger"
																			>{{ errors[0] }}</small
																		>
																	</ValidationProvider>
																</div>
																<div class="form-group form-focus">
																	<ValidationProvider
																		name="Tekrar Şifreniz"
																		rules="required"
																		v-slot="{ errors }"
																	>
																		<v-text-field
																			label="Tekrar Şifreniz"
																			hide-details="auto"
																			name="password_confirmation"
																			type="password"
																			v-model="password_confirmation"
																		></v-text-field>
																		<small
																			class="font-weight-bold text-danger"
																			>{{ errors[0] }}</small
																		>
																	</ValidationProvider>
																</div>
																<v-btn color="primary" @click="e1 = 2">
																	Sonraki
																</v-btn>
															</v-stepper-content>

															<v-stepper-content step="2">
																<div class="form-group form-focus">
																	<ValidationProvider
																		name="Hastane/Poliklinik Adı"
																		rules="required"
																		v-slot="{ errors }"
																	>
																		<v-text-field
																			label="Hastane/Poliklinik Adı"
																			hide-details="auto"
																			name="hospitalName"
																			v-model="hospitalName"
																		></v-text-field>
																		<small
																			class="font-weight-bold text-danger"
																			>{{ errors[0] }}</small
																		>
																	</ValidationProvider>
																</div>
																<div class="form-group form-focus">
																	<ValidationProvider
																		name="Departmanınız"
																		rules="required"
																		v-slot="{ errors }"
																	>
																		<v-text-field
																			label="Departmanınız"
																			hide-details="auto"
																			name="department"
																			v-model="department"
																		></v-text-field>
																		<small
																			class="font-weight-bold text-danger"
																			>{{ errors[0] }}</small
																		>
																	</ValidationProvider>
																</div>
																<div class="form-group form-focus">
																	<ValidationProvider
																		name="İş Telefon Numaranız"
																		rules="required"
																		v-slot="{ errors }"
																	>
																		<v-text-field
																			label="İş Telefon Numaranız"
																			hide-details="auto"
																			name="work_phone"
																			v-model="work_phone"
																		></v-text-field>
																		<small
																			class="font-weight-bold text-danger"
																			>{{ errors[0] }}</small
																		>
																	</ValidationProvider>
																</div>
																<div class="form-group form-focus">
																	<ValidationProvider
																		name="Telefon Numaranız 2"
																		rules="required"
																		v-slot="{ errors }"
																	>
																		<v-text-field
																			label="İş Telefon Numaranız 2"
																			hide-details="auto"
																			name="work_phone_2"
																			v-model="work_phone_2"
																		></v-text-field>
																		<small
																			class="font-weight-bold text-danger"
																			>{{ errors[0] }}</small
																		>
																	</ValidationProvider>
																</div>
																<div class="form-group form-focus">
																	<ValidationProvider
																		name="İşyerinizin Bulunduğu İl"
																		rules="required"
																		v-slot="{ errors }"
																	>
																		<label for="company_city"
																			>İşyerinizin Bulunduğu İl</label
																		>
																		<select
																			v-on:change="getTowns"
																			name="company_city"
																			id="company_city"
																			class="form-control rounded-0"
																			v-if="!isEmpty(country.cities)"
																		>
																			<option value="" selected="selected">
																				İl Seçiniz.
																			</option>
																			<client-only>
																				<option
																					v-bind:data-id="city.towns"
																					v-bind:value="city.name"
																					v-bind:key="index"
																					v-for="(city,
																					index) in country.cities"
																				>
																					{{ city.name }}
																				</option>
																			</client-only>
																		</select>
																		<select
																			v-on:change="getTowns"
																			name="company_city"
																			id="company_city"
																			class="form-control rounded-0"
																			v-else-if="isEmpty(country.cities)"
																		>
																			<option value="" selected="selected">
																				İl Seçiniz.
																			</option>
																		</select>
																		<small
																			class="font-weight-bold text-danger"
																			>{{ errors[0] }}</small
																		>
																	</ValidationProvider>
																</div>
																<div class="form-group form-focus">
																	<ValidationProvider
																		name="İşyerinizin Bulunduğu İlçe"
																		rules="required"
																		v-slot="{ errors }"
																	>
																		<label for="company_town"
																			>İşyerinizin Bulunduğu İlçe</label
																		>
																		<select
																			v-on:change="getDistricts"
																			name="company_town"
																			id="company_town"
																			class="form-control floating rounded-0"
																			v-if="!isEmpty(country.towns)"
																		>
																			<option
																				value=""
																				v-if="country.towns.length > 0"
																				selected="selected"
																			>
																				İlçe Seçiniz.
																			</option>
																			<option
																				value=""
																				v-if="country.towns.length <= 0"
																				selected="selected"
																			>
																				Önce İl Seçiniz.
																			</option>
																			<client-only>
																				<option
																					v-bind:data-id="town.districts"
																					v-bind:value="town.name"
																					v-bind:key="index"
																					v-for="(town, index) in country.towns"
																				>
																					{{ town.name }}
																				</option>
																			</client-only>
																		</select>
																		<select
																			v-on:change="getDistricts"
																			name="company_town"
																			id="company_town"
																			class="form-control floating rounded-0"
																			v-else-if="isEmpty(country.towns)"
																		>
																			<option
																				value=""
																				v-if="country.towns.length > 0"
																				selected="selected"
																			>
																				İlçe Seçiniz.
																			</option>
																			<option
																				value=""
																				v-if="country.towns.length <= 0"
																				selected="selected"
																			>
																				Önce İl Seçiniz.
																			</option>
																		</select>
																		<small
																			class="font-weight-bold text-danger"
																			>{{ errors[0] }}</small
																		>
																	</ValidationProvider>
																</div>
																<div class="form-group form-focus">
																	<ValidationProvider
																		name="İşyerinizin Bulunduğu Semt"
																		rules="required"
																		v-slot="{ errors }"
																	>
																		<label for="company_district"
																			>İşyerinizin Bulunduğu Semt</label
																		>
																		<select
																			v-on:change="getNeighborhoods"
																			name="company_district"
																			id="company_district"
																			class="form-control floating rounded-0"
																			v-if="!isEmpty(country.districts)"
																		>
																			<option
																				value=""
																				v-if="country.districts.length > 0"
																				selected="selected"
																			>
																				Semt Seçiniz.
																			</option>
																			<option
																				value=""
																				v-if="country.districts.length <= 0"
																				selected="selected"
																			>
																				Önce İlçe Seçiniz.
																			</option>
																			<client-only>
																				<option
																					v-bind:data-id="
																						district.neighborhoods
																					"
																					v-bind:value="district.name"
																					v-bind:key="index"
																					v-for="(district,
																					index) in country.districts"
																				>
																					{{ district.name }}
																				</option>
																			</client-only>
																		</select>
																		<select
																			v-on:change="getNeighborhoods"
																			name="company_district"
																			id="company_district"
																			class="form-control floating rounded-0"
																			v-else-if="isEmpty(country.districts)"
																		>
																			<option
																				value=""
																				v-if="country.districts.length > 0"
																				selected="selected"
																			>
																				Semt Seçiniz.
																			</option>
																			<option
																				value=""
																				v-if="country.districts.length <= 0"
																				selected="selected"
																			>
																				Önce İlçe Seçiniz.
																			</option>
																		</select>
																		<small
																			class="font-weight-bold text-danger"
																			>{{ errors[0] }}</small
																		>
																	</ValidationProvider>
																</div>
																<div class="form-group form-focus">
																	<ValidationProvider
																		name="İşyerinizin Bulunduğu Mahalle"
																		rules="required"
																		v-slot="{ errors }"
																	>
																		<label for="company_neighborhood"
																			>İşyerinizin Bulunduğu Mahalle</label
																		>
																		<select
																			name="company_neighborhood"
																			id="company_neighborhood"
																			class="form-control floating rounded-0"
																			v-if="!isEmpty(country.neighborhoods)"
																		>
																			<option
																				value=""
																				v-if="country.neighborhoods.length > 0"
																				selected="selected"
																			>
																				Mahalle Seçiniz.
																			</option>
																			<option
																				value=""
																				v-if="country.neighborhoods.length <= 0"
																				selected="selected"
																			>
																				Önce Semt Seçiniz.
																			</option>
																			<client-only>
																				<option
																					v-bind:value="neighborhood.name"
																					v-bind:key="index"
																					v-for="(neighborhood,
																					index) in country.neighborhoods"
																				>
																					{{ neighborhood.name }}
																				</option>
																			</client-only>
																		</select>
																		<select
																			name="company_neighborhood"
																			id="company_neighborhood"
																			class="form-control floating rounded-0"
																			v-else-if="isEmpty(country.neighborhoods)"
																		>
																			<option
																				value=""
																				v-if="country.neighborhoods.length > 0"
																				selected="selected"
																			>
																				Mahalle Seçiniz.
																			</option>
																			<option
																				value=""
																				v-if="country.neighborhoods.length <= 0"
																				selected="selected"
																			>
																				Önce Semt Seçiniz.
																			</option>
																		</select>
																		<small
																			class="font-weight-bold text-danger"
																			>{{ errors[0] }}</small
																		>
																	</ValidationProvider>
																</div>
																<div class="form-group form-focus">
																	<ValidationProvider
																		name="İşyerinizin Adresi"
																		rules="required"
																		v-slot="{ errors }"
																	>
																		<v-textarea
																			name="company_address"
																			label="İşyerinizin Adresi"
																			value=""
																			clearable
																			clear-icon="fa fa-times-circle"
																			v-model="company_address"
																		></v-textarea>
																		<small
																			class="font-weight-bold text-danger"
																			>{{ errors[0] }}</small
																		>
																	</ValidationProvider>
																</div>
																<div class="form-group form-focus">
																	<input
																		type="file"
																		name="certificate_file"
																		class="form-control rounded-0"
																		placeholder="Diploma Örneği"
																		accept="image/*,.pdf"
																		required
																	/>
																</div>
																<div class="form-group form-focus">
																	<input
																		type="file"
																		name="identity_file"
																		class="form-control rounded-0"
																		placeholder="Kimlik İle Çekilmiş Fotoğraf Örneği"
																		accept="image/*"
																		required
																	/>
																</div>
																<div class="form-group pt-3">
																	<v-btn
																		color="info"
																		class="mr-3"
																		@click="e1 = 1"
																	>
																		Geri Dön
																	</v-btn>
																	<v-btn color="primary">
																		Kayıt Ol
																	</v-btn>
																</div>
															</v-stepper-content>
														</v-stepper-items>
													</v-stepper>
												</form>
											</ValidationObserver>
										</v-tab-item>
									</v-tabs-items>
								</v-col>
							</v-row>
						</div>
					</v-col>
				</v-row>
			</v-container>
		</div>
	</div>
</template>
<script>
	import { ValidationObserver, ValidationProvider } from "vee-validate";

	export default {
		middleware: ["auth2"],
		components: {
			ValidationObserver,
			ValidationProvider
		},
		mounted() {
			this.getCities();
			let inputs = document.querySelectorAll(".v-file-input input");
			[...inputs].forEach(input => {
				input.remove();
			});
		},
		data() {
			return {
				tab: null,
				tabs: [{ tab: "Giriş Yap" }, { tab: "Kayıt Ol" }],
				e1: 1,
				country: { cities: [], towns: [], districts: [], neighborhoods: [] },
				isUser: true,
				isDietician: true,
				isAdmin: false,
				email: null,
				password: null,
				password_confirmation: null,
				name: null,
				tc: null,
				identity_file: null,
				certificate_file: null,
				phone: null,
				hospitalName: null,
				department: null,
				work_phone: null,
				work_phone_2: null,
				company_city: null,
				company_town: null,
				company_neighborhood: null,
				company_district: null,
				company_address: null
			};
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
			getCities() {
				this.$axios
					.get(process.env.apiBaseUrl + "informations/cities")
					.then(response => {
						this.country.cities =
							response.data.data.cities.length > 0
								? response.data.data.cities
								: [];
					});
			},
			getTowns: function(event) {
				if (event.target.options.selectedIndex > -1) {
					const theTarget =
						event.target.options[event.target.options.selectedIndex].dataset;
					let townIds = theTarget.id;
					this.$axios
						.get(process.env.apiBaseUrl + "informations/towns?id=" + townIds)
						.then(response => {
							this.country.towns =
								response.data.towns.length > 0 ? response.data.towns : [];
							this.country.districts = [];
							this.country.neighborhoods = [];
							this.company_district = null;
							this.company_neighborhood = null;
						});
				}
			},
			getDistricts: function(event) {
				if (event.target.options.selectedIndex > -1) {
					const theTarget =
						event.target.options[event.target.options.selectedIndex].dataset;
					let districtIds = theTarget.id;
					this.$axios
						.get(
							process.env.apiBaseUrl + "informations/districts?id=" + districtIds
						)
						.then(response => {
							this.country.districts =
								response.data.districts.length > 0 ? response.data.districts : [];
							this.country.neighborhoods = [];
							this.company_neighborhood = null;
						});
				}
			},
			getNeighborhoods: function(event) {
				if (event.target.options.selectedIndex > -1) {
					const theTarget =
						event.target.options[event.target.options.selectedIndex].dataset;
					let neighborhoodIds = theTarget.id;
					this.$axios
						.get(
							process.env.apiBaseUrl +
								"informations/neighborhoods?id=" +
								neighborhoodIds
						)
						.then(response => {
							this.country.neighborhoods =
								response.data.neighborhoods.length > 0
									? response.data.neighborhoods
									: [];
						});
				}
			},
			/**
			 * User Login Method
			 */
			async onLogin() {
				let formData = new FormData(this.$refs.userLogin);
				formData.append("isUser", this.isUser);
				formData.append("isDietician", this.isDietician);
				formData.append("isAdmin", this.isAdmin);
				try {
					let response = await this.$auth.loginWith("dietician", {
						data: formData
					});
					if (response.data.success) {
						this.$izitoast.success({
							title: response.data.title,
							message: response.data.msg,
							position: "topCenter"
						});
						this.$auth.setUser(response.data.user);
						this.$auth.$storage.setUniversal("user", response.data.user);
						this.$auth.strategy.token.set(
							this.$auth.$storage.getUniversal("user").api_token
						);
						setTimeout(event => {
							if (!this.isEmpty(this.$route.query.url)) {
								window.location.href = decodeURIComponent(this.$route.query.url);
							} else {
								this.$router.go(decodeURIComponent("/profile"));
							}
						}, 2000);
					} else {
						this.$izitoast.error({
							title: response.data.title,
							message: response.data.msg,
							position: "topCenter"
						});
					}
				} catch (err) {
					console.log(err);
				}
			},
			/**
			 * User Register Method
			 */
			onRegister() {
				let formData = new FormData(this.$refs.userRegister);
				formData.append("isUser", this.isUser);
				formData.append("isDietician", this.isDietician);
				formData.append("status", "dietician");
				this.$store.dispatch("RegisterUser", formData).then(response => {
					if (response.success) {
						this.$izitoast.success({
							title: response.title,
							message: response.msg,
							position: "topCenter"
						});
						setTimeout(() => {
							this.$router.go(decodeURIComponent("/dietician-login"));
						}, 2000);
					} else {
						this.$izitoast.error({
							title: response.title,
							message: response.msg,
							position: "topCenter"
						});
					}
				});
			}
		}
	};
</script>
