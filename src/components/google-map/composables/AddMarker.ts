/* eslint-disable no-undef */

import mapIconMapping from '@/mixins/mapIconMapping';
import { brxmFeature } from '@/types/types';

const mapGraphic = '<svg width="36" height="41" viewBox="0 0 36 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 1C27.3888 1 35 8.61116 35 18C35 21.2018 34.304 23.8695 32.7432 26.4014C31.2002 28.9041 28.844 31.2202 25.6221 33.7822L25.6025 33.7988L25.5811 33.8135L18 39.2285L10.4189 33.8135L10.3975 33.7988L10.3779 33.7822C7.15645 31.2202 4.79987 28.9041 3.25684 26.4014C1.69596 23.8696 1 21.2017 1 18C1 8.61116 8.61116 1 18 1Z" fill="currentColor" stroke="white" stroke-width="2"/></svg>';

export default function addMarkers(map: google.maps.Map, feature: brxmFeature) {
    const mapPin = document.createElement('div');
    mapPin.classList.add('vs-google-map__map-pin');
    mapPin.setAttribute('tabindex', '0');
    mapPin.innerHTML = mapGraphic;

    if (feature.geometry.type === 'Point') {
        if (feature.properties.category?.id) {
            mapPin.classList.add(`vs-google-map__map-pin--${feature.properties.category.id}`);
            const mapPinIcon = document.createElement('i');
            let iconClass = (mapIconMapping.methods.getIconDetails(feature.properties.category.id).name).split(' ');

            mapPinIcon.classList.add(
                'vs-google-map__map-pin-icon',
            );

            // Fallback to a star icon should none be available
            if (iconClass.length === 1 && iconClass[0] === '') iconClass = ['fa-solid', 'fa-star'];

            iconClass.forEach((className) => {
                mapPinIcon.classList.add(className);
            });

            mapPin.appendChild(mapPinIcon);
        } else if (feature.properties.stopCount) {
            const mapPinNumber = document.createElement('span');
            mapPinNumber.classList.add('vs-google-map__map-pin-number');
            mapPinNumber.textContent = feature.properties.stopCount.toString();
            mapPin.appendChild(mapPinNumber);
        }
    };

    const marker = new google.maps.marker.AdvancedMarkerElement({
        content: mapPin,
        gmpClickable: true,
        map,
        position: {
            lat: feature.geometry.coordinates[1],
            lng: feature.geometry.coordinates[0],
        },
        title: feature.properties.title,
    });

    const originalZIndex = marker.zIndex || 1;

    mapPin.addEventListener('mouseenter', () => {
        marker.zIndex = 9999;
    });

    marker.addEventListener('focusin', () => {
        marker.zIndex = 9999;
    });

    mapPin.addEventListener('mouseleave', () => {
        marker.zIndex = originalZIndex;
    });

    marker.addEventListener('focusout', () => {
        marker.zIndex = originalZIndex;
    });

    return marker;
};
