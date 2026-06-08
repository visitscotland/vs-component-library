/* eslint-disable no-undef */

const ACTIVE_COLOR = '#19C8C5';
const HOVER_COLOR = '#A830FF';
const STROKE_COLOR = '#FFFFFF';

type Coordinate = [number, number];
type Polygon = Coordinate[];

function attachListeners(polygon: google.maps.Polygon) {
    polygon.addListener('mouseover', () => {
        polygon.setOptions({
            fillColor: HOVER_COLOR,
        });
    });

    polygon.addListener('mouseout', () => {
        polygon.setOptions({
            fillColor: ACTIVE_COLOR,
        });
    });
};

function createPolygon(map: google.maps.Map, polygonData: any) {
    const polygon = new google.maps.Polygon({
        paths: polygonData,
        strokeColor: STROKE_COLOR,
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: ACTIVE_COLOR,
        fillOpacity: 0.5,
        clickable: true,
    });

    polygon.setMap(map);

    attachListeners(polygon);
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

        createPolygon(map, polygonCoordinates);
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

        createPolygon(map, regionPolygons);
    };
};
