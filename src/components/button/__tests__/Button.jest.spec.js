import { shallowMount, mount } from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import VsButton from '../Button.vue';

const slotText = 'Button text';
const testIcon = 'fa-regular fa-utensils';

function mountOptions(propsData) {
    return {
        slots: {
            default: slotText,
        },
        propsData: {
            ...propsData,
        },
        attrs: {
            'test-attribute': 'test-value',
        },
    };
}

const factoryShallowMount = (propsData) => shallowMount(
    VsButton,
    mountOptions(propsData),
);

const factoryMount = (propsData) => mount(
    VsButton,
    mountOptions(propsData),
);

describe('VsButton', () => {
    it('should render a bbutton-stub', () => {
        const wrapper = factoryShallowMount();

        expect(wrapper.element.tagName).toBe('B-BUTTON-STUB');
    });

    describe(':props', () => {
        it(':href - should accept and render a `href` property', () => {
            const wrapper = factoryShallowMount({
                href: 'https://www.visitscotland.com',
            });

            expect(wrapper.attributes('href')).toBe('https://www.visitscotland.com');
        });

        it(':tabindex - should accept and render a `tabindex` property', () => {
            const wrapper = factoryShallowMount({
                tabindex: '2',
            });

            expect(wrapper.attributes('tabindex')).toBe('2');
        });

        it(':variant - should accept and render variants as props', () => {
            const testVariant = 'secondary';
            const wrapper = factoryMount({
                variant: testVariant,
            });

            expect(wrapper.classes(`btn-${testVariant}`)).toBe(true);
        });

        it(':size - should accept and render a `size` property', () => {
            const testSize = 'sm';
            const wrapper = factoryShallowMount({
                size: testSize,
            });

            expect(wrapper.attributes('size')).toBe(testSize);
        });

        it(':iconOnly - should render the button text span with `visually-hidden` class', () => {
            const wrapper = factoryMount({
                iconOnly: true,
            });
            const textSlotSpan = wrapper.get('span.vs-button__text');
            expect(textSlotSpan.classes('visually-hidden')).toBe(true);
        });
        it(':rounded - should render the button with an `vs-button--rounded` class', () => {
            const wrapper = factoryMount({
                rounded: true,
            });
            expect(wrapper.classes('vs-button--rounded')).toBe(true);
        });

        describe(':icon', () => {
            it('should *NOT* render an icon if `icon` property is not passed', () => {
                const wrapper = factoryMount();
                const icon = wrapper.find('.vs-icon');

                expect(icon.exists()).toBe(false);
            });

            it('should accept and render an `icon` property', () => {
                const wrapper = factoryMount({
                    icon: testIcon,
                });
                const icon = wrapper.find('.vs-icon');

                expect(icon.classes('fa-utensils')).toBe(true);
            });
        });

        describe(':animate', () => {
            it('should set a `btn-animate` class if `animate` is set to `true`', () => {
                const wrapper = factoryMount({
                    animate: true,
                });

                expect(wrapper.classes('vs-button--animated')).toBe(true);
            });

            it('should *NOT* set a `btn-animate` class if `animate` is set to `false`', () => {
                const wrapper = factoryMount({
                    animate: false,
                });

                expect(wrapper.classes('vs-button--animated')).toBe(false);
            });

            it('should set a `bubble` class on `click` if `animate` is set to `true`', async() => {
                const wrapper = factoryMount({
                    animate: true,
                });

                await wrapper.trigger('click');

                expect(wrapper.classes('vs-button--is-animating')).toBe(true);
            });

            it('should remove the `vs-button--is-animating` class 1 second after the click', async() => {
                const wrapper = factoryMount({
                    animate: true,
                });

                await wrapper.trigger('click');

                expect(wrapper.classes('vs-button--is-animating')).toBe(true);
                setTimeout(() => {
                    expect(wrapper.classes('vs-button--is-animating')).toBe(false);
                }, 1000);
            });

            it('should *NOT* set a `vs-button--is-animating` class on `click` if `animate` is set to `false`', () => {
                const wrapper = factoryMount({
                    animate: false,
                });

                wrapper.trigger('click');
                expect(wrapper.classes('vs-button--is-animating')).toBe(false);
            });
        });
    });

    describe(':methods', () => {
        it('should emit `btnFocus` when `tabbedIn` method is called', () => {
            const wrapper = factoryShallowMount();

            wrapper.vm.tabbedIn();
            expect(wrapper.emitted().btnFocus).toBeTruthy();
        });
    });

    describe(':slots', () => {
        it('renders content inserted into default `slot`', () => {
            const wrapper = factoryMount();

            expect(wrapper.text()).toContain(slotText);
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            const wrapper = factoryMount();
            expect(await axe(wrapper.html())).toHaveNoViolations();
        });
    });
});
