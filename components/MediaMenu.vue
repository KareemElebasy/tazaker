<template>
  <div class="p-3 bg-white w-[90%] h-full" @click="$event.stopPropagation()">
    <button
      class="outline-none mb-5 text-end text-lg block ms-auto"
      type="button"
      @click="close"
    >
      <i class="fa-solid fa-close"></i>
    </button>

    <ul>
      <li>
        <nuxt-link
          @click="close"
          :to="localePath('/')"
          class="block mb-3 border rounded-xl p-3"
          :class="$route.path === '/' ? 'bg-[#02ABA7] text-white' : ''"
          >{{ $t("NAV.home") }}</nuxt-link
        >
      </li>

      <li class="mb-3 border rounded-xl p-3" @click="$event.stopPropagation()">
        <div class="relative">
          <button
            @click="toggleAboutDropdown"
            :class="{ 'text-primary': showAboutDropdown }"
          >
            {{ $t("NAV.about") }}
            <i
              class="fa-solid fa-angle-down gold-text transform transition-transform"
              :class="{
                'rotate-180': showAboutDropdown,
                'rotate-0': !showAboutDropdown,
              }"
            ></i>
          </button>
          <ul
            v-if="showAboutDropdown"
            class="dropdown-list absolute z-50 mt-1 p-2 rounded-3xl min-w-[180px] bg-white shadow-lg"
          >
            <li class="mb-3">
              <nuxt-link @click="close" :to="localePath('/about-us')">{{
                $t("NAV.aboutUs")
              }}</nuxt-link>
            </li>
            <li class="mb-3">
              <nuxt-link
                @click="close"
                :to="localePath('/chair-man-speech')"
                class="text-sm"
                >{{ $t("NAV.chairManSpeech") }}</nuxt-link
              >
            </li>
            <li class="mb-3">
              <nuxt-link
                @click="close"
                :to="localePath('/deputy-chair-man-speech')"
                class="text-sm"
                >{{ $t("NAV.deputyChairManSpeech") }}</nuxt-link
              >
            </li>
            <li class="mb-3">
              <nuxt-link @click="close" :to="localePath('/moderators')">{{
                $t("NAV.moderators")
              }}</nuxt-link>
            </li>
            <li>
              <nuxt-link @click="close" :to="localePath('/categories')">{{
                $t("NAV.categories")
              }}</nuxt-link>
            </li>
          </ul>
        </div>
      </li>

      <li>
        <nuxt-link
          @click="close"
          :to="localePath('/services')"
          class="block mb-3 border rounded-xl p-3"
          :class="$route.path === '/services' ? 'bg-[#02ABA7] text-white' : ''"
          >{{ $t("NAV.ourServices") }}</nuxt-link
        >
      </li>

      <li>
        <nuxt-link
          @click="close"
          :to="localePath('/achievements')"
          class="block mb-3 border rounded-xl p-3"
          :class="$route.path === '/achievements' ? 'bg-[#02ABA7] text-white' : ''"
          >{{ $t("NAV.achievements") }}</nuxt-link
        >
      </li>

      <li>
        <nuxt-link
          @click="close"
          :to="localePath('/countries')"
          class="block mb-3 border rounded-xl p-3"
          :class="$route.path === '/countries' ? 'bg-[#02ABA7] text-white' : ''"
          >{{ $t("NAV.countries") }}</nuxt-link
        >
      </li>

      <li>
        <nuxt-link
          @click="close"
          :to="localePath('/partners')"
          class="block mb-3 border rounded-xl p-3"
          :class="$route.path === '/partners' ? 'bg-[#02ABA7] text-white' : ''"
          >{{ $t("NAV.partners") }}</nuxt-link
        >
      </li>

      <li class="mb-3 border rounded-xl p-3" @click="$event.stopPropagation()">
        <div class="relative">
          <a
            href="#"
            @click="toggleMediaCenterDropdown"
            :class="{ 'text-primary': showMediaCenterDropdown }"
          >
            {{ $t("NAV.mediaCenter") }}
            <i
              class="fa-solid fa-angle-down gold-text transform transition-transform"
              :class="{
                'rotate-180': showMediaCenterDropdown,
                'rotate-0': !showMediaCenterDropdown,
              }"
            ></i>
          </a>
          <ul
            v-if="showMediaCenterDropdown"
            class="dropdown-list absolute z-50 start-0 top-7 mt-1 p-2 min-w-[150px] bg-white shadow-lg rounded-2xl"
            @click="closeDropdown"
          >
            <li class="mb-3">
              <nuxt-link @click="close" :to="localePath('/media-center')">{{
                $t("NAV.gallery")
              }}</nuxt-link>
            </li>
            <li class="mb-3">
              <nuxt-link @click="close" :to="localePath('/news')">{{
                $t("NAV.news")
              }}</nuxt-link>
            </li>
            <li>
              <nuxt-link @click="close" :to="localePath('/information-center')">{{
                $t("NAV.informationCenter")
              }}</nuxt-link>
            </li>
          </ul>
        </div>
      </li>

      <li class="mb-3">
        <nuxt-link
          @click="close"
          :to="localePath('/contact-us')"
          class="block mb-3 border rounded-xl p-3"
          :class="$route.path === '/contact-us' ? 'bg-[#02ABA7] text-white' : ''"
          >{{ $t("NAV.contactUs") }}</nuxt-link
        >
      </li>
    </ul>
  </div>
</template>

<script setup>
const localePath = useLocalePath();

const showAboutDropdown = ref(false);
function toggleAboutDropdown() {
  showAboutDropdown.value = !showAboutDropdown.value;
}

const showMediaCenterDropdown = ref(false);
function toggleMediaCenterDropdown() {
  showMediaCenterDropdown.value = !showMediaCenterDropdown.value;
}

const showAboutWordsDropdown = ref(false);
function closeDropdown(event) {
  event.stopPropagation();
  showAboutDropdown.value = false;
  showMediaCenterDropdown.value = false;
  showAboutWordsDropdown.value = false;
}

const emit = defineEmits(["close"]);

function close() {
  emit("close");
  showAboutDropdown.value = false;
  showMediaCenterDropdown.value = false;
  showAboutWordsDropdown.value = false;
}
</script>
