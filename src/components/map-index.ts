/* eslint-disable vue/max-len */
/* Export elements */

/*
 * The map components, with their dependence on mapboxgl, are extremely heavyweight
 * and add a lot of complexity to the bundle when they are only needed in certain
 * circumstances.
 *
 * They should be exported separately so they can be consumed only when necessary.
 */

export { default as VsMap } from './map/Map.vue';
export { default as VsMapMarker } from './map/components/MapMarker.vue';
export { default as VsMapMarkerIcon } from './map-marker-icon/MapMarkerIcon.vue';
export { default as VsMapWithSidebar } from './map-with-sidebar/MapWithSidebar.vue';
