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
    <div :style="args.horizontal ? 'width: 100%;' : 'width: 20rem;' ">
        <VsCard 
            v-bind="args" 
            :horizontal="args.horizontal" 
            :contentLink="args.contentLinkUrl"
        >
            <template v-slot:vs-card-header>
                <VsImg
                    v-if="args.imageSrc"
                    :src="args.imageSrc"
                    class="w-100 aspect-ratio-3-2 rounded-1 object-fit-cover img-zoom-on-hover"
                />

                <p 
                    v-if="args.header" 
                    class="mb-0"
                >
                    ${args.header}
                </p>
            </template>

            <template v-slot:vs-card-body v-if="args.body || args.title">
                <div :class="args.horizontal || args.fillColor || args.cardStyle || args.accentBar ? 'px-100' : ''">
                    <VsHeading
                        v-if="args.title"
                        level="3"
                        heading-style="heading-s"
                    >
                        <VsLink
                            :href="args.contentLinkUrl"
                            class="stretched-link"
                            variant="secondary"
                        >
                            ${args.title}
                        </VsLink>
                    </VsHeading>

                    <VsRichTextWrapper 
                        v-if="args.body"
                        :class="[
                            args.horizontal ? 'd-none d-sm-block' : '',
                            args.truncate ? 'truncate-2-lines' : '',
                        ]"
                    >
                        ${args.body}
                    </VsRichTextWrapper>
                </div>
            </template>

            <template v-slot:vs-card-footer v-if="args.footer">
                <div 
                    class="pb-100"
                    :class="args.horizontal || args.fillColor || args.cardStyle ? 'd-none d-sm-block px-100' : ''"
                >
                    ${args.footer}
                </div>
            </template>
        </VsCard>
    </div>
    `,
});

const bodyText = `
        <p>Get a taste for Scotland and discover the country's mouth-watering food and drink.</p>
    `;
const imgUrl = './fixtures/megalinks/ashton-lane-wide.jpg';

const cardBase = {
    title: 'Scottish food & drink',
    contentLinkUrl: '#',
};

export const Default = Template.bind({
});

Default.args = {
    ...cardBase,
};

export const Elevated = Template.bind({
});

Elevated.args = {
    ...cardBase,
    cardStyle: 'elevated',
    fillColor: 'vs-color-background-primary',
    body: bodyText,
};

Elevated.parameters = {
    backgrounds: {
        default: 'Grey',
    },
};

export const Outlined = Template.bind({
});

Outlined.args = {
    ...cardBase,
    cardStyle: 'outlined',
    fillColor: 'vs-color-background-primary',
    body: bodyText,
};

Outlined.parameters = {
    backgrounds: {
        default: 'Grey',
    },
};

export const Filled = Template.bind({
});

Filled.args = {
    ...cardBase,
    fillColor: 'vs-color-background-primary',
    body: bodyText,
};

Filled.parameters = {
    backgrounds: {
        default: 'Grey',
    },
};

export const AccentBar = Template.bind({
});

AccentBar.args = {
    ...cardBase,
    accentBar: true,
    body: bodyText,
};

export const WithHeader = Template.bind({
});

WithHeader.args = {
    ...cardBase,
    body: bodyText,
    header: `
        Header text
    `,
};

export const WithFooter = Template.bind({
});

WithFooter.args = {
    ...cardBase,
    body: bodyText,
    footer: `
        Footer text
    `,
};

export const Split = Template.bind({
});

Split.args = {
    ...cardBase,
    imageSrc: imgUrl,
    body: bodyText,
    truncate: true,
};

export const SplitHorizontal = Template.bind({
});

SplitHorizontal.args = {
    ...cardBase,
    imageSrc: imgUrl,
    horizontal: true,
    body: bodyText,
    truncate: true,
};
