import { mount } from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import VsFedCard from '../FedCard.vue';

const factoryMount = (propsData) => mount(VsFedCard, {
    ...propsData,
    propsData: {
        heading: 'The Dundee Hooley',
        description: 'This event boasts free family fun for all with street theatre, live music, and a sparkling torchlight procession. Take part in the lantern making workshops, the lively ceilidh at the end of the night, and the wee ones can enjoy face painting and fire performances too.',
        link: 'https://www.dundee.com/dundee-hooley',
        linkType: 'EXTERNAL',
        imgSrc: 'https://2f1a7f9478.visitscotland.net/binaries/content/gallery/visitscotland/cms-images/2023/05/11/scottish-ceilidh?size=lg',
        location: 'Dundee City',
    },
    slots: {
        'fed-card-header': 'The Dundee Hooley',
        'fed-card-description': 'Information about the Dundee Hooley',
        'fed-card-location': 'City of Discovery',
    },
});

describe('VsFedCard', () => {
    it('should render an element with the class `vs-fed-card`', () => {
        const wrapper = factoryMount();
        expect(wrapper.classes()).toContain('vs-fed-card');
    });

    it('should render the img', () => {
        const wrapper = factoryMount();

        const img = wrapper.find('[data-test="vs-fed-card__header--image"]');
        expect(img.exists()).toBe(true);
    });

    describe(':props', () => {
        it('should render in the price when price is populated', async() => {
            const wrapper = factoryMount();
            await wrapper.setProps({
                price: '£10',
            });

            const price = wrapper.find('[data-test="vs-fed-card__header--attribute-price"');
            expect(price.exists()).toBe(true);
        });

        it('should render in the date when date is populated', async() => {
            const wrapper = factoryMount();
            await wrapper.setProps({
                date: '1 Sept 25',
            });

            const date = wrapper.find('[data-test="vs-fed-card__header--attribute-date"]');
            expect(date.exists()).toBe(true);
        });
    });

    describe(':slots', () => {
        it('should render the header when theres data in the header slot', () => {
            const wrapper = factoryMount();

            const header = wrapper.find('[data-test="vs-fed-card-header"]');
            expect(header.exists()).toBe(true);
            expect(wrapper.html()).toContain('The Dundee Hooley');
        });

        it('should render the description when theres data in the description slot', () => {
            const wrapper = factoryMount();

            const header = wrapper.find('[data-test="vs-fed-card-description"]');
            expect(header.exists()).toBe(true);
            expect(wrapper.html()).toContain('Information about the Dundee Hooley');
        });

        it('should render the location when theres data in the location slot', () => {
            const wrapper = factoryMount();

            const header = wrapper.find('[data-test="vs-fed-card-location"]');
            expect(header.exists()).toBe(true);
            expect(wrapper.html()).toContain('City of Discovery');
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            const wrapper = factoryMount();
            expect(await axe(wrapper.html())).toHaveNoViolations();
        });
    });
});
