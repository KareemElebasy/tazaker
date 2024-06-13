<template>
  <div class="about_page bg-white">
    <general-breadcrumb :items="items" />
    <div class="container space-y-8">
      <Loader v-if="isLoading" />
      <div class="grid gap-5 xl:grid-cols-3 sm:grid-cols-2" v-else>
        <moderators-card
          v-for="item in directories"
          :key="item.id"
          :item="item"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const isLoading = ref(true);
const directories = ref(null);

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
      path: "/moderators",
      name: i18n.t("NAV.moderators"),
    },
  ],
};

const { data: res, pending: load } = await useAPILazyFetch(
  "aboutCompany/boardOfDirectories",
  {
    method: "get",
  }
);

watch(res, (res) => {
  if (res) {
    directories.value = res.data;
    console.log(directories);
  }
});
watch(load, (load) => {
  isLoading.value = load;
});
</script>

<style></style>
