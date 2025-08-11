"use client";

import {JSX, useEffect, useRef, useState} from "react";
import {gsap} from "gsap";
import {Answers, Direction, FormState, TouchedState} from './types'
import {emailRegex, isPhoneValid, phoneRegex, zipcodeRegex} from "@/components/form/validation";
import ProgressBar from "@/components/progressBar/progressBar";
import RenderStep from "@/components/form/renderStep";
import Nav from "@/components/form/nav";
import {Lato} from "next/font/google";
import {STEPS} from "@/data/steps";
import Link from "next/link";

const lato = Lato({
    variable: '--font-lato-sans',
    weight: ['100', '300', '400', '700', '900'],
    subsets: ['latin']
})

const LS_KEY = "msf_state_v1";

export default function MultiStepForm(): JSX.Element {
    const [currentStep, setCurrentStep] = useState<number>(0); // 0..5
    const [direction, setDirection] = useState<Direction>("forward");

    const [answers, setAnswers] = useState<Answers>({
        step0: [],
        step1: null,
        step2: null,
        step3: null,
        step4: null,
        step5: null
    });

    const [formData, setFormData] = useState<FormState>({
        name: "",
        surname: "",
        phone: "",
        email: "",
        notes: "",
        zipcode:''
    });

    const [touched, setTouched] = useState<TouchedState>({
        name: false,
        surname: false,
        phone: false,
        email: false,
        zipcode: false,
    });

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [successMessage, setSuccessMessage] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("");


    const containerRef = useRef<HTMLDivElement | null>(null);
    const successRef = useRef<HTMLParagraphElement | null>(null);
    const prevStepRef = useRef<number>(0);
    const progressRefs = useRef<Array<HTMLDivElement | null>>([]);


    /* —— LOCAL STORAGE: restore */
    // useEffect(() => {
    //     if (typeof window === "undefined") return;
    //     try {
    //         const raw = localStorage.getItem(LS_KEY);
    //         if (!raw) return;
    //         const saved = JSON.parse(raw) as {
    //             currentStep?: number;
    //             answers?: Answers;
    //             formData?: FormState;
    //         };
    //         if (saved.answers) setAnswers(saved.answers);
    //         if (saved.formData) setFormData(saved.formData);
    //         if (typeof saved.currentStep === "number") setCurrentStep(saved.currentStep);
    //     } catch {
    //         // ignore
    //     }
    // }, []);

    /* —— LOCAL STORAGE: persist (debounce ~300ms) */

    // useEffect(() => {
    //     if (typeof window === "undefined") return;
    //     const id = window.setTimeout(() => {
    //         const state = {currentStep, answers, formData};
    //         localStorage.setItem(LS_KEY, JSON.stringify(state));
    //     }, 300);
    //     return () => window.clearTimeout(id);
    // }, [currentStep, answers, formData]);
    /* set progress bars inactive; set first progress bar active  */

    useEffect(() => {
        gsap.set([...progressRefs.current], {
            scaleX: 0
        })
        const seg = progressRefs.current[0];
        gsap.set(seg, {
            scaleX: 1
        })
    }, []);

    /* —— ANIMACJE (slide-out + slide-in, progress) */

    useEffect(() => {
        if (!containerRef.current) return;
        const oldStep = containerRef.current.querySelector(".step-content.old") as HTMLElement | null;
        const newStep = containerRef.current.querySelector(".step-content.new") as HTMLElement | null;
        if (!oldStep || !newStep) return;

        const xOffset = direction === "forward" ? -60 : 60;
        const tl = gsap.timeline();

        tl.to(oldStep, {x: xOffset, opacity: 0, duration: 0.28, ease: "power2.in"})
            .fromTo(
                newStep,
                {x: -xOffset, opacity: 0},
                {x: 0, opacity: 1, duration: 0.32, ease: "power2.out"},
                "<"
            );

        // progress
        if (direction === "forward" && currentStep > prevStepRef.current) {
            const seg = progressRefs.current[currentStep];
            if (seg) {
                gsap.fromTo(seg, {scaleX: 0}, {scaleX: 1, duration: 0.4, ease: "power2.out", transformOrigin: "left"});
            }
        } else if (direction === "backward" && currentStep < prevStepRef.current) {
            const seg = progressRefs.current[prevStepRef.current];
            if (seg) {
                gsap.fromTo(seg, {scaleX: 1}, {scaleX: 0, duration: 0.35, ease: "power2.in", transformOrigin: "left"});
            }
        }

        prevStepRef.current = currentStep;
    }, [currentStep, direction]);

    const goNext = () => {
        if (currentStep >= STEPS.length - 1) return;
        setDirection("forward");
        setCurrentStep((s) => s + 1);
    };

    /* —— walidacja klienta */
    const clientErrors = {
        name: !formData.name.trim() ? "Pflichtfeld" : formData.name.trim().length < 2 ? "Vorname ist zu kurz" : "",
        surname:
            !formData.surname.trim() ? "Pflichtfeld" : formData.surname.trim().length < 2 ? "Nachname ist zu kurz" : "",
        phone: !formData.phone.trim()
            ? "Pflichtfeld"
            : !phoneRegex.test(formData.zipcode.trim())
                ? "Bitte eine gültige Nummer eingeben."
                : "",
        email: !formData.email.trim()
            ? "Pflichtfeld"
            : !emailRegex.test(formData.email.trim())
                ? "Bitte geben Sie eine gültige E-Mail-Adresse ein."
                : "",
        zipcode: !formData.zipcode.trim()
            ? 'Podaj kod pocztowy'
            : !zipcodeRegex.test(formData.zipcode.trim())
                ? 'Bitte geben Sie eine gültige Postleitzahl ein.'
                : ''
    } as const;

    const isFormValid = !clientErrors.name && !clientErrors.surname && !clientErrors.phone && !clientErrors.email && !clientErrors.zipcode;

    /* handle submit */
    const handleSubmit = async (): Promise<void> => {
        // pokaż błędy jeśli user nie dotknął pól
        setTouched({name: true, surname: true, phone: true, email: true, zipcode:true});
        if (!isFormValid) return;

        setIsLoading(true);
        setErrorMessage("");
        setSuccessMessage("");

        try {
            const payload = {
                name: formData.name.trim(),
                surname: formData.surname.trim(),
                phone: formData.phone.trim(),
                email: formData.email.trim(),
                notes: formData.notes.trim(),
                zipcode:formData.zipcode.trim(),
                answers: [answers.step0, answers.step1, answers.step2, answers.step3, answers.step4, answers.step5] as const,
            };

            const res = await fetch("/api/form", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(payload),
            });
            const data = (await res.json()) as { message?: string };

            if (!res.ok) throw new Error(data?.message || "Błąd wysyłki formularza");

            setSuccessMessage(data?.message || "Formularz wysłany pomyślnie!");
            if (successRef.current) {
                gsap.fromTo(successRef.current, {y: -12, opacity: 0}, {
                    y: 0,
                    opacity: 1,
                    duration: 0.45,
                    ease: "power2.out"
                });
            }

            // wyczyść i localStorage
            window.setTimeout(() => {
                setCurrentStep(0);
                setAnswers({step0: [], step1: null, step2: null, step3: null, step4: null, step5: null});
                setFormData({name: "", surname: "", phone: "", email: "", notes: "", zipcode: ''});
                setTouched({name: false, surname: false, phone: false, email: false, zipcode:false});
                setSuccessMessage("");
                if (typeof window !== "undefined") localStorage.removeItem(LS_KEY);
            }, 2400);
        } catch (err: unknown) {
            const msg = err instanceof Error ? err.message : "Nie udało się wysłać formularza";
            setErrorMessage(msg);
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <div className={`${lato.className} relative w-full max-w-[1100px] flex flex-col items-center gap-2  sm:p-6`}>
            {/* Progress bar */}
            <ProgressBar progressRefs={progressRefs}/>

            {/* Animowany kontener */}
            <div ref={containerRef} className=" relative overflow-hidden min-h-[360px] w-full max-w-[1200px]"
                 aria-live="polite">
                <div className="step-content  old absolute top-0 left-0 w-full pointer-events-none flex justify-center">
                    {RenderStep({
                        answers,
                        stepIndex: currentStep,
                        setAnswers,
                        formData,
                        setFormData,
                        touched,
                        setTouched,
                        successMessage,
                        errorMessage,
                        successRef,
                        goNext
                    })}
                </div>
                <div className="step-content new relative w-full flex justify-center">
                    {RenderStep({
                        answers,
                        stepIndex: currentStep,
                        setAnswers,
                        formData,
                        setFormData,
                        touched,
                        setTouched,
                        successMessage,
                        errorMessage,
                        successRef,
                        goNext
                    })}
                </div>
            </div>
            {currentStep === 7 && <h2 className={'text-[10px] max-w-[600px] text-center'}>Mit dem Klick auf den untenstehenden Button senden
                Sie Ihre Anfrage zur Vermittlung, erklären Ihr Einverständnis mit unseren AGB und bestätigen, die
                <Link href = '/privacy-policy' className={'hover:cursor-pointer text-decoration-line'}>{` `}<span className={'text-decoration-line'}>Datenschutzerklärung</span></Link> gelesen zu haben. Zudem dürfen wir Ihnen per E-Mail Informationen zu ähnlichen
                Produkten und Dienstleistungen zusenden. Sie können <a href="mailto:info@lewandowski-bau.com">{`hier `}</a>
                dieser Nutzung jederzeit kostenlos
                widersprechen.
            </h2>}
            {/* Nawigacja */}
            <Nav formData = {formData} currentStep={currentStep} isLoading={isLoading} setDirection={setDirection}
                 setCurrentStep={setCurrentStep} answers={answers} isFormValid={isFormValid}
                 handleSubmit={handleSubmit}/>
        </div>
    );
}

