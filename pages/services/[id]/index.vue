<template>
  <div class="services_page bg-white">
    <general-breadcrumb :items="items" />
    <Loader v-if="isLoading" />
    <div v-else>
      <!-- Start :: Service Details Section -->
      <div class="container space-y-[40px]">
        <services-service-details
          v-for="service in services"
          :key="service.id"
          :item="service"
        />

        <services-offers v-if="service.what_we_offer" :item="service.what_we_offer" />
        <!-- 
        <information-center-card
          v-if="service.informationCenter.length"
          :items="service.informationCenter"
        /> -->
        <more
          :title="$t('labels.moreServices')"
          :prev="service.service?.previous"
          :next="service.service?.next"
          :prevTitle="service.service?.previous?.name"
          :nextTitle="service.service?.next?.title"
          :prevImg="service.service?.previous?.image"
          :nextImg="service.service?.next?.image"
          :nextLink="`/services/${service.service?.next?.id}`"
          :prevLink="`/services/${service.service?.previous?.id}`"
        />
        <!-- Start :: Service Details Section -->
      </div>
    </div>
  </div>
</template>

<script setup>
const service = ref(null);
const route = useRoute();
// const id = route.params.id;
const id = parseInt(route.params.id, 10);
const isLoading = ref(true);
const services = ref([]);
const i18n = useI18n();
const items = reactive({
  title: " ",
  links: [
    {
      path: "/",
      name: i18n.t("NAV.home"),
    },
    {
      path: "/services",
      name: i18n.t("NAV.ourServices"),
    },
  ],
});

const { data: res, pending: load } = await useAPILazyFetch(`services/${id}`, {
  method: "get",
});

watch(res, (res) => {
  service.value = res.data;
  services.value.push(res.data.service);

  services.value.push(...res.data.sub_service);
  console.log(services.value);
  items.title = res.data.service.name;
  items.links.push({
    path: `/services/${res.data.service.id}`,
    name: res.data.service.name,
  });
});
watch(load, (load) => {
  isLoading.value = load;
});
</script>

<style lang="scss">
.gold-text {
  @apply text-primary;
}

.servicesList {
  list-style-image: url("~/assets/images/icons/servicesIcon.svg");
}
</style>
