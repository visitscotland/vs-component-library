<template>
    <div
        class="vs-icentre"
        data-test="vs-icentre"
    >
        <VsContainer>
            <VsRow>
                <VsCol
                    cols="10"
                    offset="1"
                    md="8"
                    offset-md="2"
                    lg="6"
                    offset-lg="3"
                    class="vs-icentre__intro-content"
                >
                    <VsSvg
                        class="vs-icentre__logo"
                        path="iCentre"
                    />

                    <div
                        class="vs-icentre__links"
                        data-test="vs-icentre__standalone-links"
                        v-if="($slots['icentre-links'] && $slots['icentre-links']()) && !($slots['icentre-quote'] && $slots['icentre-quote']())"
                    >
                        <!-- @slot Holds the links (html expected) -->
                        <slot name="icentre-links" />
                    </div>
                </VsCol>

                <VsCol
                    cols="12"
                    md="10"
                    offset-md="1"
                    :class="{ 'vs-icentre__image-offset': ($slots['icentre-quote'] && $slots['icentre-quote']()) }"
                >
                    <!-- @slot Holds the main icentre image (vs-image-with-caption expected) -->
                    <slot
                        name="icentre-image-with-caption"
                    />
                </VsCol>

                <VsCol
                    cols="12"
                    md="10"
                    offset-md="1"
                    lg="7"
                    offset-lg="5"
                    class="vs-icentre__quote-block-container"
                    v-if="($slots['icentre-quote'] && $slots['icentre-quote']())"
                >
                    <div class="vs-icentre__quote-block">
                        <!-- @slot Optional slot, holds the links (vs-quote expected) -->
                        <slot name="icentre-quote" />

                        <div
                            class="vs-icentre__links-contained"
                            data-test="vs-icentre__embedded-links"
                        >
                            <!-- @slot Holds the links (html expected) -->
                            <slot name="icentre-links" />
                        </div>
                    </div>
                </VsCol>
            </VsRow>
        </VsContainer>
    </div>
</template>

<script>
import VsSvg from '@/components/svg/Svg.vue';
import {
    VsContainer, VsRow, VsCol,
} from '@/components/grid';

/**
 * A summary block for an icentre with a name, cover image and an optional slot for an
 * embedded quote (either just text or a vs-quote element)
 *
 * @displayName iCentre
 */
export default {
    name: 'VsIcentre',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsSvg,
        VsContainer,
        VsRow,
        VsCol,
    },
};
</script>

<style lang="scss">
.vs-icentre {
    &__heading {
        margin-bottom: $spacer-9;

        @include media-breakpoint-up(lg) {
            margin-bottom: $spacer-8;
        }
    }

    &__logo {
        height: $spacer-9;
        margin-bottom: $spacer-8;
    }

    &__links {
        font-size: $font-size-5;
        margin-bottom: $spacer-9;

        @include media-breakpoint-up(lg) {
            line-height: $spacer-7;
        }
    }

    &__intro-content {
        text-align: center;
    }

    &__image-offset {
        @include media-breakpoint-down(sm) {
            padding: 0;

            figure {
                width: calc(100% + 2em);
                margin-left: -1em;
            }
        }

        @include media-breakpoint-up(lg) {
            margin-bottom: -22rem;
        }
    }

    &__quote-block-container {
        z-index: 2;
        text-align: left;
    }

    &__quote-block {
        background: $white;
        padding: $spacer-8 $spacer-8;

        @include media-breakpoint-up(md) {
            padding: $spacer-9 $spacer-10;
        }
    }

    &__links-contained {
        margin-bottom: $spacer-0;
        margin-top: $spacer-9;
        font-size: $font-size-5;

        @include media-breakpoint-up(lg) {
            line-height: $spacer-7;
        }
    }

    figure {
        margin-bottom: $spacer-0;
    }
}
</style>
