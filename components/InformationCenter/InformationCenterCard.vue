<template>
  <div class="info_center_card">
    <Accordion :multiple="true" :activeIndex="[0]">
      <AccordionTab v-for="item in items" :key="item.id">
        <template #header>
          <div class="inner_header">
            <img
              src="~/assets/images/images/informationCenter1.svg"
              alt="Card Image"
              class="ml-3 w-fit h-fit"
            />
            <h2 class="text-2xl mt-2 font-bold">{{ item.title }}</h2>
          </div>
        </template>
        <p>{{ item.description }}</p>

        <div class="flex mt-5 space-x-4" v-if="item.image">
          <p class="ml-4 w-[80px]">{{ $t("labels.photos") }}:</p>
          <div class="flex flex-wrap gap-2 flex-1">
            <div v-for="(img, index) in item.image" :key="index">
              <Image
                :src="img"
                alt="image"
                class="overflow-hidden w-full"
                imageClass="rounded-3xl object-contain w-full h-[150px] "
                preview
              />
            </div>
          </div>
        </div>
        <div v-if="item.attachment">
          <div class="flex mt-5 space-x-4">
            <p class="ml-4 w-[80px]">{{ $t("labels.videos") }}:</p>
            <div v-for="(video, index) in item.attachment.filter((i)=> i.includes('mp4'))" :key="index">
              <iframe :src="video" width="200px" height="200px"></iframe>
              <div @click="visible = true">     <i class="fa fa-eye"></i>      </div>

                <Dialog v-model:visible="visible" modal  :style="{ width: '50vw' }">
                  <iframe :src="video" width="600px" height="600px" class="m-auto"></iframe>
                  
                </Dialog>
            </div>
          </div>
        </div>
        <div class="flex mt-5 space-x-4" v-if="item.attachment">
          <p class="ml-4 w-[80px]">{{ $t("labels.attachments") }}:</p>
          <div v-for="(attach, index) in item.attachment.filter((i)=> i.includes('pdf'))" :key="index">
            <a :href="attach" target="_blank" download>
              <div class="border rounded-lg space-x-3 flex p-2">
                <img
                  src="~/assets/images/images/informationCenter/pdf.svg"
                  alt="pdf"
                  class="ml-3 m-auto w-fit h-fit"
                />
                <p class="m-auto font-medium">
                  {{ $t("labels.PDFfile") }}
                </p>
                <img
                  src="~/assets/images/images/mediaCenter/installIcon.svg"
                  class="w-fit h-fit m-auto hover:cursor-pointer"
                  alt="download_PDF"
                />
              </div>
            </a>
          </div>
        </div>
      </AccordionTab>
    </Accordion>
  </div>
</template>

<script setup>
import Image from "primevue/image";
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
import Dialog from 'primevue/dialog';
const visible = ref(false);

const props = defineProps({
  items: {
    required: true,
  },
});
</script>

<style lang="scss">
.info_center_card {
  .p-accordion {
    .p-accordion-content {
      border: 0;
    }
    .p-accordion-tab {
      @apply mb-4 last:mb-0 rounded-3xl overflow-hidden;
      box-shadow: 0px 7px 58px 0px #b1b1b11a;
      .p-accordion-header .p-accordion-header-link {
        &:hover {
          background: #fff;
        }
        flex-direction: row-reverse;
        justify-content: space-between;
        background: #fff;
        border: none;
        box-shadow: none;
      }
      svg {
        @apply text-primary;
      }
    }
  }
  .inner_header {
    @apply flex items-center;
  }
}
</style>
