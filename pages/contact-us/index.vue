<template>
  <div class="about_page bg-white flow-root">
    <general-breadcrumb :items="items" />
    <div class="container">
      <div class="py-3 mb-5">
        <div class="flex ml-6 text-lg text-gray-500">
          <div
            @click="showContact"
            :class="{
              'gold-text font-bold underline underline-offset-8': showingContact,
            }"
            class="hover:cursor-pointer ml-6"
          >
            {{ $t("labels.contactInformation") }}
          </div>

          <div
            @click="showMessage"
            :class="{
              'gold-text font-bold underline underline-offset-8': showingMessage,
            }"
            class="hover:cursor-pointer"
          >
            {{ $t("labels.sendMessage") }}
          </div>
        </div>
      </div>

      <div>
        <contact-us-with-message v-if="showingContact" />

        <contact-us-info v-if="showingMessage" />
      </div>
    </div>
  </div>
</template>

<script setup>
const i18n = useI18n();
const items = {
  title: i18n.t("titles.hogagTitle"),
  links: [
    {
      path: "/",
      name: i18n.t("NAV.home"),
    },
    {
      path: "/contact-us",
      name: i18n.t("NAV.contactUs"),
    },
  ],
};

const showingMessage = ref(false);
const showingContact = ref(true);

const showContact = () => {
  showingMessage.value = false;
  showingContact.value = true;
};

const showMessage = () => {
  showingMessage.value = true;
  showingContact.value = false;
};
</script>

<style></style>
