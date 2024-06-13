import { BannerHeader } from "@/components/BannerHeader";
import { Service } from "@/components/services/Service";
import { getServices } from "@/utils/services";

export default async function ServicesPage() {
    const services = await getServices();
    return (
        <>
            <BannerHeader bgClassName="bg-common-config bg-blue-munsel">
                <div className="px-10 py-5">
                    <h1 className='mb-5 text-4xl md:text-6xl font-semibold select-none'>Servicios</h1>
                    <p className='max-w-md leading-5 md:max-w-xl md:leading-6 md:text-base mb-5'>
                        En EAGV ofrecemos distintos servicios en el área de arquitectura y diseño, para poder llevar a cabo el proyecto que desees, en donde aplicamos todos nuestros conocimientos y creatividad para llevar acabo el proyecto de tus sueños.
                    </p>
                </div>
            </BannerHeader>
            {services.map((service, index) => (
                <Service
                    {...service}
                    key={service.id}
                    isReverseLayout={index % 2 !== 0}
                />
            ))}
        </>
    );
}