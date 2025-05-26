import { mount } from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import VsBadge from '../Badge.vue';

const slotText = 'Read time';

const factoryMount = () => mount(VsBadge, {
    slots: {
        default: slotText,
    },
});

let wrapper;
beforeEach(() => {
    wrapper = factoryMount();
});

describe('VsBanner', () => {
    it('should render a component with the data-test attribute `vs-badge`', () => {
        expect(wrapper.attributes('data-test')).toBe('vs-badge');
    });

    describe(':slots', () => {
        it('renders content inserted into default `slot`', () => {
            expect(wrapper.text()).toContain(slotText);
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            expect(await axe(wrapper.html())).toHaveNoViolations();
        });
    });
});
