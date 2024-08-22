<template>
  <div>
    <Navbar />
    <NuxtPage class="nuxt-page" />
    <Footer />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue';

export default {
  components: {
    Navbar,
  },
};
</script>

<style>
.nuxt-page {
  min-height: calc(100vh - 482px);
}
</style>
