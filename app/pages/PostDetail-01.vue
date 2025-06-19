<script setup>
    const title = ref("Tuzzin Employee Initiative “Lets think about FREE Value-adds for our Clients!");
    const description = ref("Tuzzin Employees have come together and joined hands to start a Customer Centric initiative of identifying Free Value Adds for Client’s As part of this initiative- every employee will spend 2 hours per week towards free value adds – outside of their normal working hours. Each employee will identify the unspecified need of their Client, discuss with peers and come up with 3 great ideas. Employee and Management will work together to help employee work on this for 2 hours per week, ensuring it doesn’t affect the normal working hours and would be of value to the Client. <br/>Value-adds would be small delights that the Client would really appreciate above and beyond the quality and timeliness of delivery. Tuzzin Team is excited about this and have come up with some great ideas to create Customer Delight.");
    const image = ref("/images/featured-news-06.jpg")
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