import MultiStepForm from "@/components/form/form";
import Link from "next/link";
import {InfoIcon} from "lucide-react";

export default function Home() {
    return (
        <div
            className="flex flex-col w-full items-center justify-center sm:gap-10  bg-[#ebf1f2] ">
            <main className="mm flex flex-col gap-6 sm:gap-20 row-start-2 items-center w-full relative p-4 sm:p-8 md:p-10 min-h-[95vh] sm:min-h-0" >
                <div className={'flex flex-col items-center gap-4 text-center'}>
                    <h1 className={'text-[26px] sm:text-[38px] font-bold'}>5-Minuten-Fensterberatung</h1>
                    <h2 className={'text-[15px] sm:text-[21px] font-light'}>Erfahren Sie, wie viel Sie sparen können – und sichern Sie sich ein unverbindliches Angebot.</h2>
                </div>
                <MultiStepForm/>
                <div className={'text-slate-600 text-[14px] sm:text-[18px] flex flex-row items-center'}>
                    <InfoIcon className={'mr-4'}/>Der Service ist für Sie komplett kostenfrei und unverbindlich.
                </div>
            </main>
            <footer
                className="row-start-3 flex flex-col items-center gap-5 justify-center min-h-[80px] w-full bg-white py-5 border border-t-slate-300 shadow-[rgba(0,0,15,0.12)_10px_-4px_5px_0px]">

                <div
                    className={'w-full  text-[14px] text-slate-700 flex justify-center bg-white items-center'}>
                   <Link href={'/privacy-policy'} className={'pr-4 border-r-solid border-r-[1px] border-r-slate-300 hover:opacity-80'}>Datenschutzerklärung</Link>
                    <Link href={'/cookies'} className={'ml-4 hover:opacity-80'}>Cookies</Link>
                </div>
                <div className={'w-full text-[12px] text-slate-600 flex justify-center items-center '}>
                    © 2025 hierfenster.de Alle Rechte vorbehalten.
                </div>

            </footer>
        </div>
    );
}
