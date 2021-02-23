<template>
	<v-app>
		<div class="main-wrapper">
			<div class="page-wrapper">
				<div class="content container-fluid">
					<div class="page-header">
						<v-row>
							<v-col cols="12" sm="12" md="12" lg="12" xl="12">
								<h3 class="page-title">Yeni E-Diyet Oluştur</h3>
								<ul class="breadcrumb">
									<li class="breadcrumb-item">
										<nuxt-link to="/dietician-panel">Anasayfa</nuxt-link>
									</li>
									<li class="breadcrumb-item">
										<nuxt-link to="/dietician-panel/consultants/"
											>Danışmanlarım</nuxt-link
										>
									</li>
									<li class="breadcrumb-item active">Yeni E-Diyet Oluştur</li>
								</ul>
							</v-col>
						</v-row>
					</div>
					<v-card tile>
						<ValidationObserver v-slot="{ handleSubmit }">
							<form
								@submit.prevent="handleSubmit(saveEdiet)"
								ref="edietForm"
								enctype="multipart/form-data"
							>
								<v-stepper v-model="e1">
									<v-stepper-header>
										<v-stepper-step :complete="e1 > 1" step="1">
											Hastalık Seçimi
										</v-stepper-step>

										<v-divider></v-divider>

										<v-stepper-step :complete="e1 > 2" step="2">
											Kalori Hesabı
										</v-stepper-step>

										<v-divider></v-divider>

										<v-stepper-step :complete="e1 > 3" step="3">
											Menü Planlama
										</v-stepper-step>

										<v-divider></v-divider>

										<v-stepper-step :complete="e1 > 4" step="4">
											Diyet Listesi
										</v-stepper-step>
									</v-stepper-header>

									<v-stepper-items>
										<v-stepper-content step="1">
											<ValidationProvider
												name="Hastalık"
												rules="required"
												v-slot="{ errors }"
											>
												<div class="form-group">
													<v-autocomplete
														name="selectedDiseases[]"
														v-model="selectedDiseases"
														:items="diseases"
														chips
														label="Hastalık Seçin"
														item-text="name"
														item-value="_id.$oid"
														multiple
													>
														<template v-slot:prepend-item>
															<v-list-item ripple @click="toggle3">
																<v-list-item-action>
																	<v-icon
																		:color="
																			selectedDiseases !== undefined &&
																			selectedDiseases !== null &&
																			selectedDiseases !== '' &&
																			selectedDiseases.length > 0
																				? 'indigo darken-4'
																				: ''
																		"
																	>
																		{{ icon3 }}
																	</v-icon>
																</v-list-item-action>
																<v-list-item-content>
																	<v-list-item-title>
																		Tümünü Seç
																	</v-list-item-title>
																</v-list-item-content>
															</v-list-item>
															<v-divider class="mt-2"></v-divider>
														</template>
														<template v-slot:selection="data">
															<v-chip
																v-bind="data.attrs"
																:input-value="data.selected"
																close
																@click="data.select"
																@click:close="remove(data.item)"
															>
																{{ data.item.name }}
															</v-chip>
														</template>
														<template v-slot:item="data">
															<template>
																<v-list-item-content>
																	<v-list-item-title
																		v-html="data.item.name"
																	></v-list-item-title>
																</v-list-item-content>
															</template>
														</template>
													</v-autocomplete>
													<small class="font-weight-bold text-danger">{{
														errors[0]
													}}</small>
												</div>
											</ValidationProvider>

											<button
												class="btn btn-outline-primary rounded-0 btn-lg"
												type="button"
											>
												İlerle
											</button>
										</v-stepper-content>

										<v-stepper-content step="2">
											<button
												class="btn btn-outline-primary rounded-0 btn-lg"
												role="button"
												@click.prevent="selectCover"
											>
												İlerle
											</button>
										</v-stepper-content>

										<v-stepper-content step="3">
											<ValidationProvider
												name="Öğün"
												rules="required"
												v-slot="{ errors }"
											>
												<div class="form-group">
													<v-select
														name="meals[]"
														v-model="selectedMeals"
														:items="meals"
														label="Öğün Seçin"
														item-text="name"
														item-value="_id.$oid"
														multiple
													>
														<template v-slot:prepend-item>
															<v-list-item ripple @click="toggle">
																<v-list-item-action>
																	<v-icon
																		:color="
																			selectedMeals !== undefined &&
																			selectedMeals !== null &&
																			selectedMeals !== '' &&
																			selectedMeals.length > 0
																				? 'indigo darken-4'
																				: ''
																		"
																	>
																		{{ icon }}
																	</v-icon>
																</v-list-item-action>
																<v-list-item-content>
																	<v-list-item-title>
																		Tümünü Seç
																	</v-list-item-title>
																</v-list-item-content>
															</v-list-item>
															<v-divider class="mt-2"></v-divider>
														</template>
														<template v-slot:item="data">
															<template>
																<v-list-item-content>
																	<v-list-item-title
																		v-html="data.item.name"
																	></v-list-item-title>
																</v-list-item-content>
															</template>
														</template>
													</v-select>
													<small class="font-weight-bold text-danger">{{
														errors[0]
													}}</small>
												</div>
											</ValidationProvider>
											<button
												class="btn btn-outline-primary rounded-0 btn-lg"
												role="button"
												@click.prevent="e1 = 2"
											>
												Geri Dön
											</button>
										</v-stepper-content>
									</v-stepper-items>
								</v-stepper>
							</form>
						</ValidationObserver>
					</v-card>
				</div>
			</div>
		</div>
	</v-app>
