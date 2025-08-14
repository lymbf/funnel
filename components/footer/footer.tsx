"use client"
import Link from "next/link";

export default function Footer(){

    function handleClick(e: React.MouseEvent) {
        e.preventDefault();
        if (typeof window !== "undefined" && window.showCookieBanner) {
            window.showCookieBanner();
        }
    }

    return (
        <footer
            className="row-start-3 flex flex-col items-center gap-5 justify-center min-h-[80px] w-full bg-white py-5 border border-t-slate-300 shadow-[rgba(0,0,15,0.12)_10px_-4px_5px_0px]">

            <div
                className={'w-full  text-[14px] text-slate-700 flex justify-center bg-white items-center'}>
                <Link href={'/privacy-policy'}
                      className={'pr-4 border-r-solid border-r-[1px] border-r-slate-300 hover:opacity-80'}>Datenschutzerklärung</Link>
                <Link href={'/cookies'} className={'ml-4 hover:opacity-80 border-r-[1px] border-r-slate-300 pr-4'}>Cookies</Link>
                <div className={'hover:opacity-80 ml-4 hover:cursor-pointer'}
                    onClick={handleClick}
                >Cookie-Einstellungen ändern</div>
            </div>
            <div className={'w-full text-[12px] text-slate-600 flex justify-center items-center '}>
                © 2025 hierfenster.de Alle Rechte vorbehalten.
            </div>

        </footer>
    )
}