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
							Kullanıcı Girişi
						</li>
					</ol>
				</nav>
				<h2 class="breadcrumb-title">Kullanıcı Girişi</h2>
			</v-container>
		</div>
		<div class="content account-page" style="padding: 50px 0">
			<v-container fluid>
				<div class="account-content">
					<v-row class="align-items-center justify-content-center">
						<v-col cols="8" sm="8" md="4" lg="4" xl="4">
							<img
								src="/img/login-banner.png"
								class="img-fluid"
								alt="Diyetisyen Klinik"
							/>
						</v-col>
						<v-col cols="12" sm="12" md="6" lg="6" xl="6" class="login-right">
							<v-tabs v-model="tab" background-color="primary" dark fixed-tabs>
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
													<div class="d-flex flex-wrap">
														<v-btn color="primary" type="submit">
															Giriş Yap
														</v-btn>
														<div class="ml-auto">
															<v-btn to="/dietician-login" color="warning"
																>Diyetisyen Girişi</v-btn
															>
															<v-btn
																to="/forgot-password"
																color="error"
																class="ml-1"
																>Şifremi Unuttum</v-btn
															>
														</div>
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
											<div class="form-group form-focus">
												<ValidationProvider
													name="Adınız ve Soyadınız"
													rules="required"
													v-slot="{ errors }"
												>
													<v-text-field
														label="Adınız ve Soyadınız"
														hide-details="auto"
														type="text"
														name="name"
														v-model="name"
													></v-text-field>
													<small class="font-weight-bold text-danger">{{
														errors[0]
													}}</small>
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
														type="email"
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
													name="Telefon Numaranız"
													rules="required|phone"
													v-slot="{ errors }"
												>
													<v-text-field
														label="Telefon Numaranız"
														hide-details="auto"
														type="text"
														name="phone"
														v-model="phone"
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
											<div class="form-group form-focus">
												<ValidationProvider
													name="Tekrar Şifreniz"
													rules="required"
													v-slot="{ errors }"
												>
													<v-text-field
														label="Şifreniz"
														hide-details="auto"
														type="password"
														name="password_confirmation"
														v-model="password_confirmation"
													></v-text-field>
													<small class="font-weight-bold text-danger">{{
														errors[0]
													}}</small>
												</ValidationProvider>
											</div>
											<div class="d-flex">
												<v-btn color="primary" type="submit">
													Kayıt Ol
												</v-btn>
												<v-btn
													to="/dietician-login"
													color="warning"
													class="ml-auto"
													>Diyetisyen Kaydı</v-btn
												>
											</div>
										</form>
									</ValidationObserver>
								</v-tab-item>
							</v-tabs-items>
						</v-col>
					</v-row>
				</div>
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
		data() {
			return {
				tab: null,
				tabs: [{ tab: "Giriş Yap" }, { tab: "Kayıt Ol" }],
				isUser: true,
				isDietician: false,
				email: null,
				password: null,
				password_confirmation: null,
				name: null,
				phone: null
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
			/**
			 * User Login Method
			 */
			async onLogin() {
				let formData = new FormData(this.$refs.userLogin);
				formData.append("isUser", this.isUser);
				formData.append("isDietician", this.isDietician);
				try {
					let response = await this.$auth.loginWith("user", {
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
				this.$store.dispatch("RegisterUser", formData).then(response => {
					if (response.success) {
						this.$izitoast.success({
							title: response.title,
							message: response.msg,
							position: "topCenter"
						});
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
