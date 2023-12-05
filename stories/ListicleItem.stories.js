import VsListicleItem from '@/components/listicle/ListicleItem.vue';

import VsIconList from '@/components/icon-list/IconList.vue';
import VsIconListItem from '@/components/icon-list/components/IconListItem.vue';
import VsImageWithCaption from '@/components/image-with-caption/ImageWithCaption.vue';
import VsCaption from '@/components/caption/Caption.vue';

export default {
    component: VsListicleItem,
    title: 'ListicleItem',
    tags: ['autodocs'],
};

const Template = (args) => ({
    components: {
        VsListicleItem,
        VsIconList,
        VsIconListItem,
        VsImageWithCaption,
        VsCaption,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <ul style="list-style-type: none; padding: 0;">
            <VsListicleItem
                v-bind="args"
            >
                <template v-slot:image-slot>
                    <VsImageWithCaption
                        :imageSrc="args.imageSrc"
                        :altText="args.imageAltText"
                    >
                        <template v-slot:img-caption>
                            <VsCaption>
                                <template v-slot:caption>
                                    <span>{{ args.imageCaption }}</span>
                                </template>

                                <template v-slot:credit>
                                    <span>{{ args.imageCredit }}</span>
                                </template>
                            </VsCaption>
                        </template>
                    </VsImageWithCaption>
                </template>

                <template v-if="${'sub-heading' in args}" v-slot:sub-heading>${args['sub-heading']}</template>
                <template v-if="${'description-slot' in args}" v-slot:description-slot>${args['description-slot']}</template>
                <template v-if="${'facilities-slot' in args}" v-slot:facilities-slot>${args['facilities-slot']}</template>
            </VsListicleItem>
        </ul>
    `,
});

const description = `
    <p>The Standing Stones of Stenness make up a a small circle dating from the third millennium BC.
    It originally consisted of twelve stones, and The Watchstone and Barnhouse stone are also nearby.</p>
`;

const facilities = `
    <VsIconList title="Key Facilities">
        <VsIconListItem
            icon="facility-petswelcom"
            label="Pets Welcome">
        </VsIconListItem>
        <VsIconListItem
            icon="facility-dsblaccess"
            label="Wheelchair Access">
        </VsIconListItem>
        <VsIconListItem
            icon="facility-audioloop"
            label="Hearing Loop">
        </VsIconListItem>
    </VsIconList>
`;

const base = {
    index: '1',
    title: 'The Standing Stones of Stenness',
    subTitle: 'Orkney Islands',
    'description-slot': description,
    'facilities-slot': facilities,
    'hippo-details': '',
    imageSrc: '/fixtures/listicles/stenness.jpg',
    imageAltText: 'A photo of the Standing Stones of Stenness against a blue Sky',
    imageCaption: 'The Standing Stones of Stenness make up a a small circle dating from the third millennium BC. ',
    imageCredit: 'Historic Environment Scotland',
};

export const Default = Template.bind({
});

Default.args = base;
