/* eslint-disable max-len */
import { BannerHeader } from "@/components/BannerHeader";
import { Carousel } from "@/components/Carousel";
import { Subtitle1 } from "@/components/Subtitle1";
import { Tab } from "@/components/Tab";
import { ETabKeyIcon } from "@/types/index";
import { renderDriveImage } from "@/utils/renderDriveImage";
import Image from "next/image";

const example = [
    {
        title: 'La Florida',
        src: renderDriveImage('https://drive.google.com/file/d/1p6646M4KG_3BeyMhBLe30xNVacyD3IpH/view?usp=drive_link')
    },
    {
        title: 'Santa Paula',
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
];

interface IProps {
    params: {
        id: string
    }
}

export default function Project({ params: { id }}: IProps) {
    return (
        <>
            <BannerHeader bgClassName="bg-home-banner">
                <h1 className='mb-5 select-none text-4xl md:text-6xl font-semibold'>Proyecto {id}</h1>
            </BannerHeader>
            <section className="grid grid-cols-2 items-center my-10">
                <div className="px-container">
                    <Subtitle1 className="mb-3">Resumen del proyecto</Subtitle1>
                    <p className="leading-relaxed font-light">
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of &quout;de Finibus Bonorum et Malorum&quout; (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, &quout;Lorem ipsum dolor sit amet...&quout;, comes from a line in section 1.10.32.
                    </p>
                </div>
                <div className="relative h-[540px]">
                    <Image
                        fill
                        className="object-cover"
                        src="/assets/banners/font.jpeg"
                        alt="alt"
                    />
                    <div className="relative bottom-0 left-0 right-0 py-4 px-4 top-0 grid content-end h-full">
                        <div className="flex gap-4 flex-wrap">
                            <Tab title="Santa Fé" keyIcon={ETabKeyIcon.title}/>
                            <Tab title="Caracas - VE" keyIcon={ETabKeyIcon.location}/>
                            <Tab title="2020" keyIcon={ETabKeyIcon.year}/>
                            <Tab title="Diseño y desarrollo de planos" keyIcon={ETabKeyIcon.goal}/>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <Carousel
                    loop
                    dragFree={false}
                    watchDrag={false}
                >
                    {example.map(({ src, title }) => {
                        return (
                            <div key={src} className="relative h-[400px] xl:h-[700px] w-full embla-slide flex-1">
                                <Image fill className="object-cover" src={src} alt={title} />
                            </div>
                        );
                    })}
                </Carousel>
            </section>
        </>
    );
}