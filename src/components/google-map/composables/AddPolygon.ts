import { importLibrary } from '@googlemaps/js-api-loader';
import { watch } from 'vue';
import { storeToRefs } from 'pinia';

import type { BrxmFeature, BrxmFeatureProperties } from '@/types/types';
import designTokens from '@/assets/tokens/tokens.json';
import useGoogleBaseMapStore from '@/stores/googleMap.store';

import createTooltip from './AddTooltip';

const ACTIVE_COLOR = designTokens['vs-color-background-accent-heather-30'];
const HOVER_COLOR = designTokens['vs-color-background-accent-heather-80'];
const STROKE_COLOR = designTokens['vs-color-border-inverse'];

function getPolygonCenter(map: google.maps.Map, polygon: google.maps.Polygon): google.maps.LatLng {
    const bounds = new google.maps.LatLngBounds();
    const polygonAreaPaths: google.maps.MVCArray<google.maps.LatLng>[] = polygon
        .getPaths()
        .getArray()
        .flat();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    polygonAreaPaths.forEach((polygonPaths: any) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        polygonPaths.getArray().forEach((edge: any) => {
            bounds.extend(new google.maps.LatLng(edge.lat(), edge.lng()));
        });
    });

    return bounds.getCenter();
};

async function attachListeners(
    polygon: google.maps.Polygon,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    tooltip?: any,
) {
    const googleMapStore = useGoogleBaseMapStore();

    polygon.addListener('mouseover', () => {
        polygon.setOptions({
            fillColor: HOVER_COLOR,
        });

        if (tooltip && googleMapStore.markerHovered) {
            googleMapStore.isPolygonTooltipOpen = true;
            tooltip.show();
        }
    });

    polygon.addListener('mouseout', () => {
        polygon.setOptions({
            fillColor: ACTIVE_COLOR,
        });

        if (tooltip) {
            googleMapStore.isPolygonTooltipOpen = false;
            tooltip.hide();
        }
    });

    if (!tooltip) return;

    const { markerHovered } = storeToRefs(googleMapStore);

    watch(() => markerHovered.value, (markerTooltipOpen) => {
        if (markerTooltipOpen) {
            tooltip.hide();
            googleMapStore.isPolygonTooltipOpen = false;
        }
    });

    polygon.addListener('mousemove', () => {
        if (!googleMapStore.isPolygonTooltipOpen && !googleMapStore.markerHovered) {
            tooltip.show();
            googleMapStore.isPolygonTooltipOpen = true;
        }
    });
};

async function createPolygon(
    map: google.maps.Map,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    polygonCoordinates: any,
    polygonProperties: BrxmFeatureProperties,
    isPolygonTooltipsEnabled: boolean,
) {
    const polygon = new google.maps.Polygon({
        paths: polygonCoordinates,
        strokeColor: STROKE_COLOR,
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: ACTIVE_COLOR,
        fillOpacity: 0.5,
        clickable: true,
    });

    polygon.setMap(map);

    const centerOfPolygon: google.maps.LatLng = getPolygonCenter(map, polygon);

    if (isPolygonTooltipsEnabled) {
        const mapsLibrary = await importLibrary('maps') as google.maps.MapsLibrary;

        const Tooltip = createTooltip(mapsLibrary);

        const tooltip = new Tooltip(
            map,
            centerOfPolygon,
            polygonProperties,
        );
        tooltip.setMap(map);
        attachListeners(polygon, tooltip);
    } else {
        attachListeners(polygon);
    }
};

export default function addPolygon(
    map: google.maps.Map,
    feature: BrxmFeature,
    isPolygonTooltipsEnabled: boolean,
) {
    // Single area polygon
    if (feature.geometry.type === 'Polygon') {
        const polygonCoordinates: google.maps.LatLng[] = [];

        const outerBoundary = feature.geometry.coordinates[0] as unknown as number[][];

        outerBoundary.forEach((coordinate: number[]) => {
            polygonCoordinates.push(
                new google.maps.LatLng(coordinate[1], coordinate[0]),
            );
        });

        createPolygon(
            map,
            polygonCoordinates,
            feature.properties,
            isPolygonTooltipsEnabled,
        );
    }

    // Multiple area polygons that act as one
    if (feature.geometry.type === 'MultiPolygon') {
        const regionPolygons: google.maps.LatLng[][] = [];

        const coordinates = feature.geometry.coordinates as unknown as number[][][][];

        coordinates.forEach((polygonGroup: number[][][]) => {
            const outerBoundary = polygonGroup[0];

            if (outerBoundary) {
                const islandPath = outerBoundary.map(
                    ([lng, lat]: number[]) => new google.maps.LatLng(lat, lng),
                );
                regionPolygons.push(islandPath);
            }
        });

        createPolygon(
            map,
            regionPolygons,
            feature.properties,
            isPolygonTooltipsEnabled,
        );
    }
};
