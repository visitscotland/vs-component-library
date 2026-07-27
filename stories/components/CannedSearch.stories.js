import VsCannedSearch from '@/components/canned-search/CannedSearch.vue';
import VsButton from '@/components/button/Button.vue';

export default {
    component: VsCannedSearch,
    title: 'Components/Deprecated/CannedSearch',
    tags: 'deprecated',
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
        <div style="background: #940f2c17; padding: 1rem; border: 1px solid #940F2C; margin-bottom: 1rem;">
            ⚠️ Deprecated: This component will be removed in a future release. 
            See the <a href="https://visitscotland.atlassian.net/wiki/spaces/DE/pages/1353416795/Deprecation+of+Canned+Search+component">Component migration docs.</a> 
        </div>

        <div
            :class="args.jsDisabled ? 'no-js' : ''"
        >
            <VsCannedSearch v-bind="args">
            </VsCannedSearch>
        </div>
    `,
});

const base = {
    apiUrl: './fixtures/canned-search/sample-accom.json',
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
    jsDisabled: false,
};

export const Accommodation = Template.bind({
});

Accommodation.args = base;

export const FoodAndDrink = Template.bind();

FoodAndDrink.args = {
    ...base,
    apiUrl: './fixtures/canned-search/sample-food.json',
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
    apiUrl: './fixtures/canned-search/sample-event.json',
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
    apiUrl: './fixtures/canned-search/sample-tour.json',
    searchType: 'tour',
    heading: 'Tours in Aberdeen',
    'vs-canned-search-buttons': `
        <VsButton href="#">
            View All Tours
        </VsButton>
    `,
};

export const NoJavascript = Template.bind();

NoJavascript.args = {
    ...base,
    jsDisabled: true,
};
