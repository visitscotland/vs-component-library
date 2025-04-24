<template>
    <div
        class="vs-map"
        data-test="vs-map"
    >
        <div
            v-if="showMapMessage"
            class="vs-map__message"
            :class="showZoomMessage ? '' : 'vs-map__message--with-overlay'"
            data-test="vs-map__message"
        >
            <div class="vs-map__message-box">
                <VsLoading
                    v-if="isLoading"
                    class="vs-map__loading"
                />
                <p class="vs-map__message-text">
                    <template v-if="isLoading">
                        <!-- @slot Message to show when map is loading  -->
                        <slot name="map-loading-text" />
                    </template>
                    <template v-else-if="showInfoMessage">
                        <!-- @slot Generic message slot -->
                        <slot name="info-message" />
                    </template>
                    <template v-else-if="showZoomMessage === 'too-close'">
                        <!-- @slot Message for zoom level too close -->
                        <slot name="zoom-too-close" />
                    </template>
                    <template v-else-if="showZoomMessage === 'too-far'">
                        <!-- @slot Message for zoom level too far -->
                        <slot name="zoom-too-far" />
                    </template>
                </p>
            </div>
        </div>
        <div
            ref="mapboxOuter"
            class="vs-map__map-outer"
        >
            <div
                :id="mapId"
                class="vs-map__map"
                ref="mapbox"
            />
        </div>
        <VsWarning class="vs-map__no-js">
            <!-- @slot Message to show when JS is disabled  -->
            <slot name="no-js" />
        </VsWarning>
    </div>
</template>

<script>
import VsWarning from '@/components/warning/Warning.vue';
import VsLoading from '@/components/loading-spinner/LoadingSpinner.vue';
import osBranding from '@/utils/os-branding';
import { render, h } from 'vue';
import { mapState } from 'pinia';
import useMapStore from '@/stores/map.store';
import mapboxgl from 'mapbox-gl';
import geojsonExtent from '@mapbox/geojson-extent';
import GeoJsonToGpx from '@dwayneparton/geojson-to-gpx';
import VsMapMarker from './components/MapMarker.vue';

let mapStore = null;

/**
 * Renders a MapBox map
 *
 * @displayName Map
 */

