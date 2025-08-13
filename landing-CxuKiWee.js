import { n as nt, __tla as __tla_0 } from "./style-DB1Y1Nbs.js";
import { importShared, __tla as __tla_1 } from "./__federation_fn_import-xDAQhvQ6.js";
import pluginConfig from "./__federation_expose_PluginConfig-BkeHND2p.js";
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
  })()
]).then(async () => {
  const { defineComponent: _defineComponent } = await importShared("vue");
  const { unref: _unref, openBlock: _openBlock, createBlock: _createBlock } = await importShared("vue");
  const about = `
The Location Plugin adds powerful geospatial capabilities to TopLocs, enabling communities to organize around physical locations. Built with Vue3 Google Maps integration and Gun.js for P2P sync, it brings location-aware features to spheres while maintaining privacy and decentralization.
`;
  const _sfc_main = _defineComponent({
    __name: "InfoPage",
    setup(__props) {
      const features = [
        {
          icon: "\u{1F5FA}\uFE0F",
          title: "Interactive Maps",
          description: "Visualize community locations with interactive maps powered by Google Maps"
        },
        {
          icon: "\u{1F4CD}",
          title: "Location Tagging",
          description: "Tag spheres, topics, and events with specific locations for geographic organization"
        },
        {
          icon: "\u{1F50D}",
          title: "Proximity Discovery",
          description: "Find nearby communities and activities based on your location"
        },
        {
          icon: "\u{1F510}",
          title: "Privacy Controls",
          description: "Share locations with granular control - exact location, city-level, or country only"
        },
        {
          icon: "\u{1F504}",
          title: "Real-time Sync",
          description: "Location data syncs instantly across all sphere members via Gun.js"
        },
        {
          icon: "\u2699\uFE0F",
          title: "Flexible Settings",
          description: "Configure location sharing preferences at both user and sphere levels"
        }
      ];
      const baseUrl = window.location.origin + window.location.pathname.replace(/\/[^/]*$/, "");
      const isDevelopment = window.location.hostname === "localhost";
      const endpoints = {
        plugin: `${baseUrl}/assets/plugin.js`,
        landing: baseUrl,
        demo: "https://toplocs.github.io/tribelike/"
      };
      const development = {
        stack: [
          "Vue 3",
          "TypeScript",
          "Vue3 Google Maps",
          "Gun.js",
          "Tailwind CSS"
        ],
        setup: `pnpm install && pnpm dev`,
        urls: [
          {
            label: "GitHub Repository",
            url: "https://github.com/toplocs/location-plugin"
          },
          {
            label: isDevelopment ? "Local Development" : "Plugin Landing Page",
            url: baseUrl
          }
        ]
      };
      const slotDescriptions = {
        "Topic \u2192 Info \u2192 Content": "MainView: Map display showing location-tagged content",
        "Topic \u2192 Info \u2192 Sidebar": "SidebarView: Location-based filters and quick actions",
        "Topic \u2192 Settings \u2192 Content": "SettingsView: Location privacy and sharing preferences",
        "Location \u2192 Info \u2192 Content": "MainView: Primary location-focused view",
        "Location \u2192 Info \u2192 Sidebar": "SidebarView: Nearby activities and communities",
        "Location \u2192 Settings \u2192 Content": "SettingsView: Location-specific configuration"
      };
      return (_ctx, _cache) => {
        return _openBlock(), _createBlock(_unref(nt), {
          "plugin-config": _unref(pluginConfig),
          icon: "\u{1F4CD}",
          about,
          features,
          endpoints,
          development,
          "slot-descriptions": slotDescriptions
        }, null, 8, [
          "plugin-config"
        ]);
      };
    }
  });
  const { createApp } = await importShared("vue");
  createApp(_sfc_main).mount("#app");
});
