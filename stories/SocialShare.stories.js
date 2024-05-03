import VsSocialShare from '@/components/social-share/SocialShare.vue';
import VsSocialShareItem from '@/components/social-share/components/SocialShareItem.vue';

import { userEvent, within } from '@storybook/test';

export default {
    component: VsSocialShare,
    title: 'SocialShareButton',
    tags: ['autodocs'],
    decorators: [() => ({
        template: '<story />',
    })],
};

const Template = (args) => ({
    components: {
        VsSocialShare,
        VsSocialShareItem,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <div :style="!args.jsDisabled ? 'display: flex; justify-content: flex-end' : ''">
            <div 
                :style="!args.jsDisabled ? 'position:absolute' : ''" 
                :class="args.jsDisabled ? 'no-js' : ''"
            >
                <VsSocialShare v-bind="args">
                    <VsSocialShareItem
                        v-for="item in args.default"
                        v-bind="item"
                    />
                </VsSocialShare>
            </div>
        </div>
    `,
});

const base = {
    id: 'default',
    pageUrl: 'http://www.visitscotland.com',
    pageTitle: 'VisitScotland - Scotland\'s National Tourist Organisation',
    sharePopoverTitle: 'Share On',
    shareBtnText: 'Share',
    closeAltText: 'Close',
    default: [
        {
            name: 'facebook',
            linkText: 'Facebook',
        },
        {
            name: 'pinterest',
            linkText: 'Pinterest',
        },
        {
            name: 'whatsapp',
            linkText: 'WhatsApp',
        },
        {
            name: 'x-twitter',
            linkText: 'X',
        },
        {
            name: 'email',
            linkText: 'Email',
        },
        {
            copyLinkClicked: 'onCopyLink',
            name: 'link',
            linkText: 'Copy Link',
            linkCopiedText: 'Link Copied!',
        },
    ],
    jsDisabled: false,
};

export const Default = Template.bind({
});

Default.args = base;

export const Open = Template.bind({
});

Open.args = base;

Open.play = async({ canvasElement }) => {
    const canvas = within(canvasElement);

    const shareButton = canvas.getByText(base.shareBtnText);

    await userEvent.click(shareButton);
};

export const NoJavascript = Template.bind({
});

NoJavascript.args = {
    ...base,
    jsDisabled: true,
    id: 'nojs',
    noJs: true,
};
