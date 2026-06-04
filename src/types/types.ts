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

export type EventItem = {
    id: string;
    parentId: string;
    name: string;
    descriptions?: { description: string }[];
    images?: { url: string }[];
    performances?: { url: string }[];
    place: {
        website: string;
        town: string;
    };
    startFormatted: string;
    endFormatted: string;
    minPrice?: number;
    categoryCard?: string;
};

export type EventResponse = {
    events: EventItem[];
    totalResults: number;
};

export type CludoResponseField = {
    Value: string;
};

export type CludoDocument = {
    Fields: {
        Id: CludoResponseField;
        Title: CludoResponseField;
        Description: CludoResponseField;
        Image?: CludoResponseField;
        Url: CludoResponseField;
        categoryCard: CludoResponseField;
    };
};

export type CludoResponse = {
    TypedDocuments: CludoDocument[];
    TotalDocument: number;
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
