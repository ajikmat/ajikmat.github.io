<script setup></script>

<template>
    <div class="h-52 bg-gradient-to-r from-cyan-500 to-blue-500 shadow">
        <div class="container max-w-[1024px] relative w-full h-52 mx-auto px-10">
            <h1 class="absolute bottom-4 text-3xl font-bold text-white">Portfolio</h1>
        </div>
    </div>

    <main class="container mx-auto p-10 max-w-[1024px]">
        <RouterView />
    </main>
</template>
