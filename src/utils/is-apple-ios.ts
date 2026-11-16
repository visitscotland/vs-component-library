/**
 * Tells whether the device is running Apple iOS
 * as certain web capabilities are different on iOS.
 */
export function isAppleIOS(): boolean {
    const ua = navigator.userAgent;

    if (/iPhone|iPod|iPad/.test(ua)) return true;

    /* iPadOS 13+ reports as Macintosh, so check for touch functionality
     * MacOS Safari doesn't have touch support so it's safe to assume these are iPads
     */
    if (/Macintosh/.test(ua) && 'ontouchend' in document) return true;

    return false;
};
