<template>
  <div class="w-full max-h-[400px] gap-8">
    <GoogleMap
      api-key="AIzaSyDRymdCLWxCwLHFnwv36iieKAMjiwk8sdc"
      class="h-[400px] rounded-2xl"
      :zoom="zoom"
      :center="items[0]"
    >
      <Marker
        v-for="(marker, index) in items"
        :key="index"
        :options="{
          position: { lat: +marker.lat, lng: +marker.lng },
          icon: customMarkerIcon,
        }"
        @click="handleMarkerClick(marker)"
      >
      </Marker>
    </GoogleMap>
  </div>
</template>

<script setup>
import { GoogleMap, Marker } from 'vue3-google-map';
import customMarkerIcon from "@/assets/images/Location.svg";

const props = defineProps({
  items: {
    required: true,
  },
});

const zoom = ref(10);
const center = ref({ lat: 51.075857938487424, lng: 10.313596029890055 });
const config = useRuntimeConfig();

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
  } catch (error) {
    console.error(error);
  }
}
</script>
