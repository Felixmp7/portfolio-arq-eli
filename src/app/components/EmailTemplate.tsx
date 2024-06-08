import { SendEmailForm } from "@/types/index";

export const EmailTemplate: React.FC<Readonly<SendEmailForm>> = ({ name, message, phone, company, email }) => (
    <div>
        <h1>Hola, Eliana! He recibido el siguiente correo desde tu portafolio:</h1>
        <br />

        <p className="text-xs pl-2">{`"${message}"`}</p>

        <br />
        <h2>Datos enviados desde el portafolio:</h2>
        <ul className="text-xs space-y-1 pl-2">
            <li>{`Nombre: ${name}`}</li>
            <li>{`Teléfono: ${phone}`}</li>
            <li>{`Email: ${email}`}</li>
            {company && (
                <li>{`Compañia: ${company}`}</li>
            )}
        </ul>
    </div>
);
