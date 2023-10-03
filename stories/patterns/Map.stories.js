import VsMap from '@components/patterns/map/Map.vue';
import placesData from '@/assets/fixtures/maps/places-data.json';

export default {
    component: VsMap,
    title: 'Patterns/Map',
    tags: ['autodocs'],
};

const Template = (args) => ({
    components: {
        VsMap,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <div style="height: 75vh; width: 600px;">
            <VsMap
                v-bind="args"
                :class="args.jsDisabled ? 'no-js' : ''"
            >
                <template v-slot:map-loading-text>
                    Loading
                </template>
                <template v-slot:info-message>
                    Test
                </template>
                <template v-slot:zoom-too-close>
                    We're sorry, you can't zoom in any more
                </template>
                <template v-slot:zoom-too-far>
                    We're sorry, you can't zoom out any more
                </template>
                <template v-slot:no-js>
                    You need Javascript enabled to see this map
                </template>
            </VsMap>
        </div>
    `,
});

const base = {
    mapId: 'vs-map',
    isVisible: true,
    places: placesData.features,
};

export const Default = Template.bind({
});

Default.args = base;
