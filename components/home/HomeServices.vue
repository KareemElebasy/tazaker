<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 hog_services">
    <div
      :class="index == 0 ? 'col-span-3 md:mb-5' : 'col-span-3 md:col-span-1'"
      v-for="(service, index) in item"
      :key="service.id"
    >
      <div
        class="grid grid-cols-1 items-center md:grid-cols-2 gap-5 lg:w-[90%]"
        v-if="index == 0"
      >
        <div :class="paragraphClass">
          <h4 
          class="text-xl md:text-5xl w-[50%] mb-3 flex font-bold py-5 capitalize">
            {{ $t('titles.servicesForHogag') }}
          </h4>
          <h4 
          class="text-3xl font-bold text-primary capitalize">
            {{ service.name }}
          </h4>
          <div
            :class="contentClass"
            class="max-w-[400px] leading-[1.8rem]"
            v-html="service.desc"
          >
        </div>
        </div>
        <img
          :src="service.image || '@/assets/images/service.jfif'"
          alt="magic-tickets"
          class="rounded-2xl w-full max-w-[500px] md:ms-auto img_clippy"
        />
      </div>
      <!-- <div
        class="grid grid-cols-1 items-center md:grid-cols-2 gap-5"
        v-if="index == 0"
      >
        <div :class="paragraphClass">
          <h4 v-if="service.title"
          class="text-xl md:text-5xl w-[50%] mb-3 flex font-bold py-5 capitalize">
            {{ service.title }}
          </h4>
          <h4 v-else
          class="text-xl md:text-5xl w-[50%] mb-3 flex font-bold py-5 capitalize">
            {{ $t('titles.servicesForHogag') }}
          </h4>
          <nuxt-link
            class="text-xl md:text-3xl md:max-w-[300px] mb-3 flex font-bold py-5 text-primary capitalize"
            v-if="service.name"
            :to="localePath(`/services/${service.id}`)"
          >
            {{ service.name }}
          </nuxt-link>

          <div
            v-html="service.description"
            :class="contentClass"
            v-if="service.description"
            class="max-w-[400px] leading-[1.8rem]"
          ></div>
        </div>
        <img
          :src="service.image"
          alt="magic-tickets"
          class="rounded-2xl w-full max-w-[500px] ms-auto img_clippy"
        />
      </div> -->
      <div class="flex flex-col justify-center items-center gap-2" v-else>
        <img
          :src="service.image"
          alt="magic-tickets"
          class="rounded-2xl w-full max-w-[500px] md:ms-auto m-auto img_clippy"
        />
        <nuxt-link
          class="text-xl font-bold text-primary capitalize"
          v-if="service.name"
          :to="localePath(`/services/${service.id}`)"
        >
          {{ service.name }}
        </nuxt-link>

        <!-- <div
          v-html="service.description"
          :class="contentClass"
          v-if="service.description"
        ></div> -->
      </div>
    </div>
  </div>
  <nuxt-link
      class="mt-[40px] base-btn mb-8 mr-auto"
      :to="localePath(`/services`)"
    >
      {{ $t("BUTTONS.seeMore") }}
    </nuxt-link>
</template>

<script>
export default {
  props: {
    item: {
      required: true,
    },
    paragraphClass: {
      required: false,
    },
    contentClass: {
      required: false,
    },
  },
};
</script>

<style lang="scss">
.hog_services{
  .img_clippy{
    @apply w-[165px] h-[142px];
    clip-path: polygon(50% 0%, 83% 12%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%);
    object-fit: cover;
  }
}
</style>
