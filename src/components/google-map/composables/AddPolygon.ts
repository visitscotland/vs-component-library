/* eslint-disable no-undef */

import { brxmFeatureProperties } from '@/types/types';
import Tooltip from './AddTooltip';

const ACTIVE_COLOR = '#19C8C5';
const HOVER_COLOR = '#A830FF';
const STROKE_COLOR = '#FFFFFF';

type Coordinate = [number, number];
type Polygon = Coordinate[];

function getPolygonCenter(map: google.maps.Map, polygon: google.maps.Polygon): google.maps.LatLng {
    const bounds = new google.maps.LatLngBounds();
    const polygonAreaPaths: google.maps.MVCArray<google.maps.LatLng>[] = polygon
        .getPaths()
        .getArray()
        .flat();

    polygonAreaPaths.forEach((polygonPaths: any) => {
        polygonPaths.getArray().forEach((edge: any) => {
            bounds.extend(new google.maps.LatLng(edge.lat(), edge.lng()));
        });
    });

    return bounds.getCenter();
}

async function attachListeners(
    polygon: google.maps.Polygon,
    tooltip: Tooltip,
) {
    polygon.addListener('mouseover', async() => {
        polygon.setOptions({
            fillColor: HOVER_COLOR,
        });
        tooltip.show();
    });

    polygon.addListener('mouseout', async() => {
        polygon.setOptions({
            fillColor: ACTIVE_COLOR,
        });
        tooltip.hide();
    });
};

function createPolygon(
    map: google.maps.Map,
    polygonCoordinates: any,
    polygonProperties: brxmFeatureProperties,
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

    const tooltip = new Tooltip(
        map,
        centerOfPolygon,
        polygonProperties,
    );
    tooltip.setMap(map);

    attachListeners(polygon, tooltip);
};

export default async function addPolygon(map: google.maps.Map, feature: any) {
    // Single area polygon
    if (feature.geometry.type === 'Polygon') {
        const polygonCoordinates: google.maps.LatLng[] = [];

        feature.geometry.coordinates[0].forEach((coordinate: number[]) => {
            polygonCoordinates.push(
                new google.maps.LatLng(coordinate[1], coordinate[0]),
            );
        });

        createPolygon(
            map,
            polygonCoordinates,
            feature.properties,
        );
    };

    // Multiple area polygons that act as one
    if (feature.geometry.type === 'MultiPolygon') {
        const regionPolygons: google.maps.LatLng[][] = [];

        feature.geometry.coordinates.forEach((polygonGroup: Polygon[]) => {
            polygonGroup.forEach((coordinates: Coordinate[]) => {
                regionPolygons.push(
                    coordinates.map(
                        ([lng, lat]) => new google.maps.LatLng(lat, lng),
                    ),
                );
            });
        });

        createPolygon(
            map,
            regionPolygons,
            feature.properties,
        );
    };
};
