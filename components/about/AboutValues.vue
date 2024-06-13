<template>
  <div>
    <h2 class="mt-24 row text-5xl font-bold mb-6 text-center">
      {{ $t("labels.values") }}
    </h2>
    <div class="flex flex-wrap justify-between space-y-3 items-center m-auto">
      <div
        class="bg-white-50 shadow-md text-center py-9 w-[300px] rounded-3xl m-auto"
        v-if="visionAndMission.values.length"
        v-for="value in visionAndMission.values"
        :key="value.id"
      >
        <img
          class="m-auto mb-3 w-[100px] h-[100px] rounded-full"
          :src="value.image || '~/assets/images/images/Frame3.svg'"
          alt="values about hogag website"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const visionAndMission = ref([]);
const isLoading = ref([]);
const { data: res, pending: load } = await useAPILazyFetch(
  "aboutCompany/visionAndMission",
  {
    method: "get",
  }
);

watch(res, (res) => {
  if (res) {
    console.log(res.data);
    visionAndMission.value = res.data;
  }
});
watch(load, (load) => {
  isLoading.value = load;
});
</script>
