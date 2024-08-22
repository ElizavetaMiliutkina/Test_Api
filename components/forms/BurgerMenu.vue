<template>
  <div>
    <button v-if="!isOpen" class="hamburger" @click="toggleDropdown">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <div v-if="isOpen" class="dropdown">
      <div class="hamburger-cross" @click="toggleDropdown">&#10005;</div>
      <ul>
        <li v-for="link in links" @click="toggleDropdown">
          <nuxt-link :to="link.path">{{ link.name }}</nuxt-link>
        </li>
      </ul>
      <div class="footer">
        <slot></slot>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, defineProps } from 'vue';

const props = defineProps({
  links: {
    type: Array,
    required:true
  }
});

const isOpen = ref(false);

function toggleDropdown() {
  isOpen.value = !isOpen.value;
}
</script>

<style scoped>
.hamburger-cross {
  font-size: 36px;
  color: var(--inverted-bg-color);
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
}

.hamburger-cross:hover {
  color: var(--color-red);
}

.hamburger {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 2;
}

.hamburger span {
  display: block;
  width: 100%;
  height: 3px;
  background-color: var(--inverted-bg-color);
  transition: background-color 0.3s;
}

.hamburger:hover span {
  background-color: #555;
}

.dropdown {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--bg-color);
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  display: flex;
  flex-direction: column;
  padding: 90px 20px 20px;
  align-items: center;
  z-index: 1;
}

ul {
  list-style-type: none;
  padding: 0;
  width: 100%;
  text-align: center;
}

li {
  padding: 12px 16px;
  font-size: var(--font-size-l);
  width: 100%;
}

li:last-child {
  border-bottom: none;
}

a {
  color: var(--inverted-bg-color);
  text-decoration: none;
}

a:hover {
  opacity: .8;
}

.footer {
  margin-top: auto;
  width: 100%;
  border-top: 1px solid var(--color-gray);
  text-align: center;
  padding-top: 26px;
}
</style>


