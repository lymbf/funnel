import MultiStepForm from "@/components/form/form";

export default function Home() {
    return (
        <div
            className="flex flex-col w-full items-center justify-center  p-4 sm:p-8 pb-20 gap-10 md:p-10 bg-[#ebf1f2]">
            <main className="mm flex flex-col gap-8 sm:gap-20 row-start-2 items-center w-full relative">
                <div className={'flex flex-col items-center gap-4 text-center'}>
                    <h1 className={'text-[33px] sm:text-[42px] font-bold'}>Die 3-Minuten-Fenster-Beratung</h1>
                    <h2 className={'text-[18px] sm:text-[20px] font-light'}>Die 3-Minuten-Fenster-Beratung Die
                        3-Minuten-Fenster-Beratung Die 3-Minuten-Fenster-Beratung</h2>
                </div>
                <MultiStepForm/>
            </main>
            <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center min-h-[80px] w-full">

            </footer>
        </div>
    );
}
