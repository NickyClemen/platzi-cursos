import React, { useContext } from 'react';

import Map from '../components/Map';

import AppContext from '../context/AppContext';
import useGoogleAddress from '../hooks/useGoogleAddress';

import '../styles/components/Success.css';

const GOOGLE_MAPS_API_KEY = 'AIzaSyAZkZCnD47r0nRBGiuneN-S2LesXQ5GlWg';

const Success = () => {
    const { state: { buyer } } = useContext(AppContext);
    const location = useGoogleAddress(buyer[0].address, GOOGLE_MAPS_API_KEY);

    return (
        <div className="Success">
            <div className="Success-content">
                <h2>{`${ buyer.name }, gracias por tu compra`}</h2>

                <span>Tu pedido llegara en tres días a tu dirección</span>

                <div className="Success-map">
                    <Map key={GOOGLE_MAPS_API_KEY} data={location} />
                </div>
            </div>
        </div>
    );
}

export default Success;
