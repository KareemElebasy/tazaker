<template>
  <div class="container grid grid-cols-12 gap-7">
    <div class="lg:col-span-6 col-span-12">
      <h4 class="text-2xl font-medium mb-5">
        {{ $t("labels.sendMessage2") }}
      </h4>

      <form class="pt-8" @submit.prevent="handleSubmit">
        <div class="space-y-2 mb-5">
          <input
            type="text"
            class="border rounded-[30px] p-3 w-full outline-none"
            id="sender_name"
            :placeholder="$t('placeholder.name')"
            v-model="contactUsForm.sender_name"
          />
        </div>

        <div class="space-y-2 mb-5">
          <input
            type="email"
            class="border rounded-[30px] p-3 w-full outline-none"
            id="sender_email"
            :placeholder="$t('placeholder.email')"
            v-model="contactUsForm.sender_email"
          />
        </div>

        <div class="space-y-2 mb-5">
          <input
            type="tel"
            class="border rounded-[30px] p-3 w-full outline-none"
            id="sender_phone"
            :placeholder="$t('placeholder.phoneNumber')"
            v-model="contactUsForm.sender_phone"
          />
        </div>

        <div class="space-y-2 mb-5">
          <input
            type="text"
            class="border rounded-[30px] p-3 w-full outline-none"
            id="subject"
            :placeholder="$t('placeholder.address')"
            v-model="contactUsForm.subject"
          />
        </div>

        <textarea
          class="border rounded-[15px] p-3 w-full outline-none"
          rows="4"
          id="content"
          :placeholder="$t('placeholder.write')"
          v-model="contactUsForm.content"
        ></textarea>

        <button type="submit" class="base-btn m-auto mt-8">
          {{ $t("BUTTONS.send") }}
        </button>
      </form>
    </div>

    <div class="lg:col-span-6 col-span-12">
      <img
        src="~/assets/images/images/contactusForm.png"
        alt="magic-tickets"
        class="w-full h-full"
      />
    </div>
  </div>
</template>

<script setup>
import { useToast, POSITION } from "vue-toastification";

const contactUsForm = reactive({
  sender_name: "",
  sender_email: "",
  sender_phone: "",
  content: "",
  subject: "",
});
const toast = useToast();
const config = useRuntimeConfig();


const handleSubmit = async () => {
  const frmData = new FormData();
  frmData.append("sender_name", contactUsForm.sender_name);
  frmData.append("sender_email", contactUsForm.sender_email);
  frmData.append("sender_phone", contactUsForm.sender_phone);
  frmData.append("content", contactUsForm.content);
  frmData.append("subject", contactUsForm.subject);

  try {
    await $fetch(`${config.public.baseURL}contact_us/contact_message`, {
      method: "POST",
      body: frmData,
      headers: {
        Accept: "application/json",
        // lang: i18n.locale.value,
        // "Accept-Language": i18n.locale.value,
      },
    });
    toast.success("Sent Successfully!", {
      timeout: 2000,
      position: POSITION.BOTTOM_RIGHT,
    });
    contactUsForm.sender_name = "";
    contactUsForm.sender_email = "";
    contactUsForm.sender_phone = "";
    contactUsForm.content = "";
    contactUsForm.subject = "";
  } catch (err) {
    toast.error(err.response._data.message, {
      timeout: 2000,
      position: POSITION.BOTTOM_RIGHT,
    });
  }
};
</script>
