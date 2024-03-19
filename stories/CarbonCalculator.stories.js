import {
    within, waitFor, userEvent,
} from '@storybook/testing-library';

import VsCarbonCalculator from '@/components/carbon-calculator/CarbonCalculator.vue';

export default {
    component: VsCarbonCalculator,
    title: 'CarbonCalculator',
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
    language: 'en-gb',
    labelsMap: {
        noJsMessage: 'You need Javascript enabled to use this calculator',
        formUrl: '/fixtures/carbon-calculator/example-form.json',
        next: 'Next',
        previous: 'Previous',
        results: 'Results',
        resultsIntro: 'Your estimated total carbon emission for your trip is',
        chartTitle: 'Your emissions breakdown',
        comparison: 'That\'s the equivalent of <b>xxx kms</b> in a medium-sized petrol car, which would take you from <b>Edinburgh to London yyy times</b>!',
        kilos: 'kilos',
        begin: 'Start Questionnaire',
        introHeading: 'Calculate Your Carbon',
        introContent: 'From transport to food and drink, answer 4 simple questions about your trip to Scotland and we\'ll calculate your emissions.',
        perDayTarget: 30,
        perDayCongratulations: 'Congratulations!',
        perDaySuccess: 'You\'re emitting less than xxx KGs of CO₂e per day on your trip, which is below average. We like to think this makes you a Sustainability Unicorn - Scotland\'s national animal, which cares deeply about protecting our environment.',
        topTip: 'Top Tip!',
        allTips: '<a href="#">Discover more about sustainable travel in Scotland</a>.',
        soFar: 'Your calculation so far:',
        kgsOf: 'KGs of CO₂e',
        kgsPerDay: 'Thats about xxx KGs of CO₂e per day.',
        transport: 'Transport',
        accommodation: 'Accommodation',
        food: 'Food',
        restart: 'Restart',
        progress: 'Step xxx of yyy',
        'stage-1.title': 'Travel to Scotland',
        'stage-2.title': 'Accommodation',
        'stage-3.title': 'Travel around Scotland',
        'stage-4.title': 'Food',
        'stage-3.repeat': 'Add another mode of transport',
        'stage-3.tip': '<a href="https://www.visitscotland.com/inspiration/touring/easy-public-transport-trips" target="_blank">Check out some of our tips about traveling around Scotland by public transport</a>',
        'question-1.question': 'How are you travelling to Scotland?',
        'question-1.option-1': 'I live in Scotland',
        'question-1.option-2': 'Domestic Flight',
        'question-1.option-3': 'Short-Haul Flight',
        'question-1.option-4': 'Long-Haul Flight',
        'question-1.option-5': 'Car (Petrol)',
        'question-1.option-6': 'Car (Diesel)',
        'question-1.option-7': 'Car (Electric)',
        'question-1.option-8': 'Train',
        'question-1.option-9': 'Coach',
        'question-1.option-10': 'Ferry',
        'question-1.option-11': 'Campervan/Motorhome (Petrol)',
        'question-1.option-12': 'Campervan/Motorhome (Diesel)',
        'question-2.question': 'How many hours will your journey take?',
        'question-3.question': 'How many nights are you staying for?',
        'question-4.question': 'What will be your main mode of transport while travelling around Scotland?',
        'question-4.clone-question': 'What other mode of transport will you be taking while travelling around Scotland?',
        'question-4.option-1': 'Car (Petrol)',
        'question-4.option-2': 'Car (Diesel)',
        'question-4.option-3': 'Car (Electric)',
        'question-4.option-4': 'Campervan/Motorhome (Diesel)',
        'question-4.option-5': 'Campervan/Motorhome (Petrol)',
        'question-4.option-6': 'Coach',
        'question-4.option-7': 'Bus',
        'question-4.option-8': 'Train',
        'question-4.option-9': 'Motorbike',
        'question-4.option-10': 'Walking / Cycling',
        'question-5.question': 'How would you describe your diet?',
        'question-5.option-1': 'Frequent meat-eater',
        'question-5.option-2': 'Moderate meat-eater',
        'question-5.option-3': 'Infrequent meat-eater',
        'question-5.option-4': 'Pescatarian',
        'question-5.option-5': 'Vegetarian',
        'question-5.option-6': 'Vegan',
        'question-5.hint': 'Frequent meat eater: 5 times a week, moderate meat eater: 3 times a week, infrequent meat eater: 1 - 2 times a week',
    },
};

export const Default = Template.bind({
});

Default.args = base;

export const QuestionOpen = Template.bind({
});

QuestionOpen.args = base;

QuestionOpen.play = async({ canvasElement }) => {
    const canvas = within(canvasElement);

    await waitFor(() => {
        canvas.getByText('Start Questionnaire').click();
    });
};

const goToResults = async({ canvasElement }) => {
    const canvas = within(canvasElement);

    await waitFor(async() => {
        await canvas.getByText('Start Questionnaire').click();
    });

    await waitFor(async() => {
        await canvas.getByLabelText('Ferry').click();
    });

    const hoursInput = canvas.getByLabelText('How many hours will your journey take?');

    await waitFor(async() => {
        await userEvent.type(hoursInput, '4');
    });

    await waitFor(async() => {
        await canvas.getByText('Next').click();
    });

    await waitFor(async() => {
        await canvas.getByText('Next').click();
    });

    await waitFor(async() => {
        await canvas.getByLabelText('Bus').click();
    });

    await waitFor(async() => {
        await canvas.getByText('Next').click();
    });

    await waitFor(async() => {
        await canvas.getByLabelText('Pescatarian').click();
    });

    await waitFor(async() => {
        await canvas.getByText('Results').click();
    });
};

export const ResultsPage = Template.bind({
});

ResultsPage.args = base;

ResultsPage.play = goToResults;

export const GermanNumbers = Template.bind({
});

GermanNumbers.args = {
    ...base,
    language: 'de-de',
};

GermanNumbers.play = goToResults;

export const CarbonUnicorn = Template.bind({
});

CarbonUnicorn.args = base;

CarbonUnicorn.play = async({ canvasElement }) => {
    const canvas = within(canvasElement);

    await waitFor(async() => {
        await canvas.getByText('Start Questionnaire').click();
    });

    await waitFor(async() => {
        await canvas.getByLabelText('Ferry').click();
    });

    const hoursInput = canvas.getByLabelText('How many hours will your journey take?');

    await waitFor(async() => {
        await userEvent.type(hoursInput, '0');
    });

    await waitFor(async() => {
        await canvas.getByText('Next').click();
    });

    const nightsInput = canvas.getByLabelText('How many nights are you staying for?');

    await waitFor(async() => {
        await userEvent.type(nightsInput, '5');
    });

    await waitFor(async() => {
        await canvas.getByText('Next').click();
    });

    await waitFor(async() => {
        await canvas.getByLabelText('Bus').click();
    });

    await waitFor(async() => {
        await canvas.getByText('Next').click();
    });

    await waitFor(async() => {
        await canvas.getByLabelText('Vegan').click();
    });

    await waitFor(async() => {
        await canvas.getByText('Results').click();
    });
};

export const NoJavascript = Template.bind({
});

NoJavascript.args = {
    ...base,
    jsDisabled: true,
};
