<template>
  <div class="about_page bg-white">
    <general-breadcrumb :items="items" />
    <div class="flow-root">
      <loader v-if="isLoading" />
      <!-- Start :: Achievements Section -->
      <div v-if="newDetails">
        <div class="container">
          <div class="mb-7">
            <nuxt-img
              :src="newDetails.main_image"
              :alt="newDetails.title"
              class="max-w-full rounded-3xl"
            />
          </div>
          <div class="mb-7" v-html="newDetails.description"></div>

          <Swiper
            :modules="[
              SwiperAutoplay,
              SwiperA11y,
              SwiperNavigation,
              SwiperPagination,
            ]"
            :space-between="30"
            :slides-per-view="1"
            :loop="true"
            :autoplay="{
              delay: 8000,
              disableOnInteraction: true,
            }"
            ref="swiper"
            :navigation="true"
            :breakpoints="breakpoints"
          >
            <SwiperSlide
              v-for="(image, index) in newDetails.image"
              :key="index"
            >
              <Image
                :src="image"
                :alt="newDetails.title"
                imageClass="rounded-xl"
                preview
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Image from "primevue/image";
const isLoading = ref(true);
const newDetails = ref(null);
const route = useRoute();
const id = route.params.id;

const i18n = useI18n();
const items = reactive({
  title: " ",
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
});

const { data: res, pending: load } = await useAPILazyFetch(`news/${id}`, {
  method: "get",
});

const breakpoints = {
  500: {
    slidesPerView: 2,
  },
  992: {
    slidesPerView: 3,
  },
};

watch(res, (res) => {
  if (res) {
    newDetails.value = res.data;
    items.title = res.data.title;
  }
});
watch(load, (load) => {
  isLoading.value = load;
});

// new URL(`@/assets/dammyImages/icon2.png`, import.meta.url).href,
</script>

<style lang="scss"></style>
