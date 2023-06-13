import VsCannedSearch from '@/components/patterns/canned-search/CannedSearch.vue';
import VsButton from '@/components/elements/button/Button.vue';

export default {
    component: VsCannedSearch,
    title: 'Patterns/CannedSearch',
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
    apiUrl: 'http://172.28.81.65:8089/data/component/cannedsearch?prodtypes=acco&avail=off&locplace=4751&locprox=10.0&loc=Glasgow&fac_id=accessguide',
    heading: 'Accommodation in Glasgow',
    searchType: 'acco',
    carouselNextText: 'Next Slide',
    carouselPrevText: 'Previous Slide',
    vsCannedSearchIntro: '<p>Find your perfect place to stay in Glasgow</p>',
    vsCannedSearchOf: 'of',
    vsCannedSearchCredit: '',
    vsCannedSearchButtons: `
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
    apiUrl: 'http://172.28.81.65:8089/data/component/cannedsearch?prodtypes=cate&locpoly=821&locprox=10.0&loc=Royal+Mile',
    searchType: 'cate',
    heading: 'Food & Drink',
    vsCannedSearchButtons: `
        <VsButton href="#">
            View All Food & Drink
        </VsButton>
    `,
};

export const ThingsToDo = Template.bind();

ThingsToDo.args = {
    ...base,
    apiUrl: 'http://172.28.81.65:8089/data/component/cannedsearch?prodtypes=acti%2Cattr%2Creta&locplace=4751&locprox=10.0&loc=Glasgow',
    searchType: 'acti',
    heading: 'Things to Do',
    vsCannedSearchButtons: `
        <VsButton href="#">
            View All Things To Do
        </VsButton>
    `,
};

export const Tours = Template.bind();

Tours.args = {
    ...base,
    apiUrl: 'http://172.28.81.65:8089/data/component/cannedsearchtours?find%5B%5D=attractions%7Caberdeen%7CAberdeen&locale=en-GB',
    searchType: 'tour',
    heading: 'Tours in Aberdeen',
    vsCannedSearchButtons: `
        <VsButton href="#">
            View All Tours
        </VsButton>
    `,
};
