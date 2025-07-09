let p, E, S;
let __tla = (async () => {
  const b = {}, g = /* @__PURE__ */ new Set([
    "Module",
    "__esModule",
    "default",
    "_export_sfc"
  ]);
  let v = {
    "./config": () => (p([], false, "./config"), y("./__federation_expose_Config-ByVjA5SC.js").then((e) => Object.keys(e).every((t) => g.has(t)) ? () => e.default : () => e)),
    "./Main": () => (p([], false, "./Main"), y("./__federation_expose_Main-Bkp9X97H.js").then((e) => Object.keys(e).every((t) => g.has(t)) ? () => e.default : () => e)),
    "./Settings": () => (p([], false, "./Settings"), y("./__federation_expose_Settings-E5tg03AH.js").then((e) => Object.keys(e).every((t) => g.has(t)) ? () => e.default : () => e))
  };
  let w;
  w = {};
  p = (e, t, l) => {
    const o = import.meta.url;
    if (typeof o > "u") {
      console.warn('The remote style takes effect only when the build.target option in the vite.config.ts file is higher than that of "es2020".');
      return;
    }
    const r = o.substring(0, o.lastIndexOf("plugin.js")), _ = "/";
    "assets", e.forEach((a) => {
      let s = "";
      const c = _ || r;
      if (c) {
        const i = {
          trailing: (n) => n.endsWith("/") ? n.slice(0, -1) : n,
          leading: (n) => n.startsWith("/") ? n.slice(1) : n
        }, j = (n) => n.startsWith("http") || n.startsWith("//"), d = i.trailing(c), h = i.leading(a), u = i.trailing(r);
        j(c) ? s = [
          d,
          h
        ].filter(Boolean).join("/") : u.includes(d) ? s = [
          u,
          h
        ].filter(Boolean).join("/") : s = [
          u + d,
          h
        ].filter(Boolean).join("/");
      } else s = a;
      if (t) {
        const i = "css__link-plugin__" + l;
        window[i] = window[i] || [], window[i].push(s);
        return;
      }
      if (s in w) return;
      w[s] = true;
      const f = document.createElement("link");
      f.rel = "stylesheet", f.href = s, document.head.appendChild(f);
    });
  };
  async function y(e) {
    return b[e] ?? (b[e] = import(e).then(async (m) => {
      await m.__tla;
      return m;
    })), b[e];
  }
  E = (e) => {
    if (!v[e]) throw new Error("Can not find remote module " + e);
    return v[e]();
  };
  S = (e) => {
    globalThis.__federation_shared__ = globalThis.__federation_shared__ || {}, Object.entries(e).forEach(([t, l]) => {
      for (const [o, r] of Object.entries(l)) {
        const _ = r.scope || "default";
        globalThis.__federation_shared__[_] = globalThis.__federation_shared__[_] || {};
        const a = globalThis.__federation_shared__[_];
        (a[t] = a[t] || {})[o] = r;
      }
    });
  };
})();
export {
  __tla,
  p as dynamicLoadingCss,
  E as get,
  S as init
};
