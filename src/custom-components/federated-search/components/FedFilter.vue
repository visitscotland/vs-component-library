<template>
    <div class="vs-fed-filter">
        <VsBody
            v-if="$slots['fed-filter-header'] && $slots['fed-filter-header']()"
            class="vs-fed-filter__header mb-025 ms-025"
            data-test="vs-fed-filter__header"
        >
            <!-- @slot Heading for the filter -->
            <slot name="fed-filter-header" />
        </VsBody>
        <div class="vs-fed-filter__scroll-container">
            <VsButton
                v-if="scrollButtons"
                variant="secondary"
                icon="fa-regular fa-chevron-left"
                icon-only
                class="vs-fed-filter__scroll-button me-050"
                data-test="vs-fed-filter__scroll-button--left"
                @click="scroll('left')"
                :aria-label="props.scrollLeftText"
            >
                {{ props.scrollLeftText }}
            </VsButton>
            <div
                class="vs-fed-filter__scroll-rail"
                :class="filterClasses()"
                :id="`vs-fed-filter__scroll-rail--${props.variant}`"
                ref="scrollRail"
            >
                <VsButton
                    v-for="(filterCategory, index) in sortedCategories"
                    :key="index"
                    class="vs-fed-filter__category-button"
                    :data-test="`vs-fed-filter__category-button--${filterCategory.id}`"
                    :icon="props.variant === 'primary' ? filterCategory.icon : null"
                    :variant="isActive(filterCategory.Label) ? 'primary' : 'secondary'"
                    :size="props.variant === 'secondary' ? 'sm' : 'md'"
                    @click="$emit('filter-updated', filterCategory)"
                >
                    {{ filterCategory.Label || filterCategory.Key }}
                </VsButton>
            </div>
            <VsButton
                v-if="scrollButtons"
                variant="secondary"
                icon="fa-regular fa-chevron-right"
                icon-only
                class="vs-fed-filter__scroll-button ms-050"
                data-test="vs-fed-filter__scroll-button--right"
                @click="scroll('right')"
                :aria-label="props.scrollRightText"
            >
                {{ props.scrollRightText }}
            </VsButton>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import VsButton from '@/components/button/Button.vue';
import VsBody from '@/components/body/Body.vue';
import useFederatedSearchStore from '@/stores/federatedSearch.store';

const federatedSearchStore = useFederatedSearchStore();

/**
 * Fed Filter is used in the Federated Search engine.
 * Top level variant to pick between broad categories,
 * Second level variant for fine grain filtering.
 *
 * @displayName FedFilter
 */

const props = defineProps({
    /*
    * Array of filter options
    * filterCategories: {
    *   id: string,
    *   label: string,
    *   icon?: string,
    * }
    */
    filterCategories: {
        type: Array,
        required: true,
    },
    /**
     * Variant of filter:
     * Primary: medium buttons with icons and 1em gap
     * Secondary: small buttons, no icons and 0.5em gap
     */
    variant: {
        type: String,
        default: 'primary',
        validator: (value) => /^(primary|secondary)$/.test(value),
    },
    /* Used to determine if the filter will wrap
     * rather than scroll on desktop or not
     */
    wrap: {
        type: Boolean,
        default: false,
    },
    /**
     * ID of currently active filter
     */
    activeFilter: {
        type: [String, Array],
        default: '',
    },
    /**
     * Enables the scroll buttons on filter
     */
    scrollButtons: {
        type: Boolean,
        default: false,
    },
    /**
     * Translated label for the scroll left button
     */
    scrollLeftText: {
        type: String,
        default: '',
    },
    /**
     * Translated label for the scroll right button
     */
    scrollRightText: {
        type: String,
        default: '',
    },
});

// Defines the scoll rail from the Template
const scrollRail = ref(null);

defineEmits(['filter-updated']);

function isActive(category) {
    if (typeof props.activeFilter === 'string') {
        return props.activeFilter === category;
    }

    if (props.activeFilter && typeof props.activeFilter === 'object') {
        return props.activeFilter.includes(category);
    }

    return false;
}
/**
 * This is not the best solution by any means
 * There is a better solution that doesn't rely on JS,
 * but is not stable across all browsers yet.
 * We should look to implent it, if we chose to keep it,
 * when it does become stable on Safari & Firefox.
 * https://developer.mozilla.org/en-US/docs/Web/CSS/::scroll-button
*/
function scroll(dir) {
    if (dir === 'left') scrollRail.value?.scrollBy(-200, 0);
    else if (dir === 'right') scrollRail.value?.scrollBy(200, 0);
}

federatedSearchStore.resetScroll = () => {
    scrollRail.value?.scrollTo(0, 0);
};

function filterClasses() {
    return [
        `vs-fed-filter__scroll-rail--${props.variant}`,
        props.wrap ? 'vs-fed-filter__scroll-rail--wrap' : '',
    ];
}

const sortedCategories = computed(() => {
    const sortedArr = [...props.filterCategories];

    return sortedArr.sort((a, b) => {
        const aValue = (a.Label || a.Key || '').toLowerCase();
        const bValue = (b.Label || b.Key || '').toLowerCase();

        if (aValue < bValue) {
            return -1;
        }
        if (aValue > bValue) {
            return 1;
        }

        return 0;
    });
});

</script>

<style lang="scss">
    .vs-fed-filter {
        &__header {
            font-weight: $vs-font-weight-medium;
        }

        &__scroll-container{
            display: flex;
        }

        &__scroll-rail {
            display: flex;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            align-items: center;
            padding: $vs-spacer-025;

            @include scrollsnap-styles;

            &--primary {
                column-gap: $vs-spacer-075;
                row-gap: $vs-spacer-075
            }

            &--secondary {
                column-gap: $vs-spacer-050;
                margin-top: $vs-spacer-025;
            }

            &--wrap {
                @include media-breakpoint-up(lg) {
                    overflow-x: hidden;
                    scroll-snap-type: none;
                    flex-wrap: wrap;
                    row-gap: $vs-spacer-050;
                }
            }

            @media (prefers-reduced-motion: no-preference) {
                scroll-behavior: smooth;
            }
        }

        &__scroll-button {
            flex: 0 0 max-content;
            aspect-ratio: 1/1;
            margin-top: $vs-spacer-025;
        }

        &__category-button {
            flex: 0 0 content;
            height: min-content;
        }
    }
</style>
