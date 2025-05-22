import VsCardGroup from '@/components/card-group/CardGroup.vue';
import VsCard from '@/components/card/Card.vue';
import VsHeading from '@/components/heading/Heading.vue';
import VsImg from '@/components/img/Img.vue';
import VsLink from '@/components/link/Link.vue';
import VsButton from '@/components/button/Button.vue';
import VsRichTextWrapper from '@/components/rich-text-wrapper/RichTextWrapper.vue';

export default {
    component: VsCardGroup,
    title: 'CardGroup',
    argTypes: {

    },
};

const Template = (args) => ({
    components: {
        VsCardGroup,
        VsCard,
        VsHeading,
        VsImg,
        VsLink,
        VsButton,
        VsRichTextWrapper,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
    <VsCardGroup 
        v-bind="args"
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
    </VsCardGroup>
    `,
});

export const Grid3 = Template.bind({
});

export const Grid4 = Template.bind({
});

Grid4.args = {
    cardsPerRow: 4,
};

export const ScrollSnap = Template.bind({
});

ScrollSnap.args = {
    scrollSnap: true,
};

ScrollSnap.parameters = {
    viewport: {
        defaultViewport: 'mobile1',
    },
};
