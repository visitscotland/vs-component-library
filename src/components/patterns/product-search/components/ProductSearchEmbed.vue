<template>
    <div class="vs-product-search-embed">
        <div 
            v-if="!reRender"
            class="container"
        >
            <div class="row">
                <div class="col-12">
                    <form 
                        :action="formAction"
                        @submit.prevent="preSubmitChecks"
                        accept-charset="UTF-8"
                    >   
                        <div class="form-group">
                            <label for="prodtypes">
                                {{ getLabelText('search_for', 'I\'m looking for') }}
                            </label>
                            <VsSelect
                                :options="translatedProds"
                                :value="defaultProd"
                                @updated="(selectedOption) => selectedProd = selectedOption.value"
                                field-name="prodtypes"
                            />
                        </div>

                        <div aria-live="polite">
                            <Autocomplete
                                v-if="selectedProd != 'tour' && locationDataLoaded"
                                id="search-location"
                                :label="getLabelText('location', 'Location')"
                                multiselect-label="name"
                                name="loc"
                                :options="locations"
                                :placeholder="getLabelText('location_placeholder', 'Enter a location')"
                                track-by="name"
                                @change-value="(newLocation) => getPlaceData(newLocation)"
                                :default-val="chosenLocation"
                            />

                            <input
                                v-if="selectedProd !== 'tour'"
                                type="hidden"
                                name="locplace"
                                :disabled="chosenLocation?.type === 'POLYGON'"
                                :value="chosenLocation?.key || ''"
                            >
                            <input
                                v-if="selectedProd !== 'tour'"
                                type="hidden"
                                name="locpoly"
                                :disabled="chosenLocation?.type !== 'POLYGON'"
                                :value="chosenLocation?.key || ''"
                            >
                            <input
                                v-if="selectedProd !== 'tour'"
                                type="hidden"
                                name="locprox"
                                :value="chosenLocation?.type === 'DISTRICT' ? 1 : 0"
                            >
                            <input
                                v-if="selectedProd !== 'tour' && chosenLocation?.type === 'DISTRICT'"
                                type="hidden"
                                name="areaproxdist"
                                value="10"
                            >

                            <div v-if="selectedProd === 'even' || selectedProd === 'acco'">
                                <DateRange
                                    v-if="selectedProd === 'even' || selectedProd === 'acco'"
                                    :start-label="getLabelText('startdate', 'Start Date', 'dates')"
                                    :end-label="getLabelText('enddate', 'End Date', 'dates')"
                                    :default-dates="defaultDates"
                                />

                                <div 
                                    class="form-group"
                                    v-if="selectedProd === 'even'"
                                >
                                    <label for="search-keyword">
                                        {{ getLabelText('keywords', 'Keywords') }}
                                    </label>
                                    <VsInput
                                        field-name="search-keyword"
                                        :placeholder="getLabelText('events_keywords_placeholder', 'Highland games, music festivals etc')"
                                        name="name"
                                    />
                                </div>

                                <GuestSelector
                                    v-if="selectedProd === 'acco'"
                                    :availability="true"
                                    :label="getLabelText('guests', 'Guests')"
                                    id="guest-selector"
                                />

                                <div v-if="selectedProd === 'acco'">
                                    <input
                                        hidden="true"
                                        name="avail"
                                        value="on"
                                    />
                                </div>
                            </div>
                        </div>

                        <div v-if="selectedProd === 'tour'">
                            <Autocomplete
                                id="tour-origin"
                                :label="getLabelText('tour_origin', 'Starting point')"
                                multiselect-label="name"    
                                name="origins[]"
                                :options="origins"
                                :placeholder="getLabelText('tour_origin_placeholder', 'Location')"
                                track-by="name"
                                :is-tour-location="true"
                            />

                            <input
                                type="hidden"
                                name="attractions[]"
                                v-for="keyword in keywords"
                                :value="keyword"
                            />

                            <Autocomplete
                                id="tour-month"
                                :label="getLabelText('tour_month', 'I\'m traveling in')"
                                multiselect-label="label"
                                name="when"
                                :options="getLabelText('months', monthsEnglish)"
                                :placeholder="getLabelText('tour_month_placeholder', 'Select month')"
                                track-by="value"
                            />
                        </div>

                        <VsButton
                            class="mt-6"
                            variant="dark"
                        >
                            {{ getLabelText('search', 'Search') }}
                        </VsButton>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onBeforeMount, nextTick } from 'vue';
