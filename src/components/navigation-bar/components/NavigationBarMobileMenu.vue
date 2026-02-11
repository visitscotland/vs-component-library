<template>
    <div>
        <BButton @click="show = true">
            Toggle Offcanvas
        </BButton>

        <BOffcanvas
            v-model="show"
            id="offcanvas-1"
            placement="end"
            title="Offcanvas"
            shadow
        >
            <div class="px-3 py-2">
                <p>
                    Cras mattis consectetur purus sit amet fermentum.
                    Cras justo odio, dapibus ac facilisis
                    in, egestas eget quam. Morbi leo
                    risus, porta ac consectetur ac, vestibulum at eros.
                </p>
                <BImg
                    src="https://picsum.photos/500/500/?image=54"
                    fluid
                    thumbnail
                />
            </div>
        </BOffcanvas>
    </div>
</template>

<script>
import {
    BButton,
    BOffcanvas,
    BImg,
} from 'bootstrap-vue-next';
import dataLayerMixin from '../../../mixins/dataLayerMixin';

export default {
    name: 'VsNavigationBarMobileMenu',
    status: 'prototype',
    release: '0.1.0',
    components: {
        BButton,
        BOffcanvas,
        BImg,
    },
    mixins: [
        dataLayerMixin,
    ],
    data() {
        return {
            show: false,
        };
    },
    mounted() {
        if (this.emitter) {
            this.emitter.on('navAccordionClick', (text) => {
                this.dataLayerSubmit(text);
            });
        }
    },
    methods: {
        /**
         * Submit event to dataLayer for tracking
         */
        dataLayerSubmit(text) {
            const clickEvent = {
                target: {
                    text,
                },
            };

            this.createDataLayerObject(
                'menuNavigationDataEvent',
                clickEvent,
                null,
            );
        },
    },
};
</script>

<style lang="scss">
    // .offcanvas {
    //     transition: transform 0.3s ease-in-out;
    // }
</style>
