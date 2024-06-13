<template>
  <div
    class="bg-white testimonials_card rounded-lg pb-5 shadow p-5 space-y-5 ml-3"
  >
    <div class="flex items-center gap-3">
      <nuxt-img
        :src="item.image"
        :alt="item.text"
        class="rounded-full"
        width="40"
        height="40"
      />
      <h2 class="font-bold">{{ item.name }}</h2>
    </div>
    <p>
      {{ item.text }}
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  item: {
    required: true,
  },
});
</script>

<style lang="scss">
.testimonials_card {
  box-shadow: 0px 7px 58px 0px #b1b1b11a;
}
</style>
