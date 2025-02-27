<script setup>
import MyNavbar from '@/components/UI/MyNavbar.vue'
</script>

<template>
  <div class="w-full h-screen flex flex-col bg-cover bg-no-repeat bg-center overflow-hidden" style="background-image: url('/back.png');">
    <MyNavbar class="animate-fade-in" />
    <main class="flex-1">
      <RouterView />
    </main>
  </div>
</template>
