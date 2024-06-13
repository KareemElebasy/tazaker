<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-11">
    <img
      :src="item.image"
      alt="Hogag"
      class="md:max-w-[380px] max-w-[346px]"
      :class="item.title ? item.title : item.text"
    />
    <div class="m-auto">
      <h2 class="text-3xl font-bold mb-5 capitalize" v-if="item.title">
        {{ item.title }}
      </h2>
      <h2 class="text-3xl font-bold mb-5 capitalize w-[70%]" v-else>
        {{ $t('titles.hogagTitle') }}
      </h2>
      <p v-if="item.text">{{ item.text }}</p>
      <nuxt-link :to="seeMorePath" :class="readMoreBtn" class="d-none">
      {{ btnText }}
    </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      required: false,
    },
    readMoreBtn: {
      required: false,
    },
    seeMorePath: {
      required: false,
    },
    btnText: {
      required: false,
    }
  },
};
</script>
