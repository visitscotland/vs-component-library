import VsCarbonCalculator from '@/components/patterns/carbon-calculator/CarbonCalculator.vue';

export default {
    component: VsCarbonCalculator,
    title: 'Patterns/CarbonCalculator',
    tags: ['autodocs'],
    argTypes: {
    },
};

const Template = (args) => ({
    components: {
        VsCarbonCalculator,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsCarbonCalculator v-bind="args">
        </VsCarbonCalculator>
    `,
});

const base = {
    dataUrl: '/fixtures/carbon-calculator/example-form.json',
    messagingUrl: '/fixtures/carbon-calculator/messaging.json',
    countryListUrl: '/fixtures/carbon-calculator/countries.json',
    labelsMap: {
        next: 'Next',
        previous: 'Previous',
        results: 'Results',
        comparison: '<p>That\'s the equivalent to travelling the West Highland line over the Glenfinnan Viaduct (like Harry Potter!) xxx times.</p><p>The West Highland Line runs from Glasgow to Mallaig for 162 miles. Each journey uses 9.29kg of CO2 per person.</p>',
        comparisonTonnes: '0.00929',
        'section-1.title': 'Transport',
        'section-2.title': 'Accomodation',
        'section-3.title': 'Experiences',
        'section-4.title': 'Food',
        'page-1.question': 'How are you travelling to Scotland?',
        'page-1.option-1': 'I\'m already here!',
        'page-1.option-2': 'Plane',
        'page-1.option-2.tip': 'If you\'re travelling from within the UK, travelling by train instead of flying could save up to x tonnes of emissions per 100 miles!',
        'page-1.option-3': 'Car (Petrol)',
        'page-1.option-4': 'Car (Diesel)',
        'page-1.option-5': 'Car (Electric)',
        'page-1.option-6': 'Train',
        'page-2.question': 'Are you planning to travel within Scotland?',
        'page-2.option-1': 'No internal travel',
        'page-2.option-2': 'Plane',
        'page-2.option-2.tip': 'If you\'re travelling from within the UK, travelling by train instead of flying could save up to x tonnes of emissions per 100 miles!',
        'page-2.option-3': 'Car (Petrol)',
        'page-2.option-4': 'Car (Diesel)',
        'page-2.option-5': 'Car (Electric)',
        'page-2.option-6': 'Train',
        'page-3.question': 'Are you planning to travel within Scotland?',
        'page-3.option-1': 'Never',
        'page-3.option-2': 'Once or Twice',
        'page-3.option-3': 'Often',
        'page-3.option-4': 'Every Meal',
        'page-3.option-4.tip': 'Cutting red meat from one or two meals a week could save x emissions, and give you a chance to try some of Scotland\'s other great food like the Fish!',
    },
};

export const Default = Template.bind({
});

Default.args = base;
