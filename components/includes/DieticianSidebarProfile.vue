<template>
	<div class="profile-sidebar">
		<div
			class="widget-profile pro-widget-content text-center justify-content-center"
		>
			<div class="profile-info-widget text-center justify-content-center">
				<nuxt-link to="/profile" class="booking-doc-img">
					<img
						v-bind:src="img_url + '/public/storage/' + userData.profile_photo"
						class="img-fluid text-center justify-content-center"
						v-bind:alt="userData.name"
					/>
				</nuxt-link>
				<div class="profile-det-info">
					<h3>{{ userData.name }}</h3>

					<div class="clinic-details text-center justify-content-center">
						<h5 class="mb-2">
							<i class="fa fa-map-marker-alt"></i> {{ userData.city }},
							{{ userData.town }}
						</h5>

						<h5 class="mb-2">
							<i class="fa fa-hospital"></i> {{ userData.company_city }},
							{{ userData.company_town }}
						</h5>

						<h5 class="mb-2 font-weight-bold">Klinik'ten Görüntüler</h5>
						<ul
							class="clinic-gallery text-center justify-content-center px-0"
							v-if="
								!isEmpty(userData.clinic_photos) &&
									userData.clinic_photos.length > 0
							"
						>
							<client-only>
								<li
									v-bind:key="index"
									v-for="(item, index) in userData.clinic_photos"
								>
									<a
										v-if="index <= 3"
										v-bind:href="img_url + '/public/storage/' + item.img_url"
										data-fancybox="gallery"
									>
										<img
											v-if="index <= 3"
											v-bind:src="img_url + '/public/storage/' + item.img_url"
											alt="Klinik'ten Görüntüler"
										/>
									</a>
								</li>
							</client-only>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class="dashboard-widget">
			<nav class="dashboard-menu">
				<ul>
					<nuxt-link to="/profile" exact-active-class="active">
						<a>
							<i class="fa fa-user-cog"></i>
							<span>Kayıt Bilgileri</span>
						</a>
					</nuxt-link>
					<nuxt-link to="/profile/patient-list" active-class="active">
						<a>
							<i class="fa fa-calendar-check"></i>
							<span>Hasta Listesi</span>
						</a>
					</nuxt-link>
					<nuxt-link to="/profile/news-list" active-class="active">
						<a>
							<i class="fa fa-newspaper"></i>
							<span>Haberler</span>
						</a>
					</nuxt-link>
					<nuxt-link to="/profile/food-recipes-list" active-class="active">
						<a>
							<i class="fa fa-utensils"></i>
							<span>Yemek Tarifleri</span>
						</a>
					</nuxt-link>
					<nuxt-link to="/profile/messages" active-class="active">
						<a>
							<i class="fa fa-comments"></i>
							<span>Mesajlar</span>
							<small class="unread-msg">23</small>
						</a>
					</nuxt-link>
					<nuxt-link to="/profile/social-media" active-class="active">
						<a>
							<i class="fa fa-share-alt"></i>
							<span>Sosyal Medya</span>
						</a>
					</nuxt-link>
					<nuxt-link to="/profile/password-update" active-class="active">
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
	import Cookie from "js-cookie";
	import { Base64 } from "js-base64";
	export default {
		middleware: ["session-control", "guest"],
		layout: "default",
		computed: {
			img_url() {
				return process.env.apiPublicUrl;
			}
		},
		data() {
			return {
				data: {},
				userData: !this.isEmpty(Cookie.get("userData"))
					? JSON.parse(Base64.decode(Cookie.get("userData")))
					: !this.isEmpty(this.$store.getters.loggedInUser)
					? this.$store.getters.loggedInUser
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
				this.$store.dispatch("logout");
				this.$izitoast.success({
					title: "Başarılı!",
					message: "Başarıyla Çıkış Yaptınız Yönlendiriliyorsunuz.",
					position: "topCenter"
				});
				setTimeout(() => {
					this.$router.go(decodeURIComponent("/"));
				}, 2000);
			}
		}
	};
</script>
