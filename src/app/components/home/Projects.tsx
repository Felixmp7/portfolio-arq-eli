import { Carousel } from "@/components/Carousel";
import { SectionTitle } from "@/components/SectionTitle";
import { ProjectLayer } from "@/components/home/ProjectLayer";
import { getProjects } from "@/utils/services";

export const Projects = async () => {
    const projects = await getProjects();
    const trendingProjects = projects.filter(({ trendingPicture }) => trendingPicture);

    return (
        <section className="text-center py-10 select-none">
            <SectionTitle title="Mis" complement="Proyectos" />
            <div className="mt-10 text-isabelline-500 overflow-hidden">
                <Carousel
                    loop
                    dragFree={false}
                    watchDrag={false}
                    slidesToScroll={4}
                    breakpoints={{
                        '(max-width: 768px)': { slidesToScroll: 2 }
                    }}
                >
                    {trendingProjects.map(({ id, trendingPicture, title }) => {
                        return (
                            <div key={id} className="relative h-[400px] xl:h-[700px] w-full embla-slide flex-[0_0_25%]">
                                <ProjectLayer title={title} src={trendingPicture as string} />
                            </div>
                        );
                    })}
                </Carousel>
            </div>
        </section>
    );
};

