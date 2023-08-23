import clsx from "clsx";

interface IProps {
    title: string
    complement?: string
    className?: string
}
export const SectionTitle = ({ title, complement, className = '' }: IProps) => {
    const classNames = clsx({
        "text-4xl uppercase font-semibold tracking-[.5rem]": true,
        [className]: !!className
    });
    return (
        <h2 className={classNames}>{title}
            {complement && (
                <span className="ml-6 text-redwood">{complement}</span>
            )}
        </h2>
    );
};
