<template>
  <div class="h-full relative overflow-hidden">
    <img src="/moon.png" class="absolute w-[80rem] top-0 left-[36rem] object-cover z-0" alt="moon">

    <!-- Фон панели -->
    <div class="bg-black bg-opacity-50 w-1/4 h-full absolute top-0 left-0 z-10 animate-fade-in"></div>

    <!-- Видео -->
    <video autoplay loop muted playsinline class="absolute object-cover w-11/12 -bottom-8 left-[17rem] z-20 animate-fade-in">
      <source src="/art_background.webm" type="video/webm">
    </video>

    <!-- Содержимое панели -->
    <div class="w-1/4 h-full flex flex-col justify-between px-5 absolute top-0 left-0 z-30 animate-fade-in">
      <div class="flex flex-col items-center space-y-5">
        <img src="/logo.png" class="w-[440px] mt-12" alt="logo">

        <div class="flex items-center space-x-1">
          <a href="https://x.com/Riri_Gurin" target="_blank" class="relative w-11 h-11 z-40">
            <img src="/X.svg" alt="X" class="absolute w-full h-full transition-opacity opacity-100 hover:opacity-0">
            <img src="/X white.svg" alt="X-hover" class="absolute w-full h-full transition-opacity opacity-0 hover:opacity-100">
          </a>
          <a href="https://www.instagram.com/ririgurin/" target="_blank" class="relative w-11 h-11 z-40">
            <img src="/Inst.svg" alt="Instagram" class="absolute w-full h-full transition-opacity opacity-100 hover:opacity-0">
            <img src="/Inst white.svg" alt="Instagram-hover" class="absolute w-full h-full transition-opacity opacity-0 hover:opacity-100">
          </a>
          <a href="https://bsky.app/profile/ririgurin.bsky.social" target="_blank" class="relative w-11 h-11 z-40">
            <img src="/blsky.svg" alt="blsky" class="absolute w-full h-full transition-opacity opacity-100 hover:opacity-0">
            <img src="/blsky white.svg" alt="blsky-hover" class="absolute w-full h-full transition-opacity opacity-0 hover:opacity-100">
          </a>
          <a href="https://vk.com/riri_gurin" target="_blank" class="relative w-11 h-11 z-40">
            <img src="/Vk.svg" alt="Vk" class="absolute w-full h-full transition-opacity opacity-100 hover:opacity-0">
            <img src="/Vk white.svg" alt="Vk-hover" class="absolute w-full h-full transition-opacity opacity-0 hover:opacity-100">
          </a>
          <a href="https://www.tiktok.com/@riri_gurin" target="_blank" class="relative w-11 h-11 z-40">
            <img src="/tiktok.svg" alt="tiktok" class="absolute w-full h-full transition-opacity opacity-100 hover:opacity-0">
            <img src="/tiktok white.svg" alt="tiktok-hover" class="absolute w-full h-full transition-opacity opacity-0 hover:opacity-100">
          </a>
          <a href="https://www.patreon.com/ririgurin" target="_blank" class="relative w-11 h-11 z-40">
            <img src="/patreon.svg" alt="patreon" class="absolute w-full h-full transition-opacity opacity-100 hover:opacity-0">
            <img src="/patreon white.svg" alt="patreon-hover" class="absolute w-full h-full transition-opacity opacity-0 hover:opacity-100">
          </a>
          <a href="https://www.twitch.tv/ririgurin" target="_blank" class="relative w-11 h-11 z-40">
            <img src="/Twitch.svg" alt="twitch" class="absolute w-full h-full transition-opacity opacity-100 hover:opacity-0">
            <img src="/Twitch white.svg" alt="twitch-hover" class="absolute w-full h-full transition-opacity opacity-0 hover:opacity-100">
          </a>
        </div>

        <div class="flex flex-col gap-1">
          <button class="relative h-[80px] overflow-hidden z-40">
            <img src="/contact me.svg" class="w-full h-full transition-opacity opacity-100 hover:opacity-0" alt="contact me">
            <img src="/contact me white.svg" class="absolute inset-0 w-full h-full transition-opacity opacity-0 hover:opacity-100" alt="contact me-hover">
          </button>
          <button class="relative h-[80px] overflow-hidden z-40">
            <img src="/tip support.svg" class="w-full h-full transition-opacity opacity-100 hover:opacity-0" alt="tip support">
            <img src="/tip support white.svg" class="absolute inset-0 w-full h-full transition-opacity opacity-0 hover:opacity-100" alt="tip support-hover">
          </button>
        </div>
      </div>

      <div class="text-white text-center mb-5">
        <p class="text-lg">© 2025 Ririgurin - All rights reserved</p>
        <p>Characters & concepts belong to their respective owners.</p>
      </div>
    </div>
  </div>
</template>
