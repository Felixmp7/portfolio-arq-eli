import { NavbarItems } from '@/components/navbar/NavbarItems';
import { SocialMedia } from './SocialMedia';

export const Footer = () => {
    return (
        <footer className='flex flex-col py-6 sm:pb-0 items-center sm:h-20 space-y-4 sm:space-y-0 sm:flex-row sm:justify-between px-container border-t border-t-dravys-gray-500 border-opacity-20'>
            <ul className="flex gap-8 py-3">
                <NavbarItems />
            </ul>
            <span className='flex items-center space-x-3'>
                <SocialMedia />
                <span className='text-zinc-400'>Powered by Felix Pacheco | 2023</span>
            </span>
        </footer>
    );
};
