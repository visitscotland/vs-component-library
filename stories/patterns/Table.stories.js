import VsTable from '@/components/patterns/table/Table.vue';
import VsTableHead from '@/components/patterns/table/components/TableHead.vue';
import VsTableRow from '@/components/patterns/table/components/TableRow.vue';
import VsTableHeaderCell from '@/components/patterns/table/components/TableHeaderCell.vue';
import VsTableBody from '@/components/patterns/table/components/TableBody.vue';
import VsTableDataCell from '@/components/patterns/table/components/TableDataCell.vue';
import VsTableFooter from '@/components/patterns/table/components/TableFooter.vue';

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
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsTable 
            v-bind="args"
        >
            <VsTableHead>
                <VsTableRow>
                    <VsTableHeaderCell>
                        Centre
                    </VsTableHeaderCell>
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
                    <VsTableDataCell rowspan="3" stacked-heading="Centre">
                        Glencoe
                    </VsTableDataCell>
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
                <VsTableRow>
                    <VsTableDataCell rowspan="2" stacked-heading="Centre">
                        Cairngorms
                    </VsTableDataCell>
                    <VsTableDataCell stacked-heading="Status">
                        Open
                    </VsTableDataCell>
                    <VsTableDataCell stacked-heading="Runs">
                        12/34
                    </VsTableDataCell>
                    <VsTableDataCell stacked-heading="Lifts">
                        5/13
                    </VsTableDataCell>      
                </VsTableRow>
                <VsTableRow>
                    <VsTableDataCell stacked-heading="Status">
                        Closed
                    </VsTableDataCell>
                    <VsTableDataCell stacked-heading="Runs">
                        22/34
                    </VsTableDataCell>
                    <VsTableDataCell stacked-heading="Lifts">
                        8/13
                    </VsTableDataCell>
                    </VsTableRow>
            </VsTableBody>
            <VsTableFooter>
                <VsTableRow>
                    <VsTableDataCell colspan="4">
                        Last Updated: 11/01/2023
                    </VsTableDataCell>
                </VsTableRow>
            </VsTableFooter>
        </VsTable>
    `,
});

const base = {
    tableCaption: 'Ski run information',
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
