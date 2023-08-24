import Image from "next/image";
import Link from "next/link";
import { PiArrowRightLight } from 'react-icons/pi';

interface IProps {
    id: number,
    title: string;
    src: string,
}

export const ProjectItem = ({ title, src, id }: IProps) => {
    return (
        <div  className="h-full w-full text-isabelline">
            <Image
                className="object-cover object-center"
                fill
                src={src}
                alt={title}
            />
            <Link href={`/projects/${id}`} className="absolute top-0 right-0 left-0 bottom-0 py-container hover:bg-opacity-10 bg-black bg-opacity-60 px-container grid place-content-center text-4xl">
                <span className="flex items-center gap-2">{title} <PiArrowRightLight /></span>
            </Link>
        </div>
    );
};
