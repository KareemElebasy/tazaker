<template>
  <div class="service_card bg-white p-4 rounded-xl">
    <div class="flex flex-col items-center md:flex-row gap-4">
      <div class="w-[300px] h-[200px]">
        <img
          :src="item.image"
          alt="Card Image"
          width="300"
          height="200"
          
          class="rounded-lg w-full h-full object-contain"
        />
      </div>
      <div class="flex-1 pl-4 mt-[50px]">
        <h2 class="text-3xl font-bold mb-5">{{ item.name }}</h2>
        <!-- <div class="w-[90%]" v-html="item.description"></div> -->

        <NuxtLink :to="localePath(`/services/${item.id}`)">
          <button class="read_more mt-6 font-bold">
            {{ $t("BUTTONS.seeMore") }}
            <i class="fas fa-arrow-left mr-2"></i>
          </button>
        </NuxtLink>
      </div>
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
.service_card {
  box-shadow: 0px 7px 58px 0px #b1b1b11a;

  .read_more {
    @apply text-primary;
  }
}
</style>
