import VsCard from '@/components/card/Card.vue';
import VsHeading from '@/components/heading/Heading.vue';
import VsImg from '@/components/img/Img.vue';
import VsLink from '@/components/link/Link.vue';
import VsButton from '@/components/button/Button.vue';
import VsBody from '@/components/body/Body.vue';
import VsArticleDetails from '@/components/article-details/ArticleDetails.vue';
import VsBadge from '@/components/badge/Badge.vue';
import VsIcon from '@/components/icon/Icon.vue';

import SplitLinkCardExample from './examples/split-link-card';
import SplitLinkHorizontalCardExample from './examples/split-link-horizontal-card';
import LinkExample from './examples/link-card';
import LinkWithDetailsExample from './examples/link-card-with-details';
import LinkWithIconExample from './examples/link-card-with-icon';
import CategoryExample from './examples/category-card';

const fullWidthDecorator = () => ({
    template: '<div style="width: 100%"><story /></div>',
});

const defaultDecorator = () => ({
    template: '<div style="width: 22rem"><story /></div>',
});

export default {
    title: 'Patterns/Cards',
};

const createTemplate = (exampleString) => () => ({
    components: {
        VsCard,
        VsHeading,
        VsImg,
        VsLink,
        VsButton,
        VsBody,
        VsArticleDetails,
        VsBadge,
        VsIcon,
    },
    template: exampleString,
});

export const SplitLink = createTemplate(SplitLinkCardExample).bind({
});
SplitLink.decorators = [defaultDecorator];

export const SplitLinkHorizontal = {
    render: createTemplate(SplitLinkHorizontalCardExample),
};
SplitLinkHorizontal.decorators = [fullWidthDecorator];

export const Link = createTemplate(LinkExample).bind({
});
Link.decorators = [defaultDecorator];

export const LinkWithDetails = createTemplate(LinkWithDetailsExample).bind({
});
LinkWithDetails.decorators = [defaultDecorator];

export const LinkWithIcon = createTemplate(LinkWithIconExample).bind({
});
LinkWithIcon.decorators = [defaultDecorator];

export const Category = createTemplate(CategoryExample).bind({
});
Category.decorators = [defaultDecorator];
