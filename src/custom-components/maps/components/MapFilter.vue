<template>
    <div class="vs-map-filter">
        <VsDetail
            v-if="props.detailText"
            color="secondary"
            size="small"
        >
            {{ props.detailText }}
        </VsDetail>

        <div class="vs-map-filter__buttons">
            <VsButton
                v-for="(item, index) in props.items"
                :key="item.id"
                :icon="props.hasIcons ? iconMap[item.id] : undefined" 
                size="sm"
                :variant="setButtonVariant(item.id)"
                @click="$emit('changed', {id: item.id, key: index })"
            >
                {{ item.label }}
            </VsButton>
        </div>
    </div>
</template>

<script setup lang="ts">
import { VsButton, VsDetail } from '@/components';

type Item = {
    id: string;
    label: string;
};

type Props = {
    detailText?: string;
    hasIcons?: boolean;
    items: Item[];
    selectedCategory: string | string[] | undefined;
};

type Icon = Record<string, string>;

const props = withDefaults(defineProps<Props>(), {
    detailText: undefined,
    hasIcons: false,
});

defineEmits<{
    changed: [{
        id: string;
        key: number | string;
    }],
}>();

/**
 * Set the button variant depending on if the category has been selected.
 * The button should be `secondary` unless it has been selected, then it will
 * be `primary`
 * 
 * @param {string} id - id of the category. 
 */
function setButtonVariant(id: string) {
    if (!props.selectedCategory) return 'secondary';

    if (typeof props.selectedCategory === 'string') {
        return props.selectedCategory === id ? 'primary' : 'secondary';
    } else {
        return props.selectedCategory.includes(id) ? 'primary' : 'secondary';
    }
};

// Object to map the category id to an icon for the button.
const iconMap: Icon = {
    cities: 'fa-regular fa-city',
    regions: 'fa-regular fa-map-location-dot',
    islands: 'fa-regular fa-island-tropical',
    towns: 'fa-regular fa-house-chimney-window',
    'national-parks': 'fa-kit fa-vs-icon-national-park',
    'things-to-do': 'fa-kit fa-vs-landscape',
    accommodation: 'fa-regular fa-bed',
    'food-drink': 'fa-regular fa-cutlery',
    'travel-information': 'fa-regular fa-circle-info',
};
</script>

<style lang="scss">
.vs-map-filter__buttons {
    @include scrollsnap-styles;

    column-gap: $vs-spacer-050;
    margin-bottom: $vs-spacer-100;
    padding: $vs-spacer-025 $vs-spacer-025 $vs-spacer-075;
    pointer-events: all;

    .vs-button {
        flex: 0 0 max-content;
    }
}
</style>
