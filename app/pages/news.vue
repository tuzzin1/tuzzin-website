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
        
        <UPageSection
        class="relative overflow-hidden" 
        data-orientation="horizontal"
        >
        
        <div class="@max-[1280px]:hidden">
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
                        <p class="my-5 leading-7 text-pretty"><span class="text-(--ui-primary)">News</span></p>
                    </div>
                </h2>
                
            </div>
            <div class="w-full px-4 sm:px-6 flex flex-col lg:grid py-8">
                <Postcard />
            </div>
        </div>
        

        <div class="absolute rounded-full dark:bg-(--ui-primary) blur-[250px] size-40 sm:size-50 transform -translate-x-1/2 left-1/2 -translate-y-80" />
      
        <LazyStarsBg />
        </UPageSection>
    </div>
</template>