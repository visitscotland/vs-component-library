<template>
    <div
        class="vs-map-new-sidebar"
        ref="sidebar"
        :style="sidebarStyle"
        @pointerdown="startDrag"
    >
        <div class="vs-map-new-sidebar__handle">
            <VsButton
                variant="subtle"
                @click="isOpen ? close() : open()"
            >
                <div class="vs-map-new-sidebar__handle-bar" />
            </VsButton>
        </div>

        <div class="content">
            <VsHeading
                class="flex-grow-1"
                data-test="vs-map-sidebar__heading"
                heading-style="heading-xxs"
                id="vs-map-sidebar__heading"
                level="1"
            >
                {{ heading }}
            </VsHeading>
            <slot />
            <p>Is dragging: {{ isDragging }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import {
    computed,
    onMounted,
    onUnmounted,
    ref,
    useTemplateRef,
} from 'vue';
import { VsButton, VsHeading } from '@/components';

type Props = {
    heading: string;
};

const { heading } = defineProps<Props>();

const sidebar = useTemplateRef('sidebar');

const currentY = ref(0);
const startY = ref(0);
const startTranslate = ref(0);
const sidebarHeight = ref(0);

const isDragging = ref(false);
const isOpen = ref(false);

const OPEN_POSITION = 0;
const SWIPE_THRESHOLD = 30;

// Set the sidebar style, depending on if it's being dragged or not.
const sidebarStyle = computed(() => {
    if (window.innerWidth >= 768) return {
    };

    return {
        transform: `translateY(${currentY.value}px)`,
        transition: isDragging.value
            ? 'none'
            : 'transform 0.5s ease',
    };
});

// Set the how much of the sidebar is visible when it's closed.
const peekHeight = Math.min(250, window.innerHeight * 0.3);
const closedPosition = computed(() =>
    Math.max(0, sidebarHeight.value - peekHeight),
);

// Close the drawer.
function close() {
    isOpen.value = false;
    currentY.value = closedPosition.value;
}

// Open the drawer.
function open() {
    isOpen.value = true;
    currentY.value = OPEN_POSITION;
}

/**
 * Calculate the position of the drawer base on the amount swiped.
 * This allows the drawer to move as the user drags it.
 * 
 * @param {PointerEvent} event: - pointer up event.
 */
function onDrag(event: PointerEvent) {
    if (!isDragging.value) return;

    const delta = event.clientY - startY.value;

    let nextPosition = startTranslate.value + delta;

    nextPosition = Math.max(OPEN_POSITION, Math.min(closedPosition.value, nextPosition));

    currentY.value = nextPosition;
}

/**
 * Determine if the drawer should be open or closed base on the swipe direction.
 * 
 * @param {PointerEvent} event: - pointer up event.
 */
function endDrag(event: PointerEvent) {
    isDragging.value = false;

    // Calculate the change in drawer position.
    const totalDelta = event.clientY - startY.value;

    /**
     * SWIPE_THRESHOLD is used to prevent the drawer from opening/closing
     * due to an accidental small swipe.
     */

    //  Close the drawer if swiping down, open if swiping up.
    if (totalDelta > SWIPE_THRESHOLD) {
        close();
    } else if (totalDelta < -SWIPE_THRESHOLD) {
        open();
    } else {
        // If the user doesn't swipe passed the threshold then return to the 
        // previous state.
        if (isOpen.value) {
            open();
        } else {
            close();
        }
    }

    window.removeEventListener('pointermove', onDrag);
    window.removeEventListener('pointerup', onDrag);
}

/**
 * Add event listeners when the user clicks/touches.
 * 
 * @param {PointerEvent} event: - pointer move event.
 */
function startDrag(event: PointerEvent) {
    // Only allow users to drag the sidebar when on small screen size.
    if (window.innerWidth >= 768) return;

    isDragging.value = true;

    startY.value = event.clientY;
    startTranslate.value = currentY.value;

    window.addEventListener('pointermove', onDrag);
    window.addEventListener('pointerup', endDrag);
}

onMounted(() => {
    // Set the position of the drawer when the component is mounted.
    sidebarHeight.value = sidebar.value
        ? sidebar.value.getBoundingClientRect().height
        : 500;

    currentY.value = closedPosition.value;
});

onUnmounted(() => {
    window.removeEventListener('pointermove', onDrag);
    window.removeEventListener('pointerup', onDrag);
});
</script>

<style lang="scss">
.vs-map-new-sidebar {
    background: $vs-color-background-primary;
    border-radius: $vs-radius-large $vs-radius-large 0 0;
    height: 95vh;
    min-height: 400px;
    max-height: 900px;
    overflow: hidden;
    pointer-events: auto;
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    touch-action: none;
    z-index: 1000;
    // width: 90vw;

    @include media-breakpoint-up(md) {
        border-radius: $vs-radius-large;
        box-shadow: $vs-elevation-shadow-raised;
        // height: 100vh;
        position: absolute;
        top: $vs-spacer-100;
        left: $vs-spacer-100;
        width: 23.3rem;
    }

    &__handle {
        display: flex;
        justify-content: center;
        padding: $vs-spacer-075;

        @include media-breakpoint-up(md) {
            display: none;
        }
    }

    &__handle-bar {
        background: $vs-color-background-highlight;
        border-radius: $vs-radius-large;
        height: 4px;
        width: 48px;
    }
}
</style>
