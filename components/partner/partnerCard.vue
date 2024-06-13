<template>
  <div>
    <a
      v-if="item.link"
      class="flex flex-col shadow w-full h-full py-5 mb-3 rounded-lg m-auto"
      :href="item.link"
      target="_blank"
    >
      <nuxt-img
        :src="item.logo"
        :alt="item[$i18n.locale].title"
        :title="item[$i18n.locale].title"
        class="w-full h-40 object-contain"
        height="100"
        width="100"
      />
    </a>
    <div
      v-else
      class="flex flex-col shadow w-full h-full py-5 mb-3 rounded-lg m-auto"
      @click="clickOn"
    >
      <nuxt-img
        class="mx-auto"
        :src="item.logo"
        :alt="item.name"
        :title="item.name"
        width="100"
      />
      <h3 class="mt-auto text-center font-bold text-lg">{{ item.name }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      required: true,
    },
  },
  emits:["clickOn"],
  methods:{
    clickOn(){
      this.$emit("clickOn");
    }
  }
};
</script>
