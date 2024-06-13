<template>
  <!-- <header
    id="header"
    :class="
      $route.path == '/' || $route.path == '/ar'
        ? 'bg-white'
        : 'bg-white left-0 w-full shadow-b z-50' //fixed
    "
  > -->
  <header
    id="header"
    :class="
      $route.name.includes('index')
        ? 'bg-white myhed top-0 left-0 '
        : 'bg-white top-0 left-0 w-full shadow-b z-50 no_back' //fixed
    "
  >
    <div class="container">
      <div class="md:flex items-center py-4 border-b justify-between">
        <div class="flex items-center gap-2">
          <img src="~/assets/images/icons/time.svg" alt="time icon" />
          <p class="text-secondary home_wite">
            <span class=""> {{ $t("HEADERS.timeNow") }}: </span>
            <span class="font-bold">{{ currentTime }}</span>
          </p>
        </div>
        <div class="flex items-center gap-2">
          <!-- <img
            src="~/assets/images/icons/time1.svg"
            alt="time icon"
            class="w-fit h-fit"
          /> -->
          <p class="home_wite">
            <bdi>
              <!-- {{
                $t("HEADERS.remainTime", {
                  name: $t(nextPrayerName),
                }) + " "
              }} -->
              {{ $t("HEADERS.remainTimeForConference") + " " }}
            </bdi>
            <span class="font-bold">{{ remainingTime }}</span>
          </p>
        </div>
      </div>
      <nav class="py-6 flex !flex-row items-center justify-between gap-2">
        <div class="logo">
          <nuxt-link :to="localePath('/')">
            <img src="~/assets/images/logo/logo.svg" alt="logo" class="w-fit h-fit logo"
          /></nuxt-link>
        </div>

        <div class="nav-links hidden lg:flex">
          <ul>
            <li>
              <nuxt-link :to="localePath('/')">{{ $t("NAV.home") }}</nuxt-link>
            </li>
            <li>
              <div class="relative">
                <a
                  href="#"
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
                </a>
                <ul
                  v-if="showAboutDropdown"
                  class="dropdown-list flex-col absolute z-50 mt-1 p-2 bg-white rounded min-w-[180px]"
                >
                  <li @click.outside="closeDropdown">
                    <nuxt-link :to="localePath('/about-us')">{{
                      $t("NAV.aboutUs")
                    }}</nuxt-link>
                  </li>
                  <!-- <li>
                    <a @click="showSubMenu = !showSubMenu"
                      >{{ $t("NAV.words") }}
                      <i
                        class="fa-solid fa-angle-down gold-text transform transition-transform"
                        :class="{
                          'rotate-180': showSubMenu,
                          'rotate-0': !showSubMenu,
                        }"
                      ></i
                    ></a>
                  </li> -->
                  <!-- <li v-if="showSubMenu" @click.outside="closeDropdown">
                    <nuxt-link :to="localePath('/chair-man-speech')" class="text-sm">{{
                      $t("NAV.chairManSpeech")
                    }}</nuxt-link>
                  </li>
                  <li v-if="showSubMenu" @click.outside="closeDropdown">
                    <nuxt-link
                      :to="localePath('/deputy-chair-man-speech')"
                      class="text-sm"
                      >{{ $t("NAV.deputyChairManSpeech") }}</nuxt-link
                    >
                  </li>
                  <li @click.outside="closeDropdown">
                    <nuxt-link :to="localePath('/moderators')">{{
                      $t("NAV.moderators")
                    }}</nuxt-link>
                  </li> -->
                  <li @click.outside="closeDropdown">
                    <nuxt-link :to="localePath('/categories')">{{
                      $t("NAV.categories")
                    }}</nuxt-link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <nuxt-link :to="localePath('/services')">{{
                $t("NAV.ourServices")
              }}</nuxt-link>
            </li>
            <li>
              <nuxt-link :to="localePath('/achievements')">{{
                $t("NAV.achievements")
              }}</nuxt-link>
            </li>
            <!-- <li>
              <nuxt-link :to="localePath('/countries')">{{
                $t("NAV.countries")
              }}</nuxt-link>
            </li> -->
            <!-- <li>
              <nuxt-link :to="localePath('/partners')">{{
                $t("NAV.partners")
              }}</nuxt-link>
            </li> -->
            <li>
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
                  class="dropdown-list absolute z-50 mt-1 p-2 bg-white rounded min-w-[150px]"
                  @click.outside="closeDropdown"
                >
                  <li>
                    <nuxt-link :to="localePath('/media-center')">{{
                      $t("NAV.gallery")
                    }}</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link :to="localePath('/news')">{{ $t("NAV.news") }}</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link :to="localePath('/information-center')">{{
                      $t("NAV.informationCenter")
                    }}</nuxt-link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <nuxt-link :to="localePath('/contact-us')">{{
                $t("NAV.contactUs")
              }}</nuxt-link>
            </li>
            <!-- <li>
              <nuxt-link :to="localePath('/our-numbers')">{{
                $t("NAV.our_numbers")
              }}</nuxt-link>
            </li> -->
            <li>
              <Dropdown
                v-model="selectedCountry"
                :options="countries"
                optionLabel="name"
                class="lang_btn"
              >
                <template #value="slotProps">
                  <div v-if="slotProps.value" class="flex align-items-center">
                    <img
                      :alt="slotProps.value.label"
                      src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
                      :class="`mr-2 flag flag-${slotProps.value.code}`"
                      style="width: 18px"
                    />
                    <div class="link">{{ slotProps.value.name }}</div>
                  </div>
                  <span v-else>
                    {{ slotProps.placeholder }}
                  </span>
                </template>
                <template #option="slotProps">
                  <nuxt-link
                    :to="switchLocalePath(slotProps.option.code)"
                    class="flex align-items-center"
                  >
                    <img
                      :alt="slotProps.option.label"
                      src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
                      :class="`mr-2 flag flag-${slotProps.option.code}`"
                      style="width: 18px"
                    />
                    <div>{{ slotProps.option.name }}</div>
                  </nuxt-link>
                </template>
              </Dropdown>
            </li>
            <!-- <li>
              <nuxt-link class="base-btn !text-white !font-[500] !px-8 !py-2 mx-2" :to="localePath('/recruitment')">{{
                $t("NAV.recruitment")
              }}</nuxt-link>
            </li> -->
            <!-- <li @click="langDropdownVisible = !langDropdownVisible">
            <i class="fal fa-globe"></i>
            <ul v-if="langDropdownVisible" :class="{ 'language-dropdown': true, 'rtl': current_lang === 'ar' }">
              <li><span @click="switchLocale('ar')">Arabic</span></li>
              <li><span @click="switchLocale('en')">English</span></li>
              <li><span @click="switchLocale('fr')">French</span></li>
            </ul>
          </li> -->
          </ul>
          <!-- <div class="menu border-primary border-s ps-4">
            <button type="button">
              <img src="~/assets/images/icons/list.svg" alt="list" />
            </button>
          </div> -->
        </div>

        <div class="lg:hidden block">
          <button class="outline-none" type="button" @click="showMediaMenu = true">
            <i class="fa-solid fa-bars"></i>
          </button>

          <div
            v-if="showMediaMenu"
            class="bg-[rgba(0,0,0,0.5)] fixed top-0 start-0 w-screen h-screen z-40"
          />

          <div
            class="fixed top-0 h-screen w-screen duration-300 z-50"
            :class="showMediaMenu ? 'start-0' : 'start-[-100%]'"
            @click="showMediaMenu = false"
          >
            <MediaMenu @close="showMediaMenu = false" />
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import Dropdown from "primevue/dropdown";
const i18n = useI18n();
const currentTime = ref(new Date().toLocaleTimeString());
const showAboutDropdown = ref(false);
const showSubMenu = ref(false);
const showMediaCenterDropdown = ref(false);
const showAboutWordsDropdown = ref(false);
const localePath = useLocalePath();

