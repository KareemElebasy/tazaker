<template>
  <div class="services_page bg-white">
    <general-breadcrumb :items="items" />
    <div v-if="partnerData">
      <!-- Start :: Achievements Section -->
      <div class="container">
    <Loader v-if="isLoading" />

        <div
          class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 justify-around"
        >
          <partner-card
            v-for="partner in partnerData"
            :key="partner.id"
            :item="partner"
          />
        </div>
      </div>
    </div>
    <!-- End :: Achievements Section -->
  </div>
</template>
<script setup>
const partnerData = ref(null);
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
      path: "/partners",
      name: i18n.t("NAV.partners"),
    },
  ],
};

const { data: res, pending: load } = await useAPILazyFetch("partners", {
  method: "get",
});

watch(res, (res) => {
  if (res) {
    partnerData.value = res.data;
  }
});
watch(load, (load) => {
  isLoading.value = load;
});
</script>

<style lang="scss"></style>
