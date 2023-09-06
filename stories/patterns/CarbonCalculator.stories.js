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
        <div
            :class="args.jsDisabled ? 'no-js' : ''"
        >
            <VsCarbonCalculator v-bind="args">
            </VsCarbonCalculator>
        </div>
    `,
});

const base = {
    jsDisabled: false,
    dataUrl: '/fixtures/carbon-calculator/example-form.json',
    messagingUrl: '/fixtures/carbon-calculator/messaging.json',
    countryListUrl: '/fixtures/carbon-calculator/countries.json',
    noJsMessage: 'You need Javascript enabled to use this calculator',
    labelsMap: {
        next: 'Next',
        previous: 'Previous',
        results: 'Results',
        resultsIntro: 'Your estimated total carbon emission for your trip is',
        chartTitle: 'Your emissions breakdown',
        comparison: 'That\'s the equivalent of xxx kms in a medium-sized petrol car, which would take you from Edinburgh to London yyy times!',
        kilos: 'kilos',
        begin: 'Start Questionnaire',
        introHeading: 'Calculate Your Carbon',
        introContent: 'From transport to food and drink, answer 4 simple questions about your trip to Scotland and we\'ll calculate your emissions.',
        perDayTarget: 35,
        perDaySuccess: 'Congratulations! You\'re emitting less than xxx KGs of CO₂e per day on your trip, which is below average. We like to think this makes you a Sustainability Unicorn - Scotland\'s national animal, which cares deeply about protecting our environment.',
        topTip: 'Top Tip!',
        allTips: '<a href="#">Discover more about sustainable travel in Scotland</a>.',
        soFar: 'Your calculation so far:',
        kgsOf: 'KGs of CO₂e',
        kgsPerDay: 'Thats about xxx KGs of CO₂e per day.',
        transport: 'Transport',
        accommodation: 'Accommodation',
        food: 'Food',
        restart: 'Restart',
        'section-1.title': 'Transport',
        'section-2.title': 'Transport',
        'section-3.title': 'Accommodation',
        'section-4.title': 'Food',
        'page-1.question': 'How are you travelling to Scotland?',
        'page-1.option-1': 'I live in Scotland',
        'page-1.option-2': 'Domestic Flight',
        'page-1.option-3': 'Short-Haul Flight',
        'page-1.option-4': 'Long-Haul Flight',
        'page-1.option-5': 'Car (Petrol)',
        'page-1.option-6': 'Car (Diesel)',
        'page-1.option-7': 'Car (Electric)',
        'page-1.option-8': 'Train',
        'page-1.option-9': 'Coach',
        'page-1.option-10': 'Ferry',
        'page-1.option-11': 'Campervan/Motorhome (Petrol)',
        'page-1.option-12': 'Camperval/Motorhome (Diesel)',
        'page-2.question': 'How many hours will your journey take?',
        'page-3.question': 'How many nights are you staying for?',
        'page-4.question': 'How would you describe your diet?',
        'page-4.option-1': 'Frequent meat-eater',
        'page-4.option-2': 'Moderate meat-eater',
        'page-4.option-3': 'Infrequent meat-eater',
        'page-4.option-4': 'Pescatarian',
        'page-4.option-5': 'Vegetarian',
        'page-4.option-6': 'Vegan',
        'page-4.hint': 'Frequent meat eater: 5 times a week, moderate meat eater: 3 times a week, infrequent meat eater: 1 - 2 times a week',
    },
};

export const Default = Template.bind({
});

Default.args = base;

export const NoJs = Template.bind({
});

NoJs.args = {
    ...base,
    jsDisabled: true,
};
