"use client"

import { useState } from "react"
import logoImg from "@/../public/logo.png";
import bgHeroImg from "@/../public/h-bg.png";
import Image from "next/image";

import { FaArrowRight, FaWhatsapp, FaCheck } from "react-icons/fa";
import { BsBarChartFill } from "react-icons/bs";
import { IoFlash, IoMenu, IoClose } from "react-icons/io5";

export function Hero() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="w-full min-h-screen relative overflow-hidden
            bg-[linear-gradient(110deg,#020F43_0%,#0340E9_55%,#4443B8_100%)]
            lg:h-140 lg:min-h-0 lg:bg-none lg:rounded-b-[15%]">
            <Image
                src={bgHeroImg}
                alt="Background Image"
                placeholder="blur"
                quality={75}
                fill
                sizes="100vw"
                style={{
                    objectFit: "cover",
                }}
                className="-z-10 object-cover object-center brightness-65 hidden lg:block relative"
            />
            <section id="inicio" className="container mx-auto mb-3 mt-3 relative z-10">

                <article className="grid grid-cols-1 lg:grid-cols-[1024px_minmax(0,1fr)] lg:items-center lg:gap-6">

                    <div className="flex gap-6 items-center justify-between">
                        <div className="flex items-center justify-center overflow-hidden">
                            <Image
                                src={logoImg}
                                alt="Logo image"
                                width={220}
                                className="w-25 sm:w-35 ml-5 h-auto"
                            />
                            <p className="text-white text-[10px] font-bold ml-[-20]">SOLUÇÕES<br />DIGITAIS</p>



                        </div>

                        <button
                            className="text-white text-3xl lg:hidden mr-10"
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label={menuOpen ? "Fechar Menu" : "Abrir Menu"}
                            aria-expanded={menuOpen}
                            aria-controls="header-navigation"
                        >
                            {menuOpen ? <IoClose size={28} /> : <IoMenu size={28} />}
                        </button>


                        <nav className={`
                            ${menuOpen ? "flex" : "hidden"}
                            text-white font-bold flex-col items-center justify-center gap-5 py-5 text-[12px] mr-10
                            whitespace-nowrap lg:flex lg:flex-row lg:justify-normal lg:gap-4 lg:py-0
                            `}
                        >
                            <a href="#inicio">Início</a>
                            <a href="#diagnostico">Diagnóstico</a>
                            <a href="#beneficios">Benefícios</a>
                            <a href="#contato">Contato</a>
                        </nav>



                        <div className="hidden lg:block">
                            <a href="#diagnostico" className="text-white font-bold text-[12px]
                                flex items-center justify-center gap-2 border-2 border-[#0a45e7] px-4 py-2
                            rounded-lg bg-[#002ba1] hover:scale-105 duration-300 transition-all"
                            >Fazer diagnóstico
                                <FaArrowRight />
                            </a>
                        </div>

                    </div>
                </article>

                <article className="flex mt-5">
                    <div>
                        <div className="flex flex-col space-y-3 mb-8 items-center text-center lg:items-start lg:text-left lg:mb-15">
                            <h1 className="text-white font-extrabold text-3xl lg:text-5xl mb-8">Raio-X Digital
                                <span className="text-[#ffffff] lg:text-[#3166f8]"> 360°</span></h1>
                            <p className="text-white font-bold text-wrap text-sm lg:text-2xl max-w-xl">Descubra em poucos minutos o nível digital do seu
                                negócio e identifique oportunidades de crescimento.
                            </p>
                        </div>

                        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center mb-8 lg:justify-start lg:mb-10">
                            <a target="_blank" rel="noopener noreferrer" href="/checklist.pdf" className="text-white font-bold text-[12px]
                                flex items-center justify-center gap-2 border-2 border-[#0340E9] px-4 py-2
                            rounded-lg bg-[#002ba1] hover:scale-105 duration-300 transition-all"
                            >
                                <BsBarChartFill />
                                Fazer diagnóstico gratuito
                                <FaArrowRight />
                            </a>

                            <a target="_blank" href="https://wa.me/5534988307190?text=Olá%20Henrique,%20vi%20seu%20perfil%20e%20gostaria%20de%20agendar%20um%20diagnóstico%20digital%20para%20minha%20empresa."
                                className="text-white font-bold text-[12px]
                                flex items-center justify-center gap-2 border-2 border-[#01be60] px-4 py-2
                                rounded-lg bg-[#038846] hover:scale-105 duration-300 transition-all"
                            >
                                <FaWhatsapp size={20} />
                                Falar no WhatsApp
                            </a>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 mx-auto gap-3 justify-center lg:mx-0">

                            <div className="text-white flex items-center gap-3 justify-start w-62.5 mx-auto">
                                <div className="bg-[#22419A] p-3 rounded-full">
                                    <IoFlash size={20} />
                                </div>
                                <p className="font-bold text-[14px]">Rápido<br /><span className="text-[12px]">Leva menos de 3 minutos</span></p>
                            </div>

                            <div className="text-white flex items-center gap-3 justify-start w-62.5 mx-auto">
                                <div className="bg-[#2939b1] p-3 rounded-full">
                                    <FaCheck size={20} />
                                </div>
                                <p className="font-bold text-[14px]">Gratuito<br /><span className="text-[12px]">Sem compromisso</span></p>
                            </div>

                            <div className="text-white flex items-center gap-3 justify-start w-62.5 mx-auto">
                                <div className="bg-[#1D4BA4] p-3 rounded-full">
                                    <BsBarChartFill size={20} />
                                </div>
                                <p className="font-bold text-[14px]">Resultados práticos<br /><span className="text-[12px]">Com recomendações reais</span></p>
                            </div>
                        </div>

                    </div>
                </article>
            </section>
        </div>
    );
}