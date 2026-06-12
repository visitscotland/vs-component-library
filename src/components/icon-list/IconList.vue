<template>
    <div
        class="vs-icon-list"
        data-test="vs-icon-list"
    >
        <div
            class="vs-icon-list__title"
            v-if="title"
        >
            {{ title }}
        </div>
        <ul class="vs-icon-list__list mb-0">
            <slot />
        </ul>
    </div>
</template>

<script>
/**
 * @deprecated ⚠️ This component is no longer supported and should not be used.
 * It will be removed in a future release.
 * @see https://visitscotland.atlassian.net/wiki/spaces/DE/pages/1273299012/Icon+List+deprecated
 * 
 * @displayName Icon List
 */

export default {
    name: 'VsIconList',
    status: 'deprecated',
    release: '0.0.1',
    props: {
        /**
         * The title for the icon list
         */
        title: {
            type: String,
            default: '',
        },
    },
};
</script>

<style lang="scss">
.vs-icon-list {
    text-align: center;

    .vs-icon-list__title {
        font-size: $font-size-4;
        font-weight: $vs-font-weight-medium;
        margin-bottom: $vs-spacer-125;
    }

    .vs-icon-list__list {
        display: inline-block;
        margin: 0 auto;
        padding: 0;
        text-align: left;
    }
}
</style>
