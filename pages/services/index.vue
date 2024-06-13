<template>
  <div class="services_page bg-white">
    <general-breadcrumb :items="items" />
    <div v-if="servicesData">
      <!-- Start :: Services Section -->
      <div class="container pb-8">
        <Loader v-if="isLoading" />

        <div v-for="service in servicesData" :key="service.id" class="mb-11 last:mb-0">
          <services-card :item="service" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const servicesData = ref(null);
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
      path: "/services",
      name: i18n.t("NAV.ourServices"),
    },
  ],
};

const { data: res, pending: load } = await useAPILazyFetch("services", {
  method: "get",
});

watch(res, (res) => {
  if (res) {
    servicesData.value = res.data;
    console.log(servicesData);
  }
});
watch(load, (load) => {
  isLoading.value = load;
});
</script>

<style lang="scss"></style>
