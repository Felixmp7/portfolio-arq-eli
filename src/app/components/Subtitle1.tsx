import { ReactNode } from "react";

interface IProps {
    children: ReactNode
}
export const Subtitle1 = ({ children }: IProps) => {
    return (
        <h2 className="font-bold text-xl leading-6">{children}</h2>
    );
};
