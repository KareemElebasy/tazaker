<template>
  <VeeField :name="name" v-slot="{ field, meta }">
    <div
      class="select_wrapper"
      :class="{
        error: !meta.valid && meta.touched,
      }"
    >
      <Dropdown
        v-bind="field"
        :options="options"
        :placeholder="placeholder"
        optionLabel="name"
        optionValue="id"
        class="w-full min-h-[50px]"
        dataKey="id"
        v-model="currentValues"
        multiple
      />

      <VeeErrorMessage
        v-if="!meta.valid && meta.touched"
        :name="name"
        as="div"
        class="text-red-500 text-sm"
      />
    </div>
  </VeeField>
</template>

<script setup>
import Dropdown from "primevue/dropdown";

const currentValues = ref([]);  // Use an array for multiple values

defineProps({
  options: {
    required: true,
  },
  name: {
    required: true,
  },
  label: {
    type: String,
    required: false,
  },
  optionLabel: {
    default: "name",
    required: false,
  },
  id: {
    type: String,
    required: true,
  },
  placeholder: {
    required: true,
  },
});
</script>

<style lang="scss">
.select_wrapper {
  &.error {
    .p-dropdown {
      @apply border-red-500;
    }
  }
}
</style>
