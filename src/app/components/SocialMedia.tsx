'use client';

import Link from 'next/link';
import { IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io5';
import { SiGoogledrive } from 'react-icons/si';

export const SocialMedia = () => {
    return (
        <ul className='inline-flex items-center text-2xl gap-x-3'>
            <li>
                <Link href="https://www.linkedin.com/in/felix-pacheco-30/" target='_blank'>
                    <IoLogoLinkedin />
                </Link>
            </li>
            <li>
                <Link href="https://github.com/Felixmp7" target='_blank'>
                    <IoLogoInstagram />
                </Link>
            </li>
            <li>
                <Link href="https://github.com/Felixmp7" target='_blank'>
                    <SiGoogledrive />
                </Link>
            </li>
        </ul>

    );
};
