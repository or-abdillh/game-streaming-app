<template>
    <section class="w-full px-6 flex justify-between items-center">
        <h1 class="text-2xl font-semibold">{{ props.title }}</h1>
        <router-link to="/" class="text-gray-600">View all</router-link>
    </section>
</template>

<script setup>

const props = defineProps({
    title: {
        type: String,
        default: 'Section Title'
    }
})

</script>