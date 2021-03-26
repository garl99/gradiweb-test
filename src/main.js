import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueResource from "vue-resource";

Vue.config.productionTip = false;
Vue.use(VueResource);
Vue.prototype.date = require("unix-date");
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
