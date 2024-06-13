<template>
  <div class="grid grid-cols-1 py-11 md:grid-cols-2 gap-5">
    <div>
      <h2 class="text-4xl font-bold py-6 capitalize">
        {{ item.name }}
      </h2>
      <div
        v-html="item.description"
        class="leading-8"
        v-if="item.description"
      ></div>
    </div>
    <img
      :src="item.image"
      :alt="item.name"
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
  },
};
</script>

<style></style>
