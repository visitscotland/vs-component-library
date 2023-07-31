import VsTable from '@/components/patterns/table/Table.vue';
import VsTableHead from '@/components/patterns/table/components/TableHead.vue';
import VsTableRow from '@/components/patterns/table/components/TableRow.vue';
import VsTableHeaderCell from '@/components/patterns/table/components/TableHeaderCell.vue';
import VsTableBody from '@/components/patterns/table/components/TableBody.vue';
import VsTableDataCell from '@/components/patterns/table/components/TableDataCell.vue';
import VsTableFooter from '@/components/patterns/table/components/TableFooter.vue';
import VsHeading from '@/components/elements/heading/Heading.vue';

export default {
    component: VsTable,
    title: 'Patterns/Table',
    tags: ['autodocs'],
    argTypes: {
        tableType: {
            options: [
                'responsive',
                'stacked',
            ],
            control: 'inline-radio',
        },
    },
};

const Template = (args) => ({
    components: {
        VsTable,
        VsTableHead,
        VsTableRow,
        VsTableHeaderCell,
        VsTableBody,
        VsTableDataCell,
        VsTableFooter,
        VsHeading,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsHeading
            level="3"
            overrideStyleLevel="5"
        >
            Glencoe Run/Lift Status
        </VsHeading>

        <VsTable 
            v-bind="args"
        >
            <VsTableHead>
                <VsTableRow>
                    <VsTableHeaderCell>
                        Status
                    </VsTableHeaderCell>
                    <VsTableHeaderCell>
                        Runs
                    </VsTableHeaderCell>
                    <VsTableHeaderCell>
                        Lifts
                    </VsTableHeaderCell>
                </VsTableRow>
            </VsTableHead>

            <VsTableBody>
                <VsTableRow>
                    <VsTableDataCell stacked-heading="Status">
                        Open
                    </VsTableDataCell>
                    <VsTableDataCell stacked-heading="Runs">
                        7/21
                    </VsTableDataCell>
                    <VsTableDataCell stacked-heading="Lifts">
                        3/8
                    </VsTableDataCell>
                </VsTableRow>
                <VsTableRow>
                    <VsTableDataCell stacked-heading="Status">
                        Expected to Open
                    </VsTableDataCell>
                    <VsTableDataCell stacked-heading="Runs">
                        13/21
                    </VsTableDataCell>
                    <VsTableDataCell stacked-heading="Lifts">
                        3/8
                    </VsTableDataCell>
                </VsTableRow>
                <VsTableRow>
                    <VsTableDataCell stacked-heading="Status">
                        Closed
                    </VsTableDataCell>
                    <VsTableDataCell stacked-heading="Runs">
                        2/21
                    </VsTableDataCell>
                    <VsTableDataCell stacked-heading="Lifts">
                        2/8
                    </VsTableDataCell>
                </VsTableRow>
            </VsTableBody>
            <VsTableFooter>
                <VsTableRow>
                    <VsTableDataCell colspan="4">
                        Last updated: 10:08 - 27 July 2023
                    </VsTableDataCell>
                </VsTableRow>
            </VsTableFooter>
        </VsTable>
    `,
});

const base = {
    tableCaption: 'Glencoe Run/Lift Status',
    tableType: 'responsive',
};

export const Default = Template.bind({
});

Default.args = base;

export const StackedOnMobile = Template.bind({
});

StackedOnMobile.args = {
    ...base,
    tableType: 'stacked',
};

StackedOnMobile.parameters = {
    viewport: {
        defaultViewport: 'mobile2',
    },
};
