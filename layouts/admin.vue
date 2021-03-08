<template>
	<v-app class="main-wrapper">
		<v-lazy>
			<client-only>
				<Adminheader />
			</client-only>
		</v-lazy>
		<v-lazy>
			<client-only>
				<Adminsidebar />
			</client-only>
		</v-lazy>
		<v-lazy>
			<Nuxt keep-alive></Nuxt>
		</v-lazy>
	</v-app>
</template>

<script>
	import Adminheader from "@/components/admin/Adminheader";
	import Adminsidebar from "@/components/admin/Adminsidebar";
	export default {
		head() {
			return {
				link: [
					{ rel: "icon", type: "image/x-icon", href: "/favicon.ico", ssr: false },
					{
						rel: "stylesheet",
						href:
							"https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.3/css/bootstrap.min.css",
						ssr: false
					},
					{
						rel: "stylesheet",
						href:
							"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css",
						ssr: false
					},
					{
						rel: "stylesheet",
						href:
							"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/v4-shims.min.css",
						ssr: false
					},
					{
						rel: "stylesheet",
						href:
							"https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.css",
						ssr: false
					},
					{
						rel: "stylesheet",
						href:
							"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css",
						ssr: false
					},
					{
						rel: "stylesheet",
						href:
							"https://cdnjs.cloudflare.com/ajax/libs/bootstrap-daterangepicker/3.0.5/daterangepicker.min.css",
						ssr: false
					},
					{
						rel: "stylesheet",
						href:
							"https://cdnjs.cloudflare.com/ajax/libs/select2/4.1.0-beta.1/css/select2.min.css",
						ssr: false
					},
					{
						rel: "stylesheet",
						href:
							"https://cdnjs.cloudflare.com/ajax/libs/bootstrap-tagsinput/0.8.0/bootstrap-tagsinput.css",
						ssr: false
					},
					{
						rel: "stylesheet",
						href:
							"https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.7.2/min/dropzone.min.css",
						ssr: false
					},
					{
						rel: "stylesheet",
						href:
							"https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datetimepicker/4.17.47/css/bootstrap-datetimepicker.min.css",
						ssr: false
					},
					{
						rel: "stylesheet",
						href:
							"https://cdnjs.cloudflare.com/ajax/libs/select2/4.1.0-beta.1/css/select2.min.css",
						ssr: false
					},
					{
						rel: "stylesheet",
						href:
							"https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/4.2.0/bootstrap/main.min.css",
						ssr: false
					},
					{
						rel: "stylesheet",
						href:
							"https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/4.2.0/core/main.min.css",
						ssr: false
					},
					{ rel: "stylesheet", href: "/css/admin_style.css", ssr: false }
				],
				script: [
					{
						src:
							"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js",
						ssr: false
					},
					{
						src:
							"https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.3/js/bootstrap.bundle.min.js",
						ssr: false
					},
					{
						src:
							"https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment-with-locales.min.js",
						ssr: false
					},
					{
						src:
							"https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datetimepicker/4.17.47/js/bootstrap-datetimepicker.min.js",
						ssr: false
					},
					{
						src:
							"https://cdnjs.cloudflare.com/ajax/libs/bootstrap-daterangepicker/3.0.5/daterangepicker.min.js",
						ssr: false
					},
					{
						src:
							"https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js",
						ssr: false
					},
					{
						src:
							"https://cdnjs.cloudflare.com/ajax/libs/jQuery-slimScroll/1.3.8/jquery.slimscroll.min.js",
						ssr: false
					},
					{
						src:
							"https://cdnjs.cloudflare.com/ajax/libs/morris.js/0.5.1/morris.min.js",
						ssr: false
					},
					{
						src:
							"https://cdnjs.cloudflare.com/ajax/libs/select2/4.1.0-beta.1/js/select2.full.min.js",
						ssr: false
					},
					{
						src:
							"https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js",
						ssr: false
					},
					{
						src:
							"https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.7.2/min/dropzone.min.js",
						ssr: false
					},
					{
						src:
							"https://cdnjs.cloudflare.com/ajax/libs/bootstrap-tagsinput/0.8.0/bootstrap-tagsinput.min.js",
						ssr: false
					},
					{
						src:
							"https://cdnjs.cloudflare.com/ajax/libs/jquery-circle-progress/1.2.2/circle-progress.min.js",
						ssr: false
					},
					{
						src:
							"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js",
						ssr: false
					},
					{
						src:
							"https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/4.2.0/core/main.min.js",
						ssr: false
					},
					{
						src:
							"https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/4.2.0/bootstrap/main.min.js",
						ssr: false
					},
					{
						src:
							"https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/4.2.0/core/locales-all.min.js",
						ssr: false
					},
					{ src: "/js/ResizeSensor.js", ssr: false },
					{ src: "/js/theia-sticky-sidebar.js", ssr: false },
					{ src: "/js/profile-settings.js", ssr: false },
					{ src: "/js/admin_script.js", ssr: false }
				]
			};
		},
		components: {
			Adminheader,
			Adminsidebar
		}
	};
</script>
