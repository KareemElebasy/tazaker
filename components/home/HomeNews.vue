<template>
  <div class="space-y-8">
    <div class="flow-root">
      <h2 class="font-bold text-5xl float-right">{{ $t("NAV.news") }}</h2>
      <nuxt-link to="/news" class="base-btn float-left">
        {{ $t("BUTTONS.seeMore") }}
      </nuxt-link>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 xl:grid-cols-3">
      <nuxt-link
        v-for="(newDetail, index) in items"
        :key="newDetail.id"
        :to="`/news/${newDetail.id}`"
      >
        <news-cards
          class="w-full"
          :item="newDetail"
          :date="newDetail.publish_date.split(' ')[0]"
          v-if="index < 3"
        />
        <!-- :content="truncateDescription(newDetail.description, 20) + ' ....'" /> -->
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>
defineProps({
  items: {
    required: true,
  },
});
</script>

<style></style>
