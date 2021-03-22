<template>
	<div class="page-wrapper">
		<v-container fluid class="content">
			<div class="page-header">
				<h3 class="page-title">Welcome Admin!</h3>
				<ul class="breadcrumb">
					<li class="breadcrumb-item active">Dashboard</li>
				</ul>
			</div>
		</v-container>
	</div>
</template>

<script>
	export default {
		middleware: ["admin"],
		layout: "admin"
	};
</script>
