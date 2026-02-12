<template>
    <div>
        <BOffcanvas
            :model-value="show"
            @update:model-value="$emit('update:show', $event)"
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
import { BOffcanvas, BImg } from 'bootstrap-vue-next';

export default {
    name: 'VsNavigationBarSidebar',
    status: 'prototype',
    release: '0.1.0',
    components: {
        BOffcanvas,
        BImg,
    },
    props: {
        show: {
            type: Boolean,
            default: false,
        },
    },
    emits: ['update:show'],
};
</script>

<style lang="scss">
</style>
