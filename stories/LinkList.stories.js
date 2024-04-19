import VsLinkList from '@/components/link-list/LinkList.vue';
import VsLinkListItem from '@/components/link-list/components/LinkListItem.vue';
import VsModal from '@/components/modal/Modal.vue';
import VsVideo from '@/components/video/Video.vue';
import {
    VsRow,
    VsCol,
} from '@/components/grid';

export default {
    component: {
        VsLinkListItem,
        VsCol,
        VsModal,
        VsVideo,
        VsRow,
    },
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
                v-for="link in args.linkList"
                :type="link.type"
                :href="link.href"
                :videoId="link.videoId"
                :videoDescriptor="link.videoDescriptor"
            >
                {{ link.title }}
            </VsLinkListItem>
        </VsLinkList>

        <VsModal
            modalId="g-Fhvj7vW-E"
            closeBtnText="Close"
            :isVideoModal="true"
        >
            <div
                :class="args.jsDisabled ? 'no-js' : ''"
            >
            <VsRow>
                <VsCol cols="12">
                    <VsVideo
                        videoId="g-Fhvj7vW-E"
                        class="mb-8"
                        cookie-btn-text="Manage cookies"
                        no-js-message="You need Javascript enabled to see this video"
                        no-cookies-message="You need cookies enabled to see this video"
                    />
                </VsCol>
            </VsRow>
            </div>
        </VsModal>
    `,
});

const base = {
    linkList: [
        {
            title: 'Ski Accommodation',
            href: '#',
        },
        {
            title: '13 Amazing Places to Stay on Scotland\'s UNESCO Trail',
            href: '#',
        },
        {
            title: 'Stay in a converted church in Scotland',
            type: 'external',
            href: '#',
        },
    ],
};

export const Default = Template.bind({
});

Default.args = base;

export const WithVideo = Template.bind({
});

WithVideo.args = {
    ...base,
    linkList: [
        {
            title: 'Ski Accommodation',
            href: '#',
        },
        {
            title: '13 Amazing Places to Stay on Scotland\'s UNESCO Trail',
            href: '#',
        },
        {
            title: 'Stay in a converted church in Scotland',
            type: 'external',
            href: '#',
        },
        {
            title: 'Dark Skies in Scotland',
            type: 'video',
            href: '#',
            videoId: 'g-Fhvj7vW-E',
            videoDescriptor: 'Play',
        },
    ],
};
