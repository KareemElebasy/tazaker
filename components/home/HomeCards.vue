<template>
    <div class=" p-8 rounded-lg text-center">
        <img :src="imgSrc" class="m-auto w-fit h-fit" :class="imgClass" :alt="imgAlt">
        <h4 class="gold-text font-bold text-xl my-3 capitalize ">
            {{ title }}
        </h4>
        <p>
            {{ description }}
        </p>
    </div>
</template>

<script>
export default {
    props: {
        imgSrc: {
            type: String,
            required: true,
        },
        imgAlt: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        imgClass: {
            type: String,
            required: false,
        }
    }
}
</script>