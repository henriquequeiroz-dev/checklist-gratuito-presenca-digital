"use client"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

import { Checkbox } from "@/components/ui/checkbox"

import questionsData from "./questions.json";
import { useState } from "react";
import type { CategoryValue } from "@/types/diagnosis";

import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";

import siteIcon from "@/../public/site.png";
import instagramIcon from "@/../public/instagram.png";
import googleIcon from "@/../public/google.png";
import whatsappIcon from "@/../public/whatsapp.png";
import landingPageIcon from "@/../public/landing-page.png";
import automationIcon from "@/../public/automation.png";

interface QuestionCategory {
    value: CategoryValue;
    title: string;
    subtitle: string;
    trigger: string;
    content: QuestionItem[];
    tip: Tip;
}

interface QuestionItem {
    id: string;
    label: string;
}

interface Tip {
    title: string;
    description: string;
}

interface AccordionQuestionsProps {
    selectedAnswers: string[];
    setSelectedAnswers: React.Dispatch<React.SetStateAction<string[]>>;
}

const categoryIcons = {
    page: siteIcon,
    instagram: instagramIcon,
    google: googleIcon,
    whatsapp: whatsappIcon,
    landingpage: landingPageIcon,
    automation: automationIcon,
};

export function AccordionQuestions({ selectedAnswers, setSelectedAnswers, }: AccordionQuestionsProps) {

    const [activeCategory, setActiveCategory] = useState("");


    const categories = questionsData as QuestionCategory[];
    const selectedCategory = categories.find((category) => category.value === activeCategory)

    return (
        <div>
            <section className="px-4 lg:px-0">

                <div className="grid grid-cols-1 lg:grid-cols-[350px_minmax(0,1fr)] lg:gap-6">

                    <div className="w-full space-y-2">

                        {categories.map((category) => (
                            <button
                                type="button"
                                key={category.value}
                                onClick={() => setActiveCategory(category.value)}
                                className={`border-2 rounded-xl w-full flex
                                    px-3 py-3 lg:px-4
                                    items-center justify-between
                                    cursor-pointer transition-all duration-200
                            ${activeCategory === category.value
                                        ? "bg-[#E3EBFA] border-[#0340E9]"
                                        : "bg-[#EFF4FD] border-transparent hover:border-[#AEB6C9]"
                                    }
                            `}

                            >
                                <Image
                                    src={categoryIcons[category.value]}
                                    alt={category.title}
                                    width={50}
                                    height={50}
                                    className="w-10 h-10 sm:w-12 sm:h-12"
                                />

                                <div className="flex flex-col items-start">
                                    <span className="text-[#020F43] text-base lg:text-lg font-extrabold">{category.title}</span>
                                    <span className="text-[#AEB6C9] text-xs sm:text-sm">{category.subtitle}</span>
                                </div>

                                <IoIosArrowForward size={25} />
                            </button>
                        ))}
                    </div>
                    {selectedCategory && (

                        <div className="w-full bg-white border border-[#DCE4F0] rounded-2xl p-4 lg:p-6">



                            <div className="text-[#020F43] text-lg sm:text-xl font-extrabold mb-5 lg:mb-6">
                                <h2>{selectedCategory.trigger}</h2>
                            </div>


                            {selectedCategory?.content.map((item) => (
                                <div key={item.id} className="flex items-start gap-3 lg:gap-5 py-3 border-b border-[#E8EDF5]">
                                    <Checkbox
                                        id={item.id}
                                        checked={selectedAnswers.includes(item.id)}
                                        onCheckedChange={(checked) => {
                                            if (checked) {
                                                setSelectedAnswers((prev) => [...prev, item.id])
                                            } else {
                                                setSelectedAnswers((prev) =>
                                                    prev.filter((id) => id !== item.id)
                                                )
                                            }
                                        }}
                                    />
                                    <label htmlFor={item.id}
                                        className="
                                        flex-1
                                        text-[#334155]
                                        text-sm
                                        cursor-pointer
                                        leading-relaxed
                                        "
                                    >
                                        {item.label}
                                    </label>
                                </div>

                            ))}
                            <Accordion className="mt-5 lg:mt-6">
                                <AccordionItem
                                    value="tip"
                                    className="
                                    border border-[#DCE4F0]
                                    rounded-xl
                                    px-3 sm:px-4
                                    bg-[#F8FAFF]
                                    hover:border-[#0340E9]/40
                                    transition-colors
                                    duration-200
                                    "
                                >
                                    <AccordionTrigger
                                        className="
                                            text-[#020F43]
                                            font-bold
                                            text-xs
                                            sm:text-sm
                                            py-4                                          
                                            hover:no-underline
                                            cursor-pointer
                                            "
                                    >
                                        {selectedCategory?.tip.title}
                                    </AccordionTrigger>

                                    <AccordionContent
                                        className="
                                        text-[#64748B]
                                        text-sm
                                        leading-relaxed
                                        pb-4
                                        "
                                    >
                                        {selectedCategory?.tip.description}
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>

                        </div>

                    )}



                </div>
            </section>
        </div>
    );
}