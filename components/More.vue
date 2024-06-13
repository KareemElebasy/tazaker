<template>
    <div class="bg-white pb-7">
        <h2 class="text-3xl font-bold  mb-[30px] mt-[70px] capitalize">{{ title }}</h2>
        <div class="card rounded bg-white p-4 shadow-md rounded-[20px] flow-root">
            <!-- right -->
            <div class="flex float-right gap-2" v-if="prev!=null">
                <nuxt-link :to="prevLink" class=" m-auto">
                    <div class="gold-text">
                        <p class="font-bold">
                            <i class="ml-1 fas fa-arrow-right"></i>                             
                            {{$t("labels.prev")}}
                        </p>
                    </div>
                </nuxt-link>
                <img :src="prevImg" alt="Card Image" class="w-[90px] h-auto m-auto" />
                <h2 class="text-xl font-medium m-auto">{{ prevTitle }}</h2>
            </div>
            <!-- left -->
            <div class="flex float-left gap-2" v-if="next!=null">
                <h2 class="text-xl font-medium m-auto">{{ nextTitle }}</h2>
                <img :src="nextImg" alt="Card Image" class="w-[90px] h-auto m-auto" />
                <nuxt-link :to="nextLink" class=" m-auto">
                    <div class="gold-text">
                        <p class="font-bold">
                            {{$t("labels.next")}}
                            <i class="ml-1 fas fa-arrow-left"></i>
                        </p>
                    </div>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        prevImg: {
            type: String,
            required: true,
        },
        nextImg: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        prevTitle: {
            type: String,
            required: true,
        },
        nextTitle: {
            type: String,
            required: true,
        },
        nextLink: {
            type: String,
            required: false
        },
        prevLink: {
            type: String,
            required: false
        },
        prev:{
            type: String,
            required: true,
        },
        next:{
            type: String,
            required: true,
        }
    },
};
</script>