import { getLabelText, getLocale, getProductName } from '../../../../utils/lang';
import { paths, monthsEnglish } from '../../../../constants';
import { getProductTypes } from '../../../../utils/utils';
import { getData } from '../../../../utils/axios';
import type { Location, TmsApiDataItem, SelectOption } from '../../../../types';

import VsSelect from '../../../elements/select/Select.vue';
import VsInput from '../../../elements/input/Input.vue';
import Autocomplete from './Autocomplete.vue';
import GuestSelector from './GuestSelector.vue';
import DateRange from './DateRange.vue';
import VsButton from '../../../elements/button/Button.vue';

/**
 * A module housing the PSR widget, a title and optional text
 *
 * @displayName Product Search
 */

const props = defineProps({
    defaultProd: {
        type: String,
        default: 'acti,attr,reta',
    },
    defaultLocation: {
        type: String,
        default: '',
    },
    defaultLocale: {
        type: String,
        default: '',
    },
});

const reRender = ref(false);
const selectedProd = ref();
const keywords = ref([]);
const form = ref(null);
let chosenLocation = ref<Location>();
const defaultDates = ref(false);
const path = computed(() => {
    const pathValue = typeof selectedProd.value === 'undefined' ? 'see-do' : selectedProd.value;
    return `/info/${paths[pathValue]}`;
});
let locationDataLoaded = false;
const langConfig = {
    en: {
        localeUrl: '',
    },
    fr: {
        localeUrl: 'fr-fr',
    },
    de: {
        localeUrl: 'de-de',
    },
    es: {
        localeUrl: 'es-es',
    },
    it: {
        localeUrl: 'it-it',
    },
    nl: {
        localeUrl: 'nl-nl',
    },
};

const locale = computed(() => {
    let localeVal = props.defaultLocale.length > 0 ? props.defaultLocale : getLocale();

    if (localeVal === 'en') {
        localeVal = '';
    }

    return localeVal;
});

const baseUrl  = computed(() => {
    if (typeof window !== 'undefined') {
        let origin = window.location.origin;

        if (origin.includes('localhost')) {
            return 'https://www.visitscotland.com'
        }

        return origin;
    }

    return 'https://www.visitscotland.com';
}); 

const formAction  = computed(() => {
    return `${baseUrl.value}${locale.value ? '/'+locale.value : ''}${path.value}/search-results`
});

/* Location data */
const locationLocale = `?locale=${locale.value}`
const locationsUrl = `https://www.visitscotland.com/data/locations` + locationLocale;

const locations = ref<Location[]>([]);

const getPlaceData = (placeKey) => {
    chosenLocation.value = locations.value.find(place => place.name === placeKey);
};

const prods = ref<SelectOption[]>([]);

const initProductTypes = () => {
    const prodsFromData = getProductTypes();
    const prodArr: SelectOption[] = [];
    prodsFromData.forEach((prod) => {
        prodArr.push(prod);
    })
    prods.value = prodArr;
};

/* Attractions data */
const attractionsUrl = `https://www.visitscotland.com/tms-api/v1/attractions`;
const attractions = ref<TmsApiDataItem[]>([]);

/* Orgin data */
const originsUrl = `https://www.visitscotland.com/tms-api/v1/origins?active=1`;
const origins = ref<TmsApiDataItem[]>([]);


const getLangUrl= () => {
    return langConfig[props.defaultLocale] || '';
};

const setRender = () => {
    reRender.value = true;
    
    nextTick(() => {
        reRender.value = false;
    });
}

