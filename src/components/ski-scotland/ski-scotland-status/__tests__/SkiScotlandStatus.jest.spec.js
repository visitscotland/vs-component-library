import { config, mount } from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import axios from 'axios';
import moxios from 'moxios';
import sampleSkiData from '@/assets/fixtures/ski-scotland/sample-ski-data.json';
import sampleCairngormsData from '@/assets/fixtures/ski-scotland/sample-cairngorms-ski-data.json';
import VsSkiScotlandStatus from '../SkiScotlandStatus.vue';

config.global.renderStubDefaultSlot = true;

jest.mock('axios');

const centreInformationSlot = 'Centre Information Placeholder';
const skiStatusUrl = 'https://testurl';
const skiStatusCairngormsUrl = 'https://testurlcairngorms';

const summaryClosedLabel = 'fermé';
const currentWeatherLabel = 'météo actuelle';
const difficultLabel = 'difficile';
const easyLabel = 'facile';
const intermediateLabel = 'intermédiaire';
const itinerariesLabel = 'itinéraires';
const lastUpdatedLabel = 'dernière mise à jour';
const liftsLabel = 'ascenseurs';
const liftStatusLabel = 'état des ascenseurs';
const newsLabel = 'l\'actualités';
const summaryOpenLabel = 'ouvrir';
const summaryOpeningLabel = 'ouverture';
const otherLabel = 'autre';
const roadsLabel = 'routes';
const runsLabel = 'court';
const runsLiftsStatusLabel = 'statut de course/levage';
const runStatusLabel = 'statut d\'exécution';
const snowConditionsLabel = 'conditions d\'enneigement';
const statusLabel = 'statut';
const veryDifficultLabel = 'très difficile';
const weatherForecastLabel = 'prévisions météorologiques';

const factoryMount = (propsData) => mount(VsSkiScotlandStatus, {
    propsData: {
        skiStatusUrl,
        summaryClosedLabel,
        currentWeatherLabel,
        difficultLabel,
        easyLabel,
        intermediateLabel,
        itinerariesLabel,
        lastUpdatedLabel,
        liftsLabel,
        liftStatusLabel,
        newsLabel,
        summaryOpenLabel,
        summaryOpeningLabel,
        otherLabel,
        roadsLabel,
        runsLabel,
        runsLiftsStatusLabel,
        runStatusLabel,
        snowConditionsLabel,
        statusLabel,
        veryDifficultLabel,
        weatherForecastLabel,
        ...propsData,
    },
});

