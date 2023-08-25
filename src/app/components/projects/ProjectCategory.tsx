import { SectionTitle } from "@/components/SectionTitle";
import { TProjectDetails } from "@/types/index";
import clsx from "clsx";
import { ProjectItem } from "./ProjectItem";

type TProps = {
    projects: TProjectDetails[]
}

const ProjectCategory = ({ projects }: TProps) => {
    return (
        <>
            <SectionTitle title="Diseño" complement="De interiores" className="ml-10 mb-16" />
            <div className="grid md:grid-cols-8 h-[800px] gap-1">
                {projects.map(({ id, title, images }, index) => {
                    const className = clsx({
                        'relative': true,
                        'md:col-span-5': index === 0 || index === 3,
                        'md:col-span-3': index === 1 || index === 2
                    });
                    if (index === 3) index = 0;
                    return (
                        <div key={id} className={className}>
                            <ProjectItem title={title} src={images[0]} id={id} />
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default ProjectCategory;