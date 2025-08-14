export function trackPageview(measurementId: string, url: string): void {
    if (typeof window === "undefined" || !window.gtag) return;
    window.gtag("config", measurementId, { page_path: url });
}