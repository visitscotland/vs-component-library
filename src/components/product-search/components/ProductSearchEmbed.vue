<template>
    <div 
        class="vs-product-search-embed"
        data-test="vs-product-search-embed"
    >
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
                        data-test="psw-form"
                        v-if="locationDataLoaded"
                    >   
                        <div class="form-group product-search__type mb-100">
                            <label for="prodtypes">
                                {{ getLabelText('search_for', 'I\'m looking for') }}
                            </label>
                            <div :class="productSearchTypeClass">
                                <VsSelect
                                    :options="translatedProds"
                                    :value="defaultProd"
                                    @updated="onChange($event)"
                                    field-name="prodtypes"
                                />
                                <div class="product-search__in d-none d-md-block mt-100">
                                    {{ getLabelText('in', 'in') }}
                                </div>
                            </div>
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
                                data-chromatic="ignore"
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
                                    :start-label="getLabelText('startdate', 'Start Date', 'dates')"
                                    :end-label="getLabelText('enddate', 'End Date', 'dates')"
                                    @date-updated="(datesExist) => dateUpdated(datesExist)"
                                    :default-dates="defaultDates"
                                    :selected-prod="selectedProd"
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
                                    id="guest-selector"
                                />

                                <div v-if="selectedProd === 'acco'">
                                    <input
                                        hidden="true"
                                        name="avail"
                                        :value="availSearch"
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
                            class="mt-150"
                            data-test="psw-submit"
                            type="submit"
                            @click="trackSubmit(selectedProd, typeof chosenLocation === 'undefined' ? '' : chosenLocation)"
                        >
                            {{ getLabelText('search', 'Search') }}
                        </VsButton>
                    </form>

                    <template v-if="!locationDataLoaded">
                        <VsLoadingSpinner variant="dark" />
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    //  Options API script block used to allow Vue 2 mixin to be used
    import { defineComponent } from "vue"; 
    import dataLayer from '../../../mixins/dataLayerMixin';
    
    export default defineComponent({
        mixins: [dataLayer],
        methods: {
            trackSubmit(type, location) {
                this.createDataLayerObject(
                    'productSearchDataEvent',
                    {
                        searchType: type,
                        searchLocation: location.name,
                    },
                     this.href
                );
            }
        },
    });
</script>

<script setup lang="ts">
import { computed, ref, onMounted, onBeforeMount, nextTick } from 'vue';
import { getLabelText, getLocale, getProductName } from '../../../utils/lang';
import { paths, monthsEnglish } from '../../../constants';
import { getProductTypes } from '../../../utils/utils';
import { getData } from '../../../utils/axios';
import type { Location, TmsApiDataItem, SelectOption } from '../../../types/types';
import VsLoadingSpinner from '@/components/loading-spinner/LoadingSpinner.vue';
import VsSelect from '@/components/select/Select.vue';
import VsInput from '@/components/input/Input.vue';
import Autocomplete from './Autocomplete.vue';
import GuestSelector from './GuestSelector.vue';
import DateRange from './DateRange.vue';
import VsButton from '@/components/button/Button.vue';

/**
 * A module housing the PSR widget, a title and optional text
 *
 * @displayName Product Search
 */

const props = defineProps({
    defaultProd: {
        type: String,
        default: 'acti,attr,reta',
        validator(value: string) {
            return ['acco', 'cate', 'even', 'tour', 'acti,attr,reta'].includes(value)
        }
    },
    defaultLocale: {
        type: String,
        default: '',
        validator(value: string) {
            return ['en', 'fr', 'de', 'es', 'it', 'nl', ''].includes(value)
        }
    },
    defaultLocation: {
        type: String,
        default: '',
    },
});

/* Data */
const reRender = ref(false);
const selectedProd = ref();
const keywords = ref([]);
const form = ref(null);
let chosenLocation = ref<Location>();
chosenLocation.value = {
    id: '',
    key: '',
    name: '',
    type: '', 
}
const availSearch = ref('off');
const defaultDates = ref(false);
const path = computed(() => {
    const pathValue = typeof selectedProd.value === 'undefined' ? 'see-do' : selectedProd.value;
    return `/info/${paths[pathValue]}`;
});
let locationDataLoaded = ref(false);
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

/* Attractions data */
const attractionsUrl = `https://www.visitscotland.com/tms-api/v1/attractions`;
const attractions = ref<TmsApiDataItem[]>([]);

/* Orgin data */
const originsUrl = `https://www.visitscotland.com/tms-api/v1/origins?active=1`;
const origins = ref<TmsApiDataItem[]>([]);

/* Product types */
const prods = ref<SelectOption[]>([]);

const initProductTypes = () => {
    const prodsFromData = getProductTypes();
    const prodArr: SelectOption[] = [];
    prodsFromData.forEach((prod) => {
        prodArr.push(prod);
    })
    prods.value = prodArr;
};

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

const getLocationData = async () => {
    const locationResponse = await getData(locationsUrl);
    if (locationResponse){
        locations.value = locationResponse.data;
    }
};

const getToursOriginData = async () => {
    const originsResponse = await getData(originsUrl);
    if (originsResponse){
        origins.value = originsResponse.data;
    }
};

const getToursAttractionData = async () => {
    const attractionResponse = await getData(attractionsUrl);
    if (attractionResponse){
        attractions.value = attractionResponse.data;
    }
};

const getPlaceData = (placeKey, type?) => {
    if (type === 'key') {
        chosenLocation.value = locations.value.find(place => place.key === placeKey);
    } else if (type === 'id') {
        chosenLocation.value = locations.value.find(place => place.id === placeKey);
    } else {
        chosenLocation.value = locations.value.find(place => place.name === placeKey.trim());
    }
};

const onChange = (e) => {
    const prodType = e.value;
    selectedProd.value = prodType;

    if (prodType === 'tour') {
        getToursOriginData();
        getToursAttractionData();
    }
}

const getLangUrl= () => {
    return langConfig[props.defaultLocale] || '';
};

const setRender = () => {
    reRender.value = true;
    
    nextTick(() => {
        reRender.value = false;

        if (props.defaultLocation !== '' && locationDataLoaded) {
            getPlaceData(props.defaultLocation, 'id');
        }
    });
}

const productSearchTypeClass = computed(() => {
    return selectedProd.value !== 'cate' && selectedProd.value !== 'acti,attr,reta' ? 'd-lg-flex' : ''
});

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
    getLocationData();

    // Once data is loaded, load child components reliant on it
    locationDataLoaded.value = true;
 
    selectedProd.value = props.defaultProd;

    if (selectedProd.value === 'tour') {
        getToursOriginData();
        getToursAttractionData();
    }

    initProductTypes();
});

const dateUpdated = (datesExist) => {
    availSearch.value = datesExist ? 'on' : 'off'; 
}

const preSubmitChecks = (e) => {
    defaultDates.value = true;
    const form = e.currentTarget;

    setTimeout(function() {
        form.submit();
    }, 500);
}

</script>

<style lang="scss">
    .product-search__type {
        @include media-breakpoint-up(lg) {
            .d-lg-flex {
                .vs-select {
                    width: 100%;
                }

                .product-search__in {
                    margin: 0 $spacer-100;
                }
            }
        }

        .product-search__in {
            font-weight: $font-weight-semi-bold;
        }
    }
</style>
