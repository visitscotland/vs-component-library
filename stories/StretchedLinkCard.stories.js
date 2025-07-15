import VsStretchedLinkCard from '@/components/stretched-link-card/StretchedLinkCard.vue';
import VsStretchedLinkPanels from '@/components/stretched-link-card/components/StretchedLinkPanels.vue';
import VsBadge from '@/components/badge/Badge.vue';

export default {
    component: VsStretchedLinkCard,
    title: 'StretchedLinkCard',
    decorators: [() => ({
        template: '<div style="max-width:280px;"><story /></div>',
    })],
    argTypes: {
        type: {
            control: {
                type: 'radio',
            },
            options: [
                'external',
                'internal',
                'download',
                'video',
            ],
        },
        headingLevel: {
            control: {
                type: 'radio',
            },
            options: [
                '1',
                '2',
                '3',
                '4',
                '5',
                '6',
            ],
        },
        warningSize: {
            control: {
                type: 'inline-radio',
            },
            options: [
                'small',
                'normal',
            ],
        },
    },
};

const Template = (args) => ({
    components: {
        VsBadge,
        VsStretchedLinkCard,
        VsStretchedLinkPanels,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <div
            :class="args.jsDisabled ? 'no-js' : ''"
        >
            <VsStretchedLinkCard v-bind="args">
                <template
                    v-if="${'default' in args}"
                    v-slot
                >
                    ${args.default}
                </template>

                <template
                    v-if="args['stretched-card-category']"
                    v-slot:stretched-card-category
                >
                    ${args['stretched-card-category']}
                </template>

                <template
                    v-if="args['stretched-card-header']"
                    v-slot:stretched-card-header
                >
                    ${args['stretched-card-header']}
                </template>

                <template
                    v-if="args['stretched-card-content']"
                    v-slot:stretched-card-content
                >
                    ${args['stretched-card-content']}
                </template>

                <template
                    v-if="args['stretched-card-panels']"
                    v-slot:stretched-card-panels
                >
                    ${args['stretched-card-panels']}
                </template>

                <template
                    v-if="args['stretched-card-badges']"
                    v-slot:stretched-card-badges
                >
                    <VsBadge
                        v-for="badge in args['stretched-card-badges']"
                        :key="badge"
                    >
                        {{ badge }}
                    </VsBadge>
                </template>

                <template
                    v-if="args['stretched-card-link']"
                    v-slot:stretched-card-link
                >
                    ${args['stretched-card-link']}
                </template>
            </VsStretchedLinkCard>
        </div>
    `,
});

const base = {
    link: 'https://visitscotland.com',
    type: 'internal',
    imgSrc: 'https://cimg.visitscotland.com/cms-images/attractions/outlander/claire-standing-stones-craigh-na-dun-outlander',
    imgAlt: 'This is the alt text',
    theme: 'light',
    headingLevel: '3',
    disabled: false,
    videoId: '',
    videoBtnText: '',
    errorMessage: '',
    errorType: 'image',
    warningSize: 'small',
    'stretched-card-category': 'Tours',
    'stretched-card-header': 'Tour scotland with outlander',
    'stretched-card-content': '<p>See Outlander filming locations, book locations, and attractions with real life Jacobite connections.</p>',
    'stretched-card-panels': '',
    'stretched-card-link': '',
    jsDisabled: false,
};

export const Default = Template.bind({
});

Default.args = base;

export const WithPanels = Template.bind({
});

WithPanels.args = {
    ...base,
    'stretched-card-panels': `
        <VsStretchedLinkPanels
            days="14"
            transport="fa-regular fa-car-side"
            transportName="Car"
            daysLabel="days"
        />
    `,
};

export const NoImage = Template.bind();

NoImage.args = {
    ...base,
    imgSrc: null,
    'stretched-card-category': null,
};

export const WithBadges = Template.bind();

WithBadges.args = {
    ...base,
    'stretched-card-badges': [
        'Read time',
        'Content type',
    ],
    'stretched-card-category': null,
};