export default {
    name: 'VsMap',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsWarning,
        VsLoading,
    },
    props: {
        /**
         * Starting latitude for map view
         */
        overviewMapLatitude: {
            type: String,
            default: '57.81',
        },
        /**
         * Starting longitude for map view
         */
        overviewMapLongitude: {
            type: String,
            default: '-5.51748',
        },
        /**
         * Starting zoom level for map view
         */
        overviewMapZoom: {
            type: String,
            default: '5',
        },
        /**
         * Unique ID for the map
         */
        mapId: {
            type: String,
            required: true,
        },
        /**
         * Whether or not the map is visible
         * used for triggering resize
         */
        isVisible: {
            type: Boolean,
            required: true,
        },
        /**
         * Place data for markers
         */
        places: {
            type: Array,
            required: true,
        },
        /**
         * Category filters array
         */
        filters: {
            type: Array,
            default() {
                return [];
            },
        },
        /**
         * Whether the map should fit to marker bounds
         */
        fitToMarkers: {
            type: Boolean,
            default: false,
        },
        /**
         * Whether the map should show regions polygons
         */
        showPolygons: {
            type: Boolean,
            default: false,
        },
        /**
         * The current selectdd item
         */
        selectedItem: {
            type: Object,
            default: null,
        },
        /**
         * Data to set map bounds
         */
        boundsData: {
            type: Object,
            default: () => {},
        },
        /** If the map should show an info message defined
         * a slot
         */
        showInfoMessage: {
            type: Boolean,
            default: null,
        },
        /**
         * Allows parent component to fire a reset zoom event
        */
        resetZoom: {
            type: Boolean,
            default: false,
        },
        /**
         * Turn popups off on map markers
         */
        showMarkerPopups: {
            type: Boolean,
            default: true,
        },
    },
    emits: [
        'map-ready',
        'setCategory',
        'showDetail',
        'zoom-reset',
    ],
    setup() {
        mapStore = useMapStore();
    },
    data() {
        return {
            isDesktop: false,
            geojsonData: {
                type: 'FeatureCollection',
                features: [],
            },
            polygons: {
                type: 'FeatureCollection',
                features: [],
            },
            multiPolygons: [],
            mapbox: {
                map: null,
                bounds: null,
                rotation: 0,
                config: {
                    container: this.$refs.mapbox,
                    style: 'https://api.visitscotland.com/maps/vector/v1/vts/resources/styles',
                    pitchWithRotate: false,
                    dragRotate: false,
                },
            },
            markers: [],
            popup: null,
            hoveredStateId: null,
            activeStateId: null,
            showMapMessage: true,
            isLoading: true,
            showZoomMessage: null,
        };
    },
    computed: {
        getZoom() {
            if (this.mapbox.map) {
                return this.mapbox.map.getZoom();
            }

            return null;
        },
        ...mapState(useMapStore, {
            activeMarkerPostion(store) {
                if (this.mapbox.map) {
                    return store.activeMarkerPos;
                }
                return null;
            },
            highlightedPlace(store) {
                if (this.mapbox.map) {
                    return store.getHoveredStop(this.mapId);
                }
                return null;
            },
            activePlace(store) {
                if (this.mapbox.map) {
                    return store.getActivePlace(this.mapId);
                }
                return null;
            },
        }),
    },
    watch: {
        isVisible(newVal) {
            if (newVal && this.mapbox.map !== null) {
                setTimeout(() => {
                    this.mapbox.map.resize();
                }, 20);
            }
        },
        places: {
            handler() {
                this.geojsonData.features = [];
                this.initialiseMapFeatures();
                this.initialiseMapMarkers();
            },
            deep: true,
        },
        showPolygons(val) {
            if (val === true) {
                this.showMapPolygons();
            } else {
                this.hideMapPolygons();
            }
        },
        highlightedPlace(feature) {
            if (feature) {
                if (feature.length === 0) {
                    this.removeHoveredPolygon();
                } else if (feature.geometry.type !== 'Point') {
                    this.addHoveredPolygon(feature);
                }
            }
        },
        selectedItem(newVal) {
            if (newVal && newVal.geometry.type !== 'Point') {
                let isPolygon = [];
                isPolygon = this.polygons.features
                    .filter((feature) => feature.properties.id === newVal.properties.id);

                if (isPolygon.length > 0) {
                    this.addActivePolygon(newVal);
                }
            }

            if (!newVal) {
                this.removeActivePolygon();
            }
        },
        activeMarkerPostion(coords) {
            if (!this.checkPointIsVisible(coords)) {
                this.centreMapOnPoint(coords);
            }
        },
        showInfoMessage(newVal) {
            if (newVal) {
                this.showMapMessage = true;
            } else {
                this.showMapMessage = false;
            }
        },
        resetZoom(newVal) {
            if (newVal) {
                this.mapbox.map.fitBounds(this.calculateBoundingBox());
                this.$emit('zoom-reset');

                if (this.showInfoMessage) {
                    this.showMapMessage = true;
                }
            };
        },
    },
    mounted() {
        mapStore.addMapInstance({
            id: this.mapId,
            filters: this.filters,
            places: this.places,
            activePins: this.places,
        });

        this.lazyloadMapComponent();
        this.isTablet = window.innerWidth >= 768;
        window.addEventListener('resize', this.onResize);

        /**
         * Initialise branding options when DOM loads
         */
        window.addEventListener('DOMContentLoaded', () => {
            osBranding.init({
                div: this.mapId,
            });
        });
    },
    methods: {
        /**
         * Adds a mapbox map to the page
         */
        addMap() {
            const boundingBox = this.calculateBoundingBox();

            this.mapbox.config.container = this.$refs.mapbox;
            this.mapbox.map = new mapboxgl.Map({
                container: this.$refs.mapbox,
                style: 'https://api.visitscotland.com/maps/vector/v1/vts/resources/styles',
                bounds: boundingBox,
                maxZoom: 18,
                minZoom: 4,
                trackResize: true,
            });
            this.mapbox.map.scrollZoom.disable();
            this.mapbox.map.on('rotate', () => {
                this.mapbox.rotation = this.mapbox.map.transform.angle;
            });

            this.mapbox.map.resize();

            this.mapbox.map.on('load', () => {
                this.addMapPolygons();
                this.addMapRoutes();
                this.showMapMessage = false;
                this.isLoading = false;
                this.$emit('map-ready', true);
                this.mapbox.map.boxZoom.enable();

                this.downloadRouteAsGpx();
            });

            this.mapbox.map.on('zoomend', () => {
                if (this.mapbox.map.getZoom() === 4) {
                    this.showZoomMessage = 'too-far';
                    this.showMapMessage = true;
                } else if (this.mapbox.map.getZoom() === 18) {
                    this.showZoomMessage = 'too-close';
                    this.showMapMessage = true;
                } else if (!this.showInfoMessage) {
                    this.showZoomMessage = null;
                    this.showMapMessage = false;
                }
            });
        },
        /**
         * Adds mapbox map controls
         */
        addMapControls() {
            const nav = new mapboxgl.NavigationControl();
            this.mapbox.map.addControl(nav, 'top-right');
            this.mapbox.map.addControl(new mapboxgl.FullscreenControl());
        },
        /**
         * Initialise features array for points & polygons
         */
        initialiseMapFeatures() {
            this.places.map((place) => {
                if (typeof place.geometry !== 'undefined') {
                    const coordinateArray = this.getCoordinateArray(place);
                    return this.getMapFeatures(place, coordinateArray);
                }

                if (place.latitude && place.longitude) {
                    return this.getItineraryMapFeatures(place);
                }

                return false;
            });
        },
        /**
         * Returns correct coordinates for points & polygons
         */
        getCoordinateArray(place) {
            if (place.geometry.type === 'Polygon') {
                return [
                    place.geometry.coordinates[0],
                ];
            }

            if (place.geometry.type === 'MultiPolygon') {
                return [
                    place.geometry.coordinates,
                ];
            }

            return [
                place.geometry.coordinates[0],
                place.geometry.coordinates[1],
            ];
        },
        /**
         * Returns object for a map feature
         * including points, polygons or multi-polygons
         */
        getMapFeatures(place, coordinateArray) {
            return this.geojsonData.features.push({
                type: 'Feature',
                geometry: {
                    type: place.geometry.type,
                    coordinates: coordinateArray,
                },
                properties: {
                    title: place.properties.title,
                    imageSrc: place.image,
                    type: typeof place.properties.category !== 'undefined' ? place.properties.category.id : '',
                    id: place.properties.id,
                },
                id: place.properties.id,
            });
        },
        /**
         * Returns object for itinerary points
         */
        getItineraryMapFeatures(place) {
            const stopId = this._uid;

            return this.geojsonData.features.push({
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [
                        parseFloat(place.longitude),
                        parseFloat(place.latitude),
                    ],
                },
                properties: {
                    title: place.title,
                    imageSrc: place.imageSrc,
                    type: 'itinerary-stop',
                    stopCount: place.stopCount,
                    id: stopId,
                },
                id: stopId,
            });
        },
        /**
         * Initialise add map markers
         */
        initialiseMapMarkers() {
            // timeout needed to give the store a chance to load
            // so that watchers update
            let timeout = 0;

            if (this.initialLoad) {
                timeout = 1000;
            }
            setTimeout(() => {
                // Remove any existing markers from the page
                if (this.markers !== null) {
                    for (let i = this.markers.length - 1; i >= 0; i--) {
                        this.markers[i].remove();
                    }
                    this.markers = [];
                }

                // Create new markers for each point
                this.geojsonData.features.forEach((feature) => {
                    if (feature.geometry.type === 'Point') {
                        this.createMapMarker(feature);
                    }
                });
            }, timeout);
        },
        /**
         * Creates a map marker component instance for a point
         * and appends it to the map
         */
        createMapMarker(feature) {
            const markerComponent = h(
                VsMapMarker,
                {
                    feature,
                    mapId: this.mapId,
                    hasPopups: this.showMarkerPopups,
                    onShowDetail: (featureShow) => {
                        this.$emit('showDetail', featureShow);
                    },
                    onSetCategory: (type) => {
                        this.$emit('setCategory', type);
                    },
                },
            );

            const renderer = document.createElement('div');
            this.$refs.mapboxOuter.appendChild(renderer);
            render(markerComponent, renderer);

            if (feature && this.showMarkerPopups) {
                this.addMapPopup(feature);
            }

            const mapboxMarker = new mapboxgl.Marker(renderer.children[0])
                .setLngLat(feature.geometry.coordinates)
                .setPopup(this.popup)
                .addTo(this.mapbox.map);

            this.setupMarkerListeners(mapboxMarker);
            this.markers.push(mapboxMarker);
            renderer.remove();
        },
        /**
         * Adds a layer to the map for a route and renders it
         */
        createMapRoute(feature, title) {
            this.mapbox.map.addSource(`route-${title}`, {
                type: 'geojson',
                data: feature,
            });

            this.mapbox.map.addLayer({
                id: `route-${title}`,
                type: 'line',
                source: `route-${title}`,
                layout: {
                    'line-join': 'round',
                    'line-cap': 'round',
                },
                paint: {
                    'line-color': '#FFA500',
                    'line-width': 8,
                },
            });
        },
        /**
         * Hide all polygons
         */
        hideMapPolygons() {
            this.mapbox.map.setLayoutProperty('regionFills', 'visibility', 'none');
            this.mapbox.map.setLayoutProperty('regionBorders', 'visibility', 'none');
        },
        /**
         * Show all polygons
         */
        showMapPolygons() {
            this.mapbox.map.setLayoutProperty('regionFills', 'visibility', 'visible');
            this.mapbox.map.setLayoutProperty('regionBorders', 'visibility', 'visible');
        },
        /**
         * Add routes from data into the map
         */
        addMapRoutes() {
            this.geojsonData.features.forEach((feature) => {
                if (feature.geometry.type === 'LineString') {
                    this.createMapRoute(feature, feature.properties ? feature.properties.title : '');
                }
            });
        },
        /**
         * Add polygons from data into map
         */
        addMapPolygons() {
            this.geojsonData.features.forEach((feature) => {
                if (feature.geometry.type === 'Polygon') {
                    if (!this.polygons.features.includes(feature.properties.id)) {
                        this.polygons.features.push(feature);
                    }
                } else if (feature.geometry.type === 'MultiPolygon') {
                    if (!this.polygons.features.includes(feature.properties.id)) {
                        this.multiPolygons.push(feature);
                    }
                }
            });

            this.multiPolygons.forEach((poly) => {
                const polyProps = poly.properties;
                poly.geometry.coordinates[0].forEach((coord) => {
                    this.polygons.features.push({
                        geometry: {
                            type: 'Polygon',
                            coordinates: coord,
                        },
                        id: polyProps.id,
                        properties: {
                            id: polyProps.id,
                            imageSrc: polyProps.imageSrc,
                            title: polyProps.title,
                            type: polyProps.type,
                        },
                        type: 'Feature',
                    });
                });
            });

            if (this.polygons.features.length > 0) {
                this.mapbox.map.addSource('regions', {
                    type: 'geojson',
                    data: this.polygons,
                    promoteId: 'id',
                });

                this.mapbox.map.addLayer({
                    id: 'regionFills',
                    type: 'fill',
                    source: 'regions',
                    layout: {
                    },
                    paint: {
                        'fill-color': [
                            'case',
                            ['==', ['feature-state', 'interaction-state'], 'hover'],
                            'rgba(168,48,140,0.5)',
                            ['==', ['feature-state', 'interaction-state'], 'active'],
                            'rgba(168,48,140,0.5)',
                            'rgba(25,200,197,0.6)',
                        ],
                        'fill-opacity': 0.8,
                    },
                });

                this.mapbox.map.addLayer({
                    id: 'regionBorders',
                    type: 'line',
                    source: 'regions',
                    layout: {
                    },
                    paint: {
                        'line-color': '#fff',
                        'line-width': 1,
                    },
                });

                // Hide map polygons by default
                this.hideMapPolygons();

                // When the user moves their mouse over the state-fill layer,
                // we'll update the feature state for the feature under the mouse.
                this.mapbox.map.on('mousemove', 'regionFills', (e) => {
                    if (e.features.length > 0) {
                        this.addMapPopup(e);
                        this.removeHoveredPolygon();
                        this.addHoveredPolygon(e.features[0]);
                    }
                });

                // When the mouse leaves the state-fill layer, update the
                // feature state of the previously hovered feature.
                this.mapbox.map.on('mouseleave', 'regionFills', (e) => {
                    this.removeMapPopup(e);
                    this.removeHoveredPolygon();
                });

                // When the clicks the the state-fill layer, update the
                // feature state of the active feature.
                this.mapbox.map.on('click', 'regionFills', (e) => {
                    this.removeActivePolygon();
                    this.addActivePolygon(e.features[0]);
                    this.addMapPopup(e.features[0]);
                });
            };
        },
        /**
         * Remove the current active polygon
         */
        removeActivePolygon() {
            if (this.mapbox.map.style._layers.regionFills) {
                this.mapbox.map.setFeatureState(
                    {
                        source: 'regions',
                        id: this.activeStateId,
                    },
                    {
                        'interaction-state': '',
                    },
                );

                this.activeStateId = null;
            }
        },
        /**
         * Add a new active polygon
         */
        addActivePolygon(feature) {
            this.activeStateId = feature.properties.id;

            this.mapbox.map.setFeatureState(
                {
                    source: 'regions',
                    id: this.activeStateId,
                },
                {
                    'interaction-state': 'active',
                },
            );
            mapStore.setActivePlace({
                mapId: this.mapId,
                activeFeature: feature,
            });

            this.$emit('showDetail', feature);
            this.$emit('setCategory', 'regions');
        },
        /**
         * Remove the current hovered polygon
         */
        removeHoveredPolygon() {
            if (this.hoveredStateId) {
                let state = '';
                if (this.hoveredStateId === this.activeStateId) {
                    state = 'active';
                }

                this.mapbox.map.setFeatureState(
                    {
                        source: 'regions',
                        id: this.hoveredStateId,
                    },
                    {
                        'interaction-state': state,
                    },
                );
            }

            mapStore.setHoveredPlace({
                mapId: this.mapId,
                hoveredFeature: '',
            });

            this.hoveredStateId = null;
        },
        /**
         * Add a hovered polygon
         */
        addHoveredPolygon(feature) {
            this.hoveredStateId = feature.properties.id;
            this.mapbox.map.setFeatureState(
                {
                    source: 'regions',
                    id: this.hoveredStateId,
                },
                {
                    'interaction-state': 'hover',
                },
            );

            this.addMapPopup(feature);

            mapStore.setHoveredPlace({
                mapId: this.mapId,
                hoveredFeature: feature,
            });
        },
        /**
         * Add a map popup when feature is hovered
         */
        addMapPopup(feature) {
            let featureData = '';
            if (feature.features) {
                featureData = feature.features[0];
            } else {
                featureData = feature;
            }
            const coordinates = this.getCoordinates(featureData);
            const popupHtml = this.getPopupHtml(featureData);

            if (featureData.properties.id) {
                this.removeMapPopup(feature);

                this.popup = new mapboxgl.Popup({
                    closeButton: false,
                    offset: {
                        top: [0, 20],
                        bottom: [0, -40],
                        left: [30, -20],
                        right: [-30, -20],
                    },
                }).setLngLat(coordinates)
                    .setHTML(popupHtml)
                    .addTo(this.mapbox.map);
            }
        },
        /**
         * Remove the popup from the map
         */
        removeMapPopup(marker) {
            if (this.popup) {
                this.popup.remove();
                this.popup = null;
            }

            if (marker._popup) {
                marker._popup.remove();
            }
        },
        /**
         * Get coordinates to decide where to show popup
         */
        getCoordinates(feature) {
            if (feature.geometry.type === 'Polygon') {
                return this.findFeatureCentre(feature.geometry.coordinates);
            }

            if (feature.geometry.type === 'MultiPolygon') {
                return this.findFeatureCentre(feature.geometry.coordinates[0]);
            }

            return feature.geometry.coordinates;
        },
        /**
         * Find the centre of a polygon to display popup
         */
        findFeatureCentre(markers) {
            const lats = [];
            const lngs = [];
            markers[0].forEach((m) => {
                lats.push(m[1]);
                lngs.push(m[0]);
            });
            return {
                lat: (Math.min(...lats) + Math.max(...lats)) / 2,
                lng: (Math.min(...lngs) + Math.max(...lngs)) / 2,
            };
        },
        /**
         * Get correct popup html based on map feature type
         */
        getPopupHtml(feature) {
            if (feature.properties.imageSrc && feature.properties.stopCount) {
                return `
                    <img class="vs-map__popup-image" src="${feature.properties.imageSrc}" />
                    <div>
                        <h4 class="vs-map__popup-subtitle">Stop ${feature.properties.stopCount}</h4>
                        <p class="vs-map__popup-title">${feature.properties.title}</p>
                    </div>
                `;
            }

            return `
                <p class="vs-map__popup-title">${feature.properties.title}</p>
            `;
        },
        /**
         * Detect keyboard nav to toggle popup
         */
        setupMarkerListeners(marker) {
            document.body.addEventListener('keyup', (e) => {
                if (e.key === 'Escape' || e.key === 'Tab') {
                    this.removeMapPopup(marker);

                    if (this.showMarkerPopups) {
                        mapStore.setActivePlace({
                            mapId: this.mapId,
                            activeFeature: null,
                        });
                    }
                };
            });

            const markerEl = marker.getElement();
            markerEl.addEventListener('keyup', (e) => {
                if (e.key === 'Enter') {
                    if (!marker._popup.isOpen()) {
                        marker._popup.addTo(this.mapbox.map);
                    }
                }
            });
        },
        /**
         * Ensures map fits to bounds
         */
        fitToBounds() {
            this.mapbox.map.fitBounds(geojsonExtent(this.geojsonData), {
                padding: {
                    top: 100,
                    bottom: 100,
                    left: 100,
                    right: 100,
                },
            });
        },
        /**
         * Initialises the map component
         */
        initialiseMapComponent() {
            this.addMap();
            this.addMapControls();

            if (this.places.length) {
                this.initialiseMapFeatures();
            }

            if (this.geojsonData.features.length) {
                this.initialiseMapMarkers();
                if (this.fitToMarkers) {
                    this.fitToBounds();
                }
            }
        },
        /**
         * Initialises lazy loading
         */
        lazyloadMapComponent() {
            mapboxgl.supported({
                failIfMajorPerformanceCaveat: true,
            });

            if (!('IntersectionObserver' in window)) {
                this.initialiseMapComponent();
                return;
            }

            this.observer = new IntersectionObserver((entries) => {
                if (entries[0].intersectionRatio > 0) {
                    this.observer.unobserve(this.$el);
                    this.initialiseMapComponent();
                }
            });
            this.observer.observe(this.$el);
        },
        /**
         * Checks for window size on resize
         */
        onResize() {
            this.isTablet = window.innerWidth >= 768;
        },
        /**
         * Creates a map bounding object from polygon data
         */
        getBoundsFromPolygon() {
            const coordinates = this.boundsData.coordinates[0];
            /* eslint-disable arrow-body-style */
            return coordinates.reduce((bounds, coord) => {
                return bounds.extend(coord);
            }, new mapboxgl.LngLatBounds(coordinates[0], coordinates[0]));
            /* eslint-enable arrow-body-style */
        },
        /**
         * Adds padding to a bounds object
         */
        padBounds(bounds, paddingFraction = 0.1) {
            const sw = bounds.getSouthWest();
            const ne = bounds.getNorthEast();

            const latDiff = ne.lat - sw.lat;
            const lngDiff = ne.lng - sw.lng;

            const padLat = latDiff * paddingFraction;
            const padLng = lngDiff * paddingFraction;

            return new mapboxgl.LngLatBounds(
                [sw.lng - padLng, sw.lat - padLat],
                [ne.lng + padLng, ne.lat + padLat],
            );
        },
        /**
         * Creates a map bounding object from route data
         */
        getBoundsFromRoute() {
            const routeCoords = this.places.map(
                (place) => {
                    if (place.geometry.type === 'LineString') {
                        return place.geometry.coordinates;
                    }
                    return null;
                },
            );

            const flatRouteCoords = routeCoords.flat();

            const bounds = flatRouteCoords.reduce(
                (b, coord) => b.extend(coord),
                new mapboxgl.LngLatBounds(flatRouteCoords[0], flatRouteCoords[0]),
            );

            return this.padBounds(bounds, 0.1);
        },
        /**
         * Check a marker is visible on the map
         */
        checkPointIsVisible() {
            const isInBounds = this.mapbox.map.getBounds()
                .contains(this.activeMarkerPostion);

            return isInBounds;
        },
        /**
         * Reposition map to centre on point
         */
        centreMapOnPoint(coords) {
            this.mapbox.map.flyTo({
                center: coords,
            });
        },
        /**
         * Calculate bounding box depending on data provided
        */
        calculateBoundingBox() {
            let boundingBox;

            if (typeof this.boundsData === 'undefined'
                || this.boundsData.type === 'undefined') {
                boundingBox = [
                    [-7.555827, 54.608836], // south-west point.
                    [-0.778285, 60.880894], // north-east point.
                ];
            } else if (this.boundsData.type === 'bounds') {
                const southWest = new mapboxgl
                    .LngLat(
                        this.boundsData.coordinates[1][0],
                        this.boundsData.coordinates[1][1],
                    );
                const northEast = new mapboxgl
                    .LngLat(
                        this.boundsData.coordinates[0][0],
                        this.boundsData.coordinates[0][1],
                    );
                boundingBox = new mapboxgl.LngLatBounds(southWest, northEast);
            } else if (this.boundsData.type === 'Polygon') {
                boundingBox = this.getBoundsFromPolygon();
            } else if (this.boundsData.type === 'Route') {
                boundingBox = this.getBoundsFromRoute();
            } else {
                boundingBox = [
                    [-7.555827, 54.608836], // south-west point.
                    [-0.778285, 60.880894], // north-east point.
                ];
            }

            return boundingBox;
        },
        /**
         * If the map has a route, download it as a gpx file
         */
        downloadRouteAsGpx() {
            const gpx = GeoJsonToGpx(this.geojsonData, {
                metadata: {
                    name: 'A lovely walk around Scotland',
                    author: {
                        name: 'VisitScotland',
                    },
                },
            });

            const gpxString = new XMLSerializer().serializeToString(gpx);

            // @see https://stackoverflow.com/questions/10654971/create-text-file-from-string-using-js-and-html5
            const link = document.createElement('a');
            link.download = 'geojson-to-gpx.gpx';
            const blob = new Blob([gpxString], {
                type: 'text/xml',
            });
            link.href = window.URL.createObjectURL(blob);
            link.click();
        },
    },
};
</script>

