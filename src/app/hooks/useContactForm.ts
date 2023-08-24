import { TSendEmailForm } from "@/types/index";
import { SendEmailSchema } from "@/utils/schemas/contact";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
// import { POST } from "@/api/send/route";

// import { EmailTemplate } from '@/components/EmailTemplate';
// import { TSendEmailForm } from '@/types/index';
// import { NextResponse } from 'next/server';
// import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST({ email, name, phone, company, message }: TSendEmailForm) {
//     try {
//         const data = await resend.emails.send({
//             from: `${name} <${email}>`,
//             to: ['eliana.guerrero.arq@gmail.com'],
//             subject: `Contacto a través del portafolio - ${name}`,
//             text: undefined as any,
//             react: EmailTemplate({name,
//                 email,
//                 company,
//                 phone,
//                 message})
//         });

//         return NextResponse.json(data);
//     } catch (error) {
//         return NextResponse.json({ error });
//     }
// }


const defaultValues:TSendEmailForm = {
    email: '',
    message: '',
    name: '',
    phone: ''
};

export const useContactForm = () => {
    const formMethods = useForm({
        defaultValues,
        resolver: yupResolver(SendEmailSchema)
    });

    const onSubmit = async (formValues: TSendEmailForm) => {
        console.log(formValues);
        // try {
        //     const response = await POST(formValues);
        //     console.log(response);
        // } catch (error) {
        //     console.log(error);
        // }
    };

    return {
        formMethods,
        onSubmit
    };
};
