<template>
	<div class="header">
		<div class="header-left">
			<nuxt-link to="/panel">
				<img
					v-if="!isEmpty(settings)"
					v-bind:src="img_url + settings.settings.logo"
				/>
			</nuxt-link>
			<nuxt-link to="/panel" class="logo logo-small">
				<img
					v-if="!isEmpty(settings)"
					v-bind:src="img_url + settings.settings.favicon"
					v-bind:alt="settings.company_name"
					width="30"
					height="30"
				/>
			</nuxt-link>
		</div>

		<a href="javascript:void(0);" id="toggle_btn">
			<i class="fa fa-bars"></i>
		</a>

		<a class="mobile_btn" href="javascript:void(0)" id="mobile_btn">
			<i class="fa fa-bars"></i>
		</a>

		<ul class="nav user-menu">
			<li class="nav-item dropdown noti-dropdown">
				<a
					href="javascript:void(0)"
					class="dropdown-toggle nav-link"
					data-toggle="dropdown"
				>
					<i class="fa fa-bell"></i> <span class="badge badge-pill">3</span>
				</a>
				<div class="dropdown-menu notifications">
					<div class="topnav-dropdown-header">
						<span class="notification-title">Bildirimler</span>
						<a href="javascript:void(0)" class="clear-noti"> Tümünü Temizle </a>
					</div>
					<div class="noti-content">
						<ul class="notification-list">
							<li class="notification-message">
								<a href="javascript:void(0)">
									<div class="media">
										<span class="avatar avatar-sm">
											<img
												class="avatar-img rounded-circle"
												alt="User Image"
												src="/img/patients/patient3.jpg"
											/>
										</span>
										<div class="media-body">
											<p class="noti-details">
												<span class="noti-title">Carl Kelly</span> send a
												message <span class="noti-title"> to his doctor</span>
											</p>
											<p class="noti-time">
												<span class="notification-time">12 mins ago</span>
											</p>
										</div>
									</div>
								</a>
							</li>
						</ul>
					</div>
					<div class="topnav-dropdown-footer">
						<nuxt-link to="/panel/notifications"
							>Tüm Bildirimleri Görüntüle</nuxt-link
						>
					</div>
				</div>
			</li>

			<li class="nav-item dropdown has-arrow">
				<a
					href="javascript:void(0)"
					class="dropdown-toggle nav-link"
					data-toggle="dropdown"
				>
					<span class="user-img"
						><img
							v-if="!isEmpty(userData.img_url)"
							v-bind:src="
								img_url + (!isEmpty(userData) ? userData.img_url : null)
							"
							width="31"
							class="rounded-circle"
							v-bind:alt="!isEmpty(userData) ? userData.name : null"
						/>
						<i class="fa fa-user fa-2x mt-3" v-else></i>
					</span>
				</a>
				<div class="dropdown-menu">
					<div class="user-header">
						<div class="avatar avatar-sm">
							<img
								v-if="!isEmpty(userData.img_url)"
								v-bind:src="
									img_url + (!isEmpty(userData) ? userData.img_url : null)
								"
								class="avatar-img rounded-circle"
								v-bind:alt="!isEmpty(userData) ? userData.name : null"
							/>
							<i class="fa fa-user fa-2x my-auto" v-else></i>
						</div>
						<div class="user-text">
							<h6>
								<span v-if="!isEmpty(userData)">{{ userData.name }}</span>
							</h6>
							<p class="text-muted mb-0">Administrator</p>
						</div>
					</div>
					<nuxt-link class="dropdown-item" to="/profile">Profilim</nuxt-link>
					<nuxt-link class="dropdown-item" to="/panel/settings"
						>Ayarlar</nuxt-link
					>
					<a class="dropdown-item" href="javascript:void(0)" @click="logout"
						>Çıkış Yap</a
					>
				</div>
			</li>
		</ul>
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
					this.$router.go("/auth");
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
