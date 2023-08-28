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
        comparisonKilos: '9.29',
        kilos: 'kilos',
        begin: 'Start Questionnaire',
        introHeading: 'Calculate Your Carbon',
        introContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultrices mauris id elementum laoreet. Ut eget justo nec risus commodo ullamcorper. Donec sagittis ex id neque varius, ut sodales diam pretium.',
        'section-1.title': 'Transport',
        'section-2.title': 'Transport',
        'section-3.title': 'Accommodation',
        'section-4.title': 'Food',
        'page-1.question': 'How are you travelling to Scotland?',
        'page-1.option-1': 'I\'m already here!',
        'page-1.option-2': 'Plane',
        'page-1.option-3': 'Car (Petrol)',
        'page-1.option-4': 'Car (Diesel)',
        'page-1.option-5': 'Car (Electric)',
        'page-1.option-6': 'Train',
        'page-2.question': 'How many hours will your journey take?',
        'page-3.question': 'How many nights are you staying for?',
        'page-4.question': 'How would you describe your diet?',
        'page-4.option-1': 'Regular meat-eater',
        'page-4.option-2': 'Moderate meat-eater',
        'page-4.option-3': 'Infrequent meat-eater',
        'page-4.option-4': 'Pescatarian',
        'page-4.option-5': 'Vegetarian',
        'page-4.option-6': 'Vegan',
    },
};

export const Default = Template.bind({
});

Default.args = base;
