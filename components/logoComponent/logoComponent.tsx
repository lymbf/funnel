"use client"

import Image from "next/image";

interface Props {
    className: string
}

export default function LogoComponent({className}: Props) {
    return (
        <>
            <Image onClick={() => {
                window.location.reload()
            }}
                   className={`h-[33px] sm:h-[55px] w-auto hover:cursor-pointer 
                        opacity-80 transition-all duration-100 
                         ${className}`}
                   src={'/images/logo/logo_light_blue_expanded_2.svg'} alt={'logo'} width={733.5}
                   height={137}
            />
        </>
    )
}