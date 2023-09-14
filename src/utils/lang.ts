/* eslint-disable */
declare global {
    interface Window {
        VS:any;
    }
}

let VS;

export function getLabelText(key, fallback, subfolder?) {
    if (typeof window !== 'undefined') {
        VS = (typeof window.VS === 'object') ? window.VS : {};
    } else {
        VS = {};
    }

    if (Object.keys(VS).length > 0) {
        if (typeof subfolder !== 'undefined') {
            return VS.search_config.basic_config.search_module[subfolder][key];
        }

        return VS.search_config.basic_config.search_module[key];
    }

    return fallback;
};

export function getProductName(key, fallback?) {
    if (typeof window !== 'undefined') {
        VS = (typeof window.VS === 'object') ? window.VS : {};
    } else {
        VS = {};
    }

    if (Object.keys(VS).length > 0) {
        const prodNames = {};

        Object.keys(VS.search_config.basic_config.productTypes).forEach(key => {
            const nextProd = VS.search_config.basic_config.productTypes[key];
            prodNames[nextProd.value] = nextProd.text;
        });

        if (prodNames[key]) {
            return prodNames[key];
        }

        return fallback;
    }

    return fallback;
};

export function getLocale() {
    let locale = document.documentElement.lang.toLocaleLowerCase().slice(0,2) || '';

    if (locale === 'en') {
        locale = '';
    }

    return locale;
};
