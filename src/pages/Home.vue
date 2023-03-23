<style scoped>
.no-ruler::-webkit-scrollbar {
    display: none;
}
</style>

<template>
    <!-- header -->
    <header class="flex justify-between items-center text-gray-700 p-6">
        <h1 class="text-3xl tracking-wider font-bold">Battleground</h1>
        <!-- icons -->
        <section class="flex gap-6 text-xl">
            <button><i class="fa-solid fa-gamepad"></i></button>
            <button><i class="fa-regular fa-square-plus"></i></button>
        </section>
    </header>
    <!-- People activities -->
    <section class="w-full flex gap-2 overflow-x-scroll px-3 py-5 mb-5 no-ruler">
        <template v-for="people in peoples" :key="people.name">
            <RoundedActivity :people="people"></RoundedActivity>
        </template>
    </section>
    <!-- Live Streams -->
    <SectionTitle title="Live Streams"></SectionTitle>
    <section class="w-full flex gap-2 overflow-x-scroll pl-6 py-5 mb-5 no-ruler">
        <template v-for="stream in 3" :key="stream">
            <StreamCard></StreamCard>
        </template>
    </section>
    <!-- Recent lives -->
    <SectionTitle title="Recent lives" class="mb-4"></SectionTitle>
    <section class="w-full px-6 columns-2">
        <template v-for="live in lives" :key="live">
            <LiveCard :wallpaper="live"></LiveCard>
        </template>
    </section>
</template>

<script setup>

import RoundedActivity from '@/components/RoundedActivity.vue'
import SectionTitle from '@/components/SectionTitle.vue'
import StreamCard from '@/components/StreamCard.vue'
import LiveCard from '@/components/LiveCard.vue'

const peoples = [
    {
        avatar: 'https://images.unsplash.com/photo-1597938430467-c7a5f65c24f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGdhbWVyfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        name: 'Rk Gaming',
        isLive: true
    },
    {
        avatar: 'https://images.unsplash.com/photo-1597938430467-c7a5f65c24f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGdhbWVyfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        name: 'Antaryami',
        isLive: true
    },
    {
        avatar: 'https://images.unsplash.com/photo-1597938430467-c7a5f65c24f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGdhbWVyfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        name: 'Scout Gaming',
        isLive: true
    },
    {
        avatar: 'https://images.unsplash.com/photo-1597938430467-c7a5f65c24f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGdhbWVyfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        name: 'Rk Gaming',
        isLive: false
    },
    {
        avatar: 'https://images.unsplash.com/photo-1597938430467-c7a5f65c24f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGdhbWVyfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        name: 'Rk Gaming',
        isLive: false
    },
    {
        avatar: 'https://images.unsplash.com/photo-1597938430467-c7a5f65c24f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGdhbWVyfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        name: 'Rk Gaming',
        isLive: false
    },
]

const lives = [
    'https://images.unsplash.com/photo-1557461762-e08315322e3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHViZ3xlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1579912436598-1156352c546c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cHViZ3xlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1557461762-e08315322e3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHViZ3xlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1579912436598-1156352c546c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cHViZ3xlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1557461762-e08315322e3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHViZ3xlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1579912436598-1156352c546c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cHViZ3xlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60'
]

</script>