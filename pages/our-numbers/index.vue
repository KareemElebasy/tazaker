<template>
  <div class="bg-white flow-root ourNumbersPage mb-10">
    <general-breadcrumb :items="items" />
    <div class="container">
      <div v-if="pageData">
        <Swiper
          :modules="[SwiperAutoplay, SwiperNavigation, SwiperPagination]"
          space-between="20"
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
          <!-- :breakpoints="breakpoints" -->
          <SwiperSlide v-for="item in pageData" :key="item.id">
            <div class="flex items-center justify-center">
              <img
                height="100"
                width="100"
                :src="item.image"
                alt="our_numbers"
                class="w-full h-40 object-contain gap-1"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
</template>

<script setup>
const i18n = useI18n();
const pageData = ref(null);
const isLoading = ref(true);

const items = {
  title: i18n.t("titles.hogagTitle"),
  links: [
    {
      path: "/",
      name: i18n.t("NAV.home"),
    },
    {
      path: "/our-numbers",
      name: i18n.t("NAV.our_numbers"),
    },
  ],
};

const breakpoints = {
  500: {
    slidesPerView: 2,
  },
  768: {
    slidesPerView: 3,
  },
  992: {
    slidesPerView: 3,
  },
  1200: {
    slidesPerView: 3,
  },
};

const { data: res, pending: load } = await useAPILazyFetch("our_numbers", {
  method: "get",
});

watch(res, (res) => {
  if (res) {
    pageData.value = res.data;
  }
});
watch(load, (load) => {
  if (res) {
    isLoading.value = load;
  }
});
</script>

<style lang="scss">
.ourNumbersPage {
  .swiper-button-next,
  .swiper-button-prev {
    @apply absolute w-9 h-9 top-6 flex justify-center items-center border border-[#F5F5FC] rounded-full;

    &::after {
      font-size: 14px !important;
    }

    left: unset !important;
    right: unset !important;
  }

  .swiper-button-next {
    inset-inline-end: 10px !important;
  }

  .swiper-button-prev {
    inset-inline-end: 50px !important;
  }
}
</style>
