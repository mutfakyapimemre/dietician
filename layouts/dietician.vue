<template>
	<v-app class="main-wrapper">
		<v-lazy>
			<client-only>
				<Dieticianheader :settings="settings" />
			</client-only>
		</v-lazy>
		<v-lazy>
			<client-only>
				<Dieticiansidebar :settings="settings" />
			</client-only>
		</v-lazy>
		<v-lazy>
			<Nuxt />
		</v-lazy>
	</v-app>
</template>

<script>
	import Dieticianheader from "@/components/dietician/Dieticianheader";
	import Dieticiansidebar from "@/components/dietician/Dieticiansidebar";
	import { mapState } from "vuex";
	export default {
		head() {
			return {
				link: [
					{ rel: "icon", type: "image/x-icon", href: "/favicon.ico", ssr: false },
					{
						rel: "stylesheet",
						href:
							"https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.min.css"
					},
					{
						rel: "stylesheet",
						href:
							"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
					},
					{
						rel: "stylesheet",
						href:
							"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/v4-shims.min.css"
					},
					{ rel: "stylesheet", href: "/css/admin_style.css", ssr: false }
				],
				script: [
					{
						src:
							"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
					},
					{
						src:
							"https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/js/bootstrap.bundle.min.js"
					},
					{
						src:
							"https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment-with-locales.min.js"
					},
					{
						src:
							"https://cdnjs.cloudflare.com/ajax/libs/jQuery-slimScroll/1.3.8/jquery.slimscroll.min.js"
					},
					{ src: "/js/ResizeSensor.js", ssr: false },
					{ src: "/js/theia-sticky-sidebar.js", ssr: false },
					{ src: "/js/profile-settings.js", ssr: false },
					{ src: "/js/admin_script.js", ssr: false }
				]
			};
		},
		computed: {
			...mapState(["settings"])
		},
		mounted() {
			this.$store.dispatch("LOAD_WEBSITEDATA").then(res => {
				console.log(res);
			});
			//console.log(this.testSettings);
		},
		components: {
			Dieticianheader,
			Dieticiansidebar
		}
	};
</script>
