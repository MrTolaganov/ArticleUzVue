// import './assets/main.css'

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ui from "./ui";
import store from "./store";

const app = createApp(App);

ui.map((component) => app.component(component.name, component));

app.use(router);
app.use(store);

app.mount("#app");
