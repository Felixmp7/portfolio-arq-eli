import { GET } from "@/api/route";
import { Carousel } from "@/components/Carousel";
import { SectionTitle } from "@/components/SectionTitle";
import { ProjectLayer } from "@/components/home/ProjectLayer";

export const Projects = async () => {
    const trendingProjects = await GET();
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
                    {trendingProjects.map(({ id, src, title }) => {
                        return (
                            <div key={id} className="relative h-[400px] xl:h-[700px] w-full embla-slide flex-[0_0_25%]">
                                <ProjectLayer title={title} src={src} />
                            </div>
                        );
                    })}
                </Carousel>
            </div>
        </section>
    );
};

