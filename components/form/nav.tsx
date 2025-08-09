import {ChevronLeft, ChevronRight, Send} from "lucide-react";
import {STEPS} from "@/data/steps";
import {Dispatch, SetStateAction} from "react";
import {Answers, Direction} from "@/components/form/types";


interface NavProps {
    currentStep: number;
    isLoading: boolean,
    setDirection: Dispatch<SetStateAction<Direction>>,
    setCurrentStep: Dispatch<SetStateAction<number>>,
    answers: Answers,
    isFormValid: boolean,
    handleSubmit: () => Promise<void>
}


export default function Nav({
                                currentStep,
                                isLoading,
                                setDirection,
                                setCurrentStep,
                                handleSubmit,
                                answers,
                                isFormValid
                            }: NavProps) {

    const goNext = () => {
        if (currentStep >= STEPS.length - 1) return;
        setDirection("forward");
        setCurrentStep((s) => s + 1);
    };

    const goBack = () => {
        if (currentStep <= 0) return;
        setDirection("backward");
        setCurrentStep((s) => s - 1);
    };

    // —— walidacja „Naprzód”
    const stepDef = STEPS[currentStep];
    const canGoNext =
        stepDef.type === "multi"
            ? (answers.step0?.length || 0) > 0
            : stepDef.type === "single"
                ? Boolean(answers[stepDef.field])
                : true;
    return (
        <div className="flex justify-between mt-6">
            <button
                type="button"
                onClick={goBack}
                disabled={currentStep === 0 || isLoading}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border bg-white hover:bg-gray-50 disabled:opacity-50"
            >
                <ChevronLeft size={18}/> Wstecz
            </button>

            {currentStep < STEPS.length - 1 ? (
                <button
                    type="button"
                    onClick={goNext}
                    disabled={!canGoNext || isLoading}
                    className="ml-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
                >
                    Naprzód <ChevronRight size={18}/>
                </button>
            ) : (
                <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isLoading || !isFormValid}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 disabled:opacity-50"
                >
                    {isLoading ? "Wysyłanie…" : <>Wyślij <Send size={18}/></>}
                </button>
            )}
        </div>
    )
}