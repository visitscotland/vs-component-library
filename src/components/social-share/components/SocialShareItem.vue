<template>
    <VsCol
        class="vs-social-share-item"
        data-test="vs-social-share-item"
        :cols="4"
        :md="noJs ? 2 : 4"
    >
        <VsLink
            class="vs-social-share-item__link"
            :href="shareUrl"
            @click="copyToClipboard($event)"
            :id="`vs-share-${name}`"
        >
            <VsIcon
                :name="name"
                :custom-colour="iconColour"
                size="xl"
                small-size="lg"
            />

            <span class="vs-social-share-item__text">
                {{ show ? linkCopiedText : linkText }}
            </span>
        </VsLink>
    </VsCol>
</template>

<script>
import VsLink from '@/components/link/Link.vue';
import VsIcon from '@/components/icon/Icon.vue';
import { VsCol } from '@/components/grid';
import dataLayerMixin from '../../../mixins/dataLayerMixin';

/**
 * This component displays an icon and link to a social sharing channel
 *
 * @displayName Social Share Item
 */
export default {
    name: 'VsSocialShareItem',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsCol,
        VsLink,
        VsIcon,
    },
    mixins: [
        dataLayerMixin,
    ],
    inject: {
        /**
        * Page URL to share - provided by parent SocialShare
        */
        referringPageUrl: {
            default: '',
        },
        /**
        * Page Title to share - provided by parent SocialShare
        */
        pageTitle: {
            default: '',
        },
        /**
        * Page Title to share - provided by parent SocialShare
        */
        noJs: {
            default: '',
        },
    },
    props: {
        /**
        * Type of link and icon to display
        */
        name: {
            type: String,
            required: true,
            validator: (value) => value.match(/(facebook|twitter|pinterest|link|email|whatsapp)/),
        },
        /**
        * Text to display within the link
        */
        linkText: {
            type: String,
            required: true,
        },
        /**
        * Text to display when link is copied
        */
        linkCopiedText: {
            type: String,
            default: '',
        },
    },
    emits: ['copyLinkClicked'],
    data() {
        return {
            show: false,
        };
    },
    computed: {
        iconColour() {
            let colour = '';

            switch (this.name) {
            case 'facebook':
                colour = '#1877f2';
                break;
            case 'x-twitter':
                colour = '#0F1419';
                break;
            case 'pinterest':
                colour = '#E60023';
                break;
            case 'whatsapp':
                colour = '#455a64';
                break;
            default:
                colour = '#000000';
            };
            return colour;
        },
        encodedPageTitle() {
            return encodeURI(this.pageTitle);
        },
        shareUrl() {
            let url = '';

            switch (this.name) {
            case 'facebook':
                url = `https://www.facebook.com/sharer/sharer.php?u=${this.referringPageUrl}&t=${this.encodedPageTitle}`;
                break;
            case 'x-twitter':
                url = `https://twitter.com/intent/tweet?text=${this.encodedPageTitle}%20@VisitScotland&url=${this.referringPageUrl}`;
                break;
            case 'pinterest':
                url = `https://www.pinterest.com/pin/create/button/?url=${this.referringPageUrl}`;
                break;
            case 'email':
                url = `mailto:?body=${this.encodedPageTitle}%20-%20${this.referringPageUrl}&subject=${this.encodedPageTitle}`;
                break;
            case 'whatsapp':
                url = `https://wa.me/?text=${this.encodedPageTitle}%20-%20${this.referringPageUrl}`;
                break;
            case 'link':
                url = '#';
                break;
            default:
                url = '#';
            };
            return url;
        },
    },
    methods: {
        copyToClipboard(event) {
            if (this.name === 'link') {
                this.$emit('copyLinkClicked');

                // Clipboard API supported?
                if (!navigator.clipboard) return;

                // copy text to clipboard
                if (navigator.clipboard.writeText) {
                    navigator.clipboard.writeText(this.referringPageUrl);
                }

                // show success text on button
                this.show = true;
                setTimeout(() => { this.show = false; }, 2000);
            }

            this.trackShareClick(event);
        },
        trackShareClick(event) {
            this.createDataLayerObject('socialShareDataEvent', event, this.href);
        },
    },
};
</script>

<style lang="scss">
.vs-social-share-item{
    &__link.vs-link.vs-link--variant-primary{
        border: 1px solid $vs-color-new-border-primary;
        display: block;
        margin-bottom: $spacer-050;
        padding: $spacer-100 $spacer-050;
        text-align: center;
        text-decoration: none;

        @include media-breakpoint-up(md) {
            padding: $spacer-150;
            margin-bottom: $spacer-150;
        }

        &:hover{
            .vs-social-share-item__text{
                text-decoration: none;
            }
        }

        &:focus, &:focus-visible{
            @extend %outline-link-focus;
        }

        .vs-icon{
            display: block;
            margin: 0 auto $spacer-075;
        }
    }

    &__text{
        text-decoration: underline;
    }
}

@include no-js {
    .vs-social-share-item{
        &__link.vs-link.vs-link--variant-primary{
            margin-bottom: $spacer-100;

            @include media-breakpoint-up(sm) {
                margin-bottom: $spacer-150;
            }

            @include media-breakpoint-up(md) {
                margin-bottom: 0;
            }

            @include media-breakpoint-up(md) {
                padding: $spacer-150 $spacer-050;
            }
        }
    }
}
</style>
