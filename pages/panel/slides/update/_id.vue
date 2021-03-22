<template>
	<div class="main-wrapper">
		<div class="page-wrapper">
			<v-container fluid class="content">
				<div class="page-header">
					<h3 class="page-title">Slayt Düzenle</h3>
					<ul class="breadcrumb">
						<li class="breadcrumb-item">
							<nuxt-link to="/panel">Anasayfa</nuxt-link>
						</li>
						<li class="breadcrumb-item active">Slayt Düzenle</li>
					</ul>
				</div>

				<div class="card">
					<div class="card-header">
						<h4 class="card-title">Slayt Düzenle</h4>
					</div>
					<div class="card-body">
						<ValidationObserver v-slot="{ handleSubmit }">
							<form
								@submit.prevent="handleSubmit(editSlides)"
								ref="slidesForm"
								enctype="multipart/form-data"
							>
								<ValidationProvider
									name="Slayt Adı"
									rules="required"
									v-slot="{ errors }"
								>
									<div class="form-group">
										<label for="title">Slayt Adı</label>
										<input
											id="title"
											type="text"
											class="form-control"
											name="title"
											v-model="data.title"
										/>
										<small class="font-weight-bold text-danger">{{
											errors[0]
										}}</small>
									</div>
								</ValidationProvider>
								<ValidationProvider
									name="Slayt Açıklaması"
									rules="required"
									v-slot="{ errors }"
								>
									<div class="form-group">
										<label for="description">Slayt Açıklaması</label>
										<textarea
											name="description"
											id="description"
											class="form-control"
											cols="30"
											rows="10"
											v-model="data.description"
										></textarea>
										<small class="font-weight-bold text-danger">{{
											errors[0]
										}}</small>
									</div>
								</ValidationProvider>
								<v-row>
									<v-col cols="12" sm="12" md="3" lg="3" xl="3">
										<img
											v-bind:src="img_url + data.img_url"
											v-bind:alt="data.title"
											class="img-fluid"
										/>
									</v-col>
									<v-col cols="12" sm="12" md="9" lg="9" xl="9">
										<div class="form-group">
											<label for="img_url">Slayt Görseli</label>
											<input
												id="img_url"
												type="file"
												class="form-control"
												name="img_url"
												required
											/>
										</div>
									</v-col>
								</v-row>

								<button
									class="btn btn-outline-primary rounded-0 btn-lg"
									type="submit"
								>
									Slaytı Güncelle
								</button>
							</form>
						</ValidationObserver>
					</div>
				</div>
			</v-container>
		</div>
	</div>
</template>
<script>
	import { ValidationObserver, ValidationProvider } from "vee-validate";

	export default {
		middleware: ["admin"],
		layout: "admin",
		components: {
			ValidationObserver,
			ValidationProvider
		},
		data() {
			return {
				data: {},
				userData: !this.isEmpty(this.$auth.$storage.getUniversal("user"))
					? this.$auth.$storage.getUniversal("user")
					: null
			};
		},
		computed: {
			img_url() {
				return process.env.apiPublicUrl;
			}
		},
		validate({ params }) {
			return params.id !== null ? params.id : null;
		},
		async asyncData({ params, error, $axios }) {
			try {
				const { data } = await $axios.get(
					process.env.apiBaseUrl + "panel/sliders/update/" + params.id
				);
				return data;
			} catch (e) {
				error({ message: "Slayt Bilgisi Bulunamadı.", statusCode: 404 });
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
			editSlides() {
				let formData = new FormData(this.$refs.slidesForm);
				this.$axios
					.post(
						process.env.apiBaseUrl + "panel/sliders/update/" + this.data._id,
						formData,
						{
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
								"Content-Type":
									"multipart/form-data; boundary=" + formData._boundary,
								Authorization: "Bearer " + this.userData.api_token
							}
						}
					)
					.then(response => {
						if (response.data.success) {
							this.$izitoast.success({
								title: response.data.title,
								message: response.data.msg,
								position: "topCenter"
							});
							setTimeout(() => {
								this.$router.go(decodeURIComponent("/panel/slides"));
							}, 2000);
						} else {
							this.$izitoast.error({
								title: response.data.title,
								message: response.data.msg,
								position: "topCenter"
							});
						}
					});
			}
		}
	};
</script>
