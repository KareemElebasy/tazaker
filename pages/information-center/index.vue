<template>
  <div class="about_page bg-white">
    <Loader v-if="isLoading" />
    <div v-else>
      <general-breadcrumb :items="items" />
      <div class="container pb-5">
        <information-center-card :items="informationCenter" />
        <!-- <div v-for="(info, index) in informationCenter" :key="index">
          <div class="card bg-white p-4 shadow-md rounded-xl mt-5 flow-root">
            <div class="lg:w-3/4 col-span-5 mt-2 float-right">
              <div class="flex">
                <img
                  src="~/assets/images/images/informationCenter1.png"
                  alt="Card Image"
                  class="ml-3 w-fit h-fit"
                />
                <h2 class="text-2xl mt-2 font-bold">{{ info.title }}</h2>
              </div>
              <div class="mt-4 mb-4 mr-[70px]">
                <p>{{ info.description }}</p>
                <div v-if="value1">
                  <div class="flex mt-5 space-x-4">
                    <p class="ml-4 w-[80px]">{{ $t("labels.photos") }}:</p>
                    <div v-for="(img, index) in info.image" :key="index">
                      <nuxt-img
                        :src="img"
                        class="hover:cursor-pointer w-[200px] h-[150px]"
                        @click="visible = true"
                      />
                    </div>
                  </div>
                  <div v-if="info.video">
                    <div class="flex mt-5 space-x-4">
                      <p class="ml-4 w-[80px]">{{ $t("labels.videos") }}:</p>
                      <div v-for="(video, index) in video" :key="index">
                        <iframe
                          :src="video"
                          width="200px"
                          height="150px"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                  <div class="flex mt-5 space-x-4">
                    <div v-if="info.attachment">
                      <p class="ml-4 w-[80px]">
                        {{ $t("labels.attachments") }}:
                      </p>
                      <div
                        v-for="(attach, index) in info.attachment"
                        :key="index"
                      >
                        <a :href="attach" target="_blank" download>
                          <div class="border rounded-lg space-x-3 flex p-2">
                            <img
                              src="~/assets/images/images/informationCenter/pdf.png"
                              alt="pdf"
                              class="ml-3 m-auto w-fit h-fit"
                            />
                            <p class="m-auto font-medium">
                              {{ $t("labels.PDFfile") }}
                            </p>
                            <img
                              src="~/assets/images/images/mediaCenter/installIcon.png"
                              class="w-fit h-fit m-auto hover:cursor-pointer"
                              alt="download_PDF"
                            />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="float-left">
              <i
                class="fas fa-angle-down gold-text m-6 hover:cursor-pointer"
                @click="toggleShowDetails()"
              ></i>
            </div>
          </div>
        </div> -->
        <!-- <Dialog v-model:visible="visible" modal class="w-[50%]">
        <img src="~/assets/images/images/informationCenter/imageDetails.png" class=" w-fit h-fit"
            alt="information_system_details" />
    </Dialog> -->
      </div>
    </div>
  </div>
</template>

<script setup>
const informationCenter = ref([]);
const isLoading = ref([]);
const value1 = ref(false);
const visible = ref(false);

const i18n = useI18n();
const items = {
  title: i18n.t("titles.hogagTitle"),
  links: [
    {
      path: "/",
      name: i18n.t("NAV.home"),
    },
    {
      path: "/media-center",
      name: i18n.t("NAV.mediaCenter"),
    },
    {
      path: "/information-center",
      name: i18n.t("NAV.informationCenter"),
    },
  ],
};

const { data: res, pending: load } = useAPILazyFetch("informationCenter", {
  method: "get",
});

function toggleShowDetails() {
  if (value1.value == true) {
    value1.value = false;
  } else if (value1.value == false) {
    value1.value = true;
  }

  //  emit('updateanymore', img)
}

// function updateanymore(e, index){
// //    informationCenter.value[index].title =e
// console.log(img);
// }
watch(res, (res) => {
  if (res) {
    informationCenter.value = res.data;
  }
});
watch(load, (load) => {
  isLoading.value = load;
});
</script>

<style></style>
