import { importShared, __tla as __tla_0 } from "./__federation_fn_import-xDAQhvQ6.js";
import { u as useMap, a as _sfc_main$5, _ as _sfc_main$6, m as mapProvider, __tla as __tla_1 } from "./mapProvider-DxE_VycM.js";
let _sfc_main;
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
  const { defineComponent: _defineComponent$4 } = await importShared("vue");
  const { unref: _unref, normalizeClass: _normalizeClass$2, openBlock: _openBlock$5, createElementBlock: _createElementBlock$5 } = await importShared("vue");
  const _sfc_main$4 = _defineComponent$4({
    __name: "Divider",
    props: {
      direction: {}
    },
    setup(__props) {
      const props = __props;
      const direction = props.direction || "horizontal";
      return (_ctx, _cache) => {
        return _openBlock$5(), _createElementBlock$5("div", {
          class: _normalizeClass$2([
            "bg-gray-300",
            _unref(direction) === "vertical" ? "w-px h-full" : "h-px w-full",
            "my-1"
          ])
        }, null, 2);
      };
    }
  });
  const { defineComponent: _defineComponent$3 } = await importShared("vue");
  const { createElementVNode: _createElementVNode$2, openBlock: _openBlock$4, createElementBlock: _createElementBlock$4 } = await importShared("vue");
  const { createTextVNode: _createTextVNode$2, Fragment: _Fragment$1, openBlock: _openBlock$3, createElementBlock: _createElementBlock$3, createCommentVNode: _createCommentVNode$2, renderSlot: _renderSlot$1, normalizeClass: _normalizeClass$1 } = await importShared("vue");
  const _hoisted_1$2 = [
    "disabled"
  ];
  const { ref: ref$1, computed: computed$1, watch } = await importShared("vue");
  const _sfc_main$3 = {
    __name: "SubmitButton",
    props: {
      className: {
        type: String,
        default: ""
      }
    },
    setup(__props) {
      const props = __props;
      const pending = ref$1(false);
      const simulatePendingStatus = () => {
        pending.value = true;
        setTimeout(() => {
          pending.value = false;
        }, 2e3);
      };
      watch(pending, (newValue) => {
        if (newValue) {
          simulatePendingStatus();
        }
      });
      const buttonClass = computed$1(() => `inline-flex justify-center px-4 py-2 text-sm font-medium border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 bg-transparent rounded-lg shadow-sm hover:bg-blue-50 dark:hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 ${props.className}
`);
      return (_ctx, _cache) => {
        return _openBlock$3(), _createElementBlock$3("button", {
          type: "submit",
          disabled: pending.value,
          class: _normalizeClass$1(buttonClass.value)
        }, [
          pending.value ? (_openBlock$3(), _createElementBlock$3(_Fragment$1, {
            key: 0
          }, [
            _createTextVNode$2(" Sending ... ")
          ], 64)) : _renderSlot$1(_ctx.$slots, "default", {
            key: 1
          })
        ], 10, _hoisted_1$2);
      };
    }
  };
  const { defineComponent: _defineComponent$2 } = await importShared("vue");
  const { toDisplayString: _toDisplayString$1, openBlock: _openBlock$2, createElementBlock: _createElementBlock$2, createCommentVNode: _createCommentVNode$1, createElementVNode: _createElementVNode$1, renderSlot: _renderSlot, normalizeClass: _normalizeClass } = await importShared("vue");
  const _hoisted_1$1 = {
    class: "flex items-start"
  };
  const _hoisted_2$1 = {
    key: 0,
    class: "font-semibold"
  };
  const _hoisted_3 = {
    class: "overflow-y-auto text-xs"
  };
  const { computed } = await importShared("vue");
  const _sfc_main$2 = _defineComponent$2({
    __name: "Callout",
    props: {
      title: {
        type: String,
        required: false
      },
      color: {
        type: String,
        default: "red",
        validator: (value) => {
          return [
            "red",
            "green"
          ].includes(value);
        }
      }
    },
    setup(__props) {
      const props = __props;
      const calloutClasses = computed(() => {
        const baseClasses = "flex flex-col overflow-hidden rounded-lg border-l-4 p-4 mb-2 opacity-75";
        const colorClasses = props.color === "red" ? "bg-red-100 border-red-500 text-red-700" : "bg-green-100 border-green-500 text-green-700";
        return `${baseClasses} ${colorClasses}`;
      });
      return (_ctx, _cache) => {
        return _openBlock$2(), _createElementBlock$2("div", {
          class: _normalizeClass(calloutClasses.value)
        }, [
          _createElementVNode$1("div", _hoisted_1$1, [
            __props.title ? (_openBlock$2(), _createElementBlock$2("h4", _hoisted_2$1, _toDisplayString$1(__props.title), 1)) : _createCommentVNode$1("", true)
          ]),
          _createElementVNode$1("p", _hoisted_3, [
            _renderSlot(_ctx.$slots, "default")
          ])
        ], 2);
      };
    }
  });
  const { defineComponent: _defineComponent$1 } = await importShared("vue");
  const { createTextVNode: _createTextVNode$1, withCtx: _withCtx$1, createVNode: _createVNode$1, toDisplayString: _toDisplayString, openBlock: _openBlock$1, createBlock: _createBlock, createCommentVNode: _createCommentVNode, withModifiers: _withModifiers, createElementBlock: _createElementBlock$1 } = await importShared("vue");
  const { ref, onMounted } = await importShared("vue");
  const _sfc_main$1 = _defineComponent$1({
    __name: "MapForm",
    setup(__props) {
      const { createLocation } = useMap();
      const form = ref(null);
      const errorMessage = ref("");
      const successMessage = ref("");
      const location = ref(null);
      const onSubmit = async () => {
        var _a, _b;
        try {
          if (!location.value) throw new Error("No location was selected");
          if (errorMessage.value.length) return;
          const formData = new FormData(form.value ?? void 0);
          formData.append("lat", String(location.value.lat));
          formData.append("lng", String(location.value.lng));
          formData.append("zoom", String(location.value.zoom));
          const node = await createLocation(formData);
          successMessage.value = "The location has been saved successfully!";
          (_a = form.value) == null ? void 0 : _a.reset();
        } catch (error) {
          console.error(error);
          errorMessage.value = ((_b = error == null ? void 0 : error.response) == null ? void 0 : _b.data) || "An error occurred";
        }
      };
      onMounted(() => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((pos) => {
            var _a, _b;
            location.value = {
              lat: (_a = pos.coords) == null ? void 0 : _a.latitude,
              lng: (_b = pos.coords) == null ? void 0 : _b.longitude,
              zoom: 15
            };
          }, (error) => {
            console.warn("Geolocation error:", error);
          });
        } else {
          console.warn("Geolocation not supported");
        }
      });
      return (_ctx, _cache) => {
        return _openBlock$1(), _createElementBlock$1("form", {
          ref_key: "form",
          ref: form,
          onSubmit: _withModifiers(onSubmit, [
            "prevent"
          ]),
          class: "space-y-2"
        }, [
          _createVNode$1(_sfc_main$5, null, {
            default: _withCtx$1(() => _cache[1] || (_cache[1] = [
              _createTextVNode$1(" Set the location point ", -1)
            ])),
            _: 1,
            __: [
              1
            ]
          }),
          errorMessage.value ? (_openBlock$1(), _createBlock(_sfc_main$2, {
            key: 0,
            color: "red"
          }, {
            default: _withCtx$1(() => [
              _createTextVNode$1(_toDisplayString(errorMessage.value), 1)
            ]),
            _: 1
          })) : _createCommentVNode("", true),
          successMessage.value ? (_openBlock$1(), _createBlock(_sfc_main$2, {
            key: 1,
            color: "green"
          }, {
            default: _withCtx$1(() => [
              _createTextVNode$1(_toDisplayString(successMessage.value), 1)
            ]),
            _: 1
          })) : _createCommentVNode("", true),
          _createVNode$1(_sfc_main$6, {
            modelValue: location.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => location.value = $event)
          }, null, 8, [
            "modelValue"
          ]),
          _createVNode$1(_sfc_main$3, {
            className: "w-full mt-4"
          }, {
            default: _withCtx$1(() => _cache[2] || (_cache[2] = [
              _createTextVNode$1(" Submit ", -1)
            ])),
            _: 1,
            __: [
              2
            ]
          })
        ], 544);
      };
    }
  });
  const { defineComponent: _defineComponent } = await importShared("vue");
  const { createTextVNode: _createTextVNode, withCtx: _withCtx, createVNode: _createVNode, createElementVNode: _createElementVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = await importShared("vue");
  const _hoisted_1 = {
    class: "mb-4"
  };
  const _hoisted_2 = {
    class: "mb-4"
  };
  _sfc_main = _defineComponent({
    __name: "Content",
    props: {
      parentId: String
    },
    setup(__props) {
      const props = __props;
      console.log("Location plugin settings content loaded: ", props.parentId);
      mapProvider(props.parentId ?? "test");
      return (_ctx, _cache) => {
        return _openBlock(), _createElementBlock(_Fragment, null, [
          _createElementVNode("section", _hoisted_1, [
            _createVNode(_sfc_main$5, null, {
              default: _withCtx(() => _cache[0] || (_cache[0] = [
                _createTextVNode("Map Settings", -1)
              ])),
              _: 1,
              __: [
                0
              ]
            }),
            _createVNode(_sfc_main$4)
          ]),
          _createElementVNode("section", _hoisted_2, [
            _createVNode(_sfc_main$1)
          ])
        ], 64);
      };
    }
  });
});
export {
  _sfc_main as _,
  __tla
};
