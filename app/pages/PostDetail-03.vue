<script setup>
    const title = ref("Tuzzin Launches “Technology Snapshot week for its clients");
    const description = ref("Tuzzin has reached out to all its clients for an initiative to help create their Technology Snapshot for Free. With the advent of disruptive technologies- there are avenues for each Business to explore the gaps. As part of this initiative- Tuzzin Experts will do a Free Technology assessment of Clients Application portfolio. Tuzzin Team will provide necessary recommendations and a detailed report inline with Clients 1 year, 3 year and 5 year objectives. This will help each of our clients to best strategize their IT spend and Technology alignment for the future. When we tossed this idea to few of our clients- they were super excited and that’s what we work hard for at Tuzzin- everyday.");
    const image = ref("/images/Blog-Post-Coomon-Img.jpg")
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