describe('VsSkiScotlandStatus', () => {
    describe(':props', () => {
        let wrapper;
        beforeEach(() => {
            axios.get.mockResolvedValue({
                data: sampleSkiData,
            });

            moxios.install();

            moxios.stubRequest(skiStatusUrl, {
                status: 200,
                response: sampleSkiData,
            });

            wrapper = factoryMount();
        });

        afterEach(() => {
            moxios.uninstall();
        });

        it('should render a component with the data-test attribute `vs-ski-scotland-status`', () => {
            expect(wrapper.find('[data-test="vs-ski-scotland-status"]').exists()).toBe(true);
        });

        it('should not render the js-disabled block when js is present', () => {
            expect(wrapper.find('[data-test="vs-ski__js-disabled"]').exists()).toBe(false);
        });

        it(':summaryClosedLabel - should render the label in the appropriate location', () => {
            const container = wrapper.find('[data-test="vs-ski__closed-label"]');
            expect(container.html()).toContain(summaryClosedLabel);
        });

        it(':summaryOpeningLabel - should render the label in the appropriate location', () => {
            const container = wrapper.find('[data-test="vs-ski__opening-label"]');
            expect(container.html()).toContain(summaryOpeningLabel);
        });

        it(':summaryOpenLabel - should render the label in the appropriate location', () => {
            const container = wrapper.find('[data-test="vs-ski__open-label"]');
            expect(container.html()).toContain(summaryOpenLabel);
        });

        it(':easyLabel - should render the label in the appropriate location', () => {
            const container = wrapper.find(`[data-test="vs-ski__${easyLabel}-label"]`);
            expect(container.html()).toContain(easyLabel);
        });

        it(':intermediateLabel - should render the label in the appropriate location', () => {
            const container = wrapper.find(`[data-test="vs-ski__${intermediateLabel}-label"]`);
            expect(container.html()).toContain(intermediateLabel);
        });

        it(':difficultLabel - should render the label in the appropriate location', () => {
            const container = wrapper.find(`[data-test="vs-ski__${difficultLabel}-label"]`);
            expect(container.html()).toContain(difficultLabel);
        });

        it(':veryDifficultLabel - should render the label in the appropriate location', () => {
            const container = wrapper.find(`[data-test="vs-ski__${veryDifficultLabel}-label"]`);
            expect(container.html()).toContain(veryDifficultLabel);
        });

        it(':otherLabel - should render the label in the appropriate location', () => {
            const container = wrapper.find(`[data-test="vs-ski__${otherLabel}-label"]`);
            expect(container.html()).toContain(otherLabel);
        });

        it(':itinerariesLabel - should render the label in the appropriate location', () => {
            const container = wrapper.find(`[data-test="vs-ski__${itinerariesLabel}-label"]`);
            expect(container.html()).toContain(itinerariesLabel);
        });

        it(':currentWeatherLabel - should render the label in the appropriate location', () => {
            const container = wrapper.find('[data-test="vs-ski__current-weather-label"]');
            expect(container.html()).toContain(currentWeatherLabel);
        });

        it(':weatherForecastLabel - should render the label in the appropriate location', () => {
            const container = wrapper.find('[data-test="vs-ski__weather-forecast-label"]');
            expect(container.html()).toContain(weatherForecastLabel);
        });

        it(':roadsLabel - should render the label in the appropriate location', () => {
            const container = wrapper.find('[data-test="vs-ski__roads-label"]');
            expect(container.html()).toContain(roadsLabel);
        });

        it(':newsLabel - should render the label in the appropriate location', () => {
            const container = wrapper.find('[data-test="vs-ski__news-label"]');
            expect(container.html()).toContain(newsLabel);
        });

        it(':snowConditionsLabel - should render the label in the appropriate location', () => {
            const container = wrapper.find('[data-test="vs-ski__snow-conditions-label"]');
            expect(container.html()).toContain(snowConditionsLabel);
        });

        it(':lastUpdatedLabel - should render the label in the appropriate location', () => {
            const container = wrapper.find('[data-test="vs-ski__last-updated-label"]');
            expect(container.html()).toContain(lastUpdatedLabel);
        });

        it(':liftsLabel - should render the label in the appropriate location', () => {
            const container = wrapper.find('[data-test="vs-ski__lifts-label"]');
            expect(container.html()).toContain(liftsLabel);
        });

        it(':liftStatusLabel - should render the label in the appropriate location', () => {
            const container = wrapper.find('[data-test="vs-ski__lift-status-label"]');
            expect(container.html()).toContain(liftStatusLabel);
        });

        it(':runsLabel - should render the label in the appropriate location', () => {
            const container = wrapper.find('[data-test="vs-ski__runs-label"]');
            expect(container.html()).toContain(runsLabel);
        });

        it(':runsLiftsStatusLabel - should render the label in the appropriate location', () => {
            const container = wrapper.find('[data-test="vs-ski__runs-lifts-status-label"]');
            expect(container.html()).toContain(runsLiftsStatusLabel);
        });

        it(':runStatusLabel - should render the label in the appropriate location', () => {
            const container = wrapper.find('[data-test="vs-ski__run-status-label"]');
            expect(container.html()).toContain(runStatusLabel);
        });

        it(':statusLabel - should render the label in the appropriate location', () => {
            const container = wrapper.find('[data-test="vs-ski__status-label"]');
            expect(container.html()).toContain(statusLabel);
        });

        it('should correctly display the last updated month in english if the locale is `en-gb` (default)', () => {
            const container = wrapper.find('[data-test="vs-ski__last-updated-label"]');
            expect(container.html()).toContain('January');
        });
    });

    describe(':slots', () => {
        it('should render content inserted into `centre-information` slot', () => {
            const modifiedWrapper = mount(VsSkiScotlandStatus, {
                slots: {
                    'centre-information': centreInformationSlot,
                },
            });

            expect(modifiedWrapper.text()).toContain(centreInformationSlot);
        });
    });

    describe(':skiScotlandData', () => {
        let wrapper;
        beforeEach(() => {
            axios.get.mockResolvedValue({
                data: sampleSkiData,
            });

            moxios.install();

            moxios.stubRequest(skiStatusUrl, {
                status: 200,
                response: sampleSkiData,
            });

            wrapper = factoryMount();
        });

        afterEach(() => {
            moxios.uninstall();
        });

        it('should correctly calculate the number of open, opening and closed runs', () => {
            expect(wrapper.vm.statusSummary.runs.open).toBe(16);
            expect(wrapper.vm.statusSummary.runs.opening).toBe(1);
            expect(wrapper.vm.statusSummary.runs.closed).toBe(2);
            expect(wrapper.vm.statusSummary.runs.limitedPatrol).toBe(2);
            expect(wrapper.vm.statusSummary.runs.onHold).toBe(1);
        });

        it('should correctly calculate the number of runs in each difficulty', () => {
            const easyRuns = wrapper.findAll(`[data-test="vs-ski__${easyLabel}-row"]`);
            const difficultRuns = wrapper.findAll(`[data-test="vs-ski__${difficultLabel}-row"]`);

            expect(easyRuns.length).toBe(8);
            expect(difficultRuns.length).toBe(5);
        });

        it('should set correct colour token status', () => {
            const colourBadge = wrapper.find('[data-test="vs-accordion-item__card-colour-badge"]');
            expect(colourBadge.attributes().style).toBe('background-color: rgb(3, 135, 55);');
        });
    });

    describe(':cairngormsData', () => {
        let wrapper;
        beforeEach(() => {
            axios.get.mockResolvedValue({
                data: sampleCairngormsData,
            });

            moxios.install();

            moxios.stubRequest(skiStatusCairngormsUrl, {
                status: 200,
                response: sampleCairngormsData,
            });

            wrapper = factoryMount({
                skiStatusUrl: skiStatusCairngormsUrl,
            });
        });

        afterEach(() => {
            moxios.uninstall();
        });

        it('should correctly calculate the number of open, opening and closed runs', () => {
            expect(wrapper.vm.statusSummary.runs.open).toBe(16);
            expect(wrapper.vm.statusSummary.runs.opening).toBe(0);
            expect(wrapper.vm.statusSummary.runs.closed).toBe(16);
        });

        it('should correctly calculate the number of runs in each difficulty', () => {
            const easyRuns = wrapper.findAll(`[data-test="vs-ski__${easyLabel}-row"]`);
            const difficultRuns = wrapper.findAll(`[data-test="vs-ski__${difficultLabel}-row"]`);

            expect(easyRuns.length).toBe(14);
            expect(difficultRuns.length).toBe(6);
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            const wrapper = factoryMount();
            expect(await axe(wrapper.html())).toHaveNoViolations();
        });
    });

    /* eslint-disable */
    /**
     * This test can't actually be run, toLocaleDateString ignores the provided locale within jest
     * because Node doesn't come with the localisation packages internally. The functionality does
     * appear to work and the second example in the design system renders the date as `Last
     * Updated: 13:18 - 18 janvier 2023` but within a test environment it will provide a false
     * negative.
     *
     * See:
     * https://github.com/facebook/jest/issues/3514
     * https://stackoverflow.com/questions/23199909/using-tolocalestring-in-node-js/23200062#23200062
     */

    // describe(':localisation', () => {
    //  let wrapper;
    //     beforeEach(() => {
    //         moxios.install();

    //         moxios.stubRequest(skiStatusUrl, {
    //             status: 200,
    //             response: sampleSkiData,
    //         });

    //         wrapper = factoryMount({
    //             locale: 'fr-fr',
    //         });
    //     });

    //     afterEach(() => {
    //         moxios.uninstall();
    //     });

    //     it('should correctly display the last updated month in french if the locale is `fr-fr`', () => {
    //         const container = wrapper.find('[data-test="vs-ski__last-updated-label"]');
    //         expect(container.html()).toContain('Janvier');

    //         moxios.uninstall();
    //     });
    // });
    /* eslint-enable */
});
