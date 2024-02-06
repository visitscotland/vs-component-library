import { config, mount } from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import moxios from 'moxios';

import sampleFormData from '@/assets/fixtures/experiences-calculator/experiences-example.json';
import VsExperiencesCalculator from '../ExperiencesCalculator.vue';

config.global.renderStubDefaultSlot = true;

const sampleFormUrl = 'https://testurl';

const labelsMap = {
    noJsMessage: 'You need Javascript enabled to use this calculator',
    formUrl: sampleFormUrl,
    next: 'Next',
    previous: 'Previous',
    results: 'Results',
    resultsIntro: 'Your estimated total experiences emission for your trip is',
    begin: 'Start Questionnaire',
    introHeading: 'Calculate Your experiences',
    introContent: 'From transport to food and drink, answer 4 simple questions about your trip to Scotland and we\'ll calculate your emissions.',
    allTips: '<a href="#">Discover more about sustainable travel in Scotland</a>.',
    restart: 'Restart',
    'stage-3.repeat': 'Add another mode of transport',
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
};

const factoryMount = (propsData) => mount(VsExperiencesCalculator, {
    propsData: {
        labelsMap,
        ...propsData,
    },
});

describe('VsExperiencesCalculator', () => {
    let wrapper;

    beforeEach(() => {
        moxios.install();

        moxios.stubRequest(sampleFormUrl, {
            status: 200,
            response: sampleFormData,
        });

        wrapper = factoryMount();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    it('should render an element with the correct test attribute', () => {
        const Calculator = wrapper.find('[data-test=vs-experiences-calculator]');

        expect(Calculator.exists()).toBe(true);
    });

    it('should render an intro on first load', () => {
        const Intro = wrapper.find('[data-test=vs-experiences-calculator-intro]');

        expect(Intro.exists()).toBe(true);
    });

    it('should render a question for each defined in the form data', async() => {
        wrapper.vm.forwardPage();

        await wrapper.vm.$nextTick();

        const Questions = wrapper.findAll('[data-test=vs-experiences-calculator-question]');

        expect(Questions.length).toBe(5);
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            expect(await axe(wrapper.html())).toHaveNoViolations();
        });
    });
});
