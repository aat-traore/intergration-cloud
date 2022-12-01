import React from 'react'
import { GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
  position: 'center',
};

const center = {
    /**
     * 14.697004949544116, -17.456834126243503
     * 14.69691159978684, -17.456930279759323
     */
  lat:  14.697004949544116,
  lng: -17.456834126243503
};
const markerCoors = {
  lat: 14.69691159978684,
  lng: -17.456930279759323,
};
function MyComponent() {
    const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: "AIzaSyCS5K4bETZp6tyPmw-jRAIt1v4kwGojKvw"
    })
    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
      // This is just an example of getting and using the map instance!!! don't just blindly copy!
      const bounds = new window.google.maps.LatLngBounds(center);
      map.fitBounds(bounds);
  
      setMap(map)
    }, [])
  
    const onUnmount = React.useCallback(function callback(map) {
      setMap(null)
    }, [])
    return isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <MarkerF position={markerCoors}/>
        </GoogleMap>
    ) : <></>
  }
  
  export default React.memo(MyComponent)