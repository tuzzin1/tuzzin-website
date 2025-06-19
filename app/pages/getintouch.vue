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

useHead({
    script: [
        {
            id: 'recaptcha',
            src: 'https://www.google.com/recaptcha/api.js',
            defer: true
        }
    ]
})
</script>


<template>
    <div
    v-if="page"
    class="relative">
        <div class="hidden lg:block">
            <!-- <UColorModeImage
                light="/images/light/line-1.svg"
                dark="/images/dark/line-1.svg"
                class="absolute pointer-events-none pb-14 left-0 top-0 object-cover h-[650px]"
            /> -->
        </div>
        
        <UPageHero :ui="{ container: 'md:pt-1 lg:pt-1' }">
            <h1 class="text-5xl sm:text-7xl text-pretty tracking-tight font-bold text-highlighted text-center" style="margin-bottom: -5%;">Let’s  <span class="text-(--ui-primary)">Talk</span><br/></h1>
            <div class="text-lg sm:text-xl/8 text-muted text-balance mt-6 text-center" style="margin-top:-1%">Your outcome from our technology is important to us.</div>
            
            <div class="w-full max-w-(--ui-container) mx-auto">
                 <div class="mt-10 sm:mt-0">
                    <div class="mt-5 md:mt-0 md:col-span-2">
                        <form id="tuzzin-contact-form" action="https://forms.sociocs.com/v1/ySubYog31varZscpqmxf/1750299552890199" method="POST">
                            <div class="rounded-lg bg-elevated/50 ring ring-default">
                                <div class="px-4 py-5 sm:p-6">
                                    <div class="grid grid-cols-6 gap-6">
                                        <div class="col-span-6 sm:col-span-3">
                                            <label for="full_name" class="form-label" >Name*</label>
                                            <input type="text" name="full_name" id="full_name" placeholder="Enter Name" class="w-full form-control"/>
                                        </div>                                       

                                        <div class="col-span-6 sm:col-span-3">
                                            <label for="email_address" class="form-label">Email*</label>
                                            <input type="text" name="email_address" id="email_address" placeholder="Enter Email" class="w-full form-control"/>
                                        </div>

                                        <div class="col-span-6 sm:col-span-3">
                                            <label for="last_name" class="form-label">Phone</label>
                                            <input type="text" name="last_name" id="last_name" autocomplete="family-name" class="w-full form-control" />
                                        </div>
                                        <div class="col-span-6 sm:col-span-3">
                                            <label for="last_name" class="form-label">Bank Name</label>
                                            <input type="text" name="last_name" id="last_name" autocomplete="family-name" class="w-full form-control"/>
                                        </div>
                                        <div class="col-span-6 sm:col-span-3">
                                            <label for="last_name" class="form-label">Bank Location</label>
                                            <input type="text" name="last_name" id="last_name" autocomplete="family-name" class="w-full form-control"/>
                                        </div>

                                        <div class="col-span-6">
                                            <label for="message" class="form-label">Message</label>
                                            <textarea id="message" name="message" rows="4" class="w-full form-control"></textarea>
                                        </div>
                                    </div>
                                    <div class="g-recaptcha mt-6" data-sitekey="6LciL18rAAAAANwRbxrMrc_PnhviWbuyUxacVmKS"></div>
                                </div>
                                <div class="px-4 py-3 text-right sm:px-6">
                                    <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text -white font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                 </div>
                 <div class="grid sm:grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
                   <div data-orientation="vertical" class="relative flex rounded-lg bg-elevated/50 ring ring-default">
                        <div class="relative flex flex-col flex-1 lg:grid gap-x-8 gap-y-4 p-4 sm:p-6">
                            <div class="flex flex-col flex-1 mx-auto">
                                <div class="flex-1">
                                    <div class="text-pretty text-primary text-center text-[22px] font-bold text-transform: uppercase">Locate Us</div>
                                </div>
                                <div class="pt-4 mt-auto">
                                    <div data-orientation="horizontal" class="relative group/user flex items-center gap-2.5">
                                        <div class="mx-auto">
                                            <p class="text-muted text-center text-[15px] font-semibold">India - A-1118 The Capital, Science City Rd, Sola, Ahmedabad, Gujarat 380060</p>
                                            <p class="text-muted text-center text-[15px] font-semibold mt-4">USA - 1321 Upland Dr. #5140 Huston, TX77043</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>  
                    </div>   
                   <div data-orientation="vertical" class="relative flex rounded-lg bg-elevated/50 ring ring-default">
                        <div class="relative flex flex-col flex-1 lg:grid gap-x-8 gap-y-4 p-4 sm:p-6">
                            <div class="flex flex-col flex-1 mx-auto">
                                <div class="flex-1">
                                    <div class="text-pretty text-primary text-center text-[22px] font-bold text-transform: uppercase">Call Us</div>
                                </div>
                                <div class="pt-4 mt-auto">
                                    <div data-orientation="horizontal" class="relative group/user flex items-center gap-2.5">
                                        <div class="mx-auto">
                                            <p class="text-muted text-center text-[15px] font-semibold">India: 091-7624098111 /091-84600 56525</p>
                                            <p class="text-muted text-center text-[15px] font-semibold mt-4">USA - 1321 Upland Dr. #5140 Huston, TX77043</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>  
                    </div>  
                    <div data-orientation="vertical" class="relative flex rounded-lg bg-elevated/50 ring ring-default">
                        <div class="relative flex flex-col flex-1 lg:grid gap-x-8 gap-y-4 p-4 sm:p-6">
                            <div class="flex flex-col flex-1 mx-auto">
                                <div class="flex-1">
                                    <div class="text-pretty text-primary text-center text-[22px] font-bold text-transform: uppercase">Email us | WhatsApp</div>
                                </div>
                                <div class="pt-4 mt-auto">
                                    <div data-orientation="horizontal" class="relative group/user flex items-center gap-2.5">
                                        <div class="mx-auto">
                                            <p class="text-muted text-center text-[15px] font-semibold">experts@tuzz.in</p>
                                            <p class="text-muted text-center text-[15px] font-semibold mt-4">91-84600 56525</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>  
                    </div>    
                 </div>
            </div>
            <div class="absolute rounded-full dark:bg-(--ui-primary) blur-[250px] size-40 sm:size-50 transform -translate-x-1/2 left-1/2 -translate-y-80" />
      
            <LazyStarsBg />
        </UPageHero>
        <!-- <USeparator :ui="{ border: 'border-(--ui-primary)/30' }" /> -->
    </div>
</template>