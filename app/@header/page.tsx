import {cn} from "@/lib/utils";
import Image from "next/image";
import {Phone} from "lucide-react";

export default function Page() {
    return (
        <div
            className={cn('h-[90px] w-full flex items-center justify-center',
                'drop-shadow-lg bg-white border-b-solid border-b-[1px] border-b-slate-100 ')}>
            <div className={'w-full max-w-[1200px] flex items-center justify-between px-4 sm:px-0'}>
                <Image className={'h-[30px] sm:h-[50px] w-auto'} src={'/images/logo/logo_light_blue_expanded.svg'} alt={'logo'} width={733.5} height={137}
                      />
                <div className={'flex flex-row items-center'}>
                    <Phone size = {32} className={'w-[28px] sm:w-[40px] stroke-black mr-2 sm:mr-4'}/>
                    <div className={'flex flex-col flex-start '}>
                        <p className={'text-[13px] font-medium'}>Habt Ihr Fragen?</p>
                        <p className={'text-[16px] sm:text-[26px] font-medium text-accent'}>0800 89 87 65 3</p>
                    </div>

                </div>
            </div>
        </div>
    )
}