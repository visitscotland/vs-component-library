import { dmoUrls } from '../constants';

const currentURL = window.location.href;

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
            if (triggerEvent.target.href === data) {
                linkedToDMO = true;
                trackingData = createTracking(true);
            }
        });

        if (!linkedToDMO) {
            trackingData = createTracking(false);
        }

        return trackingData;
    };
    return getTrackingData();
};

export default dmoAnalyticsLogic;
