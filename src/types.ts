export type SelectOption = {
    key: string;
    displayName: string;
    optionValue: string;
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
}

export type GuestUnit = {
    id: string;
    showRemoveBtn: boolean;
    numberGroups: {
        adults: GuestNumberGroup;
        children: GuestNumberGroup;
        infants: GuestNumberGroup;
    };
}

export type TmsApiDataItem = {
    name: string;
    slug: string;
    lat: string;
    lng: string;
};
