import VsCheckbox from '@/components/checkbox/Checkbox.vue';
import VsFilter from '@/components/filter/VsFilter.vue';
import VsFilterPanel from '@/components/filter/components/VsFilterPanel.vue';
import VsFilterSection from '@/components/filter/components/VsFilterSection.vue';

export default {
    component: VsFilter,
    title: 'Filter',
    decorators: [() => ({
        template: '<div style="max-width: 400px;"><story /></div>',
    })],
};

const Template = (args) => ({
    components: {
        VsCheckbox,
        VsFilter,
        VsFilterSection,
        VsFilterPanel,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsFilter v-bind="args">
            <VsFilterPanel
                :filter-label="args.filterLabel"   
            >
                <VsFilterSection
                    v-for="group in args.filterGroups"
                    :key="group.group"
                    :type="group.type"
                    :section-title="group.label || null"
                >
                    <template v-if="group.type === 'inline'">
                        <div
                            v-for="filter in group.filters"
                            class="date-picker"
                        >
                            <label :for="filter.label">
                                {{ filter.label }}
                            </label>
                            <div>
                                <input
                                    type="date"
                                    :id="filter.label"
                                    :name="filter.label"
                                    :min="args.minDate"
                                >
                            </div>
                        </div>
                    </template>

                    <template v-else>
                        <VsCheckbox
                            v-for="filter in group.filters"
                            :field-name="filter.label"
                            value="checked"
                            :label="filter.label"
                            size="sm"
                        />
                    </template>
                </VsFilterSection>                       
            </VsFilterPanel>
        </VsFilter>
    `,
});

const getTodayDate = () => {
    let todayDate = new Date();
    const offset = todayDate.getTimezoneOffset();
    todayDate = new Date(todayDate.getTime() - (offset * 60 * 1000));
    return todayDate.toISOString().split('T')[0];
};

const base = {
    filterId: 'filter-1',
    applyButtonText: 'Apply',
    filterButtonText: 'Filter',
    filterLabel: 'Filter',
    minDate: getTodayDate(),
    filterGroups: [
        {
            group: 1,
            type: 'inline',
            filters: [
                {
                    label: 'From',
                    type: 'date',
                },
                {
                    label: 'To',
                    type: 'date',
                },
            ],
        },
        {
            group: 2,
            type: 'list',
            filters: [
                {
                    label: 'Free',
                    type: 'boolean',
                },
                {
                    label: 'Online',
                    type: 'boolean',
                },
            ],
        },
        {
            group: 3,
            type: 'group',
            label: 'Sector',
            filters: [
                {
                    label: 'Accommodation',
                    type: 'accommodation',
                },
                {
                    label: 'Food and Drink',
                    type: 'food-drink',
                },
                {
                    label: 'Tours, Guides and Transport',
                    type: 'tours',
                },
            ],
        },
        {
            group: 4,
            type: 'group',
            label: 'Training Topic',
            filters: [
                {
                    label: 'Bookkeeping and finance',
                    type: 'bookkeeping-finance',
                },
                {
                    label: 'Growing your business',
                    type: 'growing-business',
                },
                {
                    label: 'IT and cyber security',
                    type: 'it-cyber-security',
                },
            ],
        },
    ],
};

export const Default = Template.bind();
Default.args = base;

export const Mobile = Template.bind();
Mobile.args = base;
Mobile.parameters = {
    viewport: {
        defaultViewport: 'mobile2',
    },
};
