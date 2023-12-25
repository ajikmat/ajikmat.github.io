<template>
    <div class="flex flex-col">
        <h3 class="text-3xl md:text-5xl font-bold text-primary-900 mb-8">
            Hello, I'm
            <span
                class="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#36d1dc] to-[#5b86e5]"
                >Haziq Mohamad</span
            >!
        </h3>

        <div class="flex flex-col-reverse sm:flex-row gap-8 mb-12">
            <div class="flex flex-col gap-8 items-start">
                <div class="border-l-4 border-slate-500 ps-4 flex">
                    <p class="text-sm sm:text-base text-slate-600">
                        Experienced
                        <span class="font-semibold text-slate-800">Frontend Developer</span> with
                        over a year's expertise, specializing in
                        <span class="inline-flex items-baseline">
                            <span class="font-semibold text-emerald-600">VueJS</span>
                            <img src="/svg/vue.svg" alt="" class="self-center w-4 h-4 ms-0.5" />
                        </span>
                        and
                        <span class="inline-flex items-baseline">
                            <span class="font-semibold text-primary-600">Flutter</span>
                            <img
                                src="/svg/flutter.svg"
                                alt=""
                                class="self-center w-3.5 h-3.5 ms-0.5"
                            /> </span
                        >. Proficient in crafting powerful and intuitive user interfaces to elevate
                        the digital experience.
                    </p>
                </div>

                <div class="md:flex flex-col gap-1 ps-5 -mt-2 w-full hidden">
                    <div class="flex gap-1">
                        <MapPinIcon class="w-5 text-slate-500" />
                        <p class="font-medium text-sm text-slate-700">Ampang, Kuala Lumpur</p>
                    </div>

                    <div class="flex gap-1">
                        <AcademicCapIcon class="w-5 text-slate-500" />
                        <p class="font-medium text-sm text-slate-700">IIUM 22'</p>
                    </div>

                    <div class="flex gap-1">
                        <EnvelopeIcon class="w-5 text-slate-500" />
                        <p class="font-medium text-sm text-slate-700">haziqsk939@gmail.com</p>
                    </div>
                </div>

                <a
                    href="https://drive.google.com/file/d/1sblovEpHJUPW7nz-Hl3MXhscIspncVw-/view?usp=sharing"
                    target="_blank"
                    class="mx-auto sm:mx-0 rounded-lg px-4 py-2 border shadow-sm font-semibold text-white hover:border-slate-300 bg-primary-500 hover:bg-primary-600"
                >
                    My Resume
                </a>
            </div>

            <div
                class="size-48 md:size-64 flex-shrink-0 border rounded-full mx-auto overflow-clip shadow-lg bg-slate-100"
            >
                <img
                    src="/images/profile_picture.jpeg"
                    class="w-full h-full object-cover object-center"
                    alt="Haziq Mohamad"
                />
            </div>
        </div>

        <section class="mb-12">
            <h2 class="text-2xl font-semibold mb-4">My Stack</h2>

            <div class="grid grid-cols-12 gap-4">
                <div class="col-span-6 md:col-span-4" v-for="stack in stacks" :key="stack.title">
                    <div
                        class="group flex p-4 border rounded gap-2 items-center shadow-sm hover:bg-slate-50 cursor-pointer hover:-translate-y-1 transition-all"
                    >
                        <img
                            :src="getAssetPath(stack.svgSrc)"
                            class="w-5 h-5 md:grayscale group-hover:grayscale-0"
                            :alt="stack.title"
                        />

                        <p class="font-semibold truncate">{{ stack.title }}</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="mb-12">
            <h2 class="text-2xl font-semibold mb-4">Project</h2>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div
                    v-for="project in projects"
                    :key="project.title"
                    class="group flex flex-col border rounded overflow-clip items-start shadow-sm hover:bg-slate-50 cursor-pointer hover:-translate-y-1 transition-all"
                >
                    <div class="border-b relative">
                        <img :src="project.banner" :alt="project.title" />

                        <div class="absolute end-4 top-4">
                            <div class="rounded-full bg-slate-100/50">
                                <ArrowsPointingOutIcon
                                    class="w-8 h-8 p-2 text-slate-500 group-hover:text-slate-800 group-hover:scale-125 transition-all"
                                />
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-col p-4">
                        <div class="flex flex-wrap gap-2 mb-1">
                            <div
                                v-for="(badge, index) in project.badges"
                                :key="index"
                                class="flex text-xxs uppercase rounded items-center font-medium bg-slate-200 px-2 py-0.5"
                            >
                                <div class="w-1 h-1 me-1 rounded-full bg-slate-500" />
                                <span class="text-slate-600"> {{ badge }}</span>
                            </div>
                        </div>

                        <h6 class="text-lg font-semibold text-slate-800">{{ project.title }}</h6>

                        <p class="text-sm text-slate-500 line-clamp-3">
                            {{ project.description }}
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <h2 class="text-2xl font-semibold mb-4">Career</h2>

            <ul class="border-l border-slate-300 ms-3 py-4">
                <li
                    class="relative ms-4 sm:ms-10 mb-4"
                    v-for="(career, index) in careers"
                    :key="index"
                >
                    <div
                        class="absolute top-4 -left-[22.5px] sm:-left-[46.5px] w-3 h-3 rounded-full bg-slate-700 ring-4 ring-white"
                    />
                    <div class="border rounded py-4 px-8">
                        <h6 class="text-sm sm:text-base font-medium text-slate-500 mb-2">
                            {{ career.timeline }}
                        </h6>
                        <h4 class="text-base sm:text-xl font-semibold text-slate-800">
                            {{ career.title }}
                        </h4>

                        <h4 class="text-sm sm:text-base font-semibold text-slate-600 mb-2">
                            {{ career.company }}
                        </h4>

                        <div class="text-sm text-slate-500 mb-4">
                            {{ career.description }}
                        </div>

                        <div class="md:flex gap-2 justify-start hidden">
                            <template v-for="stack in career.stack">
                                <img class="w-6 h-6 grayscale hover:grayscale-0" :src="stack" />
                            </template>
                        </div>
                    </div>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
import stacks from '@/config/stacks';
import projects from '@/config/projects';
import careers from '@/config/career';
import { ArrowsPointingOutIcon } from '@heroicons/vue/24/solid';
import { MapPinIcon } from '@heroicons/vue/24/outline';
import { AcademicCapIcon } from '@heroicons/vue/24/outline';
import { EnvelopeIcon } from '@heroicons/vue/24/outline';

export default {
    components: { ArrowsPointingOutIcon, MapPinIcon, AcademicCapIcon, EnvelopeIcon },
    data() {
        return {
            stacks,
            projects,
            careers,
        };
    },
    methods: {
        getAssetPath(path) {
            return import.meta.env.BASE_URL + path;
        },
    },
};
</script>