<style lang="scss">
@import "mapbox-gl/dist/mapbox-gl.css";
@import "../../styles/_os-branding.scss";

.os-api-branding.logo {
    margin: $spacer-050;
}

.vs-map {
    height: 100%;
    width: 100%;
    position: relative;

    &__map, &__map-outer {
        height: 100%;
        width: 100%;
        position: relative;
    }

    &__message {
        position: absolute;
        z-index: 20;
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        pointer-events: none;

        &--with-overlay {
            pointer-events: all;
            background: rgba(255, 255, 255, 0.4);
        }
    }

    &__message-box {
        border: 1px solid $vs-color-border-highlight;
        border-radius: $border-radius-default;
        height: 142px;
        width: 200px;
        background: $vs-color-background-inverse;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: $spacer-150;
    }

    &__loading {
        margin-bottom: $spacer-100;
    }

    &__message-text {
        font-size: $font-size-3;
        margin-bottom: 0;
        text-align: center;
    }

    &__no-js {
        display: none;
    }

    .mapboxgl-ctrl-top-right .mapboxgl-ctrl {
        margin: $spacer-050;

        & > button {
            border: 2px solid $vs-color-interaction-cta-primary;
            background-position: center center;
            background-repeat: no-repeat;
            background-size: 1rem 1rem;
        }

        .mapboxgl-ctrl-icon {
            display: none;
        }
    }

    .mapboxgl-ctrl-group:not(:empty) {
        background: transparent;
        border: none;
        box-shadow: none;

        & > button {
            width: 32px;
            height: 32px;
            font-size: $font-size-4;
            transition: $duration-base all;
            border-radius: $border-radius-pill;

            &:focus {
                @extend %primary-button-focus;
            }

            &:active, &:active:focus {
                box-shadow: none;
                border: $vs-color-interaction-cta-pressed;
            }

            @include vs-button-variant(
                $vs-color-text-cta-on-light, $vs-color-interaction-cta-secondary, $vs-color-interaction-cta-primary,
                $vs-color-text-inverse, $vs-color-interaction-cta-hover, $vs-color-interaction-cta-hover,
                $vs-color-text-inverse, $vs-color-interaction-cta-pressed, $vs-color-interaction-cta-pressed,
            );

            &.mapboxgl-ctrl-zoom-in {
                margin-bottom: $spacer-050;
            }
        }
    }

    .mapboxgl-ctrl-fullscreen,
    .mapboxgl-ctrl-shrink,
    .mapboxgl-ctrl-zoom-in,
    .mapboxgl-ctrl-zoom-out {
        position: relative;

        &::after {
            font-family: "Font Awesome Kit";
            display: inline-block;
        }

        &:disabled {
            &::after {
                position: absolute;
                top: -2px;
                left: -2px;
                display: flex;
                justify-content: center;
                align-items: center;
                width: calc(100% + 4px);
                height: calc(100% + 4px);
                @extend %button-disabled;
            }
        }
    }

    .mapboxgl-ctrl-fullscreen {
        display: none;

        @include media-breakpoint-up(lg) {
            display: block;
        }

        &::after {
            content: "\e028";
        }
    }

    .mapboxgl-ctrl-shrink {
        &::after {
            content: "\e01e";
        }
    }

    .mapboxgl-ctrl-zoom-in {
        &::after {
            content: "\e062";
        }
    }

    .mapboxgl-ctrl-zoom-out {
        &::after {
            content: "\e057";
        }
    }

    .mapboxgl-ctrl-compass {
        display: none;
    }

    .mapboxgl-popup {
        z-index: 99999;

        &-content {
            display: flex;
            padding: $spacer-050;
        }
    }

    &__popup-subtitle {
        font-family: $font-family-base;
        font-size: $font-size-4;
        font-weight: $font-weight-bold;
        margin-bottom: $spacer-025;
    }

    &__popup-title {
        font-family: $font-family-base;
        font-size: $font-size-4;
        font-weight: $font-weight-normal;
        margin-bottom: 0;
    }

    &__popup-image {
        width: 105px;
        margin-right: $spacer-050;
    }
}

@include no-js {
    .vs-map {
        &__map {
            display: none;
        }

        &__no-js {
            display: flex;
        }
    }
}
</style>
