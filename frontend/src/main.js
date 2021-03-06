import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import './filters/filters.js';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import './styles/global.scss';

Vue.config.productionTip = false;


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");