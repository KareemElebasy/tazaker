<template>
  <div class="bg-white overflow-hidden flex flex-col" v-if="item">

    <Image
      :src="item.images[0].url"
      :alt="item.photo_category_name"
      class="overflow-hidden"
      imageClass="rounded-3xl h-[180px]  md:h-[250px] w-full max-w-full object-cover"
      preview
      v-if="item.images.length"
      @show="viewImage(item)"
    />

    <div class="mt-auto">
      <div class="text-gray-400 flex">
        <p class="capitalize">{{ item.photo_category_name }}</p>
        <ul class="list-disc ms-[30px]">
          <li>{{ item.added_date }}</li>
        </ul>
      </div>
      <div class="p-2 flex justify-between items-center">
        <a
          @click="download(item)"
           :href="`${config.public.baseURL}photoGalleries/${item.id}/download`"
          :download="item.photo_category_name"
          target="_blank"
            v-if="item.images.length"
        >
          <div class="flex items-center gap-2">
            <img
              src="~/assets/images/images/mediaCenter/downloadIcon.svg"
              alt="media_center_hogag"
              class="w-fit h-fit"
            />
            <p class="gold-text font-semibold">
              {{ $t("labels.download") }}
            </p>
          </div>
        </a>
        <div class="flex items-center gap-1">
          <img
            src="~/assets/images/images/mediaCenter/eyeIcon.svg"
            alt="media_center_hogag"
            class="w-fit h-fit"
          />
          <p>{{ item.views_number }}</p>
          <img
            src="~/assets/images/images/mediaCenter/installIcon.svg"
            alt="media_center_hogag"
            class="w-fit h-fit"
          />
          <p>{{ item.downloads_number }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Image from "primevue/image";
const props = defineProps({
  item: {
    required: true,
  },
});
const config = useRuntimeConfig();

function download(item) {
  $fetch(`${config.public.baseURL}photoGalleries/${item.id}/download`, {
    method: "Get",
  }).then(() => (
    $fetch(`${config.public.baseURL}photoGalleries/${item.id}/incrementDownload`,{
      method: "POST",
    }).then((res) => (item.downloads_number = res.data.downloads_number))
  ));
}
// function download(item) {
//   $fetch(`${config.public.baseURL}photoGalleries/${item.id}/download`, {
//     method: "POST",
//   }).then((res) => (item.downloads_number = res.data.downloads_number));
// }
function viewImage(item) {
  $fetch(`${config.public.baseURL}photoGalleries/${item.id}/view`, {
    method: "POST",
  }).then((res) => (item.views_number = res.data.views_number));
}
</script>

<style lang="scss">
.gold-text {
  @apply text-primary;
}
</style>
