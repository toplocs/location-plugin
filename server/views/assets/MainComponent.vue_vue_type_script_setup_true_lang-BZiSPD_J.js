import { importShared as o, __tla as __tla_0 } from "./__federation_fn_import-D2rRIDFP.js";
import { u as a, _ as r, __tla as __tla_1 } from "./mapProvider-ar0BglKS.js";
let k;
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
  let u, l, s, _, i, f;
  ({ defineComponent: u } = await o("vue"));
  ({ unref: l, isRef: s, openBlock: _, createBlock: i } = await o("vue"));
  ({ onMounted: f } = await o("vue"));
  k = u({
    __name: "MainComponent",
    setup(m) {
      const { current: e } = a();
      return (p, n) => (_(), i(r, {
        modelValue: l(e),
        "onUpdate:modelValue": n[0] || (n[0] = (t) => s(e) ? e.value = t : null),
        disabled: true
      }, null, 8, [
        "modelValue"
      ]));
    }
  });
});
export {
  k as _,
  __tla
};
