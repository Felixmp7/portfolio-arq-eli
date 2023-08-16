import { BannerHeader } from "@/components/BannerHeader";
import { AboutResume } from "@/components/home/AboutResume";
import { Projects } from "@/components/home/Projects";
import { ServicesResume } from "@/components/home/ServicesResume";

export default function Home() {
    return (
        <>
            <BannerHeader bgClassName="bg-home-banner h-main-banner bg-home-config">
                <div className="px-10 py-5">
                    <h1 className='mb-5 select-none'>
                        <span className="text-4xl md:text-6xl font-semibold">Arquitecto</span>,
                        <br />
                        <span className="text-3xl md:text-5xl font-normal">diseñadora de interiores y
                            <br />
                            apasionada por la cocina.</span></h1>
                    <p className='max-w-md leading-5 md:max-w-xl md:leading-6 md:text-base mb-5'>
                        Hola, mi nombre es Eliana. Soy Arquitecto de Caracas, Venezuela. <br/> Tengo 26 años y me apasiona todo lo relacionado con planificación, diseño y desarrollo de proyectos de arquitectura.
                    </p>
                    <button className="h-10 border rounded-md hover:text-dravys-gray hover:bg-isabelline ease-in-out duration-300 px-4">Contratar</button>
                </div>
            </BannerHeader>
            <AboutResume />
            <Projects />
            <ServicesResume />
        </>
    );
}