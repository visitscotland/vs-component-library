/// <reference types="google.maps" />

import { setOptions } from '@googlemaps/js-api-loader';

export default async function mapLoader(apiKey: string) {
    setOptions({
        key: apiKey,
        v: 'quarterly',
        libraries: ['maps', 'places', 'marker', 'core', 'geometry'],
        region: 'GB',
        language: 'en',
    });
};
