'use client';

import { NavLink } from '@/types/index';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks: NavLink[] = [
    {
        id: 1,
        url: '/services',
        name: 'Servicios'
    },
    {
        id: 2,
        url: '/projects',
        name: 'Proyectos'
    }
];

export const NavbarItems = () => {
    const pathname = usePathname();

    const getLinkClasses = (currentLink: string) => clsx({
        'hover:underline': true,
        'underline font-semibold': pathname.includes(currentLink)
    });

    return (
        <>
            {navLinks.map(({ id, url, name }) => (
                <li key={id} className={getLinkClasses(url)}>
                    <Link href={url}>{name}</Link>
                </li>
            ))}
        </>
    );
};