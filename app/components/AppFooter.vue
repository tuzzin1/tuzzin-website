<script setup lang="ts">
const { activeHeadings, updateHeadings } = useScrollspy()

const items = computed(() => [{
  label: 'Home',
  to: '/',
  active: activeHeadings.value.includes('/') && !activeHeadings.value.includes('/about')
}, {
  label: 'About',
  to: '/about',
  active: activeHeadings.value.includes('/about')
}, {
  label: 'Solutions',
  to: '/solutions',
  active: activeHeadings.value.includes('/solutions')
}, {
  label: 'News',
  to: '/news',
  active: activeHeadings.value.includes('/news')
}, {
  label: 'Get in touch',
  to: '/getintouch',
  active: activeHeadings.value.includes('/getintouch')
}
// , {
//   label: 'Clients',
//   to: '/clients',
//   active: activeHeadings.value.includes('/clients') && !activeHeadings.value.includes('/getintouch')
// }
])

// const toast = useToast()

// const email = ref('')
// const loading = ref(false)

// function onSubmit() {
//   loading.value = true

//   toast.add({
//     title: 'Subscribed!',
//     description: 'You\'ve been subscribed to our newsletter.'
//   })
// }
</script>

<template>
  <USeparator
    icon="i-simple-icons-nuxtdotjs"
    class="h-px"
  />

  <UFooter :ui="{ top: 'border-b border-(--ui-border)' }">
    <template #top>
      <UContainer>
        <!-- <UFooterColumns :columns="items"> -->
          <!-- <template #right>
            <form @submit.prevent="onSubmit">
              <UFormField
                name="email"
                label="Subscribe to our newsletter"
                size="lg"
              >
                <UInput
                  v-model="email"
                  type="email"
                  class="w-full"
                  placeholder="Enter your email"
                >
                  <template #trailing>
                    <UButton
                      type="submit"
                      size="xs"
                      label="Subscribe"
                    />
                  </template>
                </UInput>
              </UFormField>
            </form>
          </template> -->
        <!-- </UFooterColumns> -->
        <UNavigationMenu
          :items="items"
          variant="link"
          class="lg:block px-4"
        />
      </UContainer>
    </template>

    <template #left>
      <p class="text-sm text-(--ui-text-muted)">
        <!-- Copyright © {{ new Date().getFullYear() }}. All rights reserved. -->
        Copyright © 2020-{{ new Date().getFullYear() }}. Tuzzin Infotech Pvt. Ltd.
      </p>
    </template>

    <template #right>
      <!-- <UButton
        to="#"
        target="_blank"
        icon="i-simple-icons-discord"
        aria-label="Discord"
        color="neutral"
        variant="ghost"
      />
      <UButton
        to="#"
        target="_blank"
        icon="i-simple-icons-x"
        aria-label="X"
        color="neutral"
        variant="ghost"
      />
      <UButton
        to="https://github.com/nuxt-ui-pro/landing"
        target="_blank"
        icon="i-simple-icons-github"
        aria-label="GitHub"
        color="neutral"
        variant="ghost"
      /> -->
    </template>
  </UFooter>
</template>
