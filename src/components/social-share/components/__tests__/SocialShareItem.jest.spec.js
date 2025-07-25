import {
    shallowMount, mount, config,
} from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import VsSocialShareItem from '../SocialShareItem.vue';

config.global.renderStubDefaultSlot = true;

const url = 'https://www.visitscotland.com';
const title = 'VisitScotland';

// create a fake navigator object for testin'renderg
Object.assign(navigator, {
    clipboard: {
        writeText: () => {},
    },
});

function mountOptions(propsData) {
    return {
        propsData: {
            ...propsData,
            name: 'facebook',
            linkText: 'Facebook',
            linkCopiedText: 'Link copied',
        },
        global: {
            provide: {
                referringPageUrl: url,
                pageTitle: title,
                noJs: false,
            },
        },
    };
};

const factoryShallowMount = (propsData) => shallowMount(
    VsSocialShareItem,
    mountOptions(propsData),
);

const factoryMount = (propsData) => mount(
    VsSocialShareItem,
    mountOptions(propsData),
);

let wrapper;
beforeEach(() => {
    wrapper = factoryShallowMount();
});

describe('VsSocialShareItem', () => {
    it('should render a component with the data-test attribute `vs-social-share-item`', () => {
        expect(wrapper.attributes('data-test')).toBe('vs-social-share-item');
    });

    describe(':props', () => {
        it('should render share link with text `Facebook`', () => {
            const shareItem = wrapper.find('[data-test="vs-social-share-item"]');
            const shareLink = shareItem.find('.vs-social-share-item__link');

            expect(shareLink.text()).toBe('Facebook');
        });

        it('should render the correct icon and URL when `name` is `facebook`', () => {
            const shareItem = wrapper.find('[data-test="vs-social-share-item"]');
            const shareLink = shareItem.find('.vs-social-share-item__link');
            const shareIcon = shareItem.find('vs-icon-stub');

            expect(shareLink.attributes('href')).toBe('https://www.facebook.com/sharer/sharer.php?u=https://www.visitscotland.com&t=VisitScotland');
            expect(shareIcon.attributes('icon')).toContain('facebook');
            expect(shareIcon.attributes('customcolour')).toBe('#1877f2');
        });

        it('should render the correct icon and URL when `name` is `whatsapp`', async() => {
            await wrapper.setProps({
                name: 'whatsapp',
            });

            const shareItem = wrapper.find('[data-test="vs-social-share-item"]');
            const shareLink = shareItem.find('.vs-social-share-item__link');
            const shareIcon = shareItem.find('vs-icon-stub');

            expect(shareLink.attributes('href')).toBe('https://wa.me/?text=VisitScotland%20-%20https://www.visitscotland.com');
            expect(shareIcon.attributes('icon')).toContain('whatsapp');
            expect(shareIcon.attributes('customcolour')).toBe('#455a64');
        });

        it('should render the correct icon and URL when `name` is `x-twitter`', async() => {
            await wrapper.setProps({
                name: 'x-twitter',
            });

            const shareItem = wrapper.find('[data-test="vs-social-share-item"]');
            const shareLink = shareItem.find('.vs-social-share-item__link');
            const shareIcon = shareItem.find('vs-icon-stub');

            expect(shareLink.attributes('href')).toBe('https://twitter.com/intent/tweet?text=VisitScotland%20@VisitScotland&url=https://www.visitscotland.com');
            expect(shareIcon.attributes('icon')).toContain('x-twitter');
            expect(shareIcon.attributes('customcolour')).toBe('#0F1419');
        });

        it('should render the correct icon and URL when `name` is `pinterest`', async() => {
            await wrapper.setProps({
                name: 'pinterest',
            });

            const shareItem = wrapper.find('[data-test="vs-social-share-item"]');
            const shareLink = shareItem.find('.vs-social-share-item__link');
            const shareIcon = shareItem.find('vs-icon-stub');

            expect(shareLink.attributes('href')).toBe('https://www.pinterest.com/pin/create/button/?url=https://www.visitscotland.com');
            expect(shareIcon.attributes('icon')).toContain('pinterest');
            expect(shareIcon.attributes('customcolour')).toBe('#E60023');
        });

        it('should render the correct icon and URL when `name` is `email`', async() => {
            await wrapper.setProps({
                name: 'email',
            });

            const shareItem = wrapper.find('[data-test="vs-social-share-item"]');
            const shareLink = shareItem.find('.vs-social-share-item__link');
            const shareIcon = shareItem.find('vs-icon-stub');

            expect(shareLink.attributes('href')).toBe('mailto:?body=VisitScotland%20-%20https://www.visitscotland.com&subject=VisitScotland');
            expect(shareIcon.attributes('icon')).toContain('envelope');
            expect(shareIcon.attributes('customcolour')).toBe('#000000');
        });

        it('should render the correct icon and URL when `name` is `link`', async() => {
            await wrapper.setProps({
                name: 'link',
            });

            const shareItem = wrapper.find('[data-test="vs-social-share-item"]');
            const shareLink = shareItem.find('.vs-social-share-item__link');
            const shareIcon = shareItem.find('vs-icon-stub');

            expect(shareLink.attributes('href')).toBe('#');
            expect(shareIcon.attributes('icon')).toContain('link');
            expect(shareIcon.attributes('customcolour')).toBe('#000000');
        });

        it('should accept a `referringPageUrl` property injected by the parent component', () => {
            /* eslint-disable no-underscore-dangle */
            expect(wrapper.vm.referringPageUrl).toBe(url);
        });

        it('should accept a `pageTitle` property injected by the parent component', () => {
            /* eslint-disable no-underscore-dangle */
            expect(wrapper.vm.pageTitle).toBe(title);
        });

        it('should render `linkCopiedText` when link is copied', async() => {
            await wrapper.setProps({
                name: 'link',
                linkCopiedText: 'Link copied!',
            });

            await wrapper.setData({
                show: true,
            });

            const shareItem = wrapper.find('[data-test="vs-social-share-item"]');
            const shareLink = shareItem.find('.vs-social-share-item__link');

            expect(shareLink.text()).toBe('Link copied!');
        });

        it('should accept a `noJs` property injected by the parent component', () => {
            /* eslint-disable no-underscore-dangle */
            expect(wrapper.vm.noJs).toBe(false);
        });
    });

    describe(':methods', () => {
        it('should copy page URL when copy link button is clicked', async() => {
            await wrapper.setProps({
                name: 'link',
            });

            const mockCopyMethod = jest.fn();
            navigator.clipboard.writeText = mockCopyMethod;
            const shareItem = wrapper.find('[data-test="vs-social-share-item"]');
            const shareLink = shareItem.find('.vs-social-share-item__link');

            shareLink.trigger('click');
            expect(mockCopyMethod).toHaveBeenCalled();
        });
    });

    describe(':events', () => {
        it('it should emit an `onCopyLink` event when copy link button is clicked', async() => {
            await wrapper.setProps({
                name: 'link',
            });

            const shareItem = wrapper.find('[data-test="vs-social-share-item"]');
            const shareLink = shareItem.find('.vs-social-share-item__link');
            shareLink.trigger('click');

            expect(wrapper.emitted('copyLinkClicked')).toBeTruthy();
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            const modifiedWrapper = factoryMount();
            expect(await axe(modifiedWrapper.html())).toHaveNoViolations();
        });
    });
});
