<template>
	<div class="page-wrapper">
		<v-container class="content" fluid>
			<div class="page-header">
				<h3 class="page-title">Danışmanlarım</h3>
				<ul class="breadcrumb">
					<li class="breadcrumb-item">
						<nuxt-link to="/panel">Anasayfa</nuxt-link>
					</li>
					<li class="breadcrumb-item active">Danışmanlarım</li>
				</ul>
			</div>

			<div class="card">
				<div class="card-header d-flex">
					<h4 class="card-title justify-content-start my-auto py-auto">
						Danışman Ekle
					</h4>
					<v-btn
						to="/dietician-panel/consultants/new-consultant"
						class="justify-content-end ml-auto my-auto py-auto"
						color="primary"
						><i class="fa fa-plus"></i> Yeni Danışman Kaydet</v-btn
					>
				</div>
				<div class="card-body">
					<v-alert color="indigo" dark dense icon="mdi-information" prominent>
						<h3 class="headline">Bilgi</h3>
						<div>
							Danışman Kaydı Yapabilmeniz İçin Aşağıdaki Bilgileri Doldurup
							Danışmanınıza İstek Gönderebilirsiniz.
						</div>

						<v-divider class="my-4 info" style="opacity: 0.22"></v-divider>

						<div>
							Gönderdiğiniz İstek Danışmanınız Tarafından Kabul Edildikten Sonra
							E-Diyet, Egzersiz, Randevu Oluşturma Gibi İşlemler Yapılabilir.
						</div>
					</v-alert>
					<ValidationObserver v-slot="{ handleSubmit }">
						<form
							@submit.prevent="handleSubmit(saveConsultants)"
							ref="usersForm"
							enctype="multipart/form-data"
						>
							<v-text-field
								label="Danışmanın Kimlik Numarası"
								name="tc"
								v-model="consultant.tc"
								required
								counter="11"
							></v-text-field>
							<v-text-field
								label="Danışmanın Telefon Numarası"
								name="phone"
								v-model="consultant.phone"
								required
								counter="11"
							></v-text-field>
							<div class="form-group">
								<v-btn color="primary" type="submit">
									Danışmanı Bul ve Diyetisyen Bildirimi Gönder
								</v-btn>
							</div>
						</form>
					</ValidationObserver>
					<div class="profile-header" v-if="!isEmpty(data)">
						<v-row class="align-items-center">
							<v-col
								cols="12"
								sm="12"
								md="4"
								lg="4"
								xl="4"
								class="profile-image"
							>
								<a href="javascript:void(0)">
									<img
										v-bind:src="img_url + data.img_url"
										class="img-fluid"
										v-bind:alt="data.name"
									/>
								</a>
							</v-col>
							<v-col
								cols="12"
								sm="12"
								md="8"
								lg="8"
								xl="8"
								class="profile-user-info"
							>
								<h4 class="user-name mb-0">{{ data.name }}</h4>
								<h6 class="text-muted">{{ data.email }}</h6>
								<div class="user-Location">
									<i class="fa fa-map-marker"></i> {{ data.city }},
									{{ data.town }}
								</div>
								<div class="user-Location">
									<i class="fa fa-phone"></i>
									<a v-bind:href="'tel:' + data.phone">{{ data.phone }}</a>
								</div>
								<div class="user-Location">
									<i class="fa fa-envelope"></i>
									<a v-bind:href="'mailto:' + data.email">{{ data.email }}</a>
								</div>
								<div class="about-text">{{ data.about }}</div>
							</v-col>
						</v-row>
					</div>
				</div>
			</div>
		</v-container>
	</div>
</template>
<script>
	import { ValidationObserver, ValidationProvider } from "vee-validate";

	export default {
		middleware: ["dietician"],
		layout: "dietician",
		components: {
			ValidationObserver,
			ValidationProvider
		},
		data() {
			return {
				data: null,
				rules: [
					value => !!value || "Zorunludur.",
					value =>
						(value && value.length >= 3) || "Alanı Minimum 11 Karakter Olmalıdır"
				],
				consultant: { tc: null, phone: null },
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
			saveConsultants() {
				let formData = new FormData(this.$refs.usersForm);
				formData.append("dietician_id", this.userData._id);
				this.$axios
					.post(process.env.apiBaseUrl + "dietician/users/user-mail", formData, {
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
						},
						credentials: "same-origin"
					})
					.then(response => {
						if (response.data.success) {
							this.$izitoast.success({
								title: response.data.title,
								message: response.data.msg,
								position: "topCenter"
							});
							this.data = response.data.data;
							setTimeout(() => {
								this.$router.go(
									decodeURIComponent("/dietician-panel/consultants")
								);
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
