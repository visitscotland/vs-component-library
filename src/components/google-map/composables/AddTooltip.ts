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
            this.tooltipContainer = this.createTooltipContainer();

            const tooltipContent = this.createTooltipContent();

            const tooltipText = document.createElement('span');
            tooltipText.innerHTML = `${this.properties.title}`;

            tooltipContent.appendChild(tooltipText);

            this.tooltipContainer.appendChild(tooltipContent);

            const tooltipArrow = this.createTooltipArrow();

            this.tooltipContainer.appendChild(tooltipArrow);

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

        static createTooltipContainer() {
            const tooltipContainer = document.createElement('div');
            tooltipContainer.classList.add('vs-google-map__tooltip');
            tooltipContainer.style.display = 'flex';
            tooltipContainer.style.flexDirection = 'column';
            tooltipContainer.style.alignItems = 'center';
            tooltipContainer.style.filter = 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.25))';
            tooltipContainer.style.pointerEvents = 'none';

            return tooltipContainer;
        }

        static createTooltipContent() {
            const tooltipContent = document.createElement('div');
            tooltipContent.classList.add('vs-google-map__tooltip-content');
            tooltipContent.style.width = 'max-content';
            tooltipContent.style.padding = '0.25em 0.5em';
            tooltipContent.style.fontFamily = '"Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';
            tooltipContent.style.fontSize = '0.875rem';
            tooltipContent.style.borderRadius = '0.5rem';
            tooltipContent.style.background = '#fff';

            return tooltipContent;
        }

        static createTooltipArrow() {
            const tooltipArrow = document.createElement('div');
            tooltipArrow.classList.add('vs-google-map__tooltip-arrow');
            tooltipArrow.style.width = '10px';
            tooltipArrow.style.height = '10px';
            tooltipArrow.style.background = '#fff';
            tooltipArrow.style.transform = 'rotate(45deg)';
            tooltipArrow.style.position = 'relative';
            tooltipArrow.style.top = '-5px';

            return tooltipArrow;
        }
    };
};
