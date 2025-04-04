<template>
  <div class="container mx-auto mt-10 text-center">
    <h1 class="text-4xl font-bold mb-4">404 - Страница не найдена</h1>
    <p class="text-xl mb-6">К сожалению, запрашиваемая страница не существует.</p>
    <RouterLink to="/" class="text-blue-500 hover:underline text-lg">
      Вернуться на главную страницу
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>
