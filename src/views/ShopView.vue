<script setup>
import { getFirestore, collection } from "firebase/firestore";
import { useCollection } from "vuefire";
import MyCard from '@/components/UI/MyCard.vue'

const db = getFirestore();
const items = useCollection(collection(db, "items"));
</script>

<template>
  <div>
    <h1 class="text-3xl mb-5">Emotes shop</h1>
    <div class="grid grid-cols-5 gap-4">
      <MyCard
        v-for="item in items"
        :key="item.id"
        :title="item.title"
        :description="item.description"
        :img="item.img"
        :price="item.price"
      />
    </div>
  </div>
</template>

