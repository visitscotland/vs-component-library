import VsProductSearch from '@/components/patterns/product-search/ProductSearch.vue';

export default {
  component: VsProductSearch,
  title: 'Patterns/Product Search'
};

const Template = args => ({
  components: { VsProductSearch },
  setup() {
      return { args };
  },
  template: `
    <VsProductSearch
      configArr='${args.configArr}'
      noJsMessage="You need Javascript to see this content"
    >
      <template v-slot:vsModuleHeading v-if="${'heading' in args}">
          ${args.heading}
      </template>

      <template v-slot:vsModuleIntro v-if="${'intro' in args}">
          ${args.intro}
      </template>
    </VsProductSearch>
  `,
});

const base = {
  configArr: [
    {'subSearchType': 'acco'},
    {'locplace': '4161'},
    {'lang':'en'},
    {'domain':'http://172.28.81.65:8089'},
  ],
  heading: 'Find places to stay & things to do',
  intro: `Search through a fantastic range of things to do, places to stay, local events and tours`,
}

export const Default = Template.bind({});

Default.args = base;