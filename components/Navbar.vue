<template>
  <div class="navbar-wrapper" :class="{ 'collapsed': isCollapsed, 'dark': isDarkMode, 'normal': !isDarkMode }">
    <nav class="navbar">
      <div class="navbar__logo">
        <img v-if="!isDarkMode" src="/img/logo.png">
        <img v-else src="/img/logo-lg.png">
      </div>
      <ul class="navbar__menu">
        <li v-for="link in links" :class="{ 'navbar__link--active': isActive(link.path) }">
          <nuxt-link :to="link.path">{{link.name}}</nuxt-link>
        </li>
      </ul>
      <div class="navbar__auth">
        <nuxt-link class="login-btn" to="#">Вход и регистрация</nuxt-link>
        <burger-menu class="burger-menu" :links="links">
          <nuxt-link class="burger-login-btn" to="#">Вход и регистрация</nuxt-link>
        </burger-menu>
      </div>
    </nav>
  </div>
</template>


<script>
import { onMounted, onUnmounted, reactive, ref } from 'vue';
import BurgerMenu from "~/components/forms/BurgerMenu.vue";

export default {
  name: 'Navbar',
  components: { BurgerMenu },
  setup() {
    const route = useRoute();
    const isCollapsed = ref(false);
    const links = reactive([
      { path: '/companies', name: 'Компании' },
      { path: '/products', name: 'Продукты' },
      { path: '/cases', name: 'Кейсы' },
      { path: '/blog', name: 'Блог' }
    ]);

    function isActive(basePath) {
      return route.path.startsWith(basePath);
    }

    function updateCollapseState() {
      isCollapsed.value = window.innerWidth < 760;
    }

    onMounted(() => {
      updateCollapseState();
      window.addEventListener('resize', updateCollapseState);
    });

    onUnmounted(() => {
      window.removeEventListener('resize', updateCollapseState);
    });

    const isDarkMode = computed(() => {
      return /^\/companies\/\d+$/.test(route.path);
    });

    return { route, isActive, links, isCollapsed, isDarkMode };
  }
}
</script>




<style lang="scss" scoped>
.navbar-wrapper{
  border-bottom: 1px solid var(--color-gray);
  background-color: var(--bg-color);
  margin-bottom: 32px;

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    max-width: 1200px;
    margin: auto;

    &__link--active a {
      color: var(--color-gray);
    }

    &__logo img {
      height: 40px;
    }

    &__menu {
      list-style: none;
      display: flex;
      margin-bottom: 0;
      cursor: pointer;

      li {
        margin-right: 2rem;
        font-size: 16px;

        &:last-child {
          margin-right: 0;
        }
      }
    }

    &__auth{
      .burger-menu {
        display: none;
      }
      .login-btn{
        display: flex;
      }
    }
  }
}

.navbar-wrapper.collapsed{
  .navbar {
    &__menu {
      display: none;
    }

    &__auth{
      .burger-menu {
        display: flex;
      }
      .login-btn{
        display: none;
      }
    }
  }
}
.burger-login-btn {
  font-size: var(--font-size-l);
}
a {
  color: var(--inverted-bg-color);
  text-decoration: none;
}
a:hover {
  opacity: .8;
}
</style>
