<template>
    <div
        class="vs-section-header"
        data-test="vs-section-header"
    >
        <VsContainer>
            <VsRow>
                <VsCol>
                    <span class="vs-section-header__divider" />
                </VsCol>
            </VsRow>
            <VsRow>
                <VsCol
                    cols="12"
                    sm="7"
                    md="6"
                    lg="4"
                >
                    <VsHeading
                        level="2"
                        heading-style="heading-l"
                        no-margins
                        class="mb-175 mb-lg-0"
                        :id="anchorId"
                    >
                        {{ heading }}
                    </VsHeading>
                </VsCol>
                <VsCol
                    cols="12"
                    sm="10"
                    md="9"
                    lg="8"
                >
                    <VsBody
                        v-if="$slots['section-header-lede']"
                        variant="lead"
                    >
                        <!-- @slot Slot to section header lede text -->
                        <slot name="section-header-lede" />
                    </VsBody>

                    <div
                        v-if="$slots['section-header-actions']"
                        class="mt-175"
                        data-test="vs-section-header__actions"
                    >
                        <!-- @slot Slot to contain action buttons -->
                        <slot name="section-header-actions" />
                    </div>
                </VsCol>
            </VsRow>
        </VsContainer>
    </div>
</template>

<script>
import VsHeading from '@/components/heading/Heading.vue';
import VsBody from '@/components/body/Body.vue';
import {
    VsContainer, VsRow, VsCol,
} from '@/components/grid';

/**

 *
 * @displayName SectionHeader
 */
export default {
    name: 'VsSectionHeader',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsHeading,
        VsBody,
        VsContainer,
        VsRow,
        VsCol,
    },
    props: {
        /**
         * anchorId will be used to set an id on the heading,
         * allowing for anchor links
         */
        anchorId: {
            type: String,
            default: null,
        },
        /**
         * heading will be used to set the heading text
         */
        heading: {
            type: String,
            required: true,
        },

    },
};
</script>

<style lang="scss">

.vs-section-header {
    &__divider {
        display: block;
        width: 114px;
        height: 2px;
        background-color: $vs-color-border-secondary;
        margin-bottom: $vs-spacer-150;
    }
}

</style>
