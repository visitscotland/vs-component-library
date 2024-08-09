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
        <VsLinkList v-bind="args">
            <template
                v-if="args.heading"
                v-slot:heading
            >
                {{ args.heading }}
            </template>

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
            v-if="args.linkList.find((el) => el.type === 'video')"
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
    linkList: [
        ...base.linkList,
        {
            title: 'Dark Skies in Scotland',
            type: 'video',
            href: '#',
            videoId: 'g-Fhvj7vW-E',
            videoDescriptor: 'Play',
        },
    ],
};

export const TableOfContents = Template.bind({
});

TableOfContents.args = {
    heading: 'In this article:',
    toc: true,
    linkList: [
        {
            title: 'Who needs a short-term lets licence?',
            href: '#section1',
        },
        {
            title: 'When do I need to have a licence?',
            href: '#section2',
        },
        {
            title: 'How to apply for a licence',
            href: '#section3',
        },
        {
            title: 'Frequently Asked Questions (FAQ)',
            href: '#section4',
        },
        {
            title: 'Industry Advisory Group (IAG)',
            href: '#section5',
        },
    ],
};
