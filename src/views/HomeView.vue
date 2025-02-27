<template>
  <div class="h-full">
    <img src="/moon.png" class="absolute w-3/5 top-0 left-1/3 object-cover">

    <video autoplay loop muted playsinline class="absolute object-cover w-11/12 -bottom-8 left-[17rem] z-20">
      <source src="/art_background.webm" type="video/webm">
    </video>

    <div class="bg-black bg-opacity-50 w-1/4 h-full flex flex-col justify-between px-5">
      <div class="flex flex-col items-center gap-10">
        <img src="/logo.png" class="mt-32">

        <div class="flex items-center space-x-2">
          <a href="https://x.com/Riri_Gurin" target="_blank" class="hover:opacity-75">
            <img src="/x.svg" alt="X" class="w-8 h-8" />
          </a>
          <a href="https://boosty.to/ririgurin" target="_blank" class="hover:opacity-75">
            <img src="/boosty.svg" alt="Boosty" class="w-8 h-8 bg-black rounded-md" />
          </a>
          <a href="https://www.instagram.com/riri_gurin?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" class="hover:opacity-75">
            <img src="/instagram.svg" alt="Instagram" class="w-9 h-9" />
          </a>
          <a href="https://trello.com/b/JYYgt4Qv/order-board" target="_blank" class="hover:opacity-75">
            <img src="/trello.svg" alt="Trello" class="w-8 h-8" />
          </a>
        </div>
        <div class="w-full flex flex-col gap-8 px-10">
          <button class="text-2xl relative inline-flex items-center justify-center pb-1 text-primary bg-transparent border-none rounded-xl neon-glow-primary">
            contact me
          </button>
          <button class="text-2xl relative inline-flex items-center justify-center pb-1 text-primary bg-transparent border-none rounded-xl neon-glow-primary">
            tip support
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

<style scoped>
.neon-glow-primary {
  @apply shadow-[0_0_10px_#e259ff,0_0_10px_#e259ff,0_0_20px_#e259ff] hover:shadow-[0_0_20px_#e259ff,0_0_20px_#e259ff,0_0_30px_#e259ff] transition-shadow duration-300;
}
.neon-glow-primary::before {
  @apply content-[''] absolute -inset-1 rounded-2xl bg-transparent border-none shadow-[0_0_5px_#e259ff,0_0_5px_#e259ff] opacity-80;
}
</style>
