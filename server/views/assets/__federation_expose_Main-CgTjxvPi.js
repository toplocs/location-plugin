import { importShared as o, __tla as __tla_0 } from "./__federation_fn_import-BGN3xxnt.js";
import { _ as t, __tla as __tla_1 } from "./MainComponent.vue_vue_type_script_setup_true_lang-BzU3BAxJ.js";
import { m as n, __tla as __tla_2 } from "./mapProvider-BbqVMlRa.js";
let d;
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
  })(),
  (() => {
    try {
      return __tla_2;
    } catch {
    }
  })()
]).then(async () => {
  let a, p, c;
  ({ defineComponent: a } = await o("vue"));
  ({ openBlock: p, createBlock: c } = await o("vue"));
  d = a({
    __name: "MainWrapper",
    props: {
      parentId: String
    },
    setup(r) {
      const e = r;
      return e.parentId && n(e.parentId), (i, m) => (p(), c(t));
    }
  });
});
export {
  __tla,
  d as default
};
