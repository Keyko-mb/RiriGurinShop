<script setup>
import MyNavbar from '@/components/UI/MyNavbar.vue'
</script>

<template>
  <div class="w-full h-screen flex flex-col bg-cover bg-no-repeat bg-center overflow-hidden" id="bg">
    <MyNavbar class="animate-fade-in" />
    <main class="flex-1">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
#bg {
  background-image: url('/back.png');
}

@media (max-width: 1023px) {
  #bg {
    background-image: url('/mobile back.png');
    background-attachment: scroll;
    background-position: center center;
  }
}
</style>
