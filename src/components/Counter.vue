<template>
  <div>
    <h1>Counter</h1>
    <p>Current Count: {{ count }}</p>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    }
  }
};
</script>

<style scoped>
h1 {
  font-size: 2em;
  margin-bottom: 10px;
}
button {
  margin: 5px;
  padding: 10px;
  font-size: 1em;
}
</style>