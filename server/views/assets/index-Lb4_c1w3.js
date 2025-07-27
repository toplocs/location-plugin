import { importShared as n, __tla as __tla_0 } from "./__federation_fn_import-BGN3xxnt.js";
import { __tla as __tla_1 } from "./MapForm.vue_vue_type_script_setup_true_lang-CEicWYnT.js";
import { _ as a, __tla as __tla_2 } from "./MainComponent.vue_vue_type_script_setup_true_lang-BzU3BAxJ.js";
import { m as l, __tla as __tla_3 } from "./mapProvider-BbqVMlRa.js";
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
    for (const e of document.querySelectorAll('link[rel="modulepreload"]')) i(e);
    new MutationObserver((e) => {
      for (const t of e) if (t.type === "childList") for (const r of t.addedNodes) r.tagName === "LINK" && r.rel === "modulepreload" && i(r);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function c(e) {
      const t = {};
      return e.integrity && (t.integrity = e.integrity), e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy), e.crossOrigin === "use-credentials" ? t.credentials = "include" : e.crossOrigin === "anonymous" ? t.credentials = "omit" : t.credentials = "same-origin", t;
    }
    function i(e) {
      if (e.ep) return;
      e.ep = true;
      const t = c(e);
      fetch(e.href, t);
    }
  })();
  const { defineComponent: p } = await n("vue"), { createVNode: u, openBlock: f, createElementBlock: m } = await n("vue"), d = {
    class: "max-w-xl mx-auto"
  }, _ = p({
    __name: "App",
    setup(s) {
      return l("0aa63ffe-5452-4057-bcd5-8501a1862cee"), (o, c) => (f(), m("div", d, [
        u(a)
      ]));
    }
  }), { createApp: h } = await n("vue"), y = h(_);
  y.mount("#location-plugin");
});
