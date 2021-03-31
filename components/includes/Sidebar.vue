<template>
	<div class="profile-sidebar">
		<div class="widget-profile pro-widget-content">
			<div class="profile-info-widget">
				<nuxt-link
					to="/profile"
					class="text-center justify-content-center mx-auto px-auto d-flex"
				>
					<img
						v-if="!isEmpty(userData.img_url)"
						v-bind:src="img_url + userData.img_url"
						v-bind:alt="userData.name"
					/>
					<span v-else class="mb-3"><i class="fa fa-user fa-5x"></i></span>
				</nuxt-link>
				<div class="profile-det-info">
					<h3>{{ userData.name }}</h3>

					<div class="patient-details">
						<h5 class="mb-0">
							<i class="fa fa-map-marker-alt"></i> {{ userData.city }},
							{{ userData.town }}
						</h5>
					</div>
				</div>
			</div>
		</div>
		<div class="dashboard-widget">
			<nav class="dashboard-menu">
				<ul>
					<nuxt-link to="/profile" tag="li" exact-active-class="active">
						<a>
							<i class="fa fa-user-cog"></i>
							<span>Kayıt Bilgileri</span>
						</a>
					</nuxt-link>
					<nuxt-link to="/profile/diet-list" tag="li" active-class="active">
						<a>
							<i class="fa fa-calendar-check"></i>
							<span>Diyet Listesi</span>
						</a>
					</nuxt-link>
					<nuxt-link to="/profile/my-dietician" tag="li" active-class="active">
						<a>
							<i class="fa fa-user-md"></i>
							<span>Diyetisyenim</span>
						</a>
					</nuxt-link>
					<nuxt-link
						to="/profile/liked-foods-list"
						tag="li"
						active-class="active"
					>
						<a>
							<i class="fa fa-drumstick-bite"></i>
							<span>Sevdiğim Besinler / Yemekler</span>
						</a>
					</nuxt-link>
					<nuxt-link
						to="/profile/unliked-foods-list"
						tag="li"
						active-class="active"
					>
						<a>
							<i class="fa fa-stroopwafel"></i>
							<span>Sevmediğim Besinler / Yemekler</span>
						</a>
					</nuxt-link>
					<nuxt-link
						to="/profile/allergen-foods-list"
						tag="li"
						active-class="active"
					>
						<a>
							<i class="fa fa-cloud-meatball"></i>
							<span>Alerjen Olduğum Besinler / Yemekler</span>
						</a>
					</nuxt-link>
					<nuxt-link to="/profile/messages" tag="li" active-class="active">
						<a>
							<i class="fa fa-comments"></i>
							<span>Mesajlar</span>
							<small class="unread-msg">23</small>
						</a>
					</nuxt-link>
					<nuxt-link to="/profile/social-media" tag="li" active-class="active">
						<a>
							<i class="fa fa-share-alt"></i>
							<span>Sosyal Medya</span>
						</a>
					</nuxt-link>
					<nuxt-link
						to="/profile/password-update"
						tag="li"
						active-class="active"
					>
						<a>
							<i class="fa fa-lock"></i>
							<span>Şifre Güncelle</span>
						</a>
					</nuxt-link>
					<li>
						<a href="javascript:void(0)" @click.prevent="logout">
							<i class="fa fa-sign-out-alt"></i>
							<span>Çıkış Yap</span>
						</a>
					</li>
				</ul>
			</nav>
		</div>
	</div>
</template>

<script>
	export default {
		computed: {
			img_url() {
				return process.env.apiPublicUrl;
			}
		},
		props: ["settings"],
		data() {
			return {
				userData: !this.isEmpty(this.$auth.$storage.getUniversal("user"))
					? this.$auth.$storage.getUniversal("user")
					: null
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
					this.$router.go("/login");
				}, 2000);
			}
		}
	};
</script>
