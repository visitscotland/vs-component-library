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
                        Center
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
                    <VsTableDataCell rowspan="3">
                        Glencoe
                    </VsTableDataCell>
                    <VsTableDataCell>
                        Open
                    </VsTableDataCell>
                    <VsTableDataCell>
                        7/21
                    </VsTableDataCell>
                    <VsTableDataCell>
                        3/7
                    </VsTableDataCell>
                </VsTableRow>
                <VsTableRow>
                    <VsTableDataCell>
                        Expected to Open
                    </VsTableDataCell>
                    <VsTableDataCell>
                        13/21
                    </VsTableDataCell>
                    <VsTableDataCell>
                        3/7
                    </VsTableDataCell>
                </VsTableRow>
                <VsTableRow>
                    <VsTableDataCell>
                        Closed
                    </VsTableDataCell>
                    <VsTableDataCell>
                        7/21
                    </VsTableDataCell>
                    <VsTableDataCell>
                        1/7
                    </VsTableDataCell>
                </VsTableRow>
                <VsTableRow>
                    <VsTableDataCell rowspan="2">
                        Cairngorms
                    </VsTableDataCell>
                    <VsTableDataCell>
                        Open
                    </VsTableDataCell>
                    <VsTableDataCell>
                        7/21
                    </VsTableDataCell>
                    <VsTableDataCell>
                        3/7
                    </VsTableDataCell>      
                </VsTableRow>
                <VsTableRow>
                    <VsTableDataCell>
                        Closed
                    </VsTableDataCell>
                    <VsTableDataCell>
                        7/21
                    </VsTableDataCell>
                    <VsTableDataCell>
                        1/7
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
    tableCaption: 'Test',
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
