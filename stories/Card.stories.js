import VsCard from '@/components/card/Card.vue';
import VsImg from '@/components/img/Img.vue';
import VsHeading from '@/components/heading/Heading.vue';
import VsLink from '@/components/link/Link.vue';
import VsButton from '@/components/button/Button.vue';
import VsBody from '@/components/body/Body.vue';

export default {
    component: VsCard,
    title: 'Components/Layout & content structure/Card',
    argTypes: {

    },
};

const Template = (args) => ({
    components: {
        VsCard,
        VsHeading,
        VsLink,
        VsButton,
        VsBody,
        VsImg,
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
                <p  v-if="args.header"
                    class="mb-0"
                    :class="needsPadding() ? 'px-125' : ''"
                >
                    ${args.header}
                </p>
            </template>

            <template v-slot:vs-card-body>
                <div :class="needsPadding() ? 'px-125' : ''">
                    <VsHeading
                        v-if="args.title && args.cardStyle !== 'overlay'"
                        level="3"
                        heading-style="heading-xs"
                    >
                        <VsLink
                            :href="args.contentLinkUrl"
                            class="stretched-link"
                            variant="secondary"
                        >
                            ${args.title}
                        </VsLink>
                    </VsHeading>

                    <VsBody 
                        v-if="args.body"
                        class="mb-125"
                    >
                        <p>
                            ${args.body}
                        </p>
                    </VsBody>
                </div>
            </template>

            <template v-slot:vs-card-footer v-if="args.footer">
                <div 
                    class="mb-100"
                    :class="needsPadding() ? 'd-none d-sm-block px-125' : ''"
                >
                    <span v-if="args.cardStyle !== 'overlay'">
                        ${args.footer}
                    </span>

                    <VsHeading
                        v-if="args.title && args.cardStyle === 'overlay'"
                        level="3"
                        heading-style="heading-xs"
                    >
                        <VsLink
                            :href="args.contentLinkUrl"
                            class="stretched-link text-decoration-none"
                            variant="on-dark"
                        >
                            ${args.title}
                        </VsLink>
                    </VsHeading>
                </div>
            </template>

            <template v-slot:vs-card-image v-if="args.image">
                <VsImg 
                    :src="args.image"
                    class="w-100 aspect-ratio-3-2 rounded-1 object-fit-cover img-zoom-on-hover"
                />
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
        value: 'grey',
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
Filled.globals = greyBackground;

export const Outlined = Template.bind({
});
Outlined.args = {
    ...filledCardBase,
    cardStyle: 'outlined',
};
Outlined.globals = greyBackground;

export const Elevated = Template.bind({
});
Elevated.args = {
    ...filledCardBase,
    cardStyle: 'elevated',
};
Elevated.globals = greyBackground;

export const AccentBar = Template.bind({
});
AccentBar.args = {
    ...filledCardBase,
    accentBar: true,
};

export const Overlay = Template.bind({
});
Overlay.args = {
    ...cardBase,
    image: 'https://2f1a7f9478.visitscotland.net/binaries/content/gallery/visitscotland/cms-images/2022/11/30/family-outside-the-va-dundee?size=lg',
    cardStyle: 'overlay',
    footer: true,
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
