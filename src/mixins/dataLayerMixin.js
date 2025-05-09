import { mapState } from 'pinia';
import useDataLayerStore from '../stores/dataLayer.store';

import checkVendorLibrary from '../utils/check-vendor-library';

import { signpostedPartners } from '../constants';

import {
    pageViewTemplate,
    externalLinkTemplate,
    internalLinkTemplate,
    videoTrackingTemplate,
    errorTemplate,
    menuNavigationTemplate,
    homePageLogoClickTemplate,
    formsTemplate,
    socialMediaExternalLinkTemplate,
    shareTemplate,
    carbonQuestionTemplate,
    carbonCompleteTemplate,
    productSearchTemplate,
    cmsReferralTemplate,
    accordionOpenTemplate,
    tabClickTemplate,
} from '../utils/data-layer-templates';

/**
 * There is a general function to retrieve any value from the store:
 * "field_needed": this.dataLayerStore.getValueFromKey("field_needed"),
 * example: "page_category_1": this.dataLayerStore.getValueFromKey("page_category_1")
 */

const dataLayerMixin = {
    computed: {
        // Retrieving page url from the page store created by:
        // dataLayer.store.js (Central Store)
        // TagManagerWrapper.vue (Global component that reads and updates the store)
        ...mapState(useDataLayerStore, {
            pageUrl(store) {
                return store.pageUrl;
            },
        }),
    },
    data() {
        return {
            dataLayerLoadConfirmed: false,
            dataLayerStore: null,
        };
    },
    mounted() {
        this.dataLayerStore = useDataLayerStore();
    },
    methods: {
        // This function matches values passed as an object
        // To the template listed on data-layer-template.js
        // And return any value not matched as undefined
        templateFiller(template, values) {
            // Create an empty object
            const obj = {
            };

            // Check every element on the template
            template.forEach((element) => {
                // Push the key from the template to the object created before
                obj[element] = '';

                // If there is a key on the object passed by the user that
                // matches a key from the template

                // Then use the user given value otherwise return it as undefined

                // This also ignores any key passed by the user that doesn't match
                // a key from the template
                obj[element] = values[element] || undefined;

                // The videoTrackingTemplate has changed 'site_language' to
                // 'language' but this change hasn't been reflected in the
                // GTMData so we need to account for it here.
                if (element === 'language' && obj[element] === undefined) {
                    obj[element] = values.site_language || undefined;
                }
            });

            // Return an object ready to be pushed to the data-layer
            return obj;
        },
        createDataLayerObject(type, event, href) {
            let eventName;
            let tagName;
            let templateValues;
            let fullTemplate;
            let dataLayerData;
            let clickText;
            let socialTargetText = '';
            let eventListing = 'False';

            if (event && event.target) {
                if (event.target.text) {
                    clickText = event.target.text.trim();
                } else {
                    clickText = event.target.innerText;
                }

                // An additional property is required for tracking tab and eventCard
                // components when used on an events listing page (e.g. on BSH).
                // A data attribute needs to be added to the these components
                // on the consumer site to indicate that it is being used on
                // an events listing page.
                if (event.target.closest('[data-event-listing="True"]')) {
                    eventListing = 'True';
                }
            }

            switch (type) {
            case 'productSearchDataEvent':
                eventName = 'psr_search';
                tagName = 'VS - GA4 - Event - PSR Search';

                templateValues = {
                    event: eventName,
                    psr_search_type: event.searchType,
                    psr_search_location: event.searchLocation,
                    page_path: href,
                    tag_name: tagName,
                };

                fullTemplate = this.compileFullTemplate(templateValues);
                dataLayerData = this.templateFiller(productSearchTemplate, fullTemplate);
                break;

            case 'pageViewTemplateDataEvent':
                eventName = 'page_view';

                templateValues = {
                    event: eventName,
                };

                fullTemplate = this.compileFullTemplate(templateValues);

                // Running the values and the template trough the templateFiller() function
                // This will make sure that the values are added on the right place
                // And if any value was not found then it will return as undefined
                // (as per iProspect request)
                dataLayerData = this.templateFiller(pageViewTemplate, fullTemplate);
                break;

            case 'menuNavigationDataEvent':
                eventName = 'menu_navigation';

                templateValues = {
                    event: eventName,
                    click_text: event.target.text.trim(),
                    click_URL: href,
                };

                fullTemplate = this.compileFullTemplate(templateValues);
                dataLayerData = this.templateFiller(menuNavigationTemplate, fullTemplate);
                break;

            case 'socialMediaExternalLinkDataEvent':
                eventName = 'social_media_footer';
                tagName = 'VS - GA - Social Media External Link';

                templateValues = {
                    event: eventName,
                    tag_name: tagName,
                    click_URL: href,
                };

                fullTemplate = this.compileFullTemplate(templateValues);
                dataLayerData = this.templateFiller(socialMediaExternalLinkTemplate, fullTemplate);
                break;

            case 'homePageLogoClickDataEvent':
                eventName = 'homepage_logo_click';
                tagName = 'VS - GA - Homepage Logo Click';

                templateValues = {
                    event: eventName,
                    tag_name: tagName,
                };

                fullTemplate = this.compileFullTemplate(templateValues);
                dataLayerData = this.templateFiller(homePageLogoClickTemplate, fullTemplate);
                break;

            case 'externalLinkDataEvent':
                eventName = 'external_link';
                tagName = 'VS - GA - External Link';

                templateValues = {
                    event: eventName,
                    tag_name: tagName,
                    click_text: clickText,
                    click_URL: href,
                    partner_referral: 'False',
                    event_listing: eventListing,
                };

                for (let x = 0; x < signpostedPartners.length; x++) {
                    if (href.includes(signpostedPartners[x])) {
                        templateValues.partner_referral = 'True';
                    }
                }

                fullTemplate = this.compileFullTemplate(templateValues);
                dataLayerData = this.templateFiller(externalLinkTemplate, fullTemplate);
                break;

            case 'internalLinkDataEvent':
                eventName = 'internal_link';
                tagName = 'VS - GA - Internal Link';

                templateValues = {
                    event: eventName,
                    tag_name: tagName,
                    click_text: clickText,
                    click_URL: href,
                };

                fullTemplate = this.compileFullTemplate(templateValues);
                dataLayerData = this.templateFiller(internalLinkTemplate, fullTemplate);
                break;

            case 'formsDataEvent':
                eventName = 'forms';
                tagName = 'VS - GA - Forms';

                templateValues = {
                    event: eventName,
                    tag_name: tagName,
                    form_status: 'form_submitted',
                };

                fullTemplate = this.compileFullTemplate(templateValues);
                dataLayerData = this.templateFiller(formsTemplate, fullTemplate);
                break;

            case 'errorDataEvent':
                eventName = 'errors';
                tagName = 'VS - GA - Errors';

                templateValues = {
                    event: eventName,
                    tag_name: tagName,
                    error_type: event.error_type,
                    error_details: event.error_details,
                };

                fullTemplate = this.compileFullTemplate(templateValues);
                dataLayerData = this.templateFiller(errorTemplate, fullTemplate);
                break;

            case 'videoTrackingDataEvent':
                eventName = 'video_tracking';
                tagName = 'VS - GA - Video Tracking';

                templateValues = {
                    event: eventName,
                    tag_name: tagName,
                    video_status: event.status,
                    video_title: event.title || '',
                    video_percent: event.percent || 0,
                };

                fullTemplate = this.compileFullTemplate(templateValues);
                dataLayerData = this.templateFiller(videoTrackingTemplate, fullTemplate);

                break;

            case 'socialShareDataEvent':
                eventName = 'share';
                tagName = 'VS - GA - Share';

                if (typeof event.target.text !== 'undefined') {
                    socialTargetText = event.target.text.trim();
                }

                templateValues = {
                    event: eventName,
                    tag_name: tagName,
                    click_text: socialTargetText,
                    click_URL: href,
                };

                fullTemplate = this.compileFullTemplate(templateValues);
                dataLayerData = this.templateFiller(shareTemplate, fullTemplate);

                break;

            case 'carbonQuestionEvent':
                eventName = 'carbonCalculatorQuestion';
                tagName = 'VS - GA - Carbon Calculator Question Answered';

                templateValues = {
                    event: eventName,
                    tag_name: tagName,
                    question_number: event.questionNumber,
                    answer: event.answer,
                };

                fullTemplate = this.compileFullTemplate(templateValues);
                dataLayerData = this.templateFiller(carbonQuestionTemplate, fullTemplate);

                break;

            case 'carbonCompleteEvent':
                eventName = 'carbonCalculatorComplete';
                tagName = 'VS - GA - Carbon Calculator Complete';

                templateValues = {
                    event: eventName,
                    tag_name: tagName,
                    total_emissions: event.totalEmissions,
                    total_per_day: event.totalPerDay,
                    travel_percent: event.travelPercent,
                    accommodation_percent: event.accommodationPercent,
                    food_percent: event.foodPercent,
                };

                fullTemplate = this.compileFullTemplate(templateValues);
                dataLayerData = this.templateFiller(carbonCompleteTemplate, fullTemplate);

                break;

            case 'cmsReferral':
                eventName = 'cms_referral';
                tagName = 'VS - GA4 - Event - CMS Link Click Referral';

                templateValues = {
                    event: eventName,
                    tag_name: tagName,
                    referral_location: event.referral_location,
                    dmo_referral: event.dmo_referral,
                };

                fullTemplate = this.compileFullTemplate(templateValues);
                dataLayerData = this.templateFiller(cmsReferralTemplate, fullTemplate);

                break;

            case 'accordionOpenEvent':
                eventName = 'accordion_opened';
                tagName = 'GA4 - Event - Accordion Opened';

                templateValues = {
                    event: eventName,
                    tag_name: tagName,
                    accordion_text: event.accordion_text,
                };

                fullTemplate = this.compileFullTemplate(templateValues);
                dataLayerData = this.templateFiller(accordionOpenTemplate, fullTemplate);

                break;

            case 'tabClickEvent':
                eventName = 'tab_click';
                tagName = 'GA4 - Event - Tab Click';

                templateValues = {
                    event: eventName,
                    tag_name: tagName,
                    event_tab: clickText,
                    event_listing: eventListing,
                };

                fullTemplate = this.compileFullTemplate(templateValues);
                dataLayerData = this.templateFiller(tabClickTemplate, fullTemplate);

                break;

            default:
            }

            this.pushToDataLayer(dataLayerData);
        },
        returnIsoDate() {
            const date = new Date(Date.now());
            return date.toISOString();
        },
        pushToDataLayer(object) {
            if (!this.dataLayerLoadConfirmed) {
                checkVendorLibrary('dataLayer', () => {
                    this.dataLayerLoadConfirmed = true;
                    window.dataLayer.push(object);
                });
            } else {
                window.dataLayer.push(object);
            }
        },
        compileFullTemplate(templateValues) {
            const storeValues = this.dataLayerStore.GTMData;
            const fullTemplate = {
                ...storeValues,
                ...templateValues,
            };

            fullTemplate.hit_timestamp = this.returnIsoDate();

            return fullTemplate;
        },
        targetText(event) {
            let text;

            if (event.target.text) {
                text = event.target.text.trim();
            } else {
                text = '';
            }

            return text;
        },
    },
};

export default dataLayerMixin;
