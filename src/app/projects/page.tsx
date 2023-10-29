import { BannerHeader } from "@/components/BannerHeader";
import ProjectCategory from "@/components/projects/ProjectCategory";
import { getProjectDetails } from "@/utils/services";

export default async function ProjectsPage() {
    const projects = await getProjectDetails();
    return (
        <>
            <BannerHeader bgClassName="bg-common-config bg-isabelline-700">
                <div className="px-10 py-5">
                    <h1 className='mb-5 text-4xl md:text-6xl font-semibold select-none'>Proyectos</h1>
                    <p className='max-w-md leading-5 md:max-w-xl md:leading-6 md:text-base mb-5'>
                        En esta galería de imágenes te invito a conocer un poco más sobre el trabajo que he realizado como arquitecto e interiorista durante estos años de experiencia. En cada uno de los proyectos podrás ver los resultados que se pueden lograr a través de un plan de diseño bien ejecutado, el uso de materiales de alta calidad y un toque de ingenio creativo.
                    </p>
                </div>
            </BannerHeader>
            <section className="mt-24">
                <ProjectCategory title="Diseño de" complement="Interiores"  projects={projects} />
            </section>
        </>
    );
}