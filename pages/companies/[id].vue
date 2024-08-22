<template>
  <div class="company-page">
    <div class="company-page__back" @click="goBack">
      <img class="company-page__back-arrow" src="/svg/arrow-left.svg" />
      <span class="company-page__back__title"> Компании</span>
    </div>
   <div v-if="company">
     <div>
       <h1 class="company-page__title mb-3">{{company.title}}</h1>
     </div>
     <div class="row company-page__block">
       <div class="col-md-3 col-sm-3 col-12 order-1 order-md-2 order-sm-2 company-page__block__aside block-aside">
        <forms-contact-info-card :data="company"></forms-contact-info-card>
       </div>
       <div class="col-md-9 col-sm-9 col-12 order-2 order-md-1 order-sm-1 company-page__block__main block-main">
        <div class="block-main__numbers">
          <div class="block-main__numbers__number">
            <div class="block-main__numbers__number__value">{{company.age}}</div>
            <div class="block-main__numbers__number__title">лет</div>
          </div>
          <div class="block-main__numbers__number">
            <div class="block-main__numbers__number__value">{{company.staff}}</div>
            <div class="block-main__numbers__number__title">человек</div>
          </div>
        </div>
         <div class="block-main__description"> {{company.description_short}}</div>
         <div class="block-main__description-short"> {{company.description_full}}</div>
         <div>
           <div class="company-page__subtitle">Проектная специализация</div>
           <div class="mt-2">
             <ui-badge  v-for="bage in company.companySpecializations"
                        class="me-2"
                        :key="bage.id"
                        :title="bage.title"
             />
           </div>
         </div>
         <div>
           <div class="company-page__subtitle">Отрасль</div>
           <div class="mt-2">
             <ui-badge  v-for="bage in company.industries"
                        class="me-2"
                        :key="bage.id"
                        :title="bage.title"
             />
           </div>
         </div>
       </div>
     </div>
   </div>
   <div v-else></div>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';
import { fetchCompany } from '~/services/companies.js';

const route = useRoute();
const router = useRouter();
const company = ref(null);


const getCompanies = async () => {
  try {
    company.value = await fetchCompany(route.params.id);
  } catch (error) {
    console.error('Failed to load companies', error);
  }
};
getCompanies();

const goBack = () => {
  router.back();
}

</script>

<style lang="scss" scoped>
.company-page {
  padding: 0 20px;
  max-width: 1200px;
  margin: auto;



  &__back {
    cursor: pointer;
    width: 130px;
    display: flex;
    align-items: center;
    margin-bottom: 10px;


    &__title {
      color: var(--color-blue);
      font-size: var(--font-size-m);
      margin-left: 4px;
    }

    &:hover {
      img {
        filter: invert(0.3);
      }
      span {
        opacity: .8;
      }
    }
  }



  &__subtitle {
    font-size: var(--font-size-m);
    margin-top: 12px;
  }

  .block-main__numbers {
    display: flex;
    flex-wrap: wrap;

    &__number {
      display: flex;
      max-width: 100%;
      flex-shrink: 0;
      flex-grow: 0;
      position: relative;
      margin-right: 8px;

      &__value {
        color: var(--color-red);
        font-size: 60px;
        font-weight: 300;
        line-height: 1;
      }
      &__title {
        font-size: 16px;
        margin-top: 2px
      }
    }
  }

  .block-main {
    &__description {
      margin-top: 10px;
      font-size: var(--font-size-m);
    }
    &__description-short {
      margin-top: 10px;
      font-size: var(--font-size-s);
    }
  }
}
</style>
