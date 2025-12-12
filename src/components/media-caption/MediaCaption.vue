<template>
    <div
        data-test="vs-media-caption"
        class="vs-media-caption"
    >
        <VsContainer>
            <VsRow>
                <VsCol>
                    <p
                        class="vs-media-caption__image-caption"
                        v-if="!!$slots.caption"
                    >
                        <!-- @slot Slot to display caption  -->
                        <slot name="caption" />
                    </p>

                    <p
                        class="vs-media-caption__image-credit"
                        v-if="!!$slots.credit || videoId"
                    >
                        <span v-if="videoId && videoDetails?.videoDurationMsg">
                            {{ videoDetails.videoDurationMsg }}
                        </span>

                        <!-- @slot Slot to display credit  -->
                        <slot
                            v-if="!!$slots.credit && !videoId"
                            name="credit"
                        />
                    </p>
                </VsCol>
            </VsRow>
        </VsContainer>
    </div>
</template>

<script>
import {
    VsRow,
    VsCol,
    VsContainer,
} from '@/components/grid';
import useVideoStore from '@/stores/video.store';

/**
 * Captions are used to briefly describe an image or
 * other media such as a video.
 *
 * @displayName MediaCaption
 */
export default {
    name: 'VsMediaCaption',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsRow,
        VsCol,
        VsContainer,
    },
    props: {
        /**
         * The video ID to associate with the caption - displays
         * length of video dynamically when a video is loaded on the page.
         */
        videoId: {
            type: String,
            default: '',
        },
    },
    setup() {
        const videoStore = useVideoStore();
        return {
            videoStore,
        };
    },
    computed: {
        videoDetails() {
            return this.videoStore.videos[this.videoId];
        },
    },
};
</script>

<style lang="scss">
.vs-media-caption {
    background-color: transparent;
    color: $vs-color-text-tertiary;
    position: relative;
    padding: $vs-spacer-075 0;

    > .row {
        margin: 0 auto;
    }

    @include media-breakpoint-up(sm) {
        display: block;
        width: 100%;
        height: auto;
        text-align: left;
    }

    &__image-caption,
    &__image-credit {
        font-size: $font-size-3;
    }

    &__image-caption {
        font-weight: $vs-font-weight-medium;
    }

    &__image-credit {
        font-weight: $vs-font-weight-subtle;
        margin-bottom: $vs-spacer-0;
    }
}

</style>
