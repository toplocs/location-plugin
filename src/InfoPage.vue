<template>
  <PluginInfoPage
    :plugin-config="pluginConfig"
    icon="📍"
    :about="about"
    :features="features"
    :endpoints="endpoints"
    :development="development"
    :slot-descriptions="slotDescriptions"
  />
</template>

<script setup lang="ts">
import { PluginInfoPage } from '@toplocs/plugin-sdk'
import pluginConfig from './index'

const about = `
The Location Plugin adds powerful geospatial capabilities to TopLocs, enabling communities to organize around physical locations. Built with Vue3 Google Maps integration and Gun.js for P2P sync, it brings location-aware features to spheres while maintaining privacy and decentralization.
`

const features = [
  {
    icon: '🗺️',
    title: 'Interactive Maps',
    description: 'Visualize community locations with interactive maps powered by Google Maps'
  },
  {
    icon: '📍',
    title: 'Location Tagging',
    description: 'Tag spheres, topics, and events with specific locations for geographic organization'
  },
  {
    icon: '🔍',
    title: 'Proximity Discovery',
    description: 'Find nearby communities and activities based on your location'
  },
  {
    icon: '🔐',
    title: 'Privacy Controls',
    description: 'Share locations with granular control - exact location, city-level, or country only'
  },
  {
    icon: '🔄',
    title: 'Real-time Sync',
    description: 'Location data syncs instantly across all sphere members via Gun.js'
  },
  {
    icon: '⚙️',
    title: 'Flexible Settings',
    description: 'Configure location sharing preferences at both user and sphere levels'
  }
]

// Compute base URL from current location
const baseUrl = window.location.origin + window.location.pathname.replace(/\/[^/]*$/, '')
const isDevelopment = window.location.hostname === 'localhost'

const endpoints = {
  plugin: `${baseUrl}/plugin.js`,
  landing: baseUrl,
  demo: 'https://toplocs.github.io/tribelike/'
}

const development = {
  stack: ['Vue 3', 'TypeScript', 'Vue3 Google Maps', 'Gun.js', 'Tailwind CSS'],
  setup: `pnpm install && pnpm dev`,
  urls: [
    { label: 'GitHub Repository', url: 'https://github.com/toplocs/location-plugin' },
    { label: isDevelopment ? 'Local Development' : 'Plugin Landing Page', url: baseUrl }
  ]
}

const slotDescriptions = {
  'Topic → Info → Content': 'MainView: Map display showing location-tagged content',
  'Topic → Info → Sidebar': 'SidebarView: Location-based filters and quick actions',
  'Topic → Settings → Content': 'SettingsView: Location privacy and sharing preferences',
  'Location → Info → Content': 'MainView: Primary location-focused view',
  'Location → Info → Sidebar': 'SidebarView: Nearby activities and communities',
  'Location → Settings → Content': 'SettingsView: Location-specific configuration'
}
</script>