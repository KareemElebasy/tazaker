<template>
  <div class="space-y-8 say_about">
    <div class="flow-root">
      <h2 class="font-bold text-5xl float-right ">
        {{ $t("labels.saidAboutUs") }}
      </h2>
    </div>
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
      <SwiperSlide v-for="testimonial in items" :key="testimonial.id" class="mt-5">
        <home-testimonials-card :item="testimonial" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
defineProps({
  items: {
    required: true,
  },
});

const breakpoints = {
  500: {
    slidesPerView: 2,
  },
  1200: {
    slidesPerView: 3,
  },
};
</script>

<style lang="scss">
.gold-text {
  @apply text-primary;
}
// .say_about{
//   .swiper-button-prev:after, .swiper-button-next:after{
//     font-size: 20px;
//   }
// }
.say_about {
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
// .swiper-button-prev:after, .swiper-button-next:after{
//     font-size: 20px;
//   }
// .swiper {
//   padding-top: 70px;
// }
// .swiper-rtl{
//   .swiper-button-next{
    
//     left: 0;
//     top: 30px;
//     font-size: 20px;
//     width: 43px;
//     height: 43px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     background-color: #fff;
//     border-radius: 50%;
//     box-shadow: 0 0 10px #e4e4e4;
//   }
//   .swiper-button-prev{
//     top: 30px;
//     left: 0;
//     font-size: 20px;
//     width: 43px;
//     height: 43px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     background-color: #fff;
//     border-radius: 50%;
//     box-shadow: 0 0 10px #e4e4e4;
//   }
// }
}
</style>
