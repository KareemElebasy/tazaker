<template>
    <div class="phone_wrapper">
      <VeeField type="phone" name="phone" v-slot="{ field, meta }">
        <div
          class="input_wrapper mb-0"
          :class="(
          !meta.valid && meta.touched ? 'error':'',
          classes)
        "
        >
          <VeeField name="phone_code" v-slot="{ field }">
            <Dropdown
              v-bind="field"
              :options="countries"
              class="w-[90px] phone_code_wrapper"
              dataKey="id"
              ref="dropValue"
              v-model="country"
            >
              <template #value="slotProps">
                <div v-if="slotProps.value" class="flex items-center">
                  <nuxt-img
                    width="20"
                    height="15"
                    :alt="slotProps.value.title"
                    :src="slotProps.value.flag"
                    :srcset="`${slotProps.value.flag} 480w, ${slotProps.value.flag} 1080w`"
                    :class="`me-2 w-5 h-auto flag flag-${slotProps.value.phone_code}`"
                    format="webp"
                    loading="lazy"
                  />
                  <div :class="codeColor" :style="phoneColor">
                    +{{ slotProps.value.phone_code }}
                  </div>
                </div>
              </template>
              <template #option="slotProps">
                <div class="flex items-center">
                  <nuxt-img
                    format="webp"
                    width="20"
                    height="15"
                    :alt="slotProps.option.title"
                    :src="slotProps.option.flag"
                    :srcset="`${slotProps.option.flag} 480w, ${slotProps.option.flag} 1080w`"
                    :class="`me-2 w-5 h-4 flag flag-${slotProps.option.phone_code}`"
                    loading="lazy"
                  />
                  <div>+ {{ slotProps.option.phone_code }}</div>
                </div>
              </template>
            </Dropdown>
          </VeeField>
          <input
            type="phone"
            id="phone"
            v-bind="field"
            :placeholder="placeholder"
            class="font-light border border-opacity-10 rounded-xl"
            :class="
              !meta.valid &&
              meta.touched &&
              'border-red-500  placeholder:text-red-500 lg:text-lg text-sm error'
            "
          />
        </div>
  
        <VeeErrorMessage
          v-if="!meta.valid && meta.touched"
          name="phone"
          as="div"
          class="text-red-500 text-sm"
        />
      </VeeField>
    </div>
  </template>
  
  <script setup>
  import Dropdown from "primevue/dropdown";
  import { ref } from "vue";
  defineProps({
    placeholder: {
      required: true,
    },
    classes: {
      required: false,
    },
    phoneColor: {
      required: false,
    },
    codeColor: {
      required: false,
      default: "text-black",
    },
  });
  const dropValue = ref();
  
  // const props = defineProps(["modelValue", "name", "label"]);
  const emit = defineEmits(["code_change", "update:modelValue"]);
  
  const value = computed({
    get() {
      return props.modelValue;
    },
    set(newValue) {
      emit("update:modelValue", newValue);
    },
  });
  
  const countries = ref([]);
  const country = ref(null);
  const config = useRuntimeConfig();
  const i18n = useI18n();
  
  function fetchData() {
    $fetch("recruitment/countries", {
      method: "GET",
      baseURL: config.public.baseURL,
      headers: {
        "Accept-Language": i18n.locale.value,
      },
    }).then((res) => {
      countries.value = res.data;
      country.value = res.data[0];
  
      // field.value = country.value;
      emit("code_change", country.value);
    });
  }
  
  onMounted(() => fetchData());
  </script>
  <style lang="scss">
  .help.is-danger {
    @apply text-red-700 text-sm;
    font-size: 14px !important;
  }
  .phone_wrapper {
    @apply relative;
    .phone_code_wrapper {
      @apply absolute top-1/2 -translate-y-1/2 bg-transparent border-0 text-black;
      inset-inline-start: 10px;
      .p-dropdown-trigger {
        @apply w-fit text-black;
        svg {
          @apply w-3 h-3;
        }
      }
      .p-dropdown-label {
        @apply px-0;
      }
      &.p-focus {
        @apply shadow-none border-0;
      }
    }
    .input_wrapper {
      direction: ltr;
      @apply relative;
      input {
        @apply ps-[20%] text-sm;
      }
    }
  }
  
  body[dir="rtl"] {
    .phone_wrapper {
      .input_wrapper {
        input {
          // direction: rtl;
        }
      }
    }
  }
  </style>
  