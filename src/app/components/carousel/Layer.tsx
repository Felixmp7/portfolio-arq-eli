import Image from "next/image";
import { EProjectsCategory } from "src/types";

interface IProps {
    title: string,
    category: EProjectsCategory
    src: string,
}

export const Layer = ({ title, category, src }: IProps) => {
    return (
        <>
            <Image fill className="object-cover" src={src} alt={title} />
            <div className="bg-dravys-gray-700 absolute top-0 right-0 left-0 bottom-0 bg-opacity-50" />
            <h4 className="uppercase text-xl tracking-widest absolute top-0 p-10">{title}</h4>
            <span className="italic inline-block absolute -rotate-90 bottom-36 xl:bottom-48 -left-16 tracking-[1rem] text-xs uppercase">
                {category}
            </span>
        </>
    );
};
