import { NextResponse, type NextRequest } from "next/server";
import {Resend} from "resend";
// import { Resend } from "resend";
//
const resend = new Resend(process.env.RESEND_API_KEY);

//re_hdbi5AFW_PX56foY7KVEaLgPDE7Df6m4L
console.log('api key: ', process.env.RESEND_API_KEY)
type AnswersPayload = [string[], string | null, string | null, string | null, string | null, string | null];

interface FormPayload {
    name: string;
    surname: string;
    phone: string;
    email: string;
    zipcode:string;
    notes?: string;
    answers: AnswersPayload;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneDigits = (str: string): string => (str || "").replace(/\D/g, "");
const isPhoneValid = (str: string): boolean => {
    const d = phoneDigits(str);
    return d.length === 9 || (d.length === 11 && d.startsWith("48"));
};

export async function POST(req: NextRequest) {
    try {
        const body = (await req.json()) as Partial<FormPayload>;

        const name = body.name?.trim() ?? "";
        const surname = body.surname?.trim() ?? "";
        const phone = body.phone?.trim() ?? "";
        const email = body.email?.trim() ?? "";
        const zipcode = body.zipcode?.trim() ?? "";
        const notes = body.notes?.trim() ?? "";
        const answers = body.answers;

        console.log('asw length: ', answers?.length)
        console.log('answers: ', answers)
        // Walidacja podstawowa
        if (!name || !surname || !phone || !email) {
            return NextResponse.json({ message: "Proszę wypełnić wszystkie wymagane pola" }, { status: 400 });
        }
        if (!emailRegex.test(email)) {
            return NextResponse.json({ message: "Niepoprawny adres e-mail" }, { status: 400 });
        }
        if (!isPhoneValid(phone)) {
            return NextResponse.json({ message: "Niepoprawny numer telefonu" }, { status: 400 });
        }
        if (!answers || !Array.isArray(answers) || answers.length !== 6) {
            return NextResponse.json({ message: "Brak kompletu odpowiedzi z formularza" }, { status: 400 });
        }

        const [multi, s1, s2, s3, s4, s5] = answers;

        const html = `
      <h1>Nowe zgłoszenie</h1>
      <p><strong>Imię:</strong> ${name}</p>
      <p><strong>Nazwisko:</strong> ${surname}</p>
      <p><strong>Telefon:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Zip Code:</strong> ${zipcode}</p>
      <p><strong>Uwagi:</strong> ${notes || "(brak)"}</p>
      <hr />
      <h2>Odpowiedzi:</h2>
      <ol>
        <li><strong>Krok 1:</strong> ${Array.isArray(multi) && multi.length ? multi.join(", ") : "—"}</li>
        <li><strong>Krok 2:</strong> ${s1 ?? "—"}</li>
        <li><strong>Krok 3:</strong> ${s2 ?? "—"}</li>
        <li><strong>Krok 4:</strong> ${s3 ?? "—"}</li>
        <li><strong>Krok 5:</strong> ${s4 ?? "—"}</li>
          <li><strong>Krok 6:</strong> ${s5 ?? "—"}</li>
      </ol>
    `;
        console.log('email string: ', html)
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: "the.prommers.pl@gmail.com",
            subject: "Nowe zgłoszenie z formularza",
            html,
        });

        return NextResponse.json({ message: "Formularz wysłany pomyślnie!" }, { status: 200 });
    } catch (error) {
        console.error("Błąd wysyłki:", error);
        return NextResponse.json({ message: "Błąd wysyłki formularza" }, { status: 500 });
    }
}