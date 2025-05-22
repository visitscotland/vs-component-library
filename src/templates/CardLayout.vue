<template>
    <VsContainer
        v-if="variant === 'grid'"
        class="mt-075 mt-lg-200"
    >
        <VsRow>
            <VsCol>
                <VsCardGroup scroll-snap>
                    <VsCard>
                        <template #vs-card-header>
                            <VsImg
                                src="./fixtures/megalinks/ashton-lane-wide.jpg"
                                class="w-100 aspect-ratio-3-2 rounded-1 object-fit-cover img-zoom-on-hover"
                            />
                        </template>

                        <template #vs-card-body>
                            <VsHeading
                                level="3"
                                heading-style="heading-s"
                            >
                                <VsLink
                                    href="#"
                                    class="stretched-link"
                                    variant="secondary"
                                >
                                    11 off-the-beaten-track holiday destinations
                                </VsLink>
                            </VsHeading>

                            <VsRichTextWrapper>
                                Escape the tourist trails with out best off-the-beaten-track holiday ideas
                            </VsRichTextWrapper>
                        </template>
                    </VsCard>

                    <VsCard>
                        <template #vs-card-header>
                            <VsImg
                                src="./fixtures/megalinks/ashton-lane-wide.jpg"
                                class="w-100 aspect-ratio-3-2 rounded-1 object-fit-cover img-zoom-on-hover"
                            />
                        </template>

                        <template #vs-card-body>
                            <VsHeading
                                level="3"
                                heading-style="heading-s"
                            >
                                <VsLink
                                    href="#"
                                    class="stretched-link"
                                    variant="secondary"
                                >
                                    Walking in Scotland
                                </VsLink>
                            </VsHeading>

                            <VsRichTextWrapper>
                                Walking in Scotland means mighty mountains to conquer...
                            </VsRichTextWrapper>
                        </template>
                    </VsCard>

                    <VsCard>
                        <template #vs-card-header>
                            <VsImg
                                src="./fixtures/megalinks/ashton-lane-wide.jpg"
                                class="w-100 aspect-ratio-3-2 rounded-1 object-fit-cover img-zoom-on-hover"
                            />
                        </template>

                        <template #vs-card-body>
                            <VsHeading
                                level="3"
                                heading-style="heading-s"
                            >
                                <VsLink
                                    href="#"
                                    class="stretched-link"
                                    variant="secondary"
                                >
                                    Family holidays in Scotland
                                </VsLink>
                            </VsHeading>

                            <VsRichTextWrapper>
                                You'll wish your family holiday in Scotland could last forever.
                            </VsRichTextWrapper>
                        </template>
                    </VsCard>
                </VsCardGroup>

                <VsCardGroup
                    scroll-snap
                    cards-per-row="4"
                    class="mt-700"
                >
                    <VsCard>
                        <template #vs-card-header>
                            <VsImg
                                src="./fixtures/megalinks/ashton-lane-wide.jpg"
                                class="w-100 aspect-ratio-3-2 rounded-1 object-fit-cover img-zoom-on-hover"
                            />
                        </template>

                        <template #vs-card-body>
                            <VsHeading
                                level="3"
                                heading-style="heading-xs"
                            >
                                <VsLink
                                    href="#"
                                    class="stretched-link"
                                    variant="secondary"
                                >
                                    11 off-the-beaten-track holiday destinations
                                </VsLink>
                            </VsHeading>

                            <VsRichTextWrapper>
                                Escape the tourist trails with out best off-the-beaten-track holiday ideas
                            </VsRichTextWrapper>
                        </template>
                    </VsCard>

                    <VsCard>
                        <template #vs-card-header>
                            <VsImg
                                src="./fixtures/megalinks/ashton-lane-wide.jpg"
                                class="w-100 aspect-ratio-3-2 rounded-1 object-fit-cover img-zoom-on-hover"
                            />
                        </template>

                        <template #vs-card-body>
                            <VsHeading
                                level="3"
                                heading-style="heading-xs"
                            >
                                <VsLink
                                    href="#"
                                    class="stretched-link"
                                    variant="secondary"
                                >
                                    Walking in Scotland
                                </VsLink>
                            </VsHeading>

                            <VsRichTextWrapper>
                                Walking in Scotland means mighty mountains to conquer...
                            </VsRichTextWrapper>
                        </template>
                    </VsCard>

                    <VsCard>
                        <template #vs-card-header>
                            <VsImg
                                src="./fixtures/megalinks/ashton-lane-wide.jpg"
                                class="w-100 aspect-ratio-3-2 rounded-1 object-fit-cover img-zoom-on-hover"
                            />
                        </template>

                        <template #vs-card-body>
                            <VsHeading
                                level="3"
                                heading-style="heading-xs"
                            >
                                <VsLink
                                    href="#"
                                    class="stretched-link"
                                    variant="secondary"
                                >
                                    Family holidays in Scotland
                                </VsLink>
                            </VsHeading>

                            <VsRichTextWrapper>
                                You'll wish your family holiday in Scotland could last forever.
                            </VsRichTextWrapper>
                        </template>
                    </VsCard>

                    <VsCard>
                        <template #vs-card-header>
                            <VsImg
                                src="./fixtures/megalinks/ashton-lane-wide.jpg"
                                class="w-100 aspect-ratio-3-2 rounded-1 object-fit-cover img-zoom-on-hover"
                            />
                        </template>

                        <template #vs-card-body>
                            <VsHeading
                                level="3"
                                heading-style="heading-xs"
                            >
                                <VsLink
                                    href="#"
                                    class="stretched-link"
                                    variant="secondary"
                                >
                                    Walking in Scotland
                                </VsLink>
                            </VsHeading>

                            <VsRichTextWrapper>
                                Walking in Scotland means mighty mountains to conquer...
                            </VsRichTextWrapper>
                        </template>
                    </VsCard>
                </VsCardGroup>
            </VsCol>
        </VsRow>
    </VsContainer>
</template>

<script>

import {
    VsCol, VsRow, VsContainer,
} from '@/components/grid';
import VsCardGroup from '@/components/card-group/CardGroup.vue';
import VsCard from '@/components/card/Card.vue';
import VsHeading from '@/components/heading/Heading.vue';
import VsImg from '@/components/img/Img.vue';
import VsLink from '@/components/link/Link.vue';
import VsRichTextWrapper from '@/components/rich-text-wrapper/RichTextWrapper.vue';

/**
 * @displayName Card Layout
 */
export default {
    name: 'VsCardLayout',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsCol,
        VsRow,
        VsContainer,
        VsCardGroup,
        VsCard,
        VsHeading,
        VsImg,
        VsLink,
        VsRichTextWrapper,
    },
    props: {
        /**
        * Card grid pattern variant
        */
        variant: {
            type: String,
            default: 'grid',
            validator: (value) => value.match(/(grid)/),
        },
    },
};
</script>
