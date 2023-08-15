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
        <VsCarbonCalculator v-bind="args">
        </VsCarbonCalculator>
    `,
});

const base = {
    dataUrl: '/fixtures/carbon-calculator/example-form.json',
    messagingUrl: '/fixtures/carbon-calculator/messaging.json',
    countryListUrl: '/fixtures/carbon-calculator/countries.json',
};

export const Default = Template.bind({
});

Default.args = base;
