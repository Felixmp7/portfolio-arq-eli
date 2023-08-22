import { SectionTitle } from "@/components/SectionTitle";
import { Layer } from "@/components/carousel/Layer";
import { EProjectsCategory } from "@/types/index";
import { renderDriveImage } from "@/utils/renderDriveImage";
import { Carousel } from "../carousel/Carousel";

const example = [
    {
        title: 'La Florida',
        src: renderDriveImage('https://drive.google.com/file/d/1p6646M4KG_3BeyMhBLe30xNVacyD3IpH/view?usp=drive_link')
    },
    {
        title: 'Santa Paula',
        category: EProjectsCategory.bathrooms,
        src: renderDriveImage('https://drive.google.com/file/d/1po6SsgDwqzM_xEQsgKMmauFUkD8w3IBq/view?usp=drive_link')

    },
    {
        title: 'Santa Rosa',
        src: renderDriveImage('https://drive.google.com/file/d/1khRftHtFvUvDmKjplB1oPrYXTvaVz_kl/view?usp=drive_link')

    },
    {
        title: 'OF. Vestier',
        src: renderDriveImage('https://drive.google.com/file/d/1K3BALlYC5zPuzQsxD7xgIFfMdftljmeg/view?usp=drive_link')

    },
    {
        title: 'Santa Fe',
        src: renderDriveImage('https://drive.google.com/file/d/1nOa39YnSfhE1LLHDWcmM3qpXZdnTHZ51/view?usp=drive_link')

    },
    {
        title: 'Quinta Irene',
        src: renderDriveImage('https://drive.google.com/file/d/1XvQNZOoVCjXAEJk8ENiI3ag1THCz3sfC/view?usp=drive_link')

    },
    {
        title: 'Sebucan',
        src: renderDriveImage('https://drive.google.com/file/d/12tf_okZ7i85J5O_VIRnodlzvyfk6gDno/view?usp=drive_link')
    },
    {
        title: 'Sebucan',
        src: renderDriveImage('https://drive.google.com/file/d/1K3BALlYC5zPuzQsxD7xgIFfMdftljmeg/view?usp=drive_link')
    }
    // {
    //     title: 'La Florida',
    //     category: EProjectsCategory.kitchens,
    //     src: renderDriveImage('https://drive.google.com/file/d/12LaQWo0_i0Zx5TKXGlA4b9C966fNU5g2/view?usp=drive_link')
    // },
    // {
    //     title: 'Las Mercedes',
    //     category: EProjectsCategory.kitchens,
    //     src: renderDriveImage('https://drive.google.com/file/d/1N1YV7noju5z38kD2ulNrY878H8tZOVy_/view?usp=drive_link')
    // },
    // {
    //     title: 'El hatillo',
    //     category: EProjectsCategory.architecture,
    //     src: renderDriveImage('https://drive.google.com/file/d/1VysQuVuUH7GYDZCrMTzteukdiJ583g7c/view?usp=drive_link')
    // },
    // {
    //     title: 'G5 Projects',
    //     category: EProjectsCategory.bedrooms,
    //     src: renderDriveImage('https://drive.google.com/file/d/1jgjDe8XlCapSTU-35Q3Yg1aZFtdOyNSC/view?usp=drive_link')
    // }
];

export const Projects = () => {
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
                    {example.map(({ src, title }) => {
                        return (
                            <div className="relative h-[400px] xl:h-[700px] w-full embla-slide" key={src}>
                                <Layer title={title} src={src} />
                            </div>
                        );
                    })}
                </Carousel>
            </div>
        </section>
    );
};

