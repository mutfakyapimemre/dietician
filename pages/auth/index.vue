<template>
	<div
		class="login-wrapper align-middle align-items-center text-center justify-content-center m-auto vh-100 mx-auto w-100 d-flex"
	>
		<div class="container">
			<div class="loginbox">
				<div class="login-left">
					<img class="img-fluid" src="/img/logo.png" alt="Logo" />
				</div>
				<div class="login-right bg-white">
					<div class="login-right-wrap">
						<h1>Klinik Diyetisyen</h1>
						<p class="account-subtitle">Yönetim Paneline Giriş Yap</p>

						<ValidationObserver v-slot="{ handleSubmit }">
							<form
								@submit.prevent="handleSubmit(onSubmit)"
								ref="userLogin"
								enctype="multipart/form-data"
							>
								<div class="form-group form-focus">
									<ValidationProvider
										name="email"
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
										name="password"
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
								<v-btn color="primary" type="submit">
									Giriş Yap
								</v-btn>
							</form>
						</ValidationObserver>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import { ValidationObserver, ValidationProvider } from "vee-validate";
	export default {
		layout: "adminlogin",
		middleware: ["notadmin"],
		components: {
			ValidationObserver,
			ValidationProvider
		},
		mounted() {
			this.$nextTick(() => {
				this.$nuxt.$loading.start();
				setTimeout(() => this.$nuxt.$loading.finish(), 1000);
			});
		},
		data() {
			return {
				isUser: false,
				isAdmin: true,
				email: null,
				password: null
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
			async onSubmit() {
				let formData = new FormData(this.$refs.userLogin);
				formData.append("isUser", this.isUser);
				formData.append("isAdmin", this.isAdmin);
				try {
					let response = await this.$auth.loginWith("admin", {
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
						setTimeout(event => {
							if (!this.isEmpty(this.$route.query.url)) {
								window.location.href = decodeURIComponent(this.$route.query.url);
							} else {
								this.$router.go("/panel");
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
			}
		}
	};
</script>
