'use client';

import Image from 'next/image';
import Link from 'next/link';
import { NavbarItems } from './NavbarItems';

export const Navbar = () => {
    return (
        <nav className="flex items-center gap-5 justify-between">
            <Link href="/">
                <Image
                    priority
                    src="/assets/no-background-logos/horizontal-white.png"
                    alt="Eliana Guerrero Logo"
                    width={200}
                    height={80}
                />
            </Link>
            <ul className="flex gap-8 px-8 py-3 text-inherit">
                <NavbarItems />
            </ul>
        </nav>

    );
};
