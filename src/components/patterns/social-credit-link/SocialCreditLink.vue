<template>
    <div
        class="social-credit"
        data-test="vs-social-credit-link"
    >
        <VsIcon
            v-if="source"
            :name="source"
            variant="light"
            size="xs"
            class="me-1"
            data-test="vs-social-credit-link__icon"
        />
        <VsLink
            class="social-credit__link"
            data-test="vs-social-credit-link__link"
            :href="socialPostUrl"
            variant="on-dark"
            type="external"
        >
            {{ credit }}
        </VsLink>
    </div>
</template>

<script>
import VsLink from '@components/elements/link/Link.vue';
import VsIcon from '@components/elements/icon/Icon.vue';

/**
 * TODO: Document Usage
 *
 * @displayName Social Credit Link
 */
export default {
    name: 'VsSocialCreditLink',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsLink,
        VsIcon,
    },
    props: {
        /**
         * The social credit
         */
        credit: {
            type: String,
            required: true,
        },

        /**
         * URL to social item
         */
        socialPostUrl: {
            type: String,
            required: true,
        },

        /**
         * Where the image came from
         * `instagram`
         */
        source: {
            type: String,
            required: true,
            validator: (value) => value.match(/(instagram)/),
        },
    },
};
</script>

<style lang="scss">
.social-credit {
    line-height: $line_height_xs;

    .social-credit__link {
        color: $color-white;
        font-weight: $font-weight-light;
        font-size: $font-size-3;

        .vs-icon {
            color: $color-white;
            vertical-align: middle;
        }
    }
}
</style>
