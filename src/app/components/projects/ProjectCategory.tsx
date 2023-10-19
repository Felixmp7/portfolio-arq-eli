import { SectionTitle } from "@/components/SectionTitle";
import { ProjectItem } from "@/components/projects/ProjectItem";
import { TProjectDetails } from "@/types/index";

type TProps = {
    title: string,
    complement?: string,
    projects: TProjectDetails[]
}

const ProjectCategory = ({ projects, title, complement }: TProps) => {
    return (
        <>
            <SectionTitle title={title} complement={complement} className="ml-10 mb-12" />
            <ul className="grid md:grid-cols-8 gap-4 projects-layout" >
                {projects.map(({ id, title, images }) => {
                    return (
                        <li key={id} className="h-[400px]">
                            <ProjectItem title={title} images={images} id={id} />
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default ProjectCategory;