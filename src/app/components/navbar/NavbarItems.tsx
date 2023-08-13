import Link from 'next/link';


export const NavbarItems = () => {
    return (
        <>
            <li className="duration-150 ease-in hover:text-dravys-gray">
                <Link href="/about">Acerca De</Link>
            </li>
            <li className="duration-150 ease-in hover:text-rose-taupe">
                <Link href="/projects">Proyectos</Link>
            </li>
            <li className="duration-150 ease-in hover:text-redwood">
                <Link href="/services">Servicios</Link>
            </li>
            <li className="duration-150 ease-in hover:text-indian-red">
                <Link href="/contact">Contacto</Link>
            </li>
        </>
    );
};