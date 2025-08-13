import { importShared, __tla as __tla_0 } from "./__federation_fn_import-xDAQhvQ6.js";
let _sfc_main, _sfc_main$1, mapProvider, useMap;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const { defineComponent: _defineComponent } = await importShared("vue");
  const { renderSlot: _renderSlot, normalizeClass: _normalizeClass, openBlock: _openBlock$1, createElementBlock: _createElementBlock$1 } = await importShared("vue");
  _sfc_main$1 = _defineComponent({
    __name: "Title",
    props: {
      float: {
        type: String,
        default: "left",
        required: false
      }
    },
    setup(__props) {
      return (_ctx, _cache) => {
        return _openBlock$1(), _createElementBlock$1("h3", {
          class: _normalizeClass(`my-auto text-${__props.float} text-lg text-gray-800 dark:text-gray-100 font-semibold`)
        }, [
          _renderSlot(_ctx.$slots, "default")
        ], 2);
      };
    }
  });
  (function() {
    try {
      if (typeof document < "u") {
        var a = document.createElement("style");
        a.appendChild(document.createTextNode(".mapdiv[data-v-e7ebb206]{width:100%;height:100%}.advanced-marker-wrapper{display:none}.mapdiv .advanced-marker-wrapper{display:inline-block}.custom-control-wrapper[data-v-d099a3a6]{display:none}.mapdiv .custom-control-wrapper[data-v-d099a3a6]{display:inline-block}.info-window-wrapper[data-v-cbe1707b]{display:none}.mapdiv .info-window-wrapper[data-v-cbe1707b]{display:inline-block}.custom-marker-wrapper[data-v-2d2d343a]{display:none}.mapdiv .custom-marker-wrapper[data-v-2d2d343a]{display:inline-block}")), document.head.appendChild(a);
      }
    } catch (e) {
      console.error("vite-plugin-css-injected-by-js", e);
    }
  })();
  var Ne = Object.defineProperty;
  var Ue = (n, e, t) => e in n ? Ne(n, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: t
  }) : n[e] = t;
  var oe = (n, e, t) => (Ue(n, typeof e != "symbol" ? e + "" : e, t), t);
  const { defineComponent: P, ref: v, provide: U, watch: S, onMounted: Ie, onBeforeUnmount: j, markRaw: x, toRef: $, openBlock: K, createElementBlock: Y, createElementVNode: se, renderSlot: J, normalizeProps: De, guardReactiveProps: Fe, computed: F, Comment: ue, inject: C, mergeProps: de, createCommentVNode: he } = await importShared("vue");
  const B = Symbol("map"), Z = Symbol("api"), pe = Symbol("marker"), fe = Symbol("markerCluster"), re = Symbol("CustomMarker"), Te = Symbol("mapTilesLoaded"), V = [
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
  function Ve(n, e, t, s) {
    function r(o) {
      return o instanceof t ? o : new t(function(a) {
        a(o);
      });
    }
    return new (t || (t = Promise))(function(o, a) {
      function l(u) {
        try {
          d(s.next(u));
        } catch (c) {
          a(c);
        }
      }
      function i(u) {
        try {
          d(s.throw(u));
        } catch (c) {
          a(c);
        }
      }
      function d(u) {
        u.done ? o(u.value) : r(u.value).then(l, i);
      }
      d((s = s.apply(n, [])).next());
    });
  }
  var ze = function n(e, t) {
    if (e === t) return true;
    if (e && t && typeof e == "object" && typeof t == "object") {
      if (e.constructor !== t.constructor) return false;
      var s, r, o;
      if (Array.isArray(e)) {
        if (s = e.length, s != t.length) return false;
        for (r = s; r-- !== 0; ) if (!n(e[r], t[r])) return false;
        return true;
      }
      if (e.constructor === RegExp) return e.source === t.source && e.flags === t.flags;
      if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === t.valueOf();
      if (e.toString !== Object.prototype.toString) return e.toString() === t.toString();
      if (o = Object.keys(e), s = o.length, s !== Object.keys(t).length) return false;
      for (r = s; r-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(t, o[r])) return false;
      for (r = s; r-- !== 0; ) {
        var a = o[r];
        if (!n(e[a], t[a])) return false;
      }
      return true;
    }
    return e !== e && t !== t;
  };
  const ye = "__googleMapsScriptId";
  var N;
  (function(n) {
    n[n.INITIALIZED = 0] = "INITIALIZED", n[n.LOADING = 1] = "LOADING", n[n.SUCCESS = 2] = "SUCCESS", n[n.FAILURE = 3] = "FAILURE";
  })(N || (N = {}));
  class q {
    constructor({ apiKey: e, authReferrerPolicy: t, channel: s, client: r, id: o = ye, language: a, libraries: l = [], mapIds: i, nonce: d, region: u, retries: c = 3, url: h = "https://maps.googleapis.com/maps/api/js", version: p }) {
      if (this.callbacks = [], this.done = false, this.loading = false, this.errors = [], this.apiKey = e, this.authReferrerPolicy = t, this.channel = s, this.client = r, this.id = o || ye, this.language = a, this.libraries = l, this.mapIds = i, this.nonce = d, this.region = u, this.retries = c, this.url = h, this.version = p, q.instance) {
        if (!ze(this.options, q.instance.options)) throw new Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(q.instance.options)}`);
        return q.instance;
      }
      q.instance = this;
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
      return this.errors.length ? N.FAILURE : this.done ? N.SUCCESS : this.loading ? N.LOADING : N.INITIALIZED;
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
      return new Promise((e, t) => {
        this.loadCallback((s) => {
          s ? t(s.error) : e(window.google);
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
      var e, t;
      if (document.getElementById(this.id)) {
        this.callback();
        return;
      }
      const s = {
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
      Object.keys(s).forEach((o) => !s[o] && delete s[o]), !((t = (e = window == null ? void 0 : window.google) === null || e === void 0 ? void 0 : e.maps) === null || t === void 0) && t.importLibrary || ((o) => {
        let a, l, i, d = "The Google Maps JavaScript API", u = "google", c = "importLibrary", h = "__ib__", p = document, f = window;
        f = f[u] || (f[u] = {});
        const m = f.maps || (f.maps = {}), g = /* @__PURE__ */ new Set(), y = new URLSearchParams(), _ = () => a || (a = new Promise((w, O) => Ve(this, void 0, void 0, function* () {
          var b;
          yield l = p.createElement("script"), l.id = this.id, y.set("libraries", [
            ...g
          ] + "");
          for (i in o) y.set(i.replace(/[A-Z]/g, (E) => "_" + E[0].toLowerCase()), o[i]);
          y.set("callback", u + ".maps." + h), l.src = this.url + "?" + y, m[h] = w, l.onerror = () => a = O(Error(d + " could not load.")), l.nonce = this.nonce || ((b = p.querySelector("script[nonce]")) === null || b === void 0 ? void 0 : b.nonce) || "", p.head.append(l);
        })));
        m[c] ? console.warn(d + " only loads once. Ignoring:", o) : m[c] = (w, ...O) => g.add(w) && _().then(() => m[c](w, ...O));
      })(s);
      const r = this.libraries.map((o) => this.importLibrary(o));
      r.length || r.push(this.importLibrary("core")), Promise.all(r).then(() => this.callback(), (o) => {
        const a = new ErrorEvent("error", {
          error: o
        });
        this.loadErrorCallback(a);
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
        const t = this.errors.length * Math.pow(2, this.errors.length);
        console.error(`Failed to load Google Maps script, retrying in ${t} ms.`), setTimeout(() => {
          this.deleteScript(), this.setScript();
        }, t);
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
  function Ge(n) {
    return class extends n.OverlayView {
      constructor(s) {
        super();
        oe(this, "element");
        oe(this, "opts");
        const { element: r, ...o } = s;
        this.element = r, this.opts = o, this.opts.map && this.setMap(this.opts.map);
      }
      getPosition() {
        return this.opts.position ? this.opts.position instanceof n.LatLng ? this.opts.position : new n.LatLng(this.opts.position) : null;
      }
      getVisible() {
        if (!this.element) return false;
        const s = this.element;
        return s.style.display !== "none" && s.style.visibility !== "hidden" && (s.style.opacity === "" || Number(s.style.opacity) > 0.01);
      }
      onAdd() {
        if (!this.element) return;
        const s = this.getPanes();
        s && s.overlayMouseTarget.appendChild(this.element);
      }
      draw() {
        if (!this.element) return;
        const s = this.getProjection(), r = s == null ? void 0 : s.fromLatLngToDivPixel(this.getPosition());
        if (r) {
          this.element.style.position = "absolute";
          let o, a;
          switch (this.opts.anchorPoint) {
            case "TOP_CENTER":
              o = "-50%", a = "-100%";
              break;
            case "BOTTOM_CENTER":
              o = "-50%", a = "0";
              break;
            case "LEFT_CENTER":
              o = "-100%", a = "-50%";
              break;
            case "RIGHT_CENTER":
              o = "0", a = "-50%";
              break;
            case "TOP_LEFT":
              o = "-100%", a = "-100%";
              break;
            case "TOP_RIGHT":
              o = "0", a = "-100%";
              break;
            case "BOTTOM_LEFT":
              o = "-100%", a = "0";
              break;
            case "BOTTOM_RIGHT":
              o = "0", a = "0";
              break;
            default:
              o = "-50%", a = "-50%";
          }
          const l = r.x + (this.opts.offsetX || 0) + "px", i = r.y + (this.opts.offsetY || 0) + "px";
          this.element.style.transform = `translateX(${o}) translateX(${l}) translateY(${a}) translateY(${i})`, this.opts.zIndex && (this.element.style.zIndex = this.opts.zIndex.toString());
        }
      }
      onRemove() {
        this.element && this.element.remove();
      }
      setOptions(s) {
        const { element: r, ...o } = s;
        this.element = r, this.opts = o, this.draw();
      }
    };
  }
  let _e;
  const we = [
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
  ], He = P({
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
    emits: we,
    setup(n, { emit: e }) {
      const t = v(), s = v(false), r = v(), o = v(), a = v(false);
      U(B, r), U(Z, o), U(Te, a);
      const l = () => {
        const c = {
          ...n
        };
        Object.keys(c).forEach((m) => {
          c[m] === void 0 && delete c[m];
        });
        const p = (m) => {
          var g;
          return m ? {
            position: (g = o.value) == null ? void 0 : g.ControlPosition[m]
          } : {};
        }, f = {
          scaleControlOptions: n.scaleControlStyle ? {
            style: n.scaleControlStyle
          } : {},
          panControlOptions: p(n.panControlPosition),
          zoomControlOptions: p(n.zoomControlPosition),
          rotateControlOptions: p(n.rotateControlPosition),
          streetViewControlOptions: p(n.streetViewControlPosition),
          fullscreenControlOptions: p(n.fullscreenControlPosition),
          cameraControlOptions: p(n.cameraControlPosition),
          disableDefaultUI: n.disableDefaultUi
        };
        return {
          ...c,
          ...f
        };
      }, i = S([
        o,
        r
      ], ([c, h]) => {
        const p = c, f = h;
        p && f && (p.event.addListenerOnce(f, "tilesloaded", () => {
          a.value = true;
        }), setTimeout(i, 0));
      }, {
        immediate: true
      }), d = () => {
        try {
          const { apiKey: c, region: h, version: p, language: f, libraries: m, nonce: g } = n;
          _e = new q({
            apiKey: c,
            region: h,
            version: p,
            language: f,
            libraries: m,
            nonce: g
          });
        } catch (c) {
          console.error(c);
        }
      }, u = (c) => {
        o.value = x(c.maps), r.value = x(new c.maps.Map(t.value, l()));
        const h = Ge(o.value);
        o.value[re] = h, we.forEach((f) => {
          var m;
          (m = r.value) == null || m.addListener(f, (g) => e(f, g));
        }), s.value = true;
        const p = Object.keys(n).filter((f) => ![
          "apiPromise",
          "apiKey",
          "version",
          "libraries",
          "region",
          "language",
          "center",
          "zoom",
          "nonce"
        ].includes(f)).map((f) => $(n, f));
        S([
          () => n.center,
          () => n.zoom,
          ...p
        ], ([f, m], [g, y]) => {
          var E, M, L;
          const { center: _, zoom: w, ...O } = l();
          (E = r.value) == null || E.setOptions(O), m !== void 0 && m !== y && ((M = r.value) == null || M.setZoom(m));
          const b = !g || f.lng !== g.lng || f.lat !== g.lat;
          f && b && ((L = r.value) == null || L.panTo(f));
        });
      };
      return Ie(() => {
        n.apiPromise && n.apiPromise instanceof Promise ? n.apiPromise.then(u) : (d(), _e.load().then(u));
      }), j(() => {
        var c;
        a.value = false, r.value && ((c = o.value) == null || c.event.clearInstanceListeners(r.value));
      }), {
        mapRef: t,
        ready: s,
        map: r,
        api: o,
        mapTilesLoaded: a
      };
    }
  });
  const X = (n, e) => {
    const t = n.__vccOpts || n;
    for (const [s, r] of e) t[s] = r;
    return t;
  }, We = {
    ref: "mapRef",
    class: "mapdiv"
  };
  function Ke(n, e, t, s, r, o) {
    return K(), Y("div", null, [
      se("div", We, null, 512),
      J(n.$slots, "default", De(Fe({
        ready: n.ready,
        map: n.map,
        api: n.api,
        mapTilesLoaded: n.mapTilesLoaded
      })), void 0, true)
    ]);
  }
  const At = X(He, [
    [
      "render",
      Ke
    ],
    [
      "__scopeId",
      "data-v-e7ebb206"
    ]
  ]);
  function Ye(n) {
    return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
  }
  var Je = function n(e, t) {
    if (e === t) return true;
    if (e && t && typeof e == "object" && typeof t == "object") {
      if (e.constructor !== t.constructor) return false;
      var s, r, o;
      if (Array.isArray(e)) {
        if (s = e.length, s != t.length) return false;
        for (r = s; r-- !== 0; ) if (!n(e[r], t[r])) return false;
        return true;
      }
      if (e.constructor === RegExp) return e.source === t.source && e.flags === t.flags;
      if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === t.valueOf();
      if (e.toString !== Object.prototype.toString) return e.toString() === t.toString();
      if (o = Object.keys(e), s = o.length, s !== Object.keys(t).length) return false;
      for (r = s; r-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(t, o[r])) return false;
      for (r = s; r-- !== 0; ) {
        var a = o[r];
        if (!n(e[a], t[a])) return false;
      }
      return true;
    }
    return e !== e && t !== t;
  };
  const A = Ye(Je), ke = [
    "click",
    "drag",
    "dragend",
    "dragstart",
    "gmp-click"
  ], Xe = P({
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
    emits: ke,
    setup(n, { emit: e, expose: t, slots: s }) {
      const r = v(), o = F(() => {
        var p;
        return (p = s.default) == null ? void 0 : p.call(s).some((f) => f.type !== ue);
      }), a = $(n, "options"), l = $(n, "pinOptions"), i = v(), d = C(B, v()), u = C(Z, v()), c = C(fe, v()), h = F(() => !!(c.value && u.value && i.value instanceof google.maps.marker.AdvancedMarkerElement));
      return S([
        d,
        a,
        l
      ], async (p, [f, m, g]) => {
        var b, E, M;
        const _ = !A(a.value, m) || !A(l.value, g) || d.value !== f;
        if (!d.value || !u.value || !_) return;
        const { AdvancedMarkerElement: w, PinElement: O } = u.value.marker;
        if (i.value) {
          const { map: L, content: Q, ...ne } = a.value;
          Object.assign(i.value, {
            content: o.value ? r.value : l.value ? new O(l.value).element : Q,
            ...ne
          }), h.value && ((b = c.value) == null || b.removeMarker(i.value), (E = c.value) == null || E.addMarker(i.value));
        } else o.value ? a.value.content = r.value : l.value && (a.value.content = new O(l.value).element), i.value = x(new w(a.value)), h.value ? (M = c.value) == null || M.addMarker(i.value) : i.value.map = d.value, ke.forEach((L) => {
          var Q;
          (Q = i.value) == null || Q.addListener(L, (ne) => e(L, ne));
        });
      }, {
        immediate: true
      }), j(() => {
        var p, f;
        i.value && ((p = u.value) == null || p.event.clearInstanceListeners(i.value), h.value ? (f = c.value) == null || f.removeMarker(i.value) : i.value.map = null);
      }), U(pe, i), t({
        marker: i
      }), {
        hasSlotContent: o,
        markerRef: r
      };
    }
  });
  const Qe = {
    key: 0,
    class: "advanced-marker-wrapper"
  };
  function et(n, e, t, s, r, o) {
    return n.hasSlotContent ? (K(), Y("div", Qe, [
      se("div", de({
        ref: "markerRef"
      }, n.$attrs), [
        J(n.$slots, "default")
      ], 16)
    ])) : he("", true);
  }
  const It = X(Xe, [
    [
      "render",
      et
    ]
  ]), tt = (n) => n === "Marker", st = (n) => n === re, z = (n, e, t, s) => {
    const r = v(), o = C(B, v()), a = C(Z, v()), l = C(fe, v()), i = F(() => !!(l.value && a.value && (r.value instanceof a.value.Marker || r.value instanceof a.value[re])));
    return S([
      o,
      t
    ], (d, [u, c]) => {
      var p, f, m;
      const h = !A(t.value, c) || o.value !== u;
      !o.value || !a.value || !h || (r.value ? (r.value.setOptions(t.value), i.value && ((p = l.value) == null || p.removeMarker(r.value), (f = l.value) == null || f.addMarker(r.value))) : (tt(n) ? r.value = x(new a.value[n](t.value)) : st(n) ? r.value = x(new a.value[n](t.value)) : r.value = x(new a.value[n]({
        ...t.value,
        map: o.value
      })), i.value ? (m = l.value) == null || m.addMarker(r.value) : r.value.setMap(o.value), e.forEach((g) => {
        var y;
        (y = r.value) == null || y.addListener(g, (_) => s(g, _));
      })));
    }, {
      immediate: true
    }), j(() => {
      var d, u;
      r.value && ((d = a.value) == null || d.event.clearInstanceListeners(r.value), i.value ? (u = l.value) == null || u.removeMarker(r.value) : r.value.setMap(null));
    }), r;
  }, Ce = [
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
  P({
    name: "Marker",
    props: {
      options: {
        type: Object,
        required: true
      }
    },
    emits: Ce,
    setup(n, { emit: e, expose: t, slots: s }) {
      const r = $(n, "options"), o = z("Marker", Ce, r, e);
      return U(pe, o), t({
        marker: o
      }), () => {
        var a;
        return (a = s.default) == null ? void 0 : a.call(s);
      };
    }
  });
  P({
    name: "Polyline",
    props: {
      options: {
        type: Object,
        required: true
      }
    },
    emits: V,
    setup(n, { emit: e }) {
      const t = $(n, "options");
      return {
        polyline: z("Polyline", V, t, e)
      };
    },
    render: () => null
  });
  P({
    name: "Polygon",
    props: {
      options: {
        type: Object,
        required: true
      }
    },
    emits: V,
    setup(n, { emit: e }) {
      const t = $(n, "options");
      return {
        polygon: z("Polygon", V, t, e)
      };
    },
    render: () => null
  });
  const be = V.concat([
    "bounds_changed"
  ]);
  P({
    name: "Rectangle",
    props: {
      options: {
        type: Object,
        required: true
      }
    },
    emits: be,
    setup(n, { emit: e }) {
      const t = $(n, "options");
      return {
        rectangle: z("Rectangle", be, t, e)
      };
    },
    render: () => null
  });
  const Me = V.concat([
    "center_changed",
    "radius_changed"
  ]);
  P({
    name: "Circle",
    props: {
      options: {
        type: Object,
        required: true
      }
    },
    emits: Me,
    setup(n, { emit: e }) {
      const t = $(n, "options");
      return {
        circle: z("Circle", Me, t, e)
      };
    },
    render: () => null
  });
  P({
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
    setup(n, { emit: e }) {
      const t = v(null), s = C(B, v()), r = C(Z, v()), o = C(Te, v(false)), a = S([
        o,
        r,
        t
      ], ([d, u, c]) => {
        u && d && c && (l(n.position), e("content:loaded"), setTimeout(a, 0));
      }, {
        immediate: true
      }), l = (d) => {
        if (s.value && r.value && t.value) {
          const u = r.value.ControlPosition[d];
          s.value.controls[u].push(t.value);
        }
      }, i = (d) => {
        if (s.value && r.value) {
          let u = null;
          const c = r.value.ControlPosition[d];
          s.value.controls[c].forEach((h, p) => {
            h === t.value && (u = p);
          }), u !== null && s.value.controls[c].removeAt(u);
        }
      };
      return j(() => i(n.position)), S(() => n.position, (d, u) => {
        i(u), l(d);
      }), S(() => n.index, (d) => {
        d && t.value && (t.value.index = n.index);
      }), {
        controlRef: t
      };
    }
  });
  const Oe = [
    "closeclick",
    "content_changed",
    "domready",
    "position_changed",
    "visible",
    "zindex_changed"
  ], it = P({
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
      ...Oe,
      "update:modelValue"
    ],
    setup(n, { slots: e, emit: t, expose: s }) {
      const r = v(), o = v(), a = C(B, v()), l = C(Z, v()), i = C(pe, v());
      let d, u = n.modelValue;
      const c = F(() => {
        var m;
        return (m = e.default) == null ? void 0 : m.call(e).some((g) => g.type !== ue);
      }), h = (m) => {
        u = m, t("update:modelValue", m);
      }, p = (m) => {
        r.value && (r.value.open({
          map: a.value,
          anchor: i.value,
          ...m
        }), h(true));
      }, f = () => {
        r.value && (r.value.close(), h(false));
      };
      return Ie(() => {
        S([
          a,
          () => n.options
        ], ([m, g], [y, _]) => {
          var O;
          const w = !A(g, _) || a.value !== y;
          a.value && l.value && w && (r.value ? (r.value.setOptions({
            ...g,
            content: c.value ? o.value : g.content
          }), i.value || p()) : (r.value = x(new l.value.InfoWindow({
            ...g,
            content: c.value ? o.value : g.content
          })), i.value && (d = i.value.addListener("click", () => {
            p();
          })), (!i.value || u) && p(), Oe.forEach((b) => {
            var E;
            (E = r.value) == null || E.addListener(b, (M) => t(b, M));
          }), (O = r.value) == null || O.addListener("closeclick", () => h(false))));
        }, {
          immediate: true
        }), S(() => n.modelValue, (m) => {
          m !== u && (m ? p() : f());
        });
      }), j(() => {
        var m;
        d && d.remove(), r.value && ((m = l.value) == null || m.event.clearInstanceListeners(r.value), f());
      }), s({
        infoWindow: r,
        open: p,
        close: f
      }), {
        infoWindow: r,
        infoWindowRef: o,
        hasSlotContent: c,
        open: p,
        close: f
      };
    }
  });
  const at = {
    key: 0,
    class: "info-window-wrapper"
  };
  function lt(n, e, t, s, r, o) {
    return n.hasSlotContent ? (K(), Y("div", at, [
      se("div", de({
        ref: "infoWindowRef"
      }, n.$attrs), [
        J(n.$slots, "default", {}, void 0, true)
      ], 16)
    ])) : he("", true);
  }
  const Zt = X(it, [
    [
      "render",
      lt
    ],
    [
      "__scopeId",
      "data-v-cbe1707b"
    ]
  ]), Ee = [
    Int8Array,
    Uint8Array,
    Uint8ClampedArray,
    Int16Array,
    Uint16Array,
    Int32Array,
    Uint32Array,
    Float32Array,
    Float64Array
  ], ie = 1, G = 8;
  class me {
    static from(e) {
      if (!(e instanceof ArrayBuffer)) throw new Error("Data must be an instance of ArrayBuffer.");
      const [t, s] = new Uint8Array(e, 0, 2);
      if (t !== 219) throw new Error("Data does not appear to be in a KDBush format.");
      const r = s >> 4;
      if (r !== ie) throw new Error(`Got v${r} data when expected v${ie}.`);
      const o = Ee[s & 15];
      if (!o) throw new Error("Unrecognized array type.");
      const [a] = new Uint16Array(e, 2, 1), [l] = new Uint32Array(e, 4, 1);
      return new me(l, a, o, e);
    }
    constructor(e, t = 64, s = Float64Array, r) {
      if (isNaN(e) || e < 0) throw new Error(`Unpexpected numItems value: ${e}.`);
      this.numItems = +e, this.nodeSize = Math.min(Math.max(+t, 2), 65535), this.ArrayType = s, this.IndexArrayType = e < 65536 ? Uint16Array : Uint32Array;
      const o = Ee.indexOf(this.ArrayType), a = e * 2 * this.ArrayType.BYTES_PER_ELEMENT, l = e * this.IndexArrayType.BYTES_PER_ELEMENT, i = (8 - l % 8) % 8;
      if (o < 0) throw new Error(`Unexpected typed array class: ${s}.`);
      r && r instanceof ArrayBuffer ? (this.data = r, this.ids = new this.IndexArrayType(this.data, G, e), this.coords = new this.ArrayType(this.data, G + l + i, e * 2), this._pos = e * 2, this._finished = true) : (this.data = new ArrayBuffer(G + a + l + i), this.ids = new this.IndexArrayType(this.data, G, e), this.coords = new this.ArrayType(this.data, G + l + i, e * 2), this._pos = 0, this._finished = false, new Uint8Array(this.data, 0, 2).set([
        219,
        (ie << 4) + o
      ]), new Uint16Array(this.data, 2, 1)[0] = t, new Uint32Array(this.data, 4, 1)[0] = e);
    }
    add(e, t) {
      const s = this._pos >> 1;
      return this.ids[s] = s, this.coords[this._pos++] = e, this.coords[this._pos++] = t, s;
    }
    finish() {
      const e = this._pos >> 1;
      if (e !== this.numItems) throw new Error(`Added ${e} items when expected ${this.numItems}.`);
      return ce(this.ids, this.coords, this.nodeSize, 0, this.numItems - 1, 0), this._finished = true, this;
    }
    range(e, t, s, r) {
      if (!this._finished) throw new Error("Data not yet indexed - call index.finish().");
      const { ids: o, coords: a, nodeSize: l } = this, i = [
        0,
        o.length - 1,
        0
      ], d = [];
      for (; i.length; ) {
        const u = i.pop() || 0, c = i.pop() || 0, h = i.pop() || 0;
        if (c - h <= l) {
          for (let g = h; g <= c; g++) {
            const y = a[2 * g], _ = a[2 * g + 1];
            y >= e && y <= s && _ >= t && _ <= r && d.push(o[g]);
          }
          continue;
        }
        const p = h + c >> 1, f = a[2 * p], m = a[2 * p + 1];
        f >= e && f <= s && m >= t && m <= r && d.push(o[p]), (u === 0 ? e <= f : t <= m) && (i.push(h), i.push(p - 1), i.push(1 - u)), (u === 0 ? s >= f : r >= m) && (i.push(p + 1), i.push(c), i.push(1 - u));
      }
      return d;
    }
    within(e, t, s) {
      if (!this._finished) throw new Error("Data not yet indexed - call index.finish().");
      const { ids: r, coords: o, nodeSize: a } = this, l = [
        0,
        r.length - 1,
        0
      ], i = [], d = s * s;
      for (; l.length; ) {
        const u = l.pop() || 0, c = l.pop() || 0, h = l.pop() || 0;
        if (c - h <= a) {
          for (let g = h; g <= c; g++) Pe(o[2 * g], o[2 * g + 1], e, t) <= d && i.push(r[g]);
          continue;
        }
        const p = h + c >> 1, f = o[2 * p], m = o[2 * p + 1];
        Pe(f, m, e, t) <= d && i.push(r[p]), (u === 0 ? e - s <= f : t - s <= m) && (l.push(h), l.push(p - 1), l.push(1 - u)), (u === 0 ? e + s >= f : t + s >= m) && (l.push(p + 1), l.push(c), l.push(1 - u));
      }
      return i;
    }
  }
  function ce(n, e, t, s, r, o) {
    if (r - s <= t) return;
    const a = s + r >> 1;
    $e(n, e, a, s, r, o), ce(n, e, t, s, a - 1, 1 - o), ce(n, e, t, a + 1, r, 1 - o);
  }
  function $e(n, e, t, s, r, o) {
    for (; r > s; ) {
      if (r - s > 600) {
        const d = r - s + 1, u = t - s + 1, c = Math.log(d), h = 0.5 * Math.exp(2 * c / 3), p = 0.5 * Math.sqrt(c * h * (d - h) / d) * (u - d / 2 < 0 ? -1 : 1), f = Math.max(s, Math.floor(t - u * h / d + p)), m = Math.min(r, Math.floor(t + (d - u) * h / d + p));
        $e(n, e, t, f, m, o);
      }
      const a = e[2 * t + o];
      let l = s, i = r;
      for (H(n, e, s, t), e[2 * r + o] > a && H(n, e, s, r); l < i; ) {
        for (H(n, e, l, i), l++, i--; e[2 * l + o] < a; ) l++;
        for (; e[2 * i + o] > a; ) i--;
      }
      e[2 * s + o] === a ? H(n, e, s, i) : (i++, H(n, e, i, r)), i <= t && (s = i + 1), t <= i && (r = i - 1);
    }
  }
  function H(n, e, t, s) {
    ae(n, t, s), ae(e, 2 * t, 2 * s), ae(e, 2 * t + 1, 2 * s + 1);
  }
  function ae(n, e, t) {
    const s = n[e];
    n[e] = n[t], n[t] = s;
  }
  function Pe(n, e, t, s) {
    const r = n - t, o = e - s;
    return r * r + o * o;
  }
  const ct = {
    minZoom: 0,
    maxZoom: 16,
    minPoints: 2,
    radius: 40,
    extent: 512,
    nodeSize: 64,
    log: false,
    generateId: false,
    reduce: null,
    map: (n) => n
  }, Se = Math.fround || /* @__PURE__ */ ((n) => (e) => (n[0] = +e, n[0]))(new Float32Array(1)), R = 2, T = 3, le = 4, I = 5, Re = 6;
  class qe {
    constructor(e) {
      this.options = Object.assign(Object.create(ct), e), this.trees = new Array(this.options.maxZoom + 1), this.stride = this.options.reduce ? 7 : 6, this.clusterProps = [];
    }
    load(e) {
      const { log: t, minZoom: s, maxZoom: r } = this.options;
      t && console.time("total time");
      const o = `prepare ${e.length} points`;
      t && console.time(o), this.points = e;
      const a = [];
      for (let i = 0; i < e.length; i++) {
        const d = e[i];
        if (!d.geometry) continue;
        const [u, c] = d.geometry.coordinates, h = Se(ee(u)), p = Se(te(c));
        a.push(h, p, 1 / 0, i, -1, 1), this.options.reduce && a.push(0);
      }
      let l = this.trees[r + 1] = this._createTree(a);
      t && console.timeEnd(o);
      for (let i = r; i >= s; i--) {
        const d = +Date.now();
        l = this.trees[i] = this._createTree(this._cluster(l, i)), t && console.log("z%d: %d clusters in %dms", i, l.numItems, +Date.now() - d);
      }
      return t && console.timeEnd("total time"), this;
    }
    getClusters(e, t) {
      let s = ((e[0] + 180) % 360 + 360) % 360 - 180;
      const r = Math.max(-90, Math.min(90, e[1]));
      let o = e[2] === 180 ? 180 : ((e[2] + 180) % 360 + 360) % 360 - 180;
      const a = Math.max(-90, Math.min(90, e[3]));
      if (e[2] - e[0] >= 360) s = -180, o = 180;
      else if (s > o) {
        const c = this.getClusters([
          s,
          r,
          180,
          a
        ], t), h = this.getClusters([
          -180,
          r,
          o,
          a
        ], t);
        return c.concat(h);
      }
      const l = this.trees[this._limitZoom(t)], i = l.range(ee(s), te(a), ee(o), te(r)), d = l.data, u = [];
      for (const c of i) {
        const h = this.stride * c;
        u.push(d[h + I] > 1 ? Le(d, h, this.clusterProps) : this.points[d[h + T]]);
      }
      return u;
    }
    getChildren(e) {
      const t = this._getOriginId(e), s = this._getOriginZoom(e), r = "No cluster with the specified id.", o = this.trees[s];
      if (!o) throw new Error(r);
      const a = o.data;
      if (t * this.stride >= a.length) throw new Error(r);
      const l = this.options.radius / (this.options.extent * Math.pow(2, s - 1)), i = a[t * this.stride], d = a[t * this.stride + 1], u = o.within(i, d, l), c = [];
      for (const h of u) {
        const p = h * this.stride;
        a[p + le] === e && c.push(a[p + I] > 1 ? Le(a, p, this.clusterProps) : this.points[a[p + T]]);
      }
      if (c.length === 0) throw new Error(r);
      return c;
    }
    getLeaves(e, t, s) {
      t = t || 10, s = s || 0;
      const r = [];
      return this._appendLeaves(r, e, t, s, 0), r;
    }
    getTile(e, t, s) {
      const r = this.trees[this._limitZoom(e)], o = Math.pow(2, e), { extent: a, radius: l } = this.options, i = l / a, d = (s - i) / o, u = (s + 1 + i) / o, c = {
        features: []
      };
      return this._addTileFeatures(r.range((t - i) / o, d, (t + 1 + i) / o, u), r.data, t, s, o, c), t === 0 && this._addTileFeatures(r.range(1 - i / o, d, 1, u), r.data, o, s, o, c), t === o - 1 && this._addTileFeatures(r.range(0, d, i / o, u), r.data, -1, s, o, c), c.features.length ? c : null;
    }
    getClusterExpansionZoom(e) {
      let t = this._getOriginZoom(e) - 1;
      for (; t <= this.options.maxZoom; ) {
        const s = this.getChildren(e);
        if (t++, s.length !== 1) break;
        e = s[0].properties.cluster_id;
      }
      return t;
    }
    _appendLeaves(e, t, s, r, o) {
      const a = this.getChildren(t);
      for (const l of a) {
        const i = l.properties;
        if (i && i.cluster ? o + i.point_count <= r ? o += i.point_count : o = this._appendLeaves(e, i.cluster_id, s, r, o) : o < r ? o++ : e.push(l), e.length === s) break;
      }
      return o;
    }
    _createTree(e) {
      const t = new me(e.length / this.stride | 0, this.options.nodeSize, Float32Array);
      for (let s = 0; s < e.length; s += this.stride) t.add(e[s], e[s + 1]);
      return t.finish(), t.data = e, t;
    }
    _addTileFeatures(e, t, s, r, o, a) {
      for (const l of e) {
        const i = l * this.stride, d = t[i + I] > 1;
        let u, c, h;
        if (d) u = je(t, i, this.clusterProps), c = t[i], h = t[i + 1];
        else {
          const m = this.points[t[i + T]];
          u = m.properties;
          const [g, y] = m.geometry.coordinates;
          c = ee(g), h = te(y);
        }
        const p = {
          type: 1,
          geometry: [
            [
              Math.round(this.options.extent * (c * o - s)),
              Math.round(this.options.extent * (h * o - r))
            ]
          ],
          tags: u
        };
        let f;
        d || this.options.generateId ? f = t[i + T] : f = this.points[t[i + T]].id, f !== void 0 && (p.id = f), a.features.push(p);
      }
    }
    _limitZoom(e) {
      return Math.max(this.options.minZoom, Math.min(Math.floor(+e), this.options.maxZoom + 1));
    }
    _cluster(e, t) {
      const { radius: s, extent: r, reduce: o, minPoints: a } = this.options, l = s / (r * Math.pow(2, t)), i = e.data, d = [], u = this.stride;
      for (let c = 0; c < i.length; c += u) {
        if (i[c + R] <= t) continue;
        i[c + R] = t;
        const h = i[c], p = i[c + 1], f = e.within(i[c], i[c + 1], l), m = i[c + I];
        let g = m;
        for (const y of f) {
          const _ = y * u;
          i[_ + R] > t && (g += i[_ + I]);
        }
        if (g > m && g >= a) {
          let y = h * m, _ = p * m, w, O = -1;
          const b = ((c / u | 0) << 5) + (t + 1) + this.points.length;
          for (const E of f) {
            const M = E * u;
            if (i[M + R] <= t) continue;
            i[M + R] = t;
            const L = i[M + I];
            y += i[M] * L, _ += i[M + 1] * L, i[M + le] = b, o && (w || (w = this._map(i, c, true), O = this.clusterProps.length, this.clusterProps.push(w)), o(w, this._map(i, M)));
          }
          i[c + le] = b, d.push(y / g, _ / g, 1 / 0, b, -1, g), o && d.push(O);
        } else {
          for (let y = 0; y < u; y++) d.push(i[c + y]);
          if (g > 1) for (const y of f) {
            const _ = y * u;
            if (!(i[_ + R] <= t)) {
              i[_ + R] = t;
              for (let w = 0; w < u; w++) d.push(i[_ + w]);
            }
          }
        }
      }
      return d;
    }
    _getOriginId(e) {
      return e - this.points.length >> 5;
    }
    _getOriginZoom(e) {
      return (e - this.points.length) % 32;
    }
    _map(e, t, s) {
      if (e[t + I] > 1) {
        const a = this.clusterProps[e[t + Re]];
        return s ? Object.assign({}, a) : a;
      }
      const r = this.points[e[t + T]].properties, o = this.options.map(r);
      return s && o === r ? Object.assign({}, o) : o;
    }
  }
  function Le(n, e, t) {
    return {
      type: "Feature",
      id: n[e + T],
      properties: je(n, e, t),
      geometry: {
        type: "Point",
        coordinates: [
          ut(n[e]),
          dt(n[e + 1])
        ]
      }
    };
  }
  function je(n, e, t) {
    const s = n[e + I], r = s >= 1e4 ? `${Math.round(s / 1e3)}k` : s >= 1e3 ? `${Math.round(s / 100) / 10}k` : s, o = n[e + Re], a = o === -1 ? {} : Object.assign({}, t[o]);
    return Object.assign(a, {
      cluster: true,
      cluster_id: n[e + T],
      point_count: s,
      point_count_abbreviated: r
    });
  }
  function ee(n) {
    return n / 360 + 0.5;
  }
  function te(n) {
    const e = Math.sin(n * Math.PI / 180), t = 0.5 - 0.25 * Math.log((1 + e) / (1 - e)) / Math.PI;
    return t < 0 ? 0 : t > 1 ? 1 : t;
  }
  function ut(n) {
    return (n - 0.5) * 360;
  }
  function dt(n) {
    const e = (180 - n * 360) * Math.PI / 180;
    return 360 * Math.atan(Math.exp(e)) / Math.PI - 90;
  }
  function ge(n, e) {
    var t = {};
    for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && e.indexOf(s) < 0 && (t[s] = n[s]);
    if (n != null && typeof Object.getOwnPropertySymbols == "function") for (var r = 0, s = Object.getOwnPropertySymbols(n); r < s.length; r++) e.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(n, s[r]) && (t[s[r]] = n[s[r]]);
    return t;
  }
  class k {
    static isAdvancedMarkerAvailable(e) {
      return google.maps.marker && e.getMapCapabilities().isAdvancedMarkersAvailable === true;
    }
    static isAdvancedMarker(e) {
      return google.maps.marker && e instanceof google.maps.marker.AdvancedMarkerElement;
    }
    static setMap(e, t) {
      this.isAdvancedMarker(e) ? e.map = t : e.setMap(t);
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
  class W {
    constructor({ markers: e, position: t }) {
      this.markers = e, t && (t instanceof google.maps.LatLng ? this._position = t : this._position = new google.maps.LatLng(t));
    }
    get bounds() {
      if (this.markers.length === 0 && !this._position) return;
      const e = new google.maps.LatLngBounds(this._position, this._position);
      for (const t of this.markers) e.extend(k.getPosition(t));
      return e;
    }
    get position() {
      return this._position || this.bounds.getCenter();
    }
    get count() {
      return this.markers.filter((e) => k.getVisible(e)).length;
    }
    push(e) {
      this.markers.push(e);
    }
    delete() {
      this.marker && (k.setMap(this.marker, null), this.marker = void 0), this.markers.length = 0;
    }
  }
  const ht = (n, e, t, s) => {
    const r = Be(n.getBounds(), e, s);
    return t.filter((o) => r.contains(k.getPosition(o)));
  }, Be = (n, e, t) => {
    const { northEast: s, southWest: r } = pt(n, e), o = ft({
      northEast: s,
      southWest: r
    }, t);
    return mt(o, e);
  }, xe = (n, e, t) => {
    const s = Be(n, e, t), r = s.getNorthEast(), o = s.getSouthWest();
    return [
      o.lng(),
      o.lat(),
      r.lng(),
      r.lat()
    ];
  }, pt = (n, e) => ({
    northEast: e.fromLatLngToDivPixel(n.getNorthEast()),
    southWest: e.fromLatLngToDivPixel(n.getSouthWest())
  }), ft = ({ northEast: n, southWest: e }, t) => (n.x += t, n.y -= t, e.x -= t, e.y += t, {
    northEast: n,
    southWest: e
  }), mt = ({ northEast: n, southWest: e }, t) => {
    const s = t.fromDivPixelToLatLng(e), r = t.fromDivPixelToLatLng(n);
    return new google.maps.LatLngBounds(s, r);
  };
  class Ze {
    constructor({ maxZoom: e = 16 }) {
      this.maxZoom = e;
    }
    noop({ markers: e }) {
      return vt(e);
    }
  }
  class gt extends Ze {
    constructor(e) {
      var { viewportPadding: t = 60 } = e, s = ge(e, [
        "viewportPadding"
      ]);
      super(s), this.viewportPadding = 60, this.viewportPadding = t;
    }
    calculate({ markers: e, map: t, mapCanvasProjection: s }) {
      return t.getZoom() >= this.maxZoom ? {
        clusters: this.noop({
          markers: e
        }),
        changed: false
      } : {
        clusters: this.cluster({
          markers: ht(t, s, e, this.viewportPadding),
          map: t,
          mapCanvasProjection: s
        })
      };
    }
  }
  const vt = (n) => n.map((t) => new W({
    position: k.getPosition(t),
    markers: [
      t
    ]
  }));
  class yt extends Ze {
    constructor(e) {
      var { maxZoom: t, radius: s = 60 } = e, r = ge(e, [
        "maxZoom",
        "radius"
      ]);
      super({
        maxZoom: t
      }), this.state = {
        zoom: -1
      }, this.superCluster = new qe(Object.assign({
        maxZoom: this.maxZoom,
        radius: s
      }, r));
    }
    calculate(e) {
      let t = false;
      const s = {
        zoom: e.map.getZoom()
      };
      if (!A(e.markers, this.markers)) {
        t = true, this.markers = [
          ...e.markers
        ];
        const r = this.markers.map((o) => {
          const a = k.getPosition(o);
          return {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [
                a.lng(),
                a.lat()
              ]
            },
            properties: {
              marker: o
            }
          };
        });
        this.superCluster.load(r);
      }
      return t || (this.state.zoom <= this.maxZoom || s.zoom <= this.maxZoom) && (t = !A(this.state, s)), this.state = s, t && (this.clusters = this.cluster(e)), {
        clusters: this.clusters,
        changed: t
      };
    }
    cluster({ map: e }) {
      return this.superCluster.getClusters([
        -180,
        -90,
        180,
        90
      ], Math.round(e.getZoom())).map((t) => this.transformCluster(t));
    }
    transformCluster({ geometry: { coordinates: [e, t] }, properties: s }) {
      if (s.cluster) return new W({
        markers: this.superCluster.getLeaves(s.cluster_id, 1 / 0).map((o) => o.properties.marker),
        position: {
          lat: t,
          lng: e
        }
      });
      const r = s.marker;
      return new W({
        markers: [
          r
        ],
        position: k.getPosition(r)
      });
    }
  }
  class _t extends gt {
    constructor(e) {
      var { maxZoom: t, radius: s = 60, viewportPadding: r = 60 } = e, o = ge(e, [
        "maxZoom",
        "radius",
        "viewportPadding"
      ]);
      super({
        maxZoom: t,
        viewportPadding: r
      }), this.superCluster = new qe(Object.assign({
        maxZoom: this.maxZoom,
        radius: s
      }, o)), this.state = {
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
      const t = {
        zoom: Math.round(e.map.getZoom()),
        view: xe(e.map.getBounds(), e.mapCanvasProjection, this.viewportPadding)
      };
      let s = !A(this.state, t);
      if (!A(e.markers, this.markers)) {
        s = true, this.markers = [
          ...e.markers
        ];
        const r = this.markers.map((o) => {
          const a = k.getPosition(o);
          return {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [
                a.lng(),
                a.lat()
              ]
            },
            properties: {
              marker: o
            }
          };
        });
        this.superCluster.load(r);
      }
      return s && (this.clusters = this.cluster(e), this.state = t), {
        clusters: this.clusters,
        changed: s
      };
    }
    cluster({ map: e, mapCanvasProjection: t }) {
      const s = {
        zoom: Math.round(e.getZoom()),
        view: xe(e.getBounds(), t, this.viewportPadding)
      };
      return this.superCluster.getClusters(s.view, s.zoom).map((r) => this.transformCluster(r));
    }
    transformCluster({ geometry: { coordinates: [e, t] }, properties: s }) {
      if (s.cluster) return new W({
        markers: this.superCluster.getLeaves(s.cluster_id, 1 / 0).map((o) => o.properties.marker),
        position: {
          lat: t,
          lng: e
        }
      });
      const r = s.marker;
      return new W({
        markers: [
          r
        ],
        position: k.getPosition(r)
      });
    }
  }
  class wt {
    constructor(e, t) {
      this.markers = {
        sum: e.length
      };
      const s = t.map((o) => o.count), r = s.reduce((o, a) => o + a, 0);
      this.clusters = {
        count: t.length,
        markers: {
          mean: r / t.length,
          sum: r,
          min: Math.min(...s),
          max: Math.max(...s)
        }
      };
    }
  }
  class kt {
    render({ count: e, position: t }, s, r) {
      const a = `<svg fill="${e > Math.max(10, s.clusters.markers.mean) ? "#ff0000" : "#0000ff"}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" width="50" height="50">
<circle cx="120" cy="120" opacity=".6" r="70" />
<circle cx="120" cy="120" opacity=".3" r="90" />
<circle cx="120" cy="120" opacity=".2" r="110" />
<text x="50%" y="50%" style="fill:#fff" text-anchor="middle" font-size="50" dominant-baseline="middle" font-family="roboto,arial,sans-serif">${e}</text>
</svg>`, l = `Cluster of ${e} markers`, i = Number(google.maps.Marker.MAX_ZINDEX) + e;
      if (k.isAdvancedMarkerAvailable(r)) {
        const u = document.createElement("div");
        u.innerHTML = a;
        const c = u.firstElementChild;
        c.setAttribute("transform", "translate(0 25)");
        const h = {
          map: r,
          position: t,
          zIndex: i,
          title: l,
          content: c
        };
        return new google.maps.marker.AdvancedMarkerElement(h);
      }
      const d = {
        position: t,
        zIndex: i,
        title: l,
        icon: {
          url: `data:image/svg+xml;base64,${btoa(a)}`,
          anchor: new google.maps.Point(25, 25)
        }
      };
      return new google.maps.Marker(d);
    }
  }
  function Ct(n, e) {
    for (let t in e.prototype) n.prototype[t] = e.prototype[t];
  }
  class ve {
    constructor() {
      Ct(ve, google.maps.OverlayView);
    }
  }
  var D;
  (function(n) {
    n.CLUSTERING_BEGIN = "clusteringbegin", n.CLUSTERING_END = "clusteringend", n.CLUSTER_CLICK = "click";
  })(D || (D = {}));
  const bt = (n, e, t) => {
    t.fitBounds(e.bounds);
  };
  class Mt extends ve {
    constructor({ map: e, markers: t = [], algorithmOptions: s = {}, algorithm: r = new yt(s), renderer: o = new kt(), onClusterClick: a = bt }) {
      super(), this.markers = [
        ...t
      ], this.clusters = [], this.algorithm = r, this.renderer = o, this.onClusterClick = a, e && this.setMap(e);
    }
    addMarker(e, t) {
      this.markers.includes(e) || (this.markers.push(e), t || this.render());
    }
    addMarkers(e, t) {
      e.forEach((s) => {
        this.addMarker(s, true);
      }), t || this.render();
    }
    removeMarker(e, t) {
      const s = this.markers.indexOf(e);
      return s === -1 ? false : (k.setMap(e, null), this.markers.splice(s, 1), t || this.render(), true);
    }
    removeMarkers(e, t) {
      let s = false;
      return e.forEach((r) => {
        s = this.removeMarker(r, true) || s;
      }), s && !t && this.render(), s;
    }
    clearMarkers(e) {
      this.markers.length = 0, e || this.render();
    }
    render() {
      const e = this.getMap();
      if (e instanceof google.maps.Map && e.getProjection()) {
        google.maps.event.trigger(this, D.CLUSTERING_BEGIN, this);
        const { clusters: t, changed: s } = this.algorithm.calculate({
          markers: this.markers,
          map: e,
          mapCanvasProjection: this.getProjection()
        });
        if (s || s == null) {
          const r = /* @__PURE__ */ new Set();
          for (const a of t) a.markers.length == 1 && r.add(a.markers[0]);
          const o = [];
          for (const a of this.clusters) a.marker != null && (a.markers.length == 1 ? r.has(a.marker) || k.setMap(a.marker, null) : o.push(a.marker));
          this.clusters = t, this.renderClusters(), requestAnimationFrame(() => o.forEach((a) => k.setMap(a, null)));
        }
        google.maps.event.trigger(this, D.CLUSTERING_END, this);
      }
    }
    onAdd() {
      this.idleListener = this.getMap().addListener("idle", this.render.bind(this)), this.render();
    }
    onRemove() {
      google.maps.event.removeListener(this.idleListener), this.reset();
    }
    reset() {
      this.markers.forEach((e) => k.setMap(e, null)), this.clusters.forEach((e) => e.delete()), this.clusters = [];
    }
    renderClusters() {
      const e = new wt(this.markers, this.clusters), t = this.getMap();
      this.clusters.forEach((s) => {
        s.markers.length === 1 ? s.marker = s.markers[0] : (s.marker = this.renderer.render(s, e, t), s.markers.forEach((r) => k.setMap(r, null)), this.onClusterClick && s.marker.addListener("click", (r) => {
          google.maps.event.trigger(this, D.CLUSTER_CLICK, s), this.onClusterClick(r, s, t);
        })), k.setMap(s.marker, t);
      });
    }
  }
  const Ae = Object.values(D);
  P({
    name: "MarkerCluster",
    props: {
      options: {
        type: Object,
        default: () => ({})
      }
    },
    emits: Ae,
    setup(n, { emit: e, expose: t, slots: s }) {
      const r = v(), o = C(B, v()), a = C(Z, v());
      return U(fe, r), S(o, () => {
        o.value && (r.value = x(new Mt({
          map: o.value,
          algorithm: new _t(n.options.algorithmOptions ?? {}),
          ...n.options
        })), Ae.forEach((l) => {
          var i;
          (i = r.value) == null || i.addListener(l, (d) => e(l, d));
        }));
      }, {
        immediate: true
      }), j(() => {
        var l;
        r.value && ((l = a.value) == null || l.event.clearInstanceListeners(r.value), r.value.clearMarkers(), r.value.setMap(null));
      }), t({
        markerCluster: r
      }), () => {
        var l;
        return (l = s.default) == null ? void 0 : l.call(s);
      };
    }
  });
  P({
    inheritAttrs: false,
    props: {
      options: {
        type: Object,
        required: true
      }
    },
    setup(n, { slots: e, emit: t, expose: s }) {
      const r = v(), o = F(() => {
        var i;
        return (i = e.default) == null ? void 0 : i.call(e).some((d) => d.type !== ue);
      }), a = F(() => ({
        ...n.options,
        element: r.value
      })), l = z(re, [], a, t);
      return s({
        customMarker: l
      }), {
        customMarkerRef: r,
        customMarker: l,
        hasSlotContent: o
      };
    }
  });
  P({
    name: "HeatmapLayer",
    props: {
      options: {
        type: Object,
        default: () => ({})
      }
    },
    setup(n) {
      const e = v(), t = C(B, v()), s = C(Z, v());
      return S([
        t,
        () => n.options
      ], ([r, o], [a, l]) => {
        var d;
        const i = !A(o, l) || t.value !== a;
        if (t.value && s.value && i) {
          const u = structuredClone(o);
          if (u.data && !(u.data instanceof s.value.MVCArray)) {
            const c = s.value.LatLng;
            u.data = (d = u.data) == null ? void 0 : d.map((h) => h instanceof c || "location" in h && (h.location instanceof c || h.location === null) ? h : "location" in h ? {
              ...h,
              location: new c(h.location)
            } : new c(h));
          }
          e.value ? e.value.setOptions(u) : e.value = x(new s.value.visualization.HeatmapLayer({
            ...u,
            map: t.value
          }));
        }
      }, {
        immediate: true
      }), j(() => {
        e.value && e.value.setMap(null);
      }), {
        heatmapLayer: e
      };
    },
    render: () => null
  });
  const { unref: _unref, createVNode: _createVNode, renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, toDisplayString: _toDisplayString, createElementVNode: _createElementVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createBlock: _createBlock } = await importShared("vue");
  const _hoisted_1 = {
    class: "flex flex-col gap-2"
  };
  const _hoisted_2 = {
    class: "font-bold"
  };
  const { ref: ref$1, watch } = await importShared("vue");
  _sfc_main = {
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
    setup(__props, { emit: __emit }) {
      const apiKey = "";
      const pinOptions = {
        background: "#fb923c"
      };
      const props = __props;
      const emit = __emit;
      const mapRef = ref$1(null);
      const center = {
        lat: 0,
        lng: 0
      };
      const zoom = ref$1(15);
      const marker = ref$1({
        position: center,
        title: "Point zero"
      });
      const setZoom = (e) => {
        var _a, _b, _c;
        if (!props.disabled) {
          zoom.value = (_b = (_a = mapRef.value) == null ? void 0 : _a.map) == null ? void 0 : _b.getZoom();
          emit("update:modelValue", {
            ...(_c = marker.value) == null ? void 0 : _c.position,
            zoom: zoom.value
          });
        }
      };
      const setMarker = (e) => {
        var _a;
        if (!props.disabled) {
          marker.value = {
            position: {
              lat: e.latLng.lat(),
              lng: e.latLng.lng()
            },
            title: "Location-Plugin"
          };
          emit("update:modelValue", {
            ...(_a = marker.value) == null ? void 0 : _a.position,
            zoom: zoom.value
          });
        }
      };
      const stop = watch(() => props.modelValue, (newValue) => {
        var _a, _b, _c;
        if (props.modelValue) {
          (_a = mapRef.value) == null ? void 0 : _a.map.setCenter(props.modelValue);
          (_b = mapRef.value) == null ? void 0 : _b.map.setZoom(props.modelValue.zoom);
          marker.value = {
            position: {
              ...props.modelValue
            },
            title: "Location-Plugin"
          };
          emit("update:modelValue", {
            ...(_c = marker.value) == null ? void 0 : _c.position,
            zoom: zoom.value
          });
        }
        stop();
      });
      return (_ctx, _cache) => {
        const _component_router_link = _resolveComponent("router-link");
        return _openBlock(), _createBlock(_unref(At), {
          mapId: "3d8941b79754f0de",
          ref_key: "mapRef",
          ref: mapRef,
          "api-key": _unref(apiKey),
          style: {
            "width": "100%",
            "height": "500px"
          },
          center,
          zoom: 15,
          streetViewControl: false,
          onZoom_changed: setZoom,
          onClick: setMarker
        }, {
          default: _withCtx(() => [
            _createVNode(_unref(It), {
              options: marker.value,
              "pin-options": pinOptions
            }, null, 8, [
              "options"
            ]),
            (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(__props.places, (opt) => {
              return _openBlock(), _createBlock(_unref(It), {
                key: opt.id,
                options: opt
              }, {
                default: _withCtx(() => [
                  _createVNode(_unref(Zt), null, {
                    default: _withCtx(() => [
                      _createElementVNode("div", _hoisted_1, [
                        _createElementVNode("b", _hoisted_2, _toDisplayString(opt.title), 1),
                        _createVNode(_component_router_link, {
                          to: `/sphere/${opt.id}`
                        }, {
                          default: _withCtx(() => _cache[0] || (_cache[0] = [
                            _createElementVNode("a", {
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
              ]);
            }), 128))
          ]),
          _: 1
        }, 8, [
          "api-key"
        ]);
      };
    }
  };
  var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  function getDefaultExportFromCjs(x2) {
    return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
  }
  function commonjsRequire(path2) {
    throw new Error('Could not dynamically require "' + path2 + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
  }
  var gun$1 = {
    exports: {}
  };
  gun$1.exports;
  var hasRequiredGun;
  function requireGun() {
    if (hasRequiredGun) return gun$1.exports;
    hasRequiredGun = 1;
    (function(module) {
      (function() {
        function USE(arg, req) {
          return req ? commonjsRequire(arg) : arg.slice ? USE[R2(arg)] : function(mod, path2) {
            arg(mod = {
              exports: {}
            });
            USE[R2(path2)] = mod.exports;
          };
          function R2(p) {
            return p.split("/").slice(-1).toString().replace(".js", "");
          }
        }
        {
          var MODULE = module;
        }
        USE(function(module2) {
          String.random = function(l, c) {
            var s = "";
            l = l || 24;
            c = c || "0123456789ABCDEFGHIJKLMNOPQRSTUVWXZabcdefghijklmnopqrstuvwxyz";
            while (l-- > 0) {
              s += c.charAt(Math.floor(Math.random() * c.length));
            }
            return s;
          };
          String.match = function(t, o) {
            var tmp, u;
            if ("string" !== typeof t) {
              return false;
            }
            if ("string" == typeof o) {
              o = {
                "=": o
              };
            }
            o = o || {};
            tmp = o["="] || o["*"] || o[">"] || o["<"];
            if (t === tmp) {
              return true;
            }
            if (u !== o["="]) {
              return false;
            }
            tmp = o["*"] || o[">"];
            if (t.slice(0, (tmp || "").length) === tmp) {
              return true;
            }
            if (u !== o["*"]) {
              return false;
            }
            if (u !== o[">"] && u !== o["<"]) {
              return t >= o[">"] && t <= o["<"] ? true : false;
            }
            if (u !== o[">"] && t >= o[">"]) {
              return true;
            }
            if (u !== o["<"] && t <= o["<"]) {
              return true;
            }
            return false;
          };
          String.hash = function(s, c) {
            if (typeof s !== "string") {
              return;
            }
            c = c || 0;
            if (!s.length) {
              return c;
            }
            for (var i = 0, l = s.length, n; i < l; ++i) {
              n = s.charCodeAt(i);
              c = (c << 5) - c + n;
              c |= 0;
            }
            return c;
          };
          var has = Object.prototype.hasOwnProperty;
          Object.plain = function(o) {
            return o ? o instanceof Object && o.constructor === Object || Object.prototype.toString.call(o).match(/^\[object (\w+)\]$/)[1] === "Object" : false;
          };
          Object.empty = function(o, n) {
            for (var k2 in o) {
              if (has.call(o, k2) && (!n || -1 == n.indexOf(k2))) {
                return false;
              }
            }
            return true;
          };
          Object.keys = Object.keys || function(o) {
            var l = [];
            for (var k2 in o) {
              if (has.call(o, k2)) {
                l.push(k2);
              }
            }
            return l;
          };
          (function() {
            var u, sT = setTimeout, l = 0, c = 0, sI = typeof setImmediate !== "" + u && setImmediate || function(c2, f) {
              if (typeof MessageChannel == "" + u) {
                return sT;
              }
              (c2 = new MessageChannel()).port1.onmessage = function(e) {
                "" == e.data && f();
              };
              return function(q2) {
                f = q2;
                c2.port2.postMessage("");
              };
            }(), check = sT.check = sT.check || typeof performance !== "" + u && performance || {
              now: function() {
                return +/* @__PURE__ */ new Date();
              }
            };
            sT.hold = sT.hold || 9;
            sT.poll = sT.poll || function(f) {
              if (sT.hold >= check.now() - l && c++ < 3333) {
                f();
                return;
              }
              sI(function() {
                l = check.now();
                f();
              }, c = 0);
            };
          })();
          (function() {
            var sT = setTimeout, t = sT.turn = sT.turn || function(f2) {
              1 == s.push(f2) && p(T2);
            }, s = t.s = [], p = sT.poll, i = 0, f, T2 = function() {
              if (f = s[i++]) {
                f();
              }
              if (i == s.length || 99 == i) {
                s = t.s = s.slice(i);
                i = 0;
              }
              if (s.length) {
                p(T2);
              }
            };
          })();
          (function() {
            var u, sT = setTimeout, T2 = sT.turn;
            (sT.each = sT.each || function(l, f, e, S2) {
              S2 = S2 || 9;
              (function t(s, L, r) {
                if (L = (s = (l || []).splice(0, S2)).length) {
                  for (var i = 0; i < L; i++) {
                    if (u !== (r = f(s[i]))) {
                      break;
                    }
                  }
                  if (u === r) {
                    T2(t);
                    return;
                  }
                }
                e && e(r);
              })();
            })();
          })();
        })(USE, "./shim");
        USE(function(module2) {
          module2.exports = function onto(tag, arg, as) {
            if (!tag) {
              return {
                to: onto
              };
            }
            var u, f = "function" == typeof arg, tag = (this.tag || (this.tag = {}))[tag] || f && (this.tag[tag] = {
              tag,
              to: onto._ = {
                next: function(arg2) {
                  var tmp;
                  if (tmp = this.to) {
                    tmp.next(arg2);
                  }
                }
              }
            });
            if (f) {
              var be2 = {
                off: onto.off || (onto.off = function() {
                  if (this.next === onto._.next) {
                    return true;
                  }
                  if (this === this.the.last) {
                    this.the.last = this.back;
                  }
                  this.to.back = this.back;
                  this.next = onto._.next;
                  this.back.to = this.to;
                  if (this.the.last === this.the) {
                    delete this.on.tag[this.the.tag];
                  }
                }),
                to: onto._,
                next: arg,
                the: tag,
                on: this,
                as
              };
              (be2.back = tag.last || tag).to = be2;
              return tag.last = be2;
            }
            if ((tag = tag.to) && u !== arg) {
              tag.next(arg);
            }
            return tag;
          };
        })(USE, "./onto");
        USE(function(module2) {
          module2.exports = function(v2) {
            return v2 === null || "string" === typeof v2 || "boolean" === typeof v2 || "number" === typeof v2 && v2 != Infinity && v2 != -Infinity && v2 === v2 || !!v2 && "string" == typeof v2["#"] && Object.keys(v2).length === 1 && v2["#"];
          };
        })(USE, "./valid");
        USE(function(module2) {
          USE("./shim");
          function State() {
            var t = +/* @__PURE__ */ new Date();
            if (last < t) {
              return N2 = 0, last = t + State.drift;
            }
            return last = t + (N2 += 1) / D2 + State.drift;
          }
          State.drift = 0;
          var NI = -Infinity, N2 = 0, D2 = 999, last = NI, u;
          State.is = function(n, k2, o) {
            var tmp = k2 && n && n._ && n._[">"] || o;
            if (!tmp) {
              return;
            }
            return "number" == typeof (tmp = tmp[k2]) ? tmp : NI;
          };
          State.ify = function(n, k2, s, v2, soul) {
            (n = n || {})._ = n._ || {};
            if (soul) {
              n._["#"] = soul;
            }
            var tmp = n._[">"] || (n._[">"] = {});
            if (u !== k2 && k2 !== "_") {
              if ("number" == typeof s) {
                tmp[k2] = s;
              }
              if (u !== v2) {
                n[k2] = v2;
              }
            }
            return n;
          };
          module2.exports = State;
        })(USE, "./state");
        USE(function(module2) {
          USE("./shim");
          function Dup(opt) {
            var dup = {
              s: {}
            }, s = dup.s;
            opt = opt || {
              max: 999,
              age: 1e3 * 9
            };
            dup.check = function(id) {
              if (!s[id]) {
                return false;
              }
              return dt2(id);
            };
            var dt2 = dup.track = function(id) {
              var it2 = s[id] || (s[id] = {});
              it2.was = dup.now = +/* @__PURE__ */ new Date();
              if (!dup.to) {
                dup.to = setTimeout(dup.drop, opt.age + 9);
              }
              if (dt2.ed) {
                dt2.ed(id);
              }
              return it2;
            };
            dup.drop = function(age) {
              dup.to = null;
              dup.now = +/* @__PURE__ */ new Date();
              var l = Object.keys(s);
              console.STAT && console.STAT(dup.now, +/* @__PURE__ */ new Date() - dup.now, "dup drop keys");
              setTimeout.each(l, function(id) {
                var it2 = s[id];
                if (it2 && (age || opt.age) > dup.now - it2.was) {
                  return;
                }
                delete s[id];
              }, 0, 99);
            };
            return dup;
          }
          module2.exports = Dup;
        })(USE, "./dup");
        USE(function(module2) {
          USE("./onto");
          module2.exports = function ask(cb, as) {
            if (!this.on) {
              return;
            }
            var lack = (this.opt || {}).lack || 9e3;
            if (!("function" == typeof cb)) {
              if (!cb) {
                return;
              }
              var id = cb["#"] || cb, tmp = (this.tag || "")[id];
              if (!tmp) {
                return;
              }
              if (as) {
                tmp = this.on(id, as);
                clearTimeout(tmp.err);
                tmp.err = setTimeout(function() {
                  tmp.off();
                }, lack);
              }
              return true;
            }
            var id = as && as["#"] || random(9);
            if (!cb) {
              return id;
            }
            var to = this.on(id, cb, as);
            to.err = to.err || setTimeout(function() {
              to.off();
              to.next({
                err: "Error: No ACK yet.",
                lack: true
              });
            }, lack);
            return id;
          };
          var random = String.random || function() {
            return Math.random().toString(36).slice(2);
          };
        })(USE, "./ask");
        USE(function(module2) {
          function Gun2(o) {
            if (o instanceof Gun2) {
              return (this._ = {
                $: this
              }).$;
            }
            if (!(this instanceof Gun2)) {
              return new Gun2(o);
            }
            return Gun2.create(this._ = {
              $: this,
              opt: o
            });
          }
          Gun2.is = function($2) {
            return $2 instanceof Gun2 || $2 && $2._ && $2 === $2._.$ || false;
          };
          Gun2.version = 0.202;
          Gun2.chain = Gun2.prototype;
          Gun2.chain.toJSON = function() {
          };
          USE("./shim");
          Gun2.valid = USE("./valid");
          Gun2.state = USE("./state");
          Gun2.on = USE("./onto");
          Gun2.dup = USE("./dup");
          Gun2.ask = USE("./ask");
          (function() {
            Gun2.create = function(at2) {
              at2.root = at2.root || at2;
              at2.graph = at2.graph || {};
              at2.on = at2.on || Gun2.on;
              at2.ask = at2.ask || Gun2.ask;
              at2.dup = at2.dup || Gun2.dup();
              var gun2 = at2.$.opt(at2.opt);
              if (!at2.once) {
                at2.on("in", universe, at2);
                at2.on("out", universe, at2);
                at2.on("put", map, at2);
                Gun2.on("create", at2);
                at2.on("create", at2);
              }
              at2.once = 1;
              return gun2;
            };
            function universe(msg) {
              if (!msg) {
                return;
              }
              if (msg.out === universe) {
                this.to.next(msg);
                return;
              }
              var eve = this, as = eve.as, at2 = as.at || as, gun2 = at2.$, dup = at2.dup, tmp, DBG = msg.DBG;
              (tmp = msg["#"]) || (tmp = msg["#"] = text_rand(9));
              if (dup.check(tmp)) {
                return;
              }
              dup.track(tmp);
              tmp = msg._;
              msg._ = "function" == typeof tmp ? tmp : function() {
              };
              msg.$ && msg.$ === (msg.$._ || "").$ || (msg.$ = gun2);
              if (msg["@"] && !msg.put) {
                ack(msg);
              }
              if (!at2.ask(msg["@"], msg)) {
                DBG && (DBG.u = +/* @__PURE__ */ new Date());
                if (msg.put) {
                  put(msg);
                  return;
                } else if (msg.get) {
                  Gun2.on.get(msg, gun2);
                }
              }
              DBG && (DBG.uc = +/* @__PURE__ */ new Date());
              eve.to.next(msg);
              DBG && (DBG.ua = +/* @__PURE__ */ new Date());
              if (msg.nts || msg.NTS) {
                return;
              }
              msg.out = universe;
              at2.on("out", msg);
              DBG && (DBG.ue = +/* @__PURE__ */ new Date());
            }
            function put(msg) {
              if (!msg) {
                return;
              }
              var ctx = msg._ || "", root = ctx.root = ((ctx.$ = msg.$ || "")._ || "").root;
              if (msg["@"] && ctx.faith && !ctx.miss) {
                msg.out = universe;
                root.on("out", msg);
                return;
              }
              ctx.latch = root.hatch;
              ctx.match = root.hatch = [];
              var put2 = msg.put;
              var DBG = ctx.DBG = msg.DBG, S2 = +/* @__PURE__ */ new Date();
              CT = CT || S2;
              if (put2["#"] && put2["."]) {
                return;
              }
              DBG && (DBG.p = S2);
              ctx["#"] = msg["#"];
              ctx.msg = msg;
              ctx.all = 0;
              ctx.stun = 1;
              var nl = Object.keys(put2);
              console.STAT && console.STAT(S2, ((DBG || ctx).pk = +/* @__PURE__ */ new Date()) - S2, "put sort");
              var ni = 0, nj, kl, soul, node, states, err, tmp;
              (function pop(o) {
                if (nj != ni) {
                  nj = ni;
                  if (!(soul = nl[ni])) {
                    console.STAT && console.STAT(S2, ((DBG || ctx).pd = +/* @__PURE__ */ new Date()) - S2, "put");
                    fire(ctx);
                    return;
                  }
                  if (!(node = put2[soul])) {
                    err = ERR + cut(soul) + "no node.";
                  } else if (!(tmp = node._)) {
                    err = ERR + cut(soul) + "no meta.";
                  } else if (soul !== tmp["#"]) {
                    err = ERR + cut(soul) + "soul not same.";
                  } else if (!(states = tmp[">"])) {
                    err = ERR + cut(soul) + "no state.";
                  }
                  kl = Object.keys(node || {});
                }
                if (err) {
                  msg.err = ctx.err = err;
                  fire(ctx);
                  return;
                }
                var i = 0, key;
                o = o || 0;
                while (o++ < 9 && (key = kl[i++])) {
                  if ("_" === key) {
                    continue;
                  }
                  var val = node[key], state = states[key];
                  if (u === state) {
                    err = ERR + cut(key) + "on" + cut(soul) + "no state.";
                    break;
                  }
                  if (!valid(val)) {
                    err = ERR + cut(key) + "on" + cut(soul) + "bad " + typeof val + cut(val);
                    break;
                  }
                  ham(val, key, soul, state, msg);
                  ++C3;
                }
                if ((kl = kl.slice(i)).length) {
                  turn(pop);
                  return;
                }
                ++ni;
                kl = null;
                pop(o);
              })();
            }
            Gun2.on.put = put;
            function ham(val, key, soul, state, msg) {
              var ctx = msg._ || "", root = ctx.root, graph = root.graph, tmp;
              var vertex = graph[soul] || empty, was = state_is(vertex, key, 1), known = vertex[key];
              var DBG = ctx.DBG;
              if (tmp = console.STAT) {
                if (!graph[soul] || !known) {
                  tmp.has = (tmp.has || 0) + 1;
                }
              }
              var now = State();
              if (state > now) {
                setTimeout(function() {
                  ham(val, key, soul, state, msg);
                }, (tmp = state - now) > MD ? MD : tmp);
                console.STAT && console.STAT((DBG || ctx).Hf = +/* @__PURE__ */ new Date(), tmp, "future");
                return;
              }
              if (state < was) {
                {
                  return;
                }
              }
              if (!ctx.faith) {
                if (state === was && (val === known || L(val) <= L(known))) {
                  if (!ctx.miss) {
                    return;
                  }
                }
              }
              ctx.stun++;
              var aid = msg["#"] + ctx.all++, id = {
                toString: function() {
                  return aid;
                },
                _: ctx
              };
              id.toJSON = id.toString;
              root.dup.track(id)["#"] = msg["#"];
              DBG && (DBG.ph = DBG.ph || +/* @__PURE__ */ new Date());
              root.on("put", {
                "#": id,
                "@": msg["@"],
                put: {
                  "#": soul,
                  ".": key,
                  ":": val,
                  ">": state
                },
                ok: msg.ok,
                _: ctx
              });
            }
            function map(msg) {
              var DBG;
              if (DBG = (msg._ || "").DBG) {
                DBG.pa = +/* @__PURE__ */ new Date();
                DBG.pm = DBG.pm || +/* @__PURE__ */ new Date();
              }
              var eve = this, root = eve.as, graph = root.graph, ctx = msg._, put2 = msg.put, soul = put2["#"], key = put2["."], val = put2[":"], state = put2[">"];
              msg["#"];
              var tmp;
              if ((tmp = ctx.msg) && (tmp = tmp.put) && (tmp = tmp[soul])) {
                state_ify(tmp, key, state, val, soul);
              }
              graph[soul] = state_ify(graph[soul], key, state, val, soul);
              if (tmp = (root.next || "")[soul]) {
                tmp.on("in", msg);
              }
              fire(ctx);
              eve.to.next(msg);
            }
            function fire(ctx, msg) {
              var root;
              if (ctx.stop) {
                return;
              }
              if (!ctx.err && 0 < --ctx.stun) {
                return;
              }
              ctx.stop = 1;
              if (!(root = ctx.root)) {
                return;
              }
              var tmp = ctx.match;
              tmp.end = 1;
              if (tmp === root.hatch) {
                if (!(tmp = ctx.latch) || tmp.end) {
                  delete root.hatch;
                } else {
                  root.hatch = tmp;
                }
              }
              ctx.hatch && ctx.hatch();
              setTimeout.each(ctx.match, function(cb) {
                cb && cb();
              });
              if (!(msg = ctx.msg) || ctx.err || msg.err) {
                return;
              }
              msg.out = universe;
              ctx.root.on("out", msg);
              CF();
            }
            function ack(msg) {
              var id = msg["@"] || "", ctx;
              if (!(ctx = id._)) {
                var dup = (dup = msg.$) && (dup = dup._) && (dup = dup.root) && (dup = dup.dup);
                if (!(dup = dup.check(id))) {
                  return;
                }
                msg["@"] = dup["#"] || msg["@"];
                return;
              }
              ctx.acks = (ctx.acks || 0) + 1;
              if (ctx.err = msg.err) {
                msg["@"] = ctx["#"];
                fire(ctx);
              }
              ctx.ok = msg.ok || ctx.ok;
              if (!ctx.stop && !ctx.crack) {
                ctx.crack = ctx.match && ctx.match.push(function() {
                  back(ctx);
                });
              }
              back(ctx);
            }
            function back(ctx) {
              if (!ctx || !ctx.root) {
                return;
              }
              if (ctx.stun || ctx.acks !== ctx.all) {
                return;
              }
              ctx.root.on("in", {
                "@": ctx["#"],
                err: ctx.err,
                ok: ctx.err ? u : ctx.ok || {
                  "": 1
                }
              });
            }
            var ERR = "Error: Invalid graph!";
            var cut = function(s) {
              return " '" + ("" + s).slice(0, 9) + "...' ";
            };
            var L = JSON.stringify, MD = 2147483647, State = Gun2.state;
            var C3 = 0, CT, CF = function() {
              if (C3 > 999 && C3 / -(CT - (CT = +/* @__PURE__ */ new Date())) > 1) {
                Gun2.window && console.log("Warning: You're syncing 1K+ records a second, faster than DOM can update - consider limiting query.");
                CF = function() {
                  C3 = 0;
                };
              }
            };
          })();
          (function() {
            Gun2.on.get = function(msg, gun2) {
              var root = gun2._, get = msg.get, soul = get["#"], node = root.graph[soul], has = get["."];
              var next = root.next || (root.next = {}), at2 = next[soul];
              var ctx = msg._ || {}, DBG = ctx.DBG = msg.DBG;
              DBG && (DBG.g = +/* @__PURE__ */ new Date());
              if (!node) {
                return root.on("get", msg);
              }
              if (has) {
                if ("string" != typeof has || u === node[has]) {
                  if (!((at2 || "").next || "")[has]) {
                    root.on("get", msg);
                    return;
                  }
                }
                node = state_ify({}, has, state_is(node, has), node[has], soul);
              }
              node && ack(msg, node);
              root.on("get", msg);
            };
            function ack(msg, node) {
              var S2 = +/* @__PURE__ */ new Date(), ctx = msg._ || {}, DBG = ctx.DBG = msg.DBG;
              var to = msg["#"], id = text_rand(9), keys = Object.keys(node || "").sort(), soul = ((node || "")._ || "")["#"];
              keys.length;
              var root = msg.$._.root, F2 = node === root.graph[soul];
              console.STAT && console.STAT(S2, ((DBG || ctx).gk = +/* @__PURE__ */ new Date()) - S2, "got keys");
              node && function go() {
                S2 = +/* @__PURE__ */ new Date();
                var i = 0, k2, put = {}, tmp;
                while (i < 9 && (k2 = keys[i++])) {
                  state_ify(put, k2, state_is(node, k2), node[k2], soul);
                }
                keys = keys.slice(i);
                (tmp = {})[soul] = put;
                put = tmp;
                var faith;
                if (F2) {
                  faith = function() {
                  };
                  faith.ram = faith.faith = true;
                }
                tmp = keys.length;
                console.STAT && console.STAT(S2, -(S2 - (S2 = +/* @__PURE__ */ new Date())), "got copied some");
                DBG && (DBG.ga = +/* @__PURE__ */ new Date());
                root.on("in", {
                  "@": to,
                  "#": id,
                  put,
                  "%": tmp ? id = text_rand(9) : u,
                  $: root.$,
                  _: faith,
                  DBG,
                  FOO: 1
                });
                console.STAT && console.STAT(S2, +/* @__PURE__ */ new Date() - S2, "got in");
                if (!tmp) {
                  return;
                }
                setTimeout.turn(go);
              }();
              if (!node) {
                root.on("in", {
                  "@": msg["#"]
                });
              }
            }
            Gun2.on.get.ack = ack;
          })();
          (function() {
            Gun2.chain.opt = function(opt) {
              opt = opt || {};
              var gun2 = this, at2 = gun2._, tmp = opt.peers || opt;
              if (!Object.plain(opt)) {
                opt = {};
              }
              if (!Object.plain(at2.opt)) {
                at2.opt = opt;
              }
              if ("string" == typeof tmp) {
                tmp = [
                  tmp
                ];
              }
              if (!Object.plain(at2.opt.peers)) {
                at2.opt.peers = {};
              }
              if (tmp instanceof Array) {
                opt.peers = {};
                tmp.forEach(function(url) {
                  var p = {};
                  p.id = p.url = url;
                  opt.peers[url] = at2.opt.peers[url] = at2.opt.peers[url] || p;
                });
              }
              obj_each(opt, function each(k2) {
                var v2 = this[k2];
                if (this && this.hasOwnProperty(k2) || "string" == typeof v2 || Object.empty(v2)) {
                  this[k2] = v2;
                  return;
                }
                if (v2 && v2.constructor !== Object && !(v2 instanceof Array)) {
                  return;
                }
                obj_each(v2, each);
              });
              at2.opt.from = opt;
              Gun2.on("opt", at2);
              at2.opt.uuid = at2.opt.uuid || function uuid(l) {
                return Gun2.state().toString(36).replace(".", "") + String.random(l || 12);
              };
              return gun2;
            };
          })();
          var obj_each = function(o, f) {
            Object.keys(o).forEach(f, o);
          }, text_rand = String.random, turn = setTimeout.turn, valid = Gun2.valid, state_is = Gun2.state.is, state_ify = Gun2.state.ify, u, empty = {}, C2;
          Gun2.log = function() {
            return !Gun2.log.off && C2.log.apply(C2, arguments), [].slice.call(arguments).join(" ");
          };
          Gun2.log.once = function(w, s, o) {
            return (o = Gun2.log.once)[w] = o[w] || 0, o[w]++ || Gun2.log(s);
          };
          if (typeof window !== "undefined") {
            (window.GUN = window.Gun = Gun2).window = window;
          }
          try {
            if (typeof MODULE !== "undefined") {
              MODULE.exports = Gun2;
            }
          } catch (e) {
          }
          module2.exports = Gun2;
          (Gun2.window || {}).console = (Gun2.window || {}).console || {
            log: function() {
            }
          };
          (C2 = console).only = function(i, s) {
            return C2.only.i && i === C2.only.i && C2.only.i++ && (C2.log.apply(C2, arguments) || s);
          };
          Gun2.log.once("welcome", "Hello wonderful person! :) Thanks for using GUN, please ask for help on http://chat.gun.eco if anything takes you longer than 5min to figure out!");
        })(USE, "./root");
        USE(function(module2) {
          var Gun2 = USE("./root");
          Gun2.chain.back = function(n, opt) {
            var tmp;
            n = n || 1;
            if (-1 === n || Infinity === n) {
              return this._.root.$;
            } else if (1 === n) {
              return (this._.back || this._).$;
            }
            var gun2 = this, at2 = gun2._;
            if (typeof n === "string") {
              n = n.split(".");
            }
            if (n instanceof Array) {
              var i = 0, l = n.length, tmp = at2;
              for (i; i < l; i++) {
                tmp = (tmp || empty)[n[i]];
              }
              if (u !== tmp) {
                return opt ? gun2 : tmp;
              } else if (tmp = at2.back) {
                return tmp.$.back(n, opt);
              }
              return;
            }
            if ("function" == typeof n) {
              var yes, tmp = {
                back: at2
              };
              while ((tmp = tmp.back) && u === (yes = n(tmp, opt))) {
              }
              return yes;
            }
            if ("number" == typeof n) {
              return (at2.back || at2).$.back(n - 1);
            }
            return this;
          };
          var empty = {}, u;
        })(USE, "./back");
        USE(function(module2) {
          var Gun2 = USE("./root");
          Gun2.chain.chain = function(sub) {
            var gun2 = this, at2 = gun2._, chain = new (sub || gun2).constructor(gun2), cat = chain._, root;
            cat.root = root = at2.root;
            cat.id = ++root.once;
            cat.back = gun2._;
            cat.on = Gun2.on;
            cat.on("in", Gun2.on.in, cat);
            cat.on("out", Gun2.on.out, cat);
            return chain;
          };
          function output(msg) {
            var get, at2 = this.as, back = at2.back, root = at2.root, tmp;
            if (!msg.$) {
              msg.$ = at2.$;
            }
            this.to.next(msg);
            if (at2.err) {
              at2.on("in", {
                put: at2.put = u,
                $: at2.$
              });
              return;
            }
            if (get = msg.get) {
              if (root.pass) {
                root.pass[at2.id] = at2;
              }
              if (at2.lex) {
                Object.keys(at2.lex).forEach(function(k2) {
                  tmp[k2] = at2.lex[k2];
                }, tmp = msg.get = msg.get || {});
              }
              if (get["#"] || at2.soul) {
                get["#"] = get["#"] || at2.soul;
                msg["#"] || (msg["#"] = text_rand(9));
                back = root.$.get(get["#"])._;
                if (!(get = get["."])) {
                  tmp = back.ask && back.ask[""];
                  (back.ask || (back.ask = {}))[""] = back;
                  if (u !== back.put) {
                    back.on("in", back);
                    if (tmp) {
                      return;
                    }
                  }
                  msg.$ = back.$;
                } else if (obj_has(back.put, get)) {
                  tmp = back.ask && back.ask[get];
                  (back.ask || (back.ask = {}))[get] = back.$.get(get)._;
                  back.on("in", {
                    get,
                    put: {
                      "#": back.soul,
                      ".": get,
                      ":": back.put[get],
                      ">": state_is(root.graph[back.soul], get)
                    }
                  });
                  if (tmp) {
                    return;
                  }
                }
                root.ask(ack, msg);
                return root.on("in", msg);
              }
              if (get["."]) {
                if (at2.get) {
                  msg = {
                    get: {
                      ".": at2.get
                    },
                    $: at2.$
                  };
                  (back.ask || (back.ask = {}))[at2.get] = msg.$._;
                  return back.on("out", msg);
                }
                msg = {
                  get: at2.lex ? msg.get : {},
                  $: at2.$
                };
                return back.on("out", msg);
              }
              (at2.ask || (at2.ask = {}))[""] = at2;
              if (at2.get) {
                get["."] = at2.get;
                (back.ask || (back.ask = {}))[at2.get] = msg.$._;
                return back.on("out", msg);
              }
            }
            return back.on("out", msg);
          }
          Gun2.on.out = output;
          function input(msg, cat) {
            cat = cat || this.as;
            var root = cat.root, gun2 = msg.$ || (msg.$ = cat.$), at2 = (gun2 || "")._ || empty, tmp = msg.put || "", soul = tmp["#"], key = tmp["."], change = u !== tmp["="] ? tmp["="] : tmp[":"], state2 = tmp[">"] || -Infinity, sat;
            if (u !== msg.put && (u === tmp["#"] || u === tmp["."] || u === tmp[":"] && u === tmp["="] || u === tmp[">"])) {
              if (!valid(tmp)) {
                if (!(soul = ((tmp || "")._ || "")["#"])) {
                  console.log("chain not yet supported for", tmp, "...", msg, cat);
                  return;
                }
                gun2 = cat.root.$.get(soul);
                return setTimeout.each(Object.keys(tmp).sort(), function(k2) {
                  if ("_" == k2 || u === (state2 = state_is(tmp, k2))) {
                    return;
                  }
                  cat.on("in", {
                    $: gun2,
                    put: {
                      "#": soul,
                      ".": k2,
                      "=": tmp[k2],
                      ">": state2
                    },
                    VIA: msg
                  });
                });
              }
              cat.on("in", {
                $: at2.back.$,
                put: {
                  "#": soul = at2.back.soul,
                  ".": key = at2.has || at2.get,
                  "=": tmp,
                  ">": state_is(at2.back.put, key)
                },
                via: msg
              });
              return;
            }
            if ((msg.seen || "")[cat.id]) {
              return;
            }
            (msg.seen || (msg.seen = function() {
            }))[cat.id] = cat;
            if (cat !== at2) {
              Object.keys(msg).forEach(function(k2) {
                tmp[k2] = msg[k2];
              }, tmp = {});
              tmp.get = cat.get || tmp.get;
              if (!cat.soul && !cat.has) {
                tmp.$$$ = tmp.$$$ || cat.$;
              } else if (at2.soul) {
                tmp.$ = cat.$;
                tmp.$$ = tmp.$$ || at2.$;
              }
              msg = tmp;
            }
            unlink(msg, cat);
            if ((cat.soul || msg.$$) && state2 >= state_is(root.graph[soul], key)) {
              (tmp = root.$.get(soul)._).put = state_ify(tmp.put, key, state2, change, soul);
            }
            if (!at2.soul && state2 >= state_is(root.graph[soul], key) && (sat = (root.$.get(soul)._.next || "")[key])) {
              sat.put = change;
              if ("string" == typeof (tmp = valid(change))) {
                sat.put = root.$.get(tmp)._.put || change;
              }
            }
            this.to && this.to.next(msg);
            cat.any && setTimeout.each(Object.keys(cat.any), function(any) {
              (any = cat.any[any]) && any(msg);
            }, 0, 99);
            cat.echo && setTimeout.each(Object.keys(cat.echo), function(lat) {
              (lat = cat.echo[lat]) && lat.on("in", msg);
            }, 0, 99);
            if (((msg.$$ || "")._ || at2).soul) {
              if ((sat = cat.next) && (sat = sat[key])) {
                tmp = {};
                Object.keys(msg).forEach(function(k2) {
                  tmp[k2] = msg[k2];
                });
                tmp.$ = (msg.$$ || msg.$).get(tmp.get = key);
                delete tmp.$$;
                delete tmp.$$$;
                sat.on("in", tmp);
              }
            }
            link(msg, cat);
          }
          Gun2.on.in = input;
          function link(msg, cat) {
            cat = cat || this.as || msg.$._;
            if (msg.$$ && this !== Gun2.on) {
              return;
            }
            if (!msg.put || cat.soul) {
              return;
            }
            var put = msg.put || "", link2 = put["="] || put[":"], tmp;
            var root = cat.root, tat = root.$.get(put["#"]).get(put["."])._;
            if ("string" != typeof (link2 = valid(link2))) {
              if (this === Gun2.on) {
                (tat.echo || (tat.echo = {}))[cat.id] = cat;
              }
              return;
            }
            if ((tat.echo || (tat.echo = {}))[cat.id] && !(root.pass || "")[cat.id]) {
              return;
            }
            if (tmp = root.pass) {
              if (tmp[link2 + cat.id]) {
                return;
              }
              tmp[link2 + cat.id] = 1;
            }
            (tat.echo || (tat.echo = {}))[cat.id] = cat;
            if (cat.has) {
              cat.link = link2;
            }
            var sat = root.$.get(tat.link = link2)._;
            (sat.echo || (sat.echo = {}))[tat.id] = tat;
            var tmp = cat.ask || "";
            if (tmp[""] || cat.lex) {
              sat.on("out", {
                get: {
                  "#": link2
                }
              });
            }
            setTimeout.each(Object.keys(tmp), function(get, sat2) {
              if (!get || !(sat2 = tmp[get])) {
                return;
              }
              sat2.on("out", {
                get: {
                  "#": link2,
                  ".": get
                }
              });
            }, 0, 99);
          }
          Gun2.on.link = link;
          function unlink(msg, cat) {
            var put = msg.put || "", change = u !== put["="] ? put["="] : put[":"], root = cat.root, link2, tmp;
            if (u === change) {
              if (cat.soul && u !== cat.put) {
                return;
              }
              tmp = (msg.$$ || msg.$ || "")._ || "";
              if (msg["@"] && (u !== tmp.put || u !== cat.put)) {
                return;
              }
              if (link2 = cat.link || msg.linked) {
                delete (root.$.get(link2)._.echo || "")[cat.id];
              }
              if (cat.has) {
                cat.link = null;
              }
              cat.put = u;
              setTimeout.each(Object.keys(cat.next || ""), function(get, sat) {
                if (!(sat = cat.next[get])) {
                  return;
                }
                if (link2) {
                  delete (root.$.get(link2).get(get)._.echo || "")[sat.id];
                }
                sat.on("in", {
                  get,
                  put: u,
                  $: sat.$
                });
              }, 0, 99);
              return;
            }
            if (cat.soul) {
              return;
            }
            if (msg.$$) {
              return;
            }
            link2 = valid(change);
            tmp = msg.$._ || "";
            if (link2 === tmp.link || cat.has && !tmp.link) {
              if ((root.pass || "")[cat.id] && "string" !== typeof link2) ;
              else {
                return;
              }
            }
            delete (tmp.echo || "")[cat.id];
            unlink({
              get: cat.get,
              put: u,
              $: msg.$,
              linked: msg.linked = msg.linked || tmp.link
            }, cat);
          }
          Gun2.on.unlink = unlink;
          function ack(msg, ev) {
            var as = this.as, at2 = as.$._;
            at2.root;
            var get = as.get || "", tmp = (msg.put || "")[get["#"]] || "";
            if (!msg.put || "string" == typeof get["."] && u === tmp[get["."]]) {
              if (u !== at2.put) {
                return;
              }
              if (!at2.soul && !at2.has) {
                return;
              }
              at2.ack = (at2.ack || 0) + 1;
              at2.on("in", {
                get: at2.get,
                put: at2.put = u,
                $: at2.$,
                "@": msg["@"]
              });
              return;
            }
            (msg._ || {}).miss = 1;
            Gun2.on.put(msg);
            return;
          }
          var empty = {}, u, text_rand = String.random, valid = Gun2.valid, obj_has = function(o, k2) {
            return o && Object.prototype.hasOwnProperty.call(o, k2);
          }, state = Gun2.state, state_is = state.is, state_ify = state.ify;
        })(USE, "./chain");
        USE(function(module2) {
          var Gun2 = USE("./root");
          Gun2.chain.get = function(key, cb, as) {
            var gun2, tmp;
            if (typeof key === "string") {
              if (key.length == 0) {
                (gun2 = this.chain())._.err = {
                  err: Gun2.log("0 length key!", key)
                };
                if (cb) {
                  cb.call(gun2, gun2._.err);
                }
                return gun2;
              }
              var back = this, cat = back._;
              var next = cat.next || empty;
              if (!(gun2 = next[key])) {
                gun2 = key && cache(key, back);
              }
              gun2 = gun2 && gun2.$;
            } else if ("function" == typeof key) {
              let any = function(msg, eve, f) {
                if (any.stun) {
                  return;
                }
                if ((tmp2 = root.pass) && !tmp2[id]) {
                  return;
                }
                var at2 = msg.$._, sat = (msg.$$ || "")._, data = (sat || at2).put, odd = !at2.has && !at2.soul, test = {}, tmp2;
                if (odd || u === data) {
                  data = u === ((tmp2 = msg.put) || "")["="] ? u === (tmp2 || "")[":"] ? tmp2 : tmp2[":"] : tmp2["="];
                }
                if ("string" == typeof (tmp2 = Gun2.valid(data))) {
                  data = u === (tmp2 = root.$.get(tmp2)._.put) ? opt.not ? u : data : tmp2;
                }
                if (opt.not && u === data) {
                  return;
                }
                if (u === opt.stun) {
                  if ((tmp2 = root.stun) && tmp2.on) {
                    cat.$.back(function(a) {
                      tmp2.on("" + a.id, test = {});
                      if ((test.run || 0) < any.id) {
                        return test;
                      }
                    });
                    !test.run && tmp2.on("" + at2.id, test = {});
                    !test.run && sat && tmp2.on("" + sat.id, test = {});
                    if (any.id > test.run) {
                      if (!test.stun || test.stun.end) {
                        test.stun = tmp2.on("stun");
                        test.stun = test.stun && test.stun.last;
                      }
                      if (test.stun && !test.stun.end) {
                        (test.stun.add || (test.stun.add = {}))[id] = function() {
                          any(msg, eve, 1);
                        };
                        return;
                      }
                    }
                  }
                  if (u === data) {
                    f = 0;
                  }
                  if ((tmp2 = root.hatch) && !tmp2.end && u === opt.hatch && !f) {
                    if (wait[at2.$._.id]) {
                      return;
                    }
                    wait[at2.$._.id] = 1;
                    tmp2.push(function() {
                      any(msg, eve, 1);
                    });
                    return;
                  }
                  wait = {};
                }
                if (root.pass) {
                  if (root.pass[id + at2.id]) {
                    return;
                  }
                  root.pass[id + at2.id] = 1;
                }
                if (opt.on) {
                  opt.ok.call(at2.$, data, at2.get, msg, eve || any);
                  return;
                }
                if (opt.v2020) {
                  opt.ok(msg, eve || any);
                  return;
                }
                Object.keys(msg).forEach(function(k2) {
                  tmp2[k2] = msg[k2];
                }, tmp2 = {});
                msg = tmp2;
                msg.put = data;
                opt.ok.call(opt.as, msg, eve || any);
              };
              if (true === cb) {
                return soul(this, key, cb, as), this;
              }
              gun2 = this;
              var cat = gun2._, opt = cb || {}, root = cat.root, id;
              opt.at = cat;
              opt.ok = key;
              var wait = {};
              any.at = cat;
              (cat.any || (cat.any = {}))[id = String.random(7)] = any;
              any.off = function() {
                any.stun = 1;
                if (!cat.any) {
                  return;
                }
                delete cat.any[id];
              };
              any.rid = rid;
              any.id = opt.run || ++root.once;
              tmp = root.pass;
              (root.pass = {})[id] = 1;
              opt.out = opt.out || {
                get: {}
              };
              cat.on("out", opt.out);
              root.pass = tmp;
              return gun2;
            } else if ("number" == typeof key) {
              return this.get("" + key, cb, as);
            } else if ("string" == typeof (tmp = valid(key))) {
              return this.get(tmp, cb, as);
            } else if (tmp = this.get.next) {
              gun2 = tmp(this, key);
            }
            if (!gun2) {
              (gun2 = this.chain())._.err = {
                err: Gun2.log("Invalid get request!", key)
              };
              if (cb) {
                cb.call(gun2, gun2._.err);
              }
              return gun2;
            }
            if (cb && "function" == typeof cb) {
              gun2.get(cb, as);
            }
            return gun2;
          };
          function cache(key, back) {
            var cat = back._, next = cat.next, gun2 = back.chain(), at2 = gun2._;
            if (!next) {
              next = cat.next = {};
            }
            next[at2.get = key] = at2;
            if (back === cat.root.$) {
              at2.soul = key;
            } else if (cat.soul || cat.has) {
              at2.has = key;
            }
            return at2;
          }
          function soul(gun2, cb, opt, as) {
            var cat = gun2._, acks = 0, tmp;
            if (tmp = cat.soul || cat.link) {
              return cb(tmp, as, cat);
            }
            if (cat.jam) {
              return cat.jam.push([
                cb,
                as
              ]);
            }
            cat.jam = [
              [
                cb,
                as
              ]
            ];
            gun2.get(function go(msg, eve) {
              if (u === msg.put && !cat.root.opt.super && (tmp = Object.keys(cat.root.opt.peers).length) && ++acks <= tmp) {
                return;
              }
              eve.rid(msg);
              var at2 = (at2 = msg.$) && at2._ || {}, i = 0, as2;
              tmp = cat.jam;
              delete cat.jam;
              while (as2 = tmp[i++]) {
                var cb2 = as2[0];
                as2 = as2[1];
                cb2 && cb2(at2.link || at2.soul || Gun2.valid(msg.put) || ((msg.put || {})._ || {})["#"], as2, msg, eve);
              }
            }, {
              out: {
                get: {
                  ".": true
                }
              }
            });
            return gun2;
          }
          function rid(at2) {
            var cat = this.at || this.on;
            if (!at2 || cat.soul || cat.has) {
              return this.off();
            }
            if (!(at2 = (at2 = (at2 = at2.$ || at2)._ || at2).id)) {
              return;
            }
            cat.map;
            var seen;
            if ((seen = this.seen || (this.seen = {}))[at2]) {
              return true;
            }
            seen[at2] = true;
            return;
          }
          var empty = {}, valid = Gun2.valid, u;
        })(USE, "./get");
        USE(function(module2) {
          var Gun2 = USE("./root");
          Gun2.chain.put = function(data, cb, as) {
            var gun2 = this, at2 = gun2._, root = at2.root;
            as = as || {};
            as.root = at2.root;
            as.run || (as.run = root.once);
            stun(as, at2.id);
            as.ack = as.ack || cb;
            as.via = as.via || gun2;
            as.data = as.data || data;
            as.soul || (as.soul = at2.soul || "string" == typeof cb && cb);
            var s = as.state = as.state || Gun2.state();
            if ("function" == typeof data) {
              data(function(d) {
                as.data = d;
                gun2.put(u, u, as);
              });
              return gun2;
            }
            if (!as.soul) {
              return get(as), gun2;
            }
            as.$ = root.$.get(as.soul);
            as.todo = [
              {
                it: as.data,
                ref: as.$
              }
            ];
            as.turn = as.turn || turn;
            as.ran = as.ran || ran;
            (function walk() {
              var to = as.todo, at3 = to.pop(), d = at3.it;
              at3.ref && at3.ref._.id;
              var v2, k2, cat, tmp, g;
              stun(as, at3.ref);
              if (tmp = at3.todo) {
                k2 = tmp.pop();
                d = d[k2];
                if (tmp.length) {
                  to.push(at3);
                }
              }
              k2 && (to.path || (to.path = [])).push(k2);
              if (!(v2 = valid(d)) && !(g = Gun2.is(d))) {
                if (!Object.plain(d)) {
                  ran.err(as, "Invalid data: " + check(d) + " at " + (as.via.back(function(at4) {
                    at4.get && tmp.push(at4.get);
                  }, tmp = []) || tmp.join(".")) + "." + (to.path || []).join("."));
                  return;
                }
                var seen = as.seen || (as.seen = []), i = seen.length;
                while (i--) {
                  if (d === (tmp = seen[i]).it) {
                    v2 = d = tmp.link;
                    break;
                  }
                }
              }
              if (k2 && v2) {
                at3.node = state_ify(at3.node, k2, s, d);
              } else {
                let resolve = function(msg, eve) {
                  var end = cat.link["#"];
                  if (eve) {
                    eve.off();
                    eve.rid(msg);
                  }
                  var soul = end || msg.soul || (tmp = (msg.$$ || msg.$)._ || "").soul || tmp.link || ((tmp = tmp.put || "")._ || "")["#"] || tmp["#"] || ((tmp = msg.put || "") && msg.$$ ? tmp["#"] : (tmp["="] || tmp[":"] || "")["#"]);
                  !end && stun(as, msg.$);
                  if (!soul && !at3.link["#"]) {
                    (at3.wait || (at3.wait = [])).push(function() {
                      resolve(msg, eve);
                    });
                    return;
                  }
                  if (!soul) {
                    soul = [];
                    (msg.$$ || msg.$).back(function(at4) {
                      if (tmp = at4.soul || at4.link) {
                        return soul.push(tmp);
                      }
                      soul.push(at4.get);
                    });
                    soul = soul.reverse().join("/");
                  }
                  cat.link["#"] = soul;
                  !g && (((as.graph || (as.graph = {}))[soul] = cat.node || (cat.node = {
                    _: {}
                  }))._["#"] = soul);
                  delete as.wait[id];
                  cat.wait && setTimeout.each(cat.wait, function(cb2) {
                    cb2 && cb2();
                  });
                  as.ran(as);
                };
                if (!as.seen) {
                  ran.err(as, "Data at root of graph must be a node (an object).");
                  return;
                }
                as.seen.push(cat = {
                  it: d,
                  link: {},
                  todo: g ? [] : Object.keys(d).sort().reverse(),
                  path: (to.path || []).slice(),
                  up: at3
                });
                at3.node = state_ify(at3.node, k2, s, cat.link);
                !g && cat.todo.length && to.push(cat);
                var id = as.seen.length;
                (as.wait || (as.wait = {}))[id] = "";
                tmp = (cat.ref = g ? d : k2 ? at3.ref.get(k2) : at3.ref)._;
                (tmp = d && (d._ || "")["#"] || tmp.soul || tmp.link) ? resolve({
                  soul: tmp
                }) : cat.ref.get(resolve, {
                  run: as.run,
                  v2020: 1,
                  out: {
                    get: {
                      ".": " "
                    }
                  }
                });
              }
              if (!to.length) {
                return as.ran(as);
              }
              as.turn(walk);
            })();
            return gun2;
          };
          function stun(as, id) {
            if (!id) {
              return;
            }
            id = (id._ || "").id || id;
            var run = as.root.stun || (as.root.stun = {
              on: Gun2.on
            }), test = {}, tmp;
            as.stun || (as.stun = run.on("stun", function() {
            }));
            if (tmp = run.on("" + id)) {
              tmp.the.last.next(test);
            }
            if (test.run >= as.run) {
              return;
            }
            run.on("" + id, function(test2) {
              if (as.stun.end) {
                this.off();
                this.to.next(test2);
                return;
              }
              test2.run = test2.run || as.run;
              test2.stun = test2.stun || as.stun;
              return;
            });
          }
          function ran(as) {
            if (as.err) {
              ran.end(as.stun, as.root);
              return;
            }
            if (as.todo.length || as.end || !Object.empty(as.wait)) {
              return;
            }
            as.end = 1;
            var cat = as.$.back(-1)._, root = cat.root, ask = cat.ask(function(ack) {
              root.on("ack", ack);
              if (ack.err && !ack.lack) {
                Gun2.log(ack);
              }
              if (++acks > (as.acks || 0)) {
                this.off();
              }
              if (!as.ack) {
                return;
              }
              as.ack(ack, this);
            }, as.opt), acks = 0, stun2 = as.stun, tmp;
            (tmp = function() {
              if (!stun2) {
                return;
              }
              ran.end(stun2, root);
              setTimeout.each(Object.keys(stun2 = stun2.add || ""), function(cb) {
                if (cb = stun2[cb]) {
                  cb();
                }
              });
            }).hatch = tmp;
            if (as.ack && !as.ok) {
              as.ok = as.acks || 9;
            }
            as.via._.on("out", {
              put: as.out = as.graph,
              ok: as.ok && {
                "@": as.ok + 1
              },
              opt: as.opt,
              "#": ask,
              _: tmp
            });
          }
          ran.end = function(stun2, root) {
            stun2.end = noop;
            if (stun2.the.to === stun2 && stun2 === stun2.the.last) {
              delete root.stun;
            }
            stun2.off();
          };
          ran.err = function(as, err) {
            (as.ack || noop).call(as, as.out = {
              err: as.err = Gun2.log(err)
            });
            as.ran(as);
          };
          function get(as) {
            var at2 = as.via._, tmp;
            as.via = as.via.back(function(at3) {
              if (at3.soul || !at3.get) {
                return at3.$;
              }
              tmp = as.data;
              (as.data = {})[at3.get] = tmp;
            });
            if (!as.via || !as.via._.soul) {
              as.via = at2.root.$.get(((as.data || "")._ || "")["#"] || at2.$.back("opt.uuid")());
            }
            as.via.put(as.data, as.ack, as);
            return;
          }
          function check(d, tmp) {
            return d && (tmp = d.constructor) && tmp.name || typeof d;
          }
          var u, noop = function() {
          }, turn = setTimeout.turn, valid = Gun2.valid, state_ify = Gun2.state.ify;
        })(USE, "./put");
        USE(function(module2) {
          var Gun2 = USE("./root");
          USE("./chain");
          USE("./back");
          USE("./put");
          USE("./get");
          module2.exports = Gun2;
        })(USE, "./index");
        USE(function(module2) {
          var Gun2 = USE("./index");
          Gun2.chain.on = function(tag, arg, eas, as) {
            var gun2 = this, cat = gun2._;
            cat.root;
            var act;
            if (typeof tag === "string") {
              if (!arg) {
                return cat.on(tag);
              }
              act = cat.on(tag, arg, eas || cat, as);
              if (eas && eas.$) {
                (eas.subs || (eas.subs = [])).push(act);
              }
              return gun2;
            }
            var opt = arg;
            (opt = true === opt ? {
              change: true
            } : opt || {}).not = 1;
            opt.on = 1;
            gun2.get(tag, opt);
            return gun2;
          };
          Gun2.chain.once = function(cb, opt) {
            opt = opt || {};
            if (!cb) {
              return none(this);
            }
            var gun2 = this, cat = gun2._, root = cat.root;
            cat.put;
            var id = String.random(7), tmp;
            gun2.get(function(data, key, msg, eve) {
              var $2 = this, at2 = $2._, one = at2.one || (at2.one = {});
              if (eve.stun) {
                return;
              }
              if ("" === one[id]) {
                return;
              }
              if (true === (tmp = Gun2.valid(data))) {
                once();
                return;
              }
              if ("string" == typeof tmp) {
                return;
              }
              clearTimeout((cat.one || "")[id]);
              clearTimeout(one[id]);
              one[id] = setTimeout(once, opt.wait || 99);
              function once(f) {
                if (!at2.has && !at2.soul) {
                  at2 = {
                    put: data,
                    get: key
                  };
                }
                if (u === (tmp = at2.put)) {
                  tmp = ((msg.$$ || "")._ || "").put;
                }
                if ("string" == typeof Gun2.valid(tmp)) {
                  tmp = root.$.get(tmp)._.put;
                  if (tmp === u && !f) {
                    one[id] = setTimeout(function() {
                      once(1);
                    }, opt.wait || 99);
                    return;
                  }
                }
                if (eve.stun) {
                  return;
                }
                if ("" === one[id]) {
                  return;
                }
                one[id] = "";
                if (cat.soul || cat.has) {
                  eve.off();
                }
                cb.call($2, tmp, at2.get);
                clearTimeout(one[id]);
              }
            }, {
              on: 1
            });
            return gun2;
          };
          function none(gun2, opt, chain) {
            Gun2.log.once("valonce", "Chainable val is experimental, its behavior and API may change moving forward. Please play with it and report bugs and ideas on how to improve it.");
            (chain = gun2.chain())._.nix = gun2.once(function(data, key) {
              chain._.on("in", this._);
            });
            chain._.lex = gun2._.lex;
            return chain;
          }
          Gun2.chain.off = function() {
            var gun2 = this, at2 = gun2._, tmp;
            var cat = at2.back;
            if (!cat) {
              return;
            }
            at2.ack = 0;
            if (tmp = cat.next) {
              if (tmp[at2.get]) {
                delete tmp[at2.get];
              }
            }
            if (tmp = cat.any) {
              delete cat.any;
              cat.any = {};
            }
            if (tmp = cat.ask) {
              delete tmp[at2.get];
            }
            if (tmp = cat.put) {
              delete tmp[at2.get];
            }
            if (tmp = at2.soul) {
              delete cat.root.graph[tmp];
            }
            if (tmp = at2.map) {
              Object.keys(tmp).forEach(function(i, at3) {
                at3 = tmp[i];
                if (at3.link) {
                  cat.root.$.get(at3.link).off();
                }
              });
            }
            if (tmp = at2.next) {
              Object.keys(tmp).forEach(function(i, neat) {
                neat = tmp[i];
                neat.$.off();
              });
            }
            at2.on("off", {});
            return gun2;
          };
          var u;
        })(USE, "./on");
        USE(function(module2) {
          var Gun2 = USE("./index"), next = Gun2.chain.get.next;
          Gun2.chain.get.next = function(gun2, lex) {
            var tmp;
            if (!Object.plain(lex)) {
              return (next || noop)(gun2, lex);
            }
            if (tmp = ((tmp = lex["#"]) || "")["="] || tmp) {
              return gun2.get(tmp);
            }
            (tmp = gun2.chain()._).lex = lex;
            gun2.on("in", function(eve) {
              if (String.match(eve.get || (eve.put || "")["."], lex["."] || lex["#"] || lex)) {
                tmp.on("in", eve);
              }
              this.to.next(eve);
            });
            return tmp.$;
          };
          Gun2.chain.map = function(cb, opt, t) {
            var gun2 = this, cat = gun2._, lex, chain;
            if (Object.plain(cb)) {
              lex = cb["."] ? cb : {
                ".": cb
              };
              cb = u;
            }
            if (!cb) {
              if (chain = cat.each) {
                return chain;
              }
              (cat.each = chain = gun2.chain())._.lex = lex || chain._.lex || cat.lex;
              chain._.nix = gun2.back("nix");
              gun2.on("in", map, chain._);
              return chain;
            }
            Gun2.log.once("mapfn", "Map functions are experimental, their behavior and API may change moving forward. Please play with it and report bugs and ideas on how to improve it.");
            chain = gun2.chain();
            gun2.map().on(function(data, key, msg, eve) {
              var next2 = (cb || noop).call(this, data, key, msg, eve);
              if (u === next2) {
                return;
              }
              if (data === next2) {
                return chain._.on("in", msg);
              }
              if (Gun2.is(next2)) {
                return chain._.on("in", next2._);
              }
              var tmp = {};
              Object.keys(msg.put).forEach(function(k2) {
                tmp[k2] = msg.put[k2];
              }, tmp);
              tmp["="] = next2;
              chain._.on("in", {
                get: key,
                put: tmp
              });
            });
            return chain;
          };
          function map(msg) {
            this.to.next(msg);
            var cat = this.as, gun2 = msg.$, at2 = gun2._, put = msg.put, tmp;
            if (!at2.soul && !msg.$$) {
              return;
            }
            if ((tmp = cat.lex) && !String.match(msg.get || (put || "")["."], tmp["."] || tmp["#"] || tmp)) {
              return;
            }
            Gun2.on.link(msg, cat);
          }
          var noop = function() {
          }, u;
        })(USE, "./map");
        USE(function(module2) {
          var Gun2 = USE("./index");
          Gun2.chain.set = function(item, cb, opt) {
            var gun2 = this, root = gun2.back(-1), soul, tmp;
            cb = cb || function() {
            };
            opt = opt || {};
            opt.item = opt.item || item;
            if (soul = ((item || "")._ || "")["#"]) {
              (item = {})["#"] = soul;
            }
            if ("string" == typeof (tmp = Gun2.valid(item))) {
              return gun2.get(soul = tmp).put(item, cb, opt);
            }
            if (!Gun2.is(item)) {
              if (Object.plain(item)) {
                item = root.get(soul = gun2.back("opt.uuid")()).put(item);
              }
              return gun2.get(soul || root.back("opt.uuid")(7)).put(item, cb, opt);
            }
            gun2.put(function(go) {
              item.get(function(soul2, o, msg) {
                if (!soul2) {
                  return cb.call(gun2, {
                    err: Gun2.log('Only a node can be linked! Not "' + msg.put + '"!')
                  });
                }
                (tmp = {})[soul2] = {
                  "#": soul2
                };
                go(tmp);
              }, true);
            });
            return item;
          };
        })(USE, "./set");
        USE(function(module2) {
          USE("./shim");
          var noop = function() {
          };
          var parse = JSON.parseAsync || function(t, cb, r) {
            var u2, d = +/* @__PURE__ */ new Date();
            try {
              cb(u2, JSON.parse(t, r), json.sucks(+/* @__PURE__ */ new Date() - d));
            } catch (e) {
              cb(e);
            }
          };
          var json = JSON.stringifyAsync || function(v2, cb, r, s) {
            var u2, d = +/* @__PURE__ */ new Date();
            try {
              cb(u2, JSON.stringify(v2, r, s), json.sucks(+/* @__PURE__ */ new Date() - d));
            } catch (e) {
              cb(e);
            }
          };
          json.sucks = function(d) {
            if (d > 99) {
              console.log("Warning: JSON blocking CPU detected. Add `gun/lib/yson.js` to fix.");
              json.sucks = noop;
            }
          };
          function Mesh(root) {
            var mesh = function() {
            };
            var opt = root.opt || {};
            opt.log = opt.log || console.log;
            opt.gap = opt.gap || opt.wait || 0;
            opt.max = opt.max || (opt.memory ? opt.memory * 999 * 999 : 3e8) * 0.3;
            opt.pack = opt.pack || opt.max * 0.01 * 0.01;
            opt.puff = opt.puff || 9;
            var puff = setTimeout.turn || setTimeout;
            var dup = root.dup, dup_check = dup.check, dup_track = dup.track;
            var hear = mesh.hear = function(raw, peer) {
              if (!raw) {
                return;
              }
              if (opt.max <= raw.length) {
                return mesh.say({
                  dam: "!",
                  err: "Message too big!"
                }, peer);
              }
              if (mesh === this) {
                hear.d += raw.length || 0;
                ++hear.c;
              }
              var S2 = peer.SH = +/* @__PURE__ */ new Date();
              var tmp = raw[0], msg;
              if ("[" === tmp) {
                parse(raw, function(err, msg2) {
                  if (err || !msg2) {
                    return mesh.say({
                      dam: "!",
                      err: "DAM JSON parse error."
                    }, peer);
                  }
                  console.STAT && console.STAT(+/* @__PURE__ */ new Date(), msg2.length, "# on hear batch");
                  var P2 = opt.puff;
                  (function go() {
                    var S3 = +/* @__PURE__ */ new Date();
                    var i = 0, m;
                    while (i < P2 && (m = msg2[i++])) {
                      mesh.hear(m, peer);
                    }
                    msg2 = msg2.slice(i);
                    console.STAT && console.STAT(S3, +/* @__PURE__ */ new Date() - S3, "hear loop");
                    flush(peer);
                    if (!msg2.length) {
                      return;
                    }
                    puff(go, 0);
                  })();
                });
                raw = "";
                return;
              }
              if ("{" === tmp || (raw["#"] || Object.plain(raw)) && (msg = raw)) {
                if (msg) {
                  return hear.one(msg, peer, S2);
                }
                parse(raw, function(err, msg2) {
                  if (err || !msg2) {
                    return mesh.say({
                      dam: "!",
                      err: "DAM JSON parse error."
                    }, peer);
                  }
                  hear.one(msg2, peer, S2);
                });
                return;
              }
            };
            hear.one = function(msg, peer, S2) {
              var id, hash, tmp, ash, DBG;
              if (msg.DBG) {
                msg.DBG = DBG = {
                  DBG: msg.DBG
                };
              }
              DBG && (DBG.h = S2);
              DBG && (DBG.hp = +/* @__PURE__ */ new Date());
              if (!(id = msg["#"])) {
                id = msg["#"] = String.random(9);
              }
              if (tmp = dup_check(id)) {
                return;
              }
              if (!(hash = msg["##"]) && false) ;
              if (hash && (tmp = msg["@"] || msg.get && id) && dup.check(ash = tmp + hash)) {
                return;
              }
              (msg._ = function() {
              }).via = mesh.leap = peer;
              if ((tmp = msg["><"]) && "string" == typeof tmp) {
                tmp.slice(0, 99).split(",").forEach(function(k2) {
                  this[k2] = 1;
                }, msg._.yo = {});
              }
              if (tmp = msg.dam) {
                if (tmp = mesh.hear[tmp]) {
                  tmp(msg, peer, root);
                }
                dup_track(id);
                return;
              }
              if (tmp = msg.ok) {
                msg._.near = tmp["/"];
              }
              var S2 = +/* @__PURE__ */ new Date();
              DBG && (DBG.is = S2);
              peer.SI = id;
              dup_track.ed = function(d) {
                if (id !== d) {
                  return;
                }
                dup_track.ed = 0;
                if (!(d = dup.s[id])) {
                  return;
                }
                d.via = peer;
                if (msg.get) {
                  d.it = msg;
                }
              };
              root.on("in", mesh.last = msg);
              DBG && (DBG.hd = +/* @__PURE__ */ new Date());
              console.STAT && console.STAT(S2, +/* @__PURE__ */ new Date() - S2, msg.get ? "msg get" : msg.put ? "msg put" : "msg");
              dup_track(id);
              if (ash) {
                dup_track(ash);
              }
              mesh.leap = mesh.last = null;
            };
            hear.c = hear.d = 0;
            (function() {
              var SMIA = 0;
              var loop;
              mesh.hash = function(msg, peer) {
                var h, s, t;
                var S2 = +/* @__PURE__ */ new Date();
                json(msg.put, function hash(err, text) {
                  var ss = (s || (s = t = text || "")).slice(0, 32768);
                  h = String.hash(ss, h);
                  s = s.slice(32768);
                  if (s) {
                    puff(hash, 0);
                    return;
                  }
                  console.STAT && console.STAT(S2, +/* @__PURE__ */ new Date() - S2, "say json+hash");
                  msg._.$put = t;
                  msg["##"] = h;
                  mesh.say(msg, peer);
                  delete msg._.$put;
                }, sort);
              };
              function sort(k2, v2) {
                var tmp;
                if (!(v2 instanceof Object)) {
                  return v2;
                }
                Object.keys(v2).sort().forEach(sorta, {
                  to: tmp = {},
                  on: v2
                });
                return tmp;
              }
              function sorta(k2) {
                this.to[k2] = this.on[k2];
              }
              mesh.say = function(msg, peer) {
                var tmp;
                if ((tmp = this) && (tmp = tmp.to) && tmp.next) {
                  tmp.next(msg);
                }
                if (!msg) {
                  return false;
                }
                var id, hash, raw, ack = msg["@"];
                var meta = msg._ || (msg._ = function() {
                });
                var DBG = msg.DBG, S2 = +/* @__PURE__ */ new Date();
                meta.y = meta.y || S2;
                if (!peer) {
                  DBG && (DBG.y = S2);
                }
                if (!(id = msg["#"])) {
                  id = msg["#"] = String.random(9);
                }
                !loop && dup_track(id);
                if (!(hash = msg["##"]) && u !== msg.put && !meta.via && ack) {
                  mesh.hash(msg, peer);
                  return;
                }
                if (!peer && ack) {
                  peer = (tmp = dup.s[ack]) && (tmp.via || (tmp = tmp.it) && (tmp = tmp._) && tmp.via) || (tmp = mesh.last) && ack === tmp["#"] && mesh.leap;
                }
                if (!peer && ack) {
                  if (dup.s[ack]) {
                    return;
                  }
                  console.STAT && console.STAT(+/* @__PURE__ */ new Date(), ++SMIA, "total no peer to ack to");
                  return false;
                }
                if (ack && !msg.put && !hash && ((dup.s[ack] || "").it || "")["##"]) {
                  return false;
                }
                if (!peer && mesh.way) {
                  return mesh.way(msg);
                }
                DBG && (DBG.yh = +/* @__PURE__ */ new Date());
                if (!(raw = meta.raw)) {
                  mesh.raw(msg, peer);
                  return;
                }
                DBG && (DBG.yr = +/* @__PURE__ */ new Date());
                if (!peer || !peer.id) {
                  if (!Object.plain(peer || opt.peers)) {
                    return false;
                  }
                  var S2 = +/* @__PURE__ */ new Date();
                  opt.puff;
                  var ps = opt.peers, pl = Object.keys(peer || opt.peers || {});
                  console.STAT && console.STAT(S2, +/* @__PURE__ */ new Date() - S2, "peer keys");
                  (function go() {
                    var S3 = +/* @__PURE__ */ new Date();
                    loop = 1;
                    var wr = meta.raw;
                    meta.raw = raw;
                    var i = 0, p;
                    while (i < 9 && (p = (pl || "")[i++])) {
                      if (!(p = ps[p] || (peer || "")[p])) {
                        continue;
                      }
                      mesh.say(msg, p);
                    }
                    meta.raw = wr;
                    loop = 0;
                    pl = pl.slice(i);
                    console.STAT && console.STAT(S3, +/* @__PURE__ */ new Date() - S3, "say loop");
                    if (!pl.length) {
                      return;
                    }
                    puff(go, 0);
                    ack && dup_track(ack);
                  })();
                  return;
                }
                if (!peer.wire && mesh.wire) {
                  mesh.wire(peer);
                }
                if (id === peer.last) {
                  return;
                }
                peer.last = id;
                if (peer === meta.via) {
                  return false;
                }
                if ((tmp = meta.yo) && (tmp[peer.url] || tmp[peer.pid] || tmp[peer.id])) {
                  return false;
                }
                console.STAT && console.STAT(S2, ((DBG || meta).yp = +/* @__PURE__ */ new Date()) - (meta.y || S2), "say prep");
                !loop && ack && dup_track(ack);
                if (peer.batch) {
                  peer.tail = (tmp = peer.tail || 0) + raw.length;
                  if (peer.tail <= opt.pack) {
                    peer.batch += (tmp ? "," : "") + raw;
                    return;
                  }
                  flush(peer);
                }
                peer.batch = "[";
                var ST = +/* @__PURE__ */ new Date();
                setTimeout(function() {
                  console.STAT && console.STAT(ST, +/* @__PURE__ */ new Date() - ST, "0ms TO");
                  flush(peer);
                }, opt.gap);
                send(raw, peer);
                console.STAT && ack === peer.SI && console.STAT(S2, +/* @__PURE__ */ new Date() - peer.SH, "say ack");
              };
              mesh.say.c = mesh.say.d = 0;
              mesh.raw = function(msg, peer) {
                if (!msg) {
                  return "";
                }
                var meta = msg._ || {}, put, tmp;
                if (tmp = meta.raw) {
                  return tmp;
                }
                if ("string" == typeof msg) {
                  return msg;
                }
                var hash = msg["##"], ack = msg["@"];
                if (hash && ack) {
                  if (!meta.via && dup_check(ack + hash)) {
                    return false;
                  }
                  if (tmp = (dup.s[ack] || "").it) {
                    if (hash === tmp["##"]) {
                      return false;
                    }
                    if (!tmp["##"]) {
                      tmp["##"] = hash;
                    }
                  }
                }
                if (!msg.dam && !msg["@"]) {
                  var i = 0, to = [];
                  tmp = opt.peers;
                  for (var k2 in tmp) {
                    var p = tmp[k2];
                    to.push(p.url || p.pid || p.id);
                    if (++i > 6) {
                      break;
                    }
                  }
                  if (i > 1) {
                    msg["><"] = to.join();
                  }
                }
                if (msg.put && (tmp = msg.ok)) {
                  msg.ok = {
                    "@": (tmp["@"] || 1) - 1,
                    "/": tmp["/"] == msg._.near ? mesh.near : tmp["/"]
                  };
                }
                if (put = meta.$put) {
                  tmp = {};
                  Object.keys(msg).forEach(function(k3) {
                    tmp[k3] = msg[k3];
                  });
                  tmp.put = ":])([:";
                  json(tmp, function(err, raw) {
                    if (err) {
                      return;
                    }
                    var S2 = +/* @__PURE__ */ new Date();
                    tmp = raw.indexOf('"put":":])([:"');
                    res(u, raw = raw.slice(0, tmp + 6) + put + raw.slice(tmp + 14));
                    console.STAT && console.STAT(S2, +/* @__PURE__ */ new Date() - S2, "say slice");
                  });
                  return;
                }
                json(msg, res);
                function res(err, raw) {
                  if (err) {
                    return;
                  }
                  meta.raw = raw;
                  mesh.say(msg, peer);
                }
              };
            })();
            function flush(peer) {
              var tmp = peer.batch, t = "string" == typeof tmp;
              if (t) {
                tmp += "]";
              }
              peer.batch = peer.tail = null;
              if (!tmp) {
                return;
              }
              if (t ? 3 > tmp.length : !tmp.length) {
                return;
              }
              if (!t) {
                try {
                  tmp = 1 === tmp.length ? tmp[0] : JSON.stringify(tmp);
                } catch (e) {
                  return opt.log("DAM JSON stringify error", e);
                }
              }
              if (!tmp) {
                return;
              }
              send(tmp, peer);
            }
            function send(raw, peer) {
              try {
                var wire = peer.wire;
                if (peer.say) {
                  peer.say(raw);
                } else if (wire.send) {
                  wire.send(raw);
                }
                mesh.say.d += raw.length || 0;
                ++mesh.say.c;
              } catch (e) {
                (peer.queue = peer.queue || []).push(raw);
              }
            }
            mesh.near = 0;
            mesh.hi = function(peer) {
              var wire = peer.wire, tmp;
              if (!wire) {
                mesh.wire(peer.length && {
                  url: peer,
                  id: peer
                } || peer);
                return;
              }
              if (peer.id) {
                opt.peers[peer.url || peer.id] = peer;
              } else {
                tmp = peer.id = peer.id || peer.url || String.random(9);
                mesh.say({
                  dam: "?",
                  pid: root.opt.pid
                }, opt.peers[tmp] = peer);
                delete dup.s[peer.last];
              }
              if (!peer.met) {
                mesh.near++;
                peer.met = +/* @__PURE__ */ new Date();
                root.on("hi", peer);
              }
              tmp = peer.queue;
              peer.queue = [];
              setTimeout.each(tmp || [], function(msg) {
                send(msg, peer);
              }, 0, 9);
            };
            mesh.bye = function(peer) {
              peer.met && --mesh.near;
              delete peer.met;
              root.on("bye", peer);
              var tmp = +/* @__PURE__ */ new Date();
              tmp = tmp - (peer.met || tmp);
              mesh.bye.time = ((mesh.bye.time || tmp) + tmp) / 2;
            };
            mesh.hear["!"] = function(msg, peer) {
              opt.log("Error:", msg.err);
            };
            mesh.hear["?"] = function(msg, peer) {
              if (msg.pid) {
                if (!peer.pid) {
                  peer.pid = msg.pid;
                }
                if (msg["@"]) {
                  return;
                }
              }
              mesh.say({
                dam: "?",
                pid: opt.pid,
                "@": msg["#"]
              }, peer);
              delete dup.s[peer.last];
            };
            mesh.hear["mob"] = function(msg, peer) {
              if (!msg.peers) {
                return;
              }
              var peers2 = Object.keys(msg.peers), one = peers2[Math.random() * peers2.length >> 0];
              if (!one) {
                return;
              }
              mesh.bye(peer);
              mesh.hi(one);
            };
            root.on("create", function(root2) {
              root2.opt.pid = root2.opt.pid || String.random(9);
              this.to.next(root2);
              root2.on("out", mesh.say);
            });
            root.on("bye", function(peer, tmp) {
              peer = opt.peers[peer.id || peer] || peer;
              this.to.next(peer);
              peer.bye ? peer.bye() : (tmp = peer.wire) && tmp.close && tmp.close();
              delete opt.peers[peer.id];
              peer.wire = null;
            });
            root.on("bye", function(peer, tmp) {
              this.to.next(peer);
              if (tmp = console.STAT) {
                tmp.peers = mesh.near;
              }
              if (!(tmp = peer.url)) {
                return;
              }
              setTimeout(function() {
              }, opt.lack || 9e3);
            });
            root.on("hi", function(peer, tmp) {
              this.to.next(peer);
              if (tmp = console.STAT) {
                tmp.peers = mesh.near;
              }
              if (opt.super) {
                return;
              }
              var souls = Object.keys(root.next || "");
              if (souls.length > 9999 && !console.SUBS) {
                console.log(console.SUBS = "Warning: You have more than 10K live GETs, which might use more bandwidth than your screen can show - consider `.off()`.");
              }
              setTimeout.each(souls, function(soul) {
                var node = root.next[soul];
                if (opt.super || (node.ask || "")[""]) {
                  mesh.say({
                    get: {
                      "#": soul
                    }
                  }, peer);
                  return;
                }
                setTimeout.each(Object.keys(node.ask || ""), function(key) {
                  if (!key) {
                    return;
                  }
                  mesh.say({
                    "##": String.hash((root.graph[soul] || "")[key]),
                    get: {
                      "#": soul,
                      ".": key
                    }
                  }, peer);
                });
              });
            });
            return mesh;
          }
          var u;
          try {
            module2.exports = Mesh;
          } catch (e) {
          }
        })(USE, "./mesh");
        USE(function(module2) {
          var Gun2 = USE("./index");
          Gun2.Mesh = USE("./mesh");
          Gun2.on("opt", function(root) {
            this.to.next(root);
            if (root.once) {
              return;
            }
            var opt = root.opt;
            if (false === opt.WebSocket) {
              return;
            }
            var env = Gun2.window || {};
            var websocket = opt.WebSocket || env.WebSocket || env.webkitWebSocket || env.mozWebSocket;
            if (!websocket) {
              return;
            }
            opt.WebSocket = websocket;
            var mesh = opt.mesh = opt.mesh || Gun2.Mesh(root);
            mesh.wire || opt.wire;
            mesh.wire = opt.wire = open;
            function open(peer) {
              try {
                if (!peer || !peer.url) {
                  return wire && wire(peer);
                }
                var url = peer.url.replace(/^http/, "ws");
                var wire = peer.wire = new opt.WebSocket(url);
                wire.onclose = function() {
                  reconnect(peer);
                  opt.mesh.bye(peer);
                };
                wire.onerror = function(err) {
                  reconnect(peer);
                };
                wire.onopen = function() {
                  opt.mesh.hi(peer);
                };
                wire.onmessage = function(msg) {
                  if (!msg) {
                    return;
                  }
                  opt.mesh.hear(msg.data || msg, peer);
                };
                return wire;
              } catch (e) {
                opt.mesh.bye(peer);
              }
            }
            setTimeout(function() {
              !opt.super && root.on("out", {
                dam: "hi"
              });
            }, 1);
            var wait = 2 * 999;
            function reconnect(peer) {
              clearTimeout(peer.defer);
              if (!opt.peers[peer.url]) {
                return;
              }
              if (doc && peer.retry <= 0) {
                return;
              }
              peer.retry = (peer.retry || opt.retry + 1 || 60) - (-peer.tried + (peer.tried = +/* @__PURE__ */ new Date()) < wait * 4 ? 1 : 0);
              peer.defer = setTimeout(function to() {
                if (doc && doc.hidden) {
                  return setTimeout(to, wait);
                }
                open(peer);
              }, wait);
            }
            var doc = "" + u !== typeof document && document;
          });
          var u;
        })(USE, "./websocket");
        USE(function(module2) {
          if (typeof Gun === "undefined") {
            return;
          }
          var noop = function() {
          }, store;
          try {
            store = (Gun.window || noop).localStorage;
          } catch (e) {
          }
          if (!store) {
            Gun.log("Warning: No localStorage exists to persist data to!");
            store = {
              setItem: function(k2, v2) {
                this[k2] = v2;
              },
              removeItem: function(k2) {
                delete this[k2];
              },
              getItem: function(k2) {
                return this[k2];
              }
            };
          }
          var json = JSON.stringifyAsync || function(v2, cb, r, s) {
            var u;
            try {
              cb(u, JSON.stringify(v2, r, s));
            } catch (e) {
              cb(e);
            }
          };
          Gun.on("create", function lg(root) {
            this.to.next(root);
            var opt = root.opt;
            root.graph;
            var acks = [], disk, to, size, stop;
            if (false === opt.localStorage) {
              return;
            }
            opt.prefix = opt.file || "gun/";
            try {
              disk = lg[opt.prefix] = lg[opt.prefix] || JSON.parse(size = store.getItem(opt.prefix)) || {};
            } catch (e) {
              disk = lg[opt.prefix] = {};
            }
            size = (size || "").length;
            root.on("get", function(msg) {
              this.to.next(msg);
              var lex = msg.get, soul, data, tmp, u;
              if (!lex || !(soul = lex["#"])) {
                return;
              }
              data = disk[soul] || u;
              if (data && (tmp = lex["."]) && !Object.plain(tmp)) {
                data = Gun.state.ify({}, tmp, Gun.state.is(data, tmp), data[tmp], soul);
              }
              Gun.on.get.ack(msg, data);
            });
            root.on("put", function(msg) {
              this.to.next(msg);
              var put = msg.put, soul = put["#"], key = put["."], id = msg["#"], ok = msg.ok || "";
              if (!(root.next || "")[soul]) {
                return;
              }
              disk[soul] = Gun.state.ify(disk[soul], key, put[">"], put[":"], soul);
              if (stop && size > 4999880) {
                root.on("in", {
                  "@": id,
                  err: "localStorage max!"
                });
                return;
              }
              if (!msg["@"] && (!msg._.via || Math.random() < ok["@"] / ok["/"])) {
                acks.push(id);
              }
              if (to) {
                return;
              }
              to = setTimeout(flush, 9 + size / 333);
            });
            function flush() {
              if (!acks.length && ((setTimeout.turn || "").s || "").length) {
                setTimeout(flush, 99);
                return;
              }
              var ack = acks;
              clearTimeout(to);
              to = false;
              acks = [];
              json(disk, function(err, tmp) {
                try {
                  !err && store.setItem(opt.prefix, tmp);
                } catch (e) {
                  err = stop = e || "localStorage failure";
                }
                if (err) {
                  Gun.log(err + " Consider using GUN's IndexedDB plugin for RAD for more storage space, https://gun.eco/docs/RAD#install");
                  root.on("localStorage:error", {
                    err,
                    get: opt.prefix,
                    put: disk
                  });
                }
                size = tmp.length;
                setTimeout.each(ack, function(id) {
                  root.on("in", {
                    "@": id,
                    err,
                    ok: 0
                  });
                }, 0, 99);
              });
            }
          });
        })(USE, "./localStorage");
      })();
      (function() {
        var u;
        if ("" + u == typeof Gun) {
          return;
        }
        var DEP = function(n) {
          console.warn("Warning! Deprecated internal utility will break in next version:", n);
        };
        var Type = Gun;
        Type.fn = Type.fn || {
          is: function(fn2) {
            DEP("fn");
            return !!fn2 && "function" == typeof fn2;
          }
        };
        Type.bi = Type.bi || {
          is: function(b) {
            DEP("bi");
            return b instanceof Boolean || typeof b == "boolean";
          }
        };
        Type.num = Type.num || {
          is: function(n) {
            DEP("num");
            return !list_is(n) && (n - parseFloat(n) + 1 >= 0 || Infinity === n || -Infinity === n);
          }
        };
        Type.text = Type.text || {
          is: function(t) {
            DEP("text");
            return typeof t == "string";
          }
        };
        Type.text.ify = Type.text.ify || function(t) {
          DEP("text.ify");
          if (Type.text.is(t)) {
            return t;
          }
          if (typeof JSON !== "undefined") {
            return JSON.stringify(t);
          }
          return t && t.toString ? t.toString() : t;
        };
        Type.text.random = Type.text.random || function(l, c) {
          DEP("text.random");
          var s = "";
          l = l || 24;
          c = c || "0123456789ABCDEFGHIJKLMNOPQRSTUVWXZabcdefghijklmnopqrstuvwxyz";
          while (l > 0) {
            s += c.charAt(Math.floor(Math.random() * c.length));
            l--;
          }
          return s;
        };
        Type.text.match = Type.text.match || function(t, o) {
          var tmp, u2;
          DEP("text.match");
          if ("string" !== typeof t) {
            return false;
          }
          if ("string" == typeof o) {
            o = {
              "=": o
            };
          }
          o = o || {};
          tmp = o["="] || o["*"] || o[">"] || o["<"];
          if (t === tmp) {
            return true;
          }
          if (u2 !== o["="]) {
            return false;
          }
          tmp = o["*"] || o[">"] || o["<"];
          if (t.slice(0, (tmp || "").length) === tmp) {
            return true;
          }
          if (u2 !== o["*"]) {
            return false;
          }
          if (u2 !== o[">"] && u2 !== o["<"]) {
            return t >= o[">"] && t <= o["<"] ? true : false;
          }
          if (u2 !== o[">"] && t >= o[">"]) {
            return true;
          }
          if (u2 !== o["<"] && t <= o["<"]) {
            return true;
          }
          return false;
        };
        Type.text.hash = Type.text.hash || function(s, c) {
          DEP("text.hash");
          if (typeof s !== "string") {
            return;
          }
          c = c || 0;
          if (!s.length) {
            return c;
          }
          for (var i = 0, l = s.length, n; i < l; ++i) {
            n = s.charCodeAt(i);
            c = (c << 5) - c + n;
            c |= 0;
          }
          return c;
        };
        Type.list = Type.list || {
          is: function(l) {
            DEP("list");
            return l instanceof Array;
          }
        };
        Type.list.slit = Type.list.slit || Array.prototype.slice;
        Type.list.sort = Type.list.sort || function(k2) {
          DEP("list.sort");
          return function(A2, B2) {
            if (!A2 || !B2) {
              return 0;
            }
            A2 = A2[k2];
            B2 = B2[k2];
            if (A2 < B2) {
              return -1;
            } else if (A2 > B2) {
              return 1;
            } else {
              return 0;
            }
          };
        };
        Type.list.map = Type.list.map || function(l, c, _) {
          DEP("list.map");
          return obj_map(l, c, _);
        };
        Type.list.index = 1;
        Type.obj = Type.boj || {
          is: function(o) {
            DEP("obj");
            return o ? o instanceof Object && o.constructor === Object || Object.prototype.toString.call(o).match(/^\[object (\w+)\]$/)[1] === "Object" : false;
          }
        };
        Type.obj.put = Type.obj.put || function(o, k2, v2) {
          DEP("obj.put");
          return (o || {})[k2] = v2, o;
        };
        Type.obj.has = Type.obj.has || function(o, k2) {
          DEP("obj.has");
          return o && Object.prototype.hasOwnProperty.call(o, k2);
        };
        Type.obj.del = Type.obj.del || function(o, k2) {
          DEP("obj.del");
          if (!o) {
            return;
          }
          o[k2] = null;
          delete o[k2];
          return o;
        };
        Type.obj.as = Type.obj.as || function(o, k2, v2, u2) {
          DEP("obj.as");
          return o[k2] = o[k2] || (u2 === v2 ? {} : v2);
        };
        Type.obj.ify = Type.obj.ify || function(o) {
          DEP("obj.ify");
          if (obj_is(o)) {
            return o;
          }
          try {
            o = JSON.parse(o);
          } catch (e) {
            o = {};
          }
          return o;
        };
        (function() {
          var u2;
          function map(v2, k2) {
            if (obj_has(this, k2) && u2 !== this[k2]) {
              return;
            }
            this[k2] = v2;
          }
          Type.obj.to = Type.obj.to || function(from, to) {
            DEP("obj.to");
            to = to || {};
            obj_map(from, map, to);
            return to;
          };
        })();
        Type.obj.copy = Type.obj.copy || function(o) {
          DEP("obj.copy");
          return !o ? o : JSON.parse(JSON.stringify(o));
        };
        (function() {
          function empty(v2, i) {
            var n = this.n, u2;
            if (n && (i === n || obj_is(n) && obj_has(n, i))) {
              return;
            }
            if (u2 !== i) {
              return true;
            }
          }
          Type.obj.empty = Type.obj.empty || function(o, n) {
            DEP("obj.empty");
            if (!o) {
              return true;
            }
            return obj_map(o, empty, {
              n
            }) ? false : true;
          };
        })();
        (function() {
          function t(k2, v2) {
            if (2 === arguments.length) {
              t.r = t.r || {};
              t.r[k2] = v2;
              return;
            }
            t.r = t.r || [];
            t.r.push(k2);
          }
          var keys = Object.keys, map;
          Object.keys = Object.keys || function(o) {
            return map(o, function(v2, k2, t2) {
              t2(k2);
            });
          };
          Type.obj.map = map = Type.obj.map || function(l, c, _) {
            DEP("obj.map");
            var u2, i = 0, x2, r, ll, lle, f = "function" == typeof c;
            t.r = u2;
            if (keys && obj_is(l)) {
              ll = keys(l);
              lle = true;
            }
            _ = _ || {};
            if (list_is(l) || ll) {
              x2 = (ll || l).length;
              for (; i < x2; i++) {
                var ii = i + Type.list.index;
                if (f) {
                  r = lle ? c.call(_, l[ll[i]], ll[i], t) : c.call(_, l[i], ii, t);
                  if (r !== u2) {
                    return r;
                  }
                } else {
                  if (c === l[lle ? ll[i] : i]) {
                    return ll ? ll[i] : ii;
                  }
                }
              }
            } else {
              for (i in l) {
                if (f) {
                  if (obj_has(l, i)) {
                    r = _ ? c.call(_, l[i], i, t) : c(l[i], i, t);
                    if (r !== u2) {
                      return r;
                    }
                  }
                } else {
                  if (c === l[i]) {
                    return i;
                  }
                }
              }
            }
            return f ? t.r : Type.list.index ? 0 : -1;
          };
        })();
        Type.time = Type.time || {};
        Type.time.is = Type.time.is || function(t) {
          DEP("time");
          return t ? t instanceof Date : +(/* @__PURE__ */ new Date()).getTime();
        };
        var fn_is = Type.fn.is;
        var list_is = Type.list.is;
        var obj = Type.obj, obj_is = obj.is, obj_has = obj.has, obj_map = obj.map;
        var Val = {};
        Val.is = function(v2) {
          DEP("val.is");
          if (v2 === u) {
            return false;
          }
          if (v2 === null) {
            return true;
          }
          if (v2 === Infinity) {
            return false;
          }
          if (text_is(v2) || bi_is(v2) || num_is(v2)) {
            return true;
          }
          return Val.link.is(v2) || false;
        };
        Val.link = Val.rel = {
          _: "#"
        };
        (function() {
          Val.link.is = function(v2) {
            DEP("val.link.is");
            if (v2 && v2[rel_] && !v2._ && obj_is(v2)) {
              var o = {};
              obj_map(v2, map, o);
              if (o.id) {
                return o.id;
              }
            }
            return false;
          };
          function map(s, k2) {
            var o = this;
            if (o.id) {
              return o.id = false;
            }
            if (k2 == rel_ && text_is(s)) {
              o.id = s;
            } else {
              return o.id = false;
            }
          }
        })();
        Val.link.ify = function(t) {
          DEP("val.link.ify");
          return obj_put({}, rel_, t);
        };
        Type.obj.has._ = ".";
        var rel_ = Val.link._, u;
        var bi_is = Type.bi.is;
        var num_is = Type.num.is;
        var text_is = Type.text.is;
        var obj = Type.obj, obj_is = obj.is, obj_put = obj.put, obj_map = obj.map;
        Type.val = Type.val || Val;
        var Node = {
          _: "_"
        };
        Node.soul = function(n, o) {
          DEP("node.soul");
          return n && n._ && n._[o || soul_];
        };
        Node.soul.ify = function(n, o) {
          DEP("node.soul.ify");
          o = typeof o === "string" ? {
            soul: o
          } : o || {};
          n = n || {};
          n._ = n._ || {};
          n._[soul_] = o.soul || n._[soul_] || text_random();
          return n;
        };
        Node.soul._ = Val.link._;
        (function() {
          Node.is = function(n, cb, as) {
            DEP("node.is");
            var s;
            if (!obj_is(n)) {
              return false;
            }
            if (s = Node.soul(n)) {
              return !obj_map(n, map, {
                as,
                cb,
                s,
                n
              });
            }
            return false;
          };
          function map(v2, k2) {
            if (k2 === Node._) {
              return;
            }
            if (!Val.is(v2)) {
              return true;
            }
            if (this.cb) {
              this.cb.call(this.as, v2, k2, this.n, this.s);
            }
          }
        })();
        (function() {
          Node.ify = function(obj2, o, as) {
            DEP("node.ify");
            if (!o) {
              o = {};
            } else if (typeof o === "string") {
              o = {
                soul: o
              };
            } else if ("function" == typeof o) {
              o = {
                map: o
              };
            }
            if (o.map) {
              o.node = o.map.call(as, obj2, u, o.node || {});
            }
            if (o.node = Node.soul.ify(o.node || {}, o)) {
              obj_map(obj2, map, {
                o,
                as
              });
            }
            return o.node;
          };
          function map(v2, k2) {
            var o = this.o, tmp, u2;
            if (o.map) {
              tmp = o.map.call(this.as, v2, "" + k2, o.node);
              if (u2 === tmp) {
                obj_del(o.node, k2);
              } else if (o.node) {
                o.node[k2] = tmp;
              }
              return;
            }
            if (Val.is(v2)) {
              o.node[k2] = v2;
            }
          }
        })();
        var obj = Type.obj, obj_is = obj.is, obj_del = obj.del, obj_map = obj.map;
        var text = Type.text, text_random = text.random;
        var soul_ = Node.soul._;
        var u;
        Type.node = Type.node || Node;
        var State = Type.state;
        State.lex = function() {
          DEP("state.lex");
          return State().toString(36).replace(".", "");
        };
        State.to = function(from, k2, to) {
          DEP("state.to");
          var val = (from || {})[k2];
          if (obj_is(val)) {
            val = obj_copy(val);
          }
          return State.ify(to, k2, State.is(from, k2), val, Node.soul(from));
        };
        (function() {
          State.map = function(cb, s, as) {
            DEP("state.map");
            var u2;
            var o = obj_is(o = cb || s) ? o : null;
            cb = fn_is(cb = cb || s) ? cb : null;
            if (o && !cb) {
              s = num_is(s) ? s : State();
              o[N_] = o[N_] || {};
              obj_map(o, map, {
                o,
                s
              });
              return o;
            }
            as = as || obj_is(s) ? s : u2;
            s = num_is(s) ? s : State();
            return function(v2, k2, o2, opt) {
              if (!cb) {
                map.call({
                  o: o2,
                  s
                }, v2, k2);
                return v2;
              }
              cb.call(as || this || {}, v2, k2, o2, opt);
              if (obj_has(o2, k2) && u2 === o2[k2]) {
                return;
              }
              map.call({
                o: o2,
                s
              }, v2, k2);
            };
          };
          function map(v2, k2) {
            if (N_ === k2) {
              return;
            }
            State.ify(this.o, k2, this.s);
          }
        })();
        var obj = Type.obj;
        obj.as;
        var obj_has = obj.has, obj_is = obj.is, obj_map = obj.map, obj_copy = obj.copy;
        var num = Type.num, num_is = num.is;
        var fn = Type.fn, fn_is = fn.is;
        var N_ = Node._, u;
        var Graph = {};
        (function() {
          Graph.is = function(g, cb, fn2, as) {
            DEP("graph.is");
            if (!g || !obj_is(g) || obj_empty(g)) {
              return false;
            }
            return !obj_map(g, map, {
              cb,
              fn: fn2,
              as
            });
          };
          function map(n, s) {
            if (!n || s !== Node.soul(n) || !Node.is(n, this.fn, this.as)) {
              return true;
            }
            if (!this.cb) {
              return;
            }
            nf.n = n;
            nf.as = this.as;
            this.cb.call(nf.as, n, s, nf);
          }
          function nf(fn2) {
            if (fn2) {
              Node.is(nf.n, fn2, nf.as);
            }
          }
        })();
        (function() {
          Graph.ify = function(obj2, env, as) {
            DEP("graph.ify");
            var at2 = {
              path: [],
              obj: obj2
            };
            if (!env) {
              env = {};
            } else if (typeof env === "string") {
              env = {
                soul: env
              };
            } else if ("function" == typeof env) {
              env.map = env;
            }
            if (typeof as === "string") {
              env.soul = env.soul || as;
              as = u;
            }
            if (env.soul) {
              at2.link = Val.link.ify(env.soul);
            }
            env.shell = (as || {}).shell;
            env.graph = env.graph || {};
            env.seen = env.seen || [];
            env.as = env.as || as;
            node(env, at2);
            env.root = at2.node;
            return env.graph;
          };
          function node(env, at2) {
            var tmp;
            if (tmp = seen(env, at2)) {
              return tmp;
            }
            at2.env = env;
            at2.soul = soul;
            if (Node.ify(at2.obj, map, at2)) {
              at2.link = at2.link || Val.link.ify(Node.soul(at2.node));
              if (at2.obj !== env.shell) {
                env.graph[Val.link.is(at2.link)] = at2.node;
              }
            }
            return at2;
          }
          function map(v2, k2, n) {
            var at2 = this, env = at2.env, is, tmp;
            if (Node._ === k2 && obj_has(v2, Val.link._)) {
              return n._;
            }
            if (!(is = valid(v2, k2, n, at2, env))) {
              return;
            }
            if (!k2) {
              at2.node = at2.node || n || {};
              if (obj_has(v2, Node._) && Node.soul(v2)) {
                at2.node._ = obj_copy(v2._);
              }
              at2.node = Node.soul.ify(at2.node, Val.link.is(at2.link));
              at2.link = at2.link || Val.link.ify(Node.soul(at2.node));
            }
            if (tmp = env.map) {
              tmp.call(env.as || {}, v2, k2, n, at2);
              if (obj_has(n, k2)) {
                v2 = n[k2];
                if (u === v2) {
                  obj_del(n, k2);
                  return;
                }
                if (!(is = valid(v2, k2, n, at2, env))) {
                  return;
                }
              }
            }
            if (!k2) {
              return at2.node;
            }
            if (true === is) {
              return v2;
            }
            tmp = node(env, {
              obj: v2,
              path: at2.path.concat(k2)
            });
            if (!tmp.node) {
              return;
            }
            return tmp.link;
          }
          function soul(id) {
            var at2 = this;
            var prev = Val.link.is(at2.link), graph = at2.env.graph;
            at2.link = at2.link || Val.link.ify(id);
            at2.link[Val.link._] = id;
            if (at2.node && at2.node[Node._]) {
              at2.node[Node._][Val.link._] = id;
            }
            if (obj_has(graph, prev)) {
              graph[id] = graph[prev];
              obj_del(graph, prev);
            }
          }
          function valid(v2, k2, n, at2, env) {
            var tmp;
            if (Val.is(v2)) {
              return true;
            }
            if (obj_is(v2)) {
              return 1;
            }
            if (tmp = env.invalid) {
              v2 = tmp.call(env.as || {}, v2, k2, n);
              return valid(v2, k2, n, at2, env);
            }
            env.err = "Invalid value at '" + at2.path.concat(k2).join(".") + "'!";
            if (Type.list.is(v2)) {
              env.err += " Use `.set(item)` instead of an Array.";
            }
          }
          function seen(env, at2) {
            var arr = env.seen, i = arr.length, has;
            while (i--) {
              has = arr[i];
              if (at2.obj === has.obj) {
                return has;
              }
            }
            arr.push(at2);
          }
        })();
        Graph.node = function(node) {
          DEP("graph.node");
          var soul = Node.soul(node);
          if (!soul) {
            return;
          }
          return obj_put({}, soul, node);
        };
        (function() {
          Graph.to = function(graph, root, opt) {
            DEP("graph.to");
            if (!graph) {
              return;
            }
            var obj2 = {};
            opt = opt || {
              seen: {}
            };
            obj_map(graph[root], map, {
              obj: obj2,
              graph,
              opt
            });
            return obj2;
          };
          function map(v2, k2) {
            var tmp, obj2;
            if (Node._ === k2) {
              if (obj_empty(v2, Val.link._)) {
                return;
              }
              this.obj[k2] = obj_copy(v2);
              return;
            }
            if (!(tmp = Val.link.is(v2))) {
              this.obj[k2] = v2;
              return;
            }
            if (obj2 = this.opt.seen[tmp]) {
              this.obj[k2] = obj2;
              return;
            }
            this.obj[k2] = this.opt.seen[tmp] = Graph.to(this.graph, tmp, this.opt);
          }
        })();
        var fn_is = Type.fn.is;
        var obj = Type.obj, obj_is = obj.is, obj_del = obj.del, obj_has = obj.has, obj_empty = obj.empty, obj_put = obj.put, obj_map = obj.map, obj_copy = obj.copy;
        var u;
        Type.graph = Type.graph || Graph;
      })();
    })(gun$1);
    return gun$1.exports;
  }
  var browser;
  var hasRequiredBrowser;
  function requireBrowser() {
    if (hasRequiredBrowser) return browser;
    hasRequiredBrowser = 1;
    browser = requireGun();
    return browser;
  }
  var browserExports = requireBrowser();
  const Gun$1 = getDefaultExportFromCjs(browserExports);
  var sea = {
    exports: {}
  };
  sea.exports;
  var hasRequiredSea;
  function requireSea() {
    if (hasRequiredSea) return sea.exports;
    hasRequiredSea = 1;
    (function(module) {
      (function() {
        function USE(arg, req) {
          return req ? commonjsRequire(arg) : arg.slice ? USE[R2(arg)] : function(mod, path2) {
            arg(mod = {
              exports: {}
            });
            USE[R2(path2)] = mod.exports;
          };
          function R2(p) {
            return p.split("/").slice(-1).toString().replace(".js", "");
          }
        }
        {
          var MODULE = module;
        }
        USE(function(module2) {
          if (typeof self !== "undefined") {
            module2.window = self;
          }
          if (typeof window !== "undefined") {
            module2.window = window;
          }
          var tmp = module2.window || module2, u;
          var SEA = tmp.SEA || {};
          if (SEA.window = module2.window) {
            SEA.window.SEA = SEA;
          }
          try {
            if (u + "" !== typeof MODULE) {
              MODULE.exports = SEA;
            }
          } catch (e) {
          }
          module2.exports = SEA;
        })(USE, "./root");
        USE(function(module2) {
          var SEA = USE("./root");
          try {
            if (SEA.window) {
              if (location.protocol.indexOf("s") < 0 && location.host.indexOf("localhost") < 0 && !/^127\.\d+\.\d+\.\d+$/.test(location.hostname) && location.protocol.indexOf("file:") < 0) {
                console.warn("HTTPS needed for WebCrypto in SEA, redirecting...");
                location.protocol = "https:";
              }
            }
          } catch (e) {
          }
        })(USE, "./https");
        USE(function(module2) {
          var u;
          if (u + "" == typeof btoa) {
            if (u + "" == typeof Buffer) {
              try {
                commonjsGlobal.Buffer = USE("buffer", 1).Buffer;
              } catch (e) {
                console.log("Please `npm install buffer` or add it to your package.json !");
              }
            }
            commonjsGlobal.btoa = function(data) {
              return Buffer.from(data, "binary").toString("base64");
            };
            commonjsGlobal.atob = function(data) {
              return Buffer.from(data, "base64").toString("binary");
            };
          }
        })(USE, "./base64");
        USE(function(module2) {
          USE("./base64");
          function SeaArray() {
          }
          Object.assign(SeaArray, {
            from: Array.from
          });
          SeaArray.prototype = Object.create(Array.prototype);
          SeaArray.prototype.toString = function(enc, start, end) {
            enc = enc || "utf8";
            start = start || 0;
            const length = this.length;
            if (enc === "hex") {
              const buf = new Uint8Array(this);
              return [
                ...Array((end && end + 1 || length) - start).keys()
              ].map((i) => buf[i + start].toString(16).padStart(2, "0")).join("");
            }
            if (enc === "utf8") {
              return Array.from({
                length: (end || length) - start
              }, (_, i) => String.fromCharCode(this[i + start])).join("");
            }
            if (enc === "base64") {
              return btoa(this);
            }
          };
          module2.exports = SeaArray;
        })(USE, "./array");
        USE(function(module2) {
          USE("./base64");
          var SeaArray = USE("./array");
          function SafeBuffer(...props) {
            console.warn("new SafeBuffer() is depreciated, please use SafeBuffer.from()");
            return SafeBuffer.from(...props);
          }
          SafeBuffer.prototype = Object.create(Array.prototype);
          Object.assign(SafeBuffer, {
            from() {
              if (!Object.keys(arguments).length || arguments[0] == null) {
                throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
              }
              const input = arguments[0];
              let buf;
              if (typeof input === "string") {
                const enc = arguments[1] || "utf8";
                if (enc === "hex") {
                  const bytes = input.match(/([\da-fA-F]{2})/g).map((byte) => parseInt(byte, 16));
                  if (!bytes || !bytes.length) {
                    throw new TypeError("Invalid first argument for type 'hex'.");
                  }
                  buf = SeaArray.from(bytes);
                } else if (enc === "utf8" || "binary" === enc) {
                  const length2 = input.length;
                  const words = new Uint16Array(length2);
                  Array.from({
                    length: length2
                  }, (_, i) => words[i] = input.charCodeAt(i));
                  buf = SeaArray.from(words);
                } else if (enc === "base64") {
                  const dec = atob(input);
                  const length2 = dec.length;
                  const bytes = new Uint8Array(length2);
                  Array.from({
                    length: length2
                  }, (_, i) => bytes[i] = dec.charCodeAt(i));
                  buf = SeaArray.from(bytes);
                } else if (enc === "binary") {
                  buf = SeaArray.from(input);
                } else {
                  console.info("SafeBuffer.from unknown encoding: " + enc);
                }
                return buf;
              }
              input.byteLength;
              const length = input.byteLength ? input.byteLength : input.length;
              if (length) {
                let buf2;
                if (input instanceof ArrayBuffer) {
                  buf2 = new Uint8Array(input);
                }
                return SeaArray.from(buf2 || input);
              }
            },
            alloc(length, fill = 0) {
              return SeaArray.from(new Uint8Array(Array.from({
                length
              }, () => fill)));
            },
            allocUnsafe(length) {
              return SeaArray.from(new Uint8Array(Array.from({
                length
              })));
            },
            concat(arr) {
              if (!Array.isArray(arr)) {
                throw new TypeError("First argument must be Array containing ArrayBuffer or Uint8Array instances.");
              }
              return SeaArray.from(arr.reduce((ret, item) => ret.concat(Array.from(item)), []));
            }
          });
          SafeBuffer.prototype.from = SafeBuffer.from;
          SafeBuffer.prototype.toString = SeaArray.prototype.toString;
          module2.exports = SafeBuffer;
        })(USE, "./buffer");
        USE(function(module2) {
          const SEA = USE("./root");
          const api = {
            Buffer: USE("./buffer")
          };
          var o = {}, u;
          JSON.parseAsync = JSON.parseAsync || function(t, cb, r) {
            var u2;
            try {
              cb(u2, JSON.parse(t, r));
            } catch (e) {
              cb(e);
            }
          };
          JSON.stringifyAsync = JSON.stringifyAsync || function(v2, cb, r, s) {
            var u2;
            try {
              cb(u2, JSON.stringify(v2, r, s));
            } catch (e) {
              cb(e);
            }
          };
          api.parse = function(t, r) {
            return new Promise(function(res, rej) {
              JSON.parseAsync(t, function(err, raw) {
                err ? rej(err) : res(raw);
              }, r);
            });
          };
          api.stringify = function(v2, r, s) {
            return new Promise(function(res, rej) {
              JSON.stringifyAsync(v2, function(err, raw) {
                err ? rej(err) : res(raw);
              }, r, s);
            });
          };
          if (SEA.window) {
            api.crypto = SEA.window.crypto || SEA.window.msCrypto;
            api.subtle = (api.crypto || o).subtle || (api.crypto || o).webkitSubtle;
            api.TextEncoder = SEA.window.TextEncoder;
            api.TextDecoder = SEA.window.TextDecoder;
            api.random = (len) => api.Buffer.from(api.crypto.getRandomValues(new Uint8Array(api.Buffer.alloc(len))));
          }
          if (!api.TextDecoder) {
            const { TextEncoder, TextDecoder } = USE((u + "" == typeof MODULE ? "." : "") + "./lib/text-encoding", 1);
            api.TextDecoder = TextDecoder;
            api.TextEncoder = TextEncoder;
          }
          if (!api.crypto) {
            try {
              var crypto = USE("crypto", 1);
              Object.assign(api, {
                crypto,
                random: (len) => api.Buffer.from(crypto.randomBytes(len))
              });
              const { Crypto: WebCrypto } = USE("@peculiar/webcrypto", 1);
              api.ossl = api.subtle = new WebCrypto({
                directory: "ossl"
              }).subtle;
            } catch (e) {
              console.log("Please `npm install @peculiar/webcrypto` or add it to your package.json !");
            }
          }
          module2.exports = api;
        })(USE, "./shim");
        USE(function(module2) {
          var SEA = USE("./root");
          var shim = USE("./shim");
          var s = {};
          s.pbkdf2 = {
            hash: {
              name: "SHA-256"
            },
            iter: 1e5,
            ks: 64
          };
          s.ecdsa = {
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
          };
          s.ecdh = {
            name: "ECDH",
            namedCurve: "P-256"
          };
          s.jwk = function(pub, d) {
            pub = pub.split(".");
            var x2 = pub[0], y = pub[1];
            var jwk = {
              kty: "EC",
              crv: "P-256",
              x: x2,
              y,
              ext: true
            };
            jwk.key_ops = d ? [
              "sign"
            ] : [
              "verify"
            ];
            if (d) {
              jwk.d = d;
            }
            return jwk;
          };
          s.keyToJwk = function(keyBytes) {
            const keyB64 = keyBytes.toString("base64");
            const k2 = keyB64.replace(/\+/g, "-").replace(/\//g, "_").replace(/\=/g, "");
            return {
              kty: "oct",
              k: k2,
              ext: false,
              alg: "A256GCM"
            };
          };
          s.recall = {
            validity: 12 * 60 * 60,
            hook: function(props) {
              return props;
            }
          };
          s.check = function(t) {
            return typeof t == "string" && "SEA{" === t.slice(0, 4);
          };
          s.parse = async function p(t) {
            try {
              var yes = typeof t == "string";
              if (yes && "SEA{" === t.slice(0, 4)) {
                t = t.slice(3);
              }
              return yes ? await shim.parse(t) : t;
            } catch (e) {
            }
            return t;
          };
          SEA.opt = s;
          module2.exports = s;
        })(USE, "./settings");
        USE(function(module2) {
          var shim = USE("./shim");
          module2.exports = async function(d, o) {
            var t = typeof d == "string" ? d : await shim.stringify(d);
            var hash = await shim.subtle.digest({
              name: o || "SHA-256"
            }, new shim.TextEncoder().encode(t));
            return shim.Buffer.from(hash);
          };
        })(USE, "./sha256");
        USE(function(module2) {
          const __shim = USE("./shim");
          const subtle = __shim.subtle;
          const ossl = __shim.ossl ? __shim.ossl : subtle;
          const sha1hash2 = (b) => ossl.digest({
            name: "SHA-1"
          }, new ArrayBuffer(b));
          module2.exports = sha1hash2;
        })(USE, "./sha1");
        USE(function(module2) {
          var SEA = USE("./root");
          var shim = USE("./shim");
          var S2 = USE("./settings");
          var sha = USE("./sha256");
          var u;
          SEA.work = SEA.work || (async (data, pair, cb, opt) => {
            try {
              var salt = (pair || {}).epub || pair;
              opt = opt || {};
              if (salt instanceof Function) {
                cb = salt;
                salt = u;
              }
              data = typeof data == "string" ? data : await shim.stringify(data);
              if ("sha" === (opt.name || "").toLowerCase().slice(0, 3)) {
                var rsha = shim.Buffer.from(await sha(data, opt.name), "binary").toString(opt.encode || "base64");
                if (cb) {
                  try {
                    cb(rsha);
                  } catch (e) {
                    console.log(e);
                  }
                }
                return rsha;
              }
              salt = salt || shim.random(9);
              var key = await (shim.ossl || shim.subtle).importKey("raw", new shim.TextEncoder().encode(data), {
                name: opt.name || "PBKDF2"
              }, false, [
                "deriveBits"
              ]);
              var work = await (shim.ossl || shim.subtle).deriveBits({
                name: opt.name || "PBKDF2",
                iterations: opt.iterations || S2.pbkdf2.iter,
                salt: new shim.TextEncoder().encode(opt.salt || salt),
                hash: opt.hash || S2.pbkdf2.hash
              }, key, opt.length || S2.pbkdf2.ks * 8);
              data = shim.random(data.length);
              var r = shim.Buffer.from(work, "binary").toString(opt.encode || "base64");
              if (cb) {
                try {
                  cb(r);
                } catch (e) {
                  console.log(e);
                }
              }
              return r;
            } catch (e) {
              console.log(e);
              SEA.err = e;
              if (SEA.throw) {
                throw e;
              }
              if (cb) {
                cb();
              }
              return;
            }
          });
          module2.exports = SEA.work;
        })(USE, "./work");
        USE(function(module2) {
          var SEA = USE("./root");
          var shim = USE("./shim");
          USE("./settings");
          SEA.name = SEA.name || (async (cb, opt) => {
            try {
              if (cb) {
                try {
                  cb();
                } catch (e) {
                  console.log(e);
                }
              }
              return;
            } catch (e) {
              console.log(e);
              SEA.err = e;
              if (SEA.throw) {
                throw e;
              }
              if (cb) {
                cb();
              }
              return;
            }
          });
          SEA.pair = SEA.pair || (async (cb, opt) => {
            try {
              var ecdhSubtle = shim.ossl || shim.subtle;
              var sa = await shim.subtle.generateKey({
                name: "ECDSA",
                namedCurve: "P-256"
              }, true, [
                "sign",
                "verify"
              ]).then(async (keys) => {
                var key = {};
                key.priv = (await shim.subtle.exportKey("jwk", keys.privateKey)).d;
                var pub = await shim.subtle.exportKey("jwk", keys.publicKey);
                key.pub = pub.x + "." + pub.y;
                return key;
              });
              try {
                var dh = await ecdhSubtle.generateKey({
                  name: "ECDH",
                  namedCurve: "P-256"
                }, true, [
                  "deriveKey"
                ]).then(async (keys) => {
                  var key = {};
                  key.epriv = (await ecdhSubtle.exportKey("jwk", keys.privateKey)).d;
                  var pub = await ecdhSubtle.exportKey("jwk", keys.publicKey);
                  key.epub = pub.x + "." + pub.y;
                  return key;
                });
              } catch (e) {
                if (SEA.window) {
                  throw e;
                }
                if (e == "Error: ECDH is not a supported algorithm") {
                  console.log("Ignoring ECDH...");
                } else {
                  throw e;
                }
              }
              dh = dh || {};
              var r = {
                pub: sa.pub,
                priv: sa.priv,
                epub: dh.epub,
                epriv: dh.epriv
              };
              if (cb) {
                try {
                  cb(r);
                } catch (e) {
                  console.log(e);
                }
              }
              return r;
            } catch (e) {
              console.log(e);
              SEA.err = e;
              if (SEA.throw) {
                throw e;
              }
              if (cb) {
                cb();
              }
              return;
            }
          });
          module2.exports = SEA.pair;
        })(USE, "./pair");
        USE(function(module2) {
          var SEA = USE("./root");
          var shim = USE("./shim");
          var S2 = USE("./settings");
          var sha = USE("./sha256");
          var u;
          SEA.sign = SEA.sign || (async (data, pair, cb, opt) => {
            try {
              opt = opt || {};
              if (!(pair || opt).priv) {
                if (!SEA.I) {
                  throw "No signing key.";
                }
                pair = await SEA.I(null, {
                  what: data,
                  how: "sign",
                  why: opt.why
                });
              }
              if (u === data) {
                throw "`undefined` not allowed.";
              }
              var json = await S2.parse(data);
              var check = opt.check = opt.check || json;
              if (SEA.verify && (SEA.opt.check(check) || check && check.s && check.m) && u !== await SEA.verify(check, pair)) {
                var r = await S2.parse(check);
                if (!opt.raw) {
                  r = "SEA" + await shim.stringify(r);
                }
                if (cb) {
                  try {
                    cb(r);
                  } catch (e) {
                    console.log(e);
                  }
                }
                return r;
              }
              var pub = pair.pub;
              var priv = pair.priv;
              var jwk = S2.jwk(pub, priv);
              var hash = await sha(json);
              var sig = await (shim.ossl || shim.subtle).importKey("jwk", jwk, {
                name: "ECDSA",
                namedCurve: "P-256"
              }, false, [
                "sign"
              ]).then((key) => (shim.ossl || shim.subtle).sign({
                name: "ECDSA",
                hash: {
                  name: "SHA-256"
                }
              }, key, new Uint8Array(hash)));
              var r = {
                m: json,
                s: shim.Buffer.from(sig, "binary").toString(opt.encode || "base64")
              };
              if (!opt.raw) {
                r = "SEA" + await shim.stringify(r);
              }
              if (cb) {
                try {
                  cb(r);
                } catch (e) {
                  console.log(e);
                }
              }
              return r;
            } catch (e) {
              console.log(e);
              SEA.err = e;
              if (SEA.throw) {
                throw e;
              }
              if (cb) {
                cb();
              }
              return;
            }
          });
          module2.exports = SEA.sign;
        })(USE, "./sign");
        USE(function(module2) {
          var SEA = USE("./root");
          var shim = USE("./shim");
          var S2 = USE("./settings");
          var sha = USE("./sha256");
          var u;
          SEA.verify = SEA.verify || (async (data, pair, cb, opt) => {
            try {
              var json = await S2.parse(data);
              if (false === pair) {
                var raw = await S2.parse(json.m);
                if (cb) {
                  try {
                    cb(raw);
                  } catch (e) {
                    console.log(e);
                  }
                }
                return raw;
              }
              opt = opt || {};
              var pub = pair.pub || pair;
              var key = SEA.opt.slow_leak ? await SEA.opt.slow_leak(pub) : await (shim.ossl || shim.subtle).importKey("jwk", S2.jwk(pub), {
                name: "ECDSA",
                namedCurve: "P-256"
              }, false, [
                "verify"
              ]);
              var hash = await sha(json.m);
              var buf, sig, check, tmp;
              try {
                buf = shim.Buffer.from(json.s, opt.encode || "base64");
                sig = new Uint8Array(buf);
                check = await (shim.ossl || shim.subtle).verify({
                  name: "ECDSA",
                  hash: {
                    name: "SHA-256"
                  }
                }, key, sig, new Uint8Array(hash));
                if (!check) {
                  throw "Signature did not match.";
                }
              } catch (e) {
                if (SEA.opt.fallback) {
                  return await SEA.opt.fall_verify(data, pair, cb, opt);
                }
              }
              var r = check ? await S2.parse(json.m) : u;
              if (cb) {
                try {
                  cb(r);
                } catch (e) {
                  console.log(e);
                }
              }
              return r;
            } catch (e) {
              console.log(e);
              SEA.err = e;
              if (SEA.throw) {
                throw e;
              }
              if (cb) {
                cb();
              }
              return;
            }
          });
          module2.exports = SEA.verify;
          var knownKeys = {};
          SEA.opt.slow_leak = (pair) => {
            if (knownKeys[pair]) return knownKeys[pair];
            var jwk = S2.jwk(pair);
            knownKeys[pair] = (shim.ossl || shim.subtle).importKey("jwk", jwk, {
              name: "ECDSA",
              namedCurve: "P-256"
            }, false, [
              "verify"
            ]);
            return knownKeys[pair];
          };
          var O = SEA.opt;
          SEA.opt.fall_verify = async function(data, pair, cb, opt, f) {
            if (f === SEA.opt.fallback) {
              throw "Signature did not match";
            }
            f = f || 1;
            var tmp = data || "";
            data = SEA.opt.unpack(data) || data;
            var json = await S2.parse(data), pub = pair.pub || pair, key = await SEA.opt.slow_leak(pub);
            var hash = f <= SEA.opt.fallback ? shim.Buffer.from(await shim.subtle.digest({
              name: "SHA-256"
            }, new shim.TextEncoder().encode(await S2.parse(json.m)))) : await sha(json.m);
            var buf;
            var sig;
            var check;
            try {
              buf = shim.Buffer.from(json.s, opt.encode || "base64");
              sig = new Uint8Array(buf);
              check = await (shim.ossl || shim.subtle).verify({
                name: "ECDSA",
                hash: {
                  name: "SHA-256"
                }
              }, key, sig, new Uint8Array(hash));
              if (!check) {
                throw "Signature did not match.";
              }
            } catch (e) {
              try {
                buf = shim.Buffer.from(json.s, "utf8");
                sig = new Uint8Array(buf);
                check = await (shim.ossl || shim.subtle).verify({
                  name: "ECDSA",
                  hash: {
                    name: "SHA-256"
                  }
                }, key, sig, new Uint8Array(hash));
              } catch (e2) {
                if (!check) {
                  throw "Signature did not match.";
                }
              }
            }
            var r = check ? await S2.parse(json.m) : u;
            O.fall_soul = tmp["#"];
            O.fall_key = tmp["."];
            O.fall_val = data;
            O.fall_state = tmp[">"];
            if (cb) {
              try {
                cb(r);
              } catch (e) {
                console.log(e);
              }
            }
            return r;
          };
          SEA.opt.fallback = 2;
        })(USE, "./verify");
        USE(function(module2) {
          var shim = USE("./shim");
          var S2 = USE("./settings");
          var sha256hash = USE("./sha256");
          const importGen = async (key, salt, opt) => {
            const combo = key + (salt || shim.random(8)).toString("utf8");
            const hash = shim.Buffer.from(await sha256hash(combo), "binary");
            const jwkKey = S2.keyToJwk(hash);
            return await shim.subtle.importKey("jwk", jwkKey, {
              name: "AES-GCM"
            }, false, [
              "encrypt",
              "decrypt"
            ]);
          };
          module2.exports = importGen;
        })(USE, "./aeskey");
        USE(function(module2) {
          var SEA = USE("./root");
          var shim = USE("./shim");
          USE("./settings");
          var aeskey = USE("./aeskey");
          var u;
          SEA.encrypt = SEA.encrypt || (async (data, pair, cb, opt) => {
            try {
              opt = opt || {};
              var key = (pair || opt).epriv || pair;
              if (u === data) {
                throw "`undefined` not allowed.";
              }
              if (!key) {
                if (!SEA.I) {
                  throw "No encryption key.";
                }
                pair = await SEA.I(null, {
                  what: data,
                  how: "encrypt",
                  why: opt.why
                });
                key = pair.epriv || pair;
              }
              var msg = typeof data == "string" ? data : await shim.stringify(data);
              var rand = {
                s: shim.random(9),
                iv: shim.random(15)
              };
              var ct2 = await aeskey(key, rand.s, opt).then((aes) => shim.subtle.encrypt({
                name: opt.name || "AES-GCM",
                iv: new Uint8Array(rand.iv)
              }, aes, new shim.TextEncoder().encode(msg)));
              var r = {
                ct: shim.Buffer.from(ct2, "binary").toString(opt.encode || "base64"),
                iv: rand.iv.toString(opt.encode || "base64"),
                s: rand.s.toString(opt.encode || "base64")
              };
              if (!opt.raw) {
                r = "SEA" + await shim.stringify(r);
              }
              if (cb) {
                try {
                  cb(r);
                } catch (e) {
                  console.log(e);
                }
              }
              return r;
            } catch (e) {
              console.log(e);
              SEA.err = e;
              if (SEA.throw) {
                throw e;
              }
              if (cb) {
                cb();
              }
              return;
            }
          });
          module2.exports = SEA.encrypt;
        })(USE, "./encrypt");
        USE(function(module2) {
          var SEA = USE("./root");
          var shim = USE("./shim");
          var S2 = USE("./settings");
          var aeskey = USE("./aeskey");
          SEA.decrypt = SEA.decrypt || (async (data, pair, cb, opt) => {
            try {
              opt = opt || {};
              var key = (pair || opt).epriv || pair;
              if (!key) {
                if (!SEA.I) {
                  throw "No decryption key.";
                }
                pair = await SEA.I(null, {
                  what: data,
                  how: "decrypt",
                  why: opt.why
                });
                key = pair.epriv || pair;
              }
              var json = await S2.parse(data);
              var buf, bufiv, bufct;
              try {
                buf = shim.Buffer.from(json.s, opt.encode || "base64");
                bufiv = shim.Buffer.from(json.iv, opt.encode || "base64");
                bufct = shim.Buffer.from(json.ct, opt.encode || "base64");
                var ct2 = await aeskey(key, buf, opt).then((aes) => shim.subtle.decrypt({
                  name: opt.name || "AES-GCM",
                  iv: new Uint8Array(bufiv),
                  tagLength: 128
                }, aes, new Uint8Array(bufct)));
              } catch (e) {
                if ("utf8" === opt.encode) {
                  throw "Could not decrypt";
                }
                if (SEA.opt.fallback) {
                  opt.encode = "utf8";
                  return await SEA.decrypt(data, pair, cb, opt);
                }
              }
              var r = await S2.parse(new shim.TextDecoder("utf8").decode(ct2));
              if (cb) {
                try {
                  cb(r);
                } catch (e) {
                  console.log(e);
                }
              }
              return r;
            } catch (e) {
              console.log(e);
              SEA.err = e;
              if (SEA.throw) {
                throw e;
              }
              if (cb) {
                cb();
              }
              return;
            }
          });
          module2.exports = SEA.decrypt;
        })(USE, "./decrypt");
        USE(function(module2) {
          var SEA = USE("./root");
          var shim = USE("./shim");
          USE("./settings");
          SEA.secret = SEA.secret || (async (key, pair, cb, opt) => {
            try {
              opt = opt || {};
              if (!pair || !pair.epriv || !pair.epub) {
                if (!SEA.I) {
                  throw "No secret mix.";
                }
                pair = await SEA.I(null, {
                  what: key,
                  how: "secret",
                  why: opt.why
                });
              }
              var pub = key.epub || key;
              var epub = pair.epub;
              var epriv = pair.epriv;
              var ecdhSubtle = shim.ossl || shim.subtle;
              var pubKeyData = keysToEcdhJwk(pub);
              var props = Object.assign({
                public: await ecdhSubtle.importKey(...pubKeyData, true, [])
              }, {
                name: "ECDH",
                namedCurve: "P-256"
              });
              var privKeyData = keysToEcdhJwk(epub, epriv);
              var derived = await ecdhSubtle.importKey(...privKeyData, false, [
                "deriveBits"
              ]).then(async (privKey) => {
                var derivedBits = await ecdhSubtle.deriveBits(props, privKey, 256);
                var rawBits = new Uint8Array(derivedBits);
                var derivedKey = await ecdhSubtle.importKey("raw", rawBits, {
                  name: "AES-GCM",
                  length: 256
                }, true, [
                  "encrypt",
                  "decrypt"
                ]);
                return ecdhSubtle.exportKey("jwk", derivedKey).then(({ k: k2 }) => k2);
              });
              var r = derived;
              if (cb) {
                try {
                  cb(r);
                } catch (e) {
                  console.log(e);
                }
              }
              return r;
            } catch (e) {
              console.log(e);
              SEA.err = e;
              if (SEA.throw) {
                throw e;
              }
              if (cb) {
                cb();
              }
              return;
            }
          });
          var keysToEcdhJwk = (pub, d) => {
            var [x2, y] = pub.split(".");
            var jwk = d ? {
              d
            } : {};
            return [
              "jwk",
              Object.assign(jwk, {
                x: x2,
                y,
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
          module2.exports = SEA.secret;
        })(USE, "./secret");
        USE(function(module2) {
          var SEA = USE("./root");
          SEA.certify = SEA.certify || (async (certificants, policy = {}, authority, cb, opt = {}) => {
            try {
              console.log("SEA.certify() is an early experimental community supported method that may change API behavior without warning in any future version.");
              certificants = (() => {
                var data2 = [];
                if (certificants) {
                  if ((typeof certificants === "string" || Array.isArray(certificants)) && certificants.indexOf("*") > -1) return "*";
                  if (typeof certificants === "string") return certificants;
                  if (Array.isArray(certificants)) {
                    if (certificants.length === 1 && certificants[0]) return typeof certificants[0] === "object" && certificants[0].pub ? certificants[0].pub : typeof certificants[0] === "string" ? certificants[0] : null;
                    certificants.map((certificant) => {
                      if (typeof certificant === "string") data2.push(certificant);
                      else if (typeof certificant === "object" && certificant.pub) data2.push(certificant.pub);
                    });
                  }
                  if (typeof certificants === "object" && certificants.pub) return certificants.pub;
                  return data2.length > 0 ? data2 : null;
                }
                return;
              })();
              if (!certificants) return console.log("No certificant found.");
              const expiry = opt.expiry && (typeof opt.expiry === "number" || typeof opt.expiry === "string") ? parseFloat(opt.expiry) : null;
              const readPolicy = (policy || {}).read ? policy.read : null;
              const writePolicy = (policy || {}).write ? policy.write : typeof policy === "string" || Array.isArray(policy) || policy["+"] || policy["#"] || policy["."] || policy["="] || policy["*"] || policy[">"] || policy["<"] ? policy : null;
              const block = (opt || {}).block || (opt || {}).blacklist || (opt || {}).ban || {};
              const readBlock = block.read && (typeof block.read === "string" || (block.read || {})["#"]) ? block.read : null;
              const writeBlock = typeof block === "string" ? block : block.write && (typeof block.write === "string" || block.write["#"]) ? block.write : null;
              if (!readPolicy && !writePolicy) return console.log("No policy found.");
              const data = JSON.stringify({
                c: certificants,
                ...expiry ? {
                  e: expiry
                } : {},
                ...readPolicy ? {
                  r: readPolicy
                } : {},
                ...writePolicy ? {
                  w: writePolicy
                } : {},
                ...readBlock ? {
                  rb: readBlock
                } : {},
                ...writeBlock ? {
                  wb: writeBlock
                } : {}
              });
              const certificate = await SEA.sign(data, authority, null, {
                raw: 1
              });
              var r = certificate;
              if (!opt.raw) {
                r = "SEA" + JSON.stringify(r);
              }
              if (cb) {
                try {
                  cb(r);
                } catch (e) {
                  console.log(e);
                }
              }
              return r;
            } catch (e) {
              SEA.err = e;
              if (SEA.throw) {
                throw e;
              }
              if (cb) {
                cb();
              }
              return;
            }
          });
          module2.exports = SEA.certify;
        })(USE, "./certify");
        USE(function(module2) {
          var shim = USE("./shim");
          var SEA = USE("./root");
          SEA.work = USE("./work");
          SEA.sign = USE("./sign");
          SEA.verify = USE("./verify");
          SEA.encrypt = USE("./encrypt");
          SEA.decrypt = USE("./decrypt");
          SEA.certify = USE("./certify");
          SEA.random = SEA.random || shim.random;
          SEA.Buffer = SEA.Buffer || USE("./buffer");
          SEA.keyid = SEA.keyid || (async (pub) => {
            try {
              const pb = shim.Buffer.concat(pub.replace(/-/g, "+").replace(/_/g, "/").split(".").map((t) => shim.Buffer.from(t, "base64")));
              const id = shim.Buffer.concat([
                shim.Buffer.from([
                  153,
                  pb.length / 256,
                  pb.length % 256
                ]),
                pb
              ]);
              const sha1 = await sha1hash(id);
              const hash = shim.Buffer.from(sha1, "binary");
              return hash.toString("hex", hash.length - 8);
            } catch (e) {
              console.log(e);
              throw e;
            }
          });
          ((SEA.window || {}).GUN || {}).SEA = SEA;
          module2.exports = SEA;
        })(USE, "./sea");
        USE(function(module2) {
          var SEA = USE("./sea"), Gun2, u;
          if (SEA.window) {
            Gun2 = SEA.window.GUN || {
              chain: {}
            };
          } else {
            Gun2 = USE((u + "" == typeof MODULE ? "." : "") + "./gun", 1);
          }
          SEA.GUN = Gun2;
          function User(root) {
            this._ = {
              $: this
            };
          }
          User.prototype = function() {
            function F2() {
            }
            F2.prototype = Gun2.chain;
            return new F2();
          }();
          User.prototype.constructor = User;
          Gun2.chain.user = function(pub) {
            var gun2 = this, root = gun2.back(-1), user;
            if (pub) {
              pub = SEA.opt.pub((pub._ || "")["#"]) || pub;
              return root.get("~" + pub);
            }
            if (user = root.back("user")) {
              return user;
            }
            var root = root._, at2 = root, uuid = at2.opt.uuid || lex;
            (at2 = (user = at2.user = gun2.chain(new User()))._).opt = {};
            at2.opt.uuid = function(cb) {
              var id = uuid(), pub2 = root.user;
              if (!pub2 || !(pub2 = pub2.is) || !(pub2 = pub2.pub)) {
                return id;
              }
              id = "~" + pub2 + "/" + id;
              if (cb && cb.call) {
                cb(null, id);
              }
              return id;
            };
            return user;
          };
          function lex() {
            return Gun2.state().toString(36).replace(".", "");
          }
          Gun2.User = User;
          User.GUN = Gun2;
          User.SEA = Gun2.SEA = SEA;
          module2.exports = User;
        })(USE, "./user");
        USE(function(module2) {
          var u, Gun2 = "" + u != typeof GUN ? GUN || {
            chain: {}
          } : USE(("" + u === typeof MODULE ? "." : "") + "./gun", 1);
          Gun2.chain.then = function(cb, opt) {
            var gun2 = this, p = new Promise(function(res, rej) {
              gun2.once(res, opt);
            });
            return cb ? p.then(cb) : p;
          };
        })(USE, "./then");
        USE(function(module2) {
          var User = USE("./user"), SEA = User.SEA, Gun2 = User.GUN, noop = function() {
          };
          User.prototype.create = function(...args) {
            var pair = typeof args[0] === "object" && (args[0].pub || args[0].epub) ? args[0] : typeof args[1] === "object" && (args[1].pub || args[1].epub) ? args[1] : null;
            var alias = pair && (pair.pub || pair.epub) ? pair.pub : typeof args[0] === "string" ? args[0] : null;
            var pass = pair && (pair.pub || pair.epub) ? pair : alias && typeof args[1] === "string" ? args[1] : null;
            var cb = args.filter((arg) => typeof arg === "function")[0] || null;
            var opt = args && args.length > 1 && typeof args[args.length - 1] === "object" ? args[args.length - 1] : {};
            var gun2 = this, cat = gun2._, root = gun2.back(-1);
            cb = cb || noop;
            opt = opt || {};
            if (false !== opt.check) {
              var err;
              if (!alias) {
                err = "No user.";
              }
              if ((pass || "").length < 8) {
                err = "Password too short!";
              }
              if (err) {
                cb({
                  err: Gun2.log(err)
                });
                return gun2;
              }
            }
            if (cat.ing) {
              (cb || noop)({
                err: Gun2.log("User is already being created or authenticated!"),
                wait: true
              });
              return gun2;
            }
            cat.ing = true;
            var act = {};
            act.a = function(pubs) {
              act.pubs = pubs;
              if (pubs && !opt.already) {
                var ack = {
                  err: Gun2.log("User already created!")
                };
                cat.ing = false;
                (cb || noop)(ack);
                gun2.leave();
                return;
              }
              act.salt = String.random(64);
              SEA.work(pass, act.salt, act.b);
            };
            act.b = function(proof) {
              act.proof = proof;
              pair ? act.c(pair) : SEA.pair(act.c);
            };
            act.c = function(pair2) {
              var tmp;
              act.pair = pair2 || {};
              if (tmp = cat.root.user) {
                tmp._.sea = pair2;
                tmp.is = {
                  pub: pair2.pub,
                  epub: pair2.epub,
                  alias
                };
              }
              act.data = {
                pub: pair2.pub
              };
              act.d();
            };
            act.d = function() {
              act.data.alias = alias;
              act.e();
            };
            act.e = function() {
              act.data.epub = act.pair.epub;
              SEA.encrypt({
                priv: act.pair.priv,
                epriv: act.pair.epriv
              }, act.proof, act.f, {
                raw: 1
              });
            };
            act.f = function(auth) {
              act.data.auth = JSON.stringify({
                ek: auth,
                s: act.salt
              });
              act.g(act.data.auth);
            };
            act.g = function(auth) {
              var tmp;
              act.data.auth = act.data.auth || auth;
              root.get(tmp = "~" + act.pair.pub).put(act.data).on(act.h);
              var link = {};
              link[tmp] = {
                "#": tmp
              };
              root.get("~@" + alias).put(link).get(tmp).on(act.i);
            };
            act.h = function(data, key, msg, eve) {
              eve.off();
              act.h.ok = 1;
              act.i();
            };
            act.i = function(data, key, msg, eve) {
              if (eve) {
                act.i.ok = 1;
                eve.off();
              }
              if (!act.h.ok || !act.i.ok) {
                return;
              }
              cat.ing = false;
              cb({
                ok: 0,
                pub: act.pair.pub
              });
              if (noop === cb) {
                pair ? gun2.auth(pair) : gun2.auth(alias, pass);
              }
            };
            root.get("~@" + alias).once(act.a);
            return gun2;
          };
          User.prototype.leave = function(opt, cb) {
            var gun2 = this, user = gun2.back(-1)._.user;
            if (user) {
              delete user.is;
              delete user._.is;
              delete user._.sea;
            }
            if (SEA.window) {
              try {
                var sS = {};
                sS = SEA.window.sessionStorage;
                delete sS.recall;
                delete sS.pair;
              } catch (e) {
              }
            }
            return gun2;
          };
        })(USE, "./create");
        USE(function(module2) {
          var User = USE("./user"), SEA = User.SEA, Gun2 = User.GUN, noop = function() {
          };
          User.prototype.auth = function(...args) {
            var pair = typeof args[0] === "object" && (args[0].pub || args[0].epub) ? args[0] : typeof args[1] === "object" && (args[1].pub || args[1].epub) ? args[1] : null;
            var alias = !pair && typeof args[0] === "string" ? args[0] : null;
            var pass = (alias || pair && !(pair.priv && pair.epriv)) && typeof args[1] === "string" ? args[1] : null;
            var cb = args.filter((arg) => typeof arg === "function")[0] || null;
            var opt = args && args.length > 1 && typeof args[args.length - 1] === "object" ? args[args.length - 1] : {};
            var gun2 = this, cat = gun2._, root = gun2.back(-1);
            if (cat.ing) {
              (cb || noop)({
                err: Gun2.log("User is already being created or authenticated!"),
                wait: true
              });
              return gun2;
            }
            cat.ing = true;
            var act = {}, u, tries = 9;
            act.a = function(data) {
              if (!data) {
                return act.b();
              }
              if (!data.pub) {
                var tmp = [];
                Object.keys(data).forEach(function(k2) {
                  if ("_" == k2) {
                    return;
                  }
                  tmp.push(data[k2]);
                });
                return act.b(tmp);
              }
              if (act.name) {
                return act.f(data);
              }
              act.c((act.data = data).auth);
            };
            act.b = function(list) {
              var get = (act.list = (act.list || []).concat(list || [])).shift();
              if (u === get) {
                if (act.name) {
                  return act.err("Your user account is not published for dApps to access, please consider syncing it online, or allowing local access by adding your device as a peer.");
                }
                if (alias && tries--) {
                  root.get("~@" + alias).once(act.a);
                  return;
                }
                return act.err("Wrong user or password.");
              }
              root.get(get).once(act.a);
            };
            act.c = function(auth) {
              if (u === auth) {
                return act.b();
              }
              if ("string" == typeof auth) {
                return act.c(obj_ify(auth));
              }
              SEA.work(pass, (act.auth = auth).s, act.d, act.enc);
            };
            act.d = function(proof) {
              SEA.decrypt(act.auth.ek, proof, act.e, act.enc);
            };
            act.e = function(half) {
              if (u === half) {
                if (!act.enc) {
                  act.enc = {
                    encode: "utf8"
                  };
                  return act.c(act.auth);
                }
                act.enc = null;
                return act.b();
              }
              act.half = half;
              act.f(act.data);
            };
            act.f = function(pair2) {
              var half = act.half || {}, data = act.data || {};
              act.g(act.lol = {
                pub: pair2.pub || data.pub,
                epub: pair2.epub || data.epub,
                priv: pair2.priv || half.priv,
                epriv: pair2.epriv || half.epriv
              });
            };
            act.g = function(pair2) {
              if (!pair2 || !pair2.pub || !pair2.epub) {
                return act.b();
              }
              act.pair = pair2;
              var user = root._.user, at2 = user._;
              at2.tag;
              var upt = at2.opt;
              at2 = user._ = root.get("~" + pair2.pub)._;
              at2.opt = upt;
              user.is = {
                pub: pair2.pub,
                epub: pair2.epub,
                alias: alias || pair2.pub
              };
              at2.sea = act.pair;
              cat.ing = false;
              try {
                if (pass && u == (obj_ify(cat.root.graph["~" + pair2.pub].auth) || "")[":"]) {
                  opt.shuffle = opt.change = pass;
                }
              } catch (e) {
              }
              opt.change ? act.z() : (cb || noop)(at2);
              if (SEA.window && (gun2.back("user")._.opt || opt).remember) {
                try {
                  var sS = {};
                  sS = SEA.window.sessionStorage;
                  sS.recall = true;
                  sS.pair = JSON.stringify(pair2);
                } catch (e) {
                }
              }
              try {
                if (root._.tag.auth) {
                  root._.on("auth", at2);
                } else {
                  setTimeout(function() {
                    root._.on("auth", at2);
                  }, 1);
                }
              } catch (e) {
                Gun2.log("Your 'auth' callback crashed with:", e);
              }
            };
            act.h = function(data) {
              if (!data) {
                return act.b();
              }
              alias = data.alias;
              if (!alias) alias = data.alias = "~" + pair.pub;
              if (!data.auth) {
                return act.g(pair);
              }
              pair = null;
              act.c((act.data = data).auth);
            };
            act.z = function() {
              act.salt = String.random(64);
              SEA.work(opt.change, act.salt, act.y);
            };
            act.y = function(proof) {
              SEA.encrypt({
                priv: act.pair.priv,
                epriv: act.pair.epriv
              }, proof, act.x, {
                raw: 1
              });
            };
            act.x = function(auth) {
              act.w(JSON.stringify({
                ek: auth,
                s: act.salt
              }));
            };
            act.w = function(auth) {
              if (opt.shuffle) {
                console.log("migrate core account from UTF8 & shuffle");
                var tmp = {};
                Object.keys(act.data).forEach(function(k2) {
                  tmp[k2] = act.data[k2];
                });
                delete tmp._;
                tmp.auth = auth;
                root.get("~" + act.pair.pub).put(tmp);
              }
              root.get("~" + act.pair.pub).get("auth").put(auth, cb || noop);
            };
            act.err = function(e) {
              var ack = {
                err: Gun2.log(e || "User cannot be found!")
              };
              cat.ing = false;
              (cb || noop)(ack);
            };
            act.plugin = function(name) {
              if (!(act.name = name)) {
                return act.err();
              }
              var tmp = [
                name
              ];
              if ("~" !== name[0]) {
                tmp[1] = "~" + name;
                tmp[2] = "~@" + name;
              }
              act.b(tmp);
            };
            if (pair) {
              if (pair.priv && pair.epriv) act.g(pair);
              else root.get("~" + pair.pub).once(act.h);
            } else if (alias) {
              root.get("~@" + alias).once(act.a);
            } else if (!alias && !pass) {
              SEA.name(act.plugin);
            }
            return gun2;
          };
          function obj_ify(o) {
            if ("string" != typeof o) {
              return o;
            }
            try {
              o = JSON.parse(o);
            } catch (e) {
              o = {};
            }
            return o;
          }
        })(USE, "./auth");
        USE(function(module2) {
          var User = USE("./user"), SEA = User.SEA;
          User.GUN;
          User.prototype.recall = function(opt, cb) {
            var gun2 = this, root = gun2.back(-1);
            opt = opt || {};
            if (opt && opt.sessionStorage) {
              if (SEA.window) {
                try {
                  var sS = {};
                  sS = SEA.window.sessionStorage;
                  if (sS) {
                    root._.opt.remember = true;
                    (gun2.back("user")._.opt || opt).remember = true;
                    if (sS.recall || sS.pair) root.user().auth(JSON.parse(sS.pair), cb);
                  }
                } catch (e) {
                }
              }
              return gun2;
            }
            return gun2;
          };
        })(USE, "./recall");
        USE(function(module2) {
          var User = USE("./user"), SEA = User.SEA, Gun2 = User.GUN, noop = function() {
          };
          User.prototype.pair = function() {
            var user = this, proxy;
            try {
              proxy = new Proxy({
                DANGER: "\u2620"
              }, {
                get: function(t, p, r) {
                  if (!user.is || !(user._ || "").sea) {
                    return;
                  }
                  return user._.sea[p];
                }
              });
            } catch (e) {
            }
            return proxy;
          };
          User.prototype.delete = async function(alias, pass, cb) {
            console.log("user.delete() IS DEPRECATED AND WILL BE MOVED TO A MODULE!!!");
            var gun2 = this;
            gun2.back(-1);
            var user = gun2.back("user");
            try {
              user.auth(alias, pass, function(ack) {
                var pub = (user.is || {}).pub;
                user.map().once(function() {
                  this.put(null);
                });
                user.leave();
                (cb || noop)({
                  ok: 0
                });
              });
            } catch (e) {
              Gun2.log("User.delete failed! Error:", e);
            }
            return gun2;
          };
          User.prototype.alive = async function() {
            console.log("user.alive() IS DEPRECATED!!!");
            const gunRoot = this.back(-1);
            try {
              await authRecall(gunRoot);
              return gunRoot._.user._;
            } catch (e) {
              const err = "No session!";
              Gun2.log(err);
              throw {
                err
              };
            }
          };
          User.prototype.trust = async function(user) {
            console.log("`.trust` API MAY BE DELETED OR CHANGED OR RENAMED, DO NOT USE!");
            if (Gun2.is(user)) {
              user.get("pub").get((ctx, ev) => {
                console.log(ctx, ev);
              });
            }
            user.get("trust").get(path).put(theirPubkey);
          };
          User.prototype.grant = function(to, cb) {
            console.log("`.grant` API MAY BE DELETED OR CHANGED OR RENAMED, DO NOT USE!");
            var gun2 = this, user = gun2.back(-1).user(), pair = user._.sea, path2 = "";
            gun2.back(function(at2) {
              if (at2.is) {
                return;
              }
              path2 += at2.get || "";
            });
            (async function() {
              var enc, sec = await user.get("grant").get(pair.pub).get(path2).then();
              sec = await SEA.decrypt(sec, pair);
              if (!sec) {
                sec = SEA.random(16).toString();
                enc = await SEA.encrypt(sec, pair);
                user.get("grant").get(pair.pub).get(path2).put(enc);
              }
              var pub = to.get("pub").then();
              var epub = to.get("epub").then();
              pub = await pub;
              epub = await epub;
              var dh = await SEA.secret(epub, pair);
              enc = await SEA.encrypt(sec, dh);
              user.get("grant").get(pub).get(path2).put(enc, cb);
            })();
            return gun2;
          };
          User.prototype.secret = function(data, cb) {
            console.log("`.secret` API MAY BE DELETED OR CHANGED OR RENAMED, DO NOT USE!");
            var gun2 = this, user = gun2.back(-1).user(), pair = user.pair(), path2 = "";
            gun2.back(function(at2) {
              if (at2.is) {
                return;
              }
              path2 += at2.get || "";
            });
            (async function() {
              var enc, sec = await user.get("trust").get(pair.pub).get(path2).then();
              sec = await SEA.decrypt(sec, pair);
              if (!sec) {
                sec = SEA.random(16).toString();
                enc = await SEA.encrypt(sec, pair);
                user.get("trust").get(pair.pub).get(path2).put(enc);
              }
              enc = await SEA.encrypt(data, sec);
              gun2.put(enc, cb);
            })();
            return gun2;
          };
          module2.exports = User;
        })(USE, "./share");
        USE(function(module2) {
          var SEA = USE("./sea"), S2 = USE("./settings"), u;
          var Gun2 = (SEA.window || "").GUN || USE(("" + u === typeof MODULE ? "." : "") + "./gun", 1);
          Gun2.on("opt", function(at2) {
            if (!at2.sea) {
              at2.sea = {
                own: {}
              };
              at2.on("put", check, at2);
            }
            this.to.next(at2);
          });
          function check(msg) {
            var eve = this, at2 = eve.as, put = msg.put, soul = put["#"], key = put["."], val = put[":"], state = put[">"], id = msg["#"], tmp;
            if (!soul || !key) {
              return;
            }
            if ((msg._ || "").faith && (at2.opt || "").faith && "function" == typeof msg._) {
              SEA.opt.pack(put, function(raw) {
                SEA.verify(raw, false, function(data) {
                  put["="] = SEA.opt.unpack(data);
                  eve.to.next(msg);
                });
              });
              return;
            }
            var no = function(why) {
              at2.on("in", {
                "@": id,
                err: msg.err = why
              });
            };
            (msg._ || "").DBG && ((msg._ || "").DBG.c = +/* @__PURE__ */ new Date());
            if (0 <= soul.indexOf("<?")) {
              tmp = parseFloat(soul.split("<?")[1] || "");
              if (tmp && state < Gun2.state() - tmp * 1e3) {
                (tmp = msg._) && tmp.stun && tmp.stun--;
                return;
              }
            }
            if ("~@" === soul) {
              check.alias(eve, msg, val, key, soul, at2, no);
              return;
            }
            if ("~@" === soul.slice(0, 2)) {
              check.pubs(eve, msg, val, key, soul, at2, no);
              return;
            }
            if (tmp = SEA.opt.pub(soul)) {
              check.pub(eve, msg, val, key, soul, at2, no, at2.user || "", tmp);
              return;
            }
            if (0 <= soul.indexOf("#")) {
              check.hash(eve, msg, val, key, soul, at2, no);
              return;
            }
            check.any(eve, msg, val, key, soul, at2, no, at2.user || "");
            return;
          }
          check.hash = function(eve, msg, val, key, soul, at2, no) {
            SEA.work(val, null, function(data) {
              function hexToBase64(hexStr) {
                let base64 = "";
                for (let i = 0; i < hexStr.length; i++) {
                  base64 += !(i - 1 & 1) ? String.fromCharCode(parseInt(hexStr.substring(i - 1, i + 1), 16)) : "";
                }
                return btoa(base64);
              }
              if (data && data === key.split("#").slice(-1)[0]) {
                return eve.to.next(msg);
              } else if (data && data === hexToBase64(key.split("#").slice(-1)[0])) {
                return eve.to.next(msg);
              }
              no("Data hash not same as hash!");
            }, {
              name: "SHA-256"
            });
          };
          check.alias = function(eve, msg, val, key, soul, at2, no) {
            if (!val) {
              return no("Data must exist!");
            }
            if ("~@" + key === link_is(val)) {
              return eve.to.next(msg);
            }
            no("Alias not same!");
          };
          check.pubs = function(eve, msg, val, key, soul, at2, no) {
            if (!val) {
              return no("Alias must exist!");
            }
            if (key === link_is(val)) {
              return eve.to.next(msg);
            }
            no("Alias not same!");
          };
          check.pub = async function(eve, msg, val, key, soul, at2, no, user, pub) {
            var tmp;
            const raw = await S2.parse(val) || {};
            const verify = (certificate, certificant, cb) => {
              if (certificate.m && certificate.s && certificant && pub) return SEA.verify(certificate, pub, (data) => {
                if (u !== data && u !== data.e && msg.put[">"] && msg.put[">"] > parseFloat(data.e)) return no("Certificate expired.");
                if (u !== data && data.c && data.w && (data.c === certificant || data.c.indexOf("*") > -1)) {
                  let path2 = soul.indexOf("/") > -1 ? soul.replace(soul.substring(0, soul.indexOf("/") + 1), "") : "";
                  String.match = String.match || Gun2.text.match;
                  const w = Array.isArray(data.w) ? data.w : typeof data.w === "object" || typeof data.w === "string" ? [
                    data.w
                  ] : [];
                  for (const lex of w) {
                    if (String.match(path2, lex["#"]) && String.match(key, lex["."]) || !lex["."] && String.match(path2, lex["#"]) || !lex["#"] && String.match(key, lex["."]) || String.match(path2 ? path2 + "/" + key : key, lex["#"] || lex)) {
                      if (lex["+"] && lex["+"].indexOf("*") > -1 && path2 && path2.indexOf(certificant) == -1 && key.indexOf(certificant) == -1) return no(`Path "${path2}" or key "${key}" must contain string "${certificant}".`);
                      if (data.wb && (typeof data.wb === "string" || (data.wb || {})["#"])) {
                        var root = eve.as.root.$.back(-1);
                        if (typeof data.wb === "string" && "~" !== data.wb.slice(0, 1)) root = root.get("~" + pub);
                        return root.get(data.wb).get(certificant).once((value) => {
                          if (value && (value === 1 || value === true)) return no(`Certificant ${certificant} blocked.`);
                          return cb(data);
                        });
                      }
                      return cb(data);
                    }
                  }
                  return no("Certificate verification fail.");
                }
              });
              return;
            };
            if ("pub" === key && "~" + pub === soul) {
              if (val === pub) return eve.to.next(msg);
              return no("Account not same!");
            }
            if ((tmp = user.is) && tmp.pub && !raw["*"] && !raw["+"] && (pub === tmp.pub || pub !== tmp.pub && ((msg._.msg || {}).opt || {}).cert)) {
              SEA.opt.pack(msg.put, (packed) => {
                SEA.sign(packed, user._.sea, async function(data) {
                  if (u === data) return no(SEA.err || "Signature fail.");
                  msg.put[":"] = {
                    ":": tmp = SEA.opt.unpack(data.m),
                    "~": data.s
                  };
                  msg.put["="] = tmp;
                  if (pub === user.is.pub) {
                    if (tmp = link_is(val)) (at2.sea.own[tmp] = at2.sea.own[tmp] || {})[pub] = 1;
                    JSON.stringifyAsync(msg.put[":"], function(err, s) {
                      if (err) {
                        return no(err || "Stringify error.");
                      }
                      msg.put[":"] = s;
                      return eve.to.next(msg);
                    });
                    return;
                  }
                  if (pub !== user.is.pub && ((msg._.msg || {}).opt || {}).cert) {
                    const cert = await S2.parse(msg._.msg.opt.cert);
                    if (cert && cert.m && cert.s) verify(cert, user.is.pub, (_) => {
                      msg.put[":"]["+"] = cert;
                      msg.put[":"]["*"] = user.is.pub;
                      JSON.stringifyAsync(msg.put[":"], function(err, s) {
                        if (err) {
                          return no(err || "Stringify error.");
                        }
                        msg.put[":"] = s;
                        return eve.to.next(msg);
                      });
                      return;
                    });
                  }
                }, {
                  raw: 1
                });
              });
              return;
            }
            SEA.opt.pack(msg.put, (packed) => {
              SEA.verify(packed, raw["*"] || pub, function(data) {
                var tmp2;
                data = SEA.opt.unpack(data);
                if (u === data) return no("Unverified data.");
                if ((tmp2 = link_is(data)) && pub === SEA.opt.pub(tmp2)) (at2.sea.own[tmp2] = at2.sea.own[tmp2] || {})[pub] = 1;
                if (raw["+"] && raw["+"]["m"] && raw["+"]["s"] && raw["*"]) verify(raw["+"], raw["*"], (_) => {
                  msg.put["="] = data;
                  return eve.to.next(msg);
                });
                else {
                  msg.put["="] = data;
                  return eve.to.next(msg);
                }
              });
            });
            return;
          };
          check.any = function(eve, msg, val, key, soul, at2, no, user) {
            if (at2.opt.secure) {
              return no("Soul missing public key at '" + key + "'.");
            }
            at2.on("secure", function(msg2) {
              this.off();
              if (!at2.opt.secure) {
                return eve.to.next(msg2);
              }
              no("Data cannot be changed.");
            }).on.on("secure", msg);
            return;
          };
          var valid = Gun2.valid, link_is = function(d, l) {
            return "string" == typeof (l = valid(d)) && l;
          };
          (Gun2.state || "").ify;
          var pubcut = /[^\w_-]/;
          SEA.opt.pub = function(s) {
            if (!s) {
              return;
            }
            s = s.split("~");
            if (!s || !(s = s[1])) {
              return;
            }
            s = s.split(pubcut).slice(0, 2);
            if (!s || 2 != s.length) {
              return;
            }
            if ("@" === (s[0] || "")[0]) {
              return;
            }
            s = s.slice(0, 2).join(".");
            return s;
          };
          SEA.opt.stringy = function(t) {
          };
          SEA.opt.pack = function(d, cb, k2, n, s) {
            var tmp, f;
            if (SEA.opt.check(d)) {
              return cb(d);
            }
            if (d && d["#"] && d["."] && d[">"]) {
              tmp = d[":"];
              f = 1;
            }
            JSON.parseAsync(f ? tmp : d, function(err, meta) {
              var sig = u !== (meta || "")[":"] && (meta || "")["~"];
              if (!sig) {
                cb(d);
                return;
              }
              cb({
                m: {
                  "#": s || d["#"],
                  ".": k2 || d["."],
                  ":": (meta || "")[":"],
                  ">": d[">"] || Gun2.state.is(n, k2)
                },
                s: sig
              });
            });
          };
          var O = SEA.opt;
          SEA.opt.unpack = function(d, k2, n) {
            var tmp;
            if (u === d) {
              return;
            }
            if (d && u !== (tmp = d[":"])) {
              return tmp;
            }
            k2 = k2 || O.fall_key;
            if (!n && O.fall_val) {
              n = {};
              n[k2] = O.fall_val;
            }
            if (!k2 || !n) {
              return;
            }
            if (d === n[k2]) {
              return d;
            }
            if (!SEA.opt.check(n[k2])) {
              return d;
            }
            var soul = n && n._ && n._["#"] || O.fall_soul, s = Gun2.state.is(n, k2) || O.fall_state;
            if (d && 4 === d.length && soul === d[0] && k2 === d[1] && fl(s) === fl(d[3])) {
              return d[2];
            }
            if (s < SEA.opt.shuffle_attack) {
              return d;
            }
          };
          SEA.opt.shuffle_attack = 15463296e5;
          var fl = Math.floor;
        })(USE, "./index");
      })();
    })(sea);
    return sea.exports;
  }
  requireSea();
  var unset = {};
  var hasRequiredUnset;
  function requireUnset() {
    if (hasRequiredUnset) return unset;
    hasRequiredUnset = 1;
    var Gun2 = typeof window !== "undefined" ? window.Gun : requireGun();
    const rel_ = "#";
    const node_ = "_";
    Gun2.chain.unset = function(node) {
      if (this && node && node[node_] && node[node_].put && node[node_].put[node_] && node[node_].put[node_][rel_]) {
        this.put({
          [node[node_].put[node_][rel_]]: null
        });
      }
      return this;
    };
    return unset;
  }
  requireUnset();
  const peers = [
    "https://gun-manhattan.herokuapp.com/gun",
    "https://relay.peers.community/gun",
    "https://gun-sjc.herokuapp.com/gun"
  ];
  const gun = Gun$1(peers);
  gun.clear = function() {
    localStorage.clear();
    sessionStorage.clear();
    indexedDB.databases().then((dbs) => {
      for (let db of dbs) {
        indexedDB.deleteDatabase(db.name);
      }
    });
    console.log("Local data cleared");
  };
  gun.lookup = async function(key, id) {
    const ref2 = await gun.get(key).get(id).once();
    const soul = (ref2 == null ? void 0 : ref2._) && ref2._["#"];
    if (!soul) return null;
    const data = await gun.get(soul).once();
    return data ? {
      id,
      ...data
    } : null;
  };
  const { ref, inject, provide, computed, onMounted, onUnmounted } = await importShared("vue");
  const mapKey = Symbol("map");
  mapProvider = function(instance) {
    const current = ref(null);
    const places = ref([]);
    const locationToLocation = [
      "in"
    ];
    const createLocation = async (formData) => {
      const data = Object.fromEntries(formData.entries());
      console.log(data);
      const node = gun.get(`location-plugin/${instance}`).put(data);
      gun.get("locations").set(node);
      return node;
    };
    onMounted(async () => {
      gun.get(`location-plugin/${instance}`).once((data) => {
        if (data) {
          current.value = {
            lat: Number(data.lat),
            lng: Number(data.lng),
            zoom: Number(data.zoom)
          };
        }
      });
      gun.get(instance).get("relations").map().once(async (rel) => {
        if (rel && gun.lookup) {
          const populated = await gun.lookup("spheres", rel.one);
          if (locationToLocation.includes(rel.type)) {
            gun.get(`location-plugin/${rel.one}`).once((data) => {
              if (data) {
                places.value.push({
                  id: rel.one,
                  title: (populated == null ? void 0 : populated.title) || "",
                  position: {
                    lat: Number(data.lat),
                    lng: Number(data.lng)
                  }
                });
              }
            });
          }
        }
      });
    });
    provide(mapKey, {
      current,
      places,
      createLocation
    });
  };
  useMap = function() {
    const data = inject(mapKey);
    if (!data) {
      throw new Error("Composable must have an map provider.");
    }
    return data;
  };
});
export {
  _sfc_main as _,
  __tla,
  _sfc_main$1 as a,
  mapProvider as m,
  useMap as u
};
