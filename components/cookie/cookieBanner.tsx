"use client";

import { useEffect, useState } from "react";

type Consent = {
    necessary: true;
    analytics: boolean;
    marketing: boolean;
    timestamp?: string;
};

const CONSENT_COOKIE = "cookie_consent";
const MARKETING_COOKIE = "marketing_consent";
const ONE_YEAR = 365; // dni

function setCookie(name: string, value: string, days = ONE_YEAR) {
    const d = new Date();
    d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
    const isSecure = typeof window !== "undefined" && window.location.protocol === "https:";
    document.cookie =
        `${name}=${encodeURIComponent(value)};` +
        `expires=${d.toUTCString()};path=/;SameSite=Lax` +
        (isSecure ? `;Secure` : ``);
}

function getCookie(name: string) {
    const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
    return match ? decodeURIComponent(match[2]) : null;
}

function readConsentFromCookie(): Consent | null {
    const saved = getCookie(CONSENT_COOKIE);
    if (!saved) return null;
    try {
        const parsed = JSON.parse(saved) as Partial<Consent>;
        return {
            necessary: true,
            analytics: !!parsed.analytics,
            marketing: !!parsed.marketing,
            timestamp: parsed.timestamp,
        };
    } catch {
        return null;
    }
}

export default function CookieBanner() {
    const [open, setOpen] = useState(false);
    const [consent, setConsent] = useState<Consent>({
        necessary: true,
        analytics: false,
        marketing: false,
    });

    function applyConsent(c: Consent) {
        // Ustaw cookie pomocnicze dla Pixela/marketingu
        setCookie(MARKETING_COOKIE, c.marketing ? "yes" : "no");
        // Tu możesz uruchamiać/wyłączać inne narzędzia (GA4 itd.)
    }

    function saveConsent(next: Consent) {
        const toSave: Consent = {
            ...next,
            necessary: true,
            timestamp: new Date().toISOString(),
        };
        // 1) aktualizacja stanu (żeby UI od razu pokazał wybór)
        setConsent(toSave);
        // 2) zapis cookie
        setCookie(CONSENT_COOKIE, JSON.stringify(toSave));
        // 3) zastosowanie zgód (np. wczytanie narzędzi)
        applyConsent(toSave);
        //listener nasłuchujący zmiany zgody
        window.dispatchEvent(new CustomEvent<Consent>("cookie-consent-changed", { detail: toSave }));
        // 4) zamknięcie banera
        setOpen(false);
    }

    function acceptAll() {
        saveConsent({ necessary: true, analytics: true, marketing: true });
    }

    function rejectNonEssential() {
        saveConsent({ necessary: true, analytics: false, marketing: false });
    }

    function savePreferences() {
        saveConsent(consent);
    }

    // Inicjalizacja przy pierwszym montażu
    useEffect(() => {
        // wystaw publiczną metodę do ponownego otwarcia
        window.showCookieBanner = () => {
            const current = readConsentFromCookie() || {
                necessary: true,
                analytics: false,
                marketing: false,
            };
            // kluczowe: wczytanie zgód z cookie do stanu przed pokazaniem
            setConsent(current);
            setOpen(true);
        };

        // przy pierwszym wejściu: jeśli są zapisane zgody – zastosuj i NIE pokazuj banera
        const saved = readConsentFromCookie();
        if (saved) {
            setConsent(saved);   // <<< ważne
            applyConsent(saved);
            setOpen(false);
        } else {
            setOpen(true);
        }

        return () => {
            // sprzątanie (opcjonalne)
            delete window.showCookieBanner;
        };
    }, []);

    if (!open) return null;

    return (
        <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-title"
            className="fixed inset-x-0 bottom-0 z-50 p-4 md:p-6"
        >
            <div className="mx-auto max-w-3xl rounded-2xl border bg-white p-4 shadow-xl md:p-6">
                <h2 id="cookie-title" className="text-lg font-semibold">Wir verwenden Cookies</h2>
                <p className="mt-2 text-sm text-gray-600">
                    Wir nutzen Cookies zum Betrieb der Website, zur Analyse und zu Marketingzwecken.
                    Sie können alle akzeptieren, nicht notwendige ablehnen oder Ihre Einstellungen anpassen.
                </p>

                <fieldset className="mt-4 space-y-3">
                    <legend className="sr-only">Einwilligungskategorien</legend>

                    <label className="flex items-start gap-3">
                        <input type="checkbox" checked disabled className="mt-1" />
                        <span>
              <span className="font-medium">Erforderlich</span>
              <span className="block text-sm text-gray-600">Erforderlich für den Betrieb der Website.</span>
            </span>
                    </label>

                    <label className="flex items-start gap-3">
                        <input
                            type="checkbox"
                            className="mt-1"
                            checked={consent.analytics}
                            onChange={(e) => setConsent((c) => ({ ...c, analytics: e.target.checked }))}
                        />
                        <span>
              <span className="font-medium">Webanalyse</span>
              <span className="block text-sm text-gray-600">Hilft, den Service zu verbessern (z. B. GA4).</span>
            </span>
                    </label>

                    <label className="flex items-start gap-3">
                        <input
                            type="checkbox"
                            className="mt-1"
                            checked={consent.marketing}
                            onChange={(e) => setConsent((c) => ({ ...c, marketing: e.target.checked }))}
                        />
                        <span>
              <span className="font-medium">Marketing</span>
              <span className="block text-sm text-gray-600">Personalisierte Werbung (z. B. Meta Pixel).</span>
            </span>
                    </label>
                </fieldset>

                <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:justify-end">
                    <button
                        onClick={rejectNonEssential}
                        className="w-full rounded-xl border px-4 py-2 text-sm sm:w-auto"
                    >
                        Nicht notwendige ablehnen
                    </button>
                    <button
                        onClick={savePreferences}
                        className="w-full rounded-xl border px-4 py-2 text-sm sm:w-auto"
                    >
                        Meine Auswahl speichern
                    </button>
                    <button
                        onClick={acceptAll}
                        className="w-full rounded-xl bg-black px-4 py-2 text-sm text-white sm:w-auto"
                    >
                        Alle akzeptieren
                    </button>
                </div>

                <p className="mt-3 text-xs text-gray-500">
                    Weitere Informationen finden Sie in unserer
                    <a href="/privacy-policy" className="underline">Datenschutzerklärung</a>.
                </p>
            </div>
        </div>
    );
}