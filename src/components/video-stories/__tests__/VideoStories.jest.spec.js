import { mount } from '@vue/test-utils';
import { setActivePinia, createPinia } from 'pinia';
import VsVideoStories from '../VideoStories.vue';

const factoryMount = (propsData) => mount(VsVideoStories, {
    props: {
        ...propsData,
    },
});

describe('VsVideoStories', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });

    it('should render a component with the data-test attribute `vs-video-stories`', () => {
        const wrapper = factoryMount();

        expect(wrapper.attributes('data-test')).toBe('vs-video-stories');
    });

    describe(':props', () => {
    });
});
