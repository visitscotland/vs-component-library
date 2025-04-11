import VsCard from '@/components/card/Card.vue';
import VsHeading from '@/components/heading/Heading.vue';
import VsImg from '@/components/img/Img.vue';
import VsLink from '@/components/link/Link.vue';
import VsButton from '@/components/button/Button.vue';
import VsRichTextWrapper from '@/components/rich-text-wrapper/RichTextWrapper.vue';

export default {
    component: VsCard,
    title: 'Card',
    argTypes: {

    },
};

const Template = (args) => ({
    components: {
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
        <VsCard v-bind="args" :horizontal="args.horizontal" :contentLink="args.contentLinkUrl" :style="args.horizontal ? 'width: 50rem;' : 'width: 20rem;' ">
            <template v-slot:vs-card-media v-if="args.imageSrc">
                <VsImg
                    :src="args.imageSrc"
                />
            </template>

            <template v-slot:vs-card-body v-if="args.body">
                <VsRichTextWrapper>
                    ${args.body}
                </VsRichTextWrapper>
            </template>

            <template v-slot:vs-card-footer v-if="args.buttonText1 || args.buttonText2 || args.ctaUrl">
                <VsButton variant="secondary" v-if="args.buttonText1" class="card-link">
                    ${args.buttonText1}
                </VsButton>

                <VsButton v-if="args.buttonText2" class="card-link">
                    ${args.buttonText2}
                </VsButton>

                <VsLink :href="args.ctaUrl" v-if="args.ctaUrl" class="card-link">
                    ${args.ctaText}
                </VsLink> 
            </template>
        </VsCard>
    `,
});

const bodyText = `
        <p>Supporting text can explain more about the topic the card is displaying.</p>
    `;
const imgUrl = './fixtures/megalinks/illustrated-map-of-scotland.jpg';

const clickableBase = {
    title: 'Example heading',
    contentLinkUrl: '#',
    body: bodyText,
};

const staticBase = {
    title: 'Example heading',
    body: bodyText,
};

export const Clickable = Template.bind({
});

Clickable.args = {
    ...clickableBase,
};

export const ClickableWithMedia = Template.bind({
});

ClickableWithMedia.args = {
    ...clickableBase,
    imageSrc: imgUrl,
};

export const ClickableHorizontal = Template.bind({
});

ClickableHorizontal.args = {
    ...clickableBase,
    imageSrc: imgUrl,
    horizontal: true,
};

export const Static = Template.bind({
});

Static.args = {
    ...staticBase,
    ctaUrl: '#',
    ctaText: 'Read more',
};

export const StaticWithMedia = Template.bind({
});

StaticWithMedia.args = {
    ...staticBase,
    imageSrc: imgUrl,
    ctaUrl: '#',
    ctaText: 'Read more',
};

export const StaticWithActions = Template.bind({
});

StaticWithActions.args = {
    ...staticBase,
    imageSrc: imgUrl,
    body: bodyText,
    buttonText2: 'Open',
    buttonText1: 'Clear',
};
