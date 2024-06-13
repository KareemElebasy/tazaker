<template>
    <div>
      <a
        v-if="item.link"
        class="flex flex-col shadow w-full h-full py-5 mb-3 rounded-lg m-auto"
        :href="item.link"
        target="_blank"
      >
      <!-- :alt="item[$i18n.locale].title"
          :title="item[$i18n.locale].title" -->
        <nuxt-img
          :src="item.logo"

          class=" h-[100px] w-[100px] object-contain"
        />
      </a>
      <div
        v-else
        class="flex flex-col shadow w-full h-full py-5 mb-3 rounded-lg m-auto"
        @click="clickOn"
      >
        <nuxt-img
          class="mx-auto h-[100px] w-[100px]"
          :src="item.logo"
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
  