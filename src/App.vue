<template>
  <div id="app">
    <HelloWorld />
    <Counter />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Counter from './components/Counter.vue';

export default {
  components: {
    HelloWorld,
    Counter
  }
}
</script>

<style>
#app {
  text-align: center;
  margin-top: 60px;
}
</style>