import { importShared as he, __tla as __tla_0 } from "./__federation_fn_import-D2rRIDFP.js";
import { c as it, b as wt, a as xe } from "./_commonjs-dynamic-modules-D9Q0Knnx.js";
let _r, kr, Q, Ar, jr;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  let bt, kt, _t, St, xt;
  ({ defineComponent: bt } = await he("vue"));
  ({ renderSlot: kt, normalizeClass: _t, openBlock: St, createElementBlock: xt } = await he("vue"));
  kr = bt({
    __name: "Title",
    props: {
      float: {
        type: String,
        default: "left",
        required: false
      }
    },
    setup(x) {
      return (e, f) => (St(), xt("h3", {
        class: _t(`my-auto text-${x.float} text-lg text-gray-800 dark:text-gray-100 font-semibold`)
      }, [
        kt(e.$slots, "default")
      ], 2));
    }
  });
  (function() {
    try {
      if (typeof document < "u") {
        var x = document.createElement("style");
        x.appendChild(document.createTextNode(".mapdiv[data-v-e7ebb206]{width:100%;height:100%}.advanced-marker-wrapper{display:none}.mapdiv .advanced-marker-wrapper{display:inline-block}.custom-control-wrapper[data-v-d099a3a6]{display:none}.mapdiv .custom-control-wrapper[data-v-d099a3a6]{display:inline-block}.info-window-wrapper[data-v-cbe1707b]{display:none}.mapdiv .info-window-wrapper[data-v-cbe1707b]{display:inline-block}.custom-marker-wrapper[data-v-2d2d343a]{display:none}.mapdiv .custom-marker-wrapper[data-v-2d2d343a]{display:inline-block}")), document.head.appendChild(x);
      }
    } catch (e) {
      console.error("vite-plugin-css-injected-by-js", e);
    }
  })();
  var At = Object.defineProperty, jt = (x, e, f) => e in x ? At(x, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: f
  }) : x[e] = f, Re = (x, e, f) => (jt(x, typeof e != "symbol" ? e + "" : e, f), f);
  const { defineComponent: J, ref: G, provide: le, watch: F, onMounted: ot, onBeforeUnmount: oe, markRaw: V, toRef: ee, openBlock: at, createElementBlock: st, createElementVNode: ut, renderSlot: lt, normalizeProps: Ot, guardReactiveProps: Tt, computed: ce, Comment: $e, inject: Z, mergeProps: Et, createCommentVNode: Ct } = await he("vue"), ae = Symbol("map"), se = Symbol("api"), De = Symbol("marker"), Pe = Symbol("markerCluster"), Se = Symbol("CustomMarker"), ft = Symbol("mapTilesLoaded"), pe = [
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
  function $t(x, e, f, c) {
    function t(r) {
      return r instanceof f ? r : new f(function(i) {
        i(r);
      });
    }
    return new (f || (f = Promise))(function(r, i) {
      function p(s) {
        try {
          l(c.next(s));
        } catch (o) {
          i(o);
        }
      }
      function a(s) {
        try {
          l(c.throw(s));
        } catch (o) {
          i(o);
        }
      }
      function l(s) {
        s.done ? r(s.value) : t(s.value).then(p, a);
      }
      l((c = c.apply(x, [])).next());
    });
  }
  var Dt = function x(e, f) {
    if (e === f) return true;
    if (e && f && typeof e == "object" && typeof f == "object") {
      if (e.constructor !== f.constructor) return false;
      var c, t, r;
      if (Array.isArray(e)) {
        if (c = e.length, c != f.length) return false;
        for (t = c; t-- !== 0; ) if (!x(e[t], f[t])) return false;
        return true;
      }
      if (e.constructor === RegExp) return e.source === f.source && e.flags === f.flags;
      if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === f.valueOf();
      if (e.toString !== Object.prototype.toString) return e.toString() === f.toString();
      if (r = Object.keys(e), c = r.length, c !== Object.keys(f).length) return false;
      for (t = c; t-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(f, r[t])) return false;
      for (t = c; t-- !== 0; ) {
        var i = r[t];
        if (!x(e[i], f[i])) return false;
      }
      return true;
    }
    return e !== e && f !== f;
  };
  const qe = "__googleMapsScriptId";
  var ue;
  (function(x) {
    x[x.INITIALIZED = 0] = "INITIALIZED", x[x.LOADING = 1] = "LOADING", x[x.SUCCESS = 2] = "SUCCESS", x[x.FAILURE = 3] = "FAILURE";
  })(ue || (ue = {}));
  class ie {
    constructor({ apiKey: e, authReferrerPolicy: f, channel: c, client: t, id: r = qe, language: i, libraries: p = [], mapIds: a, nonce: l, region: s, retries: o = 3, url: y = "https://maps.googleapis.com/maps/api/js", version: b }) {
      if (this.callbacks = [], this.done = false, this.loading = false, this.errors = [], this.apiKey = e, this.authReferrerPolicy = f, this.channel = c, this.client = t, this.id = r || qe, this.language = i, this.libraries = p, this.mapIds = a, this.nonce = l, this.region = s, this.retries = o, this.url = y, this.version = b, ie.instance) {
        if (!Dt(this.options, ie.instance.options)) throw new Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(ie.instance.options)}`);
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
        let i, p, a, l = "The Google Maps JavaScript API", s = "google", o = "importLibrary", y = "__ib__", b = document, n = window;
        n = n[s] || (n[s] = {});
        const v = n.maps || (n.maps = {}), g = /* @__PURE__ */ new Set(), S = new URLSearchParams(), h = () => i || (i = new Promise((u, m) => $t(this, void 0, void 0, function* () {
          var w;
          yield p = b.createElement("script"), p.id = this.id, S.set("libraries", [
            ...g
          ] + "");
          for (a in r) S.set(a.replace(/[A-Z]/g, (j) => "_" + j[0].toLowerCase()), r[a]);
          S.set("callback", s + ".maps." + y), p.src = this.url + "?" + S, v[y] = u, p.onerror = () => i = m(Error(l + " could not load.")), p.nonce = this.nonce || ((w = b.querySelector("script[nonce]")) === null || w === void 0 ? void 0 : w.nonce) || "", b.head.append(p);
        })));
        v[o] ? console.warn(l + " only loads once. Ignoring:", r) : v[o] = (u, ...m) => g.add(u) && h().then(() => v[o](u, ...m));
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
  function Pt(x) {
    return class extends x.OverlayView {
      constructor(e) {
        super(), Re(this, "element"), Re(this, "opts");
        const { element: f, ...c } = e;
        this.element = f, this.opts = c, this.opts.map && this.setMap(this.opts.map);
      }
      getPosition() {
        return this.opts.position ? this.opts.position instanceof x.LatLng ? this.opts.position : new x.LatLng(this.opts.position) : null;
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
  let ze;
  const Ze = [
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
  ], Mt = J({
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
    emits: Ze,
    setup(x, { emit: e }) {
      const f = G(), c = G(false), t = G(), r = G(), i = G(false);
      le(ae, t), le(se, r), le(ft, i);
      const p = () => {
        const o = {
          ...x
        };
        Object.keys(o).forEach((n) => {
          o[n] === void 0 && delete o[n];
        });
        const y = (n) => {
          var v;
          return n ? {
            position: (v = r.value) == null ? void 0 : v.ControlPosition[n]
          } : {};
        }, b = {
          scaleControlOptions: x.scaleControlStyle ? {
            style: x.scaleControlStyle
          } : {},
          panControlOptions: y(x.panControlPosition),
          zoomControlOptions: y(x.zoomControlPosition),
          rotateControlOptions: y(x.rotateControlPosition),
          streetViewControlOptions: y(x.streetViewControlPosition),
          fullscreenControlOptions: y(x.fullscreenControlPosition),
          cameraControlOptions: y(x.cameraControlPosition),
          disableDefaultUI: x.disableDefaultUi
        };
        return {
          ...o,
          ...b
        };
      }, a = F([
        r,
        t
      ], ([o, y]) => {
        const b = o, n = y;
        b && n && (b.event.addListenerOnce(n, "tilesloaded", () => {
          i.value = true;
        }), setTimeout(a, 0));
      }, {
        immediate: true
      }), l = () => {
        try {
          const { apiKey: o, region: y, version: b, language: n, libraries: v, nonce: g } = x;
          ze = new ie({
            apiKey: o,
            region: y,
            version: b,
            language: n,
            libraries: v,
            nonce: g
          });
        } catch (o) {
          console.error(o);
        }
      }, s = (o) => {
        r.value = V(o.maps), t.value = V(new o.maps.Map(f.value, p()));
        const y = Pt(r.value);
        r.value[Se] = y, Ze.forEach((n) => {
          var v;
          (v = t.value) == null || v.addListener(n, (g) => e(n, g));
        }), c.value = true;
        const b = Object.keys(x).filter((n) => ![
          "apiPromise",
          "apiKey",
          "version",
          "libraries",
          "region",
          "language",
          "center",
          "zoom",
          "nonce"
        ].includes(n)).map((n) => ee(x, n));
        F([
          () => x.center,
          () => x.zoom,
          ...b
        ], ([n, v], [g, S]) => {
          var h, u, m;
          const { center: w, zoom: j, ..._ } = p();
          (h = t.value) == null || h.setOptions(_), v !== void 0 && v !== S && ((u = t.value) == null || u.setZoom(v));
          const O = !g || n.lng !== g.lng || n.lat !== g.lat;
          n && O && ((m = t.value) == null || m.panTo(n));
        });
      };
      return ot(() => {
        x.apiPromise && x.apiPromise instanceof Promise ? x.apiPromise.then(s) : (l(), ze.load().then(s));
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
  }), ct = (x, e) => {
    const f = x.__vccOpts || x;
    for (const [c, t] of e) f[c] = t;
    return f;
  }, It = {
    ref: "mapRef",
    class: "mapdiv"
  };
  function Bt(x, e, f, c, t, r) {
    return at(), st("div", null, [
      ut("div", It, null, 512),
      lt(x.$slots, "default", Ot(Tt({
        ready: x.ready,
        map: x.map,
        api: x.api,
        mapTilesLoaded: x.mapTilesLoaded
      })), void 0, true)
    ]);
  }
  const Nt = ct(Mt, [
    [
      "render",
      Bt
    ],
    [
      "__scopeId",
      "data-v-e7ebb206"
    ]
  ]);
  function Lt(x) {
    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x.default : x;
  }
  var Gt = function x(e, f) {
    if (e === f) return true;
    if (e && f && typeof e == "object" && typeof f == "object") {
      if (e.constructor !== f.constructor) return false;
      var c, t, r;
      if (Array.isArray(e)) {
        if (c = e.length, c != f.length) return false;
        for (t = c; t-- !== 0; ) if (!x(e[t], f[t])) return false;
        return true;
      }
      if (e.constructor === RegExp) return e.source === f.source && e.flags === f.flags;
      if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === f.valueOf();
      if (e.toString !== Object.prototype.toString) return e.toString() === f.toString();
      if (r = Object.keys(e), c = r.length, c !== Object.keys(f).length) return false;
      for (t = c; t-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(f, r[t])) return false;
      for (t = c; t-- !== 0; ) {
        var i = r[t];
        if (!x(e[i], f[i])) return false;
      }
      return true;
    }
    return e !== e && f !== f;
  };
  const H = Lt(Gt), Je = [
    "click",
    "drag",
    "dragend",
    "dragstart",
    "gmp-click"
  ], Ut = J({
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
    emits: Je,
    setup(x, { emit: e, expose: f, slots: c }) {
      const t = G(), r = ce(() => {
        var b;
        return (b = c.default) == null ? void 0 : b.call(c).some((n) => n.type !== $e);
      }), i = ee(x, "options"), p = ee(x, "pinOptions"), a = G(), l = Z(ae, G()), s = Z(se, G()), o = Z(Pe, G()), y = ce(() => !!(o.value && s.value && a.value instanceof google.maps.marker.AdvancedMarkerElement));
      return F([
        l,
        i,
        p
      ], async (b, [n, v, g]) => {
        var S, h, u;
        const m = !H(i.value, v) || !H(p.value, g) || l.value !== n;
        if (!l.value || !s.value || !m) return;
        const { AdvancedMarkerElement: w, PinElement: j } = s.value.marker;
        if (a.value) {
          const { map: _, content: O, ...E } = i.value;
          Object.assign(a.value, {
            content: r.value ? t.value : p.value ? new j(p.value).element : O,
            ...E
          }), y.value && ((S = o.value) == null || S.removeMarker(a.value), (h = o.value) == null || h.addMarker(a.value));
        } else r.value ? i.value.content = t.value : p.value && (i.value.content = new j(p.value).element), a.value = V(new w(i.value)), y.value ? (u = o.value) == null || u.addMarker(a.value) : a.value.map = l.value, Je.forEach((_) => {
          var O;
          (O = a.value) == null || O.addListener(_, (E) => e(_, E));
        });
      }, {
        immediate: true
      }), oe(() => {
        var b, n;
        a.value && ((b = s.value) == null || b.event.clearInstanceListeners(a.value), y.value ? (n = o.value) == null || n.removeMarker(a.value) : a.value.map = null);
      }), le(De, a), f({
        marker: a
      }), {
        hasSlotContent: r,
        markerRef: t
      };
    }
  }), Rt = {
    key: 0,
    class: "advanced-marker-wrapper"
  };
  function qt(x, e, f, c, t, r) {
    return x.hasSlotContent ? (at(), st("div", Rt, [
      ut("div", Et({
        ref: "markerRef"
      }, x.$attrs), [
        lt(x.$slots, "default")
      ], 16)
    ])) : Ct("", true);
  }
  const zt = ct(Ut, [
    [
      "render",
      qt
    ]
  ]), Zt = (x) => x === "Marker", Jt = (x) => x === Se, de = (x, e, f, c) => {
    const t = G(), r = Z(ae, G()), i = Z(se, G()), p = Z(Pe, G()), a = ce(() => !!(p.value && i.value && (t.value instanceof i.value.Marker || t.value instanceof i.value[Se])));
    return F([
      r,
      f
    ], (l, [s, o]) => {
      var y, b, n;
      const v = !H(f.value, o) || r.value !== s;
      !r.value || !i.value || !v || (t.value ? (t.value.setOptions(f.value), a.value && ((y = p.value) == null || y.removeMarker(t.value), (b = p.value) == null || b.addMarker(t.value))) : (Zt(x) ? t.value = V(new i.value[x](f.value)) : Jt(x) ? t.value = V(new i.value[x](f.value)) : t.value = V(new i.value[x]({
        ...f.value,
        map: r.value
      })), a.value ? (n = p.value) == null || n.addMarker(t.value) : t.value.setMap(r.value), e.forEach((g) => {
        var S;
        (S = t.value) == null || S.addListener(g, (h) => c(g, h));
      })));
    }, {
      immediate: true
    }), oe(() => {
      var l, s;
      t.value && ((l = i.value) == null || l.event.clearInstanceListeners(t.value), a.value ? (s = p.value) == null || s.removeMarker(t.value) : t.value.setMap(null));
    }), t;
  }, Ke = [
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
    emits: Ke,
    setup(x, { emit: e, expose: f, slots: c }) {
      const t = ee(x, "options"), r = de("Marker", Ke, t, e);
      return le(De, r), f({
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
    setup(x, { emit: e }) {
      const f = ee(x, "options");
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
    setup(x, { emit: e }) {
      const f = ee(x, "options");
      return {
        polygon: de("Polygon", pe, f, e)
      };
    },
    render: () => null
  });
  const Fe = pe.concat([
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
    emits: Fe,
    setup(x, { emit: e }) {
      const f = ee(x, "options");
      return {
        rectangle: de("Rectangle", Fe, f, e)
      };
    },
    render: () => null
  });
  const Ve = pe.concat([
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
    emits: Ve,
    setup(x, { emit: e }) {
      const f = ee(x, "options");
      return {
        circle: de("Circle", Ve, f, e)
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
    setup(x, { emit: e }) {
      const f = G(null), c = Z(ae, G()), t = Z(se, G()), r = Z(ft, G(false)), i = F([
        r,
        t,
        f
      ], ([l, s, o]) => {
        s && l && o && (p(x.position), e("content:loaded"), setTimeout(i, 0));
      }, {
        immediate: true
      }), p = (l) => {
        if (c.value && t.value && f.value) {
          const s = t.value.ControlPosition[l];
          c.value.controls[s].push(f.value);
        }
      }, a = (l) => {
        if (c.value && t.value) {
          let s = null;
          const o = t.value.ControlPosition[l];
          c.value.controls[o].forEach((y, b) => {
            y === f.value && (s = b);
          }), s !== null && c.value.controls[o].removeAt(s);
        }
      };
      return oe(() => a(x.position)), F(() => x.position, (l, s) => {
        a(s), p(l);
      }), F(() => x.index, (l) => {
        l && f.value && (f.value.index = x.index);
      }), {
        controlRef: f
      };
    }
  });
  const He = [
    "closeclick",
    "content_changed",
    "domready",
    "position_changed",
    "visible",
    "zindex_changed"
  ];
  J({
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
      ...He,
      "update:modelValue"
    ],
    setup(x, { slots: e, emit: f, expose: c }) {
      const t = G(), r = G(), i = Z(ae, G()), p = Z(se, G()), a = Z(De, G());
      let l, s = x.modelValue;
      const o = ce(() => {
        var v;
        return (v = e.default) == null ? void 0 : v.call(e).some((g) => g.type !== $e);
      }), y = (v) => {
        s = v, f("update:modelValue", v);
      }, b = (v) => {
        t.value && (t.value.open({
          map: i.value,
          anchor: a.value,
          ...v
        }), y(true));
      }, n = () => {
        t.value && (t.value.close(), y(false));
      };
      return ot(() => {
        F([
          i,
          () => x.options
        ], ([v, g], [S, h]) => {
          var u;
          const m = !H(g, h) || i.value !== S;
          i.value && p.value && m && (t.value ? (t.value.setOptions({
            ...g,
            content: o.value ? r.value : g.content
          }), a.value || b()) : (t.value = V(new p.value.InfoWindow({
            ...g,
            content: o.value ? r.value : g.content
          })), a.value && (l = a.value.addListener("click", () => {
            b();
          })), (!a.value || s) && b(), He.forEach((w) => {
            var j;
            (j = t.value) == null || j.addListener(w, (_) => f(w, _));
          }), (u = t.value) == null || u.addListener("closeclick", () => y(false))));
        }, {
          immediate: true
        }), F(() => x.modelValue, (v) => {
          v !== s && (v ? b() : n());
        });
      }), oe(() => {
        var v;
        l && l.remove(), t.value && ((v = p.value) == null || v.event.clearInstanceListeners(t.value), n());
      }), c({
        infoWindow: t,
        open: b,
        close: n
      }), {
        infoWindow: t,
        infoWindowRef: r,
        hasSlotContent: o,
        open: b,
        close: n
      };
    }
  });
  const We = [
    Int8Array,
    Uint8Array,
    Uint8ClampedArray,
    Int16Array,
    Uint16Array,
    Int32Array,
    Uint32Array,
    Float32Array,
    Float64Array
  ], Ae = 1, ve = 8;
  class Me {
    static from(e) {
      if (!(e instanceof ArrayBuffer)) throw new Error("Data must be an instance of ArrayBuffer.");
      const [f, c] = new Uint8Array(e, 0, 2);
      if (f !== 219) throw new Error("Data does not appear to be in a KDBush format.");
      const t = c >> 4;
      if (t !== Ae) throw new Error(`Got v${t} data when expected v${Ae}.`);
      const r = We[c & 15];
      if (!r) throw new Error("Unrecognized array type.");
      const [i] = new Uint16Array(e, 2, 1), [p] = new Uint32Array(e, 4, 1);
      return new Me(p, i, r, e);
    }
    constructor(e, f = 64, c = Float64Array, t) {
      if (isNaN(e) || e < 0) throw new Error(`Unpexpected numItems value: ${e}.`);
      this.numItems = +e, this.nodeSize = Math.min(Math.max(+f, 2), 65535), this.ArrayType = c, this.IndexArrayType = e < 65536 ? Uint16Array : Uint32Array;
      const r = We.indexOf(this.ArrayType), i = e * 2 * this.ArrayType.BYTES_PER_ELEMENT, p = e * this.IndexArrayType.BYTES_PER_ELEMENT, a = (8 - p % 8) % 8;
      if (r < 0) throw new Error(`Unexpected typed array class: ${c}.`);
      t && t instanceof ArrayBuffer ? (this.data = t, this.ids = new this.IndexArrayType(this.data, ve, e), this.coords = new this.ArrayType(this.data, ve + p + a, e * 2), this._pos = e * 2, this._finished = true) : (this.data = new ArrayBuffer(ve + i + p + a), this.ids = new this.IndexArrayType(this.data, ve, e), this.coords = new this.ArrayType(this.data, ve + p + a, e * 2), this._pos = 0, this._finished = false, new Uint8Array(this.data, 0, 2).set([
        219,
        (Ae << 4) + r
      ]), new Uint16Array(this.data, 2, 1)[0] = f, new Uint32Array(this.data, 4, 1)[0] = e);
    }
    add(e, f) {
      const c = this._pos >> 1;
      return this.ids[c] = c, this.coords[this._pos++] = e, this.coords[this._pos++] = f, c;
    }
    finish() {
      const e = this._pos >> 1;
      if (e !== this.numItems) throw new Error(`Added ${e} items when expected ${this.numItems}.`);
      return Ce(this.ids, this.coords, this.nodeSize, 0, this.numItems - 1, 0), this._finished = true, this;
    }
    range(e, f, c, t) {
      if (!this._finished) throw new Error("Data not yet indexed - call index.finish().");
      const { ids: r, coords: i, nodeSize: p } = this, a = [
        0,
        r.length - 1,
        0
      ], l = [];
      for (; a.length; ) {
        const s = a.pop() || 0, o = a.pop() || 0, y = a.pop() || 0;
        if (o - y <= p) {
          for (let g = y; g <= o; g++) {
            const S = i[2 * g], h = i[2 * g + 1];
            S >= e && S <= c && h >= f && h <= t && l.push(r[g]);
          }
          continue;
        }
        const b = y + o >> 1, n = i[2 * b], v = i[2 * b + 1];
        n >= e && n <= c && v >= f && v <= t && l.push(r[b]), (s === 0 ? e <= n : f <= v) && (a.push(y), a.push(b - 1), a.push(1 - s)), (s === 0 ? c >= n : t >= v) && (a.push(b + 1), a.push(o), a.push(1 - s));
      }
      return l;
    }
    within(e, f, c) {
      if (!this._finished) throw new Error("Data not yet indexed - call index.finish().");
      const { ids: t, coords: r, nodeSize: i } = this, p = [
        0,
        t.length - 1,
        0
      ], a = [], l = c * c;
      for (; p.length; ) {
        const s = p.pop() || 0, o = p.pop() || 0, y = p.pop() || 0;
        if (o - y <= i) {
          for (let g = y; g <= o; g++) Ye(r[2 * g], r[2 * g + 1], e, f) <= l && a.push(t[g]);
          continue;
        }
        const b = y + o >> 1, n = r[2 * b], v = r[2 * b + 1];
        Ye(n, v, e, f) <= l && a.push(t[b]), (s === 0 ? e - c <= n : f - c <= v) && (p.push(y), p.push(b - 1), p.push(1 - s)), (s === 0 ? e + c >= n : f + c >= v) && (p.push(b + 1), p.push(o), p.push(1 - s));
      }
      return a;
    }
  }
  function Ce(x, e, f, c, t, r) {
    if (t - c <= f) return;
    const i = c + t >> 1;
    pt(x, e, i, c, t, r), Ce(x, e, f, c, i - 1, 1 - r), Ce(x, e, f, i + 1, t, 1 - r);
  }
  function pt(x, e, f, c, t, r) {
    for (; t > c; ) {
      if (t - c > 600) {
        const l = t - c + 1, s = f - c + 1, o = Math.log(l), y = 0.5 * Math.exp(2 * o / 3), b = 0.5 * Math.sqrt(o * y * (l - y) / l) * (s - l / 2 < 0 ? -1 : 1), n = Math.max(c, Math.floor(f - s * y / l + b)), v = Math.min(t, Math.floor(f + (l - s) * y / l + b));
        pt(x, e, f, n, v, r);
      }
      const i = e[2 * f + r];
      let p = c, a = t;
      for (me(x, e, c, f), e[2 * t + r] > i && me(x, e, c, t); p < a; ) {
        for (me(x, e, p, a), p++, a--; e[2 * p + r] < i; ) p++;
        for (; e[2 * a + r] > i; ) a--;
      }
      e[2 * c + r] === i ? me(x, e, c, a) : (a++, me(x, e, a, t)), a <= f && (c = a + 1), f <= a && (t = a - 1);
    }
  }
  function me(x, e, f, c) {
    je(x, f, c), je(e, 2 * f, 2 * c), je(e, 2 * f + 1, 2 * c + 1);
  }
  function je(x, e, f) {
    const c = x[e];
    x[e] = x[f], x[f] = c;
  }
  function Ye(x, e, f, c) {
    const t = x - f, r = e - c;
    return t * t + r * r;
  }
  const Kt = {
    minZoom: 0,
    maxZoom: 16,
    minPoints: 2,
    radius: 40,
    extent: 512,
    nodeSize: 64,
    log: false,
    generateId: false,
    reduce: null,
    map: (x) => x
  }, Xe = Math.fround || /* @__PURE__ */ ((x) => (e) => (x[0] = +e, x[0]))(new Float32Array(1)), ne = 2, X = 3, Oe = 4, Y = 5, ht = 6;
  class dt {
    constructor(e) {
      this.options = Object.assign(Object.create(Kt), e), this.trees = new Array(this.options.maxZoom + 1), this.stride = this.options.reduce ? 7 : 6, this.clusterProps = [];
    }
    load(e) {
      const { log: f, minZoom: c, maxZoom: t } = this.options;
      f && console.time("total time");
      const r = `prepare ${e.length} points`;
      f && console.time(r), this.points = e;
      const i = [];
      for (let a = 0; a < e.length; a++) {
        const l = e[a];
        if (!l.geometry) continue;
        const [s, o] = l.geometry.coordinates, y = Xe(ke(s)), b = Xe(_e(o));
        i.push(y, b, 1 / 0, a, -1, 1), this.options.reduce && i.push(0);
      }
      let p = this.trees[t + 1] = this._createTree(i);
      f && console.timeEnd(r);
      for (let a = t; a >= c; a--) {
        const l = +Date.now();
        p = this.trees[a] = this._createTree(this._cluster(p, a)), f && console.log("z%d: %d clusters in %dms", a, p.numItems, +Date.now() - l);
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
      const p = this.trees[this._limitZoom(f)], a = p.range(ke(c), _e(i), ke(r), _e(t)), l = p.data, s = [];
      for (const o of a) {
        const y = this.stride * o;
        s.push(l[y + Y] > 1 ? Qe(l, y, this.clusterProps) : this.points[l[y + X]]);
      }
      return s;
    }
    getChildren(e) {
      const f = this._getOriginId(e), c = this._getOriginZoom(e), t = "No cluster with the specified id.", r = this.trees[c];
      if (!r) throw new Error(t);
      const i = r.data;
      if (f * this.stride >= i.length) throw new Error(t);
      const p = this.options.radius / (this.options.extent * Math.pow(2, c - 1)), a = i[f * this.stride], l = i[f * this.stride + 1], s = r.within(a, l, p), o = [];
      for (const y of s) {
        const b = y * this.stride;
        i[b + Oe] === e && o.push(i[b + Y] > 1 ? Qe(i, b, this.clusterProps) : this.points[i[b + X]]);
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
      const t = this.trees[this._limitZoom(e)], r = Math.pow(2, e), { extent: i, radius: p } = this.options, a = p / i, l = (c - a) / r, s = (c + 1 + a) / r, o = {
        features: []
      };
      return this._addTileFeatures(t.range((f - a) / r, l, (f + 1 + a) / r, s), t.data, f, c, r, o), f === 0 && this._addTileFeatures(t.range(1 - a / r, l, 1, s), t.data, r, c, r, o), f === r - 1 && this._addTileFeatures(t.range(0, l, a / r, s), t.data, -1, c, r, o), o.features.length ? o : null;
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
        const a = p.properties;
        if (a && a.cluster ? r + a.point_count <= t ? r += a.point_count : r = this._appendLeaves(e, a.cluster_id, c, t, r) : r < t ? r++ : e.push(p), e.length === c) break;
      }
      return r;
    }
    _createTree(e) {
      const f = new Me(e.length / this.stride | 0, this.options.nodeSize, Float32Array);
      for (let c = 0; c < e.length; c += this.stride) f.add(e[c], e[c + 1]);
      return f.finish(), f.data = e, f;
    }
    _addTileFeatures(e, f, c, t, r, i) {
      for (const p of e) {
        const a = p * this.stride, l = f[a + Y] > 1;
        let s, o, y;
        if (l) s = yt(f, a, this.clusterProps), o = f[a], y = f[a + 1];
        else {
          const v = this.points[f[a + X]];
          s = v.properties;
          const [g, S] = v.geometry.coordinates;
          o = ke(g), y = _e(S);
        }
        const b = {
          type: 1,
          geometry: [
            [
              Math.round(this.options.extent * (o * r - c)),
              Math.round(this.options.extent * (y * r - t))
            ]
          ],
          tags: s
        };
        let n;
        l || this.options.generateId ? n = f[a + X] : n = this.points[f[a + X]].id, n !== void 0 && (b.id = n), i.features.push(b);
      }
    }
    _limitZoom(e) {
      return Math.max(this.options.minZoom, Math.min(Math.floor(+e), this.options.maxZoom + 1));
    }
    _cluster(e, f) {
      const { radius: c, extent: t, reduce: r, minPoints: i } = this.options, p = c / (t * Math.pow(2, f)), a = e.data, l = [], s = this.stride;
      for (let o = 0; o < a.length; o += s) {
        if (a[o + ne] <= f) continue;
        a[o + ne] = f;
        const y = a[o], b = a[o + 1], n = e.within(a[o], a[o + 1], p), v = a[o + Y];
        let g = v;
        for (const S of n) {
          const h = S * s;
          a[h + ne] > f && (g += a[h + Y]);
        }
        if (g > v && g >= i) {
          let S = y * v, h = b * v, u, m = -1;
          const w = ((o / s | 0) << 5) + (f + 1) + this.points.length;
          for (const j of n) {
            const _ = j * s;
            if (a[_ + ne] <= f) continue;
            a[_ + ne] = f;
            const O = a[_ + Y];
            S += a[_] * O, h += a[_ + 1] * O, a[_ + Oe] = w, r && (u || (u = this._map(a, o, true), m = this.clusterProps.length, this.clusterProps.push(u)), r(u, this._map(a, _)));
          }
          a[o + Oe] = w, l.push(S / g, h / g, 1 / 0, w, -1, g), r && l.push(m);
        } else {
          for (let S = 0; S < s; S++) l.push(a[o + S]);
          if (g > 1) for (const S of n) {
            const h = S * s;
            if (!(a[h + ne] <= f)) {
              a[h + ne] = f;
              for (let u = 0; u < s; u++) l.push(a[h + u]);
            }
          }
        }
      }
      return l;
    }
    _getOriginId(e) {
      return e - this.points.length >> 5;
    }
    _getOriginZoom(e) {
      return (e - this.points.length) % 32;
    }
    _map(e, f, c) {
      if (e[f + Y] > 1) {
        const i = this.clusterProps[e[f + ht]];
        return c ? Object.assign({}, i) : i;
      }
      const t = this.points[e[f + X]].properties, r = this.options.map(t);
      return c && r === t ? Object.assign({}, r) : r;
    }
  }
  function Qe(x, e, f) {
    return {
      type: "Feature",
      id: x[e + X],
      properties: yt(x, e, f),
      geometry: {
        type: "Point",
        coordinates: [
          Ft(x[e]),
          Vt(x[e + 1])
        ]
      }
    };
  }
  function yt(x, e, f) {
    const c = x[e + Y], t = c >= 1e4 ? `${Math.round(c / 1e3)}k` : c >= 1e3 ? `${Math.round(c / 100) / 10}k` : c, r = x[e + ht], i = r === -1 ? {} : Object.assign({}, f[r]);
    return Object.assign(i, {
      cluster: true,
      cluster_id: x[e + X],
      point_count: c,
      point_count_abbreviated: t
    });
  }
  function ke(x) {
    return x / 360 + 0.5;
  }
  function _e(x) {
    const e = Math.sin(x * Math.PI / 180), f = 0.5 - 0.25 * Math.log((1 + e) / (1 - e)) / Math.PI;
    return f < 0 ? 0 : f > 1 ? 1 : f;
  }
  function Ft(x) {
    return (x - 0.5) * 360;
  }
  function Vt(x) {
    const e = (180 - x * 360) * Math.PI / 180;
    return 360 * Math.atan(Math.exp(e)) / Math.PI - 90;
  }
  function Ie(x, e) {
    var f = {};
    for (var c in x) Object.prototype.hasOwnProperty.call(x, c) && e.indexOf(c) < 0 && (f[c] = x[c]);
    if (x != null && typeof Object.getOwnPropertySymbols == "function") for (var t = 0, c = Object.getOwnPropertySymbols(x); t < c.length; t++) e.indexOf(c[t]) < 0 && Object.prototype.propertyIsEnumerable.call(x, c[t]) && (f[c[t]] = x[c[t]]);
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
  class ge {
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
  const Ht = (x, e, f, c) => {
    const t = vt(x.getBounds(), e, c);
    return f.filter((r) => t.contains(z.getPosition(r)));
  }, vt = (x, e, f) => {
    const { northEast: c, southWest: t } = Wt(x, e), r = Yt({
      northEast: c,
      southWest: t
    }, f);
    return Xt(r, e);
  }, et = (x, e, f) => {
    const c = vt(x, e, f), t = c.getNorthEast(), r = c.getSouthWest();
    return [
      r.lng(),
      r.lat(),
      t.lng(),
      t.lat()
    ];
  }, Wt = (x, e) => ({
    northEast: e.fromLatLngToDivPixel(x.getNorthEast()),
    southWest: e.fromLatLngToDivPixel(x.getSouthWest())
  }), Yt = ({ northEast: x, southWest: e }, f) => (x.x += f, x.y -= f, e.x -= f, e.y += f, {
    northEast: x,
    southWest: e
  }), Xt = ({ northEast: x, southWest: e }, f) => {
    const c = f.fromDivPixelToLatLng(e), t = f.fromDivPixelToLatLng(x);
    return new google.maps.LatLngBounds(c, t);
  };
  class mt {
    constructor({ maxZoom: e = 16 }) {
      this.maxZoom = e;
    }
    noop({ markers: e }) {
      return er(e);
    }
  }
  class Qt extends mt {
    constructor(e) {
      var { viewportPadding: f = 60 } = e, c = Ie(e, [
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
          markers: Ht(f, c, e, this.viewportPadding),
          map: f,
          mapCanvasProjection: c
        })
      };
    }
  }
  const er = (x) => x.map((e) => new ge({
    position: z.getPosition(e),
    markers: [
      e
    ]
  }));
  class tr extends mt {
    constructor(e) {
      var { maxZoom: f, radius: c = 60 } = e, t = Ie(e, [
        "maxZoom",
        "radius"
      ]);
      super({
        maxZoom: f
      }), this.state = {
        zoom: -1
      }, this.superCluster = new dt(Object.assign({
        maxZoom: this.maxZoom,
        radius: c
      }, t));
    }
    calculate(e) {
      let f = false;
      const c = {
        zoom: e.map.getZoom()
      };
      if (!H(e.markers, this.markers)) {
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
      return f || (this.state.zoom <= this.maxZoom || c.zoom <= this.maxZoom) && (f = !H(this.state, c)), this.state = c, f && (this.clusters = this.cluster(e)), {
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
      if (c.cluster) return new ge({
        markers: this.superCluster.getLeaves(c.cluster_id, 1 / 0).map((r) => r.properties.marker),
        position: {
          lat: f,
          lng: e
        }
      });
      const t = c.marker;
      return new ge({
        markers: [
          t
        ],
        position: z.getPosition(t)
      });
    }
  }
  class rr extends Qt {
    constructor(e) {
      var { maxZoom: f, radius: c = 60, viewportPadding: t = 60 } = e, r = Ie(e, [
        "maxZoom",
        "radius",
        "viewportPadding"
      ]);
      super({
        maxZoom: f,
        viewportPadding: t
      }), this.superCluster = new dt(Object.assign({
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
        view: et(e.map.getBounds(), e.mapCanvasProjection, this.viewportPadding)
      };
      let c = !H(this.state, f);
      if (!H(e.markers, this.markers)) {
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
        view: et(e.getBounds(), f, this.viewportPadding)
      };
      return this.superCluster.getClusters(c.view, c.zoom).map((t) => this.transformCluster(t));
    }
    transformCluster({ geometry: { coordinates: [e, f] }, properties: c }) {
      if (c.cluster) return new ge({
        markers: this.superCluster.getLeaves(c.cluster_id, 1 / 0).map((r) => r.properties.marker),
        position: {
          lat: f,
          lng: e
        }
      });
      const t = c.marker;
      return new ge({
        markers: [
          t
        ],
        position: z.getPosition(t)
      });
    }
  }
  class nr {
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
  class ir {
    render({ count: e, position: f }, c, t) {
      const r = `<svg fill="${e > Math.max(10, c.clusters.markers.mean) ? "#ff0000" : "#0000ff"}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" width="50" height="50">
<circle cx="120" cy="120" opacity=".6" r="70" />
<circle cx="120" cy="120" opacity=".3" r="90" />
<circle cx="120" cy="120" opacity=".2" r="110" />
<text x="50%" y="50%" style="fill:#fff" text-anchor="middle" font-size="50" dominant-baseline="middle" font-family="roboto,arial,sans-serif">${e}</text>
</svg>`, i = `Cluster of ${e} markers`, p = Number(google.maps.Marker.MAX_ZINDEX) + e;
      if (z.isAdvancedMarkerAvailable(t)) {
        const l = document.createElement("div");
        l.innerHTML = r;
        const s = l.firstElementChild;
        s.setAttribute("transform", "translate(0 25)");
        const o = {
          map: t,
          position: f,
          zIndex: p,
          title: i,
          content: s
        };
        return new google.maps.marker.AdvancedMarkerElement(o);
      }
      const a = {
        position: f,
        zIndex: p,
        title: i,
        icon: {
          url: `data:image/svg+xml;base64,${btoa(r)}`,
          anchor: new google.maps.Point(25, 25)
        }
      };
      return new google.maps.Marker(a);
    }
  }
  function or(x, e) {
    for (let f in e.prototype) x.prototype[f] = e.prototype[f];
  }
  class Be {
    constructor() {
      or(Be, google.maps.OverlayView);
    }
  }
  var fe;
  (function(x) {
    x.CLUSTERING_BEGIN = "clusteringbegin", x.CLUSTERING_END = "clusteringend", x.CLUSTER_CLICK = "click";
  })(fe || (fe = {}));
  const ar = (x, e, f) => {
    f.fitBounds(e.bounds);
  };
  class sr extends Be {
    constructor({ map: e, markers: f = [], algorithmOptions: c = {}, algorithm: t = new tr(c), renderer: r = new ir(), onClusterClick: i = ar }) {
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
      const e = new nr(this.markers, this.clusters), f = this.getMap();
      this.clusters.forEach((c) => {
        c.markers.length === 1 ? c.marker = c.markers[0] : (c.marker = this.renderer.render(c, e, f), c.markers.forEach((t) => z.setMap(t, null)), this.onClusterClick && c.marker.addListener("click", (t) => {
          google.maps.event.trigger(this, fe.CLUSTER_CLICK, c), this.onClusterClick(t, c, f);
        })), z.setMap(c.marker, f);
      });
    }
  }
  const tt = Object.values(fe);
  J({
    name: "MarkerCluster",
    props: {
      options: {
        type: Object,
        default: () => ({})
      }
    },
    emits: tt,
    setup(x, { emit: e, expose: f, slots: c }) {
      const t = G(), r = Z(ae, G()), i = Z(se, G());
      return le(Pe, t), F(r, () => {
        r.value && (t.value = V(new sr({
          map: r.value,
          algorithm: new rr(x.options.algorithmOptions ?? {}),
          ...x.options
        })), tt.forEach((p) => {
          var a;
          (a = t.value) == null || a.addListener(p, (l) => e(p, l));
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
    setup(x, { slots: e, emit: f, expose: c }) {
      const t = G(), r = ce(() => {
        var a;
        return (a = e.default) == null ? void 0 : a.call(e).some((l) => l.type !== $e);
      }), i = ce(() => ({
        ...x.options,
        element: t.value
      })), p = de(Se, [], i, f);
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
    setup(x) {
      const e = G(), f = Z(ae, G()), c = Z(se, G());
      return F([
        f,
        () => x.options
      ], ([t, r], [i, p]) => {
        var a;
        const l = !H(r, p) || f.value !== i;
        if (f.value && c.value && l) {
          const s = structuredClone(r);
          if (s.data && !(s.data instanceof c.value.MVCArray)) {
            const o = c.value.LatLng;
            s.data = (a = s.data) == null ? void 0 : a.map((y) => y instanceof o || "location" in y && (y.location instanceof o || y.location === null) ? y : "location" in y ? {
              ...y,
              location: new o(y.location)
            } : new o(y));
          }
          e.value ? e.value.setOptions(s) : e.value = V(new c.value.visualization.HeatmapLayer({
            ...s,
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
  let Te, ur, lr, fr, cr, Ee, pr;
  ({ unref: Te, createVNode: ur, withCtx: lr, openBlock: fr, createBlock: cr } = await he("vue"));
  ({ ref: Ee, watch: pr } = await he("vue"));
  _r = {
    __name: "MapComponent",
    props: {
      modelValue: {
        type: Object,
        required: false
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    emits: [
      "update:modelValue"
    ],
    setup(x, { emit: e }) {
      const f = "AIzaSyDXtqYNzlO2WTAYozNyrfPe_dCNSgWAONQ", c = x, t = e, r = Ee(null), i = {
        lat: 40.689247,
        lng: -74.044502
      }, p = Ee(15), a = Ee({
        position: i,
        title: "LADY LIBERTY"
      }), l = (y) => {
        var _a, _b, _c;
        c.disabled || (p.value = (_b = (_a = r.value) == null ? void 0 : _a.map) == null ? void 0 : _b.getZoom(), t("update:modelValue", {
          ...(_c = a.value) == null ? void 0 : _c.position,
          zoom: p.value
        }));
      }, s = (y) => {
        var _a;
        c.disabled || (a.value = {
          position: {
            lat: y.latLng.lat(),
            lng: y.latLng.lng()
          },
          title: "Location-Plugin"
        }, t("update:modelValue", {
          ...(_a = a.value) == null ? void 0 : _a.position,
          zoom: p.value
        }));
      }, o = pr(() => c.modelValue, (y) => {
        var _a, _b, _c;
        c.modelValue && ((_a = r.value) == null ? void 0 : _a.map.setCenter(c.modelValue), (_b = r.value) == null ? void 0 : _b.map.setZoom(c.modelValue.zoom), a.value = {
          position: {
            ...c.modelValue
          },
          title: "Location-Plugin"
        }, t("update:modelValue", {
          ...(_c = a.value) == null ? void 0 : _c.position,
          zoom: p.value
        })), o();
      });
      return (y, b) => (fr(), cr(Te(Nt), {
        mapId: "3d8941b79754f0de",
        ref_key: "mapRef",
        ref: r,
        "api-key": Te(f),
        style: {
          width: "100%",
          height: "500px"
        },
        center: i,
        zoom: 15,
        disableDefaultUI: true,
        onZoom_changed: l,
        onClick: s
      }, {
        default: lr(() => [
          ur(Te(zt), {
            options: a.value
          }, null, 8, [
            "options"
          ])
        ]),
        _: 1
      }, 8, [
        "api-key"
      ]));
    }
  };
  var Ne = {
    exports: {}
  };
  Ne.exports;
  (function(x) {
    (function() {
      function e(c, t) {
        return t ? it(c) : c.slice ? e[r(c)] : function(i, p) {
          c(i = {
            exports: {}
          }), e[r(p)] = i.exports;
        };
        function r(i) {
          return i.split("/").slice(-1).toString().replace(".js", "");
        }
      }
      var f = x;
      e(function(c) {
        String.random = function(r, i) {
          var p = "";
          for (r = r || 24, i = i || "0123456789ABCDEFGHIJKLMNOPQRSTUVWXZabcdefghijklmnopqrstuvwxyz"; r-- > 0; ) p += i.charAt(Math.floor(Math.random() * i.length));
          return p;
        }, String.match = function(r, i) {
          var p, a;
          return typeof r != "string" ? false : (typeof i == "string" && (i = {
            "=": i
          }), i = i || {}, p = i["="] || i["*"] || i[">"] || i["<"], r === p ? true : a !== i["="] ? false : (p = i["*"] || i[">"], r.slice(0, (p || "").length) === p ? true : a !== i["*"] ? false : a !== i[">"] && a !== i["<"] ? r >= i[">"] && r <= i["<"] : a !== i[">"] && r >= i[">"] || a !== i["<"] && r <= i["<"]));
        }, String.hash = function(r, i) {
          if (typeof r == "string") {
            if (i = i || 0, !r.length) return i;
            for (var p = 0, a = r.length, l; p < a; ++p) l = r.charCodeAt(p), i = (i << 5) - i + l, i |= 0;
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
          var r, i = setTimeout, p = 0, a = 0, l = typeof setImmediate != "" + r && setImmediate || function(o, y) {
            return typeof MessageChannel == "" + r ? i : ((o = new MessageChannel()).port1.onmessage = function(b) {
              b.data == "" && y();
            }, function(b) {
              y = b, o.port2.postMessage("");
            });
          }(), s = i.check = i.check || typeof performance != "" + r && performance || {
            now: function() {
              return +/* @__PURE__ */ new Date();
            }
          };
          i.hold = i.hold || 9, i.poll = i.poll || function(o) {
            if (i.hold >= s.now() - p && a++ < 3333) {
              o();
              return;
            }
            l(function() {
              p = s.now(), o();
            }, a = 0);
          };
        }(), function() {
          var r = setTimeout, i = r.turn = r.turn || function(y) {
            p.push(y) == 1 && a(o);
          }, p = i.s = [], a = r.poll, l = 0, s, o = function() {
            (s = p[l++]) && s(), (l == p.length || l == 99) && (p = i.s = p.slice(l), l = 0), p.length && a(o);
          };
        }(), function() {
          var r, i = setTimeout, p = i.turn;
          (i.each = i.each || function(a, l, s, o) {
            o = o || 9, function y(b, n, v) {
              if (n = (b = (a || []).splice(0, o)).length) {
                for (var g = 0; g < n && r === (v = l(b[g])); g++) ;
                if (r === v) {
                  p(y);
                  return;
                }
              }
              s && s(v);
            }();
          })();
        }();
      })(e, "./shim"), e(function(c) {
        c.exports = function t(s, i, p) {
          if (!s) return {
            to: t
          };
          var a, l = typeof i == "function", s = (this.tag || (this.tag = {}))[s] || l && (this.tag[s] = {
            tag: s,
            to: t._ = {
              next: function(y) {
                var b;
                (b = this.to) && b.next(y);
              }
            }
          });
          if (l) {
            var o = {
              off: t.off || (t.off = function() {
                if (this.next === t._.next) return true;
                this === this.the.last && (this.the.last = this.back), this.to.back = this.back, this.next = t._.next, this.back.to = this.to, this.the.last === this.the && delete this.on.tag[this.the.tag];
              }),
              to: t._,
              next: i,
              the: s,
              on: this,
              as: p
            };
            return (o.back = s.last || s).to = o, s.last = o;
          }
          return (s = s.to) && a !== i && s.next(i), s;
        };
      })(e, "./onto"), e(function(c) {
        c.exports = function(t) {
          return t === null || typeof t == "string" || typeof t == "boolean" || typeof t == "number" && t != 1 / 0 && t != -1 / 0 && t === t || !!t && typeof t["#"] == "string" && Object.keys(t).length === 1 && t["#"];
        };
      })(e, "./valid"), e(function(c) {
        e("./shim");
        function t() {
          var s = +/* @__PURE__ */ new Date();
          return a < s ? (i = 0, a = s + t.drift) : a = s + (i += 1) / p + t.drift;
        }
        t.drift = 0;
        var r = -1 / 0, i = 0, p = 999, a = r, l;
        t.is = function(s, o, y) {
          var b = o && s && s._ && s._[">"] || y;
          if (b) return typeof (b = b[o]) == "number" ? b : r;
        }, t.ify = function(s, o, y, b, n) {
          (s = s || {})._ = s._ || {}, n && (s._["#"] = n);
          var v = s._[">"] || (s._[">"] = {});
          return l !== o && o !== "_" && (typeof y == "number" && (v[o] = y), l !== b && (s[o] = b)), s;
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
          }, i.check = function(l) {
            return p[l] ? a(l) : false;
          };
          var a = i.track = function(l) {
            var s = p[l] || (p[l] = {});
            return s.was = i.now = +/* @__PURE__ */ new Date(), i.to || (i.to = setTimeout(i.drop, r.age + 9)), a.ed && a.ed(l), s;
          };
          return i.drop = function(l) {
            i.to = null, i.now = +/* @__PURE__ */ new Date();
            var s = Object.keys(p);
            console.STAT && console.STAT(i.now, +/* @__PURE__ */ new Date() - i.now, "dup drop keys"), setTimeout.each(s, function(o) {
              var y = p[o];
              y && (l || r.age) > i.now - y.was || delete p[o];
            }, 0, 99);
          }, i;
        }
        c.exports = t;
      })(e, "./dup"), e(function(c) {
        e("./onto"), c.exports = function(i, p) {
          if (this.on) {
            var a = (this.opt || {}).lack || 9e3;
            if (typeof i != "function") {
              if (!i) return;
              var s = i["#"] || i, l = (this.tag || "")[s];
              return l ? (p && (l = this.on(s, p), clearTimeout(l.err), l.err = setTimeout(function() {
                l.off();
              }, a)), true) : void 0;
            }
            var s = p && p["#"] || t(9);
            if (!i) return s;
            var o = this.on(s, i, p);
            return o.err = o.err || setTimeout(function() {
              o.off(), o.next({
                err: "Error: No ACK yet.",
                lack: true
              });
            }, a), s;
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
            return d.once || (d.on("in", n, d), d.on("out", n, d), d.on("put", S, d), t.on("create", d), d.on("create", d)), d.once = 1, A;
          };
          function n(d) {
            if (d) {
              if (d.out === n) {
                this.to.next(d);
                return;
              }
              var A = this, T = A.as, D = T.at || T, $ = D.$, C = D.dup, M, B = d.DBG;
              if ((M = d["#"]) || (M = d["#"] = i(9)), !C.check(M)) {
                if (C.track(M), M = d._, d._ = typeof M == "function" ? M : function() {
                }, d.$ && d.$ === (d.$._ || "").$ || (d.$ = $), d["@"] && !d.put && u(d), !D.ask(d["@"], d)) if (B && (B.u = +/* @__PURE__ */ new Date()), d.put) {
                  v(d);
                  return;
                } else d.get && t.on.get(d, $);
                B && (B.uc = +/* @__PURE__ */ new Date()), A.to.next(d), B && (B.ua = +/* @__PURE__ */ new Date()), !(d.nts || d.NTS) && (d.out = n, D.on("out", d), B && (B.ue = +/* @__PURE__ */ new Date()));
              }
            }
          }
          function v(d) {
            if (d) {
              var A = d._ || "", T = A.root = ((A.$ = d.$ || "")._ || "").root;
              if (d["@"] && A.faith && !A.miss) {
                d.out = n, T.on("out", d);
                return;
              }
              A.latch = T.hatch, A.match = T.hatch = [];
              var D = d.put, $ = A.DBG = d.DBG, C = +/* @__PURE__ */ new Date();
              if (P = P || C, !(D["#"] && D["."])) {
                $ && ($.p = C), A["#"] = d["#"], A.msg = d, A.all = 0, A.stun = 1;
                var M = Object.keys(D);
                console.STAT && console.STAT(C, (($ || A).pk = +/* @__PURE__ */ new Date()) - C, "put sort");
                var B = 0, N, L, U, R, q, K, ye;
                (function te(we) {
                  if (N != B) {
                    if (N = B, !(U = M[B])) {
                      console.STAT && console.STAT(C, (($ || A).pd = +/* @__PURE__ */ new Date()) - C, "put"), h(A);
                      return;
                    }
                    (R = D[U]) ? (ye = R._) ? U !== ye["#"] ? K = w + j(U) + "soul not same." : (q = ye[">"]) || (K = w + j(U) + "no state.") : K = w + j(U) + "no meta." : K = w + j(U) + "no node.", L = Object.keys(R || {});
                  }
                  if (K) {
                    d.err = A.err = K, h(A);
                    return;
                  }
                  var Ge = 0, re;
                  for (we = we || 0; we++ < 9 && (re = L[Ge++]); ) if (re !== "_") {
                    var be = R[re], Ue = q[re];
                    if (o === Ue) {
                      K = w + j(re) + "on" + j(U) + "no state.";
                      break;
                    }
                    if (!a(be)) {
                      K = w + j(re) + "on" + j(U) + "bad " + typeof be + j(be);
                      break;
                    }
                    g(be, re, U, Ue, d), ++I;
                  }
                  if ((L = L.slice(Ge)).length) {
                    p(te);
                    return;
                  }
                  ++B, L = null, te(we);
                })();
              }
            }
          }
          t.on.put = v;
          function g(d, A, T, D, $) {
            var C = $._ || "", M = C.root, B = M.graph, N, L = B[T] || y, U = l(L, A, 1), R = L[A], q = C.DBG;
            (N = console.STAT) && (!B[T] || !R) && (N.has = (N.has || 0) + 1);
            var K = E();
            if (D > K) {
              setTimeout(function() {
                g(d, A, T, D, $);
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
                  "#": T,
                  ".": A,
                  ":": d,
                  ">": D
                },
                ok: $.ok,
                _: C
              });
            }
          }
          function S(d) {
            var A;
            (A = (d._ || "").DBG) && (A.pa = +/* @__PURE__ */ new Date(), A.pm = A.pm || +/* @__PURE__ */ new Date());
            var T = this, D = T.as, $ = D.graph, C = d._, M = d.put, B = M["#"], N = M["."], L = M[":"], U = M[">"];
            d["#"];
            var R;
            (R = C.msg) && (R = R.put) && (R = R[B]) && s(R, N, U, L, B), $[B] = s($[B], N, U, L, B), (R = (D.next || "")[B]) && R.on("in", d), h(C), T.to.next(d);
          }
          function h(d, A) {
            var T;
            if (!d.stop && !(!d.err && 0 < --d.stun) && (d.stop = 1, !!(T = d.root))) {
              var D = d.match;
              D.end = 1, D === T.hatch && (!(D = d.latch) || D.end ? delete T.hatch : T.hatch = D), d.hatch && d.hatch(), setTimeout.each(d.match, function($) {
                $ && $();
              }), !(!(A = d.msg) || d.err || A.err) && (A.out = n, d.root.on("out", A), k());
            }
          }
          function u(d) {
            var A = d["@"] || "", T;
            if (!(T = A._)) {
              var D = (D = d.$) && (D = D._) && (D = D.root) && (D = D.dup);
              if (!(D = D.check(A))) return;
              d["@"] = D["#"] || d["@"];
              return;
            }
            T.acks = (T.acks || 0) + 1, (T.err = d.err) && (d["@"] = T["#"], h(T)), T.ok = d.ok || T.ok, !T.stop && !T.crack && (T.crack = T.match && T.match.push(function() {
              m(T);
            })), m(T);
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
          var w = "Error: Invalid graph!", j = function(d) {
            return " '" + ("" + d).slice(0, 9) + "...' ";
          }, _ = JSON.stringify, O = 2147483647, E = t.state, I = 0, P, k = function() {
            I > 999 && I / -(P - (P = +/* @__PURE__ */ new Date())) > 1 && (t.window && console.log("Warning: You're syncing 1K+ records a second, faster than DOM can update - consider limiting query."), k = function() {
              I = 0;
            });
          };
        }(), function() {
          t.on.get = function(v, g) {
            var S = g._, h = v.get, u = h["#"], m = S.graph[u], w = h["."], j = S.next || (S.next = {}), _ = j[u], O = v._ || {}, E = O.DBG = v.DBG;
            if (E && (E.g = +/* @__PURE__ */ new Date()), !m) return S.on("get", v);
            if (w) {
              if ((typeof w != "string" || o === m[w]) && !((_ || "").next || "")[w]) {
                S.on("get", v);
                return;
              }
              m = s({}, w, l(m, w), m[w], u);
            }
            m && n(v, m), S.on("get", v);
          };
          function n(v, g) {
            var S = +/* @__PURE__ */ new Date(), h = v._ || {}, u = h.DBG = v.DBG, m = v["#"], w = i(9), j = Object.keys(g || "").sort(), _ = ((g || "")._ || "")["#"];
            j.length;
            var O = v.$._.root, E = g === O.graph[_];
            console.STAT && console.STAT(S, ((u || h).gk = +/* @__PURE__ */ new Date()) - S, "got keys"), g && function I() {
              S = +/* @__PURE__ */ new Date();
              for (var P = 0, k, d = {}, A; P < 9 && (k = j[P++]); ) s(d, k, l(g, k), g[k], _);
              j = j.slice(P), (A = {})[_] = d, d = A;
              var T;
              E && (T = function() {
              }, T.ram = T.faith = true), A = j.length, console.STAT && console.STAT(S, -(S - (S = +/* @__PURE__ */ new Date())), "got copied some"), u && (u.ga = +/* @__PURE__ */ new Date()), O.on("in", {
                "@": m,
                "#": w,
                put: d,
                "%": A ? w = i(9) : o,
                $: O.$,
                _: T,
                DBG: u,
                FOO: 1
              }), console.STAT && console.STAT(S, +/* @__PURE__ */ new Date() - S, "got in"), A && setTimeout.turn(I);
            }(), g || O.on("in", {
              "@": v["#"]
            });
          }
          t.on.get.ack = n;
        }(), function() {
          t.chain.opt = function(n) {
            n = n || {};
            var v = this, g = v._, S = n.peers || n;
            return Object.plain(n) || (n = {}), Object.plain(g.opt) || (g.opt = n), typeof S == "string" && (S = [
              S
            ]), Object.plain(g.opt.peers) || (g.opt.peers = {}), S instanceof Array && (n.peers = {}, S.forEach(function(h) {
              var u = {};
              u.id = u.url = h, n.peers[h] = g.opt.peers[h] = g.opt.peers[h] || u;
            })), r(n, function h(u) {
              var m = this[u];
              if (this && this.hasOwnProperty(u) || typeof m == "string" || Object.empty(m)) {
                this[u] = m;
                return;
              }
              m && m.constructor !== Object && !(m instanceof Array) || r(m, h);
            }), g.opt.from = n, t.on("opt", g), g.opt.uuid = g.opt.uuid || function(u) {
              return t.state().toString(36).replace(".", "") + String.random(u || 12);
            }, v;
          };
        }();
        var r = function(n, v) {
          Object.keys(n).forEach(v, n);
        }, i = String.random, p = setTimeout.turn, a = t.valid, l = t.state.is, s = t.state.ify, o, y = {}, b;
        t.log = function() {
          return !t.log.off && b.log.apply(b, arguments), [].slice.call(arguments).join(" ");
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
        }, (b = console).only = function(n, v) {
          return b.only.i && n === b.only.i && b.only.i++ && (b.log.apply(b, arguments) || v);
        }, t.log.once("welcome", "Hello wonderful person! :) Thanks for using GUN, please ask for help on http://chat.gun.eco if anything takes you longer than 5min to figure out!");
      })(e, "./root"), e(function(c) {
        var t = e("./root");
        t.chain.back = function(p, a) {
          var l;
          if (p = p || 1, p === -1 || p === 1 / 0) return this._.root.$;
          if (p === 1) return (this._.back || this._).$;
          var s = this, o = s._;
          if (typeof p == "string" && (p = p.split(".")), p instanceof Array) {
            var y = 0, b = p.length, l = o;
            for (y; y < b; y++) l = (l || r)[p[y]];
            return i !== l ? a ? s : l : (l = o.back) ? l.$.back(p, a) : void 0;
          }
          if (typeof p == "function") {
            for (var n, l = {
              back: o
            }; (l = l.back) && i === (n = p(l, a)); ) ;
            return n;
          }
          return typeof p == "number" ? (o.back || o).$.back(p - 1) : this;
        };
        var r = {}, i;
      })(e, "./back"), e(function(c) {
        var t = e("./root");
        t.chain.chain = function(h) {
          var u = this, m = u._, w = new (h || u).constructor(u), j = w._, _;
          return j.root = _ = m.root, j.id = ++_.once, j.back = u._, j.on = t.on, j.on("in", t.on.in, j), j.on("out", t.on.out, j), w;
        };
        function r(h) {
          var u, m = this.as, w = m.back, j = m.root, _;
          if (h.$ || (h.$ = m.$), this.to.next(h), m.err) {
            m.on("in", {
              put: m.put = o,
              $: m.$
            });
            return;
          }
          if (u = h.get) {
            if (j.pass && (j.pass[m.id] = m), m.lex && Object.keys(m.lex).forEach(function(O) {
              _[O] = m.lex[O];
            }, _ = h.get = h.get || {}), u["#"] || m.soul) {
              if (u["#"] = u["#"] || m.soul, h["#"] || (h["#"] = y(9)), w = j.$.get(u["#"])._, u = u["."]) {
                if (n(w.put, u) && (_ = w.ask && w.ask[u], (w.ask || (w.ask = {}))[u] = w.$.get(u)._, w.on("in", {
                  get: u,
                  put: {
                    "#": w.soul,
                    ".": u,
                    ":": w.put[u],
                    ">": g(j.graph[w.soul], u)
                  }
                }), _)) return;
              } else {
                if (_ = w.ask && w.ask[""], (w.ask || (w.ask = {}))[""] = w, o !== w.put && (w.on("in", w), _)) return;
                h.$ = w.$;
              }
              return j.ask(l, h), j.on("in", h);
            }
            if (u["."]) return m.get ? (h = {
              get: {
                ".": m.get
              },
              $: m.$
            }, (w.ask || (w.ask = {}))[m.get] = h.$._, w.on("out", h)) : (h = {
              get: m.lex ? h.get : {},
              $: m.$
            }, w.on("out", h));
            if ((m.ask || (m.ask = {}))[""] = m, m.get) return u["."] = m.get, (w.ask || (w.ask = {}))[m.get] = h.$._, w.on("out", h);
          }
          return w.on("out", h);
        }
        t.on.out = r;
        function i(h, u) {
          u = u || this.as;
          var m = u.root, w = h.$ || (h.$ = u.$), j = (w || "")._ || s, _ = h.put || "", O = _["#"], E = _["."], I = o !== _["="] ? _["="] : _[":"], P = _[">"] || -1 / 0, k;
          if (o !== h.put && (o === _["#"] || o === _["."] || o === _[":"] && o === _["="] || o === _[">"])) {
            if (!b(_)) {
              if (!(O = ((_ || "")._ || "")["#"])) {
                console.log("chain not yet supported for", _, "...", h, u);
                return;
              }
              return w = u.root.$.get(O), setTimeout.each(Object.keys(_).sort(), function(d) {
                d == "_" || o === (P = g(_, d)) || u.on("in", {
                  $: w,
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
            u.on("in", {
              $: j.back.$,
              put: {
                "#": O = j.back.soul,
                ".": E = j.has || j.get,
                "=": _,
                ">": g(j.back.put, E)
              },
              via: h
            });
            return;
          }
          (h.seen || "")[u.id] || ((h.seen || (h.seen = function() {
          }))[u.id] = u, u !== j && (Object.keys(h).forEach(function(d) {
            _[d] = h[d];
          }, _ = {}), _.get = u.get || _.get, !u.soul && !u.has ? _.$$$ = _.$$$ || u.$ : j.soul && (_.$ = u.$, _.$$ = _.$$ || j.$), h = _), a(h, u), (u.soul || h.$$) && P >= g(m.graph[O], E) && ((_ = m.$.get(O)._).put = S(_.put, E, P, I, O)), !j.soul && P >= g(m.graph[O], E) && (k = (m.$.get(O)._.next || "")[E]) && (k.put = I, typeof (_ = b(I)) == "string" && (k.put = m.$.get(_)._.put || I)), this.to && this.to.next(h), u.any && setTimeout.each(Object.keys(u.any), function(d) {
            (d = u.any[d]) && d(h);
          }, 0, 99), u.echo && setTimeout.each(Object.keys(u.echo), function(d) {
            (d = u.echo[d]) && d.on("in", h);
          }, 0, 99), ((h.$$ || "")._ || j).soul && (k = u.next) && (k = k[E]) && (_ = {}, Object.keys(h).forEach(function(d) {
            _[d] = h[d];
          }), _.$ = (h.$$ || h.$).get(_.get = E), delete _.$$, delete _.$$$, k.on("in", _)), p(h, u));
        }
        t.on.in = i;
        function p(h, u) {
          if (u = u || this.as || h.$._, !(h.$$ && this !== t.on) && !(!h.put || u.soul)) {
            var m = h.put || "", w = m["="] || m[":"], E, j = u.root, _ = j.$.get(m["#"]).get(m["."])._;
            if (typeof (w = b(w)) != "string") {
              this === t.on && ((_.echo || (_.echo = {}))[u.id] = u);
              return;
            }
            if (!((_.echo || (_.echo = {}))[u.id] && !(j.pass || "")[u.id])) {
              if (E = j.pass) {
                if (E[w + u.id]) return;
                E[w + u.id] = 1;
              }
              (_.echo || (_.echo = {}))[u.id] = u, u.has && (u.link = w);
              var O = j.$.get(_.link = w)._;
              (O.echo || (O.echo = {}))[_.id] = _;
              var E = u.ask || "";
              (E[""] || u.lex) && O.on("out", {
                get: {
                  "#": w
                }
              }), setTimeout.each(Object.keys(E), function(I, P) {
                !I || !(P = E[I]) || P.on("out", {
                  get: {
                    "#": w,
                    ".": I
                  }
                });
              }, 0, 99);
            }
          }
        }
        t.on.link = p;
        function a(h, u) {
          var m = h.put || "", w = o !== m["="] ? m["="] : m[":"], j = u.root, _, O;
          if (o === w) {
            if (u.soul && o !== u.put || (O = (h.$$ || h.$ || "")._ || "", h["@"] && (o !== O.put || o !== u.put))) return;
            (_ = u.link || h.linked) && delete (j.$.get(_)._.echo || "")[u.id], u.has && (u.link = null), u.put = o, setTimeout.each(Object.keys(u.next || ""), function(E, I) {
              (I = u.next[E]) && (_ && delete (j.$.get(_).get(E)._.echo || "")[I.id], I.on("in", {
                get: E,
                put: o,
                $: I.$
              }));
            }, 0, 99);
            return;
          }
          u.soul || h.$$ || (_ = b(w), O = h.$._ || "", !((_ === O.link || u.has && !O.link) && !((j.pass || "")[u.id] && typeof _ != "string")) && (delete (O.echo || "")[u.id], a({
            get: u.get,
            put: o,
            $: h.$,
            linked: h.linked = h.linked || O.link
          }, u)));
        }
        t.on.unlink = a;
        function l(h, u) {
          var m = this.as, w = m.$._;
          w.root;
          var j = m.get || "", _ = (h.put || "")[j["#"]] || "";
          if (!h.put || typeof j["."] == "string" && o === _[j["."]]) {
            if (o !== w.put || !w.soul && !w.has) return;
            w.ack = (w.ack || 0) + 1, w.on("in", {
              get: w.get,
              put: w.put = o,
              $: w.$,
              "@": h["@"]
            });
            return;
          }
          (h._ || {}).miss = 1, t.on.put(h);
        }
        var s = {}, o, y = String.random, b = t.valid, n = function(h, u) {
          return h && Object.prototype.hasOwnProperty.call(h, u);
        }, v = t.state, g = v.is, S = v.ify;
      })(e, "./chain"), e(function(c) {
        var t = e("./root");
        t.chain.get = function(o, y, b) {
          var n, v;
          if (typeof o == "string") {
            if (o.length == 0) return (n = this.chain())._.err = {
              err: t.log("0 length key!", o)
            }, y && y.call(n, n._.err), n;
            var g = this, S = g._, h = S.next || a;
            (n = h[o]) || (n = o && r(o, g)), n = n && n.$;
          } else if (typeof o == "function") {
            let O = function(E, I, P) {
              if (!O.stun && !(($ = m.pass) && !$[w])) {
                var k = E.$._, d = (E.$$ || "")._, A = (d || k).put, T = !k.has && !k.soul, D = {}, $;
                if ((T || s === A) && (A = s === (($ = E.put) || "")["="] ? s === ($ || "")[":"] ? $ : $[":"] : $["="]), typeof ($ = t.valid(A)) == "string" && (A = s === ($ = m.$.get($)._.put) ? u.not ? s : A : $), !(u.not && s === A)) {
                  if (s === u.stun) {
                    if (($ = m.stun) && $.on && (S.$.back(function(C) {
                      if ($.on("" + C.id, D = {}), (D.run || 0) < O.id) return D;
                    }), !D.run && $.on("" + k.id, D = {}), !D.run && d && $.on("" + d.id, D = {}), O.id > D.run && ((!D.stun || D.stun.end) && (D.stun = $.on("stun"), D.stun = D.stun && D.stun.last), D.stun && !D.stun.end))) {
                      (D.stun.add || (D.stun.add = {}))[w] = function() {
                        O(E, I, 1);
                      };
                      return;
                    }
                    if (s === A && (P = 0), ($ = m.hatch) && !$.end && s === u.hatch && !P) {
                      if (j[k.$._.id]) return;
                      j[k.$._.id] = 1, $.push(function() {
                        O(E, I, 1);
                      });
                      return;
                    }
                    j = {};
                  }
                  if (m.pass) {
                    if (m.pass[w + k.id]) return;
                    m.pass[w + k.id] = 1;
                  }
                  if (u.on) {
                    u.ok.call(k.$, A, k.get, E, I || O);
                    return;
                  }
                  if (u.v2020) {
                    u.ok(E, I || O);
                    return;
                  }
                  Object.keys(E).forEach(function(C) {
                    $[C] = E[C];
                  }, $ = {}), E = $, E.put = A, u.ok.call(u.as, E, I || O);
                }
              }
            };
            if (y === true) return i(this, o, y, b), this;
            n = this;
            var S = n._, u = y || {}, m = S.root, w;
            u.at = S, u.ok = o;
            var j = {};
            return O.at = S, (S.any || (S.any = {}))[w = String.random(7)] = O, O.off = function() {
              O.stun = 1, S.any && delete S.any[w];
            }, O.rid = p, O.id = u.run || ++m.once, v = m.pass, (m.pass = {})[w] = 1, u.out = u.out || {
              get: {}
            }, S.on("out", u.out), m.pass = v, n;
          } else {
            if (typeof o == "number") return this.get("" + o, y, b);
            if (typeof (v = l(o)) == "string") return this.get(v, y, b);
            (v = this.get.next) && (n = v(this, o));
          }
          return n ? (y && typeof y == "function" && n.get(y, b), n) : ((n = this.chain())._.err = {
            err: t.log("Invalid get request!", o)
          }, y && y.call(n, n._.err), n);
        };
        function r(o, y) {
          var b = y._, n = b.next, v = y.chain(), g = v._;
          return n || (n = b.next = {}), n[g.get = o] = g, y === b.root.$ ? g.soul = o : (b.soul || b.has) && (g.has = o), g;
        }
        function i(o, y, b, n) {
          var v = o._, g = 0, S;
          return (S = v.soul || v.link) ? y(S, n, v) : v.jam ? v.jam.push([
            y,
            n
          ]) : (v.jam = [
            [
              y,
              n
            ]
          ], o.get(function(u, m) {
            if (!(s === u.put && !v.root.opt.super && (S = Object.keys(v.root.opt.peers).length) && ++g <= S)) {
              m.rid(u);
              var w = (w = u.$) && w._ || {}, j = 0, _;
              for (S = v.jam, delete v.jam; _ = S[j++]; ) {
                var O = _[0];
                _ = _[1], O && O(w.link || w.soul || t.valid(u.put) || ((u.put || {})._ || {})["#"], _, u, m);
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
            var b;
            if ((b = this.seen || (this.seen = {}))[o]) return true;
            b[o] = true;
          }
        }
        var a = {}, l = t.valid, s;
      })(e, "./get"), e(function(c) {
        var t = e("./root");
        t.chain.put = function(n, v, g) {
          var S = this, h = S._, u = h.root;
          g = g || {}, g.root = h.root, g.run || (g.run = u.once), r(g, h.id), g.ack = g.ack || v, g.via = g.via || S, g.data = g.data || n, g.soul || (g.soul = h.soul || typeof v == "string" && v);
          var m = g.state = g.state || t.state();
          return typeof n == "function" ? (n(function(w) {
            g.data = w, S.put(l, l, g);
          }), S) : g.soul ? (g.$ = u.$.get(g.soul), g.todo = [
            {
              it: g.data,
              ref: g.$
            }
          ], g.turn = g.turn || o, g.ran = g.ran || i, function w() {
            var j = g.todo, _ = j.pop(), O = _.it;
            _.ref && _.ref._.id;
            var E, I, P, k, d;
            if (r(g, _.ref), (k = _.todo) && (I = k.pop(), O = O[I], k.length && j.push(_)), I && (j.path || (j.path = [])).push(I), !(E = y(O)) && !(d = t.is(O))) {
              if (!Object.plain(O)) {
                i.err(g, "Invalid data: " + a(O) + " at " + (g.via.back(function($) {
                  $.get && k.push($.get);
                }, k = []) || k.join(".")) + "." + (j.path || []).join("."));
                return;
              }
              for (var A = g.seen || (g.seen = []), T = A.length; T--; ) if (O === (k = A[T]).it) {
                E = O = k.link;
                break;
              }
            }
            if (I && E) _.node = b(_.node, I, m, O);
            else {
              let $ = function(C, M) {
                var B = P.link["#"];
                M && (M.off(), M.rid(C));
                var N = B || C.soul || (k = (C.$$ || C.$)._ || "").soul || k.link || ((k = k.put || "")._ || "")["#"] || k["#"] || ((k = C.put || "") && C.$$ ? k["#"] : (k["="] || k[":"] || "")["#"]);
                if (!B && r(g, C.$), !N && !_.link["#"]) {
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
              }), _.node = b(_.node, I, m, P.link), !d && P.todo.length && j.push(P);
              var D = g.seen.length;
              (g.wait || (g.wait = {}))[D] = "", k = (P.ref = d ? O : I ? _.ref.get(I) : _.ref)._, (k = O && (O._ || "")["#"] || k.soul || k.link) ? $({
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
            g.turn(w);
          }(), S) : (p(g), S);
        };
        function r(n, v) {
          if (v) {
            v = (v._ || "").id || v;
            var g = n.root.stun || (n.root.stun = {
              on: t.on
            }), S = {}, h;
            n.stun || (n.stun = g.on("stun", function() {
            })), (h = g.on("" + v)) && h.the.last.next(S), !(S.run >= n.run) && g.on("" + v, function(u) {
              if (n.stun.end) {
                this.off(), this.to.next(u);
                return;
              }
              u.run = u.run || n.run, u.stun = u.stun || n.stun;
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
            var v = n.$.back(-1)._, g = v.root, S = v.ask(function(w) {
              g.on("ack", w), w.err && !w.lack && t.log(w), ++h > (n.acks || 0) && this.off(), n.ack && n.ack(w, this);
            }, n.opt), h = 0, u = n.stun, m;
            (m = function() {
              u && (i.end(u, g), setTimeout.each(Object.keys(u = u.add || ""), function(w) {
                (w = u[w]) && w();
              }));
            }).hatch = m, n.ack && !n.ok && (n.ok = n.acks || 9), n.via._.on("out", {
              put: n.out = n.graph,
              ok: n.ok && {
                "@": n.ok + 1
              },
              opt: n.opt,
              "#": S,
              _: m
            });
          }
        }
        i.end = function(n, v) {
          n.end = s, n.the.to === n && n === n.the.last && delete v.stun, n.off();
        }, i.err = function(n, v) {
          (n.ack || s).call(n, n.out = {
            err: n.err = t.log(v)
          }), n.ran(n);
        };
        function p(n) {
          var v = n.via._, g;
          n.via = n.via.back(function(S) {
            if (S.soul || !S.get) return S.$;
            g = n.data, (n.data = {})[S.get] = g;
          }), (!n.via || !n.via._.soul) && (n.via = v.root.$.get(((n.data || "")._ || "")["#"] || v.$.back("opt.uuid")())), n.via.put(n.data, n.ack, n);
        }
        function a(n, v) {
          return n && (v = n.constructor) && v.name || typeof n;
        }
        var l, s = function() {
        }, o = setTimeout.turn, y = t.valid, b = t.state.ify;
      })(e, "./put"), e(function(c) {
        var t = e("./root");
        e("./chain"), e("./back"), e("./put"), e("./get"), c.exports = t;
      })(e, "./index"), e(function(c) {
        var t = e("./index");
        t.chain.on = function(p, a, l, s) {
          var o = this, y = o._;
          y.root;
          var b;
          if (typeof p == "string") return a ? (b = y.on(p, a, l || y, s), l && l.$ && (l.subs || (l.subs = [])).push(b), o) : y.on(p);
          var n = a;
          return (n = n === true ? {
            change: true
          } : n || {}).not = 1, n.on = 1, o.get(p, n), o;
        }, t.chain.once = function(p, a) {
          if (a = a || {}, !p) return r(this);
          var l = this, s = l._, o = s.root;
          s.put;
          var y = String.random(7), b;
          return l.get(function(n, v, g, S) {
            var h = this, u = h._, m = u.one || (u.one = {});
            if (S.stun || m[y] === "") return;
            if ((b = t.valid(n)) === true) {
              w();
              return;
            }
            if (typeof b == "string") return;
            clearTimeout((s.one || "")[y]), clearTimeout(m[y]), m[y] = setTimeout(w, a.wait || 99);
            function w(j) {
              if (!u.has && !u.soul && (u = {
                put: n,
                get: v
              }), i === (b = u.put) && (b = ((g.$$ || "")._ || "").put), typeof t.valid(b) == "string" && (b = o.$.get(b)._.put, b === i && !j)) {
                m[y] = setTimeout(function() {
                  w(1);
                }, a.wait || 99);
                return;
              }
              S.stun || m[y] !== "" && (m[y] = "", (s.soul || s.has) && S.off(), p.call(h, b, u.get), clearTimeout(m[y]));
            }
          }, {
            on: 1
          }), l;
        };
        function r(p, a, l) {
          return t.log.once("valonce", "Chainable val is experimental, its behavior and API may change moving forward. Please play with it and report bugs and ideas on how to improve it."), (l = p.chain())._.nix = p.once(function(s, o) {
            l._.on("in", this._);
          }), l._.lex = p._.lex, l;
        }
        t.chain.off = function() {
          var p = this, a = p._, l, s = a.back;
          if (s) return a.ack = 0, (l = s.next) && l[a.get] && delete l[a.get], (l = s.any) && (delete s.any, s.any = {}), (l = s.ask) && delete l[a.get], (l = s.put) && delete l[a.get], (l = a.soul) && delete s.root.graph[l], (l = a.map) && Object.keys(l).forEach(function(o, y) {
            y = l[o], y.link && s.root.$.get(y.link).off();
          }), (l = a.next) && Object.keys(l).forEach(function(o, y) {
            y = l[o], y.$.off();
          }), a.on("off", {}), p;
        };
        var i;
      })(e, "./on"), e(function(c) {
        var t = e("./index"), r = t.chain.get.next;
        t.chain.get.next = function(l, s) {
          var o;
          return Object.plain(s) ? (o = ((o = s["#"]) || "")["="] || o) ? l.get(o) : ((o = l.chain()._).lex = s, l.on("in", function(y) {
            String.match(y.get || (y.put || "")["."], s["."] || s["#"] || s) && o.on("in", y), this.to.next(y);
          }), o.$) : (r || p)(l, s);
        }, t.chain.map = function(l, s, o) {
          var y = this, b = y._, n, v;
          return Object.plain(l) && (n = l["."] ? l : {
            ".": l
          }, l = a), l ? (t.log.once("mapfn", "Map functions are experimental, their behavior and API may change moving forward. Please play with it and report bugs and ideas on how to improve it."), v = y.chain(), y.map().on(function(g, S, h, u) {
            var m = (l || p).call(this, g, S, h, u);
            if (a !== m) {
              if (g === m) return v._.on("in", h);
              if (t.is(m)) return v._.on("in", m._);
              var w = {};
              Object.keys(h.put).forEach(function(j) {
                w[j] = h.put[j];
              }, w), w["="] = m, v._.on("in", {
                get: S,
                put: w
              });
            }
          }), v) : ((v = b.each) || ((b.each = v = y.chain())._.lex = n || v._.lex || b.lex, v._.nix = y.back("nix"), y.on("in", i, v._)), v);
        };
        function i(l) {
          this.to.next(l);
          var s = this.as, o = l.$, y = o._, b = l.put, n;
          !y.soul && !l.$$ || (n = s.lex) && !String.match(l.get || (b || "")["."], n["."] || n["#"] || n) || t.on.link(l, s);
        }
        var p = function() {
        }, a;
      })(e, "./map"), e(function(c) {
        var t = e("./index");
        t.chain.set = function(r, i, p) {
          var a = this, l = a.back(-1), s, o;
          return i = i || function() {
          }, p = p || {}, p.item = p.item || r, (s = ((r || "")._ || "")["#"]) && ((r = {})["#"] = s), typeof (o = t.valid(r)) == "string" ? a.get(s = o).put(r, i, p) : t.is(r) ? (a.put(function(y) {
            r.get(function(b, n, v) {
              if (!b) return i.call(a, {
                err: t.log('Only a node can be linked! Not "' + v.put + '"!')
              });
              (o = {})[b] = {
                "#": b
              }, y(o);
            }, true);
          }), r) : (Object.plain(r) && (r = l.get(s = a.back("opt.uuid")()).put(r)), a.get(s || l.back("opt.uuid")(7)).put(r, i, p));
        };
      })(e, "./set"), e(function(c) {
        e("./shim");
        var t = function() {
        }, r = JSON.parseAsync || function(l, s, o) {
          var y, b = +/* @__PURE__ */ new Date();
          try {
            s(y, JSON.parse(l, o), i.sucks(+/* @__PURE__ */ new Date() - b));
          } catch (n) {
            s(n);
          }
        }, i = JSON.stringifyAsync || function(l, s, o, y) {
          var b, n = +/* @__PURE__ */ new Date();
          try {
            s(b, JSON.stringify(l, o, y), i.sucks(+/* @__PURE__ */ new Date() - n));
          } catch (v) {
            s(v);
          }
        };
        i.sucks = function(l) {
          l > 99 && (console.log("Warning: JSON blocking CPU detected. Add `gun/lib/yson.js` to fix."), i.sucks = t);
        };
        function p(l) {
          var s = function() {
          }, o = l.opt || {};
          o.log = o.log || console.log, o.gap = o.gap || o.wait || 0, o.max = o.max || (o.memory ? o.memory * 999 * 999 : 3e8) * 0.3, o.pack = o.pack || o.max * 0.01 * 0.01, o.puff = o.puff || 9;
          var y = setTimeout.turn || setTimeout, b = l.dup, n = b.check, v = b.track, g = s.hear = function(u, m) {
            if (u) {
              if (o.max <= u.length) return s.say({
                dam: "!",
                err: "Message too big!"
              }, m);
              s === this && (g.d += u.length || 0, ++g.c);
              var w = m.SH = +/* @__PURE__ */ new Date(), j = u[0], _;
              if (j === "[") {
                r(u, function(O, E) {
                  if (O || !E) return s.say({
                    dam: "!",
                    err: "DAM JSON parse error."
                  }, m);
                  console.STAT && console.STAT(+/* @__PURE__ */ new Date(), E.length, "# on hear batch");
                  var I = o.puff;
                  (function P() {
                    for (var k = +/* @__PURE__ */ new Date(), d = 0, A; d < I && (A = E[d++]); ) s.hear(A, m);
                    E = E.slice(d), console.STAT && console.STAT(k, +/* @__PURE__ */ new Date() - k, "hear loop"), S(m), E.length && y(P, 0);
                  })();
                }), u = "";
                return;
              }
              if (j === "{" || (u["#"] || Object.plain(u)) && (_ = u)) {
                if (_) return g.one(_, m, w);
                r(u, function(O, E) {
                  if (O || !E) return s.say({
                    dam: "!",
                    err: "DAM JSON parse error."
                  }, m);
                  g.one(E, m, w);
                });
                return;
              }
            }
          };
          g.one = function(u, m, P) {
            var j, _, O, E, I;
            if (u.DBG && (u.DBG = I = {
              DBG: u.DBG
            }), I && (I.h = P), I && (I.hp = +/* @__PURE__ */ new Date()), (j = u["#"]) || (j = u["#"] = String.random(9)), !(O = n(j)) && (_ = u["##"], !(_ && (O = u["@"] || u.get && j) && b.check(E = O + _)))) {
              if ((u._ = function() {
              }).via = s.leap = m, (O = u["><"]) && typeof O == "string" && O.slice(0, 99).split(",").forEach(function(k) {
                this[k] = 1;
              }, u._.yo = {}), O = u.dam) {
                (O = s.hear[O]) && O(u, m, l), v(j);
                return;
              }
              (O = u.ok) && (u._.near = O["/"]);
              var P = +/* @__PURE__ */ new Date();
              I && (I.is = P), m.SI = j, v.ed = function(k) {
                j === k && (v.ed = 0, (k = b.s[j]) && (k.via = m, u.get && (k.it = u)));
              }, l.on("in", s.last = u), I && (I.hd = +/* @__PURE__ */ new Date()), console.STAT && console.STAT(P, +/* @__PURE__ */ new Date() - P, u.get ? "msg get" : u.put ? "msg put" : "msg"), v(j), E && v(E), s.leap = s.last = null;
            }
          }, g.c = g.d = 0, function() {
            var u = 0, m;
            s.hash = function(_, O) {
              var E, I, P, k = +/* @__PURE__ */ new Date();
              i(_.put, function d(A, T) {
                var D = (I || (I = P = T || "")).slice(0, 32768);
                if (E = String.hash(D, E), I = I.slice(32768), I) {
                  y(d, 0);
                  return;
                }
                console.STAT && console.STAT(k, +/* @__PURE__ */ new Date() - k, "say json+hash"), _._.$put = P, _["##"] = E, s.say(_, O), delete _._.$put;
              }, w);
            };
            function w(_, O) {
              var E;
              return O instanceof Object ? (Object.keys(O).sort().forEach(j, {
                to: E = {},
                on: O
              }), E) : O;
            }
            function j(_) {
              this.to[_] = this.on[_];
            }
            s.say = function(_, O) {
              var E;
              if ((E = this) && (E = E.to) && E.next && E.next(_), !_) return false;
              var I, P, k, d = _["@"], A = _._ || (_._ = function() {
              }), T = _.DBG, D = +/* @__PURE__ */ new Date();
              if (A.y = A.y || D, O || T && (T.y = D), (I = _["#"]) || (I = _["#"] = String.random(9)), !m && v(I), !(P = _["##"]) && a !== _.put && !A.via && d) {
                s.hash(_, O);
                return;
              }
              if (!O && d && (O = (E = b.s[d]) && (E.via || (E = E.it) && (E = E._) && E.via) || (E = s.last) && d === E["#"] && s.leap), !O && d) return b.s[d] ? void 0 : (console.STAT && console.STAT(+/* @__PURE__ */ new Date(), ++u, "total no peer to ack to"), false);
              if (d && !_.put && !P && ((b.s[d] || "").it || "")["##"]) return false;
              if (!O && s.way) return s.way(_);
              if (T && (T.yh = +/* @__PURE__ */ new Date()), !(k = A.raw)) {
                s.raw(_, O);
                return;
              }
              if (T && (T.yr = +/* @__PURE__ */ new Date()), !O || !O.id) {
                if (!Object.plain(O || o.peers)) return false;
                var D = +/* @__PURE__ */ new Date();
                o.puff;
                var $ = o.peers, C = Object.keys(O || o.peers || {});
                console.STAT && console.STAT(D, +/* @__PURE__ */ new Date() - D, "peer keys"), function N() {
                  var L = +/* @__PURE__ */ new Date();
                  m = 1;
                  var U = A.raw;
                  A.raw = k;
                  for (var R = 0, q; R < 9 && (q = (C || "")[R++]); ) (q = $[q] || (O || "")[q]) && s.say(_, q);
                  A.raw = U, m = 0, C = C.slice(R), console.STAT && console.STAT(L, +/* @__PURE__ */ new Date() - L, "say loop"), C.length && (y(N, 0), d && v(d));
                }();
                return;
              }
              if (!O.wire && s.wire && s.wire(O), I !== O.last) {
                if (O.last = I, O === A.via || (E = A.yo) && (E[O.url] || E[O.pid] || E[O.id])) return false;
                if (console.STAT && console.STAT(D, ((T || A).yp = +/* @__PURE__ */ new Date()) - (A.y || D), "say prep"), !m && d && v(d), O.batch) {
                  if (O.tail = (E = O.tail || 0) + k.length, O.tail <= o.pack) {
                    O.batch += (E ? "," : "") + k;
                    return;
                  }
                  S(O);
                }
                O.batch = "[";
                var M = +/* @__PURE__ */ new Date();
                setTimeout(function() {
                  console.STAT && console.STAT(M, +/* @__PURE__ */ new Date() - M, "0ms TO"), S(O);
                }, o.gap), h(k, O), console.STAT && d === O.SI && console.STAT(D, +/* @__PURE__ */ new Date() - O.SH, "say ack");
              }
            }, s.say.c = s.say.d = 0, s.raw = function(_, O) {
              if (!_) return "";
              var E = _._ || {}, I, P;
              if (P = E.raw) return P;
              if (typeof _ == "string") return _;
              var k = _["##"], d = _["@"];
              if (k && d) {
                if (!E.via && n(d + k)) return false;
                if (P = (b.s[d] || "").it) {
                  if (k === P["##"]) return false;
                  P["##"] || (P["##"] = k);
                }
              }
              if (!_.dam && !_["@"]) {
                var A = 0, T = [];
                P = o.peers;
                for (var D in P) {
                  var $ = P[D];
                  if (T.push($.url || $.pid || $.id), ++A > 6) break;
                }
                A > 1 && (_["><"] = T.join());
              }
              if (_.put && (P = _.ok) && (_.ok = {
                "@": (P["@"] || 1) - 1,
                "/": P["/"] == _._.near ? s.near : P["/"]
              }), I = E.$put) {
                P = {}, Object.keys(_).forEach(function(M) {
                  P[M] = _[M];
                }), P.put = ":])([:", i(P, function(M, B) {
                  if (!M) {
                    var N = +/* @__PURE__ */ new Date();
                    P = B.indexOf('"put":":])([:"'), C(a, B = B.slice(0, P + 6) + I + B.slice(P + 14)), console.STAT && console.STAT(N, +/* @__PURE__ */ new Date() - N, "say slice");
                  }
                });
                return;
              }
              i(_, C);
              function C(M, B) {
                M || (E.raw = B, s.say(_, O));
              }
            };
          }();
          function S(u) {
            var m = u.batch, w = typeof m == "string";
            if (w && (m += "]"), u.batch = u.tail = null, !!m && !(w ? 3 > m.length : !m.length)) {
              if (!w) try {
                m = m.length === 1 ? m[0] : JSON.stringify(m);
              } catch (j) {
                return o.log("DAM JSON stringify error", j);
              }
              m && h(m, u);
            }
          }
          function h(u, m) {
            try {
              var w = m.wire;
              m.say ? m.say(u) : w.send && w.send(u), s.say.d += u.length || 0, ++s.say.c;
            } catch {
              (m.queue = m.queue || []).push(u);
            }
          }
          return s.near = 0, s.hi = function(u) {
            var m = u.wire, w;
            if (!m) {
              s.wire(u.length && {
                url: u,
                id: u
              } || u);
              return;
            }
            u.id ? o.peers[u.url || u.id] = u : (w = u.id = u.id || u.url || String.random(9), s.say({
              dam: "?",
              pid: l.opt.pid
            }, o.peers[w] = u), delete b.s[u.last]), u.met || (s.near++, u.met = +/* @__PURE__ */ new Date(), l.on("hi", u)), w = u.queue, u.queue = [], setTimeout.each(w || [], function(j) {
              h(j, u);
            }, 0, 9);
          }, s.bye = function(u) {
            u.met && --s.near, delete u.met, l.on("bye", u);
            var m = +/* @__PURE__ */ new Date();
            m = m - (u.met || m), s.bye.time = ((s.bye.time || m) + m) / 2;
          }, s.hear["!"] = function(u, m) {
            o.log("Error:", u.err);
          }, s.hear["?"] = function(u, m) {
            u.pid && (m.pid || (m.pid = u.pid), u["@"]) || (s.say({
              dam: "?",
              pid: o.pid,
              "@": u["#"]
            }, m), delete b.s[m.last]);
          }, s.hear.mob = function(u, m) {
            if (u.peers) {
              var w = Object.keys(u.peers), j = w[Math.random() * w.length >> 0];
              j && (s.bye(m), s.hi(j));
            }
          }, l.on("create", function(u) {
            u.opt.pid = u.opt.pid || String.random(9), this.to.next(u), u.on("out", s.say);
          }), l.on("bye", function(u, m) {
            u = o.peers[u.id || u] || u, this.to.next(u), u.bye ? u.bye() : (m = u.wire) && m.close && m.close(), delete o.peers[u.id], u.wire = null;
          }), l.on("bye", function(u, m) {
            this.to.next(u), (m = console.STAT) && (m.peers = s.near), (m = u.url) && setTimeout(function() {
            }, o.lack || 9e3);
          }), l.on("hi", function(u, m) {
            if (this.to.next(u), (m = console.STAT) && (m.peers = s.near), !o.super) {
              var w = Object.keys(l.next || "");
              w.length > 9999 && !console.SUBS && console.log(console.SUBS = "Warning: You have more than 10K live GETs, which might use more bandwidth than your screen can show - consider `.off()`."), setTimeout.each(w, function(j) {
                var _ = l.next[j];
                if (o.super || (_.ask || "")[""]) {
                  s.say({
                    get: {
                      "#": j
                    }
                  }, u);
                  return;
                }
                setTimeout.each(Object.keys(_.ask || ""), function(O) {
                  O && s.say({
                    "##": String.hash((l.graph[j] || "")[O]),
                    get: {
                      "#": j,
                      ".": O
                    }
                  }, u);
                });
              });
            }
          }), s;
        }
        var a;
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
          var a = t.window || {}, l = p.WebSocket || a.WebSocket || a.webkitWebSocket || a.mozWebSocket;
          if (!l) return;
          p.WebSocket = l;
          var s = p.mesh = p.mesh || t.Mesh(i);
          s.wire || p.wire, s.wire = p.wire = o;
          function o(v) {
            try {
              if (!v || !v.url) return S && S(v);
              var g = v.url.replace(/^http/, "ws"), S = v.wire = new p.WebSocket(g);
              return S.onclose = function() {
                b(v), p.mesh.bye(v);
              }, S.onerror = function(h) {
                b(v);
              }, S.onopen = function() {
                p.mesh.hi(v);
              }, S.onmessage = function(h) {
                h && p.mesh.hear(h.data || h, v);
              }, S;
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
          function b(v) {
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
            setItem: function(p, a) {
              this[p] = a;
            },
            removeItem: function(p) {
              delete this[p];
            },
            getItem: function(p) {
              return this[p];
            }
          });
          var i = JSON.stringifyAsync || function(p, a, l, s) {
            var o;
            try {
              a(o, JSON.stringify(p, l, s));
            } catch (y) {
              a(y);
            }
          };
          Gun.on("create", function p(a) {
            this.to.next(a);
            var l = a.opt;
            a.graph;
            var s = [], o, y, b, n;
            if (l.localStorage === false) return;
            l.prefix = l.file || "gun/";
            try {
              o = p[l.prefix] = p[l.prefix] || JSON.parse(b = r.getItem(l.prefix)) || {};
            } catch {
              o = p[l.prefix] = {};
            }
            b = (b || "").length, a.on("get", function(g) {
              this.to.next(g);
              var S = g.get, h, u, m, w;
              !S || !(h = S["#"]) || (u = o[h] || w, u && (m = S["."]) && !Object.plain(m) && (u = Gun.state.ify({}, m, Gun.state.is(u, m), u[m], h)), Gun.on.get.ack(g, u));
            }), a.on("put", function(g) {
              this.to.next(g);
              var S = g.put, h = S["#"], u = S["."], m = g["#"], w = g.ok || "";
              if (o[h] = Gun.state.ify(o[h], u, S[">"], S[":"], h), n && b > 4999880) {
                a.on("in", {
                  "@": m,
                  err: "localStorage max!"
                });
                return;
              }
              !g["@"] && (!g._.via || Math.random() < w["@"] / w["/"]) && s.push(m), !y && (y = setTimeout(v, 9 + b / 333));
            });
            function v() {
              if (!s.length && ((setTimeout.turn || "").s || "").length) {
                setTimeout(v, 99);
                return;
              }
              var g = s;
              clearTimeout(y), y = false, s = [], i(o, function(S, h) {
                try {
                  !S && r.setItem(l.prefix, h);
                } catch (u) {
                  S = n = u || "localStorage failure";
                }
                S && (Gun.log(S + " Consider using GUN's IndexedDB plugin for RAD for more storage space, https://gun.eco/docs/RAD#install"), a.on("localStorage:error", {
                  err: S,
                  get: l.prefix,
                  put: o
                })), b = h.length, setTimeout.each(g, function(u) {
                  a.on("in", {
                    "@": u,
                    err: S,
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
          var A, T;
          return e("text.match"), typeof k != "string" ? false : (typeof d == "string" && (d = {
            "=": d
          }), d = d || {}, A = d["="] || d["*"] || d[">"] || d["<"], k === A ? true : T !== d["="] ? false : (A = d["*"] || d[">"] || d["<"], k.slice(0, (A || "").length) === A ? true : T !== d["*"] ? false : T !== d[">"] && T !== d["<"] ? k >= d[">"] && k <= d["<"] : T !== d[">"] && k >= d[">"] || T !== d["<"] && k <= d["<"]));
        }, f.text.hash = f.text.hash || function(k, d) {
          if (e("text.hash"), typeof k == "string") {
            if (d = d || 0, !k.length) return d;
            for (var A = 0, T = k.length, D; A < T; ++A) D = k.charCodeAt(A), d = (d << 5) - d + D, d |= 0;
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
          return e("list.map"), E(k, d, A);
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
        }, f.obj.as = f.obj.as || function(k, d, A, T) {
          return e("obj.as"), k[d] = k[d] || (T === A ? {} : A);
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
          function d(A, T) {
            j(this, T) && k !== this[T] || (this[T] = A);
          }
          f.obj.to = f.obj.to || function(A, T) {
            return e("obj.to"), T = T || {}, E(A, d, T), T;
          };
        }(), f.obj.copy = f.obj.copy || function(k) {
          return e("obj.copy"), k && JSON.parse(JSON.stringify(k));
        }, function() {
          function k(d, A) {
            var T = this.n, D;
            if (!(T && (A === T || m(T) && j(T, A))) && D !== A) return true;
          }
          f.obj.empty = f.obj.empty || function(d, A) {
            return e("obj.empty"), d ? !E(d, k, {
              n: A
            }) : true;
          };
        }(), function() {
          function k(T, D) {
            if (arguments.length === 2) {
              k.r = k.r || {}, k.r[T] = D;
              return;
            }
            k.r = k.r || [], k.r.push(T);
          }
          var d = Object.keys, A;
          Object.keys = Object.keys || function(T) {
            return A(T, function(D, $, C) {
              C($);
            });
          }, f.obj.map = A = f.obj.map || function(T, D, $) {
            e("obj.map");
            var C, M = 0, B, N, L, U, R = typeof D == "function";
            if (k.r = C, d && m(T) && (L = d(T), U = true), $ = $ || {}, c(T) || L) for (B = (L || T).length; M < B; M++) {
              var q = M + f.list.index;
              if (R) {
                if (N = U ? D.call($, T[L[M]], L[M], k) : D.call($, T[M], q, k), N !== C) return N;
              } else if (D === T[U ? L[M] : M]) return L ? L[M] : q;
            }
            else for (M in T) if (R) {
              if (j(T, M) && (N = $ ? D.call($, T[M], M, k) : D(T[M], M, k), N !== C)) return N;
            } else if (D === T[M]) return M;
            return R ? k.r : f.list.index ? 0 : -1;
          };
        }(), f.time = f.time || {}, f.time.is = f.time.is || function(k) {
          return e("time"), k ? k instanceof Date : +(/* @__PURE__ */ new Date()).getTime();
        };
        var h = f.fn.is, c = f.list.is, u = f.obj, m = u.is, j = u.has, E = u.map, t = {};
        t.is = function(k) {
          return e("val.is"), k === P ? false : k === null ? true : k === 1 / 0 ? false : p(k) || i(k) || n(k) ? true : t.link.is(k) || false;
        }, t.link = t.rel = {
          _: "#"
        }, function() {
          t.link.is = function(d) {
            if (e("val.link.is"), d && d[r] && !d._ && m(d)) {
              var A = {};
              if (E(d, k, A), A.id) return A.id;
            }
            return false;
          };
          function k(d, A) {
            var T = this;
            if (T.id) return T.id = false;
            if (A == r && p(d)) T.id = d;
            else return T.id = false;
          }
        }(), t.link.ify = function(k) {
          return e("val.link.ify"), O({}, r, k);
        }, f.obj.has._ = ".";
        var r = t.link._, P, i = f.bi.is, n = f.num.is, p = f.text.is, u = f.obj, m = u.is, O = u.put, E = u.map;
        f.val = f.val || t;
        var a = {
          _: "_"
        };
        a.soul = function(k, d) {
          return e("node.soul"), k && k._ && k._[d || o];
        }, a.soul.ify = function(k, d) {
          return e("node.soul.ify"), d = typeof d == "string" ? {
            soul: d
          } : d || {}, k = k || {}, k._ = k._ || {}, k._[o] = d.soul || k._[o] || s(), k;
        }, a.soul._ = t.link._, function() {
          a.is = function(d, A, T) {
            e("node.is");
            var D;
            return m(d) && (D = a.soul(d)) ? !E(d, k, {
              as: T,
              cb: A,
              s: D,
              n: d
            }) : false;
          };
          function k(d, A) {
            if (A !== a._) {
              if (!t.is(d)) return true;
              this.cb && this.cb.call(this.as, d, A, this.n, this.s);
            }
          }
        }(), function() {
          a.ify = function(d, A, T) {
            return e("node.ify"), A ? typeof A == "string" ? A = {
              soul: A
            } : typeof A == "function" && (A = {
              map: A
            }) : A = {}, A.map && (A.node = A.map.call(T, d, P, A.node || {})), (A.node = a.soul.ify(A.node || {}, A)) && E(d, k, {
              o: A,
              as: T
            }), A.node;
          };
          function k(d, A) {
            var T = this.o, D, $;
            if (T.map) {
              D = T.map.call(this.as, d, "" + A, T.node), $ === D ? w(T.node, A) : T.node && (T.node[A] = D);
              return;
            }
            t.is(d) && (T.node[A] = d);
          }
        }();
        var u = f.obj, m = u.is, w = u.del, E = u.map, l = f.text, s = l.random, o = a.soul._, P;
        f.node = f.node || a;
        var y = f.state;
        y.lex = function() {
          return e("state.lex"), y().toString(36).replace(".", "");
        }, y.to = function(k, d, A) {
          e("state.to");
          var T = (k || {})[d];
          return m(T) && (T = I(T)), y.ify(A, d, y.is(k, d), T, a.soul(k));
        }, function() {
          y.map = function(d, A, T) {
            e("state.map");
            var D, $ = m($ = d || A) ? $ : null;
            return d = h(d = d || A) ? d : null, $ && !d ? (A = n(A) ? A : y(), $[g] = $[g] || {}, E($, k, {
              o: $,
              s: A
            }), $) : (T = T || m(A) ? A : D, A = n(A) ? A : y(), function(C, M, B, N) {
              if (!d) return k.call({
                o: B,
                s: A
              }, C, M), C;
              d.call(T || this || {}, C, M, B, N), !(j(B, M) && D === B[M]) && k.call({
                o: B,
                s: A
              }, C, M);
            });
          };
          function k(d, A) {
            g !== A && y.ify(this.o, A, this.s);
          }
        }();
        var u = f.obj;
        u.as;
        var j = u.has, m = u.is, E = u.map, I = u.copy, b = f.num, n = b.is, v = f.fn, h = v.is, g = a._, P, S = {};
        (function() {
          S.is = function(A, T, D, $) {
            return e("graph.is"), !A || !m(A) || _(A) ? false : !E(A, k, {
              cb: T,
              fn: D,
              as: $
            });
          };
          function k(A, T) {
            if (!A || T !== a.soul(A) || !a.is(A, this.fn, this.as)) return true;
            this.cb && (d.n = A, d.as = this.as, this.cb.call(d.as, A, T, d));
          }
          function d(A) {
            A && a.is(d.n, A, d.as);
          }
        })(), function() {
          S.ify = function($, C, M) {
            e("graph.ify");
            var B = {
              path: [],
              obj: $
            };
            return C ? typeof C == "string" ? C = {
              soul: C
            } : typeof C == "function" && (C.map = C) : C = {}, typeof M == "string" && (C.soul = C.soul || M, M = P), C.soul && (B.link = t.link.ify(C.soul)), C.shell = (M || {}).shell, C.graph = C.graph || {}, C.seen = C.seen || [], C.as = C.as || M, k(C, B), C.root = B.node, C.graph;
          };
          function k($, C) {
            var M;
            return (M = D($, C)) ? M : (C.env = $, C.soul = A, a.ify(C.obj, d, C) && (C.link = C.link || t.link.ify(a.soul(C.node)), C.obj !== $.shell && ($.graph[t.link.is(C.link)] = C.node)), C);
          }
          function d($, C, M) {
            var B = this, N = B.env, L, U;
            if (a._ === C && j($, t.link._)) return M._;
            if (L = T($, C, M, B, N)) {
              if (C || (B.node = B.node || M || {}, j($, a._) && a.soul($) && (B.node._ = I($._)), B.node = a.soul.ify(B.node, t.link.is(B.link)), B.link = B.link || t.link.ify(a.soul(B.node))), (U = N.map) && (U.call(N.as || {}, $, C, M, B), j(M, C))) {
                if ($ = M[C], P === $) {
                  w(M, C);
                  return;
                }
                if (!(L = T($, C, M, B, N))) return;
              }
              if (!C) return B.node;
              if (L === true) return $;
              if (U = k(N, {
                obj: $,
                path: B.path.concat(C)
              }), !!U.node) return U.link;
            }
          }
          function A($) {
            var C = this, M = t.link.is(C.link), B = C.env.graph;
            C.link = C.link || t.link.ify($), C.link[t.link._] = $, C.node && C.node[a._] && (C.node[a._][t.link._] = $), j(B, M) && (B[$] = B[M], w(B, M));
          }
          function T($, C, M, B, N) {
            var L;
            if (t.is($)) return true;
            if (m($)) return 1;
            if (L = N.invalid) return $ = L.call(N.as || {}, $, C, M), T($, C, M, B, N);
            N.err = "Invalid value at '" + B.path.concat(C).join(".") + "'!", f.list.is($) && (N.err += " Use `.set(item)` instead of an Array.");
          }
          function D($, C) {
            for (var M = $.seen, B = M.length, N; B--; ) if (N = M[B], C.obj === N.obj) return N;
            M.push(C);
          }
        }(), S.node = function(k) {
          e("graph.node");
          var d = a.soul(k);
          if (d) return O({}, d, k);
        }, function() {
          S.to = function(d, A, T) {
            if (e("graph.to"), !!d) {
              var D = {};
              return T = T || {
                seen: {}
              }, E(d[A], k, {
                obj: D,
                graph: d,
                opt: T
              }), D;
            }
          };
          function k(d, A) {
            var T, D;
            if (a._ === A) {
              if (_(d, t.link._)) return;
              this.obj[A] = I(d);
              return;
            }
            if (!(T = t.link.is(d))) {
              this.obj[A] = d;
              return;
            }
            if (D = this.opt.seen[T]) {
              this.obj[A] = D;
              return;
            }
            this.obj[A] = this.opt.seen[T] = S.to(this.graph, T, this.opt);
          }
        }();
        var h = f.fn.is, u = f.obj, m = u.is, w = u.del, j = u.has, _ = u.empty, O = u.put, E = u.map, I = u.copy, P;
        f.graph = f.graph || S;
      }
    }();
  })(Ne);
  var gt = Ne.exports, hr = gt;
  const dr = wt(hr);
  var Le = {
    exports: {}
  };
  Le.exports;
  (function(x) {
    (function() {
      function e(c, t) {
        return t ? it(c) : c.slice ? e[r(c)] : function(i, p) {
          c(i = {
            exports: {}
          }), e[r(p)] = i.exports;
        };
        function r(i) {
          return i.split("/").slice(-1).toString().replace(".js", "");
        }
      }
      var f = x;
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
            xe.Buffer = e("buffer", 1).Buffer;
          } catch {
            console.log("Please `npm install buffer` or add it to your package.json !");
          }
          xe.btoa = function(r) {
            return Buffer.from(r, "binary").toString("base64");
          }, xe.atob = function(r) {
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
          const a = this.length;
          if (r === "hex") {
            const l = new Uint8Array(this);
            return [
              ...Array((p && p + 1 || a) - i).keys()
            ].map((s) => l[s + i].toString(16).padStart(2, "0")).join("");
          }
          if (r === "utf8") return Array.from({
            length: (p || a) - i
          }, (l, s) => String.fromCharCode(this[s + i])).join("");
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
              const l = arguments[1] || "utf8";
              if (l === "hex") {
                const s = i.match(/([\da-fA-F]{2})/g).map((o) => parseInt(o, 16));
                if (!s || !s.length) throw new TypeError("Invalid first argument for type 'hex'.");
                p = t.from(s);
              } else if (l === "utf8" || l === "binary") {
                const s = i.length, o = new Uint16Array(s);
                Array.from({
                  length: s
                }, (y, b) => o[b] = i.charCodeAt(b)), p = t.from(o);
              } else if (l === "base64") {
                const s = atob(i), o = s.length, y = new Uint8Array(o);
                Array.from({
                  length: o
                }, (b, n) => y[n] = s.charCodeAt(n)), p = t.from(y);
              } else l === "binary" ? p = t.from(i) : console.info("SafeBuffer.from unknown encoding: " + l);
              return p;
            }
            if (i.byteLength, i.byteLength ? i.byteLength : i.length) {
              let l;
              return i instanceof ArrayBuffer && (l = new Uint8Array(i)), t.from(l || i);
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
            return t.from(i.reduce((p, a) => p.concat(Array.from(a)), []));
          }
        }), r.prototype.from = r.from, r.prototype.toString = t.prototype.toString, c.exports = r;
      })(e, "./buffer"), e(function(c) {
        const t = e("./root"), r = {
          Buffer: e("./buffer")
        };
        var i = {}, p;
        if (JSON.parseAsync = JSON.parseAsync || function(l, s, o) {
          var y;
          try {
            s(y, JSON.parse(l, o));
          } catch (b) {
            s(b);
          }
        }, JSON.stringifyAsync = JSON.stringifyAsync || function(l, s, o, y) {
          var b;
          try {
            s(b, JSON.stringify(l, o, y));
          } catch (n) {
            s(n);
          }
        }, r.parse = function(l, s) {
          return new Promise(function(o, y) {
            JSON.parseAsync(l, function(b, n) {
              b ? y(b) : o(n);
            }, s);
          });
        }, r.stringify = function(l, s, o) {
          return new Promise(function(y, b) {
            JSON.stringifyAsync(l, function(n, v) {
              n ? b(n) : y(v);
            }, s, o);
          });
        }, t.window && (r.crypto = t.window.crypto || t.window.msCrypto, r.subtle = (r.crypto || i).subtle || (r.crypto || i).webkitSubtle, r.TextEncoder = t.window.TextEncoder, r.TextDecoder = t.window.TextDecoder, r.random = (l) => r.Buffer.from(r.crypto.getRandomValues(new Uint8Array(r.Buffer.alloc(l))))), !r.TextDecoder) {
          const { TextEncoder: l, TextDecoder: s } = e((p + "" == typeof f ? "." : "") + "./lib/text-encoding", 1);
          r.TextDecoder = s, r.TextEncoder = l;
        }
        if (!r.crypto) try {
          var a = e("crypto", 1);
          Object.assign(r, {
            crypto: a,
            random: (s) => r.Buffer.from(a.randomBytes(s))
          });
          const { Crypto: l } = e("@peculiar/webcrypto", 1);
          r.ossl = r.subtle = new l({
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
        }, i.jwk = function(p, a) {
          p = p.split(".");
          var l = p[0], s = p[1], o = {
            kty: "EC",
            crv: "P-256",
            x: l,
            y: s,
            ext: true
          };
          return o.key_ops = a ? [
            "sign"
          ] : [
            "verify"
          ], a && (o.d = a), o;
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
        }, i.parse = async function(a) {
          try {
            var l = typeof a == "string";
            return l && a.slice(0, 4) === "SEA{" && (a = a.slice(3)), l ? await r.parse(a) : a;
          } catch {
          }
          return a;
        }, t.opt = i, c.exports = i;
      })(e, "./settings"), e(function(c) {
        var t = e("./shim");
        c.exports = async function(r, i) {
          var p = typeof r == "string" ? r : await t.stringify(r), a = await t.subtle.digest({
            name: i || "SHA-256"
          }, new t.TextEncoder().encode(p));
          return t.Buffer.from(a);
        };
      })(e, "./sha256"), e(function(c) {
        const t = e("./shim"), r = t.subtle, i = t.ossl ? t.ossl : r, p = (a) => i.digest({
          name: "SHA-1"
        }, new ArrayBuffer(a));
        c.exports = p;
      })(e, "./sha1"), e(function(c) {
        var t = e("./root"), r = e("./shim"), i = e("./settings"), p = e("./sha256"), a;
        t.work = t.work || (async (l, s, o, y) => {
          try {
            var b = (s || {}).epub || s;
            if (y = y || {}, b instanceof Function && (o = b, b = a), l = typeof l == "string" ? l : await r.stringify(l), (y.name || "").toLowerCase().slice(0, 3) === "sha") {
              var n = r.Buffer.from(await p(l, y.name), "binary").toString(y.encode || "base64");
              if (o) try {
                o(n);
              } catch (h) {
                console.log(h);
              }
              return n;
            }
            b = b || r.random(9);
            var v = await (r.ossl || r.subtle).importKey("raw", new r.TextEncoder().encode(l), {
              name: y.name || "PBKDF2"
            }, false, [
              "deriveBits"
            ]), g = await (r.ossl || r.subtle).deriveBits({
              name: y.name || "PBKDF2",
              iterations: y.iterations || i.pbkdf2.iter,
              salt: new r.TextEncoder().encode(y.salt || b),
              hash: y.hash || i.pbkdf2.hash
            }, v, y.length || i.pbkdf2.ks * 8);
            l = r.random(l.length);
            var S = r.Buffer.from(g, "binary").toString(y.encode || "base64");
            if (o) try {
              o(S);
            } catch (h) {
              console.log(h);
            }
            return S;
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
            } catch (a) {
              console.log(a);
            }
            return;
          } catch (a) {
            if (console.log(a), t.err = a, t.throw) throw a;
            i && i();
            return;
          }
        }), t.pair = t.pair || (async (i, p) => {
          try {
            var a = r.ossl || r.subtle, l = await r.subtle.generateKey({
              name: "ECDSA",
              namedCurve: "P-256"
            }, true, [
              "sign",
              "verify"
            ]).then(async (y) => {
              var b = {};
              b.priv = (await r.subtle.exportKey("jwk", y.privateKey)).d;
              var n = await r.subtle.exportKey("jwk", y.publicKey);
              return b.pub = n.x + "." + n.y, b;
            });
            try {
              var s = await a.generateKey({
                name: "ECDH",
                namedCurve: "P-256"
              }, true, [
                "deriveKey"
              ]).then(async (y) => {
                var b = {};
                b.epriv = (await a.exportKey("jwk", y.privateKey)).d;
                var n = await a.exportKey("jwk", y.publicKey);
                return b.epub = n.x + "." + n.y, b;
              });
            } catch (y) {
              if (t.window) throw y;
              if (y == "Error: ECDH is not a supported algorithm") console.log("Ignoring ECDH...");
              else throw y;
            }
            s = s || {};
            var o = {
              pub: l.pub,
              priv: l.priv,
              epub: s.epub,
              epriv: s.epriv
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
        var t = e("./root"), r = e("./shim"), i = e("./settings"), p = e("./sha256"), a;
        t.sign = t.sign || (async (l, s, o, y) => {
          try {
            if (y = y || {}, !(s || y).priv) {
              if (!t.I) throw "No signing key.";
              s = await t.I(null, {
                what: l,
                how: "sign",
                why: y.why
              });
            }
            if (a === l) throw "`undefined` not allowed.";
            var b = await i.parse(l), n = y.check = y.check || b;
            if (t.verify && (t.opt.check(n) || n && n.s && n.m) && a !== await t.verify(n, s)) {
              var m = await i.parse(n);
              if (y.raw || (m = "SEA" + await r.stringify(m)), o) try {
                o(m);
              } catch (j) {
                console.log(j);
              }
              return m;
            }
            var v = s.pub, g = s.priv, S = i.jwk(v, g), h = await p(b), u = await (r.ossl || r.subtle).importKey("jwk", S, {
              name: "ECDSA",
              namedCurve: "P-256"
            }, false, [
              "sign"
            ]).then((w) => (r.ossl || r.subtle).sign({
              name: "ECDSA",
              hash: {
                name: "SHA-256"
              }
            }, w, new Uint8Array(h))), m = {
              m: b,
              s: r.Buffer.from(u, "binary").toString(y.encode || "base64")
            };
            if (y.raw || (m = "SEA" + await r.stringify(m)), o) try {
              o(m);
            } catch (w) {
              console.log(w);
            }
            return m;
          } catch (w) {
            if (console.log(w), t.err = w, t.throw) throw w;
            o && o();
            return;
          }
        }), c.exports = t.sign;
      })(e, "./sign"), e(function(c) {
        var t = e("./root"), r = e("./shim"), i = e("./settings"), p = e("./sha256"), a;
        t.verify = t.verify || (async (o, y, b, n) => {
          try {
            var v = await i.parse(o);
            if (y === false) {
              var g = await i.parse(v.m);
              if (b) try {
                b(g);
              } catch (E) {
                console.log(E);
              }
              return g;
            }
            n = n || {};
            var S = y.pub || y, h = t.opt.slow_leak ? await t.opt.slow_leak(S) : await (r.ossl || r.subtle).importKey("jwk", i.jwk(S), {
              name: "ECDSA",
              namedCurve: "P-256"
            }, false, [
              "verify"
            ]), u = await p(v.m), m, w, j, _;
            try {
              if (m = r.Buffer.from(v.s, n.encode || "base64"), w = new Uint8Array(m), j = await (r.ossl || r.subtle).verify({
                name: "ECDSA",
                hash: {
                  name: "SHA-256"
                }
              }, h, w, new Uint8Array(u)), !j) throw "Signature did not match.";
            } catch {
              if (t.opt.fallback) return await t.opt.fall_verify(o, y, b, n);
            }
            var O = j ? await i.parse(v.m) : a;
            if (b) try {
              b(O);
            } catch (E) {
              console.log(E);
            }
            return O;
          } catch (E) {
            if (console.log(E), t.err = E, t.throw) throw E;
            b && b();
            return;
          }
        }), c.exports = t.verify;
        var l = {};
        t.opt.slow_leak = (o) => {
          if (l[o]) return l[o];
          var y = i.jwk(o);
          return l[o] = (r.ossl || r.subtle).importKey("jwk", y, {
            name: "ECDSA",
            namedCurve: "P-256"
          }, false, [
            "verify"
          ]), l[o];
        };
        var s = t.opt;
        t.opt.fall_verify = async function(o, y, b, n, v) {
          if (v === t.opt.fallback) throw "Signature did not match";
          v = v || 1;
          var g = o || "";
          o = t.opt.unpack(o) || o;
          var S = await i.parse(o), h = y.pub || y, u = await t.opt.slow_leak(h), m = v <= t.opt.fallback ? r.Buffer.from(await r.subtle.digest({
            name: "SHA-256"
          }, new r.TextEncoder().encode(await i.parse(S.m)))) : await p(S.m), w, j, _;
          try {
            if (w = r.Buffer.from(S.s, n.encode || "base64"), j = new Uint8Array(w), _ = await (r.ossl || r.subtle).verify({
              name: "ECDSA",
              hash: {
                name: "SHA-256"
              }
            }, u, j, new Uint8Array(m)), !_) throw "Signature did not match.";
          } catch {
            try {
              w = r.Buffer.from(S.s, "utf8"), j = new Uint8Array(w), _ = await (r.ossl || r.subtle).verify({
                name: "ECDSA",
                hash: {
                  name: "SHA-256"
                }
              }, u, j, new Uint8Array(m));
            } catch {
              if (!_) throw "Signature did not match.";
            }
          }
          var O = _ ? await i.parse(S.m) : a;
          if (s.fall_soul = g["#"], s.fall_key = g["."], s.fall_val = o, s.fall_state = g[">"], b) try {
            b(O);
          } catch (E) {
            console.log(E);
          }
          return O;
        }, t.opt.fallback = 2;
      })(e, "./verify"), e(function(c) {
        var t = e("./shim"), r = e("./settings"), i = e("./sha256");
        const p = async (a, l, s) => {
          const o = a + (l || t.random(8)).toString("utf8"), y = t.Buffer.from(await i(o), "binary"), b = r.keyToJwk(y);
          return await t.subtle.importKey("jwk", b, {
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
        t.encrypt = t.encrypt || (async (a, l, s, o) => {
          try {
            o = o || {};
            var y = (l || o).epriv || l;
            if (p === a) throw "`undefined` not allowed.";
            if (!y) {
              if (!t.I) throw "No encryption key.";
              l = await t.I(null, {
                what: a,
                how: "encrypt",
                why: o.why
              }), y = l.epriv || l;
            }
            var b = typeof a == "string" ? a : await r.stringify(a), n = {
              s: r.random(9),
              iv: r.random(15)
            }, v = await i(y, n.s, o).then((S) => r.subtle.encrypt({
              name: o.name || "AES-GCM",
              iv: new Uint8Array(n.iv)
            }, S, new r.TextEncoder().encode(b))), g = {
              ct: r.Buffer.from(v, "binary").toString(o.encode || "base64"),
              iv: n.iv.toString(o.encode || "base64"),
              s: n.s.toString(o.encode || "base64")
            };
            if (o.raw || (g = "SEA" + await r.stringify(g)), s) try {
              s(g);
            } catch (S) {
              console.log(S);
            }
            return g;
          } catch (S) {
            if (console.log(S), t.err = S, t.throw) throw S;
            s && s();
            return;
          }
        }), c.exports = t.encrypt;
      })(e, "./encrypt"), e(function(c) {
        var t = e("./root"), r = e("./shim"), i = e("./settings"), p = e("./aeskey");
        t.decrypt = t.decrypt || (async (a, l, s, o) => {
          try {
            o = o || {};
            var y = (l || o).epriv || l;
            if (!y) {
              if (!t.I) throw "No decryption key.";
              l = await t.I(null, {
                what: a,
                how: "decrypt",
                why: o.why
              }), y = l.epriv || l;
            }
            var b = await i.parse(a), n, v, g;
            try {
              n = r.Buffer.from(b.s, o.encode || "base64"), v = r.Buffer.from(b.iv, o.encode || "base64"), g = r.Buffer.from(b.ct, o.encode || "base64");
              var S = await p(y, n, o).then((u) => r.subtle.decrypt({
                name: o.name || "AES-GCM",
                iv: new Uint8Array(v),
                tagLength: 128
              }, u, new Uint8Array(g)));
            } catch {
              if (o.encode === "utf8") throw "Could not decrypt";
              if (t.opt.fallback) return o.encode = "utf8", await t.decrypt(a, l, s, o);
            }
            var h = await i.parse(new r.TextDecoder("utf8").decode(S));
            if (s) try {
              s(h);
            } catch (u) {
              console.log(u);
            }
            return h;
          } catch (u) {
            if (console.log(u), t.err = u, t.throw) throw u;
            s && s();
            return;
          }
        }), c.exports = t.decrypt;
      })(e, "./decrypt"), e(function(c) {
        var t = e("./root"), r = e("./shim");
        e("./settings"), t.secret = t.secret || (async (p, a, l, s) => {
          try {
            if (s = s || {}, !a || !a.epriv || !a.epub) {
              if (!t.I) throw "No secret mix.";
              a = await t.I(null, {
                what: p,
                how: "secret",
                why: s.why
              });
            }
            var o = p.epub || p, y = a.epub, b = a.epriv, n = r.ossl || r.subtle, v = i(o), g = Object.assign({
              public: await n.importKey(...v, true, [])
            }, {
              name: "ECDH",
              namedCurve: "P-256"
            }), S = i(y, b), h = await n.importKey(...S, false, [
              "deriveBits"
            ]).then(async (m) => {
              var w = await n.deriveBits(g, m, 256), j = new Uint8Array(w), _ = await n.importKey("raw", j, {
                name: "AES-GCM",
                length: 256
              }, true, [
                "encrypt",
                "decrypt"
              ]);
              return n.exportKey("jwk", _).then(({ k: O }) => O);
            }), u = h;
            if (l) try {
              l(u);
            } catch (m) {
              console.log(m);
            }
            return u;
          } catch (m) {
            if (console.log(m), t.err = m, t.throw) throw m;
            l && l();
            return;
          }
        });
        var i = (p, a) => {
          var [l, s] = p.split("."), o = a ? {
            d: a
          } : {};
          return [
            "jwk",
            Object.assign(o, {
              x: l,
              y: s,
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
        t.certify = t.certify || (async (r, i = {}, p, a, l = {}) => {
          try {
            if (console.log("SEA.certify() is an early experimental community supported method that may change API behavior without warning in any future version."), r = (() => {
              var u = [];
              if (r) {
                if ((typeof r == "string" || Array.isArray(r)) && r.indexOf("*") > -1) return "*";
                if (typeof r == "string") return r;
                if (Array.isArray(r)) {
                  if (r.length === 1 && r[0]) return typeof r[0] == "object" && r[0].pub ? r[0].pub : typeof r[0] == "string" ? r[0] : null;
                  r.map((m) => {
                    typeof m == "string" ? u.push(m) : typeof m == "object" && m.pub && u.push(m.pub);
                  });
                }
                return typeof r == "object" && r.pub ? r.pub : u.length > 0 ? u : null;
              }
            })(), !r) return console.log("No certificant found.");
            const o = l.expiry && (typeof l.expiry == "number" || typeof l.expiry == "string") ? parseFloat(l.expiry) : null, y = (i || {}).read ? i.read : null, b = (i || {}).write ? i.write : typeof i == "string" || Array.isArray(i) || i["+"] || i["#"] || i["."] || i["="] || i["*"] || i[">"] || i["<"] ? i : null, n = (l || {}).block || (l || {}).blacklist || (l || {}).ban || {}, v = n.read && (typeof n.read == "string" || (n.read || {})["#"]) ? n.read : null, g = typeof n == "string" ? n : n.write && (typeof n.write == "string" || n.write["#"]) ? n.write : null;
            if (!y && !b) return console.log("No policy found.");
            const S = JSON.stringify({
              c: r,
              ...o ? {
                e: o
              } : {},
              ...y ? {
                r: y
              } : {},
              ...b ? {
                w: b
              } : {},
              ...v ? {
                rb: v
              } : {},
              ...g ? {
                wb: g
              } : {}
            });
            var s = await t.sign(S, p, null, {
              raw: 1
            });
            if (l.raw || (s = "SEA" + JSON.stringify(s)), a) try {
              a(s);
            } catch (u) {
              console.log(u);
            }
            return s;
          } catch (o) {
            if (t.err = o, t.throw) throw o;
            a && a();
            return;
          }
        }), c.exports = t.certify;
      })(e, "./certify"), e(function(c) {
        var t = e("./shim"), r = e("./root");
        r.work = e("./work"), r.sign = e("./sign"), r.verify = e("./verify"), r.encrypt = e("./encrypt"), r.decrypt = e("./decrypt"), r.certify = e("./certify"), r.random = r.random || t.random, r.Buffer = r.Buffer || e("./buffer"), r.keyid = r.keyid || (async (i) => {
          try {
            const p = t.Buffer.concat(i.replace(/-/g, "+").replace(/_/g, "/").split(".").map((o) => t.Buffer.from(o, "base64"))), a = t.Buffer.concat([
              t.Buffer.from([
                153,
                p.length / 256,
                p.length % 256
              ]),
              p
            ]), l = await sha1hash(a), s = t.Buffer.from(l, "binary");
            return s.toString("hex", s.length - 8);
          } catch (p) {
            throw console.log(p), p;
          }
        }), ((r.window || {}).GUN || {}).SEA = r, c.exports = r;
      })(e, "./sea"), e(function(c) {
        var t = e("./sea"), r, i;
        t.window ? r = t.window.GUN || {
          chain: {}
        } : r = e((i + "" == typeof f ? "." : "") + "./gun", 1), t.GUN = r;
        function p(l) {
          this._ = {
            $: this
          };
        }
        p.prototype = function() {
          function l() {
          }
          return l.prototype = r.chain, new l();
        }(), p.prototype.constructor = p, r.chain.user = function(l) {
          var s = this, y = s.back(-1), o;
          if (l) return l = t.opt.pub((l._ || "")["#"]) || l, y.get("~" + l);
          if (o = y.back("user")) return o;
          var y = y._, b = y, n = b.opt.uuid || a;
          return (b = (o = b.user = s.chain(new p()))._).opt = {}, b.opt.uuid = function(v) {
            var g = n(), S = y.user;
            return !S || !(S = S.is) || !(S = S.pub) || (g = "~" + S + "/" + g, v && v.call && v(null, g)), g;
          }, o;
        };
        function a() {
          return r.state().toString(36).replace(".", "");
        }
        r.User = p, p.GUN = r, p.SEA = r.SEA = t, c.exports = p;
      })(e, "./user"), e(function(c) {
        var t, r = "" + t != typeof GUN ? GUN || {
          chain: {}
        } : e(("" + t == typeof f ? "." : "") + "./gun", 1);
        r.chain.then = function(i, p) {
          var a = this, l = new Promise(function(s, o) {
            a.once(s, p);
          });
          return i ? l.then(i) : l;
        };
      })(e, "./then"), e(function(c) {
        var t = e("./user"), r = t.SEA, i = t.GUN, p = function() {
        };
        t.prototype.create = function(...a) {
          var l = typeof a[0] == "object" && (a[0].pub || a[0].epub) ? a[0] : typeof a[1] == "object" && (a[1].pub || a[1].epub) ? a[1] : null, s = l && (l.pub || l.epub) ? l.pub : typeof a[0] == "string" ? a[0] : null, o = l && (l.pub || l.epub) ? l : s && typeof a[1] == "string" ? a[1] : null, y = a.filter((u) => typeof u == "function")[0] || null, b = a && a.length > 1 && typeof a[a.length - 1] == "object" ? a[a.length - 1] : {}, n = this, v = n._, g = n.back(-1);
          if (y = y || p, b = b || {}, b.check !== false) {
            var S;
            if (s || (S = "No user."), (o || "").length < 8 && (S = "Password too short!"), S) return y({
              err: i.log(S)
            }), n;
          }
          if (v.ing) return (y || p)({
            err: i.log("User is already being created or authenticated!"),
            wait: true
          }), n;
          v.ing = true;
          var h = {};
          return h.a = function(u) {
            if (h.pubs = u, u && !b.already) {
              var m = {
                err: i.log("User already created!")
              };
              v.ing = false, (y || p)(m), n.leave();
              return;
            }
            h.salt = String.random(64), r.work(o, h.salt, h.b);
          }, h.b = function(u) {
            h.proof = u, l ? h.c(l) : r.pair(h.c);
          }, h.c = function(u) {
            var m;
            h.pair = u || {}, (m = v.root.user) && (m._.sea = u, m.is = {
              pub: u.pub,
              epub: u.epub,
              alias: s
            }), h.data = {
              pub: u.pub
            }, h.d();
          }, h.d = function() {
            h.data.alias = s, h.e();
          }, h.e = function() {
            h.data.epub = h.pair.epub, r.encrypt({
              priv: h.pair.priv,
              epriv: h.pair.epriv
            }, h.proof, h.f, {
              raw: 1
            });
          }, h.f = function(u) {
            h.data.auth = JSON.stringify({
              ek: u,
              s: h.salt
            }), h.g(h.data.auth);
          }, h.g = function(u) {
            var m;
            h.data.auth = h.data.auth || u, g.get(m = "~" + h.pair.pub).put(h.data).on(h.h);
            var w = {};
            w[m] = {
              "#": m
            }, g.get("~@" + s).put(w).get(m).on(h.i);
          }, h.h = function(u, m, w, j) {
            j.off(), h.h.ok = 1, h.i();
          }, h.i = function(u, m, w, j) {
            j && (h.i.ok = 1, j.off()), !(!h.h.ok || !h.i.ok) && (v.ing = false, y({
              ok: 0,
              pub: h.pair.pub
            }), p === y && (l ? n.auth(l) : n.auth(s, o)));
          }, g.get("~@" + s).once(h.a), n;
        }, t.prototype.leave = function(a, l) {
          var s = this, o = s.back(-1)._.user;
          if (o && (delete o.is, delete o._.is, delete o._.sea), r.window) try {
            var y = {};
            y = r.window.sessionStorage, delete y.recall, delete y.pair;
          } catch {
          }
          return s;
        };
      })(e, "./create"), e(function(c) {
        var t = e("./user"), r = t.SEA, i = t.GUN, p = function() {
        };
        t.prototype.auth = function(...l) {
          var s = typeof l[0] == "object" && (l[0].pub || l[0].epub) ? l[0] : typeof l[1] == "object" && (l[1].pub || l[1].epub) ? l[1] : null, o = !s && typeof l[0] == "string" ? l[0] : null, y = (o || s && !(s.priv && s.epriv)) && typeof l[1] == "string" ? l[1] : null, b = l.filter((w) => typeof w == "function")[0] || null, n = l && l.length > 1 && typeof l[l.length - 1] == "object" ? l[l.length - 1] : {}, v = this, g = v._, S = v.back(-1);
          if (g.ing) return (b || p)({
            err: i.log("User is already being created or authenticated!"),
            wait: true
          }), v;
          g.ing = true;
          var h = {}, u, m = 9;
          return h.a = function(w) {
            if (!w) return h.b();
            if (!w.pub) {
              var j = [];
              return Object.keys(w).forEach(function(_) {
                _ != "_" && j.push(w[_]);
              }), h.b(j);
            }
            if (h.name) return h.f(w);
            h.c((h.data = w).auth);
          }, h.b = function(w) {
            var j = (h.list = (h.list || []).concat(w || [])).shift();
            if (u === j) {
              if (h.name) return h.err("Your user account is not published for dApps to access, please consider syncing it online, or allowing local access by adding your device as a peer.");
              if (o && m--) {
                S.get("~@" + o).once(h.a);
                return;
              }
              return h.err("Wrong user or password.");
            }
            S.get(j).once(h.a);
          }, h.c = function(w) {
            if (u === w) return h.b();
            if (typeof w == "string") return h.c(a(w));
            r.work(y, (h.auth = w).s, h.d, h.enc);
          }, h.d = function(w) {
            r.decrypt(h.auth.ek, w, h.e, h.enc);
          }, h.e = function(w) {
            if (u === w) return h.enc ? (h.enc = null, h.b()) : (h.enc = {
              encode: "utf8"
            }, h.c(h.auth));
            h.half = w, h.f(h.data);
          }, h.f = function(w) {
            var j = h.half || {}, _ = h.data || {};
            h.g(h.lol = {
              pub: w.pub || _.pub,
              epub: w.epub || _.epub,
              priv: w.priv || j.priv,
              epriv: w.epriv || j.epriv
            });
          }, h.g = function(w) {
            if (!w || !w.pub || !w.epub) return h.b();
            h.pair = w;
            var j = S._.user, _ = j._;
            _.tag;
            var O = _.opt;
            _ = j._ = S.get("~" + w.pub)._, _.opt = O, j.is = {
              pub: w.pub,
              epub: w.epub,
              alias: o || w.pub
            }, _.sea = h.pair, g.ing = false;
            try {
              y && u == (a(g.root.graph["~" + w.pub].auth) || "")[":"] && (n.shuffle = n.change = y);
            } catch {
            }
            if (n.change ? h.z() : (b || p)(_), r.window && (v.back("user")._.opt || n).remember) try {
              var E = {};
              E = r.window.sessionStorage, E.recall = true, E.pair = JSON.stringify(w);
            } catch {
            }
            try {
              S._.tag.auth ? S._.on("auth", _) : setTimeout(function() {
                S._.on("auth", _);
              }, 1);
            } catch (I) {
              i.log("Your 'auth' callback crashed with:", I);
            }
          }, h.h = function(w) {
            if (!w) return h.b();
            if (o = w.alias, o || (o = w.alias = "~" + s.pub), !w.auth) return h.g(s);
            s = null, h.c((h.data = w).auth);
          }, h.z = function() {
            h.salt = String.random(64), r.work(n.change, h.salt, h.y);
          }, h.y = function(w) {
            r.encrypt({
              priv: h.pair.priv,
              epriv: h.pair.epriv
            }, w, h.x, {
              raw: 1
            });
          }, h.x = function(w) {
            h.w(JSON.stringify({
              ek: w,
              s: h.salt
            }));
          }, h.w = function(w) {
            if (n.shuffle) {
              console.log("migrate core account from UTF8 & shuffle");
              var j = {};
              Object.keys(h.data).forEach(function(_) {
                j[_] = h.data[_];
              }), delete j._, j.auth = w, S.get("~" + h.pair.pub).put(j);
            }
            S.get("~" + h.pair.pub).get("auth").put(w, b || p);
          }, h.err = function(w) {
            var j = {
              err: i.log(w || "User cannot be found!")
            };
            g.ing = false, (b || p)(j);
          }, h.plugin = function(w) {
            if (!(h.name = w)) return h.err();
            var j = [
              w
            ];
            w[0] !== "~" && (j[1] = "~" + w, j[2] = "~@" + w), h.b(j);
          }, s ? s.priv && s.epriv ? h.g(s) : S.get("~" + s.pub).once(h.h) : o ? S.get("~@" + o).once(h.a) : !o && !y && r.name(h.plugin), v;
        };
        function a(l) {
          if (typeof l != "string") return l;
          try {
            l = JSON.parse(l);
          } catch {
            l = {};
          }
          return l;
        }
      })(e, "./auth"), e(function(c) {
        var t = e("./user"), r = t.SEA;
        t.GUN, t.prototype.recall = function(i, p) {
          var a = this, l = a.back(-1);
          if (i = i || {}, i && i.sessionStorage) {
            if (r.window) try {
              var s = {};
              s = r.window.sessionStorage, s && (l._.opt.remember = true, (a.back("user")._.opt || i).remember = true, (s.recall || s.pair) && l.user().auth(JSON.parse(s.pair), p));
            } catch {
            }
            return a;
          }
          return a;
        };
      })(e, "./recall"), e(function(c) {
        var t = e("./user"), r = t.SEA, i = t.GUN, p = function() {
        };
        t.prototype.pair = function() {
          var a = this, l;
          try {
            l = new Proxy({
              DANGER: "\u2620"
            }, {
              get: function(s, o, y) {
                if (!(!a.is || !(a._ || "").sea)) return a._.sea[o];
              }
            });
          } catch {
          }
          return l;
        }, t.prototype.delete = async function(a, l, s) {
          console.log("user.delete() IS DEPRECATED AND WILL BE MOVED TO A MODULE!!!");
          var o = this;
          o.back(-1);
          var y = o.back("user");
          try {
            y.auth(a, l, function(b) {
              var n = (y.is || {}).pub;
              y.map().once(function() {
                this.put(null);
              }), y.leave(), (s || p)({
                ok: 0
              });
            });
          } catch (b) {
            i.log("User.delete failed! Error:", b);
          }
          return o;
        }, t.prototype.alive = async function() {
          console.log("user.alive() IS DEPRECATED!!!");
          const a = this.back(-1);
          try {
            return await authRecall(a), a._.user._;
          } catch {
            const s = "No session!";
            throw i.log(s), {
              err: s
            };
          }
        }, t.prototype.trust = async function(a) {
          console.log("`.trust` API MAY BE DELETED OR CHANGED OR RENAMED, DO NOT USE!"), i.is(a) && a.get("pub").get((l, s) => {
            console.log(l, s);
          }), a.get("trust").get(path).put(theirPubkey);
        }, t.prototype.grant = function(a, l) {
          console.log("`.grant` API MAY BE DELETED OR CHANGED OR RENAMED, DO NOT USE!");
          var s = this, o = s.back(-1).user(), y = o._.sea, b = "";
          return s.back(function(n) {
            n.is || (b += n.get || "");
          }), async function() {
            var n, v = await o.get("grant").get(y.pub).get(b).then();
            v = await r.decrypt(v, y), v || (v = r.random(16).toString(), n = await r.encrypt(v, y), o.get("grant").get(y.pub).get(b).put(n));
            var g = a.get("pub").then(), S = a.get("epub").then();
            g = await g, S = await S;
            var h = await r.secret(S, y);
            n = await r.encrypt(v, h), o.get("grant").get(g).get(b).put(n, l);
          }(), s;
        }, t.prototype.secret = function(a, l) {
          console.log("`.secret` API MAY BE DELETED OR CHANGED OR RENAMED, DO NOT USE!");
          var s = this, o = s.back(-1).user(), y = o.pair(), b = "";
          return s.back(function(n) {
            n.is || (b += n.get || "");
          }), async function() {
            var n, v = await o.get("trust").get(y.pub).get(b).then();
            v = await r.decrypt(v, y), v || (v = r.random(16).toString(), n = await r.encrypt(v, y), o.get("trust").get(y.pub).get(b).put(n)), n = await r.encrypt(a, v), s.put(n, l);
          }(), s;
        }, c.exports = t;
      })(e, "./share"), e(function(c) {
        var t = e("./sea"), r = e("./settings"), i, p = (t.window || "").GUN || e(("" + i == typeof f ? "." : "") + "./gun", 1);
        p.on("opt", function(n) {
          n.sea || (n.sea = {
            own: {}
          }, n.on("put", a, n)), this.to.next(n);
        });
        function a(n) {
          var v = this, g = v.as, S = n.put, h = S["#"], u = S["."], m = S[":"], w = S[">"], j = n["#"], _;
          if (!(!h || !u)) {
            if ((n._ || "").faith && (g.opt || "").faith && typeof n._ == "function") {
              t.opt.pack(S, function(E) {
                t.verify(E, false, function(I) {
                  S["="] = t.opt.unpack(I), v.to.next(n);
                });
              });
              return;
            }
            var O = function(E) {
              g.on("in", {
                "@": j,
                err: n.err = E
              });
            };
            if ((n._ || "").DBG && ((n._ || "").DBG.c = +/* @__PURE__ */ new Date()), 0 <= h.indexOf("<?") && (_ = parseFloat(h.split("<?")[1] || ""), _ && w < p.state() - _ * 1e3)) {
              (_ = n._) && _.stun && _.stun--;
              return;
            }
            if (h === "~@") {
              a.alias(v, n, m, u, h, g, O);
              return;
            }
            if (h.slice(0, 2) === "~@") {
              a.pubs(v, n, m, u, h, g, O);
              return;
            }
            if (_ = t.opt.pub(h)) {
              a.pub(v, n, m, u, h, g, O, g.user || "", _);
              return;
            }
            if (0 <= h.indexOf("#")) {
              a.hash(v, n, m, u, h, g, O);
              return;
            }
            a.any(v, n, m, u, h, g, O, g.user || "");
          }
        }
        a.hash = function(n, v, g, S, h, u, m) {
          t.work(g, null, function(w) {
            function j(_) {
              let O = "";
              for (let E = 0; E < _.length; E++) O += E - 1 & 1 ? "" : String.fromCharCode(parseInt(_.substring(E - 1, E + 1), 16));
              return btoa(O);
            }
            if (w && w === S.split("#").slice(-1)[0]) return n.to.next(v);
            if (w && w === j(S.split("#").slice(-1)[0])) return n.to.next(v);
            m("Data hash not same as hash!");
          }, {
            name: "SHA-256"
          });
        }, a.alias = function(n, v, g, S, h, u, m) {
          if (!g) return m("Data must exist!");
          if ("~@" + S === s(g)) return n.to.next(v);
          m("Alias not same!");
        }, a.pubs = function(n, v, g, S, h, u, m) {
          if (!g) return m("Alias must exist!");
          if (S === s(g)) return n.to.next(v);
          m("Alias not same!");
        }, a.pub = async function(n, v, g, S, h, u, m, w, j) {
          var _;
          const O = await r.parse(g) || {}, E = (I, P, k) => {
            if (I.m && I.s && P && j) return t.verify(I, j, (d) => {
              if (i !== d && i !== d.e && v.put[">"] && v.put[">"] > parseFloat(d.e)) return m("Certificate expired.");
              if (i !== d && d.c && d.w && (d.c === P || d.c.indexOf("*") > -1)) {
                let T = h.indexOf("/") > -1 ? h.replace(h.substring(0, h.indexOf("/") + 1), "") : "";
                String.match = String.match || p.text.match;
                const D = Array.isArray(d.w) ? d.w : typeof d.w == "object" || typeof d.w == "string" ? [
                  d.w
                ] : [];
                for (const $ of D) if (String.match(T, $["#"]) && String.match(S, $["."]) || !$["."] && String.match(T, $["#"]) || !$["#"] && String.match(S, $["."]) || String.match(T ? T + "/" + S : S, $["#"] || $)) {
                  if ($["+"] && $["+"].indexOf("*") > -1 && T && T.indexOf(P) == -1 && S.indexOf(P) == -1) return m(`Path "${T}" or key "${S}" must contain string "${P}".`);
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
          if (S === "pub" && "~" + j === h) return g === j ? n.to.next(v) : m("Account not same!");
          if ((_ = w.is) && _.pub && !O["*"] && !O["+"] && (j === _.pub || j !== _.pub && ((v._.msg || {}).opt || {}).cert)) {
            t.opt.pack(v.put, (I) => {
              t.sign(I, w._.sea, async function(P) {
                if (i === P) return m(t.err || "Signature fail.");
                if (v.put[":"] = {
                  ":": _ = t.opt.unpack(P.m),
                  "~": P.s
                }, v.put["="] = _, j === w.is.pub) {
                  (_ = s(g)) && ((u.sea.own[_] = u.sea.own[_] || {})[j] = 1), JSON.stringifyAsync(v.put[":"], function(k, d) {
                    return k ? m(k || "Stringify error.") : (v.put[":"] = d, n.to.next(v));
                  });
                  return;
                }
                if (j !== w.is.pub && ((v._.msg || {}).opt || {}).cert) {
                  const k = await r.parse(v._.msg.opt.cert);
                  k && k.m && k.s && E(k, w.is.pub, (d) => {
                    v.put[":"]["+"] = k, v.put[":"]["*"] = w.is.pub, JSON.stringifyAsync(v.put[":"], function(A, T) {
                      return A ? m(A || "Stringify error.") : (v.put[":"] = T, n.to.next(v));
                    });
                  });
                }
              }, {
                raw: 1
              });
            });
            return;
          }
          t.opt.pack(v.put, (I) => {
            t.verify(I, O["*"] || j, function(P) {
              var k;
              if (P = t.opt.unpack(P), i === P) return m("Unverified data.");
              if ((k = s(P)) && j === t.opt.pub(k) && ((u.sea.own[k] = u.sea.own[k] || {})[j] = 1), O["+"] && O["+"].m && O["+"].s && O["*"]) E(O["+"], O["*"], (d) => (v.put["="] = P, n.to.next(v)));
              else return v.put["="] = P, n.to.next(v);
            });
          });
        }, a.any = function(n, v, g, S, h, u, m, w) {
          if (u.opt.secure) return m("Soul missing public key at '" + S + "'.");
          u.on("secure", function(j) {
            if (this.off(), !u.opt.secure) return n.to.next(j);
            m("Data cannot be changed.");
          }).on.on("secure", v);
        };
        var l = p.valid, s = function(n, v) {
          return typeof (v = l(n)) == "string" && v;
        };
        (p.state || "").ify;
        var o = /[^\w_-]/;
        t.opt.pub = function(n) {
          if (n && (n = n.split("~"), !(!n || !(n = n[1])) && (n = n.split(o).slice(0, 2), !(!n || n.length != 2) && (n[0] || "")[0] !== "@"))) return n = n.slice(0, 2).join("."), n;
        }, t.opt.stringy = function(n) {
        }, t.opt.pack = function(n, v, g, S, h) {
          var u, m;
          if (t.opt.check(n)) return v(n);
          n && n["#"] && n["."] && n[">"] && (u = n[":"], m = 1), JSON.parseAsync(m ? u : n, function(w, j) {
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
                ">": n[">"] || p.state.is(S, g)
              },
              s: _
            });
          });
        };
        var y = t.opt;
        t.opt.unpack = function(n, v, g) {
          var S;
          if (i !== n) {
            if (n && i !== (S = n[":"])) return S;
            if (v = v || y.fall_key, !g && y.fall_val && (g = {}, g[v] = y.fall_val), !(!v || !g)) {
              if (n === g[v] || !t.opt.check(g[v])) return n;
              var h = g && g._ && g._["#"] || y.fall_soul, u = p.state.is(g, v) || y.fall_state;
              if (n && n.length === 4 && h === n[0] && v === n[1] && b(u) === b(n[3])) return n[2];
              if (u < t.opt.shuffle_attack) return n;
            }
          }
        }, t.opt.shuffle_attack = 15463296e5;
        var b = Math.floor;
      })(e, "./index");
    })();
  })(Le);
  Le.exports;
  var yr = typeof window < "u" ? window.Gun : gt;
  const rt = "#", W = "_";
  yr.chain.unset = function(x) {
    return this && x && x[W] && x[W].put && x[W].put[W] && x[W].put[W][rt] && this.put({
      [x[W].put[W][rt]]: null
    }), this;
  };
  Q = dr([
    "http://localhost:3000/gun"
  ]);
  Q.clear = function() {
    localStorage.clear(), sessionStorage.clear(), indexedDB.databases().then((x) => {
      for (let e of x) indexedDB.deleteDatabase(e.name);
    }), console.log("Local data cleared");
  };
  Q.lookup = async function(x, e) {
    var _a;
    const f = await Q.get(x).get(e).then(), c = ((_a = f == null ? void 0 : f._) == null ? void 0 : _a[">"]) && Object.keys(f._[">"])[0];
    if (!c) return null;
    const t = await Q.get(c).then();
    return t ? {
      id: e,
      ...t
    } : null;
  };
  const { ref: nt, inject: vr, provide: mr, computed: Sr, onMounted: gr, onUnmounted: xr } = await he("vue");
  Ar = function(x) {
    const e = nt(null), f = nt([]), c = async (t) => {
      const r = Object.fromEntries(t.entries());
      console.log(r);
      const i = Q.get(`location-plugin/${x}`).put(r);
      return Q.get("locations").set(i), i;
    };
    gr(async () => {
      Q.get(`location-plugin/${x}`).once((t) => {
        t && (e.value = {
          lat: Number(t.lat),
          lng: Number(t.lng),
          zoom: Number(t.zoom)
        });
      }), Q.get("relations").get(x).map().once((t) => {
        t && (console.log(t), f.value.some((i) => i.href === t.href) || f.value.push(t));
      });
    }), mr("map", {
      current: e,
      children: f,
      createLocation: c
    });
  };
  jr = function() {
    const x = vr("map");
    if (!x) throw new Error("Composable must have an map provider.");
    return x;
  };
});
export {
  _r as _,
  __tla,
  kr as a,
  Q as g,
  Ar as m,
  jr as u
};
