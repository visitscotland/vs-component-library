<template>
    <div
        class="vs-panel"
        data-test="vs-panel"
        :class="panelClasses"
    >
        <!-- @slot ⚠️ Deprecated. Use the default slot instead.  -->
        <slot name="vs-panel-title" />

        <!-- @slot Default slot containing panel content -->
        <slot />
    </div>
</template>

<script>
/**
 * The panel component is a container
 * that helps to emphasise content.
 *
 * @displayName Panel
 */
export default {
    name: 'VsPanel',
    status: 'prototype',
    release: '0.0.1',
    props: {
        /**
         * The panel variant style.
         * `secondary|information`
         */
        variant: {
            type: String,
            default: 'secondary',
            validator: (value) => value.match(
                /(secondary|information)/,
            ),
        },
    },
    computed: {
        panelClasses() {
            return `vs-panel--${this.variant}`;
        },
    },
};
</script>

<style lang="scss">
.vs-panel {
    padding: $vs-spacer-175;
    border-radius: $vs-radius-medium;

    &--secondary {
        background-color: $vs-color-background-secondary;
    }

    &--information {
        background-color: $vs-color-background-information;
    }

    // To be removed in future versions
    .vs-panel__title {
        display: block;
        text-align: center;
    }
    .card-header {
        text-align: center;
        background: none;
        border-bottom-width: 0;
        padding: 0;
    }
}
</style>
