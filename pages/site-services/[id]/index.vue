<template>
  <div class="recruitmentForm bg-white flow-root">
    <general-breadcrumb :items="items" />

    <VeeForm as="div" @submit="onSubmit" :validation-schema="schema" ref="formRef">
      <form @click.stop class="pt-8">
        <div class="container rounded-2xl py-10 mt-8">
          <div class="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8">
            <div class="space-y-2">
              <label for="name">{{ $t("titles.name") }}</label>
              <inputs-base
                id="name"
                name="name"
                type="text"
                :placeholder="$t('placeholder.name')"
              />
            </div>
            <div class="space-y-2">
              <label for="persons_count">{{ $t("titles.persons_count") }}</label>
              <inputs-base
                id="persons_count"
                name="persons_count"
                type="number"
                :placeholder="$t('placeholder.persons_count')"
              />
            </div>
          </div>

          <button type="submit" class="base-btn mt-8 ms-auto lg:w-[25%]">
            {{ $t("BUTTONS.send") }}
          </button>
        </div>
      </form>
    </VeeForm>
  </div>
</template>

<script setup>
import { useToast, POSITION } from "vue-toastification";
import * as yup from "yup";

const i18n = useI18n();
const route = useRoute();
const id = route.params.id;

const items = reactive({
  title: i18n.t("titles.tazakerTitle"),
  title2: i18n.t("titles.tazakerTitle2"),
  links: [
    {
      path: "/",
      name: i18n.t("NAV.home"),
    },
    {
      path: "/services",
      name: i18n.t("HEADERS.site_services"),
    },
  ],
});

const formRef = ref(null);

const schema = yup.object().shape({
  name: yup.string().required(i18n.t("validation.name")),
  persons_count: yup.number().required(i18n.t("validation.persons_count")),
});

function onSubmit(e, actions) {
  console.log("submit");
}
</script>

<style lang="scss"></style>
