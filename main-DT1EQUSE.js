import { t as tt, __tla as __tla_0 } from "./style-DB1Y1Nbs.js";
import pluginConfig from "./__federation_expose_PluginConfig-HtL14Pxg.js";
import { _ as _sfc_main$1, __tla as __tla_1 } from "./Content.vue_vue_type_script_setup_true_lang-CM391YxC.js";
import { _ as _sfc_main, __tla as __tla_2 } from "./Content.vue_vue_type_script_setup_true_lang-DtSmRqSq.js";
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
  })()
]).then(async () => {
  const devConfig = {
    pluginConfig,
    components: {
      InfoContent: _sfc_main$1,
      SettingsContent: _sfc_main
    }
  };
  const app = tt(devConfig);
  app.mount("#plugin-dev");
});
