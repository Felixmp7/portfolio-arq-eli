/* eslint-disable max-len */
import { BannerHeader } from "@/components/BannerHeader";
import { SectionTitle } from "@/components/SectionTitle";
import { ProjectItem } from "@/components/projects/ProjectItem";
import clsx from "clsx";

const examples = [
    {
        id: 1,
        projectTitle: 'Santa Fé',
        image: '/assets/banners/bedroom.png'
    },
    {
        id: 2,
        projectTitle: 'Las Rosas',
        image: '/assets/banners/bedroom.png'
    },
    {
        id: 3,
        projectTitle: 'Santa Paula',
        image: '/assets/banners/bedroom.png'
    },
    {
        id: 4,
        projectTitle: 'Macaracuay',
        image: '/assets/banners/bedroom.png'
    },
    {
        id: 5,
        projectTitle: 'El Cafetal',
        image: '/assets/banners/bedroom.png'
    },
    {
        id: 6,
        projectTitle: 'La California',
        image: '/assets/banners/bedroom.png'
    },
    {
        id: 7,
        projectTitle: 'La Arboleda',
        image: '/assets/banners/bedroom.png'
    },
    {
        id: 8,
        projectTitle: 'Santa Sofia',
        image: '/assets/banners/bedroom.png'
    },
    {
        id: 9,
        projectTitle: 'Santa Fé',
        image: '/assets/banners/bedroom.png'
    },
    {
        id: 10,
        projectTitle: 'Bello Monte',
        image: '/assets/banners/bedroom.png'
    }
];

export default function ProjectsPage() {
    const interiorDesigns = examples.slice(0, 4);
    const plans = examples.slice(5, 9);
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
                <SectionTitle title="Diseño" complement="De interiores" className="ml-10 mb-16" />
                <div className="grid md:grid-cols-8 h-[800px] gap-1">
                    {interiorDesigns.map(({ id, image, projectTitle }, index) => {
                        const className = clsx({
                            'relative': true,
                            'md:col-span-5': index === 0 || index === 3,
                            'md:col-span-3': index === 1 || index === 2
                        });
                        if (index === 3) index = 0;
                        return (
                            <div key={id} className={className}>
                                <ProjectItem title={projectTitle} src={image} id={id} />
                            </div>
                        );
                    })}
                </div>
            </section>
            <section className="pt-24">
                <SectionTitle title="Planos" className="ml-10 mb-16" />
                <div className="grid md:grid-cols-8 h-[800px] gap-1">
                    {plans.map(({ id, image, projectTitle }, index) => {
                        const className = clsx({
                            'relative': true,
                            'md:col-span-5': index === 0 || index === 3,
                            'md:col-span-3': index === 1 || index === 2
                        });
                        if (index === 3) index = 0;
                        return (
                            <div key={id} className={className}>
                                <ProjectItem title={projectTitle} src={image} id={id} />
                            </div>
                        );
                    })}
                </div>
            </section>
        </>
    );
}