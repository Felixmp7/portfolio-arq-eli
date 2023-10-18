/* eslint-disable max-len */
import { SectionTitle } from "@/components/SectionTitle";
import { Subtitle2 } from "@/components/Subtitle2";
import Image from "next/image";

export const ServicesResume = () => {
    return (
        <section className="text-center py-10 px-10 sm:px-20 lg:px-40">
            <SectionTitle title="Mis" complement="Servicios" />
            <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-10 sm:gap-20 mt-12 text-left">
                <div className="text-7xl">
                    <Image
                        src="/assets/svg-icons/pencil-rule.svg"
                        alt="Buildings"
                        className="mb-4"
                        width={70}
                        height={70}
                    />
                    <Subtitle2 subtitle="Diseño de interiores" />
                    <p className="text-gray-500 leading-6 text-sm mt-3">
                        Planificamos y coordinamos el diseño del espacio que necesites.
                    </p>
                </div>
                <div className="text-7xl">
                    <Image
                        src="/assets/svg-icons/plans-house.svg"
                        alt="Buildings"
                        className="mb-4"
                        width={70}
                        height={70}
                    />
                    <Subtitle2 subtitle="Planos" />
                    <p className="text-gray-500 leading-6 text-sm mt-3">
                        Digitalizamos tus sketches, dibujos de carpintería o el espacio que desees en AutoCAD.
                    </p>
                </div>
                <div className="text-7xl">
                    <Image
                        src="/assets/svg-icons/3d.svg"
                        alt="Buildings"
                        className="mb-4"
                        width={70}
                        height={70}
                    />
                    <Subtitle2 subtitle="Modelado 3D" />
                    <p className="text-gray-500 leading-6 text-sm mt-3">
                        Modelamos el espacio que necesites, mediante planos 2D o imágenes de referencia.
                    </p>
                </div>
                <div className="text-7xl">
                    <Image
                        src="/assets/svg-icons/renders.svg"
                        alt="Buildings"
                        className="mb-4"
                        width={70}
                        height={70}
                    />
                    <Subtitle2 subtitle="Renders" />
                    <p className="text-gray-500 leading-6 text-sm mt-3">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>
            </div>
        </section>
    );
};

