interface IProps {
    subtitle: string
    color?: string
}
export const Subtitle2 = ({ subtitle, color }: IProps) => {
    return (
        <h3 className={`font-bold text-sm leading-none uppercase tracking-widest ${color || ''}`}>{subtitle}</h3>
    );
};
