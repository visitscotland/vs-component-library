<template>
    <div
        class="vs-video-stories"
        data-test="vs-video-stories"
    >
        <Stories
            :interval="5000"
            :stories
            :is-paused="true"
        >
            <template #imageWithAlt="story">
                <img
                    :src="story.props.story.url"
                    :alt="story.props.story.alt"
                >
            </template>
        </Stories>
    </div>
</template>

<style lang="scss">
    .vs-video-stories {
        .vue-insta-stories {
            position: absolute;
            height: 100vh;
            height: -webkit-fill-available;
            width: 100vw;
            top: 0;

            @include media-breakpoint-up(md) {
                position: relative;
                height: 730px;
                width: 420px;
            }

            img, video {
                height: 100%;
                object-fit: cover;
            }
        }
    }
</style>

<script>
import { Stories } from 'vue-insta-stories';

/**
 * An Instagram-style stories block containing a set of video or image stories
 *
 * @displayName Video Stories
 */

export default {
    name: 'VsVideoStories',
    status: 'prototype',
    release: '0.0.1',
    components: {
        Stories,
    },
    props: {
        // The items to render in the stories block. Video items should be an object in the format:
        // {
        //      url: '#',
        //      type: 'video',
        // }
        //
        // Image items should be an object in the format:
        // {
        //      url: '#',
        //      type: 'image',
        //      alt: 'Alt text',
        // }
        items: {
            type: Array,
            default: () => [],
        },
    },
    computed: {
        stories() {
            const storiesOut = [];

            for (let x = 0; x < this.items.length; x++) {
                if (this.items[x].type === 'image') {
                    storiesOut.push({
                        url: this.items[x].url,
                        alt: this.items[x].alt,
                        template: 'imageWithAlt',
                    });
                } else {
                    storiesOut.push(this.items[x]);
                }
            }

            return storiesOut;
        },
    },
};
</script>
