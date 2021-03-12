<template>
	<div class="header">
		<nav class="navbar navbar-expand-lg header-nav fixed-top">
			<div class="navbar-header">
				<a id="mobile_btn" href="javascript:void(0);">
					<span class="bar-icon">
						<span></span>
						<span></span>
						<span></span>
					</span>
				</a>
				<nuxt-link to="/" class="navbar-brand logo"
					><img
						v-if="!isEmpty(settings)"
						v-bind:src="img_url + settings.settings.logo"
						class="img-fluid"
						v-bind:alt="settings.settings.title"
					/>
				</nuxt-link>
			</div>
			<div class="main-menu-wrapper">
				<div class="menu-header">
					<nuxt-link to="/" class="menu-logo"
						><img src="/img/logo.png" class="img-fluid" alt="Logo" />
					</nuxt-link>
					<a id="menu_close" class="menu-close" href="javascript:void(0);">
						<i class="fa fa-times"></i>
					</a>
				</div>
				<ul class="main-nav">
					<li>
						<nuxt-link to="/">Anasayfa</nuxt-link>
					</li>
					<li>
						<nuxt-link to="/dieticians">Diyetisyenler</nuxt-link>
					</li>
					<li>
						<nuxt-link to="/calorie">Kaç Kalori?</nuxt-link>
					</li>
					<li>
						<nuxt-link to="/recipe-categories">Yemek Tarifleri</nuxt-link>
					</li>
					<li>
						<nuxt-link to="/criterias">Ölçütler</nuxt-link>
					</li>
					<li>
						<nuxt-link to="/exercises">Egzersiz</nuxt-link>
					</li>
				</ul>
			</div>
			<ul class="nav header-navbar-rht">
				<li class="nav-item contact-item">
					<div class="header-contact-img">
						<i class="far fa-hospital"></i>
					</div>
					<div class="header-contact-detail">
						<p class="contact-header">İletişim</p>
						<p class="contact-info-header">+1 315 369 5943</p>
					</div>
				</li>

				<!-- User Menu -->
				<li
					class="nav-item dropdown has-arrow logged-item"
					v-if="!isEmpty(userData)"
				>
					<a
						href="javascript:void(0)"
						class="dropdown-toggle nav-link"
						data-toggle="dropdown"
						aria-expanded="false"
					>
						<span class="user-img">
							<img
								v-bind:src="
									img_url +
										'/public/storage/' +
										(!isEmpty(userData) && userData.status === 'dietician'
											? userData.profile_photo
											: userData.img_url)
								"
								width="55"
								height="55"
								class="rounded-circle my-auto py-auto"
								v-bind:alt="userData.name"
							/>
						</span>
					</a>
					<div class="dropdown-menu dropdown-menu-right">
						<div class="user-header">
							<div class="avatar avatar-sm">
								<img
									v-bind:src="
										img_url +
											'/public/storage/' +
											(!isEmpty(userData) && userData.status === 'dietician'
												? userData.profile_photo
												: userData.img_url)
									"
									width="55"
									height="55"
									class="rounded-circle my-auto py-auto"
									v-bind:alt="userData.name"
								/>
							</div>
							<div class="user-text">
								<h6>{{ userData.name }}</h6>
								<p
									class="text-muted mb-0"
									v-show="!isEmpty(userData) && userData.department"
								>
									{{ userData.department }}
								</p>
							</div>
						</div>
						<nuxt-link to="/profile" class="dropdown-item">Profil</nuxt-link>
						<nuxt-link
							class="dropdown-item"
							to="/dietician-panel"
							v-show="!isEmpty(userData) && userData.status === 'dietician'"
							>Diyetisyen Paneli</nuxt-link
						>
						<nuxt-link
							class="dropdown-item"
							to="/panel"
							v-show="!isEmpty(userData) && userData.status === 'admin'"
							>Yönetim Paneli</nuxt-link
						>
						<a
							href="javascript:void(0)"
							class="dropdown-item"
							@click.prevent="logout"
							>Çıkış Yap</a
						>
					</div>
				</li>
				<li class="nav-item dropdown has-arrow logged-item" v-else>
					<v-btn color="primary" to="/login">Giriş Yap / Kayıt Ol</v-btn>
				</li>
				<!-- /User Menu -->
			</ul>
		</nav>
	</div>
</template>

<script>
	import { mapState } from "vuex";
	export default {
		computed: {
			img_url() {
				return process.env.apiPublicUrl;
			},
			...mapState(["settings"])
		},
		mounted() {
			console.log(this.settings);
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
			logout() {
				this.$auth.logout();
				this.$auth.$storage.removeUniversal("user");
				this.$auth.strategy.refreshToken.reset();
				this.$izitoast.success({
					title: "Başarılı!",
					message: "Başarıyla Çıkış Yaptınız Yönlendiriliyorsunuz.",
					position: "topCenter"
				});
				setTimeout(() => {
					this.$router.go(decodeURIComponent("/login"));
				}, 2000);
			}
		},
		data() {
			return {
				userData: !this.isEmpty(this.$auth.$storage.getUniversal("user"))
					? this.$auth.$storage.getUniversal("user")
					: null
			};
		}
	};
</script>
