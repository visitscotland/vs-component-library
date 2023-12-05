import VsLinkList from '@/components/link-list/LinkList.vue';
import VsLinkListItem from '@/components/link-list/components/LinkListItem.vue';

export default {
    component: VsLinkListItem,
    title: 'LinkList',
    tags: ['autodocs'],
    argTypes: {
        type: {
            options: [
                'default',
                'external',
                'internal',
                'download',
                'video',
            ],
            control: 'radio',
        },
        variant: {
            options: [
                'primary',
                'on-dark',
            ],
            control: 'inline-radio',
        },
    },
};

const Template = (args) => ({
    components: {
        VsLinkList,
        VsLinkListItem,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsLinkList>
            <VsLinkListItem
                v-for="link in Array.from(Array(args.linkCount).keys())"
                v-bind="args"
            >
                {{ args.label }}
            </VsLinkListItem>
        </VsLinkList>
    `,
});

const base = {
    linkCount: 4,
    label: 'Visit Scotland',
    type: 'external',
    href: 'https://visitscotland.com',
    variant: 'primary',
};

export const Default = Template.bind({
});

Default.args = base;

export const OnDark = Template.bind({
});

OnDark.args = {
    ...base,
    variant: 'on-dark',
};

OnDark.parameters = {
    backgrounds: {
        default: 'Dark',
    },
};
