import VsButton from '@/components/elements/button/Button.vue';
import VsImg from '@/components/elements/img/Img.vue';
import VsQuote from '@/components/patterns/quote/Quote.vue';

export default {
    component: VsQuote,
    title: 'Patterns/Quote',
    tags: ['autodocs'],
    argTypes: {
        variant: {
            options: [
                'narrow',
                'wide',
            ],
            control: {
                type: 'radio',
            },
        },
    },
};
const Template = (args) => ({
    components: {
        VsButton,
        VsImg,
        VsQuote,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsQuote v-bind="args">
            <template
                v-if="args['quote-image']"
                v-slot:quote-image
            >
                <VsImg
                    :src="args['quote-image'].src"
                    alt="args['quote-image'].alt"
                />
            </template>
            
            <template v-slot:quote-content>
                <p>
                    {{ args['quote-content'] }}
                </p>
            </template>

            <template v-slot:quote-author-name>{{ args['quote-author-name'] }}</template>
            <template v-slot:quote-author-title>{{ args['quote-author-title'] }}</template>

            <template
                v-if="args['quote-link']"
                v-slot:quote-link
            >
                <VsButton
                    :href="args['quote-link'].link"
                >
                    {{ args['quote-link'].linkText }}
                </VsButton>
            </template>
        </VsQuote>
    `,
});

const base = {
    'quote-content': 'Scotland\'s largest mountain was once a massive active volcano which exploded and collapsed inwards on itself millions of years ago.',
    'quote-author-name': 'Penny',
    'quote-author-title': 'Visitor Services Advisor at Edinburgh iCentre',
};

export const Default = Template.bind({
});

Default.args = base;

export const WithImage = Template.bind({
});

WithImage.args = {
    ...base,
    'quote-image': {
        src: 'src/assets/fixtures/quote/ben-nevis-and-river-lochy.jfif',
        alt: 'Ben Nevis',
    },
};

export const WithLink = Template.bind({
});

WithLink.args = {
    ...base,
    'quote-link': {
        link: '#',
        linkText: 'Explore Ben Nevis',
    },
};
