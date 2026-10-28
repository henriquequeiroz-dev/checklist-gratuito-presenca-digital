"use client"

import { useState } from "react"
import { Result } from "./diagram";
import { AccordionQuestions } from "./quiz";

export function Diagnosis() {
    const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);

    return (
        <div>
            <section id="diagnostico" className="container mx-auto mt-8 mb-3 relative px-4 lg:px-0">
                <article className="flex flex-col text-[#020F43] space-y-2">
                    <p className="text-[10px] font-bold">DIAGNÓSTICO</p>
                    <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight">Como está a presença digital do seu negócio?</p>
                    <p className="text-sm sm:text-base lg:text-lg font-bold leading-relaxed">Responda algumas perguntas e descubra em que pontos você pode melhorar</p>
                </article>
                <article className="mt-5 lg:mt-3">
                    <AccordionQuestions
                        selectedAnswers={selectedAnswers}
                        setSelectedAnswers={setSelectedAnswers}
                    />
                </article>
                <article className="bg-[#F5F9FE]">
                    <Result
                        selectedAnswers={selectedAnswers}
                    />
                </article>
            </section>
        </div>
    );
}