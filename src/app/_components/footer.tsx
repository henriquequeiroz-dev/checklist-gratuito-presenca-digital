import { FaWhatsapp, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

import logoImg from "../../../public/logo-image-bg-blue.png";
import Image from "next/image";

export function Footer() {
    return (
        <footer className="container mx-auto mt-10 px-4 lg:px-0">
            <div className="
                rounded-2xl px-5 py-8 sm:px-6
                lg:px-10 lg:py-10
                bg-[linear-gradient(110deg,#020F43_0%,#0340E9_60%,#4443B8_100%)]
            ">
                <div id="beneficios" className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:items-center">

                    <div className="
                        text-white flex flex-col items-center text-center space-y-2
                        lg:items-start lg:text-left
                    ">
                        <p className="text-xs font-bold">VAMOS EVOLUIR JUNTOS?</p>

                        <h2 className="
                            text-2xl sm:text-3xl lg:text-4xl
                            font-extrabold leading-tight
                        ">
                            Receba um diagnóstico completo e um plano personalizado
                        </h2>

                        <p className="text-md">Fale com um espcecialista e descubra com levar seu negócio para o próximo nível.</p>
                    </div>

                    <div className="flex flex-col gap-3">
                        <a target="_blank" href="https://wa.me/5534988307190?text=Olá%20Henrique,%20vi%20seu%20perfil%20e%20gostaria%20de%20agendar%20um%20diagnóstico%20digital%20para%20minha%20empresa."
                            className="
                            w-full bg-[#00B95B] text-white flex items-center justify-center gap-3 font-bold 
                            py-3 px-5 rounded-xl text-sm sm:text-base lg:text-lg
                            hover:bg-[#009F4F] hover:scale-[1.02] transition-all duration-200
                        ">
                            <FaWhatsapp size={25} />
                            Quero falar no WhatsApp
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="/checklist-gratuito-presenca-digital/checklist.pdf" className="
                            w-full flex items-center justify-center bg-transparent border-2 border-white/70 text-white gap-3 font-bold
                            py-3 px-5 rounded-xl text-sm sm:text-base lg:text-lg
                            hover:bg-white/10 hover:border-white transition-all duration-200
                            ">
                            <FiDownload size={25} />
                            Baixar checklist gratuito
                        </a>
                    </div>

                </div>

            </div>

            <div id="contato" className="
                grid grid-cols-1 gap-6 py-6
                lg:grid-cols-3 lg:gap-4 lg:items-center
            ">

                <div className="flex items-center justify-center lg:justify-start">
                    <Image
                        src={logoImg}
                        alt="Logo image"
                        width={220}
                        className="w-25 sm:w-35 ml-5 h-auto"
                    />
                    <p className="text-[#002ba1] text-xs font-bold ml-[-20]">SOLUÇÕES DIGITAIS</p>
                </div>

                <nav className="
                    flex flex-wrap justify-center gap-4 text-[#002ba1] font-bold text-sm                    
                ">
                    <a href="#inicio">Início</a>
                    <a href="#diagnostico">Diagnóstico</a>
                    <a href="#beneficios">Benefícios</a>
                    <a href="#contato">Contato</a>
                </nav>

                <div className="flex items-center justify-center gap-5 lg:justify-end">

                    <a href="#">
                        <FaInstagram
                            size={20}
                            className="text-[#002ba1] hover:text-[#0340E9] hover:scale-110 transition-all"
                            aria-label="Instagram"
                        />
                    </a>
                    <a href="#">
                        <FaLinkedinIn
                            size={20}
                            className="text-[#002ba1] hover:text-[#0340E9] hover:scale-110 transition-all"
                            aria-label="LinkedIn"
                        />
                    </a>
                    <a href="#">
                        <FaXTwitter
                            size={20}
                            className="text-[#002ba1] hover:text-[#0340E9] hover:scale-110 transition-all"
                            aria-label="XTwitter"
                        />
                    </a>

                </div>
            </div>

            <div className="
                flex flex-col items-center gap-2 border-t border-gray-200 py-4 text-center text-xs text-gray-500
                lg:flex-row lg:justify-between lg:text-left
            ">
                <p>&copy; 2026 {"<hq />"} Soluções Digitais. Todos os direitos reservados.</p>
                <p>Soluções para negócios que querem crescer no digital.</p>
            </div>

        </footer>
    );
}