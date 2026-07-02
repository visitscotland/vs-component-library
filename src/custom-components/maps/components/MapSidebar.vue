<!-- eslint-disable vue/component-name-in-template-casing -->
<template>
    <div
        class="vs-map-sidebar"
        ref="sidebar"
        :style="sidebarStyle"
        @pointerdown="startDrag"
    >
        <div
            v-show="props.mapLoaded"
            class="vs-map-sidebar__panel1"
        >
            <div class="vs-map-sidebar__handle">
                <VsButton
                    variant="subtle"
                    @click="isOpen = !isOpen"
                >
                    <div class="vs-map-sidebar__handle-bar" />
                    <span class="sr-only">
                        {{ props.sidebarLabels.openSidebarButtonLabel }}
                    </span>
                </VsButton>
            </div>

            <div class="vs-map-sidebar__content">
                <div class="vs-map-sidebar__section1">
                    <VsHeading
                        class="flex-grow-1"
                        data-test="vs-map-sidebar__heading"
                        heading-style="heading-xxs"
                        id="vs-map-sidebar__heading"
                        level="1"
                        no-margins
                    >
                        {{ props.sidebarLabels.headerLabel }}
                    </VsHeading>

                    <div class="vs-map-sidebar__input d-flex mt-050 mb-050">
                        <VsInput
                            :aria-label="props.sidebarLabels.searchBarAriaLabel"
                            autocomplete="off"
                            class="vs-map-sidebar__input flex-grow-1"
                            data-test="vs-map-search-input"
                            field-name="vs-map-search-input"
                            :placeholder="props.sidebarLabels.inputPlaceholderLabel"
                            :value="googleMapStore.searchTerm"
                            @keyup.enter="$emit('search-input-changed')"
                        />
                        <VsButton
                            class="vs-map-sidebar__search-button"
                            data-test="vs-map-sidebar__search-button"
                            icon="vs-icon-control-search"
                            icon-only
                            :rounded="false"
                            size="lg"
                            @click="$emit('search-input-changed')"
                            @keyup.enter="$emit('search-input-changed')"
                        >
                            {{ props.sidebarLabels.searchButtonLabel }}
                        </VsButton>
                    </div>

                    <a
                        v-if="props.query || props.selectedCategory"
                        class="d-block"
                        href="#"
                        data-test="vs-map-sidebar__reset-map"
                        @click.prevent="$emit('reset-map')"
                        @keyup.enter.prevent="$emit('reset-map')"
                    >
                        {{ props.sidebarLabels.clearMapLabel }}
                    </a>
                </div>

                <div class="vs-map-sidebar__section2">
                    <div v-if="googleMapStore.showDestinations">
                        <VsMapFilter
                            :detail-text="props.sidebarLabels.locationSelectLabel"
                            has-icons
                            :items="filteredDestinationCategories"
                            :selected-category="googleMapStore.selectedDestinationType"
                            @changed="(event) => handleDestinationTypeClick(event.id)"
                        />
                    </div>

                    <div v-if="googleMapStore.showCategories">
                        <VsMapFilter
                            has-icons
                            :items="filteredCategories"
                            :selected-category="props.selectedCategory"
                            @changed="(event) =>
                                $emit('category-selected', { id: event.id, key: event.key })"
                        />

                        <VsMapFilter
                            v-if="props.selectedCategory && subcategories"
                            :detail-text="props.sidebarLabels.subFilterHeaderLabel"
                            :items="subcategories"
                            :selected-category="Array.from(props.selectedSubcategories)"
                            @changed="(event) =>
                                $emit('subcategory-selected', { id: event.id, key: event.key })"
                        />
                    </div>
                </div>

                <div class="vs-map-sidebar__section3">
                    <div class="vs-map-sidebar__search-results">
                        <VsHeading
                            v-if="$props.query || $props.selectedCategory"
                            data-test="vs-map-sidebar__search-result-query"
                            heading-style="heading-xxxs"
                            level="2"
                        >
                            {{ props.sidebarLabels.searchResultsLabel }}
                            "{{ props.query || props.selectedCategory }}"
                        </VsHeading>

                        
                        <a
                            v-if="props.query || props.selectedCategory"
                            href="#"
                            data-test="vs-map-sidebar__hard-reset-map"
                            @click.prevent="$emit('reset-location')"
                            @keyup.enter.prevent="$emit('reset-location')"
                        >
                            {{ props.sidebarLabels.resetLocationLabel }}
                        </a>
                        
                        <div class="vs-map-sidebar__google-maps-container">
                            <!-- @Slot to contain Google Maps Places
                                UI Kit Search Results/Details components -->
                            <slot name="vs-map-sidebar-search-results" />
                        </div>
                    </div>

                    <VsRow
                        v-if="googleMapStore.showDestinations"
                        class="vs-map__destinations"
                    >
                        <VsMapFeaturedLocationItem
                            v-for="destination in props.destinations"
                            :key="destination.properties.id"
                            :place="destination"
                        />
                    </VsRow>
                </div>
            </div>
        </div>

        <div v-show="isResultsOpen" class="vs-map-sidebar__panel2">
            <div class="vs-map-sidebar__handle">
                <VsButton
                    variant="subtle"
                    @click="isOpen = !isOpen"
                >
                    <div class="vs-map-sidebar__handle-bar" />
                    <span class="sr-only">
                        {{ props.sidebarLabels.openSidebarButtonLabel }}
                    </span>
                </VsButton>
            </div>

            <div class="vs-map-detail-container">
                <VsButton
                    class="vs-map-detail-container__dismiss"
                    data-test="vs-map-detail-container__dismiss"
                    icon="vs-icon-control-dismiss"
                    icon-only
                    variant="subtle"
                    @click="isResultsOpen = false"
                >
                    {{ props.sidebarLabels.closeSidebarButtonLabel }}
                </VsButton>

                <gmp-place-details
                    id="placeDetails"
                    ref="place-details"
                    style="display: none"
                >
                    <gmp-place-details-place-request
                        id="placeRequest"
                        ref="place-request"
                    />
                    <gmp-place-content-config>
                        <gmp-place-address />
                        <gmp-place-rating />
                        <gmp-place-type />
                        <gmp-place-price />
                        <gmp-place-accessible-entrance-icon />
                        <gmp-place-opening-hours />
                        <gmp-place-website />
                        <gmp-place-phone-number />
                        <gmp-place-summary />
                        <gmp-place-type-specific-highlights />
                        <gmp-place-reviews />
                        <gmp-place-feature-list />
                        <gmp-place-media lightbox-preferred />
                        <gmp-place-attribution
                            light-scheme-color="gray"
                            dark-scheme-color="gray"
                        />
                    </gmp-place-content-config>
                </gmp-place-details>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {
    computed,
    onMounted,
    useTemplateRef,
} from 'vue';
import VsButton from '@/components/button/Button.vue';
import VsHeading from '@/components/heading/Heading.vue';
import VsInput from '@/components/input/Input.vue';
import VsRow from '@/components/grid/Row.vue';
import useGoogleMapStore from '@/stores/mainMap.store';
import useSwipeDrawer from '../composables/useSwipeDrawer';
import VsMapFeaturedLocationItem from './MapFeaturedLocationItem.vue';
import VsMapFilter from './MapFilter.vue';

