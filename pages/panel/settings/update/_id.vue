<template>
	<div class="page-wrapper">
		<v-container fluid class="content">
			<div class="page-header">
				<h3 class="page-title">Ayarlar</h3>
				<ul class="breadcrumb">
					<li class="breadcrumb-item">
						<nuxt-link to="/panel">Anasayfa</nuxt-link>
					</li>
					<li class="breadcrumb-item active">Ayarlar</li>
				</ul>
			</div>

			<v-card tile>
				<v-card-text>
					<ValidationObserver v-slot="{ handleSubmit }">
						<form
							@submit.prevent="handleSubmit(editSettings)"
							ref="settingsForm"
							enctype="multipart/form-data"
						>
							<v-tabs
								v-model="tab"
								background-color="primary"
								dark
								fixed-tabs
								show-arrows
							>
								<v-tab v-for="item in tabs" :key="item.tab">
									{{ item.tab }}
								</v-tab>
							</v-tabs>
							<v-tabs-items v-model="tab">
								<v-tab-item eager>
									<ValidationProvider
										name="Firma Adı"
										rules="required"
										v-slot="{ errors }"
									>
										<div class="form-group">
											<label for="company_name">Firma Adı</label>
											<input
												id="company_name"
												type="text"
												class="form-control"
												name="company_name"
												v-model="data.company_name"
											/>
											<small class="font-weight-bold text-danger">{{
												errors[0]
											}}</small>
										</div>
									</ValidationProvider>
									<v-row>
										<v-col cols="12" sm="12" md="3" lg="3" xl="3">
											<img
												v-bind:src="img_url + data.logo"
												v-bind:alt="data.company_name"
											/>
										</v-col>
										<v-col cols="12" sm="12" md="9" lg="9" xl="9">
											<div class="form-group">
												<label>Website Logosu</label>
												<input
													type="file"
													id="logo"
													ref="logo"
													name="logo"
													class="form-control"
												/>
											</div>
										</v-col>
									</v-row>
									<v-row>
										<v-col cols="12" sm="12" md="3" lg="3" xl="3">
											<img
												v-bind:src="img_url + data.favicon"
												v-bind:alt="data.company_name"
											/>
										</v-col>
										<v-col cols="12" sm="12" md="9" lg="9" xl="9">
											<div class="form-group mb-0">
												<label>Favicon</label>
												<input
													type="file"
													id="favicon"
													ref="favicon"
													name="favicon"
													class="form-control"
												/>
											</div>
										</v-col>
									</v-row>
								</v-tab-item>
								<v-tab-item eager>
									<ValidationProvider
										name="Hakkımızda"
										rules=""
										v-slot="{ errors }"
									>
										<div class="form-group">
											<label for="aboutUs">Hakkımızda</label>

											<editor
												name="aboutUs"
												id="aboutUs"
												v-model="data.aboutUs"
												api-key="4k2d9sks5ilhim6ju45ur7arp4pgn7o4u4asffie8cxttyu8"
												:init="{
													height: 300,
													plugins: [
														'print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons'
													],
													toolbar:
														'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl',
													entity_encoding: 'raw',
													forced_root_block: '',
													paste_auto_cleanup_on_paste: true,
													language: 'tr_TR', // select language
													language_url:
														'https://cdn.jsdelivr.net/npm/tinymce-lang/langs/tr_TR.js',
													branding: false,
													image_advtab: true,
													mobile: {
														theme: 'silver'
													},
													setup: function(editor) {
														editor.on('change', function() {
															editor.save();
														});
													},
													convert_urls: false
												}"
											/>
											<small class="font-weight-bold text-danger">{{
												errors[0]
											}}</small>
										</div>
									</ValidationProvider>
									<ValidationProvider
										name="Hakkımızda"
										rules=""
										v-slot="{ errors }"
									>
										<div class="form-group">
											<label for="mission">Misyonumuz</label>
											<editor
												name="mission"
												id="mission"
												v-model="data.mission"
												api-key="4k2d9sks5ilhim6ju45ur7arp4pgn7o4u4asffie8cxttyu8"
												:init="{
													height: 300,
													plugins: [
														'print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons'
													],
													toolbar:
														'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl',
													entity_encoding: 'raw',
													forced_root_block: '',
													paste_auto_cleanup_on_paste: true,
													language: 'tr_TR', // select language
													language_url:
														'https://cdn.jsdelivr.net/npm/tinymce-lang/langs/tr_TR.js',
													branding: false,
													image_advtab: true,
													mobile: {
														theme: 'silver'
													},
													setup: function(editor) {
														editor.on('change', function() {
															editor.save();
														});
													},
													convert_urls: false
												}"
											/>
											<small class="font-weight-bold text-danger">{{
												errors[0]
											}}</small>
										</div>
									</ValidationProvider>
									<ValidationProvider
										name="Vizyonumuz"
										rules=""
										v-slot="{ errors }"
									>
										<div class="form-group">
											<label for="vision">Vizyonumuz</label>
											<editor
												name="vision"
												id="vision"
												v-model="data.vision"
												api-key="4k2d9sks5ilhim6ju45ur7arp4pgn7o4u4asffie8cxttyu8"
												:init="{
													height: 300,
													plugins: [
														'print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons'
													],
													toolbar:
														'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl',
													entity_encoding: 'raw',
													forced_root_block: '',
													paste_auto_cleanup_on_paste: true,
													language: 'tr_TR', // select language
													language_url:
														'https://cdn.jsdelivr.net/npm/tinymce-lang/langs/tr_TR.js',
													branding: false,
													image_advtab: true,
													mobile: {
														theme: 'silver'
													},
													setup: function(editor) {
														editor.on('change', function() {
															editor.save();
														});
													},
													convert_urls: false
												}"
											/>
											<small class="font-weight-bold text-danger">{{
												errors[0]
											}}</small>
										</div>
									</ValidationProvider>
								</v-tab-item>
								<v-tab-item eager>
									<ValidationProvider
										name="Telefon"
										rules="required"
										v-slot="{ errors }"
									>
										<div class="form-group">
											<label for="phone">Telefon</label>
											<input
												id="phone"
												type="text"
												class="form-control"
												name="phone"
												v-model="data.phone"
											/>
											<small class="font-weight-bold text-danger">{{
												errors[0]
											}}</small>
										</div>
									</ValidationProvider>
									<ValidationProvider
										name="Email"
										rules="required|email"
										v-slot="{ errors }"
									>
										<div class="form-group">
											<label for="email">Email</label>
											<input
												id="email"
												type="text"
												class="form-control"
												name="email"
												v-model="data.email"
											/>
											<small class="font-weight-bold text-danger">{{
												errors[0]
											}}</small>
										</div>
									</ValidationProvider>
									<ValidationProvider
										name="Adres"
										rules="required"
										v-slot="{ errors }"
									>
										<div class="form-group">
											<label for="address">Adres</label>
											<editor
												id="address"
												name="address"
												v-model="data.address"
												api-key="4k2d9sks5ilhim6ju45ur7arp4pgn7o4u4asffie8cxttyu8"
												:init="{
													height: 300,
													plugins: [
														'print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons'
													],
													toolbar:
														'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl',
													entity_encoding: 'raw',
													forced_root_block: '',
													paste_auto_cleanup_on_paste: true,
													language: 'tr_TR', // select language
													language_url:
														'https://cdn.jsdelivr.net/npm/tinymce-lang/langs/tr_TR.js',
													branding: false,
													image_advtab: true,
													mobile: {
														theme: 'silver'
													},
													setup: function(editor) {
														editor.on('change', function() {
															editor.save();
														});
													},
													convert_urls: false
												}"
											/>
											<small class="font-weight-bold text-danger">{{
												errors[0]
											}}</small>
										</div>
									</ValidationProvider>
								</v-tab-item>
								<v-tab-item eager>
									<ValidationProvider
										name="Facebook"
										rules=""
										v-slot="{ errors }"
									>
										<div class="form-group">
											<label for="facebook">Facebook</label>
											<input
												id="facebook"
												type="text"
												class="form-control"
												name="facebook"
												v-model="data.facebook"
											/>
											<small class="font-weight-bold text-danger">{{
												errors[0]
											}}</small>
										</div>
									</ValidationProvider>
									<ValidationProvider
										name="Facebook"
										rules=""
										v-slot="{ errors }"
									>
										<div class="form-group">
											<label for="twitter">Twitter</label>
											<input
												id="twitter"
												type="text"
												class="form-control"
												name="twitter"
												v-model="data.twitter"
											/>
											<small class="font-weight-bold text-danger">{{
												errors[0]
											}}</small>
										</div>
									</ValidationProvider>
									<ValidationProvider
										name="Instagram"
										rules=""
										v-slot="{ errors }"
									>
										<div class="form-group">
											<label for="instagram">Instagram</label>
											<input
												id="instagram"
												type="text"
												class="form-control"
												name="instagram"
												v-model="data.instagram"
											/>
											<small class="font-weight-bold text-danger">{{
												errors[0]
											}}</small>
										</div>
									</ValidationProvider>
									<ValidationProvider
										name="Linkedin"
										rules=""
										v-slot="{ errors }"
									>
										<div class="form-group">
											<label for="linkedin">Linkedin</label>
											<input
												id="linkedin"
												type="text"
												class="form-control"
												name="linkedin"
												v-model="data.linkedin"
											/>
											<small class="font-weight-bold text-danger">{{
												errors[0]
											}}</small>
										</div>
									</ValidationProvider>
									<ValidationProvider
										name="Youtube"
										rules=""
										v-slot="{ errors }"
									>
										<div class="form-group">
											<label for="youtube">Youtube</label>
											<input
												id="youtube"
												type="text"
												class="form-control"
												name="youtube"
												v-model="data.youtube"
											/>
											<small class="font-weight-bold text-danger">{{
												errors[0]
											}}</small>
										</div>
									</ValidationProvider>
								</v-tab-item>
								<v-tab-item eager>
									<ValidationProvider
										name="Meta Keywords"
										rules=""
										v-slot="{ errors }"
									>
										<div class="form-group">
											<label for="metaKeywords">Meta Keywords</label>
											<textarea
												name="metaKeywords"
												id="metaKeywords"
												class="form-control"
												v-model="data.metaKeywords"
											></textarea>
											<small class="font-weight-bold text-danger">{{
												errors[0]
											}}</small>
										</div>
									</ValidationProvider>
									<ValidationProvider
										name="Meta Description"
										rules=""
										v-slot="{ errors }"
									>
										<div class="form-group">
											<label for="metaDescription">Meta Description</label>
											<textarea
												name="metaDescription"
												id="metaDescription"
												class="form-control"
												v-model="data.metaDescription"
											></textarea>
											<small class="font-weight-bold text-danger">{{
												errors[0]
											}}</small>
										</div>
									</ValidationProvider>
								</v-tab-item>
								<v-tab-item eager>
									<ValidationProvider
										name="Google Analytics"
										rules=""
										v-slot="{ errors }"
									>
										<div class="form-group">
											<label for="analytics">Google Analytics</label>
											<textarea
												name="analytics"
												id="analytics"
												class="form-control"
												v-model="data.analytics"
											></textarea>
											<small class="font-weight-bold text-danger">{{
												errors[0]
											}}</small>
										</div>
									</ValidationProvider>
									<ValidationProvider
										name="Yandex Metrica"
										rules=""
										v-slot="{ errors }"
									>
										<div class="form-group">
											<label for="metrica">Yandex Metrica</label>
											<textarea
												name="metrica"
												id="metrica"
												class="form-control"
												v-model="data.metrica"
											></textarea>
											<small class="font-weight-bold text-danger">{{
												errors[0]
											}}</small>
										</div>
									</ValidationProvider>
								</v-tab-item>
								<v-tab-item eager>
									<ValidationProvider
										name="Canlı Destek"
										rules=""
										v-slot="{ errors }"
									>
										<div class="form-group">
											<label for="liveSupport">Canlı Destek</label>
											<textarea
												name="liveSupport"
												id="liveSupport"
												class="form-control"
												v-model="data.liveSupport"
											></textarea>
											<small class="font-weight-bold text-danger">{{
												errors[0]
											}}</small>
										</div>
									</ValidationProvider>
								</v-tab-item>
							</v-tabs-items>
							<div class="form-group">
								<v-btn color="#1b5a90" dark type="submit">Gönder</v-btn>
							</div>
						</form>
					</ValidationObserver>
				</v-card-text>
			</v-card>
		</v-container>
	</div>
