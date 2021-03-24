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
							<nuxt-link to="/calorie">Kaç Kalori?</nuxt-link>
						</li>
						<li class="breadcrumb-item active" aria-current="page">
							{{ data.name }}
						</li>
					</ol>
				</nav>
				<h2 class="breadcrumb-title">{{ data.name }}</h2>
			</v-container>
		</div>
		<div class="main-wrapper">
			<div class="content">
				<v-container fluid>
					<v-row>
						<v-col cols="12" sm="12" md="7" lg="8" xl="9">
							<div class="card">
								<div class="card-body">
									<div class="doctor-widget">
										<div class="doc-info-left">
											<div class="doctor-img" v-if="!isEmpty(data)">
												<client-only>
													<img
														v-bind:key="index"
														v-for="(image, index) in images"
														v-bind:src="img_url + image.img_url"
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
																v-if="!isEmpty(criterias)"
															>
																<option
																	v-if="criterias.length <= 0"
																	:value="null"
																>
																	Ölçüt Seçiniz.
																</option>
																<client-only>
																	<option
																		v-bind:value="criteria.title"
																		v-bind:key="index"
																		v-bind:data-type="criteria.type"
																		v-bind:data-value="criteria.value"
																		v-for="(criteria, index) in criterias"
																		:selected="criteria.title === 'Gram'"
																	>
																		{{ criteria.title }}
																	</option>
																</client-only>
															</select>
															<select
																v-on:change="setCriteriaValue"
																id="criteriaValue"
																class="form-control rounded-0"
																v-else-if="
																	criterias == null &&
																		criterias == undefined &&
																		criterias == ''
																"
															>
																<option value="0">Ölçüt Seçiniz</option>
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
																v-if="!isEmpty(values)"
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
							<div class="profile-sidebar">
								<div class="widget-profile pro-widget-content border-bottom-0">
									<div class="profile-info-widget">
										<div class="profile-det-info">
											<h3 class="text-left">BESİN DEĞERLERİ</h3>
											<hr />
										</div>
									</div>
								</div>
								<div class="dashboard-widget">
									<div class="table-responsive">
										<table
											class="table table-striped table-hover table-borderless"
										>
											<thead>
												<tr>
													<td class="text-center"></td>
													<td class="text-center">100 Gram</td>
													<td class="text-center">
														{{ unit }} {{ criteriaName }}
													</td>
												</tr>
											</thead>
											<tbody>
												<client-only>
													<tr
														v-for="(value, index) in HundredData"
														v-bind:key="index"
														v-show="showName.includes(value.title)"
													>
														<td class="text-left">
															{{ value.title }} ({{ value.type }})
														</td>
														<td class="text-center">{{ value.value }}</td>
														<td class="text-center">
															{{ fordata[index].value }}
														</td>
													</tr>
												</client-only>
											</tbody>
											<tfoot>
												<tr>
													<td colspan="3">
														<v-autocomplete
															v-model="showName"
															:items="fordata"
															chips
															label="Göstermek İstediğiniz Bileşenleri Seçin"
															item-text="title"
															item-value="title"
															multiple
														>
															<template v-slot:prepend-item>
																<v-list-item ripple @click="toggle">
																	<v-list-item-action>
																		<v-icon
																			:color="
																				!isEmpty(showName)
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
															<template v-slot:selection="data">
																<v-chip
																	v-bind="data.attrs"
																	:input-value="data.selected"
																	close
																	@click="data.select"
																	@click:close="remove(data.item)"
																>
																	{{ data.item.title }}
																</v-chip>
															</template>
															<template v-slot:item="data">
																<template>
																	<v-list-item-content>
																		<v-list-item-title
																			v-html="data.item.title"
																		></v-list-item-title>
																	</v-list-item-content>
																</template>
															</template>
														</v-autocomplete>
													</td>
												</tr>
											</tfoot>
										</table>
									</div>
								</div>
							</div>
						</v-col>
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
		mounted() {
			this.HundredData = this.values;
			this.criteriaLimit(this.data);
		},
		computed: {
			img_url() {
				return process.env.apiPublicUrl;
			},
			likesAllFruit() {
				return (
					!this.isEmpty(this.showName) &&
					!this.isEmpty(this.fordata) &&
					this.showName.length === this.fordata.length
				);
			},
			likesSomeFruit() {
				return !this.isEmpty(this.showName) && !this.likesAllFruit;
			},
			icon() {
				if (this.likesAllFruit) return "mdi-close-box";
				if (this.likesSomeFruit) return "mdi-minus-box";
				return "mdi-checkbox-blank-outline";
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
			toggle() {
				this.$nextTick(() => {
					if (this.likesAllFruit) {
						this.showName = [];
					} else {
						this.showName = [];
						this.fordata.forEach((el, index) => {
							this.showName.push(el.title);
						});
					}
				});
			},
			criteriaLimit: function(data) {
				this.showName = [];
				this.showValue = [];
				this.showType = [];
				this.hideName = [];
				this.hideValue = [];
				this.hideType = [];
				if (!this.isEmpty(data.vitaminName)) {
					let durum = 0;
					for (let i = 0; i <= data.vitaminName.length - 1; i++) {
						durum = 0;
						for (let j = 0; j <= this.excel.length; j++) {
							if (data.vitaminName[i] === this.excel[j]) {
								durum = 1;
							}
						}
						if (durum === 1) {
							this.showName.push(data.vitaminName[i]);
							this.showValue.push(data.vitaminValue[i]);
							this.showType.push(data.vitaminType[i]);
						} else {
							this.hideName.push(data.vitaminName[i]);
							this.hideValue.push(data.vitaminValue[i]);
							this.hideType.push(data.vitaminType[i]);
						}
					}
				}
			},
			setCriteriaValue: function(event) {
				event.preventDefault();
				event.stopImmediatePropagation();
				if (event.target.options.selectedIndex > -1) {
					const theTarget =
						event.target.options[event.target.options.selectedIndex].dataset;
					this.type = theTarget.type;
					this.criteriaValue = theTarget.value;
					this.criteriaName =
						event.target.options[event.target.selectedIndex].value;
				}
				this.changeValue(event);
			},
			changeValue: function(event) {
				event.preventDefault();
				event.stopImmediatePropagation();
				if (this.values.length > 0) {
					for (let i = 0; i < this.values.length; i++) {
						this.fordata[i].value =
							(this.values[i].value / 100) *
							((this.unit <= 1 ? (this.unit = 1) : this.unit) *
								this.criteriaValue);
						if (
							this.isEmpty(this.fordata[i].value) ||
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
				HundredData: [],
				criteriaValue: 1,
				criteriaName: "Gram",
				value: null,
				unit: 100,
				type: null,
				excel: [
					"ENERJİ",
					"KARBONHİDRAT",
					"PROTEİN",
					"YAĞ",
					"LİF",
					"KOLESTROL",
					"POTASYUM",
					"SODYUM",
					"DEMİR",
					"KALSİYUM"
				],
				showName: [],
				showValue: [],
				showType: [],
				hideName: [],
				hideValue: [],
				hideType: [],
				component: null
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
