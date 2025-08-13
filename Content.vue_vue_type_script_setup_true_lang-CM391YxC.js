import { importShared, __tla as __tla_0 } from "./__federation_fn_import-xDAQhvQ6.js";
import { u as useMap, _ as _sfc_main$2, m as mapProvider, __tla as __tla_1 } from "./mapProvider-DxE_VycM.js";
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
  const { defineComponent: _defineComponent$1 } = await importShared("vue");
  const { unref: _unref, isRef: _isRef, openBlock: _openBlock$1, createBlock: _createBlock$1 } = await importShared("vue");
  const { ref, watch } = await importShared("vue");
  const _sfc_main$1 = _defineComponent$1({
    __name: "MainComponent",
    setup(__props) {
      const { current, places } = useMap();
      return (_ctx, _cache) => {
        return _openBlock$1(), _createBlock$1(_sfc_main$2, {
          modelValue: _unref(current),
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _isRef(current) ? current.value = $event : null),
          disabled: true,
          places: _unref(places)
        }, null, 8, [
          "modelValue",
          "places"
        ]);
      };
    }
  });
  const { defineComponent: _defineComponent } = await importShared("vue");
  const { openBlock: _openBlock, createBlock: _createBlock } = await importShared("vue");
  _sfc_main = _defineComponent({
    __name: "Content",
    props: {
      parentId: String
    },
    setup(__props) {
      const props = __props;
      console.log("Location plugin info content loaded: ", props.parentId);
      mapProvider(props.parentId ?? "test");
      return (_ctx, _cache) => {
        return _openBlock(), _createBlock(_sfc_main$1);
      };
    }
  });
});
export {
  _sfc_main as _,
  __tla
};
