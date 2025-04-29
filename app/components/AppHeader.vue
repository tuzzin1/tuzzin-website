<script setup lang="ts">
const nuxtApp = useNuxtApp()
const { activeHeadings, updateHeadings } = useScrollspy()

const items = computed(() => [{
  label: 'Home',
  to: '#home',
  active: activeHeadings.value.includes('home') && !activeHeadings.value.includes('about')
}, {
  label: 'About',
  to: '#about',
  active: activeHeadings.value.includes('about')
}, {
  label: 'Solutions',
  to: '#solutions',
  active: activeHeadings.value.includes('solutions')
}, {
  label: 'News',
  to: '#news',
  active: activeHeadings.value.includes('news')
}, {
  label: 'Get in touch',
  to: '#getintouch',
  active: activeHeadings.value.includes('getintouch')
}, {
  label: 'Clients',
  to: '#clients',
  active: activeHeadings.value.includes('clients') && !activeHeadings.value.includes('getintouch')
}])

nuxtApp.hooks.hookOnce('page:finish', () => {
  updateHeadings([
    document.querySelector('#home'),
    document.querySelector('#about'),
    document.querySelector('#solutions'),
    document.querySelector('#news'),
    document.querySelector('#getintouch'),
    document.querySelector('#clients')
  ].filter(Boolean) as Element[])
})
</script>

<template>
  <UHeader>
    <template #left>
      <NuxtLink to="/">
        <LogoPro class="w-auto h-8 shrink-0" />
      </NuxtLink>

      <TemplateMenu />
    </template>

    <template #right>
      <UNavigationMenu
        :items="items"
        variant="link"
        class="hidden lg:block"
      />

      <!-- <UButton
        label="Download App"
        variant="subtle"
        class="hidden lg:block"
      /> -->

      <UColorModeButton />
    </template>

    <template #body>
      <UNavigationMenu
        :items="items"
        orientation="vertical"
        class="-mx-2.5"
      />
      
      <!-- <UButton
        class="mt-4"
        label="Download App"
        variant="subtle"
        block
      /> -->
    </template>
  </UHeader>
</template>
