import VsCard from '@/components/card/Card.vue';
import VsHeading from '@/components/heading/Heading.vue';
import VsImg from '@/components/img/Img.vue';
import VsLink from '@/components/link/Link.vue';
import VsButton from '@/components/button/Button.vue';
import VsBody from '@/components/body/Body.vue';
import VsArticleDetails from '@/components/article-details/ArticleDetails.vue';
import VsBadge from '@/components/badge/Badge.vue';
import VsIcon from '@/components/icon/Icon.vue';

import SplitLinkCardExample from './card-examples/split-link-card';
import SplitLinkHorizontalCardExample from './card-examples/split-link-horizontal-card';
import LinkExample from './card-examples/link-card';
import LinkWithDetailsExample from './card-examples/link-card-with-details';
import LinkWithIconExample from './card-examples/link-card-with-icon';
import CategoryExample from './card-examples/category-card';
import EventExample from './card-examples/event-card';

const components = {
    VsCard,
    VsHeading,
    VsImg,
    VsLink,
    VsButton,
    VsBody,
    VsArticleDetails,
    VsBadge,
    VsIcon,
};

const decorators = {
    default: () => ({
        template: '<div style="width: 22rem"><story /></div>',
    }),
    fullWidth: () => ({
        template: '<div style="width: 100%"><story /></div>',
    }),
};

const createStory = (template, decorator = decorators.default) => ({
    render: () => ({
        components,
        template,
    }),
    decorators: [decorator],
    parameters: {
        docs: {
            source: {
                code: template,
            },
        },
    },
});

export default {
    title: 'Patterns/Cards',
};

export const SplitLink = createStory(SplitLinkCardExample);
export const SplitLinkHorizontal = createStory(
    SplitLinkHorizontalCardExample,
    decorators.fullWidth,
);
export const Link = createStory(LinkExample);
export const LinkWithDetails = createStory(LinkWithDetailsExample);
export const LinkWithIcon = createStory(LinkWithIconExample);
export const Category = createStory(CategoryExample);
export const Event = createStory(EventExample);