type CategoryConfig = Record<string, Category>;

type Category = {
    id: string;
    icon: string;
    includedType?: string[];
    excludedType?: string[];
    keywords?: string[];
    subCategory: Subcategory[];
};

type Subcategory = {
    id: string;
    includedType: string[];
    excludedType?: string[];
};

type Categories = {
    label: string;
    id: string;
    cmsData?: boolean;
    subCategory: {
        label: string;
        id: string;
    }[];
};

type DestinationCategory = {
    label: string;
    id: string;
}

type Props = {
    /** Label and id for the category buttons */
    categories: Categories[];
    /** Icon data for the category buttons */
    categoryData?: CategoryConfig;
    /** List of destinations */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    destinations: any;
    /** List of destination categories */
    destinationCategories: DestinationCategory[];
    /** Whether the map is loaded or not. */
    mapLoaded?: boolean;
    /** Test query from Map Search */
    query?: string;
    /** Selected top level category */
    selectedCategory?: string;
    /** Selected sub categories */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    selectedSubcategories?: any;
    /** Labels for the sidebar */
    sidebarLabels: Record<string, string>;
};

const props = withDefaults(defineProps<Props>(), {
    categoryData: undefined,
    mapLoaded: false,
    query: undefined,
    selectedCategory: undefined,
    selectedSubcategories: undefined,
});

