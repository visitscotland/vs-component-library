import VsQuote from '@/components/quote/Quote.vue';

export default {
    component: VsQuote,
    title: 'Components/Text & typography/Quote',
    argTypes: {
    },
    decorators: [() => ({
        template: '<div style="max-width: 760px;"><story /></div>',
    })],
};
const Template = (args) => ({
    components: {
        VsQuote,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsQuote 
            :useLegacy="args.useLegacy"
            :type="args.type"
            :quoteText="args.quoteText"
            :quoteName="args.quoteName"
            :accentColorTheme="args.accentColorTheme"
        >
            <template #quote-details>
                <span v-html="args.quoteDetails"></span>
            </template>
        </VsQuote>
    `,
});

const blockquoteText = 'Afterwards, if you are ready for dinner, you could catch the tram to the Leith area of the city. It\'s one of the trendiest neighbourhoods in the UK and boasts three Michelin-star restaurants. Alternatively, wander along Princes Street or George Street to the city\'s West End.';
const pullquoteText = 'It\'s one of the trendiest neighbourhoods in the UK';
const base = {
    useLegacy: false,
    type: 'blockquote',
    quoteText: blockquoteText,
};

export const Blockquote = Template.bind({
});

Blockquote.args = base;

export const BlockquoteWithAttribution = Template.bind({
});

BlockquoteWithAttribution.args = {
    ...base,
    quoteName: 'Frieda Smith',
    quoteDetails: 'Social media influencer, VisitScotland',
};

export const BlockquoteWithCitation = Template.bind({
});

BlockquoteWithCitation.args = {
    ...base,
    quoteName: 'Frieda Smith',
    quoteDetails: '<cite>Edinburgh City Guide</cite>',
};

export const Pullquote = Template.bind({
});

Pullquote.args = {
    ...base,
    type: 'aside',
    quoteText: pullquoteText,
    accentColorTheme: 'accent-tolsta',
};
