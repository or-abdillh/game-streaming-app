<template>
    <section class="min-w-[25%] flex flex-col items-center">
        <!-- pict -->
        <section :class="`bg-[url('${props.people?.avatar}')]`"
            class="h-20 w-20 mb-3 relative rounded-full ring-2 ring-gray-400 ring-offset-4 bg-cover bg-center">
            <!-- live pill -->
            <span v-if="props.people?.isLive"
                class="absolute -bottom-2 left-2 inline-block rounded-xl bg-red-300 text-gray-100 text-xs px-3 py-1">
                <i class="fa-solid fa-wifi mr-1"></i>
                Live
            </span>
        </section>
        <!-- name -->
        <p class="text-center">{{ props.people?.name }}</p>
    </section>
</template>

<script setup>

const props = defineProps({
    people: {
        type: Object
    }
})

</script>