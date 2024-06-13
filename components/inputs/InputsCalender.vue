<template>
  <VeeField :name="name" v-slot="{ field, meta }" ref="inputsSelect">
    <div
      class="select_wrapper"
      :class="{
        error: !meta.valid && meta.touched,
      }"
    >
    <Calendar v-model="currentValue" view="year" dateFormat="yy"
      v-bind="field"
        :placeholder="placeholder"
        optionLabel="name"
        optionValue="id"
        class="w-full min-h-[50px]"
        dataKey="id"
        />
        <!-- @change="handleDropdownChange" -->
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
const emit = defineEmits(["change", "update:modelValue"]);
import Calendar from 'primevue/calendar';
const currentValue = ref(new Date().getFullYear());
const handleDropdownChange = (event) => {
  emit("change", event);
  emit('update:modelValue' ,event.value)
};

const props = defineProps({
  name: {
    required: true,
  },
  modelValue: {
    required: false,
  },
  label: {
    type: String,
    required: false,
  },
  optionLabel: {
    default: "name",
    required: false,
  },
  optionValue: {
    default: "id",
    required: false,
  },
  dataKey: {
    default: "id",
    required: false,
  },
  id: {
    type: String,
    required: true,
  },
  placeholder: {
    required: true,
  },
  change: Function,
});

 watch(
  () => props.modelValue,
  () => {
    currentValue.value =props.modelValue || null;
  },{
    immediate: true
  }
);
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
