'use client';

import { TSendEmailForm } from "@/types/index";
import { SendEmailSchema } from "@/utils/schemas/contact";
import { getEmailCookie, setEmailCookie } from "@/utils/serverActions";
import { postSendEmail } from "@/utils/services";
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
            const response = await postSendEmail(formValues);
            if (response.id) {
                await setEmailCookie();
                if (!emailSent) {
                    setEmailSent(true);
                }
            }
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
