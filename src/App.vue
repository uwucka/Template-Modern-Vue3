<template>
  <router-view msg="Vite + Vue" />
  <div class="header">
    <div class="header__menu">
      <button type="button" @click="router.push({ name: 'home' })">Home</button>
      <button type="button" @click="router.push({ name: 'about' })">About</button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useRouter } from 'vue-router'

  const router = useRouter()
</script>

<style scoped lang="scss">
  .header {
    display: flex;
    justify-content: center;
    inline-size: 100%;

    &__menu {
      display: flex;
      justify-content: space-around;
      inline-size: 200px;
    }
  }
</style>