import { ref } from "vue";

const selectedCountry = ref({
  name: i18n.t(`lang.${i18n.locale.value}`),
  code: i18n.locale.value,
});
const countries = ref([
  { name: i18n.t(`lang.ar`), code: "ar" },
  // { name: i18n.t(`lang.fr`), code: "fr" },
  { name: i18n.t(`lang.en`), code: "en" },
]);

onUnmounted(() => {
  clearInterval(timer);
});

function toggleAboutDropdown() {
  showAboutDropdown.value = !showAboutDropdown.value;
}

function toggleMediaCenterDropdown() {
  showMediaCenterDropdown.value = !showMediaCenterDropdown.value;
}

function toggleAboutWordsDropdown() {
  showAboutWordsDropdown.value = !showAboutWordsDropdown.value;
}

function closeDropdown(event) {
  event.stopPropagation();
  showAboutDropdown.value = false;
  showMediaCenterDropdown.value = false;
  showAboutWordsDropdown.value = false;
}
const config = useRuntimeConfig();
const nextPrayerName = ref("");
const prayingTimes = ref(null);
const remainingTime = ref(null);
const nextPrayerTime = ref(null);

// function calculateRemainingTime() {
//   const now = new Date();
//   let nextPrayerFound = false;
//   for (const [key, value] of Object.entries(prayingTimes.value)) {
//     const prayerTime = new Date(now.toDateString() + " " + value);

