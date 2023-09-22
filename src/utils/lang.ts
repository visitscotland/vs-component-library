/* eslint-disable */
declare global {
    interface Window {
        VS:any;
    }
}

let VS;

function setWindowObj() {
    if (typeof window !== 'undefined') {
        VS = (typeof window.VS === 'object') ? window.VS : {};
    } else {
        VS = {};
    }
}

export function getLabelText(key, fallback, subfolder?) {
    setWindowObj();

    let labelText = "";
    if (Object.keys(VS).length > 0) {
        if (typeof subfolder !== 'undefined') {
            labelText = VS.search_config.basic_config.search_module[subfolder][key];
        } else {
            labelText = VS.search_config.basic_config.search_module[key];
        }
    }

    if (labelText) {
        return labelText;
    }

    return fallback;
};

export function getProductName(key, fallback?) {
    setWindowObj();

    const prodNames = {};
    if (Object.keys(VS).length > 0) {
        Object.keys(VS.search_config.basic_config.productTypes).forEach(key => {
            const nextProd = VS.search_config.basic_config.productTypes[key];
            prodNames[nextProd.value] = nextProd.text;
        });
    }

    if (prodNames[key]) {
        return prodNames[key];
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
