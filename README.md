# Location Plugin for TopLocs

## Status: Pure P2P Architecture ✅
- **P2P Migration**: ⭐⭐⭐⭐⭐ Fully migrated to Gun.js
- **Last Updated**: July 2025
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
- `pnpm dev`: Start development server on port 3009
- `pnpm build`: Build for production
- `pnpm lint`: Run ESLint
- `pnpm lint:fix`: Fix ESLint issues
- `pnpm type-check`: Run TypeScript type checking

### Module Federation Configuration
The plugin exposes components via Module Federation:
- `./Main`: Main location view (map display with markers)
- `./Settings`: Settings view (location configuration)

## Project Structure
```
location-plugin/
├── src/
│   ├── components/        # Vue components
│   │   ├── common/       # Reusable UI components
│   │   └── map/          # Map-specific components
│   ├── composables/      # Vue composables
│   │   └── mapProvider.ts # Map state management
│   ├── services/         # Service layer
│   │   └── gunService.ts # Gun.js integration
│   ├── views/            # Main plugin views
│   │   ├── Main.vue      # Map display view
│   │   └── Settings.vue  # Location settings
│   └── index.ts          # Plugin configuration
├── public/               # Static assets
├── vite.config.ts        # Vite + Module Federation config
└── package.json          # Dependencies and scripts
```

## Integration with TopLocs
The plugin integrates with TopLocs through:
1. **Module Federation**: Dynamically loaded at runtime
2. **Gun.js Data Layer**: Shares the same P2P database
3. **Plugin Configuration**: Defines slots for Topic entities
4. **Shared Dependencies**: Vue 3 and Tailwind CSS

## Migration to @toplocs/plugin-sdk
Currently, the plugin uses direct Module Federation configuration. Future plans include:
- [ ] Integrate with @toplocs/plugin-sdk for standardized plugin development
- [ ] Use SDK's development environment for testing
- [ ] Leverage SDK's common utilities and types

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

## Contributing
Contributions are welcome! Priority areas:
- Migration to @toplocs/plugin-sdk
- Privacy enhancements with Gun SEA
- Improved error handling and loading states
- Test coverage implementation
- OpenStreetMap integration

## Related Documentation
- [TopLocs Plugin Development Guide](https://github.com/toplocs/tribelike/blob/main/docs/plugin-development.md)
- [TopLocs Architecture Overview](https://github.com/toplocs/tribelike/blob/main/docs/architecture.md)

## License
MIT License - See the main TopLocs project for details.
