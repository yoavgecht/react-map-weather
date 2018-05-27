import React from 'react';
import { GoogleMapLoader, GoogleMap } from 'react-google-maps';

const Map = (props) => (
    <GoogleMapLoader
        containerElement={ <div style={{height: '100%'}} /> } 
        GoogleMapElement={
            <GoogleMap defaultZoom={12} defaultCenter={{lat: props.lat}} />
        }
        />
        
);

export default Map;
