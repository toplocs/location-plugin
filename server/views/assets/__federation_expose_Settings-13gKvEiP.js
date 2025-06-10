import { importShared as e, __tla as __tla_0 } from "./__federation_fn_import-D2rRIDFP.js";
import { m as s, a as i, __tla as __tla_1 } from "./mapProvider-ar0BglKS.js";
import { _ as l, __tla as __tla_2 } from "./MapForm.vue_vue_type_script_setup_true_lang-CpReymhd.js";
let V;
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
  let _, m, p, d, u, f, x, h, n, a, k, v, w, B, C;
  ({ defineComponent: _ } = await e("vue"));
  ({ normalizeClass: m, openBlock: p, createElementBlock: d } = await e("vue"));
  u = _({
    __name: "Divider",
    props: {
      direction: "horizontal"
    },
    setup(t) {
      return (r, c) => (p(), d("div", {
        class: m([
          "bg-gray-300",
          t.direction === "vertical" ? "w-px h-full" : "h-px w-full",
          "my-1"
        ])
      }, null, 2));
    }
  });
  ({ defineComponent: f } = await e("vue"));
  ({ createTextVNode: x, withCtx: h, createVNode: n, createElementVNode: a, Fragment: k, openBlock: v, createElementBlock: w } = await e("vue"));
  B = {
    class: "mb-4"
  };
  C = {
    class: "mb-4"
  };
  V = f({
    __name: "SettingsWrapper",
    props: {
      parentId: String
    },
    setup(t) {
      return s(t.parentId), (c, o) => (v(), w(k, null, [
        a("section", B, [
          n(i, null, {
            default: h(() => o[0] || (o[0] = [
              x("Map Settings")
            ])),
            _: 1,
            __: [
              0
            ]
          }),
          n(u)
        ]),
        a("section", C, [
          n(l)
        ])
      ], 64));
    }
  });
});
export {
  __tla,
  V as default
};
