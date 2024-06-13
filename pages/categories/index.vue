<template>
  <div class="categories_page bg-white">
    <Loader v-if="isLoading" />
    <general-breadcrumb :items="items" />
    <div v-if="companyCategories">
      <div class="container">
        <div
          class="mt-11"
          v-for="companyCategory in companyCategories"
          :key="companyCategory.id"
        >
          <list-card :item="companyCategory" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const companyCategories = ref(null);
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
      path: "/about-us",
      name: i18n.t("NAV.about"),
    },
    {
      path: "/categories",
      name: i18n.t("NAV.categories"),
    },
  ],
};

const { data: res, pending: load } = await useAPILazyFetch(
  "companyCategories",
  {
    method: "get",
  }
);

watch(res, (res) => {
  if (res) {
    companyCategories.value = res.data;
  }
});
watch(load, (load) => {
  isLoading.value = load;
});
</script>
