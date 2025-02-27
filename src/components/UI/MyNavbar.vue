<template>
  <header class="bg-black z-30">
    <div class="container mx-auto py-2">
      <nav class="flex gap-28 justify-center">
        <RouterLink class="link text-xl" active-class="active" to="/"><p>home</p></RouterLink>
        <RouterLink class="link text-xl" active-class="active" to="/about"><p>about</p></RouterLink>
        <RouterLink class="link text-xl" active-class="active" to="/commission"><p>commission</p></RouterLink>
        <RouterLink class="link text-xl" active-class="active" to="/shop"><p>shop</p></RouterLink>
        <RouterLink class="link text-xl" active-class="active" to="/tos"><p>t.o.s</p></RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
/* Стили для активной ссылки (если требуется) */
.link.active {
  color: #d27dea;
}

/* При наведении на ссылку нужно задать relative, чтобы псевдоэлементы позиционировались правильно */
.link:hover {
  position: relative;
  z-index: 1; /* Текст остаётся поверх крыльев */
}

/* Общие стили псевдоэлементов для левого и правого крыла */
.link:hover::before, .link:hover::after {
  content: "";
  position: absolute;
  width: 35px;
  height: 35px;
  background-size: contain;
  background-repeat: no-repeat;
  z-index: -1;
  /* Можно добавить opacity, если хотите плавное появление: opacity: 1; transition: opacity 0.3s ease-out; */
}

/* Левое крыло */
.link:hover::before {

  background-image: url('/wing.png');
  /* Убедитесь, что путь указан правильно */
  left: -45px;
  top: 3px;
  /* Анимация «махания» */
  animation: flap 0.6s ease-in-out infinite;
}

/* Правое крыло */
.link:hover::after {
  background-image: url('/wing.png'); /* То же изображение, но позже отзеркаливаем */
  right: -44px;
  top: 5px; /* Анимация для правого крыла с поддержкой отзеркаливания */
  animation: flapReverse 0.6s ease-in-out infinite;
}

/* Ключевые кадры для анимации левого крыла */
@keyframes flap {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(10deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

/* Ключевые кадры для анимации правого крыла с учётом отзеркаливания. В начальном состоянии крыло уже перевёрнуто с помощью scale(-1, 1) */
@keyframes flapReverse {
  0% {
    transform: scale(-1, 1) rotate(-10deg);
  }
  50% {
    transform: scale(-1, 1) rotate(0deg);
  }
  100% {
    transform: scale(-1, 1) rotate(-10deg);
  }
}
</style>
