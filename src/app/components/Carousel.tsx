'use client';

import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import { PropsWithChildren } from "react";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import { useCarousel } from "src/hooks/useCarousel";

type TProps = PropsWithChildren & EmblaOptionsType;

export const Carousel = ({ children, ...options }: TProps) => {
    const [emblaRef, emblaAPI] = useEmblaCarousel(options);
    const { onNextButtonClick, onPrevButtonClick } = useCarousel(emblaAPI);

    return (
        <div ref={emblaRef} className="overflow-hidden relative">
            <div className="embla">{children}</div>
            <button className="text-2xl absolute top-0 bottom-0 left-0 pl-4 hover:text-opacity-100 text-opacity-40 text-isabelline" onClick={onPrevButtonClick}>
                <BsFillArrowLeftCircleFill />
            </button>
            <button className="text-2xl absolute top-0 bottom-0 right-0 pr-4 hover:text-opacity-100 text-opacity-40 text-isabelline" onClick={onNextButtonClick}>
                <BsFillArrowRightCircleFill />
            </button>
        </div>
    );
};
