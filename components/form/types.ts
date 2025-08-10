import {LucideIcon} from "lucide-react";
import {JSX} from "react";

type StepField = "step0" | "step1" | "step2" | "step3" | "step4" | "step5" | 'step6' | 'step7';

type Direction = "forward" | "backward";

type Option = {
    id: number;
    title: string;
    Icon: ({className}: {     className?: string | undefined; }) => React.JSX.Element
};

type MultiStep = {
    type: "multi";
    field: "step0";
    question: string;
    options: Option[];
};

type SingleStep = {
    type: "single";
    field: "step1" | "step2" | "step3" | "step4" | "step5";
    question: string;
    options: Option[];
};

type FormStep = {
    type: "form";
    field: "step7";
};

type ZipCodeStep = {
    type: 'zipCode';
    field: 'step6'
}

type Step = MultiStep | SingleStep | FormStep | ZipCodeStep;

interface Answers {
    step0: string[];
    step1: string | null;
    step2: string | null;
    step3: string | null;
    step4: string | null;
    step5: string | null
}

interface FormState {
    name: string;
    surname: string;
    phone: string;
    email: string;
    notes: string;
    zipcode:string;
}

interface TouchedState {
    name: boolean;
    surname: boolean;
    phone: boolean;
    email: boolean;
    zipcode:boolean;
}

export type {TouchedState, FormState, Answers, Step, FormStep, SingleStep, MultiStep, Option, Direction, StepField}