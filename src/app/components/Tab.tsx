import { ETabKeyIcon } from "@/types/index";
import { GoGoal } from 'react-icons/go';
import { MdCalendarMonth, MdLocationPin, MdOutlineTitle } from 'react-icons/md';

type Props = {
    title: string,
    keyIcon: ETabKeyIcon
}

export const Tab = ({title, keyIcon}: TProps) => {
    const ICONS = {
        [ETabKeyIcon.title]: <MdOutlineTitle />,
        [ETabKeyIcon.location]: <MdLocationPin />,
        [ETabKeyIcon.year]: <MdCalendarMonth />,
        [ETabKeyIcon.goal]: <GoGoal />
    };
    return (
        <span className="inline-flex bg-dravys-gray bg-opacity-40 items-center py-2 px-3 rounded-full text-isabelline gap-1 text-xs">
            <span className="text-lg">{ICONS[keyIcon]}</span>
            {title}
        </span>
    );
};
