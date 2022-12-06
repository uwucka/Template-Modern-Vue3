<script setup lang="ts">
  import { ref } from 'vue'

  const name = ref('123')
</script>

<template>
  <div class="kek">
    <p>{{ name }}</p>
  </div>
</template>

<style scoped lang="scss">
  .kek {
    color: red;
  }
</style>
