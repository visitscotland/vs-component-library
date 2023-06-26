import VsListicleItem from '@/components/patterns/listicle/ListicleItem.vue';

import VsIconList from '@/components/patterns/icon-list/IconList.vue';
import VsIconListItem from '@/components/patterns/icon-list/components/IconListItem.vue';

export default {
    component: VsListicleItem,
    title: 'Patterns/ListicleItem',
    tags: ['autodocs'],
};

const Template = (args) => ({
    components: {
        VsListicleItem,
        VsIconList,
        VsIconListItem,
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
                <template v-if="${'sub-heading' in args}" v-slot:sub-heading>${args['sub-heading']}</template>
                <template v-if="${'image-slot' in args}" v-slot:image-slot>${args['image-slot']}</template>
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
    'image-slot': 'Image with Caption goes here',
    'description-slot': description,
    'facilities-slot': facilities,
    'hippo-details': '',
};

export const Default = Template.bind({
});

Default.args = base;
