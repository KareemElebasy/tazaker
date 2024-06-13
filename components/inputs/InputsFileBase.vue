<template>
    <VeeField :type="type" :name="name" v-slot="{ field, meta }">
      <div
        class="input_wrapper"
        :class="(
          !meta.valid && meta.touched ? 'error':'',
          classes)
        "
      >
      <div
      class="drag-drop"
    @dragover.prevent
    @drop.prevent="handleFileDrop"
    :class="{ 'drag-over': isDragOver }">
        <label :for="id" class="label" v-if="label">{{ label }}</label>
        <input
          :type="type"
          :id="id"
          v-bind="field"
          :placeholder="placeholder"
          :autocomplete="autocomplete"
          @change="handleChange"
          :accept="accept"
          class="w-full min-h-[40px]"
          :class="
            !meta.valid &&
            meta.touched &&
            'border-red-500  placeholder:text-red-500 lg:text-lg text-sm error'
          "
        />
      <!-- {{ meta }}
        {{ currentValue }} -->
  
        <VeeErrorMessage
          v-if="!meta.valid && meta.touched"
          :name="name"
          as="div"
          class="error"
        />
    </div>
      </div>
    </VeeField>
  </template>
  
  <script setup>
  const emit = defineEmits(["change","handleFileDrop", "update:modelValue"]);
  const currentValue = ref(null);
  
  const handleChange = (event) => {
    emit("change", event);
    emit('update:modelValue' ,event.value)
  };
  
  const handleFileDrop = (event) => {
    console.log(event);
    emit("handleFileDrop", event);

  };
  
  
const isDragOver = ref(false);
const filePreview = ref(null);

// const handleFileDrop = (event) => {
//     console.log(event)
//   event.preventDefault();
//   isDragOver.value = false;

//   const cvFile = event.dataTransfer.files[0];
//   if (cvFile) {
//     filePreview.value = cvFile;
//     emit('update:modelValue', cvFile); // Assuming you're using the dropped file as the model value
//   }
// };

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
    dropValue: {
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
    handleFileDrop: Function,
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
  
// .drag-drop {
//   border: 2px dashed #ccc;
//   padding: 20px;
//   text-align: center;
// }

// .drag-over {
//   border-color: #aaa;
// }

// .file-preview {
//   margin-top: 10px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// }
  .error {
    @apply text-red-500 text-sm mt-1;
  }
  </style>
  