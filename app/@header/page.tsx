import {cn} from "@/lib/utils";
import Image from "next/image";
import {Phone} from "lucide-react";

export default function Page() {
    return (
        <div
            className={cn('h-[90px] w-full flex items-center justify-center',
                'drop-shadow-lg bg-white border-b-solid border-b-[1px] border-b-slate-100 ')}>
            <div className={'w-full max-w-[1200px] flex items-center justify-between'}>
                <Image src={'/images/logo/logo_light_blue.svg'} alt={'logo'} width={733.5} height={137}
                       style={{height: '50px', width:'auto'}}/>
                <div className={'flex flex-row items-center'}>
                    <Phone size = {32} className={' stroke-black mr-4'}/>
                    <div className={'flex flex-col flex-start'}>
                        <p className={'text-[14px] font-medium'}>Habt Ihr Fragen?</p>
                        <p className={'text-[26px] font-medium text-accent'}>0800 89 87 65 3</p>
                    </div>

                </div>
            </div>
        </div>
    )
}