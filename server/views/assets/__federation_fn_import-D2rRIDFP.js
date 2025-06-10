let ge, Te, be;
let __tla = (async () => {
  const q = "[0-9A-Za-z-]+", y = `(?:\\+(${q}(?:\\.${q})*))`, _ = "0|[1-9]\\d*", V = "[0-9]+", F = "\\d*[a-zA-Z-][a-zA-Z0-9-]*", S = `(?:${V}|${F})`, D = `(?:-?(${S}(?:\\.${S})*))`, X = `(?:${_}|${F})`, K = `(?:-(${X}(?:\\.${X})*))`, T = `${_}|x|X|\\*`, d = `[v=\\s]*(${T})(?:\\.(${T})(?:\\.(${T})(?:${K})?${y}?)?)?`, J = `^\\s*(${d})\\s+-\\s+(${d})\\s*$`, Q = `(${V})\\.(${V})\\.(${V})`, W = `[v=\\s]*${Q}${D}?${y}?`, C = "((?:<|>)?=?)", Y = `(\\s*)${C}\\s*(${W}|${d})`, U = "(?:~>?)", A = `(\\s*)${U}\\s+`, B = "(?:\\^)", j = `(\\s*)${B}\\s+`, m = "(<|>)?=?\\s*\\*", ee = `^${B}${d}$`, re = `(${_})\\.(${_})\\.(${_})`, ne = `v?${re}${K}?${y}?`, te = `^${U}${d}$`, se = `^${C}\\s*${d}$`, ie = `^${C}\\s*(${ne})$|^$`, $e = "^\\s*>=\\s*0.0.0\\s*$";
  function o(e) {
    return new RegExp(e);
  }
  function c(e) {
    return !e || e.toLowerCase() === "x" || e === "*";
  }
  function G(...e) {
    return (t) => e.reduce((s, r) => r(s), t);
  }
  function E(e) {
    return e.match(o(ie));
  }
  function z(e, t, s, r) {
    const n = `${e}.${t}.${s}`;
    return r ? `${n}-${r}` : n;
  }
  function ue(e) {
    return e.replace(o(J), (t, s, r, n, i, $, u, f, a, l, R, p) => (c(r) ? s = "" : c(n) ? s = `>=${r}.0.0` : c(i) ? s = `>=${r}.${n}.0` : s = `>=${s}`, c(a) ? f = "" : c(l) ? f = `<${+a + 1}.0.0-0` : c(R) ? f = `<${a}.${+l + 1}.0-0` : p ? f = `<=${a}.${l}.${R}-${p}` : f = `<=${f}`, `${s} ${f}`.trim()));
  }
  function ce(e) {
    return e.replace(o(Y), "$1$2$3");
  }
  function fe(e) {
    return e.replace(o(A), "$1~");
  }
  function ae(e) {
    return e.replace(o(j), "$1^");
  }
  function le(e) {
    return e.trim().split(/\s+/).map((t) => t.replace(o(ee), (s, r, n, i, $) => c(r) ? "" : c(n) ? `>=${r}.0.0 <${+r + 1}.0.0-0` : c(i) ? r === "0" ? `>=${r}.${n}.0 <${r}.${+n + 1}.0-0` : `>=${r}.${n}.0 <${+r + 1}.0.0-0` : $ ? r === "0" ? n === "0" ? `>=${r}.${n}.${i}-${$} <${r}.${n}.${+i + 1}-0` : `>=${r}.${n}.${i}-${$} <${r}.${+n + 1}.0-0` : `>=${r}.${n}.${i}-${$} <${+r + 1}.0.0-0` : r === "0" ? n === "0" ? `>=${r}.${n}.${i} <${r}.${n}.${+i + 1}-0` : `>=${r}.${n}.${i} <${r}.${+n + 1}.0-0` : `>=${r}.${n}.${i} <${+r + 1}.0.0-0`)).join(" ");
  }
  function oe(e) {
    return e.trim().split(/\s+/).map((t) => t.replace(o(te), (s, r, n, i, $) => c(r) ? "" : c(n) ? `>=${r}.0.0 <${+r + 1}.0.0-0` : c(i) ? `>=${r}.${n}.0 <${r}.${+n + 1}.0-0` : $ ? `>=${r}.${n}.${i}-${$} <${r}.${+n + 1}.0-0` : `>=${r}.${n}.${i} <${r}.${+n + 1}.0-0`)).join(" ");
  }
  function pe(e) {
    return e.split(/\s+/).map((t) => t.trim().replace(o(se), (s, r, n, i, $, u) => {
      const f = c(n), a = f || c(i), l = a || c($);
      return r === "=" && l && (r = ""), u = "", f ? r === ">" || r === "<" ? "<0.0.0-0" : "*" : r && l ? (a && (i = 0), $ = 0, r === ">" ? (r = ">=", a ? (n = +n + 1, i = 0, $ = 0) : (i = +i + 1, $ = 0)) : r === "<=" && (r = "<", a ? n = +n + 1 : i = +i + 1), r === "<" && (u = "-0"), `${r + n}.${i}.${$}${u}`) : a ? `>=${n}.0.0${u} <${+n + 1}.0.0-0` : l ? `>=${n}.${i}.0${u} <${n}.${+i + 1}.0-0` : s;
    })).join(" ");
  }
  function de(e) {
    return e.trim().replace(o(m), "");
  }
  function _e(e) {
    return e.trim().replace(o($e), "");
  }
  function h(e, t) {
    return e = +e || e, t = +t || t, e > t ? 1 : e === t ? 0 : -1;
  }
  function Re(e, t) {
    const { preRelease: s } = e, { preRelease: r } = t;
    if (s === void 0 && r) return 1;
    if (s && r === void 0) return -1;
    if (s === void 0 && r === void 0) return 0;
    for (let n = 0, i = s.length; n <= i; n++) {
      const $ = s[n], u = r[n];
      if ($ !== u) return $ === void 0 && u === void 0 ? 0 : $ ? u ? h($, u) : -1 : 1;
    }
    return 0;
  }
  function v(e, t) {
    return h(e.major, t.major) || h(e.minor, t.minor) || h(e.patch, t.patch) || Re(e, t);
  }
  function g(e, t) {
    return e.version === t.version;
  }
  function ve(e, t) {
    switch (e.operator) {
      case "":
      case "=":
        return g(e, t);
      case ">":
        return v(e, t) < 0;
      case ">=":
        return g(e, t) || v(e, t) < 0;
      case "<":
        return v(e, t) > 0;
      case "<=":
        return g(e, t) || v(e, t) > 0;
      case void 0:
        return true;
      default:
        return false;
    }
  }
  function Ve(e) {
    return G(le, oe, pe, de)(e);
  }
  function he(e) {
    return G(ue, ce, fe, ae)(e.trim()).split(/\s+/).join(" ");
  }
  function we(e, t) {
    if (!e) return false;
    const n = he(t).split(" ").map((p) => Ve(p)).join(" ").split(/\s+/).map((p) => _e(p)), i = E(e);
    if (!i) return false;
    const [, $, , u, f, a, l] = i, R = {
      version: z(u, f, a, l),
      major: u,
      minor: f,
      patch: a,
      preRelease: l == null ? void 0 : l.split(".")
    };
    for (const p of n) {
      const P = E(p);
      if (!P) return false;
      const [, M, , L, I, O, b] = P, N = {
        operator: M,
        version: z(L, I, O, b),
        major: L,
        minor: I,
        patch: O,
        preRelease: b == null ? void 0 : b.split(".")
      };
      if (!ve(N, R)) return false;
    }
    return true;
  }
  const Z = {}, x = {
    vue: {
      get: () => () => k(new URL("__federation_shared_vue-MGgX2WkV.js", import.meta.url).href),
      import: true
    },
    tailwindcss: {
      get: () => () => k(new URL("__federation_shared_tailwindcss-dL759sYM.js", import.meta.url).href),
      import: true
    }
  }, w = /* @__PURE__ */ Object.create(null);
  ge = async function(e, t = "default") {
    return w[e] ? new Promise((s) => s(w[e])) : await be(e, t) || Te(e);
  };
  async function k(e) {
    return Z[e] ?? (Z[e] = import(e).then(async (m2) => {
      await m2.__tla;
      return m2;
    })), Z[e];
  }
  be = async function(e, t) {
    var _a, _b, _c;
    let s = null;
    if ((_b = (_a = globalThis == null ? void 0 : globalThis.__federation_shared__) == null ? void 0 : _a[t]) == null ? void 0 : _b[e]) {
      const r = globalThis.__federation_shared__[t][e], n = (_c = x[e]) == null ? void 0 : _c.requiredVersion;
      if (!!n) {
        const $ = Object.keys(r).find((u) => we(u, n));
        $ ? s = await (await r[$].get())() : console.log(`provider support ${e}(${$}) is not satisfied requiredVersion(\${moduleMap[name].requiredVersion})`);
      } else {
        const $ = Object.keys(r)[0];
        s = await (await r[$].get())();
      }
    }
    if (s) return H(s, e);
  };
  Te = async function(e) {
    var _a;
    if ((_a = x[e]) == null ? void 0 : _a.import) {
      let t = await (await x[e].get())();
      return H(t, e);
    } else console.error("consumer config import=false,so cant use callback shared module");
  };
  function H(e, t) {
    return typeof e.default == "function" ? (Object.keys(e).forEach((s) => {
      s !== "default" && (e.default[s] = e[s]);
    }), w[t] = e.default, e.default) : (e.default && (e = Object.assign({}, e.default, e)), w[t] = e, e);
  }
})();
export {
  __tla,
  ge as importShared,
  Te as importSharedLocal,
  be as importSharedRuntime
};
