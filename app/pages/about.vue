<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => queryCollection('content').first())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

useSeoMeta({
  title: page.value.seo?.title || page.value.title,
  ogTitle: page.value.seo?.title || page.value.title,
  description: page.value.seo?.description || page.value.description,
  ogDescription: page.value.seo?.description || page.value.description
})
</script>

<template>
    <div
    v-if="page"
    class="relative">
        <div class="hidden lg:block">
            <UColorModeImage
                light="/images/light/line-1.svg"
                dark="/images/dark/line-1.svg"
                class="absolute pointer-events-none pb-14 left-0 top-0 object-cover h-[650px]"
            />
        </div>
        
        <UPageHero :ui="{ container: 'md:pt-1 lg:pt-1' }">
            <h1 class="text-5xl sm:text-6xl text-pretty tracking-tight font-bold text-highlighted text-center" style="margin-bottom: -5%;">About <span class="text-(--ui-primary)">Tuzzin</span></h1>
            <div class="text-lg sm:text-xl/8 text-muted text-pretty -mt-2" style="margin-left: 5%;">
                <ul class="list-disc">
                    <li>Tuzzin was started in 2015 with a simple goal of bringing Best in Class SaaS solutions to Banks.</li>
                    <li>Tuzzin’s Customer – Centric Delivery focuses on simplifying Technology Buzz and prescription of right solutions.</li>
                    <li>Our Team combines holistic experience across all areas of Technology to help you achieve your outcome, beyond your expectations.</li>
                    <li>Tuzzin currently serves 100+ Banks and we would love to keep serving more Banks, without sacrificing our quality / service.</li>
                    <li>We strongly believe that “Quality & Service are Paramount” & hence our Quality of Product & Customer Service has an average rating of 9/10.</li>
                </ul>
            </div>
        </UPageHero>
        <USeparator :ui="{ border: 'border-(--ui-primary)/30' }" />

        <UPageSection
        class="relative overflow-hidden"
        >
        
        <div class="@max-[1280px]:hidden">
          <!-- <UColorModeImage
            light="/images/light/line-6.svg"
            dark="/images/dark/line-6.svg"
            class="absolute left-5 -top-5 sm:top-0 h-full"
          /> -->
          <!-- <UColorModeImage
            light="/images/light/line-7.svg"
            dark="/images/dark/line-7.svg"
            class="absolute right-0 bottom-0 h-full"
          /> -->
          <UColorModeImage
            light="/images/light/line-3.svg"
            dark="/images/dark/line-3.svg"
            class="absolute -top-10 sm:top-0 right-1/2 h-24" 
            />
        </div>
        
        <div class="w-full max-w-(--ui-container) mx-auto">
            <div>
                <h2 class="text-3xl sm:text-4xl lg:text-5xl text-pretty tracking-tight font-bold text-highlighted text-center" style="margin-top: -5%;">
                    <div class="">
                        <p class="my-5 leading-7 text-pretty">How are we <span class="text-primary">different</span> ?</p>
                    </div>
                </h2>
                <ul class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                    <div data-orientation="vertical" class="relative flex rounded-lg ring ring-default group" style="">
                        <div class="relative flex flex-col flex-1 lg:grid gap-x-8 gap-y-4 p-4 sm:p-4">
                            <div class="flex flex-col gap-2">
                                <span class="text-lg font-semibold">UNDERSTAND & EXPLORE</span>
                                <span class="text-md text-muted"> Our Solutions are fluid! Yes, we understand your problem/idea to the core and the key expectation from one of our solution. Once we have a fair idea of your needs (specified and inherent)- it goes through our expert exploration stage wherein they are refined as your key objectives and needful solution customization.</span>
                            </div>
                        </div>
                    </div>
                    <div data-orientation="vertical" class="relative flex rounded-lg ring ring-default group" style="">
                        <div class="relative flex flex-col flex-1 lg:grid gap-x-8 gap-y-4 p-4 sm:p-4">
                            <div class="flex flex-col gap-2">
                                <span class="text-lg font-semibold">PLAN AND DEFINE</span>
                                <span class="text-md text-muted">Your Key objectives and our key suggestions to have your solution- Affordable, Better and Faster are planned. We understand requirements are volatile so we define an outcome driven plan mapped to your key objectives.</span>
                            </div>
                        </div>
                    </div>
                    <div data-orientation="vertical" class="relative flex rounded-lg ring ring-default group" style="">
                        <div class="relative flex flex-col flex-1 lg:grid gap-x-8 gap-y-4 p-4 sm:p-4">
                            <div class="flex flex-col gap-2">
                                <span class="text-lg font-semibold">DELIVER AND DELIGHT</span>
                                <span class="text-md text-muted">As each milestone is delivered with utmost precision, we ensure its delighting you to the core, else the cycle repeats- with no cost to you. This is what we truly call our- "Outcome Driven Model".</span>
                            </div>
                        </div>
                    </div>
                </ul>
            </div>
        </div>

        <div class="absolute rounded-full dark:bg-(--ui-primary) blur-[250px] size-40 sm:size-50 transform -translate-x-1/2 left-1/2 -translate-y-80" />
      
        <LazyStarsBg />
        </UPageSection>

    </div>
</template>