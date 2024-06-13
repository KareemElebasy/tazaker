<template>
    <div class="card rounded bg-[#FFF7ED] shadow-md rounded-[20px] grid md:grid-cols-3 md:gap-0 gap-5">
        <img src="~/assets/images/images/home/map.png" alt="map" class="md:rounded-tr-3xl md:rounded-tl-0 rounded-t-3xl" />
        <div class="lg:m-auto lg:ms-[-150px]">
            <p>
                <span class="font-bold text-5xl mb-5">
                    {{items.count}}
                </span>
                {{items.text}}
            </p>
            <nuxt-link to="/countries" class="base-btn mt-11">
                {{  $t("labels.showCountries") }}
            </nuxt-link>
        </div>
        <img src="~/assets/images/images/home/homeCountries.png" class="max-h-[434px] w-auto" alt="home_countries" />
    </div>
</template>

<script setup>
const props = defineProps({
  items: {
    required: true,
  },

});
</script>


<style lang="scss">
.read_more {
    @apply text-primary;
}
</style>