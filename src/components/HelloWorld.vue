<template>
  <div class="hello">
    <h1>{{ greeting }}</h1>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const greeting = ref('Hello, Vue.js!');
</script>

<style scoped lang="scss">
.hello {
  text-align: center;
  margin-top: 20px;
}
</style>