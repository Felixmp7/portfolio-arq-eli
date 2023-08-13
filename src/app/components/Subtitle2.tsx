
interface IProps {
    subtitle: string
}
export const Subtitle2 = ({ subtitle }: IProps) => {
    return (
        <h3 className="font-bold text-sm text-inherit leading-none uppercase tracking-widest">{subtitle}</h3>
    );
};
