import { shallowMount, mount } from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import VsGlobalMenuLanguage from '../components/GlobalMenuLanguage.vue';

const factoryShallowMount = (propsData) => shallowMount(VsGlobalMenuLanguage, {
    slots: {
        default: 'Button text',
    },
    propsData: {
        languageLabel: 'Language',
        ...propsData,
    },
});

const factoryMount = (propsData) => mount(VsGlobalMenuLanguage, {
    slots: {
        default: 'Button text',
    },
    propsData: {
        languageLabel: 'Language',
        ...propsData,
    },
});

describe('VsGlobalMenuLanguage', () => {
    it('should render a dropdown', () => {
        const wrapper = factoryShallowMount();

        expect(wrapper.element.tagName).toBe('VS-DROPDOWN-STUB');
    });

    describe(':props', () => {
        it('should render correct language label on dropdown button', () => {
            const wrapper = factoryMount();

            expect(wrapper.find('.vs-global-menu__languages__label').text()).toEqual('Language');
        });

        it('should render selected language', () => {
            const wrapper = mount(VsGlobalMenuLanguage, {
                propsData: {
                    language: 'IT',
                },
            });

            expect(wrapper.find('.vs-global-menu__languages__selected').text()).toEqual('IT');
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            const wrapper = factoryMount();
            expect(await axe(wrapper.html())).toHaveNoViolations();
        });
    });
});
