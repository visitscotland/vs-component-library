import VsQuote from '@/components/quote/Quote.vue';

export default {
    component: VsQuote,
    title: 'Components/Text & typography/Quote',
    argTypes: {
        type: {
            options: [
                'blockquote',
                'q',
                'aside',
                'div',
            ],
            control: {
                type: 'radio',
            },
        },
    },
    decorators: [() => ({
        template: '<div style="max-width: 740px;"><story /></div>',
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
            :quoteDetails="args.quoteDetails"
        />
    `,
});

const blockquoteText = 'Afterwards, if you are ready for dinner, you could catch the tram to the Leith area of the city. It\'s one of the trendiest neighbourhoods in the UK and boasts three Michelin-star restaurants. Alternatively, wander along Princes Street or George Street to the city\'s West End.';
const pullquoteText = 'It\'s one of the trendiest neighbourhoods in the UK and boasts three Michelin-star restaurants.';

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
    quoteName: 'Madeleine Macaulay-Stuart',
    quoteDetails: 'Senior Manager Creative Studio, VisitScotland',
};

export const Pullquote = Template.bind({
});

Pullquote.args = {
    ...base,
    type: 'aside',
    quoteText: pullquoteText,
};
