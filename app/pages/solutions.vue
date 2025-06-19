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
        <!-- <div class="hidden lg:block"> -->
            <!-- <UColorModeImage
                light="/images/light/line-1.svg"
                dark="/images/dark/line-1.svg"
                class="absolute pointer-events-none pb-14 left-0 top-0 object-cover h-[650px]"
            /> -->
        <!-- </div> -->
        
        <!-- <UPageHero :ui="{ container: 'md:pt-1 lg:pt-1' }">
            <h1 class="text-5xl sm:text-6xl text-pretty tracking-tight font-bold text-highlighted text-center" style="margin-bottom: -5%;"><span class="text-(--ui-primary)">Banking</span> Solutions</h1>
            <div class="text-lg sm:text-xl/8 text-muted text-pretty -mt-2" style="margin-left: 5%;">
                
            </div>
        </UPageHero> -->
        
        <!-- <USeparator :ui="{ border: 'border-(--ui-primary)/30' }" /> -->

        <UPageSection
        class="relative overflow-hidden"
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
                        <p class="my-5 leading-7 text-pretty"><span class="text-(--ui-primary)">Banking</span> Solutions</p>
                    </div>
                </h2>
                <ul class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                    <div data-orientation="vertical" class="relative flex rounded-lg ring ring-default group mx-auto" style="">
                        <div class="relative flex flex-col flex-1 lg:grid gap-x-8 gap-y-4 p-4 sm:p-4">
                            <!-- <img src="/images/sm_yoKYC.png" alt="" srcset=""> -->
                            <NuxtLink to='/solutions-yokyc'>
                                <img alt="YoKYC" class="dark:block size-auto mx-auto" src="/images/sm_yoKYC.png">
                            </NuxtLink>
                            <div class="flex flex-col gap-2 mx-auto">
                                <span class="text-lg font-semibold text-center text-(--ui-primary)">YoKYC</span>
                                <span class="text-md text-muted text-center">Automated CKYC Solution.</span>
                            </div>
                        </div>
                    </div>
                    <div data-orientation="vertical" class="relative flex rounded-lg ring ring-default group mx-auto" style="">
                        <div class="relative flex flex-col flex-1 lg:grid gap-x-8 gap-y-4 p-4 sm:p-4">
                            <NuxtLink to="/solutions-yoinstaloans">
                                <img alt="YoInstaLoans" class="dark:block size-auto mx-auto" src="/images/sm_yoinstaloan.png">
                            </NuxtLink>
                            <div class="flex flex-col gap-2">
                                <span class="text-lg font-semibold text-center text-(--ui-primary)">YoInstaLoans</span>
                                <span class="text-md text-muted text-center">Loan Origination System.</span>
                            </div>
                        </div>
                    </div>
                    <div data-orientation="vertical" class="relative flex rounded-lg ring ring-default group mx-auto" style="">
                        <div class="relative flex flex-col flex-1 lg:grid gap-x-8 gap-y-4 p-4 sm:p-4">
                            <NuxtLink to="/solutions-yorecovery">
                                <img alt="YoRecovery" class="dark:block size-auto mx-auto" src="/images/smRecovery.png">
                            </NuxtLink>
                            <div class="flex flex-col gap-2">
                                <span class="text-lg font-semibold text-center text-(--ui-primary)">YoRecovery</span>
                                <span class="text-md text-muted text-center">NPA Recovery Tracking System.</span>
                            </div>
                        </div>
                    </div>
                    <div data-orientation="vertical" class="relative flex rounded-lg ring ring-default group mx-auto" style="">
                        <div class="relative flex flex-col flex-1 lg:grid gap-x-8 gap-y-4 p-4 sm:p-4">
                            <NuxtLink to="/solutions-yocts">
                                <img alt="YoCTS" class="dark:block size-auto mx-auto" src="/images/sm_yoCTS.png">
                            </NuxtLink>
                            <div class="flex flex-col gap-2">
                                <span class="text-lg font-semibold text-center text-(--ui-primary)">YoCTS</span>
                                <span class="text-md text-muted text-center">CTS Merge & Inward Clearing.</span>
                            </div>
                        </div>
                    </div>
                    <div data-orientation="vertical" class="relative flex rounded-lg ring ring-default group mx-auto" style="">
                        <div class="relative flex flex-col flex-1 lg:grid gap-x-8 gap-y-4 p-4 sm:p-4">
                            <NuxtLink to="/solutions-yoleads">
                                <img alt="YoLead" class="dark:block size-auto mx-auto" src="/images/sm_Yolm.png">
                            </NuxtLink>
                            <div class="flex flex-col gap-2">
                                <span class="text-lg font-semibold text-center text-(--ui-primary)">YoLead</span>
                                <span class="text-md text-muted text-center">Track every lead across <br/>Branches and respond to every <br/>lead within 24 hours flat.</span>
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