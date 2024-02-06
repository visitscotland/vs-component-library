import { within, waitFor } from '@storybook/testing-library';

import VsExperiencesCalculator from '@/components/experiences-calculator/ExperiencesCalculator.vue';

export default {
    component: VsExperiencesCalculator,
    title: 'ExperiencesCalculator',
    tags: ['autodocs'],
    argTypes: {
    },
};

const Template = (args) => ({
    components: {
        VsExperiencesCalculator,
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
            <VsExperiencesCalculator v-bind="args">
            </VsExperiencesCalculator>
        </div>
    `,
});

const base = {
    jsDisabled: false,
    language: 'en-gb',
    labelsMap: {
        noJsMessage: 'You need Javascript enabled to use this calculator',
        formUrl: '/fixtures/experiences-calculator/experiences-example.json',
        next: 'Next',
        previous: 'Previous',
        results: 'Results',
        resultsIntro: 'Your estimated total carbon emission for your trip is',
        comparison: 'That\'s the equivalent of <b>xxx kms</b> in a medium-sized petrol car, which would take you from <b>Edinburgh to London yyy times</b>!',
        begin: 'Start Quiz',
        introHeading: 'Discover Your Scotland',
        introContent: 'From transport to food and drink, answer 4 simple questions about your trip to Scotland and we\'ll calculate your emissions.',
        restart: 'Restart',
        progress: 'Step xxx of yyy',
        'stage-3.repeat': 'Add another mode of transport',
        'stage-3.tip': '<a href="https://www.visitscotland.com/inspiration/touring/easy-public-transport-trips" target="_blank">Check out some of our tips about traveling around Scotland by public transport</a>',
        'question-1.question': 'Beaches or mountains?',
        'question-1.option-1': 'Beaches',
        'question-1.option-2': 'Mountains',
        'question-2.question': 'Historical sights or outdoor sports?',
        'question-2.option-1': 'History',
        'question-2.option-2': 'Outdoors',
        'question-3.question': 'Scenic views or city break?',
        'question-3.option-1': 'Scenic views',
        'question-3.option-2': 'City break',
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

// const goToResults = async({ canvasElement }) => {
//     const canvas = within(canvasElement);

//     await waitFor(async() => {
//         await canvas.getByText('Start Questionnaire').click();
//     });

//     await waitFor(async() => {
//         await canvas.getByLabelText('Ferry').click();
//     });

//     const hoursInput = canvas.getByLabelText('How many hours will your journey take?');

//     await waitFor(async() => {
//         await userEvent.type(hoursInput, '4');
//     });

//     await waitFor(async() => {
//         await canvas.getByText('Next').click();
//     });

//     await waitFor(async() => {
//         await canvas.getByText('Next').click();
//     });

//     await waitFor(async() => {
//         await canvas.getByLabelText('Bus').click();
//     });

//     await waitFor(async() => {
//         await canvas.getByText('Next').click();
//     });

//     await waitFor(async() => {
//         await canvas.getByLabelText('Pescatarian').click();
//     });

//     await waitFor(async() => {
//         await canvas.getByText('Results').click();
//     });
// };

// export const ResultsPage = Template.bind({
// });

// ResultsPage.args = base;

// ResultsPage.play = goToResults;

export const NoJs = Template.bind({
});

NoJs.args = {
    ...base,
    jsDisabled: true,
};
