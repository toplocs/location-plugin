let y, j, S;
let __tla = (async () => {
  const g = {}, p = /* @__PURE__ */ new Set([
    "Module",
    "__esModule",
    "default",
    "_export_sfc"
  ]);
  let b = {
    "./Main": () => (y([], false, "./Main"), E("./__federation_expose_Main-jPFf1Dq-.js").then((e) => Object.keys(e).every((n) => p.has(n)) ? () => e.default : () => e)),
    "./Settings": () => (y([], false, "./Settings"), E("./__federation_expose_Settings-DQBp0S7v.js").then((e) => Object.keys(e).every((n) => p.has(n)) ? () => e.default : () => e))
  };
  let w;
  w = {};
  y = (e, n, l) => {
    const r = import.meta.url;
    if (typeof r > "u") {
      console.warn('The remote style takes effect only when the build.target option in the vite.config.ts file is higher than that of "es2020".');
      return;
    }
    const o = r.substring(0, r.lastIndexOf("plugin.js")), _ = "/";
    "assets", e.forEach((a) => {
      let s = "";
      const c = _ || o;
      if (c) {
        const i = {
          trailing: (t) => t.endsWith("/") ? t.slice(0, -1) : t,
          leading: (t) => t.startsWith("/") ? t.slice(1) : t
        }, v = (t) => t.startsWith("http") || t.startsWith("//"), d = i.trailing(c), h = i.leading(a), u = i.trailing(o);
        v(c) ? s = [
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
      if (n) {
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
  async function E(e) {
    return g[e] ?? (g[e] = import(e).then(async (m) => {
      await m.__tla;
      return m;
    })), g[e];
  }
  j = (e) => {
    if (!b[e]) throw new Error("Can not find remote module " + e);
    return b[e]();
  };
  S = (e) => {
    globalThis.__federation_shared__ = globalThis.__federation_shared__ || {}, Object.entries(e).forEach(([n, l]) => {
      for (const [r, o] of Object.entries(l)) {
        const _ = o.scope || "default";
        globalThis.__federation_shared__[_] = globalThis.__federation_shared__[_] || {};
        const a = globalThis.__federation_shared__[_];
        (a[n] = a[n] || {})[r] = o;
      }
    });
  };
})();
export {
  __tla,
  y as dynamicLoadingCss,
  j as get,
  S as init
};
