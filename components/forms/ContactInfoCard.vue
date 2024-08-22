<template>
  <div class="contact-info">
    <div>
      <img class="contact-info__img" :src="data.picture">
    </div>
    <div>
      <div class="contact-info__title">Сайт:</div>
      <div>{{data?.url || '-'}}</div>
    </div>
    <div>
      <div class="contact-info__title">Город:</div>
      <div>{{data?.city?.title || '-'}}</div>
    </div>
    <div>
      <div class="contact-info__title">E-mail:</div>
      <div>{{data?.contact_email || '-'}}</div>
    </div>
    <div>
      <div class="contact-info__title">Телефон:</div>
      <div>{{data?.contact_phone || '-'}}</div>
    </div>
    <div>
      <div class="contact-info__title">Whatsapp</div>
      <div>{{data?.contact_whatsapp || '-'}}</div>
    </div>
    <div>
      <div class="contact-info__title">Skype:</div>
      <div>{{data?.contact_skype || '-'}}</div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'ContactInfo',
  props: {
    data: Object,
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
.contact-info {
  &__img {
    width: 140px;
  }

  &__title {
    margin-top: 20px;
    color: var(--color-gray);
  }

}
</style>
