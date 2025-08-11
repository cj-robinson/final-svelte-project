import { c as create_ssr_component } from "../../chunks/index-13c0de55.js";
var app = "";
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-1nc797j{width:100%;height:100%}",
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const prerender = true;
  if ($$props.prerender === void 0 && $$bindings.prerender && prerender !== void 0)
    $$bindings.prerender(prerender);
  $$result.css.add(css);
  return `<main class="${"svelte-1nc797j"}">${slots.default ? slots.default({}) : ``}
</main>`;
});
export { _layout as default };
