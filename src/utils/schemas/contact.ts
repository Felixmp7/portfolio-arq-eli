import { TSendEmailForm } from '@/types/index';
import * as yup from 'yup';

export const SendEmailSchema: yup.ObjectSchema<TSendEmailForm> = yup.object().shape({
    name: yup.string().required('El nombre es requerido'),
    phone: yup.string().required('El teléfono es requerido'),
    email: yup.string().email('El email debe tener un formato válido').required('El email es requerido'),
    company: yup.string(),
    message: yup.string().required('El mensaje es requerido').min(30, 'El mensaje debe contener mínimo 30 caracteres')
});
