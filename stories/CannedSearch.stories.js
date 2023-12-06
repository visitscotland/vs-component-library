import VsCannedSearch from '@/components/canned-search/CannedSearch.vue';
import VsButton from '@/components/button/Button.vue';

export default {
    component: VsCannedSearch,
    title: 'CannedSearch',
    tags: ['autodocs'],
};

const Template = (args) => ({
    components: {
        VsCannedSearch,
        VsButton,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsCannedSearch v-bind="args">
        </VsCannedSearch>
    `,
});

const base = {
    apiUrl: '/fixtures/canned-search/sample-accom.json',
    heading: 'Accommodation in Glasgow',
    searchType: 'acco',
    carouselNextText: 'Next Slide',
    carouselPreviousText: 'Previous Slide',
    'vs-canned-search-intro': '<p>Find your perfect place to stay in Glasgow</p>',
    'vs-canned-search-of': 'of',
    'vs-canned-search-credit': '',
    'vs-canned-search-buttons': `
        <VsButton href="#">
            View All Accommodation
        </VsButton>
    `,
};

export const Accommodation = Template.bind({
});

Accommodation.args = base;

export const FoodAndDrink = Template.bind();

FoodAndDrink.args = {
    ...base,
    apiUrl: '/fixtures/canned-search/sample-food.json',
    searchType: 'cate',
    heading: 'Food & Drink',
    'vs-canned-search-buttons': `
        <VsButton href="#">
            View All Food & Drink
        </VsButton>
    `,
};

export const ThingsToDo = Template.bind();

ThingsToDo.args = {
    ...base,
    apiUrl: '/fixtures/canned-search/sample-event.json',
    searchType: 'acti',
    heading: 'Things to Do',
    'vs-canned-search-buttons': `
        <VsButton href="#">
            View All Things To Do
        </VsButton>
    `,
};

export const Tours = Template.bind();

Tours.args = {
    ...base,
    apiUrl: '/fixtures/canned-search/sample-tour.json',
    searchType: 'tour',
    heading: 'Tours in Aberdeen',
    'vs-canned-search-buttons': `
        <VsButton href="#">
            View All Tours
        </VsButton>
    `,
};
