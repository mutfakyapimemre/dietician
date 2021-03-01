<template>
	<div class="sidebar" id="sidebar">
		<div class="sidebar-inner slimscroll">
			<div id="sidebar-menu" class="sidebar-menu">
				<ul>
					<li class="menu-title">
						<span>Modüller</span>
					</li>
					<nuxt-link to="/dietician-panel" tag="li" exact-active-class="active"
						><a><i class="fa fa-home"></i> <span>Anasayfa</span></a></nuxt-link
					>
					<nuxt-link
						to="/dietician-panel/consultants"
						tag="li"
						active-class="active"
						><a
							><i class="fa fa-users"></i> <span>Danışmanlarım</span></a
						></nuxt-link
					>
					<nuxt-link
						to="/dietician-panel/recipes"
						tag="li"
						active-class="active"
						><a
							><i class="fa fa-utensils"></i> <span>Yemek Tarifleri</span></a
						></nuxt-link
					>
					<li class="submenu">
						<a href="javascript:void(0)">
							<i class="fa fa-edit"></i> <span>Makaleler</span>
							<span class="menu-arrow"></span>
						</a>
						<ul style="display: none">
							<nuxt-link
								to="/dietician-panel/blog-categories"
								active-class="active"
								>Kategoriler</nuxt-link
							>
							<nuxt-link to="/dietician-panel/blogs" active-class="active"
								>Makaleler</nuxt-link
							>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
