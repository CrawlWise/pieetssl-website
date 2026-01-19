'use client';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

interface MapProps {
  apiKey?: string;
  center?: {
    lat: number;
    lng: number;
  };
  zoom?: number;
  markerPosition?: {
    lat: number;
    lng: number;
  };
  height?: string;
  width?: string;
}

const defaultCenter = {
  lat: 40.678024430036835,
  lng: -73.74478146279718,
};

export default function Map({
  apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  center = defaultCenter,
  zoom = 15,
  markerPosition,
  height = '400px',
  width = '100%',
}: MapProps) {
  const containerStyle: { width: string; height: string } = {
    width,
    height,
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey || '',
  });

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center w-full h-full bg-gray-100">
        <p className="text-gray-600">
          Loading Google Maps...
        </p>
      </div>
    );
  }

  return (
      <div className="relative w-full overflow-hidden">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={zoom}
          options={{
            zoomControl: true,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: true,
          }}
        >
          <Marker position={markerPosition || center} />
          </GoogleMap>
    </div>
  );
}
