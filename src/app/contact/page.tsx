/* eslint-disable max-len */
import { BannerHeader } from "@/components/BannerHeader";
import { ContactForm } from "@/components/forms/ContactForm";

export default function ContactPage() {
    return (
        <>
            <BannerHeader bgClassName="bg-contact-banner h-common-banner bg-common-config">
                <div className="px-10 py-5">
                    <h1 className='mb-5 text-4xl md:text-6xl font-semibold select-none'>Contacto</h1>
                    <p className='max-w-md leading-5 md:max-w-xl md:leading-6 md:text-base mb-5'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                </div>
            </BannerHeader>
            <ContactForm />
        </>
    );
}