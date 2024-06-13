<template>
  <div class="categories_page bg-white pb-5">
    <general-breadcrumb :items="items" />
    <Loader v-if="isLoading" />
    <div v-if="item">
      <div class="container bg-white shadow rounded-[20px] pb-[60px]">
        <div class="flex justify-center lg:justify-between flex-wrap gap-4">
          <div class="w-full lg:flex-1 space-y-5 order-2 lg:order-1">
            <img
              :src="qouteIcon"
              alt="our_words"
              class="mt-[60px] w-fit h-fit"
            />
            <!-- <h2 class="text-2xl font-bold">د. أحمد عباس سندي</h2> -->
            <div
              class="leading-8"
              v-html="item[$i18n.locale].text"
              v-if="item"
            ></div>
          </div>
          <div class="w-full max-w-[400px] order-1 lg:order-2">
            <img :src="item.image" alt="our_words" class="max-w-full" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const isLoading = ref(true);
const item = ref(null);
import qouteIcon from "~/assets/images/images/qouteIcon.svg";

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
      path: "/deputy-chair-man-speech",
      name: i18n.t("NAV.deputyChairManSpeech"),
    },
  ],
};

const { data: res, pending: load } = await useAPILazyFetch(
  "aboutCompany/deputyChairManSpeech",
  {
    method: "get",
  }
);

watch(res, (res) => {
  if (res) {
    item.value = res.data;
  }
});
watch(load, (load) => {
  isLoading.value = load;
});
</script>
