/* eslint-disable no-undef */

import { brxmFeature } from '@/types/types';

export default function addMarkers(map: google.maps.Map, markerData: brxmFeature) {
    if (markerData.geometry.type === 'Point') {
        return new google.maps.marker.AdvancedMarkerElement({
            map,
            position: {
                lat: markerData.geometry.coordinates[1],
                lng: markerData.geometry.coordinates[0],
            },
            title: markerData.properties.title,
        });
    };

    return undefined;
};
