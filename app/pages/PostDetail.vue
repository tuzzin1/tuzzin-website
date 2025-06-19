<script setup>
    const title = ref("Tuzzin Product Appreciated by National Payments Corporation of India");
    const description = ref("Tuzzin Leadership (Mr. Jemin and Mr. Dipen) appreciated by NPCI for their Product: YoLokal (YoLokal.com)- Card Linked Offers and CashbackFrom NPCI Team: Thank you for your stimulating presentation at yesterday’s FINSPIRE 3 workshop for the Cooperative Banks of Maharashtra. We are grateful for the time and effort you took to share your expertise and ideas to the banks and address their queries. The workshop became a great success with a large group of banks participating in it and with the valuable contribution from you and many other expert speakers.Looking forward for many such collaborations.Tuzzin thanks NPCI for their great support and look forward to assist NPCI in any way possible.");
    const image = ref("/images/NPCI-Appreciation.jpg")
</script>

<template>
    <div class="max-w-5xl mx-auto shadow-lg overflow-hidden">
        <img :src="image" alt="Post Image" class="w-full h-96 object-contain" />
        <div class="p-6">
            <h1 class="text-(--ui-primary) text-3xl font-bold mb-4">{{ title }}</h1>
            <p class="text-muted text-lg mb-4">{{ description }}</p>

            <div class="flex items-center mt-10">
                <span class="mr-2 text-muted">Share on:</span>
                <NuxtLink to="#" target="_blank" class="mr-2">
                <Icon name="uil:facebook" class="text-(--ui-primary)" />
                </NuxtLink>
                <NuxtLink to="#" target="_blank" class="mr-2">
                <Icon name="uil:twitter" class="text-(--ui-primary)"></Icon>
                </NuxtLink>
                <NuxtLink to="#" target="_blank" class="mr-2">
                <Icon name="uil:linkedin" class="text-(--ui-primary)"></Icon>
                </NuxtLink>
            </div>
        </div>
        <div class="absolute rounded-full dark:bg-(--ui-primary) blur-[250px] size-40 sm:size-50 transform -translate-x-1/2 left-1/2 -translate-y-80" />
      
        <LazyStarsBg />
    </div>
</template>

<style lang="css" scoped>
.object-contain {
    object-fit: contain;
}
</style>