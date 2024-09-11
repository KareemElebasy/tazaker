<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
    <div :class="paragraphClass" class="m-auto">
      <h2 class="text-3xl font-bold mb-5 capitalize" v-if="item.title">
        {{ item.title }}
      </h2>
      <div
        v-html="item.description"
        :class="contentClass"
        v-if="item.description"
      ></div>
      <!-- <p :class="contentClass">{{ content }}</p> -->
    </div>
    <img
      :src="item.image"
      alt="magic-tickets"
      class="rounded-2xl max-w-[500px] ms-auto"
    />
  </div>
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

<style></style>