// Two-way binding for sidebar open/close state.
const isOpen = defineModel<boolean>('isOpen', {
    default: false,
});

// Two-way binding for results panel open/close state.
const isResultsOpen = defineModel<boolean>('isResultsOpen', {
    default: false,
});

const emit = defineEmits<{
    'category-selected': [{
        id: string;
        key: number | string;
    }],
    'destination-type-selected': [],
    'reset-location': [],
    'reset-map': [],
    'search-input-changed': [],
    'subcategory-selected': [{
        id: string;
        key: number | string;
    }],
}>();

const sidebar = useTemplateRef('sidebar');

const googleMapStore = useGoogleMapStore();
const {
    startDrag,
    sidebarStyle,
} = useSwipeDrawer(isOpen, sidebar);

const filteredCategories = props.categories.filter((category: Categories) => !category.cmsData);

const subcategories = computed(() => {
    if (!props.selectedCategory) return null;

    const categoryData = props.categories.find(
        (cat: Categories) => cat.id === props.selectedCategory,
    );

    if (!categoryData) return null;

    return categoryData.subCategory;
});

// Temporary hide "Town" from the destinations categories.
const filteredDestinationCategories = props.destinationCategories.filter((category: DestinationCategory) => category.id !== 'towns');

function handleDestinationTypeClick(id: string) {
    googleMapStore.selectedDestinationType = id;
    emit('destination-type-selected');
}

onMounted(() => {
    googleMapStore.selectedDestinationType = props.destinationCategories[0].id;
});
</script>

<style lang="scss">
.vs-map-sidebar {
    height: 91vh;
    max-height: 900px;
    min-height: 400px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    
    display: block;
    
    @include media-breakpoint-down(md) {
        right: 0;
        bottom: 0;
    }

    @include media-breakpoint-up(md) {
        height: 85vh;
        position: absolute;
        top: $vs-spacer-100;
        left: $vs-spacer-100;

        display: flex;
        gap: 1rem;
    }

    &__panel1,
    &__panel2 {
        background: $vs-color-background-primary;
        border-radius: $vs-radius-large $vs-radius-large 0 0;
        height: 100%;
        overflow: hidden;
        padding: $vs-spacer-075 $vs-spacer-125;

        @include media-breakpoint-up(md) {
            border-radius: $vs-radius-large;
            box-shadow: $vs-elevation-shadow-raised;
            overflow: auto;
            padding: $vs-spacer-125;
            width: 23.3rem;
        }
    }

    &__panel2 {
        @include media-breakpoint-down(md) {
            position: absolute;
            top: 0;
            right: 0;
            left: 0;
            z-index: 50;
        }
    }

    &__handle {
        display: flex;
        justify-content: center;
        padding: $vs-spacer-0 $vs-spacer-075 $vs-spacer-075 $vs-spacer-075;

        @include media-breakpoint-up(md) {
            display: none;
        }
    }

    &__handle-bar {
        background: $vs-color-background-highlight;
        border-radius: $vs-radius-large;
        height: 4px;
        width: 48px;
    }

    &__input input {
        margin: $vs-spacer-0;
        border-radius: $vs-radius-small $vs-radius-none $vs-radius-none $vs-radius-small;
        border-right: none;
        height: 52px;
    }

    &__search-button {
        flex-grow: 0.125;
        border-radius: $vs-radius-none $vs-radius-small $vs-radius-small $vs-radius-none;
    }

    &__content {
        display: flex;
        flex-direction: column;
        height: 100%;
        
        .vs-map-sidebar__section1,
        .vs-map-sidebar__section2 {
            flex-shrink: 0;
        }

        .vs-map-sidebar__section3 {
            flex: 1;
            margin-bottom: $vs-spacer-050;
            overflow: hidden auto;
        }
    }
}

.vs-map-detail-container {
    position: relative;

    &__dismiss {
        position: absolute !important;
        right: $vs-spacer-100;
        z-index: 1001;
    }

    gmp-place-details {
        border: none;
    }
}
</style>
