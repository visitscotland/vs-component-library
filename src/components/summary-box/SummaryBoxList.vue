<template>
    <div
        class="vs-summary-box"
        data-test="vs-summary-box-list"
    >
        <ul class="vs-summary-box__list list-unstyled d-flex flex-wrap p-050 p-sm-075">
            <!-- Default slot, should load in a set of 4 SummaryBoxListItem and
            SummaryBoxDistanceListItem elements -->
            <slot />
        </ul>
    </div>
</template>

<script>
/**
 * @deprecated ⚠️ Use the Panel component for highlighting information.
 * This component will be removed in a future release.
 * @see https://visitscotland.atlassian.net/wiki/spaces/DE/pages/1273299024/Summary+Box+deprecated
 * 
 * @displayName Summary Box
 */

export default {
    name: 'VsSummaryBoxList',
    status: 'deprecated',
    release: '0.0.1',
};
</script>

<style lang="scss">
.vs-summary-box {
    display: flex;
    justify-content: center;

    @include media-breakpoint-up(lg) {
        position: absolute;
        top: 0;
        width: calc(100% - #{$vs-spacer-200});
        z-index: 1000;
    }
}

.vs-summary-box__list {
    background-color: $vs-color-background-accent-gorse-05;
    width: 350px;

    @include media-breakpoint-up(lg) {
        width: 400px;
    }
}
</style>
