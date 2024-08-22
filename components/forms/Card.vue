<template>
  <div class="container card" @mouseover="hoverCard = true" @mouseleave="hoverCard = false">
    <div class="row">
      <div class="col-md-auto">
        <img class="card__aside" :src="data.picture">
      </div>
      <div class="col-md card__main">
        <div class="card__main__title">{{ data.title }}</div>
        <div class="card__main__description">{{ data.description_short }}</div>
        <div class="mt-2">
          <ui-badge  v-for="bage in data.companySpecializations"
                     class="me-2"
                     :key="bage.id"
                     :title="bage.title"
                     :type="hoverCard ? 'white' : 'light'"
          />
        </div>
        <div class="text-end">
          <img src="/svg/arrow-right.svg" :class="{ 'hidden': !hoverCard }" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Card',
  props: {
    data: {
      type: Object,
      required: true
    },
  },
  setup() {
    const hoverCard = ref(false)

    return {
      hoverCard
    }
  }
};
</script>

<style scoped lang="scss">
.card {
  margin: 12px 0;
  padding: 28px 20px 20px 20px;
  border: none;
  cursor: pointer;

  &__aside {
    width: 165px;
  }

  &__main {
    &__title {
      font-size: var(--font-size-l);
      color: var(--color-blue);
    }
    &__description {
      margin-top: 12px;
      font-size: var(--font-size-s);
    }
  }

  &:hover {
    background: var(--color-gray-light);

    .card__main__title {
      color: var(--color-red);
    }
  }
}
</style>
