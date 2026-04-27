/**
 * Design system alias for Swiper's SwiperSlide component.
 *
 * Swiper's Vue adapter requires slide components to be direct children in the slot,
 * and it identifies them by component name/type. Wrapping SwiperSlide in a Vue SFC
 * (Single File Component) breaks this detection, as Swiper only recognizes the
 * wrapper component, not the actual slide inside.
 *
 * To maintain a clean design system API without exposing 'swiper/vue' imports
 * to consumers, we re-export SwiperSlide directly from this JS file. This allows
 * consumers to import 'VsCardCarouselSlide' while Swiper sees the real component.
 *
 * Alternative approaches (like SFC wrappers) were tried but failed due to Swiper's
 * internal slot scanning logic.
 */
import { SwiperSlide } from 'swiper/vue';

export default SwiperSlide;
