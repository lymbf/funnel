import {LucideIcon} from "lucide-react";
import {JSX} from "react";

type StepField = "step0" | "step1" | "step2" | "step3" | "step4" | "step5";

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
    field: "step1" | "step2" | "step3" | "step4";
    question: string;
    options: Option[];
};

type FormStep = {
    type: "form";
    field: "step5";
};

type Step = MultiStep | SingleStep | FormStep;

interface Answers {
    step0: string[];
    step1: string | null;
    step2: string | null;
    step3: string | null;
    step4: string | null;
}

interface FormState {
    name: string;
    surname: string;
    phone: string;
    email: string;
    notes: string;
}

interface TouchedState {
    name: boolean;
    surname: boolean;
    phone: boolean;
    email: boolean;
}

export type {TouchedState, FormState, Answers, Step, FormStep, SingleStep, MultiStep, Option, Direction, StepField}