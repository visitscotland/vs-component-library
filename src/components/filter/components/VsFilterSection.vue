<template>
    <div
        :class="filterSectionClasses"
        data-test="vs-filter-section"
    >
        <details
            v-if="props.type === 'group'"
            class="vs-filter-section__details"
        >
            <summary class="vs-filter-section__summary">
                {{ props.sectionTitle }}
                <VsIcon name="chevron" />
            </summary>

            <!-- @slot default slot for the filter section content -->
            <slot />
        </details>

        <div
            v-else
            class="vs-filter-section__section"
        >
            <!-- @slot default slot for the filter section content -->
            <slot />
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import VsIcon from '@/components/icon/Icon.vue';

const props = defineProps({
    /**
     * Group title used within the details element.
     */
    sectionTitle: {
        type: String,
        default: undefined,
    },
    /**
     * Type of content within this filter section.
     */
    type: {
        type: String,
        default: 'list',
        validator: (value) => value.match(/(inline|group|list)/),
    },
});

// Calculate classes to be applied to this component.
const filterSectionClasses = computed(() => ({
    'vs-filter-section': true,
    'vs-filter-section--inline': props.type === 'inline',
}));
</script>

<style lang="scss">
.vs-filter-section {
    display: flex;
    flex-direction: column;
    padding: $spacer-075 $spacer-125;

    &:not(:last-child) {
        border-bottom: solid 1px $vs-color-border-secondary;
    }

    &--inline .vs-filter-section__section {
        display: flex;
        justify-content: space-between;

        label {
            font-size: 1rem;
        }
    }

    &__details[open] {
        .vs-filter-section__summary {
            margin-bottom: $spacer-075;

            .vs-icon {
                transform: scale(1, 1);
            }
        }
    }

    &__summary {
        align-items: baseline;
        display: flex;
        font-size: $font-size-4;
        font-weight: $font_weight_semi_bold;
        justify-content: space-between;

        .vs-icon {
            color: $vs-color-icon-highlight;
            transform: scale(-1, -1);
        }
    }
}
</style>
