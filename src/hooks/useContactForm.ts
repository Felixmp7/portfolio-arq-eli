'use client';

import { POST } from "@/api/send/route";
import { TSendEmailForm } from "@/types/index";
import { SendEmailSchema } from "@/utils/schemas/contact";
import { getEmailCookie } from "@/utils/serverActions";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const defaultValues:TSendEmailForm = {
    email: '',
    message: '',
    name: '',
    phone: ''
};

export const useContactForm = () => {
    const [emailSent, setEmailSent] = useState<boolean>(false);
    const formMethods = useForm({
        defaultValues,
        resolver: yupResolver(SendEmailSchema)
    });

    const onSubmit = async (formValues: TSendEmailForm) => {
        try {
            const response = await POST(formValues);
            console.log(response);
            // if (response.status === 200) {
            //     await setEmailCookie();
            //     if (!emailSent) {
            //         setEmailSent(true);
            //     }
            // }
        } catch (error) {
            console.log('error', error);
        }
    };

    const handleCheckEmailCookie = async () => {
        const cookie = await getEmailCookie();
        if (cookie) setEmailSent(true);
    };

    useEffect(() => {
        handleCheckEmailCookie();
    }, []);

    return {
        formMethods,
        emailSent,
        onSubmit
    };
};
