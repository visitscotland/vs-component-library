import VsDetails from '@/components/details/VsDetails.vue';
import VsFilter from '@/components/filter/VsFilter.vue';
import VsFilterSection from '@/components/filter/components/VsFilterSection.vue';
import VsFilterPanel from '@/components/filter/components/VsFilterPanel.vue';
import VsList from '@/components/list/List.vue';
import VsCheckbox from '@/components/checkbox/Checkbox.vue';

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
        VsFilterPanel,
        VsList,
        VsCheckbox,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsFilter>
            <VsFilterPanel
                :filter-label="args.filterLabel"
                @filter-updated="(e) => console.log(e.target)"    
            >
                <VsFilterSection type="inline">
                    <div class="date-picker">
                        <label for="from">
                            From
                        </label>
                        <div>
                            <input
                                type="date"
                                id="from"
                                name="from"
                                min="2025-02-14"
                            >
                        </div>
                    </div>
                
                    <div class="date-picker">
                        <label for="to">
                            To
                        </label>
                        <div>
                            <input
                                type="date"
                                id="to"
                                name="to"
                                min="2025-03-03"
                            >
                        </div>
                    </div>
                </VsFilterSection>

                <VsFilterSection type="list">
                    <VsCheckbox
                        field-name="cookieConsent"
                        value="checked"
                        label="Free"
                        size="sm"
                    />

                    <VsCheckbox
                        field-name="cookieConsent"
                        value="checked"
                        label="Online"
                        size="sm"
                    />
                </VsFilterSection>

                <VsFilterSection
                    :summary-title="args.filters[4].label"
                    type="group"
                >
                    <VsCheckbox
                        v-for="item in args.filters[4].values"
                        :field-name="item.value"
                        value="checked"
                        :label="item.name"
                        size="sm"
                    />
                </VsFilterSection>

                <VsFilterSection
                    :summary-title="args.filters[5].label"
                    type="group"
                >
                    <VsCheckbox
                        v-for="item in args.filters[5].values"
                        :field-name="item.value"
                        value="checked"
                        :label="item.name"
                        size="sm"
                    />
                </VsFilterSection>
            </VsFilterPanel>
        </VsFilter>
    `,
});

const base = {
    filterLabel: 'Filter',
    filters: [
        {
            label: 'Free',
            type: 'boolean',
            group: 1,
        },
        {
            label: 'Online',
            type: 'boolean',
            group: 1,
        },
        {
            label: 'From',
            type: 'date',
            group: 2,
        },
        {
            label: 'To',
            type: 'date',
            group: 2,
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
