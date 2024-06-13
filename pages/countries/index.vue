<template>
  <div class="services_page bg-white">
    <general-breadcrumb :items="items" />
    <Loader v-if="isLoading" />
    <div v-if="countries">
      <!-- Start :: Achievements Section -->
      <div class="container space-y-[35px]">
        <p class="ml-5 mt-3">{{ $t("labels.searchCountry") }}:</p>
        <div class="relative lg:max-w-[400px]">
          <input type="text"
            class="w-full pl-10 pr-4 py-3 rounded-2xl border border-slate-100 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
            placeholder="ادخل اسم الدولة" v-model="search" @change="setFilter" />
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg class="w-5 h-5 gold-text" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M21 21l-5.2-5.2m-.8-.8c2.8-2.8 2.8-7.4 0-10.2s-7.4-2.8-10.2 0-2.8 7.4 0 10.2 7.4 2.8 10.2 0zM12 14a2 2 0 100-4 2 2 0 000 4z">
              </path>
            </svg>
          </div>
        </div>
        <!-- <h2>أ-</h2> -->
        <div>
          <div>
            <!-- <partner-card v-for="(image, index) in countries" :key="index" :imgSrc="image.logo" :alt="image.name" :title="image.name"
             cardClass="w-[220px]"  @click="visible = true"  /> -->
            <div v-for="sortedCountries, index in countries" :key="index">
              <div v-for="(country, index) in sortedCountries" :key="index">
                <p v-if="country.length != 0" >{{ index }}-</p>
                <div v-if="country.length != 0" class="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-4 mb-10 mt-2 hover:cursor-pointer">
                <countries-card v-for="eachCountry, index in country" :key="index" :item="eachCountry" 
                  @clickOn="showCountryDialog(eachCountry)" />
                </div>
              </div>
            </div>
          </div>

          <Paginator v-if="pagination.total > pagination.per_page" @page="getData" :totalRecords="pagination.total"
            :rows="pagination.per_page" v-model:first="pagination.page"></Paginator>
        </div>
      </div>
      <Dialog v-model:visible="dialogVisible" modal class="w-full lg:md:w-[45%] dialog-scrollable">
        <div class="flex justify-none mb-5">
          <img :src="selectedCountry.logo" :alt="selectedCountry.name" class="w-fit h-fit" />
          <h2 class="text-3xl font-bold mb-5 mt-12">
            {{ selectedCountry.name }}
          </h2>
        </div>
        <!-- <h3 class="text-2xl font-bold mb-5 mt-6">
          {{ $t("titles.hogagTitle") }}
        </h3> -->
        <div class="space-y-8 w-11/12">
          <p>{{ selectedCountry.info }}</p>
        </div>
        <template #footer v-if="false">
          <div class="border rounded-lg space-x-3 flex p-2 w-fit mt-3">
            <img src="~/assets/images/images/informationCenter/pdf.svg" alt="pdf" class="ml-3 m-auto w-fit h-fit" />
            <p class="m-auto font-medium">
              {{ $t("labels.PDFfile") }}
            </p>
            <img src="~/assets/images/images/mediaCenter/installIcon.svg" class="w-fit h-fit m-auto hover:cursor-pointer"
              alt="download_PDF" />
          </div>
        </template>
      </Dialog>
      <!-- End :: Achievements Section -->
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import Dialog from "primevue/dialog";
const route = useRoute();
const router = useRouter();
const countries = ref(null);
const search = ref(route.query.search || "");
const dialogVisible = ref(false);
const isLoading = ref(true);
const i18n = useI18n();
const items = {
  title: i18n.t("titles.hogagTitle"),
  links: [
    {
      path: "/",
      name: i18n.t("NAV.home"),
    },
    {
      path: "/countries",
      name: i18n.t("NAV.countriesWeHelp"),
    },
  ],
};

const selectedCountry = ref('')

const showCountryDialog = (country) => {
  selectedCountry.value = country;
  dialogVisible.value = true;
};


const config = useRuntimeConfig();

const pagination = reactive({
  page: 0,
  pages: 1,
  total: 0,
  per_page: 5,
});
function getData(e) {
  if (e) {
    router
      .push({
        query: Object.assign({}, route.query, {
          page: e.page + 1,
        }),
      })
      .catch(() => { });
  }
  $fetch(`${config.public.baseURL}countries`, {
    headers: {
      Accept: "application/json",
      "Accept-Language": i18n.locale.value,
    },
    params: {
      page: route.query.page || 1,
      search: search.value,
    },
  }).then((res) => {
    countries.value = res.data;
    console.log(countries.value)
    pagination.page =
      res.meta?.current_page * res.meta?.per_page - res.meta?.per_page || 0;
    pagination.per_page = res.meta?.per_page;
    pagination.pages = res.meta?.last_page || 1;
    pagination.total = res.meta?.total || 0;

    isLoading.value = false;
  });
}

function setFilter() {
  router
    .push({
      query: Object.assign({}, route.query, {
        page: 1,
        search: search.value || "",
      }),
    })
    .catch(() => { });
}

watch(
  () => route.query,
  (newVal) => {
    if (newVal) getData();
  }
);

onMounted(() => getData());
</script>

<style lang="scss">
.dialog-scrollable .p-dialog-content {
  @apply max-h-[400px] overflow-y-auto;
}
</style>
