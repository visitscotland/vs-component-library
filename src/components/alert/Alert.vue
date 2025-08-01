<template>
    <div
        class="vs-alert"
        data-test="vs-alert"
    >
        <div class="vs-alert__icon-holder">
            <VsIcon
                class="vs-alert__icon"
                icon="vs-icon-feedback-information"
                variant="inverse"
            />
        </div>
        <div class="vs-alert__content-wrapper">
            <div class="vs-alert__content">
                <!-- @slot Default slot for alert text -->
                <slot />
            </div>
        </div>
    </div>
</template>

<script>
import VsIcon from '@/components/icon/Icon.vue';

/**
 * The alert component makes text more prominent to notify
 * the user of important information.
 *
 * @displayName Alert
 */
export default {
    name: 'VsAlert',
    status: 'prototype',
    release: '0.1.0',
    components: {
        VsIcon,
    },
};
</script>

<style lang="scss">
    .vs-alert {
        display: flex;
        flex-flow: row;
    }

    .vs-alert__icon-holder {
        background-color: $vs-color-text-highlight;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        padding: $vs-spacer-100 $vs-spacer-075;
        min-height: 2.5rem;

        @include media-breakpoint-up(lg) {
            min-height: $vs-spacer-300;
        }
    }

    .vs-alert__content-wrapper {
        flex: 1;
        display: flex;
        align-items: flex-start;
    }

    .vs-alert__content {
        display: flex;
        align-items: center;
        padding: $vs-spacer-075;
        background-color: $vs-color-background-information;
        border: 1px solid $vs-color-border-highlight;
        min-height: 100%;
    }
</style>
