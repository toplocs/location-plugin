import { importShared as o, __tla as __tla_0 } from "./__federation_fn_import-D2rRIDFP.js";
import { u as l, _ as s, __tla as __tla_1 } from "./mapProvider-BLlWqujm.js";
let w;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_1;
    } catch {
    }
  })()
]).then(async () => {
  let u, a, c, p, _, k, v;
  ({ defineComponent: u } = await o("vue"));
  ({ unref: a, isRef: c, openBlock: p, createBlock: _ } = await o("vue"));
  ({ ref: k, watch: v } = await o("vue"));
  w = u({
    __name: "MainComponent",
    setup(i) {
      const { current: e, places: t } = l();
      return (m, n) => (p(), _(s, {
        modelValue: a(e),
        "onUpdate:modelValue": n[0] || (n[0] = (r) => c(e) ? e.value = r : null),
        disabled: true,
        places: a(t)
      }, null, 8, [
        "modelValue",
        "places"
      ]));
    }
  });
});
export {
  w as _,
  __tla
};
