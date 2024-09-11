<template>
  <div class="">
    <div class="container">
    <div class="grid lg:grid-cols-2 gap-4">
      <div class="m-auto">
        <img src="~/assets/images/images/haj.svg" alt="about" />
      </div>
      <div class="m-auto space-y-10">
        <div class="grid lg:grid-cols-6 xs:grid-cols-1 lg:gap-3 xs:flex">
          <img
            src="~/assets/images/images/Frame.png"
            alt="about-magic-tickets"
            class="w-[64px] h-[64px]"
          />
          <div class="lg:col-span-5 mt-2">
            <h2 class="text-3xl font-bold">{{ $t("labels.vision") }}</h2>
            <p class="mt-5">{{ visionAndMission.vision }}</p>
          </div>
        </div>
        <div class="grid lg:grid-cols-6 xs:grid-cols-1 lg:gap-3 xs:flex">
          <img
            src="~/assets/images/images/Frame2.png"
            alt="about-magic-tickets"
            class="w-[64px] h-[64px]"
          />
          <div class="lg:col-span-5 mt-2">
            <h2 class="text-3xl font-bold">{{ $t("labels.mission") }}</h2>
            <p class="mt-5">{{ visionAndMission.mission }}</p>
          </div>
        </div>
      </div>
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
    visionAndMission.value = res.data;
  }
});
watch(load, (load) => {
  isLoading.value = load;
});
</script>
