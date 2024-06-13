<template>
  <div class="about_page bg-white">
    <Loader v-if="isLoading" />

    <div v-else>
      <general-breadcrumb :items="items" />

      <Loader v-if="isLoading" />
      <div class="container" v-else>
        <div class="grid grid-cols-7 gap-5">
          <div class="col-span-7 md:col-span-4 lg:col-span-5">
            <div class="grid md:grid-cols-2 gap-5 mb-5" v-if="photoGalleries">
              <media-center-cards
                v-for="item in photoGalleries"
                :key="item.id"
                :item="item"
              />
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
            <media-center-filter :categories="categories" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const photoGalleries = ref([]);
const categories = ref([]);
const photo_category_id = ref([]);

const i18n = useI18n();
const isLoading = ref(true);

const route = useRoute();
const router = useRouter();

const config = useRuntimeConfig();
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
      path: "/media-center",
      name: i18n.t("NAV.gallery"),
    },
  ],
};

watch(
  photo_category_id,
  () => {
    // refresh()
  },
  {
    deep: true,
  }
);

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

  params['page'] = route.query.page || 1
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

  $fetch(`${config.public.baseURL}photoGalleries`, {
    params,
    headers: {
      Accept: "application/json",
      "Accept-Language": i18n.locale.value,
    },
  })
    .then((res) => {
      photoGalleries.value = res.data;
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

const { data: res } = await useAPILazyFetch("photoCategoryWithoutPagination", {
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
</script>
