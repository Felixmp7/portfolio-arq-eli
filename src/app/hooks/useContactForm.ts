import { TSendEmailForm } from "@/types/index";
import { SendEmailSchema } from "@/utils/schemas/contact";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

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

    const onSubmit = (formValues: TSendEmailForm) => {
        console.log(formValues);
    };

    return {
        formMethods,
        onSubmit
    };
};
