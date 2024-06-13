<template>
  <div class="shadow bg-white rounded-[15px] p-8">
    <a
      :href="`https://api.whatsapp.com/send/?phone=${content}`"
      target="_blank"
    >
      <div class="flex">
        <i :class="imgSrc"></i>

        <h2 class="mr-3 font-bold text-lg capitalize">{{ title }}</h2>
      </div>
      <p class="mr-12 w-60">
        {{ content }}
      </p>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
};
</script>
