<template>
  <div class="relative">
    <img
      class="lg:w-screen lg:object-cover lg:object-right h-fit lg:block hidden"
      src="~/assets/images/images/hg.png"
    />
    <div
      class="absolute top-0 left-0 w-full h-full lg:flex block items-center justify-center"
    >
      <div class="lg:w-[500px] xs:w-[200px] lg:mr-[500px] xs:mr-[250px] p-3">
        <div class="grid lg:grid-cols-6 xs:grid-cols-1 lg:gap-3 xs:flex">
          <img
            src="~/assets/images/images/Frame.png"
            alt="about magic-tickets"
            class="w-[64px] h-[64px]"
          />
          <div class="lg:col-span-5 mt-2">
            <h2 class="text-3xl font-bold">{{ $t("labels.vision") }}</h2>
            <p class="mt-5">{{ visionAndMission.vision }}</p>
          </div>
        </div>
        <div class="grid lg:grid-cols-6 gap-3 xs:grid-cols-1 mt-6">
          <img
            src="~/assets/images/images/Frame2.png"
            alt="about magic-tickets"
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
