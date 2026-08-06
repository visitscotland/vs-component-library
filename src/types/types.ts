export type SelectOption = {
    key: string;
    text: string;
    value: string;
};

export type Location = {
    id: string;
    key: string;
    name: string;
    type: string;
};

export type GuestNumberGroup = {
    minCount: number;
    maxCount: number;
    count: number;
    name: string;
    unitLabel: string;
};

export type GuestUnit = {
    id: string;
    showRemoveBtn: boolean;
    numberGroups: {
        adults: GuestNumberGroup;
        children: GuestNumberGroup;
        infants: GuestNumberGroup;
    };
};

export type TmsApiDataItem = {
    name: string;
    slug: string;
    lat: string;
    lng: string;
};

export type CludoCredentials = {
    apiKey: string;
    customerId: number;
    engineId: number;
};

export type FederatedSearchResult = {
    id: string;
    title: string;
    description: string;
    imgSrc: string;
    url: string;
    dataSrc: string;
};

export type LatLngObject = {
    lat: number;
    lng: number;
};

export type LatLngBounds = {
    north: number;
    south: number;
    west: number;
    east: number;
};

export type BrxmFeatureProperties = {
    category?: {
        id: string;
        label: string;
    };
    stopCount?: number;
    id: number | string;
    title: string;
    description?: string;
    image?: string;
    link?: {
        label: string;
        link: string;
        type: string;
    };
};

export type BrxmFeature = {
    type: string;
    properties: BrxmFeatureProperties;
    geometry: {
        type: string;
        coordinates: any;
    };
};
