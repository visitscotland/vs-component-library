<template>
    <div
        class="vs-loading-spinner"
        :class="spinnerClasses"
        data-test="vs-loading-spinner"
    >
        <div class="vs-loading-spinner__dot" />
        <div class="vs-loading-spinner__dot" />
        <div class="vs-loading-spinner__dot" />
        <div class="vs-loading-spinner__dot" />
        <div class="vs-loading-spinner__dot" />
        <div class="vs-loading-spinner__dot" />
        <div class="vs-loading-spinner__dot" />
    </div>
</template>
<script>

/**
 * Simple loading spinner component to drop in wherever
 * an async javascript is delaying the render of a component
 *
 * @displayName Loading Spinner
 */
export default {
    name: 'VsLoadingSpinner',
    status: 'prototype',
    release: '0.1.0',
    props: {
        /*
         * Variant of loading spinner theme
         * `dark|light`
         */
        variant: {
            type: String,
            default: 'light',
            validator: (value) => value.match(
                /(dark|light)/,
            ),
        },
    },
    computed: {
        spinnerClasses() {
            return this.variant ? `vs-loading-spinner--${this.variant}` : '';
        },
    },
};
</script>

<style lang="scss">
    @keyframes spin {
        from {
            transform:rotate(0deg);
        }
        to {
            transform:rotate(360deg);
        }
    }

    .vs-loading-spinner {
        width: $vs-spacer-125;
        height: $vs-spacer-125;
        overflow: hidden;
        position: relative;
        animation-name: spin;
        animation-duration: 3000ms;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        width: 100%;

        @for $i from 1 through 7 {
            .vs-loading-spinner__dot:nth-child(#{$i}) {
                transform: rotate($i * 40deg)
            }
        }

        &__dot {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;

            &::after {
                content: "";
                position: absolute;
                top: 0;
                left: 50%;
                transform: translateX(-50%);
                width: $vs-spacer-025;
                height: $vs-spacer-025;
                border-radius: $vs-radius-full;
                background-color: $vs-color-background-highlight;
            }
        }

        &--light{
            .vs-loading-spinner__dot::after{
                background-color: $vs-color-background-highlight;
            }
        }

        &--dark{
            .vs-loading-spinner__dot::after{
                background-color: $vs-color-background-inverse;
            }
        }
    }
</style>
