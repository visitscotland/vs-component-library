<template>
    <BImg
        v-bind="$attrs"
        :src="src"
        :alt="alt"
        :fluid="fluid"
        :fluid-grow="fluidGrow"
        :loading="useLazyLoading ? 'lazy' : 'eager'"
        :style="imgStyle"
        class="low-res-img"
        :class="useGenericLqip ? 'generic-lqip' : ''"
        :srcset="computedSrcSet"
        :low-res-image="isSvg ? '' : specificImgSize('xxs')"
        sizes="(min-width: 768px) 75vw, 100vw"
    >
        <!-- @slot Default slot for image content -->
        <slot />
    </BImg>
</template>

<script>
import { BImg } from 'bootstrap-vue-next';
import srcSetMixin from '@/mixins/srcSetMixin';
/**
 * This image component is used to render images in our products
 * to help support and clarify content.
 *
 * @displayName Img
 */

export default {
    name: 'VsImg',
    status: 'prototype',
    release: '0.0.1',
    components: {
        BImg,
    },
    mixins: [
        srcSetMixin,
    ],
    props: {
        /**
         * The source URL
         */
        src: {
            type: String,
            required: true,
        },

        /**
         * Provide low res image to be initially loaded
         */
        lowResImage: {
            type: String,
            default: null,
        },

        /**
         * The alt text for accessibility
         */
        alt: {
            type: String,
            default: '',
        },

        /**
         * If true makes the image responsive, scaling with the parent
         * up to a max of the native width of the image itself
         */
        fluid: {
            type: Boolean,
            default: false,
        },

        /**
         * If true makes the image responsive, scaling with the parent
         * beyond the native image width if necessary
         */
        fluidGrow: {
            type: Boolean,
            default: false,
        },
        /**
         * If true a generic LQIP is used for lazyloading, rather than the
         * provided xxs path to the image scaler. Used when the image scaler
         * is not functioning as desired for certain images.
         */
        useGenericLqip: {
            type: Boolean,
            default: false,
        },
        /**
         * If true switches on lazy loading for the image
        */
        useLazyLoading: {
            type: Boolean,
            default: true,
        },
    },
    computed: {
        imgStyle() {
            if (!this.useGenericLqip && !this.src.includes('.svg')) {
                return {
                    backgroundImage: `url(${this.specificImgSize('xxs')})`,
                };
            }

            return null;
        },
        isSvg() {
            return this.src.includes('.svg');
        },
        computedSrcSet() {
            if (this.isSvg) {
                return null;
            }

            if (this.$attrs.srcset) {
                return this.$attrs.srcset;
            }

            return this.fullSrcSet;
        },
    },
};
</script>

<style lang="scss">
    .low-res-img {
        background-repeat: no-repeat;
        background-size: cover;
        display: block;

        &.generic-lqip {
            background-image: url('@/assets/images/placeholders/generic-lqip.jpg'),
        }
    }
</style>
