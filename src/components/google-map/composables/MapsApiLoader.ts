/// <reference types="google.maps" />

import type { LatLngObject, MapOptions } from '@/types/types';
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
    options: {
        center: LatLngObject,
        zoom: number,
        mapId: string,
        features: MapOptions,
    },
) {
    const { Map } = await importLibrary('maps');

    try {
        const map = new Map(mapElement, {
            center: options.center,
            zoom: options.zoom,
            clickableIcons: options.features.clickableIcons,
            gestureHandling: options.features.gestureHandling,
            isFractionalZoomEnabled: options.features.isFractionalZoomEnabled,
            renderingType: options.features.renderingTypeVector
                // eslint-disable-next-line no-undef
                ? google.maps.RenderingType.VECTOR
                // eslint-disable-next-line no-undef
                : google.maps.RenderingType.RASTER,
            restriction: {
                latLngBounds: options.features.boundsData,
            },
            disableDefaultUI: true,
            keyboardShortcuts: true,
        });
        return map;
    } catch (error) {
        return error;
    };
}

export {
    googleMapsLoader as mapLoader,
    initialiseMap as initMap,
};
