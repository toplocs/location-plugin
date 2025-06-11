import { importShared as he, __tla as __tla_0 } from "./__federation_fn_import-D2rRIDFP.js";
import { c as yt, b as Ot, a as je } from "./_commonjs-dynamic-modules-D9Q0Knnx.js";
let Mr, Pr, V, Nr, Lr;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  let Et, Tt, Ct, $t, Dt;
  ({ defineComponent: Et } = await he("vue"));
  ({ renderSlot: Tt, normalizeClass: Ct, openBlock: $t, createElementBlock: Dt } = await he("vue"));
  Pr = Et({
    __name: "Title",
    props: {
      float: {
        type: String,
        default: "left",
        required: false
      }
    },
    setup(S) {
      return (e, f) => ($t(), Dt("h3", {
        class: Ct(`my-auto text-${S.float} text-lg text-gray-800 dark:text-gray-100 font-semibold`)
      }, [
        Tt(e.$slots, "default")
      ], 2));
    }
  });
  (function() {
    try {
      if (typeof document < "u") {
        var S = document.createElement("style");
        S.appendChild(document.createTextNode(".mapdiv[data-v-e7ebb206]{width:100%;height:100%}.advanced-marker-wrapper{display:none}.mapdiv .advanced-marker-wrapper{display:inline-block}.custom-control-wrapper[data-v-d099a3a6]{display:none}.mapdiv .custom-control-wrapper[data-v-d099a3a6]{display:inline-block}.info-window-wrapper[data-v-cbe1707b]{display:none}.mapdiv .info-window-wrapper[data-v-cbe1707b]{display:inline-block}.custom-marker-wrapper[data-v-2d2d343a]{display:none}.mapdiv .custom-marker-wrapper[data-v-2d2d343a]{display:inline-block}")), document.head.appendChild(S);
      }
    } catch (e) {
      console.error("vite-plugin-css-injected-by-js", e);
    }
  })();
  var Pt = Object.defineProperty, Mt = (S, e, f) => e in S ? Pt(S, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: f
  }) : S[e] = f, We = (S, e, f) => (Mt(S, typeof e != "symbol" ? e + "" : e, f), f);
  const { defineComponent: J, ref: G, provide: le, watch: F, onMounted: vt, onBeforeUnmount: oe, markRaw: H, toRef: ee, openBlock: Be, createElementBlock: Ie, createElementVNode: Ne, renderSlot: Le, normalizeProps: Bt, guardReactiveProps: It, computed: ce, Comment: Ge, inject: Z, mergeProps: mt, createCommentVNode: gt } = await he("vue"), ae = Symbol("map"), se = Symbol("api"), Ue = Symbol("marker"), Re = Symbol("markerCluster"), Ae = Symbol("CustomMarker"), wt = Symbol("mapTilesLoaded"), pe = [
    "click",
    "dblclick",
    "drag",
    "dragend",
    "dragstart",
    "mousedown",
    "mousemove",
    "mouseout",
    "mouseover",
    "mouseup",
    "rightclick"
  ];
  function Nt(S, e, f, c) {
    function t(r) {
      return r instanceof f ? r : new f(function(i) {
        i(r);
      });
    }
    return new (f || (f = Promise))(function(r, i) {
      function p(a) {
        try {
          u(c.next(a));
        } catch (o) {
          i(o);
        }
      }
      function s(a) {
        try {
          u(c.throw(a));
        } catch (o) {
          i(o);
        }
      }
      function u(a) {
        a.done ? r(a.value) : t(a.value).then(p, s);
      }
      u((c = c.apply(S, [])).next());
    });
  }
  var Lt = function S(e, f) {
    if (e === f) return true;
    if (e && f && typeof e == "object" && typeof f == "object") {
      if (e.constructor !== f.constructor) return false;
      var c, t, r;
      if (Array.isArray(e)) {
        if (c = e.length, c != f.length) return false;
        for (t = c; t-- !== 0; ) if (!S(e[t], f[t])) return false;
        return true;
      }
      if (e.constructor === RegExp) return e.source === f.source && e.flags === f.flags;
      if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === f.valueOf();
      if (e.toString !== Object.prototype.toString) return e.toString() === f.toString();
      if (r = Object.keys(e), c = r.length, c !== Object.keys(f).length) return false;
      for (t = c; t-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(f, r[t])) return false;
      for (t = c; t-- !== 0; ) {
        var i = r[t];
        if (!S(e[i], f[i])) return false;
      }
      return true;
    }
    return e !== e && f !== f;
  };
  const Ye = "__googleMapsScriptId";
  var ue;
  (function(S) {
    S[S.INITIALIZED = 0] = "INITIALIZED", S[S.LOADING = 1] = "LOADING", S[S.SUCCESS = 2] = "SUCCESS", S[S.FAILURE = 3] = "FAILURE";
  })(ue || (ue = {}));
  class ie {
    constructor({ apiKey: e, authReferrerPolicy: f, channel: c, client: t, id: r = Ye, language: i, libraries: p = [], mapIds: s, nonce: u, region: a, retries: o = 3, url: y = "https://maps.googleapis.com/maps/api/js", version: w }) {
      if (this.callbacks = [], this.done = false, this.loading = false, this.errors = [], this.apiKey = e, this.authReferrerPolicy = f, this.channel = c, this.client = t, this.id = r || Ye, this.language = i, this.libraries = p, this.mapIds = s, this.nonce = u, this.region = a, this.retries = o, this.url = y, this.version = w, ie.instance) {
        if (!Lt(this.options, ie.instance.options)) throw new Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(ie.instance.options)}`);
        return ie.instance;
      }
      ie.instance = this;
    }
    get options() {
      return {
        version: this.version,
        apiKey: this.apiKey,
        channel: this.channel,
        client: this.client,
        id: this.id,
        libraries: this.libraries,
        language: this.language,
        region: this.region,
        mapIds: this.mapIds,
        nonce: this.nonce,
        url: this.url,
        authReferrerPolicy: this.authReferrerPolicy
      };
    }
    get status() {
      return this.errors.length ? ue.FAILURE : this.done ? ue.SUCCESS : this.loading ? ue.LOADING : ue.INITIALIZED;
    }
    get failed() {
      return this.done && !this.loading && this.errors.length >= this.retries + 1;
    }
    createUrl() {
      let e = this.url;
      return e += "?callback=__googleMapsCallback", this.apiKey && (e += `&key=${this.apiKey}`), this.channel && (e += `&channel=${this.channel}`), this.client && (e += `&client=${this.client}`), this.libraries.length > 0 && (e += `&libraries=${this.libraries.join(",")}`), this.language && (e += `&language=${this.language}`), this.region && (e += `&region=${this.region}`), this.version && (e += `&v=${this.version}`), this.mapIds && (e += `&map_ids=${this.mapIds.join(",")}`), this.authReferrerPolicy && (e += `&auth_referrer_policy=${this.authReferrerPolicy}`), e;
    }
    deleteScript() {
      const e = document.getElementById(this.id);
      e && e.remove();
    }
    load() {
      return this.loadPromise();
    }
    loadPromise() {
      return new Promise((e, f) => {
        this.loadCallback((c) => {
          c ? f(c.error) : e(window.google);
        });
      });
    }
    importLibrary(e) {
      return this.execute(), google.maps.importLibrary(e);
    }
    loadCallback(e) {
      this.callbacks.push(e), this.execute();
    }
    setScript() {
      var e, f;
      if (document.getElementById(this.id)) {
        this.callback();
        return;
      }
      const c = {
        key: this.apiKey,
        channel: this.channel,
        client: this.client,
        libraries: this.libraries.length && this.libraries,
        v: this.version,
        mapIds: this.mapIds,
        language: this.language,
        region: this.region,
        authReferrerPolicy: this.authReferrerPolicy
      };
      Object.keys(c).forEach((r) => !c[r] && delete c[r]), !((f = (e = window == null ? void 0 : window.google) === null || e === void 0 ? void 0 : e.maps) === null || f === void 0) && f.importLibrary || ((r) => {
        let i, p, s, u = "The Google Maps JavaScript API", a = "google", o = "importLibrary", y = "__ib__", w = document, n = window;
        n = n[a] || (n[a] = {});
        const v = n.maps || (n.maps = {}), g = /* @__PURE__ */ new Set(), x = new URLSearchParams(), h = () => i || (i = new Promise((l, m) => Nt(this, void 0, void 0, function* () {
          var b;
          yield p = w.createElement("script"), p.id = this.id, x.set("libraries", [
            ...g
          ] + "");
          for (s in r) x.set(s.replace(/[A-Z]/g, (j) => "_" + j[0].toLowerCase()), r[s]);
          x.set("callback", a + ".maps." + y), p.src = this.url + "?" + x, v[y] = l, p.onerror = () => i = m(Error(u + " could not load.")), p.nonce = this.nonce || ((b = w.querySelector("script[nonce]")) === null || b === void 0 ? void 0 : b.nonce) || "", w.head.append(p);
        })));
        v[o] ? console.warn(u + " only loads once. Ignoring:", r) : v[o] = (l, ...m) => g.add(l) && h().then(() => v[o](l, ...m));
      })(c);
      const t = this.libraries.map((r) => this.importLibrary(r));
      t.length || t.push(this.importLibrary("core")), Promise.all(t).then(() => this.callback(), (r) => {
        const i = new ErrorEvent("error", {
          error: r
        });
        this.loadErrorCallback(i);
      });
    }
    reset() {
      this.deleteScript(), this.done = false, this.loading = false, this.errors = [], this.onerrorEvent = null;
    }
    resetIfRetryingFailed() {
      this.failed && this.reset();
    }
    loadErrorCallback(e) {
      if (this.errors.push(e), this.errors.length <= this.retries) {
        const f = this.errors.length * Math.pow(2, this.errors.length);
        console.error(`Failed to load Google Maps script, retrying in ${f} ms.`), setTimeout(() => {
          this.deleteScript(), this.setScript();
        }, f);
      } else this.onerrorEvent = e, this.callback();
    }
    callback() {
      this.done = true, this.loading = false, this.callbacks.forEach((e) => {
        e(this.onerrorEvent);
      }), this.callbacks = [];
    }
    execute() {
      if (this.resetIfRetryingFailed(), this.done) this.callback();
      else {
        if (window.google && window.google.maps && window.google.maps.version) {
          console.warn("Google Maps already loaded outside @googlemaps/js-api-loader.This may result in undesirable behavior as options and script parameters may not match."), this.callback();
          return;
        }
        this.loading || (this.loading = true, this.setScript());
      }
    }
  }
  function Gt(S) {
    return class extends S.OverlayView {
      constructor(e) {
        super(), We(this, "element"), We(this, "opts");
        const { element: f, ...c } = e;
        this.element = f, this.opts = c, this.opts.map && this.setMap(this.opts.map);
      }
      getPosition() {
        return this.opts.position ? this.opts.position instanceof S.LatLng ? this.opts.position : new S.LatLng(this.opts.position) : null;
      }
      getVisible() {
        if (!this.element) return false;
        const e = this.element;
        return e.style.display !== "none" && e.style.visibility !== "hidden" && (e.style.opacity === "" || Number(e.style.opacity) > 0.01);
      }
      onAdd() {
        if (!this.element) return;
        const e = this.getPanes();
        e && e.overlayMouseTarget.appendChild(this.element);
      }
      draw() {
        if (!this.element) return;
        const e = this.getProjection(), f = e == null ? void 0 : e.fromLatLngToDivPixel(this.getPosition());
        if (f) {
          this.element.style.position = "absolute";
          let c, t;
          switch (this.opts.anchorPoint) {
            case "TOP_CENTER":
              c = "-50%", t = "-100%";
              break;
            case "BOTTOM_CENTER":
              c = "-50%", t = "0";
              break;
            case "LEFT_CENTER":
              c = "-100%", t = "-50%";
              break;
            case "RIGHT_CENTER":
              c = "0", t = "-50%";
              break;
            case "TOP_LEFT":
              c = "-100%", t = "-100%";
              break;
            case "TOP_RIGHT":
              c = "0", t = "-100%";
              break;
            case "BOTTOM_LEFT":
              c = "-100%", t = "0";
              break;
            case "BOTTOM_RIGHT":
              c = "0", t = "0";
              break;
            default:
              c = "-50%", t = "-50%";
          }
          const r = f.x + (this.opts.offsetX || 0) + "px", i = f.y + (this.opts.offsetY || 0) + "px";
          this.element.style.transform = `translateX(${c}) translateX(${r}) translateY(${t}) translateY(${i})`, this.opts.zIndex && (this.element.style.zIndex = this.opts.zIndex.toString());
        }
      }
      onRemove() {
        this.element && this.element.remove();
      }
      setOptions(e) {
        const { element: f, ...c } = e;
        this.element = f, this.opts = c, this.draw();
      }
    };
  }
  let Xe;
  const Qe = [
    "bounds_changed",
    "center_changed",
    "click",
    "contextmenu",
    "dblclick",
    "drag",
    "dragend",
    "dragstart",
    "heading_changed",
    "idle",
    "isfractionalzoomenabled_changed",
    "mapcapabilities_changed",
    "maptypeid_changed",
    "mousemove",
    "mouseout",
    "mouseover",
    "projection_changed",
    "renderingtype_changed",
    "rightclick",
    "tilesloaded",
    "tilt_changed",
    "zoom_changed"
  ], Ut = J({
    props: {
      apiPromise: {
        type: Promise
      },
      apiKey: {
        type: String,
        default: ""
      },
      version: {
        type: String,
        default: "weekly"
      },
      libraries: {
        type: Array,
        default: () => [
          "places",
          "marker"
        ]
      },
      region: {
        type: String,
        required: false
      },
      language: {
        type: String,
        required: false
      },
      backgroundColor: {
        type: String,
        required: false
      },
      center: {
        type: Object,
        default: () => ({
          lat: 0,
          lng: 0
        })
      },
      clickableIcons: {
        type: Boolean,
        required: false,
        default: void 0
      },
      colorScheme: {
        type: String,
        required: false
      },
      controlSize: {
        type: Number,
        required: false
      },
      disableDefaultUi: {
        type: Boolean,
        required: false,
        default: void 0
      },
      disableDoubleClickZoom: {
        type: Boolean,
        required: false,
        default: void 0
      },
      draggable: {
        type: Boolean,
        required: false,
        default: void 0
      },
      draggableCursor: {
        type: String,
        required: false
      },
      draggingCursor: {
        type: String,
        required: false
      },
      fullscreenControl: {
        type: Boolean,
        required: false,
        default: void 0
      },
      fullscreenControlPosition: {
        type: String,
        required: false
      },
      gestureHandling: {
        type: String,
        required: false
      },
      heading: {
        type: Number,
        required: false
      },
      isFractionalZoomEnabled: {
        type: Boolean,
        required: false,
        default: void 0
      },
      keyboardShortcuts: {
        type: Boolean,
        required: false,
        default: void 0
      },
      mapTypeControl: {
        type: Boolean,
        required: false,
        default: void 0
      },
      mapTypeControlOptions: {
        type: Object,
        required: false
      },
      mapTypeId: {
        type: [
          Number,
          String
        ],
        required: false
      },
      mapId: {
        type: String,
        required: false
      },
      maxZoom: {
        type: Number,
        required: false
      },
      minZoom: {
        type: Number,
        required: false
      },
      noClear: {
        type: Boolean,
        required: false,
        default: void 0
      },
      panControl: {
        type: Boolean,
        required: false,
        default: void 0
      },
      panControlPosition: {
        type: String,
        required: false
      },
      restriction: {
        type: Object,
        required: false
      },
      rotateControl: {
        type: Boolean,
        required: false,
        default: void 0
      },
      rotateControlPosition: {
        type: String,
        required: false
      },
      scaleControl: {
        type: Boolean,
        required: false,
        default: void 0
      },
      scaleControlStyle: {
        type: Number,
        required: false
      },
      scrollwheel: {
        type: Boolean,
        required: false,
        default: void 0
      },
      streetView: {
        type: Object,
        required: false
      },
      streetViewControl: {
        type: Boolean,
        required: false,
        default: void 0
      },
      streetViewControlPosition: {
        type: String,
        required: false
      },
      styles: {
        type: Array,
        required: false
      },
      tilt: {
        type: Number,
        required: false
      },
      zoom: {
        type: Number,
        required: false
      },
      zoomControl: {
        type: Boolean,
        required: false,
        default: void 0
      },
      zoomControlPosition: {
        type: String,
        required: false
      },
      cameraControl: {
        type: Boolean,
        required: false,
        default: void 0
      },
      cameraControlPosition: {
        type: String,
        required: false
      },
      nonce: {
        type: String,
        default: ""
      }
    },
    emits: Qe,
    setup(S, { emit: e }) {
      const f = G(), c = G(false), t = G(), r = G(), i = G(false);
      le(ae, t), le(se, r), le(wt, i);
      const p = () => {
        const o = {
          ...S
        };
        Object.keys(o).forEach((n) => {
          o[n] === void 0 && delete o[n];
        });
        const y = (n) => {
          var v;
          return n ? {
            position: (v = r.value) == null ? void 0 : v.ControlPosition[n]
          } : {};
        }, w = {
          scaleControlOptions: S.scaleControlStyle ? {
            style: S.scaleControlStyle
          } : {},
          panControlOptions: y(S.panControlPosition),
          zoomControlOptions: y(S.zoomControlPosition),
          rotateControlOptions: y(S.rotateControlPosition),
          streetViewControlOptions: y(S.streetViewControlPosition),
          fullscreenControlOptions: y(S.fullscreenControlPosition),
          cameraControlOptions: y(S.cameraControlPosition),
          disableDefaultUI: S.disableDefaultUi
        };
        return {
          ...o,
          ...w
        };
      }, s = F([
        r,
        t
      ], ([o, y]) => {
        const w = o, n = y;
        w && n && (w.event.addListenerOnce(n, "tilesloaded", () => {
          i.value = true;
        }), setTimeout(s, 0));
      }, {
        immediate: true
      }), u = () => {
        try {
          const { apiKey: o, region: y, version: w, language: n, libraries: v, nonce: g } = S;
          Xe = new ie({
            apiKey: o,
            region: y,
            version: w,
            language: n,
            libraries: v,
            nonce: g
          });
        } catch (o) {
          console.error(o);
        }
      }, a = (o) => {
        r.value = H(o.maps), t.value = H(new o.maps.Map(f.value, p()));
        const y = Gt(r.value);
        r.value[Ae] = y, Qe.forEach((n) => {
          var v;
          (v = t.value) == null || v.addListener(n, (g) => e(n, g));
        }), c.value = true;
        const w = Object.keys(S).filter((n) => ![
          "apiPromise",
          "apiKey",
          "version",
          "libraries",
          "region",
          "language",
          "center",
          "zoom",
          "nonce"
        ].includes(n)).map((n) => ee(S, n));
        F([
          () => S.center,
          () => S.zoom,
          ...w
        ], ([n, v], [g, x]) => {
          var h, l, m;
          const { center: b, zoom: j, ..._ } = p();
          (h = t.value) == null || h.setOptions(_), v !== void 0 && v !== x && ((l = t.value) == null || l.setZoom(v));
          const O = !g || n.lng !== g.lng || n.lat !== g.lat;
          n && O && ((m = t.value) == null || m.panTo(n));
        });
      };
      return vt(() => {
        S.apiPromise && S.apiPromise instanceof Promise ? S.apiPromise.then(a) : (u(), Xe.load().then(a));
      }), oe(() => {
        var o;
        i.value = false, t.value && ((o = r.value) == null || o.event.clearInstanceListeners(t.value));
      }), {
        mapRef: f,
        ready: c,
        map: t,
        api: r,
        mapTilesLoaded: i
      };
    }
  }), qe = (S, e) => {
    const f = S.__vccOpts || S;
    for (const [c, t] of e) f[c] = t;
    return f;
  }, Rt = {
    ref: "mapRef",
    class: "mapdiv"
  };
  function qt(S, e, f, c, t, r) {
    return Be(), Ie("div", null, [
      Ne("div", Rt, null, 512),
      Le(S.$slots, "default", Bt(It({
        ready: S.ready,
        map: S.map,
        api: S.api,
        mapTilesLoaded: S.mapTilesLoaded
      })), void 0, true)
    ]);
  }
  const zt = qe(Ut, [
    [
      "render",
      qt
    ],
    [
      "__scopeId",
      "data-v-e7ebb206"
    ]
  ]);
  function Zt(S) {
    return S && S.__esModule && Object.prototype.hasOwnProperty.call(S, "default") ? S.default : S;
  }
  var Jt = function S(e, f) {
    if (e === f) return true;
    if (e && f && typeof e == "object" && typeof f == "object") {
      if (e.constructor !== f.constructor) return false;
      var c, t, r;
      if (Array.isArray(e)) {
        if (c = e.length, c != f.length) return false;
        for (t = c; t-- !== 0; ) if (!S(e[t], f[t])) return false;
        return true;
      }
      if (e.constructor === RegExp) return e.source === f.source && e.flags === f.flags;
      if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === f.valueOf();
      if (e.toString !== Object.prototype.toString) return e.toString() === f.toString();
      if (r = Object.keys(e), c = r.length, c !== Object.keys(f).length) return false;
      for (t = c; t-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(f, r[t])) return false;
      for (t = c; t-- !== 0; ) {
        var i = r[t];
        if (!S(e[i], f[i])) return false;
      }
      return true;
    }
    return e !== e && f !== f;
  };
  const W = Zt(Jt), et = [
    "click",
    "drag",
    "dragend",
    "dragstart",
    "gmp-click"
  ], Kt = J({
    name: "AdvancedMarker",
    props: {
      options: {
        type: Object,
        required: true
      },
      pinOptions: {
        type: Object,
        required: false
      }
    },
    emits: et,
    setup(S, { emit: e, expose: f, slots: c }) {
      const t = G(), r = ce(() => {
        var w;
        return (w = c.default) == null ? void 0 : w.call(c).some((n) => n.type !== Ge);
      }), i = ee(S, "options"), p = ee(S, "pinOptions"), s = G(), u = Z(ae, G()), a = Z(se, G()), o = Z(Re, G()), y = ce(() => !!(o.value && a.value && s.value instanceof google.maps.marker.AdvancedMarkerElement));
      return F([
        u,
        i,
        p
      ], async (w, [n, v, g]) => {
        var x, h, l;
        const m = !W(i.value, v) || !W(p.value, g) || u.value !== n;
        if (!u.value || !a.value || !m) return;
        const { AdvancedMarkerElement: b, PinElement: j } = a.value.marker;
        if (s.value) {
          const { map: _, content: O, ...T } = i.value;
          Object.assign(s.value, {
            content: r.value ? t.value : p.value ? new j(p.value).element : O,
            ...T
          }), y.value && ((x = o.value) == null || x.removeMarker(s.value), (h = o.value) == null || h.addMarker(s.value));
        } else r.value ? i.value.content = t.value : p.value && (i.value.content = new j(p.value).element), s.value = H(new b(i.value)), y.value ? (l = o.value) == null || l.addMarker(s.value) : s.value.map = u.value, et.forEach((_) => {
          var O;
          (O = s.value) == null || O.addListener(_, (T) => e(_, T));
        });
      }, {
        immediate: true
      }), oe(() => {
        var w, n;
        s.value && ((w = a.value) == null || w.event.clearInstanceListeners(s.value), y.value ? (n = o.value) == null || n.removeMarker(s.value) : s.value.map = null);
      }), le(Ue, s), f({
        marker: s
      }), {
        hasSlotContent: r,
        markerRef: t
      };
    }
  }), Ft = {
    key: 0,
    class: "advanced-marker-wrapper"
  };
  function Vt(S, e, f, c, t, r) {
    return S.hasSlotContent ? (Be(), Ie("div", Ft, [
      Ne("div", mt({
        ref: "markerRef"
      }, S.$attrs), [
        Le(S.$slots, "default")
      ], 16)
    ])) : gt("", true);
  }
  const tt = qe(Kt, [
    [
      "render",
      Vt
    ]
  ]), Ht = (S) => S === "Marker", Wt = (S) => S === Ae, de = (S, e, f, c) => {
    const t = G(), r = Z(ae, G()), i = Z(se, G()), p = Z(Re, G()), s = ce(() => !!(p.value && i.value && (t.value instanceof i.value.Marker || t.value instanceof i.value[Ae])));
    return F([
      r,
      f
    ], (u, [a, o]) => {
      var y, w, n;
      const v = !W(f.value, o) || r.value !== a;
      !r.value || !i.value || !v || (t.value ? (t.value.setOptions(f.value), s.value && ((y = p.value) == null || y.removeMarker(t.value), (w = p.value) == null || w.addMarker(t.value))) : (Ht(S) ? t.value = H(new i.value[S](f.value)) : Wt(S) ? t.value = H(new i.value[S](f.value)) : t.value = H(new i.value[S]({
        ...f.value,
        map: r.value
      })), s.value ? (n = p.value) == null || n.addMarker(t.value) : t.value.setMap(r.value), e.forEach((g) => {
        var x;
        (x = t.value) == null || x.addListener(g, (h) => c(g, h));
      })));
    }, {
      immediate: true
    }), oe(() => {
      var u, a;
      t.value && ((u = i.value) == null || u.event.clearInstanceListeners(t.value), s.value ? (a = p.value) == null || a.removeMarker(t.value) : t.value.setMap(null));
    }), t;
  }, rt = [
    "animation_changed",
    "click",
    "dblclick",
    "rightclick",
    "dragstart",
    "dragend",
    "drag",
    "mouseover",
    "mousedown",
    "mouseout",
    "mouseup",
    "draggable_changed",
    "clickable_changed",
    "contextmenu",
    "cursor_changed",
    "flat_changed",
    "rightclick",
    "zindex_changed",
    "icon_changed",
    "position_changed",
    "shape_changed",
    "title_changed",
    "visible_changed"
  ];
  J({
    name: "Marker",
    props: {
      options: {
        type: Object,
        required: true
      }
    },
    emits: rt,
    setup(S, { emit: e, expose: f, slots: c }) {
      const t = ee(S, "options"), r = de("Marker", rt, t, e);
      return le(Ue, r), f({
        marker: r
      }), () => {
        var i;
        return (i = c.default) == null ? void 0 : i.call(c);
      };
    }
  });
  J({
    name: "Polyline",
    props: {
      options: {
        type: Object,
        required: true
      }
    },
    emits: pe,
    setup(S, { emit: e }) {
      const f = ee(S, "options");
      return {
        polyline: de("Polyline", pe, f, e)
      };
    },
    render: () => null
  });
  J({
    name: "Polygon",
    props: {
      options: {
        type: Object,
        required: true
      }
    },
    emits: pe,
    setup(S, { emit: e }) {
      const f = ee(S, "options");
      return {
        polygon: de("Polygon", pe, f, e)
      };
    },
    render: () => null
  });
  const nt = pe.concat([
    "bounds_changed"
  ]);
  J({
    name: "Rectangle",
    props: {
      options: {
        type: Object,
        required: true
      }
    },
    emits: nt,
    setup(S, { emit: e }) {
      const f = ee(S, "options");
      return {
        rectangle: de("Rectangle", nt, f, e)
      };
    },
    render: () => null
  });
  const it = pe.concat([
    "center_changed",
    "radius_changed"
  ]);
  J({
    name: "Circle",
    props: {
      options: {
        type: Object,
        required: true
      }
    },
    emits: it,
    setup(S, { emit: e }) {
      const f = ee(S, "options");
      return {
        circle: de("Circle", it, f, e)
      };
    },
    render: () => null
  });
  J({
    props: {
      position: {
        type: String,
        required: true
      },
      index: {
        type: Number,
        default: 1
      }
    },
    emits: [
      "content:loaded"
    ],
    setup(S, { emit: e }) {
      const f = G(null), c = Z(ae, G()), t = Z(se, G()), r = Z(wt, G(false)), i = F([
        r,
        t,
        f
      ], ([u, a, o]) => {
        a && u && o && (p(S.position), e("content:loaded"), setTimeout(i, 0));
      }, {
        immediate: true
      }), p = (u) => {
        if (c.value && t.value && f.value) {
          const a = t.value.ControlPosition[u];
          c.value.controls[a].push(f.value);
        }
      }, s = (u) => {
        if (c.value && t.value) {
          let a = null;
          const o = t.value.ControlPosition[u];
          c.value.controls[o].forEach((y, w) => {
            y === f.value && (a = w);
          }), a !== null && c.value.controls[o].removeAt(a);
        }
      };
      return oe(() => s(S.position)), F(() => S.position, (u, a) => {
        s(a), p(u);
      }), F(() => S.index, (u) => {
        u && f.value && (f.value.index = S.index);
      }), {
        controlRef: f
      };
    }
  });
  const ot = [
    "closeclick",
    "content_changed",
    "domready",
    "position_changed",
    "visible",
    "zindex_changed"
  ], Yt = J({
    inheritAttrs: false,
    props: {
      options: {
        type: Object,
        default: () => ({})
      },
      modelValue: {
        type: Boolean
      }
    },
    emits: [
      ...ot,
      "update:modelValue"
    ],
    setup(S, { slots: e, emit: f, expose: c }) {
      const t = G(), r = G(), i = Z(ae, G()), p = Z(se, G()), s = Z(Ue, G());
      let u, a = S.modelValue;
      const o = ce(() => {
        var v;
        return (v = e.default) == null ? void 0 : v.call(e).some((g) => g.type !== Ge);
      }), y = (v) => {
        a = v, f("update:modelValue", v);
      }, w = (v) => {
        t.value && (t.value.open({
          map: i.value,
          anchor: s.value,
          ...v
        }), y(true));
      }, n = () => {
        t.value && (t.value.close(), y(false));
      };
      return vt(() => {
        F([
          i,
          () => S.options
        ], ([v, g], [x, h]) => {
          var l;
          const m = !W(g, h) || i.value !== x;
          i.value && p.value && m && (t.value ? (t.value.setOptions({
            ...g,
            content: o.value ? r.value : g.content
          }), s.value || w()) : (t.value = H(new p.value.InfoWindow({
            ...g,
            content: o.value ? r.value : g.content
          })), s.value && (u = s.value.addListener("click", () => {
            w();
          })), (!s.value || a) && w(), ot.forEach((b) => {
            var j;
            (j = t.value) == null || j.addListener(b, (_) => f(b, _));
          }), (l = t.value) == null || l.addListener("closeclick", () => y(false))));
        }, {
          immediate: true
        }), F(() => S.modelValue, (v) => {
          v !== a && (v ? w() : n());
        });
      }), oe(() => {
        var v;
        u && u.remove(), t.value && ((v = p.value) == null || v.event.clearInstanceListeners(t.value), n());
      }), c({
        infoWindow: t,
        open: w,
        close: n
      }), {
        infoWindow: t,
        infoWindowRef: r,
        hasSlotContent: o,
        open: w,
        close: n
      };
    }
  }), Xt = {
    key: 0,
    class: "info-window-wrapper"
  };
  function Qt(S, e, f, c, t, r) {
    return S.hasSlotContent ? (Be(), Ie("div", Xt, [
      Ne("div", mt({
        ref: "infoWindowRef"
      }, S.$attrs), [
        Le(S.$slots, "default", {}, void 0, true)
      ], 16)
    ])) : gt("", true);
  }
  const er = qe(Yt, [
    [
      "render",
      Qt
    ],
    [
      "__scopeId",
      "data-v-cbe1707b"
    ]
  ]), at = [
    Int8Array,
    Uint8Array,
    Uint8ClampedArray,
    Int16Array,
    Uint16Array,
    Int32Array,
    Uint32Array,
    Float32Array,
    Float64Array
  ], Oe = 1, ve = 8;
  class ze {
    static from(e) {
      if (!(e instanceof ArrayBuffer)) throw new Error("Data must be an instance of ArrayBuffer.");
      const [f, c] = new Uint8Array(e, 0, 2);
      if (f !== 219) throw new Error("Data does not appear to be in a KDBush format.");
      const t = c >> 4;
      if (t !== Oe) throw new Error(`Got v${t} data when expected v${Oe}.`);
      const r = at[c & 15];
      if (!r) throw new Error("Unrecognized array type.");
      const [i] = new Uint16Array(e, 2, 1), [p] = new Uint32Array(e, 4, 1);
      return new ze(p, i, r, e);
    }
    constructor(e, f = 64, c = Float64Array, t) {
      if (isNaN(e) || e < 0) throw new Error(`Unpexpected numItems value: ${e}.`);
      this.numItems = +e, this.nodeSize = Math.min(Math.max(+f, 2), 65535), this.ArrayType = c, this.IndexArrayType = e < 65536 ? Uint16Array : Uint32Array;
      const r = at.indexOf(this.ArrayType), i = e * 2 * this.ArrayType.BYTES_PER_ELEMENT, p = e * this.IndexArrayType.BYTES_PER_ELEMENT, s = (8 - p % 8) % 8;
      if (r < 0) throw new Error(`Unexpected typed array class: ${c}.`);
      t && t instanceof ArrayBuffer ? (this.data = t, this.ids = new this.IndexArrayType(this.data, ve, e), this.coords = new this.ArrayType(this.data, ve + p + s, e * 2), this._pos = e * 2, this._finished = true) : (this.data = new ArrayBuffer(ve + i + p + s), this.ids = new this.IndexArrayType(this.data, ve, e), this.coords = new this.ArrayType(this.data, ve + p + s, e * 2), this._pos = 0, this._finished = false, new Uint8Array(this.data, 0, 2).set([
        219,
        (Oe << 4) + r
      ]), new Uint16Array(this.data, 2, 1)[0] = f, new Uint32Array(this.data, 4, 1)[0] = e);
    }
    add(e, f) {
      const c = this._pos >> 1;
      return this.ids[c] = c, this.coords[this._pos++] = e, this.coords[this._pos++] = f, c;
    }
    finish() {
      const e = this._pos >> 1;
      if (e !== this.numItems) throw new Error(`Added ${e} items when expected ${this.numItems}.`);
      return Me(this.ids, this.coords, this.nodeSize, 0, this.numItems - 1, 0), this._finished = true, this;
    }
    range(e, f, c, t) {
      if (!this._finished) throw new Error("Data not yet indexed - call index.finish().");
      const { ids: r, coords: i, nodeSize: p } = this, s = [
        0,
        r.length - 1,
        0
      ], u = [];
      for (; s.length; ) {
        const a = s.pop() || 0, o = s.pop() || 0, y = s.pop() || 0;
        if (o - y <= p) {
          for (let g = y; g <= o; g++) {
            const x = i[2 * g], h = i[2 * g + 1];
            x >= e && x <= c && h >= f && h <= t && u.push(r[g]);
          }
          continue;
        }
        const w = y + o >> 1, n = i[2 * w], v = i[2 * w + 1];
        n >= e && n <= c && v >= f && v <= t && u.push(r[w]), (a === 0 ? e <= n : f <= v) && (s.push(y), s.push(w - 1), s.push(1 - a)), (a === 0 ? c >= n : t >= v) && (s.push(w + 1), s.push(o), s.push(1 - a));
      }
      return u;
    }
    within(e, f, c) {
      if (!this._finished) throw new Error("Data not yet indexed - call index.finish().");
      const { ids: t, coords: r, nodeSize: i } = this, p = [
        0,
        t.length - 1,
        0
      ], s = [], u = c * c;
      for (; p.length; ) {
        const a = p.pop() || 0, o = p.pop() || 0, y = p.pop() || 0;
        if (o - y <= i) {
          for (let g = y; g <= o; g++) st(r[2 * g], r[2 * g + 1], e, f) <= u && s.push(t[g]);
          continue;
        }
        const w = y + o >> 1, n = r[2 * w], v = r[2 * w + 1];
        st(n, v, e, f) <= u && s.push(t[w]), (a === 0 ? e - c <= n : f - c <= v) && (p.push(y), p.push(w - 1), p.push(1 - a)), (a === 0 ? e + c >= n : f + c >= v) && (p.push(w + 1), p.push(o), p.push(1 - a));
      }
      return s;
    }
  }
  function Me(S, e, f, c, t, r) {
    if (t - c <= f) return;
    const i = c + t >> 1;
    bt(S, e, i, c, t, r), Me(S, e, f, c, i - 1, 1 - r), Me(S, e, f, i + 1, t, 1 - r);
  }
  function bt(S, e, f, c, t, r) {
    for (; t > c; ) {
      if (t - c > 600) {
        const u = t - c + 1, a = f - c + 1, o = Math.log(u), y = 0.5 * Math.exp(2 * o / 3), w = 0.5 * Math.sqrt(o * y * (u - y) / u) * (a - u / 2 < 0 ? -1 : 1), n = Math.max(c, Math.floor(f - a * y / u + w)), v = Math.min(t, Math.floor(f + (u - a) * y / u + w));
        bt(S, e, f, n, v, r);
      }
      const i = e[2 * f + r];
      let p = c, s = t;
      for (me(S, e, c, f), e[2 * t + r] > i && me(S, e, c, t); p < s; ) {
        for (me(S, e, p, s), p++, s--; e[2 * p + r] < i; ) p++;
        for (; e[2 * s + r] > i; ) s--;
      }
      e[2 * c + r] === i ? me(S, e, c, s) : (s++, me(S, e, s, t)), s <= f && (c = s + 1), f <= s && (t = s - 1);
    }
  }
  function me(S, e, f, c) {
    Ee(S, f, c), Ee(e, 2 * f, 2 * c), Ee(e, 2 * f + 1, 2 * c + 1);
  }
  function Ee(S, e, f) {
    const c = S[e];
    S[e] = S[f], S[f] = c;
  }
  function st(S, e, f, c) {
    const t = S - f, r = e - c;
    return t * t + r * r;
  }
  const tr = {
    minZoom: 0,
    maxZoom: 16,
    minPoints: 2,
    radius: 40,
    extent: 512,
    nodeSize: 64,
    log: false,
    generateId: false,
    reduce: null,
    map: (S) => S
  }, ut = Math.fround || /* @__PURE__ */ ((S) => (e) => (S[0] = +e, S[0]))(new Float32Array(1)), ne = 2, Q = 3, Te = 4, X = 5, kt = 6;
  class _t {
    constructor(e) {
      this.options = Object.assign(Object.create(tr), e), this.trees = new Array(this.options.maxZoom + 1), this.stride = this.options.reduce ? 7 : 6, this.clusterProps = [];
    }
    load(e) {
      const { log: f, minZoom: c, maxZoom: t } = this.options;
      f && console.time("total time");
      const r = `prepare ${e.length} points`;
      f && console.time(r), this.points = e;
      const i = [];
      for (let s = 0; s < e.length; s++) {
        const u = e[s];
        if (!u.geometry) continue;
        const [a, o] = u.geometry.coordinates, y = ut(_e(a)), w = ut(Se(o));
        i.push(y, w, 1 / 0, s, -1, 1), this.options.reduce && i.push(0);
      }
      let p = this.trees[t + 1] = this._createTree(i);
      f && console.timeEnd(r);
      for (let s = t; s >= c; s--) {
        const u = +Date.now();
        p = this.trees[s] = this._createTree(this._cluster(p, s)), f && console.log("z%d: %d clusters in %dms", s, p.numItems, +Date.now() - u);
      }
      return f && console.timeEnd("total time"), this;
    }
    getClusters(e, f) {
      let c = ((e[0] + 180) % 360 + 360) % 360 - 180;
      const t = Math.max(-90, Math.min(90, e[1]));
      let r = e[2] === 180 ? 180 : ((e[2] + 180) % 360 + 360) % 360 - 180;
      const i = Math.max(-90, Math.min(90, e[3]));
      if (e[2] - e[0] >= 360) c = -180, r = 180;
      else if (c > r) {
        const o = this.getClusters([
          c,
          t,
          180,
          i
        ], f), y = this.getClusters([
          -180,
          t,
          r,
          i
        ], f);
        return o.concat(y);
      }
      const p = this.trees[this._limitZoom(f)], s = p.range(_e(c), Se(i), _e(r), Se(t)), u = p.data, a = [];
      for (const o of s) {
        const y = this.stride * o;
        a.push(u[y + X] > 1 ? lt(u, y, this.clusterProps) : this.points[u[y + Q]]);
      }
      return a;
    }
    getChildren(e) {
      const f = this._getOriginId(e), c = this._getOriginZoom(e), t = "No cluster with the specified id.", r = this.trees[c];
      if (!r) throw new Error(t);
      const i = r.data;
      if (f * this.stride >= i.length) throw new Error(t);
      const p = this.options.radius / (this.options.extent * Math.pow(2, c - 1)), s = i[f * this.stride], u = i[f * this.stride + 1], a = r.within(s, u, p), o = [];
      for (const y of a) {
        const w = y * this.stride;
        i[w + Te] === e && o.push(i[w + X] > 1 ? lt(i, w, this.clusterProps) : this.points[i[w + Q]]);
      }
      if (o.length === 0) throw new Error(t);
      return o;
    }
    getLeaves(e, f, c) {
      f = f || 10, c = c || 0;
      const t = [];
      return this._appendLeaves(t, e, f, c, 0), t;
    }
    getTile(e, f, c) {
      const t = this.trees[this._limitZoom(e)], r = Math.pow(2, e), { extent: i, radius: p } = this.options, s = p / i, u = (c - s) / r, a = (c + 1 + s) / r, o = {
        features: []
      };
      return this._addTileFeatures(t.range((f - s) / r, u, (f + 1 + s) / r, a), t.data, f, c, r, o), f === 0 && this._addTileFeatures(t.range(1 - s / r, u, 1, a), t.data, r, c, r, o), f === r - 1 && this._addTileFeatures(t.range(0, u, s / r, a), t.data, -1, c, r, o), o.features.length ? o : null;
    }
    getClusterExpansionZoom(e) {
      let f = this._getOriginZoom(e) - 1;
      for (; f <= this.options.maxZoom; ) {
        const c = this.getChildren(e);
        if (f++, c.length !== 1) break;
        e = c[0].properties.cluster_id;
      }
      return f;
    }
    _appendLeaves(e, f, c, t, r) {
      const i = this.getChildren(f);
      for (const p of i) {
        const s = p.properties;
        if (s && s.cluster ? r + s.point_count <= t ? r += s.point_count : r = this._appendLeaves(e, s.cluster_id, c, t, r) : r < t ? r++ : e.push(p), e.length === c) break;
      }
      return r;
    }
    _createTree(e) {
      const f = new ze(e.length / this.stride | 0, this.options.nodeSize, Float32Array);
      for (let c = 0; c < e.length; c += this.stride) f.add(e[c], e[c + 1]);
      return f.finish(), f.data = e, f;
    }
    _addTileFeatures(e, f, c, t, r, i) {
      for (const p of e) {
        const s = p * this.stride, u = f[s + X] > 1;
        let a, o, y;
        if (u) a = St(f, s, this.clusterProps), o = f[s], y = f[s + 1];
        else {
          const v = this.points[f[s + Q]];
          a = v.properties;
          const [g, x] = v.geometry.coordinates;
          o = _e(g), y = Se(x);
        }
        const w = {
          type: 1,
          geometry: [
            [
              Math.round(this.options.extent * (o * r - c)),
              Math.round(this.options.extent * (y * r - t))
            ]
          ],
          tags: a
        };
        let n;
        u || this.options.generateId ? n = f[s + Q] : n = this.points[f[s + Q]].id, n !== void 0 && (w.id = n), i.features.push(w);
      }
    }
    _limitZoom(e) {
      return Math.max(this.options.minZoom, Math.min(Math.floor(+e), this.options.maxZoom + 1));
    }
    _cluster(e, f) {
      const { radius: c, extent: t, reduce: r, minPoints: i } = this.options, p = c / (t * Math.pow(2, f)), s = e.data, u = [], a = this.stride;
      for (let o = 0; o < s.length; o += a) {
        if (s[o + ne] <= f) continue;
        s[o + ne] = f;
        const y = s[o], w = s[o + 1], n = e.within(s[o], s[o + 1], p), v = s[o + X];
        let g = v;
        for (const x of n) {
          const h = x * a;
          s[h + ne] > f && (g += s[h + X]);
        }
        if (g > v && g >= i) {
          let x = y * v, h = w * v, l, m = -1;
          const b = ((o / a | 0) << 5) + (f + 1) + this.points.length;
          for (const j of n) {
            const _ = j * a;
            if (s[_ + ne] <= f) continue;
            s[_ + ne] = f;
            const O = s[_ + X];
            x += s[_] * O, h += s[_ + 1] * O, s[_ + Te] = b, r && (l || (l = this._map(s, o, true), m = this.clusterProps.length, this.clusterProps.push(l)), r(l, this._map(s, _)));
          }
          s[o + Te] = b, u.push(x / g, h / g, 1 / 0, b, -1, g), r && u.push(m);
        } else {
          for (let x = 0; x < a; x++) u.push(s[o + x]);
          if (g > 1) for (const x of n) {
            const h = x * a;
            if (!(s[h + ne] <= f)) {
              s[h + ne] = f;
              for (let l = 0; l < a; l++) u.push(s[h + l]);
            }
          }
        }
      }
      return u;
    }
    _getOriginId(e) {
      return e - this.points.length >> 5;
    }
    _getOriginZoom(e) {
      return (e - this.points.length) % 32;
    }
    _map(e, f, c) {
      if (e[f + X] > 1) {
        const i = this.clusterProps[e[f + kt]];
        return c ? Object.assign({}, i) : i;
      }
      const t = this.points[e[f + Q]].properties, r = this.options.map(t);
      return c && r === t ? Object.assign({}, r) : r;
    }
  }
  function lt(S, e, f) {
    return {
      type: "Feature",
      id: S[e + Q],
      properties: St(S, e, f),
      geometry: {
        type: "Point",
        coordinates: [
          rr(S[e]),
          nr(S[e + 1])
        ]
      }
    };
  }
  function St(S, e, f) {
    const c = S[e + X], t = c >= 1e4 ? `${Math.round(c / 1e3)}k` : c >= 1e3 ? `${Math.round(c / 100) / 10}k` : c, r = S[e + kt], i = r === -1 ? {} : Object.assign({}, f[r]);
    return Object.assign(i, {
      cluster: true,
      cluster_id: S[e + Q],
      point_count: c,
      point_count_abbreviated: t
    });
  }
  function _e(S) {
    return S / 360 + 0.5;
  }
  function Se(S) {
    const e = Math.sin(S * Math.PI / 180), f = 0.5 - 0.25 * Math.log((1 + e) / (1 - e)) / Math.PI;
    return f < 0 ? 0 : f > 1 ? 1 : f;
  }
  function rr(S) {
    return (S - 0.5) * 360;
  }
  function nr(S) {
    const e = (180 - S * 360) * Math.PI / 180;
    return 360 * Math.atan(Math.exp(e)) / Math.PI - 90;
  }
  function Ze(S, e) {
    var f = {};
    for (var c in S) Object.prototype.hasOwnProperty.call(S, c) && e.indexOf(c) < 0 && (f[c] = S[c]);
    if (S != null && typeof Object.getOwnPropertySymbols == "function") for (var t = 0, c = Object.getOwnPropertySymbols(S); t < c.length; t++) e.indexOf(c[t]) < 0 && Object.prototype.propertyIsEnumerable.call(S, c[t]) && (f[c[t]] = S[c[t]]);
    return f;
  }
  class z {
    static isAdvancedMarkerAvailable(e) {
      return google.maps.marker && e.getMapCapabilities().isAdvancedMarkersAvailable === true;
    }
    static isAdvancedMarker(e) {
      return google.maps.marker && e instanceof google.maps.marker.AdvancedMarkerElement;
    }
    static setMap(e, f) {
      this.isAdvancedMarker(e) ? e.map = f : e.setMap(f);
    }
    static getPosition(e) {
      if (this.isAdvancedMarker(e)) {
        if (e.position) {
          if (e.position instanceof google.maps.LatLng) return e.position;
          if (e.position.lat && e.position.lng) return new google.maps.LatLng(e.position.lat, e.position.lng);
        }
        return new google.maps.LatLng(null);
      }
      return e.getPosition();
    }
    static getVisible(e) {
      return this.isAdvancedMarker(e) ? true : e.getVisible();
    }
  }
  class we {
    constructor({ markers: e, position: f }) {
      this.markers = e, f && (f instanceof google.maps.LatLng ? this._position = f : this._position = new google.maps.LatLng(f));
    }
    get bounds() {
      if (this.markers.length === 0 && !this._position) return;
      const e = new google.maps.LatLngBounds(this._position, this._position);
      for (const f of this.markers) e.extend(z.getPosition(f));
      return e;
    }
    get position() {
      return this._position || this.bounds.getCenter();
    }
    get count() {
      return this.markers.filter((e) => z.getVisible(e)).length;
    }
    push(e) {
      this.markers.push(e);
    }
    delete() {
      this.marker && (z.setMap(this.marker, null), this.marker = void 0), this.markers.length = 0;
    }
  }
  const ir = (S, e, f, c) => {
    const t = xt(S.getBounds(), e, c);
    return f.filter((r) => t.contains(z.getPosition(r)));
  }, xt = (S, e, f) => {
    const { northEast: c, southWest: t } = or(S, e), r = ar({
      northEast: c,
      southWest: t
    }, f);
    return sr(r, e);
  }, ft = (S, e, f) => {
    const c = xt(S, e, f), t = c.getNorthEast(), r = c.getSouthWest();
    return [
      r.lng(),
      r.lat(),
      t.lng(),
      t.lat()
    ];
  }, or = (S, e) => ({
    northEast: e.fromLatLngToDivPixel(S.getNorthEast()),
    southWest: e.fromLatLngToDivPixel(S.getSouthWest())
  }), ar = ({ northEast: S, southWest: e }, f) => (S.x += f, S.y -= f, e.x -= f, e.y += f, {
    northEast: S,
    southWest: e
  }), sr = ({ northEast: S, southWest: e }, f) => {
    const c = f.fromDivPixelToLatLng(e), t = f.fromDivPixelToLatLng(S);
    return new google.maps.LatLngBounds(c, t);
  };
  class At {
    constructor({ maxZoom: e = 16 }) {
      this.maxZoom = e;
    }
    noop({ markers: e }) {
      return lr(e);
    }
  }
  class ur extends At {
    constructor(e) {
      var { viewportPadding: f = 60 } = e, c = Ze(e, [
        "viewportPadding"
      ]);
      super(c), this.viewportPadding = 60, this.viewportPadding = f;
    }
    calculate({ markers: e, map: f, mapCanvasProjection: c }) {
      return f.getZoom() >= this.maxZoom ? {
        clusters: this.noop({
          markers: e
        }),
        changed: false
      } : {
        clusters: this.cluster({
          markers: ir(f, c, e, this.viewportPadding),
          map: f,
          mapCanvasProjection: c
        })
      };
    }
  }
  const lr = (S) => S.map((e) => new we({
    position: z.getPosition(e),
    markers: [
      e
    ]
  }));
  class fr extends At {
    constructor(e) {
      var { maxZoom: f, radius: c = 60 } = e, t = Ze(e, [
        "maxZoom",
        "radius"
      ]);
      super({
        maxZoom: f
      }), this.state = {
        zoom: -1
      }, this.superCluster = new _t(Object.assign({
        maxZoom: this.maxZoom,
        radius: c
      }, t));
    }
    calculate(e) {
      let f = false;
      const c = {
        zoom: e.map.getZoom()
      };
      if (!W(e.markers, this.markers)) {
        f = true, this.markers = [
          ...e.markers
        ];
        const t = this.markers.map((r) => {
          const i = z.getPosition(r);
          return {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [
                i.lng(),
                i.lat()
              ]
            },
            properties: {
              marker: r
            }
          };
        });
        this.superCluster.load(t);
      }
      return f || (this.state.zoom <= this.maxZoom || c.zoom <= this.maxZoom) && (f = !W(this.state, c)), this.state = c, f && (this.clusters = this.cluster(e)), {
        clusters: this.clusters,
        changed: f
      };
    }
    cluster({ map: e }) {
      return this.superCluster.getClusters([
        -180,
        -90,
        180,
        90
      ], Math.round(e.getZoom())).map((f) => this.transformCluster(f));
    }
    transformCluster({ geometry: { coordinates: [e, f] }, properties: c }) {
      if (c.cluster) return new we({
        markers: this.superCluster.getLeaves(c.cluster_id, 1 / 0).map((r) => r.properties.marker),
        position: {
          lat: f,
          lng: e
        }
      });
      const t = c.marker;
      return new we({
        markers: [
          t
        ],
        position: z.getPosition(t)
      });
    }
  }
  class cr extends ur {
    constructor(e) {
      var { maxZoom: f, radius: c = 60, viewportPadding: t = 60 } = e, r = Ze(e, [
        "maxZoom",
        "radius",
        "viewportPadding"
      ]);
      super({
        maxZoom: f,
        viewportPadding: t
      }), this.superCluster = new _t(Object.assign({
        maxZoom: this.maxZoom,
        radius: c
      }, r)), this.state = {
        zoom: -1,
        view: [
          0,
          0,
          0,
          0
        ]
      };
    }
    calculate(e) {
      const f = {
        zoom: Math.round(e.map.getZoom()),
        view: ft(e.map.getBounds(), e.mapCanvasProjection, this.viewportPadding)
      };
      let c = !W(this.state, f);
      if (!W(e.markers, this.markers)) {
        c = true, this.markers = [
          ...e.markers
        ];
        const t = this.markers.map((r) => {
          const i = z.getPosition(r);
          return {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [
                i.lng(),
                i.lat()
              ]
            },
            properties: {
              marker: r
            }
          };
        });
        this.superCluster.load(t);
      }
      return c && (this.clusters = this.cluster(e), this.state = f), {
        clusters: this.clusters,
        changed: c
      };
    }
    cluster({ map: e, mapCanvasProjection: f }) {
      const c = {
        zoom: Math.round(e.getZoom()),
        view: ft(e.getBounds(), f, this.viewportPadding)
      };
      return this.superCluster.getClusters(c.view, c.zoom).map((t) => this.transformCluster(t));
    }
    transformCluster({ geometry: { coordinates: [e, f] }, properties: c }) {
      if (c.cluster) return new we({
        markers: this.superCluster.getLeaves(c.cluster_id, 1 / 0).map((r) => r.properties.marker),
        position: {
          lat: f,
          lng: e
        }
      });
      const t = c.marker;
      return new we({
        markers: [
          t
        ],
        position: z.getPosition(t)
      });
    }
  }
  class pr {
    constructor(e, f) {
      this.markers = {
        sum: e.length
      };
      const c = f.map((r) => r.count), t = c.reduce((r, i) => r + i, 0);
      this.clusters = {
        count: f.length,
        markers: {
          mean: t / f.length,
          sum: t,
          min: Math.min(...c),
          max: Math.max(...c)
        }
      };
    }
  }
  class hr {
    render({ count: e, position: f }, c, t) {
      const r = `<svg fill="${e > Math.max(10, c.clusters.markers.mean) ? "#ff0000" : "#0000ff"}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" width="50" height="50">
<circle cx="120" cy="120" opacity=".6" r="70" />
<circle cx="120" cy="120" opacity=".3" r="90" />
<circle cx="120" cy="120" opacity=".2" r="110" />
<text x="50%" y="50%" style="fill:#fff" text-anchor="middle" font-size="50" dominant-baseline="middle" font-family="roboto,arial,sans-serif">${e}</text>
</svg>`, i = `Cluster of ${e} markers`, p = Number(google.maps.Marker.MAX_ZINDEX) + e;
      if (z.isAdvancedMarkerAvailable(t)) {
        const u = document.createElement("div");
        u.innerHTML = r;
        const a = u.firstElementChild;
        a.setAttribute("transform", "translate(0 25)");
        const o = {
          map: t,
          position: f,
          zIndex: p,
          title: i,
          content: a
        };
        return new google.maps.marker.AdvancedMarkerElement(o);
      }
      const s = {
        position: f,
        zIndex: p,
        title: i,
        icon: {
          url: `data:image/svg+xml;base64,${btoa(r)}`,
          anchor: new google.maps.Point(25, 25)
        }
      };
      return new google.maps.Marker(s);
    }
  }
  function dr(S, e) {
    for (let f in e.prototype) S.prototype[f] = e.prototype[f];
  }
  class Je {
    constructor() {
      dr(Je, google.maps.OverlayView);
    }
  }
  var fe;
  (function(S) {
    S.CLUSTERING_BEGIN = "clusteringbegin", S.CLUSTERING_END = "clusteringend", S.CLUSTER_CLICK = "click";
  })(fe || (fe = {}));
  const yr = (S, e, f) => {
    f.fitBounds(e.bounds);
  };
  class vr extends Je {
    constructor({ map: e, markers: f = [], algorithmOptions: c = {}, algorithm: t = new fr(c), renderer: r = new hr(), onClusterClick: i = yr }) {
      super(), this.markers = [
        ...f
      ], this.clusters = [], this.algorithm = t, this.renderer = r, this.onClusterClick = i, e && this.setMap(e);
    }
    addMarker(e, f) {
      this.markers.includes(e) || (this.markers.push(e), f || this.render());
    }
    addMarkers(e, f) {
      e.forEach((c) => {
        this.addMarker(c, true);
      }), f || this.render();
    }
    removeMarker(e, f) {
      const c = this.markers.indexOf(e);
      return c === -1 ? false : (z.setMap(e, null), this.markers.splice(c, 1), f || this.render(), true);
    }
    removeMarkers(e, f) {
      let c = false;
      return e.forEach((t) => {
        c = this.removeMarker(t, true) || c;
      }), c && !f && this.render(), c;
    }
    clearMarkers(e) {
      this.markers.length = 0, e || this.render();
    }
    render() {
      const e = this.getMap();
      if (e instanceof google.maps.Map && e.getProjection()) {
        google.maps.event.trigger(this, fe.CLUSTERING_BEGIN, this);
        const { clusters: f, changed: c } = this.algorithm.calculate({
          markers: this.markers,
          map: e,
          mapCanvasProjection: this.getProjection()
        });
        if (c || c == null) {
          const t = /* @__PURE__ */ new Set();
          for (const i of f) i.markers.length == 1 && t.add(i.markers[0]);
          const r = [];
          for (const i of this.clusters) i.marker != null && (i.markers.length == 1 ? t.has(i.marker) || z.setMap(i.marker, null) : r.push(i.marker));
          this.clusters = f, this.renderClusters(), requestAnimationFrame(() => r.forEach((i) => z.setMap(i, null)));
        }
        google.maps.event.trigger(this, fe.CLUSTERING_END, this);
      }
    }
    onAdd() {
      this.idleListener = this.getMap().addListener("idle", this.render.bind(this)), this.render();
    }
    onRemove() {
      google.maps.event.removeListener(this.idleListener), this.reset();
    }
    reset() {
      this.markers.forEach((e) => z.setMap(e, null)), this.clusters.forEach((e) => e.delete()), this.clusters = [];
    }
    renderClusters() {
      const e = new pr(this.markers, this.clusters), f = this.getMap();
      this.clusters.forEach((c) => {
        c.markers.length === 1 ? c.marker = c.markers[0] : (c.marker = this.renderer.render(c, e, f), c.markers.forEach((t) => z.setMap(t, null)), this.onClusterClick && c.marker.addListener("click", (t) => {
          google.maps.event.trigger(this, fe.CLUSTER_CLICK, c), this.onClusterClick(t, c, f);
        })), z.setMap(c.marker, f);
      });
    }
  }
  const ct = Object.values(fe);
  J({
    name: "MarkerCluster",
    props: {
      options: {
        type: Object,
        default: () => ({})
      }
    },
    emits: ct,
    setup(S, { emit: e, expose: f, slots: c }) {
      const t = G(), r = Z(ae, G()), i = Z(se, G());
      return le(Re, t), F(r, () => {
        r.value && (t.value = H(new vr({
          map: r.value,
          algorithm: new cr(S.options.algorithmOptions ?? {}),
          ...S.options
        })), ct.forEach((p) => {
          var s;
          (s = t.value) == null || s.addListener(p, (u) => e(p, u));
        }));
      }, {
        immediate: true
      }), oe(() => {
        var p;
        t.value && ((p = i.value) == null || p.event.clearInstanceListeners(t.value), t.value.clearMarkers(), t.value.setMap(null));
      }), f({
        markerCluster: t
      }), () => {
        var p;
        return (p = c.default) == null ? void 0 : p.call(c);
      };
    }
  });
  J({
    inheritAttrs: false,
    props: {
      options: {
        type: Object,
        required: true
      }
    },
    setup(S, { slots: e, emit: f, expose: c }) {
      const t = G(), r = ce(() => {
        var s;
        return (s = e.default) == null ? void 0 : s.call(e).some((u) => u.type !== Ge);
      }), i = ce(() => ({
        ...S.options,
        element: t.value
      })), p = de(Ae, [], i, f);
      return c({
        customMarker: p
      }), {
        customMarkerRef: t,
        customMarker: p,
        hasSlotContent: r
      };
    }
  });
  J({
    name: "HeatmapLayer",
    props: {
      options: {
        type: Object,
        default: () => ({})
      }
    },
    setup(S) {
      const e = G(), f = Z(ae, G()), c = Z(se, G());
      return F([
        f,
        () => S.options
      ], ([t, r], [i, p]) => {
        var s;
        const u = !W(r, p) || f.value !== i;
        if (f.value && c.value && u) {
          const a = structuredClone(r);
          if (a.data && !(a.data instanceof c.value.MVCArray)) {
            const o = c.value.LatLng;
            a.data = (s = a.data) == null ? void 0 : s.map((y) => y instanceof o || "location" in y && (y.location instanceof o || y.location === null) ? y : "location" in y ? {
              ...y,
              location: new o(y.location)
            } : new o(y));
          }
          e.value ? e.value.setOptions(a) : e.value = H(new c.value.visualization.HeatmapLayer({
            ...a,
            map: f.value
          }));
        }
      }, {
        immediate: true
      }), oe(() => {
        e.value && e.value.setMap(null);
      }), {
        heatmapLayer: e
      };
    },
    render: () => null
  });
  let ge, Ce, mr, gr, $e, wr, br, De, kr, xe, pt, _r, Sr, Pe, xr;
  ({ unref: ge, createVNode: Ce, renderList: mr, Fragment: gr, openBlock: $e, createElementBlock: wr, toDisplayString: br, createElementVNode: De, resolveComponent: kr, withCtx: xe, createBlock: pt } = await he("vue"));
  _r = {
    class: "flex flex-col gap-2"
  };
  Sr = {
    class: "font-bold"
  };
  ({ ref: Pe, watch: xr } = await he("vue"));
  Mr = {
    __name: "MapComponent",
    props: {
      modelValue: {
        type: Object,
        required: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      places: {
        type: Array,
        required: false
      }
    },
    emits: [
      "update:modelValue"
    ],
    setup(S, { emit: e }) {
      const f = "AIzaSyDXtqYNzlO2WTAYozNyrfPe_dCNSgWAONQ", c = {
        background: "#fb923c"
      }, t = S, r = e, i = Pe(null), p = {
        lat: 0,
        lng: 0
      }, s = Pe(15), u = Pe({
        position: p,
        title: "Point zero"
      }), a = (w) => {
        var _a, _b, _c;
        t.disabled || (s.value = (_b = (_a = i.value) == null ? void 0 : _a.map) == null ? void 0 : _b.getZoom(), r("update:modelValue", {
          ...(_c = u.value) == null ? void 0 : _c.position,
          zoom: s.value
        }));
      }, o = (w) => {
        var _a;
        t.disabled || (u.value = {
          position: {
            lat: w.latLng.lat(),
            lng: w.latLng.lng()
          },
          title: "Location-Plugin"
        }, r("update:modelValue", {
          ...(_a = u.value) == null ? void 0 : _a.position,
          zoom: s.value
        }));
      }, y = xr(() => t.modelValue, (w) => {
        var _a, _b, _c;
        t.modelValue && ((_a = i.value) == null ? void 0 : _a.map.setCenter(t.modelValue), (_b = i.value) == null ? void 0 : _b.map.setZoom(t.modelValue.zoom), u.value = {
          position: {
            ...t.modelValue
          },
          title: "Location-Plugin"
        }, r("update:modelValue", {
          ...(_c = u.value) == null ? void 0 : _c.position,
          zoom: s.value
        })), y();
      });
      return (w, n) => {
        const v = kr("router-link");
        return $e(), pt(ge(zt), {
          mapId: "3d8941b79754f0de",
          ref_key: "mapRef",
          ref: i,
          "api-key": ge(f),
          style: {
            width: "100%",
            height: "500px"
          },
          center: p,
          zoom: 15,
          streetViewControl: false,
          onZoom_changed: a,
          onClick: o
        }, {
          default: xe(() => [
            Ce(ge(tt), {
              options: u.value,
              "pin-options": c
            }, null, 8, [
              "options"
            ]),
            ($e(true), wr(gr, null, mr(S.places, (g) => ($e(), pt(ge(tt), {
              key: g.id,
              options: g
            }, {
              default: xe(() => [
                Ce(ge(er), null, {
                  default: xe(() => [
                    De("div", _r, [
                      De("b", Sr, br(g.title), 1),
                      Ce(v, {
                        to: `/sphere/${g.id}`
                      }, {
                        default: xe(() => n[0] || (n[0] = [
                          De("a", {
                            class: "cursor-pointer text-blue-500"
                          }, " Go to this location ", -1)
                        ])),
                        _: 2,
                        __: [
                          0
                        ]
                      }, 1032, [
                        "to"
                      ])
                    ])
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1032, [
              "options"
            ]))), 128))
          ]),
          _: 1
        }, 8, [
          "api-key"
        ]);
      };
    }
  };
  var Ke = {
    exports: {}
  };
  Ke.exports;
  (function(S) {
    (function() {
      function e(c, t) {
        return t ? yt(c) : c.slice ? e[r(c)] : function(i, p) {
          c(i = {
            exports: {}
          }), e[r(p)] = i.exports;
        };
        function r(i) {
          return i.split("/").slice(-1).toString().replace(".js", "");
        }
      }
      var f = S;
      e(function(c) {
        String.random = function(r, i) {
          var p = "";
          for (r = r || 24, i = i || "0123456789ABCDEFGHIJKLMNOPQRSTUVWXZabcdefghijklmnopqrstuvwxyz"; r-- > 0; ) p += i.charAt(Math.floor(Math.random() * i.length));
          return p;
        }, String.match = function(r, i) {
          var p, s;
          return typeof r != "string" ? false : (typeof i == "string" && (i = {
            "=": i
          }), i = i || {}, p = i["="] || i["*"] || i[">"] || i["<"], r === p ? true : s !== i["="] ? false : (p = i["*"] || i[">"], r.slice(0, (p || "").length) === p ? true : s !== i["*"] ? false : s !== i[">"] && s !== i["<"] ? r >= i[">"] && r <= i["<"] : s !== i[">"] && r >= i[">"] || s !== i["<"] && r <= i["<"]));
        }, String.hash = function(r, i) {
          if (typeof r == "string") {
            if (i = i || 0, !r.length) return i;
            for (var p = 0, s = r.length, u; p < s; ++p) u = r.charCodeAt(p), i = (i << 5) - i + u, i |= 0;
            return i;
          }
        };
        var t = Object.prototype.hasOwnProperty;
        Object.plain = function(r) {
          return r ? r instanceof Object && r.constructor === Object || Object.prototype.toString.call(r).match(/^\[object (\w+)\]$/)[1] === "Object" : false;
        }, Object.empty = function(r, i) {
          for (var p in r) if (t.call(r, p) && (!i || i.indexOf(p) == -1)) return false;
          return true;
        }, Object.keys = Object.keys || function(r) {
          var i = [];
          for (var p in r) t.call(r, p) && i.push(p);
          return i;
        }, function() {
          var r, i = setTimeout, p = 0, s = 0, u = typeof setImmediate != "" + r && setImmediate || function(o, y) {
            return typeof MessageChannel == "" + r ? i : ((o = new MessageChannel()).port1.onmessage = function(w) {
              w.data == "" && y();
            }, function(w) {
              y = w, o.port2.postMessage("");
            });
          }(), a = i.check = i.check || typeof performance != "" + r && performance || {
            now: function() {
              return +/* @__PURE__ */ new Date();
            }
          };
          i.hold = i.hold || 9, i.poll = i.poll || function(o) {
            if (i.hold >= a.now() - p && s++ < 3333) {
              o();
              return;
            }
            u(function() {
              p = a.now(), o();
            }, s = 0);
          };
        }(), function() {
          var r = setTimeout, i = r.turn = r.turn || function(y) {
            p.push(y) == 1 && s(o);
          }, p = i.s = [], s = r.poll, u = 0, a, o = function() {
            (a = p[u++]) && a(), (u == p.length || u == 99) && (p = i.s = p.slice(u), u = 0), p.length && s(o);
          };
        }(), function() {
          var r, i = setTimeout, p = i.turn;
          (i.each = i.each || function(s, u, a, o) {
            o = o || 9, function y(w, n, v) {
              if (n = (w = (s || []).splice(0, o)).length) {
                for (var g = 0; g < n && r === (v = u(w[g])); g++) ;
                if (r === v) {
                  p(y);
                  return;
                }
              }
              a && a(v);
            }();
          })();
        }();
      })(e, "./shim"), e(function(c) {
        c.exports = function t(a, i, p) {
          if (!a) return {
            to: t
          };
          var s, u = typeof i == "function", a = (this.tag || (this.tag = {}))[a] || u && (this.tag[a] = {
            tag: a,
            to: t._ = {
              next: function(y) {
                var w;
                (w = this.to) && w.next(y);
              }
            }
          });
          if (u) {
            var o = {
              off: t.off || (t.off = function() {
                if (this.next === t._.next) return true;
                this === this.the.last && (this.the.last = this.back), this.to.back = this.back, this.next = t._.next, this.back.to = this.to, this.the.last === this.the && delete this.on.tag[this.the.tag];
              }),
              to: t._,
              next: i,
              the: a,
              on: this,
              as: p
            };
            return (o.back = a.last || a).to = o, a.last = o;
          }
          return (a = a.to) && s !== i && a.next(i), a;
        };
      })(e, "./onto"), e(function(c) {
        c.exports = function(t) {
          return t === null || typeof t == "string" || typeof t == "boolean" || typeof t == "number" && t != 1 / 0 && t != -1 / 0 && t === t || !!t && typeof t["#"] == "string" && Object.keys(t).length === 1 && t["#"];
        };
      })(e, "./valid"), e(function(c) {
        e("./shim");
        function t() {
          var a = +/* @__PURE__ */ new Date();
          return s < a ? (i = 0, s = a + t.drift) : s = a + (i += 1) / p + t.drift;
        }
        t.drift = 0;
        var r = -1 / 0, i = 0, p = 999, s = r, u;
        t.is = function(a, o, y) {
          var w = o && a && a._ && a._[">"] || y;
          if (w) return typeof (w = w[o]) == "number" ? w : r;
        }, t.ify = function(a, o, y, w, n) {
          (a = a || {})._ = a._ || {}, n && (a._["#"] = n);
          var v = a._[">"] || (a._[">"] = {});
          return u !== o && o !== "_" && (typeof y == "number" && (v[o] = y), u !== w && (a[o] = w)), a;
        }, c.exports = t;
      })(e, "./state"), e(function(c) {
        e("./shim");
        function t(r) {
          var i = {
            s: {}
          }, p = i.s;
          r = r || {
            max: 999,
            age: 1e3 * 9
          }, i.check = function(u) {
            return p[u] ? s(u) : false;
          };
          var s = i.track = function(u) {
            var a = p[u] || (p[u] = {});
            return a.was = i.now = +/* @__PURE__ */ new Date(), i.to || (i.to = setTimeout(i.drop, r.age + 9)), s.ed && s.ed(u), a;
          };
          return i.drop = function(u) {
            i.to = null, i.now = +/* @__PURE__ */ new Date();
            var a = Object.keys(p);
            console.STAT && console.STAT(i.now, +/* @__PURE__ */ new Date() - i.now, "dup drop keys"), setTimeout.each(a, function(o) {
              var y = p[o];
              y && (u || r.age) > i.now - y.was || delete p[o];
            }, 0, 99);
          }, i;
        }
        c.exports = t;
      })(e, "./dup"), e(function(c) {
        e("./onto"), c.exports = function(i, p) {
          if (this.on) {
            var s = (this.opt || {}).lack || 9e3;
            if (typeof i != "function") {
              if (!i) return;
              var a = i["#"] || i, u = (this.tag || "")[a];
              return u ? (p && (u = this.on(a, p), clearTimeout(u.err), u.err = setTimeout(function() {
                u.off();
              }, s)), true) : void 0;
            }
            var a = p && p["#"] || t(9);
            if (!i) return a;
            var o = this.on(a, i, p);
            return o.err = o.err || setTimeout(function() {
              o.off(), o.next({
                err: "Error: No ACK yet.",
                lack: true
              });
            }, s), a;
          }
        };
        var t = String.random || function() {
          return Math.random().toString(36).slice(2);
        };
      })(e, "./ask"), e(function(c) {
        function t(n) {
          return n instanceof t ? (this._ = {
            $: this
          }).$ : this instanceof t ? t.create(this._ = {
            $: this,
            opt: n
          }) : new t(n);
        }
        t.is = function(n) {
          return n instanceof t || n && n._ && n === n._.$ || false;
        }, t.version = 0.202, t.chain = t.prototype, t.chain.toJSON = function() {
        }, e("./shim"), t.valid = e("./valid"), t.state = e("./state"), t.on = e("./onto"), t.dup = e("./dup"), t.ask = e("./ask"), function() {
          t.create = function(d) {
            d.root = d.root || d, d.graph = d.graph || {}, d.on = d.on || t.on, d.ask = d.ask || t.ask, d.dup = d.dup || t.dup();
            var A = d.$.opt(d.opt);
            return d.once || (d.on("in", n, d), d.on("out", n, d), d.on("put", x, d), t.on("create", d), d.on("create", d)), d.once = 1, A;
          };
          function n(d) {
            if (d) {
              if (d.out === n) {
                this.to.next(d);
                return;
              }
              var A = this, E = A.as, D = E.at || E, $ = D.$, C = D.dup, M, I = d.DBG;
              if ((M = d["#"]) || (M = d["#"] = i(9)), !C.check(M)) {
                if (C.track(M), M = d._, d._ = typeof M == "function" ? M : function() {
                }, d.$ && d.$ === (d.$._ || "").$ || (d.$ = $), d["@"] && !d.put && l(d), !D.ask(d["@"], d)) if (I && (I.u = +/* @__PURE__ */ new Date()), d.put) {
                  v(d);
                  return;
                } else d.get && t.on.get(d, $);
                I && (I.uc = +/* @__PURE__ */ new Date()), A.to.next(d), I && (I.ua = +/* @__PURE__ */ new Date()), !(d.nts || d.NTS) && (d.out = n, D.on("out", d), I && (I.ue = +/* @__PURE__ */ new Date()));
              }
            }
          }
          function v(d) {
            if (d) {
              var A = d._ || "", E = A.root = ((A.$ = d.$ || "")._ || "").root;
              if (d["@"] && A.faith && !A.miss) {
                d.out = n, E.on("out", d);
                return;
              }
              A.latch = E.hatch, A.match = E.hatch = [];
              var D = d.put, $ = A.DBG = d.DBG, C = +/* @__PURE__ */ new Date();
              if (P = P || C, !(D["#"] && D["."])) {
                $ && ($.p = C), A["#"] = d["#"], A.msg = d, A.all = 0, A.stun = 1;
                var M = Object.keys(D);
                console.STAT && console.STAT(C, (($ || A).pk = +/* @__PURE__ */ new Date()) - C, "put sort");
                var I = 0, N, L, U, R, q, K, ye;
                (function te(be) {
                  if (N != I) {
                    if (N = I, !(U = M[I])) {
                      console.STAT && console.STAT(C, (($ || A).pd = +/* @__PURE__ */ new Date()) - C, "put"), h(A);
                      return;
                    }
                    (R = D[U]) ? (ye = R._) ? U !== ye["#"] ? K = b + j(U) + "soul not same." : (q = ye[">"]) || (K = b + j(U) + "no state.") : K = b + j(U) + "no meta." : K = b + j(U) + "no node.", L = Object.keys(R || {});
                  }
                  if (K) {
                    d.err = A.err = K, h(A);
                    return;
                  }
                  var Ve = 0, re;
                  for (be = be || 0; be++ < 9 && (re = L[Ve++]); ) if (re !== "_") {
                    var ke = R[re], He = q[re];
                    if (o === He) {
                      K = b + j(re) + "on" + j(U) + "no state.";
                      break;
                    }
                    if (!s(ke)) {
                      K = b + j(re) + "on" + j(U) + "bad " + typeof ke + j(ke);
                      break;
                    }
                    g(ke, re, U, He, d), ++B;
                  }
                  if ((L = L.slice(Ve)).length) {
                    p(te);
                    return;
                  }
                  ++I, L = null, te(be);
                })();
              }
            }
          }
          t.on.put = v;
          function g(d, A, E, D, $) {
            var C = $._ || "", M = C.root, I = M.graph, N, L = I[E] || y, U = u(L, A, 1), R = L[A], q = C.DBG;
            (N = console.STAT) && (!I[E] || !R) && (N.has = (N.has || 0) + 1);
            var K = T();
            if (D > K) {
              setTimeout(function() {
                g(d, A, E, D, $);
              }, (N = D - K) > O ? O : N), console.STAT && console.STAT((q || C).Hf = +/* @__PURE__ */ new Date(), N, "future");
              return;
            }
            if (!(D < U) && !(!C.faith && D === U && (d === R || _(d) <= _(R)) && !C.miss)) {
              C.stun++;
              var ye = $["#"] + C.all++, te = {
                toString: function() {
                  return ye;
                },
                _: C
              };
              te.toJSON = te.toString, M.dup.track(te)["#"] = $["#"], q && (q.ph = q.ph || +/* @__PURE__ */ new Date()), M.on("put", {
                "#": te,
                "@": $["@"],
                put: {
                  "#": E,
                  ".": A,
                  ":": d,
                  ">": D
                },
                ok: $.ok,
                _: C
              });
            }
          }
          function x(d) {
            var A;
            (A = (d._ || "").DBG) && (A.pa = +/* @__PURE__ */ new Date(), A.pm = A.pm || +/* @__PURE__ */ new Date());
            var E = this, D = E.as, $ = D.graph, C = d._, M = d.put, I = M["#"], N = M["."], L = M[":"], U = M[">"];
            d["#"];
            var R;
            (R = C.msg) && (R = R.put) && (R = R[I]) && a(R, N, U, L, I), $[I] = a($[I], N, U, L, I), (R = (D.next || "")[I]) && R.on("in", d), h(C), E.to.next(d);
          }
          function h(d, A) {
            var E;
            if (!d.stop && !(!d.err && 0 < --d.stun) && (d.stop = 1, !!(E = d.root))) {
              var D = d.match;
              D.end = 1, D === E.hatch && (!(D = d.latch) || D.end ? delete E.hatch : E.hatch = D), d.hatch && d.hatch(), setTimeout.each(d.match, function($) {
                $ && $();
              }), !(!(A = d.msg) || d.err || A.err) && (A.out = n, d.root.on("out", A), k());
            }
          }
          function l(d) {
            var A = d["@"] || "", E;
            if (!(E = A._)) {
              var D = (D = d.$) && (D = D._) && (D = D.root) && (D = D.dup);
              if (!(D = D.check(A))) return;
              d["@"] = D["#"] || d["@"];
              return;
            }
            E.acks = (E.acks || 0) + 1, (E.err = d.err) && (d["@"] = E["#"], h(E)), E.ok = d.ok || E.ok, !E.stop && !E.crack && (E.crack = E.match && E.match.push(function() {
              m(E);
            })), m(E);
          }
          function m(d) {
            !d || !d.root || d.stun || d.acks !== d.all || d.root.on("in", {
              "@": d["#"],
              err: d.err,
              ok: d.err ? o : d.ok || {
                "": 1
              }
            });
          }
          var b = "Error: Invalid graph!", j = function(d) {
            return " '" + ("" + d).slice(0, 9) + "...' ";
          }, _ = JSON.stringify, O = 2147483647, T = t.state, B = 0, P, k = function() {
            B > 999 && B / -(P - (P = +/* @__PURE__ */ new Date())) > 1 && (t.window && console.log("Warning: You're syncing 1K+ records a second, faster than DOM can update - consider limiting query."), k = function() {
              B = 0;
            });
          };
        }(), function() {
          t.on.get = function(v, g) {
            var x = g._, h = v.get, l = h["#"], m = x.graph[l], b = h["."], j = x.next || (x.next = {}), _ = j[l], O = v._ || {}, T = O.DBG = v.DBG;
            if (T && (T.g = +/* @__PURE__ */ new Date()), !m) return x.on("get", v);
            if (b) {
              if ((typeof b != "string" || o === m[b]) && !((_ || "").next || "")[b]) {
                x.on("get", v);
                return;
              }
              m = a({}, b, u(m, b), m[b], l);
            }
            m && n(v, m), x.on("get", v);
          };
          function n(v, g) {
            var x = +/* @__PURE__ */ new Date(), h = v._ || {}, l = h.DBG = v.DBG, m = v["#"], b = i(9), j = Object.keys(g || "").sort(), _ = ((g || "")._ || "")["#"];
            j.length;
            var O = v.$._.root, T = g === O.graph[_];
            console.STAT && console.STAT(x, ((l || h).gk = +/* @__PURE__ */ new Date()) - x, "got keys"), g && function B() {
              x = +/* @__PURE__ */ new Date();
              for (var P = 0, k, d = {}, A; P < 9 && (k = j[P++]); ) a(d, k, u(g, k), g[k], _);
              j = j.slice(P), (A = {})[_] = d, d = A;
              var E;
              T && (E = function() {
              }, E.ram = E.faith = true), A = j.length, console.STAT && console.STAT(x, -(x - (x = +/* @__PURE__ */ new Date())), "got copied some"), l && (l.ga = +/* @__PURE__ */ new Date()), O.on("in", {
                "@": m,
                "#": b,
                put: d,
                "%": A ? b = i(9) : o,
                $: O.$,
                _: E,
                DBG: l,
                FOO: 1
              }), console.STAT && console.STAT(x, +/* @__PURE__ */ new Date() - x, "got in"), A && setTimeout.turn(B);
            }(), g || O.on("in", {
              "@": v["#"]
            });
          }
          t.on.get.ack = n;
        }(), function() {
          t.chain.opt = function(n) {
            n = n || {};
            var v = this, g = v._, x = n.peers || n;
            return Object.plain(n) || (n = {}), Object.plain(g.opt) || (g.opt = n), typeof x == "string" && (x = [
              x
            ]), Object.plain(g.opt.peers) || (g.opt.peers = {}), x instanceof Array && (n.peers = {}, x.forEach(function(h) {
              var l = {};
              l.id = l.url = h, n.peers[h] = g.opt.peers[h] = g.opt.peers[h] || l;
            })), r(n, function h(l) {
              var m = this[l];
              if (this && this.hasOwnProperty(l) || typeof m == "string" || Object.empty(m)) {
                this[l] = m;
                return;
              }
              m && m.constructor !== Object && !(m instanceof Array) || r(m, h);
            }), g.opt.from = n, t.on("opt", g), g.opt.uuid = g.opt.uuid || function(l) {
              return t.state().toString(36).replace(".", "") + String.random(l || 12);
            }, v;
          };
        }();
        var r = function(n, v) {
          Object.keys(n).forEach(v, n);
        }, i = String.random, p = setTimeout.turn, s = t.valid, u = t.state.is, a = t.state.ify, o, y = {}, w;
        t.log = function() {
          return !t.log.off && w.log.apply(w, arguments), [].slice.call(arguments).join(" ");
        }, t.log.once = function(n, v, g) {
          return (g = t.log.once)[n] = g[n] || 0, g[n]++ || t.log(v);
        }, typeof window < "u" && ((window.GUN = window.Gun = t).window = window);
        try {
          typeof f < "u" && (f.exports = t);
        } catch {
        }
        c.exports = t, (t.window || {}).console = (t.window || {}).console || {
          log: function() {
          }
        }, (w = console).only = function(n, v) {
          return w.only.i && n === w.only.i && w.only.i++ && (w.log.apply(w, arguments) || v);
        }, t.log.once("welcome", "Hello wonderful person! :) Thanks for using GUN, please ask for help on http://chat.gun.eco if anything takes you longer than 5min to figure out!");
      })(e, "./root"), e(function(c) {
        var t = e("./root");
        t.chain.back = function(p, s) {
          var u;
          if (p = p || 1, p === -1 || p === 1 / 0) return this._.root.$;
          if (p === 1) return (this._.back || this._).$;
          var a = this, o = a._;
          if (typeof p == "string" && (p = p.split(".")), p instanceof Array) {
            var y = 0, w = p.length, u = o;
            for (y; y < w; y++) u = (u || r)[p[y]];
            return i !== u ? s ? a : u : (u = o.back) ? u.$.back(p, s) : void 0;
          }
          if (typeof p == "function") {
            for (var n, u = {
              back: o
            }; (u = u.back) && i === (n = p(u, s)); ) ;
            return n;
          }
          return typeof p == "number" ? (o.back || o).$.back(p - 1) : this;
        };
        var r = {}, i;
      })(e, "./back"), e(function(c) {
        var t = e("./root");
        t.chain.chain = function(h) {
          var l = this, m = l._, b = new (h || l).constructor(l), j = b._, _;
          return j.root = _ = m.root, j.id = ++_.once, j.back = l._, j.on = t.on, j.on("in", t.on.in, j), j.on("out", t.on.out, j), b;
        };
        function r(h) {
          var l, m = this.as, b = m.back, j = m.root, _;
          if (h.$ || (h.$ = m.$), this.to.next(h), m.err) {
            m.on("in", {
              put: m.put = o,
              $: m.$
            });
            return;
          }
          if (l = h.get) {
            if (j.pass && (j.pass[m.id] = m), m.lex && Object.keys(m.lex).forEach(function(O) {
              _[O] = m.lex[O];
            }, _ = h.get = h.get || {}), l["#"] || m.soul) {
              if (l["#"] = l["#"] || m.soul, h["#"] || (h["#"] = y(9)), b = j.$.get(l["#"])._, l = l["."]) {
                if (n(b.put, l) && (_ = b.ask && b.ask[l], (b.ask || (b.ask = {}))[l] = b.$.get(l)._, b.on("in", {
                  get: l,
                  put: {
                    "#": b.soul,
                    ".": l,
                    ":": b.put[l],
                    ">": g(j.graph[b.soul], l)
                  }
                }), _)) return;
              } else {
                if (_ = b.ask && b.ask[""], (b.ask || (b.ask = {}))[""] = b, o !== b.put && (b.on("in", b), _)) return;
                h.$ = b.$;
              }
              return j.ask(u, h), j.on("in", h);
            }
            if (l["."]) return m.get ? (h = {
              get: {
                ".": m.get
              },
              $: m.$
            }, (b.ask || (b.ask = {}))[m.get] = h.$._, b.on("out", h)) : (h = {
              get: m.lex ? h.get : {},
              $: m.$
            }, b.on("out", h));
            if ((m.ask || (m.ask = {}))[""] = m, m.get) return l["."] = m.get, (b.ask || (b.ask = {}))[m.get] = h.$._, b.on("out", h);
          }
          return b.on("out", h);
        }
        t.on.out = r;
        function i(h, l) {
          l = l || this.as;
          var m = l.root, b = h.$ || (h.$ = l.$), j = (b || "")._ || a, _ = h.put || "", O = _["#"], T = _["."], B = o !== _["="] ? _["="] : _[":"], P = _[">"] || -1 / 0, k;
          if (o !== h.put && (o === _["#"] || o === _["."] || o === _[":"] && o === _["="] || o === _[">"])) {
            if (!w(_)) {
              if (!(O = ((_ || "")._ || "")["#"])) {
                console.log("chain not yet supported for", _, "...", h, l);
                return;
              }
              return b = l.root.$.get(O), setTimeout.each(Object.keys(_).sort(), function(d) {
                d == "_" || o === (P = g(_, d)) || l.on("in", {
                  $: b,
                  put: {
                    "#": O,
                    ".": d,
                    "=": _[d],
                    ">": P
                  },
                  VIA: h
                });
              });
            }
            l.on("in", {
              $: j.back.$,
              put: {
                "#": O = j.back.soul,
                ".": T = j.has || j.get,
                "=": _,
                ">": g(j.back.put, T)
              },
              via: h
            });
            return;
          }
          (h.seen || "")[l.id] || ((h.seen || (h.seen = function() {
          }))[l.id] = l, l !== j && (Object.keys(h).forEach(function(d) {
            _[d] = h[d];
          }, _ = {}), _.get = l.get || _.get, !l.soul && !l.has ? _.$$$ = _.$$$ || l.$ : j.soul && (_.$ = l.$, _.$$ = _.$$ || j.$), h = _), s(h, l), (l.soul || h.$$) && P >= g(m.graph[O], T) && ((_ = m.$.get(O)._).put = x(_.put, T, P, B, O)), !j.soul && P >= g(m.graph[O], T) && (k = (m.$.get(O)._.next || "")[T]) && (k.put = B, typeof (_ = w(B)) == "string" && (k.put = m.$.get(_)._.put || B)), this.to && this.to.next(h), l.any && setTimeout.each(Object.keys(l.any), function(d) {
            (d = l.any[d]) && d(h);
          }, 0, 99), l.echo && setTimeout.each(Object.keys(l.echo), function(d) {
            (d = l.echo[d]) && d.on("in", h);
          }, 0, 99), ((h.$$ || "")._ || j).soul && (k = l.next) && (k = k[T]) && (_ = {}, Object.keys(h).forEach(function(d) {
            _[d] = h[d];
          }), _.$ = (h.$$ || h.$).get(_.get = T), delete _.$$, delete _.$$$, k.on("in", _)), p(h, l));
        }
        t.on.in = i;
        function p(h, l) {
          if (l = l || this.as || h.$._, !(h.$$ && this !== t.on) && !(!h.put || l.soul)) {
            var m = h.put || "", b = m["="] || m[":"], T, j = l.root, _ = j.$.get(m["#"]).get(m["."])._;
            if (typeof (b = w(b)) != "string") {
              this === t.on && ((_.echo || (_.echo = {}))[l.id] = l);
              return;
            }
            if (!((_.echo || (_.echo = {}))[l.id] && !(j.pass || "")[l.id])) {
              if (T = j.pass) {
                if (T[b + l.id]) return;
                T[b + l.id] = 1;
              }
              (_.echo || (_.echo = {}))[l.id] = l, l.has && (l.link = b);
              var O = j.$.get(_.link = b)._;
              (O.echo || (O.echo = {}))[_.id] = _;
              var T = l.ask || "";
              (T[""] || l.lex) && O.on("out", {
                get: {
                  "#": b
                }
              }), setTimeout.each(Object.keys(T), function(B, P) {
                !B || !(P = T[B]) || P.on("out", {
                  get: {
                    "#": b,
                    ".": B
                  }
                });
              }, 0, 99);
            }
          }
        }
        t.on.link = p;
        function s(h, l) {
          var m = h.put || "", b = o !== m["="] ? m["="] : m[":"], j = l.root, _, O;
          if (o === b) {
            if (l.soul && o !== l.put || (O = (h.$$ || h.$ || "")._ || "", h["@"] && (o !== O.put || o !== l.put))) return;
            (_ = l.link || h.linked) && delete (j.$.get(_)._.echo || "")[l.id], l.has && (l.link = null), l.put = o, setTimeout.each(Object.keys(l.next || ""), function(T, B) {
              (B = l.next[T]) && (_ && delete (j.$.get(_).get(T)._.echo || "")[B.id], B.on("in", {
                get: T,
                put: o,
                $: B.$
              }));
            }, 0, 99);
            return;
          }
          l.soul || h.$$ || (_ = w(b), O = h.$._ || "", !((_ === O.link || l.has && !O.link) && !((j.pass || "")[l.id] && typeof _ != "string")) && (delete (O.echo || "")[l.id], s({
            get: l.get,
            put: o,
            $: h.$,
            linked: h.linked = h.linked || O.link
          }, l)));
        }
        t.on.unlink = s;
        function u(h, l) {
          var m = this.as, b = m.$._;
          b.root;
          var j = m.get || "", _ = (h.put || "")[j["#"]] || "";
          if (!h.put || typeof j["."] == "string" && o === _[j["."]]) {
            if (o !== b.put || !b.soul && !b.has) return;
            b.ack = (b.ack || 0) + 1, b.on("in", {
              get: b.get,
              put: b.put = o,
              $: b.$,
              "@": h["@"]
            });
            return;
          }
          (h._ || {}).miss = 1, t.on.put(h);
        }
        var a = {}, o, y = String.random, w = t.valid, n = function(h, l) {
          return h && Object.prototype.hasOwnProperty.call(h, l);
        }, v = t.state, g = v.is, x = v.ify;
      })(e, "./chain"), e(function(c) {
        var t = e("./root");
        t.chain.get = function(o, y, w) {
          var n, v;
          if (typeof o == "string") {
            if (o.length == 0) return (n = this.chain())._.err = {
              err: t.log("0 length key!", o)
            }, y && y.call(n, n._.err), n;
            var g = this, x = g._, h = x.next || s;
            (n = h[o]) || (n = o && r(o, g)), n = n && n.$;
          } else if (typeof o == "function") {
            let O = function(T, B, P) {
              if (!O.stun && !(($ = m.pass) && !$[b])) {
                var k = T.$._, d = (T.$$ || "")._, A = (d || k).put, E = !k.has && !k.soul, D = {}, $;
                if ((E || a === A) && (A = a === (($ = T.put) || "")["="] ? a === ($ || "")[":"] ? $ : $[":"] : $["="]), typeof ($ = t.valid(A)) == "string" && (A = a === ($ = m.$.get($)._.put) ? l.not ? a : A : $), !(l.not && a === A)) {
                  if (a === l.stun) {
                    if (($ = m.stun) && $.on && (x.$.back(function(C) {
                      if ($.on("" + C.id, D = {}), (D.run || 0) < O.id) return D;
                    }), !D.run && $.on("" + k.id, D = {}), !D.run && d && $.on("" + d.id, D = {}), O.id > D.run && ((!D.stun || D.stun.end) && (D.stun = $.on("stun"), D.stun = D.stun && D.stun.last), D.stun && !D.stun.end))) {
                      (D.stun.add || (D.stun.add = {}))[b] = function() {
                        O(T, B, 1);
                      };
                      return;
                    }
                    if (a === A && (P = 0), ($ = m.hatch) && !$.end && a === l.hatch && !P) {
                      if (j[k.$._.id]) return;
                      j[k.$._.id] = 1, $.push(function() {
                        O(T, B, 1);
                      });
                      return;
                    }
                    j = {};
                  }
                  if (m.pass) {
                    if (m.pass[b + k.id]) return;
                    m.pass[b + k.id] = 1;
                  }
                  if (l.on) {
                    l.ok.call(k.$, A, k.get, T, B || O);
                    return;
                  }
                  if (l.v2020) {
                    l.ok(T, B || O);
                    return;
                  }
                  Object.keys(T).forEach(function(C) {
                    $[C] = T[C];
                  }, $ = {}), T = $, T.put = A, l.ok.call(l.as, T, B || O);
                }
              }
            };
            if (y === true) return i(this, o, y, w), this;
            n = this;
            var x = n._, l = y || {}, m = x.root, b;
            l.at = x, l.ok = o;
            var j = {};
            return O.at = x, (x.any || (x.any = {}))[b = String.random(7)] = O, O.off = function() {
              O.stun = 1, x.any && delete x.any[b];
            }, O.rid = p, O.id = l.run || ++m.once, v = m.pass, (m.pass = {})[b] = 1, l.out = l.out || {
              get: {}
            }, x.on("out", l.out), m.pass = v, n;
          } else {
            if (typeof o == "number") return this.get("" + o, y, w);
            if (typeof (v = u(o)) == "string") return this.get(v, y, w);
            (v = this.get.next) && (n = v(this, o));
          }
          return n ? (y && typeof y == "function" && n.get(y, w), n) : ((n = this.chain())._.err = {
            err: t.log("Invalid get request!", o)
          }, y && y.call(n, n._.err), n);
        };
        function r(o, y) {
          var w = y._, n = w.next, v = y.chain(), g = v._;
          return n || (n = w.next = {}), n[g.get = o] = g, y === w.root.$ ? g.soul = o : (w.soul || w.has) && (g.has = o), g;
        }
        function i(o, y, w, n) {
          var v = o._, g = 0, x;
          return (x = v.soul || v.link) ? y(x, n, v) : v.jam ? v.jam.push([
            y,
            n
          ]) : (v.jam = [
            [
              y,
              n
            ]
          ], o.get(function(l, m) {
            if (!(a === l.put && !v.root.opt.super && (x = Object.keys(v.root.opt.peers).length) && ++g <= x)) {
              m.rid(l);
              var b = (b = l.$) && b._ || {}, j = 0, _;
              for (x = v.jam, delete v.jam; _ = x[j++]; ) {
                var O = _[0];
                _ = _[1], O && O(b.link || b.soul || t.valid(l.put) || ((l.put || {})._ || {})["#"], _, l, m);
              }
            }
          }, {
            out: {
              get: {
                ".": true
              }
            }
          }), o);
        }
        function p(o) {
          var y = this.at || this.on;
          if (!o || y.soul || y.has) return this.off();
          if (o = (o = (o = o.$ || o)._ || o).id) {
            y.map;
            var w;
            if ((w = this.seen || (this.seen = {}))[o]) return true;
            w[o] = true;
          }
        }
        var s = {}, u = t.valid, a;
      })(e, "./get"), e(function(c) {
        var t = e("./root");
        t.chain.put = function(n, v, g) {
          var x = this, h = x._, l = h.root;
          g = g || {}, g.root = h.root, g.run || (g.run = l.once), r(g, h.id), g.ack = g.ack || v, g.via = g.via || x, g.data = g.data || n, g.soul || (g.soul = h.soul || typeof v == "string" && v);
          var m = g.state = g.state || t.state();
          return typeof n == "function" ? (n(function(b) {
            g.data = b, x.put(u, u, g);
          }), x) : g.soul ? (g.$ = l.$.get(g.soul), g.todo = [
            {
              it: g.data,
              ref: g.$
            }
          ], g.turn = g.turn || o, g.ran = g.ran || i, function b() {
            var j = g.todo, _ = j.pop(), O = _.it;
            _.ref && _.ref._.id;
            var T, B, P, k, d;
            if (r(g, _.ref), (k = _.todo) && (B = k.pop(), O = O[B], k.length && j.push(_)), B && (j.path || (j.path = [])).push(B), !(T = y(O)) && !(d = t.is(O))) {
              if (!Object.plain(O)) {
                i.err(g, "Invalid data: " + s(O) + " at " + (g.via.back(function($) {
                  $.get && k.push($.get);
                }, k = []) || k.join(".")) + "." + (j.path || []).join("."));
                return;
              }
              for (var A = g.seen || (g.seen = []), E = A.length; E--; ) if (O === (k = A[E]).it) {
                T = O = k.link;
                break;
              }
            }
            if (B && T) _.node = w(_.node, B, m, O);
            else {
              let $ = function(C, M) {
                var I = P.link["#"];
                M && (M.off(), M.rid(C));
                var N = I || C.soul || (k = (C.$$ || C.$)._ || "").soul || k.link || ((k = k.put || "")._ || "")["#"] || k["#"] || ((k = C.put || "") && C.$$ ? k["#"] : (k["="] || k[":"] || "")["#"]);
                if (!I && r(g, C.$), !N && !_.link["#"]) {
                  (_.wait || (_.wait = [])).push(function() {
                    $(C, M);
                  });
                  return;
                }
                N || (N = [], (C.$$ || C.$).back(function(L) {
                  if (k = L.soul || L.link) return N.push(k);
                  N.push(L.get);
                }), N = N.reverse().join("/")), P.link["#"] = N, !d && (((g.graph || (g.graph = {}))[N] = P.node || (P.node = {
                  _: {}
                }))._["#"] = N), delete g.wait[D], P.wait && setTimeout.each(P.wait, function(L) {
                  L && L();
                }), g.ran(g);
              };
              if (!g.seen) {
                i.err(g, "Data at root of graph must be a node (an object).");
                return;
              }
              g.seen.push(P = {
                it: O,
                link: {},
                todo: d ? [] : Object.keys(O).sort().reverse(),
                path: (j.path || []).slice(),
                up: _
              }), _.node = w(_.node, B, m, P.link), !d && P.todo.length && j.push(P);
              var D = g.seen.length;
              (g.wait || (g.wait = {}))[D] = "", k = (P.ref = d ? O : B ? _.ref.get(B) : _.ref)._, (k = O && (O._ || "")["#"] || k.soul || k.link) ? $({
                soul: k
              }) : P.ref.get($, {
                run: g.run,
                v2020: 1,
                out: {
                  get: {
                    ".": " "
                  }
                }
              });
            }
            if (!j.length) return g.ran(g);
            g.turn(b);
          }(), x) : (p(g), x);
        };
        function r(n, v) {
          if (v) {
            v = (v._ || "").id || v;
            var g = n.root.stun || (n.root.stun = {
              on: t.on
            }), x = {}, h;
            n.stun || (n.stun = g.on("stun", function() {
            })), (h = g.on("" + v)) && h.the.last.next(x), !(x.run >= n.run) && g.on("" + v, function(l) {
              if (n.stun.end) {
                this.off(), this.to.next(l);
                return;
              }
              l.run = l.run || n.run, l.stun = l.stun || n.stun;
            });
          }
        }
        function i(n) {
          if (n.err) {
            i.end(n.stun, n.root);
            return;
          }
          if (!(n.todo.length || n.end || !Object.empty(n.wait))) {
            n.end = 1;
            var v = n.$.back(-1)._, g = v.root, x = v.ask(function(b) {
              g.on("ack", b), b.err && !b.lack && t.log(b), ++h > (n.acks || 0) && this.off(), n.ack && n.ack(b, this);
            }, n.opt), h = 0, l = n.stun, m;
            (m = function() {
              l && (i.end(l, g), setTimeout.each(Object.keys(l = l.add || ""), function(b) {
                (b = l[b]) && b();
              }));
            }).hatch = m, n.ack && !n.ok && (n.ok = n.acks || 9), n.via._.on("out", {
              put: n.out = n.graph,
              ok: n.ok && {
                "@": n.ok + 1
              },
              opt: n.opt,
              "#": x,
              _: m
            });
          }
        }
        i.end = function(n, v) {
          n.end = a, n.the.to === n && n === n.the.last && delete v.stun, n.off();
        }, i.err = function(n, v) {
          (n.ack || a).call(n, n.out = {
            err: n.err = t.log(v)
          }), n.ran(n);
        };
        function p(n) {
          var v = n.via._, g;
          n.via = n.via.back(function(x) {
            if (x.soul || !x.get) return x.$;
            g = n.data, (n.data = {})[x.get] = g;
          }), (!n.via || !n.via._.soul) && (n.via = v.root.$.get(((n.data || "")._ || "")["#"] || v.$.back("opt.uuid")())), n.via.put(n.data, n.ack, n);
        }
        function s(n, v) {
          return n && (v = n.constructor) && v.name || typeof n;
        }
        var u, a = function() {
        }, o = setTimeout.turn, y = t.valid, w = t.state.ify;
      })(e, "./put"), e(function(c) {
        var t = e("./root");
        e("./chain"), e("./back"), e("./put"), e("./get"), c.exports = t;
      })(e, "./index"), e(function(c) {
        var t = e("./index");
        t.chain.on = function(p, s, u, a) {
          var o = this, y = o._;
          y.root;
          var w;
          if (typeof p == "string") return s ? (w = y.on(p, s, u || y, a), u && u.$ && (u.subs || (u.subs = [])).push(w), o) : y.on(p);
          var n = s;
          return (n = n === true ? {
            change: true
          } : n || {}).not = 1, n.on = 1, o.get(p, n), o;
        }, t.chain.once = function(p, s) {
          if (s = s || {}, !p) return r(this);
          var u = this, a = u._, o = a.root;
          a.put;
          var y = String.random(7), w;
          return u.get(function(n, v, g, x) {
            var h = this, l = h._, m = l.one || (l.one = {});
            if (x.stun || m[y] === "") return;
            if ((w = t.valid(n)) === true) {
              b();
              return;
            }
            if (typeof w == "string") return;
            clearTimeout((a.one || "")[y]), clearTimeout(m[y]), m[y] = setTimeout(b, s.wait || 99);
            function b(j) {
              if (!l.has && !l.soul && (l = {
                put: n,
                get: v
              }), i === (w = l.put) && (w = ((g.$$ || "")._ || "").put), typeof t.valid(w) == "string" && (w = o.$.get(w)._.put, w === i && !j)) {
                m[y] = setTimeout(function() {
                  b(1);
                }, s.wait || 99);
                return;
              }
              x.stun || m[y] !== "" && (m[y] = "", (a.soul || a.has) && x.off(), p.call(h, w, l.get), clearTimeout(m[y]));
            }
          }, {
            on: 1
          }), u;
        };
        function r(p, s, u) {
          return t.log.once("valonce", "Chainable val is experimental, its behavior and API may change moving forward. Please play with it and report bugs and ideas on how to improve it."), (u = p.chain())._.nix = p.once(function(a, o) {
            u._.on("in", this._);
          }), u._.lex = p._.lex, u;
        }
        t.chain.off = function() {
          var p = this, s = p._, u, a = s.back;
          if (a) return s.ack = 0, (u = a.next) && u[s.get] && delete u[s.get], (u = a.any) && (delete a.any, a.any = {}), (u = a.ask) && delete u[s.get], (u = a.put) && delete u[s.get], (u = s.soul) && delete a.root.graph[u], (u = s.map) && Object.keys(u).forEach(function(o, y) {
            y = u[o], y.link && a.root.$.get(y.link).off();
          }), (u = s.next) && Object.keys(u).forEach(function(o, y) {
            y = u[o], y.$.off();
          }), s.on("off", {}), p;
        };
        var i;
      })(e, "./on"), e(function(c) {
        var t = e("./index"), r = t.chain.get.next;
        t.chain.get.next = function(u, a) {
          var o;
          return Object.plain(a) ? (o = ((o = a["#"]) || "")["="] || o) ? u.get(o) : ((o = u.chain()._).lex = a, u.on("in", function(y) {
            String.match(y.get || (y.put || "")["."], a["."] || a["#"] || a) && o.on("in", y), this.to.next(y);
          }), o.$) : (r || p)(u, a);
        }, t.chain.map = function(u, a, o) {
          var y = this, w = y._, n, v;
          return Object.plain(u) && (n = u["."] ? u : {
            ".": u
          }, u = s), u ? (t.log.once("mapfn", "Map functions are experimental, their behavior and API may change moving forward. Please play with it and report bugs and ideas on how to improve it."), v = y.chain(), y.map().on(function(g, x, h, l) {
            var m = (u || p).call(this, g, x, h, l);
            if (s !== m) {
              if (g === m) return v._.on("in", h);
              if (t.is(m)) return v._.on("in", m._);
              var b = {};
              Object.keys(h.put).forEach(function(j) {
                b[j] = h.put[j];
              }, b), b["="] = m, v._.on("in", {
                get: x,
                put: b
              });
            }
          }), v) : ((v = w.each) || ((w.each = v = y.chain())._.lex = n || v._.lex || w.lex, v._.nix = y.back("nix"), y.on("in", i, v._)), v);
        };
        function i(u) {
          this.to.next(u);
          var a = this.as, o = u.$, y = o._, w = u.put, n;
          !y.soul && !u.$$ || (n = a.lex) && !String.match(u.get || (w || "")["."], n["."] || n["#"] || n) || t.on.link(u, a);
        }
        var p = function() {
        }, s;
      })(e, "./map"), e(function(c) {
        var t = e("./index");
        t.chain.set = function(r, i, p) {
          var s = this, u = s.back(-1), a, o;
          return i = i || function() {
          }, p = p || {}, p.item = p.item || r, (a = ((r || "")._ || "")["#"]) && ((r = {})["#"] = a), typeof (o = t.valid(r)) == "string" ? s.get(a = o).put(r, i, p) : t.is(r) ? (s.put(function(y) {
            r.get(function(w, n, v) {
              if (!w) return i.call(s, {
                err: t.log('Only a node can be linked! Not "' + v.put + '"!')
              });
              (o = {})[w] = {
                "#": w
              }, y(o);
            }, true);
          }), r) : (Object.plain(r) && (r = u.get(a = s.back("opt.uuid")()).put(r)), s.get(a || u.back("opt.uuid")(7)).put(r, i, p));
        };
      })(e, "./set"), e(function(c) {
        e("./shim");
        var t = function() {
        }, r = JSON.parseAsync || function(u, a, o) {
          var y, w = +/* @__PURE__ */ new Date();
          try {
            a(y, JSON.parse(u, o), i.sucks(+/* @__PURE__ */ new Date() - w));
          } catch (n) {
            a(n);
          }
        }, i = JSON.stringifyAsync || function(u, a, o, y) {
          var w, n = +/* @__PURE__ */ new Date();
          try {
            a(w, JSON.stringify(u, o, y), i.sucks(+/* @__PURE__ */ new Date() - n));
          } catch (v) {
            a(v);
          }
        };
        i.sucks = function(u) {
          u > 99 && (console.log("Warning: JSON blocking CPU detected. Add `gun/lib/yson.js` to fix."), i.sucks = t);
        };
        function p(u) {
          var a = function() {
          }, o = u.opt || {};
          o.log = o.log || console.log, o.gap = o.gap || o.wait || 0, o.max = o.max || (o.memory ? o.memory * 999 * 999 : 3e8) * 0.3, o.pack = o.pack || o.max * 0.01 * 0.01, o.puff = o.puff || 9;
          var y = setTimeout.turn || setTimeout, w = u.dup, n = w.check, v = w.track, g = a.hear = function(l, m) {
            if (l) {
              if (o.max <= l.length) return a.say({
                dam: "!",
                err: "Message too big!"
              }, m);
              a === this && (g.d += l.length || 0, ++g.c);
              var b = m.SH = +/* @__PURE__ */ new Date(), j = l[0], _;
              if (j === "[") {
                r(l, function(O, T) {
                  if (O || !T) return a.say({
                    dam: "!",
                    err: "DAM JSON parse error."
                  }, m);
                  console.STAT && console.STAT(+/* @__PURE__ */ new Date(), T.length, "# on hear batch");
                  var B = o.puff;
                  (function P() {
                    for (var k = +/* @__PURE__ */ new Date(), d = 0, A; d < B && (A = T[d++]); ) a.hear(A, m);
                    T = T.slice(d), console.STAT && console.STAT(k, +/* @__PURE__ */ new Date() - k, "hear loop"), x(m), T.length && y(P, 0);
                  })();
                }), l = "";
                return;
              }
              if (j === "{" || (l["#"] || Object.plain(l)) && (_ = l)) {
                if (_) return g.one(_, m, b);
                r(l, function(O, T) {
                  if (O || !T) return a.say({
                    dam: "!",
                    err: "DAM JSON parse error."
                  }, m);
                  g.one(T, m, b);
                });
                return;
              }
            }
          };
          g.one = function(l, m, P) {
            var j, _, O, T, B;
            if (l.DBG && (l.DBG = B = {
              DBG: l.DBG
            }), B && (B.h = P), B && (B.hp = +/* @__PURE__ */ new Date()), (j = l["#"]) || (j = l["#"] = String.random(9)), !(O = n(j)) && (_ = l["##"], !(_ && (O = l["@"] || l.get && j) && w.check(T = O + _)))) {
              if ((l._ = function() {
              }).via = a.leap = m, (O = l["><"]) && typeof O == "string" && O.slice(0, 99).split(",").forEach(function(k) {
                this[k] = 1;
              }, l._.yo = {}), O = l.dam) {
                (O = a.hear[O]) && O(l, m, u), v(j);
                return;
              }
              (O = l.ok) && (l._.near = O["/"]);
              var P = +/* @__PURE__ */ new Date();
              B && (B.is = P), m.SI = j, v.ed = function(k) {
                j === k && (v.ed = 0, (k = w.s[j]) && (k.via = m, l.get && (k.it = l)));
              }, u.on("in", a.last = l), B && (B.hd = +/* @__PURE__ */ new Date()), console.STAT && console.STAT(P, +/* @__PURE__ */ new Date() - P, l.get ? "msg get" : l.put ? "msg put" : "msg"), v(j), T && v(T), a.leap = a.last = null;
            }
          }, g.c = g.d = 0, function() {
            var l = 0, m;
            a.hash = function(_, O) {
              var T, B, P, k = +/* @__PURE__ */ new Date();
              i(_.put, function d(A, E) {
                var D = (B || (B = P = E || "")).slice(0, 32768);
                if (T = String.hash(D, T), B = B.slice(32768), B) {
                  y(d, 0);
                  return;
                }
                console.STAT && console.STAT(k, +/* @__PURE__ */ new Date() - k, "say json+hash"), _._.$put = P, _["##"] = T, a.say(_, O), delete _._.$put;
              }, b);
            };
            function b(_, O) {
              var T;
              return O instanceof Object ? (Object.keys(O).sort().forEach(j, {
                to: T = {},
                on: O
              }), T) : O;
            }
            function j(_) {
              this.to[_] = this.on[_];
            }
            a.say = function(_, O) {
              var T;
              if ((T = this) && (T = T.to) && T.next && T.next(_), !_) return false;
              var B, P, k, d = _["@"], A = _._ || (_._ = function() {
              }), E = _.DBG, D = +/* @__PURE__ */ new Date();
              if (A.y = A.y || D, O || E && (E.y = D), (B = _["#"]) || (B = _["#"] = String.random(9)), !m && v(B), !(P = _["##"]) && s !== _.put && !A.via && d) {
                a.hash(_, O);
                return;
              }
              if (!O && d && (O = (T = w.s[d]) && (T.via || (T = T.it) && (T = T._) && T.via) || (T = a.last) && d === T["#"] && a.leap), !O && d) return w.s[d] ? void 0 : (console.STAT && console.STAT(+/* @__PURE__ */ new Date(), ++l, "total no peer to ack to"), false);
              if (d && !_.put && !P && ((w.s[d] || "").it || "")["##"]) return false;
              if (!O && a.way) return a.way(_);
              if (E && (E.yh = +/* @__PURE__ */ new Date()), !(k = A.raw)) {
                a.raw(_, O);
                return;
              }
              if (E && (E.yr = +/* @__PURE__ */ new Date()), !O || !O.id) {
                if (!Object.plain(O || o.peers)) return false;
                var D = +/* @__PURE__ */ new Date();
                o.puff;
                var $ = o.peers, C = Object.keys(O || o.peers || {});
                console.STAT && console.STAT(D, +/* @__PURE__ */ new Date() - D, "peer keys"), function N() {
                  var L = +/* @__PURE__ */ new Date();
                  m = 1;
                  var U = A.raw;
                  A.raw = k;
                  for (var R = 0, q; R < 9 && (q = (C || "")[R++]); ) (q = $[q] || (O || "")[q]) && a.say(_, q);
                  A.raw = U, m = 0, C = C.slice(R), console.STAT && console.STAT(L, +/* @__PURE__ */ new Date() - L, "say loop"), C.length && (y(N, 0), d && v(d));
                }();
                return;
              }
              if (!O.wire && a.wire && a.wire(O), B !== O.last) {
                if (O.last = B, O === A.via || (T = A.yo) && (T[O.url] || T[O.pid] || T[O.id])) return false;
                if (console.STAT && console.STAT(D, ((E || A).yp = +/* @__PURE__ */ new Date()) - (A.y || D), "say prep"), !m && d && v(d), O.batch) {
                  if (O.tail = (T = O.tail || 0) + k.length, O.tail <= o.pack) {
                    O.batch += (T ? "," : "") + k;
                    return;
                  }
                  x(O);
                }
                O.batch = "[";
                var M = +/* @__PURE__ */ new Date();
                setTimeout(function() {
                  console.STAT && console.STAT(M, +/* @__PURE__ */ new Date() - M, "0ms TO"), x(O);
                }, o.gap), h(k, O), console.STAT && d === O.SI && console.STAT(D, +/* @__PURE__ */ new Date() - O.SH, "say ack");
              }
            }, a.say.c = a.say.d = 0, a.raw = function(_, O) {
              if (!_) return "";
              var T = _._ || {}, B, P;
              if (P = T.raw) return P;
              if (typeof _ == "string") return _;
              var k = _["##"], d = _["@"];
              if (k && d) {
                if (!T.via && n(d + k)) return false;
                if (P = (w.s[d] || "").it) {
                  if (k === P["##"]) return false;
                  P["##"] || (P["##"] = k);
                }
              }
              if (!_.dam && !_["@"]) {
                var A = 0, E = [];
                P = o.peers;
                for (var D in P) {
                  var $ = P[D];
                  if (E.push($.url || $.pid || $.id), ++A > 6) break;
                }
                A > 1 && (_["><"] = E.join());
              }
              if (_.put && (P = _.ok) && (_.ok = {
                "@": (P["@"] || 1) - 1,
                "/": P["/"] == _._.near ? a.near : P["/"]
              }), B = T.$put) {
                P = {}, Object.keys(_).forEach(function(M) {
                  P[M] = _[M];
                }), P.put = ":])([:", i(P, function(M, I) {
                  if (!M) {
                    var N = +/* @__PURE__ */ new Date();
                    P = I.indexOf('"put":":])([:"'), C(s, I = I.slice(0, P + 6) + B + I.slice(P + 14)), console.STAT && console.STAT(N, +/* @__PURE__ */ new Date() - N, "say slice");
                  }
                });
                return;
              }
              i(_, C);
              function C(M, I) {
                M || (T.raw = I, a.say(_, O));
              }
            };
          }();
          function x(l) {
            var m = l.batch, b = typeof m == "string";
            if (b && (m += "]"), l.batch = l.tail = null, !!m && !(b ? 3 > m.length : !m.length)) {
              if (!b) try {
                m = m.length === 1 ? m[0] : JSON.stringify(m);
              } catch (j) {
                return o.log("DAM JSON stringify error", j);
              }
              m && h(m, l);
            }
          }
          function h(l, m) {
            try {
              var b = m.wire;
              m.say ? m.say(l) : b.send && b.send(l), a.say.d += l.length || 0, ++a.say.c;
            } catch {
              (m.queue = m.queue || []).push(l);
            }
          }
          return a.near = 0, a.hi = function(l) {
            var m = l.wire, b;
            if (!m) {
              a.wire(l.length && {
                url: l,
                id: l
              } || l);
              return;
            }
            l.id ? o.peers[l.url || l.id] = l : (b = l.id = l.id || l.url || String.random(9), a.say({
              dam: "?",
              pid: u.opt.pid
            }, o.peers[b] = l), delete w.s[l.last]), l.met || (a.near++, l.met = +/* @__PURE__ */ new Date(), u.on("hi", l)), b = l.queue, l.queue = [], setTimeout.each(b || [], function(j) {
              h(j, l);
            }, 0, 9);
          }, a.bye = function(l) {
            l.met && --a.near, delete l.met, u.on("bye", l);
            var m = +/* @__PURE__ */ new Date();
            m = m - (l.met || m), a.bye.time = ((a.bye.time || m) + m) / 2;
          }, a.hear["!"] = function(l, m) {
            o.log("Error:", l.err);
          }, a.hear["?"] = function(l, m) {
            l.pid && (m.pid || (m.pid = l.pid), l["@"]) || (a.say({
              dam: "?",
              pid: o.pid,
              "@": l["#"]
            }, m), delete w.s[m.last]);
          }, a.hear.mob = function(l, m) {
            if (l.peers) {
              var b = Object.keys(l.peers), j = b[Math.random() * b.length >> 0];
              j && (a.bye(m), a.hi(j));
            }
          }, u.on("create", function(l) {
            l.opt.pid = l.opt.pid || String.random(9), this.to.next(l), l.on("out", a.say);
          }), u.on("bye", function(l, m) {
            l = o.peers[l.id || l] || l, this.to.next(l), l.bye ? l.bye() : (m = l.wire) && m.close && m.close(), delete o.peers[l.id], l.wire = null;
          }), u.on("bye", function(l, m) {
            this.to.next(l), (m = console.STAT) && (m.peers = a.near), (m = l.url) && setTimeout(function() {
            }, o.lack || 9e3);
          }), u.on("hi", function(l, m) {
            if (this.to.next(l), (m = console.STAT) && (m.peers = a.near), !o.super) {
              var b = Object.keys(u.next || "");
              b.length > 9999 && !console.SUBS && console.log(console.SUBS = "Warning: You have more than 10K live GETs, which might use more bandwidth than your screen can show - consider `.off()`."), setTimeout.each(b, function(j) {
                var _ = u.next[j];
                if (o.super || (_.ask || "")[""]) {
                  a.say({
                    get: {
                      "#": j
                    }
                  }, l);
                  return;
                }
                setTimeout.each(Object.keys(_.ask || ""), function(O) {
                  O && a.say({
                    "##": String.hash((u.graph[j] || "")[O]),
                    get: {
                      "#": j,
                      ".": O
                    }
                  }, l);
                });
              });
            }
          }), a;
        }
        var s;
        try {
          c.exports = p;
        } catch {
        }
      })(e, "./mesh"), e(function(c) {
        var t = e("./index");
        t.Mesh = e("./mesh"), t.on("opt", function(i) {
          if (this.to.next(i), i.once) return;
          var p = i.opt;
          if (p.WebSocket === false) return;
          var s = t.window || {}, u = p.WebSocket || s.WebSocket || s.webkitWebSocket || s.mozWebSocket;
          if (!u) return;
          p.WebSocket = u;
          var a = p.mesh = p.mesh || t.Mesh(i);
          a.wire || p.wire, a.wire = p.wire = o;
          function o(v) {
            try {
              if (!v || !v.url) return x && x(v);
              var g = v.url.replace(/^http/, "ws"), x = v.wire = new p.WebSocket(g);
              return x.onclose = function() {
                w(v), p.mesh.bye(v);
              }, x.onerror = function(h) {
                w(v);
              }, x.onopen = function() {
                p.mesh.hi(v);
              }, x.onmessage = function(h) {
                h && p.mesh.hear(h.data || h, v);
              }, x;
            } catch {
              p.mesh.bye(v);
            }
          }
          setTimeout(function() {
            !p.super && i.on("out", {
              dam: "hi"
            });
          }, 1);
          var y = 2 * 999;
          function w(v) {
            clearTimeout(v.defer), p.peers[v.url] && (n && v.retry <= 0 || (v.retry = (v.retry || p.retry + 1 || 60) - (-v.tried + (v.tried = +/* @__PURE__ */ new Date()) < y * 4 ? 1 : 0), v.defer = setTimeout(function g() {
              if (n && n.hidden) return setTimeout(g, y);
              o(v);
            }, y)));
          }
          var n = "" + r != typeof document && document;
        });
        var r;
      })(e, "./websocket"), e(function(c) {
        if (!(typeof Gun > "u")) {
          var t = function() {
          }, r;
          try {
            r = (Gun.window || t).localStorage;
          } catch {
          }
          r || (Gun.log("Warning: No localStorage exists to persist data to!"), r = {
            setItem: function(p, s) {
              this[p] = s;
            },
            removeItem: function(p) {
              delete this[p];
            },
            getItem: function(p) {
              return this[p];
            }
          });
          var i = JSON.stringifyAsync || function(p, s, u, a) {
            var o;
            try {
              s(o, JSON.stringify(p, u, a));
            } catch (y) {
              s(y);
            }
          };
          Gun.on("create", function p(s) {
            this.to.next(s);
            var u = s.opt;
            s.graph;
            var a = [], o, y, w, n;
            if (u.localStorage === false) return;
            u.prefix = u.file || "gun/";
            try {
              o = p[u.prefix] = p[u.prefix] || JSON.parse(w = r.getItem(u.prefix)) || {};
            } catch {
              o = p[u.prefix] = {};
            }
            w = (w || "").length, s.on("get", function(g) {
              this.to.next(g);
              var x = g.get, h, l, m, b;
              !x || !(h = x["#"]) || (l = o[h] || b, l && (m = x["."]) && !Object.plain(m) && (l = Gun.state.ify({}, m, Gun.state.is(l, m), l[m], h)), Gun.on.get.ack(g, l));
            }), s.on("put", function(g) {
              this.to.next(g);
              var x = g.put, h = x["#"], l = x["."], m = g["#"], b = g.ok || "";
              if (o[h] = Gun.state.ify(o[h], l, x[">"], x[":"], h), n && w > 4999880) {
                s.on("in", {
                  "@": m,
                  err: "localStorage max!"
                });
                return;
              }
              !g["@"] && (!g._.via || Math.random() < b["@"] / b["/"]) && a.push(m), !y && (y = setTimeout(v, 9 + w / 333));
            });
            function v() {
              if (!a.length && ((setTimeout.turn || "").s || "").length) {
                setTimeout(v, 99);
                return;
              }
              var g = a;
              clearTimeout(y), y = false, a = [], i(o, function(x, h) {
                try {
                  !x && r.setItem(u.prefix, h);
                } catch (l) {
                  x = n = l || "localStorage failure";
                }
                x && (Gun.log(x + " Consider using GUN's IndexedDB plugin for RAD for more storage space, https://gun.eco/docs/RAD#install"), s.on("localStorage:error", {
                  err: x,
                  get: u.prefix,
                  put: o
                })), w = h.length, setTimeout.each(g, function(l) {
                  s.on("in", {
                    "@": l,
                    err: x,
                    ok: 0
                  });
                }, 0, 99);
              });
            }
          });
        }
      })(e, "./localStorage");
    })(), function() {
      var P;
      if ("" + P != typeof Gun) {
        var e = function(k) {
          console.warn("Warning! Deprecated internal utility will break in next version:", k);
        }, f = Gun;
        f.fn = f.fn || {
          is: function(k) {
            return e("fn"), !!k && typeof k == "function";
          }
        }, f.bi = f.bi || {
          is: function(k) {
            return e("bi"), k instanceof Boolean || typeof k == "boolean";
          }
        }, f.num = f.num || {
          is: function(k) {
            return e("num"), !c(k) && (k - parseFloat(k) + 1 >= 0 || k === 1 / 0 || k === -1 / 0);
          }
        }, f.text = f.text || {
          is: function(k) {
            return e("text"), typeof k == "string";
          }
        }, f.text.ify = f.text.ify || function(k) {
          return e("text.ify"), f.text.is(k) ? k : typeof JSON < "u" ? JSON.stringify(k) : k && k.toString ? k.toString() : k;
        }, f.text.random = f.text.random || function(k, d) {
          e("text.random");
          var A = "";
          for (k = k || 24, d = d || "0123456789ABCDEFGHIJKLMNOPQRSTUVWXZabcdefghijklmnopqrstuvwxyz"; k > 0; ) A += d.charAt(Math.floor(Math.random() * d.length)), k--;
          return A;
        }, f.text.match = f.text.match || function(k, d) {
          var A, E;
          return e("text.match"), typeof k != "string" ? false : (typeof d == "string" && (d = {
            "=": d
          }), d = d || {}, A = d["="] || d["*"] || d[">"] || d["<"], k === A ? true : E !== d["="] ? false : (A = d["*"] || d[">"] || d["<"], k.slice(0, (A || "").length) === A ? true : E !== d["*"] ? false : E !== d[">"] && E !== d["<"] ? k >= d[">"] && k <= d["<"] : E !== d[">"] && k >= d[">"] || E !== d["<"] && k <= d["<"]));
        }, f.text.hash = f.text.hash || function(k, d) {
          if (e("text.hash"), typeof k == "string") {
            if (d = d || 0, !k.length) return d;
            for (var A = 0, E = k.length, D; A < E; ++A) D = k.charCodeAt(A), d = (d << 5) - d + D, d |= 0;
            return d;
          }
        }, f.list = f.list || {
          is: function(k) {
            return e("list"), k instanceof Array;
          }
        }, f.list.slit = f.list.slit || Array.prototype.slice, f.list.sort = f.list.sort || function(k) {
          return e("list.sort"), function(d, A) {
            return !d || !A ? 0 : (d = d[k], A = A[k], d < A ? -1 : d > A ? 1 : 0);
          };
        }, f.list.map = f.list.map || function(k, d, A) {
          return e("list.map"), T(k, d, A);
        }, f.list.index = 1, f.obj = f.boj || {
          is: function(k) {
            return e("obj"), k ? k instanceof Object && k.constructor === Object || Object.prototype.toString.call(k).match(/^\[object (\w+)\]$/)[1] === "Object" : false;
          }
        }, f.obj.put = f.obj.put || function(k, d, A) {
          return e("obj.put"), (k || {})[d] = A, k;
        }, f.obj.has = f.obj.has || function(k, d) {
          return e("obj.has"), k && Object.prototype.hasOwnProperty.call(k, d);
        }, f.obj.del = f.obj.del || function(k, d) {
          if (e("obj.del"), !!k) return k[d] = null, delete k[d], k;
        }, f.obj.as = f.obj.as || function(k, d, A, E) {
          return e("obj.as"), k[d] = k[d] || (E === A ? {} : A);
        }, f.obj.ify = f.obj.ify || function(k) {
          if (e("obj.ify"), m(k)) return k;
          try {
            k = JSON.parse(k);
          } catch {
            k = {};
          }
          return k;
        }, function() {
          var k;
          function d(A, E) {
            j(this, E) && k !== this[E] || (this[E] = A);
          }
          f.obj.to = f.obj.to || function(A, E) {
            return e("obj.to"), E = E || {}, T(A, d, E), E;
          };
        }(), f.obj.copy = f.obj.copy || function(k) {
          return e("obj.copy"), k && JSON.parse(JSON.stringify(k));
        }, function() {
          function k(d, A) {
            var E = this.n, D;
            if (!(E && (A === E || m(E) && j(E, A))) && D !== A) return true;
          }
          f.obj.empty = f.obj.empty || function(d, A) {
            return e("obj.empty"), d ? !T(d, k, {
              n: A
            }) : true;
          };
        }(), function() {
          function k(E, D) {
            if (arguments.length === 2) {
              k.r = k.r || {}, k.r[E] = D;
              return;
            }
            k.r = k.r || [], k.r.push(E);
          }
          var d = Object.keys, A;
          Object.keys = Object.keys || function(E) {
            return A(E, function(D, $, C) {
              C($);
            });
          }, f.obj.map = A = f.obj.map || function(E, D, $) {
            e("obj.map");
            var C, M = 0, I, N, L, U, R = typeof D == "function";
            if (k.r = C, d && m(E) && (L = d(E), U = true), $ = $ || {}, c(E) || L) for (I = (L || E).length; M < I; M++) {
              var q = M + f.list.index;
              if (R) {
                if (N = U ? D.call($, E[L[M]], L[M], k) : D.call($, E[M], q, k), N !== C) return N;
              } else if (D === E[U ? L[M] : M]) return L ? L[M] : q;
            }
            else for (M in E) if (R) {
              if (j(E, M) && (N = $ ? D.call($, E[M], M, k) : D(E[M], M, k), N !== C)) return N;
            } else if (D === E[M]) return M;
            return R ? k.r : f.list.index ? 0 : -1;
          };
        }(), f.time = f.time || {}, f.time.is = f.time.is || function(k) {
          return e("time"), k ? k instanceof Date : +(/* @__PURE__ */ new Date()).getTime();
        };
        var h = f.fn.is, c = f.list.is, l = f.obj, m = l.is, j = l.has, T = l.map, t = {};
        t.is = function(k) {
          return e("val.is"), k === P ? false : k === null ? true : k === 1 / 0 ? false : p(k) || i(k) || n(k) ? true : t.link.is(k) || false;
        }, t.link = t.rel = {
          _: "#"
        }, function() {
          t.link.is = function(d) {
            if (e("val.link.is"), d && d[r] && !d._ && m(d)) {
              var A = {};
              if (T(d, k, A), A.id) return A.id;
            }
            return false;
          };
          function k(d, A) {
            var E = this;
            if (E.id) return E.id = false;
            if (A == r && p(d)) E.id = d;
            else return E.id = false;
          }
        }(), t.link.ify = function(k) {
          return e("val.link.ify"), O({}, r, k);
        }, f.obj.has._ = ".";
        var r = t.link._, P, i = f.bi.is, n = f.num.is, p = f.text.is, l = f.obj, m = l.is, O = l.put, T = l.map;
        f.val = f.val || t;
        var s = {
          _: "_"
        };
        s.soul = function(k, d) {
          return e("node.soul"), k && k._ && k._[d || o];
        }, s.soul.ify = function(k, d) {
          return e("node.soul.ify"), d = typeof d == "string" ? {
            soul: d
          } : d || {}, k = k || {}, k._ = k._ || {}, k._[o] = d.soul || k._[o] || a(), k;
        }, s.soul._ = t.link._, function() {
          s.is = function(d, A, E) {
            e("node.is");
            var D;
            return m(d) && (D = s.soul(d)) ? !T(d, k, {
              as: E,
              cb: A,
              s: D,
              n: d
            }) : false;
          };
          function k(d, A) {
            if (A !== s._) {
              if (!t.is(d)) return true;
              this.cb && this.cb.call(this.as, d, A, this.n, this.s);
            }
          }
        }(), function() {
          s.ify = function(d, A, E) {
            return e("node.ify"), A ? typeof A == "string" ? A = {
              soul: A
            } : typeof A == "function" && (A = {
              map: A
            }) : A = {}, A.map && (A.node = A.map.call(E, d, P, A.node || {})), (A.node = s.soul.ify(A.node || {}, A)) && T(d, k, {
              o: A,
              as: E
            }), A.node;
          };
          function k(d, A) {
            var E = this.o, D, $;
            if (E.map) {
              D = E.map.call(this.as, d, "" + A, E.node), $ === D ? b(E.node, A) : E.node && (E.node[A] = D);
              return;
            }
            t.is(d) && (E.node[A] = d);
          }
        }();
        var l = f.obj, m = l.is, b = l.del, T = l.map, u = f.text, a = u.random, o = s.soul._, P;
        f.node = f.node || s;
        var y = f.state;
        y.lex = function() {
          return e("state.lex"), y().toString(36).replace(".", "");
        }, y.to = function(k, d, A) {
          e("state.to");
          var E = (k || {})[d];
          return m(E) && (E = B(E)), y.ify(A, d, y.is(k, d), E, s.soul(k));
        }, function() {
          y.map = function(d, A, E) {
            e("state.map");
            var D, $ = m($ = d || A) ? $ : null;
            return d = h(d = d || A) ? d : null, $ && !d ? (A = n(A) ? A : y(), $[g] = $[g] || {}, T($, k, {
              o: $,
              s: A
            }), $) : (E = E || m(A) ? A : D, A = n(A) ? A : y(), function(C, M, I, N) {
              if (!d) return k.call({
                o: I,
                s: A
              }, C, M), C;
              d.call(E || this || {}, C, M, I, N), !(j(I, M) && D === I[M]) && k.call({
                o: I,
                s: A
              }, C, M);
            });
          };
          function k(d, A) {
            g !== A && y.ify(this.o, A, this.s);
          }
        }();
        var l = f.obj;
        l.as;
        var j = l.has, m = l.is, T = l.map, B = l.copy, w = f.num, n = w.is, v = f.fn, h = v.is, g = s._, P, x = {};
        (function() {
          x.is = function(A, E, D, $) {
            return e("graph.is"), !A || !m(A) || _(A) ? false : !T(A, k, {
              cb: E,
              fn: D,
              as: $
            });
          };
          function k(A, E) {
            if (!A || E !== s.soul(A) || !s.is(A, this.fn, this.as)) return true;
            this.cb && (d.n = A, d.as = this.as, this.cb.call(d.as, A, E, d));
          }
          function d(A) {
            A && s.is(d.n, A, d.as);
          }
        })(), function() {
          x.ify = function($, C, M) {
            e("graph.ify");
            var I = {
              path: [],
              obj: $
            };
            return C ? typeof C == "string" ? C = {
              soul: C
            } : typeof C == "function" && (C.map = C) : C = {}, typeof M == "string" && (C.soul = C.soul || M, M = P), C.soul && (I.link = t.link.ify(C.soul)), C.shell = (M || {}).shell, C.graph = C.graph || {}, C.seen = C.seen || [], C.as = C.as || M, k(C, I), C.root = I.node, C.graph;
          };
          function k($, C) {
            var M;
            return (M = D($, C)) ? M : (C.env = $, C.soul = A, s.ify(C.obj, d, C) && (C.link = C.link || t.link.ify(s.soul(C.node)), C.obj !== $.shell && ($.graph[t.link.is(C.link)] = C.node)), C);
          }
          function d($, C, M) {
            var I = this, N = I.env, L, U;
            if (s._ === C && j($, t.link._)) return M._;
            if (L = E($, C, M, I, N)) {
              if (C || (I.node = I.node || M || {}, j($, s._) && s.soul($) && (I.node._ = B($._)), I.node = s.soul.ify(I.node, t.link.is(I.link)), I.link = I.link || t.link.ify(s.soul(I.node))), (U = N.map) && (U.call(N.as || {}, $, C, M, I), j(M, C))) {
                if ($ = M[C], P === $) {
                  b(M, C);
                  return;
                }
                if (!(L = E($, C, M, I, N))) return;
              }
              if (!C) return I.node;
              if (L === true) return $;
              if (U = k(N, {
                obj: $,
                path: I.path.concat(C)
              }), !!U.node) return U.link;
            }
          }
          function A($) {
            var C = this, M = t.link.is(C.link), I = C.env.graph;
            C.link = C.link || t.link.ify($), C.link[t.link._] = $, C.node && C.node[s._] && (C.node[s._][t.link._] = $), j(I, M) && (I[$] = I[M], b(I, M));
          }
          function E($, C, M, I, N) {
            var L;
            if (t.is($)) return true;
            if (m($)) return 1;
            if (L = N.invalid) return $ = L.call(N.as || {}, $, C, M), E($, C, M, I, N);
            N.err = "Invalid value at '" + I.path.concat(C).join(".") + "'!", f.list.is($) && (N.err += " Use `.set(item)` instead of an Array.");
          }
          function D($, C) {
            for (var M = $.seen, I = M.length, N; I--; ) if (N = M[I], C.obj === N.obj) return N;
            M.push(C);
          }
        }(), x.node = function(k) {
          e("graph.node");
          var d = s.soul(k);
          if (d) return O({}, d, k);
        }, function() {
          x.to = function(d, A, E) {
            if (e("graph.to"), !!d) {
              var D = {};
              return E = E || {
                seen: {}
              }, T(d[A], k, {
                obj: D,
                graph: d,
                opt: E
              }), D;
            }
          };
          function k(d, A) {
            var E, D;
            if (s._ === A) {
              if (_(d, t.link._)) return;
              this.obj[A] = B(d);
              return;
            }
            if (!(E = t.link.is(d))) {
              this.obj[A] = d;
              return;
            }
            if (D = this.opt.seen[E]) {
              this.obj[A] = D;
              return;
            }
            this.obj[A] = this.opt.seen[E] = x.to(this.graph, E, this.opt);
          }
        }();
        var h = f.fn.is, l = f.obj, m = l.is, b = l.del, j = l.has, _ = l.empty, O = l.put, T = l.map, B = l.copy, P;
        f.graph = f.graph || x;
      }
    }();
  })(Ke);
  var jt = Ke.exports, Ar = jt;
  const jr = Ot(Ar);
  var Fe = {
    exports: {}
  };
  Fe.exports;
  (function(S) {
    (function() {
      function e(c, t) {
        return t ? yt(c) : c.slice ? e[r(c)] : function(i, p) {
          c(i = {
            exports: {}
          }), e[r(p)] = i.exports;
        };
        function r(i) {
          return i.split("/").slice(-1).toString().replace(".js", "");
        }
      }
      var f = S;
      e(function(c) {
        typeof self < "u" && (c.window = self), typeof window < "u" && (c.window = window);
        var t = c.window || c, r, i = t.SEA || {};
        (i.window = c.window) && (i.window.SEA = i);
        try {
          r + "" != typeof f && (f.exports = i);
        } catch {
        }
        c.exports = i;
      })(e, "./root"), e(function(c) {
        var t = e("./root");
        try {
          t.window && location.protocol.indexOf("s") < 0 && location.host.indexOf("localhost") < 0 && !/^127\.\d+\.\d+\.\d+$/.test(location.hostname) && location.protocol.indexOf("file:") < 0 && (console.warn("HTTPS needed for WebCrypto in SEA, redirecting..."), location.protocol = "https:");
        } catch {
        }
      })(e, "./https"), e(function(c) {
        var t;
        if (t + "" == typeof btoa) {
          if (t + "" == typeof Buffer) try {
            je.Buffer = e("buffer", 1).Buffer;
          } catch {
            console.log("Please `npm install buffer` or add it to your package.json !");
          }
          je.btoa = function(r) {
            return Buffer.from(r, "binary").toString("base64");
          }, je.atob = function(r) {
            return Buffer.from(r, "base64").toString("binary");
          };
        }
      })(e, "./base64"), e(function(c) {
        e("./base64");
        function t() {
        }
        Object.assign(t, {
          from: Array.from
        }), t.prototype = Object.create(Array.prototype), t.prototype.toString = function(r, i, p) {
          r = r || "utf8", i = i || 0;
          const s = this.length;
          if (r === "hex") {
            const u = new Uint8Array(this);
            return [
              ...Array((p && p + 1 || s) - i).keys()
            ].map((a) => u[a + i].toString(16).padStart(2, "0")).join("");
          }
          if (r === "utf8") return Array.from({
            length: (p || s) - i
          }, (u, a) => String.fromCharCode(this[a + i])).join("");
          if (r === "base64") return btoa(this);
        }, c.exports = t;
      })(e, "./array"), e(function(c) {
        e("./base64");
        var t = e("./array");
        function r(...i) {
          return console.warn("new SafeBuffer() is depreciated, please use SafeBuffer.from()"), r.from(...i);
        }
        r.prototype = Object.create(Array.prototype), Object.assign(r, {
          from() {
            if (!Object.keys(arguments).length || arguments[0] == null) throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
            const i = arguments[0];
            let p;
            if (typeof i == "string") {
              const u = arguments[1] || "utf8";
              if (u === "hex") {
                const a = i.match(/([\da-fA-F]{2})/g).map((o) => parseInt(o, 16));
                if (!a || !a.length) throw new TypeError("Invalid first argument for type 'hex'.");
                p = t.from(a);
              } else if (u === "utf8" || u === "binary") {
                const a = i.length, o = new Uint16Array(a);
                Array.from({
                  length: a
                }, (y, w) => o[w] = i.charCodeAt(w)), p = t.from(o);
              } else if (u === "base64") {
                const a = atob(i), o = a.length, y = new Uint8Array(o);
                Array.from({
                  length: o
                }, (w, n) => y[n] = a.charCodeAt(n)), p = t.from(y);
              } else u === "binary" ? p = t.from(i) : console.info("SafeBuffer.from unknown encoding: " + u);
              return p;
            }
            if (i.byteLength, i.byteLength ? i.byteLength : i.length) {
              let u;
              return i instanceof ArrayBuffer && (u = new Uint8Array(i)), t.from(u || i);
            }
          },
          alloc(i, p = 0) {
            return t.from(new Uint8Array(Array.from({
              length: i
            }, () => p)));
          },
          allocUnsafe(i) {
            return t.from(new Uint8Array(Array.from({
              length: i
            })));
          },
          concat(i) {
            if (!Array.isArray(i)) throw new TypeError("First argument must be Array containing ArrayBuffer or Uint8Array instances.");
            return t.from(i.reduce((p, s) => p.concat(Array.from(s)), []));
          }
        }), r.prototype.from = r.from, r.prototype.toString = t.prototype.toString, c.exports = r;
      })(e, "./buffer"), e(function(c) {
        const t = e("./root"), r = {
          Buffer: e("./buffer")
        };
        var i = {}, p;
        if (JSON.parseAsync = JSON.parseAsync || function(u, a, o) {
          var y;
          try {
            a(y, JSON.parse(u, o));
          } catch (w) {
            a(w);
          }
        }, JSON.stringifyAsync = JSON.stringifyAsync || function(u, a, o, y) {
          var w;
          try {
            a(w, JSON.stringify(u, o, y));
          } catch (n) {
            a(n);
          }
        }, r.parse = function(u, a) {
          return new Promise(function(o, y) {
            JSON.parseAsync(u, function(w, n) {
              w ? y(w) : o(n);
            }, a);
          });
        }, r.stringify = function(u, a, o) {
          return new Promise(function(y, w) {
            JSON.stringifyAsync(u, function(n, v) {
              n ? w(n) : y(v);
            }, a, o);
          });
        }, t.window && (r.crypto = t.window.crypto || t.window.msCrypto, r.subtle = (r.crypto || i).subtle || (r.crypto || i).webkitSubtle, r.TextEncoder = t.window.TextEncoder, r.TextDecoder = t.window.TextDecoder, r.random = (u) => r.Buffer.from(r.crypto.getRandomValues(new Uint8Array(r.Buffer.alloc(u))))), !r.TextDecoder) {
          const { TextEncoder: u, TextDecoder: a } = e((p + "" == typeof f ? "." : "") + "./lib/text-encoding", 1);
          r.TextDecoder = a, r.TextEncoder = u;
        }
        if (!r.crypto) try {
          var s = e("crypto", 1);
          Object.assign(r, {
            crypto: s,
            random: (a) => r.Buffer.from(s.randomBytes(a))
          });
          const { Crypto: u } = e("@peculiar/webcrypto", 1);
          r.ossl = r.subtle = new u({
            directory: "ossl"
          }).subtle;
        } catch {
          console.log("Please `npm install @peculiar/webcrypto` or add it to your package.json !");
        }
        c.exports = r;
      })(e, "./shim"), e(function(c) {
        var t = e("./root"), r = e("./shim"), i = {};
        i.pbkdf2 = {
          hash: {
            name: "SHA-256"
          },
          iter: 1e5,
          ks: 64
        }, i.ecdsa = {
          pair: {
            name: "ECDSA",
            namedCurve: "P-256"
          },
          sign: {
            name: "ECDSA",
            hash: {
              name: "SHA-256"
            }
          }
        }, i.ecdh = {
          name: "ECDH",
          namedCurve: "P-256"
        }, i.jwk = function(p, s) {
          p = p.split(".");
          var u = p[0], a = p[1], o = {
            kty: "EC",
            crv: "P-256",
            x: u,
            y: a,
            ext: true
          };
          return o.key_ops = s ? [
            "sign"
          ] : [
            "verify"
          ], s && (o.d = s), o;
        }, i.keyToJwk = function(p) {
          return {
            kty: "oct",
            k: p.toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/\=/g, ""),
            ext: false,
            alg: "A256GCM"
          };
        }, i.recall = {
          validity: 12 * 60 * 60,
          hook: function(p) {
            return p;
          }
        }, i.check = function(p) {
          return typeof p == "string" && p.slice(0, 4) === "SEA{";
        }, i.parse = async function(s) {
          try {
            var u = typeof s == "string";
            return u && s.slice(0, 4) === "SEA{" && (s = s.slice(3)), u ? await r.parse(s) : s;
          } catch {
          }
          return s;
        }, t.opt = i, c.exports = i;
      })(e, "./settings"), e(function(c) {
        var t = e("./shim");
        c.exports = async function(r, i) {
          var p = typeof r == "string" ? r : await t.stringify(r), s = await t.subtle.digest({
            name: i || "SHA-256"
          }, new t.TextEncoder().encode(p));
          return t.Buffer.from(s);
        };
      })(e, "./sha256"), e(function(c) {
        const t = e("./shim"), r = t.subtle, i = t.ossl ? t.ossl : r, p = (s) => i.digest({
          name: "SHA-1"
        }, new ArrayBuffer(s));
        c.exports = p;
      })(e, "./sha1"), e(function(c) {
        var t = e("./root"), r = e("./shim"), i = e("./settings"), p = e("./sha256"), s;
        t.work = t.work || (async (u, a, o, y) => {
          try {
            var w = (a || {}).epub || a;
            if (y = y || {}, w instanceof Function && (o = w, w = s), u = typeof u == "string" ? u : await r.stringify(u), (y.name || "").toLowerCase().slice(0, 3) === "sha") {
              var n = r.Buffer.from(await p(u, y.name), "binary").toString(y.encode || "base64");
              if (o) try {
                o(n);
              } catch (h) {
                console.log(h);
              }
              return n;
            }
            w = w || r.random(9);
            var v = await (r.ossl || r.subtle).importKey("raw", new r.TextEncoder().encode(u), {
              name: y.name || "PBKDF2"
            }, false, [
              "deriveBits"
            ]), g = await (r.ossl || r.subtle).deriveBits({
              name: y.name || "PBKDF2",
              iterations: y.iterations || i.pbkdf2.iter,
              salt: new r.TextEncoder().encode(y.salt || w),
              hash: y.hash || i.pbkdf2.hash
            }, v, y.length || i.pbkdf2.ks * 8);
            u = r.random(u.length);
            var x = r.Buffer.from(g, "binary").toString(y.encode || "base64");
            if (o) try {
              o(x);
            } catch (h) {
              console.log(h);
            }
            return x;
          } catch (h) {
            if (console.log(h), t.err = h, t.throw) throw h;
            o && o();
            return;
          }
        }), c.exports = t.work;
      })(e, "./work"), e(function(c) {
        var t = e("./root"), r = e("./shim");
        e("./settings"), t.name = t.name || (async (i, p) => {
          try {
            if (i) try {
              i();
            } catch (s) {
              console.log(s);
            }
            return;
          } catch (s) {
            if (console.log(s), t.err = s, t.throw) throw s;
            i && i();
            return;
          }
        }), t.pair = t.pair || (async (i, p) => {
          try {
            var s = r.ossl || r.subtle, u = await r.subtle.generateKey({
              name: "ECDSA",
              namedCurve: "P-256"
            }, true, [
              "sign",
              "verify"
            ]).then(async (y) => {
              var w = {};
              w.priv = (await r.subtle.exportKey("jwk", y.privateKey)).d;
              var n = await r.subtle.exportKey("jwk", y.publicKey);
              return w.pub = n.x + "." + n.y, w;
            });
            try {
              var a = await s.generateKey({
                name: "ECDH",
                namedCurve: "P-256"
              }, true, [
                "deriveKey"
              ]).then(async (y) => {
                var w = {};
                w.epriv = (await s.exportKey("jwk", y.privateKey)).d;
                var n = await s.exportKey("jwk", y.publicKey);
                return w.epub = n.x + "." + n.y, w;
              });
            } catch (y) {
              if (t.window) throw y;
              if (y == "Error: ECDH is not a supported algorithm") console.log("Ignoring ECDH...");
              else throw y;
            }
            a = a || {};
            var o = {
              pub: u.pub,
              priv: u.priv,
              epub: a.epub,
              epriv: a.epriv
            };
            if (i) try {
              i(o);
            } catch (y) {
              console.log(y);
            }
            return o;
          } catch (y) {
            if (console.log(y), t.err = y, t.throw) throw y;
            i && i();
            return;
          }
        }), c.exports = t.pair;
      })(e, "./pair"), e(function(c) {
        var t = e("./root"), r = e("./shim"), i = e("./settings"), p = e("./sha256"), s;
        t.sign = t.sign || (async (u, a, o, y) => {
          try {
            if (y = y || {}, !(a || y).priv) {
              if (!t.I) throw "No signing key.";
              a = await t.I(null, {
                what: u,
                how: "sign",
                why: y.why
              });
            }
            if (s === u) throw "`undefined` not allowed.";
            var w = await i.parse(u), n = y.check = y.check || w;
            if (t.verify && (t.opt.check(n) || n && n.s && n.m) && s !== await t.verify(n, a)) {
              var m = await i.parse(n);
              if (y.raw || (m = "SEA" + await r.stringify(m)), o) try {
                o(m);
              } catch (j) {
                console.log(j);
              }
              return m;
            }
            var v = a.pub, g = a.priv, x = i.jwk(v, g), h = await p(w), l = await (r.ossl || r.subtle).importKey("jwk", x, {
              name: "ECDSA",
              namedCurve: "P-256"
            }, false, [
              "sign"
            ]).then((b) => (r.ossl || r.subtle).sign({
              name: "ECDSA",
              hash: {
                name: "SHA-256"
              }
            }, b, new Uint8Array(h))), m = {
              m: w,
              s: r.Buffer.from(l, "binary").toString(y.encode || "base64")
            };
            if (y.raw || (m = "SEA" + await r.stringify(m)), o) try {
              o(m);
            } catch (b) {
              console.log(b);
            }
            return m;
          } catch (b) {
            if (console.log(b), t.err = b, t.throw) throw b;
            o && o();
            return;
          }
        }), c.exports = t.sign;
      })(e, "./sign"), e(function(c) {
        var t = e("./root"), r = e("./shim"), i = e("./settings"), p = e("./sha256"), s;
        t.verify = t.verify || (async (o, y, w, n) => {
          try {
            var v = await i.parse(o);
            if (y === false) {
              var g = await i.parse(v.m);
              if (w) try {
                w(g);
              } catch (T) {
                console.log(T);
              }
              return g;
            }
            n = n || {};
            var x = y.pub || y, h = t.opt.slow_leak ? await t.opt.slow_leak(x) : await (r.ossl || r.subtle).importKey("jwk", i.jwk(x), {
              name: "ECDSA",
              namedCurve: "P-256"
            }, false, [
              "verify"
            ]), l = await p(v.m), m, b, j, _;
            try {
              if (m = r.Buffer.from(v.s, n.encode || "base64"), b = new Uint8Array(m), j = await (r.ossl || r.subtle).verify({
                name: "ECDSA",
                hash: {
                  name: "SHA-256"
                }
              }, h, b, new Uint8Array(l)), !j) throw "Signature did not match.";
            } catch {
              if (t.opt.fallback) return await t.opt.fall_verify(o, y, w, n);
            }
            var O = j ? await i.parse(v.m) : s;
            if (w) try {
              w(O);
            } catch (T) {
              console.log(T);
            }
            return O;
          } catch (T) {
            if (console.log(T), t.err = T, t.throw) throw T;
            w && w();
            return;
          }
        }), c.exports = t.verify;
        var u = {};
        t.opt.slow_leak = (o) => {
          if (u[o]) return u[o];
          var y = i.jwk(o);
          return u[o] = (r.ossl || r.subtle).importKey("jwk", y, {
            name: "ECDSA",
            namedCurve: "P-256"
          }, false, [
            "verify"
          ]), u[o];
        };
        var a = t.opt;
        t.opt.fall_verify = async function(o, y, w, n, v) {
          if (v === t.opt.fallback) throw "Signature did not match";
          v = v || 1;
          var g = o || "";
          o = t.opt.unpack(o) || o;
          var x = await i.parse(o), h = y.pub || y, l = await t.opt.slow_leak(h), m = v <= t.opt.fallback ? r.Buffer.from(await r.subtle.digest({
            name: "SHA-256"
          }, new r.TextEncoder().encode(await i.parse(x.m)))) : await p(x.m), b, j, _;
          try {
            if (b = r.Buffer.from(x.s, n.encode || "base64"), j = new Uint8Array(b), _ = await (r.ossl || r.subtle).verify({
              name: "ECDSA",
              hash: {
                name: "SHA-256"
              }
            }, l, j, new Uint8Array(m)), !_) throw "Signature did not match.";
          } catch {
            try {
              b = r.Buffer.from(x.s, "utf8"), j = new Uint8Array(b), _ = await (r.ossl || r.subtle).verify({
                name: "ECDSA",
                hash: {
                  name: "SHA-256"
                }
              }, l, j, new Uint8Array(m));
            } catch {
              if (!_) throw "Signature did not match.";
            }
          }
          var O = _ ? await i.parse(x.m) : s;
          if (a.fall_soul = g["#"], a.fall_key = g["."], a.fall_val = o, a.fall_state = g[">"], w) try {
            w(O);
          } catch (T) {
            console.log(T);
          }
          return O;
        }, t.opt.fallback = 2;
      })(e, "./verify"), e(function(c) {
        var t = e("./shim"), r = e("./settings"), i = e("./sha256");
        const p = async (s, u, a) => {
          const o = s + (u || t.random(8)).toString("utf8"), y = t.Buffer.from(await i(o), "binary"), w = r.keyToJwk(y);
          return await t.subtle.importKey("jwk", w, {
            name: "AES-GCM"
          }, false, [
            "encrypt",
            "decrypt"
          ]);
        };
        c.exports = p;
      })(e, "./aeskey"), e(function(c) {
        var t = e("./root"), r = e("./shim");
        e("./settings");
        var i = e("./aeskey"), p;
        t.encrypt = t.encrypt || (async (s, u, a, o) => {
          try {
            o = o || {};
            var y = (u || o).epriv || u;
            if (p === s) throw "`undefined` not allowed.";
            if (!y) {
              if (!t.I) throw "No encryption key.";
              u = await t.I(null, {
                what: s,
                how: "encrypt",
                why: o.why
              }), y = u.epriv || u;
            }
            var w = typeof s == "string" ? s : await r.stringify(s), n = {
              s: r.random(9),
              iv: r.random(15)
            }, v = await i(y, n.s, o).then((x) => r.subtle.encrypt({
              name: o.name || "AES-GCM",
              iv: new Uint8Array(n.iv)
            }, x, new r.TextEncoder().encode(w))), g = {
              ct: r.Buffer.from(v, "binary").toString(o.encode || "base64"),
              iv: n.iv.toString(o.encode || "base64"),
              s: n.s.toString(o.encode || "base64")
            };
            if (o.raw || (g = "SEA" + await r.stringify(g)), a) try {
              a(g);
            } catch (x) {
              console.log(x);
            }
            return g;
          } catch (x) {
            if (console.log(x), t.err = x, t.throw) throw x;
            a && a();
            return;
          }
        }), c.exports = t.encrypt;
      })(e, "./encrypt"), e(function(c) {
        var t = e("./root"), r = e("./shim"), i = e("./settings"), p = e("./aeskey");
        t.decrypt = t.decrypt || (async (s, u, a, o) => {
          try {
            o = o || {};
            var y = (u || o).epriv || u;
            if (!y) {
              if (!t.I) throw "No decryption key.";
              u = await t.I(null, {
                what: s,
                how: "decrypt",
                why: o.why
              }), y = u.epriv || u;
            }
            var w = await i.parse(s), n, v, g;
            try {
              n = r.Buffer.from(w.s, o.encode || "base64"), v = r.Buffer.from(w.iv, o.encode || "base64"), g = r.Buffer.from(w.ct, o.encode || "base64");
              var x = await p(y, n, o).then((l) => r.subtle.decrypt({
                name: o.name || "AES-GCM",
                iv: new Uint8Array(v),
                tagLength: 128
              }, l, new Uint8Array(g)));
            } catch {
              if (o.encode === "utf8") throw "Could not decrypt";
              if (t.opt.fallback) return o.encode = "utf8", await t.decrypt(s, u, a, o);
            }
            var h = await i.parse(new r.TextDecoder("utf8").decode(x));
            if (a) try {
              a(h);
            } catch (l) {
              console.log(l);
            }
            return h;
          } catch (l) {
            if (console.log(l), t.err = l, t.throw) throw l;
            a && a();
            return;
          }
        }), c.exports = t.decrypt;
      })(e, "./decrypt"), e(function(c) {
        var t = e("./root"), r = e("./shim");
        e("./settings"), t.secret = t.secret || (async (p, s, u, a) => {
          try {
            if (a = a || {}, !s || !s.epriv || !s.epub) {
              if (!t.I) throw "No secret mix.";
              s = await t.I(null, {
                what: p,
                how: "secret",
                why: a.why
              });
            }
            var o = p.epub || p, y = s.epub, w = s.epriv, n = r.ossl || r.subtle, v = i(o), g = Object.assign({
              public: await n.importKey(...v, true, [])
            }, {
              name: "ECDH",
              namedCurve: "P-256"
            }), x = i(y, w), h = await n.importKey(...x, false, [
              "deriveBits"
            ]).then(async (m) => {
              var b = await n.deriveBits(g, m, 256), j = new Uint8Array(b), _ = await n.importKey("raw", j, {
                name: "AES-GCM",
                length: 256
              }, true, [
                "encrypt",
                "decrypt"
              ]);
              return n.exportKey("jwk", _).then(({ k: O }) => O);
            }), l = h;
            if (u) try {
              u(l);
            } catch (m) {
              console.log(m);
            }
            return l;
          } catch (m) {
            if (console.log(m), t.err = m, t.throw) throw m;
            u && u();
            return;
          }
        });
        var i = (p, s) => {
          var [u, a] = p.split("."), o = s ? {
            d: s
          } : {};
          return [
            "jwk",
            Object.assign(o, {
              x: u,
              y: a,
              kty: "EC",
              crv: "P-256",
              ext: true
            }),
            {
              name: "ECDH",
              namedCurve: "P-256"
            }
          ];
        };
        c.exports = t.secret;
      })(e, "./secret"), e(function(c) {
        var t = e("./root");
        t.certify = t.certify || (async (r, i = {}, p, s, u = {}) => {
          try {
            if (console.log("SEA.certify() is an early experimental community supported method that may change API behavior without warning in any future version."), r = (() => {
              var l = [];
              if (r) {
                if ((typeof r == "string" || Array.isArray(r)) && r.indexOf("*") > -1) return "*";
                if (typeof r == "string") return r;
                if (Array.isArray(r)) {
                  if (r.length === 1 && r[0]) return typeof r[0] == "object" && r[0].pub ? r[0].pub : typeof r[0] == "string" ? r[0] : null;
                  r.map((m) => {
                    typeof m == "string" ? l.push(m) : typeof m == "object" && m.pub && l.push(m.pub);
                  });
                }
                return typeof r == "object" && r.pub ? r.pub : l.length > 0 ? l : null;
              }
            })(), !r) return console.log("No certificant found.");
            const o = u.expiry && (typeof u.expiry == "number" || typeof u.expiry == "string") ? parseFloat(u.expiry) : null, y = (i || {}).read ? i.read : null, w = (i || {}).write ? i.write : typeof i == "string" || Array.isArray(i) || i["+"] || i["#"] || i["."] || i["="] || i["*"] || i[">"] || i["<"] ? i : null, n = (u || {}).block || (u || {}).blacklist || (u || {}).ban || {}, v = n.read && (typeof n.read == "string" || (n.read || {})["#"]) ? n.read : null, g = typeof n == "string" ? n : n.write && (typeof n.write == "string" || n.write["#"]) ? n.write : null;
            if (!y && !w) return console.log("No policy found.");
            const x = JSON.stringify({
              c: r,
              ...o ? {
                e: o
              } : {},
              ...y ? {
                r: y
              } : {},
              ...w ? {
                w
              } : {},
              ...v ? {
                rb: v
              } : {},
              ...g ? {
                wb: g
              } : {}
            });
            var a = await t.sign(x, p, null, {
              raw: 1
            });
            if (u.raw || (a = "SEA" + JSON.stringify(a)), s) try {
              s(a);
            } catch (l) {
              console.log(l);
            }
            return a;
          } catch (o) {
            if (t.err = o, t.throw) throw o;
            s && s();
            return;
          }
        }), c.exports = t.certify;
      })(e, "./certify"), e(function(c) {
        var t = e("./shim"), r = e("./root");
        r.work = e("./work"), r.sign = e("./sign"), r.verify = e("./verify"), r.encrypt = e("./encrypt"), r.decrypt = e("./decrypt"), r.certify = e("./certify"), r.random = r.random || t.random, r.Buffer = r.Buffer || e("./buffer"), r.keyid = r.keyid || (async (i) => {
          try {
            const p = t.Buffer.concat(i.replace(/-/g, "+").replace(/_/g, "/").split(".").map((o) => t.Buffer.from(o, "base64"))), s = t.Buffer.concat([
              t.Buffer.from([
                153,
                p.length / 256,
                p.length % 256
              ]),
              p
            ]), u = await sha1hash(s), a = t.Buffer.from(u, "binary");
            return a.toString("hex", a.length - 8);
          } catch (p) {
            throw console.log(p), p;
          }
        }), ((r.window || {}).GUN || {}).SEA = r, c.exports = r;
      })(e, "./sea"), e(function(c) {
        var t = e("./sea"), r, i;
        t.window ? r = t.window.GUN || {
          chain: {}
        } : r = e((i + "" == typeof f ? "." : "") + "./gun", 1), t.GUN = r;
        function p(u) {
          this._ = {
            $: this
          };
        }
        p.prototype = function() {
          function u() {
          }
          return u.prototype = r.chain, new u();
        }(), p.prototype.constructor = p, r.chain.user = function(u) {
          var a = this, y = a.back(-1), o;
          if (u) return u = t.opt.pub((u._ || "")["#"]) || u, y.get("~" + u);
          if (o = y.back("user")) return o;
          var y = y._, w = y, n = w.opt.uuid || s;
          return (w = (o = w.user = a.chain(new p()))._).opt = {}, w.opt.uuid = function(v) {
            var g = n(), x = y.user;
            return !x || !(x = x.is) || !(x = x.pub) || (g = "~" + x + "/" + g, v && v.call && v(null, g)), g;
          }, o;
        };
        function s() {
          return r.state().toString(36).replace(".", "");
        }
        r.User = p, p.GUN = r, p.SEA = r.SEA = t, c.exports = p;
      })(e, "./user"), e(function(c) {
        var t, r = "" + t != typeof GUN ? GUN || {
          chain: {}
        } : e(("" + t == typeof f ? "." : "") + "./gun", 1);
        r.chain.then = function(i, p) {
          var s = this, u = new Promise(function(a, o) {
            s.once(a, p);
          });
          return i ? u.then(i) : u;
        };
      })(e, "./then"), e(function(c) {
        var t = e("./user"), r = t.SEA, i = t.GUN, p = function() {
        };
        t.prototype.create = function(...s) {
          var u = typeof s[0] == "object" && (s[0].pub || s[0].epub) ? s[0] : typeof s[1] == "object" && (s[1].pub || s[1].epub) ? s[1] : null, a = u && (u.pub || u.epub) ? u.pub : typeof s[0] == "string" ? s[0] : null, o = u && (u.pub || u.epub) ? u : a && typeof s[1] == "string" ? s[1] : null, y = s.filter((l) => typeof l == "function")[0] || null, w = s && s.length > 1 && typeof s[s.length - 1] == "object" ? s[s.length - 1] : {}, n = this, v = n._, g = n.back(-1);
          if (y = y || p, w = w || {}, w.check !== false) {
            var x;
            if (a || (x = "No user."), (o || "").length < 8 && (x = "Password too short!"), x) return y({
              err: i.log(x)
            }), n;
          }
          if (v.ing) return (y || p)({
            err: i.log("User is already being created or authenticated!"),
            wait: true
          }), n;
          v.ing = true;
          var h = {};
          return h.a = function(l) {
            if (h.pubs = l, l && !w.already) {
              var m = {
                err: i.log("User already created!")
              };
              v.ing = false, (y || p)(m), n.leave();
              return;
            }
            h.salt = String.random(64), r.work(o, h.salt, h.b);
          }, h.b = function(l) {
            h.proof = l, u ? h.c(u) : r.pair(h.c);
          }, h.c = function(l) {
            var m;
            h.pair = l || {}, (m = v.root.user) && (m._.sea = l, m.is = {
              pub: l.pub,
              epub: l.epub,
              alias: a
            }), h.data = {
              pub: l.pub
            }, h.d();
          }, h.d = function() {
            h.data.alias = a, h.e();
          }, h.e = function() {
            h.data.epub = h.pair.epub, r.encrypt({
              priv: h.pair.priv,
              epriv: h.pair.epriv
            }, h.proof, h.f, {
              raw: 1
            });
          }, h.f = function(l) {
            h.data.auth = JSON.stringify({
              ek: l,
              s: h.salt
            }), h.g(h.data.auth);
          }, h.g = function(l) {
            var m;
            h.data.auth = h.data.auth || l, g.get(m = "~" + h.pair.pub).put(h.data).on(h.h);
            var b = {};
            b[m] = {
              "#": m
            }, g.get("~@" + a).put(b).get(m).on(h.i);
          }, h.h = function(l, m, b, j) {
            j.off(), h.h.ok = 1, h.i();
          }, h.i = function(l, m, b, j) {
            j && (h.i.ok = 1, j.off()), !(!h.h.ok || !h.i.ok) && (v.ing = false, y({
              ok: 0,
              pub: h.pair.pub
            }), p === y && (u ? n.auth(u) : n.auth(a, o)));
          }, g.get("~@" + a).once(h.a), n;
        }, t.prototype.leave = function(s, u) {
          var a = this, o = a.back(-1)._.user;
          if (o && (delete o.is, delete o._.is, delete o._.sea), r.window) try {
            var y = {};
            y = r.window.sessionStorage, delete y.recall, delete y.pair;
          } catch {
          }
          return a;
        };
      })(e, "./create"), e(function(c) {
        var t = e("./user"), r = t.SEA, i = t.GUN, p = function() {
        };
        t.prototype.auth = function(...u) {
          var a = typeof u[0] == "object" && (u[0].pub || u[0].epub) ? u[0] : typeof u[1] == "object" && (u[1].pub || u[1].epub) ? u[1] : null, o = !a && typeof u[0] == "string" ? u[0] : null, y = (o || a && !(a.priv && a.epriv)) && typeof u[1] == "string" ? u[1] : null, w = u.filter((b) => typeof b == "function")[0] || null, n = u && u.length > 1 && typeof u[u.length - 1] == "object" ? u[u.length - 1] : {}, v = this, g = v._, x = v.back(-1);
          if (g.ing) return (w || p)({
            err: i.log("User is already being created or authenticated!"),
            wait: true
          }), v;
          g.ing = true;
          var h = {}, l, m = 9;
          return h.a = function(b) {
            if (!b) return h.b();
            if (!b.pub) {
              var j = [];
              return Object.keys(b).forEach(function(_) {
                _ != "_" && j.push(b[_]);
              }), h.b(j);
            }
            if (h.name) return h.f(b);
            h.c((h.data = b).auth);
          }, h.b = function(b) {
            var j = (h.list = (h.list || []).concat(b || [])).shift();
            if (l === j) {
              if (h.name) return h.err("Your user account is not published for dApps to access, please consider syncing it online, or allowing local access by adding your device as a peer.");
              if (o && m--) {
                x.get("~@" + o).once(h.a);
                return;
              }
              return h.err("Wrong user or password.");
            }
            x.get(j).once(h.a);
          }, h.c = function(b) {
            if (l === b) return h.b();
            if (typeof b == "string") return h.c(s(b));
            r.work(y, (h.auth = b).s, h.d, h.enc);
          }, h.d = function(b) {
            r.decrypt(h.auth.ek, b, h.e, h.enc);
          }, h.e = function(b) {
            if (l === b) return h.enc ? (h.enc = null, h.b()) : (h.enc = {
              encode: "utf8"
            }, h.c(h.auth));
            h.half = b, h.f(h.data);
          }, h.f = function(b) {
            var j = h.half || {}, _ = h.data || {};
            h.g(h.lol = {
              pub: b.pub || _.pub,
              epub: b.epub || _.epub,
              priv: b.priv || j.priv,
              epriv: b.epriv || j.epriv
            });
          }, h.g = function(b) {
            if (!b || !b.pub || !b.epub) return h.b();
            h.pair = b;
            var j = x._.user, _ = j._;
            _.tag;
            var O = _.opt;
            _ = j._ = x.get("~" + b.pub)._, _.opt = O, j.is = {
              pub: b.pub,
              epub: b.epub,
              alias: o || b.pub
            }, _.sea = h.pair, g.ing = false;
            try {
              y && l == (s(g.root.graph["~" + b.pub].auth) || "")[":"] && (n.shuffle = n.change = y);
            } catch {
            }
            if (n.change ? h.z() : (w || p)(_), r.window && (v.back("user")._.opt || n).remember) try {
              var T = {};
              T = r.window.sessionStorage, T.recall = true, T.pair = JSON.stringify(b);
            } catch {
            }
            try {
              x._.tag.auth ? x._.on("auth", _) : setTimeout(function() {
                x._.on("auth", _);
              }, 1);
            } catch (B) {
              i.log("Your 'auth' callback crashed with:", B);
            }
          }, h.h = function(b) {
            if (!b) return h.b();
            if (o = b.alias, o || (o = b.alias = "~" + a.pub), !b.auth) return h.g(a);
            a = null, h.c((h.data = b).auth);
          }, h.z = function() {
            h.salt = String.random(64), r.work(n.change, h.salt, h.y);
          }, h.y = function(b) {
            r.encrypt({
              priv: h.pair.priv,
              epriv: h.pair.epriv
            }, b, h.x, {
              raw: 1
            });
          }, h.x = function(b) {
            h.w(JSON.stringify({
              ek: b,
              s: h.salt
            }));
          }, h.w = function(b) {
            if (n.shuffle) {
              console.log("migrate core account from UTF8 & shuffle");
              var j = {};
              Object.keys(h.data).forEach(function(_) {
                j[_] = h.data[_];
              }), delete j._, j.auth = b, x.get("~" + h.pair.pub).put(j);
            }
            x.get("~" + h.pair.pub).get("auth").put(b, w || p);
          }, h.err = function(b) {
            var j = {
              err: i.log(b || "User cannot be found!")
            };
            g.ing = false, (w || p)(j);
          }, h.plugin = function(b) {
            if (!(h.name = b)) return h.err();
            var j = [
              b
            ];
            b[0] !== "~" && (j[1] = "~" + b, j[2] = "~@" + b), h.b(j);
          }, a ? a.priv && a.epriv ? h.g(a) : x.get("~" + a.pub).once(h.h) : o ? x.get("~@" + o).once(h.a) : !o && !y && r.name(h.plugin), v;
        };
        function s(u) {
          if (typeof u != "string") return u;
          try {
            u = JSON.parse(u);
          } catch {
            u = {};
          }
          return u;
        }
      })(e, "./auth"), e(function(c) {
        var t = e("./user"), r = t.SEA;
        t.GUN, t.prototype.recall = function(i, p) {
          var s = this, u = s.back(-1);
          if (i = i || {}, i && i.sessionStorage) {
            if (r.window) try {
              var a = {};
              a = r.window.sessionStorage, a && (u._.opt.remember = true, (s.back("user")._.opt || i).remember = true, (a.recall || a.pair) && u.user().auth(JSON.parse(a.pair), p));
            } catch {
            }
            return s;
          }
          return s;
        };
      })(e, "./recall"), e(function(c) {
        var t = e("./user"), r = t.SEA, i = t.GUN, p = function() {
        };
        t.prototype.pair = function() {
          var s = this, u;
          try {
            u = new Proxy({
              DANGER: "\u2620"
            }, {
              get: function(a, o, y) {
                if (!(!s.is || !(s._ || "").sea)) return s._.sea[o];
              }
            });
          } catch {
          }
          return u;
        }, t.prototype.delete = async function(s, u, a) {
          console.log("user.delete() IS DEPRECATED AND WILL BE MOVED TO A MODULE!!!");
          var o = this;
          o.back(-1);
          var y = o.back("user");
          try {
            y.auth(s, u, function(w) {
              var n = (y.is || {}).pub;
              y.map().once(function() {
                this.put(null);
              }), y.leave(), (a || p)({
                ok: 0
              });
            });
          } catch (w) {
            i.log("User.delete failed! Error:", w);
          }
          return o;
        }, t.prototype.alive = async function() {
          console.log("user.alive() IS DEPRECATED!!!");
          const s = this.back(-1);
          try {
            return await authRecall(s), s._.user._;
          } catch {
            const a = "No session!";
            throw i.log(a), {
              err: a
            };
          }
        }, t.prototype.trust = async function(s) {
          console.log("`.trust` API MAY BE DELETED OR CHANGED OR RENAMED, DO NOT USE!"), i.is(s) && s.get("pub").get((u, a) => {
            console.log(u, a);
          }), s.get("trust").get(path).put(theirPubkey);
        }, t.prototype.grant = function(s, u) {
          console.log("`.grant` API MAY BE DELETED OR CHANGED OR RENAMED, DO NOT USE!");
          var a = this, o = a.back(-1).user(), y = o._.sea, w = "";
          return a.back(function(n) {
            n.is || (w += n.get || "");
          }), async function() {
            var n, v = await o.get("grant").get(y.pub).get(w).then();
            v = await r.decrypt(v, y), v || (v = r.random(16).toString(), n = await r.encrypt(v, y), o.get("grant").get(y.pub).get(w).put(n));
            var g = s.get("pub").then(), x = s.get("epub").then();
            g = await g, x = await x;
            var h = await r.secret(x, y);
            n = await r.encrypt(v, h), o.get("grant").get(g).get(w).put(n, u);
          }(), a;
        }, t.prototype.secret = function(s, u) {
          console.log("`.secret` API MAY BE DELETED OR CHANGED OR RENAMED, DO NOT USE!");
          var a = this, o = a.back(-1).user(), y = o.pair(), w = "";
          return a.back(function(n) {
            n.is || (w += n.get || "");
          }), async function() {
            var n, v = await o.get("trust").get(y.pub).get(w).then();
            v = await r.decrypt(v, y), v || (v = r.random(16).toString(), n = await r.encrypt(v, y), o.get("trust").get(y.pub).get(w).put(n)), n = await r.encrypt(s, v), a.put(n, u);
          }(), a;
        }, c.exports = t;
      })(e, "./share"), e(function(c) {
        var t = e("./sea"), r = e("./settings"), i, p = (t.window || "").GUN || e(("" + i == typeof f ? "." : "") + "./gun", 1);
        p.on("opt", function(n) {
          n.sea || (n.sea = {
            own: {}
          }, n.on("put", s, n)), this.to.next(n);
        });
        function s(n) {
          var v = this, g = v.as, x = n.put, h = x["#"], l = x["."], m = x[":"], b = x[">"], j = n["#"], _;
          if (!(!h || !l)) {
            if ((n._ || "").faith && (g.opt || "").faith && typeof n._ == "function") {
              t.opt.pack(x, function(T) {
                t.verify(T, false, function(B) {
                  x["="] = t.opt.unpack(B), v.to.next(n);
                });
              });
              return;
            }
            var O = function(T) {
              g.on("in", {
                "@": j,
                err: n.err = T
              });
            };
            if ((n._ || "").DBG && ((n._ || "").DBG.c = +/* @__PURE__ */ new Date()), 0 <= h.indexOf("<?") && (_ = parseFloat(h.split("<?")[1] || ""), _ && b < p.state() - _ * 1e3)) {
              (_ = n._) && _.stun && _.stun--;
              return;
            }
            if (h === "~@") {
              s.alias(v, n, m, l, h, g, O);
              return;
            }
            if (h.slice(0, 2) === "~@") {
              s.pubs(v, n, m, l, h, g, O);
              return;
            }
            if (_ = t.opt.pub(h)) {
              s.pub(v, n, m, l, h, g, O, g.user || "", _);
              return;
            }
            if (0 <= h.indexOf("#")) {
              s.hash(v, n, m, l, h, g, O);
              return;
            }
            s.any(v, n, m, l, h, g, O, g.user || "");
          }
        }
        s.hash = function(n, v, g, x, h, l, m) {
          t.work(g, null, function(b) {
            function j(_) {
              let O = "";
              for (let T = 0; T < _.length; T++) O += T - 1 & 1 ? "" : String.fromCharCode(parseInt(_.substring(T - 1, T + 1), 16));
              return btoa(O);
            }
            if (b && b === x.split("#").slice(-1)[0]) return n.to.next(v);
            if (b && b === j(x.split("#").slice(-1)[0])) return n.to.next(v);
            m("Data hash not same as hash!");
          }, {
            name: "SHA-256"
          });
        }, s.alias = function(n, v, g, x, h, l, m) {
          if (!g) return m("Data must exist!");
          if ("~@" + x === a(g)) return n.to.next(v);
          m("Alias not same!");
        }, s.pubs = function(n, v, g, x, h, l, m) {
          if (!g) return m("Alias must exist!");
          if (x === a(g)) return n.to.next(v);
          m("Alias not same!");
        }, s.pub = async function(n, v, g, x, h, l, m, b, j) {
          var _;
          const O = await r.parse(g) || {}, T = (B, P, k) => {
            if (B.m && B.s && P && j) return t.verify(B, j, (d) => {
              if (i !== d && i !== d.e && v.put[">"] && v.put[">"] > parseFloat(d.e)) return m("Certificate expired.");
              if (i !== d && d.c && d.w && (d.c === P || d.c.indexOf("*") > -1)) {
                let E = h.indexOf("/") > -1 ? h.replace(h.substring(0, h.indexOf("/") + 1), "") : "";
                String.match = String.match || p.text.match;
                const D = Array.isArray(d.w) ? d.w : typeof d.w == "object" || typeof d.w == "string" ? [
                  d.w
                ] : [];
                for (const $ of D) if (String.match(E, $["#"]) && String.match(x, $["."]) || !$["."] && String.match(E, $["#"]) || !$["#"] && String.match(x, $["."]) || String.match(E ? E + "/" + x : x, $["#"] || $)) {
                  if ($["+"] && $["+"].indexOf("*") > -1 && E && E.indexOf(P) == -1 && x.indexOf(P) == -1) return m(`Path "${E}" or key "${x}" must contain string "${P}".`);
                  if (d.wb && (typeof d.wb == "string" || (d.wb || {})["#"])) {
                    var A = n.as.root.$.back(-1);
                    return typeof d.wb == "string" && d.wb.slice(0, 1) !== "~" && (A = A.get("~" + j)), A.get(d.wb).get(P).once((C) => C && (C === 1 || C === true) ? m(`Certificant ${P} blocked.`) : k(d));
                  }
                  return k(d);
                }
                return m("Certificate verification fail.");
              }
            });
          };
          if (x === "pub" && "~" + j === h) return g === j ? n.to.next(v) : m("Account not same!");
          if ((_ = b.is) && _.pub && !O["*"] && !O["+"] && (j === _.pub || j !== _.pub && ((v._.msg || {}).opt || {}).cert)) {
            t.opt.pack(v.put, (B) => {
              t.sign(B, b._.sea, async function(P) {
                if (i === P) return m(t.err || "Signature fail.");
                if (v.put[":"] = {
                  ":": _ = t.opt.unpack(P.m),
                  "~": P.s
                }, v.put["="] = _, j === b.is.pub) {
                  (_ = a(g)) && ((l.sea.own[_] = l.sea.own[_] || {})[j] = 1), JSON.stringifyAsync(v.put[":"], function(k, d) {
                    return k ? m(k || "Stringify error.") : (v.put[":"] = d, n.to.next(v));
                  });
                  return;
                }
                if (j !== b.is.pub && ((v._.msg || {}).opt || {}).cert) {
                  const k = await r.parse(v._.msg.opt.cert);
                  k && k.m && k.s && T(k, b.is.pub, (d) => {
                    v.put[":"]["+"] = k, v.put[":"]["*"] = b.is.pub, JSON.stringifyAsync(v.put[":"], function(A, E) {
                      return A ? m(A || "Stringify error.") : (v.put[":"] = E, n.to.next(v));
                    });
                  });
                }
              }, {
                raw: 1
              });
            });
            return;
          }
          t.opt.pack(v.put, (B) => {
            t.verify(B, O["*"] || j, function(P) {
              var k;
              if (P = t.opt.unpack(P), i === P) return m("Unverified data.");
              if ((k = a(P)) && j === t.opt.pub(k) && ((l.sea.own[k] = l.sea.own[k] || {})[j] = 1), O["+"] && O["+"].m && O["+"].s && O["*"]) T(O["+"], O["*"], (d) => (v.put["="] = P, n.to.next(v)));
              else return v.put["="] = P, n.to.next(v);
            });
          });
        }, s.any = function(n, v, g, x, h, l, m, b) {
          if (l.opt.secure) return m("Soul missing public key at '" + x + "'.");
          l.on("secure", function(j) {
            if (this.off(), !l.opt.secure) return n.to.next(j);
            m("Data cannot be changed.");
          }).on.on("secure", v);
        };
        var u = p.valid, a = function(n, v) {
          return typeof (v = u(n)) == "string" && v;
        };
        (p.state || "").ify;
        var o = /[^\w_-]/;
        t.opt.pub = function(n) {
          if (n && (n = n.split("~"), !(!n || !(n = n[1])) && (n = n.split(o).slice(0, 2), !(!n || n.length != 2) && (n[0] || "")[0] !== "@"))) return n = n.slice(0, 2).join("."), n;
        }, t.opt.stringy = function(n) {
        }, t.opt.pack = function(n, v, g, x, h) {
          var l, m;
          if (t.opt.check(n)) return v(n);
          n && n["#"] && n["."] && n[">"] && (l = n[":"], m = 1), JSON.parseAsync(m ? l : n, function(b, j) {
            var _ = i !== (j || "")[":"] && (j || "")["~"];
            if (!_) {
              v(n);
              return;
            }
            v({
              m: {
                "#": h || n["#"],
                ".": g || n["."],
                ":": (j || "")[":"],
                ">": n[">"] || p.state.is(x, g)
              },
              s: _
            });
          });
        };
        var y = t.opt;
        t.opt.unpack = function(n, v, g) {
          var x;
          if (i !== n) {
            if (n && i !== (x = n[":"])) return x;
            if (v = v || y.fall_key, !g && y.fall_val && (g = {}, g[v] = y.fall_val), !(!v || !g)) {
              if (n === g[v] || !t.opt.check(g[v])) return n;
              var h = g && g._ && g._["#"] || y.fall_soul, l = p.state.is(g, v) || y.fall_state;
              if (n && n.length === 4 && h === n[0] && v === n[1] && w(l) === w(n[3])) return n[2];
              if (l < t.opt.shuffle_attack) return n;
            }
          }
        }, t.opt.shuffle_attack = 15463296e5;
        var w = Math.floor;
      })(e, "./index");
    })();
  })(Fe);
  Fe.exports;
  var Or = typeof window < "u" ? window.Gun : jt;
  const ht = "#", Y = "_";
  Or.chain.unset = function(S) {
    return this && S && S[Y] && S[Y].put && S[Y].put[Y] && S[Y].put[Y][ht] && this.put({
      [S[Y].put[Y][ht]]: null
    }), this;
  };
  V = jr([
    "http://localhost:3000/gun"
  ]);
  V.clear = function() {
    localStorage.clear(), sessionStorage.clear(), indexedDB.databases().then((S) => {
      for (let e of S) indexedDB.deleteDatabase(e.name);
    }), console.log("Local data cleared");
  };
  V.lookup = async function(S, e) {
    var _a;
    const f = await V.get(S).get(e).then(), c = ((_a = f == null ? void 0 : f._) == null ? void 0 : _a[">"]) && Object.keys(f._[">"])[0];
    if (!c) return null;
    const t = await V.get(c).then();
    return t ? {
      id: e,
      ...t
    } : null;
  };
  const { ref: dt, inject: Er, provide: Tr, computed: Br, onMounted: Cr, onUnmounted: Ir } = await he("vue");
  Nr = function(S) {
    const e = dt(null), f = dt([]), c = [
      "in"
    ], t = async (r) => {
      const i = Object.fromEntries(r.entries());
      console.log(i);
      const p = V.get(`location-plugin/${S}`).put(i);
      return V.get("locations").set(p), p;
    };
    Cr(async () => {
      V.get(`location-plugin/${S}`).once((r) => {
        r && (e.value = {
          lat: Number(r.lat),
          lng: Number(r.lng),
          zoom: Number(r.zoom)
        });
      }), V.get(S).get("relations").map().once(async (r) => {
        if (r) {
          const i = await V.lookup("spheres", r.one);
          c.includes(r.type) && V.get(`location-plugin/${r.one}`).once((p) => {
            p && f.value.push({
              id: r.one,
              title: i.title,
              position: {
                lat: Number(p.lat),
                lng: Number(p.lng)
              }
            });
          });
        }
      });
    }), Tr("map", {
      current: e,
      places: f,
      createLocation: t
    });
  };
  Lr = function() {
    const S = Er("map");
    if (!S) throw new Error("Composable must have an map provider.");
    return S;
  };
});
export {
  Mr as _,
  __tla,
  Pr as a,
  V as g,
  Nr as m,
  Lr as u
};
