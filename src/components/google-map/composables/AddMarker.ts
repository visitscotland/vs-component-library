/* eslint-disable no-undef */

import { brxmFeature } from '@/types/types';

export default function addMarkers(map: google.maps.Map, markerData: brxmFeature) {
    if (markerData.geometry.type === 'Point') {
        const mapPin = document.createElement('div');
        mapPin.classList.add('vs-google-map__map-pin');

        const mapPinIcon = document.createElement('i');
        mapPinIcon.classList.add(
            'fa-solid',
            'fa-star',
            'vs-google-map__map-pin-icon',
        );
        mapPin.appendChild(mapPinIcon);

        // const mapPinNumber = document.createElement('span');
        // mapPinNumber.classList.add('vs-google-map__map-pin-number');
        // mapPinNumber.textContent = '99';
        // mapPin.appendChild(mapPinNumber);

        return new google.maps.marker.AdvancedMarkerElement({
            content: mapPin,
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
