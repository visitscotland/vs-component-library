<template>
    <div class="vs-fed-filter">
        <VsHeading
            v-if="$slots['fed-filter-header']"
            class="mb-075"
            heading-level="4"
            heading-style="heading-xxxs"
            data-test="vs-fed-filter-header"
        >
            <!-- @slot Heading for the filter -->
            <slot name="fed-filter-header" />
        </VsHeading>
        <div class="vs-fed-filter--scroll-container">
            <VsButton
                v-if="scrollButtons"
                variant="secondary"
                icon="fa-regular fa-chevron-left"
                icon-only
                class="vs-fed-filter--scroll-button vs-fed-filter--scroll-button__left"
                @click="scroll('left')"
            >
                Scroll left
            </VsButton>
            <div
                class="vs-fed-filter--scroll-rail"
                :class="filterClasses()"
                :id="`vs-fed-filter--scroll-rail_${variant}`"
            >
                <VsButton
                    v-for="(filterCategory, key) in props.filterCategories"
                    :key
                    class="vs-fed-filter--category-button"
                    :data-test="`vs-fed-filter--category-button_${filterCategory.id}`"
                    :icon="variant === 'primary' ? filterCategory.icon : null"
                    :variant="activeFilter === filterCategory.id ? 'primary' : 'secondary'"
                    :size="variant === 'secondary' ? 'sm' : 'md'"
                    @click="$emit('filter-updated', event)"
                >
                    {{ filterCategory.label }}
                </VsButton>
            </div>
            <VsButton
                v-if="scrollButtons"
                variant="secondary"
                icon="fa-regular fa-chevron-right"
                icon-only
                class="vs-fed-filter--scroll-button vs-fed-filter--scroll-button__right"
                @click="scroll('right')"
            >
                Scroll right
            </VsButton>
        </div>
    </div>
</template>

<script setup>

import VsButton from '@/components/button/Button.vue';
import VsHeading from '@/components/heading/Heading.vue';

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
        type: Object,
        required: true,
    },
    /**
     * Variant of filter:
     * Primary: medium buttons with icons and 1em gap
     * Secondary: small buttons, no icons and 0.5em gap
     */
    variant: {
        type: String,
        required: true,
        default: 'primary',
        validator: (value) => value.match(
            /(primary|secondary)/,
        ),
    },
    /* Used to determine if the filter will wrap
     * rather than scroll on desktop or not
     */
    wrap: {
        type: Boolean,
        required: true,
        default: false,
    },
    /**
     * ID of currently active filter
     */
    activeFilter: {
        type: String,
        required: false,
    },
    /**
     * Enables the scroll buttons on fitler
     */
    scrollButtons: {
        type: Boolean,
        required: false,
        default: false,
    },
});

defineEmits(['filter-updated']);

/**
 * This is not the best solution by any means
 * There is a better solution that doesn't rely on JS,
 * but is not stable across all browsers yet.
 * We should look to implent it, if we chose to keep it,
 * when it does become stable on Safari & Firefox.
 * https://developer.mozilla.org/en-US/docs/Web/CSS/::scroll-button
*/
function scroll(dir) {
    const scrollRail = document.getElementById(`vs-fed-filter--scroll-rail_${props.variant}`);

    if (dir === 'left') scrollRail?.scrollBy(-300, 0);
    else if (dir === 'right') scrollRail?.scrollBy(300, 0);
}

function filterClasses() {
    return [
        `vs-fed-filter--scroll-rail_${props.variant}`,
        props.wrap ? 'vs-fed-filter--scroll-rail_wrap' : '',
    ];
}
</script>

<style lang="scss">
    .vs-fed-filter {

        &--scroll-container{
            display: flex;
        }

        &--scroll-rail {
            display: flex;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            align-items: center;

            &_primary {
                column-gap: $vs-spacer-075;
                row-gap: $vs-spacer-075
            }

            &_secondary {
                column-gap: $vs-spacer-050;
            }

            &_wrap {

                @include media-breakpoint-up(lg) {
                    overflow-x: none;
                    scroll-snap-type: none;
                    flex-wrap: wrap;
                    row-gap: $vs-spacer-050;
                }
            }

            @media (prefers-reduced-motion: no-preference) {
                scroll-behavior: smooth;
            }
        }

        &--scroll-button {
            flex: 0 0 max-content;
            aspect-ratio: 1/1;

            &__left {
                margin-right: $vs-spacer-050;
            }

            &__right {
                margin-left: $vs-spacer-050;
            }
        }

        &--category-button {
            flex: 0 0 content;
            height: min-content;
        }
    }
</style>
