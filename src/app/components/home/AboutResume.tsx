/* eslint-disable max-len */
import { SectionTitle } from "@/components/SectionTitle";
import { Subtitle1 } from "@/components/Subtitle1";
import { Subtitle2 } from "@/components/Subtitle2";
import Image from "next/image";
import { PiBuildingsThin, PiCompassToolThin, PiWarehouseThin } from 'react-icons/pi';

export const AboutResume = () => {
    return (
        <section className="text-center py-10 px-10 sm:px-20 lg:px-40">
            <SectionTitle title="Sobre" complement="EAGV" />
            <div className="xl:flex xl:justify-between xl:gap-20 mt-12 text-left">
                <div className="xl:mb-0 mb-10">
                    <Subtitle1>transformamos ideas en <br /> piezas de arte</Subtitle1>
                    <p className="text-gray-500 leading-6 mt-4 xl:max-w-xs">
                        Desde la creación de hogares acogedores y personalizados hasta el diseño de espacios
                        comerciales dinámicos y cautivadores, me dedico a hacer realidad las visiones de mis clientes. Creo que cada espacio tiene una historia que contar y mi función es darle voz a través de un diseño bien pensado. Para mi cada proyecto es una oportunidad para combinar forma y función, equilibrar lo estético y lo practico e infundir creatividad en cada uno de los elementos que lo conforman.
                    </p>
                </div>
                <div>
                    <Subtitle1>nuestra <br /> especialización</Subtitle1>
                    <div className="grid place-content-center sm:place-content-start sm:flex sm:items-end sm:gap-10 xl:block">
                        <div className="text-5xl my-4 text-isabelline-800">
                            <PiBuildingsThin />
                            <Subtitle2 subtitle="Arquitectura" />
                        </div>
                        <div className="text-5xl mb-4 text-redwood">
                            <PiWarehouseThin />
                            <Subtitle2 subtitle="Interiores" />
                        </div>
                        <div className="text-5xl mb-4 text-blue-munsel">
                            <PiCompassToolThin />
                            <Subtitle2 subtitle="Planos" />
                        </div>
                    </div>
                </div>
                <div className="hidden xl:block max-w-sm w-full h-80 relative">
                    <Image
                        fill
                        src="/assets/about.jpeg"
                        alt="Buildings"
                    />
                </div>
            </div>
        </section>
    );
};

