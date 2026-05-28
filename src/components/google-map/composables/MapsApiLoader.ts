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

import addMarkers from './AddMarker';

const FALLBACK_SCOTLAND_BOUNDS: LatLngBounds = {
    north: 61.0,
    south: 54.6,
    west: -8.7,
    east: 0.3,
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

        const markers: google.maps.marker.AdvancedMarkerElement[] = [];

        if (options.markers) {
            options.markers.forEach((place, key) => {
                markers[key] = addMarkers(map, place);
            });
        };

        console.log(markers);

        return map;
    } catch (error) {
        return error;
    };
}

export {
    googleMapsLoader as mapLoader,
    initialiseMap as initMap,
};
