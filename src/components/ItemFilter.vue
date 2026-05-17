<template>
  <p>Find your task:</p>
  <input v-model="input" type="text" placeholder="Type the task here" />
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";

//define the props  from the parent component
const props = defineProps<{
  todos: string[];
}>();

//define the emit function to the parent component
const emit = defineEmits<{
  (e: "update:filtered", value: string[]): void;
}>();

const input = ref("");

//filtering the list of tasks
const filtered = computed(() => {
  return props.todos.filter((item) =>
    item.toLowerCase().includes(input.value.toLowerCase()),
  );
});
//watch the filtered list and emit the changes to the parent component
watch(filtered, (newVal) => emit("update:filtered", newVal), {
  immediate: true,
});
</script>

<style scoped lang="scss">
input {
  margin: 5px;
  padding: 10px;
  font-size: 1.25em;
  border-radius: $radius-sm;
  &:focus-visible {
    outline: 2px solid $primary-dark;
    outline-offset: 2px;
  }
}
</style>
