<script setup>
import MyNavbar from '@/components/UI/MyNavbar.vue'
</script>

<template>
  <div class="w-full h-screen flex flex-col bg-cover bg-center" style="background-image: url('/back.png');">
    <MyNavbar />
    <main class="flex-1">
      <RouterView />
    </main>
  </div>
</template>
