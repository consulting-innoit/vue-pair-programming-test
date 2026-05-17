<template>
  <div class="card">
    <h1>To Do List</h1>
    <ItemFilter :todos="todos" @update:filtered="filteredTasks = $event" />
    <p>Current tasks:</p>
    <ul>
      <li
        v-if="filteredTasks.length > 0"
        v-for="(todo, index) in filteredTasks"
        :key="index"
      >
        {{ todo }}
      </li>
      <li v-else>No results</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import ItemFilter from "./ItemFilter.vue";

const todos = ref<string[]>(["Task 1", "Task 2", "Task 3", "Task 4", "Task 5"]);

const filteredTasks = ref<string[]>([]);
</script>

<style scoped lang="scss">
li {
  font-size: 1.25rem;
  width: fit-content;
  margin: auto;
}
</style>
