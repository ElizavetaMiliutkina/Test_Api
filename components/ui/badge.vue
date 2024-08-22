<template>
  <span :class="['badge text-black', badgeClass]">{{title}}</span>
</template>

<script>
import { computed } from 'vue';
export default {
  name: 'Badge',
  props: {
    type: {
      type: String,
      default: 'light'
    },
    title: {
      type: String,
      required: true
    },
  },
  setup(props) {
    const badgeClass = computed(() => `bg-${props.type}`);

    return { badgeClass };
  }
};
</script>

<style scoped>
.badge {
  font-weight: unset;
}
</style>


