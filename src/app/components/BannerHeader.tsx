import { ReactNode } from "react";

interface IProps {
    bgClassName: string,
    children: ReactNode
}

export const BannerHeader = ({ bgClassName, children }: IProps) => {
    return (
        <header className={bgClassName}>
            <div className="bg-black bg-opacity-60 text-isabelline w-full h-full pt-20 grid place-content-center">
                {children}
            </div>
        </header>
    );
};
