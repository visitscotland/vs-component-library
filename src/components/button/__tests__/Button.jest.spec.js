import { shallowMount, mount } from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import VsButton from '../Button.vue';

const slotText = 'Button text';
const testIcon = 'food';

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
};

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

        it(':iconWithText - should render the button with an `vs-button--icon-with-text` class', () => {
            const wrapper = factoryMount({
                iconWithText: true,
            });
            expect(wrapper.classes('vs-button--icon-with-text')).toBe(true);
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

                expect(icon.classes('fa-food')).toBe(true);
            });

            it('size should be `xs` if button size is set to `sm`', () => {
                const wrapper = factoryMount({
                    icon: testIcon,
                    size: 'sm',
                });
                const icon = wrapper.find('.vs-icon');

                expect(icon.classes('vs-icon--size-xs')).toBe(true);
            });

            it('size should be `sm` if button size is set to `md`', () => {
                const wrapper = factoryMount({
                    icon: testIcon,
                    size: 'md',
                });
                const icon = wrapper.find('.vs-icon');

                expect(icon.classes('vs-icon--size-sm')).toBe(true);
            });

            it('size should be `md` if button size is set to `lg`', () => {
                const wrapper = factoryMount({
                    icon: testIcon,
                    size: 'lg',
                });
                const icon = wrapper.find('.vs-icon');

                expect(icon.classes('vs-icon--size-md')).toBe(true);
            });

            it('orientation should be `down` if `iconOrientation` is set to `down`', () => {
                const wrapper = factoryMount({
                    icon: testIcon,
                    iconOrientation: 'down',
                });
                const icon = wrapper.find('.vs-icon');

                expect(icon.classes('icon--down')).toBe(true);
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
