import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import App from '../components/App'

const routes = [
    {
        path: '/home',
        name: 'home',
        component: App,
    }
];

export default new VueRouter({routes})
