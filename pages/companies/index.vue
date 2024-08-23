<template>
  <div>
    <div v-if="dataLoaded" class="row companies-page">
      <div class="col-md-4 order-1 order-md-2">
        <div class="row definitions-filters">
          <div class="col-md-12 col-sm-6">
            <ui-select v-if="industries.length" label="Отрасль" placeholder="Вся отрасль" v-model="industriesSelected" :data="industries"></ui-select>
          </div>
          <div class="col-md-12 col-sm-6">
            <ui-select v-if="specializations.length" label="Специализация" placeholder="Все специализации" v-model="specializationsSelected" :data="specializations"></ui-select>
          </div>
        </div>
      </div>
      <div class="col-md-8 order-2 order-md-1">
        <h1 class="title mb-3">Каталог компаний</h1>
        <ui-search v-model="search" @search="(value) => search = value"/>
        <div v-if="companies.length">
          <div v-for="company in companies" :key="company.id">
            <Card :data="company" @click="router.push(`/companies/${company.id}`)"/>
          </div>
        </div>
        <div v-else class="nothing-find">Ничего не найдено</div>
        <Pagination v-if="companies.length" :current-page="currentPage" :meta="companiesMeta" @changed="(value) => currentPage = value"/>
      </div>
    </div>
    <div v-else class="spinner-container">
      <div class="spinner-border text-secondary" role="status">
        <span class="sr-only"></span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, watch, toRaw } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { fetchCompanies, fetchDefinitions } from '~/services/companies.js';
import uiSelect from '~/components/ui/select.vue'
import Card from '~/components/forms/Card.vue'
import Pagination from '~/components/ Pagination.vue';

const router = useRouter();
const route = useRoute();

const companiesMeta = ref([])

//Pagination
const currentPage = ref(route.query.page ? route.query.page : 1)

//Lists
const companies = ref([]);
const industries = ref([])
const specializations = ref([])

//Filters
const search = ref('')
const industriesSelected = ref('')
const specializationsSelected = ref('')

const dataLoaded = ref(false)

const requiredData = reactive({
  per_page: 10,
})

onMounted(async () => {
  await initFiltersFromQuery();
  await getCompanies();
});

const getCompanies = async () => {
  try {
    let companiesData = await fetchCompanies(requiredData);
    companies.value = companiesData.data;
    companiesMeta.value = companiesData.meta;
    let response = await fetchDefinitions();
    specializations.value = response.CompanySpecialization;
    industries.value = response.Industry;
    dataLoaded.value = true
  } catch (error) {
    console.error('Failed to load data', error);
  }
};


const initFiltersFromQuery = () => {
  const query = route.query;
  currentPage.value = query.page || 1;
  search.value = query.search || '';
  industriesSelected.value = query.industry || '';
  specializationsSelected.value = query.specialization || '';
}

watch([search, industriesSelected, specializationsSelected], () => {
  delete requiredData.page

  search.value? requiredData.search = search.value : delete requiredData.search
  specializationsSelected.value ? requiredData.specialization = specializationsSelected.value : delete requiredData.specialization
  industriesSelected.value ? requiredData.industry = industriesSelected.value : delete requiredData.industry

});

watch(currentPage, (newValue) => {
  requiredData.page = newValue
});

watch(requiredData, (newValue) => {
  const rawData = toRaw(newValue);
  const { per_page, ...queryParams } = rawData;
  const query = {...queryParams}
  router.push({ query });

  getCompanies();
});


</script>

<style scoped>
.companies-page {
  padding: 0 20px;
  max-width: 1200px;
  margin: auto;
}
.title{
  font-size: var(--font-size-xl);
}

.definitions-filters{
  background: var(--color-gray-light);
  border-radius: 4px;
  padding: 20px;
}

.nothing-find {
  height: 100px;
  margin: 16px 0;
  padding: 100px 0;
  color: var(--color-gray);
  text-align: center;
  font-size: 24px;
}

.spinner-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 482px);
}


@media (min-width: 768px) {
  .definitions-filters {
    max-width: 264px;
    margin-left: auto;
    margin-right: 0;
    margin-top: 60px;
  }
}

</style>
