// app/components/GTag.tsx
"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import {ensureGaLoaded} from "@/components/GA/gaLoader";

type Consent = {
    necessary: true;
    analytics: boolean; // analytics_storage
    marketing: boolean; // ad_storage
    timestamp?: string;
};

const CONSENT_COOKIE = "cookie_consent";
const DEBUG = process.env.NODE_ENV !== "production";

function getCookie(name: string): string | null {
    const m = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
    return m ? decodeURIComponent(m[2]) : null;
}
function parseConsent(): Consent | null {
    const raw = getCookie(CONSENT_COOKIE);
    if (!raw) return null;
    try {
        const c = JSON.parse(raw) as Partial<Consent>;
        return { necessary: true, analytics: !!c.analytics, marketing: !!c.marketing, timestamp: c.timestamp };
    } catch {
        return null;
    }
}
function pageUrl(pathname: string | null, searchParams: URLSearchParams): string {
    const p = pathname || "/";
    const s = searchParams.toString();
    return s ? `${p}?${s}` : p;
}

export default function GTag({ ga4, ads }: { ga4?: string; ads?: string }) {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    // INIT: jeśli jest zgoda -> ładuj gtag i konfiguruj identyfikatory
    useEffect(() => {
        const c = parseConsent();
        const allowAnalytics = !!c?.analytics && !!ga4;
        const allowAds = !!c?.marketing && !!ads;

        if (allowAnalytics || allowAds) {
            ensureGaLoaded(ga4 || ads || "");

            window.gtag?.("consent", "update", {
                analytics_storage: allowAnalytics ? "granted" : "denied",
                ad_storage: allowAds ? "granted" : "denied",
            });

            const url = pageUrl(pathname, searchParams);

            if (allowAnalytics && ga4) {
                window.gtag?.("config", ga4, { page_path: url, debug_mode: DEBUG });
            }
            if (allowAds && ads) {
                window.gtag?.("config", ads);
                // Uczyń hit „widocznym” w Network (remarketing/page_view)
                window.gtag?.("event", "page_view", { send_to: ads });
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ga4, ads]); // tylko raz na identyfikatory

    // Zmiana zgody z banera
    useEffect(() => {
        function onConsentChanged(e: Event) {
            const detail = (e as CustomEvent<Consent>).detail;
            if (!detail) return;

            const allowAnalytics = !!detail.analytics && !!ga4;
            const allowAds = !!detail.marketing && !!ads;

            if (allowAnalytics || allowAds) ensureGaLoaded(ga4 || ads || "");

            window.gtag?.("consent", "update", {
                analytics_storage: allowAnalytics ? "granted" : "denied",
                ad_storage: allowAds ? "granted" : "denied",
            });

            const url = pageUrl(pathname, searchParams);

            // pierwsza konfiguracja po „tak”
            if (allowAnalytics && ga4) {
                window.gtag?.("config", ga4, { page_path: url, debug_mode: DEBUG });
            }
            if (allowAds && ads) {
                window.gtag?.("config", ads);
                window.gtag?.("event", "page_view", { send_to: ads });
            }
        }

        window.addEventListener("cookie-consent-changed", onConsentChanged as EventListener);
        return () => window.removeEventListener("cookie-consent-changed", onConsentChanged as EventListener);
    }, [ga4, ads, pathname, searchParams]);

    // SPA PageView: GA4 + (opcjonalnie) Ads
    useEffect(() => {
        const url = pageUrl(pathname, searchParams);

        if (ga4) {
            window.gtag?.("config", ga4, { page_path: url, debug_mode: DEBUG });
        }
        if (ads) {
            // dla remarketingu warto wysyłać page_view przy nawigacjach SPA
            window.gtag?.("event", "page_view", { send_to: ads });
        }
    }, [ga4, ads, pathname, searchParams]);

    return null;
}
