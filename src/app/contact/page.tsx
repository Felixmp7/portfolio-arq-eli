/* eslint-disable max-len */
import { BannerHeader } from "@/components/BannerHeader";
import { ContactForm } from "@/components/forms/ContactForm";

export default function ContactPage() {
    return (
        <>
            <BannerHeader bgClassName="bg-common-config bg-blue-munsel">
                <div className="px-10 py-5">
                    <h1 className='mb-5 text-4xl md:text-6xl font-semibold select-none'>Contacto</h1>
                    <p className='max-w-md leading-5 md:max-w-xl md:leading-6 md:text-base mb-5'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>
            </BannerHeader>
            <ContactForm />
        </>
    );
}