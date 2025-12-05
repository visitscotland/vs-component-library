import { ref, computed } from 'vue';
import useDataLayerStore from '@/stores/dataLayer.store';
import checkVendorLibrary from '@/utils/check-vendor-library';

import {
    googleMapSearchTemplate,
    googleMapFilterInteractionTemplate,
    googleMapTimeToFirstInteractionTemplate,
    googleMapInteractionTemplate,
} from '@/utils/data-layer-templates';

/**
 * Vue Composable for Data Layer interactions (e.g., Google Tag Manager).
 * Replaces the dataLayerMixin for custom components. This will be removed to a wrapper
 * project along with the components.
 */
export default function dataLayerComposable() {
    const dataLayerStore = useDataLayerStore();

    const dataLayerLoadConfirmed = ref(false);

    const pageUrl = computed(() => dataLayerStore.pageUrl);

    /**
     * Matches values to a given template, filling missing fields with undefined.
     * @param {Array<string>} template - The array of keys the data layer event requires.
     * @param {Object} values - The object of values to match against the template.
     * @returns {Object} An object ready to be pushed to the data-layer.
     */
    function templateFiller(template, values) {
        const obj = {
        };

        template.forEach((element) => {
            obj[element] = values[element] || undefined;

            if (element === 'language' && obj[element] === undefined) {
                obj[element] = values.site_language || undefined;
            }
        });

        return obj;
    }

    /**
     * Returns the current ISO 8601 formatted timestamp.
     * @returns {string} ISO date string.
     */
    function returnIsoDate() {
        const date = new Date(Date.now());
        return date.toISOString();
    }

    /**
     * Compiles the full data layer object by merging GTMData from the store
     * and the specific event values, and adds the hit_timestamp.
     * @param {Object} templateValues - Event-specific values.
     * @returns {Object} The complete data layer object for the event.
     */
    function compileFullTemplate(templateValues) {
        const storeValues = dataLayerStore.GTMData;
        const fullTemplate = {
            ...storeValues,
            ...templateValues,
        };

        fullTemplate.hit_timestamp = returnIsoDate();

        return fullTemplate;
    }

    /**
     * Pushes an object to the global window.dataLayer array, ensuring the library is loaded.
     * @param {Object} object - The data layer object to push.
     */
    function pushToDataLayer(object) {
        if (!dataLayerLoadConfirmed.value) {
            checkVendorLibrary('dataLayer', () => {
                // Mutate the ref's value
                dataLayerLoadConfirmed.value = true;
                window.dataLayer.push(object);
            });
        } else {
            window.dataLayer.push(object);
        }
    }

    /**
     * Creates and pushes a specific data layer event object.
     * @param {string} type - The type of event (e.g., 'siteSearchOpenEvent').
     * @param {Object} event - The event data specific to the type.
     */
    function createDataLayerObject(type, event) {
        let eventName;
        let templateValues;
        let fullTemplate;
        let dataLayerData;

        switch (type) {
        case 'googleMapSearchEvent':
            eventName = 'map_search';
            templateValues = {
                event: eventName,
                search_query: event.search_query,
                search_map_location: event.search_map_location,
                search_results_count: event.search_results_count,
                search_usage_index: event.search_usage_index,
            };

            fullTemplate = compileFullTemplate(templateValues);
            dataLayerData = templateFiller(googleMapSearchTemplate, fullTemplate);
            break;

        case 'googleMapFilterEvent':
            eventName = 'map_filter_interaction';
            templateValues = {
                event: eventName,
                filter_type: event.filter_type,
                search_map_location: event.search_map_location,
                filter_selection: event.filter_selection,
                results_count: event.results_count,
                filter_usage_index: event.filter_usage_index,
            };

            fullTemplate = compileFullTemplate(templateValues);
            dataLayerData = templateFiller(googleMapFilterInteractionTemplate, fullTemplate);
            break;

        case 'googleMapTimeToFirstInteractionEvent':
            eventName = 'map_time_to_first_interaction';
            templateValues = {
                event: eventName,
                time_to_first_interaction_ms: event.time_to_first_interaction_ms,
                first_interaction_type: event.first_interaction_type,
            };

            fullTemplate = compileFullTemplate(templateValues);
            dataLayerData = templateFiller(googleMapTimeToFirstInteractionTemplate, fullTemplate);
            break;

        case 'googleMapInteractionEvent':
            eventName = 'map_interaction_click';
            templateValues = {
                event: eventName,
                interaction_type: event.interaction_type,
                search_query: event.search_query,
                map_location: event.map_location,
                visible_attractions_count: event.visible_attractions_count,
                card_attraction_name: event.card_attraction_name,
                card_attraction_url: event.card_attraction_url,
                card_attraction_rating: event.card_attraction_rating,
                interaction_timestamp_ms: event.interaction_timestamp_ms,
            };

            fullTemplate = compileFullTemplate(templateValues);
            dataLayerData = templateFiller(googleMapInteractionTemplate, fullTemplate);
            break;

        default:
        }

        if (dataLayerData) {
            pushToDataLayer(dataLayerData);
        }
    }

    return {
        pageUrl,
        createDataLayerObject,
        templateFiller,
        compileFullTemplate,
        returnIsoDate,
        pushToDataLayer,
        dataLayerStore,
    };
}
