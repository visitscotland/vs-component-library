<template>
    <h1>Filter</h1>
    <fieldset class="vs-control-group">
        <legend class="vs-control-group__legend">
            <VsIcon
                name="filters"
                orientation="left"
            />
            {{ props.filterLabel }}
        </legend>

        <!-- <VsDetailsFacet field="Category" />
        <VsDetailsFacet field="Sectors" />
        <VsDetailsFacet field="Topics" />
        <ClearAllFacets 
            label="Clear all filters"
            className="btn btn-secondary vs-button cludo-clear-all-facets"
            /> -->
    </fieldset>
</template>

<script setup>
import VsIcon from '@/components/icon/Icon.vue';

const props = defineProps({
    filterLabel: {
        type: String,
        required: true,
    },
});
</script>

<style lang="scss">
.vs-control-group {
    border: solid 1px $vs-color-border-secondary;
    border-radius: $border-radius-default;
    overflow: auto;
    background-color: $vs-color-background-primary;

    &__legend {
        display: flex;
        align-items: baseline;
        gap: 8px;
        background-color: $vs-color-background-secondary;
        padding: $spacer-075 $spacer-125;
        border-bottom:  solid 1px $vs-color-border-secondary;
        font-weight: 600;
        font-size: $font-size-6;
        margin-bottom: $spacer-0;
    }
}
</style>