//     if (prayerTime > now) {
//       nextPrayerTime.value = prayerTime;
//       nextPrayerName.value = key;
//       nextPrayerFound = true;
//       break;
//     }
//   }
// }

function calculateRemainingTime() {
  const now = new Date();
  const desiredPrayers = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];
  let nextPrayerFound = false;

  for (const [key, value] of Object.entries(prayingTimes.value)) {
    if (desiredPrayers.includes(key)) {
      const prayerTime = new Date(now.toDateString() + " " + value);

      if (prayerTime > now) {
        nextPrayerTime.value = prayerTime;
        nextPrayerName.value = key;
        nextPrayerFound = true;
        break;
      }
    }
  }
}

function calcLessTen(val) {
  return val < 10 ? "0" + val : val;
}

const timer = setInterval(() => {
  const now = new Date();
  currentTime.value = new Date().toLocaleTimeString();
  if (nextPrayerTime.value) {
    const timeDiff = nextPrayerTime.value.getTime() - now.getTime();
    const hours = Math.floor(timeDiff / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
    remainingTime.value = `${calcLessTen(hours)}:${calcLessTen(minutes)}:${calcLessTen(
      seconds
    )}`;
  } else {
    remainingTime.value = "";
  }
}, 1000);

// start
async function handleCityClick(city) {
  const frmData = new FormData();
  frmData.append("cityName", city);
  try {
    const response = await $fetch(`${config.public.baseURL}prayingTimes`, {
      method: "POST",
      body: frmData,
      headers: {
        Accept: "application/json",
        "Accept-Language": i18n.locale.value,
      },
    });

    prayingTimes.value = response.data;
    calculateRemainingTime();
  } catch (err) {
    console.log(err);
  }
}
onMounted(() => {
  handleCityClick("makkah");
});
// end

/* Made By Mohamed Salem */
const showMediaMenu = ref(false);
</script>

<style lang="scss">
.myhed {
  @apply z-[16] right-0 top-0 left-0 bg-white;
  .home_wite {
    @apply text-black;
  }
  .logo {
    .logo {
      // filter: brightness(100)
    }
    .p-dropdown {
      background: transparent;
    }
  }
  .nav-links {
    ul {
      li {
        a {
          @apply p-2 font-medium text-black transition ease-linear;
        }
        .dropdown-list {
          @apply z-[16];
          li {
            a {
              @apply text-black;
            }
          }
        }
      }

      .lang_btn {
        @apply w-[120px] border-0 outline-none shadow-none bg-transparent text-black;
        .p-dropdown-trigger {
          @apply w-fit;
          .p-icon {
            @apply text-black;
          }
        }
        .link {
          @apply text-black;
        }
      }
    }
  }
}
.no_back {
  @apply absolute z-[16] right-0 top-0 left-0 bg-transparent;
}
.nav-links {
  ul {
    @apply flex items-center gap-1 flex-wrap;

    li {
      a {
        @apply p-2 font-medium text-secondary transition ease-linear;

        &.router-link-active.router-link-exact-active,
        &:hover {
          @apply text-primary;
        }
      }
    }
    .lang_btn {
      @apply w-[120px] border-0 outline-none shadow-none bg-transparent text-secondary;
      .p-dropdown-trigger {
        @apply w-fit;
        .p-icon {
          @apply text-secondary;
        }
      }
      &.p-focus {
        @apply outline-none shadow-none;
      }
      .p-inputtext {
        @apply outline-none shadow-none;
      }
    }
  }
}
</style>
