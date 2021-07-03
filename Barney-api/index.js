import { Application } from "https://deno.land/x/oax/mod.ts";

const app = new Application();
app.use((ctx) => {
  ctx.response.body = "Hello world!";
});

addEventListener("fetch", app.fetchEventHandler());