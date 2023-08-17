import { TSendEmailForm } from "@/types/index";
import { SendEmailSchema } from "@/utils/schemas/contact";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
// import { postSendContactEmail } from "@/api/send/route";

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
        //     const response = await postSendContactEmail(formValues);
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
