<script setup lang="ts">

</script>

<template>
    <!-- HERO SECTION  -->
    <section class="flex items-center justify-between flex-col sm:flex-col md:flex-row xl:flex-row min-h-[100vh] pt-[10vh] gap-4 bg-[#1E212C] bg-[url('baseBg.svg')]">
        <div class="pl-20 flex flex-col space-y-3">
            <h1 class="text-5xl text-white">Move fast, stay aligened and build better - together</h1>
            <p>The #1 software development tool used by agile teems</p>
            <NuxtLink to="/auth">
                <UButton color="blue" >Try it free</UButton>
            </NuxtLink>
        </div>
        <NuxtImg src="/HomeHande.svg" class="w-full mt-5" />
        
    </section>
</template>
