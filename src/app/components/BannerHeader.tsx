import clsx from "clsx";
import { ReactNode } from "react";

interface IProps {
    bgClassName: string,
    children: ReactNode
}

export const BannerHeader = ({ bgClassName, children }: IProps) => {
    const headerClasses = clsx({
        'h-[80vh]': true,
        [bgClassName]: !!bgClassName
    });

    return (
        <header className={headerClasses}>
            <div className="bg-black bg-opacity-40 text-isabelline w-full h-full pt-20 grid place-content-center">
                {children}
            </div>
        </header>
    );
};
