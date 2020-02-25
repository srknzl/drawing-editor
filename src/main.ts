import Vue from "vue";
import App from "./App.vue";
import BootstrapVue from "bootstrap-vue";
import "../public/styles/global.scss";
import "verte/dist/verte.css";
// eslint-disable-next-line @typescript-eslint/no-var-requires
import Verte from "verte";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.component(Verte.name, Verte);
Vue.prototype.window = window;
// register component globally
new Vue({
  render: h => h(App)
}).$mount("#app");
