import { NextResponse, type NextRequest } from "next/server";
import {Resend} from "resend";
import {homePhoneRegex, mobilePhoneRegex} from "@/components/form/validation";

const resend = new Resend(process.env.RESEND_API_KEY);
interface Payload{
    phone:string,
    leadID:string
}
export async function POST(req:NextRequest){
    try{
        const body = (await req.json()) as Partial<Payload>;
        const phone = body.phone?.trim() ?? "";
        const leadID = body.leadID?.trim() ?? "";

        if(!phone && !mobilePhoneRegex.test(phone) && !homePhoneRegex.test(phone)){
            return NextResponse.json({message:'Ungültige Telefonnummer.'}, {status:400})
        }

        const html = `
         <h1>Followup do zgoszenia numer: ${leadID}</h1>
           <p><strong>Numer telefonu:</strong> ${phone}</p>
        `
        console.log('email string: ', html)
        await resend.emails.send({
            from: 'lead@hierfenster.de',
            to: "info@lewandowski-bau.com",
            subject: `Followup do złoszenia nr: ${leadID}`,
            html,
        });

        return NextResponse.json({ message: "Vielen Dank für die Übermittlung Ihrer Telefonnummer, wir melden uns umgehend!" }, { status: 200 });

    }catch(err){
        return NextResponse.json({ message: "Fehler beim Senden des Formulars." }, { status: 500 });

    }
}