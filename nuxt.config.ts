// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    ssr: false,
    spaLoadingTemplate: false,
    // ========== START:: APP CONFIGURATIONS ========== //
    app: {
        // Start:: Head Configurations //
        head: {

            meta: [
                { charset: "utf-8" },
                {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1"
                },
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/logo.svg' },

            ],
            style: [],
            script: [],
            noscript: []
        },
        // End:: Head Configurations //
    },
    css: [
        'primevue/resources/primevue.css',
        'primevue/resources/themes/tailwind-light/theme.css',
        "primeicons/primeicons.css"
    ],
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/html-validator',
        '@vite-pwa/nuxt',
        'nuxt-swiper',
        '@nuxt/image',
        [
            '@nuxtjs/i18n',
            {
                locales: [
                    {
                        name: 'English',
                        code: 'en',
                        iso: 'en-US',
                        file: 'en.json',
                        dir: 'ltr',
                    },
                    {
                        name: 'عربي ',
                        code: 'ar',
                        iso: 'ar-AR',
                        file: 'ar.json',
                        dir: 'rtl',
                    }
                ],
                lazy: true,
                langDir: 'locales/',
                defaultLocale: 'ar',
                                detectBrowserLanguage: false,
                // detectBrowserLanguage: {
                //     useCookie: true,
                //     cookieKey: 'magic_tickets_website_lang',
                //     alwaysRedirect: true,
                //     fallbackLocale: 'ar'
                // },
                vueI18nLoader: true,
            }
        ],
        [
            '@pinia/nuxt', {

                autoImports: [
                    // automatically imports `defineStore`
                    'defineStore', // import { defineStore } from 'pinia'
                    ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
                ],

            }
        ],
        [
            '@vee-validate/nuxt',
            {
                // disable or enable auto imports
                autoImports: true,
                // Use different names for components
                componentNames: {
                    Form: 'VeeForm',
                    Field: 'VeeField',
                    ErrorMessage: 'VeeErrorMessage',
                },
            },
        ],

    ],

    tailwindcss: {
        cssPath: '~/assets/style/tailwind.scss',

    },
    // ========== START:: NUXT APP PLUGINS CONFIGURATIONS ========== //
    plugins: [
        '~/plugins/main.ts',
        '~/plugins/primeVue.ts',

        '~/plugins/i18n.client.ts',

        '~/plugins/vue-toastification.client',

    ],
    // ========== END:: NUXT APP PLUGINS CONFIGURATIONS ========== //

    runtimeConfig: {
        public: {
            baseURL: "https://tadhakir.tarfihia.phpv8.aait-d.com/api/website/",
            // baseURL: "https://site-be.africa-sa.com/api/website/",
        },
    },


    build: {
        transpile: ['primevue']
    },

    // nitro: {
    //     baseURL: "http://localhost:3000",
    //     prerender: {
    //         crawlLinks: true,
    //         failOnError: false,
    //     },
    // },

    vite: {

        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `@import "~/assets/style/main.scss";@import "~/assets/style/all.min.css";`
                }
            }
        },
    },
    // ========== START:: DEVELOPMENT SERVER CONFIGURATIONS ========== //
    swiper: {

    },
    dev: true,
    devServer: {
        https: false,
        host: "0.0.0.0",
        port: 5094,
        url: "http://localhost:5094"
    },
    // ========== END:: DEVELOPMENT SERVER CONFIGURATIONS ========== //
})
