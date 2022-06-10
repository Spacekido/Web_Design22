import TopAppBar from "./TopAppBar.svelte";
import App from "./App.svelte";

const topAppBar = new TopAppBar({
  target: document.body,
  props: {},
});

const app = new App({
  target: document.body,
  props: {},
});

export { app, topAppBar };