const translatedProds = computed(() => {
    if (!reRender.value) {
        const prodTypes = prods.value.map((product) => {
            return {
                ...product,
                text: getProductName(product.value, product.text)
            };
        });
        return prodTypes;
    }

    return [];
})


onBeforeMount(async () => {
    window.VS = {
    };

    const langScriptEl = document.createElement('script');
    langScriptEl.async = false;
    langScriptEl.onload = setRender;
    langScriptEl.setAttribute('src', `https://www.visitscotland.com/${getLangUrl().localeUrl}/data/template/search.js`);
    document.head.appendChild(langScriptEl);
});

onMounted(async () => {
    // Get location data.
    const locationResponse = await getData(locationsUrl);
    if (locationResponse){
        locations.value = locationResponse.data;
    }

    if (props.defaultLocation !== '') {
        getPlaceData(props.defaultLocation);
    }

    // Once data is loaded, load child components reliant on it
    locationDataLoaded = true;
 
    selectedProd.value = props.defaultProd;

    initProductTypes();

    // Get attraction data.
    const attractionResponse = await getData(attractionsUrl);
    if (attractionResponse){
        attractions.value = attractionResponse.data;
    }

    // Get origins data.
    const originsResponse = await getData(originsUrl);
    if (originsResponse){
        origins.value = originsResponse.data;
    }
});

const preSubmitChecks = (e) => {
    defaultDates.value = true;
    const form = e.currentTarget;
    setTimeout(function() {
        form.submit();
    }, 500);
}

</script>

<style lang="scss">
    @include forms-common;

    .vs-input {
        @include form-element-styles;
        margin-top: $spacer-2;

        &.form-control-md {
            height: 50px;
        }

        &:focus {
            @include form-focus-state;
        }

        &--error {
            @include form-error-state;
        }

        &__clear-button {
            position: absolute;
            right: $spacer-5;
            top: 50%;
            transform: translate(0, -50%);
        }
    }

    .vs-select {
        &__element {
            background: $color-white;
        }
    }

    .simple-typeahead {
        position: relative;

        &-list {
            position: absolute;
            display: flex;
            flex-direction: column;
            max-height: 250px;
            overflow-y: scroll;
            background: #fff;
            width: 100%;
            z-index: 10;

            &-item{
                cursor: pointer;
                font-size: $font-size-4;
                padding: $spacer-2 $spacer-4;

                &:hover{
                    background-color: $color-secondary-gray-tint-6;
                    color: $color-base-text;
                }
            }
        }
    }

    .multiselect {
        height: 50px;

        &.is-active {
            @include form-focus-state;
        }

        &::after {
            font-family: "Font Awesome Kit";
            content: "\e06c";
            line-height: $line-height-s;
            vertical-align: text-top;
            text-align: center;
            display: inline-block;
            text-rendering: auto;
            -webkit-font-smoothing: antialiased;
            width: 1.5rem;
            height: 1.5rem;
            border: 1px solid $color-black;
            border-radius: 1000px;
            position: absolute;
            top: calc(50% - #{$spacer-3});
            right: $spacer-4;
            pointer-events: none;
        }
    }

    .multiselect-tags {
        flex-wrap: nowrap;
        overflow: hidden;
        min-height: 42px;
        max-width: 80%;
        align-self: flex-start;
        margin-right: 4px;

        .multiselect-tag{
            background: $color-secondary-gray-tint-5;
            color: $color-base-text;
        }
    }

    .multiselect-wrapper {
        min-height: auto;
        justify-content: flex-start;
        appearance: none;
        background-color: transparent;
        border: none;
        margin: 0;
        width: 100%;
        font-family: inherit;
        font-size: inherit;
        cursor: inherit;
        line-height: inherit;
        height: 50px;
        @include form-element-styles;
        overflow: hidden;
    }

    .multiselect-option.is-pointed{
        background-color: $color-secondary-gray-tint-6;
        color: $color-base-text;
    }

    .multiselect-caret {
        display: none;
    }

    .multiselect-placeholder {
        color: $color-base-text;
        opacity: 0.8;
    }
</style>
