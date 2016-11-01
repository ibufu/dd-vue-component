/**
 * Created by lingchenxuan on 16-11-1.
 */
import Vue from 'vue';
import router from './router';
import App from './App';

const app = new Vue({
    router,
    ...App
});

app.$mount('#app');