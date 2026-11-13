<template>
    <li
        class="vs-styled-list__item"
        data-test="vs-styled-list__item"
    >
        <VsRow>
            <VsCol
                v-if="props.variant === 'image'"
                cols="12"
                md="2"
            >
                <VsImg
                    v-if="props.imageSrc"
                    :src="props.imageSrc"
                />
            </VsCol>
            <VsCol :md="props.variant === 'image' ? '10' : '12'">
                <VsImg
                    v-if="props.variant === 'image-horizontal' && props.imageSrc"
                    :src="props.imageSrc"
                />

                <VsHeading
                    :level="props.headingLevel"
                    heading-style="heading-xxs"
                    :id="anchorLink ? anchorLink : ''"
                >
                    {{ heading }}
                </VsHeading>

                <VsBody>
                    <!-- @slot default slot to contain the content of this list item  -->
                    <slot />
                </VsBody>
            </VsCol>
        </VsRow>
    </li>
</template>

<script setup lang="ts">
import VsHeading from '../../heading/Heading.vue';
import VsImg from '../../img/Img.vue';
import VsBody from '../../body/Body.vue';
import { VsRow, VsCol } from '../../grid';

const props = withDefaults(
    defineProps<{
        /** ID of the anchor link if needed. */
        anchorLink?: string;
        /** Heaidng of the list item. */
        heading: string;
        /**
         * The correct heaing level for the page heirarchy, the
         * heading will be styled the same regardless of the level provided. */
        headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
        /** Image source of the list item. */
        imageSrc?: string | null;
        /** Determine column layout and image position. */
        variant?: 'icon' | 'image' | 'image-horizontal' | 'numbered';
    }>(), {
        anchorLink: '',
        headingLevel: 3,
        imageSrc: null,
        variant: 'icon',
    },
);
</script>

<style lang="scss">
    .vs-styled-list--icon
    .vs-styled-list__item {
        padding-left: $vs-spacer-300;
        position: relative;

        &::before {
            font-family: "Font Awesome 6 Pro";
            content: "\f00c";
            color: $vs-color-icon-accent-saltire-30;
            font-size: $font-size-8;
            position: absolute;
            top: $vs-spacer-075;
            left: 0;
        }
    }

    .vs-styled-list--numbered
    .vs-styled-list__item {
        counter-increment: section;
        padding: 0 0 $vs-spacer-150 $vs-spacer-150;
        position: relative;

        @include media-breakpoint-up(md) {
            padding: 0 0 $vs-spacer-200 $vs-spacer-200;
        }

        &:last-child {
            padding-bottom: 0;
        }

        &::before {
            background-color: $vs-color-background-accent-heather-80;
            color: $vs-color-text-inverse;
            content: counter(section);
            font-size: $font-size-4;
            padding: $vs-spacer-025 $vs-spacer-075;
            position: absolute;
            right: 100%;
            top: $vs-spacer-0125;

            @include media-breakpoint-up(md) {
                padding: $vs-spacer-025 $vs-spacer-175;
            }
        }

        &::after {
            position: absolute;
            content: '';
            width: $vs-spacer-025;
            height: 100%;
            background-color: $vs-color-background-accent-heather-80;
            right: 100%;
            top: $vs-spacer-0125;
        }

        .vs-heading {
            margin-top: 0;
        }
    }

    .vs-styled-list--image {
        margin-bottom: $vs-spacer-250;

        img {
            max-width: 100%;
        }
    }

    .vs-styled-list--image-horizontal
    .vs-styled-list__item {
        padding: 0 $vs-spacer-150;

        img {
            margin: auto;
            width: 80%;
        }
    }
</style>
