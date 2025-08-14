export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || "";

type EventProps = Record<string, any>;

declare global {
    interface Window { fbq?: (...args: any[]) => void }
}

export const fbq = (...args: any[]) => {
    if (typeof window !== "undefined" && typeof window.fbq === "function") {
        window.fbq(...args);
    }
};

export const trackPageView = () => fbq("track", "PageView");
export const track = (name: string, props?: EventProps) => fbq("track", name, props);
export const trackCustom = (name: string, props?: EventProps) => fbq("trackCustom", name, props);