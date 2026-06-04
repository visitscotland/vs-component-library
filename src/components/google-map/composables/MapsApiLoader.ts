/* eslint-disable no-undef */
/// <reference types="google.maps" />

import type {
    brxmFeature,
    LatLngBounds,
    LatLngObject,
    MapOptions,
} from '@/types/types';

import {
    importLibrary,
    setOptions,
} from '@googlemaps/js-api-loader';

const FALLBACK_SCOTLAND_BOUNDS: LatLngBounds = {
    north: 60.9,
    south: 54.6,
    west: -7.7,
    east: -0.7,
};

const INITIAL_SCOTLAND_VIEW_BOUNDS: LatLngBounds = {
    north: 60.0,
    south: 54.64,
    west: -7.65,
    east: -1.4,
};

async function googleMapsLoader(apiKey: string) {
    setOptions({
        key: apiKey,
        v: 'quarterly',
        libraries: ['maps', 'places', 'marker', 'core', 'geometry'],
        region: 'GB',
        language: 'en',
    });
}

async function initialiseMap(
    mapElement: HTMLElement,
    options: {
        center: LatLngObject,
        zoom: number,
        mapId: string,
        features: MapOptions,
        markers: brxmFeature[],
    },
) {
    const { Map } = await importLibrary('maps');
    await google.maps.importLibrary('marker') as google.maps.MarkerLibrary;

    try {
        const map = new Map(mapElement, {
            center: options.center,
            zoom: options.zoom,
            mapId: options.mapId,
            clickableIcons: options.features.clickableIcons,
            gestureHandling: options.features.gestureHandling,
            isFractionalZoomEnabled: options.features.isFractionalZoomEnabled,
            renderingType: options.features.renderingTypeVector
                // eslint-disable-next-line no-undef
                ? google.maps.RenderingType.VECTOR
                // eslint-disable-next-line no-undef
                : google.maps.RenderingType.RASTER,
            restriction: {
                latLngBounds: options.features.boundsData || FALLBACK_SCOTLAND_BOUNDS,
            },
            disableDefaultUI: true,
            keyboardShortcuts: true,
        });

        google.maps.event.addListenerOnce(map, 'idle', () => {
            if (options.features.initialViewIsScotland) {
                map.fitBounds(INITIAL_SCOTLAND_VIEW_BOUNDS);
            }
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
