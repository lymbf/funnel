"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import {ensureGaLoaded} from "@/components/GA/gaLoader";


type Consent = {
    necessary: true;
    analytics: boolean; // analityka (analytics_storage)
    marketing: boolean; // marketing (ad_storage)
    timestamp?: string;
};

const CONSENT_COOKIE = "cookie_consent";

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

export default function GA({ ga4, ads }: { ga4?: string; ads?: string }) {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    // Inicjalizacja na starcie wg zgody
    useEffect(() => {
        const c = parseConsent();
        const needAnalytics = !!c?.analytics && !!ga4;
        const needAds = !!c?.marketing && !!ads;

        // Jeśli jakakolwiek kategoria wymaga gtag.js → ładujemy raz
        if (needAnalytics || needAds) {
            // bootstrap użyj z GA4 albo Ads (cokolwiek masz)
            ensureGaLoaded(ga4 || ads || "");

            // Aktualizuj Consent Mode
            window.gtag?.("consent", "update", {
                analytics_storage: needAnalytics ? "granted" : "denied",
                ad_storage: needAds ? "granted" : "denied",
            });

            // Konfiguracje
            if (needAnalytics && ga4) {
                window.gtag?.("config", ga4, { page_path: pageUrl(pathname, searchParams) });
            }
            if (needAds && ads) {
                // dla Ads wystarczy config; zdarzenia konwersji wywołujesz osobno przy akcjach
                window.gtag?.("config", ads);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ga4, ads]); // tylko init

    // Reakcja na zmianę zgody z banera
    useEffect(() => {
        function onConsentChanged(e: Event) {
            const detail = (e as CustomEvent<Consent>).detail;
            if (!detail) return;

            const allowAnalytics = !!detail.analytics && !!ga4;
            const allowAds = !!detail.marketing && !!ads;

            // Upewnij się, że gtag.js jest załadowany jeśli cokolwiek włączono
            if (allowAnalytics || allowAds) ensureGaLoaded(ga4 || ads || "");

            window.gtag?.("consent", "update", {
                analytics_storage: allowAnalytics ? "granted" : "denied",
                ad_storage: allowAds ? "granted" : "denied",
            });

            // Pierwsza konfiguracja po udzieleniu zgody
            if (allowAnalytics && ga4) {
                window.gtag?.("config", ga4, { page_path: pageUrl(pathname, searchParams) });
            }
            if (allowAds && ads) {
                window.gtag?.("config", ads);
            }
        }

        window.addEventListener("cookie-consent-changed", onConsentChanged as EventListener);
        return () => window.removeEventListener("cookie-consent-changed", onConsentChanged as EventListener);
    }, [ga4, ads, pathname, searchParams]);

    // SPA pageview tylko dla GA4 (gdy gtag już jest)
    useEffect(() => {
        if (!ga4) return;
        const url = pageUrl(pathname, searchParams);
        window.gtag?.("config", ga4, { page_path: url });
    }, [ga4, pathname, searchParams]);

    return null;
}