</template>
<script>
	import Cookie from "js-cookie";
	import { Base64 } from "js-base64";

	import { ValidationObserver, ValidationProvider } from "vee-validate";
	export default {
		middleware: ["session-control", "dietician"],
		layout: "dietician",
		components: {
			ValidationObserver,
			ValidationProvider
		},
		computed: {
			img_url() {
				return process.env.apiPublicUrl;
			},
			likesAllFruit3() {
				return (
					this.selectedDiseases !== undefined &&
					this.selectedDiseases !== null &&
					this.selectedDiseases !== "" &&
					this.diseases !== undefined &&
					this.diseases !== null &&
					this.diseases !== "" &&
					this.selectedDiseases.length === this.diseases.length
				);
			},
			likesSomeFruit3() {
				return (
					this.selectedDiseases !== undefined &&
					this.selectedDiseases !== null &&
					this.selectedDiseases !== "" &&
					this.selectedDiseases.length > 0 &&
					!this.likesAllFruit3
				);
			},
			icon3() {
				if (this.likesAllFruit3) return "mdi-close-box";
				if (this.likesSomeFruit3) return "mdi-minus-box";
				return "mdi-checkbox-blank-outline";
			}
		},
		data() {
			return {
				e1: 1,
				disease: null,
				diseases: [],
				selectedDiseases: [],
				recipe: null,
				recipes: [],
				meals: ["Sabah", "Kuşluk", "Öğle", "İkindi", "Akşam", "Gece"],
				ageGroups: ["0+", "1+", "10+", "18+"],
				selectedAgeGroups: [],
				selectedMeals: [],
				userData: !this.isEmpty(Cookie.get("userData"))
					? JSON.parse(Base64.decode(Cookie.get("userData")))
					: null
			};
		},
		mounted() {
			this.getDatas();
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
			getDatas() {
				this.$axios
					.get(`${process.env.apiBaseUrl}dietician/e-diets/create`, {
						json: true,
						withCredentials: false,
						mode: "no-cors",
						headers: {
							"Access-Control-Allow-Origin": "*",
							"Access-Control-Allow-Headers":
								"Origin, Content-Type, X-Auth-Token, Authorization",
							"Access-Control-Allow-Methods":
								"GET, POST, PATCH, PUT, DELETE, OPTIONS",
							"Access-Control-Allow-Credentials": true,
							"Content-type": "application/json",
							Authorization: "Bearer " + this.userData.api_token
						},
						credentials: "same-origin"
					})
					.then(response => {
						this.allCriterias = response.data.data.criteria;
						this.diseases = response.data.data.diseases;
						this.meals = response.data.data.meals;
					})
					.catch(err => console.log(err));
			},
			toggle3() {
				this.$nextTick(() => {
					if (this.likesAllFruit3) {
						this.selectedDiseases = [];
					} else {
						this.selectedDiseases = [];
						this.diseases.forEach((el, index) => {
							this.selectedDiseases.push(el._id.$oid);
						});
					}
				});
			},
			remove(item) {
				const index = this.selectedDiseases.indexOf(item._id.$oid);
				if (index >= 0) this.selectedDiseases.splice(index, 1);
			}
		}
	};
</script>