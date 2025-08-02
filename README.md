# Location Plugin for TopLocs

## Status: Plugin SDK Integration ✅
- **P2P Migration**: ⭐⭐⭐⭐⭐ Fully migrated to Gun.js
- **Plugin SDK**: ⭐⭐⭐⭐⭐ Fully integrated with @toplocs/plugin-sdk
- **Last Updated**: August 2025
- **Maturity**: Active Development

## Overview
The Location Plugin adds geospatial features to TopLocs, enabling users to share locations, create location-based communities, and discover nearby peers through interactive maps. It's built as a Module Federation plugin that integrates seamlessly with the TopLocs ecosystem.

## Architecture

### Current State (Pure P2P)
```
Browser Client → Gun.js → P2P Network
       ↓                      ↓
  Google Maps API        Gun Relay
       ↓                      ↓
  Vue Components      Decentralized Storage
```

### Technology Stack
- **Frontend**: Vue 3, TypeScript, Tailwind CSS
- **Plugin Framework**: @toplocs/plugin-sdk for standardized plugin development
- **Maps**: Google Maps (via vue3-google-map)
- **P2P Database**: Gun.js for all data storage
- **Build**: Vite with Module Federation
- **UI Components**: Custom component library with Tailwind

## Features
- **Interactive Google Maps** with 3D view and custom markers
- **Click-to-place markers** for easy location setting
- **Real-time location updates** via Gun.js P2P network
- **Browser geolocation API** integration
- **Relations system** to connect locations with spheres/topics
- **Info windows** with navigation to associated spheres
- **Persistent location storage** in decentralized Gun.js database

## Gun.js Integration
```javascript
// Location data storage
gun.get(`location-plugin/${instanceId}`).put({
  lat: number,
  lng: number,
  zoom: number
})

// Locations registry
gun.get('locations').set(locationNode)

// Relations system (connect locations to spheres)
gun.get(instanceId).get('relations').put({
  one: sphereId,
  type: 'in'
})

// Real-time updates
gun.get(`location-plugin/${instanceId}`).on(data => {
  // Update map view
})
```

## Development

### Prerequisites
- Node.js (v16+)
- pnpm package manager
- Google Maps API key

### Setup
```bash
# Install dependencies
pnpm install

# Copy environment file
cp .env.default .env

# Add your Google Maps API key to .env
# VITE_MAPS_API_KEY=your_api_key_here

# Run development server
pnpm dev

# Build for production
pnpm build
```

### Environment Variables
Create a `.env` file based on `.env.default`:
- `VITE_SERVER_URL`: TopLocs server URL (default: http://localhost:3000)
- `VITE_MAPS_API_KEY`: Your Google Maps API key (required)

### Available Scripts
- `pnpm dev`: Start development server with Plugin SDK environment
- `pnpm build`: Build for production with module federation
- `pnpm preview`: Preview built plugin with federation server on port 3007
- `pnpm test`: Run tests with Vitest
- `pnpm type-check`: Run TypeScript type checking
- `pnpm lint`: Run ESLint with auto-fix

### Module Federation Configuration
The plugin exposes components via Module Federation:
- `./PluginConfig`: Plugin configuration and metadata
- `./InfoContent`: Map component for Info content slots
- `./SettingsContent`: Settings form for configuration

## Project Structure
```
location-plugin/
├── index.ts              # Plugin development environment setup
├── src/
│   ├── components/        # Vue components
│   │   ├── common/       # Reusable UI components
│   │   ├── MainComponent.vue # Map display component
│   │   └── MapComponent.vue  # Google Maps integration
│   ├── composables/      # Vue composables
│   │   └── mapProvider.ts # Map state management with provide/inject
│   ├── services/         # Service layer
│   │   └── gun.ts        # Gun.js integration
│   ├── views/            # Plugin slot components
│   │   ├── info/         # Info page components
│   │   │   └── Content.vue # Map component for Info Content slot
│   │   └── settings/     # Settings page components
│   │       └── Content.vue # Settings form for Settings Content slot
│   └── index.ts          # Plugin configuration with @toplocs/plugin-sdk
├── public/               # Static assets
├── vite.config.ts        # Vite + Module Federation config
└── package.json          # Dependencies and scripts
```

## Integration with TopLocs
The plugin integrates with TopLocs through:
1. **@toplocs/plugin-sdk**: Standardized plugin development framework
2. **Module Federation**: Dynamically loaded at runtime via federation
3. **Gun.js Data Layer**: Shares the same P2P database
4. **Plugin Slots**: Defines Content slots for Topic and Location entities
5. **Shared Dependencies**: Vue 3 and Tailwind CSS

## Plugin SDK Integration ✅
The plugin is fully integrated with @toplocs/plugin-sdk:
- ✅ Uses BasePluginConfig type for standardized configuration
- ✅ Implements createPluginDevelopmentEnvironment for testing
- ✅ Proper component slot mapping (InfoContent, SettingsContent)
- ✅ Development and preview modes with module federation
- ✅ Clean component architecture following SDK patterns

## Known Limitations
- **Google Maps Dependency**: Requires API key and internet connection
- **No Offline Support**: Maps require online access
- **Limited Privacy**: Location data not yet encrypted in Gun.js
- **No Geocoding**: Address search not implemented
- **Basic Error Handling**: Needs improvement for production use

## Future Enhancements
1. **Privacy & Security**
   - Implement Gun SEA encryption for location data
   - Add location precision controls (city/area/exact)
   - Temporary location sharing with expiration

2. **Map Alternatives**
   - Consider OpenStreetMap for offline support
   - Client-side geocoding capabilities
   - Custom map tiles for branded experience

3. **Features**
   - Location-based notifications
   - Proximity detection between peers
   - Location history and tracks
   - Geofencing for community boundaries

## Recent Changes (ai-powered branch)
This branch includes a complete restructuring to match the link-plugin architecture:

### Major Updates
- **Plugin SDK Integration**: Full migration to @toplocs/plugin-sdk framework
- **Component Restructuring**: Organized views into info/ and settings/ directories
- **Module Federation**: Updated to expose InfoContent and SettingsContent
- **Development Environment**: Added SDK-based development setup with createPluginDevelopmentEnvironment
- **Build Configuration**: Updated Vite config for proper federation and component exposure
- **Provider Context**: Fixed mapProvider setup for proper Vue provide/inject pattern

### Architecture Changes
```
Old Structure:                New Structure:
src/views/MainView.vue    →   src/views/info/Content.vue
src/views/SettingsView.vue →  src/views/settings/Content.vue
Direct federation setup   →   SDK-based development environment
Manual type definitions   →   @toplocs/plugin-sdk types
```

## Contributing
Contributions are welcome! Priority areas:
- ✅ ~~Migration to @toplocs/plugin-sdk~~ (Completed)
- Privacy enhancements with Gun SEA
- Improved error handling and loading states
- Test coverage implementation
- OpenStreetMap integration

## Related Documentation
- [TopLocs Plugin Development Guide](https://github.com/toplocs/tribelike/blob/main/docs/plugin-development.md)
- [TopLocs Architecture Overview](https://github.com/toplocs/tribelike/blob/main/docs/architecture.md)

## License
MIT License - See the main TopLocs project for details.
