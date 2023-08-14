import Link from 'next/link';

export const NavbarItems = () => {
    return (
        <>
            <li className="hover:underline">
                <Link href="/services">Servicios</Link>
            </li>
            <li className="hover:underline">
                <Link href="/projects">Proyectos</Link>
            </li>
            <li className="hover:underline">
                <Link href="/contact">Contacto</Link>
            </li>
        </>
    );
};