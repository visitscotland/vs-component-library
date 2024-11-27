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
            return {
                dmo_referral: dmoReferral,
            };
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

        // only run function if the target is an anchor element
        if (triggerEvent.srcElement.localName === 'a') {
            dmoUrls.forEach((dmoUrl) => {
                if (triggerEvent.target.href.includes(dmoUrl)) {
                    linkedToDMO = true;
                    trackingData = createTracking('True');
                }
            });
        }

        if (!linkedToDMO) {
            trackingData = createTracking('False');
        }

        return trackingData;
    };
    return getTrackingData();
};

export default dmoAnalyticsLogic;
