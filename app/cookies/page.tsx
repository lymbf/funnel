import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cookies | [Firmenname]",
    description: "Unsere Website verwendet ein technisch notwendiges Consent‑Cookie sowie – nach Einwilligung – Cookies von Google Analytics (Statistik) und Meta Pixel (Marketing).",
};

const LAST_UPDATE = "15.08.2025";

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
                        {/* 1. Verwenden wir Cookies? */}
                        <section>
                            <h2 className="text-xl font-semibold text-gray-900">Verwenden wir Cookies?</h2>
                            <div className="mt-3 rounded-2xl border bg-white p-6 shadow-sm">
                                <p>
                                    Ja. Wir setzen ein <span className="font-semibold">technisch notwendiges Consent‑Cookie</span> ein, um Ihre Auswahl zu speichern, sowie – <span className="font-semibold">nur nach Ihrer Einwilligung</span> – Cookies für <span className="font-semibold">Google Analytics</span> (Statistik) und <span className="font-semibold">Meta Pixel</span> (Marketing).
                                </p>
                                <ul className="mt-3 list-disc pl-6 text-sm text-gray-700">
                                    <li><span className="font-medium">Notwendig:</span> <code>cookie_consent</code> (12 Monate) – speichert Ihre Cookie‑Einstellungen.</li>
                                    <li><span className="font-medium">Statistik (Opt‑in):</span> Google Analytics‑Cookies wie <code>_ga</code>, <code>_ga_*</code>, <code>_gid</code>.</li>
                                    <li><span className="font-medium">Marketing (Opt‑in):</span> Meta Pixel‑Cookies wie <code>_fbp</code> und ggf. <code>_fbc</code>.</li>
                                </ul>
                            </div>
                        </section>

                        {/* 2. Google Analytics */}
                        <section>
                            <h2 className="text-xl font-semibold text-gray-900">Google Analytics (Statistik – nur mit Einwilligung)</h2>
                            <p className="mt-2">
                                <span className="font-medium">Anbieter:</span> Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. Wir nutzen IP‑Anonymisierung. Es kann zu Übermittlungen an Google LLC (USA) kommen; Schutz über Standardvertragsklauseln (Art. 46 DSGVO).
                            </p>
                            <p className="mt-2">
                                <span className="font-medium">Zweck:</span> Reichweitenmessung und Verbesserung unserer Website. <span className="font-medium">Rechtsgrundlage:</span> Art. 6 Abs. 1 lit. a DSGVO; § 25 Abs. 1 TTDSG (Einwilligung).
                            </p>
                            <p className="mt-2 text-sm text-gray-700">
                                <span className="font-medium">Cookies & Laufzeiten (typisch):</span> <code>_ga</code> (2 Jahre), <code>_ga_*</code> (2 Jahre), <code>_gid</code> (24 Std.). Die GA4‑Event‑Aufbewahrung wird in der GA‑Konsole konfiguriert und kann hiervon abweichen.
                            </p>
                        </section>

                        {/* 3. Meta Pixel */}
                        <section>
                            <h2 className="text-xl font-semibold text-gray-900">Meta Pixel (Marketing – nur mit Einwilligung)</h2>
                            <p className="mt-2">
                                <span className="font-medium">Anbieter:</span> Meta Platforms Ireland Limited, 4 Grand Canal Square, Dublin 2, Irland. Es kann zu Übermittlungen an Meta Platforms, Inc. (USA) kommen; Schutz über Standardvertragsklauseln (Art. 46 DSGVO).
                            </p>
                            <p className="mt-2">
                                <span className="font-medium">Zweck:</span> Conversion‑Tracking, Reichweitenmessung und Zielgruppenbildung. <span className="font-medium">Rechtsgrundlage:</span> Art. 6 Abs. 1 lit. a DSGVO; § 25 Abs. 1 TTDSG (Einwilligung).
                            </p>
                            <p className="mt-2 text-sm text-gray-700">
                                <span className="font-medium">Cookies & Laufzeiten (typisch):</span> <code>_fbp</code> (3 Monate), <code>_fbc</code> (bis zu 2 Jahre; nur bei Aufruf mit <code>fbclid</code>‑Parameter).
                            </p>
                        </section>

                        {/* 4. Einwilligung verwalten */}
                        <section>
                            <h2 className="text-xl font-semibold text-gray-900">Einwilligung, Widerruf und Einstellungen</h2>
                            <p className="mt-2">
                                Sie können Ihre Auswahl jederzeit über unseren Cookie‑Banner bzw. den Link <span className="font-medium">„Cookie‑Einstellungen“</span> in der Fußzeile anpassen. Eine erteilte Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen.
                            </p>
                            <p className="mt-2">
                                Zusätzlich können Sie Cookies in Ihrem Browser löschen oder blockieren. Dies kann die Funktionalität der Website beeinträchtigen.
                            </p>
                        </section>

                        {/* 5. Server‑Logs */}
                        <section>
                            <h2 className="text-xl font-semibold text-gray-900">Server‑Logs</h2>
                            <p className="mt-2">
                                Unabhängig von Cookies kann der Server automatisch grundlegende technische Protokolle (z. B. IP‑Adresse, Datum und Uhrzeit, Browser‑Informationen) speichern, um Sicherheit und Betrieb der Website zu gewährleisten. Diese Logs werden nicht zu Marketingzwecken verwendet.
                            </p>
                        </section>

                        {/* 6. Kontakt */}
                        <section>
                            <h2 className="text-xl font-semibold text-gray-900">Kontakt</h2>
                            <p className="mt-2">
                                Bei Fragen zum Datenschutz kontaktieren Sie uns bitte unter: <span className="px-1 font-medium">info@lewandowski-bau.com</span>.
                            </p>
                        </section>
                    </article>
                </div>
            </section>
        </main>
    );
}
