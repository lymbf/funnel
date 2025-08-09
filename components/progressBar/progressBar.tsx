"use client"


import {STEPS} from "@/data/steps";
import {RefObject} from "react";

interface Props{
    progressRefs:RefObject<(HTMLDivElement | null)[]>;
}

export default function ProgressBar({ progressRefs}:Props){


    return(
        <div className="flex gap-2 mb-6 w-full max-w-[800px]">
            {STEPS.map((_, i) => (
                <div key={i} className="flex-1 h-[5px] rounded-full bg-gray-200 overflow-hidden">
                    <div
                        ref={(el: HTMLDivElement | null) => {
                            progressRefs.current[i] = el;
                        }}
                        
                        className="h-full  bg-accent to-indigo-500"
                    />
                </div>
            ))}
        </div>
    )
}