<template>
  <div>
    <div class="mon_card bg-white overflow-hidden h-[250px] rounded-2xl">
      <nuxt-img
        :src="item.image"
        class="w-full h-[250px] object-scale-down rounded-2xl"
        :alt="item.name"
        format="webp"
      />
    </div>
    <div class="text-center">
      <h4 class="text-xl font-bold my-2">{{ item.name }}</h4>
      <p class="capitalize">{{ item.job_title }}</p>
    </div>
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
.mon_card {
  box-shadow: 0px 7px 58px 0px #b1b1b11a;
  img {
  }
}
</style>
