<script setup lang="ts">
import type { container } from '#build/ui';

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
        class="absolute pointer-events-none pb-10 left-0 top-0 object-cover h-[650px]"
      />
    </div>
    <!-- Header Part - Banking Software Solutions Provider  -->
    <UPageHero
      :description="page.description"
      :ui="{ container: 'md:pt-18 lg:pt-20' }"
    >
      <template #title>
        <MDC
          :value="page.title"
          class="*:leading-11 sm:*:leading-19 max-w-3xl mx-auto"
        />
      </template>
    </UPageHero>
    <!-- We are Tuzzin Technology Solution Provider for Banks - Header -->
    <UPageSection
      :description="page.section.description"
      :features="page.section.features"
      orientation="horizontal"
      :ui="{
        container: 'lg:px-0 2xl:px-20 mx-0 max-w-none md:mr-10',
        features: 'gap-0'
      }"
      reverse
    >
      <template #title>
        <MDC
          :value="page.section.title"
          class="sm:*:leading-11"
        />
      </template>
      <img
        :src="page.section.images.desktop"
        :alt="page.section.title"
        class="hidden lg:block 2xl:hidden left-0 w-full max-w-2xl"
      >
      <img
        :src="page.section.images.mobile"
        :alt="page.section.title"
        class="block lg:hidden 2xl:block 2xl:w-full 2xl:max-w-2xl"
      >
    </UPageSection>

    <USeparator :ui="{ border: 'border-(--ui-primary)/30' }" />
    <!-- Banking Solutions -->
    <UPageSection
      id="features"
      :description="page.features.description"
      :features="page.features.features"
      :ui="{
        title: 'text-left @container relative flex',
        description: 'text-left'
      }"
      class="relative overflow-hidden"
    >
      <div class="absolute rounded-full -left-10 top-10 size-[300px] z-10 bg-(--ui-primary) opacity-30 blur-[200px]" />
      <div class="absolute rounded-full -right-10 -bottom-10 size-[300px] z-10 bg-(--ui-primary) opacity-30 blur-[200px]" />
      <template #title>
        <MDC
          :value="page.features.title"
          class="*:leading-9"
        />
        <div class="hidden @min-[1020px]:block">
          <UColorModeImage
            light="/images/light/line-2.svg"
            dark="/images/dark/line-2.svg"
            class="absolute top-0 right-0 size-full transform scale-95 translate-x-[70%]"
          />
        </div>
      </template>
    </UPageSection>

    <USeparator :ui="{ border: 'border-(--ui-primary)/30' }" />
    <!-- COUNTS -->
    <UPageSection
      id="pricing"
      class="mb-1 overflow-hidden"
      :title="page.pricing.title"
      :description="page.pricing.description"
      :plans="page.pricing.plans"
      :ui="{ title: 'text-left @container relative', description: 'text-left' }"
    >
      <template #headline>
        <UColorModeImage
          light="/images/light/line-3.svg"
          dark="/images/dark/line-3.svg"
          class="absolute -top-10 sm:top-0 right-1/2 h-24"
        />
      </template>
      <template #title>
        <MDC :value="page.pricing.title" />

        <div class="hidden @min-[1120px]:block">
          <UColorModeImage
            light="/images/light/line-4.svg"
            dark="/images/dark/line-4.svg"
            class="absolute top-0 right-0 size-full transform translate-x-[60%]"
          />
        </div>
      </template>

      <UPricingPlans scale>
        <UPricingPlan
          v-for="(plan, index) in page.pricing.plans"
          :key="index"
          :title="plan.title"
          :description="plan.description"
          :price="plan.price"
          :billing-period="plan.billing_period"
          :billing-cycle="plan.billing_cycle"
          :highlight="plan.highlight"
          :scale="plan.highlight"
          variant="soft"
          :features="plan.features"
          :button="plan.button"
          :ui="{titleWrapper:'mx-auto font-bold', description:'mx-auto font-bold text-3xl text-(--ui-primary)'}"
        />
      </UPricingPlans>
    </UPageSection>

    <USeparator :ui="{ border: 'border-(--ui-primary)/30' }" />
    
    <!-- GET IN TOUCH -->
    <UPageSection
      id="testimonials"
      :title="page.testimonials.title"
      :description="page.testimonials.description"
      :items="page.testimonials.items"
    >
      <template #headline>
        <UColorModeImage
          light="/images/light/line-5.svg"
          dark="/images/dark/line-5.svg"
          class="absolute -top-10 sm:top-0 right-1/2 h-24"
        />
        <div class="hidden lg:block">
        <!-- <div class="@max-[1280px]:hidden"> -->
          <UColorModeImage
            light="/images/light/line-6.svg"
            dark="/images/dark/line-6.svg"
            class="absolute left-5 -top-5 sm:top-0 h-full"
          />
          <UColorModeImage
            light="/images/light/line-7.svg"
            dark="/images/dark/line-7.svg"
            class="absolute right-0 bottom-0 h-full"
          />
        </div>
      </template>
      <template #title>
        <MDC :value="page.testimonials.title" />
      </template>

      <UContainer>
        <UPageColumns class="xl:columns-3">
          <UPageCard
            v-for="(testimonial, index) in page.testimonials.items"
            :key="index"
            variant="subtle"
            :description="testimonial.quote"
            :ui="{description: 'text-primary text-center text-[22px] font-bold text-transform: uppercase', wrapper:'mx-auto',}"
          >
            <template #footer>
              <UUser
                v-bind="testimonial.user"
                :ui="{name: 'text-muted text-center text-[15px] font-semibold', description: 'text-muted text-center text-[15px] font-semibold mt-4', wrapper:'mx-auto'}"
                size="xl"
              />
            </template>
          </UPageCard>
        </UPageColumns>
      </UContainer>
      <div class="absolute rounded-full dark:bg-(--ui-primary) blur-[250px] size-40 sm:size-50 transform -translate-x-1/2 left-1/2 -translate-y-80" />
      
      <LazyStarsBg />
    </UPageSection>

    <USeparator />

    <!-- <UPageCTA
      v-bind="page.cta"
      variant="naked"
      class="overflow-hidden @container"
    >
      <template #title>
        <MDC :value="page.cta.title" />

        <div class="@max-[1280px]:hidden">
          <UColorModeImage
            light="/images/light/line-6.svg"
            dark="/images/dark/line-6.svg"
            class="absolute left-10 -top-10 sm:top-0 h-full"
          />
          <UColorModeImage
            light="/images/light/line-7.svg"
            dark="/images/dark/line-7.svg"
            class="absolute right-0 bottom-0 h-full"
          />
        </div>
      </template>

      <div class="absolute rounded-full dark:bg-(--ui-primary) blur-[250px] size-40 sm:size-50 transform -translate-x-1/2 left-1/2 -translate-y-80" />

      <LazyStarsBg />
    </UPageCTA> -->
  </div>
</template>
