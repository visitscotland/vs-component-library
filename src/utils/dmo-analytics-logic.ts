import { dmoUrls } from '../constants';

let currentURL = '';

if (typeof window !== 'undefined') {
    currentURL = window.location.href;
}

const dmoAnalyticsLogic = (triggerEvent) => {
    let linkedToDMO = false;

    // get current page type for tracking
    const isDMSPage = () => {
        if (currentURL.includes('/info')) {
            return true;
        }

        return false;
    };

    const createTracking = (dmoReferral) => {
        if (isDMSPage()) {
            return '';
        }

        return {
            type: 'CMS referral',
            product: 'Unclassified',
            dmo_referral: dmoReferral,
        };
    };

    const getTrackingData = () => {
        let trackingData = {

        };

        dmoUrls.forEach((data) => {
            // don't run function if it's a link to the home page
            if (triggerEvent.target.href !== '/') {
                // remove trailing '/' from link if it exists
                const removeTrailingSlash = (url) => {
                    const finalChar = url.slice(-1);
                    if (finalChar === '/') {
                        return url.substring(0, url.length - 1);
                    }

                    return url;
                };

                if (removeTrailingSlash(triggerEvent.target.href) === removeTrailingSlash(data)) {
                    linkedToDMO = true;
                    trackingData = createTracking('True');
                }
            }
        });

        if (!linkedToDMO) {
            trackingData = createTracking('False');
        }

        return trackingData;
    };
    return getTrackingData();
};

export default dmoAnalyticsLogic;
