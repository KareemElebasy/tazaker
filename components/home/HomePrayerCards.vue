<template>
    <div class="relative">
        <img :src="imgSrc" alt="weather" class=" w-fit h-fit" />
        <p class="absolute top-[25%] right-[25%] text-white text-center">{{ pray }}<br>{{ time }}</p>
    </div>
</template>

<script>
export default {
    props: {
        imgSrc: {
            type: String,
            required: true,
        },
        pray: {
            type: String,
            required: true,
        },
        time: {
            type: String,
            required: true,
        }
    }
}
</script>