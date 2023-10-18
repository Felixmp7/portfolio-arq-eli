import { SectionTitle } from "@/components/SectionTitle";
import { ProjectItem } from "@/components/projects/ProjectItem";
import { TProjectDetails } from "@/types/index";

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
            <ul className="grid md:grid-cols-8 gap-1 projects-layout" >
                {noProjects ? Array.from(Array(8).keys()).map((item) => {
                    return (
                        <li key={item} className='bg-gray-400 animate-pulse h-[400px]'  />
                    );
                }) :projects.map(({ id, title, images }) => {
                    return (
                        <li key={id}>
                            <ProjectItem title={title} src={images[0]} id={id} />
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default ProjectCategory;