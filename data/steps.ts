import {
    Flame, Bolt, Waves, Sprout,
    Lightbulb, Cog, Package, Rocket,
    CalendarDays, CalendarRange, CalendarClock, Hourglass,
    Building2, Trees, Laptop, HelpCircle,
    PiggyBank, Wallet, Banknote, CircleHelp,
} from "lucide-react";
import {Step} from "@/components/form/types";
import Single_window from "@/components/svgs/single_window";
import Roof_window from "@/components/svgs/roof_window";
import Basement_window from "@/components/svgs/basement_window";
import Question_mark from "@/components/svgs/question_mark";

const STEPS: Step[] = [
    {
        type: "multi",
        field: "step0",
        question: "Welchen Fenstertyp möchten Sie einbauen oder austauschen lassen? (Mehrfachauswahl möglich)",
        options: [
            { id: 1, title: "Standardfenster", Icon: Single_window },
            { id: 2, title: "Dachfenster", Icon: Roof_window },
            { id: 3, title: "Kellerfenster", Icon: Basement_window  },
            { id: 4, title: "Andere Typen", Icon: Question_mark  },
        ],
    },
    {
        type: "single",
        field: "step1",
        question: "Jakiego rodzaju usługę wybierasz?",
        options: [
            { id: 1, title: "Opcja 1", Icon: Single_window  },
            { id: 2, title: "Opcja 2", Icon: Roof_window },
            { id: 3, title: "Opcja 3", Icon: Single_window  },
        ],
    },
    {
        type: "single",
        field: "step2",
        question: "Jak często korzystasz z usługi?",
        options: [
            { id: 1, title: "Codziennie", Icon: Single_window  },
            { id: 2, title: "Kilka razy w tygodniu", Icon: Single_window  },
            { id: 3, title: "Raz w miesiącu", Icon: Single_window  },
            { id: 4, title: "Rzadziej", Icon: Single_window  },
        ],
    },
    {
        type: "single",
        field: "step3",
        question: "W jakiej lokalizacji?",
        options: [
            { id: 1, title: "Miasto", Icon: Single_window },
            { id: 2, title: "Wieś", Icon: Single_window },
            { id: 3, title: "Online", Icon: Single_window  },
            { id: 4, title: "Inne", Icon: Single_window  },
        ],
    },
    {
        type: "single",
        field: "step4",
        question: "Jaki budżet?",
        options: [
            { id: 1, title: "Mały", Icon: Single_window  },
            { id: 2, title: "Średni", Icon: Single_window  },
            { id: 3, title: "Duży", Icon: Single_window  },
            { id: 4, title: "Nieokreślony", Icon: Single_window  },
        ],
    },
    { type: "form", field: "step5" },
];

export {STEPS}