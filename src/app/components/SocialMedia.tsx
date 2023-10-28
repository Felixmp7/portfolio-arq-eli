'use client';

import Link from 'next/link';
import { IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io5';
import { SiGoogledrive } from 'react-icons/si';

export const SocialMedia = () => {
    return (
        <ul className='inline-flex items-center text-2xl gap-x-3'>
            <li>
                <Link href="www.linkedin.com/in/eliana-guerrero-v" target='_blank'>
                    <IoLogoLinkedin />
                </Link>
            </li>
            <li>
                <Link href="https://www.instagram.com/elianagv_arq/" target='_blank'>
                    <IoLogoInstagram />
                </Link>
            </li>
            <li>
                <Link href="https://drive.google.com/drive/u/0/folders/1OI-_5oPJcomQ6drZMP453mJLX5IRXjp8" target='_blank'>
                    <SiGoogledrive />
                </Link>
            </li>
        </ul>

    );
};
