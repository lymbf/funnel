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
import Three_windows from "@/components/svgs/three_windows";
import Six_windows from "@/components/svgs/six_windows";
import Ten_windows from "@/components/svgs/ten_windows";
import Double_glass from "@/components/svgs/double_glass";
import Triple_glass from "@/components/svgs/triple_glass";
import Check from "@/components/svgs/check";

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
        question: "Wie viele neue Fenster benötigen Sie insgesamt? (Alle Fenstertypen)",
        options: [
            { id: 1, title: "1 bis 2 Fenster", Icon: Single_window  },
            { id: 2, title: "3 bis 5 Fenster", Icon: Three_windows },
            { id: 3, title: "6 bis 15 Fenster", Icon: Six_windows  },
            { id: 4, title: "Mehr als 15 Fenster", Icon: Ten_windows  },
            { id: 5, title: "Weiß nicht", Icon: Question_mark  },
        ],
    },
    {
        type: "single",
        field: "step2",
        question: "Wie stark sollen Ihre neuen Fenster isoliert sein?",
        options: [
            { id: 1, title: "Zweifach-Verglasung", Icon: Double_glass  },
            { id: 2, title: "Dreifach-Verglasung", Icon: Triple_glass  },
            { id: 3, title: "Weiß nicht", Icon: Question_mark  },
        ],
    },
    {
        type: "single",
        field: "step3",
        question: "Welches Material bevorzugen Sie für Ihre Fensterrahmen?",
        options: [
            { id: 1, title: "Ich bin offen für Empfehlungen", Icon: Check },
            { id: 2, title: "Kunststoffrahmen", Icon: Single_window },
            { id: 3, title: "Aluminium-/ Metallrahmen", Icon: Single_window  },
            { id: 4, title: "Holzrahmen", Icon: Single_window  },
            { id: 5, title: "Andere Materialien", Icon: Question_mark  },
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