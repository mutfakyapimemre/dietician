<template>
	<v-app>
		<div class="breadcrumb-bar">
			<div class="container-fluid">
				<div class="row align-items-center">
					<v-col cols="12" sm="12" md="12" lg="12" xl="12">
						<nav aria-label="breadcrumb" class="page-breadcrumb">
							<ol class="breadcrumb pl-0">
								<li class="breadcrumb-item">
									<nuxt-link to="/" tag="a">Anasayfa</nuxt-link>
								</li>
								<li class="breadcrumb-item">
									<nuxt-link to="/calorie" tag="a">Kaç Kalori?</nuxt-link>
								</li>
								<li class="breadcrumb-item active" aria-current="page">
									{{ data.name }}
								</li>
							</ol>
						</nav>
						<h2 class="breadcrumb-title">{{ data.name }}</h2>
					</v-col>
				</div>
			</div>
		</div>
		<div class="main-wrapper">
			<div class="content">
				<div class="container-fluid">
					<div class="row">
						<v-col cols="12" sm="12" md="7" lg="8" xl="9">
							<div class="card">
								<div class="card-body">
									<div class="doctor-widget">
										<div class="doc-info-left">
											<div
												class="doctor-img"
												v-if="!isEmpty(data) && image.isCover === 1"
											>
												<client-only>
													<img
														v-bind:key="index"
														v-for="(image, index) in images"
														v-bind:src="
															img_url + 'public/storage/' + image.img_url
														"
														class="img-fluid"
														v-bind:alt="data.name"
													/>
												</client-only>
											</div>
											<div class="doc-info-cont">
												<h4 class="doc-name">{{ data.name }}</h4>
												<p class="doc-speciality">
													"{{ data.name }}" Besini Hakkında Detaylı Bilgiler
												</p>
											</div>
										</div>
										<div class="doc-info-right">
											<div class="clini-infos">
												<div class="row">
													<div
														class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6"
													>
														<div class="form-group">
															<label for="unit">Birim</label>
															<input
																type="number"
																v-on:input="changeValue"
																min="1"
																step="1"
																id="unit"
																name="unit"
																v-model="unit"
																class="form-control rounded-0"
															/>
														</div>
													</div>
													<div
														class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6"
													>
														<div class="form-group">
															<label for="criteriaValue">Ölçüt</label>
															<select
																v-on:change="setCriteriaValue"
																id="criteriaValue"
																class="form-control rounded-0"
																v-if="
																	!isEmpty(data) &&
																		!isEmpty(values) &&
																		!isEmpty(criterias)
																"
															>
																<option v-bind:value="0" selected>
																	Ölçüt Seçiniz
																</option>
																<client-only>
																	<option
																		v-bind:key="index"
																		v-bind:value="
																			criteria.title +
																				criteria.value +
																				criteria.type
																		"
																		v-bind:data-type="criteria.type"
																		v-bind:data-value="criteria.value"
																		v-for="(criteria, index) in criterias"
																	>
																		{{ criteria.title }}
																	</option>
																</client-only>
															</select>
															<select
																v-on:change="setCriteriaValue"
																id="criteriaValue"
																class="form-control rounded-0"
																v-if="
																	isEmpty(data) ||
																		isEmpty(values) ||
																		isEmpty(criterias)
																"
															>
																<option v-bind:value="0" selected>
																	Ölçüt Seçiniz
																</option>
															</select>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div class="card">
								<div class="card-body pt-0">
									<nav class="user-tabs mb-4">
										<ul class="nav nav-tabs nav-tabs-bottom nav-justified">
											<li class="nav-item">
												<a
													class="nav-link active"
													href="#nutrients_value"
													data-toggle="tab"
													>Besin Değerleri</a
												>
											</li>
											<li class="nav-item">
												<a
													class="nav-link"
													href="#description"
													data-toggle="tab"
													>Açıklama</a
												>
											</li>
										</ul>
									</nav>

									<div class="tab-content pt-0">
										<div
											role="tabpanel"
											id="nutrients_value"
											class="tab-pane fade show active"
										>
											<div class="row">
												<div
													class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 offset-md-3 offset-lg-3 offset-xl-3"
												>
													<div class="widget business-widget">
														<div class="widget-content">
															<div
																class="listing-hours"
																v-if="!isEmpty(data) && !isEmpty(values)"
															>
																<div class="listing-day current">
																	<div class="day">Besin Değeri Adı</div>
																	<div class="time-items">
																		<span class="time">Besin Değeri</span>
																	</div>
																</div>
																<client-only>
																	<div
																		v-bind:key="index"
																		v-for="(value, index) in fordata"
																		v-bind:class="
																			' px-2 listing-day ' +
																				(index % 2 === 0
																					? 'bg-secondary text-white py-2'
																					: '')
																		"
																	>
																		<div class="day">
																			{{ value.title }} ({{ value.type }})
																		</div>
																		<div class="time-items">
																			<span
																				v-bind:class="
																					'time' +
																						(index % 2 === 0
																							? ' text-white '
																							: '')
																				"
																				>{{ value.value }}</span
																			>
																		</div>
																	</div>
																</client-only>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>

										<div role="tabpanel" id="description" class="tab-pane fade">
											<div class="row">
												<div
													class="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9"
												>
													<div class="widget about-widget">
														<h4 class="widget-title">Besin Hakkında</h4>
														<p>
															{{ data.description }}
														</p>
													</div>
												</div>
												<div
													class="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3"
												></div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</v-col>
						<v-col
							cols="12"
							sm="12"
							md="5"
							lg="4"
							xl="3"
							class="theiaStickySidebar"
						>
						</v-col>
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
			setCriteriaValue: function(event) {
				event.preventDefault();
				event.stopImmediatePropagation();
				if (event.target.options.selectedIndex > -1) {
					const theTarget =
						event.target.options[event.target.options.selectedIndex].dataset;
					this.type = theTarget.type;
					this.criteriaValue = theTarget.value;
				}

				this.changeValue(event);
			},
			changeValue: function(event) {
				event.preventDefault();
				event.stopImmediatePropagation();
				if (this.values.length > 0) {
					for (let i = 0; i < this.values.length; i++) {
						this.fordata[i].value = (
							(parseFloat(this.values[i].value) / 100) *
							(parseFloat(this.unit) * parseFloat(this.criteriaValue))
						).toFixed(2);
						if (
							this.fordata[i].value === undefined ||
							this.fordata[i].value === "" ||
							this.fordata[i].value === null ||
							this.fordata[i].value <= 1 ||
							isNaN(this.fordata[i].value)
						) {
							this.fordata[i].value = this.values[i].value;
						}
					}
				}
			}
		},
		data() {
			return {
				data: {},
				fordata: [],
				criteriaValue: 0,
				value: null,
				unit: 100,
				type: null
			};
		},
		validate({ params }) {
			return params.id !== null ? params.id : null;
		},
		async asyncData({ params, error, $axios }) {
			try {
				const { data } = await $axios.get(
					process.env.apiBaseUrl + "nutrients/" + params.id
				);

				return data;
			} catch (e) {
				error({ message: "Besin Bilgisi Bulunamadı.", statusCode: 404 });
			}
		}
	};
</script>