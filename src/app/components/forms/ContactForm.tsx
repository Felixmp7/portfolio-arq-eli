'use client';

import { TextAreaField } from "@/components/fields/TextAreaField";
import { TextField } from "@/components/fields/TextField";
import { useContactForm } from "@/hooks/useContactForm";
import { BiSend } from 'react-icons/bi';

export const ContactForm = () => {
    const {
        emailSent,
        formMethods: {
            register, handleSubmit, formState:{
                errors, isSubmitting
            }
        }, onSubmit
    } = useContactForm();

    if (emailSent) return (
        <div className="px-10 sm:px-0 w-full sm:w-[600px] mx-auto my-10 grid sm:grid-cols-2 gap-5 sm:place-content-center">
            <div className="sm:col-span-2">
                <h2 className="text-2xl font-bold text-center">Gracias por contactarnos</h2>
                <p className="text-center">En breve nos pondremos en contacto con usted.</p>
            </div>
        </div>
    );

    return (
        <form className="px-10 sm:px-0 w-full sm:w-[600px] mx-auto my-10 grid sm:grid-cols-2 gap-5 sm:place-content-center" onSubmit={handleSubmit(onSubmit)}>
            <div>
                <TextField {...register('name')} label="Nombre" type="text" id="name" placeholder="Nombre" errorMessage={errors.name?.message} />
            </div>
            <div>
                <TextField {...register('phone')} label="Telefono" type="number" id="phone" placeholder="Telefono" errorMessage={errors.phone?.message} />
            </div>
            <div>
                <TextField {...register('email')} label="Email" type="email" id="email" placeholder="Email" errorMessage={errors.email?.message} />
            </div>
            <div>
                <TextField {...register('company')} label="Compañia" type="text" id="company" placeholder="Compañia" />
            </div>
            <div className="sm:col-span-2 h-40">
                <TextAreaField {...register('message')} id="message" placeholder="Mensaje" errorMessage={errors.message?.message} />
            </div>
            <div className="border sm:col-start-2">
                <button disabled={isSubmitting} type="submit" className="flex justify-center items-center gap-1 p-3 rounded bg-blue-munsel opacity-50 hover:opacity-100 duration-300 ease-in w-full text-white">
                    Enviar
                    <BiSend />
                </button>
            </div>
        </form>
    );
};
