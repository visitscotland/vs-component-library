import { shallowMount, mount } from '@vue/test-utils';
import VsDropdownItem from '@components/patterns/dropdown/components/DropdownItem';
import VsGlobalMenuLanguageItem from '../components/GlobalMenuLanguageItem.vue';

const factoryShallowMount = (propsData) => shallowMount(VsGlobalMenuLanguageItem, {
    slots: {
        default: 'Button text',
    },
    propsData: {
        ...propsData,
    },
});

const factoryMount = (propsData) => mount(VsGlobalMenuLanguageItem, {
    slots: {
        default: 'Button text',
    },
    propsData: {
        ...propsData,
    },
});

describe('VsGlobalMenuLanguageItem renders', () => {
    it('should render a dropdownitem', () => {
        const wrapper = factoryShallowMount();

        expect(wrapper.element.tagName).toBe('VS-DROPDOWN-ITEM-STUB');
    });
});

describe(':props', () => {
    it('should render language name', () => {
        const wrapper = factoryMount({
            languageName: 'Spanish',
        });

        expect(wrapper.findComponent(VsDropdownItem).text()).toEqual('Spanish');
    });

    it('should have href props language link', () => {
        const wrapper = mount(VsGlobalMenuLanguageItem, {
            propsData: {
                languageLink: '/site/es',
            },
        });

        const languageLink = wrapper.find('.dropdown-item');
        expect(languageLink.attributes('href')).toBe('/site/es');
    });
});
