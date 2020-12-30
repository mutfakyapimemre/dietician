<template>
  <client-only>
    <div class="sidebar" id="sidebar">
      <div class="sidebar-inner slimscroll">
        <div id="sidebar-menu" class="sidebar-menu">
          <ul>
            <li class="menu-title">
              <span>Modüller</span>
            </li>
            <nuxt-link to="/panel" tag="li" exact-active-class="active"
              ><a
                ><i class="fa fa-home"></i> <span>Anasayfa</span></a
              ></nuxt-link
            >
            <nuxt-link to="/panel/settings" tag="li" active-class="active"
              ><a><i class="fa fa-cogs"></i> <span>Ayarlar</span></a></nuxt-link
            >
            <nuxt-link to="/panel/slides" tag="li" active-class="active"
              ><a
                ><i class="fa fa-images"></i> <span>Slaytlar</span></a
              ></nuxt-link
            >
            <nuxt-link to="/panel/users" tag="li" active-class="active"
              ><a
                ><i class="fa fa-users"></i> <span>Kullanıcılar</span></a
              ></nuxt-link
            >
            <nuxt-link to="/panel/doctors" tag="li" active-class="active"
              ><a
                ><i class="fa fa-user-md"></i> <span>Diyetisyenler</span></a
              ></nuxt-link
            >
            <nuxt-link to="/panel/nutrients" tag="li" active-class="active"
              ><a
                ><i class="fa fa-carrot"></i> <span>Besinler</span></a
              ></nuxt-link
            >
            <nuxt-link to="/panel/criterias" tag="li" active-class="active"
              ><a
                ><i class="fa fa-glass-whiskey"></i> <span>Ölçütler</span></a
              ></nuxt-link
            >
            <li class="submenu">
              <a href="javascript:void(0)">
                <i class="fa fa-dumbbell"></i> <span>Egzersizler</span>
                <span class="menu-arrow"></span>
              </a>
              <ul style="display: none">
                <nuxt-link
                  to="/panel/exercise-categories"
                  tag="li"
                  active-class="active"
                  ><a>Kategoriler</a></nuxt-link
                >
                <nuxt-link to="/panel/exercises" tag="li" active-class="active"
                  ><a>Egzersizler</a></nuxt-link
                >
              </ul>
            </li>
            <li class="submenu">
              <a href="javascript:void(0)">
                <i class="fa fa-utensils"></i> <span>Yemek Tarifleri</span>
                <span class="menu-arrow"></span>
              </a>
              <ul style="display: none">
                <nuxt-link
                  to="/panel/recipe-categories"
                  tag="li"
                  active-class="active"
                  ><a>Kategoriler</a></nuxt-link
                >
                <nuxt-link to="/panel/recipes" tag="li" active-class="active"
                  ><a>Yemek Tarifleri</a></nuxt-link
                >
              </ul>
            </li>
            <li class="submenu">
              <a href="javascript:void(0)">
                <i class="fa fa-clipboard-list"></i> <span>E-Diyet</span>
                <span class="menu-arrow"></span>
              </a>
              <ul style="display: none">
                <nuxt-link
                  to="/panel/e-diet"
                  tag="li"
                  active-class="active"
                  ><a>E-Diyet</a></nuxt-link
                >
                <nuxt-link to="/panel/e-diet-foods" tag="li" active-class="active"
                  ><a>E-Diyet Besinleri</a></nuxt-link
                >
              </ul>
            </li>
            <nuxt-link to="/panel/diseases" tag="li" active-class="active"
              ><a
                ><i class="fa fa-lungs-virus"></i> <span>Hastalıklar</span></a
              ></nuxt-link
            >
            <li class="submenu">
              <a href="javascript:void(0)">
                <i class="fa fa-edit"></i> <span>Makaleler</span>
                <span class="menu-arrow"></span>
              </a>
              <ul style="display: none">
                <nuxt-link
                  to="/panel/blog-categories"
                  tag="li"
                  active-class="active"
                  ><a>Kategoriler</a></nuxt-link
                >
                <nuxt-link to="/panel/blogs" tag="li" active-class="active"
                  ><a>Makaleler</a></nuxt-link
                >
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </client-only>
</template>

<script>
export default {
  layout: "admin",
};
</script>
