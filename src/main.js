import { createSSRApp } from "vue";
import * as Pinia from 'pinia';
import App from "./App.vue";
import { createUnistorage } from "pinia-plugin-unistorage";

export function createApp() {
	const app = createSSRApp(App);
	const piniaStore = Pinia.createPinia()
	piniaStore.use(createUnistorage())
	app.use(piniaStore);
	return {
		app,
		piniaStore,
	};
}