import {cn} from "@/lib/utils";
import Image from "next/image";

export default function Page(){
    return(
        <div className={cn('h-[90px] w-full drop-shadow-lg bg-white border-b-solid border-b-[1px] border-b-slate-100 ')}>
            <Image src={'/images/logo/logo_light_blue.svg'} alt={'logo'} width={733.5} height = {137}/>
        </div>
    )
}