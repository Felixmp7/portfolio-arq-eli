/* eslint-disable max-len */
import { GET } from "@/api/projects/route";
import { BannerHeader } from "@/components/BannerHeader";
import ProjectCategory from "@/components/projects/ProjectCategory";

export default async function ProjectsPage() {
    const projects = await GET();
    const interiorDesigns = projects.slice(0, 4);
    const plans = projects.slice(5, 9);
    return (
        <>
            <BannerHeader bgClassName="bg-common-config bg-isabelline-700">
                <div className="px-10 py-5">
                    <h1 className='mb-5 text-4xl md:text-6xl font-semibold select-none'>Proyectos</h1>
                    <p className='max-w-md leading-5 md:max-w-xl md:leading-6 md:text-base mb-5'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                </div>
            </BannerHeader>
            <section className="pt-24">
                <ProjectCategory projects={interiorDesigns} />
            </section>
            <section className="pt-24">
                <ProjectCategory projects={plans} />
            </section>
        </>
    );
}