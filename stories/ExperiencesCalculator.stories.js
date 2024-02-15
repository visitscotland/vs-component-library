import { within, waitFor } from '@storybook/testing-library';

import VsExperiencesCalculator from '@/components/experiences-calculator/ExperiencesCalculator.vue';
import { VsContainer } from '@/components/grid';

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
        VsContainer,
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
            <VsContainer>
                <VsExperiencesCalculator v-bind="args">
                </VsExperiencesCalculator>
            </VsContainer>
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
        resultsHeading: 'Your dream destination is... Lewis & Harris',
        resultsIntro: 'Your adventure to Lewis & Harris will see you explore wild mountains, rugged coastlines and white beaches. Discover the unique Gaelic culture and find standing stones, blackhouses and castles.',
        resultsLocation: 'Location: The northern island of the Outer Hebrides, off the north west coast of Scotland',
        resultsImg: 'src/assets/fixtures/experiences-calculator/images/results.jpg',
        ctaText: 'More information about Lewis & Harris',
        ctaLink: 'https://www.visitscotland.com/places-to-go/islands/lewis-harris',
        begin: 'Start travel quiz',
        introHeading: 'Discover your dream destination in Scotland',
        introContent: 'Take our quiz to reveal your dream holiday in Scotland with personalised recommendations just for you.',
        introImg: 'src/assets/fixtures/experiences-calculator/images/intro.jpg',
        restart: 'Retake quiz',
        progress: 'Question xxx of yyy',
        'question-1.question': 'My ideal scene is...',
        'question-1.option-1': 'The great outdoors',
        'question-1.option-1-img': 'src/assets/fixtures/experiences-calculator/images/great-outdoors.jpg',
        'question-1.option-2': 'City break',
        'question-1.option-2-img': 'src/assets/fixtures/experiences-calculator/images/city.jpg',
        'question-2.question': 'On holidays, you will find me...',
        'question-2.option-1': 'In the mountains',
        'question-2.option-1-img': 'src/assets/fixtures/experiences-calculator/images/mountains.jpg',
        'question-2.option-2': 'On the coast',
        'question-2.option-2-img': 'src/assets/fixtures/experiences-calculator/images/coast.jpg',
        'question-3.question': 'I would like to...',
        'question-3.option-1': 'Explore further',
        'question-3.option-1-img': 'src/assets/fixtures/experiences-calculator/images/explore.jpg',
        'question-3.option-2': 'Travel close by',
        'question-3.option-2-img': 'src/assets/fixtures/experiences-calculator/images/closeby.jpg',
        'question-4.question': 'I\'d like to spend time outdoors...',
        'question-4.option-1': 'Hiking',
        'question-4.option-1-img': 'src/assets/fixtures/experiences-calculator/images/hiking.jpg',
        'question-4.option-2': 'Adventure sports',
        'question-4.option-2-img': 'src/assets/fixtures/experiences-calculator/images/adventure.jpg',
        'question-4.option-3': 'Taking in the views',
        'question-4.option-3-img': 'src/assets/fixtures/experiences-calculator/images/views.jpg',
        'question-5.question': 'When I\'m away you\'ll find me in a...',
        'question-5.option-1': 'Five star hotel',
        'question-5.option-1-img': 'src/assets/fixtures/experiences-calculator/images/hotel.jpg',
        'question-5.option-2': 'Sleeping under the stars',
        'question-5.option-2-img': 'src/assets/fixtures/experiences-calculator/images/camping.jpg',
        'question-6.question': 'Are you an...',
        'question-6.option-1': 'Organised red squirrel',
        'question-6.option-1-img': 'src/assets/fixtures/experiences-calculator/images/squirrel.jpg',
        'question-6.option-2': 'Easy-going highland cow',
        'question-6.option-2-img': 'src/assets/fixtures/experiences-calculator/images/cow.jpg',
        'question-7.question': 'I\'d rather ...',
        'question-7.option-1': 'Have a picnic in the sun',
        'question-7.option-1-img': 'src/assets/fixtures/experiences-calculator/images/picnic.jpg',
        'question-7.option-2': 'Be cozy by the fire',
        'question-7.option-2-img': 'src/assets/fixtures/experiences-calculator/images/fire.jpg',
        'question-8.question': 'Who\'s invited?',
        'question-8.option-1': 'Family',
        'question-8.option-1-img': 'src/assets/fixtures/experiences-calculator/images/family.jpg',
        'question-8.option-2': 'Friends',
        'question-8.option-2-img': 'src/assets/fixtures/experiences-calculator/images/friends.jpg',
        'question-8.option-3': 'Partner',
        'question-8.option-3-img': 'src/assets/fixtures/experiences-calculator/images/partner.jpg',
        'question-8.option-4': 'Just me',
        'question-8.option-4-img': 'src/assets/fixtures/experiences-calculator/images/solo.jpg',
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
        canvas.getByText('Start travel quiz').click();
    });
};

const goToResults = async({ canvasElement }) => {
    const canvas = within(canvasElement);

    await waitFor(async() => {
        await canvas.getByText('Start travel quiz').click();
    });

    await waitFor(async() => {
        await canvas.getByLabelText('The great outdoors').click();
    });

    await waitFor(async() => {
        await canvas.getByText('Next').click();
    });

    await waitFor(async() => {
        await canvas.getByLabelText('On the coast').click();
    });

    await waitFor(async() => {
        await canvas.getByText('Next').click();
    });

    await waitFor(async() => {
        await canvas.getByLabelText('Explore further').click();
    });

    await waitFor(async() => {
        await canvas.getByText('Next').click();
    });

    await waitFor(async() => {
        await canvas.getByLabelText('Taking in the views').click();
    });

    await waitFor(async() => {
        await canvas.getByText('Next').click();
    });

    await waitFor(async() => {
        await canvas.getByLabelText('Five star hotel').click();
    });

    await waitFor(async() => {
        await canvas.getByText('Next').click();
    });

    await waitFor(async() => {
        await canvas.getByLabelText('Organised red squirrel').click();
    });

    await waitFor(async() => {
        await canvas.getByText('Next').click();
    });

    await waitFor(async() => {
        await canvas.getByLabelText('Be cozy by the fire').click();
    });

    await waitFor(async() => {
        await canvas.getByText('Next').click();
    });

    await waitFor(async() => {
        await canvas.getByLabelText('Friends').click();
    });

    await waitFor(async() => {
        await canvas.getByText('Results').click();
    });
};

export const ResultsPage = Template.bind({
});

ResultsPage.args = base;

ResultsPage.play = goToResults;

export const NoJs = Template.bind({
});

NoJs.args = {
    ...base,
    jsDisabled: true,
};
