// If editing, read this first:
// https://developers.google.com/maps/documentation/javascript/reference/overlay-view

import type { BrxmFeatureProperties } from '@/types/types';
import designTokens from '@/assets/tokens/tokens.json';

/* eslint-disable no-undef */
/// <reference types='google.maps' />

function createTooltipContainer() {
    const tooltipContainer = document.createElement('div');
    tooltipContainer.classList.add('vs-google-map__tooltip');
    tooltipContainer.style.display = 'flex';
    tooltipContainer.style.flexDirection = 'column';
    tooltipContainer.style.alignItems = 'center';
    tooltipContainer.style.filter = 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.25))';
    tooltipContainer.style.pointerEvents = 'none';

    return tooltipContainer;
}

function createTooltipContent() {
    const tooltipContent = document.createElement('div');
    tooltipContent.classList.add('vs-google-map__tooltip-content');
    tooltipContent.style.width = 'max-content';
    tooltipContent.style.padding = `${designTokens['vs-spacer-025']} ${designTokens['vs-spacer-050']}`;
    tooltipContent.style.fontFamily = designTokens['vs-font-family-sans-serif'];
    tooltipContent.style.fontSize = designTokens['vs-font-size-detail-s'];
    tooltipContent.style.borderRadius = designTokens['vs-radius-small'];
    tooltipContent.style.background = designTokens['vs-color-background-inverse'];

    return tooltipContent;
}

function createTooltipArrow() {
    const tooltipArrow = document.createElement('div');
    tooltipArrow.classList.add('vs-google-map__tooltip-arrow');
    tooltipArrow.style.width = '10px';
    tooltipArrow.style.height = '10px';
    tooltipArrow.style.background = designTokens['vs-color-background-inverse'];
    tooltipArrow.style.transform = 'rotate(45deg)';
    tooltipArrow.style.position = 'relative';
    tooltipArrow.style.top = '-5px';

    return tooltipArrow;
}

export default function createTooltip(mapsLibrary: google.maps.MapsLibrary) {
    return class Tooltip extends mapsLibrary.OverlayView {
        private map: google.maps.Map;

        private location: google.maps.LatLng;

        private properties: BrxmFeatureProperties;

        private isMarker: boolean;

        private tooltipContainer?: HTMLDivElement;

        constructor(
            map: google.maps.Map,
            location: google.maps.LatLng,
            properties: BrxmFeatureProperties,
            isMarker: boolean = false,
        ) {
            super();

            this.map = map;
            this.location = location;
            this.properties = properties;
            this.isMarker = isMarker;
        };

        onAdd() {
            this.tooltipContainer = createTooltipContainer();

            const tooltipContent = createTooltipContent();

            const tooltipText = document.createElement('span');
            tooltipText.textContent = `${this.properties.title}`;

            tooltipContent.appendChild(tooltipText);

            this.tooltipContainer.appendChild(tooltipContent);

            const tooltipArrow = createTooltipArrow();

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
    };
};
