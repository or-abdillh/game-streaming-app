<template>
    <section class="w-full relative rounded-2xl overflow-hidden mb-3">
        <!-- layer -->
        <section class="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-100 opacity-30"></section>
        <!-- account -->
        <section class="absolute w-full flex items-center gap-3 p-3">
            <span class="block w-8 h-8 overflow-hidden rounded-full">
                <img src="https://images.unsplash.com/photo-1597938430467-c7a5f65c24f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGdhbWVyfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt="">
            </span>
            <section class="text-gray-200">
                <h1 class="text-sm font-semibold">Mark Gaming</h1>
                <p class="text-xs">30 kills in yossshayaa</p>
            </section>
        </section>
        <!-- wallpaper -->
        <img :src="props.wallpaper" alt="">
    </section>
</template>

<script setup>

const props = defineProps({
    wallpaper: String
})

</script>