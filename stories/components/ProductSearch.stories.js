import VsProductSearch from '@/components/product-search/ProductSearch.vue';
import enLocations from '@/assets/fixtures/product-search/enLocations.json';
import frLocations from '@/assets/fixtures/product-search/frLocations.json';
import { onUnmounted } from 'vue';

// Mock the getData function that's used in the component
const mockGetData = (url) => {
    if (url.includes('/data/locations')) {
        // Return mocked data based on locale
        const locale = url.includes('locale=fr') ? 'fr' : 'en';
        return Promise.resolve({
            data: locale === 'fr' ? frLocations : enLocations,
        });
    }
    return Promise.resolve({
        data: [],
    });
};

export default {
    component: VsProductSearch,
    title: 'Components/To be reviewed/ProductSearch',
    argTypes: {
        noJsMessage: {
            control: {
                type: 'text',
            },
        },
        vsModuleHeading: {
            control: {
                type: 'text',
            },
        },
        vsModuleIntro: {
            control: {
                type: 'text',
            },
        },
    },
};

const Template = (args) => ({
    components: {
        VsProductSearch,
    },
    setup() {
        // Mock the getData function
        if (typeof window !== 'undefined') {
            window.getData = mockGetData;
        }
        onUnmounted(() => {
            delete window.getData;
        });
        return {
            args,
        };
    },
    template: `
  <div :class="args.jsDisabled ? 'no-js' : ''">
      <VsProductSearch
          v-bind="args"
      >
          <template v-slot:vs-module-heading>
              ${args.vsModuleHeading}
          </template>
          <template v-slot:vs-module-intro>
             ${args.vsModuleIntro}
          </template>
      </VsProductSearch>
  </div>
  `,
});

const base = {
    defaultLocation: '',
    defaultProd: 'acti,attr,reta',
    defaultLocale: 'en',
    noJsMessage: 'You need Javascript to see this content',
    vsModuleHeading: 'Find experiences',
    vsModuleIntro:
        'Search a wide range of accommodation, events, food & drink options and things to do from indoor and outdoor attractions to activities, tours and more.',
};

export const Default = Template.bind({
});
Default.args = base;

export const DefaultLocation = Template.bind({
});
DefaultLocation.args = {
    ...base,
    defaultLocation: 'kingdom-fife',
};

export const DefaultLanguage = Template.bind({
});
DefaultLanguage.args = {
    ...base,
    defaultLocale: 'fr',
};

export const Accommodation = Template.bind({
});
Accommodation.args = {
    ...base,
    defaultProd: 'acco',
};

export const FoodAndDrink = Template.bind({
});
FoodAndDrink.args = {
    ...base,
    defaultProd: 'cate',
};

export const EventsAndFestivals = Template.bind({
});
EventsAndFestivals.args = {
    ...base,
    defaultProd: 'even',
};

export const Tours = Template.bind({
});
Tours.args = {
    ...base,
    defaultProd: 'tour',
};

export const NoJavascript = Template.bind({
});
NoJavascript.args = {
    ...base,
    jsDisabled: true,
};
