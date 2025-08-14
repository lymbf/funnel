// Ładuje gtag.js i przygotowuje window.gtag — bez uruchamiania 'config'.
export function ensureGaLoaded(measurementId: string): void {
    if (typeof window === "undefined") return;
    if (!measurementId) return;

    // Jeśli gtag już jest przygotowany, wystarczy.
    const hasGtag =
        "gtag" in window && typeof window.gtag === "function";
    if (hasGtag) return;

    if (!("dataLayer" in window) || !Array.isArray(window.dataLayer)) {
        window.dataLayer = [];
    }

    // Definiujemy gtag jako proxy do dataLayer
    const gtag: (...args: unknown[]) => void = (...args) => {
        (window.dataLayer as unknown[]).push(args);
    };
    window.gtag = gtag;

    // Tag startowy (wymagany)
    window.gtag("js", new Date());

    // Domyślnie DENIED — zgodę ustawimy dopiero po kliknięciu w baner/analitykę
    window.gtag("consent", "default", { analytics_storage: "denied" });

    // Dociągnij skrypt
    const s = document.createElement("script");
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
    document.head.appendChild(s);
}
