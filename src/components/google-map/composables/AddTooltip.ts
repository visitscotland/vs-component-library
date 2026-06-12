// If editing, read this first:
// https://developers.google.com/maps/documentation/javascript/reference/overlay-view

import { brxmFeatureProperties } from '@/types/types';

/* eslint-disable no-undef */
/// <reference types='google.maps' />

export default function createTooltip(mapsLibrary: google.maps.MapsLibrary) {
    return class Tooltip extends mapsLibrary.OverlayView {
        private map: google.maps.Map;

        private location: google.maps.LatLng;

        private properties: brxmFeatureProperties;

        private isMarker: boolean;

        private tooltipContainer?: HTMLDivElement;

        private tooltipArrow?: HTMLDivElement;

        constructor(
            map: google.maps.Map,
            location: google.maps.LatLng,
            properties: brxmFeatureProperties,
            isMarker: boolean = false,
        ) {
            super();

            this.map = map;
            this.location = location;
            this.properties = properties;
            this.isMarker = isMarker;
        };

        onAdd() {
            this.tooltipContainer = document.createElement('div');
            this.tooltipContainer.classList.add('vs-google-map__tooltip');

            const tooltipContent = document.createElement('div');
            tooltipContent.classList.add('vs-google-map__tooltip-content');

            const tooltipText = document.createElement('span');
            tooltipText.innerHTML = `${this.properties.title}`;

            tooltipContent.appendChild(tooltipText);

            this.tooltipContainer.appendChild(tooltipContent);

            this.tooltipArrow = document.createElement('div');
            this.tooltipArrow.classList.add('vs-google-map__tooltip-arrow');

            this.tooltipContainer.appendChild(this.tooltipArrow);

            this.tooltipContainer.style.position = 'absolute';
            this.tooltipContainer.style.zIndex = '9999';

            const panes = this.getPanes();
            panes?.overlayMouseTarget.appendChild(this.tooltipContainer);

            this.hide();
        };

        onRemove() {
            if (this.tooltipContainer?.parentElement) {
                this.tooltipContainer.parentElement.removeChild(this.tooltipContainer);
            };
        };

        draw() {
            const tooltipProjection = this.getProjection().fromLatLngToDivPixel(
                this.location,
            );

            if (this.tooltipContainer) {
                const tooltipWidth = this.tooltipContainer.offsetWidth;
                const tooltipHeight = this.tooltipContainer.offsetHeight;

                this.tooltipContainer.style.left = `${tooltipProjection!.x - (tooltipWidth / 2)}px`;

                if (this.isMarker) {
                    this.tooltipContainer.style.top = `${tooltipProjection!.y - 100}px`;
                } else {
                    this.tooltipContainer.style.top = `${tooltipProjection!.y - tooltipHeight}px`;
                };
            };
        };

        toggleDOM() {
            if (this.getMap()) {
                this.setMap(null);
            } else {
                this.setMap(this.map);
            };
        }

        show() {
            if (this.tooltipContainer) {
                this.tooltipContainer.style.visibility = 'visible';
            };
        }

        hide() {
            if (this.tooltipContainer) {
                this.tooltipContainer.style.visibility = 'hidden';
            };
        }
    };
};
