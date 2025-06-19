<script setup>
    const title = ref("Tuzzin Products accelerating Time to Market and reducing Total Cost of Ownership");
    const description = ref("Our products are handcrafted by our experts with sound understanding of domain, market needs and technology. Our products are built after evaluating the need and ensuring that there is a market for the same. We don’t build products to build up our portfolio. Tuzzin products have helped multiple companies reduce their development cycle and launch their own Product within a matter of weeks (not months or years). Tuzzin has also helped umpteen clients pick and chose solution components that they like and embed as features within their product. As our components and products are well settled in the market- they need minimum maintenance, thereby reducing the Total cost of Ownership. Tuzzin is proud to be a different company that believes in faster time to market and reduced total cost of ownership.");
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