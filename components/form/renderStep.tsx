"use client"

import {STEPS} from "@/data/steps";
import Card from "@/components/form/card";
import {CheckCircle2} from "lucide-react";
import {Answers, FormState, StepField, TouchedState} from "@/components/form/types";
import {Dispatch, RefObject, SetStateAction, useEffect, useState} from "react";
import Field from "@/components/form/field";
import {
    emailRegex,
    homePhoneRegex,
    isPhoneValid,
    mobilePhoneRegex,
    zipcodeRegex
} from "@/components/form/validation";

interface RenderProps {
    answers: Answers,
    setAnswers: Dispatch<SetStateAction<Answers>>,
    stepIndex: number,
    touched: TouchedState,
    setTouched: Dispatch<SetStateAction<TouchedState>>,
    formData: FormState,
    setFormData: Dispatch<SetStateAction<FormState>>,
    successMessage: string,
    errorMessage: string,
    successRef: RefObject<HTMLParagraphElement | null>,
    goNext: () => void
}

const iconSize = 22;


export default function RenderStep({
                                       answers,
                                       stepIndex,
                                       setAnswers,
                                       formData,
                                       setFormData,
                                       touched,
                                       setTouched,
                                       successMessage,
                                       errorMessage,
                                       successRef,
                                       goNext
                                   }: RenderProps) {
    const def = STEPS[stepIndex];


    const [isLoading, setIsLoading] = useState<boolean>(false);


    const toggleMulti = (title: string) => {
        setAnswers((prev) => {
            const exists = prev.step0.includes(title);
            return {...prev, step0: exists ? prev.step0.filter((t) => t !== title) : [...prev.step0, title]};
        });
    };
// —— wybor single
    const setSingle = (field: Exclude<StepField, "step0" | "step6" | 'step7'>, title: string) => {
        setAnswers((prev) => ({...prev, [field]: title}));
        goNext()
    }

    const clientErrors = {
        name: !formData.name.trim() ? "Pflichtfeld" : formData.name.trim().length < 2 ? "Vorname ist zu kurz" : "",
        surname:
            !formData.surname.trim() ? "Pflichtfeld" : formData.surname.trim().length < 2 ? "Nachname ist zu kurz" : "",
        phone: !formData.phone.trim()
            ? "Pflichtfeld"
            : (!mobilePhoneRegex.test(formData.phone.trim()) && !homePhoneRegex.test(formData.phone.trim()))
                ? "Bitte eine gültige Nummer eingeben."
                : "",
        email: !formData.email.trim()
            ? "Pflichtfeld"
            : !emailRegex.test(formData.email.trim())
                ? "Bitte geben Sie eine gültige E-Mail-Adresse ein."
                : "",
        zipcode: !formData.zipcode.trim()
            ? 'Bitte geben Sie Ihre Postleitzahl ein.'
            : !zipcodeRegex.test(formData.zipcode.trim())
                ? 'Bitte geben Sie eine gültige Postleitzahl ein.'
                : ''
    } as const;

    const isFormValid = !clientErrors.name && !clientErrors.surname && !clientErrors.phone && !clientErrors.email;


    if (def.type === "multi" || def.type === "single") {
        return (
            <div className={' flex flex-col items-center w-full'}>
                <h2 className="text-xl font-bold mb-4 max-w-[600px] text-center">{def.question}</h2>
                <div className="flex flex-col gap-2 sm:flex-row w-full sm:w-auto">
                    {def.options.map(({id, title, Icon}) => {
                        const active = def.type === "multi" ? answers.step0.includes(title) : answers[def.field] === title;
                        return (
                            <Card
                                key={id}
                                active={active}
                                onClick={() => (def.type === "multi" ? toggleMulti(title) : setSingle(def.field, title))}
                            >
                                <div className="relative flex flex-row sm:flex-col items-center gap-3 h-full justify-between sm:justify-center">
                                    <span
                                        className={`sm:mb-6 inline-flex h-10 w-14 sm:h-20 sm:w-28 items-center justify-center rounded-xl
                                      `}
                                    >
                                      <Icon  className = 'h-full w-auto'/>
                                    </span>
                                    <span className="font-semibold sm:absolute bottom-2  w-full max-w-[158px] text-center">{title}</span>
                                </div>
                            </Card>
                        );
                    })}
                </div>
            </div>
        );
    }

    if(def.type === 'zipCode'){
        return (
            <div className={'flex flex-col items-center w-full max-w-[900px]'}>
                <h2 className={'text-xl font-bold mb-8'}>Wo soll der Einbau der Fenster erfolgen?</h2>
                <Field
                    label="Posteleitzahl"
                    name="zipcode"
                    value={formData.zipcode}
                    onChange={(e) => setFormData((p) => ({...p, zipcode: e.target.value}))}
                    onBlur={() => setTouched((t) => ({...t, zipcode: true}))}
                    error={touched.zipcode ? clientErrors.zipcode : ""}
                    required
                    placeholder="10999"
                />
                <p className={'text-slate-600 mt-2'}>
                    Für die Suche nach regionalen Fachfirmen
                </p>
            </div>
        )
    }

// krok 6 — dane + podsumowanie
    return (
        <div className = 'flex flex-col items-center w-full max-w-[900px]'>
            <h2 className="text-xl font-bold mb-4">Kontaktdaten</h2>

            {/* Podsumowanie */}
            <div className="hidden sm:blockmb-4 rounded-2xl border border-gray-200 bg-gray-50 p-4">
                <div className="mb-2 font-semibold">Podsumowanie:</div>
                <ul className="text-sm text-gray-700 space-y-1">
                    <li><span
                        className="font-medium">Krok 1:</span> {answers.step0.length ? answers.step0.join(", ") : "—"}
                    </li>
                    <li><span className="font-medium">Krok 2:</span> {answers.step1 || "—"}</li>
                    <li><span className="font-medium">Krok 3:</span> {answers.step2 || "—"}</li>
                    <li><span className="font-medium">Krok 4:</span> {answers.step3 || "—"}</li>
                    <li><span className="font-medium">Krok 5:</span> {answers.step4 || "—"}</li>
                </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full">
                <Field
                    label="Vorname"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData((p) => ({...p, name: e.target.value}))}
                    onBlur={() => setTouched((t) => ({...t, name: true}))}
                    error={touched.name ? clientErrors.name : ""}
                    required
                    placeholder="Max"
                />
                <Field
                    label="Nachname"
                    name="surname"
                    value={formData.surname}
                    onChange={(e) => setFormData((p) => ({...p, surname: e.target.value}))}
                    onBlur={() => setTouched((t) => ({...t, surname: true}))}
                    error={touched.surname ? clientErrors.surname : ""}
                    required
                    placeholder="Musterman"
                />
                <Field
                    label="Telefon"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData((p) => ({...p, phone: e.target.value}))}
                    onBlur={() => setTouched((t) => ({...t, phone: true}))}
                    error={touched.phone ? clientErrors.phone : ""}
                />
                <Field
                    type="email"
                    label="E-mail"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData((p) => ({...p, email: e.target.value}))}
                    onBlur={() => setTouched((t) => ({...t, email: true}))}
                    error={touched.email ? clientErrors.email : ""}
                    required
                    placeholder="max.musterman@gmail.com"
                />
                <div>
                    <label className="block text-sm font-medium text-gray-800 mb-1">Bemerkungen (optional)</label>
                    <textarea
                        name="notes"
                        placeholder="weitere Informationene"
                        value={formData.notes}
                        onChange={(e) => setFormData((p) => ({...p, notes: e.target.value}))}
                        className="w-full border rounded-lg p-3 min-h-[96px] border-accent focus:ring-2 focus:ring-blue-300 outline-none"
                    />
                </div>
            </div>

            <div className="mt-3">
                {isLoading && <p className="text-blue-600">Wysyłanie formularza…</p>}
                {successMessage && (
                    <p ref={successRef} className="text-green-600 font-semibold flex items-center gap-2">
                        <CheckCircle2 size={18}/> {successMessage}
                    </p>
                )}
                {errorMessage && <p className="text-red-600 font-semibold">{errorMessage}</p>}
            </div>
        </div>
    );
};