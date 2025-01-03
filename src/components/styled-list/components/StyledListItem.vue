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
                <VsImg :src="props.imageSrc" />
            </VsCol>
            <VsCol :md="props.variant === 'image' ? '10' : '12'">
                <VsImg
                    v-if="props.variant === 'image-horizontal'"
                    :src="props.imageSrc"
                />

                <VsHeading
                    :level="props.headingLevel"
                    heading-style="heading-xxs"
                >
                    {{ heading }}
                </VsHeading>

                <VsRichTextWrapper>
                    <!-- @slot default slot to contain the content of this list item  -->
                    <slot />
                </VsRichTextWrapper>
            </VsCol>
        </VsRow>
    </li>
</template>

<script setup>
import { isNumber } from 'lodash';
import VsHeading from '../../heading/Heading.vue';
import VsImg from '../../img/Img.vue';
import VsRichTextWrapper from '../../rich-text-wrapper/RichTextWrapper.vue';
import { VsRow, VsCol } from '../../grid';

const props = defineProps({
    /**
     * Heading of the list item.
     */
    heading: {
        type: String,
        required: true,
    },
    /**
     * The correct heading level for page hierarchy, the
     * heading will be styled the same regardless of level provided
     * `1|2|3|4|5|6`
     */
    headingLevel: {
        type: Number,
        default: 3,
        validator: (value) => (isNumber(value) ? value > 0 && value < 7 : value.match(/(1|2|3|4|5|6)/)),
    },
    /**
     * Image source of the list item.
     */
    imageSrc: {
        type: String,
        default: null,
    },
    /**
     * Determines column layout and image position.
     * @values icon, image, image-horizontal, numbered
     */
    variant: {
        type: String,
        default: 'icon',
        validator: (value) => ['icon', 'image', 'image-horizontal', 'numbered'].includes(value),
    },
});
</script>

<style lang="scss">
    .vs-styled-list--icon .vs-styled-list__item {
        padding: $spacer-0 $spacer-0 $spacer-150 $spacer-300;
        position: relative;

        &::before {
            content: '\e085';
            color: $vs-color-icon-accent-saltire-30;
            font-family: 'Font Awesome Kit';
            font-size: $font-size-8;
            position: absolute;
            top: $spacer-075;
            left: 0;
        }
    }

    .vs-styled-list--numbered .vs-styled-list__item {
        counter-increment: section;
        padding: $spacer-0 $spacer-0 $spacer-150 $spacer-150;
        position: relative;

        @include media-breakpoint-up(md) {
            padding: $spacer-0 $spacer-0 $spacer-200 $spacer-200;
        }

        &:last-child {
            padding-bottom: $spacer-0;
        }

        &::before {
            background-color: $vs-color-background-accent-heather-80;
            color: $vs-color-text-inverse;
            content: counter(section);
            font-size: $font-size-4;
            padding: $spacer-025 $spacer-075;
            position: absolute;
            right: 100%;
            top: $spacer-0125;

            @include media-breakpoint-up(md) {
                padding: $spacer-025 $spacer-175;
            }
        }

        &::after {
            position: absolute;
            content: '';
            width: $spacer-025;
            height: 100%;
            background-color: $vs-color-background-accent-heather-80;
            right: 100%;
            top: $spacer-0125;
        }

        .vs-heading {
            margin-top: $spacer-0;
        }
    }

    .vs-styled-list--image {
        margin-bottom: $spacer-250;

        img {
            max-width: 100%;
        }
    }

    .vs-styled-list--image-horizontal .vs-styled-list__item {
        padding: $spacer-0 $spacer-150;

        img {
            margin: auto;
            width: 80%;
        }
    }
</style>
