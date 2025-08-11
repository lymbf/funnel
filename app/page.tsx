import MultiStepForm from "@/components/form/form";
import Link from "next/link";
import {InfoIcon} from "lucide-react";

export default function Home() {
    return (
        <div
            className="flex flex-col w-full items-center justify-center gap-10  bg-[#ebf1f2]">
            <main className="mm flex flex-col gap-8 sm:gap-20 row-start-2 items-center w-full relative p-4 sm:p-8 md:p-10" >
                <div className={'flex flex-col items-center gap-4 text-center'}>
                    <h1 className={'text-[33px] sm:text-[38px] font-bold'}>Die 3-Minuten-Fenster-Beratung</h1>
                    <h2 className={'text-[18px] sm:text-[21px] font-light'}>Erfahren Sie, wie viel Sie sparen können – und sichern Sie sich ein unverbindliches Angebot.</h2>
                </div>
                <MultiStepForm/>
                <div className={'text-slate-600 text-[18px] flex flex-row items-center'}>
                    <InfoIcon className={'mr-4'}/>Der Service ist für Sie komplett kostenfrei und unverbindlich.
                </div>
            </main>
            <footer
                className="row-start-3 flex flex-col items-center gap-5 justify-center min-h-[80px] w-full bg-white py-5 border border-t-slate-300 shadow-[rgba(0,0,15,0.12)_10px_-4px_5px_0px]">

                <div
                    className={'w-full  text-[14px] text-slate-700 flex justify-center bg-white items-center'}>
                   <Link href={'/privacy-policy'} className={'pr-4 border-r-solid border-r-[1px] border-r-slate-300 hover:opacity-80'}>Privacy Policy</Link>
                    <Link href={'/cookies'} className={'ml-4 hover:opacity-80'}>Cookies</Link>
                </div>
                <div className={'w-full text-[12px] text-slate-600 flex justify-center items-center '}>
                    © 2025 hierFenster.de Wszelkie prawa zastrzeżone.
                </div>

            </footer>
        </div>
    );
}
