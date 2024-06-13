<template>
  <div class="base_breadcrumb">
    <div class="container">
      <div>
        <ul class="links flex-wrap gap-3">
          <li>
            <img
              src="~/assets/images/logo/small_logo.svg"
              alt="small logo"
              class="w-fit h-fit"
            />
          </li>

          <li v-for="link in items.links" :key="link.name">
            <nuxt-link :to="localePath(link.path)">
              {{ link.name }}
            </nuxt-link>
          </li>
        </ul>
        <h1
          class="text-secondary text-3xl leading-[2.5rem] lg:text-[45px] w-full max-w-[600px] lg:leading-[4rem] font-bold mt-3 capitalize"
        >
          {{ items.title }}
        </h1>
        <h1
          v-if="items.title2"
          class="text-primary text-3xl leading-[2.5rem] lg:text-[45px] w-full max-w-[600px] lg:leading-[4rem] font-bold mt-3 capitalize"
        >
          {{ items.title2 }}
        </h1>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  items: {
    required: true,
  },
});
</script>

<style lang="scss">
.base_breadcrumb {
  @apply pt-[200px] pb-[5rem] bg-[length:100%_450px] bg-no-repeat flex flex-col items-center justify-center;

  .links {
    @apply flex items-center gap-1 justify-start;
    li {
      @apply relative text-text-second sm:text-lg  last:me-0 text-center;

      &:not(:last-child) {
        &::after {
          content: "\e931";
          font-family: "primeicons";
          @apply inline-flex  ms-2;
        }
      }
      &:first-child {
        &::after {
          @apply hidden;
        }
      }
      &:last-child {
        @apply font-bold;
      }
    }
  }
}
body[dir="ltr"] {
  .base_breadcrumb {
    .links {
      li {
        &:not(:last-child) {
          &::after {
            content: "\e932";
          }
        }
      }
    }
  }
}
</style>
