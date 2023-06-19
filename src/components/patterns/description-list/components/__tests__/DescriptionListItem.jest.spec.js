import {
    config, shallowMount, mount,
} from '@vue/test-utils';

import VsDescriptionListItem from '../DescriptionListItem.vue';

config.global.renderStubDefaultSlot = true;

const TestComponent = {
    template: '<div>Test Component</div>',
};

const factoryShallowMount = (propsData) => shallowMount(VsDescriptionListItem, {
    slots: {
        default: TestComponent,
    },
    propsData: {
        ...propsData,
    },
    global: {
        provide: {
            inline: true,
        },
    },
});

const factoryMount = (propsData) => mount(VsDescriptionListItem, {
    slots: {
        default: TestComponent,
    },
    propsData: {
        ...propsData,
    },
    global: {
        provide: {
            inline: true,
        },
    },
});

let wrapper;
beforeEach(() => {
    wrapper = factoryShallowMount();
});

describe('VsDescriptionListItem', () => {
    it('should render a vscol-stub', () => {
        expect(wrapper.element.tagName).toBe('VS-COL-STUB');
    });

    describe(':props', () => {
        describe(':title', () => {
            it('should render with a `vs-description-list__term` class when `title` is set to `true`', async() => {
                await wrapper.setProps({
                    title: true,
                });

                expect(wrapper.classes('vs-description-list__term')).toBe(true);
            });

            it('should render with a `vs-description-list__detail` class when `title` is set to `false`', async() => {
                await wrapper.setProps({
                    title: false,
                });

                expect(wrapper.classes('vs-description-list__detail')).toBe(true);
            });
        });

        describe(':inline', () => {
            it('render a `list-inline-item` class when `inline` is injected as `true`', async() => {
                const modifiedWrapper = shallowMount(VsDescriptionListItem, {
                    global: {
                        provide: {
                            inline: true,
                        },
                    },
                });

                expect(modifiedWrapper.classes('list-inline-item')).toBe(true);
            });

            it('it should *NOT* render a `list-inline-item` class when `inline` is injected as `false`', async() => {
                const modifiedWrapper = shallowMount(VsDescriptionListItem, {
                    global: {
                        provide: {
                            inline: false,
                        },
                    },
                });

                expect(modifiedWrapper.classes('list-inline-item')).toBe(false);
            });

            it('should accept an `inline` property injected by the parent component', () => {
                /* eslint-disable no-underscore-dangle */
                expect(wrapper.vm.inline).toBe(true);
            });

            it('render a `vs-description-list__detail--styled` class when `inline` is injected as `false` and `title` as `false` ', () => {
                const modifiedWrapper = shallowMount(VsDescriptionListItem, {
                    slots: {
                        default: TestComponent,
                    },
                    global: {
                        provide: {
                            inline: false,
                        },
                    },
                });

                expect(modifiedWrapper.classes('vs-description-list__detail--styled')).toBe(true);
            });

            it('render a `vs-description-list__term--styled` class when `inline` is injected as `false` and `title` as `true` ', () => {
                const modifiedWrapper = shallowMount(VsDescriptionListItem, {
                    slots: {
                        default: TestComponent,
                    },
                    global: {
                        provide: {
                            inline: false,
                        },
                    },
                    propsData: {
                        title: true,
                    },
                });

                expect(modifiedWrapper.classes('vs-description-list__term--styled')).toBe(true);
            });
        });
    });

    describe(':slots', () => {
        it('renders content inserted into default `slot`', () => {
            const mountWrapper = factoryMount();
            expect(mountWrapper.text()).toContain('Test Component');
        });
    });
});
