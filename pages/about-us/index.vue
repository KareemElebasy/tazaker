<template>
  <div>
    <div class="about_page bg-white mb-5">
      <general-breadcrumb :items="items" />
      <Loader v-if="isLoading" />
      <div class="container mb-5" v-if="aboutCompany">
        <img-and-paragraph-card
          class="about_section"
          :item="aboutCompany[0]"
        />
        <!-- <img-and-paragraph-card
          class="about_section"
          v-for="about in aboutCompany"
          :key="about.id"
          :item="about"
        /> -->
      </div>
      <about-hogag />
      <div class="container" v-if="aboutCompany">
        <about-values />
      </div>
    </div>
  </div>
</template>

<script setup>
const aboutCompany = ref(null);
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
      path: "/about-us",
      name: i18n.t("NAV.aboutUs"),
    },
  ],
};

const { data: res, pending: load } = await useAPILazyFetch("aboutCompany", {
  method: "get",
});

watch(res, (res) => {
  if (res) {
    aboutCompany.value = res.data;
  }
});
watch(load, (load) => {
  isLoading.value = load;
});
</script>

<style lang="scss">
.about_section {
  &:nth-child(even) {
    > img {
      @apply order-2 ms-auto;
    }
    > div {
      @apply order-1;
    }
  }
}
</style>
