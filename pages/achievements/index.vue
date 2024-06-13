<template>
  <div class="previous_work_page bg-white">
    <general-breadcrumb :items="items" />
    <!-- Start :: Achievements Section -->
    <div class="container">
      <Loader v-if="isLoading" />
      <div v-else>
        <div v-for="work in previousWork" :key="work.id">
          <achievements-cards :item="work" />
        </div>
      </div>
    </div>
    <!-- End :: Achievements Section -->
  </div>
</template>
<script setup>
const previousWork = ref([]);
const isLoading = ref([]);

const i18n = useI18n();
const items = {
  title: i18n.t("titles.hogagTitle"),
  links: [
    {
      path: "/",
      name: i18n.t("NAV.home"),
    },
    {
      path: "/achievements",
      name: i18n.t("NAV.achievements"),
    },
  ],
};

const { data: res, pending: load } = await useAPILazyFetch("previous_work", {
  method: "get",
});

watch(res, (res) => {
  if (res) {
    previousWork.value = res.data;
  }
});
watch(load, (load) => {
  isLoading.value = load;
});
</script>

<style lang="scss"></style>
