<template>
  <div class="grid grid-cols-1 py-11 md:grid-cols-2 gap-5">
    <div>
      <h2 class="text-4xl font-bold py-6 capitalize">
        {{ $t("labels.what_we_offer") }}
      </h2>
      <div v-html="item.name" class="leading-8" v-if="item.name"></div>
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

<style lang="scss"></style>
