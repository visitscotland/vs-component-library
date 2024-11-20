<template>
    <a
        class="vs-link"
        :class="[
            `vs-link--variant-${variant}`,
        ]"
        :href="href"
        target="_self"
        :download="type === 'download' ? 'true' : null"
        :disabled="disabled"
        :tabindex="disabled ? '-1' : '0'"
        v-bind="$attrs"
        @click="clickHandler($event)"
        @keydown="keyHandler($event)"
    >
        <!-- @slot Default slot for link content -->
        <slot /><VsIcon
            v-if="type !== 'default'"
            :name="`${type}-link`"
            variant="primary"
            :size="iconSize"
            class="ms-1 vs-link__icon"
        />
    </a>
</template>

<script>
import VsIcon from '@/components/icon/Icon.vue';
import dataLayerMixin from '../../mixins/dataLayerMixin';
import dmoAnalyticsLogic from '../../utils/dmo-analytics-logic';

/**
 * Links allow a user to navigate through
 * your application or to an external website.
 *
 * @displayName Link
 */

export default {
    name: 'VsLink',
    status: 'prototype',
    release: '0.0.2',
    components: {
        VsIcon,
    },
    mixins: [
        dataLayerMixin,
    ],
    props: {
        /**
         * The URL the link will point to
         */
        href: {
            type: String,
            default: null,
        },
        /**
         * Option to choose a type which gives the link an icon
         * `default|external|internal|download`
         */
        type: {
            type: String,
            default: 'default',
            validator: (value) => value.match(/(default|external|internal|download)/),
        },
        /**
         * Option to choose a pre-defined style variant
         * `primary|on-dark`
         */
        variant: {
            type: String,
            default: 'primary',
            validator: (value) => value.match(/(primary|on-dark)/),
        },
        /**
        * Size of icon
        * `xxs|xs|sm|md|lg|xl`
        */
        iconSize: {
            type: String,
            default: 'xxs',
            validator: (value) => value.match(/(xxs|xs|sm|md|lg|xl)/),
        },
        /**
        * Option to disable the link
        */
        disabled: {
            type: Boolean,
            default: false,
        },
        /**
        * If the click should trigger a dataLayerPush
        */
        dataLayerValue: {
            type: String,
            default: null,
        },
    },
    computed: {
        variantClass() {
            return `vs-link--variant-${this.variant}`;
        },
    },
    methods: {
        clickHandler(event) {
            event.preventDefault();

            // capture DMO link referral
            // if (dmoAnalyticsLogic(event).type === 'CMS referral'
            // && dmoAnalyticsLogic(event).dmo_referral === 'True') {
            //     this.createDataLayerObject('cmsReferral', {
            //         referral_location: event.target.href,
            //         dmo_referral: dmoAnalyticsLogic(event).dmo_referral,
            //     });
            // } else {
            //     this.createDataLayerObject('cmsReferral', {
            //         referral_location: event.target.href,
            //         dmo_referral: dmoAnalyticsLogic(event).dmo_referral,
            // }

            this.createDataLayerObject('cmsReferral', {
                referral_location: event.target.href,
                dmo_referral: dmoAnalyticsLogic(event).dmo_referral,
            });

            if (this.dataLayerValue) {
                this.createDataLayerObject(this.dataLayerValue, event, this.href);
            } else if (this.type === 'external') {
                this.createDataLayerObject('cmsReferral', {
                    referral_location: event.target.href,
                    dmo_referral: dmoAnalyticsLogic(event).dmo_referral,
                });
                this.createDataLayerObject('externalLinkDataEvent', event, this.href);
            } else {
                this.createDataLayerObject('internalLinkDataEvent', event, this.href);
            }

            // short delay to ensure that analytics get added to datalayer
            setTimeout(() => {
                this.navigateToUrl();
            }, 500);
        },
        navigateToUrl() {
            // don't navigate if it's an empty or anchor link
            if (this.href !== '#' && this.href !== null) {
                window.location.href = this.href;
            }
        },
        /**
         * Fires on keypress events on the link, and passes 'space' and 'enter' events
         * to the click handler to ensure analytics events are properly initiated.
         */
        keyHandler(event) {
            if (event.keyCode === 13 || event.keyCode === 32) {
                event.preventDefault();

                this.clickHandler(event);
            }
        },
    },
};
</script>

<style lang="scss">
.vs-link {
    &.vs-link--variant-primary {
        color: $vs-color-link;

        &:focus {
            @extend %outline-link-focus;
        }
    }

    &.vs-link--variant-on-dark {
        color: $vs-color-text-inverse;

        &:focus {
            @extend %outline-link-focus-dark;
        }
    }

    .vs-link__icon {
        vertical-align: baseline;
    }
}
</style>
