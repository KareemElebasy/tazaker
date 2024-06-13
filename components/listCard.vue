<template>
  <div class="grid md:grid-cols-5 gap-5">
    <div class="order-2 py-5 lg:order-1 col-span-1 lg:col-span-3">
      <h2 class="text-3xl font-bold mb-5 capitalize">{{ item.name }}</h2>

      <div class="pb-5 max-w-[500px]" v-html="item.brief"></div>
    </div>
    <img
      class="w-fit h-fit order-1 lg:order-2 col-span-1 lg:col-span-2"
      :src="item.image"
      :alt="item.name"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  item: {
    required: true,
  },
});
</script>

<style>
.servicesList {
  list-style-image: url("~/assets/images/icons/servicesIcon.svg");
}
</style>
