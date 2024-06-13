<template>
  <div class="about_page bg-white">
    <Loader v-if="isLoading" />
    <div v-else>
      <general-breadcrumb :items="items" />
      <div class="flow-root container">
        <!-- Start :: Achievements Section -->
        <nuxt-img
          :src="previousWorkDetails.image[0]"
          alt="employees"
          class="w-full max-h-[500px] object-cover rounded-lg"
        />
        <div class="space-y-8 lg:w-4/5 my-8">
          <p>{{ previousWorkDetails.title }}</p>
          <p>{{ previousWorkDetails.text }}</p>
        </div>

        <Swiper
          :modules="[
            SwiperAutoplay,
            SwiperA11y,
            SwiperNavigation,
            SwiperPagination,
          ]"
          :slides-per-view="1"
          :loop="true"
          :autoplay="{
            delay: 5000,
            disableOnInteraction: true,
          }"
          ref="swiper"
          :navigation="true"
          :breakpoints="breakpoints"
        >
          <SwiperSlide
            v-for="(img, index) in previousWorkDetails.image"
            :key="index"
          >
            <nuxt-img
              class="w-[350px] h-[350px] ml-3"
              :src="img"
              alt="newsDetails1"
            />
          </SwiperSlide>
        </Swiper>

        <p class="mt-8">{{ previousWorkDetails.description }}</p>

        <more
          :title="$t('labels.moreAchievments')"
          :prev="previousWorkDetails?.previous"
          :next="previousWorkDetails?.next"
          :prevTitle="previousWorkDetails?.previous?.name"
          :nextTitle="previousWorkDetails?.next?.title"
          :prevImg="previousWorkDetails?.previous?.image"
          :nextImg="previousWorkDetails?.next?.image"
          :nextLink="`/achievements-details/${previousWorkDetails?.next?.id}`"
          :prevLink="`/achievements-details/${previousWorkDetails?.previous?.id}`"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
const previousWorkDetails = ref(null);
const isLoading = ref(true);
const route = useRoute();
const id = route.params.id;
const breakpoints = {
  500: {
    slidesPerView: 2,
  },
  1200: {
    slidesPerView: 3,
  },
};

const i18n = useI18n();
const items = {
  title: "",
  links: [
    {
      path: "/",
      name: i18n.t("NAV.home"),
    },
    {
      path: "/news",
      name: i18n.t("NAV.achievements"),
    },
  ],
};

const { data: res, pending: load } = await useAPILazyFetch(
  `previous_work/${id}`,
  {
    method: "get",
  }
);

watch(res, (res) => {
  console.log(res.data.description);
  if (res) {
    previousWorkDetails.value = res.data;
   
    items.title = res.data.title
  }
});
watch(load, (load) => {
  isLoading.value = load;
});
</script>

<style>
.swiper-button-prev,
.swiper-button-next {
  @apply text-primary;
  position: absolute;
  top: 2;
  width: 20px;
  height: 20px;
}

.toTopArrow:hover {
  cursor: pointer;
}
</style>
