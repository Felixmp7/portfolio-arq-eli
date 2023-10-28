import { NavbarItems } from '@/components/navbar/NavbarItems';
import { SocialMedia } from './SocialMedia';

export const Footer = () => {
    return (
        <footer className='flex flex-col py-6 items-center space-y-4 md:space-y-0 md:flex-row md:justify-between px-container border-t border-t-dravys-gray-500 border-opacity-20'>
            <ul className="flex gap-8 py-3">
                <NavbarItems />
            </ul>
            <span className='flex flex-col sm:flex-row items-center space-x-3'>
                <SocialMedia />
                <span className='text-xs text-zinc-400'>Powered by Felix Pacheco | 2023</span>
            </span>
        </footer>
    );
};
