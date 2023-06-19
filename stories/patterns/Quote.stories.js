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
                v-if="args.image"
                v-slot:image
            >
                <VsImg
                    :src="args.image.src"
                    alt="args.image.alt"
                />
            </template>
            
            <template v-slot:content>
                <p>
                    {{ args.content }}
                </p>
            </template>

            <template v-slot:author-name>{{ args['author-name'] }}</template>
            <template v-slot:author-title>{{ args['author-title'] }}</template>

            <template
                v-if="args.link"
                v-slot:link
            >
                <VsButton
                    :href="args.link.link"
                >
                    {{ args.link.linkText }}
                </VsButton>
            </template>
        </VsQuote>
    `,
});

const base = {
    content: 'Scotland\'s largest mountain was once a massive active volcano which exploded and collapsed inwards on itself millions of years ago.',
    'author-name': 'Penny',
    'author-title': 'Visitor Services Advisor at Edinburgh iCentre',
};

export const Default = Template.bind({
});

Default.args = base;

export const WithImage = Template.bind({
});

WithImage.args = {
    ...base,
    image: {
        src: 'src/assets/fixtures/quote/ben-nevis-and-river-lochy.jfif',
        alt: 'Ben Nevis',
    },
};

export const WithLink = Template.bind({
});

WithLink.args = {
    ...base,
    link: {
        link: '#',
        linkText: 'Explore Ben Nevis',
    },
};
