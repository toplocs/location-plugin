/**
 * Main plugin entry point
 * This file defines the plugin configuration and exports it for use in TopLocs
 */

interface BasePluginConfig {
  id: string;
  name: string;
  url: string;
  version?: string;
  description?: string;
  author?: string;
  slots: Array<PluginSlot>;
}

interface PluginSlot {
  entity?: string;
  page?: string;
  slot: string;
  component: string;
}

const pluginConfig: BasePluginConfig = {
  id: 'location_plugin',
  name: 'Location',
  url: 'https://toplocs.github.io/location-plugin/assets/plugin.js',
  version: '1.0.0',
  description: 'Share and organize locations within TopLocs spheres',
  author: 'TopLocs Team',
  slots: [
    { entity: 'Topic', page: 'Info', slot: 'Content', component: 'MainView' },
    { entity: 'Topic', page: 'Settings', slot: 'Content', component: 'SettingsView' },
  ]
};

export default pluginConfig;
