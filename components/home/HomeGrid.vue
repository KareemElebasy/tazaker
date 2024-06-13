<template>
  <div class="mb-9">
    <img :src="icon" alt="pray" class="w-[62px] h-[62px]" />
    <sub class="text-3xl font-bold">{{ sub }}</sub>
    <sup class="text-lg">{{ sup }}</sup>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      required: true,
    },
    sub: {
      required: true,
    },
    sup: {
      required: true,
    },
  },
};
</script>