</template>
<script>
	import { ValidationObserver, ValidationProvider } from "vee-validate";
	import Editor from "@tinymce/tinymce-vue";
	export default {
		middleware: ["admin"],
		layout: "admin",
		components: {
			ValidationObserver,
			ValidationProvider,
			editor: Editor
		},
		computed: {
			img_url() {
				return process.env.apiPublicUrl;
			}
		},
		mounted() {},
		data() {
			return {
				tab: null,
				tabs: [
					{ tab: "Genel Ayarlar" },
					{ tab: "Hakkımızda" },
					{ tab: "İletişim" },
					{ tab: "Sosyal Medya" },
					{ tab: "Meta" },
					{ tab: "Analytics" },
					{ tab: "Canlı Destek" }
				],
				data: {
					company_name: null,
					logo: null,
					favicon: null,
					aboutUs: null,
					mission: null,
					vision: null,
					phone: null,
					email: null,
					address: null,
					map: null,
					facebook: null,
					twitter: null,
					instagram: null,
					linkedin: null,
					youtube: null,
					medium: null,
					pinterest: null,
					metaKeywords: null,
					metaDescription: null,
					analytics: null,
					metrica: null,
					liveSupport: null
				},
				userData: !this.isEmpty(this.$auth.$storage.getUniversal("user"))
					? this.$auth.$storage.getUniversal("user")
					: null
			};
		},
		validate({ params }) {
			return params.id !== null ? params.id : null;
		},
		async asyncData({ params, error, $axios, $auth }) {
			try {
				const { data } = await $axios.get(
					process.env.apiBaseUrl + "panel/settings/update/" + params.id
				);

				return data;
			} catch (e) {
				error({ message: "Site Ayarı Bulunamadı.", statusCode: 404 });
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
			editSettings() {
				let formData = new FormData(this.$refs.settingsForm);
				this.$axios
					.post(
						process.env.apiBaseUrl +
							"panel/settings/update/" +
							this.data._id.$oid,
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
								//this.$router.go("/panel/settings");
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