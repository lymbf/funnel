import {cn} from "@/lib/utils";
import {Phone} from "lucide-react";
import LogoComponent from "@/components/logoComponent/logoComponent";

export default function Page() {
    return (
        <div
            className={cn('h-[90px] w-full flex items-center justify-center',
                'drop-shadow-lg bg-white border-b-solid border-b-[1px] border-b-slate-100 ')}>
            <div className={'w-full max-w-[1200px] flex items-center justify-between px-4 sm:px-0'}>

                <LogoComponent className={''}/>

                <div className={'flex flex-row items-center'}>
                    <Phone size={32} className={'w-[28px] sm:w-[40px] stroke-black mr-2 sm:mr-4'}/>
                    <div className={'flex flex-col flex-start '}>
                        <p className={'text-[13px] font-medium'}>Habt Ihr Fragen?</p>
                        <p className={'text-[16px] sm:text-[26px] font-medium text-accent'}>015 679 653 114</p>
                    </div>

                </div>
            </div>
        </div>
    )
}