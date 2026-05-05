/// <reference types="google.maps" />

import {
    importLibrary,
    setOptions,
} from '@googlemaps/js-api-loader';

async function googleMapsLoader(apiKey: string) {
    setOptions({
        key: apiKey,
        v: 'quarterly',
        libraries: ['maps', 'places', 'marker', 'core', 'geometry'],
        region: 'GB',
        language: 'en',
    });

    await importLibrary('maps');
}

async function initialiseMap(
    mapElement: HTMLElement,
) {
    const { Map } = await importLibrary('maps');

    const map = new Map(mapElement, {
        center: {
            lat: 57.81,
            lng: -5.51,
        },
        zoom: 6,
    });

    return map;
}

export {
    googleMapsLoader as mapLoader,
    initialiseMap as initMap,
};
