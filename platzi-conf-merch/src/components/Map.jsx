import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({ key, data }) => {
    const { lat, lng } = data;

    const mapStyles = {
        height: '50vh',
        width: '100%',
    }

    const defaultCenter = {
        lat,
        lng,
    }

    return (
        <LoadScript googleMapsApiKey={key}>
            <GoogleMap mapContainerStyle={mapStyles} zoom={9} center={defaultCenter}>
                <Marker position={defaultCenter} />
            </GoogleMap>
        </LoadScript>
    );
}

export default Map;