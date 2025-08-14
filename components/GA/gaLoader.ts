// lib/gaLoader.ts
export function ensureGaLoaded(bootstrapId: string): void {
    if (typeof window === "undefined" || !bootstrapId) return;

    const hasGtag = "gtag" in window && typeof window.gtag === "function";
    if (hasGtag) return;

    if (!("dataLayer" in window) || !Array.isArray(window.dataLayer)) {
        window.dataLayer = [];
    }

    window.gtag = (...args: unknown[]) => {
        (window.dataLayer as unknown[]).push(args);
    };

    // Start + domyślne zgody (oba storage „denied”)
    window.gtag("js", new Date());
    window.gtag("consent", "default", {
        analytics_storage: "denied",
        ad_storage: "denied",
    });

    const s = document.createElement("script");
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(bootstrapId)}`;
    document.head.appendChild(s);
}
