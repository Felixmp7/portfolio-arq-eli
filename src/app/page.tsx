
export default function Home() {
    return (
        <>
            <header className="bg-main-banner h-[80vh]">
                <div className="bg-black bg-opacity-40 text-isabelline w-full h-full pt-20 grid place-content-center">
                    <div className="px-10 py-5">
                        <h1 className='mb-5 select-none'>
                            <span className="text-6xl font-semibold">Arquitecto</span>,
                            <br />
                            <span className="text-5xl font-normal">diseñadora de interiores y
                                <br />
                                apasionada por la cocina.</span></h1>
                        <p className='max-w-md leading-5 md:max-w-xl md:leading-6 text-base mb-5'>
                            Hola, mi nombre es Eliana. Soy Arquitecto de Caracas, Venezuela. <br/> Tengo 26 años y me apasiona todo lo relacionado con planificación, diseño y desarrollo de proyectos de arquitectura.
                        </p>
                        <button className="h-10 border rounded-md hover:text-dravys-gray hover:bg-isabelline ease-in-out duration-300 px-4">Contratar</button>
                    </div>
                </div>
            </header>
        </>
    );
}
