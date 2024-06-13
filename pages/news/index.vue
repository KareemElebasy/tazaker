<template>
  <div class="about_page bg-white">
    <general-breadcrumb :items="items" />
    <div class="container flow-root">
      <Loader v-if="isLoading" />

      <div v-if="news" class="grid grid-cols-7 gap-5">
        <div class="col-span-7 md:col-span-4 lg:col-span-5">
          <div class="grid grid-cols-12 gap-5">
            <div
              v-for="newDetails in news"
              :key="newDetails.id"
              class="lg:col-span-6 col-span-12"
            >
              <nuxt-link :to="`/news/${newDetails.id}`">
                <news-cards :item="newDetails" />
              </nuxt-link>
              <!-- !!!!!!!!!!!!!!!!! newDetails.mainImage -->
            </div>
          </div>
          <Paginator
            @page="getData"
            v-if="pagination.total > pagination.per_page"
            :totalRecords="pagination.total"
            :rows="pagination.per_page"
            v-model:first="pagination.page"
          ></Paginator>
        </div>

        <div class="col-span-7 md:col-span-3 lg:col-span-2">
          <media-center-filter :categories="categories" :keyword="true" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const news = ref(null);
const isLoading = ref(true);
const categories = ref([]);
const route = useRoute();
const router = useRouter();
const i18n = useI18n();
const items = {
  title: i18n.t("titles.hogagTitle"),
  links: [
    {
      path: "/",
      name: i18n.t("NAV.home"),
    },
    {
      path: "/media-center",
      name: i18n.t("NAV.mediaCenter"),
    },
    {
      path: "/news",
      name: i18n.t("NAV.news"),
    },
  ],
};

const config = useRuntimeConfig();

async function getData(e) {
  if (e) {
    router
      .push({
        query: Object.assign({}, route.query, {
          page: e.page + 1,
        }),
      })
      .catch(() => {});
  }
  const params = {};
  if (route.query.years) {
    const years = JSON.parse(route.query.years);

    years.map((el, index) => (params[`year[${index}]`] = el));
  }
  if (route.query.search) {
    params[`search`] = route.query.search;
  }

  if (route.query.category_id && route.query.category_id.length) {
    const categories = JSON.parse(route.query.category_id);
    categories.map((el, index) => (params[`category_id[${index}]`] = el));
  }
  isLoading.value = true;

  $fetch(`${config.public.baseURL}news`, {
    params,
    headers: {
      Accept: "application/json",
      "Accept-Language": i18n.locale.value,
    },
  })
    .then((res) => {
      news.value = res.data;
      pagination.page =
        res.meta?.current_page * res.meta?.per_page - res.meta?.per_page || 0;
      pagination.per_page = res.meta?.per_page;
      pagination.pages = res.meta?.last_page || 1;
      pagination.total = res.meta?.total || 0;
      isLoading.value = false;
    })
    .catch((err) => {
      console.log(err);
      isLoading.value = false;
    });
}

const { data: res } = await useAPILazyFetch("newsCategoryWithoutPagination", {
  method: "GET",
});

watch(res, (res) => {
  categories.value = res.data.map((el) => ({
    id: el.id,
    name: el[i18n.locale.value].name,
  }));
});

const pagination = reactive({
  page: 0,
  pages: 1,
  total: 0,
  per_page: 5,
});

watch(
  () => route.query,
  (newVal) => {
    if (newVal) getData();
  }
);

onMounted(() => getData());

// onMounted(() => fetchData());
// function fetchData(e) {
//   if (e) {
//     router.push({ query: { page: e.page + 1 } });
//     return;
//   }
//   loading.value = true;
//   axios
//     .get("dashboard/admins?paginate=5", {
//       params: { page: route.query.page || 1 },
//     })
//     .then((res) => {
//       const result = res.data;
//       pagination.page =
//         result.meta?.current_page * result.meta?.per_page -
//           result.meta?.per_page || 0;
//       pagination.per_page = result.meta?.per_page;
//       pagination.pages = result.meta?.last_page || 1;
//       pagination.total = result.meta?.total || 0;
//       users.value = result.data;
//       loading.value = false;
//     })
//     .catch(() => (loading.value = false));
// }
</script>
