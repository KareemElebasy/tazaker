<template>
  <div>
    <Loader v-if="isLoading" />
    <div v-if="branch">
      <div class="w-full max-h-[400px] gap-8">
        <GoogleMap api-key="AIzaSyDRymdCLWxCwLHFnwv36iieKAMjiwk8sdc" class="h-[400px] rounded-2xl" :zoom="zoom"
          :center="branches[0]">
          <Marker v-for="(marker, index) in branches" :key="index" :options="{
            position: { lat: +marker.lat, lng: +marker.lng },
            icon: customMarkerIcon,
          }" @click="handleMarkerClick(marker)">
          </Marker>
        </GoogleMap>
      </div> <!-- <contact-us-map2 /> -->
      <div class="flex items-center space-x-4 text-xl flex-wrap mt-8">
        <h5 class="me-5 text-gray-500">{{ $t("labels.chooseBranch") }}:</h5>

        <p class="hover:cursor-pointer" :class="{
          'selectedBranch underline font-bold': clickedBranch === branch.name,
        }" v-for="branch in branches" :key="branch.id" @click="handleBranchClick(branch.name)">
          {{ branch.name }}
        </p>
      </div>
      <div class="bg-white rounded-lg shadow p-8 my-5">
        <h5 class="text-xl mb-8">{{ $t("labels.informationContact") }}</h5>
        <div class="md:flex space-x-5">
          <!-- First Column -->
          <div class="first_col md:w-1/3 space-y-8">
            <div class="">
              <div class="flex">
                <i class="pi pi-map-marker"></i>
                <h5 class="mr-3 font-bold text-lg">
                  {{ $t("labels.address") }}
                </h5>
              </div>
              <p class="mr-12 w-60">
                {{ branch.location }}
              </p>
            </div>
            <div class="">
              <div class="flex">
                <i class="pi pi-envelope"></i>
                <h5 class="mr-3 font-bold text-lg">{{ $t("labels.email") }}</h5>
              </div>
              <div class="mr-12 w-60">
                <div v-for="email in branch.emails" :key="email.id">
                  <p>{{ email.email }}</p>
                </div>
              </div>
            </div>
          </div>
          <!-- Second Column -->
          <div class="second_col md:w-1/3 space-y-8">
            <div class="">
              <div class="flex">
                <i class="pi pi-phone"></i>
                <h5 class="mr-3 font-bold text-lg">
                  {{ $t("labels.phoneNubmer") }}
                </h5>
              </div>
              <div class="mr-12 w-60">
                <div v-for="phone in branch.phones" :key="phone.id">
                  <p>{{ phone.phone }}</p>
                </div>
              </div>
            </div>
            <div class="">
              <div class="flex">
                <i class="pi pi-clock"></i>
                <h5 class="mr-3 font-bold text-lg">
                  {{ $t("labels.workTimes") }}
                </h5>
              </div>
              <div v-for="workTime in branch.workTimes" :key="workTime.id">
                <p class="mr-12 w-60">
                  {{ $t("labels.from") }} {{ workTime.start_time }}
                  {{ $t("labels.to") }} {{ workTime.end_time }}
                </p>
              </div>
            </div>
          </div>
          <!-- Third Column -->
        </div>
      </div>

      <div class="mt-8" v-if="false">
        <h5 class="text-xl mb-5 text-gray-500">
          {{ $t("titles.contact_us_via") }}
        </h5>
        <div class="grid grid-cols-1 lg:md:grid-cols-3 gap-5 w-11/12 space-y-2">
          <contact-us-media :title="$t('titles.technical_support_whatsapp')"
            :content="contactus.technical_support_whatsapp" imgSrc="pi pi-whatsapp" />
          <contact-us-media :title="$t('titles.pilgrimage_technical_phone')"
            :content="contactus.pilgrimage_technical_phone" imgSrc="pi pi-phone" />
          <contact-us-media :title="$t('titles.mydany_support_phone')" :content="contactus.mydany_support_phone"
            imgSrc="pi pi-whatsapp" />
          <contact-us-media :title="$t('titles.pilgrimage_technical_phone')"
            :content="contactus.pilgrimage_technical_phone" imgSrc="pi pi-phone" />
          <contact-us-media :title="$t('titles.communication_technical_whatsapp')"
            :content="contactus.communication_technical_whatsapp" imgSrc="pi pi-whatsapp" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { GoogleMap, Marker } from 'vue3-google-map';
import customMarkerIcon from "@/assets/images/Location.svg";

const contactus = ref([]);
const branches = ref(null);
const branch = ref(null);
const isLoading = ref(true);
const clickedBranch = ref(null);
const config = useRuntimeConfig();

const zoom = ref(10);
const center = ref({ lat: 51.075857938487424, lng: 10.313596029890055 });
const props = defineProps({
  items: {
    required: true,
  },
});


async function handleMarkerClick(marker) {
  const formData = new FormData();
  formData.append("branchName", marker.name);

  try {
    const response = await $fetch(
      `${config.public.baseURL}contact_us/branch_details`,
      {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      }
    );
    console.log(response.data);
    branch.value = response.data;

  } catch (error) {
    console.error(error);
  }
}

const { data: res } = await useAPILazyFetch("contactUsing", {
  method: "get",
});

watch(res, (res) => {
  contactus.value = res.data;
});

const { data: result, pending: loader } = await useAPILazyFetch(
  "contact_us/branches",
  {
    method: "get",
  }
);

watch(result, (result) => {
  branches.value = result.data.map((el) => ({
    name: el.name,
    id: el.id,
    lat: +el.lat,
    lng: +el.lng,
  }));

  if (result.data.length) {
    handleBranchClick(result.data[0].name);
  }
});
watch(loader, (loader) => {
  isLoading.value = loader;
});

async function handleBranchClick(item) {
  const frmData = new FormData();
  frmData.append("branchName", item);
  try {
    const res = await $fetch(
      `${config.public.baseURL}contact_us/branch_details`,
      {
        method: "POST",
        body: frmData,
        headers: {
          Accept: "application/json",
        },
      }
    );
    clickedBranch.value = res.data.name;
    branch.value = res.data;
  } catch (err) {
    console.log(err);
  }
}
</script>

<style>
.selectedBranch {
  @apply text-primary;
}
</style>
