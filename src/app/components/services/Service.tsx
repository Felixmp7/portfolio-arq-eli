import { CTA } from "@/components/CTA";
import { Subtitle2 } from "@/components/Subtitle2";
import clsx from "clsx";
import Image from "next/image";

interface IProps {
    title: string;
    resume: string;
    description: string;
    src: string,
    isReverseLayout?:boolean
}

export const Service = ({ title, resume, description, isReverseLayout, src }: IProps) => {
    const layoutClasses = clsx({
        'flex flex-col gap-y-10 md:gap-x-20 items-center md:flex-row z-20': true,
        'md:flex-row-reverse': isReverseLayout
    });
    return (
        <div className="py-container md:py-0 md:h-screen text-isabelline grid place-content-center px-container relative">
            <Image
                fill
                src={src}
                alt={title}
            />
            <div className="absolute top-0 right-0 left-0 bottom-0 bg-black bg-opacity-60 z-10" />
            <div className={layoutClasses}>
                <div>
                    <h2 className="text-2xl md:text-4xl">{title}</h2>
                    <p className="md:text-base font-light max-w-md mb-3">{resume}</p>
                    <CTA />
                </div>
                <div className="bg-isabelline shadow-md rounded-md p-5 text-dravys-gray-500 max-w-md">
                    <Subtitle2 subtitle="¿En qué consiste?" />
                    <p className="mt-4 mb-8 font-light">{description}</p>
                    <Subtitle2 subtitle="Pautas Generales" />
                    <p className="mt-4 font-light">{description}</p>
                </div>
            </div>
        </div>
    );
};
