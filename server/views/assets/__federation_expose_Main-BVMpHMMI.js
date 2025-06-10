import { importShared as e, __tla as __tla_0 } from "./__federation_fn_import-D2rRIDFP.js";
import { _ as r, __tla as __tla_1 } from "./MainComponent.vue_vue_type_script_setup_true_lang-BZiSPD_J.js";
import { m as t, __tla as __tla_2 } from "./mapProvider-ar0BglKS.js";
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
  let n, p, a;
  ({ defineComponent: n } = await e("vue"));
  ({ openBlock: p, createBlock: a } = await e("vue"));
  d = n({
    __name: "MainWrapper",
    props: {
      parentId: String
    },
    setup(o) {
      return t(o.parentId), (m, i) => (p(), a(r));
    }
  });
});
export {
  __tla,
  d as default
};
