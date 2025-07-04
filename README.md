# Location Plugin for TopLocs

## Status: Hybrid Architecture (Gun.js + Backend)
- **P2P Migration**: ⭐⭐ Gun.js integrated, no gun branch
- **Last Updated**: June 2025 (most recent!)
- **Maturity**: Active Development

## Overview
The Location Plugin adds geospatial features to TopLocs, allowing users to share locations, create location-based communities, and discover nearby peers through interactive maps.

## Architecture

### Current State (Hybrid)
```
Browser Client → Gun.js → P2P Network
       ↓                      ↓
  Google Maps API        Gun Relay
       ↓                      ↓
   Express API ← → Server with Prisma
       ↓
   PostgreSQL
```

### Technology Stack
- **Frontend**: Vue 3, TypeScript, Tailwind CSS
- **Maps**: Google Maps integration
- **P2P**: Gun.js (client-side)
- **Backend**: Express.js, Prisma ORM, PostgreSQL
- **Build**: Vite, Module Federation

## Features
- Interactive map integration
- Location sharing and discovery
- Geospatial search capabilities
- Location-based community spheres
- Real-time location updates (via Gun.js)
- Privacy-controlled location sharing

## Gun.js Integration
```javascript
// Location data in Gun
gun.get('locations').get(locationId)

// Real-time position updates
gun.get('user').get(userId).get('location').on(data => {
  // Update map marker
})

// Location-based spheres
gun.get('spheres').get('location').get(locationId)
```

## Development

### Setup
```bash
# Install dependencies
pnpm install

# Development (requires Google Maps API key)
VITE_GOOGLE_MAPS_API_KEY=your_key pnpm dev

# Build plugin
pnpm build
```

### Environment Variables
- `VITE_GOOGLE_MAPS_API_KEY`: Required for Google Maps integration

### Module Federation Exposes
- `./Main`: Main location management interface
- `./Settings`: Location plugin settings
- `./LocationView`: Location view component
- `./LocationPicker`: Location selection component
- `./LocationMap`: Map display component

## Migration Status to Pure P2P
- ✅ Gun.js for real-time updates
- ✅ Client-side location handling
- ❌ Backend for location storage
- ❌ Requires API keys (Google Maps)
- ❌ Server-side geocoding

## Known Issues
- Dual storage (Gun.js + PostgreSQL)
- Google Maps API key management
- Privacy concerns with location sharing
- Backend dependency for storage

## Future: Pure P2P Architecture
1. Replace PostgreSQL with Gun.js only
2. Client-side geocoding (OSM Nominatim?)
3. Consider OpenStreetMap instead of Google Maps
4. Encrypted location sharing via Gun SEA
5. Peer-to-peer proximity detection

## Privacy Considerations
- Location data should be encrypted
- User control over location precision
- Opt-in location sharing
- Temporary location shares
- No persistent tracking

## Contributing
This plugin needs help migrating to pure P2P architecture. Contributions welcome for:
- Removing backend dependencies
- Implementing client-side geocoding
- Privacy enhancements
- OpenStreetMap integration

## Related Documentation
- [TopLocs Plugin Development Guide](https://github.com/toplocs/tribelike/blob/main/docs/plugin-development.md)
- [TopLocs Architecture Overview](https://github.com/toplocs/tribelike/blob/main/docs/architecture.md)

## License
MIT License - See the main TopLocs project for details.
