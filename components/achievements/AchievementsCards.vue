<template>
  <div class="achievement_card">
    <div class="md:col-span-2 mb-11 order-2 lg:order-1">
      <h2 class="text-3xl font-bold mb-5 capitalize">{{ item.title }}</h2>
      <p class="w-[80%]">{{ item.description }}</p>
      <nuxt-link
        class="mt-[40px] base-btn mb-8"
        :to="localePath(`/achievements-details/${item.id}`)"
      >
        {{ $t("BUTTONS.seeMore") }}
      </nuxt-link>
    </div>

    <nuxt-img
      class="max-w-full rounded-3xl order-1 lg:order-2"
      :src="item.image[0]"
      :alt="item.title"
    />
  </div>
</template>

<script>
export default {
  props: {
    item: {
      required: true,
    },
  },
};
</script>

<style lang="scss">
.achievement_card {
  @apply grid grid-cols-1 py-5 gap-4 lg:grid-cols-3 first:mt-11;
}
.achievements_wrapper {
  .achievement_card {
    @media (max-width: 992px) {
      img {
        order: 1;
      }
      > div {
        order: 2;
      }
    }
    @media (min-width: 992px) {
      &:nth-child(even) {
        img {
          order: 1;
        }
        > div {
          order: 2;
        }
      }
    }
  }
}
</style>
