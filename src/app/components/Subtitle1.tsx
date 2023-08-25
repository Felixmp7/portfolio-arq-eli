import clsx from "clsx";
import { ReactNode } from "react";

interface IProps {
    children: ReactNode,
    className?: string
}
export const Subtitle1 = ({ children, className = '' }: IProps) => {
    const classes = clsx({
        'font-bold text-lg leading-6 sm:text-xl': true,
        [className]: !!className
    });
    return (
        <h2 className={classes}>{children}</h2>
    );
};
