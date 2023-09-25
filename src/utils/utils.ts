/* eslint-disable */
import { products } from '../constants';
import type { SelectOption } from '../types';

declare global {
    // es-lint
    interface Window {
        VS:any;
    }
}

let VS;

if (typeof window !== 'undefined') {
    VS = (typeof window.VS === 'object') ? window.VS : {};
} else {
    VS = {};
}


export function getURLParameters() {
    const queryMap = new URLSearchParams(document.location.search);
    const queryMapObj = Object.fromEntries(queryMap);

    if (typeof queryMapObj === 'object') {
        Object.keys(queryMapObj).forEach((key) => queryMapObj[key] === null && delete queryMapObj[key]);
    }

    return queryMapObj;
}

export function getProductTypes() {
    if (Object.keys(VS).length <= 0) {
        return products;
    }

    const VSprods = VS.search_config.basic_config.productTypes;
    const prodArray: SelectOption[] = [];
    const prodKeys = Object.keys(VSprods);

    prodKeys.forEach((prodKey) => {
        prodArray.push({
            key: VSprods[prodKey].value,
            text: VSprods[prodKey].text,
            value: VSprods[prodKey].value,
        });
    });
    return prodArray;
};