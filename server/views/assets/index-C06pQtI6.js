import { importShared as a, __tla as __tla_0 } from "./__federation_fn_import-D2rRIDFP.js";
import { _ as u, __tla as __tla_1 } from "./MapForm.vue_vue_type_script_setup_true_lang-CpReymhd.js";
import { _ as m, __tla as __tla_2 } from "./MainComponent.vue_vue_type_script_setup_true_lang-BZiSPD_J.js";
import { m as d, g as s, __tla as __tla_3 } from "./mapProvider-ar0BglKS.js";
Promise.all([
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
  })(),
  (() => {
    try {
      return __tla_3;
    } catch {
    }
  })()
]).then(async () => {
  (function() {
    const o = document.createElement("link").relList;
    if (o && o.supports && o.supports("modulepreload")) return;
    for (const e of document.querySelectorAll('link[rel="modulepreload"]')) n(e);
    new MutationObserver((e) => {
      for (const t of e) if (t.type === "childList") for (const c of t.addedNodes) c.tagName === "LINK" && c.rel === "modulepreload" && n(c);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function i(e) {
      const t = {};
      return e.integrity && (t.integrity = e.integrity), e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy), e.crossOrigin === "use-credentials" ? t.credentials = "include" : e.crossOrigin === "anonymous" ? t.credentials = "omit" : t.credentials = "same-origin", t;
    }
    function n(e) {
      if (e.ep) return;
      e.ep = true;
      const t = i(e);
      fetch(e.href, t);
    }
  })();
  const { defineComponent: f } = await a("vue"), { createVNode: l, openBlock: g, createElementBlock: _ } = await a("vue"), h = {
    class: "max-w-md mx-auto"
  }, y = f({
    __name: "App",
    setup(r) {
      return d("Test"), (o, i) => (g(), _("div", h, [
        l(m),
        l(u)
      ]));
    }
  }), { createApp: b } = await a("vue"), p = s.get("location_plugin");
  p.once((r) => {
    if (!r) {
      const o = p.put({
        id: "location_plugin",
        name: "Location",
        url: "http://localhost:3007/assets/plugin.js"
      }), i = s.get("location_plugin/paths"), n = s.get("location_plugin/slots");
      n.set({
        slot: "InfoView",
        component: "Main"
      }), n.set({
        slot: "Settings",
        component: "Dialog"
      });
      const e = s.get("location_plugin/tabs");
      o.get("paths").put(i), o.get("slots").put(n), o.get("tabs").put(e), s.get("plugins").set(o), console.log("Location plugin has been added to the gun plugin list", o);
    }
  });
  const v = b(y);
  v.mount("#location-plugin");
});
