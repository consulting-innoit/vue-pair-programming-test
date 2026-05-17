<template>
  <HelloWorld />
  <div class="flex">
    <Counter />
    <TodoList />
  </div>
</template>

<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import Counter from "./components/Counter.vue";
import TodoList from "./components/TodoList.vue";
</script>

<style lang="scss">
#app {
  text-align: center;
  margin: 60px 20px;
}
</style>
