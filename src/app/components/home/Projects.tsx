import { SectionTitle } from "@/components/SectionTitle";
import { Carousel } from "@/components/carousel/Carousel";
import { Layer } from "@/components/carousel/Layer";
import { EProjectsCategory } from "@/types/index";
import { renderDriveImage } from "@/utils/renderDriveImage";

const example = [
    {
        title: 'Santa Fe',
        category: EProjectsCategory.bathrooms,
        src: renderDriveImage('https://drive.google.com/file/d/1NNQtOvry0U_vyizVTMV3gIuj26b8DNIV/view?usp=drive_link')
    },
    {
        title: 'Santa Fe',
        category: EProjectsCategory.bathrooms,
        src: renderDriveImage('https://drive.google.com/file/d/1j19c_kqMwtXmbqVl7uPLJ2zCSb3iURFw/view?usp=drive_link')

    },
    {
        title: 'Santa Fe',
        category: EProjectsCategory.bathrooms,
        src: renderDriveImage('https://drive.google.com/file/d/1IGR38RekYTSZu88LOuONPaHxRHwlg62X/view?usp=drive_link')

    },
    {
        title: 'Santa Fe',
        category: EProjectsCategory.bathrooms,
        src: renderDriveImage('https://drive.google.com/file/d/1D3zaJ8F2B63dcjt3FtHfq_Cn4QapTkfj/view?usp=drive_link')

    },
    {
        title: 'La Florida',
        category: EProjectsCategory.bedrooms,
        src: renderDriveImage('https://drive.google.com/file/d/1DcAQ8OgLUoz7a4yqqZLpTOCyPIpJIO5T/view?usp=drive_link')

    },
    {
        title: 'La Florida',
        category: EProjectsCategory.bedrooms,
        src: renderDriveImage('https://drive.google.com/file/d/1nOa39YnSfhE1LLHDWcmM3qpXZdnTHZ51/view?usp=drive_link')

    },
    {
        title: 'La Florida',
        category: EProjectsCategory.bedrooms,
        src: renderDriveImage('https://drive.google.com/file/d/1kOBa3lR2QMHHitsWXcroMfmDLN1QE4P5/view?usp=drive_link')

    },
    {
        title: 'La Florida',
        category: EProjectsCategory.kitchens,
        src: renderDriveImage('https://drive.google.com/file/d/1eWqETthnK_4AK9x_QG3aSVADK-KMHqVe/view?usp=drive_link')
    },
    {
        title: 'La Florida',
        category: EProjectsCategory.kitchens,
        src: renderDriveImage('https://drive.google.com/file/d/12LaQWo0_i0Zx5TKXGlA4b9C966fNU5g2/view?usp=drive_link')
    },
    {
        title: 'Las Mercedes',
        category: EProjectsCategory.kitchens,
        src: renderDriveImage('https://drive.google.com/file/d/1N1YV7noju5z38kD2ulNrY878H8tZOVy_/view?usp=drive_link')
    },
    {
        title: 'El hatillo',
        category: EProjectsCategory.architecture,
        src: renderDriveImage('https://drive.google.com/file/d/1VysQuVuUH7GYDZCrMTzteukdiJ583g7c/view?usp=drive_link')
    },
    {
        title: 'G5 Projects',
        category: EProjectsCategory.bedrooms,
        src: renderDriveImage('https://drive.google.com/file/d/1jgjDe8XlCapSTU-35Q3Yg1aZFtdOyNSC/view?usp=drive_link')
    }
];

export const Projects = () => {
    return (
        <section className="text-center py-10">
            <SectionTitle title="Mis" complement="Proyectos" />
            <div className="mt-10 text-isabelline-500 tracking-[.5rem] text-left overflow-hidden">
                <Carousel loop>
                    {example.map(({ category, src, title }) => {
                        return (
                            <div className="relative h-[700px] flex-[0_0_100%]" key={src}>
                                <Layer
                                    title={title}
                                    src={src}
                                    category={category} />
                            </div>
                        );
                    })}
                </Carousel>
            </div>
        </section>
    );
};

