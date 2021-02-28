<template>
	<v-app>
		<section class="section section-blogs">
			<div class="container-fluid">
				<div class="section-header text-center">
					<h2>Blog</h2>
					<p class="sub-title">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
				</div>

				<div class="row blog-grid-row">
					<div class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
						<div class="blog grid-blog">
							<div class="blog-image">
								<a href="blog-details.html">
									<img
										class="img-fluid"
										src="/img/blog/blog-01.jpg"
										alt="Post Image"
									/>
								</a>
							</div>
							<div class="blog-content">
								<ul class="entry-meta meta-item">
									<li>
										<div class="post-author">
											<a href="doctor-profile.html">
												<img
													src="/img/doctors/doctor-thumb-01.jpg"
													alt="Post Author"
												/>
												<span>Dr. Ruby Perrin</span>
											</a>
										</div>
									</li>
									<li><i class="fa fa-clock"></i> 4 Dec 2019</li>
								</ul>
								<h3 class="blog-title">
									<a href="blog-details.html">
										Doccure – Making your clinic painless visit?
									</a>
								</h3>
								<p class="mb-0">
									Lorem ipsum dolor sit amet, consectetur em adipiscing elit,
									sed do eiusmod tempor.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div class="view-all text-center">
					<nuxt-link to="/blogs" class="btn btn-info-light rounded-0"
						>Tümünü Görüntüle</nuxt-link
					>
				</div>
			</div>
		</section>
	</v-app>
</template>

<script>
	export default {
		computed: {
			base_img_url() {
				return process.env.apiPublicUrl;
			}
		},
		data() {
			return {};
		},
		async asyncData({ error, $axios }) {
			try {
				let { data } = await $axios.get(process.env.apiBaseUrl + "home");

				return data.data;
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
			shuffleArray(array) {
				for (let i = array.length - 1; i > 0; i--) {
					const j = Math.floor(Math.random() * (i + 1));
					[array[i], array[j]] = [array[j], array[i]];
				}
			},
			goToSearch() {
				this.$router.go(decodeURIComponent("/profile"));
			}
		}
	};
</script>
