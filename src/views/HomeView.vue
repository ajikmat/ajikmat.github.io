<template>
    <div class="flex flex-col">
        <h3 class="text-3xl font-bold text-primary-900 mb-8">
            Hello, I'm <span class="text-primary-600">Haziq Mohamad</span>!
        </h3>

        <div class="flex gap-8 mb-12">
            <div class="flex flex-col gap-8 items-start">
                <div class="border-l-4 border-primary ps-4 flex">
                    <p class="text-base">
                        Experienced <span class="font-semibold">Frontend Developer</span> with over
                        a year's expertise, specializing in
                        <span class="font-semibold text-green-500">VueJS</span> and
                        <span class="font-semibold text-primary">Flutter</span>. Proficient in
                        crafting powerful and intuitive user interfaces to elevate the digital
                        experience.
                    </p>
                </div>

                <button
                    class="rounded-lg px-4 py-2 border shadow-sm font-semibold text-white hover:border-slate-300 bg-primary-500 hover:bg-primary-600"
                >
                    My Resume
                </button>
            </div>

            <div class="h-64 flex-shrink-0 border p-10 w-64 rounded bg-slate-100"></div>
        </div>

        <section class="mb-12">
            <h2 class="text-2xl font-semibold mb-4">My Stack</h2>

            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div
                    v-for="stack in stacks"
                    :key="stack.title"
                    class="group flex p-4 border rounded gap-2 items-center shadow-sm hover:bg-slate-50 cursor-pointer hover:-translate-y-1 transition-all"
                >
                    <img
                        :src="stack.svgSrc"
                        class="w-5 h-5 grayscale group-hover:grayscale-0"
                        :alt="stack.title"
                    />

                    <p class="font-semibold flex-none">{{ stack.title }}</p>
                </div>
            </div>
        </section>

        <section>
            <h2 class="text-2xl font-semibold mb-4">Project</h2>
        </section>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            stacks: [
                {
                    title: 'Flutter',
                    svgSrc: '/src/assets/svg/flutter.svg',
                },
                {
                    title: 'VueJS',
                    svgSrc: '/src/assets/svg/vue.svg',
                },
                {
                    title: 'Git',
                    svgSrc: '/src/assets/svg/git.svg',
                },
                {
                    title: 'Tailwind CSS',
                    svgSrc: '/src/assets/svg/tailwind.svg',
                },
                {
                    title: 'Bootstrap',
                    svgSrc: '/src/assets/svg/bootstrap.svg',
                },
                {
                    title: 'Javascript',
                    svgSrc: '/src/assets/svg/javascript.svg',
                },
                {
                    title: 'Dart',
                    svgSrc: '/src/assets/svg/dart.svg',
                },
                {
                    title: 'HTML5',
                    svgSrc: '/src/assets/svg/html.svg',
                },
            ],
        };
    },
};
</script>
