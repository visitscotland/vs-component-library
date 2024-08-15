<template>
    <div
        :class="classes"
        :data-test="dataTest"
    >
        <VsHeading
            v-if="hasHeadingSlot"
            level="2"
        >
            <slot name="heading" />
        </VsHeading>
        <nav>
            <ul class="link-list__list">
                <!-- @slot Slot for link list items -->
                <slot />
            </ul>
        </nav>
    </div>
</template>

<script>
/**
 * This component is a list of links.
 *
 * @displayName Link List
 */

import VsHeading from '@/components/heading/Heading.vue';

export default {
    name: 'VsLinkList',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsHeading,
    },
    props: {
        toc: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        classes() {
            return {
                'link-list': true,
                'link-list--toc': this.toc,
            };
        },
        dataTest() {
            return this.toc ? 'link-list--toc' : 'link-list';
        },
        hasHeadingSlot() {
            return !!this.$slots.heading;
        },
    },
};
</script>

<style lang="scss">
    .link-list {
        &__list {
            list-style: none;
            padding: 0;
            margin-bottom: $spacer-7;
        }

        &--toc {
            background: $vs-color-background-information;
            padding: $spacer-8 $spacer-9;
            width: 100%;

            @include media-breakpoint-up(md) {
                width: 580px;
            }

            .link-list__list {
                margin-bottom: 0;
            }
        }
    }
</style>
