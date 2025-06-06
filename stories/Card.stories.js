import VsCard from '@/components/card/Card.vue';
import VsHeading from '@/components/heading/Heading.vue';
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
        VsLink,
        VsButton,
        VsRichTextWrapper,
    },
    setup() {
        const needsPadding = () => args.fillColor
        || args.cardStyle
        || args.accentBar;

        return {
            args,
            needsPadding,
        };
    },
    template: `
    <div style="width: 22rem">
        <VsCard 
            v-bind="args" 
            :contentLink="args.contentLinkUrl"
        >
            <template v-slot:vs-card-header>
                <p 
                    v-if="args.header" 
                    class="mb-0"
                    :class="needsPadding() ? 'px-125' : ''"
                >
                    ${args.header}
                </p>
            </template>

            <template v-slot:vs-card-body v-if="args.body || args.title">
                <div :class="needsPadding() ? 'px-125 py-050' : ''">
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
                        class="mb-125"
                    >
                        <p>
                            ${args.body}
                        </p>
                    </VsRichTextWrapper>
                </div>
            </template>

            <template v-slot:vs-card-footer>
                <div 
                    v-if="args.footer"
                    class="mb-100"
                    :class="needsPadding() ? 'd-none d-sm-block px-125' : ''"
                >
                    ${args.footer}
                </div>
            </template>
        </VsCard>
    </div>
    `,
});

const bodyText = `
        Fancy staying somewhere a little different? From castles to lighthouses, teepees to brochs, there's lots of unusual choices.
    `;

const cardBase = {
    title: 'Unusual accommodation in Scotland',
    contentLinkUrl: '#',
};

const filledCardBase = {
    ...cardBase,
    fillColor: 'vs-color-background-primary',
    body: bodyText,
};

const greyBackground = {
    backgrounds: {
        default: 'Grey',
    },
};

export const Default = Template.bind({
});
Default.args = {
    ...cardBase,
};

export const Filled = Template.bind({
});
Filled.args = filledCardBase;
Filled.parameters = greyBackground;

export const Outlined = Template.bind({
});
Outlined.args = {
    ...filledCardBase,
    cardStyle: 'outlined',
};
Outlined.parameters = greyBackground;

export const Elevated = Template.bind({
});
Elevated.args = {
    ...filledCardBase,
    cardStyle: 'elevated',
};
Elevated.parameters = greyBackground;

export const AccentBar = Template.bind({
});
AccentBar.args = {
    ...filledCardBase,
    accentBar: true,
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
