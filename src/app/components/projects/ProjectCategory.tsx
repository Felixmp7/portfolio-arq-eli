import { SectionTitle } from "@/components/SectionTitle";
import { ProjectItem } from "@/components/projects/ProjectItem";
import { TProjectDetails } from "@/types/index";
import clsx from "clsx";

const getGridClassnames = (index: number, className = '') => clsx({
    'relative': true,
    'md:col-span-5': index === 0 || index === 3,
    'md:col-span-3': index === 1 || index === 2,
    [className]: !!className
});

type TProps = {
    title: string,
    complement?: string,
    projects: TProjectDetails[]
}

const ProjectCategory = ({ projects, title, complement }: TProps) => {
    const noProjects = projects.length === 0;
    return (
        <>
            <SectionTitle title={title} complement={complement} className="ml-10 mb-12" />
            <div className="grid md:grid-cols-8 h-[800px] gap-1">
                {noProjects ? Array.from(Array(4).keys()).map((item, index) => (
                    <div key={item} className={getGridClassnames(index, 'bg-gray-300 animate-pulse')}  />
                )) :projects.map(({ id, title, images }, index) => {
                    if (index === 3) index = 0;
                    return (
                        <div key={id} className={getGridClassnames(index)}>
                            <ProjectItem title={title} src={images[0]} id={id} />
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default ProjectCategory;