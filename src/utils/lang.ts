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

export function getLocale() {
    let locale = document.documentElement.lang.toLocaleLowerCase().slice(0,2) || '';

    if (locale === 'en') {
        locale = '';
    }

    return locale;
};
