<template>
    <BCard
        class="vs-panel"
        :class="[$slots['vs-panel__title'] ? '' : 'pt-400']"
    >
        <template #header>
            <!-- @slot Contains an optional title for the panel  -->
            <slot name="vs-panel-title" />
        </template>

        <div class="vs-panel__text">
            <!-- @slot Default slot containing main body text -->
            <slot />
        </div>
    </BCard>
</template>

<script>
import { BCard } from 'bootstrap-vue-next';

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
    components: {
        BCard,
    },
};
</script>

<style lang="scss">
.vs-panel.card {
    background-color: $vs-color-background-information;
    border-color: $vs-color-border-primary;
    padding: $vs-spacer-300 $vs-spacer-100 $vs-spacer-300;

    .card-body {
        padding: $vs-spacer-125;
    }

    @include media-breakpoint-up(md) {
        padding: $vs-spacer-300 $vs-spacer-200 $vs-spacer-400;
    }

    @include media-breakpoint-up(lg) {
        padding: $vs-spacer-300 $vs-spacer-500 $vs-spacer-400;
    }

    @include media-breakpoint-up(xxl) {
        padding: $vs-spacer-300 $vs-spacer-600 $vs-spacer-400;
    }

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
