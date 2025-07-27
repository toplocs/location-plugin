const pluginConfig = {
  id: "link_plugin",
  name: "Link",
  url: "http://localhost:3006/assets/plugin.js",
  version: "1.0.0",
  description: "Share and organize links within TopLocs spheres",
  author: "TopLocs Team",
  slots: [
    { entity: "Topic", page: "Info", slot: "Sidebar", component: "SidebarView" },
    { entity: "Topic", page: "Settings", slot: "Content", component: "SettingsView" },
    { entity: "Location", page: "Info", slot: "Sidebar", component: "SidebarView" },
    { entity: "Location", page: "Settings", slot: "Content", component: "SettingsView" }
  ]
};
export {
  pluginConfig as default
};
