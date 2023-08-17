import { TSendEmailForm } from "@/types/index";

export const EmailTemplate: React.FC<Readonly<TSendEmailForm>> = ({ name, message, phone, company, email }) => (
    <div>
        <h1>Hola, Eliana!</h1>
        <span>{`Mi nombre es ${name}`}</span>
        <p>{message}</p>
        <br />
        <h2>Datos enviados desde el portafolio:</h2>
        <ul className="list-group">
            <li>{`Teléfono: ${phone}`}</li>
            <li>{`Email: ${email}`}</li>
            {company && (
                <li>{`Compañia: ${company}`}</li>
            )}
        </ul>
    </div>
);
