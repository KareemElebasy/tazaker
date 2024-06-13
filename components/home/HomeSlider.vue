<template>
  <Swiper
    :modules="[SwiperAutoplay, SwiperA11y]"
    :slides-per-view="1"
    :loop="true"
    :autoplay="{
      delay: 7000,
      disableOnInteraction: true,
    }"
    ref="swiper"
  >
    <SwiperSlide v-for="slider in items" :key="slider.id">
      <div
        class="home_slider mt-[-60px] bg-cover relative pt-44 pb-24 min-h-[85vh] flex items-center"
        :style="{ backgroundImage: 'url(' + slider.mainImage + ')' }"
      >
        <div class="container">
          <div class="grid grid-cols-1 lg:grid-cols-2 items-center md:mt-0 mt-10">
            <div class="mt-auto">
              <h1 class="text-white text-5xl">
                {{ slider.title }}
              </h1>

              <p class="text-white mt-6">
                {{ slider.text }}
              </p>

              <div class="actions mt-11" v-if="slider.link">
                <nuxt-link class="base-btn" :to="slider.link">
                  {{ $t("BUTTONS.discoverMore") }}
                </nuxt-link>
              </div>
            </div>
            <!-- <div class="">
              <figure>
                <img
                  class="ms-auto w-fit h-fit"
                  width="400"
                  :src="slider.image"
                  alt="home_slider_img"
                />
              </figure>
            </div> -->
          </div>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<script setup>
const props = defineProps({
  items: {
    required: true,
  },
});
</script>

<style lang="scss">
.home_slider {
  // background: url("~/assets/images/slider.png");
  background-size: cover;
  // &::after {
  //   content: "";
  //   background: linear-gradient(
  //       1.05deg,
  //       rgba(0, 0, 0, 0.5) 0.93%,
  //       rgba(0, 0, 0, 0.455) 46.45%,
  //       rgba(0, 0, 0, 0) 99.14%
  //     ),
  //     linear-gradient(0deg, rgba(167, 118, 70, 0.35), rgba(167, 118, 70, 0.35)),
  //     linear-gradient(
  //       254.24deg,
  //       rgba(167, 118, 70, 0.31) 3.67%,
  //       rgba(167, 118, 70, 0.124) 98.83%
  //     );
  //   @apply w-full h-full absolute top-0 left-0;
  // }
  > div {
    @apply relative z-10;
  }
}
</style>
