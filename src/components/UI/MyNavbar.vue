<template>
  <header class="bg-black z-30">
    <div class="container mx-auto pt-1 pb-2">
      <nav class="flex gap-9 lg:gap-28 justify-center">
        <RouterLink class="link lg:text-2xl wing-link" to="/">
          <p>home</p>
        </RouterLink>
        <RouterLink class="link lg:text-2xl wing-link" to="/about">
          <p>about</p>
        </RouterLink>
        <RouterLink class="link lg:text-2xl wing-link" to="/commission">
          <p>commission</p>
        </RouterLink>
        <RouterLink class="link lg:text-2xl wing-link" to="/shop">
          <p>shop</p>
        </RouterLink>
        <RouterLink class="link lg:text-2xl wing-link" to="/tos">
          <p>t.o.s</p>
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
@media (max-width: 1023px) {
  .wing-link::before,
  .wing-link::after {
    display: none;
  }
}

.wing-link {
  position: relative;
  display: inline-block;
}

/* Левое крыло */
.wing-link::before {
  content: '';
  position: absolute;
  width: 50px; /* Настройте под размер вашего GIF */
  height: 50px;
  background-image: url('/wing animated.gif');
  background-size: contain;
  background-repeat: no-repeat;
  left: -60px; /* Расстояние от текста */
  top: 80%;
  transform: translateY(-50%);
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

/* Правое крыло (отраженное левое) */
.wing-link::after {
  content: '';
  position: absolute;
  width: 50px; /* Тот же размер, что у левого */
  height: 50px;
  background-image: url('/wing animated.gif');
  background-size: contain;
  background-repeat: no-repeat;
  right: -60px; /* Расстояние от текста */
  top: 80%;
  transform: translateY(-50%) scaleX(-1); /* Отражение по горизонтали */
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

/* Показываем крылья при ховере */
.wing-link:hover::before,
.wing-link:hover::after {
  opacity: 1;
}
</style>
