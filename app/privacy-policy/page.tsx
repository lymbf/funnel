import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Polityka prywatności | [Nazwa firmy]",
    description:
        "Zasady przetwarzania danych osobowych przekazywanych przez formularz zapytania na stronie.",
};

const LAST_UPDATE = "[dd.mm.rrrr]";

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-gray-50">
            <section className="bg-gradient-to-b from-gray-100 to-gray-50 border-b">
                <div className="mx-auto max-w-3xl px-6 py-12">
                    <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
                        Polityka prywatności
                    </h1>
                    <p className="mt-3 text-sm text-gray-600">
                        Data ostatniej aktualizacji: <span className="font-medium">{LAST_UPDATE}</span>
                    </p>
                </div>
            </section>

            <section>
                <div className="mx-auto max-w-3xl px-6 py-10">
                    <article className="space-y-8 text-gray-800">
                        <p>
                            Niniejsza Polityka prywatności opisuje zasady przetwarzania danych
                            osobowych osób wypełniających formularz zapytania na stronie
                            <span className="px-1 italic">[adres strony]</span>. Formularz służy wyłącznie do nawiązania kontaktu w sprawie
                            zakupu okien i przygotowania wstępnej wyceny/oferty.
                        </p>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900">1. Administrator danych</h2>
                            <div className="mt-3 rounded-2xl border bg-white p-6 shadow-sm">
                                <p>
                                    <span className="font-medium">Administratorem</span> danych osobowych jest:
                                    <span className="px-1 font-semibold">[pełna nazwa firmy]</span> z siedzibą w
                                    <span className="px-1">[adres, kod pocztowy, miejscowość, kraj]</span>, NIP:
                                    <span className="px-1">[NIP]</span>, REGON:
                                    <span className="px-1">[REGON]</span>.
                                </p>
                                <ul className="mt-3 list-disc space-y-1 pl-6">
                                    <li>
                                        E-mail do kontaktu w sprawach danych:
                                        <span className="px-1 font-medium">[adres e-mail]</span>
                                    </li>
                                    <li>
                                        Telefon: <span className="px-1 font-medium">[numer telefonu]</span>
                                    </li>
                                    <li>
                                        (Opcjonalnie) Inspektor Ochrony Danych:
                                        <span className="px-1 font-medium">[imię i nazwisko, e-mail]</span>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900">2. Zakres przetwarzanych danych</h2>
                            <p className="mt-2">
                                Za pośrednictwem formularza przetwarzamy wyłącznie dane, które sam/a nam
                                podajesz:
                            </p>
                            <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2 pl-5 list-disc">
                                <li>imię</li>
                                <li>nazwisko</li>
                                <li>adres e-mail</li>
                                <li>numer telefonu</li>
                                <li>kod pocztowy</li>
                                <li>treść zapytania oraz odpowiedzi na pytania dotyczące zakupu okien (jeśli dotyczy)</li>
                            </ul>
                            <p className="mt-2 text-gray-700">
                                Podanie danych jest dobrowolne, ale niezbędne do udzielenia odpowiedzi i
                                kontaktu w sprawie Twojego zapytania.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900">3. Cele i podstawy prawne przetwarzania</h2>
                            <ol className="mt-3 list-decimal space-y-2 pl-6">
                                <li>
                                    <span className="font-medium">Udzielenie odpowiedzi na zapytanie i kontakt w celu przygotowania oferty / wyceny</span>
                                    — art. 6 ust. 1 lit. <span className="font-medium">b RODO</span> (działania na żądanie osoby, której dane dotyczą, przed zawarciem umowy) lub art. 6 ust. 1 lit.
                                    <span className="font-medium"> f RODO</span> (nasz prawnie uzasadniony interes polegający na obsłudze zapytań i prowadzeniu komunikacji z osobami zainteresowanymi ofertą).
                                </li>
                                <li>
                                    <span className="font-medium">Ustalenie, dochodzenie lub obrona roszczeń</span> — art. 6 ust. 1 lit.
                                    <span className="font-medium"> f RODO</span> (prawnie uzasadniony interes administratora).
                                </li>
                                <li>
                                    <span className="font-medium">Wypełnianie obowiązków prawnych</span> (np. wynikających z przepisów o rachunkowości, jeżeli dojdzie do transakcji) — art. 6 ust. 1 lit.
                                    <span className="font-medium"> c RODO</span>.
                                </li>
                                <li className="text-gray-600">
                                    (Jeśli korzystasz z dodatkowych zgód marketingowych – uzupełnij) <span className="font-medium">Dobrowolny marketing bezpośredni</span> — art. 6 ust. 1 lit.
                                    <span className="font-medium"> a RODO</span> (zgoda). <em>Opcjonalne — usuń, jeśli nie zbierasz zgód marketingowych.</em>
                                </li>
                            </ol>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900">4. Odbiorcy danych</h2>
                            <p className="mt-2">
                                Nie sprzedajemy ani nie udostępniamy danych osobowych podmiotom trzecim dla
                                ich własnych celów marketingowych. Dane mogą być przekazywane wyłącznie
                                zaufanym podmiotom przetwarzającym je <span className="font-medium">w naszym imieniu</span> (na podstawie umów
                                powierzenia), takim jak:
                            </p>
                            <ul className="mt-3 list-disc space-y-1 pl-6">
                                <li>dostawca hostingu i utrzymania serwisu,</li>
                                <li>dostawca poczty e-mail / systemu pocztowego,</li>
                                <li>(opcjonalnie) dostawcy systemów CRM/VOIP, firmy serwisujące systemy IT,</li>
                                <li>podmioty świadczące usługi doradcze i prawne – gdy jest to niezbędne.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900">5. Przekazywanie danych poza EOG</h2>
                            <p className="mt-2">
                                Co do zasady nie przekazujemy danych poza Europejski Obszar Gospodarczy
                                (EOG). Jeśli jednak korzystamy z dostawców mających siedzibę poza EOG (np.
                                narzędzia pocztowe/IT), zapewnimy odpowiednie zabezpieczenia wymagane przez
                                RODO, w szczególności standardowe klauzule umowne UE. Informacje o
                                stosowanych zabezpieczeniach udostępnimy na żądanie.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900">6. Okres przechowywania danych</h2>
                            <ul className="mt-3 list-disc space-y-2 pl-6">
                                <li>
                                    przez okres niezbędny do udzielenia odpowiedzi na zapytanie i prowadzenia
                                    korespondencji — <span className="font-medium">nie dłużej niż [12] miesięcy od ostatniej aktywności w sprawie</span>;
                                </li>
                                <li>
                                    w zakresie niezbędnym dla ustalenia, dochodzenia lub obrony roszczeń — do
                                    upływu odpowiednich terminów przedawnienia;
                                </li>
                                <li>
                                    w zakresie danych przetwarzanych na podstawie zgody — do czasu jej
                                    wycofania.
                                </li>
                            </ul>
                            <p className="mt-2">Po upływie tych okresów dane zostaną usunięte lub zanonimizowane.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900">7. Prawa osób, których dane dotyczą</h2>
                            <ul className="mt-3 list-disc space-y-1 pl-6">
                                <li>dostępu do danych i uzyskania ich kopii,</li>
                                <li>sprostowania (poprawienia) danych,</li>
                                <li>usunięcia danych („prawo do bycia zapomnianym”),</li>
                                <li>ograniczenia przetwarzania,</li>
                                <li>przenoszenia danych – w zakresie art. 20 RODO,</li>
                                <li>sprzeciwu wobec przetwarzania opartego na naszym prawnie uzasadnionym interesie,</li>
                                <li>
                                    wycofania zgody w dowolnym momencie (jeśli podstawą przetwarzania była
                                    zgoda) – bez wpływu na zgodność z prawem przetwarzania przed jej
                                    wycofaniem.
                                </li>
                            </ul>
                            <p className="mt-2">
                                Aby skorzystać z praw, skontaktuj się z nami na adres wskazany w sekcji 1.
                            </p>
                            <p className="mt-2">
                                Masz także prawo wniesienia skargi do organu nadzorczego –
                                <span className="font-medium"> Prezesa Urzędu Ochrony Danych Osobowych</span> (ul. Stawki 2, 00-193 Warszawa,
                                uodo.gov.pl), jeśli uznasz, że przetwarzamy Twoje dane niezgodnie z prawem.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900">8. Zautomatyzowane podejmowanie decyzji i profilowanie</h2>
                            <p className="mt-2">
                                Nie podejmujemy decyzji w sposób zautomatyzowany i nie prowadzimy
                                profilowania w oparciu o dane uzyskane z formularza.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900">9. Bezpieczeństwo danych</h2>
                            <p className="mt-2">
                                Stosujemy odpowiednie środki techniczne i organizacyjne zapewniające
                                ochronę danych osobowych, w tym szyfrowanie transmisji (HTTPS), kontrole
                                dostępu, kopie zapasowe oraz zasady minimalizacji danych.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900">10. Pliki cookies i logi serwera (opcjonalnie)</h2>
                            <p className="mt-2">
                                Nasza strona może wykorzystywać wyłącznie niezbędne technicznie pliki
                                cookies zapewniające jej prawidłowe działanie oraz pliki cookies związane z
                                bezpieczeństwem i utrzymaniem sesji. Nie używamy cookies do profilowania
                                użytkowników. <em>Sekcja opcjonalna – dostosuj do faktycznych ustawień serwisu.</em>
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900">11. Źródło danych</h2>
                            <p className="mt-2">
                                Dane pozyskujemy bezpośrednio od Ciebie – poprzez formularz na stronie. Nie
                                korzystamy z danych pochodzących z innych źródeł.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900">12. Zmiany Polityki</h2>
                            <p className="mt-2">
                                Zastrzegamy sobie prawo do wprowadzania zmian w niniejszej Polityce
                                prywatności, m.in. w razie zmian przepisów prawa lub zmian w
                                funkcjonalnościach serwisu. O istotnych zmianach poinformujemy poprzez
                                serwis.
                            </p>
                        </section>

                        <section className="rounded-2xl border bg-white p-6 shadow-sm">
                            <h3 className="text-lg font-semibold text-gray-900">Załącznik: klauzula informacyjna pod formularz</h3>
                            <div className="mt-3 space-y-2 text-gray-700">
                                <p>
                                    <span className="font-medium">Administrator:</span> [pełna nazwa firmy], [adres], e-mail: [adres e-mail].
                                </p>
                                <p>
                                    <span className="font-medium">Cele i podstawa:</span> odpowiemy na Twoje zapytanie i skontaktujemy się w sprawie oferty okien – art. 6 ust. 1 lit. b lub f RODO.
                                </p>
                                <p>
                                    <span className="font-medium">Zakres:</span> imię, nazwisko, e-mail, telefon, kod pocztowy oraz treść zapytania.
                                </p>
                                <p>
                                    <span className="font-medium">Dobrowolność:</span> podanie danych jest dobrowolne, ale konieczne do kontaktu.
                                </p>
                                <p>
                                    <span className="font-medium">Odbiorcy:</span> dostawcy hostingu i usług IT oraz poczty e‑mail – wyłącznie jako podmioty przetwarzające w naszym imieniu.
                                </p>
                                <p>
                                    <span className="font-medium">Okres:</span> do [12] miesięcy od zakończenia komunikacji lub dłużej w celu ochrony roszczeń; w przypadku zgody – do jej wycofania.
                                </p>
                                <p>
                                    <span className="font-medium">Prawa:</span> dostęp, sprostowanie, usunięcie, ograniczenie, sprzeciw, przenoszenie danych, skarga do PUODO.
                                </p>
                                <p>
                                    <span className="font-medium">Zautomatyzowane decyzje/profilowanie:</span> nie występuje.
                                </p>
                            </div>
                        </section>

                        <p className="text-sm text-gray-500">
                            <span className="font-medium">Uwaga:</span> Dokument ma charakter wzorca i może wymagać dostosowania do
                            specyfiki Twojej firmy (np. realnych okresów retencji, listy podmiotów
                            przetwarzających, praktyk cookies). Rozważ konsultację z prawnikiem przed
                            publikacją.
                        </p>
                    </article>
                </div>
            </section>
        </main>
    );
}