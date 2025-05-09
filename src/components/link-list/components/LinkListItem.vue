<template>
    <li class="link-list-item">
        <VsLink
            :href="href"
            :type="type == 'video' ? 'default' : type"
            :role="type == 'video' ? 'button' : null"
            @click="emitShowModal"
        >
            <!-- @slot Slot for link list item text -->
            <slot />
            <template
                v-if="type == 'video' && videoLoaded"
            >
                | {{ videoDescriptor }} {{ formattedVideoDuration }}
            </template>
        </VsLink>
    </li>
</template>

<script>
import VsLink from '@/components/link/Link.vue';
import useVideoStore from '@/stores/video.store';

/**
 * This component is an item appearing in a list of links.
 *
 * @displayName Link List Item
 */

export default {
    name: 'VsLinkListItem',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsLink,
    },
    props: {
        /**
         * The URL the link will point to
         */
        href: {
            type: String,
            default: null,
        },
        /**
         * Option to create link type which defines icon and whether it opens in a new tab
         * `external, internal, download, video`
         */
        type: {
            type: String,
            default: 'default',
            validator: (value) => value.match(/(default|external|internal|download|video)/),
        },
        /**
         * The video id that a video type link should open
         */
        videoId: {
            type: String,
            default: null,
        },
        /**
         * The localised word for video, gets attached to the link label for video type links
         */
        videoDescriptor: {
            type: String,
            default: null,
        },
    },
    setup() {
        const videoStore = useVideoStore();
        return {
            videoStore,
        };
    },
    computed: {
        formattedVideoDuration() {
            if (this.videoDetails) {
                let seconds = `${this.videoDetails.videoFullDuration.seconds}`;

                if (seconds.length === 1) {
                    seconds = `0${seconds}`;
                }

                return `${this.videoDetails.videoFullDuration.minutes}:${seconds}`;
            }

            return '';
        },
        videoDetails() {
            return this.videoStore.videos[this.videoId];
        },
        videoLoaded() {
            if (typeof this.videoDetails !== 'undefined' && this.videoDetails.videoDuration > 0) {
                return true;
            }

            return false;
        },
    },
    methods: {
        emitShowModal() {
            if (!this.videoId) {
                return;
            }

            if (this.emitter) {
                /**
                 * Triggers when the video button is clicked, requests that the appropriate
                 * video modal becomes visible
                 *
                 * @event showModal
                 *
                 * @property {string} videoId the id of the video to show, acts as key for the modal
                 * @property {string} triggerRef the #ref of the button that triggered the event,
                 * focus is returned here after the modal closes
                 */
                this.emitter.emit('showModal', this.videoId, '#videoShow');
            }
        },
    },
};
</script>

<style lang="scss">
    .link-list-item {
        margin-top: $spacer-100;
        font-size: $font-size-5;

        &:first-of-type {
            margin-bottom: $spacer-0;
        }
    }
</style>
