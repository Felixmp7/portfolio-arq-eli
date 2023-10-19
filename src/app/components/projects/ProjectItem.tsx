'use client';

import { Carousel } from "@/components/Carousel";
import Modal from "@/components/Modal";
import Image from "next/image";
import { useState } from "react";
import { PiArrowRightLight } from 'react-icons/pi';

interface IProps {
    id: number,
    title: string;
    images: string[],
}

export const ProjectItem = ({ title, images }: IProps) => {
    const [isOpened, setIsOpened] = useState(false);
    return (
        <>
            <div  className="h-full w-full text-isabelline relative">
                <Image
                    className="object-cover object-center"
                    fill
                    src={images[0]}
                    alt={title}
                />
                <button className="absolute top-0 right-0 left-0 bottom-0 py-container bg-opacity-10 transition-all duration-150 ease-in bg-black hover:bg-opacity-60 px-container grid place-content-center text-4xl hover:text-inherit text-transparent" onClick={() => setIsOpened(true)}>
                    <span className="flex items-center gap-2">{title} <PiArrowRightLight /></span>
                </button>
            </div>
            {isOpened && (
                <Modal modalClasses="w-[90vw] md:w-2/3" onClickOutside={() => setIsOpened(false)}>
                    <Carousel
                        loop
                        dragFree={false}
                        watchDrag={false}
                    >
                        {images.map((src) => {
                            return (
                                <div key={src} className="relative flex-[0_0_100%] h-[300px] xl:h-[70vh] w-full">
                                    <Image
                                        fill
                                        className="object-contain"
                                        src={src}
                                        alt={`image of ${title} project`}
                                    />
                                </div>
                            );
                        })}
                    </Carousel>
                </Modal>
            )}
        </>
    );
};
