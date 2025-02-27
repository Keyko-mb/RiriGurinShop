<script setup>
import { defineProps } from "vue";
defineProps(["title", "description", "img", "price"]);
</script>

<template>
  <div class="flex flex-col border border-gray-200 rounded-lg p-4 w-72 h-96 bg-white shadow-md hover:shadow-lg hover:border-violet-200 transition-all">
    <div class="w-full h-2/3">
      <img
        :src="img"
        alt=""
        class="w-full h-full object-cover rounded-md"
      >
    </div>
    <!-- Контейнер для контента карточки -->
    <div class="flex flex-col items-center justify-center flex-grow mt-2">
      <h1 class="text-xl font-semibold text-center">{{ title }}</h1>
      <p class="text-sm text-center">{{ description }}</p>
      <p class="mt-2 font-bold">{{ price }}$</p>
    </div>
  </div>
</template>
