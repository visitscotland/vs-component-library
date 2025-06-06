import VsTable from '@/components/table/Table.vue';
import VsTableHead from '@/components/table/components/TableHead.vue';
import VsTableRow from '@/components/table/components/TableRow.vue';
import VsTableHeaderCell from '@/components/table/components/TableHeaderCell.vue';
import VsTableBody from '@/components/table/components/TableBody.vue';
import VsTableDataCell from '@/components/table/components/TableDataCell.vue';
import VsTableFooter from '@/components/table/components/TableFooter.vue';
import VsHeading from '@/components/heading/Heading.vue';

export default {
    component: VsTable,
    title: 'Table',
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
            headingStyle="heading-m"
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
                    <VsTableHeaderCell stacked-heading="Centre">
                        Glencoe
                    </VsTableHeaderCell>
                    <VsTableDataCell stacked-heading="Status">
                        Open
                    </VsTableDataCell>
                    <VsTableDataCell stacked-heading="Runs">
                        7/21
                    </VsTableDataCell>
                    <VsTableDataCell stacked-heading="Lifts">
                        3/7
                    </VsTableDataCell>
                </VsTableRow>
                <VsTableRow>
                    <VsTableHeaderCell stacked-heading="Centre">
                        Cairngorms
                    </VsTableHeaderCell>
                    <VsTableDataCell stacked-heading="Status">
                        Expected to Open
                    </VsTableDataCell>
                    <VsTableDataCell stacked-heading="Runs">
                        13/21
                    </VsTableDataCell>
                    <VsTableDataCell stacked-heading="Lifts">
                        3/7
                    </VsTableDataCell>
                </VsTableRow>
                <VsTableRow>
                    <VsTableHeaderCell stacked-heading="Centre">
                        The Lecht
                    </VsTableHeaderCell>
                    <VsTableDataCell stacked-heading="Status">
                        Closed
                    </VsTableDataCell>
                    <VsTableDataCell stacked-heading="Runs">
                        7/21
                    </VsTableDataCell>
                    <VsTableDataCell stacked-heading="Lifts">
                        1/7
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

StackedOnMobile.globals = {
    viewport: {
        value: 'mobile2',
    },
};
