<template>
  <div
    class="bg-gradient-to-b achievements_swiper from-[#02ABA700] via-[#02ABA718] via-70% to-[#02ABA700] my-[6%]"
  >
    <div class="container">
      <Swiper
        :modules="[SwiperAutoplay, SwiperA11y, SwiperNavigation, SwiperPagination]"
        :slides-per-view="1"
        :loop="true"
        :autoplay="{
          delay: 7000,
          disableOnInteraction: true,
        }"
        ref="swiper"
        :navigation="true"
      >
        <SwiperSlide v-for="(work, index) in items" :key="work.id">
          <div class="grid grid-cols-1 gap-5 md:grid-cols-5 pb-12">
            <div class="md:col-span-2">
              <img
                class="rounded-3xl h-full w-full object-fill"
                :src="work.image[0]"
                :alt="work.title"
              />
            </div>
            <div class="md:col-span-3">
              <h2 class="lg:text-5xl xs:text-3xl font-bold mb-4 mt-2">
                {{ $t("labels.achievements") }}
              </h2>
              <h3 class="text-2xl font-bold mb-5 gold-text capitalize">
                {{ work.title }}
              </h3>
              <p>{{ work.description }}</p>
              <nuxt-link
                :to="'/achievements-details/' + work.id"
                type="submit"
                class="base-btn mt-8"
              >
                {{ $t("BUTTONS.seeMore") }}</nuxt-link
              >
              <div class="lg:flex mt-12">
                <!-- <i class="fas fa-arrow-right bg-white rounded-full p-3 ml-2 gold-text"></i>
                  <i class="fas fa-arrow-left bg-white rounded-full p-3 ml-6 gold-text"></i> -->
                <p class="font-medium md:mr-[140px]">
                  {{ index + 1 }}
                  {{ $t("labels.from") }}
                  {{ items.length }}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  items: {
    required: true,
  },
});
</script>

<style lang="scss">
.achievements_swiper {
  //   left: unset !important;
  //   right: unset !important;
  //   top: unset !important;
  //   bottom: unset !important;
  // .swiper-rtl .swiper-button-prev{
  //   @apply md:right-[42%] md:top-[370px] right-0 top-[95%];
  // }
  // .swiper-rtl .swiper-button-next{
  //   @apply lg:right-[46%] md:right-[48%] md:top-[370px] right-12 top-[95%];
  // }

  .swiper-button-next,
  .swiper-button-prev {
    @apply absolute w-9 h-9 md:bottom-10 -bottom-60 m-auto flex justify-center items-center border border-[#F5F5FC] rounded-full bg-white;

    &::after {
      font-size: 14px !important;
    }
  }

  .swiper-button-next {
    inset-inline-start: -25px !important;
  }

  .swiper-button-prev {
    inset-inline-end: 150px !important;
  }
}

@media (min-width: 776px) and (max-width: 1200px) {
  .achievements_swiper {
    .swiper-button-next,
    .swiper-button-prev {
      @apply -bottom-20;
    }

    .swiper-button-next {
      inset-inline-start: 25px !important;
    }

    .swiper-button-prev {
      inset-inline-end: 100px !important;
    }
  }
}

@media (min-width: 1400px) and (max-width: 2000px) {
  .achievements_swiper {
    .swiper-button-next,
    .swiper-button-prev {
      @apply bottom-10;
    }

    .swiper-button-next {
      inset-inline-start: -30px !important;
    }

    .swiper-button-prev {
      inset-inline-end: 150px !important;
    }
  }
}
</style>
