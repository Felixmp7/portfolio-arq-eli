import { BannerHeader } from "@/components/BannerHeader";
import { CTA } from "@/components/CTA";
import { DownloadCVButton } from "@/components/DownloadCVButton";
import { AboutResume } from "@/components/home/AboutResume";
import { Projects } from "@/components/home/Projects";
import { ServicesResume } from "@/components/home/ServicesResume";
import { getYearsAgo } from "@/utils/timeAgo";

export default function HomePage() {

    const age = getYearsAgo(new Date(1996, 11, 9));
    const yearsOfExperience = getYearsAgo(new Date(2021, 4, 1));

    return (
        <>
            <BannerHeader bgClassName="bg-home-banner">
                <div className="px-10 py-5">
                    <h1 className='mb-5 select-none'>
                        <span className="text-3xl sm:text-4xl md:text-6xl font-semibold">Arquitecto</span>,
                        <br />
                        <span className="text-xl sm:text-3xl md:text-5xl font-normal">diseñadora de interiores y
                            <br className="hidden md:block" />
                            <span className="ml-1 md:ml-0">apasionada por la cocina.</span>
                        </span>
                    </h1>
                    <p className='max-w-md leading-5 md:max-w-xl md:leading-6 md:text-base mb-5'>
                        Hola, mi nombre es Eliana Guerrero, Arquitecto e Interiorista de <span>{age}</span> años
                        residenciada en Caracas, Venezuela con +<span>{yearsOfExperience}</span> años de experiencia en la industria.
                        <br />
                        <br />
                        Mi objetivo es transformar espacios en entornos únicos, funcionales y estéticamente agradables. Al explorar mi portafolio, encontraran una colección de proyectos que reflejan mi estilo, pasión y dedicación en el arte del diseño de interiores.
                    </p>
                    <footer className="flex gap-4">
                        <CTA />
                        <DownloadCVButton />
                    </footer>
                </div>
            </BannerHeader>
            <AboutResume />
            <Projects />
            <ServicesResume />
        </>
    );
}