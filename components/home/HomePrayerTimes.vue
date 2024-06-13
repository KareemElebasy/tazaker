<template>
  <div
    class="card mosque rounded bg-white p-4 shadow rounded-[20px] space-y-8 md:p-9 bg-[url('~/assets/images/images/home/mosque.png')] bg-no-repeat"
  >
    <h4 class="font-bold text-3xl">
      {{ $t("titles.prayingTimesInMakkahAndElMadinah") }}
    </h4>
    <div class="flex !flex-row md:justify-between justify-around lg:w-[18%] text-gray-500">
      <p class="">{{ $t("labels.choose") }}:</p>
      <div class="flex !flex-row city" @click="handleCityClick('makkah')">
        <img
          src="~/assets/images/images/home/makkahIcon.svg"
          alt="time"
          class="ml-2 w-fit h-fit"
        />
        <p
          class="font-bold text-lg"
          :class="{ 'selectedCity underline': clickedCity === 'makkah' }"
        >
          {{ $t("labels.Makkah") }}
        </p>
      </div>
      <div class="flex !flex-row city" @click="handleCityClick('madina')">
        <img
          src="~/assets/images/images/home/AlMadinaIcon.svg"
          alt="time"
          class="ml-2 w-fit h-fit"
        />
        <p
          class="font-bold text-lg"
          :class="{ 'selectedCity underline': clickedCity === 'madina' }"
        >
          {{ $t("labels.Madinah") }}
        </p>
      </div>
    </div>
    <div class="md:flex justify-between lg:w-[50%]">
      <div class="flex !flex-row items-center gap-3 mb-3">
        <img
          src="~/assets/images/images/home/clockIcon.svg"
          alt="time"
          class="w-fit h-fit"
        />
        <p class="flex">
          {{ $t("labels.timeNow") }}: &nbsp;
          <span class="font-bold">
            {{ currentTime }}
          </span>
        </p>
      </div>
      <div v-if="this.weather">
        <div class="flex !flex-row gap-3">
          <img
            src="~/assets/images/images/home/weatherIcon.svg"
            alt="weather"
            class="w-fit h-fit"
          />
          <p>
            {{ $t("labels.weather") }}: &nbsp;
            <span class="font-bold"
              >{{ this.weather.temp_celsius }}
              {{$t("labels.celius")}} /
              {{ this.weather.temp_fahrenheit }}
              {{ $t("labels.fehrn") }}</span
            >
          </p>
        </div>
      </div>
    </div>
    <div>
      <div class="flex !flex-row mb-3">
        <img
          src="~/assets/images/images/home/praytime.svg"
          alt="weather"
          class="w-fit h-fit"
        />
        <p>{{ $t("labels.prayTime") }}:</p>
      </div>
      <div class="columns-2 lg:columns-6 md:columns-3">
        <div v-if="this.prayingTimes">
          <div class="relative lg:mb-0 mb-4">
            <home-prayer-cards
              :imgSrc="Fajr"
              :pray="$t('labels.fajr')"
              :time="this.prayingTimes.Fajr"
            />
          </div>
          <div class="relative lg:mb-0 mb-4">
            <home-prayer-cards
              :imgSrc="Sunrise"
              :pray="$t('labels.sunrise')"
              :time="this.prayingTimes.Sunrise"
            />
          </div>
          <div class="relative lg:mb-0 mb-4">
            <home-prayer-cards
              :imgSrc="Dhuhr"
              :pray="$t('labels.duhor')"
              :time="this.prayingTimes.Dhuhr"
            />
          </div>
          <div class="relative lg:mb-0 mb-4">
            <home-prayer-cards
              :imgSrc="Asr"
              :pray="$t('labels.asr')"
              :time="this.prayingTimes.Asr"
            />
          </div>
          <div class="relative lg:mb-0 mb-4">
            <home-prayer-cards
              :imgSrc="Maghrib"
              :pray="$t('labels.maghrib')"
              :time="this.prayingTimes.Maghrib"
            />
          </div>
          <div class="relative">
            <home-prayer-cards
              :imgSrc="Isha"
              :pray="$t('labels.isha')"
              :time="this.prayingTimes.Isha"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Fajr from "~/assets/images/images/prayer/Fajr.svg";
import Sunrise from "~/assets/images/images/prayer/Sunrise.svg";
import Dhuhr from "~/assets/images/images/prayer/Dhuhr.svg";
import Asr from "~/assets/images/images/prayer/Asr.svg";
import Maghrib from "~/assets/images/images/prayer/Maghrib.svg";
import Isha from "~/assets/images/images/prayer/Isha.svg";

export default {
  data() {
    return {
      Fajr,
      Sunrise,
      Dhuhr,
      Asr,
      Maghrib,
      Isha,
      prayingTimes: null,
      weather: null,
      clickedCity: null,
      currentTime: new Date().toLocaleTimeString(),
    };
  },
  methods: {
    timer() {
      setInterval(() => {
        this.currentTime = new Date().toLocaleTimeString();
      }, 1000);
    },
    async handleCityClick(city) {
      const frmData = new FormData();
      frmData.append("cityName", city);
      try {
        const response = await $fetch(
          `https://site-be.africa-sa.com/api/website/prayingTimes`,
          {
            method: "POST",
            body: frmData,
            headers: {
              Accept: "application/json",
              // lang: i18n.locale.value,
              // "Accept-Language": i18n.locale.value,
            },
          }
        );
        this.clickedCity = city;
        this.prayingTimes = response.data;
      } catch (err) {
        console.log(err);
      }
      try {
        const response = await $fetch(
          `https://site-be.africa-sa.com/api/website/currentWeather`,
          {
            method: "POST",
            body: frmData,
            headers: {
              Accept: "application/json",
              // lang: i18n.locale.value,
              // "Accept-Language": i18n.locale.value,
            },
          }
        );
        this.clickedCity = city;
        this.weather = response.data;
      } catch (err) {
        console.log(err);
      }
    },
  },
  mounted() {
    this.handleCityClick("makkah");
  },
  unmounted() {
    clearInterval(this.timer());
  },
};
</script>

<style lang="scss">
.read_more,
.selectedCity {
  @apply text-primary;
}

.city:hover {
  cursor: pointer;
}
</style>
