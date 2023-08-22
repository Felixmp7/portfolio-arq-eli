import Image from "next/image";

interface IProps {
    title: string,
    src: string,
}

export const Layer = ({ title, src }: IProps) => {
    return (
        <>
            <Image fill className="object-cover" src={src} alt={title} />
            <div className="bg-dravys-gray-700 absolute hover:bg-opacity-0 top-0 right-0 left-0 bottom-0 bg-opacity-50">
                <div className="relative w-full h-full">
                    <span className="italic inline-block absolute bottom-5 right-5 text-lg tracking-widest uppercase font-extralight">
                        {title}
                    </span>
                </div>
            </div>
        </>
    );
};
