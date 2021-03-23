import { useState, useEffect } from 'react';

import axios from 'axios';

const useGoogleAddress = (address, key) => {
    const [map, setMap] = useState({});
    const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${ address }&key=${ key }`;

    useEffect(async () => {
        const { data: { results } } = await axios(API);

        setMap(results[0].geometry.location);
    }, []);

    return map;
}

export default useGoogleAddress;