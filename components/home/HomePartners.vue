<template>
  <div class="space-y-8 homePartnersSection" v-if="items.length">
    <div class="flow-root">
      <h2 class="font-bold text-5xl float-right">
        {{ $t("labels.partners") }}
      </h2>
      <!-- <div class="float-left">
            <i class="fas fa-arrow-right bg-gray-50 rounded-full p-3 ml-4 gold-text"></i>
            <i class="fas fa-arrow-left bg-gray-50 rounded-full p-3 gold-text"></i>
          </div> -->
    </div>
    <div>
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
        <SwiperSlide v-for="partner in items" :key="partner.id">
          <div class="flex items-center justify-center"  v-if="partner.status.status=='active'">
            <nuxt-img
              height="120"
              width="100"
              :src="partner.logo"
              alt="partner_for_hogag"
              class="w-full h-24 object-contain gap-1"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
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
</script>

<style lang="scss">
.homePartnersSection {
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
//     right: 92%;
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
