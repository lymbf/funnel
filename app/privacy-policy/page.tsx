import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Datenschutzerklärung | [Firmenname]",
    description:
        "Regeln für die Verarbeitung personenbezogener Daten, die über das Kontaktformular übermittelt werden.",
};

const LAST_UPDATE = "[dd.mm.jjjj]";

export default function PrivacyPolicyDEPage() {
    return (
        <main className="min-h-screen bg-gray-50">
            <section className="bg-gradient-to-b from-gray-100 to-gray-50 border-b">
                <div className="mx-auto max-w-3xl px-6 py-12">
                    <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
                        Datenschutzerklärung
                    </h1>
                    <p className="mt-3 text-sm text-gray-600">
                        Letzte Aktualisierung: <span className="font-medium">{LAST_UPDATE}</span>
                    </p>
                </div>
            </section>

            <section>
                <div className="mx-auto max-w-3xl px-6 py-10">
                    <article className="space-y-8 text-gray-800">
                        <p>
                            Diese Datenschutzerklärung beschreibt die Regeln für die Verarbeitung
                            personenbezogener Daten von Personen, die das Anfrageformular auf der Seite
                            <span className="px-1 italic">[Website‑Adresse]</span> ausfüllen. Das Formular dient ausschließlich dazu,
                            Kontakt in Bezug auf den Kauf von Fenstern aufzunehmen und ein
                            unverbindliches Angebot/Vorkalkulation vorzubereiten.
                        </p>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900">1. Verantwortlicher</h2>
                            <div className="mt-3 rounded-2xl border bg-white p-6 shadow-sm">
                                <p>
                                    <span className="font-medium">Verantwortlicher</span> für die Datenverarbeitung ist
                                    <span className="px-1 font-semibold">[vollständiger Firmenname]</span> mit Sitz in
                                    <span className="px-1">[Adresse, PLZ, Ort, Land]</span>, NIP/REGON (sofern zutreffend):
                                    <span className="px-1">[NIP/REGON]</span>.
                                </p>
                                <ul className="mt-3 list-disc space-y-1 pl-6">
                                    <li>
                                        E-Mail für Datenschutzanfragen:
                                        <span className="px-1 font-medium">[E‑Mail‑Adresse]</span>
                                    </li>
                                    <li>
                                        Telefon: <span className="px-1 font-medium">[Telefonnummer]</span>
                                    </li>
                                    <li>
                                        (Optional) Datenschutzbeauftragter:
                                        <span className="px-1 font-medium">[Name, E‑Mail]</span>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900">2. Umfang der verarbeiteten Daten</h2>
                            <p className="mt-2">
                                Über das Formular verarbeiten wir ausschließlich die Daten, die Sie uns
                                selbst mitteilen:
                            </p>
                            <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2 pl-5 list-disc">
                                <li>Vorname</li>
                                <li>Nachname</li>
                                <li>E‑Mail‑Adresse</li>
                                <li>Telefonnummer</li>
                                <li>Postleitzahl</li>
                                <li>Inhalt der Anfrage sowie Antworten auf Fragen zum Fenstereinbau (falls zutreffend)</li>
                            </ul>
                            <p className="mt-2 text-gray-700">
                                Die Angabe der Daten ist freiwillig, jedoch für die Beantwortung Ihrer
                                Anfrage und die Kontaktaufnahme erforderlich.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900">3. Zwecke und Rechtsgrundlagen der Verarbeitung</h2>
                            <ol className="mt-3 list-decimal space-y-2 pl-6">
                                <li>
                                    <span className="font-medium">Beantwortung der Anfrage und Kontakt zur Angebotserstellung/Vorkalkulation</span>
                                    — Art. 6 Abs. 1 lit. <span className="font-medium">b DSGVO</span> (vorvertragliche Maßnahmen auf Ihre
                                    Anfrage) oder Art. 6 Abs. 1 lit. <span className="font-medium">f DSGVO</span> (berechtigtes Interesse an der
                                    Bearbeitung von Anfragen und der Kommunikation mit Interessenten).
                                </li>
                                <li>
                                    <span className="font-medium">Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen</span> — Art. 6 Abs.
                                    1 lit. <span className="font-medium">f DSGVO</span> (berechtigtes Interesse des Verantwortlichen).
                                </li>
                                <li>
                                    <span className="font-medium">Erfüllung rechtlicher Verpflichtungen</span> (z. B. nach
                                    Rechnungslegungsvorschriften im Falle eines Vertragsschlusses) — Art. 6 Abs.
                                    1 lit. <span className="font-medium">c DSGVO</span>.
                                </li>
                                <li className="text-gray-600">
                                    (Wenn Sie zusätzliche Marketing‑Einwilligungen nutzen – ergänzen)
                                    <span className="font-medium">Direktmarketing auf Grundlage einer Einwilligung</span> — Art. 6 Abs. 1 lit.
                                    <span className="font-medium">a DSGVO</span>. <em>Optional – entfernen, wenn keine Einwilligungen erhoben werden.</em>
                                </li>
                            </ol>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900">4. Empfänger der Daten</h2>
                            <p className="mt-2">
                                Wir verkaufen oder übermitteln personenbezogene Daten nicht an Dritte zu
                                deren eigenen Marketingzwecken. Daten können ausschließlich an
                                vertrauenswürdige Auftragsverarbeiter <span className="font-medium">in unserem Auftrag</span> (auf Grundlage von
                                Auftragsverarbeitungsverträgen) weitergegeben werden, z. B. an:
                            </p>
                            <ul className="mt-3 list-disc space-y-1 pl-6">
                                <li>Hosting‑ und Service‑Provider für den Betrieb der Website,</li>
                                <li>E‑Mail‑Anbieter / Mailsysteme,</li>
                                <li>(optional) CRM/VOIP‑Anbieter, IT‑Wartungsunternehmen,</li>
                                <li>Rechts‑ und Beratungsdienstleister – sofern erforderlich.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900">5. Übermittlung in Drittländer außerhalb des EWR</h2>
                            <p className="mt-2">
                                Grundsätzlich übermitteln wir Daten nicht außerhalb des Europäischen
                                Wirtschaftsraums (EWR). Sollten wir dennoch Anbieter außerhalb des EWR
                                (z. B. für E‑Mail‑/IT‑Werkzeuge) nutzen, stellen wir geeignete Garantien nach
                                der DSGVO sicher, insbesondere die EU‑Standardvertragsklauseln. Informationen
                                zu den eingesetzten Garantien stellen wir auf Anfrage zur Verfügung.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900">6. Speicherdauer</h2>
                            <ul className="mt-3 list-disc space-y-2 pl-6">
                                <li>
                                    für die Dauer der Beantwortung der Anfrage und der Korrespondenz —
                                    <span className="font-medium">nicht länger als [12] Monate ab der letzten Aktivität in der Sache</span>;
                                </li>
                                <li>
                                    soweit zur Geltendmachung, Ausübung oder Verteidigung von
                                    Rechtsansprüchen erforderlich — bis zum Ablauf der einschlägigen
                                    Verjährungsfristen;
                                </li>
                                <li>
                                    soweit die Verarbeitung auf einer Einwilligung beruht — bis zu deren
                                    Widerruf.
                                </li>
                            </ul>
                            <p className="mt-2">Nach Ablauf dieser Fristen werden die Daten gelöscht oder anonymisiert.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900">7. Rechte der betroffenen Personen</h2>
                            <ul className="mt-3 list-disc space-y-1 pl-6">
                                <li>Auskunft und Kopie der Daten,</li>
                                <li>Berichtigung der Daten,</li>
                                <li>{`Löschung der Daten ("Recht auf Vergessenwerden"),`}</li>
                                <li>Einschränkung der Verarbeitung,</li>
                                <li>Datenübertragbarkeit – im Rahmen von Art. 20 DSGVO,</li>
                                <li>Widerspruch gegen die Verarbeitung auf Grundlage unseres berechtigten Interesses,</li>
                                <li>
                                    Widerruf der Einwilligung jederzeit (falls die Verarbeitung auf
                                    Einwilligung beruht) – ohne Auswirkung auf die Rechtmäßigkeit der bis zum
                                    Widerruf erfolgten Verarbeitung.
                                </li>
                            </ul>
                            <p className="mt-2">
                                Zur Ausübung Ihrer Rechte kontaktieren Sie uns bitte unter den in Abschnitt
                                1 angegebenen Kontaktdaten.
                            </p>
                            <p className="mt-2">
                                Sie haben außerdem das Recht, Beschwerde bei der Aufsichtsbehörde
                                einzulegen – dem <span className="font-medium">Präsidenten des Amtes für den Schutz personenbezogener Daten</span>
                                (ul. Stawki 2, 00‑193 Warszawa, uodo.gov.pl), wenn Sie der Ansicht sind, dass
                                wir Ihre Daten unrechtmäßig verarbeiten.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900">8. Automatisierte Entscheidungen und Profiling</h2>
                            <p className="mt-2">Wir treffen keine automatisierten Entscheidungen und führen kein Profiling durch.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900">9. Datensicherheit</h2>
                            <p className="mt-2">
                                Wir setzen geeignete technische und organisatorische Maßnahmen zum Schutz
                                personenbezogener Daten ein, u. a. verschlüsselte Übertragung (HTTPS),
                                Zugriffskontrollen, Backups sowie Datenminimierung.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900">10. Cookies und Server‑Logs (optional)</h2>
                            <p className="mt-2">
                                Unsere Website kann ausschließlich technisch notwendige Cookies verwenden,
                                die den ordnungsgemäßen Betrieb sicherstellen, sowie Cookies im Zusammenhang
                                mit Sicherheit und Sitzungsverwaltung. Wir verwenden keine Cookies zum
                                Profiling von Nutzern. <em>Optional – an die tatsächlichen Einstellungen der
                                Website anpassen.</em>
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900">11. Herkunft der Daten</h2>
                            <p className="mt-2">
                                Die Daten erhalten wir direkt von Ihnen – über das Formular auf der
                                Website. Wir nutzen keine Daten aus anderen Quellen.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900">12. Änderungen dieser Erklärung</h2>
                            <p className="mt-2">
                                Wir behalten uns vor, diese Datenschutzerklärung anzupassen, z. B. bei
                                Gesetzesänderungen oder Änderungen der Website‑Funktionen. Über wesentliche
                                Änderungen informieren wir auf der Website.
                            </p>
                        </section>

                        <section className="rounded-2xl border bg-white p-6 shadow-sm">
                            <h3 className="text-lg font-semibold text-gray-900">Anlage: Informationspflicht direkt beim Formular</h3>
                            <div className="mt-3 space-y-2 text-gray-700">
                                <p>
                                    <span className="font-medium">Verantwortlicher:</span> [vollständiger Firmenname], [Adresse], E‑Mail: [E‑Mail‑Adresse].
                                </p>
                                <p>
                                    <span className="font-medium">Zwecke und Rechtsgrundlage:</span> Wir beantworten Ihre Anfrage und
                                    kontaktieren Sie bezüglich eines Angebots für Fenster – Art. 6 Abs. 1 lit.
                                    b oder f DSGVO.
                                </p>
                                <p>
                                    <span className="font-medium">Umfang:</span> Vorname, Nachname, E‑Mail, Telefon, Postleitzahl sowie Inhalt der
                                    Anfrage.
                                </p>
                                <p>
                                    <span className="font-medium">Freiwilligkeit:</span> Die Angabe der Daten ist freiwillig, jedoch für die
                                    Kontaktaufnahme erforderlich.
                                </p>
                                <p>
                                    <span className="font-medium">Empfänger:</span> Hosting‑/IT‑Dienstleister und E‑Mail‑Anbieter – ausschließlich
                                    als Auftragsverarbeiter in unserem Auftrag.
                                </p>
                                <p>
                                    <span className="font-medium">Speicherdauer:</span> bis zu [12] Monate nach Abschluss der Kommunikation oder
                                    länger zum Schutz von Rechtsansprüchen; bei Einwilligung – bis zu deren
                                    Widerruf.
                                </p>
                                <p>
                                    <span className="font-medium">Rechte:</span> Auskunft, Berichtigung, Löschung, Einschränkung, Widerspruch,
                                    Datenübertragbarkeit, Beschwerde bei der Aufsichtsbehörde (UODO).
                                </p>
                                <p>
                                    <span className="font-medium">Automatisierte Entscheidungen/Profiling:</span> nicht vorhanden.
                                </p>
                            </div>
                        </section>

                        <p className="text-sm text-gray-500">
                            <span className="font-medium">Hinweis:</span> Dieses Dokument ist eine Vorlage und muss ggf. an die
                            Besonderheiten Ihres Unternehmens angepasst werden (z. B. tatsächliche
                            Aufbewahrungsfristen, Liste der Auftragsverarbeiter, Cookie‑Praxis). Ziehen
                            Sie vor der Veröffentlichung eine rechtliche Prüfung in Betracht.
                        </p>
                    </article>
                </div>
            </section>
        </main>
    );
}