<template>
	<footer class="footer">
		<div class="footer-top">
			<v-container fluid>
				<v-row>
					<v-col cols="12" sm="12" md="6" lg="3" xl="3">
						<div class="footer-widget footer-about">
							<div
								class="footer-logo d-flex justify-content-center mx-auto px-auto text-center"
							>
								<img
									v-if="!isEmpty(settings)"
									v-bind:src="img_url + settings.settings.logo"
									class="img-fluid"
									v-bind:alt="settings.settings.title"
								/>
							</div>
							<div class="footer-about-content">
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
								</p>
								<div class="social-icon">
									<ul>
										<li>
											<a href="#" target="_blank">
												<i class="fa fa-facebook-f"></i>
											</a>
										</li>
										<li>
											<a href="#" target="_blank">
												<i class="fa fa-twitter"></i>
											</a>
										</li>
										<li>
											<a href="#" target="_blank">
												<i class="fa fa-linkedin"></i>
											</a>
										</li>
										<li>
											<a href="#" target="_blank">
												<i class="fa fa-instagram"></i>
											</a>
										</li>
										<li>
											<a href="#" target="_blank">
												<i class="fa fa-dribbble"></i>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</v-col>

					<v-col cols="12" sm="12" md="6" lg="3" xl="3">
						<div class="footer-widget footer-menu">
							<h2 class="footer-title">For Patients</h2>
							<ul>
								<li>
									<a href="search.html">Search for Doctors</a>
								</li>
								<li>
									<a href="login.html">Login</a>
								</li>
								<li>
									<a href="register.html">Register</a>
								</li>
								<li>
									<a href="booking.html">Booking</a>
								</li>
								<li>
									<a href="patient-dashboard.html">Patient Dashboard</a>
								</li>
							</ul>
						</div>
					</v-col>

					<v-col cols="12" sm="12" md="6" lg="3" xl="3">
						<div class="footer-widget footer-menu">
							<h2 class="footer-title">For Doctors</h2>
							<ul>
								<li>
									<a href="appointments.html">Appointments</a>
								</li>
								<li>
									<a href="chat.html">Chat</a>
								</li>
								<li>
									<a href="login.html">Login</a>
								</li>
								<li>
									<a href="doctor-register.html">Register</a>
								</li>
								<li>
									<a href="doctor-dashboard.html">Doctor Dashboard</a>
								</li>
							</ul>
						</div>
					</v-col>

					<v-col cols="12" sm="12" md="6" lg="3" xl="3">
						<div class="footer-widget footer-contact">
							<h2 class="footer-title">Contact Us</h2>
							<div class="footer-contact-info">
								<div class="footer-address">
									<span>
										<i class="fa fa-map-marker-alt"></i>
									</span>
									<p>
										3556 Beech Street, San Francisco,
										<br />California, CA 94108
									</p>
								</div>
								<p>
									<i class="fa fa-phone-alt"></i>
									+1 315 369 5943
								</p>
								<p class="mb-0">
									<i class="fa fa-envelope"></i>
									doccure@example.com
								</p>
							</div>
						</div>
					</v-col>
				</v-row>
			</v-container>
		</div>

		<div class="footer-bottom">
			<v-container fluid class="copyright px-3">
				<v-row>
					<v-col cols="12" sm="12" md="4" lg="4" xl="4" class="py-auto my-auto">
						<div class="copyright-text py-auto my-auto">
							<p class="mb-0 py-auto my-auto">
								&copy; {{ new Date().getFullYear() }}
								<nuxt-link to="/" v-if="!isEmpty(settings)">{{
									settings.settings.company_name
								}}</nuxt-link
								>. Tüm Hakları Saklıdır.
							</p>
						</div>
					</v-col>
					<v-col
						cols="12"
						sm="12"
						md="4"
						lg="4"
						xl="4"
						class="text-center py-auto my-auto"
					>
						<a
							href="https://mutfakyapim.com"
							target="_blank"
							class="text-center py-auto my-auto"
						>
							<img
								src="/img/my-logo.png"
								alt="Mutfak Yapım"
								class="py-auto my-auto"
								height="50"
							/>
						</a>
					</v-col>
					<v-col cols="12" sm="12" md="4" lg="4" xl="4" class="py-auto my-auto">
						<div class="copyright-menu py-auto my-auto">
							<ul class="policy-menu">
								<li>
									<a href="javascript:void(0)">Kullanım Koşulları</a>
								</li>
								<li>
									<a href="javascript:void(0)">Gizlilik Şözleşmesi</a>
								</li>
							</ul>
						</div>
					</v-col>
				</v-row>
			</v-container>
		</div>
	</footer>
</template>
<script>
	export default {
		props: ["settings"],
		computed: {
			img_url() {
				return process.env.apiPublicUrl;
			}
		},
		data() {
			return {};
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
			}
		}
	};
</script>
