<template>
    <div class="lg:flex">
        <div class="m-auto">
          <h2 class="text-5xl font-bold mb-9 gold-text">
            {{ $t("labels.enrichmentGroup") }}
          </h2>
          <h4 class="font-bold my-3">
            {{ items.title }}
          </h4>
          <p class="md:w-[75%]">
            {{ items.text }}
          </p>
          <div class="flex mt-8">
            <p class="mt-1">{{$t("labels.visitWebsite")}}:</p>
            <a
              :href="items.url"
              target="_blank"
              class="gold-text font-bold mr-8 flex bg-[#FDF9F5] px-5 py-2 rounded"
            >
            {{ items.url }}
              <img
                src="~/assets/images/images/home/link.svg"
                alt="visit_our_website"
                class="w-fit h-fit mr-2"
              />
            </a>
          </div>
        </div>
        <!-- ~/assets/images/images/home/bigLogo.png -->
        <img
          class="w-fit h-fit" 
          :src="items.image"
          alt="magic-tickets"
        />
      </div>
  </template>
  
  <script setup>
const props = defineProps({
  items: {
    required: true,
  },
});
</script>