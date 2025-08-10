import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cookies | [Firmenname]",
    description: "Hinweis, dass auf dieser Website keine Cookies verwendet werden.",
};

const LAST_UPDATE = "10.08.2025";

export default function CookiesDEPage() {
    return (
        <main className="min-h-screen bg-gray-50">
            <section className="bg-gradient-to-b from-gray-100 to-gray-50 border-b">
                <div className="mx-auto max-w-3xl px-6 py-12">
                    <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
                        Cookies
                    </h1>
                    <p className="mt-3 text-sm text-gray-600">
                        Letzte Aktualisierung: <span className="font-medium">{LAST_UPDATE}</span>
                    </p>
                </div>
            </section>

            <section>
                <div className="mx-auto max-w-3xl px-6 py-10">
                    <article className="space-y-8 text-gray-800">
                        <section>
                            <h2 className="text-xl font-semibold text-gray-900">Verwenden wir Cookies?</h2>
                            <div className="mt-3 rounded-2xl border bg-white p-6 shadow-sm">
                                <p>
                                    Nein. Unsere Website <span className="font-semibold">verwendet keine Cookies</span>.
                                </p>
                                <p className="mt-2">
                                    Wir setzen auch keine ähnlichen Tracking-Technologien ein, wie z. B.
                                    Local/Session Storage, Web Beacons oder Tracking‑Pixel. Die Website dient
                                    ausschließlich der Präsentation von Inhalten und der Kontaktaufnahme über
                                    ein Formular.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900">Externe Inhalte (optional)</h2>
                            <p className="mt-2">
                                Wir betten keine Inhalte Dritter ein (z. B. Karten, Videos, Schriftarten von
                                CDNs). Sollten wir dies in Zukunft ändern oder Cookies einsetzen, werden wir
                                diese Information aktualisieren und – sofern erforderlich – einen
                                entsprechenden Hinweisbanner anzeigen.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900">Server‑Logs</h2>
                            <p className="mt-2">
                                Unabhängig vom Verzicht auf Cookies kann der Server automatisch
                                grundlegende technische Protokolle (z. B. IP‑Adresse, Datum und Uhrzeit,
                                Browser‑Informationen) speichern, um Sicherheit und Betrieb der Website zu
                                gewährleisten. Diese Logs werden nicht zu Marketingzwecken verwendet.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900">Kontakt</h2>
                            <p className="mt-2">
                                Bei Fragen zum Datenschutz kontaktieren Sie uns bitte unter:
                                <span className="px-1 font-medium">[E‑Mail‑Adresse]</span>.
                            </p>
                        </section>
                    </article>
                </div>
            </section>
        </main>
    );
}