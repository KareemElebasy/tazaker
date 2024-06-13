<template>
  <!-- pt-11 -->
  <footer id="footer" class="decoration-black mt-10">
    <div class="footerContent">
      <div class="container">
        <div class="flex flex-wrap">
          <div class="content_side flex-1 pt-3 md:pt-0">
            <div class="md:ps-8 pb-[60px] pt-9 mt-[80px]">
              <div class="flex flex-wrap">
                <div class="w-full mb-3 md:mb-0 md:w-6/12 lg:w-3/12 ml-[80px]">
                  <div
                    class="logo justify-center md:justify-normal grid grid-rows-1 w-2/2"
                  >
                    <nuxt-link class="decoration-black" :to="localePath('/')">
                      <img
                        src="~/assets/images/logo/logo.svg"
                        alt="logo"
                        class="w-fit h-fit"
                      />
                    </nuxt-link>
                    <p class="mt-4">{{ footer.site_description }}</p>

                    <div
                      class="social text-primary flex items-center justify-start mt-6 gap-5 flex-wrap"
                    >
                      <p class="text-[#969696]">{{ $t("labels.share") }} :</p>
                      <a
                        :href="footer.facebook_link"
                        v-if="footer.facebook_link"
                        target="_blank"
                      >
                        <i class="fa-brands fa-facebook text-xl"></i>
                      </a>
                      <a
                        :href="footer.twitter_link"
                        v-if="footer.twitter_link"
                        target="_blank"
                      >
                        <i class="fa-brands fa-twitter text-xl"></i>
                      </a>
                      <a
                        :href="footer.instagram_link"
                        v-if="footer.instagram_link"
                        target="_blank"
                      >
                        <i class="fa-brands fa-instagram text-xl"></i>
                      </a>
                      <a
                        :href="footer.youtube_link"
                        v-if="footer.youtube_link"
                        target="_blank"
                      >
                        <i class="fa-brands fa-youtube text-xl"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="links w-full mb-3 md:mb-0 md:w-6/12 lg:w-3/12 ml-3">
                  <h2 class="text-medium font-bold mb-5">
                    {{ $t("importantLinks") }}
                  </h2>
                  <ul>
                    <li>
                      <nuxt-link :to="localePath('/')">{{ $t("NAV.home") }}</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link :to="localePath('/about-us')">{{
                        $t("NAV.about")
                      }}</nuxt-link>
                    </li>

                    <li>
                      <nuxt-link :to="localePath('/services')">{{
                        $t("NAV.ourServices")
                      }}</nuxt-link>
                    </li>
                  </ul>
                </div>

                <div class="links w-full mb-3 md:mb-0 md:w-6/12 lg:w-3/12">
                  <h2 class="text-medium font-bold mb-5">
                    {{ $t("labels.quickLinks") }}
                  </h2>
                  <ul>
                    <li>
                      <nuxt-link :to="localePath('/our-projects')">{{
                        $t("NAV.ourProjects")
                      }}</nuxt-link>
                    </li>

                    <li>
                      <nuxt-link to="/media-center">{{ $t("NAV.gallery") }}</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link :to="localePath('/contact-us')">{{
                        $t("NAV.contactUs")
                      }}</nuxt-link>
                    </li>
                  </ul>
                </div>
                <div class="contact_info w-full mb-3 md:mb-0 md:w-6/12 lg:w-2/12">
                  <div class="inner_item">
                    <h2 class="text-medium font-bold mb-5">
                      {{ $t("labels.contactUs") }}
                    </h2>
                    <div class="item" v-if="footer.phone">
                      <div class="icon">
                        <img
                          src="~/assets/images/icons/mobile.svg"
                          alt="phone_icon"
                          class="w-fit h-fit"
                        />
                      </div>
                      <div class="content">
                        <h3 class="title font-bold">{{ $t("HEADERS.phoneNumber") }}</h3>
                        <div class="desc">
                          <p aria-label="phone-number" dir="ltr">+{{ footer.phone }}</p>
                        </div>
                      </div>
                    </div>
                    <div class="item" v-if="footer.email">
                      <div class="icon">
                        <img
                          src="~/assets/images/icons/email.svg"
                          alt="phone_icon"
                          class="w-fit h-fit"
                        />
                      </div>
                      <div class="content">
                        <h3 class="title font-bold">{{ $t("HEADERS.emailAddress") }}</h3>
                        <div class="desc">
                          <a :href="footer.email">{{ footer.email }}</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p class="copyrights py-4 text-center border-t">
              <bdi>
                {{ $t("labels.allRightsReservedTo") }}
                <span class="gold-text"> {{ $t("labels.tazakerCompany") }} </span>
                @{{ year }}
              </bdi>
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const footer = ref([]);
const isLoading = ref([]);
const year = computed(() => new Date().getFullYear());
const localePath = useLocalePath();

const { data: res, pending: load } = await useAPILazyFetch("contactFooter", {
  method: "get",
});

watch(res, (res) => {
  if (res) {
    footer.value = res.data;
  }
});
watch(load, (load) => {
  isLoading.value = load;
});
</script>

<style lang="scss">
footer {
  .footerContent {
    background-color: #f4f8ff;
  }

  .content_side {
    .contact_info {
      .inner_item {
        .item {
          @apply flex items-start mb-3 last:mb-0;
          .icon {
            @apply me-2 w-8 h-8 flex items-center justify-center bg-[#C8A45D1A] rounded-full;
          }
          .content {
            h3.title {
              @apply text-base mb-1;
            }
            a,
            p {
              @apply font-normal text-base mb-1;
            }
          }
        }
      }
    }
    .links {
      li {
        &:not(:last-child) {
          @apply mb-3;
        }
        a {
          @apply text-lg capitalize hover:text-primary;
        }
      }
    }
  }
}
</style>
