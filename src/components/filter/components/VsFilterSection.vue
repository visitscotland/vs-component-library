<template>
    <div
        :class="filterSectionClasses"
        data-test="vs-filter-section"
    >
        <Component
            :is="component"
            v-bind="$attrs"
        >
            <!-- @slot default slot for the filter section items -->
            <slot />
        </Component>
    </div>

    <!-- Different section types - always open, datepicker, group -->
</template>

<script setup>
import {
    computed,
    defineAsyncComponent,
} from 'vue';

const props = defineProps({
    type: {
        type: String,
        default: 'open',
        validator: (value) => value.match(/(open|date-range|group)/),
    },
});

const filterSectionClasses = computed(() => ({
    'vs-filter-section': true,
    'vs-filter-section--date-range': props.type === 'date-range',
}));

const component = computed(() => (
    props.type === 'group'
        ? defineAsyncComponent(() => import('@/components/details/VsDetails.vue'))
        : 'div'
));
</script>

<style lang="scss">
.vs-filter-section {
    border-bottom: solid 1px $vs-color-border-secondary;
    display: flex;
    flex-direction: column;
    padding: $spacer-075 $spacer-125;

    &--date-range > div {
        display: flex;
        justify-content: space-between;

        label {
            font-size: 1rem;
        }
    }

    .vs-details {
        padding: 0;
    }

    input[type="date"]:nth-child(2) {
        margin-left: 1rem;
    }
}
</style>
