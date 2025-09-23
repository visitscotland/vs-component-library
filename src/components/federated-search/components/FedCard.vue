<template>
    <VsCard class="vs-fed-card">
        <template #vs-card-header>
            <div class="vs-fed-card--header">
                <VsImg
                    class="vs-fed-card--header__image w-100 rounded-3 object-fit-cover img-zoom-on-hover"
                    use-lazy-loading
                    :src="props.imgSrc"
                />
                <div class="vs-fed-card--header__attributes">
                    <VsDetail
                        v-if="props.price"
                        class="vs-fed-card--header__attribute vs-fed-card--header__attribute-price me-050"
                    >
                        {{ props.price }}
                    </VsDetail>
                    <VsDetail
                        v-if="props.date"
                        class="vs-fed-card--header__attribute vs-fed-card--header__attribute-date"
                    >
                        {{ props.date }}
                    </VsDetail>
                </div>
            </div>
        </template>
        <template #vs-card-body>
            <VsHeading
                heading-level="4"
                heading-style="heading-xxs"
                v-if="$slots['fed-card-header']"
                data-test="vs-fed-card-header"
            >
                <VsLink
                    class="stretched-link"
                    :href="props.link"
                    variant="secondary"
                >
                    <!-- @slot Heading passed to VsCard element -->
                    <slot name="fed-card-header" />
                </VsLink>
            </VsHeading>
            <VsBody
                v-if="$slots['fed-card-description']"
                class="vs-fed-card--body__description truncate-3-lines mt-050"
                data-test="vs-fed-card-description"
            >
                <!-- @slot Slot for description, clamped to 3 lines max-->
                <slot name="fed-card-description" />
            </VsBody>
        </template>
        <template #vs-card-footer>
            <div class="vs-fed-card--footer mt-100">
                <div
                    v-if="$slots['fed-card-location']"
                    class="vs-fed-card--footer__location"
                    data-test="vs-fed-card-location"
                >
                    <VsIcon
                        icon="fa-solid fa-location-dot"
                        size="xs"
                        custom-colour="#A8308C"
                        class="me-025"
                    />
                    <VsDetail class="vs-fed-card--footer__location-detail">
                        <!-- @slot for location -->
                        <slot name="fed-card-location" />
                    </VsDetail>
                </div>
                <div
                    v-if="props.link"
                    class="vs-fed-card--footer_link"
                    data-test="vs-fed-card-link"
                >
                    <VsLink
                        class="stretched-link"
                        :href="props.link"
                        :type="props.linkType === 'INTERNAL' ? 'internal' : 'external'"
                        icon-size="xxs"
                    >
                        <!-- @slot for link text -->
                        <slot name="fed-card-link-label" />
                    </VsLink>
                </div>
            </div>
        </template>
    </VsCard>
</template>

<script setup lang="ts">

import VsCard from '@/components/card/Card.vue';
import VsImg from '@/components/img/Img.vue';
import VsHeading from '@/components/heading/Heading.vue';
import VsLink from '@/components/link/Link.vue';
import VsBody from '@/components/body/Body.vue';
import VsIcon from '@/components/icon/Icon.vue';
import VsDetail from '@/components/detail/Detail.vue';

const props = defineProps({
    imgSrc: {
        type: String,
        required: true,
        default: 'https://visitscotland.github.io/vs-component-library/images/placeholders/placeholder-img.jpg',
    },
    price: {
        type: String,
        required: false,
    },
    date: {
        type: String,
        required: false,
    },
    link: {
        type: String,
        required: false,
    },
    linkType: {
        type: String,
        required: false,
    },
});

</script>

<style lang="scss">

.vs-fed-card {
    &--header {
        position: relative;

        &__attribute {
            font-size: $vs-font-size-detail-s;
            background: $vs-color-background-information;
            border: none;
            border-radius: $vs-radius-tiny $vs-radius-tiny 0 0;
            padding: $vs-spacer-0125 $vs-spacer-075;
            color: $vs-color-text-primary;
            display: inline;
        }

        &__attributes {
            position: absolute;
            left: 0;
            right: 0;
            top: 155px;
        }
    }

    &--body {
        &__description {
            font-size: $vs-font-size-body-s;
            color: $vs-color-text-secondary;
        }
    }

    &--footer {
        display: flex;
        justify-content: space-between;
        font-size: $vs-font-size-detail-s;

        &__location-detail {
            color: $vs-color-text-tertiary;
            display: inline;
            flex-grow: 1;
            font-size: inherit;
        }

        &_link {
            flex-grow: 1;
            justify-content: flex-end;
            font-size: inherit;
            text-align: right;
        }
    }
}

</style>
