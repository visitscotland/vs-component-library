<template>
    <BImg
        v-bind="$attrs"
        :src="src"
        :alt="alt"
        :fluid="fluid"
        :fluid-grow="fluidGrow"
        :loading="useLazyLoading ? 'lazy' : 'eager'"
        :style="imgStyle"
        class="vs-img low-res-img"
        :class="useGenericLqip ? 'generic-lqip' : ''"
        :srcset="computedSrcSet"
        :low-res-image="resolvedLowResImage"
        :sizes="resolvedSizes"
    >
        <!-- @slot Default slot for image content -->
        <slot />
    </BImg>
</template>

<script>
import { BImg } from 'bootstrap-vue-next';
import srcSetMixin from '../../mixins/srcSetMixin';
import imgSizesMixin from '../../mixins/imgSizesMixin';

/**
 * A responsive image component that displays images efficiently 
 * across devices while supporting accessibility, 
 * responsive loading, and performance optimisation.
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
        imgSizesMixin,
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
        /**
         * Resolve the low-quality placeholder image.
         * SVGs do not use LQIP.
         */
        resolvedLowResImage() {
            if (this.isSvg) {
                return null;
            }

            const lowResImage = typeof this.lowResImage === 'string'
                ? this.lowResImage.trim()
                : '';

            if (lowResImage) {
                return lowResImage;
            }
            return this.specificImgSize('xxs');
        },
        /**
         * Generate the sizes attribute for responsive raster images.
         * Omitted for SVGs.
         */
        resolvedSizes() {
            if (this.isSvg) {
                return null;
            }

            return this.computedSizes;
        },
        /**
         * Apply the LQIP background while the image loads.
         * Skipped for SVGs and generic placeholders.
         */
        imgStyle() {
            if (this.useGenericLqip || this.isSvg || !this.resolvedLowResImage) {
                return null;
            }

            return {
                backgroundImage: `url(${this.resolvedLowResImage})`,
            };
        },
        /**
         * Determine whether the image source is an SVG.
         */
        isSvg() {
            if (typeof this.src !== 'string') {
                return false;
            }

            const source = this.src.trim();

            if (!source) {
                return false;
            }

            if (source.startsWith('data:image/svg+xml')) {
                return true;
            }

            try {
                const url = new URL(source);
                const pathname = url.pathname.toLowerCase();
                return pathname.endsWith('.svg');
            } catch {
                return source.toLowerCase().endsWith('.svg');
            }
        },
        /**
         * Generate a responsive srcset for raster images.
         * SVGs are served as a single scalable asset.
         */
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
.vs-img{
    &.img-zoom-on-hover {
        transition: transform 0.3s ease-in-out;
    }

    &.low-res-img {
        background-repeat: no-repeat;
        background-size: cover;
        display: block;

        &.generic-lqip {
            background-image: url('@/assets/images/placeholders/generic-lqip.jpg'),
        }
    }
}
</style>
