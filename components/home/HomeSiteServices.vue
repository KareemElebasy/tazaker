<template>
  <div class="space-y-8">
    <div class="flow-root">
      <h2 class="font-bold text-5xl float-right">{{ $t("HEADERS.site_services") }}</h2>
      <nuxt-link to="/services" class="base-btn float-left">
        {{ $t("BUTTONS.seeMore") }}
      </nuxt-link>
    </div>
    <Swiper
      :modules="[SwiperAutoplay, SwiperA11y]"
      :slides-per-view="3.5"
      :loop="true"
      :autoplay="{
        delay: 8000,
        disableOnInteraction: true,
      }"
      ref="swiper"
    >
      <SwiperSlide v-for="serviceDetail in items" :key="serviceDetail.id">
        <div class="flex items-center gap-3">
          <nuxt-link :to="`/site-services/${serviceDetail.id}`">
            <div class="flex flex-col items-center justify-end rounded-2xl h-full w-full">
              <img
                :src="serviceDetail && serviceDetail.main_image"
                :alt="serviceDetail.title"
                class="relative rounded-2xl w-full h-full object-cover"
              />
              <p class="text-white absolute m-auto text-2xl mb-5">
                {{ serviceDetail.title }}
              </p>
            </div>
          </nuxt-link>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
defineProps({
  items: {
    required: false,
    type: Array,
  },
});
</script>
