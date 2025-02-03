import VsDetails from '@/components/details/VsDetails.vue';
import VsFilter from '@/components/filter/VsFilter.vue';
import VsFilterSection from '@/components/filter/components/VsFilterSection.vue';
import VsList from '@/components/list/List.vue';

export default {
    component: VsFilter,
    title: 'Filter',
    decorators: [() => ({
        template: '<div style="max-width: 360px;"><story /></div>',
    })],
};

const Template = (args) => ({
    components: {
        VsDetails,
        VsFilter,
        VsFilterSection,
        VsList,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsFilter v-bind="args" @filter-updated="(e) => console.log(e.target.checked)">
            <VsFilterSection>
                <label>
                    <input
                        type="checkbox"
                        :id="args.filters[0].label"
                        :name="args.filters[0].label"
                        :value="args.filters[0].label"
                    >
                    {{ args.filters[0].label }}
                </label>
                <label>
                    <input
                        type="checkbox"
                        :id="args.filters[0].label"
                        :name="args.filters[0].label"
                        :value="args.filters[0].label"
                    >
                    Online
                </label>
            </VsFilterSection>
            
            <VsDetails :summaryTitle="args.filters[3].label">
                <VsFilterSection>
                    <label v-for="item in args.filters[3].values">
                        <input
                            type="checkbox"
                            :id="item.value"
                            :name="item.value"
                            :value="item.value"
                        >
                        {{ item.name }}
                    </label>
                </VsFilterSection>
            </VsDetails>

            <VsDetails :summaryTitle="args.filters[4].label">
                <VsList unstyled>
                    <li v-for="item in args.filters[4].values">
                        <label>
                            <input
                                type="checkbox"
                                :id="item.value"
                                :name="item.value"
                                :value="item.value"
                            >
                            {{ item.name }}
                        </label>
                    </li>
                </VsList>
            </VsDetails>
        </VsFilter>
    `,
});

const base = {
    filterLabel: 'Filter',
    filters: [
        {
            label: 'Free',
            type: 'boolean',
        },
        {
            label: 'From',
            type: 'date',
        },
        {
            label: 'To',
            type: 'date',
        },
        {
            label: 'Sector',
            type: 'multiselect',
            values: [
                {
                    name: 'Accommodation',
                    value: 'accommodation',
                },
                {
                    name: 'Food and Drink',
                    value: 'food-drink',
                },
                {
                    name: 'Tours, Guides and Transport',
                    value: 'tours',
                },
            ],
        },
        {
            label: 'Training Topic',
            type: 'multiselect',
            values: [
                {
                    name: 'Bookkeeping and finance',
                    value: 'bookkeeping-finance',
                },
                {
                    name: 'Growing your business',
                    value: 'growing-business',
                },
                {
                    name: 'IT and cyber security',
                    value: 'it-cyber-security',
                },
            ],
        },
    ],
};

export const Default = Template.bind();
Default.args = base;
