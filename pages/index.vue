<template>
  <div>
    <Loader v-if="isLoading" />
    <div class="home_wrapper bg-white" v-if="home">
      <home-slider :items="home.sliders" v-if="home.sliders.length" />

      <div class="container my-11 flex flex-col gap-11">
        <img-and-paragraph-card
          :item="home.about[0]"
          readMoreBtn="d-block base-btn mt-6"
          :btnText="$t('BUTTONS.seeMore')"
          seeMorePath="/about-us"
        />
        <!-- <home-prayer-times /> -->

        <!--  component -->

        <home-site-services :items="siteServices" />

        <home-services :item="home.services" />
      </div>
      <home-achievments class="mb-11" :items="home.previousWork" />

      <!-- fifth component -->

      <div class="container space-y-[8%]">
        <!-- <home-enrichments :items="home.enrichment" /> -->

        <!-- seventh component -->
        <!-- <div class="lg:flex relative">
          <div
            class="m-auto columns-2 gap-[80px] md:absolute bottom-5 md:right-[5rem]"
            v-if="home.statistics.items.length"
          >
            <div v-for="item in home.statistics.items" :key="item.id">
              <home-grid :icon="item.icon" :sub="item.count" :sup="item.name" />
            </div>
          </div>

          <img
            :src="home.statistics.background.background"
            :width="home.statistics.background.width"
            :height="home.statistics.background.height"
            alt="magic-tickets"
            class="w-fit h-fit md:block hidden"
          />
        </div> -->

        <!--  component -->
        <!-- <home-countries :items="home.countries_we_serve" /> -->

        <!--  component -->
        <home-news :items="home.news" v-if="home.news.length" />

        <home-testimonials :items="home.testimonials" v-if="home.testimonials.length" />
        <!-- <home-partners :items="home.partners" v-if="home.partners.length" /> -->

        <div class="fixed bottom-10 md:left-20 left-2 toTopArrow z-50">
          <i
            class="fa-solid fa-chevron-up bg-primary text-white rounded-full p-6 hover:cursor-pointer"
            @click="scrollToTop"
          ></i>
        </div>

        <!-- <table-component /> -->
      </div>

      <!--
    <home-blog-section /> -->
    </div>
  </div>
</template>

<script setup>
import parkImage from "~/assets/images/images/home/parkImage.png";
import theaterImg from "~/assets/images/images/home/theaterImg.png";
import eventImg from "~/assets/images/images/home/eventImg.png";

const home = ref(null);
const facts = ref([]);
const isLoading = ref(true);

const siteServices = [
  {
    id: 1,
    title: "حجز لعبة في الحديقة",
    main_image: parkImage,
  },

  {
    id: 2,
    title: "العروض المسرحية",
    main_image: theaterImg,
  },

  {
    id: 3,
    title: "حجز فعالية",
    main_image: eventImg,
  },

  {
    id: 4,
    title: "مناسبات خاصة",
    main_image: eventImg,
  },
];

const { data: result, pending: load } = await useAPILazyFetch("home", {
  method: "get",
});

watch(result, (result) => {
  if (result) {
    home.value = result.data;
    facts.value = result.data.facts;
  }
});
watch(load, (load) => {
  isLoading.value = load;
});

function scrollToTop() {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
}
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
