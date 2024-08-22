<template>
  <div class="pagination-container">
    <button
        v-for="page in pageNumbers"
        :key="page"
        :class="{ 'active': page == currentPage, 'ellipsis': page === '...' }"
        @click="page !== '...' && changePage(page)"
        v-html="page">
    </button>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
  meta: Object,
  currentPage: Number
});

const emit = defineEmits(['changed']);

const changePage = (page) => {
  if (page !== '...') {
    console.log(page, 'page')
    emit('changed', page);
  }
};

const pageNumbers = computed(() => {
  const pages = [];
  const total_pages = props.meta.last_page;
  const current_page = props.meta.current_page;
  const window = 3;

  if (current_page > 1 + window) {
    pages.push(1);
  }

  if (current_page - window > 2) {
    pages.push('...');
  }

  let start = Math.max(current_page - window, 1);
  let end = Math.min(current_page + window, total_pages);

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  if (total_pages - current_page > window) {
    pages.push('...');
  }

  if (current_page < total_pages - window) {
    pages.push(total_pages);
  }

  return pages;
});
</script>

<style scoped>
.pagination-container {
  display: flex;
  justify-content: center;
  font-size: 16px;
}

button {
  margin: 0 5px;
  padding: 5px 12px;
  border: none;
  border-radius: 4px;
  background: none;
  color: var(--color-blue);
}

button.active {
  background-color: var(--color-gray-light);
  color: var(--color-gray);
  border-radius: 4px;
}

button.ellipsis {
  background: none;
  border: none;
  cursor: default;
}

button:hover:not(.ellipsis) {
  cursor: pointer;
  color: var(--color-gray);
  background-color: var(--color-gray-light);
}
</style>
