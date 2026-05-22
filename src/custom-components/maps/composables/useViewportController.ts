/* eslint-disable no-undef */
import { ref } from 'vue';

type ViewportCenter = {
    lat: number,
    lng: number,
};

type Viewport = {
    bounds: google.maps.LatLngBounds | null;
    center: google.maps.LatLng;
    zoom: number;
};

export default function useViewportController() {
    const lastSearchViewport = ref<Viewport|undefined>(undefined);
    const showSearchAreaButton = ref(false);
    const isProgrammaticMove = ref(false);
    const isUserMove = ref(false);

    const zoomThreshold = 1;

    // Get the current viewport
    function getViewport(gMap: google.maps.Map): Viewport {
        return {
            bounds: gMap.getBounds(),
            center: gMap.getCenter(),
            zoom: gMap.getZoom(),
        };
    }

    // Calculate distance between viewport centres.
    function getDistanceMeters(oldCenter: ViewportCenter, newCenter: ViewportCenter) {
        const R = 6371000; // Radius of Earth in meters.
        const dLat = (newCenter.lat - oldCenter.lat) * (Math.PI / 180);
        const dLng = (newCenter.lng - oldCenter.lng) * (Math.PI / 180);

        const lat1 = oldCenter.lat * (Math.PI / 180);
        const lat2 = newCenter.lat * (Math.PI / 180);

        const x = dLng * Math.cos((lat1 + lat2) / 2);

        return Math.sqrt(x * x + dLat * dLat) * R;
    }

    /**
     * Set distance threshold based on zoom level.
     * Distances are in meters.
     */
    function distanceThresholdByZoom(zoom: number) {
        if (zoom < 6) return 10000;
        if (zoom < 10) return 2500;
        if (zoom < 14) return 800;
        return 300;
    }

    // Check if the viewport has moved passed the distance or zoom thresholds.
    function hasViewportChanged(newViewPort: Viewport) {
        if (!lastSearchViewport.value) return false;

        const oldCenter = {
            lat: lastSearchViewport.value.center.lat(),
            lng: lastSearchViewport.value.center.lng(),
        };
        const newCenter = {
            lat: newViewPort.center.lat(),
            lng: newViewPort.center.lng(),
        };

        const distanceDiff = getDistanceMeters(oldCenter, newCenter);
        const distanceThreshold = distanceThresholdByZoom(newViewPort.zoom);
        const zoomDiff = Math.abs(lastSearchViewport.value.zoom - newViewPort.zoom);

        return distanceDiff > distanceThreshold || zoomDiff >= zoomThreshold;
    }

    let resetTimer: ReturnType<typeof setTimeout> | null = null;
    /**
     * Wrapper for programmatic map move to prevent the "Search the area" button from showing.
     * Functions such as gMap.setCenter(), gMap.setBounds(), and gMap.setZoom()
     */
    function runProgrammaticMove(fn: Function) {
        isProgrammaticMove.value = true;

        fn();

        if (resetTimer) clearTimeout(resetTimer);

        resetTimer = setTimeout(() => {
            isProgrammaticMove.value = false;
        }, 200);
    }

    return {
        getViewport,
        hasViewportChanged,
        isProgrammaticMove,
        isUserMove,
        lastSearchViewport,
        runProgrammaticMove,
        showSearchAreaButton,
    };
}
