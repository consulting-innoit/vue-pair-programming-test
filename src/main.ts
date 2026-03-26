import type { Component } from 'vue';
import { createApp } from 'vue';
import App from './App.vue';

import './styles/main.css';

const app = createApp(App as Component).mount('#app');

