<template>
  <div
    class="bg-white w-full flex flex-col rounded-[40px] h-full pb-5 border shadow"
  >
    <div class="image-wrapper w-[100%]">
      <img
        :src="item.main_image"
        :alt="item.title"
        :class="imgClass"
        class="image rounded-t-2xl h-[200px] w-full object-cover"
      />
    </div>
    <div class="p-3 mt-auto">
      <div class="text-gray-400 flex">
        <p class="capitalize">{{ item.category_name }}</p>
        <ul class="list-disc ms-[30px]">
          <li>
            {{
              new Date(item.publish_date).toLocaleDateString($i18n.locale, {
                year: "numeric",
                month: "short",
                day: "numeric",
              })
            }}
          </li>
        </ul>
      </div>
      <div class="flow-root mt-3">
        <p class="font-bold">{{ item.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      required: true,
    },
    imgClass: {
      type: String,
      required: false,
    },
  },
};
</script>

<style lang="scss">
.gold-text {
  @apply text-primary;
}
</style>
