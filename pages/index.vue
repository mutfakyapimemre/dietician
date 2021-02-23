<template>
	<v-app>
		<div class="main-wrapper">
			<section class="section section-search pt-5 bg-white">
				<div class="container-fluid">
					<div class="banner-wrapper">
						<div class="banner-header text-center">
							<h1>Diyetisyen, Besin, Yemek Tarifi Ara</h1>
							<p>
								<small
									>En profesyonel diyetisyenleri keşfet, sağlıklı yemek
									tarifleri al & senin için en uygun olanı tercih et.</small
								>
							</p>
						</div>
						<div class="search-box justify-content-center">
							<form onsubmit="return false" class="justify-content-center">
								<div class="form-group search-info w-100">
									<input
										type="text"
										class="form-control rounded-0"
										v-on:keyup.prevent="goToSearch()"
										placeholder="Diyetisyen, Besin, Yemek Tarifi Ara"
									/>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>

			<section class="section section-blogs">
				<client-only>
					<carousel
						v-if="!isEmpty(sliders)"
						:navs="true"
						:dots="false"
						:autoplay="true"
						:items="1"
						:loop="true"
					>
						<client-only>
							<img
								class="img-fluid"
								v-bind:key="index"
								v-bind:src="base_img_url + '/public/storage/' + slide.img_url"
								v-bind:alt="slide.title"
								v-for="(slide, index) in sliders"
							/>
						</client-only>
					</carousel>
				</client-only>
			</section>

			<section
				class="section section-doctor slider bg-white"
				v-if="!isEmpty(doctors)"
			>
				<div class="container-fluid">
					<div class="row">
						<div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
							<div class="section-header">
								<h2>Diyetisyenlerimizden Randevu Alın</h2>
								<p>Lorem Ipsum is simply dummy text</p>
							</div>
							<div class="about-content">
								<nuxt-link to="/dieticians" class="btn rounded-0 btn-info-light"
									>Diyetisyenlerimiz</nuxt-link
								>
							</div>
						</div>
						<div class="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
							<div class="doctor-slider bg-white" v-if="!isEmpty(doctors)">
								<client-only>
									<div
										v-bind:key="index"
										v-for="(doctor, index) in doctors"
										class="h-100 profile-widget mx-1"
									>
										<div class="doc-img">
											<nuxt-link v-bind:to="'/profile/' + doctor.slug">
												<v-avatar size="273" tile>
													<img
														v-bind:alt="doctor.name"
														v-bind:src="
															base_img_url +
																'/public/storage/' +
																(!isEmpty(doctor.profile_photo.img_url)
																	? doctor.profile_photo.img_url
																	: null)
														"
													/>
												</v-avatar>
											</nuxt-link>
										</div>
										<div class="pro-content h-100">
											<h3 class="title">
												<nuxt-link v-bind:to="'/profile/' + doctor.slug">{{
													doctor.name
												}}</nuxt-link>
												<i class="fa fa-check-circle verified"></i>
											</h3>
											<p class="speciality">
												{{ doctor.hospitalName }} - {{ doctor.department }}
											</p>
											<ul class="available-info">
												<li>
													<i class="fa fa-map-marker-alt"></i>
													{{ doctor.company_city }},
													{{ doctor.company_town }}
												</li>
												<li v-if="!isEmpty(doctor.appointment_hour)">
													<i class="fa fa-clock"></i>
													{{ doctor.appointment_hour }}
												</li>
												<li v-if="!isEmpty(doctor.price)">
													<i class="fa fa-money-bill-alt"></i>
													{{ doctor.price
													}}<i
														class="fa fa-info-circle"
														data-toggle="tooltip"
														title="Fiyatlar Değişkenlik Gösterebilir"
													></i>
												</li>
											</ul>
											<nuxt-link
												v-bind:to="'/make-appointment/' + doctor.slug"
												class="btn btn-info-light rounded-0 w-100"
												>Randevu Al</nuxt-link
											>
										</div>
									</div>
								</client-only>
							</div>
						</div>
					</div>
				</div>
			</section>

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
		</div>
	</v-app>
</template>

<script>
	import Cookie from "js-cookie";
	import { Base64 } from "js-base64";
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
