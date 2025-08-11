import {ChevronLeft, ChevronRight, Send} from "lucide-react";
import {STEPS} from "@/data/steps";
import {Dispatch, SetStateAction, useEffect} from "react";
import {Answers, Direction, FormState} from "@/components/form/types";
import {zipcodeRegex} from "@/components/form/validation";

interface NavProps {
    currentStep: number;
    isLoading: boolean,
    setDirection: Dispatch<SetStateAction<Direction>>,
    setCurrentStep: Dispatch<SetStateAction<number>>,
    answers: Answers,
    isFormValid: boolean,
    handleSubmit: () => Promise<void>,
    formData: FormState,
}


export default function Nav({
                                currentStep,
                                isLoading,
                                setDirection,
                                setCurrentStep,
                                handleSubmit,
                                answers,
                                isFormValid,
                                formData
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


   /*  validate forward  */
    const stepDef = STEPS[currentStep];
    const canGoNext =
        stepDef.type === "multi"
            ? (answers.step0?.length || 0) > 0
            : stepDef.type === "single"
                ? Boolean(answers[stepDef.field])
                : true;
    const checkZipcodeDisabledButton = () => {
        if (currentStep === 6 && !zipcodeRegex.test(formData.zipcode.trim())) {
            return true
        } else {
            return false
        }
    }

    /*  handle Go Next via enter  */
    useEffect(() => {
        const validateNext = ()=>{
            if( stepDef.type === "multi") return (answers.step0?.length || 0) > 0
            if(stepDef.type === 'single') return Boolean(answers[stepDef.field])
            if(stepDef.type === 'zipCode') return zipcodeRegex.test(formData.zipcode.trim())
            return true
        }
        const validateButton = ()=>{
            return  validateNext()  && !isLoading
        }
        const handleKeyPress = (e:KeyboardEvent)=>{

            if (e.key === 'Enter'){
                e.preventDefault()
                if(validateButton()){
                    goNext()
                }
            }
        }
        window.addEventListener('keypress', handleKeyPress)
        return ()=>{removeEventListener('keypress', handleKeyPress)}
    }, [answers, currentStep, formData]);


    return (
        <div className="flex justify-between mt-4 sm:mt-6">
            <button
                type="button"
                onClick={goBack}
                disabled={currentStep === 0 || isLoading}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border bg-white hover:bg-gray-50 disabled:opacity-50"
            >
                <ChevronLeft size={18}/> Zurück
            </button>

            {currentStep < STEPS.length - 1 ? (
                <button
                    type="button"
                    onClick={goNext}
                    disabled={!canGoNext || isLoading || checkZipcodeDisabledButton()}
                    className="ml-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all duration-100 disabled:opacity-50"
                >
                    Weiter <ChevronRight size={18}/>
                </button>
            ) : (
                <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isLoading || !isFormValid}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 disabled:opacity-50"
                >
                    {isLoading ? "Wysyłanie…" : <>Senden <Send size={18}/></>}
                </button>
            )}
        </div>
    )
}