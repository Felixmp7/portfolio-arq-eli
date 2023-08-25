import clsx from "clsx";

interface IProps {
    subtitle: string
    className?: string
}
export const Subtitle2 = ({ subtitle, className = '' }: IProps) => {
    const classes = clsx({
        'font-bold text-sm leading-none uppercase tracking-widest': true,
        [className]: !!className
    });
    return (
        <h3 className={classes}>{subtitle}</h3>
    );
};
