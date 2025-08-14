"use client";

import { useEffect } from "react";
import {loadMetaPixel} from "@/components/FBPixel/metaPixelLoader";


const CONSENT_COOKIE = "cookie_consent";

function getCookie(name: string) {
    const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
    return match ? decodeURIComponent(match[2]) : null;
}

type Consent = {
    necessary: true;
    analytics: boolean;
    marketing: boolean;
    timestamp?: string;
};

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

export default function MetaPixelRuntime({ pixelId }: { pixelId: string }) {
    useEffect(() => {
        // 1) Na starcie: jeśli w ciasteczku jest marketing === true → doładuj Pixela
        const initial = parseConsent();
        if (initial?.marketing) {
            loadMetaPixel(pixelId);
        }

        // 2) Reakcja na zmiany zgody emitowane z banera
        function onConsentChanged(e: Event) {
            const detail = (e as CustomEvent<Consent>).detail;
            if (detail?.marketing) {
                loadMetaPixel(pixelId);
            }
            // Uwaga: Pixela nie "wyłączymy" w locie bez przeładowania — to OK z perspektywy praktycznej.
        }

        window.addEventListener("cookie-consent-changed", onConsentChanged as EventListener);

        return () => {
            window.removeEventListener("cookie-consent-changed", onConsentChanged as EventListener);
        };
    }, [pixelId]);

    return null;
}
