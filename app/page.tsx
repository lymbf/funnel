import MultiStepForm from "@/components/form/form";
import Link from "next/link";
import {InfoIcon} from "lucide-react";
import Footer from "@/components/footer/footer";

export default function Home() {
    return (
        <div
            className="flex flex-col w-full items-center justify-center sm:gap-10  bg-[#ebf1f2] ">
            <main className="mm flex flex-col gap-6 sm:gap-20 row-start-2 items-center w-full relative p-4 sm:p-8 md:p-10 min-h-[95vh] sm:min-h-0" >
                <div className={'flex flex-col items-center gap-4 text-center'}>
                    <h1 className={'text-[26px] sm:text-[38px] font-bold'}>2-Minuten-Fensterberatung</h1>
                    <h2 className={'text-[15px] sm:text-[21px] font-normal text-slate-700'}>Erfahren Sie, wie viel Sie sparen können – und sichern Sie sich ein unverbindliches Angebot.</h2>
                </div>
                <MultiStepForm/>
                <div className={'text-slate-600 text-[14px] sm:text-[18px] flex flex-row items-center'}>
                    <InfoIcon className={'mr-4'}/>Der Service ist für Sie komplett kostenfrei und unverbindlich.
                </div>
            </main>
            <Footer/>
        </div>
    );
}
