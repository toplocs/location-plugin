const baseUrl = window.location.origin + window.location.pathname.replace(/\/[^/]*$/, "");
const pluginConfig = {
  id: "location_plugin",
  name: "Location",
  url: `${baseUrl}/plugin.js`,
  version: "1.0.0",
  description: "Share and organize locations within TopLocs spheres",
  author: "TopLocs Team",
  slots: [
    { entity: "Location", page: "Info", slot: "Content", component: "InfoContent" },
    { entity: "Location", page: "Settings", slot: "Content", component: "SettingsContent" }
  ]
};
export {
  pluginConfig as default
};
