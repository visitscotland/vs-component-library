import {
    shallowMount, mount, config,
} from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import VsTable from '../Table.vue';

config.global.renderStubDefaultSlot = true;

const slotContent = `
    <thead>
        <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
        </tr>
    </tbody>
`;

function mountOptions(propsData) {
    return {
        propsData: {
            ...propsData,
            tableCaption: 'A table with information',
        },
        slots: {
            default: slotContent,
        },
    };
};

const factoryShallowMount = (propsData) => shallowMount(
    VsTable,
    mountOptions(propsData),
);

const factoryMount = (propsData) => mount(
    VsTable,
    mountOptions(propsData),
);

describe('VsTable', () => {
    it('should render a btablesimple-stub', () => {
        const wrapper = factoryShallowMount();
        expect(wrapper.element.tagName).toBe('B-TABLE-SIMPLE-STUB');
    });

    describe(':props', () => {
        it('should display a caption for the table', () => {
            const wrapper = factoryShallowMount();
            const caption = wrapper.find('caption[data-test=vs-table__caption]');
            expect(caption.text()).toContain('A table with information');
        });

        it('sets the `tableType` to responsive by default', () => {
            const wrapper = factoryShallowMount();
            expect(wrapper.attributes('responsive')).toBe('true');
        });

        it('sets the `tableType` to stacked when passed in as a prop', () => {
            const wrapper = factoryShallowMount({
                tableType: 'stacked',
            });
            expect(wrapper.attributes('responsive')).not.toBe('true');
            expect(wrapper.attributes('stacked')).toBe('true');
        });
    });

    describe(':slots', () => {
        it('renders content inserted into the default `slot`', () => {
            const wrapper = factoryShallowMount();
            expect(wrapper.find('thead').exists()).toBe(true);
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            const wrapper = factoryMount();
            expect(await axe(wrapper.html())).toHaveNoViolations();
        });
    });
});
