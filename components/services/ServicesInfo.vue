<template>
  <div
    class="card rounded bg-white p-4 shadow-md rounded-[20px] mt-5 flow-root"
  >
    <div class="lg:w-[75%] col-span-5 mt-2 float-right">
      <div class="flex">
        <img
          src="~/assets/images/images/informationCenter1.svg"
          alt="Card Image"
          class="ml-3 w-fit h-fit"
        />
        <h2 class="text-2xl mt-2 font-bold">{{ title }}</h2>
      </div>
      <div class="mt-4 mb-4 mr-[70px]">
        <p>{{ content }}</p>
        <div v-if="value1">
          <div
            class="flex mt-5 space-x-4"
            v-for="info in pageData"
            :key="info.id"
          >
            <p class="ml-4 w-[80px]">{{ $t("labels.images") }}:</p>
            <img
              :src="img"
              class="hover:cursor-pointer w-fit h-fit"
              @click="visible = true"
            />
          </div>
          <div class="flex mt-5 space-x-4">
            <p class="ml-4 w-[80px]">{{ $t("labels.videos") }}:</p>
            <img
              src="~/assets/images/images/informationCenter/video1.png"
              class="hover:cursor-pointer w-fit h-fit"
            />
            <img
              src="~/assets/images/images/informationCenter/video2.png"
              class="hover:cursor-pointer w-fit h-fit"
            />
          </div>
          <div class="flex mt-5 space-x-4">
            <p class="ml-4 w-[80px]">{{ $t("labels.attachments") }}:</p>
            <div class="border rounded-lg space-x-3 flex p-2">
              <img
                src="~/assets/images/images/informationCenter/pdf.svg"
                alt="pdf"
                class="ml-3 m-auto w-fit h-fit"
              />
              <p class="m-auto font-medium">
                {{ $t("labels.PDFfile") }}
              </p>
              <img
                src="~/assets/images/images/mediaCenter/installIcon.svg"
                class="w-fit h-fit m-auto hover:cursor-pointer"
                alt="download_PDF"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="float-left">
      <i
        class="fas fa-angle-down gold-text m-6 hover:cursor-pointer"
        @click="toggleShowDetails"
      ></i>
    </div>
  </div>
  <Dialog v-model:visible="visible" modal class="w-[50%]">
    <img
      src="~/assets/images/images/informationCenter/imageDetails.png"
      class="w-fit h-fit"
      alt="information_system_details"
    />
  </Dialog>
</template>

<script setup>
import Dialog from "primevue/dialog";
const pageData = ref([]);
const isLoading = ref([]);

const value1 = ref(false);
const value2 = ref(false);

const props = defineProps({
  content: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});
const emit = defineEmits(["updateanymore"]);

function toggleShowDetails() {
  if (value1.value == true) {
    value1.value = false;
  } else if (value1.value == false) {
    value1.value = true;
  }

  emit("updateanymore", img);
}
</script>
