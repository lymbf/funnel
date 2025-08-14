"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import {ensureGaLoaded} from "@/components/GA/gaLoader";
import {trackPageview} from "@/components/GA/gtagHelper";

type Consent = {
    necessary: true;
    analytics: boolean;
    marketing: boolean;
    timestamp?: string;
};

const CONSENT_COOKIE = "cookie_consent";

function getCookie(name: string): string | null {
    const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
    return match ? decodeURIComponent(match[2]) : null;
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

export default function GA({ GA_MEASUREMENT_ID }: { GA_MEASUREMENT_ID: string }) {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    // 1) Start: jeśli jest zgoda na analitykę → wczytaj GA, ustaw consent=granted i wyślij pierwszy PV
    useEffect(() => {
        const c = parseConsent();
        if (c?.analytics) {
            ensureGaLoaded(GA_MEASUREMENT_ID);
            // ustawienie zgody przed pierwszym config
            window.gtag?.("consent", "update", { analytics_storage: "granted" });

            const sp = searchParams.toString();
            const url = sp ? `${pathname}?${sp}` : pathname || "/";
            trackPageview(GA_MEASUREMENT_ID, url);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [GA_MEASUREMENT_ID]); // intencjonalnie bez pathname/searchParams — to tylko inicjalizacja

    // 2) Reakcja na zmianę zgody z banera (cookie-consent-changed)
    useEffect(() => {
        function onConsentChanged(e: Event) {
            const detail = (e as CustomEvent<Consent>).detail;
            if (!detail) return;

            if (detail.analytics) {
                ensureGaLoaded(GA_MEASUREMENT_ID);
                window.gtag?.("consent", "update", { analytics_storage: "granted" });

                const sp = searchParams.toString();
                const url = sp ? `${pathname}?${sp}` : pathname || "/";
                trackPageview(GA_MEASUREMENT_ID, url);
            } else {
                // Uwaga: wyłączenie w locie nie usuwa już załadowanego skryptu.
                // Zwykle wystarcza pozostawienie 'denied' przy kolejnym starcie/odświeżeniu.
                window.gtag?.("consent", "update", { analytics_storage: "denied" });
            }
        }

        window.addEventListener("cookie-consent-changed", onConsentChanged as EventListener);
        return () => window.removeEventListener("cookie-consent-changed", onConsentChanged as EventListener);
    }, [GA_MEASUREMENT_ID, pathname, searchParams]);

    // 3) SPA PageView przy zmianie trasy (tylko jeśli gtag już jest)
    useEffect(() => {
        const sp = searchParams.toString();
        const url = sp ? `${pathname}?${sp}` : pathname || "/";
        trackPageview(GA_MEASUREMENT_ID, url);
    }, [pathname, searchParams, GA_MEASUREMENT_ID]);

    return null;
}