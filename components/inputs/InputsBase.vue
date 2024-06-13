<template>
  <VeeField :type="type" :name="name" v-slot="{ field, meta }">
    <div
      class="input_wrapper"
      :class="(
        !meta.valid && meta.touched ? 'error':'',
        classes)
      "
    >
      <label :for="id" class="label" v-if="label">{{ label }}</label>
      <input
        :type="type"
        :id="id"
        v-bind="field"
        :placeholder="placeholder"
        :autocomplete="autocomplete"
        v-model="currentValue"
        @change="handleChange"
        :accept="accept"
        class="w-full min-h-[40px]"
        :class="
          !meta.valid &&
          meta.touched &&
          'border-red-500  placeholder:text-red-500 lg:text-lg text-sm error'
        "
      />

      <VeeErrorMessage
        v-if="!meta.valid && meta.touched"
        :name="name"
        as="div"
        class="error"
      />
    </div>
  </VeeField>
</template>

<script setup>
const emit = defineEmits(["change", "update:modelValue"]);
const currentValue = ref(null);

const handleChange = (event) => {
  emit("change", event);
  emit('update:modelValue' ,event.value)
};

const props = defineProps({
  id: {
    required: true,
  },
  name: {
    required: true,
  },
  label: {
    required: false,
  },
  modelValue: {
    required: false,
  },
  placeholder: {
    required: true,
  },
  classes: {
    required: false,
  },
  autocomplete: {
    required: false,
  },
  accept: {
    required: false,
  },
  type: {
    required: false,
    default: "text",
  },
  change: Function,
});

watch(
  () => props.modelValue,
  () => {
    currentValue.value =props.modelValue;
  },{
    immediate: true
  }
);
// const emit = defineEmits(["uplaod_change"]);
</script>

<style lang="scss" scoped>
.error {
  @apply text-red-500 text-sm mt-1;
}
</style>
