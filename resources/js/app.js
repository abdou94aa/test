/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');


import vuetify from './vuetify';
import 'vuetify/dist/vuetify.min.css';


import VueLayers from 'vuelayers'
 import 'vuelayers/lib/style.css'

 import VueResource from 'vue-resource';

 import VueVirtualScroller from 'vue-virtual-scroller'

 import Swal from 'sweetalert2'

 Vue.use(VueVirtualScroller)
 Vue.use(VueResource)
 Vue.use(VueLayers)
Vue.use(vuetify)


import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);


window.Swal = Swal;


import router from './router/index.js';
import store from './store/index.js';

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

import Home from './components/App.vue'
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    vuetify,
    router,
    store,
    components: {
        'home': Home,
    }
});

export default app;
