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
            <!-- <UColorModeImage
                light="/images/light/line-1.svg"
                dark="/images/dark/line-1.svg"
                class="absolute pointer-events-none pb-14 left-0 top-0 object-cover h-[650px]"
            /> -->
        </div>
        
        <UPageHero :ui="{ container: 'md:pt-1 lg:pt-1' }">
            <h1 class="text-5xl sm:text-7xl text-pretty tracking-tight font-bold text-highlighted text-center" style="margin-bottom: -5%;"><span class="text-(--ui-primary)">Clients</span></h1>
            <div class="text-lg sm:text-xl/8 text-muted text-pretty -mt-2" style="margin-left: 5%;">
                
            </div>
            <div class="absolute rounded-full dark:bg-(--ui-primary) blur-[250px] size-40 sm:size-50 transform -translate-x-1/2 left-1/2 -translate-y-80" />
      
            <LazyStarsBg />
        </UPageHero>
        <!-- <USeparator :ui="{ border: 'border-(--ui-primary)/30' }" /> -->
    </div>
</template>