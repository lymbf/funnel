"use client"

import {useRef, useState} from "react";
import {cn} from "@/lib/utils";
import Field from "@/components/form/field";
import {homePhoneRegex, mobilePhoneRegex} from "@/components/form/validation";
import {useRouter, useSearchParams} from "next/navigation";
import {CheckCircle2, Send} from "lucide-react";


interface TouchedPhoneState {
    phone: boolean
}

export default function PhoneForm({className}: { className?: string }) {
    const router = useRouter()
    const searchParams = useSearchParams()
    const leadID = searchParams.get('id')
    const [formData, setFormData] = useState({phone: '', leadID: leadID})
    const [touched, setTouched] = useState<TouchedPhoneState>({
        phone: false,
    });
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [successMessage, setSuccessMessage] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("");
    const successRef = useRef(null)
    const [sent, setSent] = useState<boolean>(false);

    const error = {
        phone: !formData.phone.trim()
            ? "Pflichtfeld"
            : (!mobilePhoneRegex.test(formData.phone.trim()) && !homePhoneRegex.test(formData.phone.trim()))
                ? "Bitte eine gültige Nummer eingeben."
                : "",
    }

    const submit = async () => {
        setTouched({phone: true})
        setIsLoading(true);
        setErrorMessage("");
        setSuccessMessage("");

        try {
            const payload = {
                phone: formData.phone.trim(),
                leadID: formData.leadID?.trim()
            }
            const res = await fetch("/api/phoneForm", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(payload),
            });
            const data = (await res.json()) as { message?: string };
            if (!res.ok) throw new Error(data?.message || "Fehler beim Senden des Formulars.");

            setSuccessMessage(data?.message || "Formular erfolgreich gesendet.");
            setSent(true)
            setIsLoading(false)
            if (successRef.current) {
                gsap.fromTo(successRef.current, {y: -12, opacity: 0}, {
                    y: 0,
                    opacity: 1,
                    duration: 0.45,
                    ease: "power2.out"
                });
            }
            setTimeout(() => {
                router.push('/')
            }, 3000)
        } catch (err) {
            const msg = err instanceof Error ? err.message : "Etwas ist schiefgelaufen.";
            setErrorMessage(msg);
        }
    }

    return (
        <div className={cn('flex flex-col items-center', className)}>
            {!sent && <Field label={'Telefonnummer'} name={'phone'} value={formData.phone}
                    onChange={(e) => setFormData((p) => ({...p, phone: e.target.value}))}
                    onBlur={() => setTouched((t) => ({...t, phone: true}))}
                             required = {true}
                    error={touched.phone ? error.phone : ""}
            />}

            {/*   success/error box  */}
            <div className="mt-3">
                {isLoading && <p className="text-blue-600">Senden des Formulars…</p>}
                {successMessage && (
                    <p ref={successRef} className="text-green-600 font-semibold flex items-center gap-2">
                        <CheckCircle2 size={18}/> {successMessage}
                    </p>
                )}
                {errorMessage && <p className="text-red-600 font-semibold">{errorMessage}</p>}
            </div>
            {/*  send button  */}
            {!sent && <button
                type="button"
                onClick={submit}
                disabled={error.phone.length ? true : false}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-white hover:opacity-80 disabled:opacity-50"
            >
                {isLoading ? "Wysyłanie…" : <>Senden <Send size={18}/></>}
            </button>}

        </div>
    )
}