import { importShared as a, __tla as __tla_0 } from "./__federation_fn_import-D2rRIDFP.js";
import { u as N, a as B, _ as S, __tla as __tla_1 } from "./mapProvider-ar0BglKS.js";
let ne;
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
  let Y, Z, ee, te, V, h, f, v, oe, E, z, M, D, T, F, G, P, j, g, b, q, k, L, U, A, H, I, J, $, K, u, i, m, w, _, C, y, O, Q, d, R;
  ({ defineComponent: Y } = await a("vue"));
  ({ createElementVNode: Z, openBlock: ee, createElementBlock: te } = await a("vue"));
  ({ createTextVNode: V, Fragment: h, openBlock: f, createElementBlock: v, createCommentVNode: oe, renderSlot: E, normalizeClass: z } = await a("vue"));
  M = [
    "disabled"
  ];
  ({ ref: D, computed: T, watch: F } = await a("vue"));
  G = {
    __name: "SubmitButton",
    props: {
      className: {
        type: String,
        default: ""
      }
    },
    setup(l) {
      const c = l, t = D(false), n = () => {
        t.value = true, setTimeout(() => {
          t.value = false;
        }, 2e3);
      };
      F(t, (o) => {
        o && n();
      });
      const r = T(() => `inline-flex justify-center px-4 py-2 text-sm font-medium border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 bg-transparent rounded-lg shadow-sm hover:bg-blue-50 dark:hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 ${c.className}
`);
      return (o, p) => (f(), v("button", {
        type: "submit",
        disabled: t.value,
        class: z(r.value)
      }, [
        t.value ? (f(), v(h, {
          key: 0
        }, [
          V(" Sending ... ")
        ], 64)) : E(o.$slots, "default", {
          key: 1
        })
      ], 10, M));
    }
  };
  ({ defineComponent: P } = await a("vue"));
  ({ toDisplayString: j, openBlock: g, createElementBlock: b, createCommentVNode: q, createElementVNode: k, renderSlot: L, normalizeClass: U } = await a("vue"));
  A = {
    class: "flex items-start"
  };
  H = {
    key: 0,
    class: "font-semibold"
  };
  I = {
    class: "overflow-y-auto text-xs"
  };
  ({ computed: J } = await a("vue"));
  $ = P({
    __name: "Callout",
    props: {
      title: {
        type: String,
        required: false
      },
      color: {
        type: String,
        default: "red",
        validator: (l) => [
          "red",
          "green"
        ].includes(l)
      }
    },
    setup(l) {
      const c = l, t = J(() => {
        const n = "flex flex-col overflow-hidden rounded-lg border-l-4 p-4 mb-2 opacity-75", r = c.color === "red" ? "bg-red-100 border-red-500 text-red-700" : "bg-green-100 border-green-500 text-green-700";
        return `${n} ${r}`;
      });
      return (n, r) => (g(), b("div", {
        class: U(t.value)
      }, [
        k("div", A, [
          l.title ? (g(), b("h4", H, j(l.title), 1)) : q("", true)
        ]),
        k("p", I, [
          L(n.$slots, "default")
        ])
      ], 2));
    }
  });
  ({ defineComponent: K } = await a("vue"));
  ({ createTextVNode: u, withCtx: i, createVNode: m, toDisplayString: w, openBlock: _, createBlock: C, createCommentVNode: y, withModifiers: O, createElementBlock: Q } = await a("vue"));
  ({ ref: d, onMounted: R } = await a("vue"));
  ne = K({
    __name: "MapForm",
    setup(l) {
      const { createLocation: c } = N(), t = d(null), n = d(""), r = d(""), o = d(null), p = async () => {
        var _a, _b, _c, _d;
        try {
          if (!o.value) throw new Error("No location was selected");
          if (n.value.length) return;
          const e = new FormData(t.value ?? void 0);
          e.append("lat", (_a = o.value) == null ? void 0 : _a.lat), e.append("lng", (_b = o.value) == null ? void 0 : _b.lng), e.append("zoom", (_c = o.value) == null ? void 0 : _c.zoom);
          const s = await c(e);
          r.value = "The location has been saved successfully!", (_d = t.value) == null ? void 0 : _d.reset();
        } catch (e) {
          console.error(e), n.value = e.response.data;
        }
      };
      return R(() => {
        navigator.geolocation ? navigator.geolocation.getCurrentPosition((e) => {
          var _a, _b;
          o.value = {
            lat: (_a = e.coords) == null ? void 0 : _a.latitude,
            lng: (_b = e.coords) == null ? void 0 : _b.longitude,
            zoom: 15
          };
        }, (e) => {
          console.warn("Geolocation error:", e);
        }) : console.warn("Geolocation not supported");
      }), (e, s) => (_(), Q("form", {
        ref_key: "form",
        ref: t,
        onSubmit: O(p, [
          "prevent"
        ]),
        class: "space-y-2"
      }, [
        m(B, null, {
          default: i(() => s[1] || (s[1] = [
            u(" Set the location point ")
          ])),
          _: 1,
          __: [
            1
          ]
        }),
        n.value ? (_(), C($, {
          key: 0,
          color: "red"
        }, {
          default: i(() => [
            u(w(n.value), 1)
          ]),
          _: 1
        })) : y("", true),
        r.value ? (_(), C($, {
          key: 1,
          color: "green"
        }, {
          default: i(() => [
            u(w(r.value), 1)
          ]),
          _: 1
        })) : y("", true),
        m(S, {
          modelValue: o.value,
          "onUpdate:modelValue": s[0] || (s[0] = (x) => o.value = x)
        }, null, 8, [
          "modelValue"
        ]),
        m(G, {
          className: "w-full mt-4"
        }, {
          default: i(() => s[2] || (s[2] = [
            u(" Submit ")
          ])),
          _: 1,
          __: [
            2
          ]
        })
      ], 544));
    }
  });
});
export {
  ne as _,
  __tla
};
