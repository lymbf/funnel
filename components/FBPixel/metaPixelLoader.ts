import {FbqFunction} from "@/global";

export function loadMetaPixel(pixelId: string): void {
    if (typeof window === "undefined") return;
    if (!pixelId) return;

    // Jeśli już zainicjalizowany — nie rób nic
    if (window.fbq && window._fbq) {
        return;
    }

    (function (
        f: Window & typeof globalThis,
        b: Document,
        e: string,
        v: string,
        n?: FbqFunction,
        t?: HTMLScriptElement,
        s?: HTMLScriptElement
    ) {
        if (f.fbq) return;
        n = function (this: unknown, ...args: unknown[]) {
            if (n!.callMethod) {
                n!.callMethod.apply(this, args);
            } else {
                (n!.queue ||= []).push(args);
            }
        } as FbqFunction;

        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = true;
        n.version = "2.0";
        n.queue = [];

        t = b.createElement(e) as HTMLScriptElement;
        t.async = true;
        t.src = v;

        s = b.getElementsByTagName(e)[0] as HTMLScriptElement;
        s.parentNode?.insertBefore(t, s);
        f.fbq = n;
    })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");

    window.fbq?.("init", pixelId);
    window.fbq?.("track", "PageView");
}