export{}

interface FbqFunction {
    (...args: unknown[]): void;
    callMethod?: (...args: unknown[]) => void;
    push?: (...args: unknown[]) => void;
    loaded?: boolean;
    version?: string;
    queue?: unknown[];
}

export type { FbqFunction };

declare global {
    interface Window {
        showCookieBanner?: () => void;
        cloudinary: unknown;
        gtag?: (...args: unknown[]) => void;
        fbq?: FbqFunction;
        _fbq?: FbqFunction;
        dataLayer?: unknown[];
    }
}