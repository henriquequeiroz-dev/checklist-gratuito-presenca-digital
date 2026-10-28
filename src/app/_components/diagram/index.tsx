"use client"

import resultsData from "./results.json";
import recommendationsData from "./recommendations.json";
import type { CategoryValue } from "@/types/diagnosis";


import {
    CircleAlert,
    TriangleAlert,
    CircleCheck
} from "lucide-react";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

//--------------------------------------------------------------------------

const resultIcons = {
    "circle-alert": CircleAlert,
    "triangle-alert": TriangleAlert,
    "circle-check": CircleCheck,
};

const statusStyles = {
    danger: "text-red-600 bg-red-50 border-red-200",
    warning: "text-amber-600 bg-amber-50 border-amber-200",
    success: "text-green-600 bg-green-50 border-green-200",
};

//--------------------------------------------------------------------------

type ResultIconValue =
    | "circle-alert"
    | "triangle-alert"
    | "circle-check";

type ResultStatus =
    | "danger"
    | "warning"
    | "success";

type ResultRange =
    | "low"
    | "medium"
    | "high";

//--------------------------------------------------------------------------

interface ResultProps {
    selectedAnswers: string[];
}

interface CategoryScore {
    category: CategoryValue;
    score: number;
}

interface ResultData {
    min: number;
    max: number;
    status: ResultStatus;
    icon: ResultIconValue;
    label: string;
    title: string;
    description: string;
}
//--------------------------------------------------------------------------

export function Result({ selectedAnswers }: ResultProps) {

    function calculateCategoryScore(category: CategoryValue) {
        const checkedAnswers = selectedAnswers.filter((id) =>
            id.startsWith(`${category}-`)
        ).length;

        return (checkedAnswers / 4) * 100;
    }

    const siteScore = calculateCategoryScore("page");
    const instagramScore = calculateCategoryScore("instagram");
    const googleScore = calculateCategoryScore("google");
    const whatsappScore = calculateCategoryScore("whatsapp");
    const landingPageScore = calculateCategoryScore("landingpage");
    const automationScore = calculateCategoryScore("automation");

    const totalScore = (
        siteScore +
        instagramScore +
        googleScore +
        whatsappScore +
        landingPageScore +
        automationScore
    ) / 6;

    const roundedTotalScore = Math.round(totalScore);

    function getRange(score: number): ResultRange {
        if (score <= 39) return "low";
        if (score <= 69) return "medium";
        return "high";
    }

    const results = resultsData as Record<ResultRange, ResultData>;

    const range = getRange(roundedTotalScore);
    const result = results[range];

    const ResultIcon = resultIcons[result.icon]


    //--------------------------------------------------------------------------

    const categoryScores: CategoryScore[] = [
        { category: "page", score: siteScore },
        { category: "instagram", score: instagramScore },
        { category: "google", score: googleScore },
        { category: "whatsapp", score: whatsappScore },
        { category: "landingpage", score: landingPageScore },
        { category: "automation", score: automationScore }
    ];

    const sortedCategories = [...categoryScores].sort(
        (a, b) => a.score - b.score
    );
    const lowestCategories = sortedCategories.slice(0, 3);

    //--------------------------------------------------------------------------

    const recommendations = lowestCategories.map((item) => {
        const range = getRange(item.score);

        return {
            category: item.category,
            score: item.score,
            range,
            recommendation: recommendationsData[item.category][range],
        };
    });

    return (

        <section className="mt-3">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-6">

                <div>

                    <div className="flex flex-col text-[#020F43] space-y-2">
                        <p className="text-[10px] font-bold">SEU RESULTADO</p>
                        <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight">Seu diagnóstico digital</p>
                        <p className="text-sm sm:text-base lg:text-md font-light leading-relaxed">Com base nas suas respostas, calculamos o nível digital do seu
                            negócio e mostramos as principais oportunidades de melhoria.
                        </p>

                    </div>

                    <div className="
                            flex
                            flex-col
                            items-center
                            gap-4
                            mt-4

                            lg:flex-row
                            lg:items-center
                            lg:gap-6
                        ">

                        <div className="
                            w-44 h-44 sm:w-52 sm:h-52
                            rounded-full flex items-center justify-center"
                            style={{
                                background: `conic-gradient(
                            #0340E9 ${roundedTotalScore}%,
                            #E2E8F0 ${roundedTotalScore}% 100%
                            )`,
                            }}
                        >
                            <div className="
                                w-34 h-34 sm:w-40 sm:h40
                                rounded-full bg-white flex flex-col items-center justify-center
                            ">
                                <span className="text-4xl sm:text-5xl font-extrabold text-[#020F43]">
                                    {roundedTotalScore}
                                </span>
                                <span className="text-sm text-[#94A3B8]">
                                    / 100
                                </span>
                            </div>
                        </div>

                        {roundedTotalScore !== 0 && (
                            <div className="
                                flex flex-col
                                items-center
                                text-center

                                lg:items-start
                                lg:text-left
                            ">

                                <div className={`flex items-center gap-2 border rounded-full px-4 py-2
                                    ${statusStyles[result.status]}
                                `}
                                >
                                    <ResultIcon size={20} />
                                    <span className="font-bold">
                                        {result.label}
                                    </span>
                                </div>

                                <h3 className="text-[#020F43] text-xl font-extrabold mt-5">
                                    {result.title}
                                </h3>

                                <p className="text-[#64748B] text-sm leading-relaxed mt-2 max-w-md">
                                    {result.description}
                                </p>
                            </div>

                        )}
                    </div>

                </div>

                <div className="w-full">
                    <h2 className="text-[#020F43] text-lg sm:text-xl font-extrabold mb-5">Principais recomendações para você</h2>

                    {roundedTotalScore !== 0 && (

                        <Accordion className="space-y-3">
                            {recommendations.map((item) => (

                                <AccordionItem
                                    key={item.category}
                                    value={item.category}
                                    className="border border-[#DCE4F0] rounded-xl px-3 sm:px-4 bg-white"
                                >

                                    <AccordionTrigger className="hover:no-underline cursor-pointer">
                                        <div className="flex flex-col items-start text-left">
                                            <span className="text-[#020F43] font-bold">
                                                {item.recommendation.title}
                                            </span>

                                            <span className="text-[#64748B] text-sm font-normal mt-1">
                                                {item.recommendation.subtitle}
                                            </span>
                                        </div>
                                    </AccordionTrigger>

                                    <AccordionContent className="text-[#64748B] text-sm leading-relaxed pb-4">
                                        {item.recommendation.description}
                                    </AccordionContent>

                                </AccordionItem>

                            ))}

                        </Accordion>

                    )}

                </div>

            </div>
        </section>

    );
}