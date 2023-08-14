'use client';

import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import { PropsWithChildren } from "react";

type TProps = PropsWithChildren & EmblaOptionsType;

export const Carousel = ({ children, ...options }: TProps) => {
    const [emblaRef] = useEmblaCarousel(options);

    return (
        <div ref={emblaRef}>
            <div className="flex">{children}</div>
        </div>
    );
};
