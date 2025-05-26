import VsCard from '@/components/card/Card.vue';
import VsHeading from '@/components/heading/Heading.vue';
import VsImg from '@/components/img/Img.vue';
import VsLink from '@/components/link/Link.vue';
import VsButton from '@/components/button/Button.vue';
import VsRichTextWrapper from '@/components/rich-text-wrapper/RichTextWrapper.vue';
import VsBlogDetails from '@/components/blog-details/BlogDetails.vue';
import VsBadge from '@/components/badge/Badge.vue';
import VsIcon from '@/components/icon/Icon.vue';

export default {
    component: VsCard,
    title: 'Patterns/Cards',
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
        VsBlogDetails,
        VsBadge,
        VsIcon,
    },
    setup() {
        const needsPadding = () => args.horizontal
        || args.fillColor
        || args.cardStyle
        || args.accentBar;

        return {
            args,
            needsPadding,
        };
    },
    template: `
    <div :style="args.horizontal ? 'width: 100%;' : 'width: 22rem;' ">
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
    
                <VsBadge 
                    v-if="args.badge" 
                    variant="subtle"
                    class="mt-125"
                    :class="needsPadding() ? 'mx-075' : ''"
                >
                    Article
                </VsBadge>

                <VsIcon 
                    v-if="args.icon" 
                    name="globe"
                    variant="tertiary"
                    size="lg"
                    class="mt-125"
                    :class="needsPadding() ? 'px-125' : ''"
                />
            </template>

            <template 
                v-slot:vs-card-body 
                v-if="args.body || args.title"
            >
                <div :class="needsPadding() ? 'px-125' : ''">
                    <VsHeading
                        v-if="args.title"
                        level="3"
                        heading-style="heading-s"
                        class="mt-125"
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
                        class="mb-150"
                        :class="args.horizontal ? 'd-none d-sm-block' : ''"
                    >
                        <p :class="args.truncate || ''">
                            ${args.body}
                        </p>
                    </VsRichTextWrapper>
                </div>
            </template>

            <template v-slot:vs-card-footer>
                <VsBlogDetails 
                    v-if="args.metaData"
                    class="mb-150" 
                    :class="needsPadding() ? 'px-125' : ''"
                    blogReadTime="2 minute read"
                />
            </template>
        </VsCard>
    </div>
    `,
});

const splitCardBase = {
    title: 'Unusual accommodation in Scotland',
    body: 'Fancy staying somewhere a little different? From castles to lighthouses, teepees to brochs, there\'s lots of unusual choices.',
    contentLinkUrl: '#',
    imageSrc: './fixtures/megalinks/ashton-lane-wide.jpg',
    truncate: 'truncate-2-lines',
};

const linkCardBase = {
    title: 'Managing your website',
    body: 'Find out what makes a good accessible website including key pages and booking systems, and how you can develop and improve this digital channel.',
    contentLinkUrl: '#',
    truncate: 'truncate-3-lines',
    cardStyle: 'elevated',
    fillColor: 'vs-color-background-primary',
    accentBar: true,
};

const greyBackground = {
    backgrounds: {
        default: 'Grey',
    },
};

export const SplitLink = Template.bind({
});
SplitLink.args = {
    ...splitCardBase,
};

export const SplitLinkHorizontal = Template.bind({
});
SplitLinkHorizontal.args = {
    ...splitCardBase,
    horizontal: true,
};

export const LinkCard = Template.bind({
});
LinkCard.args = linkCardBase;
LinkCard.parameters = greyBackground;

export const LinkCardWithDetails = Template.bind({
});
LinkCardWithDetails.args = {
    ...linkCardBase,
    badge: true,
    metaData: true,
};
LinkCardWithDetails.parameters = greyBackground;

export const LinkCardWithIcon = Template.bind({
});
LinkCardWithIcon.args = {
    ...linkCardBase,
    icon: true,
};
LinkCardWithIcon.parameters = greyBackground;
