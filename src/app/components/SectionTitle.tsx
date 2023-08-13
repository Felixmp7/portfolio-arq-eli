interface IProps {
    title: string
    complement: string
}
export const SectionTitle = ({ title, complement }: IProps) => {
    return (
        <h2 className="text-4xl uppercase font-semibold tracking-[.5rem]">{title}
            <span className="ml-6 text-redwood">{complement}</span>
        </h2>
    );
};
