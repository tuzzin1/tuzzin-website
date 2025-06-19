<script setup>
    const title = ref("Tuzzin’s Pledge of Commitment Transparency wins appreciation");
    const description = ref("Tuzzin’s “Pledge of Transparency” wins appreciation from multiple clients. Tuzzin has an initiative wherein every new employee takes a pledge of transparency. Employee on the day of joining takes a pledge that he/she will always be transparent and honest in their commitments. Every employee pledges transparency about knowledge and delivery timeliness plus quality for each project. In no circumstances- employee will every over commit or under deliver and will stay true to their client about their potential- even if it means loss of Business. Tuzzin was appreciated by their customers in their global client meet for such a pledge and we are happy that our clients love us lot more, due to this pledge.");
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