import { dmoUrls } from '../constants';

const dmoAnalyticsLogic = (triggerEvent, currentURL) => {
    let linkedToDMO = false;

    // get current page type for tracking
    const currentPageType = () => {
        if (currentURL.includes('/info/accommodation')) {
            return 'accommodation';
        }

        if (currentURL.includes('/info/things-to-do')) {
            return 'thingsToDo';
        }

        if (currentURL.includes('/info/food-drink')) {
            return 'foodDrink';
        }

        if (currentURL.includes('/info/tours')) {
            return 'tours';
        }

        if (currentURL.includes('/info')) {
            return 'info';
        }

        return null;
    };

    const createTracking = (dmoReferral) => {
        switch (currentPageType()) {
        case 'accommodation':
            return {
                type: 'DMS referral',
                product: 'Accommodation',
                dmo_referral: dmoReferral,
            };

        case 'thingsToDo':
            return {
                type: 'DMS referral',
                product: 'Things To Do',
                dmo_referral: dmoReferral,
            };

        case 'foodDrink':
            return {
                type: 'DMS referral',
                product: 'Food and Drink',
                dmo_referral: dmoReferral,
            };

        case 'tours':
            return {
                type: 'DMS referral',
                product: 'Tours',
                dmo_referral: dmoReferral,
            };

        case 'info':
            return {
                type: 'DMS referral',
                product: 'Unclassified',
                dmo_referral: dmoReferral,
            };

        default:
            return {
                type: 'CMS referral',
                product: 'Unclassified',
                dmo_referral: dmoReferral,
            };
        }
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

    console.log(getTrackingData());

    return getTrackingData();
};

export default dmoAnalyticsLogic;
