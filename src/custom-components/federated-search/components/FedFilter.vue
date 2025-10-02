<template>
    <div class="vs-fed-filter">
        <VsBody
            v-if="$slots['fed-filter-header'] && $slots['fed-filter-header']()"
            class="vs-fed-filter--header mb-075"
            data-test="vs-fed-filter-header"
        >
            <!-- @slot Heading for the filter -->
            <slot name="fed-filter-header" />
        </VsBody>
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
                    v-for="(filterCategory, index) in props.filterCategories"
                    :key="index"
                    class="vs-fed-filter--category-button"
                    :data-test="`vs-fed-filter--category-button_${filterCategory.id}`"
                    :icon="variant === 'primary' ? filterCategory.icon : null"
                    :variant="isActive(filterCategory.Key) ? 'primary' : 'secondary'"
                    :size="variant === 'secondary' ? 'sm' : 'md'"
                    @click="$emit('filter-updated', filterCategory.Key)"
                >
                    {{ filterCategory.Key }}
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
// Buttons should be links on homepage!
import VsButton from '@/components/button/Button.vue';
import VsBody from '@/components/body/Body.vue';

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
        validator: (value) => value.match(
            /(primary|secondary)/,
        ),
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
     * Tells if JS is disabled
     */
    jsDisabled: {
        type: Boolean,
        default: false,
    },
});

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
    const scrollRail = document.getElementById(`vs-fed-filter--scroll-rail_${props.variant}`);

    if (dir === 'left') scrollRail?.scrollBy(-200, 0);
    else if (dir === 'right') scrollRail?.scrollBy(200, 0);
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
        &--header {
            font-weight: $vs-font-weight-medium;
        }

        &--scroll-container{
            display: flex;
        }

        &--scroll-rail {
            display: flex;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            align-items: center;
            padding: $vs-spacer-025;

            &_primary {
                column-gap: $vs-spacer-075;
                row-gap: $vs-spacer-075
            }

            &_secondary {
                column-gap: $vs-spacer-050;
                margin-top: $vs-spacer-025;
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
            margin-top: 0.25em;

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
