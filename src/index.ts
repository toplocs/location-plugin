/**
 * Main plugin entry point
 * This file defines the plugin configuration and exports it for use in TopLocs
 */

import type { BasePluginConfig } from '@toplocs/plugin-sdk'

const baseUrl = window.location.origin + window.location.pathname.replace(/\/[^/]*$/, '')

const pluginConfig: BasePluginConfig = {
  id: 'location_plugin',
  name: 'Location',
  url: `${baseUrl}/plugin.js`,
  version: '1.0.0',
  description: 'Share and organize locations within TopLocs spheres',
  author: 'TopLocs Team',
  slots: [
    { entity: 'Topic', page: 'Info', slot: 'Content', component: 'InfoContent' },
    { entity: 'Topic', page: 'Settings', slot: 'Content', component: 'SettingsContent' },
    { entity: 'Location', page: 'Info', slot: 'Content', component: 'InfoContent' },
    { entity: 'Location', page: 'Settings', slot: 'Content', component: 'SettingsContent' }
  ]
};

export default pluginConfig;
