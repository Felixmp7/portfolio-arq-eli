import { CTA } from "@/components/CTA";
import { Subtitle2 } from "@/components/Subtitle2";
import { TService } from "@/types/index";
import clsx from "clsx";
import Image from "next/image";

type Props =  TService & {
    isReverseLayout?:boolean
}

export const Service = ({ title, resume, isReverseLayout, src, howWeDoIt, whatIncludes }: TProps) => {
    const layoutClasses = clsx({
        'flex flex-col gap-y-10 md:gap-x-20 items-center md:flex-row z-20': true,
        'md:flex-row-reverse': isReverseLayout
    });

    return (
        <div className="py-container md:py-0 md:h-screen text-isabelline grid place-content-center px-container relative">
            <Image
                fill
                className="object-cover"
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
                <div className="bg-isabelline shadow-md rounded-md p-5 text-dravys-gray-500 max-w-md hover:scale-110 ease-in-out duration-75">
                    <Subtitle2 subtitle="¿Que incluye?" />
                    <ul className="mt-4 mb-8 font-light list-inside">{whatIncludes.map((item) => (
                        <li key={item}>- {item}</li>
                    ))}</ul>
                    <Subtitle2 subtitle="¿Cómo lo hacemos?" />
                    <ul className="mt-4 font-light list-inside">{howWeDoIt.map((item) => (
                        <li key={item}>- {item}</li>
                    ))}</ul>
                </div>
            </div>
        </div>
    );
};
