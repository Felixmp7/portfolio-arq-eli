import { BannerHeader } from "@/components/BannerHeader";
import { CTA } from "@/components/CTA";
import { AboutResume } from "@/components/home/AboutResume";
import { Projects } from "@/components/home/Projects";
import { ServicesResume } from "@/components/home/ServicesResume";

export default function HomePage() {
    return (
        <>
            <BannerHeader bgClassName="bg-home-banner">
                <div className="px-10 py-5">
                    <h1 className='mb-5 select-none'>
                        <span className="text-4xl md:text-6xl font-semibold">Arquitecto</span>,
                        <br />
                        <span className="text-3xl md:text-5xl font-normal">diseñadora de interiores y
                            <br />
                            apasionada por la cocina.
                        </span>
                    </h1>
                    <p className='max-w-md leading-5 md:max-w-xl md:leading-6 md:text-base mb-5'>
                        Hola, mi nombre es Eliana Guerrero, arquitecto e interiorista de 26 años
                        residenciada en Caracas, Venezuela con +3 años de experiencia en la industria.
                        <br />
                        <br />
                        Mi objetivo es transformar espacios en entornos únicos, funcionales y estéticamente agradables. Al explorar mi portafolio, encontraran una colección de proyectos que reflejan mi estilo, pasión y dedicación en el arte del diseño de interiores.
                    </p>
                    <CTA />
                </div>
            </BannerHeader>
            <AboutResume />
            <Projects />
            <ServicesResume />
        </>
    );
}