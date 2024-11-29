/**
 * @fileoverview Map Component
 * @description The map component of the website.
 */

import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';

// Dynamically load MapContainer component, disabling SSR
export default dynamic(
  () =>
    import('react-leaflet').then(
      ({ MapContainer, TileLayer, Marker, Popup }) => {
        return function Map() {
          // Ensure map renders only on the client side
          if (typeof window === 'undefined') {
            return null;
          }

          // Import Leaflet and create a custom icon
          const L = require('leaflet');
          const customIcon = new L.Icon({
            iconUrl: '/images/leaflet/marker-icon.png', // Custom icon path
          });

          return (
            <MapContainer
              center={[34.141, -118.15753]} // Center map at the specified coordinates
              zoom={16} // Set the zoom level
              style={{ height: '400px', width: '100%', zIndex: 0 }} // Style for map container
            >
              <TileLayer
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' // OpenStreetMap tile layer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={[34.1416, -118.1576]} icon={customIcon}>
                {' '}
                // Marker with custom icon
                <Popup>Maranatha High School - Tile Lab</Popup> // Popup content
              </Marker>
            </MapContainer>
          );
        };
      },
    ),
  { ssr: false }, // Disable SSR for this component
);
